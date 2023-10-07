const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    let hasTag = "#";

    function hexColor() {
        let hexcolor = "";
        for (let i = 0; i < 6; i++) {
            hexcolor += hex[getRandomNumber()]
        }
        return hexcolor;
    }
    let myColor = hasTag + hexColor();

    color.textContent = myColor;
    document.body.style.backgroundColor = myColor;

})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
