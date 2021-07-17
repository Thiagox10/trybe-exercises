const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


//1. Copie esse arquivo e edite apenas ele;

//2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
//2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function addTech (event){
  let tech = document.querySelector('.tech');
  tech.classList.remove('tech');
  event.target.classList.add('tech');
}

firstDiv.addEventListener("click",addTech)
secondDiv.addEventListener("click",addTech)
thirdDiv.addEventListener("click",addTech)
  
    
  



//3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
//com a classe 'tech';
function changeText(){
  let textBox = document.querySelector('.tech');
  textBox.innerHTML = input.value;
}
input.addEventListener("keyup",changeText)
//4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
//redirecione para alguma página;
//4.1. Que tal redirecionar para seu portifólio?

myWebpage.addEventListener('dblclick',redireciona)
function redireciona(){
  window.open("https://www.Thiagox10.github.io", "_blanck");

}

//5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
//a cor do mesmo;
function changeColor(){
  myWebpage.style.color = 'cyan'
}
myWebpage.addEventListener('mouseover',changeColor)
function changeColor2(){
  myWebpage.style.color = 'unset'
}
myWebpage.addEventListener('mouseout',changeColor2)
//Segue abaixo um exemplo do uso de event.target:
//

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
secondDiv.addEventListener('dblclick', resetText);
thirdDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
