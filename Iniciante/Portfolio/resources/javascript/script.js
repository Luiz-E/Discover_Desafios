const url = "https://api.github.com/users/Luiz-E"

async function getUserInfo() {
    const getMyInfo = await fetch(url)
    const myInfo = await getMyInfo.json()
    document.querySelector("img").src = myInfo.avatar_url
    document.querySelector("#local").textContent = myInfo.location
    document.querySelector("#email").textContent = myInfo.email
}

getUserInfo()
