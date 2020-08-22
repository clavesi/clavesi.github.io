var allRepos = [];
console.log('hello');
var btnRepos = document.getElementById("btnRepos");
btnRepos.addEventListener("click", getRepos);

async function getRepos() {
    const url = "https://api.github.com/users/clavesi/repos";
    const response = await fetch(url);
    const result = await response.json();

    result.forEach(i => {
        allRepos.push([i.name, i.html_url, i.description, i.language, i.created_at])
    });
    console.log(allRepos);
}
