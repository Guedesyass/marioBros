const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over');
const restart = document.querySelector('.btn');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    },500)
}

const loop = setInterval(()=> {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 70){

        pipe.style.animation =  'none';
        pipe.style.left = `${pipePosition}px`;

        
        mario.style.animation =  'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './src/img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        gameOver.classList.remove('playing');

        clearInterval(loop);
    }
    }
 ,10)

    restart.addEventListener('click', () => {
        window.location.reload(true);
    })

document.addEventListener('keydown', jump);