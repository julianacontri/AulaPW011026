const display = document.getElementById('display');

// Adiciona os números e operadores normais na tela
function adicionarValor(valor) {
    display.value += valor;
}

// Limpa totalmente a tela
function limparTela() {
    display.value = '';
}

// Apaga apenas o último caractere digitado
function apagarUltimo() {
    display.value = display.value.slice(0, -1);
}

// Executa as operações aritméticas básicas (soma, subtração, multiplicação e divisão)
function calcularResultado() {
    try {
        if (display.value.trim() === '') return;
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}

// FUNÇÕES GEOMÉTRICAS:

// Área do Quadrado = lado * lado
function calcularAreaQuadrado() {
    const lado = prompt("Digite o valor do lado do quadrado:");
    if (lado && !isNaN(lado)) {
        const area = parseFloat(lado) * parseFloat(lado);
        display.value = `Área Quad: ${area}`;
    } else if (lado !== null) {
        alert("Por favor, digite um número válido.");
    }
}

// Área do Triângulo = (base * altura) / 2
function calcularAreaTriangulo() {
    const base = prompt("Digite a base do triângulo:");
    if (base === null) return;
    
    const altura = prompt("Digite a altura do triângulo:");
    if (altura === null) return;

    if (!isNaN(base) && !isNaN(altura)) {
        const area = (parseFloat(base) * parseFloat(altura)) / 2;
        display.value = `Área Tri: ${area}`;
    } else {
        alert("Por favor, digite números válidos.");
    }
}

// Área do Retângulo = base * altura
function calcularAreaRetangulo() {
    const base = prompt("Digite a base do retângulo:");
    if (base === null) return;
    
    const altura = prompt("Digite a altura do retângulo:");
    if (altura === null) return;

    if (!isNaN(base) && !isNaN(altura)) {
        const area = parseFloat(base) * parseFloat(altura);
        display.value = `Área Ret: ${area}`;
    } else {
        alert("Por favor, digite números válidos.");
    }
}

