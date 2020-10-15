import { FiArrowLeft } from "react-icons/fi"
import Link from "next/link"

interface Props { info?: string }

export default function SideBar(props: Props) {
    return (
        <aside className="app-sidebar">
            <img src="/marker.svg" alt="Happy" />
            {props.info}
            <footer>
                <Link href="/orphanages" >
                    <a>
                        <FiArrowLeft size={24} color="#FFF" />
                    </a>
                </Link>
            </footer>
        </aside>
    )
}