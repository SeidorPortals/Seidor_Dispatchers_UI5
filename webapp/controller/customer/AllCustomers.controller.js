sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/seidor/usa/dispatchers/util/Util",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
], function (Controller, Util) {
	"use strict";
	
    return Controller.extend("com.seidor.usa.dispatchers.controller.customer.AllCustomersPage", {
        onInit: function() {},

        onBackReport: function() {
            this._getModel().setProperty("/mPropertyCustomers/vTabAll", true);
            this._getModel().setProperty("/mPropertyCustomers/vTabCreate", false);
        },

        onCreateCustomers: function() {
            this._getModel().setProperty("/mCustomerSelected",[]);
            this._getModel().setProperty("/mPropertyCustomers/vTabAll", false);
            this._getModel().setProperty("/mPropertyCustomers/vTabCreate", true);
        },


        onEditCustomers: function() {
            debugger;
            let oModel = this._getModel();
            let _itemSelected = this.byId("tAllCustomers").getSelectedIndex();
            if(_itemSelected !== -1){
                let _itemsTable = this.byId("tAllCustomers").getBindingInfo("rows").binding.aIndices;
                oModel.setProperty("/mCustomerSelected",oModel.getProperty("/mDataCustomers")[_itemsTable[_itemSelected]]);
                oModel.setProperty("/mPropertyCustomers/vTabAll", false);
                oModel.setProperty("/mPropertyCustomers/vTabCreate", true);
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