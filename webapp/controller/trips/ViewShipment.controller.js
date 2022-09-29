sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
    "sap/ui/core/Fragment"
], function (Controller, MessageBox, Fragment){
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
        onViewPickup: function(oEvent) {
            let oModel = this._getModel();
            const _pickupSelected = oModel.getProperty("/mShipmentSelected/PickUp").find(x => x.IdPickup === oEvent.getSource().getProperty("text"));
            if(_pickupSelected === undefined) {
                MessageBox.error("No Found Data.");
            }else{
                oModel.setProperty("/mPickUpSelected", _pickupSelected);
                this.onOpenFragment("dShowFragmentPickup", "PickUpData");
            }
        },
        onViewDelivery: function(oEvent){
            let oModel = this._getModel();
            const _deliverySelected = oModel.getProperty("/mShipmentSelected/Delivery").find(x => x.IdDelivery === oEvent.getSource().getProperty("text"));
            if(_deliverySelected === undefined){
                MessageBox.error("No Found Data.");
            }else{
                oModel.setProperty("/mDeliverySelected", _deliverySelected);
                this.onOpenFragment("dShowFragmentDelivery", "DeliveryData");
            }
        },
        onViewCarrierCost: function(oEvent) {
            let oModel = this._getModel();
            const _carrierCostSelected = oModel.getProperty("/mShipmentSelected/CarrierCost").find(x => x.IdCarrierCost === oEvent.getSource().getProperty("text"));
            if(_carrierCostSelected === undefined){
                MessageBox.error("No Found Data.");
            }else{
                oModel.setProperty("/mCarrierCostSelected", _carrierCostSelected);
                this.onOpenFragment("dShowFragmentCarrierCost", "CarrierCostData");
            }
        },
        onOpenFragment: function (idFragment, nameFragment) {
            let oView = this._getView();
            if(!this.byId(idFragment)){
                Fragment.load({
                    id : oView.getId(),
                    name : `com.seidor.usa.dispatchers.view.trips.fragment.${nameFragment}`,
                    controller : this
                }).then((oDialog) => {
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            }
        },
        onCloseFragment: function(idFragment) {
            this.byId(idFragment).close();
            this.byId(idFragment).destroy();
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