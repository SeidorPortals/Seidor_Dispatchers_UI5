sap.ui.define([
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/ui/core/BusyIndicator",
	"sap/ui/model/json/JSONModel",
	"sap/base/Log",
	"sap/ui/core/UIComponent"
],function(MessageBox, MessageToast, BusyIndicator, JSONModel, Log, UIComponent){
	"use strict";
	return{
		hanadb: "/hanadb",
		path: "\"SC_MTA_DB_2\".\"sc-mta-db::",
		
		_showBI: function (value) {
			if (value) {
				BusyIndicator.show(0);
			} else {
				BusyIndicator.hide();
			}
		},
		_onShowMessage: function (_title, _message, _type) {
			try {
				if (_message !== undefined && _type !== undefined) {
					if (_type === "info") {
						MessageBox.information(_message, {
							title: _title
						});
					} else if (_type === "error") {
						MessageBox.error(_message, {
							title: _title
						});
					} else if (_type === "warn") {
						MessageBox.warning(_message, {
							title: _title
						});
					} else if (_type === "good") {
						MessageBox.success(_message, {
							title: _title
						});
					} else if (_type === "done") {
						MessageBox.success(_message, {
							title: _title
						});
					} else if (_type === "toast") {
						MessageToast.show(_message);
					}
				} else {
					this.console.warn("_message or _type are undefined");
					Log.error("_message or _type are undefined in _onShowMessage function");
				}
			} catch (err) {
				this.console.warn(err.stack);
				Log.error(err.stack);               
			}
		},
		_onServiceGet: function (_oModel) {
			let that = this;
			return function (_sNameTable, _iColumnQua, _sColumnOrder, _sWhere = "", _arrModelProperty, _bAsync = false, _bReturn = false) {
				let arrDataResult = [];
				let oDataSend = {
					NameTable: _sNameTable,
					ColumnQua: _iColumnQua,
					OrderBy: _sColumnOrder,
					ColumnSelect: "*",
					GroupBy: _sWhere
				};
				jQuery.ajax({
					url: that.hanadb + "/xsjs/cselect.xsjs",
					method: "GET",
					async: _bAsync,
					data: {
						dataobject: JSON.stringify(oDataSend)
					},
					success: function (oDataResponse) {
						if (oDataResponse.data.length > 0) {
							arrDataResult = oDataResponse.data;
						}
						if(_oModel){
							_oModel.setProperty(_arrModelProperty, arrDataResult);
						}
					},
					error: function (oError) {
						that.console.log(oError);
						that.console.trace();
					}
				});
				if (_bReturn) {
					return arrDataResult;
				}else{
					return "";
				}
			};
		},
		_onCompleteString: function(value, quantity, type){
			try{
				var add = "";
				switch(type){
					case "number":
						for(let i=value.length; i<quantity; i++){
							add += "0";
						}
						return `${add}${value}`;
					case "text":
						for(let i=value.length; i<quantity; i++){
							add += " ";
						}
						return `${value}${add}`;
				}
				return "";
			}catch(e){
				Log.error(e);
				return "";
			}
		}
	};
});