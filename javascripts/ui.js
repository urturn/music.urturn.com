(function(jQuery){

  var currentKey = '1';
  var artistsInfo = {
    '1': {
      fullName: 'Britney Spears',
      link: 'http://www.urturn.com/britneyspears',
      cta: '\"Make your own Britney Jean cover, it\'s ur turn!\"'
    },
    '2': {
      fullName: 'Green day',
      link: 'http://www.urturn.com/greenday',
      cta: '\"Say \'Queso\'! Put your face in ¡Uno! ¡Dos! or ¡Tres! new album covers!\"'
    },
    '3': {
      fullName: 'Miley Cyrus',
      link: 'http://www.urturn.com/MileyCyrus',
      cta: '\"Make your #Bangers\"'
    },
    '4': {
      fullName: 'Kendrick Lamar',
      link: 'http://www.urturn.com/kendricklamar',
      cta: '\"Create an album cover featuring YOU\"'
    },
    '5': {
      fullName: 'Demi Lovato',
      link: 'http://www.urturn.com/demilovato',
      cta: '\"Make your Neon Lights cover!\"'
    },
    '6': {
      fullName: 'Elie Goulding',
      link: 'http://www.urturn.com/EllieGoulding',
      cta: '\"Be creative and design your own #elliegoulding poster!\"'
    }
  };

  jQuery('a[href="#highlight_artist"]').click(function(e) {
    e.preventDefault();
    var target = jQuery(e.currentTarget),
        key = target.data('key');

    // manage navigation
    jQuery('.artist__name').removeClass('is-selected');
    target.addClass('is-selected');

    // Switch artist class
    var newArtist = 'artist-' + key;
    target.closest('.artists').removeClass('artist-'+currentKey).addClass(newArtist);
    currentKey = key;

    // Set the cta
    var artistInfo = artistsInfo[currentKey];
    jQuery('.artist__cta > h2').text(artistInfo.cta);
    jQuery('.artist__link').attr('href', artistInfo.link).text(artistInfo.fullName);
  });

})(jQuery);