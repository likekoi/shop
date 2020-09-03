$(window).on('resize',function() {
    $('.titlei').each(function(){
        if($(this).width() > $(this).parent('div').width()){
            $(this).css('word-break', 'break-all');
        }
        else{
            $(this).css('word-break', 'break-word');
            if($(this).width() > $(this).parent('div').width()){
                $(this).css('word-break', 'break-all');
            }
        }
     });
}).trigger('resize');
