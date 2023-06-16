let counterValue = 0;
const selectors = {
    decrBut: document.querySelector('button[data-action="decrement"]'),
    incrBut: document.querySelector('button[data-action="increment"]'),
    counterSpan: document.querySelector("#value")
}

// const decrBut = document.querySelector('button[data-action="decrement"]')
// const incrBut = document.querySelector('button[data-action="increment"]')
// const counterSpan = document.querySelector("#value")

function updateCounter() {
    selectors.counterSpan.textContent = counterValue;
}
function handlerClickDecr() {
    counterValue -= 1;
    updateCounter()
}

function handlerClickInkr() {
    counterValue += 1;
    updateCounter()
}

selectors.decrBut.addEventListener('click', handlerClickDecr);
selectors.incrBut.addEventListener('click', handlerClickInkr)
