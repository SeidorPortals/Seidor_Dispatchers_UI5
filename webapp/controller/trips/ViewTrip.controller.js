sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller){
    'use strict';

    return Controller.extend("com.seidor.usa.dispatchers.controller.trips.ViewTrip", {
        onInit: function() {},

        onBackReport: function() {
            let oModel = this._getModel();
            oModel.setProperty("/mPropertyTrips/vTabAll", true);
            oModel.setProperty("/mPropertyTrips/vTabCreate", false);
            oModel.setProperty("/mPropertyTrips/vTabView", false);
            oModel.setProperty("/mPropertyTrips/vTabShipment", false);
            oModel.setProperty("/mTripSelected", {}); 
        },

        onViewShipment: function() {
            let oModel = this._getModel();
            oModel.setProperty("/mPropertyTrips/vTabAll", false);
            oModel.setProperty("/mPropertyTrips/vTabCreate", false);
            oModel.setProperty("/mPropertyTrips/vTabView", false);
            oModel.setProperty("/mPropertyTrips/vTabShipment", true);
        },

        onEditTrip: function() {
            debugger;
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