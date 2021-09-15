
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


$(window).on('scroll', function() {
    var fixedNavi = $("#fixedNav");
    if ($(this).scrollTop() > 250) {
        if (!fixedNavi.data('faded')) fixedNavi.data('faded', 1).stop(true).fadeTo(400, 1);
    } else if (fixedNavi.data('faded')) {
        fixedNavi.data('faded', 0).stop(true).fadeTo(400, 0);
    }
});