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

        // building html header portion to include photo, name, and brief profile
    })

// for this data we need to add to the page by building new elements and including data from a database

function buildProfile(profileData) {
    console.log(profileData)
    let containerElement = document.querySelector(".box")
    let profileElement = document.createElement("div")
    profileElement.classList.add("container")
    containerElement.appendChild(profileElement)

    let imageElement = document.createElement("img")
    imageElement.src = "https://avatars.githubusercontent.com/u/105607130?v=4"
    profileElement.appendChild(imageElement)

    let nameElement = document.createElement("p")
    nameElement.classList.add("name")
    nameElement.innerText = `${profileData.name}`
    profileElement.appendChild(nameElement)

    let bioElement = document.createElement("p")
    bioElement.classList.add("bio")
    bioElement.innerText = `Bio: ${profileData.bio}`
    nameElement.appendChild(bioElement)

    let siteElement = document.createElement("a")
    link = document.createTextNode("Lisa's LinkedIn"
    );
    siteElement.appendChild(link)
    siteElement.title = ("Lisa's LinkedIn")
    siteElement.href = profileData.blog
    console.log(`${profileData.blog}`)
    siteElement.classList.add("site")
    nameElement.appendChild(siteElement)
    // link doesn't work...

    let userNameElement = document.createElement("p")
    userNameElement.classList.add("username")
    userNameElement.innerText = `GitHub Username: ${profileData.login}`
    nameElement.appendChild(userNameElement)

    // separate element for repos
    let repoElement = document.createElement("p")
    repoElement.classList.add("repos")
    repoElement.innerText = "Repositories"
    containerElement.appendChild(repoElement)

    let repo1 = document.createElement("li")
    repo1.innerText = "repo #1"
    let repo2 = document.createElement("li")
    let repo3 = document.createElement("li")
    repo2.innerText = "repo #2"
    repo3.innerText = "repo #3"
    repoElement.appendChild(repo1)
    repoElement.appendChild(repo2)
    repoElement.appendChild(repo3)

}

// TODO: Resize image by resizing divs?
// can trigger the fetch with an event listener

