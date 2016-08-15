sap.ui.jsview("config1.Detail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf config1.Detail
	*/ 
	getControllerName : function() {
		return "config1.Detail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf config1.Detail
	*/ 
	createContent : function(oController) {
		
// object header		
	var objHdr = new sap.m.ObjectHeader({
		               id :"objectHeader",
			           title: "{data>/Document/Identification/Object}",
			           number : "{data>/Document/Identification/PartnerNo}", 
			           attributes : [new sap.m.ObjectAttribute({
					              text : "{data>/Document/Title/ApplicationTitle}"
				                 })   
			                            ],			           
	                });
	
// Identification tab1 starts here	
	var oSimpleForm1 = new sap.ui.layout.form.SimpleForm("sf1",{				
		layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
        minWidth: 1024,
	    maxContainerCols: 2,
	    editable: false,
	    labelSpanL: 3,
	    labelSpanM: 3,
	    emptySpanL: 4,
	    emptySpanM: 4,
	    columnsL:   1,
	    columnsM:   1,		
		content:[                        
             new sap.m.Label({text :'Object'}),
			 new sap.m.Text({text: "{data>/Document/Identification/Object}"}),        							 
			 new sap.m.Label({text :'PartnerNo'}),
			 new sap.m.Text({text: "{data>/Document/Identification/PartnerNo}"})
		 ]
	});
	                      
	var OP1= new sap.m.Panel("opanel1",{
        width: "auto",
        headerToolbar: [
         		       new sap.m.Toolbar({		    	
         		           content:  [
                                new sap.m.Title({text: "Identification"}),       
         		               new sap.m.ToolbarSpacer(),
         		               new sap.m.Button({
         			        	  icon: "sap-icon://edit",
         						  press:function(oEvent) {
         							 oController.editPress1(oEvent);}						    
         		    	           }),
         		    	        ]
         		            })
         		        ],
        content:[oSimpleForm1] 
     });  
	
	//edit form starts here    
    var editForm1 = new sap.ui.layout.form.SimpleForm(
			'editIdentificationForm', {
				maxContainerCols : 2,
				editable : true,				
				content : [                        
				              new sap.ui.core.Title({text:"Identification"}),
				              new sap.m.Label({text:"Object"}),
				              new sap.m.Input({value:"{data>/Document/Identification/Object}"}),
				              new sap.m.Label({text:"PartnerNo"}),				       
				              new sap.m.Input({value:"{data>/Document/Identification/PartnerNo}"}),
				     ]
			});
    
    var oeditbtn1 = new sap.m.Button("update1", {
		text : "Update",
		tap : [ oController.Update1, oController ]
	});

	var oclosebtn1 = new sap.m.Button("Close1", {
		text : "Close",
		tap : [ oController.Close1, oController ],
	});

	var editD1 = new sap.m.Dialog("editIdentificationDialog", {
		title : "Edit config",
		modal : true,
		contentWidth : "1em",
		visible : false,
		buttons : [ oeditbtn1, oclosebtn1 ],
		content : [editForm1]
	});
                                           			
// Identification tab1 ends here
	
// Field definition tab2 code starts here	
	var oTable2 = new sap.m.Table({
		id: "table2",
		width: "auto",
		growing: true,
		growingScrollToLoad: true,
		headerToolbar: [
		       new sap.m.Toolbar({		    	
		           content:  [
                       new sap.m.Title({text: "Field Definition"}),       
		               new sap.m.ToolbarSpacer(),
		               new sap.m.Button({
			        	  icon: "sap-icon://add",
						  press:function() {
							  sap.ui.getCore().byId("addDialog2").open();}						    
		    	           }),
		    	        ]
		            })
		        ],
		columns: [
		          new sap.m.Column({
		        	  header: new sap.m.Label({text: "Name"}),
		        	  width: "100px",
		          }),
		          new sap.m.Column({
		        	  header: new sap.m.Label({text: "Type"}),
		        	  width: "100px",
		        	  demandPopin: false,
		        	  minScreenWidth: sap.m.ScreenSize.Medium
		          }),
		          new sap.m.Column({
		        	  header: new sap.m.Label({text: "Width"}),
		        	  width: "100px",
		          }),
		          new sap.m.Column({
		        	  header: new sap.m.Label({text: "MapField"}),
		        	  width: "100px",
		          }),
		          new sap.m.Column({
		        	  header: new sap.m.Label({text: "Edit"}),
		        	  width: "50px",
		        	  demandPopin: true,
		        	  minScreenWidth: sap.m.ScreenSize.Medium
		          }), 
		          new sap.m.Column({
		        	  header: new sap.m.Label({text: "Delete"}),
		        	  width: "50px",
		        	  demandPopin: true,
		        	  minScreenWidth: sap.m.ScreenSize.Medium
		          })          
		]
	});	
	var oTemplate2 = new sap.m.ColumnListItem({
		cells: [
		         new sap.m.Text({text: "{data>name}"}),		        
		         new sap.m.Text({text: "{data>type}"}),
		         new sap.m.Text({text: "{data>width}"}),
		         new sap.m.Text({text: "{data>mapField}"}),
		         new sap.m.Button({
		        	      icon: "sap-icon://edit",
					      press:function(oEvent) {
						  oController.editPress2(oEvent);
					    },
		          }),		        
		         new sap.m.Button("del2",{
		        	     icon: "sap-icon://delete",
					     press:function(oEvent) {
							oController.deletePress2(oEvent);
					    },
		        })
		     ]		
	});
	
	oTable2.bindAggregation("items","data>/Document/FieldDefinition/element",oTemplate2);
	
	//Add form starts here    
    var addForm2 = new sap.ui.layout.form.SimpleForm(
			'formId2', {
				maxContainerCols : 2,
				editable : true,
				content : [                        
				              new sap.ui.core.Title({text:"Field Details"}),
				              new sap.m.Label({text:"Field Name"}),
				              new sap.m.Input({value:""}),
				              new sap.m.Label({text:"Field Type"}),
				              new sap.m.Select({
						            items: [
						                    new sap.ui.core.Item({key: "string",text: "string"}) ,							                    								                    								                    new sap.ui.core.Item({key: "Date",text: "Date"}),
						                    new sap.ui.core.Item({key: "Time",text: "Time"}) ,
						                    new sap.ui.core.Item({key: "attachment",text: "attachment"}),
					                        new sap.ui.core.Item({key: "hyperlink",text: "hyperlink"}),
					                        new sap.ui.core.Item({key: "barcode",text: "barcode"}) ,
					                        new sap.ui.core.Item({key: "Geocode",text: "Geocode"}),					                  
						                 ]
						              }),
				              new sap.m.Label({text:"Width"}),
				              new sap.m.Select({
					                 id: "width2a",
				            	  items: [
                                    new sap.ui.core.Item({key:"1",text: "1"}) ,
                                    new sap.ui.core.Item({key:"2",text: "2"}),
                                    new sap.ui.core.Item({key:"3",text: "3"}) ,
                                    new sap.ui.core.Item({key:"4", text: "4"}),
				                    new sap.ui.core.Item({key:"5",text: "5"}) ,
				                    new sap.ui.core.Item({key:"10",text: "10"}),
				                    new sap.ui.core.Item({key:"20",text: "20"}) ,
				                    new sap.ui.core.Item({key:"50", text: "50"}),
			                        new sap.ui.core.Item({key:"100",text: "100"}),
			                        new sap.ui.core.Item({key:"200",text: "200"}) ,
			                        new sap.ui.core.Item({key:"500",text: "500"}),
			                        new sap.ui.core.Item({key:"1000",text: "1000"})					              
				                 ]
				              }),		
				              new sap.m.Label({text:"MapField"}),
				              new sap.m.Input({value:""})
				     ]

			});

	var oButton2 = new sap.m.Button("Save2", {     
		text : "Save",
		tap : [ oController.save2, oController ]
	});

	var oButton3 = new sap.m.Button("Cancel2", {
		text : "Cancel",
		tap : [ oController.cancel2, oController ]

	});

	var addDialog2 = new sap.m.Dialog("addDialog2", {
		title : "Add new field10",
		modal : true,
		contentWidth : "1em",
		buttons : [oButton2, oButton3 ],  
		content : [addForm2]
	});
	
	//edit form starts here    
    var editForm2 = new sap.ui.layout.form.SimpleForm(
			'editform2', {
				maxContainerCols : 2,
				editable : true,				
				content : [                        
				              new sap.ui.core.Title({text:"Field Details"}),
				              new sap.m.Label({text:"Field Name"}),
				              new sap.m.Input({value:"{data>name}"}),
				              new sap.m.Label({text:"Field Type"}),				       
				              new sap.m.Select({
					                 id: "type2",
					                 selectedKey: "{data>type}",
						             items: [
						                    new sap.ui.core.Item({key: "string",text: "string"}) ,							                    								                    								                    new sap.ui.core.Item({key: "Date",text: "Date"}),
						                    new sap.ui.core.Item({key: "Time",text: "Time"}) ,
						                    new sap.ui.core.Item({key: "attachment",text: "attachment"}),
					                        new sap.ui.core.Item({key: "hyperlink",text: "hyperlink"}),
					                        new sap.ui.core.Item({key: "barcode",text: "barcode"}) ,
					                        new sap.ui.core.Item({key: "Geocode",text: "Geocode"}),					                  
						                 ]
						              }),
				              new sap.m.Label({text:"Width"}),
				              new sap.m.Select({
					                 id: "width2e",
					                 selectedKey: "{data>width}",
				            	  items: [
                                    new sap.ui.core.Item({key:"1",text: "1"}) ,
                                    new sap.ui.core.Item({key:"2",text: "2"}),
                                    new sap.ui.core.Item({key:"3",text: "3"}) ,
                                    new sap.ui.core.Item({key:"4", text: "4"}),
				                    new sap.ui.core.Item({key:"5",text: "5"}) ,
				                    new sap.ui.core.Item({key:"10",text: "10"}),
				                    new sap.ui.core.Item({key:"20",text: "20"}) ,
				                    new sap.ui.core.Item({key:"50", text: "50"}),
			                        new sap.ui.core.Item({key:"100",text: "100"}),
			                        new sap.ui.core.Item({key:"200",text: "200"}) ,
			                        new sap.ui.core.Item({key:"500",text: "500"}),
			                        new sap.ui.core.Item({key:"1000",text: "1000"})					              
				                 ]
				              }),		
				              new sap.m.Label({text:"MapField"}),
				              new sap.m.Input({value:"{data>mapField}"})
				     ]
			});
    
    var oeditbtn2 = new sap.m.Button("update2", {
		text : "Update",
		tap : [ oController.Update2, oController ]
	});

	var oclosebtn2 = new sap.m.Button("Close", {
		text : "Close",
		tap : [ oController.Close2, oController ],
	});

	var editD2 = new sap.m.Dialog("editDialog2", {
		title : "Edit App",
		modal : true,
		contentWidth : "1em",
		visible : false,
		buttons : [ oeditbtn2, oclosebtn2 ],
		content : [editForm2]
	});
// field def tab2 code ends here
	
//Application control tab 3 starts here
	// content of panel 3a start here
   //A- Create new Items 3ai -	
	oRadioButtonGroup3ai = new sap.m.RadioButtonGroup({ 
		
		selectedIndex: sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['CreateNewItems'],
		select :function(){
			oController.createNewItems(oRadioButtonGroup3ai.getSelectedButton().getText());
		},
		                              columns: 2,
                                      buttons: [
                                           new sap.m.RadioButton({
                                                 text: "Y",
                                      
                                          }), 
                                          new sap.m.RadioButton({
                                              text: "N",
                                      
                                       }),  
                             ],
		
		 layoutData: new sap.ui.layout.ResponsiveFlowLayoutData()  //{weight: 9}
	});
	          
	oFormcontainer3ai = new sap.ui.layout.form.FormContainer("F1C4",{
		formElements: [
			new sap.ui.layout.form.FormElement({
				label: "CreateNewItems",
				fields: [oRadioButtonGroup3ai]
	        }),
		]
	});
	
	var oLayout3ai = new sap.ui.layout.form.ResponsiveGridLayout();
	var oForm3ai = new sap.ui.layout.form.Form("F1",{
	  layout: oLayout3ai,
		formContainers: [oFormcontainer3ai]
	});
	
	//B- table 3aii starts here
	var oTable3aii = new sap.m.Table({
			id: "table3aii",
			width: "auto",
			growing: true,
			growingThreshold: 20,
			growingScrollToLoad: true,
			headerToolbar: [
			       new sap.m.Toolbar({		    	
			           content:  [
	                       new sap.m.Title({text: "Fields Details"}),       
			               new sap.m.ToolbarSpacer(),
			               new sap.m.Button({
				        	  icon: "sap-icon://add",
							  press:function() {
								  sap.ui.getCore().byId("addDialog3aii").open();}						    
			    	           }),
			    	        ]
			            })
			        ],
			columns: [
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "FieldName"}),
			        	  width: "100px"
			          }),
//			          new sap.m.Column({
//			        	  header: new sap.m.Label({text: "Type"}),
//			        	  width: "100px",
//			          }),
//			          new sap.m.Column({
//			        	  header: new sap.m.Label({text: "Width"}),
//			        	  width: "100px",
//			        	  demandPopin: false,
//			        	  minScreenWidth: sap.m.ScreenSize.Medium
//			          }),
//			          new sap.m.Column({
//			        	  header: new sap.m.Label({text: "Attribute"}),
//			        	  width: "100px",
//			        	  demandPopin: false,
//			          }),
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Edit"}),
			        	  width: "50px",
			        	  demandPopin: true,
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          }), 
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Delete"}),
			        	  width: "50px",
			        	  demandPopin: true,
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          })          
			]
		});	
		var oTemplate3aii = new sap.m.ColumnListItem({
			cells: [
			         new sap.m.Text({text: "{data>name}"}),		        
//			         new sap.m.Text({text: "{data>type}"}),
//			         new sap.m.Text({text: "{data>width}"}),	
//			         new sap.m.Text({text: "{data>Attribute}"}),
			         new sap.m.Button({
			        	      icon: "sap-icon://edit",
						      press:function(oEvent) {
							  oController.editPress3aii(oEvent);
						    },
			          }),		        
			         new sap.m.Button("del3aii",{
			        	     icon: "sap-icon://delete",
						     press:function(oEvent) {
						    	 
								oController.deleteselectedCreateNewField(oEvent);
						    },
			        })
			     ]		
		});
		
		oTable3aii.bindAggregation("items","data>/Document/ApplicationControls/CreateNewFields/DataField",oTemplate3aii);

		
		var addForm3aii = new sap.ui.layout.form.SimpleForm(
				'addform3aii', {
					maxContainerCols : 2,
					editable : true,
					content : [                        
					              new sap.ui.core.Title({text:"Field Details"}),
					              new sap.m.Label({text:"Field Name"}),
					              new sap.m.Input({value:""}),
//					              new sap.m.Label({text:"Type"}),				       
//					              new sap.m.Select({
//						                 id: "type3a",
//							             items: [
//							                    new sap.ui.core.Item({key: "string",text: "string"}) ,							                    								                    								                    new sap.ui.core.Item({key: "Date",text: "Date"}),
//							                    new sap.ui.core.Item({key: "Time",text: "Time"}) ,
//							                    new sap.ui.core.Item({key: "attachment",text: "attachment"}),
//						                        new sap.ui.core.Item({key: "hyperlink",text: "hyperlink"}),
//						                        new sap.ui.core.Item({key: "barcode",text: "barcode"}) ,
//						                        new sap.ui.core.Item({key: "Geocode",text: "Geocode"}),					                  
//							                 ]
//							              }),
//					              new sap.m.Label({text:"Width"}),
//					              new sap.m.Select({
//						                 id: "width3a",
//						        	  items: [
//			                            new sap.ui.core.Item({key:"1",text: "1"}) ,
//			                            new sap.ui.core.Item({key:"2",text: "2"}),
//			                            new sap.ui.core.Item({key:"3",text: "3"}) ,
//			                            new sap.ui.core.Item({key:"4", text: "4"}),
//					                    new sap.ui.core.Item({key:"5",text: "5"}) ,
//					                    new sap.ui.core.Item({key:"10",text: "10"}),
//					                    new sap.ui.core.Item({key:"20",text: "20"}) ,
//					                    new sap.ui.core.Item({key:"50", text: "50"}),
//				                        new sap.ui.core.Item({key:"100",text: "100"}),
//				                        new sap.ui.core.Item({key:"200",text: "200"}) ,
//				                        new sap.ui.core.Item({key:"500",text: "500"}),
//				                        new sap.ui.core.Item({key:"1000",text: "1000"})					              
//					                 ]
//					              }),		
//					              new sap.m.Label({text:"Attribute"}),
//					              new sap.m.Select({
//					            	  id: "attribute3a",
//						    	      items: [
//				                         new sap.ui.core.Item({key:"E",text: "E"}) ,
//				                         new sap.ui.core.Item({key:"D",text: "D"}),				                  
//				                 ]
//				              })		
					     ]

				});

		var osavebtn3aii = new sap.m.Button("Save3aii", {     
			text : "Save",
			tap : [ oController.createNewFields, oController ]
		});

		var ocancelbtn3aii = new sap.m.Button("Cancel3aii", {
			text : "Cancel",
			tap : [ oController.cancel3aii, oController ]

		});

		var addDialog3aii = new sap.m.Dialog("addDialog3aii", {
			title : "Add new Field11",
			modal : true,
			contentWidth : "1em",
			buttons : [osavebtn3aii, ocancelbtn3aii ],  
			content : [addForm3aii]
		});
		
		//edit form starts here    
					    var editForm3aii = new sap.ui.layout.form.SimpleForm(
								'editform3aii', {
								maxContainerCols : 2,
								editable : true,				
								content : [                        
					              new sap.ui.core.Title({text:"CreateNewFields"}),
					              new sap.m.Label({text:"Name"}),
					              new sap.m.Input({value:"{data>name}"}),				             
//					              new sap.m.Label({text:"Type"}),				       
//						          new sap.m.Select({
//						                 id: "type3aii",
//						                 selectedKey: "{data>type}",
//							             items: [
//							                    new sap.ui.core.Item({key: "string",text: "string"}) ,							                    								                    								                    new sap.ui.core.Item({key: "Date",text: "Date"}),
//							                    new sap.ui.core.Item({key: "Time",text: "Time"}) ,
//							                    new sap.ui.core.Item({key: "attachment",text: "attachment"}),
//						                        new sap.ui.core.Item({key: "hyperlink",text: "hyperlink"}),
//						                        new sap.ui.core.Item({key: "barcode",text: "barcode"}) ,
//						                        new sap.ui.core.Item({key: "Geocode",text: "Geocode"}),					                  
//							                 ]
//							              }),
//					              new sap.m.Label({text:"Width"}),
//					              new sap.m.Select({
//					                 id: "width3aii",
//					                 selectedKey: "{data>width}",
//				            	  items: [
//		                             new sap.ui.core.Item({key:"1",text: "1"}) ,
//		                             new sap.ui.core.Item({key:"2",text: "2"}),
//		                             new sap.ui.core.Item({key:"3",text: "3"}) ,
//		                             new sap.ui.core.Item({key:"4", text: "4"}),
//					                 new sap.ui.core.Item({key:"5",text: "5"}) ,
//					                 new sap.ui.core.Item({key:"10",text: "10"}),
//					                 new sap.ui.core.Item({key:"20",text: "20"}) ,
//					                 new sap.ui.core.Item({key:"50", text: "50"}),
//				                     new sap.ui.core.Item({key:"100",text: "100"}),
//				                     new sap.ui.core.Item({key:"200",text: "200"}) ,
//				                     new sap.ui.core.Item({key:"500",text: "500"}),
//				                     new sap.ui.core.Item({key:"1000",text: "1000"})					              
//				                 ]
//				              }),					              
//					              new sap.m.Label({text:"Attribute"}),
//					              new sap.m.Select({
//					            	  id: "attribute3aii",
//						              selectedKey: "{data>Attribute}",
//				            	      items: [
//				                         new sap.ui.core.Item({key:"E",text: "E"}) ,
//				                         new sap.ui.core.Item({key:"D",text: "D"}),				                  
//				                 ]
//				              }),					              
					     ]
				});
	    
	    var oeditbtn3aii = new sap.m.Button("update3aii", {
			text : "Update",
			tap : [ oController.editCreateNewField, oController ]
		});

		var oclosebtn3aii = new sap.m.Button("Close3aii", {
			text : "Close",
			tap : [ oController.Close3aii, oController ],
		});

		var editD3aii = new sap.m.Dialog("editDialog3aii", {
			title : "Edit Fields44",
			modal : true,
			contentWidth : "1em",
			visible : false,
			buttons : [ oeditbtn3aii, oclosebtn3aii ],
			content : [editForm3aii]
		});			
	
	
	// panel 3a containing form 3ai & table 3aii
	var OP3a = new sap.m.Panel("opanel3a",{
		width: "auto",
		expandable : true,
		expanded : false,
		headerToolbar: [
		          new sap.m.Toolbar({
		        	  content: [
		        	       new sap.m.Title({text: "Create New Fields"}),
		        	       new sap.m.ToolbarSpacer()
		        	            ]
		          })      
		                ],
		content:[oForm3ai,oTable3aii]
	
	});
	
// Content of Possible value panel 3b start here
	   //A- possible value option 3bi -	
		oRadioButtonGroup3bi = new sap.m.RadioButtonGroup("RB3bi",{
			
			selectedIndex: sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['PossibleValue'],
			select :function(){
				oController.possibleValue(oRadioButtonGroup3bi.getSelectedButton().getText());
			},
			
			                              columns: 2,
	                                      buttons: [
	                                           new sap.m.RadioButton({
	                                                 text: "Y",
	                                          }), 
	                                          new sap.m.RadioButton({
	                                              text: "N",
	                                       }),  
	                             ],
			
			 layoutData: new sap.ui.layout.ResponsiveFlowLayoutData()  //{weight: 9}
		});
		          
		oFormcontainer3bi = new sap.ui.layout.form.FormContainer("FC3bi",{
			formElements: [
				new sap.ui.layout.form.FormElement({
					label: "PossibleValue",
					fields: [oRadioButtonGroup3bi]
		        }),
			]
		});
		
		var oLayout3bi = new sap.ui.layout.form.ResponsiveGridLayout();
		var oForm3bi = new sap.ui.layout.form.Form("F3bi",{
		  layout: oLayout3bi,
			formContainers: [oFormcontainer3bi]
		});
		
		//B- table 3bii starts here
		var oTable3bii = new sap.m.Table({
				id: "table3bii",
				width: "auto",
				growing: true,
				growingThreshold: 20,
				growingScrollToLoad: true,
				headerToolbar: [
				       new sap.m.Toolbar({		    	
				           content:  [
		                       new sap.m.Title({text: "Possible Value Fields Details"}),       
				               new sap.m.ToolbarSpacer(),
				               new sap.m.Button({
					        	  icon: "sap-icon://add",
								  press:function() {
									  sap.ui.getCore().byId("addDialog3bii").open();}						    
				    	           }),
				    	        ]
				            })
				        ],
				columns: [
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Field Name"}),
				        	  width: "100px",
				        	  demandPopin: false,
				          }),
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Edit"}),
				        	  width: "50px",
				        	  demandPopin: true,
				        	  minScreenWidth: sap.m.ScreenSize.Medium
				          }), 
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Delete"}),
				        	  width: "50px",
				        	  demandPopin: true,
				        	  minScreenWidth: sap.m.ScreenSize.Medium
				          })          
				]
			});	
			var oTemplate3bii = new sap.m.ColumnListItem({
				cells: [
				         new sap.m.Text({text: "{data>Field}"}),		        
				         new sap.m.Button({
				        	      icon: "sap-icon://edit",
							      press:function(oEvent) {
								  oController.editPress3bii(oEvent);
							    },
				          }),		        
				         new sap.m.Button("del3bii",{
				        	     icon: "sap-icon://delete",
							     press:function(oEvent) {
									oController.deletePress3bii(oEvent);
							    },
				        })
				     ]		
			});
			
			oTable3bii.bindAggregation("items","data>/Document/ApplicationControls/PossibleValueFields/DataField",oTemplate3bii);
			//Add form starts here    
		    var addForm3bii = new sap.ui.layout.form.SimpleForm(
					'addform3bii', {
						maxContainerCols : 2,
						editable : true,
						content : [                        
						              new sap.ui.core.Title({text:"Field Details"}),
						              new sap.m.Label({text:"Field Name"}),
						              new sap.m.Input({value:""})
						     ]

					});

			var osavebtn3bii = new sap.m.Button("Save3bii", {     
				text : "Save",
				tap : [ oController.save3bii, oController ]
			});

			var ocancelbtn3bii = new sap.m.Button("Cancel3bii", {
				text : "Cancel",
				tap : [ oController.cancel3bii, oController ]

			});

			var addDialog3bii = new sap.m.Dialog("addDialog3bii", {
				title : "Add new Field12",
				modal : true,
				contentWidth : "1em",
				buttons : [osavebtn3bii, ocancelbtn3bii ],  
				content : [addForm3bii]
			});
			
			//edit form starts here    
		    var editForm3bii = new sap.ui.layout.form.SimpleForm(
					'editform3bii', {
						maxContainerCols : 2,
						editable : true,				
						content : [                        
						              new sap.ui.core.Title({text:"PossibleValueFields"}),
						              new sap.m.Label({text:"FieldName"}),
						              new sap.m.Input({value:"{data>Field}"}),				             

						     ]
					});
		    
		    var oeditbtn3bii = new sap.m.Button("update3bii", {
				text : "Update",
				tap : [ oController.Update3bii, oController ]
			});

			var oclosebtn3bii = new sap.m.Button("Close3bii", {
				text : "Close",
				tap : [ oController.Close3bii, oController ],
			});

			var editD3bii = new sap.m.Dialog("editDialog3bii", {
				title : "Edit Fields11",
				modal : true,
				contentWidth : "1em",
				visible : false,
				buttons : [ oeditbtn3bii, oclosebtn3bii ],
				content : [editForm3bii]
			});			
		
		
		// panel 3b containing form 3bi & table 3bii
	var OP3b = new sap.m.Panel("opanel3b",{
		width: "auto",
		expandable : true,
		expanded : false,
		headerToolbar: [
		          new sap.m.Toolbar({
		        	  content: [
		        	       new sap.m.Title({text: "Possible Values"}),
		        	       new sap.m.ToolbarSpacer()
		        	            ]
		          })      
		                ],
		content:[oForm3bi,oTable3bii]
	
	});
	

	// Content of attachment panel 3c start here	
							var	oRadioButtonGroup3c = new sap.m.RadioButtonGroup("RB3c",{			
			                          
										selectedIndex: sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['AttachmentFunction'],
										select :function(){
											oController.attachment(oRadioButtonGroup3c.getSelectedButton().getText());
										},
			                              columns: 2,
	                                      buttons: [
	                                           new sap.m.RadioButton({
	                                                 text: "Y",
	                                                 key : "Y",
	                                             }), 
	                                          new sap.m.RadioButton({
	                                              text: "N",
	                                              key : "N",
	                                         }),  
	                             ],
			
			 layoutData: new sap.ui.layout.ResponsiveFlowLayoutData()  //{weight: 9}
		});
		          
		oFormcontainer3c = new sap.ui.layout.form.FormContainer("FC3c",{
			formElements: [
				new sap.ui.layout.form.FormElement({
					label: "Attachment",
					fields: [oRadioButtonGroup3c]
		        }),
			]
		});
		
		var oLayout3c = new sap.ui.layout.form.ResponsiveGridLayout();
		var oForm3c = new sap.ui.layout.form.Form("F3c",{		
		                                   layout: oLayout3c,
		                                   formContainers: [oFormcontainer3c]
		                           });
		
	var OP3c = new sap.m.Panel("opanel3c",{
		width: "auto",
		expandable : true,
		expanded : false,
		headerToolbar: [
		          new sap.m.Toolbar({
		        	  content: [
		        	       new sap.m.Title({text: "Attachment"}),
		        	       new sap.m.ToolbarSpacer()
		        	            ]
		          })      
		                ],
		content:[oForm3c]
	
	});
	
// content of Server update panel 3d start here
	oRadioButtonGroup3d = new sap.m.RadioButtonGroup("RB3d",{
		selectedIndex: sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['ServerUpdate'],
		select :function(){
			oController.serverUpdate(oRadioButtonGroup3d.getSelectedButton().getText());
		},
        columns: 2,
        buttons: [
             new sap.m.RadioButton({
                   text: "Y",
            }), 
            new sap.m.RadioButton({
                text: "N",
         }),  
    ],

  layoutData: new sap.ui.layout.ResponsiveFlowLayoutData()  //{weight: 9}
   });

    oFormcontainer3d = new sap.ui.layout.form.FormContainer("FC3d",{
   formElements: [
            new sap.ui.layout.form.FormElement({
            label: "ServerUpdate",
            fields: [oRadioButtonGroup3d]
           }),
         ]
      });

    var oLayout3d = new sap.ui.layout.form.ResponsiveGridLayout();
    var oForm3d = new sap.ui.layout.form.Form("F3d",{		
    layout: oLayout3d,
    formContainers: [oFormcontainer3d]
     });
	
	var OP3d = new sap.m.Panel("opanel3d",{
		width: "auto",
		expandable : true,
		expanded : false,
		headerToolbar: [
		          new sap.m.Toolbar({
		        	  content: [
		        	       new sap.m.Title({text: "Server Update"}),
		        	       new sap.m.ToolbarSpacer()
		        	            ]
		          })      
		                ],
		content:[oForm3d]
	
	});
	
// Content of google map panel 3e start here
	// A- form 3ei
	var oSimpleForm3ei = new sap.ui.layout.form.SimpleForm("sf3ei",{				
		layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
        minWidth: 1024,
	    maxContainerCols: 2,
	    editable: false,
	    labelSpanL: 3,
	    labelSpanM: 3,
	    emptySpanL: 4,
	    emptySpanM: 4,
	    columnsL:   1,
	    columnsM:   1,		
		content:[                        
             new sap.m.Label({text :'GoogleMap'}),
			 new sap.m.Text({text: "{data>/Document/ApplicationControls/GoogleMap}"}),        							 
			 new sap.m.Label({text :'GoogleMapTab'}),
			 new sap.m.Text({text: "{data>/Document/ApplicationControls/GoogleMapTab}"})
		 ]
	});
	                      
	var OP3ei= new sap.m.Panel("opanel3ei",{
        width: "auto",
        headerToolbar: [
         		       new sap.m.Toolbar({		    	
         		           content:  [
                                new sap.m.Title({text: "GoogleMapOption"}),       
         		               new sap.m.ToolbarSpacer(),
         		               new sap.m.Button({
         			        	  icon: "sap-icon://edit",
         						  press:function(oEvent) {
         							 oController.editPress3ei(oEvent);}						    
         		    	           }),
         		    	        ]
         		            })
         		        ],
        content:[oSimpleForm3ei] 
     });  
	
	//edit form starts here    
    var editForm3ei = new sap.ui.layout.form.SimpleForm(
			'editform3ei', {
				maxContainerCols : 2,
				editable : true,				
				content : [                        
				              new sap.ui.core.Title({text:"GoogleMapOption"}),
				              new sap.m.Label({text:"GoogleMap"}),
				              new sap.m.Select('googleMap',{
					              selectedKey: "{data>/Document/ApplicationControls/GoogleMap}",
			            	      items: [
			                           new sap.ui.core.Item({key:"Y",text: "Y"}) ,
			                           new sap.ui.core.Item({key:"N",text: "N"}),
			                 ]
			              }),	
				              new sap.m.Label({text:"GoogleMapTab"}),			       
				              new sap.m.Select('mapTab',{
				            	  selectedKey: "{data>/Document/ApplicationControls/GoogleMapTab}",
			            	      items: [
			                           new sap.ui.core.Item({key:"Tab1",text: "Tab1"}) ,
			                           new sap.ui.core.Item({key:"Tab2",text: "Tab2"}),
			                           new sap.ui.core.Item({key:"Tab3",text: "Tab3"}) ,
			                           new sap.ui.core.Item({key:"Tab4",text: "Tab4"})
			                 ]
			              }),	
				              ]
			});
    
    var oeditbtn3ei = new sap.m.Button("update3ei", {
		text : "Update123",
		tap : [ oController.Update3ei, oController ]
	});

	var oclosebtn3ei = new sap.m.Button("Close3ei", {
		text : "Close",
		tap : [ oController.Close3ei, oController ],
	});

	var editD3ei = new sap.m.Dialog("editDialog3ei", {
		title : "Edit App",
		modal : true,
		contentWidth : "1em",
		visible : false,
		buttons : [ oeditbtn3ei, oclosebtn3ei ],
		content : [editForm3ei]
	});
                                           			
	
	
	
	//B- table 3eii starts here
	var oTable3eii = new sap.m.Table({
			id: "table3eii",
			width: "auto",
			growing: true,
			growingThreshold: 20,
			growingScrollToLoad: true,
			headerToolbar: [
			       new sap.m.Toolbar({		    	
			           content:  [
	                       new sap.m.Title({text: "Map Fields"}),       
			               new sap.m.ToolbarSpacer(),
			               new sap.m.Button({
				        	  icon: "sap-icon://add",
							  press:function() {
								  sap.ui.getCore().byId("addDialog3eii").open();}						    
			    	           }),
			    	        ]
			            })
			        ],
			columns: [
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Field Name"}),
			        	  width: "100px",
			        	  demandPopin: false,
			          }),
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Edit"}),
			        	  width: "50px",
			        	  demandPopin: true,
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          }), 
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Delete"}),
			        	  width: "50px",
			        	  demandPopin: true,
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          })          
			]
		});	
		var oTemplate3eii = new sap.m.ColumnListItem({
			cells: [
			         new sap.m.Text({text: "{data>Field}"}),		        
			         new sap.m.Button({
			        	      icon: "sap-icon://edit",
						      press:function(oEvent) {
							  oController.editPress3eii(oEvent);
						    },
			          }),		        
			         new sap.m.Button("del3eii",{
			        	     icon: "sap-icon://delete",
						     press:function(oEvent) {
								oController.deletePress3eii(oEvent);
						    },
			        })
			     ]		
		});
		
		oTable3eii.bindAggregation("items","data>/Document/ApplicationControls/MapFields/DataField",oTemplate3eii);
		//Add form starts here    
	    var addForm3eii = new sap.ui.layout.form.SimpleForm(
				'addform3eii', {
					maxContainerCols : 2,
					editable : true,
					content : [                        
					              new sap.ui.core.Title({text:"Field Details"}),
					              new sap.m.Label({text:"DataField"}),
					              new sap.m.Input({value:""})		              				             				                            
					     ]

				});

		var osavebtn3eii = new sap.m.Button("Save3eii", {     
			text : "Save",
			tap : [ oController.save3eii, oController ]
		});

		var ocancelbtn3eii = new sap.m.Button("Cancel3eii", {
			text : "Cancel",
			tap : [ oController.cancel3eii, oController ]

		});

		var addDialog3eii = new sap.m.Dialog("addDialog3eii", {
			title : "Add new Field13",
			modal : true,
			contentWidth : "1em",
			buttons : [osavebtn3eii, ocancelbtn3eii ],  
			content : [addForm3eii]
		});
		
		//edit form starts here    
	    var editForm3eii = new sap.ui.layout.form.SimpleForm(
				'editform3eii', {
					maxContainerCols : 2,
					editable : true,				
					content : [                        
					              new sap.ui.core.Title({text:"MapFields"}),
					              new sap.m.Label({text:"DataField"}),
					              new sap.m.Input({value:"{data>Field}"}),				             

					     ]
				});
	    
	    var oeditbtn3eii = new sap.m.Button("update3eii", {
			text : "Update",
			tap : [ oController.Update3eii, oController ]
		});

		var oclosebtn3eii = new sap.m.Button("Close3eii", {
			text : "Close",
			tap : [ oController.Close3eii, oController ],
		});

		var editD3eii = new sap.m.Dialog("editDialog3eii", {
			title : "Edit Fields22",
			modal : true,
			contentWidth : "1em",
			visible : false,
			buttons : [ oeditbtn3eii, oclosebtn3eii ],
			content : [editForm3eii]
		});			
	
	
	// panel 3e containing panel 3ei & table 3eii
	var OP3e = new sap.m.Panel("opanel3e",{
		width: "auto",
		expandable : true,
		expanded : false,
		headerToolbar: [
		          new sap.m.Toolbar({
		        	  content: [
		        	       new sap.m.Title({text: "Google Map"}),
		        	       new sap.m.ToolbarSpacer()
		        	            ]
		          })      
		                ],
		content:[OP3ei, oTable3eii]
	
	});
	
// content of Application filter panel 3f start here
	var oTable3f = new sap.m.Table({
			id: "table3f",
			width: "auto",
			growing: true,
			growingThreshold: 10,
			growingScrollToLoad: true,
			headerToolbar: [
			       new sap.m.Toolbar({		    	
			           content:  [
	                       new sap.m.Title({text: "Filters"}),       
			               new sap.m.ToolbarSpacer(),
			               new sap.m.Button({
				        	  icon: "sap-icon://add",
							  press:function() {
								  sap.ui.getCore().byId("addDialog3f").open();}						    
			    	           }),
			    	        ]
			            })
			        ],
			columns: [
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Field"}),
			        	  width: "100px",
			          }),
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "value"}),
			        	  width: "100px",
			        	  demandPopin: false,
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          }),
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "visibility"}),
			        	  width: "100px",
			          }),
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Edit"}),
			        	  width: "50px",
			        	  demandPopin: true,
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          }), 
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Delete"}),
			        	  width: "50px",
			        	  demandPopin: true,
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          })          
			]
		});	
		var oTemplate3f = new sap.m.ColumnListItem({
			cells: [
			         new sap.m.Text({text: "{data>name}"}),		        
			         new sap.m.Text({text: "{data>value}"}),
			         new sap.m.Text({text: "{data>visibility}"}),			        		        		        		        			        		        
			         new sap.m.Button({
			        	      icon: "sap-icon://edit",
						      press:function(oEvent) {
							  oController.editPress3f(oEvent);
						    },
			          }),		        
			         new sap.m.Button("del3f",{
			        	     icon: "sap-icon://delete",
						     press:function(oEvent) {
								oController.deletePress3f(oEvent);
						    },
			        })
			     ]		
		});
		
		oTable3f.bindAggregation("items","data>/Document/ApplicationControls/ApplicationFilters/Parameter",oTemplate3f);
		
		//Add form starts here    
	    var addForm3f = new sap.ui.layout.form.SimpleForm(
				'formId3f', {
					maxContainerCols : 2,
					editable : true,
					content : [                        
					              new sap.ui.core.Title({text:"Filters"}),
					              new sap.m.Label({text:"Parameter name"}),
					              new sap.m.Input({value:""}),
					              new sap.m.Label({text:"value"}),
					              new sap.m.Input({value:""}),
					              new sap.m.Label({text:"visibility"}),
					              new sap.m.Select({
				            	  items: [
				                    new sap.ui.core.Item({key: "Include",text: "Include"}) ,
				                    new sap.ui.core.Item({Key: "Exclude",text: "Exclude"})
				                 ]
				              })					              
					     ]

				});

		var oSave3f = new sap.m.Button("Save3f", {     
			text : "Save",
			tap : [ oController.save3f, oController ]
		});

		var oCancel3f = new sap.m.Button("Cancel3f", {
			text : "Cancel",
			tap : [ oController.cancel3f, oController ]

		});

		var addDialog3f = new sap.m.Dialog("addDialog3f", {
			title : "Add new field14",
			modal : true,
			contentWidth : "1em",
			buttons : [oSave3f, oCancel3f ],  
			content : [addForm3f]
		});
		
		//edit form starts here    
	    var editForm3f = new sap.ui.layout.form.SimpleForm(
				'editform3f', {
					maxContainerCols : 2,
					editable : true,				
					content : [                        
					              new sap.ui.core.Title({text:"Filters"}),
					              new sap.m.Label({text:"Parameter Name"}),
					              new sap.m.Input({value:"{data>name}"}),
					              new sap.m.Label({text:"value"}),				       
					              new sap.m.Input({value:"{data>value}"}),
					              new sap.m.Label({text:"visibility"}),
					              new sap.m.Select({
					              id: "vis",
					              selectedKey: "{data>visibility}",
				            	  items: [
				                    new sap.ui.core.Item({key:"Include",text: "Include"}) ,
				                    new sap.ui.core.Item({key:"Exclude",text: "Exclude"})
				                 ]
				              })					              
					     ]
				});
	    
	    var oeditbtn3f = new sap.m.Button("update3f", {
			text : "Update",
			tap : [ oController.Update3f, oController ]
		});

		var oclosebtn3f = new sap.m.Button("Close3f", {
			text : "Close",
			tap : [ oController.Close3f, oController ],
		});

		var editD3f = new sap.m.Dialog("editDialog3f", {
			title : "Edit filters",
			modal : true,
			contentWidth : "1em",
			visible : false,
			buttons : [ oeditbtn3f, oclosebtn3f ],
			content : [editForm3f]
		});
	
	var OP3f = new sap.m.Panel("opanel3f",{
		width: "auto",
		expandable : true,
		expanded : false,
		headerToolbar: [
		          new sap.m.Toolbar({
		        	  content: [
		        	       new sap.m.Title({text: "Application Filter"}),
		        	       new sap.m.ToolbarSpacer()
		        	            ]
		          })      
		                ],
		content:[oTable3f]
	
	});
	
// Content of color coding panel 3g start here
	   //A- color coding option 3gi -	
	oRadioButtonGroup3gi = new sap.m.RadioButtonGroup("RB3gi",{
		
		selectedIndex: sap.ui.getCore().byId("listId1").getModel('data').oData['Document']['ApplicationControls']['ColorCoding'],
		select :function(){
			oController.colorcoding(oRadioButtonGroup3gi.getSelectedButton().getText());
		},
		                              columns: 2,
                                      buttons: [
                                           new sap.m.RadioButton({
                                                 text: "Y",
                         
                                          }), 
                                          new sap.m.RadioButton({
                                              text: "N",
                         
                                       }),  
                             ],
		
		 layoutData: new sap.ui.layout.ResponsiveFlowLayoutData()  //{weight: 9}
	});
	          
	oFormcontainer3gi = new sap.ui.layout.form.FormContainer("FC3gi",{
		formElements: [
			new sap.ui.layout.form.FormElement({
				label: "ColorCoding",
				fields: [oRadioButtonGroup3gi]
	        }),
		]
	});
	
	var oLayout3gi = new sap.ui.layout.form.ResponsiveGridLayout();
	var oForm3gi = new sap.ui.layout.form.Form("F3gi",{
	  layout: oLayout3gi,
		formContainers: [oFormcontainer3gi]
	});
	
	//B- table 3gii starts here
	var oTable3gii = new sap.m.Table({
		//	inset: true,
			id: "table3gii",
			width: "auto",
			growing: true,
			growingThreshold: 20,
			growingScrollToLoad: true,
			headerToolbar: [
			       new sap.m.Toolbar({		    	
			           content:  [
	                       new sap.m.Title({text: "Color Coded Fields"}),       
			               new sap.m.ToolbarSpacer(),
			               new sap.m.Button({
				        	  icon: "sap-icon://add",
							  press:function() {
								  sap.ui.getCore().byId("addDialog3gii").open();}						    
			    	           }),
			    	        ]
			            })
			        ],
			columns: [
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Field Name"}),
			        	  width: "100px",
			        	  demandPopin: false,
//			        	  minScreenWidth: sap.m.ScreenSize.Medium
//			        	  minScreenWidth: Tablet
			          }),
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Edit"}),
			        	  width: "50px",
			        	  demandPopin: true,
			        //	  minScreenWidth: Tablet
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          }), 
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Delete"}),
			        	  width: "50px",
			        	  demandPopin: true,
			        //	  minScreenWidth: Tablet
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          })          
			]
		});	
		var oTemplate3gii = new sap.m.ColumnListItem({
		//	type: sap.m.ListType.Active,
			cells: [
			         new sap.m.Text({text: "{data>Field}"}),		        
			         new sap.m.Button({
			        	      icon: "sap-icon://edit",
						      press:function(oEvent) {
							  oController.editPress3gii(oEvent);
						    },
			          }),		        
			         new sap.m.Button("del3gii",{
			        	     icon: "sap-icon://delete",
						     press:function(oEvent) {
								oController.deletePress3gii(oEvent);
						    },
			        })
			     ]		
		});
		
		oTable3gii.bindAggregation("items","data>/Document/ApplicationControls/ColorCodedFields/DataField",oTemplate3gii);
		//Add form starts here    
	    var addForm3gii = new sap.ui.layout.form.SimpleForm(
				'addform3gii', {
					maxContainerCols : 2,
					editable : true,
					content : [                        
					              new sap.ui.core.Title({text:"Field Details"}),
					              new sap.m.Label({text:"DataField"}),
					              new sap.m.Input({value:""})		              				             				                            
					     ]

				});

		var osavebtn3gii = new sap.m.Button("Save3gii", {     
			text : "Save",
			tap : [ oController.save3gii, oController ]
		});

		var ocancelbtn3gii = new sap.m.Button("Cancel3gii", {
			text : "Cancel",
			tap : [ oController.cancel3gii, oController ]

		});

		var addDialog3gii = new sap.m.Dialog("addDialog3gii", {
			title : "Add new Field 123",
			modal : true,
			contentWidth : "1em",
			buttons : [osavebtn3gii, ocancelbtn3gii ],  
			content : [addForm3gii]
		});
		
		//edit form starts here    
	    var editForm3gii = new sap.ui.layout.form.SimpleForm(
				'editform3gii', {
					maxContainerCols : 2,
					editable : true,				
					content : [                        
					              new sap.ui.core.Title({text:"ColorCodedFields"}),
					              new sap.m.Label({text:"DataField"}),
					              new sap.m.Input({value:"{data>Field}"}),				             

					     ]
				});
	    
	    var oeditbtn3gii = new sap.m.Button("update3gii", {
			text : "Update",
			tap : [ oController.Update3gii, oController ]
		});

		var oclosebtn3gii = new sap.m.Button("Close3gii", {
			text : "Close",
			tap : [ oController.Close3gii, oController ],
		});

		var editD3gii = new sap.m.Dialog("editDialog3gii", {
			title : "Edit Fields33",
			modal : true,
			contentWidth : "1em",
			visible : false,
			buttons : [ oeditbtn3gii, oclosebtn3gii ],
			content : [editForm3gii]
		});			
	
	
	// panel 3g containing form 3gi & table 3gii
	var OP3g = new sap.m.Panel("opanel3g",{
		width: "auto",
		expandable : true,
		expanded : false,
		headerToolbar: [
		          new sap.m.Toolbar({
		        	  content: [
		        	       new sap.m.Title({text: "Color Coding"}),
		        	       new sap.m.ToolbarSpacer()
		        	            ]
		          })      
		                ],
		content:[oForm3gi,oTable3gii]
	
	});
	// Master panel containing all other panels	
	var OP3 = new sap.m.Panel("opanel3",{
		width: "auto",
		headerToolbar: [
		          new sap.m.Toolbar({
		        	  content: [
		        	       new sap.m.Title({text: "Application Controls"}),
		        	       new sap.m.ToolbarSpacer()
		        	            ]
		          })      
		                ],
		content:[OP3a,OP3b,OP3c,OP3d,OP3e,OP3f,OP3g]
	
	});
//Application controls tab 3 ends here
	
// List screen control tab4 starts here
	var oTable4 = new sap.m.Table({
		//	inset: true,
			id: "table4",
			width: "auto",
		//	class: sapUiResponsiveMargin,
			growing: true,
			growingThreshold: 10,
			growingScrollToLoad: true,
			headerToolbar: [
			       new sap.m.Toolbar({		    	
			           content:  [
	                       new sap.m.Title({text: "List Screen Controls"}),       
			               new sap.m.ToolbarSpacer(),
			    	        ]
			            })
			        ],
			columns: [
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Name"}),
			        	  width: "100px",
			          }),
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Flag"}),
			        	  width: "100px",
			        	  demandPopin: false,
			  //      	  minScreenWidth: Tablet
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          }),
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Edit"}),
			        	  width: "50px",
			        	  demandPopin: true,
			        //	  minScreenWidth: Tablet
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          }),         
			]
		});	
		var oTemplate4 = new sap.m.ColumnListItem({
		//	type: sap.m.ListType.Active,
			cells: [
			         new sap.m.Text({text: "{data>name}"}),		        
			         new sap.m.Text({text: "{data>flag}"}),			        		        		        		        			        		        
			         new sap.m.Button({
			        	      icon: "sap-icon://edit",
						      press:function(oEvent) {
							  oController.editPress4(oEvent);
						    },
			          }),		        
			     ]		
		});
		
		oTable4.bindAggregation("items","data>/Document/ListScreenControls/ItemActionButtons/Action",oTemplate4);		
	//edit form starts here    
	    var editForm4 = new sap.ui.layout.form.SimpleForm(
				'editform4', {
					maxContainerCols : 2,
					editable : true,				
					content : [                        
					              new sap.ui.core.Title({text:"Control Details"}),
					              new sap.m.Label({text:"Name"}),
					              new sap.m.Input({value:"{data>name}"}),
					              new sap.m.Label({text:"Flag"}),				       
					              new sap.m.Select({
					            	  id: "flag4",
						              selectedKey: "{data>flag}",
				            	      items: [
				                           new sap.ui.core.Item({key:"Show",text: "Show"}) ,
				                           new sap.ui.core.Item({key:"Hide",text: "Hide"}),
				                 ]
				              })	
					              					              
					     ]
				});
	    
	    var oeditbtn4 = new sap.m.Button("update4", {
			text : "Update",
			tap : [ oController.Update4, oController ]
		});

		var oclosebtn4 = new sap.m.Button("Close4", {
			text : "Close",
			tap : [ oController.Close4, oController ],
		});

		var editD4 = new sap.m.Dialog("editDialog4", {
			title : "Edit Control",
			modal : true,
			contentWidth : "1em",
			visible : false,
			buttons : [ oeditbtn4, oclosebtn4 ],
			content : [editForm4]
		});		
// List screen control tab4 ends here
		
// Filters tab 5 starts here
	// A- sorting 5a
		
//	var items=[];		// code when data was in array without property name
//		var DF=	sap.ui.getCore().byId("app").getModel('data').oData.Document.Filters.Sorting.DataField;
//		for (var i = 0; i < DF.length; i++) {
//			items[i]=Array(new sap.m.ColumnListItem({
//				cells: [
//				         new sap.m.Text({text: DF[i]}),		        				         		        		        		        		        			        		        
//				         new sap.m.Button({
//				               icon: "sap-icon://edit",
//				               press:function(oEvent) {
//				               oController.editPress5a(oEvent);
//				               }
//				              }),		        
//				         new sap.m.Button({
//				               icon: "sap-icon://delete",
//				               press:function(oEvent) {
//				            	oController.deletePress5a(oEvent);
//				              },
//				              })
//				             ]		
//				})	
//			);
//		}		
//		
//		var oTable5a = new sap.m.Table("table5a", {	        
//			    width: "auto",
//			//	class: sapUiResponsiveMargin,
//			    headerToolbar: [
//			 			       new sap.m.Toolbar({		    	
//			 			           content:  [
//			 	                       new sap.m.Title({text: "Sorting"}),       
//			 			               new sap.m.ToolbarSpacer(),
//			 			               new sap.m.Button({
//			 				        	  icon: "sap-icon://add",
//			 							  press:function() {
//			 								  sap.ui.getCore().byId("addDialog5a").open();
//			 								  }						    
//			 			    	           }),
//			 			    	        ]
//			 			            })
//			 			        ],
//				columns: [
//				          new sap.m.Column({
//				        	  header: new sap.m.Label({text: "DataField"}),
//				        	  width: "100px",
//				          }),
//				          
//				          new sap.m.Column({
//				        	  header: new sap.m.Label({text: "Action1"}),
//				        	  width: "50px",
//				        	  demandPopin: true,
//				        //	  minScreenWidth: Tablet
//				        	  minScreenWidth: sap.m.ScreenSize.Medium
//				          }), 
//				          new sap.m.Column({
//				        	  header: new sap.m.Label({text: "Action2"}),
//				        	  width: "50px",
//				        	  demandPopin: true,
//				        //	  minScreenWidth: Tablet
//				        	  minScreenWidth: sap.m.ScreenSize.Medium
//				          })          
//				       ],
//				items:    [items]
//                        				       
//			});	
//	
	
		
		var oTable5a = new sap.m.Table({
			//	inset: true,
				id: "table5a",
				width: "auto",
			//	class: sapUiResponsiveMargin,
				growing: true,
				growingThreshold: 10,
				growingScrollToLoad: true,
				headerToolbar: [
				       new sap.m.Toolbar({		    	
				           content:  [
		                       new sap.m.Title({text: "Sort By"}),       
				               new sap.m.ToolbarSpacer(),
				               new sap.m.Button({
					        	  icon: "sap-icon://add",
								  press:function() {
									  sap.ui.getCore().byId("addDialog5a").open();}						    
				    	           }),
				    	        ]
				            })
				        ],
				columns: [
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Data Field"}),
				        	  width: "100px",
				          }),
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Edit"}),
				        	  width: "50px",
				        	  demandPopin: true,
				        //	  minScreenWidth: Tablet
				        	  minScreenWidth: sap.m.ScreenSize.Medium
				          }), 
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Delete"}),
				        	  width: "50px",
				        	  demandPopin: true,
				        //	  minScreenWidth: Tablet
				        	  minScreenWidth: sap.m.ScreenSize.Medium
				          })          
				]
			});	
			var oTemplate5a = new sap.m.ColumnListItem({
			//	type: sap.m.ListType.Active,
				cells: [
				         new sap.m.Text({text: "{data>Field}"}),		        			        		        		        		        			        		        
				         new sap.m.Button({
				        	      icon: "sap-icon://edit",
							      press:function(oEvent) {
								  oController.editPress5a(oEvent);
							    },
				          }),		        
				         new sap.m.Button("del5a",{
				        	     icon: "sap-icon://delete",
							     press:function(oEvent) {
									oController.deletePress5a(oEvent);
							    },
				        })
				     ]		
			});
			
			oTable5a.bindAggregation("items","data>/Document/Filters/Sorting/DataField",oTemplate5a);
		
			var OP5a= new sap.m.Panel("opanel5a",{
		        width: "auto",
		        expandable : true,
				expanded : false,
				design : sap.m.ToolbarDesign.Transparent,
		        headerToolbar: [
		         		       new sap.m.Toolbar({		    	
		         		           content:  [
		                                new sap.m.Title({text: "Sorting"}),       
		         		               new sap.m.ToolbarSpacer()   //,
//		         		               new sap.m.Button({
//		         			        	  icon: "sap-icon://add",
//		         			        	 press:function() {
//		   								  sap.ui.getCore().byId("addDialog5a").open();
//		         			        		 }						    
//		   			    	           }),
		   			    	        ]
		   			            })
		   			        ],
		        content:[oTable5a]    
		     });
			
		//Add form starts here    
	    var addForm5a = new sap.ui.layout.form.SimpleForm(
				'addform5a', {
					maxContainerCols : 2,
					editable : true,
					content : [                        
					              new sap.ui.core.Title({text:"Add Field"}),
					              new sap.m.Label({text:"Field"}),
					              new sap.m.Input({value:""})					             	                            
					     ]

				});

		var osavebtn5a = new sap.m.Button("Save5a", {     
			text : "Save",
			tap : [ oController.save5a, oController ]
		});

		var ocancelbtn5a = new sap.m.Button("Cancel5a", {
			text : "Cancel",
			tap : [ oController.cancel5a, oController ]

		});

		var addDialog5a = new sap.m.Dialog("addDialog5a", {
			title : "Add new field5",
			modal : true,
			contentWidth : "1em",
			buttons : [osavebtn5a, ocancelbtn5a ],  
			content : [addForm5a]
		});
		
		//edit form starts here    
	    var editForm5a = new sap.ui.layout.form.SimpleForm(
				'editform5a', {
					maxContainerCols : 2,
					editable : true,				
					content : [                        
					              new sap.ui.core.Title({text:"Edit Field"}),
					              new sap.m.Label({text:"Field"}),
					              new sap.m.Input({value:"{data>Field}"})
					     ]
				});
	    
	    var oeditbtn5a = new sap.m.Button("update5a", {
			text : "Update",
			tap : [ oController.Update5a, oController ]
		});

		var oclosebtn5a = new sap.m.Button("Close5a", {
			text : "Close",
			tap : [ oController.Close5a, oController ],
		});

		var editD5a = new sap.m.Dialog("editDialog5a", {
			title : "Edit Field",
			modal : true,
			contentWidth : "1em",
			visible : false,
			buttons : [ oeditbtn5a, oclosebtn5a ],
			content : [editForm5a]
		});	
// sorting ends here
		
// B- date filter starts here
		var oSimpleForm5bi = new sap.ui.layout.form.SimpleForm("sf5bi",{				
			layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
	        minWidth: 1024,
		    maxContainerCols: 2,
		    editable: false,
		//    title: "App Details",
		    labelSpanL: 3,
		    labelSpanM: 3,
		    emptySpanL: 4,
		    emptySpanM: 4,
		    columnsL:   1,
		    columnsM:   1,		
			content:[                        
	             new sap.m.Label({text :'DataField'}),
				 new sap.m.Text({text: "{data>/Document/Filters/DateFilter/DataField}"}),        							 
				 new sap.m.Label({text :'Sequence'}),
				 new sap.m.Text({text: "{data>/Document/Filters/DateFilter/Sequence}"})
			 ]
		});
		                      
		var OP5bi= new sap.m.Panel("opanel5bi",{
	        width: "auto",
//	        expandable : true,
//			expanded : false,
	        headerToolbar: [
	         		       new sap.m.Toolbar({		    	
	         		           content:  [
	                               new sap.m.Title({text: "Date Field"}),       
	         		               new sap.m.ToolbarSpacer(),
	         		               new sap.m.Button({
	         			        	  icon: "sap-icon://edit",
	         						  press:function(oEvent) {
	         							 oController.editPress5bi(oEvent);}						    
	         		    	           }),
	         		    	        ]
	         		            })
	         		        ],
	        content:[oSimpleForm5bi] 
	     });  
		
		//edit form starts here    
	    var editForm5bi = new sap.ui.layout.form.SimpleForm(
				'editform5bi', {
					maxContainerCols : 2,
					editable : true,				
					content : [                        
					              new sap.ui.core.Title({text:"Edit"}),
					              new sap.m.Label({text:"DataField"}),
					              new sap.m.Input({value:"{data>/Document/Filters/DateFilter/DataField}"}),
					              new sap.m.Label({text:"Sequence"}),				       
					              new sap.m.Input({value:"{data>/Document/Filters/DateFilter/Sequence}"}),
					     ]
				});
	    
	    var oeditbtn5bi = new sap.m.Button("update5bi", {
			text : "Update",
			tap : [ oController.Update5bi, oController ]
		});

		var oclosebtn5bi = new sap.m.Button("Close5bi", {
			text : "Close",
			tap : [ oController.Close5bi, oController ],
		});

		var editD5bi = new sap.m.Dialog("editDialog5bi", {
			title : "Edit App",
			modal : true,
			contentWidth : "1em",
			visible : false,
			buttons : [ oeditbtn5bi, oclosebtn5bi ],
			content : [editForm5bi]
		});
		
		// option table
		var oTable5b = new sap.m.Table({
			//	inset: true,
				id: "table5b",
				width: "auto",
			//	class: sapUiResponsiveMargin,
				growing: true,
				growingThreshold: 10,
				growingScrollToLoad: true,
				headerToolbar: [
				       new sap.m.Toolbar({		    	
				           content:  [
		                       new sap.m.Title({text: "Filter Options"}),       
				               new sap.m.ToolbarSpacer(),
				               new sap.m.Button({
					        	  icon: "sap-icon://add",
								  press:function() {
									  sap.ui.getCore().byId("addDialog5b").open();}						    
				    	           }),
				    	        ]
				            })
				        ],
				columns: [
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Options"}),
				        	  width: "100px",
				          }),
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Edit"}),
				        	  width: "50px",
				        	  demandPopin: true,
				        //	  minScreenWidth: Tablet
				        	  minScreenWidth: sap.m.ScreenSize.Medium
				          }), 
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Delete"}),
				        	  width: "50px",
				        	  demandPopin: true,
				        //	  minScreenWidth: Tablet
				        	  minScreenWidth: sap.m.ScreenSize.Medium
				          })          
				]
			});	
			var oTemplate5b = new sap.m.ColumnListItem({
			//	type: sap.m.ListType.Active,
				cells: [
				         new sap.m.Text({text: "{data>Option}"}),		        			        		        		        		        			        		        
				         new sap.m.Button({
				        	      icon: "sap-icon://edit",
							      press:function(oEvent) {
								  oController.editPress5b(oEvent);
							    },
				          }),		        
				         new sap.m.Button("del5b",{
				        	     icon: "sap-icon://delete",
							     press:function(oEvent) {
									oController.deletePress5b(oEvent);
							    },
				        })
				     ]		
			});
			
			oTable5b.bindAggregation("items","data>/Document/Filters/DateFilter/Options",oTemplate5b);
		
//			var OP5b= new sap.m.Panel("opanel5b",{
//		        width: "auto",
//		        expandable : true,
//				expanded : false,
//				design : sap.m.ToolbarDesign.Transparent,
//		        headerToolbar: [
//		         		       new sap.m.Toolbar({		    	
//		         		           content:  [
//		                                new sap.m.Title({text: "DateFilter"}),       
//		         		               new sap.m.ToolbarSpacer(),
//		         		               new sap.m.Button({
//		         			        	  icon: "sap-icon://add",
//		         			        	 press:function() {
//		   								  sap.ui.getCore().byId("addDialog5b").open();
//		         			        		 }						    
//		   			    	           }),
//		   			    	        ]
//		   			            })
//		   			        ],
//		        content:[oTable5b]    
//		     });
			
		//Add form starts here    
	    var addForm5b = new sap.ui.layout.form.SimpleForm(
				'addform5b', {
					maxContainerCols : 2,
					editable : true,
					content : [                        
					              new sap.ui.core.Title({text:"Add Option"}),
					              new sap.m.Label({text:"Option"}),
					       //       new sap.m.Input({value:""})	
					              new sap.m.Select({
						              id: "op",
						           //   selectedKey: "{data>Option}",
					            	  items: [
					                    new sap.ui.core.Item({key:"In Last 1 day",text: "In Last 1 day"}) ,
					                    new sap.ui.core.Item({key:"In Last 3 day",text: "In Last 3 day"}),
					                    new sap.ui.core.Item({key:"In Last 7 day",text: "In Last 7 day"}) ,
					                    new sap.ui.core.Item({key:"In Last 15 day",text: "In Last 15 day"}),
					                    new sap.ui.core.Item({key:"In Last 30 day",text: "In Last 30 day"}),
					                    new sap.ui.core.Item({key:"In Next 1 day",text: "In Next 1 day"}) ,
					                    new sap.ui.core.Item({key:"In Next 3 day",text: "In Next 3 day"}),
					                    new sap.ui.core.Item({key:"In Next 7 day",text: "In Next 7 day"}) ,
					                    new sap.ui.core.Item({key:"In Next 15 day",text: "In Next 15 day"}),
					                    new sap.ui.core.Item({key:"In Next 30 day",text: "In Next 30 day"})
					                 ]
					              })	
					     ]

				});

		var osavebtn5b = new sap.m.Button("Save5b", {     
			text : "Save",
			tap : [ oController.save5b, oController ]
		});

		var ocancelbtn5b = new sap.m.Button("Cancel5b", {
			text : "Cancel",
			tap : [ oController.cancel5b, oController ]

		});

		var addDialog5b = new sap.m.Dialog("addDialog5b", {
			title : "Add new field6",
			modal : true,
			contentWidth : "1em",
			buttons : [osavebtn5b, ocancelbtn5b ],  
			content : [addForm5b]
		});
		
		//edit form starts here    
	    var editForm5b = new sap.ui.layout.form.SimpleForm(
				'editform5b', {
					maxContainerCols : 2,
					editable : true,				
					content : [                        
					              new sap.ui.core.Title({text:"Edit Options"}),
					              new sap.m.Label({text:"Options"}),
					        //      new sap.m.Input({value:"{data>Option}"})
					              new sap.m.Select({
						              id: "opE",
						              selectedKey: "{data>Option}",
					            	  items: [
					                    new sap.ui.core.Item({key:"In Last 1 day",text: "In Last 1 day"}) ,
					                    new sap.ui.core.Item({key:"In Last 3 day",text: "In Last 3 day"}),
					                    new sap.ui.core.Item({key:"In Last 7 day",text: "In Last 7 day"}) ,
					                    new sap.ui.core.Item({key:"In Last 15 day",text: "In Last 15 day"}),
					                    new sap.ui.core.Item({key:"In Last 30 day",text: "In Last 30 day"}),
					                    new sap.ui.core.Item({key:"In Next 1 day",text: "In Next 1 day"}) ,
					                    new sap.ui.core.Item({key:"In Next 3 day",text: "In Next 3 day"}),
					                    new sap.ui.core.Item({key:"In Next 7 day",text: "In Next 7 day"}) ,
					                    new sap.ui.core.Item({key:"In Next 15 day",text: "In Next 15 day"}),
					                    new sap.ui.core.Item({key:"In Next 30 day",text: "In Next 30 day"})
					                 ]
					              })	
					     ]
				});
	    
	    var oeditbtn5b = new sap.m.Button("update5b", {
			text : "Update",
			tap : [ oController.Update5b, oController ]
		});

		var oclosebtn5b = new sap.m.Button("Close5b", {
			text : "Close",
			tap : [ oController.Close5b, oController ],
		});

		var editD5b = new sap.m.Dialog("editDialog5b", {
			title : "Edit Field",
			modal : true,
			contentWidth : "1em",
			visible : false,
			buttons : [ oeditbtn5b, oclosebtn5b ],
			content : [editForm5b]
		});	
		
		var OP5b= new sap.m.Panel("opanel5b",{
	        width: "auto",
	        expandable : true,
			expanded : false,
	        headerToolbar: [
	         		       new sap.m.Toolbar({		    	
	         		           content:  [
	                                new sap.m.Title({text: "Date Filter"}),       
	         		               new sap.m.ToolbarSpacer(),
//	         		               new sap.m.Button({
//	         			        	  icon: "sap-icon://add",
//	         						  press:function(oEvent) {
//	         							 oController.addPress5b(oEvent);}						    
//	         		    	           }),
	         		    	        ]
	         		            })
	         		        ],
	        content:[OP5bi, oTable5b]   //OP5bi, oTable5b
	     });  
		
//C  data filter 5c starts here
		
		// Filter option table
		var oTable5c = new sap.m.Table({
			//	inset: true,
				id: "table5c",
				width: "auto",
			//	class: sapUiResponsiveMargin,
				growing: true,
				growingThreshold: 10,
				growingScrollToLoad: true,
				headerToolbar: [
				       new sap.m.Toolbar({		    	
				           content:  [
		                       new sap.m.Title({text: "Filter Options"}),       
				               new sap.m.ToolbarSpacer(),
				               new sap.m.Button({
					        	  icon: "sap-icon://add",
								  press:function() {
									  sap.ui.getCore().byId("addDialog5c").open();}						    
				    	           }),
				    	        ]
				            })
				        ],
				columns: [
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Data Field"}),
				        	  width: "100px",
				          }),
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Edit"}),
				        	  width: "50px",
				        	  demandPopin: true,
				        //	  minScreenWidth: Tablet
				        	  minScreenWidth: sap.m.ScreenSize.Medium
				          }), 
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Delete"}),
				        	  width: "50px",
				        	  demandPopin: true,
				        //	  minScreenWidth: Tablet
				        	  minScreenWidth: sap.m.ScreenSize.Medium
				          })          
				]
			});	
			var oTemplate5c = new sap.m.ColumnListItem({
			//	type: sap.m.ListType.Active,
				cells: [
				         new sap.m.Text({text: "{data>Field}"}),		        			        		        		        		        			        		        
				         new sap.m.Button({
				        	      icon: "sap-icon://edit",
							      press:function(oEvent) {
								  oController.editPress5c(oEvent);
							    },
				          }),		        
				         new sap.m.Button("del5c",{
				        	     icon: "sap-icon://delete",
							     press:function(oEvent) {
									oController.deletePress5c(oEvent);
							    },
				        })
				     ]		
			});
			
			oTable5c.bindAggregation("items","data>/Document/Filters/DataFilter/DataField",oTemplate5c);
		
//			var OP5c= new sap.m.Panel("opanel5c",{
//		        width: "auto",
//		        expandable : true,
//				expanded : false,
//				design : sap.m.ToolbarDesign.Transparent,
//		        headerToolbar: [
//		         		       new sap.m.Toolbar({		    	
//		         		           content:  [
//		                                new sap.m.Title({text: "DataFilter"}),       
//		         		               new sap.m.ToolbarSpacer(),
//		         		               new sap.m.Button({
//		         			        	  icon: "sap-icon://add",
//		         			        	 press:function() {
//		   								  sap.ui.getCore().byId("addDialog5c").open();
//		         			        		 }						    
//		   			    	           }),
//		   			    	        ]
//		   			            })
//		   			        ],
//		        content:[oTable5c]    
//		     });
			
		//Add form starts here    
	    var addForm5c = new sap.ui.layout.form.SimpleForm(
				'addform5c', {
					maxContainerCols : 2,
					editable : true,
					content : [                        
					              new sap.ui.core.Title({text:"Add Field"}),
					              new sap.m.Label({text:"Field Name"}),
					              new sap.m.Input({value:""})					             	                            
					     ]

				});

		var osavebtn5c = new sap.m.Button("Save5c", {     
			text : "Save",
			tap : [ oController.save5c, oController ]
		});

		var ocancelbtn5c = new sap.m.Button("Cancel5c", {
			text : "Cancel",
			tap : [ oController.cancel5c, oController ]

		});

		var addDialog5c = new sap.m.Dialog("addDialog5c", {
			title : "Add new field7",
			modal : true,
			contentWidth : "1em",
			buttons : [osavebtn5c, ocancelbtn5c ],  
			content : [addForm5c]
		});
		
		//edit form starts here    
	    var editForm5c = new sap.ui.layout.form.SimpleForm(
				'editform5c', {
					maxContainerCols : 2,
					editable : true,				
					content : [                        
					              new sap.ui.core.Title({text:"Edit DataField"}),
					              new sap.m.Label({text:"DataField"}),
					              new sap.m.Input({value:"{data>Field}"})
					     ]
				});
	    
	    var oeditbtn5c = new sap.m.Button("update5c", {
			text : "Update",
			tap : [ oController.Update5c, oController ]
		});

		var oclosebtn5c = new sap.m.Button("Close5c", {
			text : "Close",
			tap : [ oController.Close5c, oController ],
		});

		var editD5c = new sap.m.Dialog("editDialog5c", {
			title : "Edit Field",
			modal : true,
			contentWidth : "1em",
			visible : false,
			buttons : [ oeditbtn5c, oclosebtn5c ],
			content : [editForm5c]
		});	
		
		// form start here 5ci
		var oSimpleForm5ci = new sap.ui.layout.form.SimpleForm("sf5ci",{				
			layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
	        minWidth: 1024,
		    maxContainerCols: 2,
		    editable: false,
		//    title: "App Details",
		    labelSpanL: 3,
		    labelSpanM: 3,
		    emptySpanL: 4,
		    emptySpanM: 4,
		    columnsL:   1,
		    columnsM:   1,		
			content:[                        
	             new sap.m.Label({text :'Sequence'}),
				 new sap.m.Text({text: "{data>/Document/Filters/DataFilter/Sequence}"}),        							 
				 new sap.m.Label({text :'Popup'}),
				 new sap.m.Text({text: "{data>/Document/Filters/DataFilter/Popup}"})
			 ]
		});
		                      
		var OP5ci= new sap.m.Panel("opanel5ci",{
	        width: "auto",
//	        expandable : true,
//			expanded : false,
	        headerToolbar: [
	         		       new sap.m.Toolbar({		    	
	         		           content:  [
	                               new sap.m.Title({text: "PopUp option"}),       
	         		               new sap.m.ToolbarSpacer(),
	         		               new sap.m.Button({
	         			        	  icon: "sap-icon://edit",
	         						  press:function(oEvent) {
	         							 oController.editPress5ci(oEvent);}						    
	         		    	           }),
	         		    	        ]
	         		            })
	         		        ],
	        content:[oSimpleForm5ci] 
	     });  
		
		//edit form starts here    
	    var editForm5ci = new sap.ui.layout.form.SimpleForm(
				'editform5ci', {
					maxContainerCols : 2,
					editable : true,				
					content : [                        
					              new sap.ui.core.Title({text:"Edit"}),
					              new sap.m.Label({text:"Sequence"}),
					              new sap.m.Input({value:"{data>/Document/Filters/DataFilter/Sequence}"}),
					              new sap.m.Label({text:"Popup"}),				       
					              new sap.m.Input({value:"{data>/Document/Filters/DataFilter/Popup}"}),
					     ]
				});
	    
	    var oeditbtn5ci = new sap.m.Button("update5ci", {
			text : "Update",
			tap : [ oController.Update5ci, oController ]
		});

		var oclosebtn5ci = new sap.m.Button("Close5ci", {
			text : "Close",
			tap : [ oController.Close5ci, oController ],
		});

		var editD5ci = new sap.m.Dialog("editDialog5ci", {
			title : "Edit",
			modal : true,
			contentWidth : "1em",
			visible : false,
			buttons : [ oeditbtn5ci, oclosebtn5ci ],
			content : [editForm5ci]
		});
		// panel for table & form
		var OP5c= new sap.m.Panel("opanel5c",{
	        width: "auto",
	        expandable : true,
			expanded : false,
	        headerToolbar: [
	         		       new sap.m.Toolbar({		    	
	         		           content:  [
	                                new sap.m.Title({text: "Data Filter"}),       
	         		               new sap.m.ToolbarSpacer(),
//	         		               new sap.m.Button({
//	         			        	  icon: "sap-icon://add",
//	         						  press:function(oEvent) {
//	         							 oController.addPress5c(oEvent);}						    
//	         		    	           }),
	         		    	        ]
	         		            })
	         		        ],
	        content:[oTable5c,OP5ci]      //oTable5c
	     });  
		
// master panel containing all 3 panels of sorting, date & data filter
		var OP5= new sap.m.Panel("opanel5",{
	        width: "auto",
//	      class: "sapUiResponsiveMargin",
	        headerToolbar: [
	         		       new sap.m.Toolbar({		    	
	         		           content:  [
	                                new sap.m.Title({text: "Filters"}),       
	         		               new sap.m.ToolbarSpacer()
	         		    	        ]
	         		            })
	         		        ],
	        content:[OP5a, OP5b, OP5c] 
	     });  
		
// Filters tab 5 ends here	
		
// DetailPageCtrl tab 6 starts here
		
		var oSimpleForm6a = new sap.ui.layout.form.SimpleForm("sf6a",{				
			layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
		    editable: false,		
			content:[                        
	             new sap.m.Label({text :'DetailPageTab'}),
				 new sap.m.Text({text: "{data>/Document/DetailPageControl/DetailPageTab}"}),        							 
				 new sap.m.Button({
		        	  icon: "sap-icon://edit",
		        	  width: "0.25%",
					  press: function(oEvent) {
						 oController.editPress6a(oEvent);}						    
	    	           })
				 
			 ]
		});
	
		//edit form starts here    
	    var editForm6a = new sap.ui.layout.form.SimpleForm(
				'editform6a', {
					maxContainerCols : 2,
					editable : true,				
					content : [                        
					              new sap.ui.core.Title({text:"Edit"}),
					              new sap.m.Label({text:"DetailPageTab"}),
					         //     new sap.m.Input({value:"{data>/Document/DetailPageControl/DetailPageTab}"}),
					              new sap.m.Select({
						              id: "tabid6a",
						              selectedKey: "{data>/Document/DetailPageControl/DetailPageTab}",
					            	  items: [
					                    new sap.ui.core.Item({key:"Active",text: "Active"}) ,
					                    new sap.ui.core.Item({key:"InActive",text: "InActive"})
					                 ]
					              })		
					              
					     ]
				});
	    
	    var oeditbtn6a = new sap.m.Button("update6a", {
			text : "Update",
			tap : [ oController.Update6a, oController ]
		});

		var oclosebtn6a = new sap.m.Button("Close6a", {
			text : "Close",
			tap : [ oController.Close6a, oController ],
		});

		var editD6a = new sap.m.Dialog("editDialog6a", {
			title : "Edit",
			modal : true,
			contentWidth : "1em",
			visible : false,
			buttons : [ oeditbtn6a, oclosebtn6a ],
			content : [editForm6a]
		});
		
	// table 6b starts here
		var oTable6b = new sap.m.Table({
			//	inset: true,
				id: "table6b",
				width: "auto",
			//	class: sapUiResponsiveMargin,
				growing: true,
			//	growingThreshold: 10,
				growingScrollToLoad: true,
				headerToolbar: [
				       new sap.m.Toolbar({		    	
				           content:  [
		                       new sap.m.Title({text: "Tab Details"}),       
				               new sap.m.ToolbarSpacer(),
				               new sap.m.Button({
					        	  icon: "sap-icon://add",
								  press:function() {
									  sap.ui.getCore().byId("addDialog6b").open();}						    
				    	           }),
				    	        ]
				            })
				        ],
				columns: [
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "TabValue"}),
				        	  width: "100px"
				          }),
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "TabName"}),
				        	  width: "100px",
				          }),
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "TabType"}),
				        	  width: "100px",
				        	  demandPopin: false,
				  //      	  minScreenWidth: Tablet
				        	  minScreenWidth: sap.m.ScreenSize.Medium
				          }),
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "FioriIcon"}),
				        	  width: "100px",
				        	  demandPopin: false,
//				        	  minScreenWidth: sap.m.ScreenSize.Medium
//				        	  minScreenWidth: Tablet
				          }),
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Edit"}),
				        	  width: "50px",
				        	  demandPopin: true,
				        //	  minScreenWidth: Tablet
				        	  minScreenWidth: sap.m.ScreenSize.Medium
				          }), 
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Delete"}),
				        	  width: "50px",
				        	  demandPopin: true,
				        //	  minScreenWidth: Tablet
				        	  minScreenWidth: sap.m.ScreenSize.Medium
				          })          
				]
			});	
			var oTemplate6b = new sap.m.ColumnListItem({
			//	type: sap.m.ListType.Active,
				cells: [
				         new sap.m.Text({text: "{data>value}"}),		        
				         new sap.m.Text({text: "{data>name}"}),
				         new sap.m.Text({text: "{data>type}"}),	
				         new sap.m.Text({text: "{data>fioriicon}"}),
				         new sap.m.Button({
				        	      icon: "sap-icon://edit",
							      press:function(oEvent) {
								  oController.editPress6b(oEvent);
							    },
				          }),		        
				         new sap.m.Button("del6b",{
				        	     icon: "sap-icon://delete",
							     press:function(oEvent) {
									oController.deleteTab(oEvent);
							    },
				        })
				     ]		
			});
			
			oTable6b.bindAggregation("items","data>/Document/DetailPageControl/TabDetails/Tab",oTemplate6b);
			//Add form starts here    
		    var addForm6b = new sap.ui.layout.form.SimpleForm(
					'addform6b', {
						maxContainerCols : 2,
						editable : true,
						content : [                        
						              new sap.ui.core.Title({text:"Tab Details"}),
						              new sap.m.Label({text:"Tab"}),
						      //        new sap.m.Input({value:""}),
						              new sap.m.Select({
					            	  items: [
					                    new sap.ui.core.Item({key: "Tab1",text: "Tab1"}) ,
					                    new sap.ui.core.Item({key: "Tab2",text: "Tab2"}),
					                    new sap.ui.core.Item({key: "Tab3",text: "Tab3"}) ,
					                    new sap.ui.core.Item({key: "Tab4",text: "Tab4"}),
					       //           new sap.ui.core.Item({key: "None",text: "None"})
					                 ]
					              }),
						              new sap.m.Label({text:"Tab Name"}),				       
						              new sap.m.Input({value:""}),
						              new sap.m.Label({text:"Type"}),
						     //         new sap.m.Input({value:""}),
						              new sap.m.Select({
						            	  id: "tyAid6b",
						            	//  selectedKey: "{data>type}",
						            	  items: [
						                    new sap.ui.core.Item({key: "Field",text: "Field"}) ,
						                    new sap.ui.core.Item({key: "Graph",text: "Graph"}),
						                    new sap.ui.core.Item({key: "Items",text: "Items"}) 						       
						                 ]
						              }),
						              new sap.m.Label({text:"FioriIcon"}),
						              new sap.m.Input({value:""}),
						              new sap.m.Label({text:""}),
						              new sap.m.Link({
						            	  text:"For FioriIcons, click here",
						            	  href:"https://sapui5.hana.ondemand.com/iconExplorer.html", 
						            	  target: "_blank"  
						              })
						     ]

					});

			var osavebtn6b = new sap.m.Button("Save6b", {     
				text : "Save",
				tap : [ oController.addTab, oController ]
			});

			var ocancelbtn6b = new sap.m.Button("Cancel6b", {
				text : "Cancel",
				tap : [ oController.cancel6b, oController ]

			});

			var addDialog6b = new sap.m.Dialog("addDialog6b", {
				title : "Add new Tab",
				modal : true,
				contentWidth : "1em",
				buttons : [osavebtn6b, ocancelbtn6b ],  
				content : [addForm6b]
			});
			
			//edit form starts here    
		    var editForm6b = new sap.ui.layout.form.SimpleForm(
					'editform6b', {
						maxContainerCols : 2,
						editable : true,				
						content : [                        
						              new sap.ui.core.Title({text:"Tab Details"}),
						              new sap.m.Label({text:"Tab"}),
						     //         new sap.m.Input({value:"{data>value}"}),
						              new sap.m.Select({
						            	  id: "tabid6b",
						            	  selectedKey: "{data>value}",
						            	  items: [
						                    new sap.ui.core.Item({key: "Tab1",text: "Tab1"}) ,
						                    new sap.ui.core.Item({key: "Tab2",text: "Tab2"}),
						                    new sap.ui.core.Item({key: "Tab3",text: "Tab3"}) ,
						                    new sap.ui.core.Item({key: "Tab4",text: "Tab4"}),
						       //           new sap.ui.core.Item({key: "None",text: "None"})
						                 ]
						              }),
						              new sap.m.Label({text:"Tab Name"}),				       
						              new sap.m.Input({value:"{data>name}"}),
						              new sap.m.Label({text:"Type"}),
						       //       new sap.m.Input({value:"{data>type}"}),
						              new sap.m.Select({
						            	  id: "tyid6b",
						            	  selectedKey: "{data>type}",
						            	  items: [
						                    new sap.ui.core.Item({key: "Field",text: "Field"}) ,
						                    new sap.ui.core.Item({key: "Graph",text: "Graph"}),
						                    new sap.ui.core.Item({key: "Items",text: "Items"}) 						       
						                 ]
						              }),
						              new sap.m.Label({text:"FioriIcon"}),
						              new sap.m.Input({value:"{data>fioriicon}"}),
						              new sap.m.Label({text:""}),
						              new sap.m.Link({
						            	  text:"For FioriIcons, click here",
						            	  href:"https://sapui5.hana.ondemand.com/iconExplorer.html", 
						            	  target: "_blank"  
						              })
						     ]
					});
		    
		    var oeditbtn6b = new sap.m.Button("update6b", {
				text : "Update",
				tap : [ oController.Update6b, oController ]
			});

			var oclosebtn6b = new sap.m.Button("Close6b", {
				text : "Close",
				tap : [ oController.Close6b, oController ],
			});

			var editD6b = new sap.m.Dialog("editDialog6b", {
				title : "Edit Tab details",
				modal : true,
				contentWidth : "1em",
				visible : false,
				buttons : [ oeditbtn6b, oclosebtn6b ],
				content : [editForm6b]
			});			
		// Table 6b ends here	
		// panel containing form 6a & table 6b	
			var OP6 = new sap.m.Panel("opanel6",{
				width: "auto",
				headerToolbar: [
				          new sap.m.Toolbar({
				        	  content: [
				        	       new sap.m.Title({text: "Detail Page Controls"}),
				        	       new sap.m.ToolbarSpacer()
				        	            ]
				          })      
				                ],
				content:[oSimpleForm6a,oTable6b]
			
			});
// DetailPageCtrl tab 6 ends here
		
// Title tab7 starts here	
		var oSimpleForm7 = new sap.ui.layout.form.SimpleForm("sf7",{				
			layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
	        minWidth: 1024,
		    maxContainerCols: 2,
		    editable: false,
		//    title: "App Details",
		    labelSpanL: 3,
		    labelSpanM: 3,
		    emptySpanL: 4,
		    emptySpanM: 4,
		    columnsL:   1,
		    columnsM:   1,		
			content:[                        
	             new sap.m.Label({text :'ApplicationTitle'}),
				 new sap.m.Text({text: "{data>/Document/Title/ApplicationTitle}"}),        							 
				 new sap.m.Label({text :'DetailTitle'}),
				 new sap.m.Text({text: "{data>/Document/Title/DetailTitle}"})
			 ]
		});
		                      
		var OP7= new sap.m.Panel("opanel7",{
	        width: "auto",
//	        class: "sapUiResponsiveMargin",
//	    	expandable:"{device>/system/phone}",
//	    	expanded: true,
	        headerToolbar: [
	         		       new sap.m.Toolbar({		    	
	         		           content:  [
	                               new sap.m.Title({text: "Title"}),       
	         		               new sap.m.ToolbarSpacer(),
	         		               new sap.m.Button({
	         			        	  icon: "sap-icon://edit",
	         						  press:function(oEvent) {
	         							 oController.editPress7(oEvent);}						    
	         		    	           }),
	         		    	        ]
	         		            })
	         		        ],
	        content:[oSimpleForm7] 
	     });  
		
		//edit form starts here    
	    var editForm7 = new sap.ui.layout.form.SimpleForm(
				'editform7', {
					maxContainerCols : 2,
					editable : true,				
					content : [                        
					              new sap.ui.core.Title({text:"Edit Title"}),
					              new sap.m.Label({text:"ApplicationTitle"}),
					              new sap.m.Input({value:"{data>/Document/Title/ApplicationTitle}"}),
					              new sap.m.Label({text:"DetailTitle"}),				       
					              new sap.m.Input({value:"{data>/Document/Title/DetailTitle}"}),
					     ]
				});
	    
	    var oeditbtn7 = new sap.m.Button("update7", {
			text : "Update",
			tap : [ oController.updateTitle, oController ]
		});

		var oclosebtn7 = new sap.m.Button("Close7", {
			text : "Close",
			tap : [ oController.Close7, oController ],
		});

		var editD7 = new sap.m.Dialog("editDialog7", {
			title : "Edit App",
			modal : true,
			contentWidth : "1em",
			visible : false,
			buttons : [ oeditbtn7, oclosebtn7 ],
			content : [editForm7]
		});
	                                           			
	// Title tab7 ends here
	
// ListField tab8 starts here
	var oTable8 = new sap.m.Table({
		//	inset: true,
			id: "table8",
			width: "auto",
		//	class: sapUiResponsiveMargin,
			growing: true,
			growingThreshold: 10,
			growingScrollToLoad: true,
			headerToolbar: [
			       new sap.m.Toolbar({		    	
			           content:  [
	                       new sap.m.Title({text: "List Fields"}),       
			               new sap.m.ToolbarSpacer(),
			               new sap.m.Button({
				        	  icon: "sap-icon://add",
							  press:function() {
								  sap.ui.getCore().byId("addDialog8").open();}						    
			    	           }),
			    	        ]
			            })
			        ],
			columns: [
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Name"}),
			        	  width: "100px",
			          }),
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "ListField"}),
			        	  width: "100px",
			        	  demandPopin: false,
			  //      	  minScreenWidth: Tablet
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          }),
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Sequence"}),
			        	  width: "100px",
//			        	  demandPopin: false,
//			        	  minScreenWidth: sap.m.ScreenSize.Medium
//			        	  minScreenWidth: Tablet
			          }),
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Edit"}),
			        	  width: "50px",
			        	  demandPopin: true,
			        //	  minScreenWidth: Tablet
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          }), 
			          new sap.m.Column({
			        	  header: new sap.m.Label({text: "Delete"}),
			        	  width: "50px",
			        	  demandPopin: true,
			        //	  minScreenWidth: Tablet
			        	  minScreenWidth: sap.m.ScreenSize.Medium
			          })          
			]
		});	
		var oTemplate8 = new sap.m.ColumnListItem({
		//	type: sap.m.ListType.Active,
			cells: [
			         new sap.m.Text({text: "{data>name}"}),		        
			         new sap.m.Text({text: "{data>ListField}"}),
			         new sap.m.Text({text: "{data>Sequence}"}),			        		        		        		        			        		        
			         new sap.m.Button({
			        	      icon: "sap-icon://edit",
						      press:function(oEvent) {
							  oController.editPress8(oEvent);
						    },
			          }),		        
			         new sap.m.Button("del8",{
			        	     icon: "sap-icon://delete",
						     press:function(oEvent) {
								oController.deletePress8(oEvent);
						    },
			        })
			     ]		
		});
		
		oTable8.bindAggregation("items","data>/Document/ListField/element",oTemplate8);
		//Add form starts here    
	    var addForm8 = new sap.ui.layout.form.SimpleForm(
				'addform8', {
					maxContainerCols : 2,
					editable : true,
					content : [                        
					              new sap.ui.core.Title({text:"Field Details"}),
					              new sap.m.Label({text:"FieldName"}),
					              new sap.m.Input({value:""}),
					              new sap.m.Label({text:"ListField"}),
					         //     new sap.m.Input({value:""}),
					              new sap.m.Select({
					            	  items: [
					                    new sap.ui.core.Item({
					                    	key: "Display",
					                    	text: "Display"}) ,
					                    new sap.ui.core.Item({
					                    	key: "Edit",
					                    	text: "Edit"}),
					                 ]
					              }),
					              new sap.m.Label({text:"Sequence"}),
					              new sap.m.Input({value:""}),				              				             				                            
					     ]

				});

		var osavebtn8 = new sap.m.Button("Save8", {     
			text : "Save",
			tap : [ oController.save8, oController ]
		});

		var ocancelbtn8 = new sap.m.Button("Cancel8", {
			text : "Cancel",
			tap : [ oController.cancel8, oController ]

		});

		var addDialog8 = new sap.m.Dialog("addDialog8", {
			title : "Add new field15",
			modal : true,
			contentWidth : "1em",
			buttons : [osavebtn8, ocancelbtn8 ],  
			content : [addForm8]
		});
		
		//edit form starts here    
	    var editForm8 = new sap.ui.layout.form.SimpleForm(
				'editform8', {
					maxContainerCols : 2,
					editable : true,				
					content : [                        
					              new sap.ui.core.Title({text:"Field Details"}),
					              new sap.m.Label({text:"Field Name"}),
					              new sap.m.Input({value:"{data>name}"}),
					              new sap.m.Label({text:"List Field"}),				       
					       //       new sap.m.Input({value:"{data>ListField}"}),
					              new sap.m.Select({
					            	  id: "ef8",
					            	  selectedKey: "{data>ListField}",
					            	  items: [
					                    new sap.ui.core.Item({
					                    	key: "Display",
					                    	text: "Display"}) ,
					                    new sap.ui.core.Item({
					                    	key: "Edit",
					                    	text: "Edit"}),
					                 ]
					              }),
					              new sap.m.Label({text:"Sequence"}),
					              new sap.m.Input({value:"{data>Sequence}"}),
					     ]
				});
	    
	    var oeditbtn8 = new sap.m.Button("update8", {
			text : "Update",
			tap : [ oController.Update8, oController ]
		});

		var oclosebtn8 = new sap.m.Button("Close8", {
			text : "Close",
			tap : [ oController.Close8, oController ],
		});

		var editD8 = new sap.m.Dialog("editDialog8", {
			title : "Edit List Field",
			modal : true,
			contentWidth : "1em",
			visible : false,
			buttons : [ oeditbtn8, oclosebtn8 ],
			content : [editForm8]
		});			
	
// ListField tab8 ends here
		
// DetailScreen tab9 starts here
		var oTable9 = new sap.m.Table({
			//	inset: true,
				id: "table9",
				width: "auto",
			//	class: sapUiResponsiveMargin,
				growing: true,
				growingThreshold: 10,
				growingScrollToLoad: true,
				headerToolbar: [
				       new sap.m.Toolbar({		    	
				           content:  [
		                       new sap.m.Title({text: "Detail Screen Fields"}),       
				               new sap.m.ToolbarSpacer(),
				               new sap.m.Button({
					        	  icon: "sap-icon://add",
								  press:function() {
									  sap.ui.getCore().byId("addDialog9").open();}						    
				    	           }),
				    	        ]
				            })
				        ],
				columns: [
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Name"}),
				        	  width: "100px",
				          }),
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Tab"}),
				        	  width: "100px",
				        	  demandPopin: false,
				  //      	  minScreenWidth: Tablet
				        	  minScreenWidth: sap.m.ScreenSize.Medium
				          }),
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Sequence"}),
				        	  width: "100px",
//				        	  demandPopin: false,
//				        	  minScreenWidth: sap.m.ScreenSize.Medium
//				        	  minScreenWidth: Tablet
				          }),
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Mode"}),
				        	  width: "100px",
//				        	  demandPopin: false,
//				        	  minScreenWidth: sap.m.ScreenSize.Medium
//				        	  minScreenWidth: Tablet
				          }),
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Edit"}),
				        	  width: "50px",
				        	  demandPopin: true,
				        //	  minScreenWidth: Tablet
				        	  minScreenWidth: sap.m.ScreenSize.Medium
				          }), 
				          new sap.m.Column({
				        	  header: new sap.m.Label({text: "Delete"}),
				        	  width: "50px",
				        	  demandPopin: true,
				        //	  minScreenWidth: Tablet
				        	  minScreenWidth: sap.m.ScreenSize.Medium
				          })          
				]
			});	
			var oTemplate9 = new sap.m.ColumnListItem({
			//	type: sap.m.ListType.Active,
				cells: [
				         new sap.m.Text({text: "{data>name}"}),		        
				         new sap.m.Text({text: "{data>Tab}"}),
				         new sap.m.Text({text: "{data>Sequence}"}),	
				         new sap.m.Text({text: "{data>Mode}"}),
				         new sap.m.Button({
				        	      icon: "sap-icon://edit",
							      press:function(oEvent) {
								  oController.editPress9(oEvent);
							    },
				          }),		        
				         new sap.m.Button("del9",{
				        	     icon: "sap-icon://delete",
							     press:function(oEvent) {
									oController.deletePress9(oEvent);
							    },
				        })
				     ]		
			});
			
			oTable9.bindAggregation("items","data>/Document/DetailScreen/element",oTemplate9);
			//Add form starts here    
		    var addForm9 = new sap.ui.layout.form.SimpleForm(
					'addform9', {
						maxContainerCols : 2,
						editable : true,
						content : [                        
						              new sap.ui.core.Title({text:"Field Details"}),
						              new sap.m.Label({text:"Field Name"}),
						              new sap.m.Input({value:""}),
						              new sap.m.Label({text:"Tab"}),
						   //           new sap.m.Input({value:""}),
						              new sap.m.Select({
					            	  items: [
					                    new sap.ui.core.Item({key: "None",text: "None"}) ,
					                    new sap.ui.core.Item({key: "Tab1",text: "Tab1"}),
					                    new sap.ui.core.Item({key: "Tab2",text: "Tab2"}) ,
					                    new sap.ui.core.Item({key: "Tab3",text: "Tab3"}),
						           //   new sap.ui.core.Item({key: "Tab4",text: "Tab4"})
					                 ]
					              }),
						              new sap.m.Label({text:"Sequence"}),
						              new sap.m.Input({value:""}),
						              new sap.m.Label({text:"Mode"}),
						    //          new sap.m.Input({value:""}),
						              new sap.m.Select({
					            	  items: [
					                    new sap.ui.core.Item({key: "Display",text: "Display"}) ,
					                    new sap.ui.core.Item({key: "Edit",text: "Edit"}),
					                 ]
					              })
						     ]

					});

			var osavebtn9 = new sap.m.Button("Save9", {     
				text : "Save",
				tap : [ oController.save9, oController ]
			});

			var ocancelbtn9 = new sap.m.Button("Cancel9", {
				text : "Cancel",
				tap : [ oController.cancel9, oController ]

			});

			var addDialog9 = new sap.m.Dialog("addDialog9", {
				title : "Add new field8",
				modal : true,
				contentWidth : "1em",
				buttons : [osavebtn9, ocancelbtn9 ],  
				content : [addForm9]
			});
			
			//edit form starts here    
		    var editForm9 = new sap.ui.layout.form.SimpleForm(
					'editform9', {
						maxContainerCols : 2,
						editable : true,				
						content : [                        
						              new sap.ui.core.Title({text:"Field Details"}),
						              new sap.m.Label({text:"Field Name"}),
						              new sap.m.Input({value:"{data>name}"}),
						              new sap.m.Label({text:"Tab"}),				       
						          //    new sap.m.Input({value:"{data>Tab}"}),
						              new sap.m.Select({
						              selectedKey:"{data>Tab}",
					            	  items: [
					                    new sap.ui.core.Item({key:"None", text: "None"}) ,
					                    new sap.ui.core.Item({key:"Tab1",text: "Tab1"}),
					                    new sap.ui.core.Item({key:"Tab2",text: "Tab2"}) ,
					                    new sap.ui.core.Item({key:"Tab3",text: "Tab3"}),
					          //          new sap.ui.core.Item({key:"Tab4",text: "Tab4"})
					                 ]
					              }),
						              new sap.m.Label({text:"Sequence"}),
						              new sap.m.Input({value:"{data>Sequence}"}),
						              new sap.m.Label({text:"Mode"}),
						        //      new sap.m.Input({value:"{data>Mode}"}),
						              new sap.m.Select({
						            	  selectedKey: "{data>Mode}",
						            	  items: [
						                    new sap.ui.core.Item({key: "Display",text: "Display"}) ,
						                    new sap.ui.core.Item({key: "Edit",text: "Edit"}),
						                 ]
						              }),
						     ]
					});
		    
		    var oeditbtn9 = new sap.m.Button("update9", {
				text : "Update",
				tap : [ oController.Update9, oController ]
			});

			var oclosebtn9 = new sap.m.Button("Close9", {
				text : "Close",
				tap : [ oController.Close9, oController ],
			});

			var editD9 = new sap.m.Dialog("editDialog9", {
				title : "Edit Field",
				modal : true,
				contentWidth : "1em",
				visible : false,
				buttons : [ oeditbtn9, oclosebtn9 ],
				content : [editForm9]
			});			
// DetailScreen tab9 ends here
	
// Tab Bar	
	   var oIt1 = new sap.m.IconTabFilter("one",{
		   icon: "sap-icon://target-group",
		   text: "Idendification",
		   Key : "tab1",
		   content: [OP1]
		});
		var oIt2 = new sap.m.IconTabFilter("two",{
		  icon: "sap-icon://expand-group",
		  text: "FieldDef",
		  content: [oTable2 ]
		//  content: [oP2 ]
		});
		var oIt3 = new sap.m.IconTabFilter("three",{
		  icon: "sap-icon://wrench",
		  text: "AppControls",
		  content: [OP3]
		});
		var oIt4 = new sap.m.IconTabFilter("four",{
			  icon: "sap-icon://flag",
			  text: "ListScrCtrl",
			  content: [oTable4 ]
			});
		var oIt5 = new sap.m.IconTabFilter("five",{
			  icon: "sap-icon://filter",
			  text: "Filters",
			  content: [OP5 ]
			});
		var oIt6 = new sap.m.IconTabFilter("six",{
			  icon: "sap-icon://projector",
			  text: "DetailPageCtrl",
			  content: [OP6]
			});
		var oIt7 = new sap.m.IconTabFilter("seven",{
			  icon: "sap-icon://tags",
			  text: "Title",
			  content: [OP7]
			});
		var oIt8 = new sap.m.IconTabFilter("eight",{
			  icon: "sap-icon://menu2",
			  text: "ListField",
			  content: [oTable8 ]
			});
		var oIt9 = new sap.m.IconTabFilter("nine",{
			  icon: "sap-icon://folder",
			  text: "detailFields",
			  content: [oTable9 ]
			});
		
		var oITB = new sap.m.IconTabBar({
            id: "idIconTabBarNoIcons",
//          expanded: "{device>/isNoPhone}",
       //     class: sapUiResponsiveContentPadding,
            items: [ oIt1, oIt2, oIt3, oIt4,oIt5,oIt6,oIt7,oIt8,oIt9 ]			                    
         });
		
//		var oP1 = new sap.m.Panel({content: [oITB] });

		
		return new sap.m.Page({
			title: "Config File",
			showNavButton : "{device>/isPhone}",
			navButtonPress : function() {
				oController.handleNavButtonPress();

			},
			content: [objHdr,oITB,editD1,editD2,editD3aii,editD3bii,editD3ei,editD3eii,editD3f,editD3gii,
			          editD4,editD5a,editD5bi,editD5b,editD5c,editD5ci,
			          editD6a,editD6b,editD7,editD8,editD9],   
		    footer: new sap.m.Bar({contentRight : []})
						
		});
	}

});
