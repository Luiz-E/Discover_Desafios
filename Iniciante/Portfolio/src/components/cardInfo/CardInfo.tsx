import "./style.css"
import Gibhub from "../../assets/Github"
import MapPin from "../../assets/MapPin"

type props = {
    location: string
    url: string
}

export default function({location, url}: props) {
    return <div className="card info">
                <span><MapPin/>{location}</span>
                <span><Gibhub/><a href={url}>GitHub</a></span>
            </div>
}