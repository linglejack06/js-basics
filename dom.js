// select container
let container = document.querySelector('div#container');
//create para element
let para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey I'm red!"
container.appendChild(para);
// create blue element
let blueText = document.createElement('h3');
blueText.style.color = 'blue';
blueText.textContent = "I'm a blue h3!";
container.appendChild(blueText);
// create inner div
let innerDiv = document.createElement('div');
innerDiv.style.border = 'black';
innerDiv.style.backgroundColor = 'pink';
// create big text for inner div
let bigText = document.createElement('h1');
bigText.textContent = "I'm in a div";
innerDiv.appendChild(bigText);
// create paragraph for inner div
let innerPara = document.createElement('p');
innerPara.textContent = "Me too!";
innerDiv.appendChild(innerPara);
// append inner div
container.appendChild(innerDiv);
