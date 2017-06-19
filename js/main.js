$(function() {
  // メニューの追従
  var
  $window = $(window),
  $headerMenu = $('#header-menu-area'),
  $imgArea = $('#header-img-area'),
  menuHeight = $headerMenu.outerHeight(),
  menuPos = $headerMenu.offset().top,
  fixedClass = 'is-fixed';

  $window.on('load scroll', function(e) {
    var $self = $(this);
    if ($self.width() > 600) {
      $headerMenuArea.removeClass('sp-menu');
      if ($self.scrollTop() > menuPos) {
        $headerMenu.addClass(fixedClass);
        $imgArea.css('margin-top', menuHeight);
      } else {
        $headerMenu.removeClass(fixedClass);
        $imgArea.css('margin-top', '0');
      }
    } else {
      $headerMenuArea.addClass('sp-menu');
      if ($self.scrollTop() <= menuPos) {
        $headerMenu.removeClass(fixedClass);
        $imgArea.css('margin-top', '0');
      }

    }
  });

  // 要素のフェードイン
  $('.inview-content').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    var $self = $(this);
    if (isInView) {
      $self.stop().addClass('inview-content-fadeIn');
    } else {
      // $self.stop().removeClass('inview-content-fadeIn');
    }
  });



  var $headerMenuArea = $('#header-menu-area');
  var $headerMenuBtn = $('#header-menu-btn');

  // ボタンをクリックした時のあれこれ
  $('#header-menu-btn').on('click', function() {
    var $self = $(this);
    if ($self.hasClass('active')) {
      $self.removeClass('active');
      $headerMenuArea.fadeOut();
    } else {
      $self.addClass('active');
      $headerMenuArea.fadeIn();
    }
  });

  // 画面のリサイズでメニューのあれこれ
  $window.on('resize', function() {
    var $self = $(this);
    if ($self.width() > 600) {
      $headerMenuBtn.removeClass('active');
      $headerMenuArea.removeClass('sp-menu');
      $headerMenuArea.css('display', 'block');
    } else {
      $headerMenuArea.addClass('sp-menu');
      $headerMenuArea.css('display', 'none');
    }
  })
});
