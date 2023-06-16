const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function handlerFontSizeUpdate() {
    const fontSizeValue = fontSizeControl.value
    text.style.fontSize = `${fontSizeValue}px`
}

fontSizeControl.addEventListener('input', fontSizeUpdate)