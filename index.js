/*
Para não haver a necessidade de realizar download de bibliotecas e para facilitar o uso, deixei as variáveis das questões que podem receber valores dinâmicos de forma 'mocada'/fixa - é possível alterá-las para visualizar resultados diferentes.

=> Para executar cada resposta/código recomendo manter apenas o código da questão que deseja executar descomentado - remover apenas os comentários de múltiplas linhas (asterisco -> barra). 
*/

// Questão 1 - Total da Soma
/*
// Declaração das variáveis
let INDICE = 13;
let SOMA = 0;
let K = 0;

// let INDICE = 13, SOMA = 0, K = 0; // A declaração das variáveis também funcionaria desta forma

// Processamento
while(K < INDICE) {
    K++; // Incremento obrigatório para não ocorrer loop infinito
    SOMA += K; // Processo de soma -> SOMA = SOMA + K
};

console.log(SOMA); // saída: 91
*/



// Questão 2 - Verificação de número Fibonnaci
/*
// Função para verificar se um número é ou não Fibonnaci
function ehFibonnaci(num) {
    let a = 0, b = 1; // Números que iniciam a sequência - 0, 1

    // Enquanto o num (valor passado via parâmetro) for MAIOR do que a, roda o loop
    while (a < num) {
        let temp = b; // Variável temporária para salvar o valor atual do último número (Inicialmente o 1)
        b = a + b; // Atualiza o valor de b (soma os dois últimos valores = próximo valor da sequência)
        a = temp; // Atualiza valor de a (recebe o valor que estava no b = valor anterior a soma)
    };

    return a === num; // Retorna um boleano que representa se o número é ou não Fibonacci
};


// Verificando se o número é Fibonnaci

let numero = 55; 

// 55 é um número Fibonnaci, portanto imprimirá o que satisfaz a condição (true)
if (ehFibonnaci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
};
*/


// Questão 3 - Descobrindo a lógica

/*
a) 1, 3, 5, 7, ___  => 9 (A sequência contém números ímpares positivos consecutivos)

b) 2, 4, 8, 16, 32, 64, ____ => 128 (próximo número = valor anterior * 2)

c) 0, 1, 4, 9, 16, 25, 36, ____ => 49 (Próximo número => (diferença dos dois números anteriores + 2) 13 = X - 36) -> X = 36 + 13

1 - 4 = 3 | 9 - 4 = 5 | 16 - 9 = 7 | 25 - 16 = 9 | 36 - 25 = 11... (É possível observa que a diferença do número seguinte sempre é a diferença do anterior + 2)


d) 4, 16, 36, 64, ____ => 100. (Neste caso, utilizam-se os números pares - consecutivos, a partir do 2 - elevados ao quadrado, como pode ser visto abaixo)
2 ** 2 => 4
4 ** 2 => 16
6 ** 2 => 36
8 ** 2 => 64
10 ** 2 => 100


e) 1, 1, 2, 3, 5, 8, ____ => 13 (O número seguinte = numero atual + anterior. Ex.: 8 + 5 = 13)


f) 2,10, 12, 16, 17, 18, 19, ____ => 20 (número 2 multiplicado por X = ao número seguinte.)

Ex.: 2x = 10 -> x = 10 / 2 -> x = 5. Portanto, 2 * 5 = 10. O mesmo procedimento é realizado com os demais. 
2 * 6 = 12 | 2 * 8 = 16 | 2 * 8.5 = 17 | 2 * 9 = 18 | 2 * 9.5 = 19 | 2 * 10 = 20.
*/



// Questão 5 - Inversão de caracteres (String) de um texto qualquer
/*
const texto = "Giovane Souza";

function inverterTexto(string) {
    //  Resolução utilizando reverse()
    // splite(''): Transforma a string em array (cada letra = 1 elemento)
    // reverse(): Inverte a ordem das letras dentro do array
    // join(''): Junta todas as letras (array) em uma string novamente
    // return string.split('').reverse().join(''); // Retorna o texto invertido
    
    
   // Resolução SEM reverse()
    let textoInvertido = ""; // Variável para guardar o texto invertido

    // Laço de repetição para percorrer as letras em ordem decrescente (do maior index ao menor)
    for (let count = texto.length - 1; count > -1; count--) {
        textoInvertido += texto[count]; // A cada repetição, add uma letra na variável textoInvertido, sendo a adição em forma decrescente
    };

    return textoInvertido; // Retorna o texto invertido
};

console.log(inverterTexto(texto)); // Entrada: Giovane Souza -> saída: azuoS enavoiG
*/
