const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const box = document.querySelector('#box');
const know = document.querySelector('#know');
const move = document.querySelector('#move');
const laugh = document.querySelector('#laugh');
const nope = document.querySelector('#nope');

function playSound() {
    laugh.play();
  }

  function playNope() {
    nope.play();
  }

yes.addEventListener('click', () =>{
    playSound();
    box.classList.add('d-none');
    know.classList.remove('d-none');
})

no.addEventListener('click', ()=>{
    playNope();
    if(move.classList.contains('justify-content-center')){
        move.classList.remove('justify-content-center')
        move.classList.add('justify-content-end')

    } else if(move.classList.contains('justify-content-end')){
        move.classList.remove('justify-content-end')
        move.classList.add('justify-content-start')

    } else if(move.classList.contains('justify-content-start')){
        move.classList.remove('justify-content-start')
        move.classList.add('justify-content-center')
    }
})
