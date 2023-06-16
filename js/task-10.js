function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const selectors = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  box: document.querySelector("#boxes")
};


function createBoxes(amount) {
  let boxes = '';
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const boxColor = getRandomHexColor();
    boxes += `<div style = "width: ${boxSize}px; height: ${boxSize}px; background-color: ${boxColor};"></div>`
    boxSize += 10;
  }

  selectors.box.insertAdjacentHTML('beforeend', boxes);

};

function destroyBoxes() {
  selectors.box.innerHTML = '';
};

selectors.createBtn.addEventListener('click', () => createBoxes(selectors.input.value));
selectors.destroyBtn.addEventListener('click', destroyBoxes);