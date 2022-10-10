sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/seidor/usa/dispatchers/util/Util",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
], function (Controller, Util) {
	"use strict";
	
    return Controller.extend("com.seidor.usa.dispatchers.controller.equipmenttype.EquipmentTypePage", {
        ByDCarrier : "/BYD_QA",

        onInit: function(){            
        },
        
        beforeNavigate: function(offBI) {
            this.oModel = this._getModel();
			if(offBI){
				Util._showBI(false);
			}
            this.onUsageServiceCarrier();
		},

        onBackReport: function() {
            this._getModel().setProperty("/mPropertyEquipmentType/vTabAll", true);
            this._getModel().setProperty("/mPropertyEquipmentType/vTabCreate", false);            
        },
        
        onUsageServiceCarrier: function(){
            /*Util._showBI(true);
            var that = this;
            jQuery.ajax({
                async: false,
                url: `${this.ByDCarrier}/cust/v1/manageequipmenttype/ZBO_EquipmentTypeRootCollection?$format=json`,
                method: "GET",
                dataType : "json",
                headers: {
                    Authorization: "Basic bGFyZ3VlZGFzOlNlaWRvcjIz"
                },
                success: function (oData) {
                    that._getModel().setProperty("/mDataEquipmentType",oData.d.results);
                    console.log("OK");
                },
                error: function (err) {
                    console.error(err);
                }
            });
            Util._showBI(false);*/
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