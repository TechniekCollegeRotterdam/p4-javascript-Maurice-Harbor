//Oefening angry-birds

const bird = document.querySelector('.bird')
let count = 0;

bird.addEventListener("click", function() {
    count += 50;
    bird.style.left = count + 'px';
    console.log("click")
});

