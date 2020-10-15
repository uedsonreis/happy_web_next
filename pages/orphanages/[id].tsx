import { IconOptions } from "leaflet"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { FaWhatsapp } from "react-icons/fa"
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi"

import SideBar from "../../components/Map/SideBar"

const Map = dynamic(() => import('../../components/Map/ForOne'), { ssr: false })

const mapIcon: IconOptions = {
    iconUrl: '/marker.svg',
    popupAnchor: [0, -60],
    iconAnchor: [29, 68],
    iconSize: [58, 68],
}

export default function Orphanage() {
    const router = useRouter()
    const { id } = router.query

    return (
        <div id="page-orphanage">
            <SideBar />

            <main>
                <div className="orphanage-details">
                    <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />

                    <div className="images">
                        <button className="active" type="button">
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
                        </button>
                        <button type="button">
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
                        </button>
                        <button type="button">
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
                        </button>
                        <button type="button">
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
                        </button>
                        <button type="button">
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
                        </button>
                        <button type="button">
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
                        </button>
                    </div>

                    <div className="orphanage-details-content">
                        <h1>Lar das meninas</h1>
                        <p>Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.</p>

                        <div className="map-container">
                            <Map
                                latitude={-27.2092052} longitude={-49.6401092}
                                style={{ width: '100%', height: 280 }}
                                zoom={16} mapIcon={mapIcon}
                                scrollWheelZoom={false}
                                doubleClickZoom={false}
                                zoomControl={false}
                                touchZoom={false}
                                dragging={false}
                            />
                            <footer>
                                <a href="">Ver rotas no Google Maps</a>
                            </footer>
                        </div>

                        <hr />

                        <h2>Instruções para visita</h2>
                        <p>Venha como se sentir mais à vontade e traga muito amor para dar.</p>

                        <div className="open-details">
                            <div className="hour">
                                <FiClock size={32} color="#15B6D6" />
                                Segunda à Sexta <br />
                                8h às 18h
                            </div>
                            <div className="open-on-weekends">
                                <FiInfo size={32} color="#39CC83" />
                                Atendemos <br />
                                fim de semana
                            </div>
                        </div>

                        <button type="button" className="contact-button">
                            <FaWhatsapp size={20} color="#FFF" />
                            Entrar em contato
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}