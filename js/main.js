$(document).ready(function(){
   	//color en el menu
    $("li").mouseover(function(){
        $("a").animate({height: "120px"});
        $(this).css("background-color","#CE79EA")
    });
    $("li").mouseleave(function(){
        $("a").animate({height: "60px"});
        $(this).css("background-color","black")
    });
    //ocultar el titulo
    $("#textobg").hide();
    $(document).keydown(function() {
    	$('#textobg').show("slow");
    });
    //para que las letras del input se vean
    $('input').focus(function() {
    	$(this).css('color','black')
    });
    //hacer grandes los iconos de las redes sociales
    $(".img-circle").mouseover(function(){
        $(this).animate({width: "40px"});
        $(this).css("background-color","#CE79EA")
    });
    $(".img-circle").mouseleave(function(){
        $(this).animate({width: "20px"});
        $(this).css("background-color","black")
    });
    //
    $('a').click(function () {
        $(".slide").effect('slide');
    }); 
});