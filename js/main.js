function changeDBColor(){
	//original: before injection 
	//after scrolling: overlay sqlinjection image 
	
}

$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#ilr').position().top){
        //$("#ilr").css('opacity', '0.6');
        //$("#ilr").css('-webkit-animation', 'graduallydark 2s');
          $('#blackOverlay').css('opacity',$(this).scrollTop()/$('#blackOverlay').height());


    }
   // else $("#ilr").css('-webkit-animation', 'graduallylight 2s');
})




