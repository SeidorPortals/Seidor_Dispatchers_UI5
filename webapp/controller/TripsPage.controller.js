sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/seidor/usa/dispatchers/util/Util",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/m/MessageBox"
], function (Controller, Util, JSONModel, Filter, MessageBox) {
	"use strict";
	
    return Controller.extend("com.seidor.usa.dispatchers.controller.TripsPage", {
		ByDCarrier : "/BYD_QA",

        onInit: function () {},

		beforeNavigate: function(offBI) {
            this.oModel = this._getModel();
			if(offBI){
				Util._showBI(false);
			}
		},

        onBackReport: function() {
            this._getModel().setProperty("/mPropertyTrips/vTabAll", true);
            this._getModel().setProperty("/mPropertyTrips/vTabCreate", false);
            this._getModel().setProperty("/mPropertyTrips/vTabView", false);
            this._getModel().setProperty("/mPropertyTrips/vTavShipment", false);
        },

        onViewTrip: function () {
            
        },

        onSaveToll: function() {
            debugger;
            this.onUsageServiceCarrier();
            let newClient = {
                "ID" : this.byId("inpIdToll").getValue(),
                "NAME" : this.byId("inpNameToll").getValue(),
                "ACTIVO" : this.byId("idCBEstado").getSelected() ? "true" : "false",
                "FEEDBACK_COMMENT" : this.byId("inpNameSupplierToll").getValue()
            };

            this.oModel.getProperty(this.mDataTrips).push(newClient);
            this.oModel.refresh(true);
        },

        onUsageServiceCarrier: function(){
            jQuery.ajax({
                async: false,
                url: `${this.ByDCarrier}/createcarrier/CarrierRootCollection?$format=json`,
                method: "GET",
                dataType : "json",
                success: function (oData) {
                    console.success("OK");
                },
                error: function (err) {
                    console.error(err);
                }
            });
        },
		
		/* _getCore
		 * @returns {sap.ui.core} the core instance
		 * Convenience method for getting the core controller of the application.
		 */
		_getCore: function () {
			return sap.ui.getCore();
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