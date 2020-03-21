$(function(){
    $('#azul').click(function(){
        $('p').css("background-color", "blue");
        $('#msg').text("Cor alterada com sucesso!");
        $('p').fadeOut().delay(1000).fadeint();
        
    });
    
    $('#vermelho').click(function(){
        $('p').css("background-color", "red");
        $('#msg').text("Cor alterada com sucesso!");
        $('p').fadeOut().delay(1000).fadeint();
     });    

});

$(function(){
    $('#img2').click(function(){
        $('#i1').hide();
        $('#i2').show();
    });
    $('#img1').click(function(){
        $('#i2').hide();
        $('#i1').show();
    });
});