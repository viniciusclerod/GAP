function $(selector) {
    return document.querySelector(selector);
}

window.onload = function() {
    var display = $('#tela');
    display.value = '';

    $('#clear').onclick = function() {
        display.value = '';
    };

    var buttons = [
        '#b0','#b1','#b2','#b3','#b4','#b5','#b6','#b7','#b8','#b9',
        '#bsoma', '#bmenos', '#bvezes', '#bdiv', '#bponto'
    ];

    for(i in buttons) {
        $(buttons[i]).onclick = function() {
            display.value += this.innerHTML;
        };
    }

    $('#bigual').onclick = function() {
        eval('display.value = ' + display.value);
    };

};
/*

// b1
var result = '';

function addRes(n){
    result += n;
    console.log(result)
}
document.getElementById('b1').onclick = function (){
    addRes(document.getElementById('b1').innerHTML);
    document.getElementById(b1).value = 1;
}
document.getElementById('b2').onclick = function (){
    addRes(document.getElementById('b2').innerHTML);
}
document.getElementById('b3').onclick = function (){
    addRes(document.getElementById('b3').innerHTML);

}
document.getElementById('b4').onclick = function (){
    addRes(document.getElementById('b4').innerHTML);

}
function b5(){
    addRes(document.getElementById('b5').innerHTML);

}
function b6(){
    addRes(document.getElementById('b6').innerHTML);

}
function b7(){
    addRes(document.getElementById('b7').innerHTML);

}
function b8(){
    addRes(document.getElementById('b8').innerHTML);

}
function b9(){
    addRes(document.getElementById('b9').innerHTML);

}
function bzero(){
    addRes(document.getElementById('bzero').innerHTML);
}
function bsoma(){

}
function bmenos(){
    result += getElementById("bmenos")

}
function bvezes(){
    result += getElementById("bvezes")

}*/
