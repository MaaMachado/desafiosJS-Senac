function imprimir() {
    const inputNumber = document.getElementById('inputNumber').value;
    const number = parseFloat(inputNumber);
  
    if (!isNaN(number)) {
      const resultado = document.getElementById('resultado');
      resultado.innerHTML = ''; 
  
      resultado.insertAdjacentHTML('beforeend', `<h2>Tabuada de multiplicação do número ${number}:</h2>`);
      for (let i = 1; i <= 10; i++) {
        const resultadoT = number * i;
        resultado.insertAdjacentHTML('beforeend', `<p>${number} x ${i} = ${resultadoT}</p>`);
      }
    } else {
      alert('Por favor, insira um número válido.');
    }
  }
  
  function limpar() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
  }