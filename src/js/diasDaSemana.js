function week(indiceMaxTemp, maxTemp, indiceMinTemp, minTemp, tempUni) {
    const data = new Date();
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const indiceDiaSemanaAtual = data.getDay();
    const diaDaSemanaAtual = diasDaSemana[indiceDiaSemanaAtual];
    const indiceData = document.getElementsByClassName("dia_da_semana");
    console.log(indiceData);
    

    for (let i = 0; i <= 6; i++) {
        let indiceDiaSemana = (indiceDiaSemanaAtual + i) % 7;
        let diaDaSemana = diasDaSemana[indiceDiaSemana];
        indiceData[i].innerHTML = diaDaSemana;
        indiceMaxTemp[i].innerHTML = maxTemp[indiceDiaSemana] + `${tempUni}`;
        indiceMinTemp[i].innerHTML = minTemp[indiceDiaSemana] + `${tempUni}`;
    }
}

export default week
