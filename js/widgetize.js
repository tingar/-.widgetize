(function($) {
	// container for the widgets
	var $body = 0,
		$container = 0,
		defaultOptions = {
			clickable: true
		};

	$.fn.widgetize = function(opts) {
		if (!opts) {
			opts = {};
		}
		var options = $.extend(true, defaultOptions, opts);

		if (!$body) {
			$body = $(document.body);
		}

		if (!$container) {
			var $helper = $('<div />')
				.css({
					'position': 'relative',
					'overflow': 'visible',
					'width': '100%',
					'height': '0px'
				});

			$container = $('<div />')
				.addClass('widgetize-container ui-helper-clearfix')
				.appendTo($helper);

			$helper.appendTo($body).bgiframe();
		}

		return $(this).each(function() {
			var $this = $(this);

			$this.addClass('ui-state-default widgetize-widget');

			if (options.clickable) {
				$this.hover(
					function() { $this.addClass('ui-state-hover'); },
					function() { $this.removeClass('ui-state-hover'); }
				);
			}

			$this.appendTo($container).show();
		});
	};

})(jQuery);
