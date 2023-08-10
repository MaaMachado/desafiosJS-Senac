function imprimirD() {
    const inputNumber1 = document.getElementById('inputNumber1').value;
  const number1 = parseFloat(inputNumber1);

  const inputNumber2 = document.getElementById('inputNumber2').value;
  const number2 = parseFloat(inputNumber2);

  if (!isNaN(number1 && number2)) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    resultado.insertAdjacentHTML('beforeend', `<h2>Números de ${number1} a ${number2} :</h2>`);
    for (let i = number2; i >= number1; i--) {
    resultado.insertAdjacentHTML('beforeend', `${i}, `);
  }
  } else {
    alert('Por favor, insira um número válido.');
  }
}

function limpar() {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
}
function voltar(){
  window.location.href = '../imprimirD.html'
}