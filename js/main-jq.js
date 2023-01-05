$(function(){

  // top button
  var topBtn = $('.top-fix');
  topBtn.click(function(){
    $('html,body').animate({
      scrollTop:0
    },500);
  });

  // copyright notice
  var popClose = $('.layer-close');
  popClose.click(function(){
    $('#layer').css('display','none');
  })

  //search
  var searchBtn = $('.search-btn');
  var searchLayer = $('.search-layer');
  var searchClose = $('.sign-inner > .search-close');
  searchBtn.click(function(){
    searchLayer.stop().slideDown(400);
    searchBtn.css('display','none');
    searchClose.css('display','inline-block');
  });
  searchClose.click(function(){
    searchLayer.stop().slideUp(400);
    searchBtn.css('display','inline-block');
    searchClose.css('display','none');
  });

  // utility menu
  var utilMuseum = $('.util-museum');
  var utilLang = $('.util-lang');
  utilMuseum.click(function(){
    $(this).children('a').toggleClass('utility-btn-on');
    $(this).children('.util-sub-list').stop().slideToggle(400);
  });
  utilMuseum.mouseleave(function(){
    $(this).children('a').removeClass('utility-btn-on');
    $(this).children('.util-sub-list').stop().slideUp(400);
  });
  utilLang.click(function(){
    $(this).children('a').toggleClass('utility-btn-on');
    $(this).children('.util-sub-list').stop().slideToggle(400);
  });
  utilLang.mouseleave(function(){
    $(this).children('a').removeClass('utility-btn-on');
    $(this).children('.util-sub-list').stop().slideUp(400);
  });

  // main menu
  var topBtns = $('.gnb-top-btn');
  var midMenu = $('.gnb-mid-list');
  var midBtns = $('.gnb-mid-btn');
  var botMenu = $('.gnb-bot-list');
  topBtns.mouseenter(function(){
    midMenu.stop().hide();
    $(this).next('.gnb-mid-inner').children('.gnb-mid-list').stop().show();
  });
  midBtns.mouseenter(function(){
    botMenu.stop().hide();
    midBtns.removeClass('gnb-mid-btn-on');
    $(this).addClass('gnb-mid-btn-on');
    $(this).next('.gnb-bot-list').stop().show();
  })
  botMenu.mouseenter(function(){
    $(this).prev('gnb-mid-btn').addClass('gnb-mid-btn-on');
  })
  botMenu.mouseleave(function(){
    midBtns.removeClass('gnb-mid-btn-on');
    $(this).stop().hide();
  })

  // nation Exhibition
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
    ExhRotate = setInterval(function(){
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