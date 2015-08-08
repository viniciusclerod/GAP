window.onload = function() {
    var expression = $('#display');
    var buttons = [
        '#zero', '#dot',
        '#one', '#two', '#three',
        '#four', '#five', '#six',
        '#seven', '#eight', '#nine',
        '#plus', '#minus', '#times', '#obelus'
    ];
    for(var index in buttons) {
        $(buttons[index]).onclick = function() {
            expression.value += this.innerHTML;
        };
    }
    $('#clear').onclick = function() {
        expression.value = '';
    };
    $('#equal').onclick = function() {
        eval('expression.value = '+expression.value);
    };

};