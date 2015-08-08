function $(selector){
    return document.querySelector(selector);
}
var server = function (host){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET',host, false);
    xmlhttp.send();
    return xmlhttp.responseText;
};


