$(document).ready(function() {
    const avatarElement = document.querySelector('.profile-avatar');
    const nameElement = document.querySelector('.profile-name');
    const usernameElement = document.querySelector('.profile-username');
    const repoElement = document.querySelector('#repositories');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const profileLinkElement = document.querySelector('.profile-link');

    const endpoint = 'https://api.github.com/users/GustavoLageDev'

    fetch(endpoint).then(function(result){
        return result.json()
        
    })
    .then(function(json){
        console.log(json)
        avatarElement.src = json.avatar_url
        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        repoElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        profileLinkElement.href = json.html_url;
        
    })
    
})