buttonContainer = document.querySelector(".button-container");
buttonSymbols = ["C", "+/-", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="];

let html = "";

for (let i = 0; i < 18; i++) {
    if (i === 15 || i === 0) {
        html += `<button class="button-item button-long">${buttonSymbols[i]}</button>`;
    } else {
        html += `<button class="button-item">${buttonSymbols[i]}</button>`;
    }

}

buttonContainer.innerHTML = html;

buttons = document.querySelectorAll(".button-item");

buttons.forEach(item => {

    item.onclick = function (event) {
        console.log(item.innerText);
    }
});

