sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {
	"use strict";
 
	return UIComponent.extend("SAP.DemandMgmt.Component", { 
		metadata: {
			manifest: "json"
		},
		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
	
	});
});
SAP.DemandMgmt.Component.prototype.init = function() {
	
	sap.ui.core.UIComponent.prototype.init.apply(this);
	this.getRouter().initialize();
}