let image = document.getElementById("image-container");
let modal = document.getElementById("modal-container");
let mainContent = document.getElementById("main-content");
let closeModal = document.getElementById("close-modal");
let iframe = document.querySelector( 'iframe');

let stopVideo = () => {
	let iframeSrc = iframe.src;
	iframe.src = iframeSrc;
};

image.addEventListener('click', () => {
    modal.classList.add('shown');
    mainContent.classList.add('blur');
});

closeModal.addEventListener('click', () => {
    stopVideo();
    modal.classList.remove('shown');
    mainContent.classList.remove('blur');
});


