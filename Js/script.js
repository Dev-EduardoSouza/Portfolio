document.addEventListener("DOMContentLoaded", () => {

    const btnTecnicas = document.querySelector('#btntecnicas');
    const btnSociais = document.querySelector('#btnsociais');
    const btnColor = document.querySelector('.btn-color');
    const tecnicas = document.getElementById('tecnicas')
    const sociais = document.getElementById('sociais')
    sociais.style.display = "none" ;
    tecnicas.style.display = "flex" ;
    btnTecnicas.classList.add("white");

        btnTecnicas.addEventListener('click', () => {
            btnColor.style.left = "0";
            btnSociais.classList.remove('white');
            btnTecnicas.classList.add("white");
            sociais.style.display = "none" ;
            tecnicas.style.display = "flex" ;

        });

        btnSociais.addEventListener('click', () => {
            btnColor.style.left = "50%";
            btnSociais.classList.add('white');
            btnTecnicas.classList.remove("white");
            sociais.style.display = "flex" ;
            tecnicas.style.display = "none" ;
        });
    // Inicializa o scrollspy
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };
});
