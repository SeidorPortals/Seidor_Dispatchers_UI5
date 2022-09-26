sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox){
    'use strict';
    return Controller.extend("com.seidor.usa.dispatchers.controller.trips.ViewShipment", {
        onInit: function(){},
        onBackReport: function(){
            let oModel = this._getModel();
            oModel.setProperty("/mPropertyTrips/vTabAll", false);
            oModel.setProperty("/mPropertyTrips/vTabCreate", false);
            oModel.setProperty("/mPropertyTrips/vTabView", true);
            oModel.setProperty("/mPropertyTrips/vTabShipment", false);
        },

        onPreviousAndNextShipment: function(action) {
            debugger;
            var oModel = this._getModel();
            let index = oModel.getProperty("/mTripSelected/Shipments").indexOf(oModel.getProperty("/mShipmentSelected"));
            if(action === "previous") {
                index --;
            }else{
                index ++;
            }
            if(index > -1){
                if(index < oModel.getProperty("/mTripSelected/Shipments").length){
                    oModel.setProperty("/mShipmentSelected", oModel.getProperty("/mTripSelected/Shipments")[index])
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