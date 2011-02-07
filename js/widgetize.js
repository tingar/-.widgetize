(function($) {
	var
		/* cached selector for the <body /> element */
		$body = 0,
		/* container that widgets will be added to */
		$container = 0,
		/* default options for new widgets */
		defaultOptions = {
			clickable: true
		};

	/**
	 * Widgetize a container.
	 * If there is not yet a widget container, one will be added to
	 * the page the first time this function is called.
	 *
	 * @param Object opts Options for the widget (see readme.textile)
	 */
	$.fn.widgetize = function(opts) {
		// merge options with defaults
		if (!opts) {
			opts = {};
		}
		var options = $.extend(true, defaultOptions, opts);

		// grab body selector
		if (!$body) {
			$body = $(document.body);
		}

		// create container selector, if it doesn't already exist
		if (!$container) {
			// helper div, so that we're always the child
			// of a relative element
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
				// set up the UE elements of clickable things
				$this.hover(
					function() { $this.addClass('ui-state-hover'); },
					function() { $this.removeClass('ui-state-hover'); }
				);
			}

			$this.appendTo($container).show();
		});
	};

})(jQuery);
