/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.getElementById('link').addEventListener('click', () => {
    const Justificativa = prompt(`  
    1 - Banheiro
    2 - Água
    3 - Lanche
                                    `)
    if(Justificativa){
        document.getElementById('link').classList.add('link-respondido')
        document.getElementById('link').innerHTML = 'CHECK RESPONDIDO'
    } 
})

document.getElementById('link2').addEventListener('click', () => {
    const Justificativa = prompt(`  
    1 - Banheiro
    2 - Água
    3 - Lanche
                                    `)
    if(Justificativa){
        document.getElementById('link2').classList.add('link-respondido')
        document.getElementById('link2').innerHTML = 'CHECK RESPONDIDO'
    } 
})

async function notificar() {
    var notification = new Notification('ATENÇÃO!', {
        body: 'Notificação teste',
        icon: 'https://img.icons8.com/color/48/000000/developer.png'
    })
    notification.onclick = () => {
        window.open('../PaginaInicial/paginaInicial.html')
    }
}

document.getElementById('demonstracao').addEventListener('click', async () => {
    await notificar()
    confirm('teste')
})

document.getElementById('sair').addEventListener('click', () => {
    const result = confirm(`
    VOCÊ POSSUI EVENTOS NÃO RESPONDIDOS! 

    DESEJA REALMENTE SAIR?`)
    console.log(result)
    if(result){
        window.location.href = '../../login/index.html' 
    }
})