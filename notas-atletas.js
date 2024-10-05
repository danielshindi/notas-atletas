function calculaMediaNotasAtletas(atletas) {
    let saida = '';

    for (let atleta of atletas) {
        let notasValidas = atleta.notas.sort((a, b) => a - b).slice(1, 4)
        let somaNotasValidas = notasValidas.reduce((soma, nota) => soma + nota, 0);
;
        let media = somaNotasValidas / 3;
        saida += `Atleta: ${atleta.nome}\nNotas obtidas: ${atleta.notas.join(', ')}\nMédia válida: ${media}\n\n`;
    }

    return saida;
}


let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

   console.log(calculaMediaNotasAtletas(atletas));