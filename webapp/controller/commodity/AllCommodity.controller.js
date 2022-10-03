sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"com/seidor/usa/dispatchers/util/Util",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/m/MessageBox"
], function(Controller, Util, JSONModel, Filter, MessageBox){
    'use strict';

    return Controller.extend("com.seidor.usa.dispatchers.controller.commodity.AllCommodity", {
        onInit: function () {
        },

        onCreateCommodity: function() {
            this._getModel().setProperty("/mPropertyCommodity/vTabAll", false);
            this._getModel().setProperty("/mPropertyCommodity/vTabCreate", true);
        },

        onEditCommodity: function() {
            debugger;
            let oModel = this._getModel();
            let _itemSelected = this.byId("tAllCommodity").getSelectedIndex();
            if(_itemSelected !== -1){
                let _itemsTable = this.byId("tAllCommodity").getBindingInfo("rows").binding.aIndices;
                oModel.setProperty("/mCommoditySelected",oModel.getProperty("/mDataCommodity")[_itemsTable[_itemSelected]]);
                oModel.setProperty("/mPropertyCommodity/vTabAll", false);
                oModel.setProperty("/mPropertyCommodity/vTabCreate", true);
            }else{
                MessageBox.warning("Select a record.")
            }            
        },

        onCopyCommodity: function() {
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