$(function () {
    var popUp = $('#support-message');
    var messageBox = $('#message-content');
    messageBox.css('right','-'+messageBox.outerWidth()+'px');

});

$('body').on("click",'.open-popup',function () {
    var messageBox = $('#message-content');
   // $(this).css('right',messageBox.outerWidth()+'px');
   //  messageBox.css('right',0);
    $(this).addClass('close-popup');
    $(this).removeClass('open-popup');
    $(".overlay").fadeIn(300);
    $( this ).animate({
        right: messageBox.outerWidth(),
    }, 300, function() {
        // Animation complete.
    });
    $( messageBox ).animate({
        right: 0,
    }, 300, function() {
        // Animation complete.
    });
});

$('body').on("click",'.close-popup,.overlay',function () {
    var messageBox = $('#message-content');
    $('.message-button').addClass('open-popup');
    // $(this).css('right',messageBox.outerWidth()+'px');
    //  messageBox.css('right',0);
    $('.message-button').removeClass('close-popup');
    $(".overlay").fadeOut(300);
    $( '.message-button').animate({
        right: 0,
    }, 300, function() {
        // Animation complete.
    });
    $( messageBox ).animate({
        right: -messageBox.outerWidth(),
    }, 300, function() {
        // Animation complete.
    });
});


