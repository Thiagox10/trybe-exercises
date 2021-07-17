let number = 5;

for (let index = 1; index <= number; index++) {
let line = '';
let asterisco = number - index;

for (let otherIndex = 0; otherIndex < number; otherIndex++) {
if (line.length < asterisco) {
    line += ' ';
} else {
    line += '*';
}
}

console.log(line);
} 