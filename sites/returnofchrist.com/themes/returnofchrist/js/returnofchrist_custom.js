(function ($) {
  // Handle user toolbar when user is admin and have admin toolbar enabled.
  Drupal.behaviors.returnofchrist.com_theme_default_behavior = {
        firstLoad: true,
    attach: function(context, settings) {
                if(this.firstLoad) {
                  $(window).bind('load resize', this.resizePoster);
                        this.resizePoster();
                }
      $('a.gift', context).bind('click', this.changeDonation);
      $('.input .textarea', context).bind('focus', this.hideLabel).bind('blur', this.showLabel);
      $('.donate-button', context).bind('click', this.makeDonation);
                this.firstLoad = false;
        },
        resizePoster: function() {
                $posterLeft = $('.region-poster-left');
      if($posterLeft.length > 0) {
                    $posterLeft.height($(window).height()-$posterLeft.offset().top-10);
      }
        },
    changeDonation: function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.gifts a.active').removeClass('active');
        $(this).addClass('active');
    },
    hideLabel: function(e) {
      $(this).prev().hide();
    },
    showLabel: function(e) {
      var $this = $(this);
      if($this.text().length == 0) {
        $this.prev().show();
      }
    },
    makeDonation: function(e) {
      e.preventDefault();
      e.stopPropagation();
      var baseLink = 'https://www.paypal.com/cgi-bin/webscr?business=donate@jesus2jesus.com&cmd=_donations&currency_code=USD&item_name="Jesus to Jesus Featured Film Contribution"';
      var amount = $('.gifts a.active').attr('data-amount');
      if(amount == '0') {
        window.location = baseLink;
      } else {
        window.location = baseLink + '&amount=' + amount;
      }
    }
  }
})(jQuery);
