sap.ui.controller("config1.Detail", {

	onInit: function() {
			var oldValue='';
	},

	onBeforeRendering: function() {

	},

	onAfterRendering: function() {

	},

	onExit: function() {

	},
	
	
	editPress1 : function(oEvent){
	      var oeditDialog1 = sap.ui.getCore().byId("editIdentificationDialog");
		  oeditDialog1.setVisible(true);
		  sap.ui.getCore().byId("editIdentificationDialog").open();
	   },
	
	// edit dialog update
	Update1: function(){
		var identification ={};
		identification.Object = $('#__input4-inner').val();
		identification.PartnerNo = $('#__input5-inner').val();
		
		$.ajax({
			url : oStorage.get("BASEURL")+'update_config.php',
			dataType : 'jSon',
			type : 'GET',
			data : {
				switchcase : 1,
					data : identification
				},
			success : function(configresponse) {
				sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['Identification']['Object']=identification.Object;
		    	sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['Identification']['PartnerNo']=identification.PartnerNo;
		    	sap.ui.getCore().byId("listId1").getModel('data').refresh(true);
		    	sap.ui.getCore().byId("editIdentificationDialog").close();
			    sap.m.MessageBox.alert("Field edited successfully");
			},
		});
	  },
	
	  attachment :function(selectedOption){
		  $.ajax({
				url : oStorage.get("BASEURL")+'update_config.php',
				dataType : 'jSon',
				type : 'GET',
				data : {
					switchcase : 'attachment',
						data : selectedOption
					},
				success : function(configresponse) {
					if(selectedOption == 'Y'){
			    		sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['AttachmentFunction']=0;
			    	}else{
			    		sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['AttachmentFunction']=1;
			    	}
			    	sap.ui.getCore().byId("listId1").getModel('data').refresh(true);
				},
			});
	  },
	  serverUpdate :function(selectedOption){
		  $.ajax({
				url : oStorage.get("BASEURL")+'update_config.php',
				dataType : 'jSon',
				type : 'GET',
				data : {
					switchcase : 'serverUpdate',
						data : selectedOption
					},
				success : function(configresponse) {
					if(selectedOption == 'Y'){
			    		sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['ServerUpdate']=0;
			    	}else{
			    		sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['ServerUpdate']=1;
			    	}
			    	sap.ui.getCore().byId("listId1").getModel('data').refresh(true);
				},
			});
	  },
	  colorcoding :function(selectedOption){
		  $.ajax({
				url : oStorage.get("BASEURL")+'update_config.php',
				dataType : 'jSon',
				type : 'GET',
				data : {
					switchcase : 'colorcoding',
						data : selectedOption
					},
				success : function(configresponse) {
					if(selectedOption == 'Y'){
			    		sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['ColorCoding']=0;
			    	}else{
			    		sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['ColorCoding']=1;
			    	}
			    	sap.ui.getCore().byId("listId1").getModel('data').refresh(true);
				},
			});
	  },
	  
	  createNewItems :function(selectedOption){
		  $.ajax({
				url : oStorage.get("BASEURL")+'update_config.php',
				dataType : 'jSon',
				type : 'GET',
				data : {
					switchcase : 'createNewItems',
						data : selectedOption
					},
				success : function(configresponse) {
					if(selectedOption == 'Y'){
			    		sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['CreateNewItems']=0;
			    	}else{
			    		sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['CreateNewItems']=1;
			    	}
			    	sap.ui.getCore().byId("listId1").getModel('data').refresh(true);
				},
			});
	  },

	  possibleValue :function(selectedOption){
		  $.ajax({
				url : oStorage.get("BASEURL")+'update_config.php',
				dataType : 'jSon',
				type : 'GET',
				data : {
					switchcase : 'possibleValue',
						data : selectedOption
					},
				success : function(configresponse) {
					if(selectedOption == 'Y'){
			    		sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['PossibleValue']=0;
			    	}else{
			    		sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['PossibleValue']=1;
			    	}
			    	sap.ui.getCore().byId("listId1").getModel('data').refresh(true);
				},
			});
	  },
	
	Close1 : function() {
		sap.ui.getCore().byId("editIdentificationDialog").close();
	},
	
	save2: function(){
		var content = sap.ui.getCore().byId("formId2").getContent();
        var oEntry = {};
        oEntry.name = content[2].getValue();
        oEntry.type = content[4].getSelectedKey();
        oEntry.width = content[6].getSelectedKey();
        oEntry.mapField = content[8].getValue();
		sap.ui.getCore().byId("app").getModel('data').oData.Document.FieldDefinition.element.push(oEntry);
		sap.ui.getCore().byId("app").getModel('data').refresh(true);
		
		sap.ui.getCore().byId("addDialog2").close();
		sap.m.MessageBox.alert(
                "New field has been added successfully");		
	   },
	
	cancel2 : function() {
    	sap.ui.getCore().byId("addDialog2").close();
	},
	
	// edit press event
	editPress2 : function(oEvent){
		  var sPath = oEvent.getSource().getParent().getBindingContext("data").getPath();
		  var start = sPath.lastIndexOf("/") + 1;		    
		  var index = sPath.substring(start, sPath.length);	
		  var context = sap.ui.getCore().byId("app").getModel("data").getContext("/Document/FieldDefinition/element/" + index);
		  this.oldValue = sap.ui.getCore().byId("app").getModel("data").oData.Document.FieldDefinition.element[index].name;
		  
		  
    	  sap.ui.getCore().byId("editform2").setBindingContext(context, "data");
	      var oeditDialog2 = sap.ui.getCore().byId("editDialog2");
		  oeditDialog2.setVisible(true);
		  sap.ui.getCore().byId("editDialog2").open();
	   },
	
	// edit dialog update
	Update2: function(){
		
		//editform3aii
		var content = sap.ui.getCore().byId("editform2").getContent();
        var oEntry = {};
        oEntry.name = content[2].getValue();
        
        $.ajax({
			url : oStorage.get("BASEURL")+'update_config.php',
			dataType : 'jSon',
			type : 'GET',
			data : {
				switchcase : 'editCreateNewFields',
				oldvalue:this.oldValue,
				data : oEntry
			},
			success : function(configresponse) {
				sap.ui.getCore().byId("app").getModel('data').oData.Document.ApplicationControls.CreateNewFields.DataField.push(oEntry);
				sap.ui.getCore().byId("app").getModel('data').refresh(true);
				
				sap.ui.getCore().byId("editDialog2").close();
			    sap.m.MessageBox.alert("field edited successfully");
			},
		});
	  },
	
	Close2 : function() {
		sap.ui.getCore().byId("editDialog2").close();
	},
	
	// delete press event
	deletePress2 : function(oEvent){
		var path = oEvent.getSource().getParent().getBindingContext("data").getPath();
		var item = sap.ui.getCore().byId("app").getModel('data').getProperty(path);
         console.log(item);		
        var oTable = sap.ui.getCore().byId("table2");
		var array = oTable.getModel("data").getData().Document.FieldDefinition.element;
		array.splice( array.indexOf(item), 1 );  
    	oTable.getModel("data").refresh();  	     
    	sap.m.MessageBox.alert("field deleted");
	},

	createNewFields: function(){
		var content = sap.ui.getCore().byId("addform3aii").getContent();
        var oEntry = {};
        oEntry.name = content[2].getValue();
//        oEntry.type = content[4].getSelectedKey();  // gets the value;
//        oEntry.width = content[6].getSelectedKey();
//        oEntry.Attribute = content[8].getSelectedKey();

        $.ajax({
			url : oStorage.get("BASEURL")+'update_config.php',
			dataType : 'jSon',
			type : 'GET',
			data : {
				switchcase : 'createNewFields',
				data : oEntry
			},
			success : function(configresponse) {
				sap.ui.getCore().byId("app").getModel('data').oData.Document.ApplicationControls.CreateNewFields.DataField.push(oEntry);
				sap.ui.getCore().byId("app").getModel('data').refresh(true);
				
				sap.ui.getCore().byId("addDialog3aii").close();
				sap.m.MessageBox.alert("Field added successfully");
			},
		});
   },
	
	cancel3aii : function() {
    	sap.ui.getCore().byId("addDialog3aii").close();
	},
	
	// edit press event
	editPress3aii : function(oEvent){
		  var sPath = oEvent.getSource().getParent().getBindingContext("data").getPath();
		  var start = sPath.lastIndexOf("/") + 1;		    
		  var index = sPath.substring(start, sPath.length);		      			
		  var context = sap.ui.getCore().byId("app").getModel("data").getContext("/Document/ApplicationControls/CreateNewFields/DataField/" + index);
		  
		  this.oldValue=sap.ui.getCore().byId("app").getModel("data").oData.Document.ApplicationControls.CreateNewFields.DataField[index].name; 
		  sap.ui.getCore().byId("editform3aii").setBindingContext(context, "data");
	      var oeditDialog3aii = sap.ui.getCore().byId("editDialog3aii");
		  oeditDialog3aii.setVisible(true);
		  sap.ui.getCore().byId("editDialog3aii").open();
	   },
	

	editCreateNewField: function(){
		var content = sap.ui.getCore().byId("editform3aii").getContent();
        var oEntry = {};
        oEntry.name = content[2].getValue();
//        oEntry.type = content[4].getSelectedKey();  // gets the value;
//        oEntry.width = content[6].getSelectedKey();
//        oEntry.Attribute = content[8].getSelectedKey();

        $.ajax({
			url : oStorage.get("BASEURL")+'update_config.php',
			dataType : 'jSon',
			type : 'GET',
			data : {
				switchcase : 'editCreateNewFields',
				oldvalue:this.oldValue,
				data : oEntry
			},
			success : function(configresponse) {
				sap.ui.getCore().byId("editDialog3aii").close();
			    sap.m.MessageBox.alert("Field details edited successfully");
			},
		});
	  },
	
	//edit dialog close
	Close3aii : function() {
		sap.ui.getCore().byId("editDialog3aii").close();
	},
	
	// delete press event
	deleteselectedCreateNewField : function(oEvent){
		var path = oEvent.getSource().getParent().getBindingContext("data").getPath();
		var item = sap.ui.getCore().byId("app").getModel('data').getProperty(path);
         
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'deleteCreateNewFields',
 				data : item.name
 			},
 			success : function(configresponse) {
 				var oTable = sap.ui.getCore().byId("table3bii");
 				var array = oTable.getModel("data").getData().Document.ApplicationControls.CreateNewFields.DataField;
 				array.splice( array.indexOf(item), 1 );  
 		    	oTable.getModel("data").refresh();  	     
 		    	sap.m.MessageBox.alert("Field deleted");
 			},
 			error :function(){
 				var oTable = sap.ui.getCore().byId("table3bii");
 				var array = oTable.getModel("data").getData().Document.ApplicationControls.CreateNewFields.DataField;
 				array.splice( array.indexOf(item), 1 );  
 		    	oTable.getModel("data").refresh();  	     
 		    	sap.m.MessageBox.alert("Field deleted");
 			}
 		});
	},	
	
	save3bii: function(){
		var content = sap.ui.getCore().byId("addform3bii").getContent();
        var oEntry = {};
        oEntry.Field = content[2].getValue();
        
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'cretePossibleField',
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("app").getModel('data').oData.Document.ApplicationControls.PossibleValueFields.DataField.push(oEntry);
 				sap.ui.getCore().byId("app").getModel('data').refresh(true);
 				
 				sap.ui.getCore().byId("addDialog3bii").close();
 				sap.m.MessageBox.alert(" Field added successfully");
 			},
 			error :function(){
 				sap.ui.getCore().byId("app").getModel('data').oData.Document.ApplicationControls.PossibleValueFields.DataField.push(oEntry);
 				sap.ui.getCore().byId("app").getModel('data').refresh(true);
 				
 				sap.ui.getCore().byId("addDialog3bii").close();
 				sap.m.MessageBox.alert(" Field added successfully");
 			}
 		});
        
        
        
        
        
        
				
	   },
	
	cancel3bii : function() {
    	sap.ui.getCore().byId("addDialog3bii").close();
	},
	
	// edit press event
	editPress3bii : function(oEvent){
		  var sPath = oEvent.getSource().getParent().getBindingContext("data").getPath();
		  var start = sPath.lastIndexOf("/") + 1;		    
		  var index = sPath.substring(start, sPath.length);		      			
		  var context = sap.ui.getCore().byId("app").getModel("data").getContext("/Document/ApplicationControls/PossibleValueFields/DataField/" + index);
		  this.oldValue=sap.ui.getCore().byId("app").getModel("data").oData.Document.ApplicationControls.PossibleValueFields.DataField[index].Field;
		  sap.ui.getCore().byId("editform3bii").setBindingContext(context, "data");
	      var oeditDialog3bii = sap.ui.getCore().byId("editDialog3bii");
		  oeditDialog3bii.setVisible(true);
		  sap.ui.getCore().byId("editDialog3bii").open();
	   },
	
	// edit dialog update
	Update3bii: function(){
		
	    var content = sap.ui.getCore().byId("editform3bii").getContent();
        var oEntry = {};
        oEntry.Field = content[2].getValue();
        
  		
        $.ajax({
			url : oStorage.get("BASEURL")+'update_config.php',
			dataType : 'jSon',
			type : 'GET',
			data : {
				switchcase : 'editPossibleValue',
				oldvalue:this.oldValue,
				data : oEntry
			},
			success : function(configresponse) {
				sap.ui.getCore().byId("editDialog3bii").close();
			    sap.m.MessageBox.alert("Field edited successfully");
			},
		});
        
	  },
	
	//edit dialog close
	Close3bii : function() {
		sap.ui.getCore().byId("editDialog3bii").close();
	},
	
	// delete press event
	deletePress3bii : function(oEvent){
		var path = oEvent.getSource().getParent().getBindingContext("data").getPath();
		var item = sap.ui.getCore().byId("app").getModel('data').getProperty(path);
        		
         var res = oEvent.getSource().getParent().getBindingContext("data").getPath().split("/") 
        
        $.ajax({
			url : oStorage.get("BASEURL")+'update_config.php',
			dataType : 'jSon',
			type : 'GET',
			data : {
				switchcase : 'deletePossibleValueFields',
				data : res[5]
			},
			success : function(configresponse) {
				var oTable = sap.ui.getCore().byId("table3bii");
				var array = oTable.getModel("data").getData().Document.ApplicationControls.PossibleValueFields.DataField;
				array.splice( array.indexOf(item), 1 );  
		    	oTable.getModel("data").refresh();  	     
		    	sap.m.MessageBox.alert("Field deleted");
			},
		});
    
    	
    	
    	
	},	


	editPress3ei : function(oEvent){
	      var oeditDialog3ei = sap.ui.getCore().byId("editDialog3ei");
		  oeditDialog3ei.setVisible(true);
		  sap.ui.getCore().byId("editDialog3ei").open();
	   },
	
	// edit dialog update
	Update3ei: function(){
		    var oEntry = {};
		    
		    var content = sap.ui.getCore().byId("editform3ei").getContent();
	        var oEntry = {};
	        
	        oEntry.GoogleMap = content[2].getSelectedKey();
	        oEntry.GoogleMapTab = content[4].getSelectedKey();
	        
		    
		     // ApplicationId is same as object value
	        
	        $.ajax({
				url : oStorage.get("BASEURL")+'create_config.php',
				dataType : 'jSon',
				type : 'GET',
				data : {
					switchcase : 'googleMapOption',
					data : oEntry
					},
				success : function() {
//					sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['GoogleMap']=oEntry.GoogleMap;
//					sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['GoogleMapTab']=oEntry.GoogleMapTab;
//					sap.ui.getCore().byId("listId1").getModel('Apps').refresh(true);
//					
					sap.ui.getCore().byId("editDialog3ei").close();
				    sap.m.MessageBox.alert("Field edited successfully");
					
			    },
		});
	  },
	
	//edit dialog close
	Close3ei : function() {
		sap.ui.getCore().byId("editDialog3ei").close();
	},
	
	save3eii: function(){
		
		var content = sap.ui.getCore().byId("addform3eii").getContent();
        var oEntry = {};
        oEntry.Field = content[2].getValue();
        
		
		 $.ajax({
				url : oStorage.get("BASEURL")+'update_config.php',
				dataType : 'jSon',
				type : 'GET',
				data : {
					switchcase : 'addMapField',
					data : oEntry
				},
				success : function(configresponse) {
					
					sap.ui.getCore().byId("app").getModel('data').oData.Document.ApplicationControls.MapFields.DataField.push(oEntry);
					sap.ui.getCore().byId("app").getModel('data').refresh(true);
					
					sap.ui.getCore().byId("addDialog3eii").close();
					sap.m.MessageBox.alert(" Field added successfully");
								
				},
			});
		
		
		
		
	   },
	
	cancel3eii : function() {
    	sap.ui.getCore().byId("addDialog3eii").close();
	},
	
	// edit press event
	editPress3eii : function(oEvent){
		  var sPath = oEvent.getSource().getParent().getBindingContext("data").getPath();
		  var start = sPath.lastIndexOf("/") + 1;		    
		  var index = sPath.substring(start, sPath.length);		      			
		  var context = sap.ui.getCore().byId("app").getModel("data").getContext("/Document/ApplicationControls/MapFields/DataField/" + index);
		  this.oldValue=sap.ui.getCore().byId("app").getModel("data").oData.Document.ApplicationControls.MapFields.DataField[index].Field;
		  sap.ui.getCore().byId("editform3eii").setBindingContext(context, "data");
	      var oeditDialog3eii = sap.ui.getCore().byId("editDialog3eii");
		  oeditDialog3eii.setVisible(true);
		  sap.ui.getCore().byId("editDialog3eii").open();
	   },
	
	// edit dialog update
	updateGoogleMapOption: function(){
		
		
		
		sap.ui.getCore().byId("editDialog3eii").close();
	    sap.m.MessageBox.alert(
            "Field edited successfully");
	  },
	
	//edit dialog close
	Close3eii : function() {
		sap.ui.getCore().byId("editDialog3eii").close();
	},
	
	Update3eii :function (){
		
		var content = sap.ui.getCore().byId("editform3eii").getContent();
        var oEntry = {};
        oEntry.Field = content[2].getValue();
        
  		
        $.ajax({
			url : oStorage.get("BASEURL")+'update_config.php',
			dataType : 'jSon',
			type : 'GET',
			data : {
				switchcase : 'editMapField',
				oldvalue:this.oldValue,
				data : oEntry
			},
			success : function(configresponse) {
				
				sap.ui.getCore().byId("editDialog3eii").close();
				sap.m.MessageBox.alert("New field has been added successfully");
				
			},
		});
	},
	
	// delete press event
	deletePress3eii : function(oEvent){
		var path = oEvent.getSource().getParent().getBindingContext("data").getPath();
		var item = sap.ui.getCore().byId("app").getModel('data').getProperty(path);
         		
        
    	 var res = oEvent.getSource().getParent().getBindingContext("data").getPath().split("/") 
         
         $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'deleteMapFields',
 				data : res[5]
 			},
 			success : function(configresponse) {
 				var oTable = sap.ui.getCore().byId("table3eii");
 				var array = oTable.getModel("data").getData().Document.ApplicationControls.MapFields.DataField;
 				array.splice( array.indexOf(item), 1 );  
 		    	oTable.getModel("data").refresh();  	     
 		    	sap.m.MessageBox.alert("Field deleted");
 		    	
 			},
 		});
    	
    	
    	
	},	
	
// methods for application filter panel OP3f	
	// add dialog save & cancel
	save3f: function(){
		var content = sap.ui.getCore().byId("formId3f").getContent();
        var oEntry = {};
        oEntry.name = content[2].getValue();
        oEntry.value = content[4].getValue();
        oEntry.visibility = content[6].getSelectedKey();
  		
        $.ajax({
			url : oStorage.get("BASEURL")+'update_config.php',
			dataType : 'jSon',
			type : 'GET',
			data : {
				switchcase : 'addApplicationFilterFields',
				oldvalue:this.oldValue,
				data : oEntry
			},
			success : function(configresponse) {
				sap.ui.getCore().byId("app").getModel('data').oData.Document.ApplicationControls.ApplicationFilters.Parameter.push(oEntry);
				sap.ui.getCore().byId("app").getModel('data').refresh(true);
				
				sap.ui.getCore().byId("addDialog3f").close();
				sap.m.MessageBox.alert("New field has been added successfully");sap.m.MessageBox.alert("Field details edited successfully");
			},
		});
        
        		
	   },
	
	cancel3f : function() {
    	sap.ui.getCore().byId("addDialog3f").close();
	},
	
	// edit press event
	editPress3f : function(oEvent){
		  var sPath = oEvent.getSource().getParent().getBindingContext("data").getPath();
		  var start = sPath.lastIndexOf("/") + 1;		    
		  var index = sPath.substring(start, sPath.length);		      			
		  var context = sap.ui.getCore().byId("app").getModel("data").getContext("/Document/ApplicationControls/ApplicationFilters/Parameter/" + index);
		  

		  this.oldValue=sap.ui.getCore().byId("app").getModel("data").oData.Document.ApplicationControls.ApplicationFilters.Parameter[index].name;
		  sap.ui.getCore().byId("editform3f").setBindingContext(context, "data");
	      var oeditDialog3f = sap.ui.getCore().byId("editDialog3f");
		  oeditDialog3f.setVisible(true);
		  sap.ui.getCore().byId("editDialog3f").open();
	   },
	
	Update3f: function(){
		
	    var content = sap.ui.getCore().byId("editform3f").getContent();
        var oEntry = {};
        oEntry.name = content[2].getValue();
        oEntry.value = content[4].getValue();  // gets the value;
        oEntry.visibility = content[6].getSelectedKey();
        

        $.ajax({
			url : oStorage.get("BASEURL")+'update_config.php',
			dataType : 'jSon',
			type : 'GET',
			data : {
				switchcase : 'editApplicationFilterFields',
				oldvalue:this.oldValue,
				data : oEntry
			},
			success : function(configresponse) {
				sap.ui.getCore().byId("editDialog3f").close();
			    sap.m.MessageBox.alert("Field details edited successfully");
			},
		});

	    
	    
	  },

	Close3f : function() {
		sap.ui.getCore().byId("editDialog3f").close();
	},

	deletePress3f : function(oEvent){
		var path = oEvent.getSource().getParent().getBindingContext("data").getPath();
		var item = sap.ui.getCore().byId("app").getModel('data').getProperty(path);
         		
        
    	var res = oEvent.getSource().getParent().getBindingContext("data").getPath().split("/") 
        $.ajax({
			url : oStorage.get("BASEURL")+'update_config.php',
			dataType : 'jSon',
			type : 'GET',
			data : {
				switchcase : 'deleteApplicationFilter',
				data : res[5]
			},
			success : function(configresponse) {
				var oTable = sap.ui.getCore().byId("table3f");
				var array = oTable.getModel("data").getData().Document.ApplicationControls.ApplicationFilters.Parameter;
				array.splice( array.indexOf(item), 1 );  
		    	oTable.getModel("data").refresh();  	     
		    	sap.m.MessageBox.alert("field deleted");
		    	
			},
		});
    	
	},
	
	save3gii: function(){
		var content = sap.ui.getCore().byId("addform3gii").getContent();
        var oEntry = {};
        oEntry.Field = content[2].getValue();
        
		

        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'addColorCodeField',
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("app").getModel('data').oData.Document.ApplicationControls.ColorCodedFields.DataField.push(oEntry);
 				sap.ui.getCore().byId("app").getModel('data').refresh(true);
 				
 				sap.ui.getCore().byId("addDialog3gii").close();
 				sap.m.MessageBox.alert(" Field added successfully");
 				
 			},error :function(){
 				sap.ui.getCore().byId("app").getModel('data').oData.Document.ApplicationControls.ColorCodedFields.DataField.push(oEntry);
 				sap.ui.getCore().byId("app").getModel('data').refresh(true);
 				
 				sap.ui.getCore().byId("addDialog3gii").close();
 				sap.m.MessageBox.alert(" Field added successfully");
 				
 			}
 		});
		
		
		
		
		
	   },
	
	cancel3gii : function() {
    	sap.ui.getCore().byId("addDialog3gii").close();
	},
	

	editPress3gii : function(oEvent){
		  var sPath = oEvent.getSource().getParent().getBindingContext("data").getPath();
		  var start = sPath.lastIndexOf("/") + 1;		    
		  var index = sPath.substring(start, sPath.length);		      			
		  var context = sap.ui.getCore().byId("app").getModel("data").getContext("/Document/ApplicationControls/ColorCodedFields/DataField/" + index);
		  
		  this.oldValue=sap.ui.getCore().byId("app").getModel("data").oData.Document.ApplicationControls.ColorCodedFields.DataField[index].Field;
		  
		  sap.ui.getCore().byId("editform3gii").setBindingContext(context, "data");
	      var oeditDialog3gii = sap.ui.getCore().byId("editDialog3gii");
		  oeditDialog3gii.setVisible(true);
		  sap.ui.getCore().byId("editDialog3gii").open();
	   },
	
	Update3gii: function(){
	    
	    
	    var content = sap.ui.getCore().byId("editform3gii").getContent();
        var oEntry = {};

        oEntry.Field = content[2].getValue();

        
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'editColorCodeField',
 				oldvalue:this.oldValue,
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("editDialog3gii").close();
 			    sap.m.MessageBox.alert("Field edited successfully");
 			},error :function(){
 				sap.ui.getCore().byId("editDialog3gii").close();
 			    sap.m.MessageBox.alert("Field edited successfully");
 			}
 		});

	    
	    
	    
	  },

	  Close3gii : function() {
		sap.ui.getCore().byId("editDialog3gii").close();
	},
	
	deletePress3gii : function(oEvent){
		var path = oEvent.getSource().getParent().getBindingContext("data").getPath();
		var item = sap.ui.getCore().byId("app").getModel('data').getProperty(path);
         console.log(item);		
        

    	var res = oEvent.getSource().getParent().getBindingContext("data").getPath().split("/")
    	
        $.ajax({
			url : oStorage.get("BASEURL")+'update_config.php',
			dataType : 'jSon',
			type : 'GET',
			data : {
				switchcase : 'deleteColorCoding',
				data : res[5]
			},
			success : function(configresponse) {
				var oTable = sap.ui.getCore().byId("table3gii");
				var array = oTable.getModel("data").getData().Document.ApplicationControls.ColorCodedFields.DataField;
				array.splice( array.indexOf(item), 1 );  
		    	oTable.getModel("data").refresh();  	     
		    	sap.m.MessageBox.alert("Field deleted");
		    	
		    	
			},
		});
    	
    	
    	
    	
	},	
	
	
	editPress4 : function(oEvent){
		  var sPath = oEvent.getSource().getParent().getBindingContext("data").getPath();
		  var start = sPath.lastIndexOf("/") + 1;		    
		  var index = sPath.substring(start, sPath.length);		      			
		  var context = sap.ui.getCore().byId("app").getModel("data").getContext("/Document/ListScreenControls/ItemActionButtons/Action/" + index);
		  
		  this.oldValue=sap.ui.getCore().byId("app").getModel("data").oData.Document.ListScreenControls.ItemActionButtons.Action[index].name;
		   sap.ui.getCore().byId("editform4").setBindingContext(context, "data");
	      var oeditDialog4 = sap.ui.getCore().byId("editDialog4");
		  oeditDialog4.setVisible(true);
		  sap.ui.getCore().byId("editDialog4").open();
	   },

	   Update4: function(){
		var content = sap.ui.getCore().byId("editform4").getContent();
        var oEntry = {};

        oEntry.name = content[2].getValue();
        oEntry.flag = content[4].getSelectedKey();
        
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'approveReject',
 				oldvalue:this.oldValue,
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("editDialog4").close();
 			    sap.m.MessageBox.alert("ListControl edited successfully");
 			},error :function(){
 				sap.ui.getCore().byId("editDialog4").close();
 			    sap.m.MessageBox.alert("ListControl edited successfully");
 			}
 		});
	  },

	  Close4 : function() {
		sap.ui.getCore().byId("editDialog4").close();
	},
	
	save5a: function(){
		var content = sap.ui.getCore().byId("addform5a").getContent();
        var oEntry = {};
        oEntry.Field = content[2].getValue();  	
        
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'sortBy',
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("app").getModel('data').oData.Document.Filters.Sorting.DataField.push(oEntry);
 				sap.ui.getCore().byId("app").getModel('data').refresh(true);
 				
 				sap.ui.getCore().byId("addDialog5a").close();
 				sap.m.MessageBox.alert("New field has been added successfully");
 			},error :function(){
 				sap.ui.getCore().byId("app").getModel('data').oData.Document.Filters.Sorting.DataField.push(oEntry);
 				sap.ui.getCore().byId("app").getModel('data').refresh(true);
 				
 				sap.ui.getCore().byId("addDialog5a").close();
 				sap.m.MessageBox.alert("New field has been added successfully");
 			}
 		});
        
        
        
				
	   },
	
	cancel5a : function() {
    	sap.ui.getCore().byId("addDialog5a").close();
	},
	
	editPress5a : function(oEvent){
		  var sPath = oEvent.getSource().getParent().getBindingContext("data").getPath();
		  var start = sPath.lastIndexOf("/") + 1;		    
		  var index = sPath.substring(start, sPath.length);		      			
		  var context = sap.ui.getCore().byId("app").getModel("data").getContext("/Document/Filters/Sorting/DataField/" + index);
		  
		  this.oldValue = sap.ui.getCore().byId("app").getModel("data").oData.Document.Filters.Sorting.DataField[index].Field;
		  sap.ui.getCore().byId("editform5a").setBindingContext(context, "data");
	      var oeditDialog5a = sap.ui.getCore().byId("editDialog5a");
		  oeditDialog5a.setVisible(true);
		  sap.ui.getCore().byId("editDialog5a").open();
	   },
	
	Update5a: function(){
		
		
		var content = sap.ui.getCore().byId("editform5a").getContent();
        var oEntry = {};
        oEntry.Field = content[2].getValue();  	
        
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'editSortBy',
 				oldvalue :this.oldValue,
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("editDialog5a").close();
 			    sap.m.MessageBox.alert("Field edited successfully");
 			},error :function(){
 				sap.ui.getCore().byId("editDialog5a").close();
 			    sap.m.MessageBox.alert("Field edited successfully");
 			}
 		});
        
		
		
	  },
	
	Close5a : function() {
		sap.ui.getCore().byId("editDialog5a").close();
	},
	
	deletePress5a : function(oEvent){
		var path = oEvent.getSource().getParent().getBindingContext("data").getPath();
		var item = sap.ui.getCore().byId("app").getModel('data').getProperty(path);
		
		var res = oEvent.getSource().getParent().getBindingContext("data").getPath().split("/")
		
		
		$.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'deleteSortBy',
 				
 				data : res[5]
 			},
 			success : function(configresponse) {

 		        var oTable = sap.ui.getCore().byId("table5a");
 				var array = oTable.getModel("data").getData().Document.Filters.Sorting.DataField;
 				array.splice( array.indexOf(item), 1 );  
 		    	oTable.getModel("data").refresh();  	     
 		    	sap.m.MessageBox.alert("Field deleted");
 			},error :function(){

 		        var oTable = sap.ui.getCore().byId("table5a");
 				var array = oTable.getModel("data").getData().Document.Filters.Sorting.DataField;
 				array.splice( array.indexOf(item), 1 );  
 		    	oTable.getModel("data").refresh();  	     
 		    	sap.m.MessageBox.alert("Field deleted");
 			}
 		});
        
		
		
		
	},	

	editPress5bi : function(oEvent){
		
//		  var sPath = oEvent.getSource().getParent().getBindingContext("data").getPath();
//		  var start = sPath.lastIndexOf("/") + 1;		    
//		  var index = sPath.substring(start, sPath.length);		      			
//		  var context = sap.ui.getCore().byId("app").getModel("data").getContext("/Document/Filters/DateFilter/Options/" + index);
//		  
//		  console.log(sap.ui.getCore().byId("app").getModel("data").odata.Document.Filters.DateFilter.Options[index]);
//		  
//		  this.oldValue = sap.ui.getCore().byId("app").getModel("data").oData.Document.Filters.Sorting.DataField[index].Field;
//		  sap.ui.getCore().byId("editform5a").setBindingContext(context, "data");
	    
		
	
	      var oeditDialog5bi = sap.ui.getCore().byId("editDialog5bi");
		  oeditDialog5bi.setVisible(true);
		  sap.ui.getCore().byId("editDialog5bi").open();
	   },
	
	Update5bi: function(){
	
		var content = sap.ui.getCore().byId("editform5bi").getContent();
        var oEntry = {};
        oEntry.DataField = content[2].getValue();
        oEntry.Sequence = content[4].getValue();
        
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'editDateFilterField',
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("editDialog5bi").close();
 			    sap.m.MessageBox.alert("Field edited successfully");
 			},error :function(){
 				sap.ui.getCore().byId("editDialog5bi").close();
 			    sap.m.MessageBox.alert("Field edited successfully");
 			}
 		});
    
		
		
		
		
		
	  },
	
	Close5bi : function() {
		sap.ui.getCore().byId("editDialog5bi").close();
	},
	
	save5b: function(){
		var content = sap.ui.getCore().byId("addform5b").getContent();
        var oEntry = {};
        oEntry.Option = content[2].getSelectedKey();
        
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'dateSort',
 				oldvalue:this.oldValue,
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("app").getModel('data').oData.Document.Filters.DateFilter.Options.push(oEntry);
 				sap.ui.getCore().byId("app").getModel('data').refresh(true);
 				
 				sap.ui.getCore().byId("addDialog5b").close();
 				sap.m.MessageBox.alert("New field has been added successfully");
 			},error :function(){
 				sap.ui.getCore().byId("app").getModel('data').oData.Document.Filters.DateFilter.Options.push(oEntry);
 				sap.ui.getCore().byId("app").getModel('data').refresh(true);
 				
 				sap.ui.getCore().byId("addDialog5b").close();
 				sap.m.MessageBox.alert("New field has been added successfully");
 			}
 		});
        
        
        
        
        
        
				
	   },
	
	cancel5b : function() {
    	sap.ui.getCore().byId("addDialog5b").close();
	},
	
	editPress5b : function(oEvent){
		  var sPath = oEvent.getSource().getParent().getBindingContext("data").getPath();
		  var start = sPath.lastIndexOf("/") + 1;		    
		  var index = sPath.substring(start, sPath.length);		      			
		  var context = sap.ui.getCore().byId("app").getModel("data").getContext("/Document/Filters/DateFilter/Options/" + index);
		  this.oldValue=sap.ui.getCore().byId("app").getModel("data").oData.Document.Filters.DateFilter.Options[index]['Option'];
		   sap.ui.getCore().byId("editform5b").setBindingContext(context, "data");
	      var oeditDialog5b = sap.ui.getCore().byId("editDialog5b");
		  oeditDialog5b.setVisible(true);
		  sap.ui.getCore().byId("editDialog5b").open();
	   },
	
	Update5b: function(){
		
		
	    
	    var content = sap.ui.getCore().byId("editform5b").getContent();
	    
	    
	    
        var oEntry = {};
        oEntry.Option = content[2].getSelectedKey();
        
        console.log(oEntry);
        
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'editdateSort',
 				oldvalue:this.oldValue,
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("editDialog5b").close();
 			    sap.m.MessageBox.alert("Field edited successfully");
 			},error :function(){
 				sap.ui.getCore().byId("editDialog5b").close();
 			    sap.m.MessageBox.alert("Field edited successfully");
 			}
 		});
        
	    
	    
	    
	  },
	
	Close5b : function() {
		sap.ui.getCore().byId("editDialog5b").close();
	},
	
	deletePress5b : function(oEvent){
		var path = oEvent.getSource().getParent().getBindingContext("data").getPath();
		var item = sap.ui.getCore().byId("app").getModel('data').getProperty(path);
        
    	
    	
var res = oEvent.getSource().getParent().getBindingContext("data").getPath().split("/")
		
		$.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'deleteDateFilter',
 				
 				data : res[5]
 			},
 			success : function(configresponse) {

 				var oTable = sap.ui.getCore().byId("table5b");
 				var array = oTable.getModel("data").getData().Document.Filters.DateFilter.Options;
 				array.splice( array.indexOf(item), 1 );  
 		    	oTable.getModel("data").refresh();  	     
 		    	sap.m.MessageBox.alert("Field deleted");
 			},error :function(){

 				var oTable = sap.ui.getCore().byId("table5b");
 				var array = oTable.getModel("data").getData().Document.Filters.DateFilter.Options;
 				array.splice( array.indexOf(item), 1 );  
 		    	oTable.getModel("data").refresh();  	     
 		    	sap.m.MessageBox.alert("Field deleted");
 			}
 		});
    	
    	
    	
    	
	},	

	editPress5ci : function(oEvent){
		
		
		
	      var oeditDialog5ci = sap.ui.getCore().byId("editDialog5ci");
		  oeditDialog5ci.setVisible(true);
		  sap.ui.getCore().byId("editDialog5ci").open();
	   },
	
	Update5ci: function(){
	    var content = sap.ui.getCore().byId("editform5ci").getContent();
        var oEntry = {};
        oEntry.Sequence = content[2].getValue();
        oEntry.Popup = content[4].getValue();  	
        
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'popUpOption',
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("editDialog5ci").close();
 			    sap.m.MessageBox.alert("Field edited successfully");
 			},error :function(){
 				sap.ui.getCore().byId("editDialog5ci").close();
 			    sap.m.MessageBox.alert("Field edited successfully");
 			}
 		});
      },
	
	Close5ci : function() {
		sap.ui.getCore().byId("editDialog5ci").close();
	},
	
	save5c: function(){
		var content = sap.ui.getCore().byId("addform5c").getContent();
        var oEntry = {};
        oEntry.Field = content[2].getValue();  		
        
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'dataFilter',
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("app").getModel('data').oData.Document.Filters.DataFilter.DataField.push(oEntry);
 				sap.ui.getCore().byId("app").getModel('data').refresh(true);
 				
 				sap.ui.getCore().byId("addDialog5c").close();
 				sap.m.MessageBox.alert("New field has been added successfully");
 			},error :function(){
 				sap.ui.getCore().byId("app").getModel('data').oData.Document.Filters.DataFilter.DataField.push(oEntry);
 				sap.ui.getCore().byId("app").getModel('data').refresh(true);
 				
 				sap.ui.getCore().byId("addDialog5c").close();
 				sap.m.MessageBox.alert("New field has been added successfully");
 			}
 		});
        
        
        
				
	   },
	
	cancel5c : function() {
    	sap.ui.getCore().byId("addDialog5c").close();
	},
	
	editPress5c : function(oEvent){
		  var sPath = oEvent.getSource().getParent().getBindingContext("data").getPath();
		  var start = sPath.lastIndexOf("/") + 1;		    
		  var index = sPath.substring(start, sPath.length);		      			
		  var context = sap.ui.getCore().byId("app").getModel("data").getContext("/Document/Filters/DataFilter/DataField/" + index);
		  this.oldValue = sap.ui.getCore().byId("app").getModel("data").oData.Document.Filters.DataFilter.DataField[index]['Field'];
		   sap.ui.getCore().byId("editform5c").setBindingContext(context, "data");
	      var oeditDialog5c = sap.ui.getCore().byId("editDialog5c");
		  oeditDialog5c.setVisible(true);
		  sap.ui.getCore().byId("editDialog5c").open();
	   },
	
	Update5c: function(){
		
	    var content = sap.ui.getCore().byId("editform5c").getContent();
        var oEntry = {};
        oEntry.Field = content[2].getValue();  		
        
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'editdataFilter',
 				data : oEntry,
 				oldvalue:this.oldValue
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("editDialog5c").close();
 			    sap.m.MessageBox.alert("Field edited successfully");
 			    
 			},error :function(){
 				sap.ui.getCore().byId("editDialog5c").close();
 			    sap.m.MessageBox.alert("Field edited successfully");
 			    
 			}
 		});
        
	    
	    
	    
	    
	  },
	
	Close5c : function() {
		sap.ui.getCore().byId("editDialog5c").close();
	},
	
	deletePress5c : function(oEvent){
		var path = oEvent.getSource().getParent().getBindingContext("data").getPath();
		var item = sap.ui.getCore().byId("app").getModel('data').getProperty(path);

    	var res = oEvent.getSource().getParent().getBindingContext("data").getPath().split("/")
    			
    			$.ajax({
    	 			url : oStorage.get("BASEURL")+'update_config.php',
    	 			dataType : 'jSon',
    	 			type : 'GET',
    	 			data : {
    	 				switchcase : 'deleteDataFilter',
    	 				
    	 				data : res[5]
    	 			},
    	 			success : function(configresponse) {

    	 		        var oTable = sap.ui.getCore().byId("table5c");
    	 				var array = oTable.getModel("data").getData().Document.Filters.DataFilter.DataField;
    	 				array.splice( array.indexOf(item), 1 );  
    	 		    	oTable.getModel("data").refresh();  	     
    	 		    	sap.m.MessageBox.alert("Field deleted");
    	 		    	
    	 			}

    	 		});

    	
    	
    	
	},		

	editPress6a : function(oEvent){
	      var oeditDialog6a = sap.ui.getCore().byId("editDialog6a");
		  oeditDialog6a.setVisible(true);
		  sap.ui.getCore().byId("editDialog6a").open();
	   },
	
	Update6a: function(){
		sap.ui.getCore().byId("editDialog6a").close();
	    sap.m.MessageBox.alert("Field edited successfully");
	  },
	
	Close6a : function() {
		sap.ui.getCore().byId("editDialog6a").close();
	},
	

	addTab: function(){
		var content = sap.ui.getCore().byId("addform6b").getContent();
        var oEntry = {};
        oEntry.value = content[2].getSelectedKey();
        oEntry.name = content[4].getValue();
        oEntry.type = content[6].getSelectedKey();
        oEntry.fioriicon = content[8].getValue();

        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'addTab',
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("app").getModel('data').oData.Document.DetailPageControl.TabDetails.Tab.push(oEntry);
 				sap.ui.getCore().byId("app").getModel('data').refresh(true);
 				
 				sap.ui.getCore().byId("addDialog6b").close();
 				sap.m.MessageBox.alert(" Tab added successfully");
 			}
 		});
  },
	
	cancel6b : function() {
    	sap.ui.getCore().byId("addDialog6b").close();
	},
	
	editPress6b : function(oEvent){
		  var sPath = oEvent.getSource().getParent().getBindingContext("data").getPath();
		  var start = sPath.lastIndexOf("/") + 1;		    
		  var index = sPath.substring(start, sPath.length);		      			
		  var context = sap.ui.getCore().byId("app").getModel("data").getContext("/Document/DetailPageControl/TabDetails/Tab/" + index);
		  
		 this.oldValue =sap.ui.getCore().byId("app").getModel("data").oData.Document.DetailPageControl.TabDetails.Tab[index].name;
		   sap.ui.getCore().byId("editform6b").setBindingContext(context, "data");
	      var oeditDialog6b = sap.ui.getCore().byId("editDialog6b");
		  oeditDialog6b.setVisible(true);
		  sap.ui.getCore().byId("editDialog6b").open();
	   },
	
	Update6b: function(){
		var content = sap.ui.getCore().byId("editform6b").getContent();
        var oEntry = {};

        oEntry.value = content[2].getSelectedKey();
        oEntry.name = content[4].getValue();
        oEntry.Type = content[6].getSelectedKey();
        oEntry.fioriicon = content[8].getValue();
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'editTab',
 				oldvalue:this.oldValue,
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("editDialog6b").close();
 			    sap.m.MessageBox.alert("Tab details edited successfully");
 			}
 		});
  },
	
	Close6b : function() {
		sap.ui.getCore().byId("editDialog6b").close();
	},
	
	deleteTab : function(oEvent){
		var path = oEvent.getSource().getParent().getBindingContext("data").getPath();
		var item = sap.ui.getCore().byId("app").getModel('data').getProperty(path);
         
		var res = oEvent.getSource().getParent().getBindingContext("data").getPath().split("/")
		
         $.ajax({
  			url : oStorage.get("BASEURL")+'update_config.php',
  			dataType : 'jSon',
  			type : 'GET',
  			data : {
  				switchcase : 'deleteTab', 
  				data : res[5]
  			},
  			success : function(configresponse) {
  		        var oTable = sap.ui.getCore().byId("table6b");
  				var array = oTable.getModel("data").getData().Document.DetailPageControl.TabDetails.Tab;

  				array.splice( array.indexOf(item), 1 );  
  		    	oTable.getModel("data").refresh();  	     
  		    	sap.m.MessageBox.alert("Tab deleted");  			}
  		});
	},	
	
	editPress7 : function(oEvent){
	      var oeditDialog7 = sap.ui.getCore().byId("editDialog7");
		  oeditDialog7.setVisible(true);
		  sap.ui.getCore().byId("editDialog7").open();
	   },
	
	   updateTitle: function(){
		var content = sap.ui.getCore().byId("editform7").getContent();
        var oEntry = {};

        oEntry.ApplicationTitle = content[2].getValue();
        oEntry.DetailTitle = content[4].getValue();
        
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'title',
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("editDialog7").close();
 			    sap.m.MessageBox.alert("Field edited successfully");
 			}
 		});
  },

  Close7 : function() {
		sap.ui.getCore().byId("editDialog7").close();
	},

	save8: function(){
		var content = sap.ui.getCore().byId("addform8").getContent();
        var oEntry = {};
        oEntry.name = content[2].getValue();
        oEntry.ListField = content[4].getSelectedKey();
        oEntry.Sequence = content[6].getValue();

        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'addListField',
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("app").getModel('data').oData.Document.ListField.element.push(oEntry);
 				sap.ui.getCore().byId("app").getModel('data').refresh(true);
 				
 				sap.ui.getCore().byId("addDialog8").close();
 				sap.m.MessageBox.alert("New Listfield has been added successfully");
 			}
 		});
    },
	
	cancel8 : function() {
    	sap.ui.getCore().byId("addDialog8").close();
	},
	
	editPress8 : function(oEvent){
		  var sPath = oEvent.getSource().getParent().getBindingContext("data").getPath();
		  var start = sPath.lastIndexOf("/") + 1;		    
		  var index = sPath.substring(start, sPath.length);		      			
		  var context = sap.ui.getCore().byId("app").getModel("data").getContext("/Document/ListField/element/" + index);		
		  
		  this.oldValue=sap.ui.getCore().byId("app").getModel("data").oData.Document.ListField.element[index].name;
		  
		  sap.ui.getCore().byId("editform8").setBindingContext(context, "data");
	      var oeditDialog8 = sap.ui.getCore().byId("editDialog8");
		  oeditDialog8.setVisible(true);
		  sap.ui.getCore().byId("editDialog8").open();
	   },
	
	Update8: function(){
		var content = sap.ui.getCore().byId("editform8").getContent();
        var oEntry = {};
        oEntry.name = content[2].getValue();
        oEntry.ListField = content[4].getSelectedKey();
        oEntry.Sequence = content[6].getValue();
		
		$.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'editListField',
 				data : oEntry,
 				oldvalue:this.oldValue
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("editDialog8").close();
 			    sap.m.MessageBox.alert("Listfield edited successfully");
 			}
 		});
	  },
	
	Close8 : function() {
		sap.ui.getCore().byId("editDialog8").close();
	},
	
	deletePress8 : function(oEvent){
		var path = oEvent.getSource().getParent().getBindingContext("data").getPath();
		var item = sap.ui.getCore().byId("app").getModel('data').getProperty(path);
		
		var res = oEvent.getSource().getParent().getBindingContext("data").getPath().split("/")
         
         $.ajax({
  			url : oStorage.get("BASEURL")+'update_config.php',
  			dataType : 'jSon',
  			type : 'GET',
  			data : {
  				switchcase : 'deleteListField',
  				data : res[4]
  			},
  			success : function(configresponse) {
  				var oTable = sap.ui.getCore().byId("table8");
  				var array = oTable.getModel("data").getData().Document.ListField.element;
  				array.splice( array.indexOf(item), 1 );  
  		    	oTable.getModel("data").refresh();  	     
  		    	sap.m.MessageBox.alert("ListField deleted");
  			}
  		});
	},	
	save9: function(){
		var content = sap.ui.getCore().byId("addform9").getContent();
        var oEntry = {};
        oEntry.name = content[2].getValue();
        oEntry.Tab = content[4].getSelectedKey();
        oEntry.Sequence = content[6].getValue();
        oEntry.Mode = content[8].getSelectedKey();
  	    
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'addDetailScreenField',
 				data : oEntry
 			},
 			success : function(configresponse) {
 				sap.ui.getCore().byId("app").getModel('data').oData.Document.DetailScreen.element.push(oEntry);
 				sap.ui.getCore().byId("app").getModel('data').refresh(true);
 				
 				sap.ui.getCore().byId("addDialog9").close();
 				sap.m.MessageBox.alert("New field has been added successfully");
 			}
 		});
   },
	
	cancel9 : function() {
    	sap.ui.getCore().byId("addDialog9").close();
	},
	
	editPress9 : function(oEvent){
		  var sPath = oEvent.getSource().getParent().getBindingContext("data").getPath();
		  var start = sPath.lastIndexOf("/") + 1;		    
		  var index = sPath.substring(start, sPath.length);		      			
		  var context = sap.ui.getCore().byId("app").getModel("data").getContext("/Document/DetailScreen/element/" + index);
		  this.oldValue=sap.ui.getCore().byId("app").getModel("data").oData.Document.DetailScreen.element[index].name;
		   sap.ui.getCore().byId("editform9").setBindingContext(context, "data");
	      var oeditDialog9 = sap.ui.getCore().byId("editDialog9");
		  oeditDialog9.setVisible(true);
		  sap.ui.getCore().byId("editDialog9").open();
	   },
	
	Update9: function(){
		var content = sap.ui.getCore().byId("editform9").getContent();
        var oEntry = {};

        oEntry.name = content[2].getValue();
        oEntry.Tab = content[4].getSelectedKey();
        oEntry.Sequence = content[6].getValue();
        oEntry.Mode = content[8].getSelectedKey();
      
        $.ajax({
 			url : oStorage.get("BASEURL")+'update_config.php',
 			dataType : 'jSon',
 			type : 'GET',
 			data : {
 				switchcase : 'editDetailScreenField',
 				data : oEntry,
 				oldvalue:this.oldValue
 			},
 			success : function(configresponse) {
 				
 				sap.ui.getCore().byId("editDialog9").close();
 			    sap.m.MessageBox.alert("Field edited successfully");
 			},
 			error : function(){
 				
 				sap.ui.getCore().byId('editDialog9').close();
 				sap.m.MessageBox.alert('Success Edit');
 			}
 		});
  },
	
	Close9 : function() {
		sap.ui.getCore().byId("editDialog9").close();
	},
	
	deletePress9 : function(oEvent){
		var path = oEvent.getSource().getParent().getBindingContext("data").getPath();
		
		var res = oEvent.getSource().getParent().getBindingContext("data").getPath().split("/")
		
		var item = sap.ui.getCore().byId("app").getModel('data').getProperty(path);

		$.ajax({
			url : oStorage.get("BASEURL")+'update_config.php',
			dataType : 'jSon',
			type : 'GET',
			data : {
				switchcase : 'deleteDetailScreenField',
				data : res[4]
			},
		success : function(configresponse) {
			 var oTable = sap.ui.getCore().byId("table9");
			 var array = oTable.getModel("data").getData().Document.DetailScreen.element;
				
			 array.splice( array.indexOf(item), 1 );  
		     oTable.getModel("data").refresh();  	     
		     sap.m.MessageBox.alert("Field deleted");
		},
		error : function(){
			 var oTable = sap.ui.getCore().byId("table9");
				var array = oTable.getModel("data").getData().Document.DetailScreen.element;
				
				array.splice( array.indexOf(item), 1 );  
		    	oTable.getModel("data").refresh();  	     
		    	sap.m.MessageBox.alert("Field deleted");
		}
	});
}	
});