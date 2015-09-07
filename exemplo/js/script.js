var $ = function(selector) {
    return document.querySelector(selector);
};
window.onload = function(){
    var firstname = $('input[name=firstname]');
    firstname.style.background = '#cccccc';
    firstname.onkeyup = function(){
        console.log(this.value);
    };
};