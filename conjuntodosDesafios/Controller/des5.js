function encontrar() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
  
    resultado.insertAdjacentHTML('beforeend', `<h2>Números divisíveis por 3 entre 1 e 20:</h2>`);
    for (let i = 1; i <= 20; i++) {
      if (i % 3 === 0) {
        resultado.insertAdjacentHTML('beforeend', `<br> <p>${i}</p>`);
      }
    }
  }   
  
  function limpar() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
  }
  
  function prox(){
    window.location.href = 'idade.html';
  }
  function voltar(){
    window.location.href = 'tabuada.html';
  }