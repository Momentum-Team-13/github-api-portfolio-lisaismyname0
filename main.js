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
    // repoElement.appendChild(repo2)
    // repoElement.appendChild(repo3)
    // is there a way to do this all in one? as in repo.Element.appendChild(repo1,repo2,repo3)

}

let repoUrl = "https://api.github.com/users/lisaismyname0/repos"
// do we need to do a separate fetch request for this? no because the personal information is in the repo information & technically less API requests means faster but it might be easier to do it separately 

// can trigger the fetch with an event listener

function buildProfile(profileData) {
    profileData.map(function (repo) {
        profile.appendChild(buildRepoElement(repo.name))
    })
}

// ^ when profileData is linked to the repos, this cycles through the list of repos and returns only the information asked for... this is also in map format which is a more streamlined way of writing this loop:

// function buildProfileLoop(profileData) {
//     // same as above but using loops instead
//     let elements = []
//     for (let repo of profileData) {
//         profile.appendChild(buildRepoElement(repo.name))
//     }
// }

// function buildRepoElement(name) {
//     let el = document.createElement("p")
//     el.innerText = name
//     return el
// returns new element for a repo, like a customer
// }

// Think about streamlining functions with map instead of appendChild()

