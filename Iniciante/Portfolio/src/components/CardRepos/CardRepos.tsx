import { useEffect, useState } from "react"
import "./style.css"
import Repositorio from "./Repositorio"

type props = {
    repos_url: string
}

type repositorio = {
    repos: {
        name: string
        description: string
        language: string
        stargazers_count: string
        forks_count: string
    }
}

export default function ({repos_url}: props) {

    const [repositorios, setRepositorios ] = useState([])
    const [colors, setColors] = useState({})
        


    
    async function getUserRepos() {
        
        if (!repos_url) return
        let reqColors = await fetch("https://github-lang-deploy.herokuapp.com")
        const colors = await reqColors.json()
        setColors(colors)
        const requestRepos = await fetch(repos_url)
        const arrayRepos = await requestRepos.json()
        setRepositorios(arrayRepos)
    }

    useEffect(() => {
        getUserRepos()
    },[repos_url])

    return <div id="repos">
        {repositorios.map( (repos:repositorio["repos"], idx) => <Repositorio repos={{
            ...repos
        }} color={(colors as any)[repos.language].color} key={idx} {...repos}   />)}
    </div>
}