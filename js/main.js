// sp用jquery


$(function() {
    $('#humberger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.l-header__list').addClass('active');
        } else {
            $('.l-header__list').removeClass('active');
        }
    });
});


$(document).ready(function(){
  $( '.l-header__list' ).hide();
  $('#humberger').on( 'click' ,function(){
    if( !$('.l-header__list').hasClass('open') ) {
    $( '.l-header__list' ).slideDown('').addClass('open');
    } else {
    $( '.l-header__list' ).slideUp("").removeClass('open');
    }
  });
});




















//ヘッダーのホームの移動先
$(function(){
$('.l-header__right-sp > li:first-child').on('click', function(){
  var targetTop = $('#p-profile__topTtl').offset().top;
  $('body, html').animate({ scrollTop: 0 }, 500);
  return false;
});
});
//ヘッダーの自己紹介の移動先
$(function(){
$('.l-header__right-sp > li:nth-child(2)').on('click', function(){
  var targetTop = $('#p-profile__topTtl').offset().top;
  $('html,body').animate({
      scrollTop: targetTop-100
  }, 500);
  return false;
});
});
//ヘッダーのスキルの移動先
$(function(){
$('.l-header__right-sp > li:nth-child(3)').on('click', function(){
  var skill = $('#p-skill').offset().top;
  $('html,body').animate({
      scrollTop: skill-80
  }, 500);
  return false;
});
});
//ヘッダーの制作実績の移動先
$(function(){
$('.l-header__right-sp > li:nth-child(4)').on('click', function(){
  var performar = $('#p-performance').offset().top;
  $('html,body').animate({
      scrollTop: performar-80
  }, 500);
  return false;
});
});
//ヘッダーのお問い合わせの移動先
$(function(){
$('.l-header__right-sp > li:last-child').on('click', function(){
  var claim = $('#c-claim').offset().top;
  $('html,body').animate({
      scrollTop: claim-80
  }, 500);
  return false;
});
});


















































//ヘッダーのホームの移動先
$(function(){
$('.l-header__right > li:first-child').on('click', function(){
  var targetTop = $('#p-profile__topTtl').offset().top;
  $('body, html').animate({ scrollTop: 0 }, 500);
  return false;
});
});
//ヘッダーの自己紹介の移動先
$(function(){
$('.l-header__right > li:nth-child(2)').on('click', function(){
  var targetTop = $('#p-profile__topTtl').offset().top;
  $('html,body').animate({
      scrollTop: targetTop-100
  }, 500);
  return false;
});
});
//ヘッダーのスキルの移動先
$(function(){
$('.l-header__right > li:nth-child(3)').on('click', function(){
  var skill = $('#p-skill').offset().top;
  $('html,body').animate({
      scrollTop: skill-80
  }, 500);
  return false;
});
});

//ヘッダーの制作実績の移動先
$(function(){
$('.l-header__right > li:nth-child(4)').on('click', function(){
  var performar = $('#p-performance').offset().top;
  $('html,body').animate({
      scrollTop: performar-80
  }, 500);
  return false;
});
});
//ヘッダーのお問い合わせの移動先
$(function(){
$('.l-header__right > li:last-child').on('click', function(){
  var claim = $('#c-claim').offset().top;
  $('html,body').animate({
      scrollTop: claim-80
  }, 500);
  return false;
});
});
