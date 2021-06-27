const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso  = document.getElementById('peso').value;
    const calcular = document.getElementById('calcular');
    const resultado = document.getElementById('resultado');

    if(nome.value !== '' && altura !== '' && peso !==''){

        const valorIMC = (peso/ (altura*altura)).toFixed(1);

        let classificacao="";

        if(valorIMC < 18.5){
            classificacao ='Abaixo do peso.'
        }else if(valorIMC < 25){
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if(valorIMC < 30){
            classificacao = 'você esta levemente acima do peso.';
        }else if(valorIMC < 35){
            classificacao = 'com obesidade de grau I';
        }else if(valorIMC < 40){
            classificacao = 'com obesidade de grau II';
        }else {
            classificacao ='com obesidade de grau III. cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`;

        }else {
            resultado.textContent = 'preencha todos os campos!!!';
        }
}

calcular.addEventListener('click', imc)