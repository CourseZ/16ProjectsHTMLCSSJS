const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);


const questionElem1 = document.getElementById("question");

const inputElem = document.getElementById('input');

const formElem = document.getElementById('form');

const scoreElem = document.getElementById("score");


let score = JSON.parse(localStorage.getItem("score"));

if(!score) { //ngăn ngừa lồi khi không có score
    //trường hợp này xảy ra khi vừa mới load web
    score = 0;
}

scoreElem.innerText = `Score: ${score}`;

questionElem1.innerText = `What is ${num1} multiply by ${num2}`;

const correctAns = num1*num2;
// console.log(correctAns, typeof correctAns); number

formElem.addEventListener("submit", function(){
    const userAns = +inputElem.value; //dấu cộng đằng trc để convert string to number
    // console.log(userAns, typeof userAns); string
    if (userAns === correctAns) {
        score++;
        // console.log(score);
        updateLocalStorage();
    } else {
        score--;
        // console.log(score);
        updateLocalStorage();
    }
});

function updateLocalStorage() {
    //localStorage là dữ liệu đã đc lưu trên các trình duyệt
    // chỉ khi đóng hết các tab sẽ bị xóa
    //setItem là thêm 1 item vào localStorage
    //tham số 1 là tên, tham số thứ 2 là kiểu dữ liệu
    localStorage.setItem("score", JSON.stringify(score));  //stringify là chuyển 1 đối tượng js sang JSON
}