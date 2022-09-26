sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"com/seidor/usa/dispatchers/util/Util",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/m/MessageBox"
], function(Controller, Util, JSONModel, Filter, MessageBox){
    'use strict';

    return Controller.extend("com.seidor.usa.dispatchers.controller.carriers.AllCarriers", {
        onInit: function () {
        },

        onCreateCarrier: function() {
            this._getModel().setProperty("/mPropertyCarriers/vTabAll", false);
            this._getModel().setProperty("/mPropertyCarriers/vTabCreate", true);
        },

        onEditCarrier: function() {
            debugger;
            let oModel = this._getModel();
            let _itemSelected = this.byId("tAllCarriers").getSelectedIndex();
            if(_itemSelected !== -1){
                let _itemsTable = this.byId("tAllCarriers").getBindingInfo("rows").binding.aIndices;
                oModel.setProperty("/mCarrierSelected",oModel.getProperty("/mDataCarriers")[_itemsTable[_itemSelected]]);
                oModel.setProperty("/mPropertyCarriers/vTabAll", false);
                oModel.setProperty("/mPropertyCarriers/vTabCreate", true);
            }else{
                MessageBox.warning("Select a record.")
            }            
        },

        onCopyCarrier: function() {
            console.log("Medoto Copy");
        },

        onExportExcel: function() {
            console.info("Metodo Export");
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