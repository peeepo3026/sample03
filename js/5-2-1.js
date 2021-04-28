$(function () {
  // ハンバーガーメニューの開閉
  // $('button').click(function () {
  $('button').click(function () {
    if ($(window).scrollTop() > $('.branch').offset().top - 60) {
      // aboutよりしたの時
      $('.openbtn1').toggleClass('active');
      // $('nav').toggleClass('d-none');
      $('nav').fadeToggle('.d-none');
      $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(ス クロールを固定)
      $('.page-header button').toggleClass('color-change');
      $('.openbtn1 span').toggleClass('color-change');
      $('.page-header').toggleClass('black');
      // $('body').toggleClass('body-black');
      $('.burger-musk').fadeToggle(300);
    } else {
      // aboutよりうえの時
      $('.openbtn1').toggleClass('active');
      // $('nav').toggleClass('d-none');
      $('nav').fadeToggle('.d-none');
      $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(ス クロールを固定)
      // $('body').toggleClass('body-black');
      $('.burger-musk').fadeToggle(300);
    }
  });



  // headerの色を変える
  $('.page-header').each(function () {
    $(window).on('scroll', function () {
      // ロゴ
      if ($(window).scrollTop() > $('.fv-bg').outerHeight() - 50) {
        // fv-bgよりしたの時
        $('.page-header').addClass('black');
      } else {
        // fv-bgうえしたの時
        $('.page-header').removeClass('black');
      }
      // ハンバーガーメニュー
      var $headerContainer = $('.branch').offset().top - $('.page-header').outerHeight();
      if ($(window).scrollTop() > $('.branch').offset().top - 60) {
        // aboutよりしたの時
        $('.page-header button').addClass('color-change');
        $('.openbtn1 span').addClass('color-change');
      } else {
        // aboutよりしたの時
        $('.page-header button').removeClass('color-change');
        $('.openbtn1 span').removeClass('color-change');
      }
    });
    $(window).trigger('scroll');
  });
})
