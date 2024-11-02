document.getElementById('showImageBtn').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    imageContainer.classList.remove('hidden');
    setTimeout(() => {
        imageContainer.classList.add('show');
        backgroundMusic.play(); // Memulai pemutaran lagu
    }, 10);
});

