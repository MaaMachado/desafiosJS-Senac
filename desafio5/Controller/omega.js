function encontrar() {
    const inputNumber1 = document.getElementById('inputNumber1').value;
  const number1 = parseFloat(inputNumber1);

  const inputNumber2 = document.getElementById('inputNumber2').value;
  const number2 = parseFloat(inputNumber2);

    const inputNumberF = document.getElementById('inputNumberF').value;
  const numberF = parseFloat(inputNumberF);

  if (!isNaN(number1 && number2 && numberF)) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    resultado.insertAdjacentHTML('beforeend', `<h2>Números divisíveis por ${numberF} entre ${number1} e ${number2}:</h2>`);
    for (let i = number1; i <= number2; i++) {
    if (i % numberF === 0) {
      resultado.insertAdjacentHTML('beforeend', `<p>${i}</p>`);
    }
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
  window.location.href = 'var1.html'
}