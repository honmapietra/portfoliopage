const fetchRepositories = () => fetch(`https://api.github.com/users/honmapietra/repos`).then(response => response.json())


const populateRepos = (repositories) => {
    const reposDiv = document.getElementById('repos');

    repositories.forEach((repo => {
        const link = document.createElement('a');

        link.href = repo.url;
        link.textContent = repo.name;

        reposDiv.appendChild(link)
    }))
}


const initialize = async () => {
    const rawRepos = await fetchRepositories();

    const repositories = rawRepos.map((rawRepository) => {
        return {
            name: rawRepository.name,
            url:  rawRepository.html_url
        }
    });

    // inseri os reposito na tela
    populateRepos(repositories);

    console.log({ repositories, rawRepos });
}

// inicialização
document.addEventListener("DOMContentLoaded", function() {
    initialize();
});