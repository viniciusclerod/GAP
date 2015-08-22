window.onload = function() {
    $('.preloader').style.display = 'inline-block';
    server.load('page/home.html', function(html) {
        var body = html.body.firstElementChild;
        console.log(body);
        document.title += ' - ' + html.title;
        var target = $('section#target');
        target.innerHTML = null;
        target.appendChild(body);
        $('.preloader').style.display = 'none';
    });
};