document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');

    const images = [
        { src: 'images/image1.jpg', alt: 'Paisagem 1' },
        { src: 'images/image2.jpg', alt: 'Paisagem 2' },
        { src: 'images/image3.jpg', alt: 'Paisagem 3' },
        { src: 'images/image4.jpg', alt: 'Paisagem 4' }
    ];

    function renderGallery() {
        galleryContainer.innerHTML = ''; // Limpa o container antes de renderizar
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.alt;
            galleryContainer.appendChild(imgElement);
        });
    }

    renderGallery();

    // Adicionar funcionalidade de visualização em tela cheia (exemplo simples)
    galleryContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            const fullscreenOverlay = document.createElement('div');
            fullscreenOverlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.9); display: flex; justify-content: center; align-items: center; z-index: 1000;';
            
            const fullscreenImg = document.createElement('img');
            fullscreenImg.src = event.target.src;
            fullscreenImg.alt = event.target.alt;
            fullscreenImg.style.cssText = 'max-width: 90%; max-height: 90%; object-fit: contain;';

            fullscreenOverlay.appendChild(fullscreenImg);
            document.body.appendChild(fullscreenOverlay);

            fullscreenOverlay.addEventListener('click', (e) => {
                if (e.target === fullscreenOverlay || e.target === fullscreenImg) {
                    document.body.removeChild(fullscreenOverlay);
                }
            });
        }
    });
});

