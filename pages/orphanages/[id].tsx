import { IconOptions } from "leaflet"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi"

import SideBar from "../../components/Map/SideBar"
import { orphanageApi } from "../../services/api"

const URL_MAPS = 'https://www.google.com/maps/dir/?api=1&destination'

const Map = dynamic(() => import('../../components/Map/ForOne'), { ssr: false })

const mapIcon: IconOptions = {
    iconUrl: '/marker.svg',
    popupAnchor: [0, -60],
    iconAnchor: [29, 68],
    iconSize: [58, 68],
}

export default function OrphanagePage() {
    const router = useRouter()
    const { id } = router.query

    if (!id) return (<div>Page not found.</div>)

    const [orphanageId, setOrphanageId] = useState(Number(id))
    const [activePhotoIndex, setActivePhotoIndex] = useState(0)

    const orphanage = orphanageApi.getOne(orphanageId)
    if (!orphanage) return (<div>Loading...</div>)

    return (
        <div id="page-orphanage">
            <SideBar info={String(orphanageId)} />

            <main>
                <div className="orphanage-details">
                    <img
                        src={(orphanage.photos && orphanage.photos.length > 0)
                            ? orphanage.photos[activePhotoIndex].path
                            : "https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                        }
                        alt={orphanage.name}
                    />

                    <div className="images">
                        { orphanage.photos.map((photo, index) => (
                            <button
                                key={photo.id}
                                className={activePhotoIndex === index ? 'active' : ''}
                                type="button" onClick={() => setActivePhotoIndex(index)}
                            >
                                <img
                                    src={ (photo) ? photo.path : "https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"}
                                    alt={orphanage.name}
                                />
                            </button>
                        )) }
                    </div>

                    <div className="orphanage-details-content">
                        <h1>{orphanage.name}</h1>
                        <p>{orphanage.about}</p>

                        <div className="map-container">
                            <Map
                                latitude={orphanage.latitude} longitude={orphanage.longitude}
                                style={{ width: '100%', height: 280 }}
                                zoom={16} mapIcon={mapIcon}
                                scrollWheelZoom={false}
                                doubleClickZoom={false}
                                zoomControl={false}
                                touchZoom={false}
                                dragging={false}
                            />
                            <footer>
                                <a target="_blank" rel="noopener noreferrer" href={`${URL_MAPS}=${orphanage.latitude},${orphanage.longitude}`}>
                                    Ver rotas no Google Maps
                                </a>
                            </footer>
                        </div>

                        <hr />

                        <h2>Instruções para visita</h2>
                        <p>{orphanage.instructions}</p>

                        <div className="open-details">
                            <div className="hour">
                                <FiClock size={32} color="#15B6D6" />
                                Segunda à Sexta <br />
                                {orphanage.visitHour}
                            </div>
                            {orphanage.weekend ? (
                                <div className="open-on-weekends">
                                    <FiInfo size={32} color="#39CC83" />
                                    Atendemos <br />
                                    fim de semana
                                </div>
                            ) : (
                                <div className="not-open-on-weekends">
                                    <FiInfo size={32} color="#FF669D" />
                                    Não atendemos <br />
                                    fim de semana
                                </div>
                            )}
                        </div>

                        <button type="button" className="contact-button">
                            <FaWhatsapp size={20} color="#FFF" />
                            Entrar em contato: {orphanage.whatsapp}
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}