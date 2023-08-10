function imprimir() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 
  
    for (let i = 2; i <= 1000; i += 2) {
      resultado.insertAdjacentHTML('beforeend', ` ${i},`);
    }
  }
  
  function limpar() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
  }
  
  function prox(){
    window.location.href = 'calcular.html';
  }
  function voltar(){
    window.location.href = 'conteudo.html';
  }