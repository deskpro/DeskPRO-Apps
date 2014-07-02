define(function() {
	return {
		init: function() {
			this.registerWidgetTab('ticket', '@messages.tab', "Attachments ({{content.attachments.length}})", 'tab.html', function($scope, $app, $ticket) {
				$scope.attachments = $ticket.attachments;
				console.log($scope.attachments);
			});
		}
	}
});