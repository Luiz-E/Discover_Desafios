import "./style.css"

type props = {
    avatar_url: string
    nome: string
}

export default function({avatar_url,nome}: props) {
    
    return <div className="card user">
        <img src={avatar_url} alt="" />        
        <h1>{nome}</h1>
        <p>Studying web development</p>
    </div>
}