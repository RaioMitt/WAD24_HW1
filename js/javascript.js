function toggleDropdown() {
    console.log("Dropdown toggle triggered");
    var element = document.getElementById("dropdownMenu");
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}
/*
window.onload = function() {
    let json = null
    let warningMsg = null
    let errorMsg = null
    fetch("https://api.jsonbin.io/v3/b/67239bd3e41b4d34e44bf0eb", {
        headers: {
            "X-Master-Key": "$2a$10$/7q2l4wYfaGkaiyPKzo8I.GHMOyqIgXL9LkcnWV8Jd/Ewp8F8/.QS"
        }
    })
        .then(response => response.json())
        .then(data => {
            json = data.record.posts
        })
        .catch(error => {
            warningMsg = "Error in fetching JSON!"
            errorMsg = error
            console.log(warningMsg, errorMsg)
        })
        .finally(() => {
            let feed = document.querySelector("section")
            console.log(feed)
            if (warningMsg == null && errorMsg == null) {
                for (let i = 0; i < json.length; i++) {
                    let date = json[i].date
                    let img = json[i].img
                    let post = json[i].post
                    
                    let postDiv = document.createElement("div")
                    postDiv.className = "post"

                    let headerDiv = document.createElement("div")
                    headerDiv.className = "post-header"
                    let profileDiv = document.createElement("div")
                    profileDiv.className = "post-profile-pic"
                    let dateDiv = document.createElement("div")
                    dateDiv.className = "post-date"
                    dateDiv.innerText = date
                    headerDiv.appendChild(profileDiv)
                    headerDiv.appendChild(dateDiv)
                    postDiv.appendChild(headerDiv)

                    if (img != null) {
                        let imgElement = document.createElement("img")
                        imgElement.src = img
                        imgElement.alt = "Post Image"
                        imgElement.className = "post-image"
                        postDiv.appendChild(imgElement)
                    }

                    let textDiv = document.createElement("div")
                    textDiv.className = "post-text"
                    textDiv.innerText = post
                    postDiv.appendChild(textDiv)

                    let buttonDiv = document.createElement("div")
                    buttonDiv.className = "like-button"
                    buttonDiv.innerText = "💀"
                    postDiv.appendChild(buttonDiv)
                    feed.appendChild(postDiv)


                }
            } else {
                let errorDiv = document.createElement("div")
                errorDiv.className = "post"

                let errorTextDiv = document.createElement("div")
                errorTextDiv.className = "post-text"
                errorTextDiv.innerText = errorMsg + "; " + warningMsg
                errorDiv.appendChild(errorTextDiv)
                feed.appendChild(errorDiv)
            }
        })
}
*/

window.onload = function() {
    let json = null
    let warningMsg = null
    let errorMsg = null
    fetch("db.json")
        .then(response => response.json())
        .then(data => {
            json = data.posts
        })
        .catch(error => {
            warningMsg = "Error in fetching JSON!"
            errorMsg = error
            console.log(warningMsg, errorMsg)
        })
        .finally(() => {
            let feed = document.querySelector("section")
            console.log(feed)
            if (warningMsg == null && errorMsg == null) {
                for (let i = 0; i < json.length; i++) {
                    let date = json[i].date
                    let img = json[i].img
                    let post = json[i].post
                    
                    let postDiv = document.createElement("div")
                    postDiv.className = "post"

                    let headerDiv = document.createElement("div")
                    headerDiv.className = "post-header"
                    let profileDiv = document.createElement("div")
                    profileDiv.className = "post-profile-pic"
                    let dateDiv = document.createElement("div")
                    dateDiv.className = "post-date"
                    dateDiv.innerText = date
                    headerDiv.appendChild(profileDiv)
                    headerDiv.appendChild(dateDiv)
                    postDiv.appendChild(headerDiv)

                    if (img != null) {
                        let imgElement = document.createElement("img")
                        imgElement.src = img
                        imgElement.alt = "Post Image"
                        imgElement.className = "post-image"
                        postDiv.appendChild(imgElement)
                    }

                    let textDiv = document.createElement("div")
                    textDiv.className = "post-text"
                    textDiv.innerText = post
                    postDiv.appendChild(textDiv)

                    let buttonDiv = document.createElement("div")
                    buttonDiv.className = "like-button"
                    buttonDiv.innerText = "💀"
                    postDiv.appendChild(buttonDiv)
                    feed.appendChild(postDiv)


                }
            } else {
                let errorDiv = document.createElement("div")
                errorDiv.className = "post"

                let errorTextDiv = document.createElement("div")
                errorTextDiv.className = "post-text"
                errorTextDiv.innerText = errorMsg + "; " + warningMsg
                errorDiv.appendChild(errorTextDiv)
                feed.appendChild(errorDiv)
            }
        })
}
