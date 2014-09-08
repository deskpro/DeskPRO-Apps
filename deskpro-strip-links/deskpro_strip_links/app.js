define(function() {
	var stripLinksOnMessage = function(el, allowText) {
		el.find('.body-text').find('a').each(function() {
			var a = $(this),
				href = a.attr('href'),
				span = $('<span />'),
				spanText;

			span.text(a.text());

			if (allowText && href && href.length) {
				spanText = $('<span class="deskpro_strip_links-linktext" />').text("[" + href + "]");
				spanText.appendTo(span);
			}

			a.replaceWith(span);
		});
	};

	var ticketTabContext = {
		init: function() {
			var allowText = this.getApp().getSetting('show_url_text');
			var messageWrapper = this.getFragment().getEl('messages_wrap');
			if (!messageWrapper || !messageWrapper[0]) {
				return;
			}

			var getMessageEls = function() {
				return messageWrapper.find('article.content-message').not('done-deskpro_strip_links');
			};

			var updateTicket = function() {
				getMessageEls().each(function() {
					var me = $(this);
					me.addClass('done-deskpro_strip_links');
					stripLinksOnMessage(me, allowText);
				});
			};

			this.addFragmentEventHandler('load_messge_page', function() { updateTicket(); });
			updateTicket();
		}
	};

	return {
		init: function() {
			$('<style type="text/css" class="deskpro_strip_links">.body-text-message a { color: #404040 !important; text-decoration: none !important; cursor: text !important; } .deskpro_strip_links-linktext { padding-left: 5px; font-size: 11px; color: #8e95a7; }</style>').appendTo('head');
			this.register('ticket', ticketTabContext);
		}
	}
});