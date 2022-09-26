sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"com/seidor/usa/dispatchers/util/Util"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Util) {
        "use strict";

        return Controller.extend("com.seidor.usa.dispatchers.controller.Main", {
            onInit: function () {
                Util._showBI(true);
                var oModel = new JSONModel(sap.ui.require.toUrl("com/seidor/usa/dispatchers/model/model.json"));
                this.getView().setModel(oModel);
                this._getModel().setSizeLimit(9999);
            },
    
            onAfterRendering: function () {
                Util._showBI(false);
            },
            
            onNavigate: function (oEvent) {
                var that = this;
                this.offBI = true;
                Util._showBI(true);
                var oParameters = oEvent.getParameters();
                clearInterval(this.timer);
                //this.timer = setInterval(function () {
                //    that.onNavigateWait(oParameters);
                //}, 1000);
                this.onNavigateWait(oParameters);
            },
    
            onNavigateWait: function (oParameters) {
                try {
                    var oModel = this._getModel();
                    var oToPage = oParameters.to;
                    oModel.setProperty("/oToPage", oToPage);
                    var sIdDestinationView = oToPage.getContent()[0].getId();
                    this._getCore().byId(sIdDestinationView).getController().beforeNavigate(this.offBI);
                    this.offBI = false;
                } catch (ex) {
                    clearInterval(this.timer);
                    Util._showBI(false);
                }
            },
    
            onSideNavButtonPress: function () {
                var oToolPage = this.byId("idToolPage");
                var bSideExpanded = oToolPage.getSideExpanded();
    
                this._setToggleButtonTooltip(bSideExpanded);
    
                oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
            },

            _setToggleButtonTooltip: function (bLarge) {
                var oToggleButton = this.byId("btnSideNavigationToggle");
                if (bLarge) {
                    oToggleButton.setTooltip("Large Size Navigation");
                } else {
                    oToggleButton.setTooltip("Small Size Navigation");
                }
            },
    
            onItemSelect: function (oEvent) {
                var oItem = oEvent.getParameter("item");
                this.byId("pageContainer").to(this.getView().createId(oItem.getKey()));
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
