window.onload = function() {

    var demo = $('#demo');
    demo.innerHTML = 'texto';
    demo.style.background = 'red';

    $('button').onclick = function() {
        alert('clickado');
    };
};