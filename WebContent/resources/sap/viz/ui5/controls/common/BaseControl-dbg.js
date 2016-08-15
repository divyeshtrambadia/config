/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2016 SAP SE. All rights reserved
 */

// Provides control sap.viz.ui5.controls.common.BaseControl.
sap.ui.define(['sap/ui/core/Control','sap/viz/library'],
	function(Control, library) {
	"use strict";

	/**
	 * Constructor for a new ui5/controls/common/BaseControl.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given 
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * An abstract base class for all VIZ controls
	 * @extends sap.ui.core.Control
	 *
	 * @constructor
	 * @public
	 * @since 1.22.0
	 * @name sap.viz.ui5.controls.common.BaseControl
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var BaseControl = Control.extend("sap.viz.ui5.controls.common.BaseControl", /** @lends sap.viz.ui5.controls.common.BaseControl.prototype */ { metadata : {

		library : "sap.viz",
		properties : {

			/**
			 * Configuration for initialization to VizControl. This property could only set via settings parameter in Constructor.
			 */
			uiConfig : {type : "object", group : "Misc", defaultValue : null},

			/**
			 * Width of the VizControl as a CSS size.
			 */
			width : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '640px'},

			/**
			 * Height of the VizControl as a CSS size.
			 */
			height : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '480px'}
		}
	}});


	BaseControl.prototype.init = function() {
		this._app$ = null;
		this._controls = {};

		this._handlers = {
			'resize' : null
		};

		this._theme = null;
		this._locale = null;

		this._pendingRerendering = false;
		// Load resources.
		this._resourceLoaded = false;
		sap.viz._initializeVIZControls(this instanceof sap.viz.ui5.VizContainer,jQuery.proxy(function(success) {
			this._resourceLoaded = success;

			this.invalidate();
			// Set timeout to assure applySetting done
			setTimeout(function() {
				if (!this.getUIArea()) {
					this._render();
				}
			}.bind(this), 0);
		}, this));
	};

	BaseControl.prototype.exit = function() {
		this._app$ = null;

		this._deregister();

		for ( var keyword in this._controls) {
			this._controls[keyword].destroy();
		}
	};

	BaseControl.prototype.onBeforeRendering = function() {
		this._deregister();
	};

	BaseControl.prototype.onAfterRendering = function() {
		this._render();
	};

	BaseControl.prototype.onThemeChanged = function() {
		if (this._theme !== sap.ui.getCore().getConfiguration().getTheme()) {
		    this.invalidate();
	        if (!this._pendingRerendering) {
	            this._render();
	        }
		}
	};

	BaseControl.prototype.onLocalizationChanged = function() {
		if (this._locale !== sap.ui.getCore().getConfiguration().getLocale()) {
			this._render();
		}
	};

	BaseControl.prototype._render = function() {
		if (this._resourceLoaded && this.getDomRef()) {
			this._pendingRerendering = false;

			this._theme = sap.ui.getCore().getConfiguration().getTheme();
			this._locale = sap.ui.getCore().getConfiguration().getLocale();

			if (!this._app$) {
				this._app$ = jQuery(document.createElement('div')).appendTo(
						this.getDomRef()).addClass('ui5-viz-controls-app');
				jQuery(this._app$).attr("data-sap-ui-preserve", true);

				this._validateSize();
				this._createChildren();
			} else {
				this._app$.appendTo(this.getDomRef());
				this._validateSize();
				this._updateChildren();
			}
			this._register();
		}
	};

	BaseControl.prototype._createChildren = function() {
		// Should override by implementation
	};
	BaseControl.prototype._updateChildren = function() {
		// Should override by implementation
	};

	BaseControl.prototype._deregister = function() {
		if (this._handlers.resize) {
			sap.ui.core.ResizeHandler.deregister(this._handlers.resize);
		}
		this._handlers.resize = null;
	};

	BaseControl.prototype._register = function() {
		this._deregister();
		this._handlers.resize = sap.ui.core.ResizeHandler.register(
				this.getDomRef(), jQuery.proxy(this._validateSize, this));
	};

	BaseControl.prototype._validateSize = function() {
		// Should override by implementation
	};

	BaseControl.prototype.invalidate = function() {
		Control.prototype.invalidate.apply(this, arguments);

		if (this.getUIArea()) {
			this._pendingRerendering = true;
		}
	};


	return BaseControl;

});
