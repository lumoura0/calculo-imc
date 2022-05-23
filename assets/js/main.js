// Capturar evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) { // adicionar um evento de submit
    e.preventDefault(); // previne que a página recarregue
    const inputPeso = e.target.querySelector('#peso'); // pegou os dados
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value); // converteu para number
    const altura = Number(inputAltura.value);

    if (!peso) { // verificar se o peso é verdadeiro
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) { // verificar se a altura é verdadeira
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura); // Função para calcular o imc
    const nivelImc = getNivelImc(imc); // Função de niveis do imc

    const msg = `Seu IMC é ${imc} (${nivelImc}).`; 

    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) { // calculo imc
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP(className) { // função para criar um paragrafo
    const p = document.createElement('p');
    return p;
}


function setResultado(msg, isValid) { // Função para setar o resultado
    const resultado = document.querySelector('#resultado'); // Seleciona a div de resultado
    resultado.innerHTML = ''; // Zera o campo de resultado

    const p = criaP();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}