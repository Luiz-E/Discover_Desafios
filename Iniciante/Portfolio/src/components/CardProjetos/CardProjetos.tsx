import "./style.css"

type props = {
    url: string
}

export default function({url}: props) {
    return <div className="card" id="projetos">
        <h2>Meus Projetos</h2>
        <a href={url} target="_blank">Veja Todos</a>
    </div>
}