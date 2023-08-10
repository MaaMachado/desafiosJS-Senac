function calcularSoma() {
    let soma = 0;
    for (let i = 1; i <= 200; i++) {
      soma += i;
    }
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `A soma dos números de 1 a 200 é: ${soma}`;
  }
  
  function limpar() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
  }