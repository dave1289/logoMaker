const form = document.querySelector('#logoform');
const results = document.querySelector('#results')

const brandInput = document.querySelector('input[name="brand"]')
const colorInput = document.querySelector('input[name="color"]')
const sizeInput = document.querySelector('input[name="size"]')
// element[attribute="value"]

function makeLogo(text, color, size) {
    const logo = document.createElement('h2');
    logo.innerText = text;
    logo.style.color = color;
    logo.style.fontSize = `${size}px`;
    return logo

}

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    const newLogo = makeLogo(
        brandInput.value,
        colorInput.value,
        sizeInput.value
        );
        console.log(        brandInput.value,
            colorInput.value,
            sizeInput.value)
    results.appendChild(newLogo)
})
