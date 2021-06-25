let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let menorNumero = numbers[0];

for (cont = 0; cont < numbers.length; cont += 1){
         if (numbers[cont] < menorNumero){
         menorNumero = numbers[cont];
         }

}
   console.log('O menor numero e ' + menorNumero);