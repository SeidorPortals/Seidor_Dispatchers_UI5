sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/seidor/usa/dispatchers/util/Util",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
], function (Controller, Util) {
	"use strict";
	
    return Controller.extend("com.seidor.usa.dispatchers.controller.DriversPage", {
		ByD_Drivers : "/BYD_QA",

        onInit: function () {},

		beforeNavigate: function(offBI) {
            this.oModel = this._getModel();
			if(offBI){
				Util._showBI(false);
			}
		},

        onBackReport: function() {
            this._getModel().setProperty("/mPropertyDrivers/vTabAll", true);
            this._getModel().setProperty("/mPropertyDrivers/vTabCreate", false);
        },

        onViewTrip: function () {
            
        },

        onSaveToll: function() {
            debugger;
            this.onUsageServiceCarrier();
            //No entiendo que hace
            let newClient = {
                "ID" : this.byId("inpIdToll").getValue(),
                "NAME" : this.byId("inpNameToll").getValue(),
                "ACTIVO" : this.byId("idCBEstado").getSelected() ? "true" : "false",
                "FEEDBACK_COMMENT" : this.byId("inpNameSupplierToll").getValue()
            };

            this.oModel.getProperty(this.mDataDrivers).push(newClient);
            this.oModel.refresh(true);
        },

        onUsageServiceCarrier: function(){
            // No se puede usar un fetch o axios? ya Jquery no tiene soporte está desactualizado

            jQuery.ajax({
                async: false,
                url: `${this.ByD_Drivers}/createdrivers/DriversRootCollection?$format=json`,
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
        //
    });
});