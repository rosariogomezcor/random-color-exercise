const button = document.querySelector('button'); 
const h1 = document.querySelector('h1'); 
button.addEventListener('click', () => {
    const newColor = randomColor(); 
    document.body.style.backgroundColor = newColor; 
    h1.innerText = newColor; 
}); 

const randomColor = () => {
    function randomNumber() {
        return Math.floor(Math.random() * 255); 
    }
    const r = randomNumber(); 
    const g = randomNumber(); 
    const b = randomNumber(); 
    return `rgb(${r}, ${g}, ${b})`; 
}