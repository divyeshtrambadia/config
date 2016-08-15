/* SAP CVOM 4.0 © <2012-2014> SAP SE. All rights reserved. Build Version 1.4.0, Build context N/A */

if(requirejs&&requirejs.s&&requirejs.s.contexts&&requirejs.s.contexts._){window.__sap_viz_internal_requirejs_nextTick__
=requirejs.s.contexts._.nextTick;requirejs.s.contexts._.nextTick=function(f){f();};}(function(g){var
 o=Object.prototype.toString;function a(i){return o.call(i)==='[object Function]';}function b(i){return
 o.call(i)==='[object Array]';}function m(t,s){for(var h in s){if(s.hasOwnProperty(h)){t[h]=s[h];}}if
(a(t)&&a(s)){t=s;}return t;}function e(j,k){for(var i=0,n=j.split("/"),p=g,c;c=n[i];++i){if(i<n.length-1
){p[c]=p[c]||{};}else{p[c]=p[c]?m(p[c],k):k;}p=p[c];}}var d={'sap/viz/vizservices/service/bvr/BVRService'
:'sap/viz/vizservices/BVRService','sap/viz/vizservices/service/feed/FeedService':'sap/viz/vizservices
/FeedService','sap/viz/vizservices/service/binding/BindingService':'sap/viz/vizservices/__internal__
/BindingService','sap/viz/vizservices/service/property/PropertyService':'sap/viz/vizservices/__internal__
/PropertyService','sap/viz/vizservices/service/scale/ScaleService':'sap/viz/vizservices/__internal__
/ScaleService','sap/viz/vizservices/common/Version':'sap/viz/vizservices/VERSION'};if(define&&define
.amd&&!define.__exportNS){var f=define;define=function(n,c,i){if(typeof n!=='string'){i=c;c=n;n=null
;}if(!b(c)){i=c;c=[];}var j=c.indexOf('exports')>=0;var k=j||c.indexOf('require')>=0;if(j){c.push('module'
);var l=i;i=function(){var p=arguments.length-1;var q=arguments[p];var r=l;if(a(l)){var s=[].slice.apply
(arguments,[0,p]);r=l.apply(this,s);}e(d[q.id]||q.id,r);return r;};}if(n&&k){define.__autoLoad.push(n
);}return n?f(n,c,i):f(c,i);};for(var h in f){define[h]=f[h];}define.__exportNS=f;define.__autoLoad=
[];}})(this);define('sap/viz/vizservices/common/feed/FeedConst',[],function(){var F={};F.ID_TRELLIS_ROW
='trellisRow';F.ID_TRELLIS_COLUMN='trellisColumn';F.ID_DATAFRAME='dataFrame';F.ID_TIME_AXIS='timeAxis'
;F.ID_MND='MND';F.TYPE_DIMENSION='Dimension';F.TYPE_MEASURE='Measure';F.TYPE_MND='MND';F.DATA_TYPE_STRING
='String';F.DATA_TYPE_NUMBER='Number';F.DATA_TYPE_DATE='Date';return F;});define('sap/viz/vizservices
/common/utils/OOUtil',[],function(){var O={};O.extend=function(s,a){var b=s.prototype;s.superclass=a
.prototype;var F=function(){};F.prototype=a.prototype;s.prototype=new F();for(var p in b){if(b.hasOwnProperty
(p)){s.prototype[p]=b[p];}}s.prototype.constructor=s;if(a.prototype.constructor==Object.prototype.constructor
){a.prototype.constructor=a;}return s;};return O;});define('sap/viz/vizservices/common/data/DatasetTypeConst'
,[],function(){var D={};D.FLAT_TABLE='FlatTableDataset';D.CROSS_TABLE='CrossTableDataset';D.RAW='RawDataset'
;D.ARRAY_FLAT_TABLE='ArrayOfFlatTableDataset';return D;});define('sap/viz/vizservices/common/metadata
/MetadataBase',['sap/viz/vizservices/common/data/DatasetTypeConst'],function(D){var M=function(r){this
._raw=r;this._support={dataset:{}};this._support.dataset[D.CROSS_TABLE]=false;this._support.dataset[D
.FLAT_TABLE]=false;this._bindingDefs=null;};M.prototype.raw=function(){return this._raw;};M.prototype
.support=function(){return this._support;};M.prototype.removeInvalidProperty=function(s){var a=this.getRawPropertiesDef
();var t=this._raw.type;this._removeInvalidProperty(s,a);};M.prototype.dataType=function(){if(!this._raw
){return null;}if(this._raw.dataType==="sap.viz.api.data.CrosstableDataset"){return D.CROSS_TABLE;}else
 if(this._raw.dataType==="sap.viz.api.data.FlatTableDataset"){return D.FLAT_TABLE;}else if(this._raw
.dataType==="raw"){return D.RAW;}else{return null;}};return M;});define('sap/viz/vizservices/common/metadata
/bindingdef/BindingDefConst',[],function(){var B={};B.TYPE_DIMENSION='Dimension';B.TYPE_MEASURE='Measure'
;B.MND_MODE_NONE='none';B.MND_MODE_SUPPORT_EXCLUSIVELY='supportExclusively',B.MND_MODE_SUPPORT='support'
;return B;});define('sap/viz/vizservices/common/metadata/bindingdef/BindingDef',['sap/viz/vizservices
/common/metadata/bindingdef/BindingDefConst'],function(B){var a=function(s){this._id=s.id;this._name
=s.name;this._type=s.type;this._min=s.min||0;this._max=s.max||Infinity;this._mndEnumerable=s.mndEnumerable
!==undefined?s.mndEnumerable:false;this._mndMode=s.mndMode||B.MND_MODE_NONE;this._bvrPriority=s.bvrPriority
!==undefined?s.bvrPriority:Number.POSITIVE_INFINITY;this._bvrMNDPriority=s.bvrMNDPriority!==undefined
?s.bvrMNDPriority:Number.POSITIVE_INFINITY;};a.prototype.id=function(){return this._id;};a.prototype
.name=function(){return this._name;};a.prototype.type=function(){return this._type;};a.prototype.min
=function(){return this._min;};a.prototype.max=function(){return this._max;};a.prototype.mndEnumerable
=function(){return this._mndEnumerable;};a.prototype.mndMode=function(){return this._mndMode;};a.prototype
.bvrPriority=function(){return this._bvrPriority;};a.prototype.bvrMNDPriority=function(){return this
._bvrMNDPriority;};a.prototype.equal=function(d){var e=true;e=e&&this._id===d.id();e=e&&this._name==
=d.name();e=e&&this._type===d.type();e=e&&this._min===d.min();e=e&&this._max===d.max();e=e&&this._mndMode
===d.mndMode();e=e&&this._bvrPriority===d.bvrPriority();e=e&&this._bvrMNDPriority===d.bvrMNDPriority
();return e;};return a;});define('sap/viz/vizservices/common/metadata/bindingdef/InfoBindingDefAdaptor'
,['sap/viz/vizservices/common/feed/FeedConst','sap/viz/vizservices/common/metadata/bindingdef/BindingDef'
,'sap/viz/vizservices/common/metadata/bindingdef/BindingDefConst'],function(F,B,a){var _=['layout','mark'
,'trellis','frame'];var b=['mark','layout','trellis','frame'];return{'adapt':function(i,t){var s=i.slice
(0).sort(function(c,e){if(c.role==='trellis.rowCategory'&&e.role==='trellis.columnCategory'){return-1
;}else if(c.role==='trellis.columnCategory'&&e.role==='trellis.rowCategory'){return 1;}else{return _
.indexOf(c.role.split('.')[0])-_.indexOf(e.role.split('.')[0]);}});var d=[];i.forEach(function(c){d.push
(new B({'id':c.id,'name':c.name,'type':c.type,'min':c.min,'max':c.max,'mndEnumerable':c.type===a.TYPE_MEASURE
&&c.role.split('.')[0]==='layout','mndMode':c.acceptMND===true?a.MND_MODE_SUPPORT:a.MND_MODE_NONE,'bvrPriority'
:s.indexOf(c),'bvrMNDPriority':b.indexOf(c.role.split('.')[0])*1000+s.indexOf(c)}));});return d;}};}
);define('sap/viz/vizservices/common/metadata/InfoMetadata',['sap/viz/vizservices/common/utils/OOUtil'
,'sap/viz/vizservices/common/metadata/MetadataBase','sap/viz/vizservices/common/metadata/bindingdef/InfoBindingDefAdaptor'
,'sap/viz/vizservices/common/data/DatasetTypeConst','require'],function(O,M,I,D){var a=function(s){a
.superclass.constructor.apply(this,arguments);this._support.dataset[D.FLAT_TABLE]=true;};O.extend(a,M
);a.prototype.getBindingDefs=function(){if(!this._bindingDefs){this._bindingDefs=I.adapt(this._raw.bindings
,this._raw.type);}return this._bindingDefs;};a.prototype.getBindingDefsWithBVRSorting=function(){if(
!this._bindingDefsWithBVRSorting){this._bindingDefsWithBVRSorting=this.getBindingDefs().slice(0).sort
(function(d,b){return d.bvrPriority()-b.bvrPriority();});}return this._bindingDefsWithBVRSorting;};a
.prototype.getRawPropertiesDef=function(){return this._raw.properties;};a.prototype.getPropertiesDef
=function(){if(!this._propertiesDef){this._propertiesDef=a._adaptInfoPropertiesDef(this._raw.properties
);}return this._propertiesDef;};a._adaptInfoPropertiesDef=function(r){var b={};for(var p in r){if(r.hasOwnProperty
(p)){var c=r[p];if(c.hasOwnProperty('children')){b[p]=a._adaptInfoPropertiesDef(c.children);}else{b[p
]=null;}}}return b;};a.prototype.isBuiltIn=function(){return this._raw.isBuiltIn;};a.prototype.getName
=function(){return this._raw.name||this._raw.type;};a.prototype._removeInvalidProperty=function(s,d)
{if(!d){return;}var p;for(p in s){if(!d.hasOwnProperty(p)){delete s[p];}else if(!d[p].supportedValueType
){var c=d[p].children;if(c){this._removeInvalidProperty(s[p],c);}}}};a.prototype.dataScale=function(
){return this._raw.scales;};a.prototype.dataType=function(){var d=a.superclass.dataType.apply(this);if
(d){return d;}else{return D.FLAT_TABLE;}};return a;});define('sap/viz/vizservices/common/metadata/bindingdef
/VizFeedingDefAdaptor',['sap/viz/vizservices/common/feed/FeedConst','sap/viz/vizservices/common/metadata
/bindingdef/BindingDef','sap/viz/vizservices/common/metadata/bindingdef/BindingDefConst'],function(F
,B,a){var V={};V.adapt=function(f){var e=[];f.forEach(function(g,i,h){if(g.id==='multiplier'){e=e.concat
(c(g));}else if(g.type===a.TYPE_DIMENSION){e.push(b(g));}else if(g.type===a.TYPE_MEASURE){e.push(_(g
));}});return e;};var _=function(f){return new B({'id':f.id,'name':f.name,'type':a.TYPE_MEASURE,'min'
:f.min,'max':f.max,'mndEnumerable':true,'mndMode':a.MND_MODE_NONE,'bvrPriority':f.mgIndex,'bvrMNDPriority'
:undefined});};var b=function(f){var m=f.minStackedDims!==undefined?f.minStackedDims:f.min;var e=f.maxStackedDims
!==undefined?f.maxStackedDims:Number.POSITIVE_INFINITY;var g=d(f);return new B({'id':f.id,'name':f.name
,'type':a.TYPE_DIMENSION,'min':m,'max':e,'mndMode':g.mode,'bvrPriority':f.aaIndex,'bvrMNDPriority':g
.priority});};var c=function(f){var m=d(f);return[new B({'id':F.ID_TRELLIS_ROW,'name':f.name,'type':a
.TYPE_DIMENSION,'min':0,'max':3,'mndMode':m.mode,'bvrPriority':Number.POSITIVE_INFINITY,'bvrMNDPriority'
:m.priority}),new B({'id':F.ID_TRELLIS_COLUMN,'name':f.name,'type':a.TYPE_DIMENSION,'min':0,'max':3,'mndMode'
:m.mode,'bvrPriority':Number.POSITIVE_INFINITY,'bvrMNDPriority':m.priority})];};var d=function(f){var
 m,p;if(f.acceptMND!==undefined&&f.acceptMND!==-1&&f.acceptMND!==false){m=f.max===1?a.MND_MODE_SUPPORT_EXCLUSIVELY
:a.MND_MODE_SUPPORT;p=f.acceptMND*-1;}else{m=a.MND_MODE_NONE;p=undefined;}return{'mode':m,'priority'
:p};};return V;});define('sap/viz/vizservices/common/metadata/VizMetadata',['sap/viz/vizservices/common
/utils/OOUtil','sap/viz/vizservices/common/metadata/MetadataBase','sap/viz/vizservices/common/metadata
/bindingdef/VizFeedingDefAdaptor','sap/viz/vizservices/common/data/DatasetTypeConst'],function(O,M,V
,D){var a=function(){a.superclass.constructor.apply(this,arguments);this._support.dataset[D.CROSS_TABLE
]=true;};O.extend(a,M);a.prototype.getBindingDefs=function(){if(!this._bindingDefs){this._bindingDefs
=V.adapt(this._raw.allFeeds());}return this._bindingDefs;};a.prototype.getBindingDefsWithBVRSorting=function
(){if(!this._bindingDefsWithBVRSorting){this._bindingDefsWithBVRSorting=this.getBindingDefs().slice(0
).sort(function(d,b){return d.bvrPriority()-b.bvrPriority();});}return this._bindingDefsWithBVRSorting
;};a.prototype.getRawPropertiesDef=function(){return this._raw.allProperties();};a.prototype.getPropertiesDef
=function(){if(!this._propertiesDef){this._propertiesDef=a._adaptVizPropertiesDef(this._raw.allProperties
())}return this._propertiesDef;};a._adaptVizPropertiesDef=function(r){var b={};for(var p in r){if(r.hasOwnProperty
(p)){var c=r[p];if(c.hasOwnProperty('name')){b[p]=null;}else{b[p]=a._adaptVizPropertiesDef(c);}}}return
 b;};a.prototype.isBuiltIn=function(){return this._raw.isBuiltIn;};a.prototype.getCategoryAxis=function
(){return this._raw.categoryAxis;};a.prototype.getValueAxis=function(){return this._raw.valueAxis;};a
.prototype.getName=function(){return this._raw.name;};a.prototype._removeInvalidProperty=function(s,d
){var p;for(p in s){if(!d.hasOwnProperty(p)){delete s[p];}else if(!d[p].supportedValueType){this._removeInvalidProperty
(s[p],d[p]);}}};a.prototype.dataScale=function(){return this._raw.dataScale;};a.prototype.dataType=function
(){var d=a.superclass.dataType.apply(this);if(d){return d;}else{return D.CROSS_TABLE;}};return a;});define
('sap/viz/vizservices/common/metadata/MetadataFactory',['sap/viz/vizservices/common/metadata/InfoMetadata'
,'sap/viz/vizservices/common/metadata/VizMetadata'],function(I,V){var _={};return{'get':function(v){if
(_[v]!==undefined){return _[v];}var r,m=null;try{r=sap.viz.api.metadata.Viz.get(v);if(r&&r.type){m=new
 I(r);}}catch(e){}if(!m){try{r=sap.viz.api.manifest.Viz.get(v);if(r&&r[0]){m=new V(r[0]);}}catch(e){
}}return(_[v]=m);}};});define('sap/viz/vizservices/common/metadata/bindingdef/BindingDefUtils',['sap
/viz/vizservices/common/metadata/MetadataFactory','sap/viz/vizservices/common/metadata/bindingdef/BindingDefConst'
,'sap/viz/vizservices/common/feed/FeedConst'],function(M,B,F){var a={};a.supportMND=function(v){var s
=false;var d=M.get(v).getBindingDefs();d.forEach(function(b){s=s||(b.mndMode()!==B.MND_MODE_NONE);})
;return s;};a.equal=function(v,b){if(v===b){return true;}var m=M.get(v),c=M.get(b);if(m&&c){var d=m.getBindingDefs
(),e=c.getBindingDefs();if(d.length!==e.length){return false;}var f=true;d.forEach(function(g,i,h){f
=f&&g.equal(e[i]);});return f;}else{return false;}};a.has=function(v,i){return!!a.get(v,i);};a.get=function
(v,i){var g;var d=M.get(v).getBindingDefs();d.forEach(function(b){if(!g&&b.id()===i){g=b;}});return g
;};a.support=function(d,b){if(!b){return false;}if(d.type()===B.TYPE_DIMENSION){if(d.id()===F.ID_TIME_AXIS
&&b.dataType!==F.DATA_TYPE_DATE){return false;}else{if(d.mndMode()===B.MND_MODE_NONE){return b.type=
==F.TYPE_DIMENSION;}else{return b.type===F.TYPE_DIMENSION||b.type===F.TYPE_MND;}}}else if(d.type()==
=B.TYPE_MEASURE){return b.type===F.TYPE_MEASURE;}else{return false;}};return a;});define('sap/viz/vizservices
/common/utils/Utils',[],function(){var u={};var _=0;var h=Object.prototype.hasOwnProperty;u.genUID=function
(){if(!_){_=0;}return"vcgen_"+(_++);};var c={'[object Boolean]':'boolean','[object Number]':'number'
,'[object String]':'string','[object Function]':'function','[object Array]':'array','[object Date]':'date'
,'[object RegExp]':'regexp','[object Object]':'object'};u.encodingToken="_encoded_";u.applyObjectProperty
=function(o,p,a){try{if(u.isFunction(o[p])){o[p](a);}else{o[p]=a;}}catch(e){}};u.applyProperties=function
(a,p){if(p){var l=p.length;for(var i=0;i<l;i++){var b=p[i];if(b){u.applyObjectProperty(a,b.name,b.value
);}}}};u.getObjectProperty=function(o,p){try{if(u.isFunction(o[p])){return o[p]();}else if(o.hasOwnProperty
(p)){return o[p];}}catch(e){}};u.type=function(o){return o==null?String(o):c[Object.prototype.toString
.call(o)]||"object";};u.isObject=function(o){var t=typeof o;return t==='function'||t==='object'&&!!o
;};u.isFunction=function(o){return u.type(o)==="function";};u.isBoolean=function(o){return u.type(o)
==="boolean";};u.isString=function(o){return u.type(o)==="string";};u.isArray=function(o){return u.type
(o)==="array";};u.isNumber=function(o){return u.type(o)==="number";};u.isObject=function(o){return u
.type(o)==="object";};u.isPlainObject=function(o){if(!o||u.type(o)!=="object"||o.nodeType||(o&&typeof
 o==="object"&&"setInterval"in o)){return false;}if(o.constructor&&!h.call(o,"constructor")&&!h.call
(o.constructor.prototype,"isPrototypeOf")){return false;}var k;for(k in o){}return k===undefined||h.call
(o,k);},u.isEmptyObject=function(o){for(var n in o){if(o.hasOwnProperty(n)){return false;}}return u.isPlainObject
(o);},u.isRegExp=function(o){return u.type(o)==="regexp";};u.sortArrayOn=function(e,p,f){if(u.isArray
(e)&&u.isString(p)){e.sort(function(a,b){return f?(a[p]<b[p])-(a[p]>b[p]):(a[p]>b[p])-(a[p]<b[p]);})
;}};u.noop=function(){};u.delay=function(a,w){return setTimeout(function(){return a.apply(null);},w)
;};u.defer=function(a){return u.delay.call(null,a,1);};u.getEventPosition=function(e){var p=null;var
 a=null;if(e.originalEvent&&e.originalEvent.targetTouches&&e.originalEvent.targetTouches.length!==0)
{p=e.originalEvent.targetTouches[0].pageX;a=e.originalEvent.targetTouches[0].pageY;}else{p=e.pageX;a
=e.pageY;}var b={};b.pageX=p;b.pageY=a;return b;};function d(a){if(a===null||typeof(a)!=='object'){return
 a;}if(typeof(a)==='object'&&a.clone&&u.isFunction(a.clone)){return a.clone();}var o=u.isArray(a)?[]
:{};for(var i in a){if(a.hasOwnProperty(i)){o[i]=d(a[i]);}}return o;}u.clone=d;u.toJSON=function(a,p
){if(u.isArray(a)){var r=[];for(var i=0;i<a.length;i++){r.push(p.call(null,a[i]));}return r;}else if
(a){return p.call(null,a);}else{return null;}};u.fromJSON=function(j,p){if(u.isArray(j)){var r=[];for
(var i=0;i<j.length;i++){r.push(p.call(null,j[i]));}return r;}else if(j){return p.call(null,j);}else
{return undefined;}};u.updateJSON=function(s,n){var r=u.clone(s);r=r||{};var a=function(p){var e=u.getPropValue
(n,p);if(e){u.setPropValue(r,p,e);}};a("plotArea.window.start.categoryAxis");a("plotArea.window.end.categoryAxis"
);var b=function(e,f){for(var p in f){if(f.hasOwnProperty(p)){var i=f[p];if(i!==undefined){if(typeof
(i)!=="object"||i instanceof(Array)||i===null){e[p]=i;}else{var j=e[p];if(!j){if(i===null){j=i;}else
{j=e[p]={};}}else if(!u.isObject(j)){j=e[p]={};}b(j,i);}}}}};b(r,n);return r;};u.substitute=function
(s,r){if(!s){return'';}for(var i=1;i<arguments.length;i++){s=s.replace(new RegExp("\\{"+(i-1)+"\\}","g"
),arguments[i]);}return s;};u.invert=function(o){var r={};for(var k in o){var v=o[k];r[v]=k;}return r
;};u.encode=function(i,s){if(i.indexOf(u.encodingToken)>-1){return i;}else{var e=i+u.encodingToken+s
;return e;}};u.decode=function(i){var r=i.split(u.encodingToken);return r;};u.deepEqual=function(s,t
){if(typeof s==='object'&&typeof t==='object'&&u.isExist(s)&&u.isExist(t)){var k=null;for(k in s){if
(s.hasOwnProperty(k)){if(!t.hasOwnProperty(k)){return false;}else if(!u.deepEqual(s[k],t[k])){return
 false;}}}for(k in t){if(t.hasOwnProperty(k)){if(!s.hasOwnProperty(k)){return false;}}}return true;}else
{return s===t;}};u.hasCommonKeyValue=function(s,t){if(typeof s==='object'&&typeof t==='object'){var k
=null;for(k in s){if(s.hasOwnProperty(k)){if(t.hasOwnProperty(k)&&u.deepEqual(s[k],t[k])){return true
;}}}return false;}};u.isExist=function(o){if((typeof(o)==='undefined')||(o===null)){return false;}return
 true;};var g=u.genGetterSetter=function(n){return function(v){if(arguments.length>0){this[n]=v;return
 this;}else{return this[n];}};};u.genGetterSetters=function(p,n){n.forEach(function(e){p[e.substring
(1)]=g(e);});};u.currying=function(f){var a=Array.prototype.slice.call(arguments,1);return function(
){return f.apply(this,a.concat(Array.prototype.slice.call(arguments)));};};u.getPropValue=function(o
,p){if(o==null){return undefined;}var a=p.split('.'),l=a.pop(),i,b,e=o;for(i=0,b=a.length;i<b;i++){e
=e[a[i]];if(e==null){return undefined;}}return e[l];};u.setPropValue=function(o,p,v){var a=p.split('
.'),l=a.pop(),b,t,i,e,f=o;for(i=0,e=a.length;i<e;i++){b=a[i];t=typeof f[b];if(t!=="object"&&t!=="function"
){f[b]={};}f=f[b];}f[l]=v;return o;};u.deletePropValue=function(o,p){var a=p.split('.'),b,i,e=o;for(i
=0;i<a.length;i++){b=a[i];if(e.hasOwnProperty(b)){if(i===a.length-1){delete e[b];break;}e=e[b];}else
{return o;}}return o;};u.checkArgs=function(a,e){if(!e){return true;}else{var b,f;for(var i=0;i<e.length
;i++){b=a[i];f=e[i];if(u.checkArg(b,f)===false){return false;}}return true;}};u.checkArg=function(a,e
){if(!e.typeValidator){return true;}else{if(a==null){if(e.isOptional){return true;}else{return false
;}}return e.typeValidator(a);}};u.isArrayOf=function(a,v){if(!u.isArray(a)){return false;}for(var i=a
.length-1;i>=0;i--){if(!v(a[i])){return false;}}return true;};return u;});define('sap/viz/vizservices
/common/feed/FeedUtil',['sap/viz/vizservices/common/feed/FeedConst','sap/viz/vizservices/common/metadata
/MetadataFactory','sap/viz/vizservices/common/metadata/bindingdef/BindingDefUtils','sap/viz/vizservices
/common/utils/Utils'],function(F,M,B,U){var a={};a.genFeedItem=function(i,v){return{'id':i,'values':v
};};a.genAnalysisObject=function(i,t,d){return{'id':i,'type':t,'dataType':d};};a.hasMND=function(f){return
 a.countAnalyses(f,F.TYPE_MND)>0;};a.countAnalyses=function(f,t){var n=0;for(var i=0;i<f.length;i++)
{var b=f[i];var v=b.values;if(t){for(var j=0;j<v.length;j++){var c=v[j];if(c.type===t){n++;}}}else{n
+=v.length;}}return n;};a.hasMNDInValues=function(v){return(a.indexOfMNDInValues(v)!==-1);};a.indexOfMNDInValues
=function(v){if(!v||!v.length){return-1;}var b=-1;for(var i=0;i<v.length;i++){var c=v[i];if(c.type==
=F.TYPE_MND){b=i;break;}}return b;};a.buildEmptyFeeds=function(v){var b=M.get(v);var d=b.getBindingDefs
();var f=[];d.forEach(function(c){f.push(a.genFeedItem(c.id(),[]));});return f;};a.merge=function(h,c
){var b=a._getFeedsValuesMap(c);for(var i=0;i<h.length;i++){var f=h[i];if(b[f.id]){f.values=f.values
.concat(b[f.id]);}}return h;};a._getFeedsValuesMap=function(f){var b={};for(var i=0;i<f.length;i++){var
 c=f[i];var d=c.id;if(!b[d]){b[d]=c.values;}else{b[d]=b[d].concat(c.values);}}return b;};a.getFeed=function
(f,b){for(var i=0;i<f.length;i++){var c=f[i];if(c.id===b){return c;}}return null;};a.getFeedValues=function
(f,i){var b=a.getFeed(f,i);return b?b.values:null;};function m(b,d){if(!b||!d){return false;}if(b.length
!==d.length){return false;}var i=d.every(function(c){return b.indexOf(c)>-1;});return i;}a.getMNDEnumeration
=function(t){var b=M.get(t);var d=b.getBindingDefs();var e=[];d.forEach(function(c){if(c.mndEnumerable
()){e.push(c.id());}});return e;};a.validateMND=function(t,b){if(!b.hasOwnProperty("measureNames")){return
 true;}return b.hasOwnProperty("measureNames")&&m(b.measureNames,a.getMNDEnumeration(t));};a.validateMndAddMeasureNames
=function(t,b){var v=a.validateMND(t,b);if(v&&!b.hasOwnProperty("measureNames")){b.measureNames=a.getMNDEnumeration
(t);}return v;};a.spliceAnalysisObjects=function(f,b,i,h,c,d){var e=Array.prototype.slice.call(arguments
,2);var s=false;f.forEach(function(g){if(g.id===b){var v=g.values||[];v.splice.apply(v,e);s=true;}})
;if(!s&&c){var v=[];v.splice.apply(v,e);f.push(a.genFeedItem(b,v));}return f;};a.cloneFeeds=function
(f){return JSON.parse(JSON.stringify(f));};a.hasInvalidFeeds=function(t,f){for(var i=0;i<f.length;i+
+){var b=B.get(t,f[i].id);if(!b){return true;}}return false;};a.removeInvalid=function(t,f){return f
.filter(function(b){var c=B.get(t,b.id);if(!c){return false;}else{b.values=b.values.filter(function(v
){var s=B.support(c,v);return v.type===F.TYPE_MND?(s&&a.validateMND(t,v)):s;});return true;}});};a.isAnalysisDataType
=function(d){if(d===F.DATA_TYPE_STRING||d===F.DATA_TYPE_NUMBER||d===F.DATA_TYPE_DATE){return true;}else
{return false;}};a.isAnalysisObject=function(b){return b&&U.checkArg(b.id,{'typeValidator':U.isString
})&&U.checkArg(b.type,{'typeValidator':U.isString})&&U.checkArg(b.dataType,{'typeValidator':a.isAnalysisDataType
,'isOptional':true});};a.isArrayOfAnalysisObject=function(b){return U.isArrayOf(b,a.isAnalysisObject
);};a.isFeedItem=function(b){return b&&U.checkArg(b.id,{'typeValidator':U.isString})&&U.checkArg(b.values
,{'typeValidator':a.isArrayOfAnalysisObject});};a.isArrayOfFeedItem=function(b){return U.isArrayOf(b
,a.isFeedItem);};return a;});define('sap/viz/vizservices/service/bvr/feeders/MNDFeeder',['sap/viz/vizservices
/common/metadata/MetadataFactory','sap/viz/vizservices/common/feed/FeedUtil','sap/viz/vizservices/common
/metadata/bindingdef/BindingDefConst','sap/viz/vizservices/common/feed/FeedConst'],function(M,F,B,a)
{var b={};b.feed=function(v,f,c){var i,d;var e=F.indexOfMNDInValues(c);if(e===-1||F.hasMND(f)){return
;}var m=c.splice(e,1)[0],g;var h=M.get(v).getBindingDefs();h=h.slice(0).sort(function(k,l){return k.bvrMNDPriority
()-l.bvrMNDPriority();});for(i=0;i<h.length;i++){d=h[i];g=F.getFeedValues(f,d.id());if(d.mndMode()!=
=B.MND_MODE_NONE&&d.min()>g.length){if(d.mndMode()===B.MND_MODE_SUPPORT||(d.mndMode()===B.MND_MODE_SUPPORT_EXCLUSIVELY
&&g.length===0)){g.push(m);return;}}}var r=F.getFeed(f,a.ID_TRELLIS_ROW),j=F.getFeed(f,a.ID_TRELLIS_COLUMN
);if(r&&j&&r.values.length===0&&j.values.length===0){r.values.push(m);return;}for(i=0;i<h.length;i++
){d=h[i];g=F.getFeedValues(f,d.id());if(d.mndMode()!==B.MND_MODE_NONE&&g.length===0){g.push(m);return
;}}for(i=0;i<h.length;i++){d=h[i];g=F.getFeedValues(f,d.id());if(d.mndMode()===B.MND_MODE_SUPPORT||(d
.mndMode()===B.MND_MODE_SUPPORT_EXCLUSIVELY&&g.length===0)){g.push(m);return;}}};return b;});define('sap
/viz/vizservices/common/viz/ChartConst',[],function(){var C={};C.TYPE_BAR="info/bar";C.TYPE_STACKED_BAR
="info/stacked_bar";C.TYPE_100_STACKED_BAR="info/100_stacked_bar";C.TYPE_DUAL_BAR="info/dual_bar";C.TYPE_DUAL_STACKED_BAR
="info/dual_stacked_bar";C.TYPE_100_DUAL_STACKED_BAR="info/100_dual_stacked_bar";C.TYPE_TRELLIS_BAR="info
/trellis_bar";C.TYPE_TRELLIS_STACKED_BAR="info/trellis_stacked_bar";C.TYPE_TRELLIS_100_STACKED_BAR="info
/trellis_100_stacked_bar";C.TYPE_TRELLIS_DUAL_BAR="info/trellis_dual_bar";C.TYPE_TRELLIS_DUAL_STACKED_BAR
="info/trellis_dual_stacked_bar";C.TYPE_TRELLIS_100_DUAL_STACKED_BAR="info/trellis_100_dual_stacked_bar"
;C.TYPE_COLUMN="info/column";C.TYPE_STACKED_COLUMN="info/stacked_column";C.TYPE_100_STACKED_COLUMN="info
/100_stacked_column";C.TYPE_DUAL_COLUMN="info/dual_column";C.TYPE_DUAL_STACKED_COLUMN="info/dual_stacked_column"
;C.TYPE_100_DUAL_STACKED_COLUMN="info/100_dual_stacked_column";C.TYPE_TRELLIS_COLUMN="info/trellis_column"
;C.TYPE_TRELLIS_STACKED_COLUMN="info/trellis_stacked_column";C.TYPE_TRELLIS_100_STACKED_COLUMN="info
/trellis_100_stacked_column";C.TYPE_TRELLIS_DUAL_COLUMN="info/trellis_dual_column";C.TYPE_TRELLIS_DUAL_STACKED_COLUMN
="info/trellis_dual_stacked_column";C.TYPE_TRELLIS_100_DUAL_STACKED_COLUMN="info/trellis_100_dual_stacked_column"
;C.TYPE_TIMESERIES_LINE="info/timeseries_line";C.TYPE_TIMESERIES_SCATTER="info/timeseries_scatter";C
.TYPE_TIMESERIES_BUBBLE="info/timeseries_bubble";C.TYPE_LINE="info/line";C.TYPE_HORIZONTAL_LINE="info
/horizontal_line";C.TYPE_DUAL_LINE="info/dual_line";C.TYPE_DUAL_HORIZONTAL_LINE="info/dual_horizontal_line"
;C.TYPE_TRELLIS_LINE="info/trellis_line";C.TYPE_TRELLIS_HORIZONTAL_LINE="info/trellis_horizontal_line"
;C.TYPE_TRELLIS_DUAL_LINE="info/trellis_dual_line";C.TYPE_TRELLIS_DUAL_HORIZONTAL_LINE="info/trellis_dual_horizontal_line"
;C.TYPE_AREA="info/area";C.TYPE_HORIZONTAL_AREA="info/horizontal_area";C.TYPE_100_AREA="info/100_area"
;C.TYPE_100_HORIZONTAL_AREA="info/100_horizontal_area";C.TYPE_TRELLIS_AREA="info/trellis_area";C.TYPE_TRELLIS_HORIZONTAL_AREA
="info/trellis_horizontal_area";C.TYPE_TRELLIS_100_AREA="info/trellis_100_area";C.TYPE_TRELLIS_100_HORIZONTAL_AREA
="info/trellis_100_horizontal_area";C.TYPE_WATERFALL="info/waterfall";C.TYPE_HORIZONTAL_WATERFALL="info
/horizontal_waterfall";C.TYPE_STACKED_WATERFALL="info/stacked_waterfall";C.TYPE_HORIZONTAL_STACKED_WATERFALL
="info/horizontal_stacked_waterfall";C.TYPE_COMBINATION="info/combination";C.TYPE_HORIZONTAL_COMBINATION
="info/horizontal_combination";C.TYPE_DUAL_COMBINATION="info/dual_combination";C.TYPE_DUAL_HORIZONTAL_COMBINATION
="info/dual_horizontal_combination";C.TYPE_STACKED_COMBINATION="info/stacked_combination";C.TYPE_HORIZONTAL_STACKED_COMBINATION
="info/horizontal_stacked_combination";C.TYPE_DUAL_STACKED_COMBINATION="info/dual_stacked_combination"
;C.TYPE_DUAL_HORIZONTAL_STACKED_COMBINATION="info/dual_horizontal_stacked_combination";C.TYPE_MEKKO="info
/mekko";C.TYPE_100_MEKKO="info/100_mekko";C.TYPE_HORIZONTAL_MEKKO="info/horizontal_mekko";C.TYPE_100_HORIZONTAL_MEKKO
="info/100_horizontal_mekko";C.TYPE_PIE="info/pie";C.TYPE_TRELLIS_PIE="info/trellis_pie";C.TYPE_DONUT
="info/donut";C.TYPE_TRELLIS_DONUT="info/trellis_donut";C.TYPE_SCATTER="info/scatter";C.TYPE_TRELLIS_SCATTER
="info/trellis_scatter";C.TYPE_BUBBLE="info/bubble";C.TYPE_TRELLIS_BUBBLE="info/trellis_bubble";C.TYPE_HEATMAP
="info/heatmap";C.TYPE_TREEMAP="info/treemap";C.TYPE_RADAR="info/radar";C.TYPE_TRELLIS_RADAR="info/trellis_radar"
;C.TYPE_TAG_CLOUD="info/tagcloud";C.TYPE_NUMBER='info/number';C.TYPE_BULLET="info/bullet";C.TYPE_VERTICALBULLET
="info/vertical_bullet";C.DIRECTION_HORIZONTAL="horizontal";C.DIRECTION_VERTICAL="vertical";C.STACKING_FULL
="full";C.STACKING_NORMAL="normal";C.FEEDING_PRIMARY_VALUES="primaryValues";C.FEEDING_SECONDARY_VALUES
="secondaryValues";C.FEEDING_AXIS_LABELS="axisLabels";C.MEASURE_NAMES_DIMENSION="measureNamesDimension"
;C.MEASURE_VALUES_GROUP="measureValuesGroup";C.ANALYSIS_AXIS="analysisAxis";C.VALUE_AXIS="valueAxis"
;C.SECOND_VALUE_AXIS="valueAxis2";C.CATEGORY_AXIS="categoryAxis";C.TIME_AXIS="timeAxis";C.SIZE="size"
;C.WEIGHT="weight";C.INVALID="Invalid";C.AXIS_XAXIS="xAxis";C.AXIS_XAXIS1="xAxis1";C.AXIS_XAXIS2="xAxis2"
;C.AXIS_YAXIS="yAxis";C.AXIS_YAXIS1="yAxis1";C.AXIS_YAXIS2="yAxis2";C.COLOR="color";C.DATA_FRAME="dataFrame"
;C.TEMPLATE_INCOMPLETE="incomplete_ghost";C.TEMPLATE_DEFAULT="default";C.TEMPLATE_EMPTY="empty_ghost"
;C.PLAY_FIELD="playField";C.SHAPE="shape";C.TITLE="title";C.KEY_COUNT="__keysCount";C.TRELLIS_NONE=0
;C.TRELLIS_COLUMN=1;C.TRELLIS_ROW=2;C.TRELLIS_COLUMN_AND_ROW=3;return C;});define('sap/viz/vizservices
/service/bvr/feeders/TimeFeeder',['sap/viz/vizservices/common/feed/FeedConst','sap/viz/vizservices/common
/metadata/MetadataFactory','sap/viz/vizservices/common/metadata/bindingdef/BindingDefUtils','sap/viz
/vizservices/common/viz/ChartConst'],function(F,M,B,C){function a(t){return[C.TYPE_TIMESERIES_LINE,C
.TYPE_TIMESERIES_SCATTER,C.TYPE_TIMESERIES_BUBBLE].indexOf(t)>=0;}var T={};T.feed=function(v,f,b){if
(!a(v)){return;}var c,i;for(i=0;i<f.length;i++){if(f[i].id===F.ID_TIME_AXIS){c=f[i];}}if(!c){return;
}var d=B.get(v,c.id);if(c.values.length>=d.max){return;}for(i=0;i<b.length;i++){if(b[i].dataType===F
.DATA_TYPE_DATE){c.values=[b[i]];b.splice(i,1);break;}}};return T;});define("jquery",[],function(){return
 jQuery;});define('sap/viz/vizservices/service/feed/validators/AAValidator',['sap/viz/vizservices/common
/feed/FeedConst','sap/viz/vizservices/common/feed/FeedUtil','sap/viz/vizservices/common/viz/ChartConst'
,'sap/viz/vizservices/common/metadata/bindingdef/BindingDefConst'],function(F,a,C,B){var A={};A.validate
=function(d,f){var n=0;d.forEach(function(e){if(e.type()===B.TYPE_DIMENSION){var v=a.getFeedValues(f
,e.id())||[];if(v.length===0&&e.min()>0){if(e.mndMode()===B.MND_MODE_NONE||a.hasMND(f)){n++;}}}});return
{"valid":(_(f)+n)<=2};};var _=function(f){var n=0;var d=0;for(var i=0;i<f.length;i++){var e=f[i];if(b
(e)){if(e.id===F.ID_TRELLIS_ROW||e.id===F.ID_TRELLIS_COLUMN){d=Math.min(1,d+1);}else{n++;}}}return(d
+n);};var b=function(f){if(!f||!(f.values&&f.values.length>0)||f.id===C.DATA_FRAME){return 0;}var v=f
.values;return c(v);};var c=function(v){if(!v||!v.length){return 0;}var h=a.hasMNDInValues(v);if(v[0
].type===F.TYPE_MND&&v.length===1){return 0;}else if(v[0].type===F.TYPE_DIMENSION||v[0].type===F.TYPE_MND
){return 1;}else{return 0;}};return A;});define('sap/viz/vizservices/service/feed/validators/DuplicateValidator'
,['sap/viz/vizservices/common/feed/FeedUtil'],function(F){var D={};D.validate=function(d,f){var v={"valid"
:true,"results":{"bindings":{}}};var r;d.forEach(function(a){var b=F.getFeedValues(f,a.id())||[];r=_
(a,b);if(r){v.valid=false;v.results.bindings[a.id()]=r;}});return v;};var _=function(d,a){var m={},r
;a.forEach(function(b){var i=b.id;if(m[i]){if(!r){r={"incorrect":[]};}r.incorrect.push(b);}m[i]=true
;});return r;};return D;});define('sap/viz/vizservices/service/feed/validators/TypeValidator',['sap/viz
/vizservices/common/feed/FeedConst','sap/viz/vizservices/common/feed/FeedUtil','sap/viz/vizservices/common
/metadata/bindingdef/BindingDefUtils'],function(F,a,B){var T={};T.validate=function(d,f){var v={"valid"
:true,"results":{"bindings":{}}};var r;d.forEach(function(b){var c=a.getFeedValues(f,b.id())||[];r=_
(b,c);if(r){v.valid=false;v.results.bindings[b.id()]=r;}});return v;};var _=function(d,b){var r;b.forEach
(function(c){if(!B.support(d,c)||((d.id()===F.ID_TIME_AXIS)&&c.dataType!==F.DATA_TYPE_DATE)){if(!r){r
={"incorrect":[]};}r.incorrect.push(c);}});return r;};return T;});define('sap/viz/vizservices/service
/feed/validators/MaxValidator',['sap/viz/vizservices/common/feed/FeedUtil'],function(F){var M={};M.validate
=function(d,f){var v={"valid":true,"results":{"bindings":{}}};var r;var n=F.countAnalyses(f);d.forEach
(function(a){var b=F.getFeedValues(f,a.id())||[];r=_(a,b);if(r){v.valid=false;v.results.bindings[a.id
()]=r;}n-=b.length;});v.valid=v.valid&&(n===0);return v;};var _=function(d,a){var l=a.length,r;if(F.hasMNDInValues
(a)){l=l-1;}if(l>d.max()){r={"exceed":l-d.max()};}return r;};return M;});define('sap/viz/vizservices
/service/feed/validators/MinValidator',['sap/viz/vizservices/common/feed/FeedUtil','sap/viz/vizservices
/common/metadata/bindingdef/BindingDefConst','sap/viz/vizservices/common/feed/FeedConst','sap/viz/vizservices
/common/utils/Utils'],function(F,B,a,U){var M={};M.validate=function(d,f){var v={"valid":true,"results"
:{"bindings":{}}};var h=F.hasMND(f);var r,b,c=[],t=false;d.forEach(function(e){var g=F.getFeedValues
(f,e.id())||[];r=_(e,g);if(e.id()===a.ID_TRELLIS_ROW||e.id()===a.ID_TRELLIS_COLUMN){if(!r){t=true;}}if
(r){v.valid=false;if(e.type()===a.TYPE_DIMENSION){if(e.mndMode()===B.MND_MODE_SUPPORT){b=!h;}else if
(e.mndMode()===B.MND_MODE_SUPPORT_EXCLUSIVELY){b=(g.length>0?false:true)&&!h;}else{b=false;}r.allowMND
=b;}v.results.bindings[e.id()]=r;}});if(t){if(!v.valid){delete v.results.bindings[a.ID_TRELLIS_ROW];delete
 v.results.bindings[a.ID_TRELLIS_COLUMN];if(U.isEmptyObject(v.results.bindings)){v.valid=true;}}}return
 v;};var _=function(d,b){var l=b.length,r;var m=d.min();if(d.id()===a.ID_TRELLIS_ROW||d.id()===a.ID_TRELLIS_COLUMN
){m=1;}if(l<m){r={"missing":m-l};if(d.id()===a.ID_TRELLIS_ROW){r.associate=a.ID_TRELLIS_COLUMN;}else
 if(d.id()===a.ID_TRELLIS_COLUMN){r.associate=a.ID_TRELLIS_ROW;}}return r;};return M;});define('sap/viz
/vizservices/service/feed/validators/MNDValidator',['sap/viz/vizservices/common/feed/FeedConst','sap
/viz/vizservices/common/feed/FeedUtil','sap/viz/vizservices/common/metadata/bindingdef/BindingDefConst'
,],function(F,a,B){var M={};M.validate=function(v,d,f){var b={"valid":true,"results":{"bindings":{}}
};var n=0;d.forEach(function(e){if(e.mndEnumerable()){var g=a.getFeedValues(f,e.id())||[];n+=g.length
;}});n=n>0?1:0;var t=[],c;var r;d.forEach(function(e){if(e.type()===B.TYPE_DIMENSION){var g=a.getFeedValues
(f,e.id())||[];var m=a.indexOfMNDInValues(g);if(m!==-1){if(!n){b.valid=false;b.results.bindings[e.id
()]={"incorrect":[g[m]]};return;}else{n--;}}if((e.id()===F.ID_TRELLIS_ROW||e.id()===F.ID_TRELLIS_COLUMN
)){t=t.concat(g);c=e;}else{r=_(e,g,v);if(r){b.valid=false;if(!b.results.bindings[e.id()]){b.results.bindings
[e.id()]={"incorrect":[r]};}}}}});if(c){r=_(c,t,v);if(r){b.valid=false;if(r){if(!b.results[c.id()]){b
.results.bindings[c.id()]={"incorrect":[r]};}}}}return b;};var _=function(d,b,v){var r;var m=a.indexOfMNDInValues
(b);if(m!==-1&&(d.mndMode()===B.MND_MODE_NONE||(d.mndMode()===B.MND_MODE_SUPPORT_EXCLUSIVELY&&b.length
>1)||!a.validateMndAddMeasureNames(v,b[m]))){r=b[m];}return r;};return M;});define('sap/viz/vizservices
/service/feed/validators/MissingMNDValidator',['sap/viz/vizservices/common/feed/FeedConst','sap/viz/vizservices
/common/feed/FeedUtil','sap/viz/vizservices/common/metadata/bindingdef/BindingDefConst','sap/viz/vizservices
/common/utils/Utils','sap/viz/vizservices/common/viz/ChartConst'],function(F,a,B,U,C){var M={};M.validate
=function(v,d,f){var c={"valid":true,"results":{"bindings":{}}};if(s.indexOf(v)<0){return c;}var h=a
.hasMND(f);if(!h&&_(d,f)>1){c.valid=false;c.results.missingMND=true;d.forEach(function(e){if(e.type(
)===F.TYPE_DIMENSION){var g=a.getFeedValues(f,e.id())||[];var r=b(e,g);if(r.allowMND){c.results.bindings
[e.id()]=r;}}});}return c;};var _=function(d,f){var n=0;d.forEach(function(c){var v=a.getFeedValues(f
,c.id())||[];if(c.type()===F.TYPE_MEASURE){n+=Math.min(c.max(),v.length);}});return n;};var b=function
(d,c){var r={};if(d.mndMode()===B.MND_MODE_SUPPORT){r.allowMND=true;}else if(d.mndMode()===B.MND_MODE_SUPPORT_EXCLUSIVELY
){r.allowMND=c.length>0?false:true;}else{r.allowMND=false;}return r;};var s=[C.TYPE_BAR,C.TYPE_TRELLIS_BAR
,C.TYPE_DUAL_BAR,C.TYPE_TRELLIS_DUAL_BAR,C.TYPE_STACKED_BAR,C.TYPE_100_STACKED_BAR,C.TYPE_TRELLIS_STACKED_BAR
,C.TYPE_TRELLIS_100_STACKED_BAR,C.TYPE_DUAL_STACKED_BAR,C.TYPE_100_DUAL_STACKED_BAR,C.TYPE_TRELLIS_DUAL_STACKED_BAR
,C.TYPE_TRELLIS_100_DUAL_STACKED_BAR,C.TYPE_COLUMN,C.TYPE_TRELLIS_COLUMN,C.TYPE_DUAL_COLUMN,C.TYPE_TRELLIS_DUAL_COLUMN
,C.TYPE_STACKED_COLUMN,C.TYPE_100_STACKED_COLUMN,C.TYPE_TRELLIS_STACKED_COLUMN,C.TYPE_TRELLIS_100_STACKED_COLUMN
,C.TYPE_DUAL_STACKED_COLUMN,C.TYPE_100_DUAL_STACKED_COLUMN,C.TYPE_TRELLIS_DUAL_STACKED_COLUMN,C.TYPE_TRELLIS_100_DUAL_STACKED_COLUMN
,C.TYPE_LINE,C.TYPE_TRELLIS_LINE,C.TYPE_HORIZONTAL_LINE,C.TYPE_TRELLIS_HORIZONTAL_LINE,C.TYPE_DUAL_LINE
,C.TYPE_DUAL_HORIZONTAL_LINE,C.TYPE_TRELLIS_DUAL_LINE,C.TYPE_TRELLIS_DUAL_HORIZONTAL_LINE,C.TYPE_AREA
,C.TYPE_HORIZONTAL_AREA,C.TYPE_100_AREA,C.TYPE_100_HORIZONTAL_AREA,C.TYPE_TRELLIS_AREA,C.TYPE_TRELLIS_HORIZONTAL_AREA
,C.TYPE_TRELLIS_100_AREA,C.TYPE_TRELLIS_100_HORIZONTAL_AREA,C.TYPE_COMBINATION,C.TYPE_HORIZONTAL_COMBINATION
,C.TYPE_DUAL_COMBINATION,C.TYPE_DUAL_HORIZONTAL_COMBINATION,C.TYPE_STACKED_COMBINATION,C.TYPE_HORIZONTAL_STACKED_COMBINATION
,C.TYPE_DUAL_STACKED_COMBINATION,C.TYPE_DUAL_HORIZONTAL_STACKED_COMBINATION,C.TYPE_TIMESERIES_LINE,C
.TYPE_TIMESERIES_COLUMN,C.TYPE_STACKED_WATERFALL,C.TYPE_HORIZONTAL_STACKED_WATERFALL,C.TYPE_RADAR,C.TYPE_TRELLIS_RADAR
];return M;});define('sap/viz/vizservices/service/feed/FeedService',['jquery','sap/viz/vizservices/common
/metadata/bindingdef/BindingDefUtils','sap/viz/vizservices/common/metadata/bindingdef/BindingDefConst'
,'sap/viz/vizservices/common/feed/FeedUtil','sap/viz/vizservices/common/feed/FeedConst','sap/viz/vizservices
/common/data/DatasetTypeConst','sap/viz/vizservices/common/metadata/MetadataFactory','sap/viz/vizservices
/service/feed/validators/AAValidator','sap/viz/vizservices/service/feed/validators/DuplicateValidator'
,'sap/viz/vizservices/service/feed/validators/TypeValidator','sap/viz/vizservices/service/feed/validators
/MaxValidator','sap/viz/vizservices/service/feed/validators/MinValidator','sap/viz/vizservices/service
/feed/validators/MNDValidator','sap/viz/vizservices/service/feed/validators/MissingMNDValidator','sap
/viz/vizservices/common/utils/Utils','sap/viz/vizservices/common/metadata/VizMetadata','exports'],function
($,B,a,F,b,D,M,A,c,T,d,e,f,g,U,V){var h={};h.validate=function(v,i){var k=[{typeValidator:U.isString
},{typeValidator:F.isArrayOfFeedItem}];if(!U.checkArgs(arguments,k)||M.get(v)===null){throw U.substitute
(sap.viz.extapi.env.Language.getResourceString('VIZ_SERVICES_INVALID_PARAMETER'));}if(F.hasInvalidFeeds
(v,i)){return{"valid":false};}var m=M.get(v);var l=m.getBindingDefs();if(m instanceof V){var n=A.validate
(l,i);if(!n.valid){return n;}}var r={"valid":true};r=_(r,c.validate(l,i));r=_(r,T.validate(l,i));r=_
(r,e.validate(l,i));r=_(r,d.validate(l,i));r=_(r,f.validate(v,l,i));r=_(r,g.validate(v,l,i));return r
;};var _=function(k,l){if(!l.valid){k.valid=false;if(!k.results){k.results={};}for(var i=0;i<l.results
.bindings.length;i++){var m=l.results.bindings[i];var n=k.results.bindings[i];var o=m.incorrect;var p
=n.incorrect;if(o&&p){n.incorrect=p.concat(o);$.unique(n.incorrect);delete m.incorrect;}}$.extend(true
,k.results,l.results);}return k;};h.addable=function(v,i,k,l){if(!l){var m=F.getFeed(i,k);var t,n;if
(B.get(v,m.id).type()===a.TYPE_DIMENSION){t=b.TYPE_DIMENSION;}else{t=b.TYPE_MEASURE;}if(k===b.ID_TIME_AXIS
){n=b.DATA_TYPE_DATE;}else{n=undefined;}var o='__sapVizServicesReserved_'+t+'_'+j++;l=F.genAnalysisObject
(o,t,n);}var p=F.spliceAnalysisObjects(F.cloneFeeds(i),k,0,0,l);return h.validateOverflow(v,p);};h.validateOverflow
=function(v,i){var m=M.get(v);var k=m.getBindingDefs();var l=true;l=l&&c.validate(k,i).valid;l=l&&T.validate
(k,i).valid;if(m.support().dataset[D.CROSS_TABLE]&&!m.support().dataset[D.FLAT_TABLE]){l=l&&A.validate
(k,i).valid;}l=l&&d.validate(k,i).valid;l=l&&f.validate(v,k,i).valid;return l;};h.switchable=function
(v,i,s,k){var l=F.spliceAnalysisObjects(F.cloneFeeds(i),s,0,0,k);return h.validateSwitching(v,l);};h
.validateSwitching=function(v,i){var m=M.get(v);var k=m.getBindingDefs();var l=true;l=l&&d.validate(k
,i).valid;l=l&&f.validate(v,k,i).valid;return l;};var j=0;return h;});define('sap/viz/vizservices/service
/bvr/feeders/CommonFeeder',['sap/viz/vizservices/common/metadata/MetadataFactory','sap/viz/vizservices
/common/feed/FeedUtil','sap/viz/vizservices/common/feed/FeedConst','sap/viz/vizservices/service/feed
/FeedService'],function(M,F,a,b){var C={};C.feed=function(v,f,c,d){d=d||f;var e=c.slice(0),g,h;var j
=M.get(v).getBindingDefsWithBVRSorting();var i,k;for(i=0;i<j.length&&c.length>0;i++){k=j[i],g=F.getFeed
(d,k.id()),h=true;while(h&&g&&k.min()>g.values.length){h=_(v,f,g,c);}}var r=F.getFeed(d,a.ID_TRELLIS_ROW
),l=F.getFeed(d,a.ID_TRELLIS_COLUMN);if(r&&l&&r.values.length===0&&l.values.length===0){_(v,f,r,c);}for
(i=0;i<j.length&&c.length>0;i++){k=j[i],g=F.getFeed(d,k.id()),h=true;if(g&&g.values.length===0){_(v,f
,g,c);}}for(i=0;i<j.length&&c.length>0;i++){k=j[i],g=F.getFeed(d,k.id()),h=true;while(h&&g&&k.max()>g
.values.length){h=_(v,f,g,c);}}};var _=function(v,f,c,d){for(var i=0;i<d.length;i++){var e=d[i];if(b
.addable(v,f,c.id,e)){c.values.push(e);d.splice(i,1);return true;}}return false;};return C;});define
('sap/viz/vizservices/service/bvr/switch/AliasMapping',['sap/viz/vizservices/common/feed/FeedUtil','sap
/viz/vizservices/service/feed/FeedService','sap/viz/vizservices/common/feed/FeedConst','sap/viz/vizservices
/common/metadata/bindingdef/BindingDefUtils','sap/viz/vizservices/common/metadata/bindingdef/BindingDefConst'
],function(F,a,b,B,c){var A={};var _={"XY":{"mapTo":["TimeScatter","Pie","Scatter","Bubble","TreeMap"
,"HeatMap","TagCloud","Numeric","Bullet"],"categoryAxis":{"Bullet,HeatMap":"categoryAxis","Bubble,Pie
,Scatter,TimeScatter":"color","TreeMap":"title","TagCloud":"text"},"color":{"Bullet":"color","Bubble
,Scatter,TimeScatter":"shape","HeatMap":"categoryAxis2"},"valueAxis":{"Bubble,Scatter,TimeScatter":"valueAxis"
,"Pie":"size","TreeMap,TagCloud":"weight","HeatMap":"color","Numeric":"value","Bullet":"actualValues"
},"dataFrame":{"Bubble,Pie,Scatter,TagCloud":"dataFrame"},"trellisRow":{"Bubble,Scatter,Pie":"trellisRow"
},"trellisColumn":{"Bubble,Scatter,Pie":"trellisColumn"}},"Pie":{"mapTo":["XYY","Scatter","Bubble","TreeMap"
,"HeatMap","TagCloud","TimeLine","TimeScatter","Numeric","Radar","Bullet","Waterfall","StackedWaterfall"
],"size":{"XYY,Scatter,Bubble,Radar,Waterfall,StackedWaterfall,TimeLine,TimeScatter":"valueAxis","Numeric"
:"value","Bullet":"actualValues","TreeMap,TagCloud":"weight","HeatMap":"color",},"color":{"XYY,Bullet
,HeatMap,Radar,Waterfall,StackedWaterfall":"categoryAxis","TreeMap":"title","TagCloud":"text","Scatter
,Bubble,TimeLine,TimeScatter":"color"},"dataFrame":{"XYY,Scatter,Bubble,TagCloud,Radar":"dataFrame",
},"trellisRow":{"XYY,Scatter,Bubble,Radar":"trellisRow"},"trellisColumn":{"XYY,Scatter,Bubble,Radar"
:"trellisColumn"}},"XYY":{"mapTo":["TreeMap","HeatMap","TagCloud","Numeric","Bullet","Bubble","Scatter"
,"TimeScatter"],"categoryAxis":{"Bullet,HeatMap":"categoryAxis","TreeMap":"title","TagCloud":"text","Bubble
,Scatter,TimeScatter":"color"},"color":{"Bullet":"color","HeatMap":"categoryAxis2","Bubble,Scatter,TimeScatter"
:"shape"},"valueAxis":{"TreeMap,TagCloud":"weight","HeatMap":"color","Numeric":"value","Bullet":"actualValues"
,"Bubble,Scatter,TimeScatter":"valueAxis"},"valueAxis2":{"Bullet":"targetValues","Bubble,Scatter":"valueAxis2"
},"dataFrame":{"TagCloud":"dataFrame","Bubble,Scatter":"dataFrame"}},"TimeLine":{"mapTo":["TagCloud"
,"TreeMap","HeatMap","Bullet","Radar","Waterfall","StackedWaterfall","Numeric"],"valueAxis":{"Radar,Waterfall
,StackedWaterfall":"valueAxis","HeatMap":"color","Bullet":"actualValues","TreeMap,TagCloud":"weight"
,"Numeric":"value"},"color":{"HeatMap,Bullet,Radar,Waterfall,StackedWaterfall":"categoryAxis","TreeMap"
:"title","TagCloud":"text"}},"TimeScatter":{"mapTo":["Scatter","TagCloud","TreeMap","HeatMap","Bullet"
,"Radar","Waterfall","StackedWaterfall","Numeric"],"valueAxis":{"Scatter,Radar,Waterfall,StackedWaterfall"
:"valueAxis","HeatMap":"color","Bullet":"actualValues","TreeMap,TagCloud":"weight","Numeric":"value"
},"color":{"Scatter":"color","HeatMap,Bullet,Radar,Waterfall,StackedWaterfall":"categoryAxis","TreeMap"
:"title","TagCloud":"text"},"shape":{"Scatter":"shape","HeatMap":"categoryAxis2","Bullet,Radar,StackedWaterfall"
:"color"},"bubbleWidth":{"Scatter":"valueAxis2","TagCloud,TreeMap":"color","Bullet":"targetValues"}}
,"Bubble":{"mapTo":["TreeMap","HeatMap","TagCloud","Numeric","Radar","Bullet","Waterfall","StackedWaterfall"
],"valueAxis":{"Radar,Waterfall,StackedWaterfall":"valueAxis","HeatMap":"color","Bullet":"actualValues"
,"TreeMap,TagCloud":"weight","Numeric":"value"},"valueAxis2":{"Bullet":"targetValues","TreeMap,TagCloud"
:"color"},"shape":{"Bullet,Radar,StackedWaterfall":"color","HeatMap":"categoryAxis2"},"color":{"HeatMap
,Bullet,Radar,Waterfall,StackedWaterfall":"categoryAxis","TreeMap":"title","TagCloud":"text"},"bubbleWidth"
:{"Bullet":"additionalValues"},"dataFrame":{"TagCloud,Radar":"dataFrame"},"trellisRow":{"Radar":"trellisRow"
},"trellisColumn":{"Radar":"trellisColumn"}},"Scatter":{"mapTo":["TreeMap","HeatMap","TagCloud","Numeric"
,"Radar","Bullet","Waterfall","StackedWaterfall"],"valueAxis":{"Radar,Waterfall,StackedWaterfall":"valueAxis"
,"HeatMap":"color","Bullet":"actualValues","TreeMap,TagCloud":"weight","Numeric":"value"},"valueAxis2"
:{"Bullet":"targetValues","TreeMap,TagCloud":"color"},"shape":{"Bullet,Radar,StackedWaterfall":"color"
,"HeatMap":"categoryAxis2"},"color":{"Bullet,HeatMap,Radar,Waterfall,StackedWaterfall":"categoryAxis"
,"TreeMap":"title","TagCloud":"text",},"dataFrame":{"Pie,TagCloud,Radar":"dataFrame"},"trellisRow":{"Radar"
:"trellisRow"},"trellisColumn":{"Radar":"trellisColumn"}},"TreeMap":{"mapTo":["HeatMap","TagCloud","Numeric"
,"Radar","Bullet","Waterfall","StackedWaterfall"],"title":{"Bullet,HeatMap,Radar,Waterfall,StackedWaterfall"
:"categoryAxis","TagCloud":"text"},"color":{"HeatMap,TagCloud":"color","Bullet":"targetValues"},"weight"
:{"Radar,Waterfall,StackedWaterfall":"valueAxis","Bullet":"actualValues","Numeric":"value","TagCloud"
:"weight"}},"TagCloud":{"mapTo":["Numeric","Radar","Bullet","HeatMap","Waterfall","StackedWaterfall"
],"text":{"Bullet,Radar,HeatMap,Waterfall,StackedWaterfall":"categoryAxis"},"color":{"HeatMap":"color"
,"Bullet":"targetValues"},"weight":{"Waterfall,Radar,StackedWaterfall":"valueAxis","Bullet":"actualValues"
,"Numeric":"value"},"dataFrame":{"Radar":"dataFrame",}},"HeatMap":{"mapTo":["Numeric","Radar","Bullet"
,"Waterfall","StackedWaterfall"],"categoryAxis":{"Bullet,Radar,Waterfall,StackedWaterfall":"categoryAxis"
},"color":{"Radar,Waterfall,StackedWaterfall":"valueAxis","Numeric":"value","Bullet":"actualValues"}
,"categoryAxis2":{"Bullet,Radar,StackedWaterfall":"color"}},"Bullet":{"mapTo":["Numeric","Radar","Waterfall"
,"StackedWaterfall"],"categoryAxis":{"Radar,Waterfall,StackedWaterfall":"categoryAxis"},"color":{"Radar
,StackedWaterfall":"color"},"actualValues":{"Radar,Waterfall,StackedWaterfall":"valueAxis","Numeric"
:"value"}},"Radar":{"mapTo":["Numeric"],"valueAxis":{"Numeric":"value"}},"Waterfall":{"mapTo":["Numeric"
],"valueAxis":{"Numeric":"value"}},"StackedWaterfall":{"mapTo":["Numeric"],"valueAxis":{"Numeric":"value"
}}};var d=function(g,m){if(!g||!m){return;}if(!_.hasOwnProperty(m)){_[m]={"mapTo":[g]};}else{var n=_
[m].mapTo||[];if(n.indexOf(g)===-1){n.push(g);}_[m].mapTo=n;}};var e=function(m){if(arguments.length
===1){return m;}var n=arguments[1];if(!m.hasOwnProperty(n)){m[n]={};}var o=Array.prototype.slice.call
(arguments,0);o.splice(0,2,m[n]);return e.apply(null,o);};var f=function(g,h,m,i){if(!g||!m||g===m){return
;}var M=e(_,g,h);var n=Object.keys(M).some(function(o){if(M[o]===i){if(o.split(',').indexOf(m)<0){M[o
+','+m]=i;delete M[o];}return true;}});if(!n){M[m]=i;}};var g,t,h,i,j;for(g in _){for(h in _[g]){if(h
==="mapTo"){_[g][h].forEach(function(m){d(g,m);});continue;}for(t in _[g][h]){i=_[g][h][t];j=t.split
(',');j.forEach(function(m){f(m,i,g,h);});}}}A.aliasExisted=function(g,m){if(!g||!m){return false;}var
 n=_[g]?_[g].mapTo||[]:[];return n.indexOf(m)===-1?false:true;};var k=function(g,m,n,o,p,q,r,s){var u
=Object.keys(_[g]);var w=F.getMNDEnumeration(o);p.forEach(function(h){if(B.get(n,h.id).type()!==r){return
;}var x=false;if(u.indexOf(h.id)!==-1){var y=h.id;var z=l(_[g][y],m);if(z){x=true;var C=h.values;if(C
){var D={'id':z,'values':[]};q.push(D);C.forEach(function(v){if(v.type===b.TYPE_MND&&v.measureNames)
{delete v.measureNames;}if(a.switchable(o,q,D.id,v)){D.values.push(v);}else{s&&s.push(v);}});}}}if(!x
&&s&&h.values){h.values.forEach(function(v){s.push(v);});}});return q;};A.map=function(g,m,n,o,p,r){if
(!g||!m){return[];}var q=[];q=k(g,m,n,o,p,q,c.TYPE_MEASURE,r);q=k(g,m,n,o,p,q,c.TYPE_DIMENSION,r);return
 q;};var l=function(m,n){for(var o in m){if(o.split(',').indexOf(n)!==-1){return m[o];}}return null;
};return A;});define('sap/viz/vizservices/service/bvr/switch/ChartCategories',[],function(){var C={}
;var _={"XY":["info/bar","info/column","info/stacked_bar","info/stacked_column","info/100_stacked_bar"
,"info/100_stacked_column","info/line","info/horizontal_line","info/combination","info/horizontal_combination"
,"info/area","info/horizontal_area","info/100_area","info/100_horizontal_area","info/mekko","info/100_mekko"
,"info/horizontal_mekko","info/100_horizontal_mekko","info/trellis_bar","info/trellis_column","info/trellis_stacked_bar"
,"info/trellis_stacked_column","info/trellis_100_stacked_bar","info/trellis_100_stacked_column","info
/trellis_line","info/trellis_horizontal_line","info/trellis_combination","info/trellis_horizontal_combination"
,"info/trellis_area","info/trellis_horizontal_area","info/trellis_100_area","info/trellis_100_horizontal_area"
],"XYY":["info/dual_bar","info/dual_column","info/dual_line","info/dual_horizontal_line","info/dual_combination"
,"info/dual_horizontal_combination","info/dual_stacked_combination","info/dual_horizontal_stacked_combination"
,"info/trellis_dual_bar","info/trellis_dual_column","info/trellis_dual_line","info/trellis_dual_horizontal_line"
],"Bubble":["info/bubble","info/trellis_bubble"],"Pie":["info/pie","info/donut","info/trellis_donut"
,"info/trellis_pie"],"Scatter":["info/scatter","info/trellis_scatter"],"Bullet":["info/bullet","info
/vertical_bullet"],"TreeMap":["info/treemap"],"HeatMap":["info/heatmap"],"TagCloud":["info/tagcloud"
],"TimeLine":["info/timeseries_line"],"TimeScatter":["info/timeseries_scatter","info/timeseries_bubble"
],"Numeric":["info/number"],"Radar":["info/radar","info/trellis_radar"],"Waterfall":["info/waterfall"
,"info/horizontal_waterfall"],"StackedWaterfall":["info/stacked_waterfall","info/horizontal_stacked_waterfall"
]};C.findCategory=function(t){for(var k in _){if(_.hasOwnProperty(k)){if(_[k].indexOf(t)>=0){return k
;}}}};return C;});define('sap/viz/vizservices/service/bvr/switch/NameMapping',['sap/viz/vizservices/common
/feed/FeedUtil','sap/viz/vizservices/service/feed/FeedService','sap/viz/vizservices/common/feed/FeedConst'
,'sap/viz/vizservices/common/metadata/bindingdef/BindingDefUtils','sap/viz/vizservices/common/metadata
/bindingdef/BindingDefConst','sap/viz/vizservices/common/metadata/MetadataFactory'],function(F,a,b,B
,c,M){var N={};var _=function(f,t,d,e,g,r){var h=F.buildEmptyFeeds(t);d.forEach(function(i){if(B.get
(f,i.id).type()!==g){return;}var j=false;h.forEach(function(k){if(i.id==k.id){j=true;var v=i.values;if
(v){var n={'id':i.id,'values':[]};e.push(n);v.forEach(function(l){if(l.type===b.TYPE_MND&&l.measureNames
){delete l.measureNames;}if(a.switchable(t,e,n.id,l)){n.values.push(l);}else{r&&r.push(l);}});}}});if
(!j&&r&&i.values){i.values.forEach(function(v){r.push(v);});}});return e;};N.map=function(f,t,d,r){var
 e=[];e=_(f,t,d,e,c.TYPE_MEASURE,r);e=_(f,t,d,e,c.TYPE_DIMENSION,r);return e;};return N;});define("sap
/viz/vizservices/common/LanguageLoader",[],function(){sap.viz.extapi.env.Language.register({id:'language'
,value:{VIZ_SERVICES_INVALID_PARAMETER:"Invalid Parameter.",}});});define('sap/viz/vizservices/service
/bvr/BVRService',['sap/viz/vizservices/common/feed/FeedUtil','sap/viz/vizservices/common/metadata/bindingdef
/BindingDefUtils','sap/viz/vizservices/common/feed/FeedConst','sap/viz/vizservices/service/bvr/feeders
/MNDFeeder','sap/viz/vizservices/service/bvr/feeders/TimeFeeder','sap/viz/vizservices/service/bvr/feeders
/CommonFeeder','sap/viz/vizservices/service/bvr/switch/AliasMapping','sap/viz/vizservices/service/bvr
/switch/ChartCategories','sap/viz/vizservices/service/bvr/switch/NameMapping','sap/viz/vizservices/common
/utils/Utils','sap/viz/vizservices/common/metadata/MetadataFactory','sap/viz/vizservices/common/LanguageLoader'
,'sap/viz/vizservices/service/feed/FeedService','exports'],function(F,B,a,M,T,C,A,b,N,u,c,L,d){var e
={};e.switchFeeds=function(i,j,t,k){var q=[{typeValidator:u.isString},{typeValidator:F.isArrayOfFeedItem
},{typeValidator:u.isString}];if(!u.checkArgs(arguments,q)||c.get(i)===null||c.get(t)===null){throw u
.substitute(sap.viz.extapi.env.Language.getResourceString('VIZ_SERVICES_INVALID_PARAMETER'));}j=F.removeInvalid
(i,j);var r=c.get(i).getBindingDefsWithBVRSorting();var v=r.map(function(J){return F.getFeed(j,J.id(
));}).filter(function(J){return!!J;});var w=F.buildEmptyFeeds(t);var x=b.findCategory(i);var y=b.findCategory
(t);var z=[];if(x&&y&&A.aliasExisted(x,y)){w=F.merge(w,A.map(x,y,i,t,v,z));}else{w=F.merge(w,N.map(i
,t,v,z));}var D=z.slice(0);var E=[];E.push("dataFrame");var G=g(t,E);w=s(t,w,z,G).feedItems;if(i!==t
){w=p(t,w,D);}var H=[];v.forEach(function(J){J&&J.values&&J.values.forEach(function(K){if(K.type!==a
.TYPE_MND&&D.indexOf(K)!==-1){H.push(K);}})});h(t,w,H);var I={"type":t,"feedItems":w};if((!k||k.considerMND
!==false)&&f(I)){w=s(I.type,I.feedItems,[{"id":a.ID_MND,"type":a.TYPE_MND,"measureNames":F.getMNDEnumeration
(I.type)}]).feedItems;}return{'type':t,'feedItems':w};};e.suggestFeeds=function(t,i,j,k){var q=[{typeValidator
:u.isString},{typeValidator:F.isArrayOfFeedItem},{typeValidator:F.isArrayOfAnalysisObject},{typeValidator
:u.isObject,isOptional:true}];if(!u.checkArgs(arguments,q)||c.get(t)===null){throw u.substitute(sap.viz
.extapi.env.Language.getResourceString('VIZ_SERVICES_INVALID_PARAMETER'));}i=F.removeInvalid(t,i);var
 r=F.buildEmptyFeeds(t);i=F.merge(r,i);i=F.cloneFeeds(i);var v=[];v.push("dataFrame");var w=g(t,v);var
 x=j.slice(0);var y=s(t,i,j,w);var z=F.indexOfMNDInValues(x);if(z!==-1){x.splice(z,1);}h(t,i,x);if((
!k||k.considerMND!==false)&&f(y)){y=s(y.type,y.feedItems,[{"id":a.ID_MND,"type":a.TYPE_MND,"measureNames"
:F.getMNDEnumeration(t)}],w);}return y;};var f=function(r){var v=d.validate(r.type,r.feedItems);if(!v
.valid){var j=0;var k=[];var q=false;var t=v.results.bindings;for(var i in t){if(t[i].missing){if(!t
[i].associate||k.indexOf(t[i].associate)<0){k.push(i);j+=t[i].missing;}}else if(t[i].allowMND){q=true
;}}if((q&&j===0)||(j===1&&t[k[0]].allowMND)){return true;}}return false;};var s=function(t,i,j,k){var
 q;if(k&&k.length){q=[];i.forEach(function(r){if(k.indexOf(r.id)!==-1){q.push(r);}});}else{q=i;}_(t,i
,j.slice(0),q);return{'type':t,'feedItems':i};};var g=function(t,j){var k=c.get(t).getBindingDefs();var
 r=[];for(var i=0;i<k.length;i++){if(j.indexOf(k[i].id())===-1){r.push(k[i].id());}}return r;};var _
=function(t,i,r,j){j=j||i;T.feed(t,j,r);var k=F.indexOfMNDInValues(r);if(k===-1){C.feed(t,i,r,j);}else
{var q=r;r=r.splice(k);var v=r.splice(1);var w=r;C.feed(t,i,q,j);M.feed(t,j,w);C.feed(t,i,v,j);}};var
 h=function(v,j,k){var q=[],r={};j.forEach(function(y){r[y.id]=[];y.values.forEach(function(z,D){if(k
.indexOf(z)!==-1){q.push(z);r[y.id].push(D);}});});var t=[];k.forEach(function(y){if(q.indexOf(y)!==-1
){t.push(y);}});q=t;var i,w,x;for(i=0;i<q.length;i++){w=q[i];x=o(j,w);l(v,j,r,function(y,z){if(z===w
){return true;}if(z.id==w.id&&z!==w&&q.indexOf(z)>i){m(x,w,y,z);return true;}});}for(i=0;i<q.length;i
++){w=q[i];x=o(j,w);l(v,j,r,function(y,z){if(z===w){return true;}var D=n(v,y,w)&&n(v,x,z);if((y.id==
=x.id||D)&&q.indexOf(z)>i){m(x,w,y,z);return true;}});}};var l=function(v,i,q,r){var t=c.get(v).getBindingDefsWithBVRSorting
();for(var j=0;j<t.length;j++){var w=t[j],x=F.getFeed(i,w.id());if(x==null){continue;}var I=false;var
 y=q[x.id]||[];for(var k=0;k<y.length;k++){var z=y[k];var D=x.values[z];var R=r(x,D);if(R){return;}}
}};var m=function(i,j,k,q){var I=i.values.indexOf(j);var r=k.values.indexOf(q);if(I!=-1&&r!=-1){var t
=i.values[I];i.values[I]=k.values[r];k.values[r]=t;}};var n=function(t,j,k){if(!B.support(B.get(t,j.id
),k)){return false;}var q=j.values;for(var i=0;i<q.length;i++){var r=q[i];if(r.id==k.id){return false
;}}return true;};var o=function(i,j){var t;for(t in i){if(i[t].values.indexOf(j)!=-1){return i[t];}}return
 null;};var p=function(v,q,r){var t=false;var w=F.getFeed(q,a.ID_TRELLIS_ROW),x=F.getFeed(q,a.ID_TRELLIS_COLUMN
);if(w&&x&&w.values.length===0&&x.values.length===0){t=true;}var y=c.get(v).getBindingDefsWithBVRSorting
();for(var i=0;i<y.length;i++){var z=y[i],D=F.getFeed(q,z.id());var E=(D.values.length<z.min()||(t&&D
===w&&!D.values.length));for(var j=0;E&&j<y.length;j++){var G=y[j];var H=F.getFeed(q,G.id());if(B.get
(v,D.id).type()!=B.get(v,H.id).type()){continue;}var k=H.values.length-1;var I=G.min()>1?G.min():1;while
(k>=0&&D.id!==a.ID_DATAFRAME&&E&&H.values.length>I){var J=H.values.splice(k,1)[0];if(J.type!==a.TYPE_MND
&&d.addable(v,q,D.id,J)){D.values.push(J);r&&r.push(J);}else{H.values.splice(k,0,J);}k--;E=(D.values
.length<z.min()||(t&&D===w&&!D.values.length));}}}return q;};return e;});define('sap/viz/vizservices
/api/BVRService',['sap/viz/vizservices/service/bvr/BVRService','require'],function(B){var a=sap.viz.vizservices
.BVRService={};a.suggestFeeds=function(t,f,b,o){return B.suggestFeeds(t,f,b,o);};a.switchFeeds=function
(f,b,t,o){return B.switchFeeds(f,b,t,o);};return a;});define('sap/viz/vizservices/common/Version',[]
,function(){return'1.4.0';});define('sap/viz/vizservices/api/Version',['sap/viz/vizservices/common/Version'
,'require'],function(V){sap.viz.vizservices.VERSION=V;return V;});define('sap/viz/vizservices/common
/binding/generators/BindingGeneratorBase',['sap/viz/vizservices/common/metadata/MetadataFactory'],function
(M){var B=function(s){this._visualizationType=s.visualizationType;this._bindingDefs=M.get(s.visualizationType
).getBindingDefs();};B.prototype.generate=function(f){};return B;});define('sap/viz/vizservices/common
/binding/generators/FTBindingGenerator',['sap/viz/vizservices/common/utils/OOUtil','sap/viz/vizservices
/common/metadata/bindingdef/BindingDefUtils','sap/viz/vizservices/common/feed/FeedConst','sap/viz/vizservices
/common/viz/ChartConst','sap/viz/vizservices/common/binding/generators/BindingGeneratorBase'],function
(O,B,F,C,a){var b=function(s){b.superclass.constructor.apply(this,arguments);};O.extend(b,a);function
 c(v,f){return f.reduce(function(l,d){if(d.values.length){var e=B.get(v,d.id);if(e&&e.mndEnumerable(
)){l.push(d.id);}}return l;},[]);}b.prototype.generate=function(f){var v=c(this._visualizationType,f
);var d=this._visualizationType;var e=[];f.forEach(function(g){var h=g.values||[];var l=[];if(h.length
===0){return;}for(var j=0;j<h.length;j++){var i=h[j];if(i.type===F.TYPE_MND){l.push({measureNames:v}
);}else{l.push(i.id);}}e.push({feed:g.id,source:l});});return e;};return b;});define('sap/viz/vizservices
/common/binding/BindingConst',[],function(){var B={};B.ANALYSIS_AXIS="analysisAxis";B.MEASURE_VALUES_GROUP
="measureValuesGroup";B.MEASURE_NAMES_DIMENSION="measureNamesDimension";return B;});define('sap/viz/vizservices
/common/binding/generators/XTBindingGenerator',['sap/viz/vizservices/common/utils/OOUtil','sap/viz/vizservices
/common/viz/ChartConst','sap/viz/vizservices/common/feed/FeedConst','sap/viz/vizservices/common/metadata
/bindingdef/BindingDefConst','sap/viz/vizservices/common/binding/BindingConst','sap/viz/vizservices/common
/binding/generators/BindingGeneratorBase','sap/viz/vizservices/common/utils/Utils'],function(O,C,F,B
,c,d,U){var X=function(s){X.superclass.constructor.apply(this,arguments);};O.extend(X,d);X.prototype
.generate=function(f){var b=m(f);return g(this._bindingDefs,b);};var m=function(f){var b={};f.forEach
(function(a){var v=a.values;if(v.length===0){return;}var e=a.id.indexOf('multiplier')!==-1?a.id.split
('.')[0]:a.id;b[e]=[];for(var i=0;i<v.length;++i){var h=v[i];var o;if(h.type===F.TYPE_MND){o=":mnd";
}else{o=h.id;}b[e].push(o);}});return b;};var g=function(e,f){var h=[],o=[B.TYPE_MEASURE,B.TYPE_DIMENSION
],i=1,j=1;e=e.map(function(a){return{id:a.id(),name:a.name(),type:a.type(),min:a.min(),max:a.max(),mndMode
:a.mndMode(),bvrPriority:a.bvrPriority(),bvrMNDPriority:a.bvrMNDPriority()};}).sort(function(a,b){if
(a.type!==b.type){return o.indexOf(a.type)-o.indexOf(b.type);}else{return a.bvrPriority-b.bvrPriority
;}});e.filter(function(a){if(a.type!==B.TYPE_MEASURE){return true;}var b=f[a.id];if(!b){return false
;}h.push({feed:a.id,source:[{"type":c.MEASURE_VALUES_GROUP,"index":i++}]});return false;}).filter(function
(a){if(a.type!==B.TYPE_DIMENSION){return true;}var b=f[a.id];if(!b){return false;}h.push({feed:a.id,source
:[{"type":c.ANALYSIS_AXIS,"index":j++}]});if(b.indexOf(":mnd")>-1){if(b[0]===":mnd"){h[h.length-1].source
.unshift({"type":c.MEASURE_NAMES_DIMENSION});}else{h[h.length-1].source.push({"type":c.MEASURE_NAMES_DIMENSION
});}}return false;});return h;};return X;});define('sap/viz/vizservices/common/binding/BindingGeneratorFactory'
,['sap/viz/vizservices/common/binding/generators/FTBindingGenerator','sap/viz/vizservices/common/binding
/generators/XTBindingGenerator'],function(F,X,I){var B={'create':function(v,d){var g;var s={'visualizationType'
:v};if("FlatTableDataset"===d){g=new F(s);}else if("CrossTableDataset"===d){g=new X(s);}return g;}};return
 B;});define('sap/viz/vizservices/service/binding/BindingService',['sap/viz/vizservices/common/binding
/BindingGeneratorFactory','exports'],function(B){var a={};a.generateBindings=function(t,f,d){var g=B
.create(t,d);return g.generate(f);};return a;});define('sap/viz/vizservices/common/viz/VizUtils',['jquery'
,'sap/viz/vizservices/common/metadata/MetadataFactory','sap/viz/vizservices/common/utils/Utils'],function
($,M,U){var V={};V.getValidProperties=function(s,t){var r=U.clone(s);M.get(t).removeInvalidProperty(r
);return r;};V.mergeProperties=function(v,d,s){var m=v&&M.get(v);var p;if(m){p=m.getPropertiesDef();
}d=d||{};for(var i=2;i<arguments.length;i++){var a=arguments[i];V._mergePropertiesByDef(p,d,a);}return
 d;};V.mergeScales=function(t,s){t=t||[];var a=[];var f=false;for(var i in s){f=false;for(var j in t
){if(t[j].feed===s[i].feed){t[j]=s[i];f=true;break;}}if(!f){a.push(s[i]);}}if(a.length>0){t=t.concat
(a);}return t;};V._mergePropertiesByDef=function(d,a,s){for(var b in s){var c=s[b];var e=d?d[b]:d;if
(c!==undefined){if(e===null||!$.isPlainObject(c)){a[b]=c;}else{var f=a[b];if(!f||!$.isPlainObject(f)
){f=a[b]={};}V._mergePropertiesByDef(e,f,c);}}}};return V;});define('sap/viz/vizservices/service/property
/PropertyService',['sap/viz/vizservices/common/viz/VizUtils','exports'],function(V){var P={};P.removeInvalid
=function(t,p){return V.getValidProperties(p,t);};P.mergeProperties=function(t,d,s,a){return V.mergeProperties
.apply(null,arguments);};return P;});define('sap/viz/vizservices/service/scale/ScaleService',['sap/viz
/vizservices/common/viz/VizUtils','exports'],function(V){var S={};S.mergeScales=function(t,d,s){return
 V.mergeScales(d,s);};return S;});(function(){var l=define&&define.__autoLoad;if(l&&l.length){define
.__autoLoad=[];require(l);}})();if(define&&define.__exportNS){define=define.__exportNS;}if(window.__sap_viz_internal_requirejs_nextTick__
!==undefined){if(requirejs&&requirejs.s&&requirejs.s.contexts&&requirejs.s.contexts._){requirejs.s.contexts
._.nextTick=window.__sap_viz_internal_requirejs_nextTick__;}window.__sap_viz_internal_requirejs_nextTick__
=undefined;}