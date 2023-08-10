function encontrar() {
    const inputNumber = document.getElementById('inputNumber').value;
  const number = parseFloat(inputNumber);

  if (!isNaN(number)) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    resultado.insertAdjacentHTML('beforeend', `<h2>Números divisíveis por ${number}:</h2>`);
    for (let i = 1; i <= 20; i++) {
    if (i % number === 0) {
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
  window.location.href = '../divisivel.html'
}
function variante(){
  window.location.href = 'var2.html'
}