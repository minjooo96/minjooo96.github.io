// 앨범 - 이미지 및 텍스트
var album_list = [
  {
    'thumb' : 'img/album/btob_huta_hutazone.jpg',
    'title' : 'YA',
    'singer' : '이민혁(HUTA)',
    'date' : '2019.01.15',
  },
  {
   'thumb' : 'img/album/btob_lcs_mark.jpg',
   'title' : 'Gone',
   'singer' : '이창섭',
   'date' : '2018.12.11',
 },
 {
   'thumb' : 'img/album/clc_elkie_idream.jpg',
   'title' : 'I Dream',
   'singer' : 'ELKIE',
   'date' : '2018.11.24',
 },
 {
   'thumb' : 'img/album/btob_hourmoment.jpg',
   'title' : '아름답고도 아프구나',
   'singer' : 'BTOB',
   'date' : '2018.11.12',
 },
 {
   'thumb' : 'img/album/train_season.jpg',
   'title' : '네가 있던 계절',
   'singer' : '가을로 가는 기차',
   'date' : '2018.11.05',
 },
 {
   'thumb' : 'img/album/ptg_thumbsup.jpg',
   'title' : '청개구리',
   'singer' : '펜타곤',
   'date' : '2018.09.10',
 },
 {
   'thumb' : 'img/album/idle_hann.jpg',
   'title' : '한(一)',
   'singer' : '(여자)아이들',
   'date' : '2018.08.14',
 },
 {
   'thumb' : 'img/album/btob_rain.jpg',
   'title' : '비가 내리면(When it rains)',
   'singer' : 'BTOB-BLUE',
   'date' : '2018.08.02',
 },
 {
   'thumb' : 'img/album/tripleh_retro.jpg',
   'title' : 'RETRO FUTURE',
   'singer' : 'Triple H',
   'date' : '2018.07.18',
 },
 {
   'thumb' : 'img/album/ptg_positive.jpg',
   'title' : 'Positive',
   'singer' : '펜타곤',
   'date' : '2018.04.01',
 }
]

// MV - 이미지 및 텍스트
var mv_list = [
  {
    'thumb' : 'img/mv/ya_huta.jpg',
    'title' : 'YA',
    'singer' : '이민혁(HUTA)',
    'date' : '2019.01.15',
  },
  {
   'thumb' : 'img/mv/gone_lcs.jpg',
   'title' : 'Gone',
   'singer' : '이창섭',
   'date' : '2018.12.11',
 },
 {
   'thumb' : 'img/mv/idream_elkie.jpg',
   'title' : 'I Dream',
   'singer' : 'ELKIE',
   'date' : '2018.11.24',
 },
 {
   'thumb' : 'img/mv/beautifulsick_btob.jpg',
   'title' : '아름답고도 아프구나',
   'singer' : 'BTOB',
   'date' : '2018.11.12',
 },
 {
   'thumb' : 'img/mv/season_train.jpg',
   'title' : '네가 있던 계절',
   'singer' : '가을로 가는 기차',
   'date' : '2018.11.05',
 },
 {
   'thumb' : 'img/mv/frog_ptg.jpg',
   'title' : '청개구리',
   'singer' : '펜타곤',
   'date' : '2018.09.10',
 },
 {
   'thumb' : 'img/mv/hann_idle.jpg',
   'title' : '한(一)',
   'singer' : '(여자)아이들',
   'date' : '2018.08.14',
 },
 {
   'thumb' : 'img/mv/btob-blue_rainy.jpg',
   'title' : '비가 내리면(When it rains)',
   'singer' : 'BTOB-BLUE',
   'date' : '2018.08.02',
 },
 {
   'thumb' : 'img/mv/retro_tripleh.jpg',
   'title' : 'RETRO FUTURE',
   'singer' : 'Triple H',
   'date' : '2018.07.18',
 }
]
// MV - 팝업 링크
var mv_link = [
  'https://www.youtube.com/embed/iqoclLIdcA0',
  'https://www.youtube.com/embed/Rbq6Dp6q_Mk',
  'https://www.youtube.com/embed/l2QZrVp4mpI',
  'https://www.youtube.com/embed/KLNr84h5qL4',
  'https://www.youtube.com/embed/6Bd4SDyCOk4',
  'https://www.youtube.com/embed/DjrQGkFUnBo',
  'https://www.youtube.com/embed/OKNXn2qCEws',
  'https://www.youtube.com/embed/2urMSQ2Ms9o',
  'https://www.youtube.com/embed/b2hcCVAuM7Y'
]


// =================== header js
$(function(){
  // 모바일 메뉴 버튼
  $('#gnb-btn').click(function(){
    $('header').toggleClass('mo-open');
  });

  $(window).resize(function(){
    //이벤트 초기화
    $('.gnb > li > a').off('click');
    $('nav').off('mouseover mouseout');

    var window_W = $(window).width();
    if(window_W < 767){ // --------- 모바일
      $('.gnb > li > a').on({
        click: function(){
          if($(this).next('.gnb-sub').css('display') == 'block'){
            $(this).css('text-decoration','none');
          }else{
            $(this).css('text-decoration','underline');
          }
          $(this).next('.gnb-sub').stop().slideToggle();
        }
      });
    // --------- /모바일
    }else{ // --------- PC
      $('.gnb-sub').show();
      $('.gnb > li > a').css('text-decoration','none');
      $('header').removeClass('mo-open');
      $('nav').on({
        mouseover: function(){
          $('header').addClass('pc-open');
        },
        mouseout: function(){
          $('header').removeClass('pc-open');
        },
      });
    } // --------- /PC
  }).resize();
});


// =================== main-slide js
$(function(){
  var main_swiper = new Swiper('.main-slide > .swiper-container', {
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: true,
  });
  $('.swiper-play').hide();
  $('.swiper-play').click(function(){
    main_swiper.autoplay.start();
    $('.swiper-play').fadeOut();
    $('.swiper-pause').fadeIn();
  });
  $('.swiper-pause').click(function(){
    main_swiper.autoplay.stop();
    $('.swiper-pause').fadeOut();
    $('.swiper-play').fadeIn();
  });
  $(window).resize(function(){
    var window_W = $(window).width();
    if(window_W < 767){
      $('.main-slide .swiper-slide').each(function(i, el){
        src=$(this).find('img').attr('src').replace('pc','mo');
        $(this).find('img').attr('src',src);
      })
    }else{
      $('.main-slide .swiper-slide').each(function(i, el){
        src=$(this).find('img').attr('src').replace('mo','pc');
        $(this).find('img').attr('src',src);
      })
    }
  }).resize();
});


// =================== release js
$(function(){
  // 텍스트 삽입
  for (var i = 1; i < album_list.length; i++){
    $('.main-release .swiper-wrapper').append(
      '<li class="swiper-slide">'+
      '  <a href="#">'+
      '    <div class="main-release-front"></div>'+
      '    <div class="main-release-back-wrap">'+
      '      <div class="main-release-back"></div>'+
      '      <div class="main-release-text">'+
      '        <span>'+ album_list[i-1]['title'] +'</span>'+
      '        <span>'+ album_list[i-1]['singer'] +'</span>'+
      '        <span>'+ album_list[i-1]['date'] +'</span>'+
      '      </div>'+
      '    </div>'+
      '  </a>'+
      '</li>'
    );
  }

  for (var i = 1; i < album_list.length; i++){
    // front 이미지 삽입
    $('.main-release .swiper-wrapper .swiper-slide:nth-child('+i+')').find('.main-release-front').css({
      background: 'url('+album_list[i-1]['thumb']+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    });

    // back 이미지 삽입
    $('.main-release .swiper-wrapper .swiper-slide:nth-child('+i+')').find('.main-release-back').css({
      background: 'url('+album_list[i-1]['thumb']+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: '#000',
      opacity: 0.5,
    });
  }

  var filp = $('.main-release .swiper-slide a').flip({
    axis: 'y',
    front: '.main-release-front',
    back: '.main-release-back-wrap',
  });

  //동적으로 만들어진 요소들도 클릭 가능하게
  $('.main-release .swiper-slide').on('click', 'a', function(e){
    e.preventDefault();
    $(this).flip('trigger');
  });

  var release_swiper = new Swiper('.main-release .swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    slideToClickedSlide: true,
    loop: true,
    on: {
      slideChange: function(){
        $('.main-release .swiper-wrapper').removeClass('release-change');
        releaseWidth = $('.main-release .swiper-slide').width();
        $('.main-release .swiper-slide').height(releaseWidth);
        setTimeout(function(){
          releaseActiveWidth = $('.main-release .swiper-slide-active').width();
          $('.main-release .swiper-slide-active').height(releaseActiveWidth);
          $('.main-release .swiper-wrapper').addClass('release-change');
          release_swiper.update();
        },0);
        $('.main-release .swiper-slide-active a').flip('trigger');
        filp.flip(false);
      }
    },
  });

  $('.main-release .swiper-slide-active a').flip(true);

  filp=$('.main-release .swiper-slide a').flip({
    axis: 'y',
    trigger: 'click',
    front: '.main-release-front',
    back: '.main-release-back-wrap',
  });

  $(window).resize(function(){
    releaseWidth = $('.main-release .swiper-slide').width();
    releaseActiveWidth = $('.main-release .swiper-slide-active').width();
    $('.main-release .swiper-slide').height(releaseWidth).css('marginTop',(releaseActiveWidth-releaseWidth)/2);
    $('.main-release .swiper-slide-active').height(releaseActiveWidth);
    $('.main-release .swiper-container').height(releaseActiveWidth);
    release_swiper.update();
  })
  $(window).trigger('resize');

  $('.main-release a').click(function(e){
    e.preventDefault();
  });
});


// =================== MV js
$(function(){
  // MV 이미지,텍스트 삽입
  for (var i in mv_list) {
    $('.main-mv .row').append(
      '<li class="col-sm-4 col-xs-6">'+
        '<a href="#">'+
          '<img src="'+mv_list[i]['thumb']+'" alt="">'+
          '<span class="mv-title">'+mv_list[i]['title']+'</span>'+
          '<span class="mv-singer">'+mv_list[i]['singer']+'</span>'+
          '<span class="mv-date">'+mv_list[+i]['date']+'</span>'+
        '</a>'+
      '</li>'
    );
  }
  // 클릭했을 때 로딩화면 노출
  $('.main-mv li a').click(function(e){
    e.preventDefault();
    $('.mv-loading').show();
    var mvclick = $(this).parents('li').index();
    $('.mv-pop iframe').attr('src',mv_link[mvclick]);
    $('.mv-pop').fadeIn(function(){
      $('.mv-loading').fadeOut();
    });
  });
  // MV 팝업
  $('.mv-pop').hide();
  $('.mv-pop').click(function(){
    $(this).fadeOut();
  });
});


// =================== slogan js
$(function(){
  $('.main-slogan .wrapper').css('display','none');
  $(window).resize(function(){
    var window_W = $(window).width();
    if(window_W < 767){
      $('.main-slogan .wrapper').css('display','block');
    }else{
      $(window).scroll(function(){ // fadeIn
        var window_H = $(window).scrollTop();
        if(window_H >= 2900){
          $('.main-slogan .wrapper').fadeIn();
        }
      });
    }
  }).resize();
});


// =================== .main-banner js
$(function(){
$('.main-banner > div').css('display','none');
$(window).resize(function(){ // ---- 모바일
  var window_W = $(window).width();
  if(window_W < 767){
    $('.main-banner > div').css('display','block'); // fadeIn
    $('.main-banner div').off('mouseover mouseout'); // scale
  }else{ // ---- PC
    $(window).scroll(function(){ // fadeIn
      var window_H = $(window).scrollTop();
      if(window_H >= 3100){
        for (var i = 1; i < 5; i++) {
          $('.main-banner > div:nth-child('+i+')').delay(i*300).fadeIn();
        }
      }
    });
    $('.main-banner div').on({ // scale
      mouseover: function(){
        $('.main-banner').addClass('banner-scale');
      },
      mouseout: function(){
        $('.main-banner').removeClass('banner-scale');
      },
    });
  }
}).resize();
});


// =================== .main-sns js
$(function(){
$(window).resize(function(){
  var sns_W = $('.main-sns li').width();
  $('.main-sns li').height(sns_W);
  var window_W = $(window).width();
  if(window_W > 767){
    $('.main-sns li').on({
      mouseover: function(){
        $(this).addClass('sns-border');
      },
      mouseout: function(){
        $(this).removeClass('sns-border');
      }
    });
  }else{
    $('.main-sns li').off('mouseover mouseout');
  }
}).resize();
});


// =================== footer js
$(function(){
$('.family-site button').click(function(){
  if( $('.family-site ul').css('display') == 'none'){
    $('.family-site ul').slideDown();
    $('i',this).removeClass('icon-footer-down');
  }else{
    $('.family-site ul').slideUp();
    $('i',this).addClass('icon-footer-down');
  }
});
});
