jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.ToolbarDesign");
jQuery.sap.require("sap.m.Toolbar");
jQuery.sap.require("sap.ui.core.IconPool");

jQuery.sap.declare("sap.config1.Component");
sap.ui.core.UIComponent.extend("sap.config1.Component",{
	metadata: {
		

		   
		routing:{
			
			config:{				
				viewType: "JS",
                viewPath: "config1",    
                targetControl: "splitApp",  // id of splitapp which is inside app view
                targetAggregation: "pages",
                clearTarget: false,
                transition: "slide"
			},
			
			
			routes:[
			        
			        {
					pattern: "",					
					name: "default",
		        	view: "Master",
		        	targetAggregation: "masterPages"

				},
				
				 {
					pattern: "config",
					name: "detail",					
		        	view: "Detail",
		        	targetAggregation: "detailPages"

				},
				
				
			        
		  ],
		  
	  }
	},
//	},                          // remove this

        init: function(){
        	
        	jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
    		jQuery.sap.require("sap.ui.core.routing.HashChanger");
    		
    		// call create content
    		sap.ui.core.UIComponent.prototype.init.apply(this,arguments);
    		this._router = this.getRouter();
    		
    		//initialize router
    		this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
    		this._router.initialize();
        },
        
        createContent: function(){
        	
        	 //var baseUrl ='proxy/http/localhost/smartphonebiz/action/wbser/'; // Local
        	//var baseUrl ="proxy/http/smartphonebizapps.com/smartphonebizdevelopment/action/wbser/";  // Local to live
        	 var baseUrl ="http://smartphonebizapps.com/smartphonebizdevelopment/action/wbser/"; // Live

        	 oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local);
			 oStorage.put('BASEURL',baseUrl);
        	
        	var oView = sap.ui.view({
        		id: "app",     // define an id for this view (main view of the app)
        		viewName: "config1.main",  // main view 
        		type: "JS",
        		viewData: {component: this}
        	});
        	
        	
        	$.ajax({
				url : oStorage.get("BASEURL")+'approle_ws.php',
				dataType : 'jSon',
				type : 'GET',
				data : {
					appName : 'appName',
					userRole : 'userRole'
				},
				success : function(configresponse) {
					var oconfigListFieldModel = new sap.ui.model.json.JSONModel(configresponse);
					oView.setModel(oconfigListFieldModel,'Apps');
				}
			});
        	
    		return oView;
        }
        
        
});