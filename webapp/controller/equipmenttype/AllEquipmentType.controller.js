sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"com/seidor/usa/dispatchers/util/Util",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/m/MessageBox"
], function(Controller, Util, JSONModel, Filter, MessageBox){
    'use strict';

    return Controller.extend("com.seidor.usa.dispatchers.controller.equipmenttype.AllEquipmentTypes", {
        onInit: function () {
        },

        onCreateCarrier: function() {
            this._getModel().setProperty("/mPropertyEquipmentTypes/vTabAll", false);
            this._getModel().setProperty("/mPropertyEquipmentTypes/vTabCreate", true);
        },

        onEditCarrier: function() {
            debugger;
            let oModel = this._getModel();
            let _itemSelected = this.byId("tAllEquipmentTypes").getSelectedIndex();
            if(_itemSelected !== -1){
                let _itemsTable = this.byId("tAllEquipmentTypes").getBindingInfo("rows").binding.aIndices;
                oModel.setProperty("/mEquipmentTypeSelected",oModel.getProperty("/mDataEquipmentTypes")[_itemsTable[_itemSelected]]);
                oModel.setProperty("/mPropertyEquipmentTypes/vTabAll", false);
                oModel.setProperty("/mPropertyEquipmentTypes/vTabCreate", true);
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