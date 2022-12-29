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
    console.log(count);
  });
  $('.nExh-next').click(function(){
    if(count > 5){
      count = 0;
      ul.css('left','0')
    }
    count ++ ;
    ul.stop().animate({left:-liWidth*count},400);
    console.log(count);
  });

  let ExhRotate = setInterval(ExhAutoPlay,2000);

  function ExhAutoPlay(){
    if(count > 5){
      count = 0;
      ul.css('left','0')
    }
    count ++ ;
    ul.stop().animate({left:-liWidth*count},400);
    return false;
  }
  
  $('.nExh-stop').click(function(){
    $('.nExh-stop').toggleClass('nExh-play');
    if($('.nExh-stop').hasClass('nExh-play')){
      clearInterval(ExhRotate);
      return false;
    }else{
      setInterval(ExhAutoPlay,2000);
      return false;
    }
  });
});