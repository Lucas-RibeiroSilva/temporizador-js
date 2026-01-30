document.addEventListener('DOMContentLoaded', () => {
    const temporizador = document.getElementById('temporizador')

    temporizador.addEventListener('submit', (event) => {

        event.preventDefault();
        const tempo = document.getElementById('tempo').value

        function diminuirtempo(tempo,tempoInicial){
            timer = setInterval (() => {
            if(tempo <= 0){
                parartempo(timer);
            }else if(tempo <= (tempoInicial/2)){
                cor = "#d3851fff"
                console.log(tempo),
                mostrarNumero(tempo,cor),
                tempo --- 1;
            }else{
                console.log(tempo),
                cor = "#10b981"
                mostrarNumero(tempo,cor),
                tempo --- 1;
            }
            } , 1000);
        }

        function parartempo(timer){
            setTimeout(() => {
                clearInterval(timer);
                console.log("Acabou o tempo!")
                cor = "#b91010ff"
                mostrarNumero("Acabou o tempo!",cor)
            }, 0);
        }

        function mostrarNumero(recebido,cor){
            document.getElementById("numero").textContent = recebido;
            document.getElementById("numero").style.color =  cor;
        }

        tempoInicial = tempo;
        diminuirtempo(tempo,tempoInicial)
    })

})
