// let name;
// let country;
// let p = document.getElementById('output');

// const nameChanged = function(event) {
//     name = event.target.value;
//     changeInput();
// }

// const countryChange = function(event) {
//     country = event.target.value;
//     changeInput();
// }

let button = document.querySelector("button");
let nameChanged = document.querySelector('#nameChanged');

button.addEventListener("click" , function(){
    console.log("geklikt!");
});

nameChanged.addEventListener("change" , function(){
    name = event.target.value;
    changeInput();
});

const changeInput = function(event) {
    const text = `Je heet ${name} en je komt uit ${country}`;
    p.textContent = text;
}