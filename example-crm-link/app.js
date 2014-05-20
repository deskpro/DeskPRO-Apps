define(['example_crm_link/js/Ticket/PropertiesAfterController'], function(Ticket_PropertiesAfterController) {
	return {
		init: function() {
			this.registerWidget("ticket", "@properties.after", "Ticket/PropertiesAfter.html", Ticket_PropertiesAfterController);
		}
	}
});