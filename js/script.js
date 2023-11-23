function createOverlay(imageSrc) {
    const overlay = document.createElement('article');
    overlay.classList.add('overlay');

    const image = document.createElement('img');
    image.src = imageSrc;

    overlay.appendChild(image);

    document.body.appendChild(overlay);

    overlay.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
}

function clickedImage() {
    const images = document.querySelectorAll('img');

    images.forEach(function(image) {
        image.addEventListener('click', function(event) {
            createOverlay(event.target.src);
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    clickedImage();
});
