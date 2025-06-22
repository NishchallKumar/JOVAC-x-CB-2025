
const username = "NishchallKumar";

fetch(`https://api.github.com/users/${username}`)
  .then(response => {
    if (!response.ok) {
      throw new Error("User not found");
    }
    return response.json();
  })
  .then(data => {
    const profileDiv = document.getElementById("profile");
    profileDiv.innerHTML = `
      <img src="${data.avatar_url}" alt="Avatar" />
      <h2>${data.name}</h2>
      <p>${data.bio || 'No bio available'}</p>
      <p>Followers: ${data.followers}</p>
      <p>Following: ${data.following}</p>
      <p>Public Repos: ${data.public_repos}</p>
      <a href="${data.html_url}" target="_blank">View Profile</a>
    `;
  })
  .catch(error => {
    document.getElementById("profile").innerHTML = `<p>${error.message}</p>`;
  });
