$( document ).ready(function() {
    $('#menu>li').click(function(target){
        var block = ($(this).children('ul'));
        setCss(block);
        var content =$(this).html();
        if(!content.includes("MIN PROFIL")){
            var position = $(this).offset();
            $('.overlayMenu').fadeIn(200);
            $('.triangle').offset({ top: position.top+10, left: position.left+277 });
            $('.triangle').fadeIn(200);
            $('.overlayMenu').css("display","block");
        }
    });
    $('.overlayMenu').click(function(target){
        $('.triangle').fadeOut(10);
        $('.triangle').offset({ top: 0, left: 0 });
        $('.overlayMenu').fadeOut(200);
        $('#menu>li>ul').fadeOut(200);

    });
    function setCss(block) {
        block.fadeIn(200);
        block.css('position','absolute');
        block.css('top','-100px');
        block.css('left','300px');
        block.css('background-color','#4ba3b6');
    }
});