window.onload = function(){

    const inputAltura = document.getElementById('altura');
    const inputPeso = document.getElementById('peso');
    const botao = document.getElementById('submit');


    botao.addEventListener('click', (e) => {

        if(inputAltura.value && inputPeso.value){
            const peso = inputPeso.value;
            const altura = inputAltura.value;

            const imc = peso / (altura * altura);
            const resultado = document.getElementById('resultado');
            
            resultado.innerHTML = 'Seu IMC é : ' + imc.toFixed(2);

            if(imc < 18.5){
                alerta.innerHTML = 'Você está abaixo do peso ideal';
                alerta.className = 'purple';
            }else if(imc >= 18.5 && imc <= 24.9){
                alerta.innerHTML = 'Você está no peso ideal';
                alerta.className = 'green';
            }else if(imc > 24.9 && imc <= 29.9){
                alerta.innerHTML = 'Você está com sobrepeso';
                alerta.className = 'fuchsia';
            }else if(imc > 30 && imc <= 34.9){
                alerta.innerHTML = 'Você está com obesidade I';
                alerta.className = 'blue';
            }else if(imc > 34.9 && imc <= 39.9){
                alerta.innerHTML = 'Você está com obesidade II';
                alerta.className = 'red';
            }else if(imc > 39.9){
                alerta.innerHTML = 'Você está com obesidade mórbida';
                alerta.className = 'gray';
            }

        }else{
            alert('Por favor, preencha os campos corretamente');
        }
    
    });
}