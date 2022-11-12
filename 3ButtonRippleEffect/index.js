const btnElem = document.querySelector(".btn");

btnElem.addEventListener("mouseover", (event) => {
    // console.log(event.pageX - btnElem.offsetLeft);
    // console.log(event.pageY - btnElem.offsetTop);

    const x = event.pageX - btnElem.offsetLeft;
    const y = event.pageY - btnElem.offsetTop;

    console.log(btnElem.style);

    btnElem.style.setProperty("--xPos", x + "px");
    btnElem.style.setProperty("--yPos", y + "px");
});