$(function(){
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var utilHeight = $('.utility-wrap').height();
    if(scrollTop>=utilHeight){
      $('.header-wrap').css('position','fixed');
    }else{
      $('.header-wrap').css('position','relative');
    }
  })
})