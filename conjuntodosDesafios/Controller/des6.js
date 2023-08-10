function calcular() {
    const diaIn = document.getElementById('dia').value;
    const mesIn = document.getElementById('mes').value;
    const anoIn = document.getElementById('ano').value;
  
    if (diaIn === '' || mesIn === '' || anoIn === '') {
      alert('Por favor, preencha o campo vazio.');
      return;
    }
  
    const data = new Date();
    const aniversario = new Date(`${anoIn}-${mesIn}-${diaIn}`);
  
    if (isNaN(aniversario) || aniversario > data || anoIn < 1900) {
      alert('Por favor, insira uma data de nascimento válida.');
    } else {
      const calculoM = data - aniversario;
      const idade = new Date(calculoM);
      const idadeA = idade.getFullYear() - 1970;
      const idadeM = idade.getMonth();
      const idadeD = idade.getDate() - 1;
  
      const resultado = document.getElementById('resultadoE');
      resultado.innerHTML = `<p> <span class="purple-text">${idadeA}</span> anos <br>  <span class="purple-text">${idadeM}</span> meses <br>  <span class="purple-text">${idadeD}</span> dias </p>`;
    }
  }
  
  function voltar(){
    window.location.href = 'divisivel.html';
  }
  function prox(){
    window.location.href = 'conteudo.html';
  }