//Oefening angry-birds

const bird = document.querySelector('.bird')
let count = 0;

bird.addEventListener("click", function() {
    count += 50;
    bird.style.left = count + 'px';
    console.log("click")
});



window.addEventListener("keydown", function(e) {
    console.log(event);
    if(e.key == 'ArrowRight'){
        bird.src = "img/b-right.svg"
        count += 50;
        bird.style.left = count + 'px';
    }
    if(e.key == 'ArrowLeft'){
        bird.src = "img/b-left.svg"
        count -= 50;
        bird.style.left = count + 'px';
    }
    if(e.key == 'ArrowUp'){
        bird.src = "img/b-up.svg"
        count += 50;
        bird.style.bottom = count + 'px';
    }
    if(e.key == 'ArrowDown'){
        bird.src = "img/b-down.svg"
        count += 50;
        bird.style.top = count + 'px';
    }
})

