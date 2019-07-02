$(document).ready(function() {

const $navLiItems = $('#inner-header>li');
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
    });

    /* this function toggles the visibility of "li" elements */

    mql = window.matchMedia("(max-width: 1201)");
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