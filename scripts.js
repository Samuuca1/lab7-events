const hoverDiv = document.getElementById("hoverDiv");

function changeHover(event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Now I am different :) ";
}

hoverDiv.addEventListener("mouseover", changeHover)

hoverDiv.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = 'lightcoral';
    event.target.textContent = "Hover over me ";
});

const inputKey = document.getElementById("inputKey");

document.addEventListener("keydown", event => {
    inputKey.textContent = `KEY Pressed= ${event.key}`;
})

document.addEventListener("keyup", event => {
    inputKey.textContent = `You released the key = ${event.key}`;
})


let who;

document.getElementById("submit").onclick = function (event) {
    event.preventDefault();
    who = document.getElementById("who").value;
    document.getElementById("h1Who").textContent = `Welcome ${who}, this is my lab7 Events project`
    alert(`${who} is here!`);
}

const ageInput = document.getElementById('age');
    ageInput.addEventListener('focus', (event) => {
        event.target.style.backgroundColor = 'lightyellow';
        console.log('Button received focus!');
    });

function wrongAge() {
    var age = document.getElementById('age');
    var ageInput = parseInt(age.value, 10);

    if (ageInput >= 18) {
        age.style.backgroundColor = 'lightgreen';


    } else {
        age.style.backgroundColor = 'tomato';

    }
}

const list = document.getElementById("list");

list.addEventListener("click", function(event){
    const target = event.target;

    if (target.matches("li")) {
        alert('I am also excited for ' + event.target.textContent);
        target.style.backgroundColor = "green";
    }
})