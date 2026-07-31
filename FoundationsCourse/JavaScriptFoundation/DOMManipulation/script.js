//reference to container div
const container = document.querySelector("#container");
//create new div and store in content variable
const contentDiv = document.createElement("div");
const contentDivBorder = document.createElement("div");
const contentParagraph = document.createElement("p");
const contentParagraph2 = document.createElement("p");
const contentH3 = document.createElement("h3");
const contentH1 = document.createElement("h1"); 


//create class and text content and append the div to container
contentDiv.classList.add("content");
contentDiv.textContent = "This is the glorious text-content!";
contentDivBorder.style.border = "1px solid black";
contentDivBorder.style.backgroundColor = "pink";
contentParagraph.style.color ="red";
contentParagraph.textContent ="Hey I'm red!";
contentParagraph2.textContent = "ME TOO!";
contentH3.style.color ="blue";
contentH3.textContent ="I’m a blue h3!";
contentH1.textContent ="I’m in a div";



container.appendChild(contentDiv);
container.appendChild(contentParagraph);
contentDivBorder.appendChild(contentH1);
contentDivBorder.appendChild(contentParagraph2);
container.appendChild(contentDivBorder);
container.appendChild(contentH3);

/* Solution: Has a better structure! Remember this:

const container = document.querySelector("#container");


const redParagraph = document.createElement("p");
redParagraph.classList.add("red"); // oder redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm red!";

container.appendChild(redParagraph);


const blueH3 = document.createElement("h3");
blueH3.classList.add("blue"); // oder blueH3.style.color = "blue";
blueH3.textContent = "I’m a blue h3!";

container.appendChild(blueH3);


const pinkDiv = document.createElement("div");
pinkDiv.style.border = "1px solid black";
pinkDiv.style.backgroundColor = "pink";


const divH1 = document.createElement("h1");
divH1.textContent = "I’m in a div";

const divParagraph = document.createElement("p");
divParagraph.textContent = "ME TOO!";


pinkDiv.appendChild(divH1);
pinkDiv.appendChild(divParagraph);


container.appendChild(pinkDiv);
*/
