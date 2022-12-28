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
  console.log(ulWidth);

  let count = 0;

  $('.nExh-prev').click(function(){
    if(count <= 0){
      count = 6;
      ul.css('left',-liWidth*6);
    }
    count --;
    ul.animate({left:-liWidth*count},400);
    console.log(count);
  });
  $('.nExh-next').click(function(){
    if(count > 5){
      count = 0;
      ul.css('left','0')
    }
    count ++ ;
    ul.animate({left:-liWidth*count},400);
    console.log(count);
  });

  let ExhRotate = setInterval(function(){
    if(count > 5){
      count = 0;
      ul.css('left','0')
    }
    count ++ ;
    ul.animate({left:-liWidth*count},400);
  },2000);
  ExhRotate;

  $('.nExh-stop').click(function(){
    clearInterval(ExhRotate);
    $('.nExh-stop').toggleClass('nExh-play');
  });
});