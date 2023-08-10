function encontrar() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
  
    resultado.insertAdjacentHTML('beforeend', `<h2>Números divisíveis por 3 entre 1 e 20:</h2>`);
    for (let i = 1; i <= 20; i++) {
      if (i % 3 === 0) {
        resultado.insertAdjacentHTML('beforeend', `<p>${i}</p>`);
      }
    }
  }
  
  function limpar() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
  }
  function variante(){
    window.location.href = './variantesRespostas/var1.html'
  }