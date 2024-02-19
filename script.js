const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('clear')
})
document.addEventListener("DOMContentLoaded", function() {
  var titulo = document.getElementById("titulo");
  var textos = [
      "Hi, My name is Gabriel",
      "Software Quality Assurance Intern"
  ];
  var index = 0;
  var fading = false;

  function fadeOut() {
      var textoAtual = titulo.innerHTML;
      var i = textoAtual.length - 1;
      fading = true;
      var intervalo = setInterval(function() {
          if (i < 0) {
              clearInterval(intervalo);
              setTimeout(fadeIn, 20); // Espera 2 segundos antes de iniciar a próxima frase
          }
          titulo.innerHTML = textoAtual.substring(0, i);
          i--;
      }, 50); 
  }

  function fadeIn() {
      var textoProximo = textos[index];
      var i = 0;
      var intervalo = setInterval(function() {
          if (i >= textoProximo.length) {
              clearInterval(intervalo);
              fading = false;
              index = (index + 1) % textos.length; 
              setTimeout(fadeOut, 2000); 
          }
          titulo.innerHTML = textoProximo.substring(0, i + 1);
          i++;
      }, 50); 
  }

  fadeIn(); 
});
