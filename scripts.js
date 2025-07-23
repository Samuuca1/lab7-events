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