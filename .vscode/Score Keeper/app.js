const p1button = document.querySelector('#p1Button');
const p2button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');


let p1Score = 0;
let p2Score = 0;
let winScore = 5;
let isGameOver = false;

//funcion de boton 1
p1button.addEventListener('click', function(){
    if(!gameOver){
        
        p1Score += 1;

        if(p1Score ===winScore){
            isGameOver = true;
        }
        p1Display.textContent = p1Score;

    }

});

//funcio de boton 2
p2button.addEventListener('click', function(){

    if(p2Score !== winScore){
        
        p2Score += 1;
        p2Display.textContent = p2Score;
        
    }
});

