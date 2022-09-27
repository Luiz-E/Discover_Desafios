import { useEffect, useReducer, useState } from 'react'
import CardUser from './components/cardUser/CardUser'
import CardInfo from './components/cardInfo/CardInfo'
import CardTech from './components/cardTech/CardTech'
import CardExp from './components/CardExp/CardExp'
import CardRepos from './components/CardRepos/CardRepos'
import CardProjetos from './components/CardProjetos/CardProjetos'
import CardPosts from './components/CardPosts/CardPosts'
import './App.css'

type user = {
  name: string
  avatar_url: string
  location: string
  html_url: string
  repos_url: string
}

export default function() {

  const [userInfo, setUserInfo] = useState({} as user)

  useEffect(() => {
    fetch("https://api.github.com/users/Luiz-E")
    .then(data => data.json())
    .then(userInfo => setUserInfo(userInfo))
  }, [])

  return <div className='app'>
    <div className='esquerda'>
      <CardUser avatar_url={userInfo.avatar_url} nome={userInfo.name}/>
      <CardInfo location={userInfo.location} url={userInfo.html_url} />
      <CardTech/>
      <CardExp/>
    </div>
    <div className='direita'>
      <CardProjetos url={userInfo.html_url}/>
      <CardRepos repos_url={userInfo.repos_url}/>
      <CardPosts/>
      <div className="card"></div>
    </div>
  </div> 
}