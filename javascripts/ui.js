(function(jQuery){

  jQuery('a[href="#highlight_artist"]').click(function(e) {
    var target = jQuery(e.currentTarget),
        pos = target.parent().index();

    jQuery('.artist__name, .artist__picture').removeClass('is-selected');
    jQuery(e.currentTarget).add('.artists__pictures .artist__picture:eq('+pos+')').addClass('is-selected');
  });

})(jQuery);