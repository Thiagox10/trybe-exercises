let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let maiorNumero = 0;

for (cont = 0; cont < numbers.length; cont += 1){
         if (numbers[cont] > maiorNumero){
         maiorNumero = numbers[cont];
         }

}
   console.log('O maior numero e ' + maiorNumero);

