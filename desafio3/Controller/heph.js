function imprimirD() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 
  
    for (let i = 10; i >= 1; i--) {
      resultado.insertAdjacentHTML('beforeend', `${i}, `);
    }
  }
  
  function limpar() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
  }
  function variante(){
    window.location.href = '../variantesRespostas/var1.html'
  }