$(function(){
  let ul = $('.nationExh-list');
  let liWidth = $('.nationExh-list').find('li').outerWidth(true);
  let liLength = $('.nationExh-list').find('li').length; //6
  let liClone = $('.nationExh-list').find('li').clone();
  let ulWidth = $('.nationExh-list').outerWidth();
  
  let ulExtend = function(){
    ul.append(liClone);
    ulWidth = liWidth * liLength * 2 ;
    ul.css('width',ulWidth);
  }
  ulExtend();

  let count = 0;

  $('.nExh-prev').click(function(){
    if(count <= 0){
      count = 6;
      ul.css('left',-liWidth*6);
    }
    count --;
    ul.stop().animate({left:-liWidth*count},400);
    clearInterval(ExhRotate);
    $('.nExh-stop').css('display','none');
    $('.nExh-play').css('display','block');
  });
  $('.nExh-next').click(function(){
    if(count > 5){
      count = 0;
      ul.css('left','0')
    }
    count ++ ;
    ul.stop().animate({left:-liWidth*count},400);
    clearInterval(ExhRotate);
    $('.nExh-stop').css('display','none');
    $('.nExh-play').css('display','block');
  });

  let ExhRotate;
  function ExhAutoPlay(){
    ExhRotate = setInterval(()=>{
      if(count > 5){
        count = 0;
        ul.css('left','0')
      }
      count ++ ;
      ul.stop().animate({left:-liWidth*count},400);
      return false;
    },2000)
  }
  ExhAutoPlay();
  
  $('.nExh-stop').click(function(){
    clearInterval(ExhRotate);
    $('.nExh-stop').css('display','none');
    $('.nExh-play').css('display','block');
  });
  $('.nExh-play').click(function(){
    ExhAutoPlay();
    $('.nExh-play').css('display','none');
    $('.nExh-stop').css('display','block');
  })
});