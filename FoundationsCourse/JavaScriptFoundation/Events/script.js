const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("Wohoo!");
});

function alertFunction() {
    alert("Yay! You did it!");
}

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
    console.log(e);
});