buttonContainer = document.querySelector(".button-container");
let html = "";

for (let i = 0; i < 16; i++) {
    html += `<button class="button-item">X</button>`;
}

buttonContainer.innerHTML = html;