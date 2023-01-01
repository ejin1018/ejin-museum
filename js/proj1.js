window.addEventListener('DOMContentLoaded',()=>{

  // top btn
  var goTopBtn = document.querySelector('.top-fix');
  goTopBtn.addEventListener('click',()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior: 'smooth'
    });
  });

  // copyright notice
  var popup = document.querySelector('#layer');
  var popClose = document.querySelector('.layer-close');
  popClose.addEventListener('click',()=>{
    popup.style.display = 'none';
  });

  // search
  var searchBtn = document.querySelectorAll('.search-btn');
  var searchClose = document.querySelector('.search-close');
  var searchLayer = document.querySelector('.search-layer');
  
  function layerOpen(){
    if(searchLayer.style.display = 'none'){
      searchLayer.style.display = 'block';
      document.querySelector('body').style.overflowY = 'hidden';
    }
  }
  for(var i=0; i<searchBtn.length; i++){
    searchBtn[i].addEventListener('click',layerOpen);
  }

  searchClose.addEventListener('click',()=>{
    searchLayer.style.display = 'none';
    document.querySelector('body').style.overflowY = 'scroll';
  });

  // utility menu
  var utilBtns = document.querySelectorAll('.utility-btn');
  var utilArrow = document.querySelectorAll('.arrow-down');
  var utilSubs = document.querySelectorAll('.util-sub-list');
  var utilMuseum = document.querySelector('.util-museum');
  var utilLang = document.querySelector('.util-lang');

  utilBtns.forEach((utilBtn,index)=>{
    utilBtn.addEventListener('mouseenter',()=>{
      if(index == 3){
        utilBtn.style.background = '#222';
        utilBtn.style.color = '#fff';
        utilArrow[0].style.margin = '0 0  -1px 10px';
        utilArrow[0].style.borderBottomColor = '#fff';
        utilArrow[0].style.borderLeftColor = '#fff';
        utilArrow[0].style.transform = 'rotate(135deg)';

        utilSubs[0].style.display = 'block';
      }else if(index == 4){
        utilBtn.style.background = '#222';
        utilBtn.style.color = '#fff';
        utilArrow[1].style.margin = '0 0  -1px 10px';
        utilArrow[1].style.borderBottomColor = '#fff';
        utilArrow[1].style.borderLeftColor = '#fff';
        utilArrow[1].style.transform = 'rotate(135deg)';

        utilSubs[1].style.display = 'block';
      }
    });

    utilMuseum.addEventListener('mouseleave',()=>{
      utilBtns[3].style.background = '#fff';
      utilBtns[3].style.color = '#222';
      utilArrow[0].style.margin = '0 0  3px 10px';
      utilArrow[0].style.borderBottomColor = '#222';
      utilArrow[0].style.borderLeftColor = '#222';
      utilArrow[0].style.transform = 'rotate(-45deg)';
  
      utilSubs[0].style.display = 'none';
    });
    utilLang.addEventListener('mouseleave',()=>{
      utilBtns[4].style.background = '#fff';
      utilBtns[4].style.color = '#222';
      utilArrow[1].style.margin = '0 0  3px 10px';
      utilArrow[1].style.borderBottomColor = '#222';
      utilArrow[1].style.borderLeftColor = '#222';
      utilArrow[1].style.transform = 'rotate(-45deg)';
  
      utilSubs[1].style.display = 'none';
    });
  });
  
  // main menu
  var topBtns = document.querySelectorAll('.gnb-top-btn');
  var midMenu = document.querySelectorAll('.gnb-mid-list');
  var midBtns = document.querySelectorAll('.gnb-mid-btn');
  var botMenu = document.querySelectorAll('.gnb-bot-list');
  
  topBtns.forEach((topBtn)=>{
    topBtn.addEventListener('mouseenter',()=>{
      midMenu.forEach((midmenu)=>{
        midmenu.classList.remove('gnb-mid-on');
      });

      if(topBtn.nextElementSibling){
        var thisMid = topBtn.nextElementSibling.firstElementChild;
        thisMid.classList.add('gnb-mid-on');
      }
    });
  });
  midMenu.forEach((midmenu)=>{
    midmenu.addEventListener('mouseleave',()=>{
      midmenu.classList.remove('gnb-mid-on');
    });
  });
  midBtns.forEach((midBtn)=>{
    midBtn.addEventListener('mouseenter',()=>{
      botMenu.forEach((botmenu)=>{
        botmenu.classList.remove('gnb-bot-on');
      });
      if(midBtn.nextElementSibling){
        var thisBot = midBtn.nextElementSibling;
        thisBot.classList.add('gnb-bot-on');
      }
    });
  });

  //exhibition slide
  var ExhUl = document.querySelector('.nationExh-list');
  var ExhLi = document.querySelectorAll('.nationExh-list li');
  var nowIndex = 0;
  var liLength = ExhLi.length;
  var prev = document.querySelector('.nExh-prev');
  var next = document.querySelector('.nExh-next');
  var liWidth = ExhLi[0].clientWidth;
  var liMargin = 60;

  // ExhUl.style.width = (liWidth + liMargin) * liLength + 'px' ;
  // function ExhMove(num){
  //   ExhUl.style.left = - num * (liWidth + liMargin) + 'px';
  //   nowIndex = num;
  // }
  // prev.addEventListener('click',()=>{
  //   if(nowIndex !== 0){
  //     ExhMove(nowIndex - 1);
  //   }
  // });
  // next.addEventListener('click',()=>{
  //   if(nowIndex !== liLength - 4){
  //     ExhMove(nowIndex + 1);
  //   }
  // });

  // notice top right slide
  let serviceUl = document.querySelector('.service-slide');
  let serviceLi = serviceUl.children;
  let serviceLiLength = document.querySelectorAll('.service-slide li').length;
  let serviceLiWidth = document.querySelector('.service-slide li').clientWidth;
  let serviceStop = document.querySelector('.service-slide-stop');
  let servicePlay = document.querySelector('.service-slide-play');

  serviceUl.style.width = serviceLiWidth*serviceLiLength+'px';
  for(let a=0; a<serviceLiLength; a++){
    serviceLi[a].style.width = serviceLiWidth+'px';
  }
  
  let servicePgn = document.querySelectorAll('.service-slide-pgn');
  for(let b=0; b<serviceLiLength; b++){
    servicePgn[b].addEventListener('click',()=>{
      servicePgn[0].style.backgroundColor='#fff';
      servicePgn[2].style.backgroundColor='#fff';
      servicePgn[1].style.backgroundColor='#fff';
      serviceUl.style.left = -(serviceLiWidth * b) + 'px'
      servicePgn[b].style.backgroundColor='#276868'
    })
  };
  
  let c=0;
  let serviceAP;
  function serviceAutoPlay(){
    serviceAP = setInterval(()=>{
      if(c >= serviceLiLength){
        c=0;
      }
      serviceUl.style.left = -(serviceLiWidth * c) + 'px'
      c++;
    },1500);
  }
  serviceAutoPlay();

  serviceStop.addEventListener('click',()=>{
    clearInterval(serviceAP);
    serviceStop.style.display = 'none';
    servicePlay.style.display = 'block';
  });
  servicePlay.addEventListener('click',()=>{
    serviceAutoPlay();
    servicePlay.style.display = 'none';
    serviceStop.style.display = 'block';
  });

  // mobile menu
  var mMenuOpen = document.querySelector('.mobile-open');
  var mMenuClose = document.querySelector('.mobile-close');
  var mMenu = document.querySelector('.mobile-wrap');

  mMenuOpen.addEventListener('click',()=>{
    mMenu.style.display = 'block';
  });
  mMenuClose.addEventListener('click',()=>{
    mMenu.style.display = 'none';
  });
})