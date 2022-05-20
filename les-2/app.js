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
        count += 50;
        bird.style.left = count + 'px';
    }
    if(e.key == 'ArrowLeft'){
        count -= 50;
        bird.style.left = count + 'px';
    }
    if(e.key == 'ArrowUp'){
        count += 50;
        bird.style.bottom = count + 'px';
    }
    if(e.key == 'ArrowDown'){
        count += 50;
        bird.style.top = count + 'px';
    }
})

