const red = document.getElementById('red');
const blue = document.getElementById('blue');

function setValue(blueValue) {
    let blueVal = d3.arc().innerRadius(125).outerRadius(110).startAngle(0).endAngle(2 * Math.PI * blueValue)();
    let redVal = d3.arc().innerRadius(125).outerRadius(110).startAngle(2 * Math.PI * blueValue).endAngle(2 * Math.PI)();
    red.setAttribute('d', redVal);
    blue.setAttribute('d', blueVal);
}

function setBet(color) {
    let amount = document.getElementById('amount');
    let value = amount.value;
    if (color == "blue") {
        if (value > 0) {
            amountBlue += parseInt(value);
        }
    }
    else if (color == "red") {
        if (value > 0) {
            amountRed += parseInt(value);
        }
    }
    blueValue = amountBlue/(amountRed+amountBlue);
    setValue(blueValue);
    console.log(blueValue);
    amount.value = 0;
}

let amountRed = 1000000;
let amountBlue = 1000000;

let blueValue = amountBlue/(amountRed+amountBlue);
setValue(blueValue); 

let time = 10;
let timer = setInterval(()=>{
    time-=1;
    document.getElementById('timer').innerHTML = time;
    if (time == 0) {
        document.getElementById('timer').innerHTML = "";
        document.getElementById('wheel').style.transform = "rotate(1200deg)";
        time = 10;
        clearInterval(timer);
    }
}, 1000);

document.getElementById('buttonBlue').addEventListener('click', ()=>setBet('blue'));
document.getElementById('buttonRed').addEventListener('click', ()=>setBet('red'));