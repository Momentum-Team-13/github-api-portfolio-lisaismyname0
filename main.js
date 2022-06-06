// started in insomnia, now we want our javascript to do what insomnia did

let gitHubUrl = "https://api.github.com/users/lisaismyname0"

fetch(gitHubUrl, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
})
    .then(function (response) {
        // the response is the promised data
        return response.json()
    })
    .then(function (data) {
        // data refers to what the above promise returned (response.json())
        console.log("response from GitHub API: ", data.name)
        // console log the data
        console.log(data.avatar_url)

        buildProfile(data);
        // let profileData = data

    })

function buildProfile(profileData) {
    console.log(profileData)
    let containerElement = document.querySelector(".box")
    let profileElement = document.createElement("div")
    profileElement.classList.add("container")
    containerElement.appendChild(profileElement)


    let imageElement = document.createElement("img")
    imageElement.src = "https://avatars.githubusercontent.com/u/105607130?v=4"
    profileElement.appendChild(imageElement)

    let headerElement = document.getElementsByClassName("header")
    let nameElement = document.getElementById("nameBar")
    nameElement.innerText = `${profileData.name}`
    // headerElement.appendChild(nameElement)


    let bioElement = document.createElement("p")
    bioElement.classList.add("bio")
    bioElement.innerText = `${profileData.bio}`
    profileElement.appendChild(bioElement)

    let userNameElement = document.createElement("p")
    userNameElement.classList.add("username")
    userNameElement.innerText = `GitHub Username: ${profileData.login}`
    profileElement.appendChild(userNameElement)

    let urlElement = document.createElement("a");
    urlElement.href = `${profileData.html_url}`
    urlElement.innerText = "My GitHub"
    urlElement.classList.add("url")
    profileElement.appendChild(urlElement)

    let siteElement = document.createElement("a")
    siteElement.href = `https://${profileData.blog}`;
    siteElement.innerText = "My LinkedIn"
    siteElement.classList.add("site")
    profileElement.appendChild(siteElement)

    let newElement = document.querySelector(".repos")
    containerElement.appendChild(newElement)

}

let repoUrl = "https://api.github.com/users/lisaismyname0/repos"
// do we need to do a separate fetch request for this? no because the personal information is in the repo information & technically less API requests means faster but it might be easier to do it separately

fetch(repoUrl, {
    method: "GET",
    headers: { "Content-Type": "application.json" }
})
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        buildRepo(data)
    })

function buildRepo(repoData) {
    for (let repo of repoData) {
        const repoInfo = document.querySelector(".repos")
        const repoDiv = document.createElement("div")
        repoInfo.appendChild(repoDiv)
        const repoElement = document.createElement("a")
        repoElement.href = `${repo.html_url}`
        repoElement.innerText = "-" + `${repo.name}`
        repoInfo.appendChild(repoElement)
    }
}

// TODO
// Think about streamlining functions with map instead of loops