// Create an arrays include colors
var colors = ["green", "red", "rgba(144,155,200)", "#f15025","pink"];

function start() {
    const btn = document.getElementById("btn");
    const color = document.querySelector(".color");
    btn.addEventListener("click", function () {
        const randomNumber = getRandomNumber();
        // console.log(randomNumber);

        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
    });
}
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
window.addEventListener("load", start, true)