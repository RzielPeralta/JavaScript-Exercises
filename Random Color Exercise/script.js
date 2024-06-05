

const button = document.querySelector('button');

const h1 = document.querySelector('#wText');

button.addEventListener('click', function() {
    
    const newColor = makeRandomColor();
    document.body.style.backgroundColor= newColor;
    h1.innerText = newColor; 

})


const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}


/*
//otra forma de realizar el ejercicio 
const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
 
 
btn.addEventListener('click',() => {
    let rgbColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
    h1.innerText= rgbColor;
    document.body.style.backgroundColor = rgbColor;
})

function randomColor() {
    return Math.floor(Math.random() * 255);
}*/