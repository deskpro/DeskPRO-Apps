define([], function () {
  return {
    init: function () {
      var fieldId = parseInt(this.getSetting('field_id', 0) || 0);
      var map = this.getFieldMap();
      var meId = window.DESKPRO_PERSON_ID;

      console.log("[BillingAgentFieldMap] fieldId = %d, fieldMap = %o", fieldId, map);

      if (!fieldId) {
        return;
      }

      var defaultInitForm = DeskPRO.Agent.PageHelper.TicketBilling.prototype.initForm;
      DeskPRO.Agent.PageHelper.TicketBilling.prototype.initForm = function() {
        defaultInitForm.call(this);
        var form = this.getEl('billing_form');
        var val = map[meId] || false;
        var field = form.find('select[name="custom_fields[field_' + fieldId + ']"], select[name="billing_fields[field_' + fieldId + ']"]').first();

        if (!field[0]) {
          console.log("[BillingAgentFieldMap] No field custom_def_billing_%d ", fieldId);
          return;
        }
        if (!val) {
          console.log("[BillingAgentFieldMap] No mapping for agent %d", meId);
          return;
        }

        console.log("[BillingAgentFieldMap] Setting custom_def_billing_%d to value %s", fieldId, val);
        field.find("[value='" + val + "']").prop('selected', true);
      };
    },

    getFieldMap: function() {
      var mapStr = (this.getSetting('agent_to_value') || '').replace(/(\r|\r\n)/g, "\n").split("\n");
      var map = {};

      for (var i = 0; i < mapStr.length; i++) {
        var m = mapStr[i].match(/^\s*(\d)\s*=\s*(\d)\s*$/);
        if (m) {
          map[parseInt(m[1])] = parseInt(m[2]);
        }
      }

      return map;
    }
  }
});