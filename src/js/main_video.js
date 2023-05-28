var gifContainer1 = document.querySelector('.slideitem1');
var gifContainer2 = document.querySelector('.slideitem2');
var gifContainer3 = document.querySelector('.slideitem3');
var gifContainer4 = document.querySelector('.slideitem4');

    var gifImage = document.getElementById('myGif');

    gifContainer1.addEventListener('mouseenter', function() {
      gifImage.src = "../../video/galxy.gif"
      gifImage.style.display = 'block';
    });

    gifContainer1.addEventListener('mouseleave', function() {
      gifImage.style.display = 'none';
    });

    gifContainer2.addEventListener('mouseenter', function() {
      gifImage.src = "../../video/city.gif"
      gifImage.style.display = 'block';
    });

    gifContainer2.addEventListener('mouseleave', function() {
      gifImage.style.display = 'none';
    });

    gifContainer3.addEventListener('mouseenter', function() {
      gifImage.src = "../../video/mission.gif"
      gifImage.style.display = 'block';
    });

    gifContainer3.addEventListener('mouseleave', function() {
      gifImage.style.display = 'none';
    });

    gifContainer4.addEventListener('mouseenter', function() {
      gifImage.src = "../../video/speed.gif"
      gifImage.style.display = 'block';
    });

    gifContainer4.addEventListener('mouseleave', function() {
      gifImage.style.display = 'none';
    });