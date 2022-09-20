sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';

    return Controller.extend("com.seidor.usa.dispatchers.controller.trips.EditTrip", {
        onInit: function() {},

        onBackReport: function() {
            this._getModel().setProperty("/mPropertyTrips/vTabAll", true);
            this._getModel().setProperty("/mPropertyTrips/vTabCreate", false);
            this._getModel().setProperty("/mPropertyTrips/vTabView", false);
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
    });
});