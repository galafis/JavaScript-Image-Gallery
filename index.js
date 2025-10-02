document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');

    const images = [
        { src: 'https://via.placeholder.com/300x200?text=Image+1', alt: 'Description for Image 1' },
        { src: 'https://via.placeholder.com/300x200?text=Image+2', alt: 'Description for Image 2' },
        { src: 'https://via.placeholder.com/300x200?text=Image+3', alt: 'Description for Image 3' },
        { src: 'https://via.placeholder.com/300x200?text=Image+4', alt: 'Description for Image 4' },
        { src: 'https://via.placeholder.com/300x200?text=Image+5', alt: 'Description for Image 5' },
        { src: 'https://via.placeholder.com/300x200?text=Image+6', alt: 'Description for Image 6' },
    ];

    images.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;

        const p = document.createElement('p');
        p.textContent = image.alt;

        galleryItem.appendChild(img);
        galleryItem.appendChild(p);
        galleryContainer.appendChild(galleryItem);
    });
});
