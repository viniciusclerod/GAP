function navegacao(rota){
    server.load('pages/'+rota+'.html', function(res){
        var body = res.body.firstElementChild;
        $('section#target').innerHTML = null;
        $('section#target').appendChild(body);
    });
}

window.onload = function(){
    navegacao('inicio');
};
