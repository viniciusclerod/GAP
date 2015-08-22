function $(selector) {
    return document.querySelector(selector);
}

var server = {
    getJSON: function(url) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', url);
        xmlhttp.send();
        return JSON.parse(xmlhttp.responseText);
    },
    load: function (url, callback) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function () {
            callback(this.responseXML);
        };
        xmlhttp.open('GET', url);
        xmlhttp.responseType = 'document';
        xmlhttp.send();

    }
};