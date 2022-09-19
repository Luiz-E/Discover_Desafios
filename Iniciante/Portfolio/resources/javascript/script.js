const url = "https://api.github.com/users/Luiz-E"

async function getUserImage() {
    const getMyInfo = await fetch(url)
    const myInfo = await getMyInfo.json()
    document.querySelector("img").src = myInfo.avatar_url
}

getUserImage()
