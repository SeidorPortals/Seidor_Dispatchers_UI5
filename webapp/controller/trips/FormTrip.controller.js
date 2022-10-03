sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
    "com/seidor/usa/dispatchers/util/Util"
], function(Controller, MessageBox) {
    'use strict';

    return Controller.extend("com.seidor.usa.dispatchers.controller.trips.FormTrip", {
        onInit: function() {},
        onAfterRendering: function(){
            this.oModel = this._getModel();
            this.oRouteBefore = this.oModel.getProperty("/mPropertyTrips/gRoute");
            this.oRouteCurrent = "vTabCreate";
        },
        onBackReport: function() {
            this.oModel.setProperty("/mPropertyTrips/vTabAll", true);
            this.oModel.setProperty("/mPropertyTrips/vTabCreate", false);
        },
        onCreateShipments: function() {
            this.oModel.setProperty(`/mPropertyTrips/vTabCreate`, false);
            this.oModel.setProperty("/mPropertyTrips/vTabShipmentCreate", true);
        },
        onCancelEditTrip: function() {
            try {
                this.onBackReport();
            }catch(e){
                MessageBox.error("Erro in onCancelEditTrip.");
            }
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