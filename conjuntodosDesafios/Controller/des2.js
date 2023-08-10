function calcular() {
    let soma = 0;
    for (let i = 1; i <= 200; i++) {
      soma += i;
    }
    const resultado = document.getElementById('resultado2');
    resultado.innerHTML = `A soma dos números de 1 a 200  = <span style="font-weight: bold; color: orange;"> ${soma} </span>`;
  }
  
  function limpar() {
    const resultado = document.getElementById('resultado2');
    resultado.innerHTML = '';
  }
  
  function prox(){
    window.location.href = 'decrescente.html';
  }
  function voltar(){
    window.location.href = 'imprimir.html';
  }