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

  // main slide
  var mainUl = $('.main-exhibition-inner');
  var mainLi = $('.main-exhibition-inner li');
  var mainLiWidth = mainLi.width();
  var mainLiLength = mainLi.length; //5
  var mainClone = mainLi.clone();
  var mainNext = $('.main-next-btn');
  var mainPrev = $('.main-prev-btn');
  var mainStop = $('.main-stop-btn');
  var mainPlay = $('.main-play-btn');
  var mainPgn = $('.main-pagination');
  var pgnClone
  var mainC = 0;
  var pageC = 0;
  let mainAP;

  mainUl.append(mainClone);
  mainUl.css('width',mainUl.width()*2);
  for(let makePgn=1; makePgn<mainLiLength; makePgn++){
    pgnClone = document.createElement('span');
    mainPgn.append(pgnClone);
  }
  
  var mainPgnBtn = mainPgn.children('span');
  
  function mainAutoPlay(){
    mainAP = setInterval(function(){
      if(mainC >= mainLiLength){
        mainC = 0;
        mainUl.css('left','0');
      }
      mainC ++ ;
      mainUl.stop().animate({'left':-(mainLiWidth*mainC)*2},400);

      pageC++;
      if(pageC >= mainLiLength){
        pageC = 0;
      }
      mainPgnBtn.css('background','#fff');
      mainPgnBtn.eq(pageC).css('background','#276868');

      console.log('mainIndex '+mainC)
    },3000);  
  } 
  mainAutoPlay();
  
  mainPrev.click(function(){
    mainAutoStop();
    if(mainC <= 0){
      mainC = mainLiLength;
      mainUl.css('left',-(mainLiWidth*mainLiLength)*2);
    }
    mainC -- ;
    mainUl.stop().animate({'left':-(mainLiWidth*mainC)*2},400);
    mainPgnBtn.css('background','#fff');
    mainPgnBtn.eq(mainC).css('background','#276868');
  });
  mainNext.click(function(){
    mainAutoStop();
    if(mainC >= mainLiLength){
      mainC = 0; 
      mainUl.css('left','0');
    }
    mainC ++ ;
    mainUl.stop().animate({'left':-(mainLiWidth*mainC)*2},400);

    pageC++;
    if(pageC >= mainLiLength){
      pageC = 0;
    }
    mainPgnBtn.css('background','#fff');
    mainPgnBtn.eq(pageC).css('background','#276868');

    console.log('mainIndex '+mainC)
  });
  
  function mainAutoStop(){
    clearInterval(mainAP);
    mainStop.css('display','none');
    mainPlay.css('display','block');
  }
  mainStop.click(function(){
    mainAutoStop();
  });
  mainPlay.click(function(){
    mainAutoPlay();
    mainPlay.css('display','none');
    mainStop.css('display','block');
  });

  mainPgnBtn.click(function(){
    mainAutoStop();
    mainPgnBtn.css('background','#fff');
    $(this).css('background','#276868');
    var pgnC = $(this).index();
    console.log('paginationIndex'+pgnC);
    mainUl.stop().animate({'left':-(mainLiWidth*pgnC)*2},400);
  });
  
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