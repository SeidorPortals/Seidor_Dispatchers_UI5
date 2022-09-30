sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
    "com/seidor/usa/dispatchers/util/Util"
], function(Controller, MessageBox){
    'use strict';

    return Controller.extend("com.seidor.usa.dispatchers.controller.trips.ViewTrip", {
        onInit: function() {},
        onAfterRendering: function (){
            this.oModel = this._getModel();
            this.oRouteBefore = this.oModel.getProperty("/mPropertyTrips/gRoute");
            this.oRouteCurrent = "vTabView";
        },
        onBackReport: function() {
            this.oModel.setProperty("/mPropertyTrips/vTabAll", true);
            this.oModel.setProperty("/mPropertyTrips/vTabView", false);
        },
        onViewShipment: function(oEvent) {
            const _shipmentSelected = this.oModel.getProperty("/mTripSelected/Shipments").find(x => x.Number === oEvent.getSource().getProperty("text"));
            if(_shipmentSelected === undefined) {
                MessageBox.error("No Found Data.");
            }else{
                this.oModel.setProperty("/mShipmentSelected", _shipmentSelected);
                this.oModel.setProperty("/mPropertyTrips/gRoute", this.oRouteCurrent);
                this.oModel.setProperty(`/mPropertyTrips/${this.oRouteCurrent}`, false);
                this.oModel.setProperty("/mPropertyTrips/vTabShipmentView", true);
            }
        },
        onEditTrip: function() {
            debugger;
        },

        onPreviousAndNextTrip: function(action) {
            let index = this.oModel.getProperty("/mDataTripsAll").indexOf(this.oModel.getProperty("/mTripSelected"));
            if(action === "previous") {
                index --;
            }else{
                index ++;
            }
            if(index > -1){
                if(index < this.oModel.getProperty("/mDataTripsAll").length){
                    this.oModel.setProperty("/mTripSelected", this.oModel.getProperty("/mDataTripsAll")[index])
                }else{
                    MessageBox.alert("No more records");
                }
            }else{
                MessageBox.alert("No more records");
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