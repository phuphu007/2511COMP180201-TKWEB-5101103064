$(function(){
  // chuyển trang
  function showPage(hash){
    if(!hash) hash = '#home';
    $('.page').removeClass('active');
    $(hash).addClass('active');
    window.scrollTo(0,0);
  }
  showPage(location.hash);
  $(window).on('hashchange', ()=>showPage(location.hash));

  // toggle sản phẩm
  $('.toggle').click(function(){
    $(this).closest('li').find('.prod-detail').slideToggle();
  });

  // form liên hệ
  $('#contact-form').submit(function(e){
    e.preventDefault();
    $('#contact-msg').text('Cảm ơn bạn đã liên hệ! 👻');
    this.reset();
  });

  // form đăng ký
  $('#reg-form').submit(function(e){
    e.preventDefault();
    $('#reg-msg').text('Đăng ký thành công! 🎃');
    this.reset();
  });

  // âm thanh nền
  const music = $('#bg-music')[0];
  $('#music-btn').click(function(){
    if(music.paused){ music.play(); $(this).text('🔈'); }
    else { music.pause(); $(this).text('🔊'); }
  });
});
