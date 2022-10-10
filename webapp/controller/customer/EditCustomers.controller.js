sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/seidor/usa/dispatchers/util/Util",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
], function (Controller, Util) {
	"use strict";
	
    return Controller.extend("com.seidor.usa.dispatchers.controller.customer.EditCustomersPage", {
        onInit: function() {},

        onBackReport: function() {
            this._getModel().setProperty("/mPropertyCustomers/vTabAll", true);
            this._getModel().setProperty("/mPropertyCustomers/vTabCreate", false);
        },

		/* _getModel
		 * @returns {sap.ui.model.Model} the model instance
		 * Convenience method for getting the view model by name in every controller of the application.
		 */
		_getModel: function () {
			return this.getView().getModel();
		},

		/* _getView
		 * @returns {sap.ui.model.View} the View instance
		 * Convenience method for getting the view model by name in every controller of the application.
		 */
		_getView: function () {
			return this.getView();
		},

		/* _getController
		 * @returns {sap.ui.model.Controller} the model instance
		 * Convenience method for getting the view model by name in every controller of the application.
		 */
		_getController: function () {
			return this.getView().getController();
		}
       // 
    });
});