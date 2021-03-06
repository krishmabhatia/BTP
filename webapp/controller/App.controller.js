sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"

], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("opensap_1.controller.App", {

		onShowHello : function () {
			// show a native JavaScript alert
            //MessageToast.show("Hello openSAP Krish!!");
            // read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);

		}
	});
});

