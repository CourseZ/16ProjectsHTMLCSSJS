const textAreaElem = document.getElementById("textarea");
const totalCounterElem = document.getElementById("total-counter");
const remainingCounterElem = document.getElementById("remaining-counter");

textAreaElem.addEventListener("keyup",() => {
    // console.log("Key is pressed");
    updateCounter();
    // updateRemaining();
});

updateCounter();

function updateCounter() {
    totalCounterElem.innerText = textAreaElem.value.length;
    remainingCounterElem.innerText = textAreaElem.getAttribute("maxLength") - textAreaElem.value.length;
}

// function updateRemaining() {
//     remainingCounterElem.innerText = 50 - textAreaElem.value.length;
// }