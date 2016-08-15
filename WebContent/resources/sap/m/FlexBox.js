/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./FlexBoxStylingHelper','./library','sap/ui/core/Control'],function(q,F,l,C){"use strict";var a=C.extend("sap.m.FlexBox",{metadata:{library:"sap.m",properties:{height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:''},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:''},displayInline:{type:"boolean",group:"Appearance",defaultValue:false},direction:{type:"sap.m.FlexDirection",group:"Appearance",defaultValue:sap.m.FlexDirection.Row},fitContainer:{type:"boolean",group:"Appearance",defaultValue:false},renderType:{type:"sap.m.FlexRendertype",group:"Misc",defaultValue:sap.m.FlexRendertype.Div},justifyContent:{type:"sap.m.FlexJustifyContent",group:"Appearance",defaultValue:sap.m.FlexJustifyContent.Start},alignItems:{type:"sap.m.FlexAlignItems",group:"Appearance",defaultValue:sap.m.FlexAlignItems.Stretch},wrap:{type:"sap.m.FlexWrap",group:"Appearance",defaultValue:sap.m.FlexWrap.NoWrap},alignContent:{type:"sap.m.FlexAlignContent",group:"Appearance",defaultValue:sap.m.FlexAlignContent.Stretch}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.core.Control",multiple:true,singularName:"item"}}}});a.prototype.init=function(){if(this instanceof sap.m.HBox&&(this.getDirection()!==sap.m.FlexDirection.Row||this.getDirection()!==sap.m.FlexDirection.RowReverse)){this.setDirection('Row');}if(this instanceof sap.m.VBox&&(this.getDirection()!==sap.m.FlexDirection.Column||this.getDirection()!==sap.m.FlexDirection.ColumnReverse)){this.setDirection('Column');}};a.prototype.addItem=function(i){this.addAggregation("items",i);if(i&&!(i instanceof sap.m.FlexBox)){i.attachEvent("_change",this.onItemChange,this);}return this;};a.prototype.insertItem=function(i,I){this.insertAggregation("items",i,I);if(i&&!(i instanceof sap.m.FlexBox)){i.attachEvent("_change",this.onItemChange,this);}return this;};a.prototype.removeItem=function(i){var I=this.removeAggregation("items",i,true);if(I&&!(I instanceof sap.m.FlexBox)){I.detachEvent("_change",this.onItemChange,this);if(I instanceof sap.m.FlexBox){I.$().remove();}else{I.$().parent().remove();}}return I;};a.prototype.removeAllItems=function(){var I=this.getItems();for(var i=0;i<I.length;i++){I[i].detachEvent("_change",this.onItemChange,this);}return this.removeAllAggregation("items");};a.prototype.onItemChange=function(c){if(c.getParameter("name")!=="visible"||(this.getRenderType()!==sap.m.FlexRendertype.List&&this.getRenderType()!==sap.m.FlexRendertype.Div)){return;}var i=sap.ui.getCore().byId(c.getParameter("id")),w=null;if(i.getLayoutData()){w=q.sap.byId(i.getLayoutData().getId());}else{w=q.sap.byId(sap.ui.core.RenderPrefixes.Invisible+i.getId()).parent();}if(c.getParameter("newValue")){w.removeClass("sapUiHiddenPlaceholder").removeAttr("aria-hidden");}else{w.addClass("sapUiHiddenPlaceholder").attr("aria-hidden","true");}};a.prototype.setDisplayInline=function(i){this.setProperty("displayInline",i,true);this.$().toggleClass("sapMFlexBoxInline",this.getDisplayInline());return this;};a.prototype.setDirection=function(v){this.setProperty("direction",v,true);if(this.getDirection()===sap.m.FlexDirection.Column||this.getDirection()===sap.m.FlexDirection.ColumnReverse){this.$().removeClass("sapMHBox").addClass("sapMVBox");}else{this.$().removeClass("sapMVBox").addClass("sapMHBox");}if(this.getDirection()===sap.m.FlexDirection.RowReverse||this.getDirection()===sap.m.FlexDirection.ColumnReverse){this.$().addClass("sapMFlexBoxReverse");}else{this.$().removeClass("sapMFlexBoxReverse");}return this;};a.prototype.setFitContainer=function(v){this.setProperty("fitContainer",v,true);this.$().toggleClass("sapMFlexBoxFit",this.getFitContainer());return this;};a.prototype.setWrap=function(v){var o=this.getWrap();this.setProperty("wrap",v,true);this.$().removeClass("sapMFlexBoxWrap"+o).addClass("sapMFlexBoxWrap"+this.getWrap());return this;};a.prototype.setJustifyContent=function(v){var o=this.getJustifyContent();this.setProperty("justifyContent",v,true);this.$().removeClass("sapMFlexBoxJustify"+o).addClass("sapMFlexBoxJustify"+this.getJustifyContent());return this;};a.prototype.setAlignItems=function(v){var o=this.getAlignItems();this.setProperty("alignItems",v,true);this.$().removeClass("sapMFlexBoxAlignItems"+o).addClass("sapMFlexBoxAlignItems"+this.getAlignItems());return this;};a.prototype.setAlignContent=function(v){var o=this.getAlignContent();this.setProperty("alignContent",v,true);this.$().removeClass("sapMFlexBoxAlignContent"+o).addClass("sapMFlexBoxAlignContent"+this.getAlignContent());return this;};a.prototype.setHeight=function(v){this.setProperty("height",v,true);this.$().css("height",this.getHeight());return this;};a.prototype.setWidth=function(v){this.setProperty("width",v,true);this.$().css("width",this.getWidth());return this;};a.prototype.getAccessibilityInfo=function(){var c=this.getItems();var b=[];for(var i=0;i<c.length;i++){if(c[i].getAccessibilityInfo){var I=c[i].getAccessibilityInfo();if(I){b.push(I);}}}return{children:b};};return a;},true);
