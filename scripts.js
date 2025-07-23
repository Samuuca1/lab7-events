const hoverDiv = document.getElementById("hoverDiv");

function changeHover(event){
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