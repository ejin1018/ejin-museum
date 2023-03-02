$(function(){

  // top button
  var topBtn = $('.top-fix');
  topBtn.click(function(){
    $('html,body').animate({
      scrollTop:0
    },500);
  });

  // header sticky
  $(window).scroll(function(){
    if(window.innerWidth >=980){
      var scrollTop = $(window).scrollTop();
      var utilHeight = $('.utility-wrap').height();
      if(scrollTop>=utilHeight){
        $('.header-wrap').addClass('head-fixed');
        $('.subPage-contents-wrap').addClass('cont-fixed');
      }else{
        $('.header-wrap').removeClass('head-fixed');
        $('.subPage-contents-wrap').removeClass('cont-fixed');
      }
    }
  })

  //search
  var searchBtn = $('.search-btn');
  var searchLayer = $('.search-layer');
  var searchClose = $('.search-close');
  var scrollBarWidth = window.outerWidth - document.documentElement.clientWidth ;
  
  searchBtn.click(function(){
    searchLayer.stop().slideDown(400);
    searchBtn.css('display','none');
    searchClose.css('display','inline-block');
    $('body').addClass('body-overflow');
    $('body').css('padding-right',scrollBarWidth);
  });
  searchClose.click(function(){
    searchLayer.stop().slideUp(400);
    searchBtn.css('display','inline-block');
    searchClose.css('display','none');
    $('body').removeClass('body-overflow');
    $('body').css('padding-right','0px');
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
  var gnbCont = $('.gnb-container'); //rosybrown
  var topBtns = $('.gnb-top-btn'); //lemon
  var midMenu = $('.gnb-mid-list'); //lightseagreen
  var midBtns = $('.gnb-mid-btn'); //lightblue
  var botMenu = $('.gnb-bot-list'); //lavendar

  topBtns.mouseenter(function(){
    midMenu.stop().hide();
    botMenu.stop().hide();
    midBtns.removeClass('gnb-mid-btn-on');
    $(this).next('.gnb-mid-inner').children('.gnb-mid-list').stop().show();
  });
  gnbCont.mouseleave(function(){
    midMenu.stop().hide();
    midBtns.removeClass('gnb-mid-btn-on');
    botMenu.stop().hide();
  })
  midBtns.mouseenter(function(){
    botMenu.stop().hide();
    midBtns.removeClass('gnb-mid-btn-on');
    $(this).addClass('gnb-mid-btn-on');
    $(this).next('.gnb-bot-list').stop().show();
  })
  botMenu.mouseenter(function(){
    $(this).prev('gnb-mid-btn').addClass('gnb-mid-btn-on');
  })

  // mobile menu
  var mobileOpen = $('.mobile-open');
  var mobileWrap = $('.mobile-wrap');
  var mobileMenu = $('.mobile-menu-list li');

  mobileOpen.click(function(){
    mobileWrap.toggleClass('mobile-wrap-on');
    mobileOpen.toggleClass('mobile-open-on');
    $('.search-btn').toggleClass('search-btn-hide');
    $('body').toggleClass('body-overflow');
  });
  mobileMenu.click(function(){
    $('.mobile-mid-inner').stop().slideUp();
    $('.mMenu-arrow-down').removeClass('mMenu-arrow-up');
    $(this).children('.mobile-menu-btn').children('.mMenu-arrow-down').toggleClass('mMenu-arrow-up');
    $(this).children('.mobile-mid-inner').stop().slideDown();
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
})