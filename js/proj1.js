window.addEventListener('DOMContentLoaded',function(){

  // top btn
  var goTopBtn = document.querySelector('.top-fix');
  goTopBtn.addEventListener('click',function(){
    window.scrollTo({
      top:0,
      left:0,
      behavior: 'smooth'
    });
  });

  // copyright notice
  var popup = document.querySelector('#layer');
  var popClose = document.querySelector('.layer-close');
  popClose.addEventListener('click',function(){
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

  searchClose.addEventListener('click',function(){
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
    utilBtn.addEventListener('mouseenter',function(){
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

    utilMuseum.addEventListener('mouseleave',function(){
      utilBtns[3].style.background = '#fff';
      utilBtns[3].style.color = '#222';
      utilArrow[0].style.margin = '0 0  3px 10px';
      utilArrow[0].style.borderBottomColor = '#222';
      utilArrow[0].style.borderLeftColor = '#222';
      utilArrow[0].style.transform = 'rotate(-45deg)';
  
      utilSubs[0].style.display = 'none';
    });
    utilLang.addEventListener('mouseleave',function(){
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
    topBtn.addEventListener('mouseenter',function(){
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
    midmenu.addEventListener('mouseleave',function(){
      midmenu.classList.remove('gnb-mid-on');
    });
  });
  midBtns.forEach((midBtn)=>{
    midBtn.addEventListener('mouseenter',function(){
      botMenu.forEach((botmenu)=>{
        botmenu.classList.remove('gnb-bot-on');
      });
      if(midBtn.nextElementSibling){
        var thisBot = midBtn.nextElementSibling;
        thisBot.classList.add('gnb-bot-on');
      }
    });
  });

  //main slide
  let mainUl = document.querySelector('.main-exhibition-inner');
  let mainLi = mainUl.children;
  let mainLiWidth = mainLi[0].clientWidth;
  let mainLiLength = mainLi.length;
  let mainNext = document.querySelector('.main-next-btn');
  let mainPrev = document.querySelector('.main-prev-btn');
  let mainStop = document.querySelector('.main-stop-btn');
  let mainPlay = document.querySelector('.main-play-btn');

  mainUl.style.width = (mainLiWidth * mainLiLength)+'px' ;
  for(let e=0; e<mainLiLength; e++){
    mainLi[e].style.width = mainLiWidth+'px';
  };

  let g = 0;
  mainPrev.addEventListener('click',function(){
    g--;
    if(g < 0){
      g = 4;
    }
    mainUl.style.left = - (mainLiWidth * g) +'px'
    for(let m=0; m<mainPageBtn.length; m++){
      if(g==m){
        mainPageBtn[m].style.background = '#276868';
      }else{
        mainPageBtn[m].style.background = '#fff';
      }
    }
    clearInterval(mainAP);
    mainStop.style.display = 'none';
    mainPlay.style.display = 'block';
  })
  mainNext.addEventListener('click',function(){
    g++;
    if(g > 4){
      g=0;
    }
    mainUl.style.left = - (mainLiWidth * g) +'px'
    for(let m=0; m<mainPageBtn.length; m++){
      if(g==m){
        mainPageBtn[m].style.background = '#276868';
      }else{
        mainPageBtn[m].style.background = '#fff';
      }
    }
    clearInterval(mainAP);
    mainStop.style.display = 'none';
    mainPlay.style.display = 'block';
  });

  let mainAP;
  function mainAutoPlay(){
    mainAP = setInterval(function(){
      g++;
      if(g > 4){
        g=0;
      }
      mainUl.style.left = - (mainLiWidth * g) +'px'

      for(let m=0; m<mainPageBtn.length; m++){
        if(g==m){
          mainPageBtn[m].style.background = '#276868';
        }else{
          mainPageBtn[m].style.background = '#fff';
        }
      }
    },2000);
  }
  mainAutoPlay();

  mainStop.addEventListener('click',function(){
    clearInterval(mainAP);
    mainStop.style.display = 'none';
    mainPlay.style.display = 'block';
  })
  mainPlay.addEventListener('click',function(){
    mainAutoPlay();
    mainPlay.style.display = 'none';
    mainStop.style.display = 'block';
  });


  let mainPgn = document.querySelector('.main-pagination');
  let makePgn
  for(let f=1; f<mainLiLength; f++){
    makePgn = document.createElement('span');
    mainPgn.appendChild(makePgn);
  }
  let mainPageBtn = document.querySelectorAll('.main-pagination span');
  for(let f=0; f<mainLiLength; f++){
    mainPageBtn[f].addEventListener('click',function(){
      for(let l=0; l<mainPageBtn.length; l++){
        mainPageBtn[l].style.background = '#fff';
      }
      mainPageBtn[f].style.background = '#276868';
      mainUl.style.left = - (mainLiWidth * f) +'px'
    });
  }

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
  // prev.addEventListener('click',function(){
  //   if(nowIndex !== 0){
  //     ExhMove(nowIndex - 1);
  //   }
  // });
  // next.addEventListener('click',function(){
  //   if(nowIndex !== liLength - 4){
  //     ExhMove(nowIndex + 1);
  //   }
  // });


  // notice top left tab menu
  var noticeTab = document.querySelectorAll('.not-tab-radio label');
  var noticeBoard = document.querySelectorAll('.not-board-list');
  for(let h=0; h<noticeTab.length; h++){
    noticeBoard[0].style.display = 'block';
    noticeTab[h].addEventListener('click',function(){
      for(let i=0; i<noticeTab.length; i++){
        noticeBoard[i].style.display = 'none';
        if(h == i){
          noticeBoard[i].style.display = 'block';
        }
      }
    });
  }

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
    servicePgn[b].addEventListener('click',function(){
      for(let j=0; j<serviceLiLength; j++){
        servicePgn[j].style.backgroundColor='#fff';
      }
      serviceUl.style.left = -(serviceLiWidth * b) + 'px'
      servicePgn[b].style.backgroundColor='#276868'
    })
  };
  
  let c=0;
  let serviceAP;
  function serviceAutoPlay(){
    serviceAP = setInterval(function(){
      if(c >= serviceLiLength){
        c=0;
      }
      serviceUl.style.left = -(serviceLiWidth * c) + 'px'

      for(var k=0; k<serviceLiLength; k++){
        if(c == k){
          servicePgn[k].style.backgroundColor='#276868'
        }else{
          servicePgn[k].style.backgroundColor='#fff'
        }
      }

      c++;
    },1500);
  }
  serviceAutoPlay();

  serviceStop.addEventListener('click',function(){
    clearInterval(serviceAP);
    serviceStop.style.display = 'none';
    servicePlay.style.display = 'block';
  });
  servicePlay.addEventListener('click',function(){
    serviceAutoPlay();
    servicePlay.style.display = 'none';
    serviceStop.style.display = 'block';
  });

  //notice musical slide
  var musicalNext = document.querySelector('.not-bot-event .notbot-next');
  var musicalPrev = document.querySelector('.not-bot-event .notbot-prev')
  let musicalUl = document.querySelector('.musical-slide');
  var musicalLi =  document.querySelectorAll('.musical-slide li');
  var musicalLiWidth = document.querySelector('.musical-slide li').clientWidth;
  var musicalLiLength = musicalLi.length;
  var musicalNow = document.querySelector('.not-bot-event .slide-now');
  var musicalTotal = document.querySelector('.not-bot-event .slide-total');
  let p = 1;

  musicalTotal.innerText=musicalLiLength;

  var musicalIndex = 0;
  musicalNext.addEventListener('click',function(){
    musicalUl.style.left = -musicalLiWidth + 'px';
    p++
    if(p>=musicalLiLength){
      p = musicalLiLength;
    }
    musicalNow.innerHTML = p;
  });
  musicalPrev.addEventListener('click',function(){
    musicalUl.style.left = musicalLiWidth * musicalIndex + 'px';
    p--
    if(p<=1){
      p=1;
    }
    musicalNow.innerHTML = p;
  });

  //notice online exhibit
  var onlineUl = document.querySelector('.online-exhibit-list');
  var onlineLi = document.querySelectorAll('.online-exhibit-list li');
  var onlineLiWidth = document.querySelector('.online-exhibit-list li').clientWidth;
  var onlineLiLength = onlineLi.length; //7
  var onlineNow = document.querySelector('.not-bot-online .slide-now');
  var onlineTotal = document.querySelector('.not-bot-online .slide-total');
  var onlinePrev = document.querySelector('.not-bot-online .notbot-prev');
  var onlineNext = document.querySelector('.not-bot-online .notbot-next');
  var o = 0;
  var q = 1;

  onlineTotal.innerHTML=onlineLiLength;

  onlineNext.addEventListener('click',function(){
    o++;
    if(o>=onlineLiLength){
      o = 0;
    }
    onlineUl.style.left = -(onlineLiWidth * o) + 'px' ;
    q++;
    if(q>onlineLiLength){
      q = 1;
    }
    onlineNow.innerHTML = q;
  });
  onlinePrev.addEventListener('click',function(){
    if(o<=0){
      o = 7;
    }
    o--;
    onlineUl.style.left = -(onlineLiWidth * o) + 'px' ;
    q--;
    if(q<1){
      q = onlineLiLength;
    }
    onlineNow.innerHTML = q;
  });

  //footer
  var directOpen = document.querySelectorAll('.direct-list-open');
  var directArrow = document.querySelectorAll('.direct-open-arrow');
  var directList = document.querySelectorAll('.direct-list');
  var directWrap = document.querySelectorAll('.direct-title');

  for(let s=0; s<directList.length; s++){
    directWrap[s].addEventListener('mouseenter',function(){
      directList[s].style.visibility = 'visible';
      directList[s].style.height = 100 * directList[s].children.length + '%';
      directOpen[s].style.color = '#fff';
      directOpen[s].style.background = '#222';
      directArrow[s].style.transform = 'rotate(-135deg)';
      directArrow[s].style.borderBottom = '2px solid #fff';
      directArrow[s].style.borderRight = '2px solid #fff';
      directArrow[s].style.marginTop = '7px';
    });
    directWrap[s].addEventListener('mouseleave',function(){
      directList[s].style.height = 0+'%';
      directOpen[s].style.color = '#222';
      directOpen[s].style.background = '#fff';
      directArrow[s].style.transform = 'rotate(45deg)';
      directArrow[s].style.borderBottom = '2px solid #222';
      directArrow[s].style.borderRight = '2px solid #222';
    });
    directList[s].addEventListener('mouseenter',function(){
      directOpen[s].style.color = '#fff';
      directOpen[s].style.background = '#222';
    });
  }
  

  // mobile menu
  var mMenuOpen = document.querySelector('.mobile-open');
  var mMenuClose = document.querySelector('.mobile-close');
  var mMenu = document.querySelector('.mobile-wrap');

  mMenuOpen.addEventListener('click',function(){
    mMenu.style.display = 'block';
  });
  mMenuClose.addEventListener('click',function(){
    mMenu.style.display = 'none';
  });

  var mMenuBtn = document.querySelectorAll('.mobile-menu-btn');
  var mMidInner = document.querySelectorAll('.mobile-mid-inner');
  var mMenuArrow = document.querySelectorAll('.mMenu-arrow-down');
  var mMenuLength = mMenuBtn.length;
  for(let u=0; u<mMenuLength; u++){
    mMenuBtn[u].addEventListener('click',function(){
      if(u < 2){
        if(mMidInner[u].style.display == 'block'){
          mMidInner[u].style.display = 'none';
          mMenuArrow[u].style.transform = ' rotate(-45deg)'
          mMenuArrow[u].style.margin = ' 9px 5px 0 10px'
        }else{
          mMidInner[u].style.display = 'block';
          mMenuArrow[u].style.transform = ' rotate(135deg)'
          mMenuArrow[u].style.margin = ' 20px 5px 0 10px'
        }
      }else{
        if(mMidInner[u-1].style.display == 'block'){
          mMidInner[u-1].style.display = 'none';
          mMenuArrow[u-1].style.transform = ' rotate(-45deg)'
          mMenuArrow[u-1].style.margin = ' 9px 5px 0 10px'
        }else{
          mMidInner[u-1].style.display = 'block';
          mMenuArrow[u-1].style.transform = ' rotate(135deg)'
          mMenuArrow[u-1].style.margin = ' 20px 5px 0 10px'
        }
      }
    });
  }
})