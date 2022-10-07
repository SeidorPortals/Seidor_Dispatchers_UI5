sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/seidor/usa/dispatchers/util/Util",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
], function (Controller, Util) {
	"use strict";
	
    return Controller.extend("com.seidor.usa.dispatchers.controller.AllDriversPage", {
        onInit: function() {},

        onBackReport: function() {
            this._getModel().setProperty("/mPropertyDrivers/vTabAll", false);
            this._getModel().setProperty("/mPropertyDrivers/vTabCreate", true);
        },

        onEditDrivers: function() {
            debugger;
            let oModel = this._getModel();
            let _itemSelected = this.byId("tAllDrivers").getSelectedIndex();
            if(_itemSelected !== -1){
                let _itemsTable = this.byId("tAllDrivers").getBindingInfo("rows").binding.aIndices;
                oModel.setProperty("/mDriversSelected",oModel.getProperty("/mDataDrivers")[_itemsTable[_itemSelected]]);
                oModel.setProperty("/mPropertyDrivers/vTabAll", false);
                oModel.setProperty("/mPropertyDrivers/vTabCreate", true);
            }else{
                MessageBox.warning("Select a record.")
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