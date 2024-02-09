// --------- Tokens Storage --------- 
const buttonAbout = document.querySelector('.about');
const buttonCertified = document.querySelector('.projects');
const certifications_list = document.querySelectorAll('.fullscreen-img');
//-----------------------------------

// -----------  Setting a constant for viewPort Height and Width -----------
const root = document.documentElement;
root.style.setProperty('--original-viewport-height', window.innerHeight + "px")
root.style.setProperty('--original-viewport-width', window.innerWidth + "px")
//--------------------------------------------------------------------------

certifications_list.forEach( (img) => {
    img.addEventListener('click', function () {
        if (this.requestFullscreen) {
            this.requestFullscreen();
        } else if (this.webkitRequestFullscreen) { /* Safari */
            this.webkitRequestFullscreen();
        } else if (this.msRequestFullscreen) { /* IE11 */
            this.msRequestFullscreen();
        }
    })
})