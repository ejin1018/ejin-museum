$(function(){

  // top button
  var topBtn = $('.top-fix');
  topBtn.click(function(){
    $('html,body').animate({
      scrollTop:0
    },500);
  });

  //search
  var searchBtn = $('.search-btn');
  var searchLayer = $('.search-layer');
  var searchClose = $('.search-close');
  var scrollBarWidth = window.outerWidth - window.innerWidth
  
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
  
  $('.gnb-container').mouseleave(function(){
    midBtns.removeClass('gnb-mid-btn-on');
    botMenu.stop().hide();
  })

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