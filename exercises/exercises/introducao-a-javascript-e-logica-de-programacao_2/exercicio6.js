let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let numeroImpar = 0;

for (cont = 0; cont < numbers.length; cont += 1){
         if (numbers[cont] % 2 == 1){
         numeroImpar +=1;
         }

}
   console.log('Os numero impares sao ' + numeroImpar);