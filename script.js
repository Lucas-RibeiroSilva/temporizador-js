document.addEventListener('DOMContentLoaded', () => {
    const temporizador = document.getElementById('temporizador')

    temporizador.addEventListener('submit', (event) => {

        event.preventDefault();
        const tempo = document.getElementById('tempo').value

        function diminuirtempo(tempo){
            timer = setInterval (() => {
            if(tempo <= 0){
                parartempo(timer);
            }else{
                console.log(tempo),
                cor = "green"
                mostrarNumero(tempo,cor),
                tempo --- 1;
            }
            } , 1000);
        }

        function parartempo(timer){
            setTimeout(() => {
                clearInterval(timer);
                console.log("Acabou o tempo")
                cor = "red"
                mostrarNumero("Acabou o tempo",cor)
            }, 0);
        }

        function mostrarNumero(recebido,cor){
            document.getElementById("numero").textContent = recebido;
            document.getElementById("numero").style.color =  cor === "red" ? "red" : "#10b981";
        }

        diminuirtempo(tempo)
    })

})