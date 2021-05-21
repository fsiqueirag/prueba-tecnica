// Obtener elementos

const image = document.getElementById("image-container");
const modal = document.getElementById("modal-container");
const mainContent = document.getElementById("main-content");
const closeModal = document.getElementById("close-modal");
const iframe = document.querySelector( 'iframe');

// Declarar función que detiene el video

const stopVideo = () => {
	let iframeSrc = iframe.src;
	iframe.src = iframeSrc;
};

// Mostrar modal al clickear imagen

image.addEventListener('click', () => {
    modal.classList.add('shown');
    mainContent.classList.add('blur');
});

// Cerrar modal

closeModal.addEventListener('click', () => {
    stopVideo();
    modal.classList.remove('shown');
    mainContent.classList.remove('blur');
});


