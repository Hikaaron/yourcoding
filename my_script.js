$(function(){
    if(window.matchMedia('(max-width:767px)').matches) {
        $('#drop_menu_hidden').hide();
    } 
    else {
        $('#drop_menu_hidden').show();
    }

    $('#spnavi li').click(function(){
        if($('#drop_menu_hidden').is(':hidden')){
            $('#drop_menu_hidden:not(:animated)').slideDown('fast');
        } 
        else {
            $('#drop_menu_hidden:not(:animated)').slideUp('fast');
        }
    });

    $(window).resize(function(){
        if(window.matchMedia('(max-width:767px)').matches) {
            $('#drop_menu_hidden').hide();
        } 
        else {
            $('#drop_menu_hidden').show();
        }
    });

    $('.accordion3 dt').click(function(){
        //クリックされた.accordion3の中のp要素に隣接するul要素が開いたり閉じたりする。
        $(this).next('dd').slideToggle();
    });

});