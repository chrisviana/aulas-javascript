const signos = {
  "Áries": ["21/03", "20/04"],
  "Touro": ["21/04", "20/05"],
  "Gêmeos": ["21/05", "20/06"],
  "Câncer": ["21/06", "21/07"],
  "Leão": ["22/07", "22/08"],
  "Virgem": ["23/08", "22/09"],
  "Libra": ["23/09", "22/10"],
  "Escorpião": ["23/10", "21/11"],
  "Sagitário": ["22/11", "21/12"],
  "Capricórnio": ["22/12", "20/01"],
  "Aquário": ["21/01", "19/02"],
  "Peixes": ["20/02", "20/03"]
}

function buscarSigno(dia, mes) {
  const dataFormatada = `${dia}/${mes}`;
  
  for (const signo in signos) {
    const [inicio, fim] = signos[signo];
    const [inicioDia, inicioMes] = inicio.split('/');
    const [fimDia, fimMes] = fim.split('/');
    
    if ((mes === parseInt(inicioMes) && dia >= parseInt(inicioDia)) || (mes === parseInt(fimMes) && dia <= parseInt(fimDia))) {
      return signo;
    }
  }
  
  return "Desconhecido";
}

const aniversario = buscarSigno(7, 9);
console.log(aniversario);