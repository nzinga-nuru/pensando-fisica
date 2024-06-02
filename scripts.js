document.addEventListener('DOMContentLoaded', () => {
    const disciplinas = [
        { id: 'fisica2', name: 'Física II' },
        { id: 'mecanica_classica1', name: 'Mecânica Clássica I' },
        { id: 'fisica4', name: 'Física IV' },
        { id: 'fisica_experimental', name: 'Física Experimental' },
    ];

    const list = document.getElementById('disciplinas-list');

    disciplinas.forEach(disciplina => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `modules/${disciplina.id}/index.html`;
        a.textContent = disciplina.name;
        li.appendChild(a);
        list.appendChild(li);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Carregar menu
    fetch('/menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
            // Adicionar classe 'active' ao link atual
            var menuLinks = document.querySelectorAll('.menu-link');
            menuLinks.forEach(function(link) {
                if (link.href === window.location.href) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => console.error('Erro ao carregar o menu:', error));

    // Carregar footer
    fetch('/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
});
