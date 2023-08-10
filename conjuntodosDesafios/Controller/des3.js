function decrescente() {
    const resultado = document.getElementById('resultado2');
    resultado.innerHTML = ''; 
  
    for (let i = 10; i >= 1; i--) {
      resultado.insertAdjacentHTML('beforeend', `${i}, `);
    }
  }
  
  function limpar() {
    const resultado = document.getElementById('resultado2');
    resultado.innerHTML = '';
  }
  
  function prox(){
    window.location.href = 'tabuada.html';
  }
  function voltar(){
    window.location.href = 'calcular.html';
  }