$(function(){

  // window resize
  var introWidth ;

  // setInterval(slideResize,100);
  $(window).resize(function(){
    mainAutoStop();
    slideResize();
  });
  function slideResize(){
    introWidth = parseInt($('.intro-container').width());
    mainLiResizeWidth = $('.main-exhibition-inner li').width();

    $('.main-exhibition-inner li').css('width',introWidth);
    console.log('계산된'+$('.main-exhibition-inner li').width())

    mainC = 0;
    $('.main-exhibition-inner').css('left','0');
    $('.main-exhibition-inner').css('width',$('.main-exhibition-inner li').width()*$('.main-exhibition-inner li').length);
  }
  
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
  var searchClose = $('.search-close');
  searchBtn.click(function(){
    searchLayer.stop().slideDown(400);
    searchBtn.css('display','none');
    searchClose.css('display','inline-block');
    $('body').addClass('body-overflow');
  });
  searchClose.click(function(){
    searchLayer.stop().slideUp(400);
    searchBtn.css('display','inline-block');
    searchClose.css('display','none');
    $('body').removeClass('body-overflow');
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

  var mainLiCloneLength = $('.main-exhibition-inner li').length; //10

  mainLi.css('width',mainUl/mainLiCloneLength);

  for(let makePgn=1; makePgn<mainLi.length; makePgn++){
    pgnClone = document.createElement('span');
    mainPgn.append(pgnClone);
  }
  
  var mainLiResizeWidth = $('.main-exhibition-inner li').width();
  
  var mainPgnBtn = mainPgn.children('span');
  
  function mainAutoPlay(){
    mainAP = setInterval(function(){
      if(mainC >= mainLiLength){
        mainC = 0;
        mainUl.css('left','0');
      }
      mainC ++ ;
      mainUl.stop().animate({'left':-($('.main-exhibition-inner li').width()*mainC)},400);
      // console.log(mainLiResizeWidth)

      pageC++;
      if(pageC >= mainLiLength){
        pageC = 0;
      }
      mainPgnBtn.css('background','#fff');
      mainPgnBtn.eq(pageC).css('background','#276868');

    },3000);  
  } 
  mainAutoPlay();
  
  mainPrev.click(function(){
    mainAutoStop();
    if(mainC <= 0){
      mainC = mainLiLength;
      mainUl.css('left',-(mainLiResizeWidth*mainLiLength));
    }
    mainC -- ;
    mainUl.stop().animate({'left':-(mainLiResizeWidth*mainC)},400);
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
    mainUl.stop().animate({'left':-(mainLiResizeWidth*mainC)},400);

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
    mainUl.stop().animate({'left':-(mainLiResizeWidth*pgnC)},400);
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
    },2500)
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
  });

  // notice top left tab menu
  var noticeTab = $('.not-tab-btn');
  var noticeBoard = $('.not-board-list');
  noticeBoard.eq(0).css('display','block');
  noticeTab.click(function(){
    noticeTab.removeClass('not-tab-btn-on');
    $(this).addClass('not-tab-btn-on');

    noticeBoard.css('display','none');
    var noticeTIndex = $(this).index();
    noticeBoard.eq(noticeTIndex).css('display','block');
  });

  // notice top right slide
  var serviceUl = $('.service-slide')
  var serviceLi = $('.service-slide li');
  var serviceLiClone = serviceLi.clone();
  var serviceLiWidth = serviceLi.width();
  var serviceStop = $('.service-slide-stop');
  var servicePlay = $('.service-slide-play');
  var servicePgn = $('.service-slide-pgns');
  var servicePgnBtn = $('.service-slide-pgn');
  var serviceAP;
  var servC = 0;
  var servPageC = 0;
  
  $('.service-slide').append(serviceLiClone);
  $('.service-slide').css('width',serviceLiWidth*$('.service-slide li').length);
  $('.service-slide li').css('width',100/$('.service-slide li').length+'%');

  function serviceAutoPlay(){
    serviceAP = setInterval(function(){
      if(servC >= $('.service-slide li').length/2){
        servC = 0;
        serviceUl.css('left','0');
      }
      servC ++;
      serviceUl.animate({left:-serviceLiWidth*servC},400);

      servPageC ++;
      if(servC>=3){
        servPageC=0;
      }
      servicePgnBtn.css('background','#fff');
      servicePgnBtn.eq(servPageC).css('background','#276868');
    },3000);
  };
  serviceAutoPlay();
  servicePgn.click(function(){
    serviceAutoStop();
    var svcIndex = $(this).index();
    servicePgnBtn.css('background','#fff');
    $(this).children('a').css('background','#276868');
    serviceUl.animate({left:-serviceLiWidth*svcIndex},400);
  });
  function serviceAutoStop(){
    clearInterval(serviceAP);
    serviceStop.css('display','none');
    servicePlay.css('display','block');
  }
  serviceStop.click(function(){
    serviceAutoStop();
  });
  servicePlay.click(function(){
    serviceAutoPlay();
    serviceStop.css('display','block');
    servicePlay.css('display','none');
  })

  // notice bottom
  $(window).scroll(function(){
    if($(document).scrollTop() >= $('.notice-wrap').offset().top){
      $('.not-bot-edu').animate({marginTop:'0%',opacity:1},400);
      $('.not-bot-event').delay(200).animate({marginTop:'0%',opacity:1},400);
      $('.not-bot-online').delay(400).animate({marginTop:'0%',opacity:1},400);
    }
  });
  

  // notice musical slide
  var musicalTotal = $('.not-bot-event .slide-total');
  var musicalNow = $('.not-bot-event .slide-now');
  var musicalUl = $('.musical-slide');
  var musicalLiClone = $('.musical-slide li').clone();
  var musicalLiWidth = $('.musical-slide li').width();
  var musicalLiLength = $('.musical-slide li').length;
  var musicalPrev = $('.not-bot-event .notbot-prev');
  var musicalNext = $('.not-bot-event .notbot-next');
  var musicalC = 0;
  var musicalPageC = 1;

  musicalTotal.text(musicalLiLength);
  musicalUl.append(musicalLiClone);

  musicalUl.css('width',musicalLiWidth*$('.musical-slide li').length);
  $('.musical-slide li').css('width',100/$('.musical-slide li').length+'%');

  function musicalMoveNext(){
    if(musicalC >= musicalLiLength){
      musicalC = 0;
      musicalUl.css('left','0')
    }
    musicalC ++; 
    musicalUl.stop().animate({left:-musicalLiWidth*musicalC},400);
  };
  function musicalMovePrev(){
    if(musicalC <= 0){
      musicalC = musicalLiLength;
      musicalUl.css('left',-musicalLiWidth*musicalLiLength);
    }
    musicalC --;
    musicalUl.stop().animate({left:-musicalLiWidth*musicalC},400);
  }
  musicalNext.click(function(){
    musicalMoveNext();
    if(musicalPageC >= 2){
      musicalPageC = 0;
    }
    musicalPageC ++;
    musicalNow.text(musicalPageC);
  });
  musicalPrev.click(function(){
    musicalMovePrev();
    if(musicalPageC <= 1){
      musicalPageC = 3;
    }
    musicalPageC --;
    musicalNow.text(musicalPageC);
  });


  // notice online slide
  var onlineTotal = $('.not-bot-online .slide-total');
  var onlineNow = $('.not-bot-online .slide-now');
  var onlineUl = $('.online-exhibit-list');
  var onlineLiWidth = $('.online-exhibit-list li').width();
  var onlineLiLength = $('.online-exhibit-list li').length;
  var onlinePrev = $('.not-bot-online .notbot-prev');
  var onlineNext = $('.not-bot-online .notbot-next');
  let onlineC = 1;

  onlineTotal.text($('.online-exhibit-list li').length);

  $('.online-exhibit-list li:last-child').prependTo($('.online-exhibit-list'));
  onlineUl.css('margin-left',-onlineLiWidth);
  
  function onlineMoveNext(){
    onlineUl.stop().animate({left:-onlineLiWidth},400,function(){
      $('.online-exhibit-list li:first-child').appendTo(onlineUl);
      $('.online-exhibit-list').css('left','');
    });
  }
  function onlineMovePrev(){
    onlineUl.stop().animate({left:onlineLiWidth},400,function(){
      $('.online-exhibit-list li:last-child').prependTo(onlineUl);
      onlineUl.css('left','');
    })
  }

  onlineNext.click(function(){
    onlineMoveNext();
    onlineC ++;
    if(onlineC > onlineLiLength){
      onlineC = 1;
    }
    onlineNow.text(onlineC);
  });
  onlinePrev.click(function(){
    onlineMovePrev();
    onlineC --;
    if(onlineC < 1){
      onlineC = onlineLiLength;
    }
    onlineNow.text(onlineC);
  });

  // footer 
  var directWrap = $('.direct-title');
  var directOpen = $('.direct-list-open');
  var directList = $('.direct-list');
  
  directWrap.click(function(){
    directOpen.removeClass('direct-list-on');
    $(this).children('.direct-list-open').toggleClass('direct-list-on');
    directList.stop().slideUp();
    $(this).children('.direct-list').stop().slideDown();
  });
  directWrap.mouseleave(function(){
    directOpen.removeClass('direct-list-on');
    directList.stop().slideUp();

  });

  // mobile menu
  var mobileOpen = $('.mobile-open');
  var mobileWrap = $('.mobile-wrap');
  var mobileMenu = $('.mobile-menu-list li');

  mobileOpen.click(function(){
    mobileWrap.toggleClass('mobile-wrap-on');
    mobileOpen.toggleClass('mobile-open-on');
    $('body').toggleClass('body-overflow');
  });
  mobileMenu.click(function(){
    $('.mobile-mid-inner').stop().slideUp();
    $('.mMenu-arrow-down').removeClass('mMenu-arrow-up');
    $(this).children('.mobile-menu-btn').children('.mMenu-arrow-down').toggleClass('mMenu-arrow-up');
    $(this).children('.mobile-mid-inner').stop().slideDown();
  });
});