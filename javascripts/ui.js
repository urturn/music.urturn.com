(function(jQuery){

  var currentKey = '1';
  var artistsInfo = {
    '1': {
      fullName: 'Britney Spears',
      link: 'http://www.urturn.com/britneyspears/britneyjean',
      cta: 'Make your #BritneyJean Selfie! It\'s Ur Turn!'
    },
    '2': {
      fullName: 'Green Day',
      link: 'http://www.urturn.com/GreenDay/uno_dos_tres',
      cta: '\"Say \'Queso\'! ¡Uno! ¡Dos! or ¡Tres! It\'s Ur Turn!\"'
    },
    '3': {
      fullName: 'Miley Cyrus',
      link: 'http://www.urturn.com/mileycyrus/bangerz',
      cta: 'Make your #Bangerz <br /> It\'s Ur Turn!'
    },
    '4': {
      fullName: 'Kendrick Lamar',
      link: 'http://www.urturn.com/kendricklamar/gkmc_cover',
      cta: 'Be A Good Kid! It\'s Ur Turn!'
    },
    '5': {
      fullName: 'Demi Lovato',
      link: 'http://www.urturn.com/DemiLovato/neonlights',
      cta: 'Turn Your World in #NeonLights! It\'s Ur Turn!'
    },
    '6': {
      fullName: 'Ellie Goulding',
      link: 'http://www.urturn.com/EllieGoulding/halcyon_cover',
      cta: 'Show Me Your #Halcyon World! It\'s Ur Turn!'
    }
  };

  // set interval to start the carrousel
  var cInterval = window.setInterval(function() {
    var key = parseInt(currentKey) + 1;
    if (key > 6) {
      key = 1;
    }
    var target = jQuery('.artist__name[data-key="' + key + '"]');
    switchView(key.toString(), target);
  }, 3500);

  jQuery('a[href="#highlight_artist"]').click(function(e) {
    e.preventDefault();
    // deactivate interval
    window.clearInterval(cInterval);

    var target = jQuery(e.currentTarget),
        key = target.data('key');

    switchView(key, target);
  });

  function switchView(key, target) {
    // manage navigation
    jQuery('.artist__name').removeClass('is-selected');
    target.addClass('is-selected');

    // Switch artist class
    var newArtist = 'artist-' + key;
    target.closest('.artists').removeClass('artist-'+currentKey).addClass(newArtist);
    currentKey = key;

    // Set the cta
    var artistInfo = artistsInfo[currentKey];
    setTimeout(function() {
      jQuery('.artist__cta > h2').html(artistInfo.cta);
      jQuery('.artist__link').attr('href', artistInfo.link).text(artistInfo.fullName);
    }, 200);
  };

})(jQuery);