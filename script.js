// --------- Tokens Storage --------- 
const buttonAbout = document.querySelector('.about')
const buttonCertified = document.querySelector('.projects')
//-----------------------------------

// -----------  Setting a constant for viewPort Height and Width -----------
const root = document.documentElement
root.style.setProperty('--original-viewport-height', window.innerHeight + "px");
root.style.setProperty('--original-viewport-width', window.innerWidth + "px");
//--------------------------------------------------------------------------

/*
buttonAbout.onclick = () => {
    fetch('./index.html')
        .then(response => response.text())
        .then(html => {
            content.innerHTML = html;
        })
        .catch(error => {
            console.log('Erro ao carregar o arquivo HTML:', error);
        });
}

buttonCertified.onclick = () => {
    fetch('./certificados.html')
        .then(response => response.text())
        .then(html => {
            content.innerHTML = html;
        })
        .catch(error => {
            console.log('Erro ao carregar o arquivo HTML:', error);
        });
}
*/