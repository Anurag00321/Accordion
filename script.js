$(document).ready(function(){
  $('.accordion-header').click(function(){
    $(this).toggleClass('active');
    $(this).next('.accordion-content').slideToggle(300);
    $('.accordion-content').not($(this).next()).slideUp(300);
    $('.accordion-header').not(this).removeClass('active');
  });
});
