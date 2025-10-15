function verify() {
    console.log("D, A")
    let D = parseInt(elementD.value);
    let A = parseInt(elementA.value);
    console.log(D, A)

    const diagonal=A*Math.sqrt(2)

    if (diagonal <= D) {
        result = "Можно"
        check = true;
    } 
    else {
        result = "Нельзя"
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}



let result;
let check;

const elementD = document.getElementById("D");
const elementA = document.getElementById("A");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)