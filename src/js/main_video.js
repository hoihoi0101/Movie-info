var gifContainer = document.querySelector('.slideitem1');
    var gifImage = document.getElementById('myGif');

    gifContainer.addEventListener('mouseenter', function() {
      gifImage.style.display = 'block';
    });

    gifContainer.addEventListener('mouseleave', function() {
      gifImage.style.display = 'none';
    });