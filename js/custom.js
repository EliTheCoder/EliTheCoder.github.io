/* -------------------------------------------------------------------------------
=========================================
SELENA - Free Multi-purpose One Page Template
Version: 1.0 (Initial Release)
Designed By: Maher Jarrah

Website:		http://maherjarrah.com
Twitter:			https://twitter.com/MaherJarrah1
Facebook:		https://fb.com/maherjarrah111
Behance: 		https://www.behance.net/maherjarrah

You can use this template for your personal purposes only, and it's under Creative Commons Attribution-NonCommercial v3.0 license https://creativecommons.org/licenses/by-nc/3.0/
=========================================
--------------------------------------------------------------------------------*/

/*===================
	 PRELOADER
===================*/
//remove the preloader when the page is ready
jQuery(document).ready(function($) {

	$(window).load(function(){
		$('.preloader').fadeOut('slow',function(){$(this).remove();});
	});

});

/*===================
	 Touch Fixes
===================*/
env = (function() {
  var flags = {}, el = document.createElement('div'), root = document.documentElement, i
  function flag(names) {
    names = names.split(' ')
    for (i = 0; i < names.length; i++)
      flags[names[i]] = true
  }
  function classnames() {
    var names = [], name
    for(name in flags) if (flags.hasOwnProperty(name))
      names.push(name)
    root.className += (root.className ? ' ' : '') + names.join(' ')
  }
  
  el.setAttribute('ontouchstart', 'return;')
  if (typeof el.ontouchstart === 'function') flag('touch')
  if (navigator.msPointerEnabled && navigator.msMaxTouchPoints > 1) flag('touch')
  
  classnames()
  return flags
})()

/*===================
	 NAVIGATION
===================*/
$(document).ready(function() {
	$('.navigation-links').onePageNav({
		scrollThreshold: 0.2, // Percentage of screen at which the next section should become current
		filter: ':not(.external)', // Selector of links to filter out of one page nav functionality.
		easing: 'none', // fixing the bug
		changeHash: true // Whether you want to change the hash when a user clicks on the navigation
	});
});

(function ($){
	$(".navigation-links").navigation({
		maxWidth: "930px",
		label: false
	});
})(jQuery);

/*===================
	 RANGE INPUT
===================*/
var range = $('.range-slider input'),
    value = $('.range-value');
    
value.html(range.attr('value'));

range.on('input', function(){
    value.html(this.value);
});

/*===================
	 PORTFOLIO
===================*/
(function ($){
      $('.projects').imagesLoaded(function() {//:not(.touch .projects)
          
        var options = {
		  autoResize: true,
          container: $('.projects-container'),//:not(.touch .projects-container)
		  offset:0
        };
		
      var handler = $('.projects li');//:not(.touch .projects li)
          filters = $('.portfolio-filters li');//:not(.touch .portfolio-filters li)

      handler.wookmark(options);
	  

        /**
         * When a filter is clicked, toggle it's active state and refresh.
         */
        var onClickFilter = function(event) {
          var item = $(event.currentTarget),
              activeFilters = [];

          if (!item.hasClass('active')) {
            filters.removeClass('active');
          }
          item.toggleClass('active');

          // Filter by the currently selected filter
          if (item.hasClass('active')) {
            activeFilters.push(item.data('filter'));
          }

          handler.wookmarkInstance.filter(activeFilters);
        }

        // Capture filter click events.
        filters.click(onClickFilter);
      });
    })(jQuery);
