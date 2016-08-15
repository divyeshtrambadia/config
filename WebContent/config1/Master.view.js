sap.ui.jsview("config1.Master", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf config1.Master
	*/ 
	getControllerName : function() {
		return "config1.Master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf config1.Master
	*/ 
	createContent : function(oController) {
		//Search field	
//		var sf = new sap.m.SearchField({
//            placeholder: "Search",
//            showRefreshButton: true,
//            class:"sapUiSmallMargin",
//            liveChange: oController.PR_Search,
//            search: oController.PR_Search,
//            tooltip: "Search for objects..",
//        });
		
//  List start here
		var oList = new sap.m.List({
			    id: "listId1",
				mode: sap.m.ListMode.SingleSelectMaster,
				class:"sapMH4FontSize", 
				select: function() {
					oController.itemSelected();
				    },
				});
		 var oItemTemplate = new sap.m.ObjectListItem({
			        id: "sList1",
			        title: "{Apps>ApplicationID}",
			   //   number : "{Apps>User Specific}",
			        attributes : [new sap.m.ObjectAttribute({
				              text : "{Apps>Role}"
			                             })   
		                            ],
			        firstStatus : new sap.m.ObjectStatus({
                    text : "{Apps>eStatus}"
                	 
                    }),
	
		      });
	//	oList.bindAggregation("items","Apps>/collection",oItemTemplate);
		oList.bindItems({
			         path: "Apps>/collection",
			 //        footer :new sap.m.Bar({contentRight : [btn]}),
			         template: oItemTemplate
		         });
		
   // Add button
		 var btn = new sap.m.Button({			
					icon : "sap-icon://add",
				//	text: "Add",
				//	press : function() {
				//		sap.ui.getCore().byId("addDialog").open();
		        //         }
						 press:function(oEvent) {
 							 oController.addPress(oEvent);
 							 }											
                  });
		 

		 
  //Add form starts here
	        
	        var addForm = new sap.ui.layout.form.SimpleForm(
					'addformId', {
						maxContainerCols : 2,
						editable : true,
						content : [ 
			            //      new sap.ui.core.Title({text:"Add"}),
                              new sap.m.Label({text:"Object"}),
                              new sap.m.Input({value:"{dummy>/Document/Identification/Object}"}),
                              new sap.m.Label({text:"PartnerNo"}),				       
                              new sap.m.Input({value:"{dummy>/Document/Identification/PartnerNo}"}),
                              new sap.m.Label({text:"AppName"}),
                              new sap.m.Input({value:""}),
                              new sap.m.Label({text:"Role"}),				       
                              new sap.m.Input({value:""}),
			
			            ]                        						             
					 });

			var oButton2 = new sap.m.Button("Save", {
				text : "Save",
				tap : [ oController.save, oController ]
			});

			var oButton3 = new sap.m.Button("Cancel", {
				text : "Cancel",
				tap : [ oController.cancel, oController ]

			});

			var addDialog = new sap.m.Dialog("addDialog", {
				title : "Add new app",
				modal : true,
				visible : false,
				contentWidth : "1em",
				buttons : [ oButton2, oButton3 ],
				content : [addForm]
			});

		
 		return new sap.m.Page({
			title: "App Names",
			footer :new sap.m.Bar({contentRight : [btn]}),
		//	content: [sf, oList]
 		  content: [oList]
		});
	}


});