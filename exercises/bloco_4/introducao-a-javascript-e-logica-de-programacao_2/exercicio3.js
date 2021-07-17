let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let soma = 0;
let qtd = 0;
let media;

for (cont = 0; cont < numbers.length; cont += 1){
    soma = soma + numbers[cont];
    qtd += 1;
}
media = soma/qtd;
console.log(media);

