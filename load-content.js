document.addEventListener('DOMContentLoaded', () => {
    // Carregar o menu principal
    fetch('/menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading menu:', error));

    // Verificar se há um submenu a ser carregado
    const submenuMapping = {
        'mecanica_classica': '/submenu-mecanica_classica.html',
        'fisica_experimental': '/submenu-experimental.html',
        // Adicione outros mapeamentos de disciplina para submenu aqui
    };

    const pathParts = window.location.pathname.split('/');
    const disciplina = pathParts.length > 2 ? pathParts[2] : null;
    if (disciplina && submenuMapping[disciplina]) {
        fetch(submenuMapping[disciplina])
            .then(response => response.text())
            .then(data => {
                document.getElementById('submenu-container').innerHTML = data;
            })
            .catch(error => console.error('Error loading submenu:', error));
    }

    // Carregar o footer
    fetch('/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});
