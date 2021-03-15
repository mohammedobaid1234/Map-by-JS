
$(function(){
    'use strick';
    $('.whole').height($(window).height());
    $(window).resize(function () { 
        $('.whole').height($(window).height());
        $('.container').css({
            'top' : $(window).height/2
        })
        
    });
})
