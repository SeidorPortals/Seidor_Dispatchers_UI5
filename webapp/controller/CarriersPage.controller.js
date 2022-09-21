sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	
    return Controller.extend("com.seidor.usa.dispatchers.controller.CarriersPage", {
        onInit: function(){},
        
        beforeNavigate: function(offBI) {
            this.oModel = this._getModel();
			if(offBI){
				util._showBI(false);
			}
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