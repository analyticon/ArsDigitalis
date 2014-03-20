jQuery(document).ready(function($) {
var color = "grey"; // tealgreen, orange, green, red, pink, purple, orange, navyblue, magenta, cream, blue, yellow, grey
var css_url = "css/colors/color-" + color + ".css";
$('head').append('<link rel="stylesheet" href="' + css_url + '" type="text/css" />');
})



function is_touch_device() {
  return !!('ontouchstart' in window);
}


/***************************************************
        PORTFOLIO ITEM IMAGE HOVER
***************************************************/
$(window).load(function(){

    $(".portfolio-grid ul li .item-info-overlay").hide();

    if( is_touch_device() ){
        $(".portfolio-grid ul li").click(function(){

            var count_before = $(this).closest("li").prevAll("li").length;

            var this_opacity = $(this).find(".item-info-overlay").css("opacity");
            var this_display = $(this).find(".item-info-overlay").css("display");


            if ((this_opacity == 0) || (this_display == "none")) {
                $(this).find(".item-info-overlay").fadeTo(250, 1);
            } else {
                $(this).find(".item-info-overlay").fadeTo(250, 0);
            }

            $(this).closest("ul").find("li:lt(" + count_before + ") .item-info-overlay").fadeTo(250, 0);
            $(this).closest("ul").find("li:gt(" + count_before + ") .item-info-overlay").fadeTo(250, 0);

        });

    }
    else{
            $(".portfolio-grid ul li").hover(function(){
                $(this).find(".item-info-overlay").fadeTo(250, 0.9);
                }, function() {
                    $(this).find(".item-info-overlay").fadeTo(250, 0);
            });

        }




});

/***************************************************
      DUPLICATE H3 & H4 IN PORTFOLIO
***************************************************/
$(window).load(function(){

    $(".item-info").each(function(i){
        $(this).next().prepend($(this).html())
    });
});

/***************************************************
         TOGGLE STYLE
***************************************************/
jQuery(document).ready(function($) {

    $(".toggle-container").hide();
    $(".trigger").toggle(function(){
        $(this).addClass("active");
        }, function () {
        $(this).removeClass("active");
    });
    $(".trigger").click(function(){
        $(this).next(".toggle-container").slideToggle();
    });
});



/*--------------------------------------------------
         ADDITIONAL CODE GRID LIST
---------------------------------------------------*/
(function($){
    $.fn.extend({
        bra_last_last_row: function() {
            return this.each(function() {
                      $(this).each(function(){
                        var no_of_items = $(this).find("li").length;
                        var no_of_cols = Math.round($(this).width() / $(this).find(":first").width() );
                        var no_of_rows = Math.ceil(no_of_items / no_of_cols);
                        var last_row_start = (no_of_rows - 1) * no_of_cols - 1;
                        if (last_row_start < (no_of_cols - 1)) {
                            last_row_start = 0;
                            $(this).find("li:eq(" + last_row_start + ")").addClass("last-row");
                        }
                        $(this).find("li:nth-child(" + no_of_cols + "n+ " + no_of_cols + ")").addClass("last");
                        $(this).find("li:gt(" + last_row_start + ")").addClass("last-row");
                    })
            }); // return this.each
        }
    });
})(jQuery);

jQuery(document).ready(function($) {
    $('.grid').bra_last_last_row();
    //$(window).resize(function() {
        //$('.grid').bra_last_last_row();
    //});
})

/***************************************************
      ADD MASK LAYER
***************************************************/
$(window).load(function(){
    var $item_mask = $("<div />", {"class": "item-mask"});
    $("ul.shaped .item-container, ul.comment-list .avatar").append($item_mask)
})
