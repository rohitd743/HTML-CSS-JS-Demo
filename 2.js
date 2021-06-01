console.log("2.JS");

function changeColor() {
    console.log("I will change the color!!");

    let refId2 = document.querySelector("#id2");
    refId2.style.color="white";
    refId2.style.backgroundColor = "tomato"
}


function changeRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let colorCode = `rgb(${r}, ${g}, ${b})`;

    let refId2 = document.querySelector("#id3");
    refId2.style.color=colorCode;
}