sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"com/seidor/usa/dispatchers/util/Util",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/m/MessageBox"
], function(Controller, Util, JSONModel, Filter, MessageBox){
    'use strict';

    return Controller.extend("com.seidor.usa.dispatchers.controller.equipmenttype.AllEquipmentType", {
        onInit: function () {
        },

        onCreateEquipmentType: function() {
            this._getModel().setProperty("/mEquipmentTypeSelected",[]);
            this._getModel().setProperty("/mPropertyEquipmentType/vTabAll", false);
            this._getModel().setProperty("/mPropertyEquipmentType/vTabCreate", true);
        },

        onEditEquipmentType: function() {
            //debugger;
            let oModel = this._getModel();
            let _itemSelected = this.byId("tAllEquipmentType").getSelectedIndex();
            if(_itemSelected !== -1){
                let _itemsTable = this.byId("tAllEquipmentType").getBindingInfo("rows").binding.aIndices;
                oModel.setProperty("/mEquipmentTypeSelected",oModel.getProperty("/mDataEquipmentType")[_itemsTable[_itemSelected]]);
                oModel.setProperty("/mPropertyEquipmentType/vTabAll", false);
                oModel.setProperty("/mPropertyEquipmentType/vTabCreate", true);
            }else{
                MessageBox.warning("Select a record.")
            }            
        },

        onCopyEquipType: function() {
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