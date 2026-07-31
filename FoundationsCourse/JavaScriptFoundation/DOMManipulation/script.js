//reference to container div
const container = document.querySelector("#container");

//create new div and store in content variable
const content = document.createElement("div");

//create class and text content and append the div to container
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
