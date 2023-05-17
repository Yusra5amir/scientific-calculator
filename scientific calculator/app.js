function getNum(num) {
    console.log(num);
    document.getElementById('result').value += num;
}

function clearScr() {
    document.getElementById('result').value = "";
}

function removeNum(){
    var res = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0,res.length-1);
}

function getAns(){
    document.getElementById('result').value = eval(document.getElementById('result').value);
    console.log(document.getElementById('result').value);
}

function sqrt(){
    var square = document.getElementById('result').value;
    var store = (square);
    document.getElementById('result').value = store;
}

function per(){
    var percentage = document.getElementById('result').value;
    var temp = eval(percentage);
    var percent = temp*100 + "%";
    document.getElementById('result').value = percent;
}

function rad(){
    var radian = document.getElementById('result').value;
    var radia = (radian*100)/3.14;
    document.getElementById('result').value = radia;
}

function square(){
    var sqr = document.getElementById('result').value;
    var sqrs = (num*num)
    document.getElementById('result').value = sqrs;
} 



