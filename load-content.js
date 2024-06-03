document.addEventListener('DOMContentLoaded', () => {
    //const repoName = 'pensando-fisica';  // Substitua pelo nome correto do seu repositório

    const loadHTML = (url, containerId) => {
        console.log(`Loading ${url} into ${containerId}`);
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.text();
            })
            .then(data => {
                document.getElementById(containerId).innerHTML = data;
                console.log(`${url} loaded successfully into ${containerId}`);
            })
            .catch(error => console.error(`Error loading ${url}:`, error));
    };

    //loadHTML(`/${repoName}/menu.html`, 'menu-container');
    loadHTML(`/menu.html`, 'menu-container');

    const submenuMapping = {
        'mecanica_classica': `/${repoName}/submenu-mecanica_classica.html`,
        'fisica_experimental': `/${repoName}/submenu-experimental.html`,
    };

    const pathParts = window.location.pathname.split('/');
    const disciplina = pathParts.length > 2 ? pathParts[2] : null;
    console.log('Disciplina:', disciplina);
    if (disciplina && submenuMapping[disciplina]) {
        loadHTML(submenuMapping[disciplina], 'submenu-container');
    } else {
        console.log('No submenu to load for:', disciplina);
    }

    //loadHTML(`/${repoName}/footer.html`, 'footer-container');
    loadHTML(`/footer.html`, 'footer-container');
});
