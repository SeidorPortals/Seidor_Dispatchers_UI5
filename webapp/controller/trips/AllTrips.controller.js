sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"com/seidor/usa/dispatchers/util/Util",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/m/MessageBox"
], function(Controller, Util, JSONModel, Filter, MessageBox){
    'use strict';

    return Controller.extend("com.seidor.usa.dispatchers.controller.trips.AllTrips", {
        onInit: function () {
        },
        onAfterRendering: function(){
            this.oModel = this._getModel();
        },
        onCreateTrip: function() {
            this.onResetModels();
            this._getModel().setProperty("/mPropertyTrips/vTabAll", false);
            this._getModel().setProperty("/mPropertyTrips/vTabCreate", true);
        },
        onEditTrip: function() {
            let _itemSelected = this.byId("tAllTrips").getSelectedIndex();
            if(_itemSelected !== -1){
                let _itemsTable = this.byId("tAllTrips").getBindingInfo("rows").binding.aIndices;
                const _idTripSelected = this.oModel.getProperty("/mDataTrips")[_itemsTable[_itemSelected]].ID;
                const _tripSelected = this.oModel.getProperty("/mDataTripsAll").find(x => x.ID === _idTripSelected);
                this.oModel.setProperty("/mTripSelected", Object.assign({},_tripSelected));
                this.oModel.setProperty("/mPropertyTrips/vTabAll", false);
                this.oModel.setProperty("/mPropertyTrips/vTabCreate", true);
                this.oModel.setProperty("/mPropertyTrips/vTabView", false);
                this.oModel.setProperty("/mPropertyTrips/vTabShipmentView", false);
            }else{
                MessageBox.warning("Select a record.")
            }        
        },
        onViewTrip: function(oEvent) {
            const _tripSelected = this.oModel.getProperty("/mDataTripsAll").find(x => x.ID === oEvent.getSource().getProperty("text"));
            if(_tripSelected === undefined) {
                MessageBox.error("No Found Data.");
            }else{
                this.oModel.setProperty("/mTripSelected", _tripSelected);
                this.oModel.setProperty("/mPropertyTrips/vTabAll", false);
                this.oModel.setProperty("/mPropertyTrips/vTabView", true);
            }
        },
        onCopyTrip: function() {
            console.log("Medoto Copy");
        },
        onExportExcel: function() {
            console.info("Metodo Export");
        },
        onResetModels: function() {
            this.oModel.setProperty("/mTripSelected", {"Shipments" : []});
            this.oModel.setProperty("/mShipmentSelected", {"PickUp" : [], "Delivery" : [], "CarrierCost" : []});
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