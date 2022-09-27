import GitBranch from "../../assets/git-branch"
import Star from "../../assets/star"
import Folder from "../../assets/folder"

type repositorio = {
    repos: {
        name: string
        description: string
        language: string
        stargazers_count: string
        forks_count: string
    }
    color: string
}

export default function ({repos, color}: repositorio ) {
    return <div className="card repo">

            <span>
                <Folder/>
                <h3>{repos.name}</h3>
            </span>
            <p>{repos.description}</p>
            <div>
                <span>
                    <Star/>
                    <img src="" alt="" />
                    <p>{repos.stargazers_count}</p>
                    <GitBranch/>
                    <p>{repos.forks_count}</p>
                </span>
                <span>
                    <span className="lang-color" style={{backgroundColor: color}}></span>
                    <strong>{repos.language}</strong>
                </span>
            </div>
    </div>
}