$(function(){
  // ==================== header
  // 클릭했을 때 이동
  $('nav li, aside li').click(function(e){
    e.preventDefault();
    var navIndex = $(this).index();
    if(navIndex == 3){
      var contactLoca = $('.contact').position().top;
      $('html').stop().animate({
        scrollTop: contactLoca,
      },1000);
    }else{
      navTop = $('article').eq(navIndex).position().top;
      $('html').stop().animate({
        scrollTop: navTop,
      },1000);
    }
  });

  // 스크롤시 영역별로 백그라운드/텍스트 컬러 변경
  $(window).scroll(function(){
    var windowTop = $(window).scrollTop();
    var windowH = $(window).innerHeight();
    var windowBottom = windowTop + windowH;
    var aboutTop = $('.about').position().top;
    var contactTop = $('.contact').position().top;
    if(windowBottom > aboutTop && windowBottom < contactTop){
      $('header').addClass('header-scroll');
    }else if(windowBottom <= aboutTop || windowBottom >= contactTop){
      $('header').removeClass('header-scroll');
    }
  });

  // ==================== .title
  // 스크롤시 line move
  $(window).on('scroll',function(){
    // 범위 정하기
    var aboutTop = $('.about').position().top; // top 위치
    var aboutH = $('.about').outerHeight(); // 높이
    var pfTop = $('.portfolio').position().top; // top 위치
    var pfH = $('.portfolio').outerHeight(); // 높이
    var contactTop = $('.contact').position().top; // top 위치
    var contactH = $('.contact').outerHeight(); // 높이
    // 스크롤 top
    var windowTop = $(window).scrollTop(); // top 위치
    // 스크롤 했을 때의 조건문
    $('.title-line').removeClass('line-move');
    if(windowTop >= aboutTop-aboutH/2 && windowTop < pfTop-aboutH/2){ // about
      $('.about .title-line').addClass('line-move');
    }else if(windowTop >= pfTop-pfH/10 && windowTop < contactTop-pfH/2){ // pf
      $('.portfolio .title-line').addClass('line-move');
    }else if(windowTop >= contactTop-contactH){ // contact
      $('.contact .title-line').addClass('line-move');
    }
    // 반응형 > line-move on/off
    $(window).resize(function(){
      var windowW = $(window).width();
      if(windowW <= 1024){
        $('.title-line').addClass('line-move');
      }
    }).resize();
  }).scroll();


  // ==================== article - main
  $('.main-text h2, .main-text p').css({
    opacity: 0,
    top: '100px',
  });
  $('.main-text h2').stop().animate({
    opacity: 1,
    top: 0,
  },1000);
  $('.main-text p').delay(500).animate({
    opacity: 1,
    top: '10px',
  },1000);

  // ==================== article - skill
  $(window).resize(function(){
    var skillTitW = $('.skill-title').width();
    $('.skill-title').height(skillTitW);
  }).resize();

  // ==================== article - portfolio
  $('.portfolio .pf-list:nth-child(odd)').addClass('pf-list-left');
  $('.portfolio .pf-list:nth-child(even)').addClass('pf-list-right');
  $('.pf-work-img').on({
    mouseover: function(){
      // alert('올렸습니다.');
      var overPfWorkW = $(this).next('.pf-frame').width();
      var overPfWorkH = $(this).next('.pf-frame').outerHeight();
      var imgH = $(this).height();
      var goBottom = imgH-overPfWorkH;

      if(overPfWorkW < overPfWorkH){ // 디바이스가 세로일경우
        $(this).stop().animate({
          top: -(goBottom),
        },1000);
      }else{ // 디바이스가 가로일경우
        $(this).stop().animate({
          top: -goBottom,
        },1000);
      }
    },
    mouseleave: function(){
      $(this).stop().animate({
        top: '0',
      },1000);
    },
  });

  // 버튼 클릭시 팝업 ON/OFF
  $('.cube .pf-pop-btn').on('click',function(e){
    e.preventDefault();
    $('.pf-pop-plan').hide();
    $('.pf-pop').fadeIn(1000);
    $('.cube-plan').show();
  });
  $('.pf-pop .close').on('click',function(e){
    e.preventDefault();
    $('.pf-pop').fadeOut(1000);
  });

  // ==================== aside
  $(window).scroll(function(){
    var windowTop = $(window).scrollTop();
    var windowH = $(window).height();
    var windowBottom = windowTop+windowH;
    // 범위 정하기
    var aboutTop = Math.floor($('.about').position().top); // top 위치
    var pfTop = Math.floor($('.portfolio').position().top); // top 위치
    var contactTop = Math.floor($('.contact').position().top); // top 위치
    var contactH = $('.contact').outerHeight();
    var asideTop = $('aside').offset().top;

    // 백그라운드가 있는 영역에서는 흰색으로 변경
    if(asideTop < aboutTop || asideTop > contactTop){
      $('aside').addClass('aside-white');
    }else{
      $('aside').removeClass('aside-white');
    }

    // 현재 영역에 따라 aside 컬러 변경
    $('aside a').removeClass('aside-hover');
    if(windowTop < aboutTop){
      $('aside .menu-main').find('a').addClass('aside-hover');
    }else if(windowTop >= aboutTop && windowTop < pfTop){
      $('aside .menu-about').find('a').addClass('aside-hover');
    }else if(windowTop >= pfTop && windowTop < contactTop-contactH){
      $('aside .menu-works').find('a').addClass('aside-hover');
    }else if(windowBottom >= contactTop-contactH){
      $('aside .menu-contact').find('a').addClass('aside-hover');
    }
  }).scroll();
});
