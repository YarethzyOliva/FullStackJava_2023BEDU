window.addEventListener('resize', function() {
    var header = document.querySelector('header');
    var screenWidth = window.innerWidth;
  
    if (screenWidth <= 575) {
      header.style.display = 'none';
    } else {
      header.style.display = 'flex';
    }
  });