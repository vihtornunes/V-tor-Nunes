const meuVideo = document.getElementById('meuVideo');

meuVideo.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
});


//* transition *// 

document.addEventListener('DOMContentLoaded', function() {
    const smoothLinks = document.querySelectorAll('.smooth-transition');
  
    smoothLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetPage = this.getAttribute('href');
        document.body.style.opacity = 0;
  
        setTimeout(function() {
          window.location.href = targetPage;
        }, 500); // Tempo de espera correspondente à transição no CSS (0.5s)
      });
    });
  });
  

