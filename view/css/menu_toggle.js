$(".menu-toggle").on('click', function(e) {
  e.preventDefault();
  $(".drawer-menu").toggleClass('visible');
  $(".menu-toggle").toggleClass('inverted');
});

$(document).on('click', function(event) {  
  if (!$(event.target).closest('.drawer-menu, .menu-toggle').length) {
    $(".drawer-menu").removeClass('visible');
    $(".menu-toggle").removeClass('inverted');
  }
});