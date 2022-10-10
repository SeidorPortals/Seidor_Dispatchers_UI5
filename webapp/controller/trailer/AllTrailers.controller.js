sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"com/seidor/usa/dispatchers/util/Util",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/m/MessageBox"
], function(Controller, Util, JSONModel, Filter, MessageBox){
    'use strict';

    return Controller.extend("com.seidor.usa.dispatchers.controller.trailer.AllTrailer", {
        onInit: function () {
        },

        onCreateTrailer: function() {
            this._getModel().setProperty("/mTrailerSelected",[]);
            this._getModel().setProperty("/mPropertyTrailers/vTabAll", false);
            this._getModel().setProperty("/mPropertyTrailers/vTabCreate", true);
        },

        onEditTrailer: function() {
            debugger;
            let oModel = this._getModel();
            let _itemSelected = this.byId("tAllTrailers").getSelectedIndex();
            if(_itemSelected !== -1){
                let _itemsTable = this.byId("tAllTrailers").getBindingInfo("rows").binding.aIndices;
                oModel.setProperty("/mTrailerSelected",oModel.getProperty("/mDataTrailers")[_itemsTable[_itemSelected]]);
                oModel.setProperty("/mPropertyTrailers/vTabAll", false);
                oModel.setProperty("/mPropertyTrailers/vTabCreate", true);
            }else{
                MessageBox.warning("Select a record.")
            }            
        },

        onCopyTrailer: function() {
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