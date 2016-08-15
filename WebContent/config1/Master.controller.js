sap.ui.controller("config1.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf config1.Master
*/
//	onInit: function() {
//		
//		this.router = sap.ui.core.UIComponent.getRouterFor(this);
//	//		var oView1 = this.getView();
//	        var oModel = new sap.ui.model.json.JSONModel('model/AppRole.json');
//	//	   oView1.setModel(oModel,'Apps');
//	        sap.ui.getCore().byId("app").setModel(oModel,'Apps');
//
//	},

  itemSelected: function(){
		
	  var list = sap.ui.getCore().byId('listId1');
	  var sItem = list.getSelectedItem();
	  var oBindingContext = sItem.getBindingContext('Apps');
	  var sPath = oBindingContext.sPath;
      var start = sPath.lastIndexOf("/") + 1;
	  var recordOrder = sPath.substring(start, sPath.length);
      
	  var context = sap.ui.getCore().byId("listId1").getModel('Apps');
	  var userRole =context.oData.collection[recordOrder].Role;
	  var appName =context.oData.collection[recordOrder].ApplicationID;
	  var router1= sap.ui.core.UIComponent.getRouterFor(this);
		
	  appName='dummy1';
	  userRole='dummy1';
	  
		$.ajax({
				url : oStorage.get("BASEURL")+'config_ws.php',
				dataType : 'jSon',
				type : 'GET',
				data : {
						appName : appName,
						userRole : userRole
					},
				success : function(configresponse) {
					
					var colorCodeField = configresponse.Document.ApplicationControls.ColorCodedFields.DataField;
					
					var colorCodeArr = [];
					for (var i = 0; i < colorCodeField.length; i++) {
						colorCodeArr.push({Field: colorCodeField[i],});
					}
					
					configresponse.Document.ApplicationControls.ColorCodedFields.DataField=null;
					configresponse.Document.ApplicationControls.ColorCodedFields.DataField=colorCodeArr;
					
					
					
					
					
					
					
					var mapField = configresponse.Document.ApplicationControls.MapFields.DataField;
					
					var mapArr = [];
					for (var i = 0; i < mapField.length; i++) {
						mapArr.push({Field: mapField[i],});
					}
					
					configresponse.Document.ApplicationControls.MapFields.DataField=null;
					configresponse.Document.ApplicationControls.MapFields.DataField=mapArr;
					
					
					
					var possibleField = configresponse.Document.ApplicationControls.PossibleValueFields.DataField;
					var possibleArr = [];
					for (var i = 0; i < possibleField.length; i++) {
						possibleArr.push({Field: possibleField[i],});
					}
					configresponse.Document.ApplicationControls.PossibleValueFields.DataField=null;
					configresponse.Document.ApplicationControls.PossibleValueFields.DataField=possibleArr;
					
					
					var DataField = configresponse.Document.Filters.DataFilter.DataField;
					var DataFilter = [];
					for (var i = 0; i < DataField.length; i++) {
						DataFilter.push({Field: DataField[i],});
					}
					configresponse.Document.Filters.DataFilter.DataField=null;
					configresponse.Document.Filters.DataFilter.DataField=DataFilter
					
					
					var DateFilterArr = configresponse.Document.Filters.DateFilter.Options;
					var DateFilter = [];
					for (var i = 0; i < DateFilterArr.length; i++) {
						DateFilter.push({Option: DateFilterArr[i],});
					}
					
					configresponse.Document.Filters.DateFilter.Options=null;
					configresponse.Document.Filters.DateFilter.Options=DateFilter
					
					var SortingArr = configresponse.Document.Filters.Sorting.DataField;
					var Sorting = [];
					for (var i = 0; i < SortingArr.length; i++) {
						Sorting.push({Field: SortingArr[i],});
					}
					configresponse.Document.Filters.Sorting.DataField=null;
					configresponse.Document.Filters.Sorting.DataField=Sorting
					
					if(configresponse.Document.ApplicationControls.AttachmentFunction == 'N')
						configresponse.Document.ApplicationControls.AttachmentFunction=1;
					else
						configresponse.Document.ApplicationControls.AttachmentFunction=0;
					
					if(configresponse.Document.ApplicationControls.CreateNewItems == 'N')
						configresponse.Document.ApplicationControls.CreateNewItems=1;
					else
						configresponse.Document.ApplicationControls.CreateNewItems=0;
					
//					if(configresponse.Document.ApplicationControls.GoogleMap == 'N')
//						configresponse.Document.ApplicationControls.GoogleMap=1;
//					else
//						configresponse.Document.ApplicationControls.GoogleMap=0;
					
//					if(configresponse.Document.ApplicationControls.GoogleMapTab == 'N')
//						configresponse.Document.ApplicationControls.GoogleMapTab=1;
//					else
//						configresponse.Document.ApplicationControls.GoogleMapTab=0;
					
					if(configresponse.Document.ApplicationControls.PossibleValue == 'N')
						configresponse.Document.ApplicationControls.PossibleValue=1;
					else
						configresponse.Document.ApplicationControls.PossibleValue=0;
					
					if(configresponse.Document.ApplicationControls.ServerUpdate == 'N')
						configresponse.Document.ApplicationControls.ServerUpdate=1;
					else
						configresponse.Document.ApplicationControls.ServerUpdate=0;
					
					if(configresponse.Document.ApplicationControls.ColorCoding == 'N')
						configresponse.Document.ApplicationControls.ColorCoding=1;
					else
						configresponse.Document.ApplicationControls.ColorCoding=0;
					
					
					
					var oconfigListFieldModel = new sap.ui.model.json.JSONModel(configresponse);
					var detailView = sap.ui.getCore().byId("app");
					var oModel = new sap.ui.model.json.JSONModel(configresponse);
			    	detailView.setModel(oModel,'data');
			    	router1.navTo("detail");
			    }
		});
	},
	
	
	addPress: function(){
		
	// first call ws which wiil provide dummydata. set model with this data & bind this model with add form
		var oModel2 = new sap.ui.model.json.JSONModel('model/dummy.json');
	// this should be oneway binding, so user can't update data in dummy model
		oModel2.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
	   //	oView.setModel(oModel2,'dummy');    // add form 
		sap.ui.getCore().byId("addformId").setModel(oModel2,'dummy');
	
		
		 var addDialog = sap.ui.getCore().byId("addDialog");
		     addDialog.setVisible(true);
		     sap.ui.getCore().byId("addDialog").open();
		
	},
	
	save: function(){
/* when user will click on save button, call another web service, that will generate copy of
 * dummy json on server and store it with the name of appID_Role_config.xml. here appID & 
 * role will be the same which is entered by user in add form. This web service will also
 * update app role manage table with new app & role.
 */		
		
		var content = sap.ui.getCore().byId("addformId").getContent();
        var oEntry = {};
        oEntry.Object = content[1].getValue();
		oEntry.ApplicationID = content[5].getValue();  // ApplicationId is same as object value
        oEntry.PartnerNo = content[3].getValue();
        oEntry.AppName = content[5].getValue();
        oEntry.Role = content[7].getValue();
        
        oEntry.Android='Allowed';
        oEntry.UserSpecific='No';
        oEntry.Web='Allowed';
        oEntry.eStatus='Active';
        oEntry.ios='Allowed';
        
        $.ajax({
			url : oStorage.get("BASEURL")+'create_config.php',
			dataType : 'jSon',
			type : 'GET',
			data : {
					appName : oEntry.AppName,
					userRole : oEntry.Role,
					userSpecific:'Yes'
				},
			success : function() {
				
				sap.ui.getCore().byId("listId1").getModel('Apps').oData.collection.push(oEntry);
				sap.ui.getCore().byId("listId1").getModel('Apps').refresh(true);
		    },
		    error :function(){
		    	
		    }
	});
        
        
  // now update this new entry in app role manage table (model name is "Apps")
		
		
 /* Ws should create a new (copy of dummy json) file with name- Object_Role_config.xml 
  * & save it on server with other config file (model name- "data").
  */ 
		
		sap.ui.getCore().byId("addDialog").close();
//		sap.m.MessageBox.alert(
//                "config for new app added successfully");
		
	},
	
	// add dialog cancel button
	cancel : function() {

		sap.ui.getCore().byId("addDialog").close();

	}


});