// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {
  const h2 = document.getElementById('jokeContainer');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then((data) => h2.innerText = data.joke);
};

const promise = new Promise((resolve, reject) => {
  function getRandom(min, max) {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.pow(result, 2);
}

let array = [];
let soma = 0;
for (let i = 0 ; i < 10 ; i++){
  array.push(getRandom(1,50));
    soma += array[i];
}

console.log(array);
console.log(soma);

})
.then(() => {
  const didOperationSucceed = soma < 8000;
if(didOperationSucceed) {
  
 return console.log('Promise resolvida')
}

})
.catch(console.log('Promise rejeitada'))

window.onload = () => fetchJoke();