/* only execute this script when the document is ready */
$(document).ready(function(){

    const $navLiItems = $('.nav-bkg li');
    const $btn = $('#nav-button');
    /* function called when you click of the button */
    $btn.click(function(){
        
        /* this if else to change the text in the button */
        if($btn.text() == "☰"){
          $btn.text("x");
          $navLiItems.toggle("display: block");

        }else{
          $btn.text("☰");
          $navLiItems.toggle("display: none");
        }
      /* this function toggle the visibility of our "li" elements */

      mql = window.matchMedia("(max-width: 999px)");
      mql.addListener(clearNavListjQueryStyles);
  
        function clearNavListjQueryStyles(e) {
        if (e.matches) {
            $btn.text("☰");
            $navLiItems.removeAttr('style');
        }
    }
    });

    mql = window.matchMedia("(min-width: 999px)");
    mql.addListener(clearNavListjQueryStyles);

  function clearNavListjQueryStyles(e) {
    console.log(e.matches);
    if (e.matches) {
      console.log('at desktop...');
      $btn.text("☰");
      $navLiItems.removeAttr('style');
    }
  }
});