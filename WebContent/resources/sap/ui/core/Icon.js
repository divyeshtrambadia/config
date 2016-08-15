/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','../Device','./Control','./IconPool','./library'],function(q,D,C,I,l){"use strict";var a=l.IconColor;var b=C.extend("sap.ui.core.Icon",{metadata:{library:"sap.ui.core",properties:{src:{type:"sap.ui.core.URI",group:"Data",defaultValue:null},size:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},color:{type:"string",group:"Appearance",defaultValue:null},hoverColor:{type:"string",group:"Appearance",defaultValue:null},activeColor:{type:"string",group:"Appearance",defaultValue:null},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},backgroundColor:{type:"string",group:"Appearance",defaultValue:null},hoverBackgroundColor:{type:"string",group:"Appearance",defaultValue:null},activeBackgroundColor:{type:"string",group:"Appearance",defaultValue:null},decorative:{type:"boolean",group:"Accessibility",defaultValue:true},useIconTooltip:{type:"boolean",group:"Accessibility",defaultValue:true},alt:{type:"string",group:"Accessibility",defaultValue:null},noTabStop:{type:"boolean",group:"Accessibility",defaultValue:false}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{press:{}}}});b.prototype.onmousedown=function(e){if(this.hasListeners("press")||this.hasListeners("tap")){e.setMarked();}var A=this.getActiveColor(),s=this.getActiveBackgroundColor(),i;if(A||s){if(!e.targetTouches||(e.targetTouches&&e.targetTouches.length===1)){i=this.$();i.addClass("sapUiIconActive");if(A){this._addColorClass(A,"color");}if(s){this._addColorClass(s,"background-color");}}}};b.prototype.onmouseup=function(e){if(!e.targetTouches||(e.targetTouches&&e.targetTouches.length===0)){this.$().removeClass("sapUiIconActive");this._restoreColors();}};b.prototype.onmouseover=function(){var h=this.getHoverColor(),H=this.getHoverBackgroundColor();if(h){this._addColorClass(h,"color");}if(H){this._addColorClass(H,"background-color");}};b.prototype.onmouseout=function(){this._restoreColors();};b.prototype.onclick=function(){if(this._bPressFired){return;}this.firePress({});};b.prototype.onkeydown=function(e){if(e.which===q.sap.KeyCodes.SPACE||e.which===q.sap.KeyCodes.ENTER){e.preventDefault();var i=this.$(),A=this.getActiveColor(),s=this.getActiveBackgroundColor();i.addClass("sapUiIconActive");if(A){this._addColorClass(A,"color");}if(s){this._addColorClass(s,"background-color");}}};b.prototype.onkeyup=function(e){if(e.which===q.sap.KeyCodes.SPACE||e.which===q.sap.KeyCodes.ENTER){this.$().removeClass("sapUiIconActive");this._restoreColors();this.firePress({});}};b.prototype._restoreColors=function(){this._addColorClass(this.getColor()||"","color");this._addColorClass(this.getBackgroundColor()||"","background-color");};b.prototype.setSrc=function(s){var i=I.getIconInfo(s);if(i){var $=this.$();$.css("font-family",i.fontFamily);$.attr("data-sap-ui-icon-content",i.content);$.toggleClass("sapUiIconMirrorInRTL",!i.suppressMirroring);var t=this.getTooltip_AsString(),c=this.getAriaLabelledBy(),A=this.getAlt(),u=this.getUseIconTooltip();if(t||u){$.attr("title",t||i.text||i.name);}else{$.attr("title",null);}if(c.length===0){if(A||t||u){$.attr("aria-label",A||t||i.text||i.name);}else{$.attr("aria-label",null);}}}this.setProperty("src",s,!!i);return this;};b.prototype.setWidth=function(w){this.setProperty("width",w,true);this.$().css("width",w);return this;};b.prototype.setHeight=function(h){this.setProperty("height",h,true);this.$().css({"height":h,"line-height":h});return this;};b.prototype.setSize=function(s){this.setProperty("size",s,true);this.$().css("font-size",s);return this;};b.prototype.setColor=function(c){this.setProperty("color",c,true);this._addColorClass(c,"color");return this;};b.prototype._addColorClass=function(c,s){var i=this.$(),t=this;var d="";if(s==="color"){d="sapUiIconColor";}else if(s==="background-color"){d="sapUiIconBGColor";}else{return;}q.each(a,function(p,P){t.removeStyleClass(d+P);});if(c in a){i.css(s,"");this.addStyleClass(d+c);}else{i.css(s,c);}};b.prototype.setActiveColor=function(c){return this.setProperty("activeColor",c,true);};b.prototype.setHoverColor=function(c){return this.setProperty("hoverColor",c,true);};b.prototype.setBackgroundColor=function(c){this.setProperty("backgroundColor",c,true);this._addColorClass(c,"background-color");return this;};b.prototype.setActiveBackgroundColor=function(c){return this.setProperty("activeBackgroundColor",c,true);};b.prototype.setHoverBackgroundColor=function(c){return this.setProperty("hoverBackgroundColor",c,true);};b.prototype.attachPress=function(){var m=Array.prototype.slice.apply(arguments);m.unshift("press");C.prototype.attachEvent.apply(this,m);if(this.hasListeners("press")){this.$().toggleClass("sapUiIconPointer",true).attr({role:"button",tabindex:this.getNoTabStop()?undefined:0});}return this;};b.prototype.detachPress=function(){var m=Array.prototype.slice.apply(arguments);m.unshift("press");C.prototype.detachEvent.apply(this,m);if(!this.hasListeners("press")){this.$().toggleClass("sapUiIconPointer",false).attr({role:this.getDecorative()?"presentation":"img"}).removeAttr("tabindex");}return this;};b.prototype._getAccessibilityAttributes=function(){var i=I.getIconInfo(this.getSrc()),c=this.getAriaLabelledBy(),t=this.getTooltip_AsString(),A=this.getAlt(),u=this.getUseIconTooltip(),m={};if(this.getDecorative()){m.role="presentation";m.hidden="true";}else{if(this.hasListeners("press")){m.role="button";}else{m.role="img";}}if(c.length>0){m.labelledby=c.join(" ");}else if(A||t||(u&&i)){m.label=A||t||i.text||i.name;}return m;};b.prototype.getAccessibilityInfo=function(){if(this.getDecorative()){return null;}var h=this.hasListeners("press");var i=I.getIconInfo(this.getSrc());return{role:h?"button":"img",type:sap.ui.getCore().getLibraryResourceBundle("sap.ui.core").getText(h?"ACC_CTR_TYPE_BUTTON":"ACC_CTR_TYPE_IMAGE"),description:this.getAlt()||this.getTooltip_AsString()||(i?i.text||i.name:""),focusable:h};};return b;});
