import { FormEvent, ChangeEvent, useState } from 'react'
import dynamic from 'next/dynamic'
import { IconOptions, LeafletMouseEvent } from 'leaflet'
import { FiPlus } from "react-icons/fi"

import SideBar from '../../components/Map/SideBar'
import { Orphanage } from '../../entities/orphanage'
import { Photo } from '../../entities/photo'
import { orphanageApi } from '../../services/api'
import { useRouter } from 'next/router'

const Map = dynamic(() => import('../../components/Map/ForOne'), { ssr: false })

const mapIcon: IconOptions = {
    iconUrl: '/marker.svg',
    popupAnchor: [0, -60],
    iconAnchor: [29, 68],
    iconSize: [58, 68],
}

export default function CreateOrphanage() {
    const router = useRouter()

    const [position, setPosition] = useState({latitude: 0, longitude: 0})
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [instructions, setInstructions] = useState('')
    const [visitHour, setVisitHour] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [weekend, setWeekend] = useState(false)
    const [files, setFiles] = useState<File[]>([])
    const [images, setImages] = useState<string[]>([])

    function handleMapClick(event: LeafletMouseEvent) {
        const { lat, lng } = event.latlng
        setPosition({ latitude: lat, longitude: lng })
    }

    function handlePhotos(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) return;

        const fileList = Array.from(event.target.files)
        setFiles(fileList)
        setImages(fileList.map(file => URL.createObjectURL(file)))
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        
        console.log({
            name, about, instructions, visitHour, weekend,
            latitude: position.latitude, longitude: position.longitude
        })
        
        const formData = new FormData()

        formData.append('name', name)
        formData.append('about', about)
        formData.append('visitHour', visitHour)
        formData.append('instructions', instructions)
        
        formData.append('weekend', String(weekend))
        formData.append('latitude', String(position.latitude))
        formData.append('longitude', String(position.longitude))
        formData.append('whatsapp', whatsapp)

        files.forEach(file => {
            formData.append('photos', file)
        })

        console.log('Form: ', formData)

        const orphanage = await orphanageApi.create(formData)
        router.push(`/orphanages/${orphanage.id}`)
    }

    return (
        <div id="page-create-orphanage">
            <SideBar />

            <main>
                <form className="create-orphanage-form" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados</legend>

                        <Map
                            onClick={handleMapClick}
                            latitude={position.latitude !== 0 ? position.latitude : -27.2092052}
                            longitude={position.longitude !== 0 ? position.longitude : -49.6401092}
                            hideMarker={(position.latitude === 0 && position.longitude === 0)}
                            style={{ width: '100%', height: 280 }} mapIcon={mapIcon} zoom={15}
                        >
                        </Map>

                        <div className="input-block">
                            <label htmlFor="name">Nome</label>
                            <input id="name" value={name} onChange={e => setName(e.target.value)} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
                            <textarea id="about" maxLength={300} value={about} onChange={e => setAbout(e.target.value)} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="images">Fotos</label>

                            <div className="photos-container">

                                {images.map(image => (
                                    <img key={image} src={image} alt={name} />
                                ))}

                                <label htmlFor="photo[]" className="new-image">
                                    <FiPlus size={24} color="#15b6d6" />
                                </label>
                            </div>

                            <input type="file" id="photo[]" multiple onChange={handlePhotos} />

                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Visitação</legend>

                        <div className="input-block">
                            <label htmlFor="instructions">Instruções</label>
                            <textarea id="instructions" value={instructions} onChange={e => setInstructions(e.target.value)} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="opening_hours">Horário</label>
                            <input id="opening_hours" value={visitHour} onChange={e => setVisitHour(e.target.value)} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input id="whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="open_on_weekends">Atende fim de semana</label>

                            <div className="button-select">
                                <button
                                    type="button" className={weekend ? 'active' : ''}
                                    onClick={() => setWeekend(true)}
                                >Sim</button>
                                <button
                                    type="button" className={weekend ? '' : 'active'}
                                    onClick={() => setWeekend(false)}
                                >Não</button>
                            </div>
                        </div>
                    </fieldset>

                    <button className="confirm-button" type="submit">
                        Confirmar
                    </button>
                </form>
            </main>
        </div>
    )
}
// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;