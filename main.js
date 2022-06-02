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
    bioElement.innerText = `${profileData.bio}`
    profileElement.appendChild(bioElement)

    let siteElement = document.createElement("a")
    link = document.createTextNode("Lisa's LinkedIn"
    );
    siteElement.appendChild(link)
    siteElement.title = ("Lisa's LinkedIn")
    siteElement.href = `${profileData.blog}`
    console.log(`${profileData.blog}`)
    siteElement.classList.add("site")
    profileElement.appendChild(siteElement)
}

// TODO: Resize image by resizing divs?
// can trigger the fetch with an event listener


