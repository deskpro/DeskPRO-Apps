define(function() {
	return {
		init: function() {
			if (!DeskPRO.Agent.ElementHandler.TicketReplyBox._hasNoteTabMod) {
				DeskPRO.Agent.ElementHandler.TicketReplyBox._hasNoteTabMod = true;
				DeskPRO.Agent.ElementHandler.TicketReplyBox.origInitPage = DeskPRO.Agent.ElementHandler.TicketReplyBox.prototype.initPage;
				DeskPRO.Agent.ElementHandler.TicketReplyBox.prototype.initPage = function() {
					DeskPRO.Agent.ElementHandler.TicketReplyBox.origInitPage.call(this);
					this.getElById('replybox_notetab_btn').click();
				};
			}
		}
	}
});