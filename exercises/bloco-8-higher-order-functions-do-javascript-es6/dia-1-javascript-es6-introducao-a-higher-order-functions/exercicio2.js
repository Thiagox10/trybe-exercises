// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const resultadoSorteio = (numApostado, callback) => {
    const numeroSorteado = Math.floor(Math.random() * (5 - 0 + 1) + 0); 
    console.log(numeroSorteado);
    
   return callback(numApostado,numeroSorteado);
}


const checkNumeroApostado = (a,b) => {

    if (a === b) {
        return 'Parabéns você ganhou' ;
    }else return 'Tente novamente';

}

console.log(resultadoSorteio(2,checkNumeroApostado));