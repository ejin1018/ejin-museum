$(function(){

  // window resize
  $(window).resize(function(){
    mainAutoStop();
    serviceAutoStop();
    slideResize();
    if(window.innerWidth <=480){
      ExhAutoStop();
      nationSlideInit();
    }  
  });
  function slideResize(){
    mainSlideInit();
    servSlideInit();
    musicalSlideInit();
    onlineSlideInit();
  }
  function mainSlideInit(){
    var introWidth = parseInt($('.intro-container').width());
    $('.main-exhibition-inner li').css('width',introWidth);
  
    mainC = 0;
    pageC = 0;
    $('.main-exhibition-inner').css('left','0');
    $('.main-exhibition-inner').css('width',$('.main-exhibition-inner li').width()*$('.main-exhibition-inner li').length);
    $('.main-pagination').children('span').css('background','#fff');
    $('.main-pagination').children('span').eq(pageC).css('background','#276868');
  }
  function servSlideInit(){
    var servWidth = parseInt($('.not-top-right').width());
    $('.service-slide li').css('width',servWidth);
    servC = 0;
    servPageC = 0;
    $('.service-slide').css('left','0');
    $('.service-slide').css('width',$('.service-slide li').width()*$('.service-slide li').length);
    $('.service-slide-pgn').css('background','#fff');
    $('.service-slide-pgn').eq(servPageC).css('background','#276868');

  }
  function musicalSlideInit(){
    var eventWidth = parseInt($('.bot-event-slide').width());
    $('.musical-slide li').css('width',eventWidth);
    musicalC = 0;
    musicalPageC = 1;
    $('.musical-slide').css('left','0');
    $('.musical-slide').css('width',$('.musical-slide li').width()*$('.musical-slide li').length);
    $('.not-bot-event .slide-now').text(musicalPageC);
  }
  function onlineSlideInit(){
    var onlineWidth = $('.online-exhibit-slide').width();
    $('.online-exhibit-list li').css('width',onlineWidth);
    onlineC = 1;
    $('.online-exhibit-list').css('margin-left',-$('.online-exhibit-list li').width());
    $('.online-exhibit-list').css('width',$('.online-exhibit-list li').width()*$('.online-exhibit-list li').length);
    $('.not-bot-online .slide-now').text(onlineC);
  }
  function nationSlideInit(){
    var nationWidth = $('.nationExh-inner').width();
    console.log(nationWidth)
    $('.nationExh-list li').css('width',nationWidth);
    $('.nationExh-list li').css('margin-right','0');
    count = 0;
    $('.nationExh-list').css('left','0');
    $('.nationExh-list').css('width', $('.nationExh-list li').width()* $('.nationExh-list li').length);
  }
  
  // copyright notice
  var popClose = $('.layer-close');
  popClose.click(function(){
    $('#layer').css('display','none');
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
  
  var mainPgnBtn = mainPgn.children('span');
  
  function mainAutoPlay(){
    mainAP = setInterval(function(){

      if(mainC >= mainLiLength){
        mainC = 0;
        mainUl.css('left','0');
      }
      mainC ++ ;
      mainUl.stop().animate({'left':-($('.main-exhibition-inner li').width()*mainC)},400);

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
      mainUl.css('left',-($('.main-exhibition-inner li').width()*mainLiLength));
    }
    mainC -- ;
    mainUl.stop().animate({'left':-($('.main-exhibition-inner li').width()*mainC)},400);

    pageC--;
    if(pageC < 0){
      pageC = mainLiLength-1;
    }
    mainPgnBtn.css('background','#fff');
    mainPgnBtn.eq(pageC).css('background','#276868');
  });
  mainNext.click(function(){
    mainAutoStop();
    if(mainC >= mainLiLength){
      mainC = 0; 
      mainUl.css('left','0');
    }
    mainC ++ ;
    mainUl.stop().animate({'left':-($('.main-exhibition-inner li').width()*mainC)},400);

    pageC++;
    if(pageC >= mainLiLength){
      pageC = 0;
    }
    mainPgnBtn.css('background','#fff');
    mainPgnBtn.eq(pageC).css('background','#276868');
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
    mainUl.stop().animate({'left':-($('.main-exhibition-inner li').width()*pgnC)},400);
    mainC = pgnC ;
    pageC = pgnC ;
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
      ul.css('left',-$('.nationExh-list li').width()*6);
    }
    count --;
    ul.stop().animate({left:-$('.nationExh-list li').width()*count},400);
    ExhAutoStop();
  });
  $('.nExh-next').click(function(){
    if(count > 5){
      count = 0;
      ul.css('left','0')
    }
    count ++ ;
    ul.stop().animate({left:-$('.nationExh-list li').width()*count},400);
    ExhAutoStop();
  });

  let ExhRotate;
  function ExhAutoPlay(){
    ExhRotate = setInterval(function(){
      if(count > 5){
        count = 0;
        ul.css('left','0')
      }
      count ++ ;
      ul.stop().animate({left:-$('.nationExh-list li').width()*count},400);
      return false;
    },2500)
  }
  ExhAutoPlay();
  function ExhAutoStop(){
    clearInterval(ExhRotate);
    $('.nExh-stop').css('display','none');
    $('.nExh-play').css('display','block');
  }
  
  $('.nExh-stop').click(function(){
    ExhAutoStop();
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
      serviceUl.animate({left:-serviceLi.width()*servC},400);

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
    serviceUl.animate({left:-serviceLi.width()*svcIndex},400);
    servC = svcIndex;
    servPageC = svcIndex;
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
    musicalUl.stop().animate({left:-$('.musical-slide li').width()*musicalC},400);
  };
  function musicalMovePrev(){
    if(musicalC <= 0){
      musicalC = musicalLiLength;
      musicalUl.css('left',-$('.musical-slide li').width()*musicalLiLength);
    }
    musicalC --;
    musicalUl.stop().animate({left:-$('.musical-slide li').width()*musicalC},400);
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
    onlineUl.animate({left:-$('.online-exhibit-list li').width()},400,function(){
      $('.online-exhibit-list li:first-child').appendTo(onlineUl);
      $('.online-exhibit-list').css('left','');
    });
    onlineC ++;
    if(onlineC > onlineLiLength){
      onlineC = 1;
    }
    onlineNow.text(onlineC);
  }
  function onlineMovePrev(){
    onlineUl.animate({left:$('.online-exhibit-list li').width()},400,function(){
      $('.online-exhibit-list li:last-child').prependTo(onlineUl);
      onlineUl.css('left','');
    });
    onlineC --;
    if(onlineC < 1){
      onlineC = onlineLiLength;
    }
    onlineNow.text(onlineC);
  }

  onlineNext.click(function(){
    onlineMoveNext();
  });
  onlinePrev.click(function(){
    onlineMovePrev();
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
  
});