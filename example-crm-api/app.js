define(['example_crm_api/js/Ticket/PropertiesTabController'], function(Ticket_PropertiesTabController) {
	return {
		init: function() {
			this.registerWidgetTab("ticket", "@properties.tab", "Purchases", "Ticket/PropertiesTab.html", Ticket_PropertiesTabController);
		}
	}
});