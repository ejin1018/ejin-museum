$(function(){
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var utilHeight = $('.utility-wrap').height();
    if(scrollTop>=utilHeight){
      $('.header-wrap').addClass('head-fixed');
      $('.subPage-contents-wrap').addClass('cont-fixed');
    }else{
      $('.header-wrap').removeClass('head-fixed');
      $('.subPage-contents-wrap').removeClass('cont-fixed');
    }
  })
})