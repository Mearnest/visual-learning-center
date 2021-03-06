/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);

/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * http://github.com/jeresig/jquery.hotkeys
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/

(function(b){b.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/",224:"meta",219:"[",221:"]"},shiftNums:{"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}};function a(d){if(typeof d.data!=="string"){return}var c=d.handler,e=d.data.toLowerCase().split(" ");d.handler=function(n){if(this!==n.target&&(/textarea|select/i.test(n.target.nodeName)||n.target.type==="text")){return}var h=n.type!=="keypress"&&b.hotkeys.specialKeys[n.which],o=String.fromCharCode(n.which).toLowerCase(),k,m="",g={};if(n.altKey&&h!=="alt"){m+="alt+"}if(n.ctrlKey&&h!=="ctrl"){m+="ctrl+"}if(n.metaKey&&!n.ctrlKey&&h!=="meta"){m+="meta+"}if(n.shiftKey&&h!=="shift"){m+="shift+"}if(h){g[m+h]=true}else{g[m+o]=true;g[m+b.hotkeys.shiftNums[o]]=true;if(m==="shift+"){g[b.hotkeys.shiftNums[o]]=true}}for(var j=0,f=e.length;j<f;j++){if(g[e[j]]){return c.apply(this,arguments)}}}}b.each(["keydown","keyup","keypress"],function(){b.event.special[this]={add:a}})})(jQuery);


/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);
/*
 * jQuery hashchange event - v1.2 - 2/11/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,i,b){var j,k=$.event.special,c="location",d="hashchange",l="href",f=$.browser,g=document.documentMode,h=f.msie&&(g===b||g<8),e="on"+d in i&&!h;function a(m){m=m||i[c][l];return m.replace(/^[^#]*#?(.*)$/,"$1")}$[d+"Delay"]=100;k[d]=$.extend(k[d],{setup:function(){if(e){return false}$(j.start)},teardown:function(){if(e){return false}$(j.stop)}});j=(function(){var m={},r,n,o,q;function p(){o=q=function(s){return s};if(h){n=$('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;q=function(){return a(n.document[c][l])};o=function(u,s){if(u!==s){var t=n.document;t.open().close();t[c].hash="#"+u}};o(a())}}m.start=function(){if(r){return}var t=a();o||p();(function s(){var v=a(),u=q(t);if(v!==t){o(t=v,u);$(i).trigger(d)}else{if(u!==t){i[c][l]=i[c][l].replace(/#.*/,"")+"#"+u}}r=setTimeout(s,$[d+"Delay"])})()};m.stop=function(){if(!n){r&&clearTimeout(r);r=0}};return m})()})(jQuery,this);

/*
 * SVG Icon Loader 2.0
 *
 * jQuery Plugin for loading SVG icons from a single file
 *
 * Copyright (c) 2009 Alexis Deveria
 * http://a.deveria.com
 *
 * MIT License

How to use:

1. Create the SVG master file that includes all icons:

The master SVG icon-containing file is an SVG file that contains 
<g> elements. Each <g> element should contain the markup of an SVG
icon. The <g> element has an ID that should 
correspond with the ID of the HTML element used on the page that should contain 
or optionally be replaced by the icon. Additionally, one empty element should be
added at the end with id "svg_eof".

2. Optionally create fallback raster images for each SVG icon.

3. Include the jQuery and the SVG Icon Loader scripts on your page.

4. Run $.svgIcons() when the document is ready:

$.svgIcons( file [string], options [object literal]);

File is the location of a local SVG or SVGz file.

All options are optional and can include:

- 'w (number)': The icon widths

- 'h (number)': The icon heights

- 'fallback (object literal)': List of raster images with each
	key being the SVG icon ID to replace, and the value the image file name.
	
- 'fallback_path (string)': The path to use for all images
	listed under "fallback"
	
- 'replace (boolean)': If set to true, HTML elements will be replaced by,
	rather than include the SVG icon.

- 'placement (object literal)': List with selectors for keys and SVG icon ids
	as values. This provides a custom method of adding icons.

- 'resize (object literal)': List with selectors for keys and numbers
	as values. This allows an easy way to resize specific icons.
	
- 'callback (function)': A function to call when all icons have been loaded. 
	Includes an object literal as its argument with as keys all icon IDs and the 
	icon as a jQuery object as its value.

- 'id_match (boolean)': Automatically attempt to match SVG icon ids with
	corresponding HTML id (default: true)
	
- 'no_img (boolean)': Prevent attempting to convert the icon into an <img>
	element (may be faster, help for browser consistency)

- 'svgz (boolean)': Indicate that the file is an SVGZ file, and thus not to
	parse as XML. SVGZ files add compression benefits, but getting data from
	them fails in Firefox 2 and older.

5. To access an icon at a later point without using the callback, use this:
	$.getSvgIcon(id (string));

This will return the icon (as jQuery object) with a given ID.
	
6. To resize icons at a later point without using the callback, use this:
	$.resizeSvgIcons(resizeOptions) (use the same way as the "resize" parameter)


Example usage #1:

$(function() {
	$.svgIcons('my_icon_set.svg'); // The SVG file that contains all icons
	// No options have been set, so all icons will automatically be inserted 
	// into HTML elements that match the same IDs. 
});

Example usage #2:

$(function() {
	$.svgIcons('my_icon_set.svg', { // The SVG file that contains all icons
		callback: function(icons) { // Custom callback function that sets click
									// events for each icon
			$.each(icons, function(id, icon) {
				icon.click(function() {
					alert('You clicked on the icon with id ' + id);
				});
			});
		}
	}); //The SVG file that contains all icons
});

Example usage #3:

$(function() {
	$.svgIcons('my_icon_set.svgz', { // The SVGZ file that contains all icons
		w: 32,	// All icons will be 32px wide
		h: 32,  // All icons will be 32px high
		fallback_path: 'icons/',  // All fallback files can be found here
		fallback: {
			'#open_icon': 'open.png',  // The "open.png" will be appended to the
									   // HTML element with ID "open_icon"
			'#close_icon': 'close.png',
			'#save_icon': 'save.png'
		},
		placement: {'.open_icon','open'}, // The "open" icon will be added
										  // to all elements with class "open_icon"
		resize: function() {
			'#save_icon .svg_icon': 64  // The "save" icon will be resized to 64 x 64px
		},
		
		callback: function(icons) { // Sets background color for "close" icon 
			icons['close'].css('background','red');
		},
		
		svgz: true // Indicates that an SVGZ file is being used
		
	})
});

*/


(function($) {
	var svg_icons = {}, fixIDs;

	$.svgIcons = function(file, opts) {
		var svgns = "http://www.w3.org/2000/svg",
			xlinkns = "http://www.w3.org/1999/xlink",
			icon_w = opts.w?opts.w : 24,
			icon_h = opts.h?opts.h : 24,
			elems, svgdoc, testImg,
			icons_made = false, data_loaded = false, load_attempts = 0,
			ua = navigator.userAgent, isOpera = !!window.opera, isSafari = (ua.indexOf('Safari/') > -1 && ua.indexOf('Chrome/')==-1),
			data_pre = 'data:image/svg+xml;charset=utf-8;base64,';
			
			if(opts.svgz) {
				var data_el = $('<object data="' + file + '" type=image/svg+xml>').appendTo('body').hide();
				try {
					svgdoc = data_el[0].contentDocument;
					data_el.load(getIcons);
					getIcons(0, true); // Opera will not run "load" event if file is already cached
				} catch(err1) {
					useFallback();
				}
			} else {
				var parser = new DOMParser();
				$.ajax({
					url: file,
					dataType: 'string',
					success: function(data) {
						if(!data) {
							$(useFallback);
							return;
						}
						svgdoc = parser.parseFromString(data, "text/xml");
						$(function() {
							getIcons('ajax');
						});
					},
					error: function(err) {
						// TODO: Fix Opera widget icon bug
						if(window.opera) {
							$(function() {
								useFallback();
							});
						} else {
							if(err.responseText) {
								svgdoc = parser.parseFromString(err.responseText, "text/xml");

								if(!svgdoc.childNodes.length) {
									$(useFallback);									
								}
								$(function() {
									getIcons('ajax');
								});							
							} else {
								$(useFallback);
							}
						}
					}
				});
			}
			
		function getIcons(evt, no_wait) {
			if(evt !== 'ajax') {
				if(data_loaded) return;
				// Webkit sometimes says svgdoc is undefined, other times
				// it fails to load all nodes. Thus we must make sure the "eof" 
				// element is loaded.
				svgdoc = data_el[0].contentDocument; // Needed again for Webkit
				var isReady = (svgdoc && svgdoc.getElementById('svg_eof'));
				if(!isReady && !(no_wait && isReady)) {
					load_attempts++;
					if(load_attempts < 50) {
						setTimeout(getIcons, 20);
					} else {
						useFallback();
						data_loaded = true;
					}
					return;
				}
				data_loaded = true;
			}
			
			elems = $(svgdoc.firstChild).children(); //.getElementsByTagName('foreignContent');
			
			if(!opts.no_img) {
				var testSrc = data_pre + 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzUiIGhlaWdodD0iMjc1Ij48L3N2Zz4%3D';
				
				testImg = $(new Image()).attr({
					src: testSrc,
					width: 0,
					height: 0
				}).appendTo('body')
				.load(function () {
					// Safari 4 crashes, Opera and Chrome don't
					makeIcons(true);
				}).error(function () {
					makeIcons();
				});
			} else {
				setTimeout(function() {
					if(!icons_made) makeIcons();
				},500);
			}
		}
		
		var setIcon = function(target, icon, id, setID) {
			if(isOpera) icon.css('visibility','hidden');
			if(opts.replace) {
				if(setID) icon.attr('id',id);
				var cl = target.attr('class');
				if(cl) icon.attr('class','svg_icon '+cl);
				target.replaceWith(icon);
			} else {
				
				target.append(icon);
			}
			if(isOpera) {
				setTimeout(function() {
					icon.removeAttr('style');
				},1);
			}
		}
		
		var addIcon = function(icon, id) {
			if(opts.id_match === undefined || opts.id_match !== false) {
				setIcon(holder, icon, id, true);
			}
			svg_icons[id] = icon;
		}
		
		function makeIcons(toImage, fallback) {
			if(icons_made) return;
			if(opts.no_img) toImage = false;
			var holder;
			
			if(toImage) {
				var temp_holder = $(document.createElement('div'));
				temp_holder.hide().appendTo('body');
			} 
			if(fallback) {
				var path = opts.fallback_path?opts.fallback_path:'';
				$.each(fallback, function(id, imgsrc) {
					holder = $('#' + id);
					var icon = $(new Image())
						.attr({
							'class':'svg_icon',
							src: path + imgsrc,
							'width': icon_w,
							'height': icon_h,
							'alt': 'icon'
						});
					
					addIcon(icon, id);
				});
			} else {
				var len = elems.length;
				for(var i = 0; i < len; i++) {
					var elem = elems[i];
					var id = elem.id;
					if(id === 'svg_eof') break;
					holder = $('#' + id);
					var svg = elem.getElementsByTagNameNS(svgns, 'svg')[0];
					var svgroot = document.createElementNS(svgns, "svg");
					svgroot.setAttributeNS(svgns, 'viewBox', [0,0,icon_w,icon_h].join(' '));
					
					// Make flexible by converting width/height to viewBox
					var w = svg.getAttribute('width');
					var h = svg.getAttribute('height');
					svg.removeAttribute('width');
					svg.removeAttribute('height');
					
					var vb = svg.getAttribute('viewBox');
					if(!vb) {
						svg.setAttribute('viewBox', [0,0,w,h].join(' '));
					}
					
					// Not using jQuery to be a bit faster
					svgroot.setAttribute('xmlns', svgns);
					svgroot.setAttribute('width', icon_w);
					svgroot.setAttribute('height', icon_h);
					svgroot.setAttribute("xmlns:xlink", xlinkns);
					svgroot.setAttribute("class", 'svg_icon');

					// Without cloning, Firefox will make another GET request.
					// With cloning, causes issue in Opera/Win/Non-EN
					if(!isOpera) svg = svg.cloneNode(true);
					
					svgroot.appendChild(svg);
			
					if(toImage) {
						// Without cloning, Safari will crash
						// With cloning, causes issue in Opera/Win/Non-EN
						var svgcontent = isOpera?svgroot:svgroot.cloneNode(true);
						temp_holder.empty().append(svgroot);
						var str = data_pre + encode64(temp_holder.html());
						var icon = $(new Image())
							.attr({'class':'svg_icon', src:str});
					} else {
						var icon = fixIDs($(svgroot), i);
					}
					addIcon(icon, id);
				}

			}
			
			if(opts.placement) {
				$.each(opts.placement, function(sel, id) {
					if(!svg_icons[id]) return;
					$(sel).each(function(i) {
						var copy = svg_icons[id].clone();
						if(i > 0 && !toImage) copy = fixIDs(copy, i, true);
						setIcon($(this), copy, id);
					})
				});
			}
			if(!fallback) {
				if(toImage) temp_holder.remove();
				if(data_el) data_el.remove();
				if(testImg) testImg.remove();
			}
			if(opts.resize) $.resizeSvgIcons(opts.resize);
			icons_made = true;

			if(opts.callback) opts.callback(svg_icons);
		}
		
		fixIDs = function(svg_el, svg_num, force) {
			var defs = svg_el.find('defs');
			if(!defs.length) return svg_el;
			
			if(isOpera) {
				var id_elems = defs.find('*').filter(function() {
					return !!this.id;
				});
			} else {
				var id_elems = defs.find('[id]');
			}
			
			var all_elems = svg_el[0].getElementsByTagName('*'), len = all_elems.length;
			
			id_elems.each(function(i) {
				var id = this.id;
				var no_dupes = ($(svgdoc).find('#' + id).length <= 1);
				if(isOpera) no_dupes = false; // Opera didn't clone svg_el, so not reliable
				// if(!force && no_dupes) return;
				var new_id = 'x' + id + svg_num + i;
				this.id = new_id;
				
				var old_val = 'url(#' + id + ')';
				var new_val = 'url(#' + new_id + ')';
				
				// Selector method, possibly faster but fails in Opera / jQuery 1.4.3
// 				svg_el.find('[fill="url(#' + id + ')"]').each(function() {
// 					this.setAttribute('fill', 'url(#' + new_id + ')');
// 				}).end().find('[stroke="url(#' + id + ')"]').each(function() {
// 					this.setAttribute('stroke', 'url(#' + new_id + ')');
// 				}).end().find('use').each(function() {
// 					if(this.getAttribute('xlink:href') == '#' + id) {
// 						this.setAttributeNS(xlinkns,'href','#' + new_id);
// 					}
// 				}).end().find('[filter="url(#' + id + ')"]').each(function() {
// 					this.setAttribute('filter', 'url(#' + new_id + ')');
// 				});

				for(var i = 0; i < len; i++) {
					var elem = all_elems[i];
					if(elem.getAttribute('fill') === old_val) {
						elem.setAttribute('fill', new_val);
					}
					if(elem.getAttribute('stroke') === old_val) {
						elem.setAttribute('stroke', new_val);
					}
					if(elem.getAttribute('filter') === old_val) {
						elem.setAttribute('filter', new_val);
					}
				}
			});
			return svg_el;
		}
		
		function useFallback() {
			if(file.indexOf('.svgz') != -1) {
				var reg_file = file.replace('.svgz','.svg');
				if(window.console) {
					console.log('.svgz failed, trying with .svg');
				}
				$.svgIcons(reg_file, opts);
			} else if(opts.fallback) {
				makeIcons(false, opts.fallback);
			}
		}
				
		function encode64(input) {
			// base64 strings are 4/3 larger than the original string
			if(window.btoa) return window.btoa(input);
			var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
			var output = new Array( Math.floor( (input.length + 2) / 3 ) * 4 );
			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0, p = 0;
		
			do {
				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);
		
				enc1 = chr1 >> 2;
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				enc4 = chr3 & 63;
		
				if (isNaN(chr2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
				}
		
				output[p++] = _keyStr.charAt(enc1);
				output[p++] = _keyStr.charAt(enc2);
				output[p++] = _keyStr.charAt(enc3);
				output[p++] = _keyStr.charAt(enc4);
			} while (i < input.length);
		
			return output.join('');
		}
	}
	
	$.getSvgIcon = function(id, uniqueClone) { 
		var icon = svg_icons[id];
		if(uniqueClone && icon) {
			icon = fixIDs(icon, 0, true).clone(true);
		}
		return icon; 
	}
	
	$.resizeSvgIcons = function(obj) {
		// FF2 and older don't detect .svg_icon, so we change it detect svg elems instead
		var change_sel = !$('.svg_icon:first').length;
		$.each(obj, function(sel, size) {
			var arr = $.isArray(size);
			var w = arr?size[0]:size,
				h = arr?size[1]:size;
			if(change_sel) {
				sel = sel.replace(/\.svg_icon/g,'svg');
			}
			$(sel).each(function() {
				this.setAttribute('width', w);
				this.setAttribute('height', h);
				if(window.opera && window.widget) {
					this.parentNode.style.width = w + 'px';
					this.parentNode.style.height = h + 'px';
				}
			});
		});
	}
	
})(jQuery);


(function(){function r(i,z,t){i=document.createElementNS(A.svg,i);if(Ba)for(var B in z)i.setAttribute(B,z[B]);else for(B in z){var W=z[B],w=i[B];if(w&&w.constructor==="SVGLength")w.baseVal.value=W;else i.setAttribute(B,W)}t&&t.appendChild(i);return i}var A={svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"};if(!window.console)window.console=new function(){this.log=function(){};this.dir=function(){}};$.jGraduate={Paint:function(i){i=i||{};this.alpha=isNaN(i.alpha)?100:i.alpha;if(i.copy){this.type=
i.copy.type;this.alpha=i.copy.alpha;this.radialGradient=this.linearGradient=this.solidColor=null;switch(this.type){case "solidColor":this.solidColor=i.copy.solidColor;break;case "linearGradient":this.linearGradient=i.copy.linearGradient.cloneNode(true);break;case "radialGradient":this.radialGradient=i.copy.radialGradient.cloneNode(true)}}else if(i.linearGradient){this.type="linearGradient";this.radialGradient=this.solidColor=null;this.linearGradient=i.linearGradient.cloneNode(true)}else if(i.radialGradient){this.type=
"radialGradient";this.linearGradient=this.solidColor=null;this.radialGradient=i.radialGradient.cloneNode(true)}else if(i.solidColor){this.type="solidColor";this.solidColor=i.solidColor}else{this.type="none";this.radialGradient=this.linearGradient=this.solidColor=null}}};jQuery.fn.jGraduateDefaults={paint:new $.jGraduate.Paint,window:{pickerTitle:"Drag markers to pick a paint"},images:{clientPath:"images/"},newstop:"inverse"};var Ba=navigator.userAgent.indexOf("Gecko/")>=0;jQuery.fn.jGraduate=function(i){var z=
arguments;return this.each(function(){function t(c,a,d,h,f){var l=f||r("stop",{"stop-color":a,"stop-opacity":d,offset:c},g);if(f){a=f.getAttribute("stop-color");d=f.getAttribute("stop-opacity");c=f.getAttribute("offset")}else g.appendChild(l);if(d===null)d=1;f=r("path",{d:"M-6.2,0.9c3.6-4,6.7-4.3,6.7-12.4c-0.2,7.9,3.1,8.8,6.5,12.4c3.5,3.8,2.9,9.6,0,12.3c-3.1,2.8-10.4,2.7-13.2,0C-9.6,9.9-9.4,4.4-6.2,0.9z",fill:"url(#jGraduate_trans)",transform:"translate("+(10+c*j)+", 26)"},fa);var X=r("path",{d:"M-6.2,0.9c3.6-4,6.7-4.3,6.7-12.4c-0.2,7.9,3.1,8.8,6.5,12.4c3.5,3.8,2.9,9.6,0,12.3c-3.1,2.8-10.4,2.7-13.2,0C-9.6,9.9-9.4,4.4-6.2,0.9z",
fill:a,"fill-opacity":d,transform:"translate("+(10+c*j)+", 26)",stroke:"#000","stroke-width":1.5},fa);$(X).mousedown(function(M){B(this);R=F;N.mousemove(la).mouseup(W);S=ga.offset();M.preventDefault();return false}).data("stop",l).data("bg",f).dblclick(function(){$("div.jGraduate_LightBox").show();for(var M=this,I=+l.getAttribute("stop-opacity")||1,C=l.getAttribute("stop-color")||1,Y=(parseFloat(I)*255).toString(16);Y.length<2;)Y="0"+Y;a=C.substr(1)+Y;$("#"+b+"_jGraduate_stopPicker").css({left:100,
bottom:15}).jPicker({window:{title:"Pick the start color and opacity for the gradient"},images:{clientPath:o.images.clientPath},color:{active:a,alphaSupport:true}},function(Z){C=Z.val("hex")?"#"+Z.val("hex"):"none";I=Z.val("a")!==null?Z.val("a")/256:1;M.setAttribute("fill",C);M.setAttribute("fill-opacity",I);l.setAttribute("stop-color",C);l.setAttribute("stop-opacity",I);$("div.jGraduate_LightBox").hide();$("#"+b+"_jGraduate_stopPicker").hide()},null,function(){$("div.jGraduate_LightBox").hide();
$("#"+b+"_jGraduate_stopPicker").hide()})});$(g).find("stop").each(function(){var M=$(this);if(+this.getAttribute("offset")>c){if(!a){var I=this.getAttribute("stop-color"),C=this.getAttribute("stop-opacity");l.setAttribute("stop-color",I);X.setAttribute("fill",I);l.setAttribute("stop-opacity",C===null?1:C);X.setAttribute("fill-opacity",C===null?1:C)}M.before(l);return false}});h&&B(X);return l}function B(c){F&&F.setAttribute("stroke","#000");c.setAttribute("stroke","blue");F=c;F.parentNode.appendChild(F)}
function W(){N.unbind("mousemove",la);if(O.getAttribute("display")!=="none"){O.setAttribute("display","none");var c=$(F),a=c.data("stop");c=c.data("bg");$([F,a,c]).remove()}R=null}function w(){var c=T?"rotate("+T+","+ha+","+ia+") ":"";J===1&&G===1?g.removeAttribute("gradientTransform"):g.setAttribute("gradientTransform",c+"translate("+-ha*(J-1)+","+-ia*(G-1)+") scale("+J+","+G+")")}function la(c){var a=c.pageX-S.left;c=c.pageY-S.top;a=a<10?10:a>j+10?j+10:a;var d="translate("+a+", 26)";if(c<-60||c>
130){O.setAttribute("display","block");O.setAttribute("transform",d)}else O.setAttribute("display","none");R.setAttribute("transform",d);$.data(R,"bg").setAttribute("transform",d);$.data(R,"stop").setAttribute("offset",(a-10)/j);var h=0;$(g).find("stop").each(function(){var f=this.getAttribute("offset"),l=$(this);if(f<h){l.prev().before(l);D=$(g).find("stop")}h=f})}var e=$(this),o=$.extend(true,{},jQuery.fn.jGraduateDefaults,i),b=e.attr("id"),s="#"+e.attr("id")+" ";if(s){var ma=function(){switch(e.paint.type){case "radialGradient":e.paint.linearGradient=
null;break;case "linearGradient":e.paint.radialGradient=null;break;case "solidColor":e.paint.radialGradient=e.paint.linearGradient=null}$.isFunction(e.okCallback)&&e.okCallback(e.paint);e.hide()},na=function(){$.isFunction(e.cancelCallback)&&e.cancelCallback();e.hide()};$.extend(true,e,{paint:new $.jGraduate.Paint({copy:o.paint}),okCallback:$.isFunction(z[1])&&z[1]||null,cancelCallback:$.isFunction(z[2])&&z[2]||null});e.position();var u=null,N=$(window);if(e.paint.type=="none")e.paint=$.jGraduate.Paint({solidColor:"ffffff"});
e.addClass("jGraduate_Picker");e.html('<ul class="jGraduate_tabs"><li class="jGraduate_tab_color jGraduate_tab_current" data-type="col">Solid Color</li><li class="jGraduate_tab_lingrad" data-type="lg">Linear Gradient</li><li class="jGraduate_tab_radgrad" data-type="rg">Radial Gradient</li></ul><div class="jGraduate_colPick"></div><div class="jGraduate_gradPick"></div><div class="jGraduate_LightBox"></div><div id="'+b+'_jGraduate_stopPicker" class="jGraduate_stopPicker"></div>');var Ca=$(s+"> .jGraduate_colPick"),
n=$(s+"> .jGraduate_gradPick");n.html('<div id="'+b+'_jGraduate_Swatch" class="jGraduate_Swatch"><h2 class="jGraduate_Title">'+o.window.pickerTitle+'</h2><div id="'+b+'_jGraduate_GradContainer" class="jGraduate_GradContainer"></div><div id="'+b+'_jGraduate_StopSlider" class="jGraduate_StopSlider"></div></div><div class="jGraduate_Form jGraduate_Points jGraduate_lg_field"><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Begin Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="'+
b+'_jGraduate_x1" size="3" title="Enter starting x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="'+b+'_jGraduate_y1" size="3" title="Enter starting y value between 0.0 and 1.0"/></div></div><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">End Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="'+b+'_jGraduate_x2" size="3" title="Enter ending x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="'+
b+'_jGraduate_y2" size="3" title="Enter ending y value between 0.0 and 1.0"/></div></div></div><div class="jGraduate_Form jGraduate_Points jGraduate_rg_field"><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Center Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="'+b+'_jGraduate_cx" size="3" title="Enter x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="'+b+'_jGraduate_cy" size="3" title="Enter y value between 0.0 and 1.0"/></div></div><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Focal Point</label><div class="jGraduate_Form_Section"><label>Match center: <input type="checkbox" checked="checked" id="'+
b+'_jGraduate_match_ctr"/></label><br/><label>x:</label><input type="text" id="'+b+'_jGraduate_fx" size="3" title="Enter x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="'+b+'_jGraduate_fy" size="3" title="Enter y value between 0.0 and 1.0"/></div></div></div><div class="jGraduate_StopSection jGraduate_SpreadMethod"><label class="jGraduate_Form_Heading">Spread method</label><div class="jGraduate_Form_Section"><select class="jGraduate_spreadMethod"><option value=pad selected>Pad</option><option value=reflect>Reflect</option><option value=repeat>Repeat</option></select></div></div><div class="jGraduate_Form"><div class="jGraduate_Slider jGraduate_RadiusField jGraduate_rg_field"><label class="prelabel">Radius:</label><div id="'+
b+'_jGraduate_Radius" class="jGraduate_SliderBar jGraduate_Radius" title="Click to set radius"><img id="'+b+'_jGraduate_RadiusArrows" class="jGraduate_RadiusArrows" src="'+o.images.clientPath+'rangearrows2.gif"></div><label><input type="text" id="'+b+'_jGraduate_RadiusInput" size="3" value="100"/>%</label></div><div class="jGraduate_Slider jGraduate_EllipField jGraduate_rg_field"><label class="prelabel">Ellip:</label><div id="'+b+'_jGraduate_Ellip" class="jGraduate_SliderBar jGraduate_Ellip" title="Click to set Ellip"><img id="'+
b+'_jGraduate_EllipArrows" class="jGraduate_EllipArrows" src="'+o.images.clientPath+'rangearrows2.gif"></div><label><input type="text" id="'+b+'_jGraduate_EllipInput" size="3" value="0"/>%</label></div><div class="jGraduate_Slider jGraduate_AngleField jGraduate_rg_field"><label class="prelabel">Angle:</label><div id="'+b+'_jGraduate_Angle" class="jGraduate_SliderBar jGraduate_Angle" title="Click to set Angle"><img id="'+b+'_jGraduate_AngleArrows" class="jGraduate_AngleArrows" src="'+o.images.clientPath+
'rangearrows2.gif"></div><label><input type="text" id="'+b+'_jGraduate_AngleInput" size="3" value="0"/>deg</label></div><div class="jGraduate_Slider jGraduate_OpacField"><label class="prelabel">Opac:</label><div id="'+b+'_jGraduate_Opac" class="jGraduate_SliderBar jGraduate_Opac" title="Click to set Opac"><img id="'+b+'_jGraduate_OpacArrows" class="jGraduate_OpacArrows" src="'+o.images.clientPath+'rangearrows2.gif"></div><label><input type="text" id="'+b+'_jGraduate_OpacInput" size="3" value="100"/>%</label></div></div><div class="jGraduate_OkCancel"><input type="button" id="'+
b+'_jGraduate_Ok" class="jGraduate_Ok" value="OK"/><input type="button" id="'+b+'_jGraduate_Cancel" class="jGraduate_Cancel" value="Cancel"/></div>');var j=256,oa=j-0,pa=j-0,p,g,aa,q={};$(".jGraduate_SliderBar").width(145);var x=$("#"+b+"_jGraduate_GradContainer")[0],m=r("svg",{id:b+"_jgraduate_svg",width:j,height:j,xmlns:A.svg},x);p=p||e.paint.type;var v=g=e.paint[p],U=e.paint.alpha,ba=p==="solidColor";switch(p){case "solidColor":case "linearGradient":if(!ba){g.id=b+"_lg_jgraduate_grad";v=g=m.appendChild(g)}r("radialGradient",
{id:b+"_rg_jgraduate_grad"},m);if(p==="linearGradient")break;case "radialGradient":if(!ba){g.id=b+"_rg_jgraduate_grad";v=g=m.appendChild(g)}r("linearGradient",{id:b+"_lg_jgraduate_grad"},m)}if(ba){v=g=$("#"+b+"_lg_jgraduate_grad")[0];u=e.paint[p];t(0,"#"+u,1);var K=typeof o.newstop;if(K==="string")switch(o.newstop){case "same":t(1,"#"+u,1);break;case "inverse":K="";for(var y=0;y<6;y+=2){u.substr(y,2);var P=(255-parseInt(u.substr(y,2),16)).toString(16);if(P.length<2)P=0+P;K+=P}t(1,"#"+K,1);break;case "white":t(1,
"#ffffff",1);break;case "black":t(1,"#000000",1)}else if(K==="object")t(1,o.newstop.color||"#"+u,"opac"in o.newstop?o.newstop.opac:1)}u=parseFloat(v.getAttribute("x1")||0);K=parseFloat(v.getAttribute("y1")||0);y=parseFloat(v.getAttribute("x2")||1);P=parseFloat(v.getAttribute("y2")||0);var ca=parseFloat(v.getAttribute("cx")||0.5),da=parseFloat(v.getAttribute("cy")||0.5),qa=parseFloat(v.getAttribute("fx")||ca),ra=parseFloat(v.getAttribute("fy")||da);aa=r("rect",{id:b+"_jgraduate_rect",x:0,y:0,width:oa,
height:pa,fill:"url(#"+b+"_jgraduate_grad)","fill-opacity":U/100},m);var sa=$("<div/>").attr({"class":"grad_coord jGraduate_lg_field",title:"Begin Stop"}).text(1).css({top:K*j,left:u*j}).data("coord","start").appendTo(x),Da=sa.clone().text(2).css({top:P*j,left:y*j}).attr("title","End stop").data("coord","end").appendTo(x),ta=$("<div/>").attr({"class":"grad_coord jGraduate_rg_field",title:"Center stop"}).text("C").css({top:da*j,left:ca*j}).data("coord","center").appendTo(x),V=ta.clone().text("F").css({top:ra*
j,left:qa*j,display:"none"}).attr("title","Focus point").data("coord","focus").appendTo(x);V[0].id=b+"_jGraduate_focusCoord";$(s+" .grad_coord");$.each(["x1","y1","x2","y2","cx","cy","fx","fy"],function(c,a){var d=g.getAttribute(a),h=isNaN(a[1]);d||(d=h?"0.5":a==="x2"?"1.0":"0.0");q[a]=$("#"+b+"_jGraduate_"+a).val(d).change(function(){if(isNaN(parseFloat(this.value))||this.value<0)this.value=0;else if(this.value>1)this.value=1;if(!(a[0]==="f"&&!E))if(h&&p==="radialGradient"||!h&&p==="linearGradient")g.setAttribute(a,
this.value);var f=h?a[0]==="c"?ta:V:a[1]==="1"?sa:Da,l=a.indexOf("x")>=0?"left":"top";f.css(l,this.value*j)}).change()});var D,fa,ga=$("#"+b+"_jGraduate_StopSlider"),F,H,R,O=r("path",{d:"m9.75,-6l-19.5,19.5m0,-19.5l19.5,19.5",fill:"none",stroke:"#D00","stroke-width":5,display:"none"},H),S,J=1,G=1,T=0,ha=ca,ia=da;H=r("svg",{width:"100%",height:45},ga[0]);x=r("pattern",{width:16,height:16,patternUnits:"userSpaceOnUse",id:"jGraduate_trans"},H);r("image",{width:16,height:16},x).setAttributeNS(A.xlink,
"xlink:href",o.images.clientPath+"map-opacity.png");$(H).click(function(c){S=ga.offset();if(c.target.tagName!=="path"){var a=c.pageX-S.left-8;a=a<10?10:a>j+10?j+10:a;t(a/j,0,0,true);c.stopPropagation()}});$(H).mouseover(function(){H.appendChild(O)});fa=r("g",{},H);r("line",{x1:10,y1:15,x2:j+10,y2:15,"stroke-width":2,stroke:"#000"},H);var ua=n.find(".jGraduate_spreadMethod").change(function(){g.setAttribute("spreadMethod",$(this).val())}),Q=null,va=function(c){var a=c.pageX-ja.left,d=c.pageY-ja.top;
a=a<0?0:a>j?j:a;d=d<0?0:d>j?j:d;Q.css("left",a).css("top",d);a=a/oa;d=d/pa;var h=Q.data("coord"),f=g;switch(h){case "start":q.x1.val(a);q.y1.val(d);f.setAttribute("x1",a);f.setAttribute("y1",d);break;case "end":q.x2.val(a);q.y2.val(d);f.setAttribute("x2",a);f.setAttribute("y2",d);break;case "center":q.cx.val(a);q.cy.val(d);f.setAttribute("cx",a);f.setAttribute("cy",d);ha=a;ia=d;w();break;case "focus":q.fx.val(a);q.fy.val(d);f.setAttribute("fx",a);f.setAttribute("fy",d);w()}c.preventDefault()},wa=
function(){Q=null;N.unbind("mousemove",va).unbind("mouseup",wa)};D=g.getElementsByTagNameNS(A.svg,"stop");if(k<2){for(;k<2;){g.appendChild(document.createElementNS(A.svg,"stop"));++k}D=g.getElementsByTagNameNS(A.svg,"stop")}var k=D.length;for(y=0;y<k;y++)t(0,0,0,0,D[y]);ua.val(g.getAttribute("spreadMethod")||"pad");var ja,E=false;aa.setAttribute("fill-opacity",U/100);$("#"+b+" div.grad_coord").mousedown(function(c){c.preventDefault();Q=$(this);Q.offset();ja=Q.parent().offset();N.mousemove(va).mouseup(wa)});
$("#"+b+"_jGraduate_Ok").bind("click",function(){e.paint.type=p;e.paint[p]=g.cloneNode(true);e.paint.solidColor=null;ma()});$("#"+b+"_jGraduate_Cancel").bind("click",function(){na()});if(p==="radialGradient")if(E)V.show();else{V.hide();q.fx.val("");q.fy.val("")}$("#"+b+"_jGraduate_match_ctr")[0].checked=!E;var xa,ya;$("#"+b+"_jGraduate_match_ctr").change(function(){E=!this.checked;V.toggle(E);q.fx.val("");q.fy.val("");var c=g;if(E){var a=xa||0.5,d=ya||0.5;c.setAttribute("fx",a);c.setAttribute("fy",
d);q.fx.val(a);q.fy.val(d)}else{xa=c.getAttribute("fx");ya=c.getAttribute("fy");c.removeAttribute("fx");c.removeAttribute("fy")}});D=g.getElementsByTagNameNS(A.svg,"stop");k=D.length;if(k<2){for(;k<2;){g.appendChild(document.createElementNS(A.svg,"stop"));++k}D=g.getElementsByTagNameNS(A.svg,"stop")}var L;U=n=0;if(p==="radialGradient"){m=g.gradientTransform.baseVal;if(m.numberOfItems===2){k=m.getItem(0);m=m.getItem(1);if(k.type===2&&m.type===3){k=m.matrix;if(k.a!==1)n=Math.round(-(1-k.a)*100);else if(k.d!==
1)n=Math.round((1-k.d)*100)}}else if(m.numberOfItems===3){x=m.getItem(0);k=m.getItem(1);m=m.getItem(2);if(x.type===4&&k.type===2&&m.type===3){U=Math.round(x.angle);k=m.matrix;if(k.a!==1)n=Math.round(-(1-k.a)*100);else if(k.d!==1)n=Math.round((1-k.d)*100)}}}n={radius:{handle:"#"+b+"_jGraduate_RadiusArrows",input:"#"+b+"_jGraduate_RadiusInput",val:(g.getAttribute("r")||0.5)*100},opacity:{handle:"#"+b+"_jGraduate_OpacArrows",input:"#"+b+"_jGraduate_OpacInput",val:e.paint.alpha||100},ellip:{handle:"#"+
b+"_jGraduate_EllipArrows",input:"#"+b+"_jGraduate_EllipInput",val:n},angle:{handle:"#"+b+"_jGraduate_AngleArrows",input:"#"+b+"_jGraduate_AngleInput",val:U}};$.each(n,function(c,a){var d=$(a.handle);d.mousedown(function(h){var f=d.parent();L={type:c,elem:d,input:$(a.input),parent:f,offset:f.offset()};N.mousemove(za).mouseup(Aa);h.preventDefault()});$(a.input).val(a.val).change(function(){var h=+this.value,f=0,l=p==="radialGradient";switch(c){case "radius":l&&g.setAttribute("r",h/100);f=Math.pow(h/
100,0.4)/2*145;break;case "opacity":e.paint.alpha=h;aa.setAttribute("fill-opacity",h/100);f=h*1.45;break;case "ellip":J=G=1;if(h===0){f=72.5;break}if(h>99.5)h=99.5;if(h>0)G=1-h/100;else J=-(h/100)-1;f=145*((h+100)/2)/100;l&&w();break;case "angle":T=h;f=T/180;f+=0.5;f*=145;l&&w()}if(f>145)f=145;else if(f<0)f=0;d.css({"margin-left":f-5})}).change()});var za=function(c){var a=c.pageX-L.offset.left-parseInt(L.parent.css("border-left-width"));if(a>145)a=145;if(a<=0)a=0;var d=a-5;a/=145;switch(L.type){case "radius":a=
Math.pow(a*2,2.5);if(a>0.98&&a<1.02)a=1;if(a<=0.01)a=0.01;g.setAttribute("r",a);break;case "opacity":e.paint.alpha=parseInt(a*100);aa.setAttribute("fill-opacity",a);break;case "ellip":G=J=1;if(a<0.5){a/=0.5;J=a<=0?0.01:a}else if(a>0.5){a/=0.5;a=2-a;G=a<=0?0.01:a}w();a-=1;if(G===a+1)a=Math.abs(a);break;case "angle":a-=0.5;T=a*=180;w();a/=100}L.elem.css({"margin-left":d});a=Math.round(a*100);L.input.val(a);c.preventDefault()},Aa=function(){N.unbind("mousemove",za).unbind("mouseup",Aa);L=null};for(n=
(e.paint.alpha*255/100).toString(16);n.length<2;)n="0"+n;n=n.split(".")[0];u=e.paint.solidColor=="none"?"":e.paint.solidColor+n;ba||(u=D[0].getAttribute("stop-color"));$.extend($.fn.jPicker.defaults.window,{alphaSupport:true,effects:{type:"show",speed:0}});Ca.jPicker({window:{title:o.window.pickerTitle},images:{clientPath:o.images.clientPath},color:{active:u,alphaSupport:true}},function(c){e.paint.type="solidColor";e.paint.alpha=c.val("ahex")?Math.round(c.val("a")/255*100):100;e.paint.solidColor=
c.val("hex")?c.val("hex"):"none";e.paint.radialGradient=null;ma()},null,function(){na()});var ka=$(s+" .jGraduate_tabs li");ka.click(function(){ka.removeClass("jGraduate_tab_current");$(this).addClass("jGraduate_tab_current");$(s+" > div").hide();var c=$(this).attr("data-type");$(s+" .jGraduate_gradPick").show();if(c==="rg"||c==="lg"){$(".jGraduate_"+c+"_field").show();$(".jGraduate_"+(c==="lg"?"rg":"lg")+"_field").hide();$("#"+b+"_jgraduate_rect")[0].setAttribute("fill","url(#"+b+"_"+c+"_jgraduate_grad)");
p=c==="lg"?"linearGradient":"radialGradient";$("#"+b+"_jGraduate_OpacInput").val(e.paint.alpha).change();var a=$("#"+b+"_"+c+"_jgraduate_grad")[0];if(g!==a){var d=$(g).find("stop");$(a).empty().append(d);g=a;a=ua.val();g.setAttribute("spreadMethod",a)}E=c==="rg"&&g.getAttribute("fx")!=null&&!(ca==qa&&da==ra);$("#"+b+"_jGraduate_focusCoord").toggle(E);if(E)$("#"+b+"_jGraduate_match_ctr")[0].checked=false}else{$(s+" .jGraduate_gradPick").hide();$(s+" .jGraduate_colPick").show()}});$(s+" > div").hide();
ka.removeClass("jGraduate_tab_current");var ea;switch(e.paint.type){case "linearGradient":ea=$(s+" .jGraduate_tab_lingrad");break;case "radialGradient":ea=$(s+" .jGraduate_tab_radgrad");break;default:ea=$(s+" .jGraduate_tab_color")}e.show();setTimeout(function(){ea.addClass("jGraduate_tab_current").click()},10)}else alert("Container element must have an id attribute to maintain unique id strings for sub-elements.")})}})();


$.fn.SpinButton=function(b){function f(a,c){for(var e=a[c],d=document.body;(a=a.offsetParent)&&a!=d;)if(!$.browser.msie||a.currentStyle.position!="relative")e+=a[c];return e}return this.each(function(){this.repeating=false;this.spinCfg={min:b&&!isNaN(parseFloat(b.min))?Number(b.min):null,max:b&&!isNaN(parseFloat(b.max))?Number(b.max):null,step:b&&b.step?Number(b.step):1,stepfunc:b&&b.stepfunc?b.stepfunc:false,page:b&&b.page?Number(b.page):10,upClass:b&&b.upClass?b.upClass:"up",downClass:b&&b.downClass?
b.downClass:"down",reset:b&&b.reset?b.reset:this.value,delay:b&&b.delay?Number(b.delay):500,interval:b&&b.interval?Number(b.interval):100,_btn_width:20,_direction:null,_delay:null,_repeat:null,callback:b&&b.callback?b.callback:null};this.spinCfg.smallStep=b&&b.smallStep?b.smallStep:this.spinCfg.step/2;this.adjustValue=function(a){a=isNaN(this.value)?this.spinCfg.reset:$.isFunction(this.spinCfg.stepfunc)?this.spinCfg.stepfunc(this,a):Number((Number(this.value)+Number(a)).toFixed(5));if(this.spinCfg.min!==
null)a=Math.max(a,this.spinCfg.min);if(this.spinCfg.max!==null)a=Math.min(a,this.spinCfg.max);this.value=a;$.isFunction(this.spinCfg.callback)&&this.spinCfg.callback(this)};$(this).addClass(b&&b.spinClass?b.spinClass:"spin-button").mousemove(function(a){var c=a.pageX||a.x,e=a.pageY||a.y;a=a.target||a.srcElement;var d=svgEditor.tool_scale||1,g=$(a).height()/2;c=c>f(a,"offsetLeft")+a.offsetWidth*d-this.spinCfg._btn_width?e<f(a,"offsetTop")+g*d?1:-1:0;if(c!==this.spinCfg._direction){switch(c){case 1:$(this).removeClass(this.spinCfg.downClass).addClass(this.spinCfg.upClass);
break;case -1:$(this).removeClass(this.spinCfg.upClass).addClass(this.spinCfg.downClass);break;default:$(this).removeClass(this.spinCfg.upClass).removeClass(this.spinCfg.downClass)}this.spinCfg._direction=c}}).mouseout(function(){$(this).removeClass(this.spinCfg.upClass).removeClass(this.spinCfg.downClass);this.spinCfg._direction=null;window.clearInterval(this.spinCfg._repeat);window.clearTimeout(this.spinCfg._delay)}).mousedown(function(a){if(a.button===0&&this.spinCfg._direction!=0){var c=this,
e=a.shiftKey?c.spinCfg.smallStep:c.spinCfg.step,d=function(){c.adjustValue(c.spinCfg._direction*e)};d();c.spinCfg._delay=window.setTimeout(function(){d();c.spinCfg._repeat=window.setInterval(d,c.spinCfg.interval)},c.spinCfg.delay)}}).mouseup(function(){window.clearInterval(this.spinCfg._repeat);window.clearTimeout(this.spinCfg._delay)}).dblclick(function(){$.browser.msie&&this.adjustValue(this.spinCfg._direction*this.spinCfg.step)}).keydown(function(a){switch(a.keyCode){case 38:this.adjustValue(this.spinCfg.step);
break;case 40:this.adjustValue(-this.spinCfg.step);break;case 33:this.adjustValue(this.spinCfg.page);break;case 34:this.adjustValue(-this.spinCfg.page)}}).keypress(function(a){if(this.repeating)switch(a.keyCode){case 38:this.adjustValue(this.spinCfg.step);break;case 40:this.adjustValue(-this.spinCfg.step);break;case 33:this.adjustValue(this.spinCfg.page);break;case 34:this.adjustValue(-this.spinCfg.page)}else this.repeating=true}).keyup(function(a){this.repeating=false;switch(a.keyCode){case 38:case 40:case 33:case 34:case 13:this.adjustValue(0)}}).bind("mousewheel",
function(a){if(a.wheelDelta>=120)this.adjustValue(this.spinCfg.step);else a.wheelDelta<=-120&&this.adjustValue(-this.spinCfg.step);a.preventDefault()}).change(function(){this.adjustValue(0)});this.addEventListener&&this.addEventListener("DOMMouseScroll",function(a){if(a.detail>0)this.adjustValue(-this.spinCfg.step);else a.detail<0&&this.adjustValue(this.spinCfg.step);a.preventDefault()},false)})};


// http://ross.posterous.com/2008/08/19/iphone-touch-events-in-javascript/
function touchHandler(event) {

	var touches = event.changedTouches,
		first = touches[0],
		type = "";
	switch (event.type) {
		case "touchstart": type = "mousedown"; break;
		case "touchmove":  type = "mousemove"; break;
		case "touchend":   type = "mouseup"; break;
		default: return;
	}

	// initMouseEvent(type, canBubble, cancelable, view, clickCount, 
	//	screenX, screenY, clientX, clientY, ctrlKey, 
	//	altKey, shiftKey, metaKey, button, relatedTarget);

	var simulatedEvent = document.createEvent("MouseEvent");
	simulatedEvent.initMouseEvent(type, true, true, window, 1,
								first.screenX, first.screenY,
								first.clientX, first.clientY, false,
								false, false, false, 0/*left*/, null);
	if (touches.length < 2) {
		first.target.dispatchEvent(simulatedEvent);
		event.preventDefault();
	}
}

document.addEventListener('touchstart', touchHandler, true);
document.addEventListener('touchmove', touchHandler, true);
document.addEventListener('touchend', touchHandler, true);
document.addEventListener('touchcancel', touchHandler, true);

/**
 *
 * Licensed under the MIT License
 * main object, loaded first so other modules have the garanty of its existence
 */

svgedit = {
	// common namepaces constants in alpha order
	NS: {
		HTML: 'http://www.w3.org/1999/xhtml',
		MATH: 'http://www.w3.org/1998/Math/MathML',
		SE: 'http://svg-edit.googlecode.com',
		SVG: 'http://www.w3.org/2000/svg',
		XLINK: 'http://www.w3.org/1999/xlink',
		XML: 'http://www.w3.org/XML/1998/namespace',
		XMLNS: 'http://www.w3.org/2000/xmlns/' // see http://www.w3.org/TR/REC-xml-names/#xmlReserved
	}
};

// return the svgedit.NS with key values switched and lowercase
svgedit.getReverseNS = function() {
	var reverseNS = {};
	$.each(this.NS, function(name, URI) {
		reverseNS[URI] = name.toLowerCase();
	});
	return reverseNS;
};


/**
 * jQuery module to work with SVG.
 *
 * Licensed under the MIT License
 *
 */

// Dependencies:
// 1) jquery

(function() {

  // This fixes $(...).attr() to work as expected with SVG elements.
  // Does not currently use *AttributeNS() since we rarely need that.

  // See http://api.jquery.com/attr/ for basic documentation of .attr()

  // Additional functionality:
  // - When getting attributes, a string that's a number is return as type number.
  // - If an array is supplied as first parameter, multiple values are returned
  // as an object with values for each given attributes

  var proxied = jQuery.fn.attr,
    // TODO use NS.SVG instead
    svgns = "http://www.w3.org/2000/svg";
  jQuery.fn.attr = function(key, value) {
    var len = this.length;
    if (!len) return proxied.apply(this, arguments);
    for (var i = 0; i < len; ++i) {
      var elem = this[i];
      // set/get SVG attribute
      if (elem.namespaceURI === svgns) {
        // Setting attribute
        if (value !== undefined) {
          elem.setAttribute(key, value);
        } else if ($.isArray(key)) {
          // Getting attributes from array
          var j = key.length, obj = {};

          while (j--) {
            var aname = key[j];
            var attr = elem.getAttribute(aname);
            // This returns a number when appropriate
            if (attr || attr === "0") {
              attr = isNaN(attr) ? attr : (attr - 0);
            }
            obj[aname] = attr;
          }
          return obj;
        } else if (typeof key === "object") {
          // Setting attributes form object
          for (var v in key) {
            elem.setAttribute(v, key[v]);
          }
        // Getting attribute
        } else {
          var attr = elem.getAttribute(key);
          if (attr || attr === "0") {
            attr = isNaN(attr) ? attr : (attr - 0);
          }
          return attr;
        }
      } else {
        return proxied.apply(this, arguments);
      }
    }
    return this;
  };
}());


// jQuery Context Menu Plugin
//
// Version 1.01
//
// Cory S.N. LaViska
// A Beautiful Site (http://abeautifulsite.net/)
// Modified by Alexis Deveria
//
// More info: http://abeautifulsite.net/2008/09/jquery-context-menu-plugin/
//
// Terms of Use
//
// This plugin is dual-licensed under the GNU General Public License
//   and the MIT License and is copyright A Beautiful Site, LLC.
//
if(jQuery)( function() {
	var win = $(window);
	var doc = $(document);

	$.extend($.fn, {
		
		contextMenu: function(o, callback) {
			// Defaults
			if( o.menu == undefined ) return false;
			if( o.inSpeed == undefined ) o.inSpeed = 150;
			if( o.outSpeed == undefined ) o.outSpeed = 75;
			// 0 needs to be -1 for expected results (no fade)
			if( o.inSpeed == 0 ) o.inSpeed = -1;
			if( o.outSpeed == 0 ) o.outSpeed = -1;
			// Loop each context menu
			$(this).each( function() {
				var el = $(this);
				var offset = $(el).offset();
			
				var menu = $('#' + o.menu);

				// Add contextMenu class
				menu.addClass('contextMenu');
				// Simulate a true right click
				$(this).bind( "mousedown", function(e) {
					var evt = e;
					$(this).mouseup( function(e) {
						var srcElement = $(this);
						srcElement.unbind('mouseup');
						if( evt.button === 2 || o.allowLeft || (evt.ctrlKey && svgedit.browser.isMac()) ) {
							e.stopPropagation();
							// Hide context menus that may be showing
							$(".contextMenu").hide();
							// Get this context menu
						
							if( el.hasClass('disabled') ) return false;
							
							// Detect mouse position
							var d = {}, x = e.pageX, y = e.pageY;
							
							var x_off = win.width() - menu.width(), 
								y_off = win.height() - menu.height();

							if(x > x_off - 15) x = x_off-15;
							if(y > y_off - 30) y = y_off-30; // 30 is needed to prevent scrollbars in FF
							
							// Show the menu
							doc.unbind('click');
							menu.css({ top: y, left: x }).fadeIn(o.inSpeed);
							// Hover events
							menu.find('A').mouseover( function() {
								menu.find('LI.hover').removeClass('hover');
								$(this).parent().addClass('hover');
							}).mouseout( function() {
								menu.find('LI.hover').removeClass('hover');
							});
							
							// Keyboard
							doc.keypress( function(e) {
								switch( e.keyCode ) {
									case 38: // up
										if( !menu.find('LI.hover').length ) {
											menu.find('LI:last').addClass('hover');
										} else {
											menu.find('LI.hover').removeClass('hover').prevAll('LI:not(.disabled)').eq(0).addClass('hover');
											if( !menu.find('LI.hover').length ) menu.find('LI:last').addClass('hover');
										}
									break;
									case 40: // down
										if( menu.find('LI.hover').length == 0 ) {
											menu.find('LI:first').addClass('hover');
										} else {
											menu.find('LI.hover').removeClass('hover').nextAll('LI:not(.disabled)').eq(0).addClass('hover');
											if( !menu.find('LI.hover').length ) menu.find('LI:first').addClass('hover');
										}
									break;
									case 13: // enter
										menu.find('LI.hover A').trigger('click');
									break;
									case 27: // esc
										doc.trigger('click');
									break
								}
							});
							
							// When items are selected
							menu.find('A').unbind('mouseup');
							menu.find('LI:not(.disabled) A').mouseup( function() {
								doc.unbind('click').unbind('keypress');
								$(".contextMenu").hide();
								// Callback
								if( callback ) callback( $(this).attr('href').substr(1), $(srcElement), {x: x - offset.left, y: y - offset.top, docX: x, docY: y} );
								return false;
							});
							
							// Hide bindings
							setTimeout( function() { // Delay for Mozilla
								doc.click( function() {
									doc.unbind('click').unbind('keypress');
									menu.fadeOut(o.outSpeed);
									return false;
								});
							}, 0);
						}
					});
				});
				
				// Disable text selection
				if( $.browser.mozilla ) {
					$('#' + o.menu).each( function() { $(this).css({ 'MozUserSelect' : 'none' }); });
				} else if( $.browser.msie ) {
					$('#' + o.menu).each( function() { $(this).bind('selectstart.disableTextSelect', function() { return false; }); });
				} else {
					$('#' + o.menu).each(function() { $(this).bind('mousedown.disableTextSelect', function() { return false; }); });
				}
				// Disable browser context menu (requires both selectors to work in IE/Safari + FF/Chrome)
				$(el).add($('UL.contextMenu')).bind('contextmenu', function() { return false; });
				
			});
			return $(this);
		},
		
		// Disable context menu items on the fly
		disableContextMenuItems: function(o) {
			if( o == undefined ) {
				// Disable all
				$(this).find('LI').addClass('disabled');
				return( $(this) );
			}
			$(this).each( function() {
				if( o != undefined ) {
					var d = o.split(',');
					for( var i = 0; i < d.length; i++ ) {
						$(this).find('A[href="' + d[i] + '"]').parent().addClass('disabled');
						
					}
				}
			});
			return( $(this) );
		},
		
		// Enable context menu items on the fly
		enableContextMenuItems: function(o) {
			if( o == undefined ) {
				// Enable all
				$(this).find('LI.disabled').removeClass('disabled');
				return( $(this) );
			}
			$(this).each( function() {
				if( o != undefined ) {
					var d = o.split(',');
					for( var i = 0; i < d.length; i++ ) {
						$(this).find('A[href="' + d[i] + '"]').parent().removeClass('disabled');
						
					}
				}
			});
			return( $(this) );
		},
		
		// Disable context menu(s)
		disableContextMenu: function() {
			$(this).each( function() {
				$(this).addClass('disabled');
			});
			return( $(this) );
		},
		
		// Enable context menu(s)
		enableContextMenu: function() {
			$(this).each( function() {
				$(this).removeClass('disabled');
			});
			return( $(this) );
		},
		
		// Destroy context menu(s)
		destroyContextMenu: function() {
			// Destroy specified context menus
			$(this).each( function() {
				// Disable action
				$(this).unbind('mousedown').unbind('mouseup');
			});
			return( $(this) );
		}
		
	});
})(jQuery);


/**
 * Package: svgedit.browser
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2010 Jeff Schiller
 * Copyright(c) 2010 Alexis Deveria
 */

// Dependencies:
// 1) jQuery (for $.alert())

(function() {

if (!svgedit.browser) {
	svgedit.browser = {};
}

// alias
var NS = svgedit.NS;

var supportsSvg_ = (function() {
	return !!document.createElementNS && !!document.createElementNS(NS.SVG, 'svg').createSVGRect;
})();

svgedit.browser.supportsSvg = function() { return supportsSvg_; };
if(!svgedit.browser.supportsSvg()) {
	window.location = 'browser-not-supported.html';
	return;
}

var userAgent = navigator.userAgent;
var svg = document.createElementNS(NS.SVG, 'svg');

// Note: Browser sniffing should only be used if no other detection method is possible
var isOpera_ = !!window.opera;
var isWebkit_ = userAgent.indexOf('AppleWebKit') >= 0;
var isGecko_ = userAgent.indexOf('Gecko/') >= 0;
var isIE_ = userAgent.indexOf('MSIE') >= 0;
var isChrome_ = userAgent.indexOf('Chrome/') >= 0;
var isWindows_ = userAgent.indexOf('Windows') >= 0;
var isMac_ = userAgent.indexOf('Macintosh') >= 0;
var isTouch_ = 'ontouchstart' in window;

var supportsSelectors_ = (function() {
	return !!svg.querySelector;
})();

var supportsXpath_ = (function() {
	return !!document.evaluate;
})();

// segList functions (for FF1.5 and 2.0)
var supportsPathReplaceItem_ = (function() {
	var path = document.createElementNS(NS.SVG, 'path');
	path.setAttribute('d', 'M0,0 10,10');
	var seglist = path.pathSegList;
	var seg = path.createSVGPathSegLinetoAbs(5,5);
	try {
		seglist.replaceItem(seg, 0);
		return true;
	} catch(err) {}
	return false;
})();

var supportsPathInsertItemBefore_ = (function() {
	var path = document.createElementNS(NS.SVG, 'path');
	path.setAttribute('d', 'M0,0 10,10');
	var seglist = path.pathSegList;
	var seg = path.createSVGPathSegLinetoAbs(5,5);
	try {
		seglist.insertItemBefore(seg, 0);
		return true;
	} catch(err) {}
	return false;
})();

// text character positioning (for IE9)
var supportsGoodTextCharPos_ = (function() {
	var svgroot = document.createElementNS(NS.SVG, 'svg');
	var svgcontent = document.createElementNS(NS.SVG, 'svg');
	document.documentElement.appendChild(svgroot);
	svgcontent.setAttribute('x', 5);
	svgroot.appendChild(svgcontent);
	var text = document.createElementNS(NS.SVG, 'text');
	text.textContent = 'a';
	svgcontent.appendChild(text);
	var pos = text.getStartPositionOfChar(0).x;
	document.documentElement.removeChild(svgroot);
	return (pos === 0);
})();

var supportsPathBBox_ = (function() {
	var svgcontent = document.createElementNS(NS.SVG, 'svg');
	document.documentElement.appendChild(svgcontent);
	var path = document.createElementNS(NS.SVG, 'path');
	path.setAttribute('d', 'M0,0 C0,0 10,10 10,0');
	svgcontent.appendChild(path);
	var bbox = path.getBBox();
	document.documentElement.removeChild(svgcontent);
	return (bbox.height > 4 && bbox.height < 5);
})();

// Support for correct bbox sizing on groups with horizontal/vertical lines
var supportsHVLineContainerBBox_ = (function() {
	var svgcontent = document.createElementNS(NS.SVG, 'svg');
	document.documentElement.appendChild(svgcontent);
	var path = document.createElementNS(NS.SVG, 'path');
	path.setAttribute('d', 'M0,0 10,0');
	var path2 = document.createElementNS(NS.SVG, 'path');
	path2.setAttribute('d', 'M5,0 15,0');
	var g = document.createElementNS(NS.SVG, 'g');
	g.appendChild(path);
	g.appendChild(path2);
	svgcontent.appendChild(g);
	var bbox = g.getBBox();
	document.documentElement.removeChild(svgcontent);
	// Webkit gives 0, FF gives 10, Opera (correctly) gives 15
	return (bbox.width == 15);
})();

var supportsEditableText_ = (function() {
	// TODO: Find better way to check support for this
	return isOpera_;
})();

var supportsGoodDecimals_ = (function() {
	// Correct decimals on clone attributes (Opera < 10.5/win/non-en)
	var rect = document.createElementNS(NS.SVG, 'rect');
	rect.setAttribute('x', 0.1);
	var crect = rect.cloneNode(false);
	var retValue = (crect.getAttribute('x').indexOf(',') == -1);
	if(!retValue) {
		$.alert('NOTE: This version of Opera is known to contain bugs in SVG-edit.\n\
		Please upgrade to the <a href="http://opera.com">latest version</a> in which the problems have been fixed.');
	}
	return retValue;
})();

var supportsNonScalingStroke_ = (function() {
	var rect = document.createElementNS(NS.SVG, 'rect');
	rect.setAttribute('style', 'vector-effect:non-scaling-stroke');
	return rect.style.vectorEffect === 'non-scaling-stroke';
})();

var supportsNativeSVGTransformLists_ = (function() {
	var rect = document.createElementNS(NS.SVG, 'rect');
	var rxform = rect.transform.baseVal;
	var t1 = svg.createSVGTransform();
	rxform.appendItem(t1);
	return rxform.getItem(0) == t1;
})();

// Public API

svgedit.browser.isOpera = function() { return isOpera_; };
svgedit.browser.isWebkit = function() { return isWebkit_; };
svgedit.browser.isGecko = function() { return isGecko_; };
svgedit.browser.isIE = function() { return isIE_; };
svgedit.browser.isChrome = function() { return isChrome_; };
svgedit.browser.isWindows = function() { return isWindows_; };
svgedit.browser.isMac = function() { return isMac_; };
svgedit.browser.isTouch = function() { return isTouch_; };

svgedit.browser.supportsSelectors = function() { return supportsSelectors_; };
svgedit.browser.supportsXpath = function() { return supportsXpath_; };

svgedit.browser.supportsPathReplaceItem = function() { return supportsPathReplaceItem_; };
svgedit.browser.supportsPathInsertItemBefore = function() { return supportsPathInsertItemBefore_; };
svgedit.browser.supportsPathBBox = function() { return supportsPathBBox_; };
svgedit.browser.supportsHVLineContainerBBox = function() { return supportsHVLineContainerBBox_; };
svgedit.browser.supportsGoodTextCharPos = function() { return supportsGoodTextCharPos_; };
svgedit.browser.supportsEditableText = function() { return supportsEditableText_; };
svgedit.browser.supportsGoodDecimals = function() { return supportsGoodDecimals_; };
svgedit.browser.supportsNonScalingStroke = function() { return supportsNonScalingStroke_; };
svgedit.browser.supportsNativeTransformLists = function() { return supportsNativeSVGTransformLists_; };

})();


/**
 * SVGTransformList
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Jeff Schiller
 */

// Dependencies:
// 1) browser.js

(function() {

if (!svgedit.transformlist) {
	svgedit.transformlist = {};
}

var svgroot = document.createElementNS(svgedit.NS.SVG, 'svg');

// Helper function.
function transformToString(xform) {
	var m = xform.matrix,
		text = '';
	switch(xform.type) {
		case 1: // MATRIX
			text = 'matrix(' + [m.a, m.b, m.c, m.d, m.e, m.f].join(',') + ')';
			break;
		case 2: // TRANSLATE
			text = 'translate(' + m.e + ',' + m.f + ')';
			break;
		case 3: // SCALE
			if (m.a == m.d) text = 'scale(' + m.a + ')';
			else text = 'scale(' + m.a + ',' + m.d + ')';
			break;
		case 4: // ROTATE
			var cx = 0, cy = 0;
			// this prevents divide by zero
			if (xform.angle != 0) {
				var K = 1 - m.a;
				cy = ( K * m.f + m.b*m.e ) / ( K*K + m.b*m.b );
				cx = ( m.e - m.b * cy ) / K;
			}
			text = 'rotate(' + xform.angle + ' ' + cx + ',' + cy + ')';
			break;
	}
	return text;
}


/**
 * Map of SVGTransformList objects.
 */
var listMap_ = {};


// **************************************************************************************
// SVGTransformList implementation for Webkit 
// These methods do not currently raise any exceptions.
// These methods also do not check that transforms are being inserted.  This is basically
// implementing as much of SVGTransformList that we need to get the job done.
//
//  interface SVGEditTransformList { 
//		attribute unsigned long numberOfItems;
//		void   clear (  )
//		SVGTransform initialize ( in SVGTransform newItem )
//		SVGTransform getItem ( in unsigned long index ) (DOES NOT THROW DOMException, INDEX_SIZE_ERR)
//		SVGTransform insertItemBefore ( in SVGTransform newItem, in unsigned long index ) (DOES NOT THROW DOMException, INDEX_SIZE_ERR)
//		SVGTransform replaceItem ( in SVGTransform newItem, in unsigned long index ) (DOES NOT THROW DOMException, INDEX_SIZE_ERR)
//		SVGTransform removeItem ( in unsigned long index ) (DOES NOT THROW DOMException, INDEX_SIZE_ERR)
//		SVGTransform appendItem ( in SVGTransform newItem )
//		NOT IMPLEMENTED: SVGTransform createSVGTransformFromMatrix ( in SVGMatrix matrix );
//		NOT IMPLEMENTED: SVGTransform consolidate (  );
//	}
// **************************************************************************************
svgedit.transformlist.SVGTransformList = function(elem) {
	this._elem = elem || null;
	this._xforms = [];
	// TODO: how do we capture the undo-ability in the changed transform list?
	this._update = function() {
		var tstr = '';
		var concatMatrix = svgroot.createSVGMatrix();
		for (var i = 0; i < this.numberOfItems; ++i) {
			var xform = this._list.getItem(i);
			tstr += transformToString(xform) + ' ';
		}
		this._elem.setAttribute('transform', tstr);
	};
	this._list = this;
	this._init = function() {
		// Transform attribute parser
		var str = this._elem.getAttribute('transform');
		if (!str) return;

		// TODO: Add skew support in future
		var re = /\s*((scale|matrix|rotate|translate)\s*\(.*?\))\s*,?\s*/;
		var m = true;
		while (m) {
			m = str.match(re);
			str = str.replace(re, '');
			if (m && m[1]) {
				var x = m[1];
				var bits = x.split(/\s*\(/);
				var name = bits[0];
				var val_bits = bits[1].match(/\s*(.*?)\s*\)/);
				val_bits[1] = val_bits[1].replace(/(\d)-/g, '$1 -');
				var val_arr = val_bits[1].split(/[, ]+/);
				var letters = 'abcdef'.split('');
				var mtx = svgroot.createSVGMatrix();
				$.each(val_arr, function(i, item) {
					val_arr[i] = parseFloat(item);
					if (name == 'matrix') {
						mtx[letters[i]] = val_arr[i];
					}
				});
				var xform = svgroot.createSVGTransform();
				var fname = 'set' + name.charAt(0).toUpperCase() + name.slice(1);
				var values = name == 'matrix' ? [mtx] : val_arr;

				if (name == 'scale' && values.length == 1) {
					values.push(values[0]);
				} else if (name == 'translate' && values.length == 1) {
					values.push(0);
				} else if (name == 'rotate' && values.length == 1) {
					values.push(0, 0);
				}
				xform[fname].apply(xform, values);
				this._list.appendItem(xform);
			}
		}
	};
	this._removeFromOtherLists = function(item) {
		if (item) {
			// Check if this transform is already in a transformlist, and
			// remove it if so.
			var found = false;
			for (var id in listMap_) {
				var tl = listMap_[id];
				for (var i = 0, len = tl._xforms.length; i < len; ++i) {
					if (tl._xforms[i] == item) {
						found = true;
						tl.removeItem(i);
						break;
					}
				}
				if (found) {
					break;
				}
			}
		}
	};

	this.numberOfItems = 0;
	this.clear = function() {
		this.numberOfItems = 0;
		this._xforms = [];
	};

	this.initialize = function(newItem) {
		this.numberOfItems = 1;
		this._removeFromOtherLists(newItem);
		this._xforms = [newItem];
	};

	this.getItem = function(index) {
		if (index < this.numberOfItems && index >= 0) {
			return this._xforms[index];
		}
		throw {code: 1}; // DOMException with code=INDEX_SIZE_ERR
	};

	this.insertItemBefore = function(newItem, index) {
		var retValue = null;
		if (index >= 0) {
			if (index < this.numberOfItems) {
				this._removeFromOtherLists(newItem);
				var newxforms = new Array(this.numberOfItems + 1);
				// TODO: use array copying and slicing
				for ( var i = 0; i < index; ++i) {
					newxforms[i] = this._xforms[i];
				}
				newxforms[i] = newItem;
				for ( var j = i+1; i < this.numberOfItems; ++j, ++i) {
					newxforms[j] = this._xforms[i];
				}
				this.numberOfItems++;
				this._xforms = newxforms;
				retValue = newItem;
				this._list._update();
			}
			else {
				retValue = this._list.appendItem(newItem);
			}
		}
		return retValue;
	};

	this.replaceItem = function(newItem, index) {
		var retValue = null;
		if (index < this.numberOfItems && index >= 0) {
			this._removeFromOtherLists(newItem);
			this._xforms[index] = newItem;
			retValue = newItem;
			this._list._update();
		}
		return retValue;
	};

	this.removeItem = function(index) {
		if (index < this.numberOfItems && index >= 0) {
			var retValue = this._xforms[index];
			var newxforms = new Array(this.numberOfItems - 1);
			for (var i = 0; i < index; ++i) {
				newxforms[i] = this._xforms[i];
			}
			for (var j = i; j < this.numberOfItems-1; ++j, ++i) {
				newxforms[j] = this._xforms[i+1];
			}
			this.numberOfItems--;
			this._xforms = newxforms;
			this._list._update();
			return retValue;
		}
		throw {code: 1}; // DOMException with code=INDEX_SIZE_ERR
	};

	this.appendItem = function(newItem) {
		this._removeFromOtherLists(newItem);
		this._xforms.push(newItem);
		this.numberOfItems++;
		this._list._update();
		return newItem;
	};
};


svgedit.transformlist.resetListMap = function() {
	listMap_ = {};
};

/**
 * Removes transforms of the given element from the map.
 * Parameters:
 * elem - a DOM Element
 */
svgedit.transformlist.removeElementFromListMap = function(elem) {
	if (elem.id && listMap_[elem.id]) {
		delete listMap_[elem.id];
	}
};

// Function: getTransformList
// Returns an object that behaves like a SVGTransformList for the given DOM element
//
// Parameters:
// elem - DOM element to get a transformlist from
svgedit.transformlist.getTransformList = function(elem) {
	if (!svgedit.browser.supportsNativeTransformLists()) {
		var id = elem.id || 'temp';
		var t = listMap_[id];
		if (!t || id === 'temp') {
			listMap_[id] = new svgedit.transformlist.SVGTransformList(elem);
			listMap_[id]._init();
			t = listMap_[id];
		}
		return t;
	}
	if (elem.transform) {
		return elem.transform.baseVal;
	}
	if (elem.gradientTransform) {
		return elem.gradientTransform.baseVal;
	}
	if (elem.patternTransform) {
		return elem.patternTransform.baseVal;
	}

	return null;
};

})();


/**
 * Package: svedit.math
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Jeff Schiller
 */

// Dependencies:
// None.

(function() {

if (!svgedit.math) {
	svgedit.math = {};
}

// Constants
var NEAR_ZERO = 1e-14;

// Throw away SVGSVGElement used for creating matrices/transforms.
var svg = document.createElementNS(svgedit.NS.SVG, 'svg');

// Function: svgedit.math.transformPoint
// A (hopefully) quicker function to transform a point by a matrix
// (this function avoids any DOM calls and just does the math)
//
// Parameters:
// x - Float representing the x coordinate
// y - Float representing the y coordinate
// m - Matrix object to transform the point with
// Returns a x,y object representing the transformed point
svgedit.math.transformPoint = function(x, y, m) {
	return { x: m.a * x + m.c * y + m.e, y: m.b * x + m.d * y + m.f};
};


// Function: svgedit.math.isIdentity
// Helper function to check if the matrix performs no actual transform 
// (i.e. exists for identity purposes)
//
// Parameters:
// m - The matrix object to check
//
// Returns:
// Boolean indicating whether or not the matrix is 1,0,0,1,0,0
svgedit.math.isIdentity = function(m) {
	return (m.a === 1 && m.b === 0 && m.c === 0 && m.d === 1 && m.e === 0 && m.f === 0);
};


// Function: svgedit.math.matrixMultiply
// This function tries to return a SVGMatrix that is the multiplication m1*m2.
// We also round to zero when it's near zero
//
// Parameters:
// >= 2 Matrix objects to multiply
//
// Returns:
// The matrix object resulting from the calculation
svgedit.math.matrixMultiply = function() {
	var args = arguments, i = args.length, m = args[i-1];

	while (i-- > 1) {
		var m1 = args[i-1];
		m = m1.multiply(m);
	}
	if (Math.abs(m.a) < NEAR_ZERO) m.a = 0;
	if (Math.abs(m.b) < NEAR_ZERO) m.b = 0;
	if (Math.abs(m.c) < NEAR_ZERO) m.c = 0;
	if (Math.abs(m.d) < NEAR_ZERO) m.d = 0;
	if (Math.abs(m.e) < NEAR_ZERO) m.e = 0;
	if (Math.abs(m.f) < NEAR_ZERO) m.f = 0;

	return m;
};

// Function: svgedit.math.hasMatrixTransform
// See if the given transformlist includes a non-indentity matrix transform
//
// Parameters:
// tlist - The transformlist to check
//
// Returns:
// Boolean on whether or not a matrix transform was found
svgedit.math.hasMatrixTransform = function(tlist) {
	if (!tlist) return false;
	var num = tlist.numberOfItems;
	while (num--) {
		var xform = tlist.getItem(num);
		if (xform.type == 1 && !svgedit.math.isIdentity(xform.matrix)) return true;
	}
	return false;
};

// Function: svgedit.math.transformBox
// Transforms a rectangle based on the given matrix
//
// Parameters:
// l - Float with the box's left coordinate
// t - Float with the box's top coordinate
// w - Float with the box width
// h - Float with the box height
// m - Matrix object to transform the box by
//
// Returns:
// An object with the following values:
// * tl - The top left coordinate (x,y object)
// * tr - The top right coordinate (x,y object)
// * bl - The bottom left coordinate (x,y object)
// * br - The bottom right coordinate (x,y object)
// * aabox - Object with the following values:
// * Float with the axis-aligned x coordinate
// * Float with the axis-aligned y coordinate
// * Float with the axis-aligned width coordinate
// * Float with the axis-aligned height coordinate
svgedit.math.transformBox = function(l, t, w, h, m) {
	var transformPoint = svgedit.math.transformPoint,

		tl = transformPoint(l, t, m),
		tr = transformPoint((l + w), t, m),
		bl = transformPoint(l, (t + h), m),
		br = transformPoint((l + w), (t + h), m),

		minx = Math.min(tl.x, tr.x, bl.x, br.x),
		maxx = Math.max(tl.x, tr.x, bl.x, br.x),
		miny = Math.min(tl.y, tr.y, bl.y, br.y),
		maxy = Math.max(tl.y, tr.y, bl.y, br.y);

	return {
		tl: tl,
		tr: tr,
		bl: bl,
		br: br,
		aabox: {
			x: minx,
			y: miny,
			width: (maxx - minx),
			height: (maxy - miny)
		}
	};
};

// Function: svgedit.math.transformListToTransform
// This returns a single matrix Transform for a given Transform List
// (this is the equivalent of SVGTransformList.consolidate() but unlike
//  that method, this one does not modify the actual SVGTransformList)
// This function is very liberal with its min,max arguments
//
// Parameters:
// tlist - The transformlist object
// min - Optional integer indicating start transform position
// max - Optional integer indicating end transform position
//
// Returns:
// A single matrix transform object
svgedit.math.transformListToTransform = function(tlist, min, max) {
	if (tlist == null) {
		// Or should tlist = null have been prevented before this?
		return svg.createSVGTransformFromMatrix(svg.createSVGMatrix());
	}
	min = min || 0;
	max = max || (tlist.numberOfItems - 1);
	min = parseInt(min, 10);
	max = parseInt(max, 10);
	if (min > max) { var temp = max; max = min; min = temp; }
	var m = svg.createSVGMatrix();
	for (var i = min; i <= max; ++i) {
		// if our indices are out of range, just use a harmless identity matrix
		var mtom = (i >= 0 && i < tlist.numberOfItems ? 
						tlist.getItem(i).matrix :
						svg.createSVGMatrix());
		m = svgedit.math.matrixMultiply(m, mtom);
	}
	return svg.createSVGTransformFromMatrix(m);
};


// Function: svgedit.math.getMatrix
// Get the matrix object for a given element
//
// Parameters:
// elem - The DOM element to check
//
// Returns:
// The matrix object associated with the element's transformlist
svgedit.math.getMatrix = function(elem) {
	var tlist = svgedit.transformlist.getTransformList(elem);
	return svgedit.math.transformListToTransform(tlist).matrix;
};


// Function: svgedit.math.snapToAngle
// Returns a 45 degree angle coordinate associated with the two given 
// coordinates
//
// Parameters:
// x1 - First coordinate's x value
// x2 - Second coordinate's x value
// y1 - First coordinate's y value
// y2 - Second coordinate's y value
//
// Returns:
// Object with the following values:
// x - The angle-snapped x value
// y - The angle-snapped y value
// snapangle - The angle at which to snap
svgedit.math.snapToAngle = function(x1, y1, x2, y2) {
	var snap = Math.PI/4; // 45 degrees
	var dx = x2 - x1;
	var dy = y2 - y1;
	var angle = Math.atan2(dy, dx);
	var dist = Math.sqrt(dx * dx + dy * dy);
	var snapangle = Math.round(angle/snap) * snap;

	return {
		x: x1 + dist * Math.cos(snapangle),
		y: y1 + dist * Math.sin(snapangle),
		a: snapangle
	};
};


// Function: rectsIntersect
// Check if two rectangles (BBoxes objects) intersect each other
//
// Paramaters:
// r1 - The first BBox-like object
// r2 - The second BBox-like object
//
// Returns:
// Boolean that's true if rectangles intersect
svgedit.math.rectsIntersect = function(r1, r2) {
	return r2.x < (r1.x+r1.width) &&
		(r2.x+r2.width) > r1.x &&
		r2.y < (r1.y+r1.height) &&
		(r2.y+r2.height) > r1.y;
};

})();


/**
 * Package: svgedit.units
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Jeff Schiller
 */

// Dependencies:
// 1) jQuery

(function() {

if (!svgedit.units) {
	svgedit.units = {};
}

var NS = svgedit.NS;
var wAttrs = ['x', 'x1', 'cx', 'rx', 'width'];
var hAttrs = ['y', 'y1', 'cy', 'ry', 'height'];
var unitAttrs = ['r', 'radius'].concat(wAttrs, hAttrs);
// unused
var unitNumMap = {
	'%':  2,
	'em': 3,
	'ex': 4,
	'px': 5,
	'cm': 6,
	'mm': 7,
	'in': 8,
	'pt': 9,
	'pc': 10
};

// Container of elements.
var elementContainer_;

/**
 * Stores mapping of unit type to user coordinates.
 */
var typeMap_ = {};

/**
 * ElementContainer interface
 *
 * function getBaseUnit() - returns a string of the base unit type of the container ('em')
 * function getElement() - returns an element in the container given an id
 * function getHeight() - returns the container's height
 * function getWidth() - returns the container's width
 * function getRoundDigits() - returns the number of digits number should be rounded to
 */

/**
 * Function: svgedit.units.init()
 * Initializes this module.
 *
 * Parameters:
 * elementContainer - an object implementing the ElementContainer interface.
 */
svgedit.units.init = function(elementContainer) {
	elementContainer_ = elementContainer;

	// Get correct em/ex values by creating a temporary SVG.
	var svg = document.createElementNS(NS.SVG, 'svg');
	document.body.appendChild(svg);
	var rect = document.createElementNS(NS.SVG, 'rect');
	rect.setAttribute('width', '1em');
	rect.setAttribute('height', '1ex');
	rect.setAttribute('x', '1in');
	svg.appendChild(rect);
	var bb = rect.getBBox();
	document.body.removeChild(svg);

	var inch = bb.x;
	typeMap_ = {
		'em': bb.width,
		'ex': bb.height,
		'in': inch,
		'cm': inch / 2.54,
		'mm': inch / 25.4,
		'pt': inch / 72,
		'pc': inch / 6,
		'px': 1,
		'%': 0
	};
};

// Group: Unit conversion functions

// Function: svgedit.units.getTypeMap
// Returns the unit object with values for each unit
svgedit.units.getTypeMap = function() {
	return typeMap_;
};

// Function: svgedit.units.shortFloat
// Rounds a given value to a float with number of digits defined in save_options
//
// Parameters:
// val - The value as a String, Number or Array of two numbers to be rounded
//
// Returns:
// If a string/number was given, returns a Float. If an array, return a string
// with comma-seperated floats
svgedit.units.shortFloat = function(val) {
	var digits = elementContainer_.getRoundDigits();
	if (!isNaN(val)) {
		// Note that + converts to Number
		return +((+val).toFixed(digits));
	}
	if ($.isArray(val)) {
		return svgedit.units.shortFloat(val[0]) + ',' + svgedit.units.shortFloat(val[1]);
	}
	return parseFloat(val).toFixed(digits) - 0;
};

// Function: svgedit.units.convertUnit
// Converts the number to given unit or baseUnit
svgedit.units.convertUnit = function(val, unit) {
	unit = unit || elementContainer_.getBaseUnit();
//	baseVal.convertToSpecifiedUnits(unitNumMap[unit]);
//	var val = baseVal.valueInSpecifiedUnits;
//	baseVal.convertToSpecifiedUnits(1);
	return svgedit.units.shortFloat(val / typeMap_[unit]);
};

// Function: svgedit.units.setUnitAttr
// Sets an element's attribute based on the unit in its current value.
//
// Parameters:
// elem - DOM element to be changed
// attr - String with the name of the attribute associated with the value
// val - String with the attribute value to convert
svgedit.units.setUnitAttr = function(elem, attr, val) {
	if (!isNaN(val)) {
		// New value is a number, so check currently used unit
//		var old_val = elem.getAttribute(attr);

		// Enable this for alternate mode
//		if (old_val !== null && (isNaN(old_val) || elementContainer_.getBaseUnit() !== 'px')) {
//			// Old value was a number, so get unit, then convert
//			var unit;
//			if (old_val.substr(-1) === '%') {
//				var res = getResolution();
//				unit = '%';
//				val *= 100;
//				if (wAttrs.indexOf(attr) >= 0) {
//					val = val / res.w;
//				} else if (hAttrs.indexOf(attr) >= 0) {
//					val = val / res.h;
//				} else {
//					return val / Math.sqrt((res.w*res.w) + (res.h*res.h))/Math.sqrt(2);
//				}
//			} else {
//				if (elementContainer_.getBaseUnit() !== 'px') {
//					unit = elementContainer_.getBaseUnit();
//				} else {
//					unit = old_val.substr(-2);
//				}
//				val = val / typeMap_[unit];
//			}
//
//		val += unit;
//		}
	}
	elem.setAttribute(attr, val);
};

var attrsToConvert = {
	'line': ['x1', 'x2', 'y1', 'y2'],
	'circle': ['cx', 'cy', 'r'],
	'ellipse': ['cx', 'cy', 'rx', 'ry'],
	'foreignObject': ['x', 'y', 'width', 'height'],
	'rect': ['x', 'y', 'width', 'height'],
	'image': ['x', 'y', 'width', 'height'],
	'use': ['x', 'y', 'width', 'height'],
	'text': ['x', 'y']
};

// Function: svgedit.units.convertAttrs
// Converts all applicable attributes to the configured baseUnit
//
// Parameters:
// element - a DOM element whose attributes should be converted
svgedit.units.convertAttrs = function(element) {
	var elName = element.tagName;
	var unit = elementContainer_.getBaseUnit();
	var attrs = attrsToConvert[elName];
	if (!attrs) return;

	var len = attrs.length;
	for (var i = 0; i < len; i++) {
		var attr = attrs[i];
		var cur = element.getAttribute(attr);
		if (cur) {
			if (!isNaN(cur)) {
				element.setAttribute(attr, (cur / typeMap_[unit]) + unit);
			} else {
				// Convert existing?
			}
		}
	}
};

// Function: svgedit.units.convertToNum
// Converts given values to numbers. Attributes must be supplied in 
// case a percentage is given
//
// Parameters:
// attr - String with the name of the attribute associated with the value
// val - String with the attribute value to convert
svgedit.units.convertToNum = function(attr, val) {
	// Return a number if that's what it already is
	if (!isNaN(val)) return val-0;

	if (val.substr(-1) === '%') {
		// Deal with percentage, depends on attribute
		var num = val.substr(0, val.length-1)/100;
		var width = elementContainer_.getWidth();
		var height = elementContainer_.getHeight();

		if (wAttrs.indexOf(attr) >= 0) {
			return num * width;
		}
		if (hAttrs.indexOf(attr) >= 0) {
			return num * height;
		}
		return num * Math.sqrt((width*width) + (height*height))/Math.sqrt(2);
	}
	var unit = val.substr(-2);
	var num = val.substr(0, val.length-2);
	// Note that this multiplication turns the string into a number
	return num * typeMap_[unit];
};

// Function: svgedit.units.isValidUnit
// Check if an attribute's value is in a valid format
//
// Parameters:
// attr - String with the name of the attribute associated with the value
// val - String with the attribute value to check
svgedit.units.isValidUnit = function(attr, val, selectedElement) {
	var valid = false;
	if (unitAttrs.indexOf(attr) >= 0) {
		// True if it's just a number
		if (!isNaN(val)) {
			valid = true;
		} else {
		// Not a number, check if it has a valid unit
			val = val.toLowerCase();
			$.each(typeMap_, function(unit) {
				if (valid) return;
				var re = new RegExp('^-?[\\d\\.]+' + unit + '$');
				if (re.test(val)) valid = true;
			});
		}
	} else if (attr == 'id') {
		// if we're trying to change the id, make sure it's not already present in the doc
		// and the id value is valid.

		var result = false;
		// because getElem() can throw an exception in the case of an invalid id
		// (according to http://www.w3.org/TR/xml-id/ IDs must be a NCName)
		// we wrap it in an exception and only return true if the ID was valid and
		// not already present
		try {
			var elem = elementContainer_.getElement(val);
			result = (elem == null || elem === selectedElement);
		} catch(e) {}
		return result;
	} else {
		valid = true;
	}

	return valid;
};

})();


/**
 * Package: svgedit.utilities
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Jeff Schiller
 */

// Dependencies:
// 1) jQuery
// 2) browser.js
// 3) svgtransformlist.js
// 4) units.js

(function() {

if (!svgedit.utilities) {
	svgedit.utilities = {};
}

// Constants

// String used to encode base64.
var KEYSTR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var NS = svgedit.NS;

// Much faster than running getBBox() every time
var visElems = 'a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use';
var visElems_arr = visElems.split(',');
//var hidElems = 'clipPath,defs,desc,feGaussianBlur,filter,linearGradient,marker,mask,metadata,pattern,radialGradient,stop,switch,symbol,title,textPath';

var editorContext_ = null;
var domdoc_ = null;
var domcontainer_ = null;
var svgroot_ = null;

svgedit.utilities.init = function(editorContext) {
	editorContext_ = editorContext;
	domdoc_ = editorContext.getDOMDocument();
	domcontainer_ = editorContext.getDOMContainer();
	svgroot_ = editorContext.getSVGRoot();
};

// Function: svgedit.utilities.toXml
// Converts characters in a string to XML-friendly entities.
//
// Example: '&' becomes '&amp;'
//
// Parameters:
// str - The string to be converted
//
// Returns:
// The converted string
svgedit.utilities.toXml = function(str) {
	return $('<p/>').text(str).html();
};

// Function: svgedit.utilities.fromXml
// Converts XML entities in a string to single characters.
// Example: '&amp;' becomes '&'
//
// Parameters:
// str - The string to be converted
//
// Returns:
// The converted string
svgedit.utilities.fromXml = function(str) {
	return $('<p/>').html(str).text();
};

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

// schiller: Removed string concatenation in favour of Array.join() optimization,
// 				also precalculate the size of the array needed.

// Function: svgedit.utilities.encode64
// Converts a string to base64
svgedit.utilities.encode64 = function(input) {
	// base64 strings are 4/3 larger than the original string
//	input = svgedit.utilities.encodeUTF8(input); // convert non-ASCII characters
	input = svgedit.utilities.convertToXMLReferences(input);
	if(window.btoa) return window.btoa(input); // Use native if available
	var output = new Array( Math.floor( (input.length + 2) / 3 ) * 4 );
	var chr1, chr2, chr3;
	var enc1, enc2, enc3, enc4;
	var i = 0, p = 0;

	do {
		chr1 = input.charCodeAt(i++);
		chr2 = input.charCodeAt(i++);
		chr3 = input.charCodeAt(i++);

		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		enc4 = chr3 & 63;

		if (isNaN(chr2)) {
			enc3 = enc4 = 64;
		} else if (isNaN(chr3)) {
			enc4 = 64;
		}

		output[p++] = KEYSTR.charAt(enc1);
		output[p++] = KEYSTR.charAt(enc2);
		output[p++] = KEYSTR.charAt(enc3);
		output[p++] = KEYSTR.charAt(enc4);
	} while (i < input.length);

	return output.join('');
};

// Function: svgedit.utilities.decode64
// Converts a string from base64
svgedit.utilities.decode64 = function(input) {
	if(window.atob) return window.atob(input);
	var output = '';
	var chr1, chr2, chr3 = '';
	var enc1, enc2, enc3, enc4 = '';
	var i = 0;

	// remove all characters that are not A-Z, a-z, 0-9, +, /, or =
	input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

	do {
		enc1 = KEYSTR.indexOf(input.charAt(i++));
		enc2 = KEYSTR.indexOf(input.charAt(i++));
		enc3 = KEYSTR.indexOf(input.charAt(i++));
		enc4 = KEYSTR.indexOf(input.charAt(i++));

		chr1 = (enc1 << 2) | (enc2 >> 4);
		chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
		chr3 = ((enc3 & 3) << 6) | enc4;

		output = output + String.fromCharCode(chr1);

		if (enc3 != 64) {
			output = output + String.fromCharCode(chr2);
		}
		if (enc4 != 64) {
			output = output + String.fromCharCode(chr3);
		}

		chr1 = chr2 = chr3 = '';
		enc1 = enc2 = enc3 = enc4 = '';

	} while (i < input.length);
	return unescape(output);
};

// Currently not being used, so commented out for now
// based on http://phpjs.org/functions/utf8_encode:577
// codedread:does not seem to work with webkit-based browsers on OSX
// 		'encodeUTF8': function(input) {
// 			//return unescape(encodeURIComponent(input)); //may or may not work
// 			var output = '';
// 			for (var n = 0; n < input.length; n++){
// 				var c = input.charCodeAt(n);
// 				if (c < 128) {
// 					output += input[n];
// 				}
// 				else if (c > 127) {
// 					if (c < 2048){
// 						output += String.fromCharCode((c >> 6) | 192);
// 					}
// 					else {
// 						output += String.fromCharCode((c >> 12) | 224) + String.fromCharCode((c >> 6) & 63 | 128);
// 					}
// 					output += String.fromCharCode((c & 63) | 128);
// 				}
// 			}
// 			return output;
// 		},

// Function: svgedit.utilities.convertToXMLReferences
// Converts a string to use XML references
svgedit.utilities.convertToXMLReferences = function(input) {
	var output = '';
	for (var n = 0; n < input.length; n++){
		var c = input.charCodeAt(n);
		if (c < 128) {
			output += input[n];
		} else if(c > 127) {
			output += ('&#' + c + ';');
		}
	}
	return output;
};

// Function: svgedit.utilities.text2xml
// Cross-browser compatible method of converting a string to an XML tree
// found this function here: http://groups.google.com/group/jquery-dev/browse_thread/thread/c6d11387c580a77f
svgedit.utilities.text2xml = function(sXML) {
	if(sXML.indexOf('<svg:svg') >= 0) {
		sXML = sXML.replace(/<(\/?)svg:/g, '<$1').replace('xmlns:svg', 'xmlns');
	}

	var out;
	try{
		var dXML = (window.DOMParser)?new DOMParser():new ActiveXObject('Microsoft.XMLDOM');
		dXML.async = false;
	} catch(e){
		throw new Error('XML Parser could not be instantiated');
	}
	try{
		if(dXML.loadXML) out = (dXML.loadXML(sXML)) ? dXML : false;
		else out = dXML.parseFromString(sXML, 'text/xml');
	}
	catch(e){ throw new Error('Error parsing XML string'); }
	return out;
};

// Function: svgedit.utilities.bboxToObj
// Converts a SVGRect into an object.
// 
// Parameters:
// bbox - a SVGRect
// 
// Returns:
// An object with properties names x, y, width, height.
svgedit.utilities.bboxToObj = function(bbox) {
	return {
		x: bbox.x,
		y: bbox.y,
		width: bbox.width,
		height: bbox.height
	};
};

// Function: svgedit.utilities.walkTree
// Walks the tree and executes the callback on each element in a top-down fashion
//
// Parameters:
// elem - DOM element to traverse
// cbFn - Callback function to run on each element
svgedit.utilities.walkTree = function(elem, cbFn){
	if (elem && elem.nodeType == 1) {
		cbFn(elem);
		var i = elem.childNodes.length;
		while (i--) {
			svgedit.utilities.walkTree(elem.childNodes.item(i), cbFn);
		}
	}
};

// Function: svgedit.utilities.walkTreePost
// Walks the tree and executes the callback on each element in a depth-first fashion
// TODO: FIXME: Shouldn't this be calling walkTreePost?
//
// Parameters:
// elem - DOM element to traverse
// cbFn - Callback function to run on each element
svgedit.utilities.walkTreePost = function(elem, cbFn) {
	if (elem && elem.nodeType == 1) {
		var i = elem.childNodes.length;
		while (i--) {
			svgedit.utilities.walkTree(elem.childNodes.item(i), cbFn);
		}
		cbFn(elem);
	}
};

// Function: svgedit.utilities.getUrlFromAttr
// Extracts the URL from the url(...) syntax of some attributes.
// Three variants:
//  * <circle fill="url(someFile.svg#foo)" />
//  * <circle fill="url('someFile.svg#foo')" />
//  * <circle fill='url("someFile.svg#foo")' />
//
// Parameters:
// attrVal - The attribute value as a string
//
// Returns:
// String with just the URL, like someFile.svg#foo
svgedit.utilities.getUrlFromAttr = function(attrVal) {
	if (attrVal) {
		// url("#somegrad")
		if (attrVal.indexOf('url("') === 0) {
			return attrVal.substring(5, attrVal.indexOf('"',6));
		}
		// url('#somegrad')
		else if (attrVal.indexOf("url('") === 0) {
			return attrVal.substring(5, attrVal.indexOf("'",6));
		}
		else if (attrVal.indexOf("url(") === 0) {
			return attrVal.substring(4, attrVal.indexOf(')'));
		}
	}
	return null;
};

// Function: svgedit.utilities.getHref
// Returns the given element's xlink:href value
svgedit.utilities.getHref = function(elem) {
	return elem.getAttributeNS(NS.XLINK, 'href');
};

// Function: svgedit.utilities.setHref
// Sets the given element's xlink:href value
svgedit.utilities.setHref = function(elem, val) {
	elem.setAttributeNS(NS.XLINK, 'xlink:href', val);
};

// Function: findDefs
//
// Returns:
// The document's <defs> element, create it first if necessary
svgedit.utilities.findDefs = function() {
	var svgElement = editorContext_.getSVGContent();
	var defs = svgElement.getElementsByTagNameNS(NS.SVG, 'defs');
	if (defs.length > 0) {
		defs = defs[0];
	} else {
		defs = svgElement.ownerDocument.createElementNS(NS.SVG, 'defs');
		if (svgElement.firstChild) {
			// first child is a comment, so call nextSibling
			svgElement.insertBefore(defs, svgElement.firstChild.nextSibling);
		} else {
			svgElement.appendChild(defs);
		}
	}
	return defs;
};

// TODO(codedread): Consider moving the next to functions to bbox.js

// Function: svgedit.utilities.getPathBBox
// Get correct BBox for a path in Webkit
// Converted from code found here:
// http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
//
// Parameters:
// path - The path DOM element to get the BBox for
//
// Returns:
// A BBox-like object
svgedit.utilities.getPathBBox = function(path) {
	var seglist = path.pathSegList;
	var tot = seglist.numberOfItems;

	var bounds = [[], []];
	var start = seglist.getItem(0);
	var P0 = [start.x, start.y];

	for(var i=0; i < tot; i++) {
		var seg = seglist.getItem(i);

		if(typeof seg.x == 'undefined') continue;

		// Add actual points to limits
		bounds[0].push(P0[0]);
		bounds[1].push(P0[1]);

		if(seg.x1) {
			var P1 = [seg.x1, seg.y1],
				P2 = [seg.x2, seg.y2],
				P3 = [seg.x, seg.y];

			for(var j=0; j < 2; j++) {

				var calc = function(t) {
					return Math.pow(1-t,3) * P0[j]
						+ 3 * Math.pow(1-t,2) * t * P1[j]
						+ 3 * (1-t) * Math.pow(t, 2) * P2[j]
						+ Math.pow(t,3) * P3[j];
				};

				var b = 6 * P0[j] - 12 * P1[j] + 6 * P2[j];
				var a = -3 * P0[j] + 9 * P1[j] - 9 * P2[j] + 3 * P3[j];
				var c = 3 * P1[j] - 3 * P0[j];

				if(a == 0) {
					if(b == 0) {
						continue;
					}
					var t = -c / b;
					if(0 < t && t < 1) {
						bounds[j].push(calc(t));
					}
					continue;
				}
				var b2ac = Math.pow(b,2) - 4 * c * a;
				if(b2ac < 0) continue;
				var t1 = (-b + Math.sqrt(b2ac))/(2 * a);
				if(0 < t1 && t1 < 1) bounds[j].push(calc(t1));
				var t2 = (-b - Math.sqrt(b2ac))/(2 * a);
				if(0 < t2 && t2 < 1) bounds[j].push(calc(t2));
			}
			P0 = P3;
		} else {
			bounds[0].push(seg.x);
			bounds[1].push(seg.y);
		}
	}

	var x = Math.min.apply(null, bounds[0]);
	var w = Math.max.apply(null, bounds[0]) - x;
	var y = Math.min.apply(null, bounds[1]);
	var h = Math.max.apply(null, bounds[1]) - y;
	return {
		'x': x,
		'y': y,
		'width': w,
		'height': h
	};
};

// Function: groupBBFix
// Get the given/selected element's bounding box object, checking for
// horizontal/vertical lines (see issue 717)
// Note that performance is currently terrible, so some way to improve would
// be great.
//
// Parameters:
// selected - Container or <use> DOM element
function groupBBFix(selected) {
	if(svgedit.browser.supportsHVLineContainerBBox()) {
		try { return selected.getBBox();} catch(e){}
	}
	var ref = $.data(selected, 'ref');
	var matched = null;
	var ret;

	if(ref) {
		var copy = $(ref).children().clone().attr('visibility', 'hidden');
		$(svgroot_).append(copy);
		matched = copy.filter('line, path');
	} else {
		matched = $(selected).find('line, path');
	}

	var issue = false;
	if(matched.length) {
		matched.each(function() {
			var bb = this.getBBox();
			if(!bb.width || !bb.height) {
				issue = true;
			}
		});
		if(issue) {
			var elems = ref ? copy : $(selected).children();
			ret = getStrokedBBox(elems);
		} else {
			ret = selected.getBBox();
		}
	} else {
		ret = selected.getBBox();
	}
	if(ref) {
		copy.remove();
	}
	return ret;
}

// Function: svgedit.utilities.getBBox
// Get the given/selected element's bounding box object, convert it to be more
// usable when necessary
//
// Parameters:
// elem - Optional DOM element to get the BBox for
svgedit.utilities.getBBox = function(elem) {
	var selected = elem || editorContext_.geSelectedElements()[0];
	if (elem.nodeType != 1) return null;
	var ret = null;
	var elname = selected.nodeName;

	switch ( elname ) {
	case 'text':
		if(selected.textContent === '') {
			selected.textContent = 'a'; // Some character needed for the selector to use.
			ret = selected.getBBox();
			selected.textContent = '';
		} else {
			try { ret = selected.getBBox();} catch(e){}
		}
		break;
	case 'path':
		if(!svgedit.browser.supportsPathBBox()) {
			ret = svgedit.utilities.getPathBBox(selected);
		} else {
			try { ret = selected.getBBox();} catch(e){}
		}
		break;
	case 'g':
	case 'a':
		ret = groupBBFix(selected);
		break;
	default:

		if(elname === 'use') {
			ret = groupBBFix(selected, true);
		}
		if(elname === 'use' || ( elname === 'foreignObject' && svgedit.browser.isWebkit() ) ) {
			if(!ret) ret = selected.getBBox();
			// This is resolved in later versions of webkit, perhaps we should
			// have a featured detection for correct 'use' behavior?
			// ——————————
			//if(!svgedit.browser.isWebkit()) {
				var bb = {};
				bb.width = ret.width;
				bb.height = ret.height;
				bb.x = ret.x + parseFloat(selected.getAttribute('x')||0);
				bb.y = ret.y + parseFloat(selected.getAttribute('y')||0);
				ret = bb;
			//}
		} else if(~visElems_arr.indexOf(elname)) {
			try { ret = selected.getBBox();}
			catch(e) {
				// Check if element is child of a foreignObject
				var fo = $(selected).closest('foreignObject');
				if(fo.length) {
					try {
						ret = fo[0].getBBox();
					} catch(e) {
						ret = null;
					}
				} else {
					ret = null;
				}
			}
		}
	}
	if(ret) {
		ret = svgedit.utilities.bboxToObj(ret);
	}

	// get the bounding box from the DOM (which is in that element's coordinate system)
	return ret;
};

// Function: svgedit.utilities.getRotationAngle
// Get the rotation angle of the given/selected DOM element
//
// Parameters:
// elem - Optional DOM element to get the angle for
// to_rad - Boolean that when true returns the value in radians rather than degrees
//
// Returns:
// Float with the angle in degrees or radians
svgedit.utilities.getRotationAngle = function(elem, to_rad) {
	var selected = elem || editorContext_.getSelectedElements()[0];
	// find the rotation transform (if any) and set it
	var tlist = svgedit.transformlist.getTransformList(selected);
	if(!tlist) return 0; // <svg> elements have no tlist
	var N = tlist.numberOfItems;
	for (var i = 0; i < N; ++i) {
		var xform = tlist.getItem(i);
		if (xform.type == 4) {
			return to_rad ? xform.angle * Math.PI / 180.0 : xform.angle;
		}
	}
	return 0.0;
};

// Function getRefElem
// Get the reference element associated with the given attribute value
//
// Parameters:
// attrVal - The attribute value as a string
svgedit.utilities.getRefElem = function(attrVal) {
	return svgedit.utilities.getElem(svgedit.utilities.getUrlFromAttr(attrVal).substr(1));
};

// Function: getElem
// Get a DOM element by ID within the SVG root element.
//
// Parameters:
// id - String with the element's new ID
if (svgedit.browser.supportsSelectors()) {
	svgedit.utilities.getElem = function(id) {
		// querySelector lookup
		return svgroot_.querySelector('#'+id);
	};
} else if (svgedit.browser.supportsXpath()) {
	svgedit.utilities.getElem = function(id) {
		// xpath lookup
		return domdoc_.evaluate(
			'svg:svg[@id="svgroot"]//svg:*[@id="'+id+'"]',
			domcontainer_,
			function() { return svgedit.NS.SVG; },
			9,
			null).singleNodeValue;
	};
} else {
	svgedit.utilities.getElem = function(id) {
		// jQuery lookup: twice as slow as xpath in FF
		return $(svgroot_).find('[id=' + id + ']')[0];
	};
}

// Function: assignAttributes
// Assigns multiple attributes to an element.
//
// Parameters: 
// node - DOM element to apply new attribute values to
// attrs - Object with attribute keys/values
// suspendLength - Optional integer of milliseconds to suspend redraw
// unitCheck - Boolean to indicate the need to use svgedit.units.setUnitAttr
svgedit.utilities.assignAttributes = function(node, attrs, suspendLength, unitCheck) {
	if(!suspendLength) suspendLength = 0;
	// Opera has a problem with suspendRedraw() apparently
	var handle = null;
	if (!svgedit.browser.isOpera()) svgroot_.suspendRedraw(suspendLength);

	for (var i in attrs) {
		var ns = (i.substr(0,4) === 'xml:' ? NS.XML :
			i.substr(0,6) === 'xlink:' ? NS.XLINK : null);

		if(ns) {
			node.setAttributeNS(ns, i, attrs[i]);
		} else if(!unitCheck) {
			node.setAttribute(i, attrs[i]);
		} else {
			svgedit.units.setUnitAttr(node, i, attrs[i]);
		}
	}
	if (!svgedit.browser.isOpera()) svgroot_.unsuspendRedraw(handle);
};

// Function: cleanupElement
// Remove unneeded (default) attributes, makes resulting SVG smaller
//
// Parameters:
// element - DOM element to clean up
svgedit.utilities.cleanupElement = function(element) {
	var handle = svgroot_.suspendRedraw(60);
	var defaults = {
		'fill-opacity':1,
		'stop-opacity':1,
		'opacity':1,
		'stroke':'none',
		'stroke-dasharray':'none',
		'stroke-linejoin':'miter',
		'stroke-linecap':'butt',
		'stroke-opacity':1,
		'stroke-width':1,
		'rx':0,
		'ry':0
	};

	for(var attr in defaults) {
		var val = defaults[attr];
		if(element.getAttribute(attr) == val) {
			element.removeAttribute(attr);
		}
	}

	svgroot_.unsuspendRedraw(handle);
};

// Function: snapToGrid
// round value to for snapping
// NOTE: This function did not move to svgutils.js since it depends on curConfig.
svgedit.utilities.snapToGrid = function(value) {
	var stepSize = editorContext_.getSnappingStep();
	var unit = editorContext_.getBaseUnit();
	if (unit !== "px") {
		stepSize *= svgedit.units.getTypeMap()[unit];
	}
	value = Math.round(value/stepSize)*stepSize;
	return value;
};

})();


/**
 * Package: svgedit.sanitize
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Jeff Schiller
 */

// Dependencies:
// 1) jQuery
// 2) browser.js
// 3) svgutils.js

(function() {

if (!svgedit.sanitize) {
  svgedit.sanitize = {};
}

var NS = svgedit.NS,
  REVERSE_NS = svgedit.getReverseNS();

// this defines which elements and attributes that we support
var svgWhiteList_ = {
  // SVG Elements
  "a": ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "id", "mask", "opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "xlink:href", "xlink:title"],
  "circle": ["class", "clip-path", "clip-rule", "cx", "cy", "fill", "fill-opacity", "fill-rule", "filter", "id", "mask", "opacity", "r", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"],
  "clipPath": ["class", "clipPathUnits", "id"],
  "defs": [],
  "style" : ["type"],
  "desc": [],
  "ellipse": ["class", "clip-path", "clip-rule", "cx", "cy", "fill", "fill-opacity", "fill-rule", "filter", "id", "mask", "opacity", "requiredFeatures", "rx", "ry", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"],
  "feGaussianBlur": ["class", "color-interpolation-filters", "id", "requiredFeatures", "stdDeviation"],
  "filter": ["class", "color-interpolation-filters", "filterRes", "filterUnits", "height", "id", "primitiveUnits", "requiredFeatures", "width", "x", "xlink:href", "y"],
  "foreignObject": ["class", "font-size", "height", "id", "opacity", "requiredFeatures", "style", "transform", "width", "x", "y"],
  "g": ["class", "clip-path", "clip-rule", "id", "display", "fill", "fill-opacity", "fill-rule", "filter", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "font-family", "font-size", "font-style", "font-weight", "text-anchor"],
  "image": ["class", "clip-path", "clip-rule", "filter", "height", "id", "mask", "opacity", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xlink:href", "xlink:title", "y"],
  "line": ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "id", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "x1", "x2", "y1", "y2"],
  "linearGradient": ["class", "id", "gradientTransform", "gradientUnits", "requiredFeatures", "spreadMethod", "systemLanguage", "x1", "x2", "xlink:href", "y1", "y2"],
  "marker": ["id", "class", "markerHeight", "markerUnits", "markerWidth", "orient", "preserveAspectRatio", "refX", "refY", "systemLanguage", "viewBox"],
  "mask": ["class", "height", "id", "maskContentUnits", "maskUnits", "width", "x", "y"],
  "metadata": ["class", "id"],
  "path": ["class", "clip-path", "clip-rule", "d", "fill", "fill-opacity", "fill-rule", "filter", "id", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"],
  "pattern": ["class", "height", "id", "patternContentUnits", "patternTransform", "patternUnits", "requiredFeatures", "style", "systemLanguage", "viewBox", "width", "x", "xlink:href", "y"],
  "polygon": ["class", "clip-path", "clip-rule", "id", "fill", "fill-opacity", "fill-rule", "filter", "id", "class", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "points", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"],
  "polyline": ["class", "clip-path", "clip-rule", "id", "fill", "fill-opacity", "fill-rule", "filter", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "points", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"],
  "radialGradient": ["class", "cx", "cy", "fx", "fy", "gradientTransform", "gradientUnits", "id", "r", "requiredFeatures", "spreadMethod", "systemLanguage", "xlink:href"],
  "rect": ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "height", "id", "mask", "opacity", "requiredFeatures", "rx", "ry", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "width", "x", "y"],
  "stop": ["class", "id", "offset", "requiredFeatures", "stop-color", "stop-opacity", "style", "systemLanguage"],
  "svg": ["class", "clip-path", "clip-rule", "filter", "id", "height", "mask", "preserveAspectRatio", "requiredFeatures", "style", "systemLanguage", "viewBox", "width", "x", "xmlns", "xmlns:se", "xmlns:xlink", "y"],
  "switch": ["class", "id", "requiredFeatures", "systemLanguage"],
  "symbol": ["class", "fill", "fill-opacity", "fill-rule", "filter", "font-family", "font-size", "font-style", "font-weight", "id", "opacity", "preserveAspectRatio", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "viewBox"],
  "text": ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "font-family", "font-size", "font-style", "font-weight", "id", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "text-anchor", "transform", "x", "xml:space", "y"],
  "textPath": ["class", "id", "method", "requiredFeatures", "spacing", "startOffset", "style", "systemLanguage", "transform", "xlink:href"],
  "title": [],
  "tspan": ["class", "clip-path", "clip-rule", "dx", "dy", "fill", "fill-opacity", "fill-rule", "filter", "font-family", "font-size", "font-style", "font-weight", "id", "mask", "opacity", "requiredFeatures", "rotate", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "text-anchor", "textLength", "transform", "x", "xml:space", "y"],
  "use": ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "height", "id", "mask", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "transform", "width", "x", "xlink:href", "y"],

  // MathML Elements
  "annotation": ["encoding"],
  "annotation-xml": ["encoding"],
  "maction": ["actiontype", "other", "selection"],
  "math": ["class", "id", "display", "xmlns"],
  "menclose": ["notation"],
  "merror": [],
  "mfrac": ["linethickness"],
  "mi": ["mathvariant"],
  "mmultiscripts": [],
  "mn": [],
  "mo": ["fence", "lspace", "maxsize", "minsize", "rspace", "stretchy"],
  "mover": [],
  "mpadded": ["lspace", "width", "height", "depth", "voffset"],
  "mphantom": [],
  "mprescripts": [],
  "mroot": [],
  "mrow": ["xlink:href", "xlink:type", "xmlns:xlink"],
  "mspace": ["depth", "height", "width"],
  "msqrt": [],
  "mstyle": ["displaystyle", "mathbackground", "mathcolor", "mathvariant", "scriptlevel"],
  "msub": [],
  "msubsup": [],
  "msup": [],
  "mtable": ["align", "columnalign", "columnlines", "columnspacing", "displaystyle", "equalcolumns", "equalrows", "frame", "rowalign", "rowlines", "rowspacing", "width"],
  "mtd": ["columnalign", "columnspan", "rowalign", "rowspan"],
  "mtext": [],
  "mtr": ["columnalign", "rowalign"],
  "munder": [],
  "munderover": [],
  "none": [],
  "semantics": []
};

// Produce a Namespace-aware version of svgWhitelist
var svgWhiteListNS_ = {};
$.each(svgWhiteList_, function(elt, atts){
  var attNS = {};
  $.each(atts, function(i, att){
    if (att.indexOf(':') >= 0) {
      var v = att.split(':');
      attNS[v[1]] = NS[(v[0]).toUpperCase()];
    } else {
      attNS[att] = att == 'xmlns' ? NS.XMLNS : null;
    }
  });
  svgWhiteListNS_[elt] = attNS;
});

// Function: svgedit.sanitize.sanitizeSvg
// Sanitizes the input node and its children
// It only keeps what is allowed from our whitelist defined above
//
// Parameters:
// node - The DOM element to be checked (we'll also check its children)
svgedit.sanitize.sanitizeSvg = function(node) {
  // Cleanup text nodes
  if (node.nodeType == 3) { // 3 == TEXT_NODE
    // Trim whitespace
    node.nodeValue = node.nodeValue.replace(/^\s+|\s+$/g, '');
    // Remove if empty
    if (node.nodeValue.length === 0) {
      node.parentNode.removeChild(node);
    }
  }

  // We only care about element nodes.
  // Automatically return for all non-element nodes, such as comments, etc.
  if (node.nodeType != 1) { // 1 == ELEMENT_NODE
    return;
  }

  var doc = node.ownerDocument;
  var parent = node.parentNode;
  // can parent ever be null here?  I think the root node's parent is the document...
  if (!doc || !parent) {
    return;
  }

  var allowedAttrs = svgWhiteList_[node.nodeName];
  var allowedAttrsNS = svgWhiteListNS_[node.nodeName];

  // if this element is supported, sanitize it
  if (typeof allowedAttrs !== 'undefined') {

    var seAttrs = [];
    var i = node.attributes.length;
    while (i--) {
      // if the attribute is not in our whitelist, then remove it
      // could use jQuery's inArray(), but I don't know if that's any better
      var attr = node.attributes.item(i);
      var attrName = attr.nodeName;
      var attrLocalName = attr.localName;
      var attrNsURI = attr.namespaceURI;
      // Check that an attribute with the correct localName in the correct namespace is on 
      // our whitelist or is a namespace declaration for one of our allowed namespaces
      if (!(allowedAttrsNS.hasOwnProperty(attrLocalName) && attrNsURI == allowedAttrsNS[attrLocalName] && attrNsURI != NS.XMLNS) &&
        !(attrNsURI == NS.XMLNS && REVERSE_NS[attr.nodeValue]) )
      {
        // TODO(codedread): Programmatically add the se: attributes to the NS-aware whitelist.
        // Bypassing the whitelist to allow se: prefixes.
        // Is there a more appropriate way to do this?
        if (attrName.indexOf('se:') === 0) {
          seAttrs.push([attrName, attr.nodeValue]);
        }
        node.removeAttributeNS(attrNsURI, attrLocalName);
      }

      // Add spaces before negative signs where necessary
      if (svgedit.browser.isGecko()) {
        switch (attrName) {
        case 'transform':
        case 'gradientTransform':
        case 'patternTransform':
          var val = attr.nodeValue.replace(/(\d)-/g, '$1 -');
          node.setAttribute(attrName, val);
        }
      }

      // For the style attribute, rewrite it in terms of XML presentational attributes
      if (attrName == 'style') {
        var props = attr.nodeValue.split(';'),
          p = props.length;
        while (p--) {
          var nv = props[p].split(':');
          var styleAttrName = $.trim(nv[0]);
          var styleAttrVal = $.trim(nv[1]);
          // Now check that this attribute is supported
          if (allowedAttrs.indexOf(styleAttrName) >= 0) {
            node.setAttribute(styleAttrName, styleAttrVal);
          }
        }
        node.removeAttribute('style');
      }
    }

    $.each(seAttrs, function(i, attr) {
      node.setAttributeNS(NS.SE, attr[0], attr[1]);
    });

    // for some elements that have a xlink:href, ensure the URI refers to a local element
    // (but not for links)
    var href = svgedit.utilities.getHref(node);
    if (href &&
      ['filter', 'linearGradient', 'pattern',
      'radialGradient', 'textPath', 'use'].indexOf(node.nodeName) >= 0)
    {
      // TODO: we simply check if the first character is a #, is this bullet-proof?
      if (href[0] != '#') {
        // remove the attribute (but keep the element)
        svgedit.utilities.setHref(node, '');
        node.removeAttributeNS(NS.XLINK, 'href');
      }
    }

    // Safari crashes on a <use> without a xlink:href, so we just remove the node here
    if (node.nodeName == 'use' && !svgedit.utilities.getHref(node)) {
      parent.removeChild(node);
      return;
    }
    // if the element has attributes pointing to a non-local reference,
    // need to remove the attribute
    $.each(['clip-path', 'fill', 'filter', 'marker-end', 'marker-mid', 'marker-start', 'mask', 'stroke'], function(i, attr) {
      var val = node.getAttribute(attr);
      if (val) {
        val = svgedit.utilities.getUrlFromAttr(val);
        // simply check for first character being a '#'
        if (val && val[0] !== '#') {
          node.setAttribute(attr, '');
          node.removeAttribute(attr);
        }
      }
    });

    // recurse to children
    i = node.childNodes.length;
    while (i--) { svgedit.sanitize.sanitizeSvg(node.childNodes.item(i)); }
  }
  // else (element not supported), remove it
  else {
    // remove all children from this node and insert them before this node
    // FIXME: in the case of animation elements this will hardly ever be correct
    var children = [];
    while (node.hasChildNodes()) {
      children.push(parent.insertBefore(node.firstChild, node));
    }

    // remove this node from the document altogether
    parent.removeChild(node);

    // call sanitizeSvg on each of those children
    var i = children.length;
    while (i--) { svgedit.sanitize.sanitizeSvg(children[i]); }
  }
};

})();


/**
 * Package: svedit.history
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2010 Jeff Schiller
 */

// Dependencies:
// 1) jQuery
// 2) svgtransformlist.js
// 3) svgutils.js

(function() {

if (!svgedit.history) {
	svgedit.history = {};
}

// Group: Undo/Redo history management
svgedit.history.HistoryEventTypes = {
	BEFORE_APPLY: 'before_apply',
	AFTER_APPLY: 'after_apply',
	BEFORE_UNAPPLY: 'before_unapply',
	AFTER_UNAPPLY: 'after_unapply'
};

var removedElements = {};

/**
 * Interface: svgedit.history.HistoryCommand
 * An interface that all command objects must implement.
 *
 * interface svgedit.history.HistoryCommand {
 *   void apply(svgedit.history.HistoryEventHandler);
 *   void unapply(svgedit.history.HistoryEventHandler);
 *   Element[] elements();
 *   String getText();
 *
 *   static String type();
 * }
 *
 * Interface: svgedit.history.HistoryEventHandler
 * An interface for objects that will handle history events.
 *
 * interface svgedit.history.HistoryEventHandler {
 *   void handleHistoryEvent(eventType, command);
 * }
 *
 * eventType is a string conforming to one of the HistoryEvent types.
 * command is an object fulfilling the HistoryCommand interface.
 */

// Class: svgedit.history.MoveElementCommand
// implements svgedit.history.HistoryCommand
// History command for an element that had its DOM position changed
//
// Parameters:
// elem - The DOM element that was moved
// oldNextSibling - The element's next sibling before it was moved
// oldParent - The element's parent before it was moved
// text - An optional string visible to user related to this change
svgedit.history.MoveElementCommand = function(elem, oldNextSibling, oldParent, text) {
	this.elem = elem;
	this.text = text ? ("Move " + elem.tagName + " to " + text) : ("Move " + elem.tagName);
	this.oldNextSibling = oldNextSibling;
	this.oldParent = oldParent;
	this.newNextSibling = elem.nextSibling;
	this.newParent = elem.parentNode;
};
svgedit.history.MoveElementCommand.type = function() { return 'svgedit.history.MoveElementCommand'; };
svgedit.history.MoveElementCommand.prototype.type = svgedit.history.MoveElementCommand.type;

// Function: svgedit.history.MoveElementCommand.getText
svgedit.history.MoveElementCommand.prototype.getText = function() {
	return this.text;
};

// Function: svgedit.history.MoveElementCommand.apply
// Re-positions the element
svgedit.history.MoveElementCommand.prototype.apply = function(handler) {
	// TODO(codedread): Refactor this common event code into a base HistoryCommand class.
	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY, this);
	}

	this.elem = this.newParent.insertBefore(this.elem, this.newNextSibling);

	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
	}
};

// Function: svgedit.history.MoveElementCommand.unapply
// Positions the element back to its original location
svgedit.history.MoveElementCommand.prototype.unapply = function(handler) {
	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY, this);
	}

	this.elem = this.oldParent.insertBefore(this.elem, this.oldNextSibling);

	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY, this);
	}
};

// Function: svgedit.history.MoveElementCommand.elements
// Returns array with element associated with this command
svgedit.history.MoveElementCommand.prototype.elements = function() {
	return [this.elem];
};


// Class: svgedit.history.InsertElementCommand
// implements svgedit.history.HistoryCommand
// History command for an element that was added to the DOM
//
// Parameters:
// elem - The newly added DOM element
// text - An optional string visible to user related to this change
svgedit.history.InsertElementCommand = function(elem, text) {
	this.elem = elem;
	this.text = text || ("Create " + elem.tagName);
	this.parent = elem.parentNode;
	this.nextSibling = this.elem.nextSibling;
};
svgedit.history.InsertElementCommand.type = function() { return 'svgedit.history.InsertElementCommand'; };
svgedit.history.InsertElementCommand.prototype.type = svgedit.history.InsertElementCommand.type;

// Function: svgedit.history.InsertElementCommand.getText
svgedit.history.InsertElementCommand.prototype.getText = function() {
	return this.text;
};

// Function: svgedit.history.InsertElementCommand.apply
// Re-Inserts the new element
svgedit.history.InsertElementCommand.prototype.apply = function(handler) {
	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY, this);
	}

	this.elem = this.parent.insertBefore(this.elem, this.nextSibling);

	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
	}
};

// Function: svgedit.history.InsertElementCommand.unapply
// Removes the element
svgedit.history.InsertElementCommand.prototype.unapply = function(handler) {
	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY, this);
	}

	this.parent = this.elem.parentNode;
	this.elem = this.elem.parentNode.removeChild(this.elem);

	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY, this);
	}
};

// Function: svgedit.history.InsertElementCommand.elements
// Returns array with element associated with this command
svgedit.history.InsertElementCommand.prototype.elements = function() {
	return [this.elem];
};


// Class: svgedit.history.RemoveElementCommand
// implements svgedit.history.HistoryCommand
// History command for an element removed from the DOM
//
// Parameters:
// elem - The removed DOM element
// oldNextSibling - the DOM element's nextSibling when it was in the DOM
// oldParent - The DOM element's parent
// text - An optional string visible to user related to this change
svgedit.history.RemoveElementCommand = function(elem, oldNextSibling, oldParent, text) {
	this.elem = elem;
	this.text = text || ("Delete " + elem.tagName);
	this.nextSibling = oldNextSibling;
	this.parent = oldParent;

	// special hack for webkit: remove this element's entry in the svgTransformLists map
	svgedit.transformlist.removeElementFromListMap(elem);
};
svgedit.history.RemoveElementCommand.type = function() { return 'svgedit.history.RemoveElementCommand'; };
svgedit.history.RemoveElementCommand.prototype.type = svgedit.history.RemoveElementCommand.type;

// Function: svgedit.history.RemoveElementCommand.getText
svgedit.history.RemoveElementCommand.prototype.getText = function() {
	return this.text;
};

// Function: RemoveElementCommand.apply
// Re-removes the new element
svgedit.history.RemoveElementCommand.prototype.apply = function(handler) {
	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY, this);
	}

	svgedit.transformlist.removeElementFromListMap(this.elem);
	this.parent = this.elem.parentNode;
	this.elem = this.parent.removeChild(this.elem);

	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
	}
};

// Function: RemoveElementCommand.unapply
// Re-adds the new element
svgedit.history.RemoveElementCommand.prototype.unapply = function(handler) {
	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY, this);
	}

	svgedit.transformlist.removeElementFromListMap(this.elem);
	if (this.nextSibling == null) {
		if (window.console) console.log('Error: reference element was lost');
	}
	this.parent.insertBefore(this.elem, this.nextSibling);


	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY, this);
	}
};

// Function: RemoveElementCommand.elements
// Returns array with element associated with this command
svgedit.history.RemoveElementCommand.prototype.elements = function() {
	return [this.elem];
};


// Class: svgedit.history.ChangeElementCommand
// implements svgedit.history.HistoryCommand
// History command to make a change to an element.
// Usually an attribute change, but can also be textcontent.
//
// Parameters:
// elem - The DOM element that was changed
// attrs - An object with the attributes to be changed and the values they had *before* the change
// text - An optional string visible to user related to this change
svgedit.history.ChangeElementCommand = function(elem, attrs, text) {
	this.elem = elem;
	this.text = text ? ("Change " + elem.tagName + " " + text) : ("Change " + elem.tagName);
	this.newValues = {};
	this.oldValues = attrs;
	for (var attr in attrs) {
		if (attr == "#text") this.newValues[attr] = elem.textContent;
		else if (attr == "#href") this.newValues[attr] = svgedit.utilities.getHref(elem);
		else this.newValues[attr] = elem.getAttribute(attr);
	}
};
svgedit.history.ChangeElementCommand.type = function() { return 'svgedit.history.ChangeElementCommand'; };
svgedit.history.ChangeElementCommand.prototype.type = svgedit.history.ChangeElementCommand.type;

// Function: svgedit.history.ChangeElementCommand.getText
svgedit.history.ChangeElementCommand.prototype.getText = function() {
	return this.text;
};

// Function: svgedit.history.ChangeElementCommand.apply
// Performs the stored change action
svgedit.history.ChangeElementCommand.prototype.apply = function(handler) {
	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY, this);
	}

	var bChangedTransform = false;
	for (var attr in this.newValues ) {
		if (this.newValues[attr]) {
			if (attr == "#text") this.elem.textContent = this.newValues[attr];
			else if (attr == "#href") svgedit.utilities.setHref(this.elem, this.newValues[attr]);
			else this.elem.setAttribute(attr, this.newValues[attr]);
		}
		else {
			if (attr == "#text") {
				this.elem.textContent = "";
			}
			else {
				this.elem.setAttribute(attr, "");
				this.elem.removeAttribute(attr);
			}
		}

		if (attr == "transform") { bChangedTransform = true; }
	}

	// relocate rotational transform, if necessary
	if (!bChangedTransform) {
		var angle = svgedit.utilities.getRotationAngle(this.elem);
		if (angle) {
			var bbox = elem.getBBox();
			var cx = bbox.x + bbox.width/2,
				cy = bbox.y + bbox.height/2;
			var rotate = ["rotate(", angle, " ", cx, ",", cy, ")"].join('');
			if (rotate != elem.getAttribute("transform")) {
				elem.setAttribute("transform", rotate);
			}
		}
	}

	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
	}

	return true;
};

// Function: svgedit.history.ChangeElementCommand.unapply
// Reverses the stored change action
svgedit.history.ChangeElementCommand.prototype.unapply = function(handler) {
	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY, this);
	}

	var bChangedTransform = false;
	for (var attr in this.oldValues ) {
		if (this.oldValues[attr]) {
			if (attr == "#text") this.elem.textContent = this.oldValues[attr];
			else if (attr == "#href") svgedit.utilities.setHref(this.elem, this.oldValues[attr]);
			else this.elem.setAttribute(attr, this.oldValues[attr]);
		}
		else {
			if (attr == "#text") {
				this.elem.textContent = "";
			}
			else this.elem.removeAttribute(attr);
		}
		if (attr == "transform") { bChangedTransform = true; }
	}
	// relocate rotational transform, if necessary
	if (!bChangedTransform) {
		var angle = svgedit.utilities.getRotationAngle(this.elem);
		if (angle) {
			var bbox = elem.getBBox();
			var cx = bbox.x + bbox.width/2,
				cy = bbox.y + bbox.height/2;
			var rotate = ["rotate(", angle, " ", cx, ",", cy, ")"].join('');
			if (rotate != elem.getAttribute("transform")) {
				elem.setAttribute("transform", rotate);
			}
		}
	}

	// Remove transformlist to prevent confusion that causes bugs like 575.
	svgedit.transformlist.removeElementFromListMap(this.elem);

	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY, this);
	}

	return true;
};

// Function: ChangeElementCommand.elements
// Returns array with element associated with this command
svgedit.history.ChangeElementCommand.prototype.elements = function() {
	return [this.elem];
};


// TODO: create a 'typing' command object that tracks changes in text
// if a new Typing command is created and the top command on the stack is also a Typing
// and they both affect the same element, then collapse the two commands into one


// Class: svgedit.history.BatchCommand
// implements svgedit.history.HistoryCommand
// History command that can contain/execute multiple other commands
//
// Parameters:
// text - An optional string visible to user related to this change
svgedit.history.BatchCommand = function(text) {
	this.text = text || "Batch Command";
	this.stack = [];
};
svgedit.history.BatchCommand.type = function() { return 'svgedit.history.BatchCommand'; };
svgedit.history.BatchCommand.prototype.type = svgedit.history.BatchCommand.type;

// Function: svgedit.history.BatchCommand.getText
svgedit.history.BatchCommand.prototype.getText = function() {
	return this.text;
};

// Function: svgedit.history.BatchCommand.apply
// Runs "apply" on all subcommands
svgedit.history.BatchCommand.prototype.apply = function(handler) {
	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY, this);
	}

	var len = this.stack.length;
	for (var i = 0; i < len; ++i) {
		this.stack[i].apply(handler);
	}

	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
	}
};

// Function: svgedit.history.BatchCommand.unapply
// Runs "unapply" on all subcommands
svgedit.history.BatchCommand.prototype.unapply = function(handler) {
	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY, this);
	}

	for (var i = this.stack.length-1; i >= 0; i--) {
		this.stack[i].unapply(handler);
	}

	if (handler) {
		handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY, this);
	}
};

// Function: svgedit.history.BatchCommand.elements
// Iterate through all our subcommands and returns all the elements we are changing
svgedit.history.BatchCommand.prototype.elements = function() {
	var elems = [];
	var cmd = this.stack.length;
	while (cmd--) {
		var thisElems = this.stack[cmd].elements();
		var elem = thisElems.length;
		while (elem--) {
			if (elems.indexOf(thisElems[elem]) == -1) elems.push(thisElems[elem]);
		}
	}
	return elems;
};

// Function: svgedit.history.BatchCommand.addSubCommand
// Adds a given command to the history stack
//
// Parameters:
// cmd - The undo command object to add
svgedit.history.BatchCommand.prototype.addSubCommand = function(cmd) {
	this.stack.push(cmd);
};

// Function: svgedit.history.BatchCommand.isEmpty
// Returns a boolean indicating whether or not the batch command is empty
svgedit.history.BatchCommand.prototype.isEmpty = function() {
	return this.stack.length === 0;
};


// Class: svgedit.history.UndoManager
// Parameters:
// historyEventHandler - an object that conforms to the HistoryEventHandler interface
// (see above)
svgedit.history.UndoManager = function(historyEventHandler) {
	this.handler_ = historyEventHandler || null;
	this.undoStackPointer = 0;
	this.undoStack = [];

	// this is the stack that stores the original values, the elements and
	// the attribute name for begin/finish
	this.undoChangeStackPointer = -1;
	this.undoableChangeStack = [];
};

// Function: svgedit.history.UndoManager.resetUndoStack
// Resets the undo stack, effectively clearing the undo/redo history
svgedit.history.UndoManager.prototype.resetUndoStack = function() {
	this.undoStack = [];
	this.undoStackPointer = 0;
};

// Function: svgedit.history.UndoManager.getUndoStackSize
// Returns:
// Integer with the current size of the undo history stack
svgedit.history.UndoManager.prototype.getUndoStackSize = function() {
	return this.undoStackPointer;
};

// Function: svgedit.history.UndoManager.getRedoStackSize
// Returns:
// Integer with the current size of the redo history stack
svgedit.history.UndoManager.prototype.getRedoStackSize = function() {
	return this.undoStack.length - this.undoStackPointer;
};

// Function: svgedit.history.UndoManager.getNextUndoCommandText
// Returns:
// String associated with the next undo command
svgedit.history.UndoManager.prototype.getNextUndoCommandText = function() {
	return this.undoStackPointer > 0 ? this.undoStack[this.undoStackPointer-1].getText() : "";
};

// Function: svgedit.history.UndoManager.getNextRedoCommandText
// Returns:
// String associated with the next redo command
svgedit.history.UndoManager.prototype.getNextRedoCommandText = function() {
	return this.undoStackPointer < this.undoStack.length ? this.undoStack[this.undoStackPointer].getText() : "";
};

// Function: svgedit.history.UndoManager.undo
// Performs an undo step
svgedit.history.UndoManager.prototype.undo = function() {
	if (this.undoStackPointer > 0) {
		var cmd = this.undoStack[--this.undoStackPointer];
		cmd.unapply(this.handler_);
	}
};

// Function: svgedit.history.UndoManager.redo
// Performs a redo step
svgedit.history.UndoManager.prototype.redo = function() {
	if (this.undoStackPointer < this.undoStack.length && this.undoStack.length > 0) {
		var cmd = this.undoStack[this.undoStackPointer++];
		cmd.apply(this.handler_);
	}
};

// Function: svgedit.history.UndoManager.addCommandToHistory
// Adds a command object to the undo history stack
//
// Parameters:
// cmd - The command object to add
svgedit.history.UndoManager.prototype.addCommandToHistory = function(cmd) {
	// FIXME: we MUST compress consecutive text changes to the same element
	// (right now each keystroke is saved as a separate command that includes the
	// entire text contents of the text element)
	// TODO: consider limiting the history that we store here (need to do some slicing)

	// if our stack pointer is not at the end, then we have to remove
	// all commands after the pointer and insert the new command
	if (this.undoStackPointer < this.undoStack.length && this.undoStack.length > 0) {
		this.undoStack = this.undoStack.splice(0, this.undoStackPointer);
	}
	this.undoStack.push(cmd);
	this.undoStackPointer = this.undoStack.length;
};


// Function: svgedit.history.UndoManager.beginUndoableChange
// This function tells the canvas to remember the old values of the 
// attrName attribute for each element sent in.  The elements and values 
// are stored on a stack, so the next call to finishUndoableChange() will 
// pop the elements and old values off the stack, gets the current values
// from the DOM and uses all of these to construct the undo-able command.
//
// Parameters:
// attrName - The name of the attribute being changed
// elems - Array of DOM elements being changed
svgedit.history.UndoManager.prototype.beginUndoableChange = function(attrName, elems) {
	var p = ++this.undoChangeStackPointer;
	var i = elems.length;
	var oldValues = new Array(i), elements = new Array(i);
	while (i--) {
		var elem = elems[i];
		if (elem == null) continue;
		elements[i] = elem;
		oldValues[i] = elem.getAttribute(attrName);
	}
	this.undoableChangeStack[p] = {
		'attrName': attrName,
		'oldValues': oldValues,
		'elements': elements
	};
};

// Function: svgedit.history.UndoManager.finishUndoableChange
// This function returns a BatchCommand object which summarizes the
// change since beginUndoableChange was called.  The command can then
// be added to the command history
//
// Returns:
// Batch command object with resulting changes
svgedit.history.UndoManager.prototype.finishUndoableChange = function() {
	var p = this.undoChangeStackPointer--;
	var changeset = this.undoableChangeStack[p];
	var i = changeset.elements.length;
	var attrName = changeset.attrName;
	var batchCmd = new svgedit.history.BatchCommand("Change " + attrName);
	while (i--) {
		var elem = changeset.elements[i];
		if (elem == null) continue;
		var changes = {};
		changes[attrName] = changeset.oldValues[i];
		if (changes[attrName] != elem.getAttribute(attrName)) {
			batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(elem, changes, attrName));
		}
	}
	this.undoableChangeStack[p] = null;
	return batchCmd;
};

})();


/**
 * Coords.
 *
 * Licensed under the MIT License
 *
 */

// Dependencies:
// 1) jquery.js
// 2) math.js
// 3) browser.js
// 4) svgutils.js
// 5) units.js
// 6) svgtransformlist.js

var svgedit = svgedit || {};

(function() {

if (!svgedit.coords) {
  svgedit.coords = {};
}

// this is how we map paths to our preferred relative segment types
var pathMap = [0, 'z', 'M', 'm', 'L', 'l', 'C', 'c', 'Q', 'q', 'A', 'a', 
    'H', 'h', 'V', 'v', 'S', 's', 'T', 't'];
                    
var editorContext_ = null;

svgedit.coords.init = function(editorContext) {
  editorContext_ = editorContext;
};

// Function: remapElement
// Applies coordinate changes to an element based on the given matrix
//
// Parameters:
// selected - DOM element to be changed
// changes - Object with changes to be remapped
// m - Matrix object to use for remapping coordinates
svgedit.coords.remapElement = function(selected, changes, m) {
  var remap = function(x, y) { return svgedit.math.transformPoint(x, y, m); },
    scalew = function(w) { return m.a * w; },
    scaleh = function(h) { return m.d * h; },
    doSnapping = editorContext_.getGridSnapping() && selected.parentNode.parentNode.localName === 'svg',
    finishUp = function() {
      if (doSnapping) for (var o in changes) changes[o] = svgedit.utilities.snapToGrid(changes[o]);
      svgedit.utilities.assignAttributes(selected, changes, 1000, true);
    },
    box = svgedit.utilities.getBBox(selected);
    
  for (var i = 0; i < 2; i++) {
    var type = i === 0 ? 'fill' : 'stroke';
    var attrVal = selected.getAttribute(type);
    if (attrVal && attrVal.indexOf('url(') === 0) {
      if (m.a < 0 || m.d < 0) {
        var grad = svgedit.utilities.getRefElem(attrVal);
        var newgrad = grad.cloneNode(true);
        if (m.a < 0) {
          // flip x
          var x1 = newgrad.getAttribute('x1');
          var x2 = newgrad.getAttribute('x2');
          newgrad.setAttribute('x1', -(x1 - 1));
          newgrad.setAttribute('x2', -(x2 - 1));
        } 

        if (m.d < 0) {
          // flip y
          var y1 = newgrad.getAttribute('y1');
          var y2 = newgrad.getAttribute('y2');
          newgrad.setAttribute('y1', -(y1 - 1));
          newgrad.setAttribute('y2', -(y2 - 1));
        }
        newgrad.id = editorContext_.getDrawing().getNextId();
        svgedit.utilities.findDefs().appendChild(newgrad);
        selected.setAttribute(type, 'url(#' + newgrad.id + ')');
      }

      // Not really working :(
//      if (selected.tagName === 'path') {
//        reorientGrads(selected, m);
//      }
    }
  }

  var elName = selected.tagName;
  if (elName === 'g' || elName === 'text' || elName == 'tspan' || elName === 'use') {
    // if it was a translate, then just update x,y
    if (m.a == 1 && m.b == 0 && m.c == 0 && m.d == 1 && (m.e != 0 || m.f != 0) ) {
      // [T][M] = [M][T']
      // therefore [T'] = [M_inv][T][M]
      var existing = svgedit.math.transformListToTransform(selected).matrix,
          t_new = svgedit.math.matrixMultiply(existing.inverse(), m, existing);
      changes.x = parseFloat(changes.x) + t_new.e;
      changes.y = parseFloat(changes.y) + t_new.f;
    } else {
      // we just absorb all matrices into the element and don't do any remapping
      var chlist = svgedit.transformlist.getTransformList(selected);
      var mt = svgroot.createSVGTransform();
      mt.setMatrix(svgedit.math.matrixMultiply(svgedit.math.transformListToTransform(chlist).matrix, m));
      chlist.clear();
      chlist.appendItem(mt);
    }
  }
    
  // now we have a set of changes and an applied reduced transform list
  // we apply the changes directly to the DOM
  switch (elName) {
    case 'foreignObject':
    case 'rect':
    case 'image':
      // Allow images to be inverted (give them matrix when flipped)
      if (elName === 'image' && (m.a < 0 || m.d < 0)) {
        // Convert to matrix
        var chlist = svgedit.transformlist.getTransformList(selected);
        var mt = svgroot.createSVGTransform();
        mt.setMatrix(svgedit.math.matrixMultiply(svgedit.math.transformListToTransform(chlist).matrix, m));
        chlist.clear();
        chlist.appendItem(mt);
      } else {
        var pt1 = remap(changes.x, changes.y);
        changes.width = scalew(changes.width);
        changes.height = scaleh(changes.height);
        changes.x = pt1.x + Math.min(0, changes.width);
        changes.y = pt1.y + Math.min(0, changes.height);
        changes.width = Math.abs(changes.width);
        changes.height = Math.abs(changes.height);
      }
      finishUp();
      break;
    case 'ellipse':
      var c = remap(changes.cx, changes.cy);
      changes.cx = c.x;
      changes.cy = c.y;
      changes.rx = scalew(changes.rx);
      changes.ry = scaleh(changes.ry);
      changes.rx = Math.abs(changes.rx);
      changes.ry = Math.abs(changes.ry);
      finishUp();
      break;
    case 'circle':
      var c = remap(changes.cx,changes.cy);
      changes.cx = c.x;
      changes.cy = c.y;
      // take the minimum of the new selected box's dimensions for the new circle radius
      var tbox = svgedit.math.transformBox(box.x, box.y, box.width, box.height, m);
      var w = tbox.tr.x - tbox.tl.x, h = tbox.bl.y - tbox.tl.y;
      changes.r = Math.min(w/2, h/2);

      if (changes.r) changes.r = Math.abs(changes.r);
      finishUp();
      break;
    case 'line':
      var pt1 = remap(changes.x1, changes.y1), pt2 = remap(changes.x2, changes.y2);
      changes.x1 = pt1.x;
      changes.y1 = pt1.y;
      changes.x2 = pt2.x;
      changes.y2 = pt2.y;
      // deliberately fall through here
    case 'text':
    case 'tspan':
    case 'use':
      finishUp();
      break;
    case 'g':
      var gsvg = $(selected).data('gsvg');
      if (gsvg) {
          svgedit.utilities.assignAttributes(gsvg, changes, 1000, true);
      }
      break;
    case 'polyline':
    case 'polygon':
      var len = changes.points.length;
      for (var i = 0; i < len; ++i) {
          var pt = changes.points[i];
          pt = remap(pt.x, pt.y);
          changes.points[i].x = pt.x;
          changes.points[i].y = pt.y;
      }

      var len = changes.points.length;
      var pstr = '';
      for (var i = 0; i < len; ++i) {
          var pt = changes.points[i];
          pstr += pt.x + ',' + pt.y + ' ';
      }
      selected.setAttribute('points', pstr);
      break;
case 'path':

    var segList = selected.pathSegList;
    var len = segList.numberOfItems;
    changes.d = new Array(len);
    for (var i = 0; i < len; ++i) {
        var seg = segList.getItem(i);
        changes.d[i] = {
            type: seg.pathSegType,
            x: seg.x,
            y: seg.y,
            x1: seg.x1,
            y1: seg.y1,
            x2: seg.x2,
            y2: seg.y2,
            r1: seg.r1,
            r2: seg.r2,
            angle: seg.angle,
            largeArcFlag: seg.largeArcFlag,
            sweepFlag: seg.sweepFlag
        };
    }
    
    var len = changes.d.length,
        firstseg = changes.d[0],
        currentpt = remap(firstseg.x, firstseg.y);
    changes.d[0].x = currentpt.x;
    changes.d[0].y = currentpt.y;
    for (var i = 1; i < len; ++i) {
        var seg = changes.d[i];
        var type = seg.type;
        // if absolute or first segment, we want to remap x, y, x1, y1, x2, y2
        // if relative, we want to scalew, scaleh
        if (type % 2 == 0) { // absolute
            var thisx = (seg.x != undefined) ? seg.x : currentpt.x, // for V commands
                thisy = (seg.y != undefined) ? seg.y : currentpt.y, // for H commands
                pt = remap(thisx,thisy),
                pt1 = remap(seg.x1, seg.y1),
                pt2 = remap(seg.x2, seg.y2);
            seg.x = pt.x;
            seg.y = pt.y;
            seg.x1 = pt1.x;
            seg.y1 = pt1.y;
            seg.x2 = pt2.x;
            seg.y2 = pt2.y;
            seg.r1 = scalew(seg.r1),
            seg.r2 = scaleh(seg.r2);
        }
        else { // relative
            seg.x = scalew(seg.x);
            seg.y = scaleh(seg.y);
            seg.x1 = scalew(seg.x1);
            seg.y1 = scaleh(seg.y1);
            seg.x2 = scalew(seg.x2);
            seg.y2 = scaleh(seg.y2);
            seg.r1 = scalew(seg.r1),
            seg.r2 = scaleh(seg.r2);
        }
    } // for each segment

    var dstr = '';
    var len = changes.d.length;
    for (var i = 0; i < len; ++i) {
        var seg = changes.d[i];
        var type = seg.type;
        dstr += pathMap[type];
        switch (type) {
            case 13: // relative horizontal line (h)
            case 12: // absolute horizontal line (H)
                dstr += seg.x + ' ';
                break;
            case 15: // relative vertical line (v)
            case 14: // absolute vertical line (V)
                dstr += seg.y + ' ';
                break;
            case 3: // relative move (m)
            case 5: // relative line (l)
            case 19: // relative smooth quad (t)
            case 2: // absolute move (M)
            case 4: // absolute line (L)
            case 18: // absolute smooth quad (T)
                dstr += seg.x + ',' + seg.y + ' ';
                break;
            case 7: // relative cubic (c)
            case 6: // absolute cubic (C)
                dstr += seg.x1 + ',' + seg.y1 + ' ' + seg.x2 + ',' + seg.y2 + ' ' +
                     seg.x + ',' + seg.y + ' ';
                break;
            case 9: // relative quad (q) 
            case 8: // absolute quad (Q)
                dstr += seg.x1 + ',' + seg.y1 + ' ' + seg.x + ',' + seg.y + ' ';
                break;
            case 11: // relative elliptical arc (a)
            case 10: // absolute elliptical arc (A)
                dstr += seg.r1 + ',' + seg.r2 + ' ' + seg.angle + ' ' + (+seg.largeArcFlag) +
                    ' ' + (+seg.sweepFlag) + ' ' + seg.x + ',' + seg.y + ' ';
                break;
            case 17: // relative smooth cubic (s)
            case 16: // absolute smooth cubic (S)
                dstr += seg.x2 + ',' + seg.y2 + ' ' + seg.x + ',' + seg.y + ' ';
                break;
        }
    }

    selected.setAttribute('d', dstr);
    break;
    }
};

})();

/**
 * Recalculate.
 *
 * Licensed under the MIT License
 *
 */

// Dependencies:
// 1) jquery
// 2) jquery-svg.js
// 3) svgedit.js
// 4) browser.js
// 5) math.js
// 6) history.js
// 7) units.js
// 8) svgtransformlist.js
// 9) svgutils.js
// 10) coords.js

var svgedit = svgedit || {};

(function() {

if (!svgedit.recalculate) {
  svgedit.recalculate = {};
}

var NS = svgedit.NS;
var context_;

// Function: svgedit.recalculate.init
svgedit.recalculate.init = function(editorContext) {
  context_ = editorContext;
};


// Function: svgedit.recalculate.updateClipPath
// Updates a <clipPath>s values based on the given translation of an element
//
// Parameters:
// attr - The clip-path attribute value with the clipPath's ID
// tx - The translation's x value
// ty - The translation's y value
svgedit.recalculate.updateClipPath = function(attr, tx, ty) {
  var path = getRefElem(attr).firstChild;
  var cp_xform = svgedit.transformlist.getTransformList(path);
  var newxlate = context_.getSVGRoot().createSVGTransform();
  newxlate.setTranslate(tx, ty);

  cp_xform.appendItem(newxlate);

  // Update clipPath's dimensions
  svgedit.recalculate.recalculateDimensions(path);
};


// Function: svgedit.recalculate.recalculateDimensions
// Decides the course of action based on the element's transform list
//
// Parameters:
// selected - The DOM element to recalculate
//
// Returns: 
// Undo command object with the resulting change
svgedit.recalculate.recalculateDimensions = function(selected) {
  if (selected == null) return null;

  // Firefox Issue - 1081
  if (selected.nodeName == "svg" && navigator.userAgent.indexOf("Firefox/20") >= 0) {
    return null;
  }

  var svgroot = context_.getSVGRoot();
  var tlist = svgedit.transformlist.getTransformList(selected);

  // remove any unnecessary transforms
  if (tlist && tlist.numberOfItems > 0) {
    var k = tlist.numberOfItems;
    while (k--) {
      var xform = tlist.getItem(k);
      if (xform.type === 0) {
        tlist.removeItem(k);
      }
      // remove identity matrices
      else if (xform.type === 1) {
        if (svgedit.math.isIdentity(xform.matrix)) {
          tlist.removeItem(k);
        }
      }
      // remove zero-degree rotations
      else if (xform.type === 4) {
        if (xform.angle === 0) {
          tlist.removeItem(k);
        }
      }
    }
    // End here if all it has is a rotation
    if (tlist.numberOfItems === 1 &&
        svgedit.utilities.getRotationAngle(selected)) return null;
  }

  // if this element had no transforms, we are done
  if (!tlist || tlist.numberOfItems == 0) {
    // Chrome has a bug that requires clearing the attribute first.
    selected.setAttribute('transform', '');
    selected.removeAttribute('transform');
    return null;
  }

  // TODO: Make this work for more than 2
  if (tlist) {
    var k = tlist.numberOfItems;
    var mxs = [];
    while (k--) {
      var xform = tlist.getItem(k);
      if (xform.type === 1) {
        mxs.push([xform.matrix, k]);
      } else if (mxs.length) {
        mxs = [];
      }
    }
    if (mxs.length === 2) {
      var m_new = svgroot.createSVGTransformFromMatrix(svgedit.math.matrixMultiply(mxs[1][0], mxs[0][0]));
      tlist.removeItem(mxs[0][1]);
      tlist.removeItem(mxs[1][1]);
      tlist.insertItemBefore(m_new, mxs[1][1]);
    }

    // combine matrix + translate
    k = tlist.numberOfItems;
    if (k >= 2 && tlist.getItem(k-2).type === 1 && tlist.getItem(k-1).type === 2) {
      var mt = svgroot.createSVGTransform();

      var m = svgedit.math.matrixMultiply(
          tlist.getItem(k-2).matrix, 
          tlist.getItem(k-1).matrix);   
      mt.setMatrix(m);
      tlist.removeItem(k-2);
      tlist.removeItem(k-2);
      tlist.appendItem(mt);
    }
  }

  // If it still has a single [M] or [R][M], return null too (prevents BatchCommand from being returned).
  switch ( selected.tagName ) {
    // Ignore these elements, as they can absorb the [M]
    case 'line':
    case 'polyline':
    case 'polygon':
    case 'path':
      break;
    default:
      if ((tlist.numberOfItems === 1 && tlist.getItem(0).type === 1) ||
          (tlist.numberOfItems === 2 && tlist.getItem(0).type === 1 && tlist.getItem(0).type === 4)) {
        return null;
      }
  }

  // Grouped SVG element 
  var gsvg = $(selected).data('gsvg');

  // we know we have some transforms, so set up return variable   
  var batchCmd = new svgedit.history.BatchCommand('Transform');

  // store initial values that will be affected by reducing the transform list
  var changes = {}, initial = null, attrs = [];
  switch (selected.tagName) {
    case 'line':
      attrs = ['x1', 'y1', 'x2', 'y2'];
      break;
    case 'circle':
      attrs = ['cx', 'cy', 'r'];
      break;
    case 'ellipse':
      attrs = ['cx', 'cy', 'rx', 'ry'];
      break;
    case 'foreignObject':
    case 'rect':
    case 'image':
      attrs = ['width', 'height', 'x', 'y'];
      break;
    case 'use':
    case 'text':
    case 'tspan':
      attrs = ['x', 'y'];
      break;
    case 'polygon':
    case 'polyline':
      initial = {};
      initial['points'] = selected.getAttribute('points');
      var list = selected.points;
      var len = list.numberOfItems;
      changes['points'] = new Array(len);
      for (var i = 0; i < len; ++i) {
        var pt = list.getItem(i);
        changes['points'][i] = {x:pt.x, y:pt.y};
      }
      break;
    case 'path':
      initial = {};
      initial['d'] = selected.getAttribute('d');
      changes['d'] = selected.getAttribute('d');
      break;
    } // switch on element type to get initial values

    if (attrs.length) {
      changes = $(selected).attr(attrs);
      $.each(changes, function(attr, val) {
        changes[attr] = svgedit.units.convertToNum(attr, val);
      });
    } else if (gsvg) {
      // GSVG exception
      changes = {
        x: $(gsvg).attr('x') || 0,
        y: $(gsvg).attr('y') || 0
      };
    }

  // if we haven't created an initial array in polygon/polyline/path, then 
  // make a copy of initial values and include the transform
  if (initial == null) {
    initial = $.extend(true, {}, changes);
    $.each(initial, function(attr, val) {
      initial[attr] = svgedit.units.convertToNum(attr, val);
    });
  }
  // save the start transform value too
  initial.transform = context_.getStartTransform() || '';

  // if it's a regular group, we have special processing to flatten transforms
  if ((selected.tagName == 'g' && !gsvg) || selected.tagName == 'a') {
    var box = svgedit.utilities.getBBox(selected),
      oldcenter = {x: box.x+box.width/2, y: box.y+box.height/2},
      newcenter = svgedit.math.transformPoint(box.x+box.width/2,
        box.y+box.height/2,
        svgedit.math.transformListToTransform(tlist).matrix),
      m = svgroot.createSVGMatrix();

    // temporarily strip off the rotate and save the old center
    var gangle = svgedit.utilities.getRotationAngle(selected);
    if (gangle) {
      var a = gangle * Math.PI / 180;
      if ( Math.abs(a) > (1.0e-10) ) {
        var s = Math.sin(a)/(1 - Math.cos(a));
      } else {
        // FIXME: This blows up if the angle is exactly 0!
        var s = 2/a;
      }
      for (var i = 0; i < tlist.numberOfItems; ++i) {
        var xform = tlist.getItem(i);
        if (xform.type == 4) {
          // extract old center through mystical arts
          var rm = xform.matrix;
          oldcenter.y = (s*rm.e + rm.f)/2;
          oldcenter.x = (rm.e - s*rm.f)/2;
          tlist.removeItem(i);
          break;
        }
      }
    }
    var tx = 0, ty = 0,
      operation = 0,
      N = tlist.numberOfItems;

    if (N) {
      var first_m = tlist.getItem(0).matrix;
    }

    // first, if it was a scale then the second-last transform will be it
    if (N >= 3 && tlist.getItem(N-2).type == 3 && 
      tlist.getItem(N-3).type == 2 && tlist.getItem(N-1).type == 2) 
    {
      operation = 3; // scale
    
      // if the children are unrotated, pass the scale down directly
      // otherwise pass the equivalent matrix() down directly
      var tm = tlist.getItem(N-3).matrix,
        sm = tlist.getItem(N-2).matrix,
        tmn = tlist.getItem(N-1).matrix;
    
      var children = selected.childNodes;
      var c = children.length;
      while (c--) {
        var child = children.item(c);
        tx = 0;
        ty = 0;
        if (child.nodeType == 1) {
          var childTlist = svgedit.transformlist.getTransformList(child);

          // some children might not have a transform (<metadata>, <defs>, etc)
          if (!childTlist) continue;

          var m = svgedit.math.transformListToTransform(childTlist).matrix;

          // Convert a matrix to a scale if applicable
//          if (svgedit.math.hasMatrixTransform(childTlist) && childTlist.numberOfItems == 1) {
//            if (m.b==0 && m.c==0 && m.e==0 && m.f==0) {
//              childTlist.removeItem(0);
//              var translateOrigin = svgroot.createSVGTransform(),
//                scale = svgroot.createSVGTransform(),
//                translateBack = svgroot.createSVGTransform();
//              translateOrigin.setTranslate(0, 0);
//              scale.setScale(m.a, m.d);
//              translateBack.setTranslate(0, 0);
//              childTlist.appendItem(translateBack);
//              childTlist.appendItem(scale);
//              childTlist.appendItem(translateOrigin);
//            }
//          }
        
          var angle = svgedit.utilities.getRotationAngle(child);
          var oldStartTransform = context_.getStartTransform();
          var childxforms = [];
          context_.setStartTransform(child.getAttribute('transform'));
          if (angle || svgedit.math.hasMatrixTransform(childTlist)) {
            var e2t = svgroot.createSVGTransform();
            e2t.setMatrix(svgedit.math.matrixMultiply(tm, sm, tmn, m));
            childTlist.clear();
            childTlist.appendItem(e2t);
            childxforms.push(e2t);
          }
          // if not rotated or skewed, push the [T][S][-T] down to the child
          else {
            // update the transform list with translate,scale,translate
            
            // slide the [T][S][-T] from the front to the back
            // [T][S][-T][M] = [M][T2][S2][-T2]
            
            // (only bringing [-T] to the right of [M])
            // [T][S][-T][M] = [T][S][M][-T2]
            // [-T2] = [M_inv][-T][M]
            var t2n = svgedit.math.matrixMultiply(m.inverse(), tmn, m);
            // [T2] is always negative translation of [-T2]
            var t2 = svgroot.createSVGMatrix();
            t2.e = -t2n.e;
            t2.f = -t2n.f;
            
            // [T][S][-T][M] = [M][T2][S2][-T2]
            // [S2] = [T2_inv][M_inv][T][S][-T][M][-T2_inv]
            var s2 = svgedit.math.matrixMultiply(t2.inverse(), m.inverse(), tm, sm, tmn, m, t2n.inverse());

            var translateOrigin = svgroot.createSVGTransform(),
              scale = svgroot.createSVGTransform(),
              translateBack = svgroot.createSVGTransform();
            translateOrigin.setTranslate(t2n.e, t2n.f);
            scale.setScale(s2.a, s2.d);
            translateBack.setTranslate(t2.e, t2.f);
            childTlist.appendItem(translateBack);
            childTlist.appendItem(scale);
            childTlist.appendItem(translateOrigin);
            childxforms.push(translateBack);
            childxforms.push(scale);
            childxforms.push(translateOrigin);
//            logMatrix(translateBack.matrix);
//            logMatrix(scale.matrix);
          } // not rotated
          batchCmd.addSubCommand( svgedit.recalculate.recalculateDimensions(child) );
          // TODO: If any <use> have this group as a parent and are 
          // referencing this child, then we need to impose a reverse 
          // scale on it so that when it won't get double-translated
//            var uses = selected.getElementsByTagNameNS(NS.SVG, 'use');
//            var href = '#' + child.id;
//            var u = uses.length;
//            while (u--) {
//              var useElem = uses.item(u);
//              if (href == svgedit.utilities.getHref(useElem)) {
//                var usexlate = svgroot.createSVGTransform();
//                usexlate.setTranslate(-tx,-ty);
//                svgedit.transformlist.getTransformList(useElem).insertItemBefore(usexlate,0);
//                batchCmd.addSubCommand( svgedit.recalculate.recalculateDimensions(useElem) );
//              }
//            }
          context_.setStartTransform(oldStartTransform);
        } // element
      } // for each child
      // Remove these transforms from group
      tlist.removeItem(N-1);
      tlist.removeItem(N-2);
      tlist.removeItem(N-3);
    } else if (N >= 3 && tlist.getItem(N-1).type == 1) {
      operation = 3; // scale
      m = svgedit.math.transformListToTransform(tlist).matrix;
      var e2t = svgroot.createSVGTransform();
      e2t.setMatrix(m);
      tlist.clear();
      tlist.appendItem(e2t);
    }     
    // next, check if the first transform was a translate 
    // if we had [ T1 ] [ M ] we want to transform this into [ M ] [ T2 ]
    // therefore [ T2 ] = [ M_inv ] [ T1 ] [ M ]
    else if ( (N == 1 || (N > 1 && tlist.getItem(1).type != 3)) && 
      tlist.getItem(0).type == 2) 
    {
      operation = 2; // translate
      var T_M = svgedit.math.transformListToTransform(tlist).matrix;
      tlist.removeItem(0);
      var M_inv = svgedit.math.transformListToTransform(tlist).matrix.inverse();
      var M2 = svgedit.math.matrixMultiply( M_inv, T_M );
      
      tx = M2.e;
      ty = M2.f;

      if (tx != 0 || ty != 0) {
        // we pass the translates down to the individual children
        var children = selected.childNodes;
        var c = children.length;
        
        var clipPaths_done = [];
        
        while (c--) {
          var child = children.item(c);
          if (child.nodeType == 1) {
          
            // Check if child has clip-path
            if (child.getAttribute('clip-path')) {
              // tx, ty
              var attr = child.getAttribute('clip-path');
              if (clipPaths_done.indexOf(attr) === -1) {
                svgedit.recalculate.updateClipPath(attr, tx, ty);
                clipPaths_done.push(attr);
              }             
            }

            var oldStartTransform = context_.getStartTransform();
            context_.setStartTransform(child.getAttribute('transform'));
            
            var childTlist = svgedit.transformlist.getTransformList(child);
            // some children might not have a transform (<metadata>, <defs>, etc)
            if (childTlist) {
              var newxlate = svgroot.createSVGTransform();
              newxlate.setTranslate(tx, ty);
              if (childTlist.numberOfItems) {
                childTlist.insertItemBefore(newxlate, 0);
              } else {
                childTlist.appendItem(newxlate);
              }
              batchCmd.addSubCommand(svgedit.recalculate.recalculateDimensions(child));
              // If any <use> have this group as a parent and are 
              // referencing this child, then impose a reverse translate on it
              // so that when it won't get double-translated
              var uses = selected.getElementsByTagNameNS(NS.SVG, 'use');
              var href = '#' + child.id;
              var u = uses.length;
              while (u--) {
                var useElem = uses.item(u);
                if (href == svgedit.utilities.getHref(useElem)) {
                  var usexlate = svgroot.createSVGTransform();
                  usexlate.setTranslate(-tx,-ty);
                  svgedit.transformlist.getTransformList(useElem).insertItemBefore(usexlate, 0);
                  batchCmd.addSubCommand( svgedit.recalculate.recalculateDimensions(useElem) );
                }
              }
              context_.setStartTransform(oldStartTransform);
            }
          }
        }
        
        clipPaths_done = [];
        context_.setStartTransform(oldStartTransform);
      }
    }
    // else, a matrix imposition from a parent group
    // keep pushing it down to the children
    else if (N == 1 && tlist.getItem(0).type == 1 && !gangle) {
      operation = 1;
      var m = tlist.getItem(0).matrix,
        children = selected.childNodes,
        c = children.length;
      while (c--) {
        var child = children.item(c);
        if (child.nodeType == 1) {
          var oldStartTransform = context_.getStartTransform();
          context_.setStartTransform(child.getAttribute('transform'));
          var childTlist = svgedit.transformlist.getTransformList(child);
          
          if (!childTlist) continue;
          
          var em = svgedit.math.matrixMultiply(m, svgedit.math.transformListToTransform(childTlist).matrix);
          var e2m = svgroot.createSVGTransform();
          e2m.setMatrix(em);
          childTlist.clear();
          childTlist.appendItem(e2m, 0);
          
          batchCmd.addSubCommand( svgedit.recalculate.recalculateDimensions(child) );
          context_.setStartTransform(oldStartTransform);
          
          // Convert stroke
          // TODO: Find out if this should actually happen somewhere else
          var sw = child.getAttribute('stroke-width');
          if (child.getAttribute('stroke') !== 'none' && !isNaN(sw)) {
            var avg = (Math.abs(em.a) + Math.abs(em.d)) / 2;
            child.setAttribute('stroke-width', sw * avg);
          }

        }
      }
      tlist.clear();
    }
    // else it was just a rotate
    else {
      if (gangle) {
        var newRot = svgroot.createSVGTransform();
        newRot.setRotate(gangle, newcenter.x, newcenter.y);
        if (tlist.numberOfItems) {
          tlist.insertItemBefore(newRot, 0);
        } else {
          tlist.appendItem(newRot);
        }
      }
      if (tlist.numberOfItems == 0) {
        selected.removeAttribute('transform');
      }
      return null;      
    }
    
    // if it was a translate, put back the rotate at the new center
    if (operation == 2) {
      if (gangle) {
        newcenter = {
          x: oldcenter.x + first_m.e,
          y: oldcenter.y + first_m.f
        };
      
        var newRot = svgroot.createSVGTransform();
        newRot.setRotate(gangle, newcenter.x, newcenter.y);
        if (tlist.numberOfItems) {
          tlist.insertItemBefore(newRot, 0);
        } else {
          tlist.appendItem(newRot);
        }
      }
    }
    // if it was a resize
    else if (operation == 3) {
      var m = svgedit.math.transformListToTransform(tlist).matrix;
      var roldt = svgroot.createSVGTransform();
      roldt.setRotate(gangle, oldcenter.x, oldcenter.y);
      var rold = roldt.matrix;
      var rnew = svgroot.createSVGTransform();
      rnew.setRotate(gangle, newcenter.x, newcenter.y);
      var rnew_inv = rnew.matrix.inverse(),
        m_inv = m.inverse(),
        extrat = svgedit.math.matrixMultiply(m_inv, rnew_inv, rold, m);

      tx = extrat.e;
      ty = extrat.f;

      if (tx != 0 || ty != 0) {
        // now push this transform down to the children
        // we pass the translates down to the individual children
        var children = selected.childNodes;
        var c = children.length;
        while (c--) {
          var child = children.item(c);
          if (child.nodeType == 1) {
            var oldStartTransform = context_.getStartTransform();
            context_.setStartTransform(child.getAttribute('transform'));
            var childTlist = svgedit.transformlist.getTransformList(child);
            var newxlate = svgroot.createSVGTransform();
            newxlate.setTranslate(tx, ty);
            if (childTlist.numberOfItems) {
              childTlist.insertItemBefore(newxlate, 0);
            } else {
              childTlist.appendItem(newxlate);
            }

            batchCmd.addSubCommand( svgedit.recalculate.recalculateDimensions(child) );
            context_.setStartTransform(oldStartTransform);
          }
        }
      }
      
      if (gangle) {
        if (tlist.numberOfItems) {
          tlist.insertItemBefore(rnew, 0);
        } else {
          tlist.appendItem(rnew);
        }
      }
    }
  }
  // else, it's a non-group
  else {

    // FIXME: box might be null for some elements (<metadata> etc), need to handle this
    var box = svgedit.utilities.getBBox(selected);

    // Paths (and possbly other shapes) will have no BBox while still in <defs>,
    // but we still may need to recalculate them (see issue 595).
    // TODO: Figure out how to get BBox from these elements in case they
    // have a rotation transform
    
    if (!box && selected.tagName != 'path') return null;
    

    var m = svgroot.createSVGMatrix(),
      // temporarily strip off the rotate and save the old center
      angle = svgedit.utilities.getRotationAngle(selected);
    if (angle) {
      var oldcenter = {x: box.x+box.width/2, y: box.y+box.height/2},
      newcenter = svgedit.math.transformPoint(box.x+box.width/2, box.y+box.height/2,
              svgedit.math.transformListToTransform(tlist).matrix);
    
      var a = angle * Math.PI / 180;
      if ( Math.abs(a) > (1.0e-10) ) {
        var s = Math.sin(a)/(1 - Math.cos(a));
      } else {
        // FIXME: This blows up if the angle is exactly 0!
        var s = 2/a;
      }
      for (var i = 0; i < tlist.numberOfItems; ++i) {
        var xform = tlist.getItem(i);
        if (xform.type == 4) {
          // extract old center through mystical arts
          var rm = xform.matrix;
          oldcenter.y = (s*rm.e + rm.f)/2;
          oldcenter.x = (rm.e - s*rm.f)/2;
          tlist.removeItem(i);
          break;
        }
      }
    }
    
    // 2 = translate, 3 = scale, 4 = rotate, 1 = matrix imposition
    var operation = 0;
    var N = tlist.numberOfItems;
    
    // Check if it has a gradient with userSpaceOnUse, in which case
    // adjust it by recalculating the matrix transform.
    // TODO: Make this work in Webkit using svgedit.transformlist.SVGTransformList
    if (!svgedit.browser.isWebkit()) {
      var fill = selected.getAttribute('fill');
      if (fill && fill.indexOf('url(') === 0) {
        var paint = getRefElem(fill);
        var type = 'pattern';
        if (paint.tagName !== type) type = 'gradient';
        var attrVal = paint.getAttribute(type + 'Units');
        if (attrVal === 'userSpaceOnUse') {
          //Update the userSpaceOnUse element
          m = svgedit.math.transformListToTransform(tlist).matrix;
          var gtlist = svgedit.transformlist.getTransformList(paint);
          var gmatrix = svgedit.math.transformListToTransform(gtlist).matrix;
          m = svgedit.math.matrixMultiply(m, gmatrix);
          var m_str = 'matrix(' + [m.a, m.b, m.c, m.d, m.e, m.f].join(',') + ')';
          paint.setAttribute(type + 'Transform', m_str);
        }
      }
    }

    // first, if it was a scale of a non-skewed element, then the second-last  
    // transform will be the [S]
    // if we had [M][T][S][T] we want to extract the matrix equivalent of
    // [T][S][T] and push it down to the element
    if (N >= 3 && tlist.getItem(N-2).type == 3 && 
      tlist.getItem(N-3).type == 2 && tlist.getItem(N-1).type == 2) 
      
      // Removed this so a <use> with a given [T][S][T] would convert to a matrix. 
      // Is that bad?
      //  && selected.nodeName != 'use'
    {
      operation = 3; // scale
      m = svgedit.math.transformListToTransform(tlist, N-3, N-1).matrix;
      tlist.removeItem(N-1);
      tlist.removeItem(N-2);
      tlist.removeItem(N-3);
    } // if we had [T][S][-T][M], then this was a skewed element being resized
    // Thus, we simply combine it all into one matrix
    else if (N == 4 && tlist.getItem(N-1).type == 1) {
      operation = 3; // scale
      m = svgedit.math.transformListToTransform(tlist).matrix;
      var e2t = svgroot.createSVGTransform();
      e2t.setMatrix(m);
      tlist.clear();
      tlist.appendItem(e2t);
      // reset the matrix so that the element is not re-mapped
      m = svgroot.createSVGMatrix();
    } // if we had [R][T][S][-T][M], then this was a rotated matrix-element  
    // if we had [T1][M] we want to transform this into [M][T2]
    // therefore [ T2 ] = [ M_inv ] [ T1 ] [ M ] and we can push [T2] 
    // down to the element
    else if ( (N == 1 || (N > 1 && tlist.getItem(1).type != 3)) && 
      tlist.getItem(0).type == 2) 
    {
      operation = 2; // translate
      var oldxlate = tlist.getItem(0).matrix,
        meq = svgedit.math.transformListToTransform(tlist,1).matrix,
        meq_inv = meq.inverse();
      m = svgedit.math.matrixMultiply( meq_inv, oldxlate, meq );
      tlist.removeItem(0);
    }
    // else if this child now has a matrix imposition (from a parent group)
    // we might be able to simplify
    else if (N == 1 && tlist.getItem(0).type == 1 && !angle) {
      // Remap all point-based elements
      m = svgedit.math.transformListToTransform(tlist).matrix;
      switch (selected.tagName) {
        case 'line':
          changes = $(selected).attr(['x1', 'y1', 'x2', 'y2']);
        case 'polyline':
        case 'polygon':
          changes.points = selected.getAttribute('points');
          if (changes.points) {
            var list = selected.points;
            var len = list.numberOfItems;
            changes.points = new Array(len);
            for (var i = 0; i < len; ++i) {
              var pt = list.getItem(i);
              changes.points[i] = {x:pt.x, y:pt.y};
            }
          }
        case 'path':
          changes.d = selected.getAttribute('d');
          operation = 1;
          tlist.clear();
          break;
        default:
          break;
      }
    }
    // if it was a rotation, put the rotate back and return without a command
    // (this function has zero work to do for a rotate())
    else {
      operation = 4; // rotation
      if (angle) {
        var newRot = svgroot.createSVGTransform();
        newRot.setRotate(angle, newcenter.x, newcenter.y);
        
        if (tlist.numberOfItems) {
          tlist.insertItemBefore(newRot, 0);
        } else {
          tlist.appendItem(newRot);
        }
      }
      if (tlist.numberOfItems == 0) {
        selected.removeAttribute('transform');
      }
      return null;
    }
    
    // if it was a translate or resize, we need to remap the element and absorb the xform
    if (operation == 1 || operation == 2 || operation == 3) {
      svgedit.coords.remapElement(selected, changes, m);
    } // if we are remapping
    
    // if it was a translate, put back the rotate at the new center
    if (operation == 2) {
      if (angle) {
        if (!svgedit.math.hasMatrixTransform(tlist)) {
          newcenter = {
            x: oldcenter.x + m.e,
            y: oldcenter.y + m.f
          };
        }
        var newRot = svgroot.createSVGTransform();
        newRot.setRotate(angle, newcenter.x, newcenter.y);
        if (tlist.numberOfItems) {
          tlist.insertItemBefore(newRot, 0);
        } else {
          tlist.appendItem(newRot);
        }
      }
      // We have special processing for tspans:  Tspans are not transformable
      // but they can have x,y coordinates (sigh).  Thus, if this was a translate,
      // on a text element, also translate any tspan children.
      if (selected.tagName == 'text') {
        var children = selected.childNodes;
        var c = children.length;
        while (c--) {
          var child = children.item(c);
          if (child.tagName == 'tspan') {
            var tspanChanges = {
              x: $(child).attr('x') || 0,
              y: $(child).attr('y') || 0
            };
            svgedit.coords.remapElement(child, tspanChanges, m);
          }
        }
      }
    }
    // [Rold][M][T][S][-T] became [Rold][M]
    // we want it to be [Rnew][M][Tr] where Tr is the
    // translation required to re-center it
    // Therefore, [Tr] = [M_inv][Rnew_inv][Rold][M]
    else if (operation == 3 && angle) {
      var m = svgedit.math.transformListToTransform(tlist).matrix;
      var roldt = svgroot.createSVGTransform();
      roldt.setRotate(angle, oldcenter.x, oldcenter.y);
      var rold = roldt.matrix;
      var rnew = svgroot.createSVGTransform();
      rnew.setRotate(angle, newcenter.x, newcenter.y);
      var rnew_inv = rnew.matrix.inverse();
      var m_inv = m.inverse();
      var extrat = svgedit.math.matrixMultiply(m_inv, rnew_inv, rold, m);
    
      svgedit.coords.remapElement(selected, changes, extrat);
      if (angle) {
        if (tlist.numberOfItems) {
          tlist.insertItemBefore(rnew, 0);
        } else {
          tlist.appendItem(rnew);
        }
      }
    }
  } // a non-group

  // if the transform list has been emptied, remove it
  if (tlist.numberOfItems == 0) {
    selected.removeAttribute('transform');
  }

  batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(selected, initial));

  return batchCmd;
};
})();


/**
 * Package: svedit.select
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Jeff Schiller
 */

// Dependencies:
// 1) jQuery
// 2) browser.js
// 3) math.js
// 4) svgutils.js

(function() {

if (!svgedit.select) {
	svgedit.select = {};
}

var svgFactory_;
var config_;
var selectorManager_; // A Singleton
var gripRadius = svgedit.browser.isTouch() ? 10 : 4;

// Class: svgedit.select.Selector
// Private class for DOM element selection boxes
//
// Parameters:
// id - integer to internally indentify the selector
// elem - DOM element associated with this selector
svgedit.select.Selector = function(id, elem) {
	// this is the selector's unique number
	this.id = id;

	// this holds a reference to the element for which this selector is being used
	this.selectedElement = elem;

	// this is a flag used internally to track whether the selector is being used or not
	this.locked = true;

	// this holds a reference to the <g> element that holds all visual elements of the selector
	this.selectorGroup = svgFactory_.createSVGElement({
		'element': 'g',
		'attr': {'id': ('selectorGroup' + this.id)}
	});

	// this holds a reference to the path rect
	this.selectorRect = this.selectorGroup.appendChild(
		svgFactory_.createSVGElement({
			'element': 'path',
			'attr': {
				'id': ('selectedBox' + this.id),
				'fill': 'none',
				'stroke': '#22C',
				'stroke-width': '1',
				'stroke-dasharray': '5,5',
				// need to specify this so that the rect is not selectable
				'style': 'pointer-events:none'
			}
		})
	);

	// this holds a reference to the grip coordinates for this selector
	this.gripCoords = {
		'nw': null,
		'n' : null,
		'ne': null,
		'e' : null,
		'se': null,
		's' : null,
		'sw': null,
		'w' : null
	};

	this.reset(this.selectedElement);
};


// Function: svgedit.select.Selector.reset
// Used to reset the id and element that the selector is attached to
//
// Parameters:
// e - DOM element associated with this selector
svgedit.select.Selector.prototype.reset = function(e) {
	this.locked = true;
	this.selectedElement = e;
	this.resize();
	this.selectorGroup.setAttribute('display', 'inline');
};

// Function: svgedit.select.Selector.updateGripCursors
// Updates cursors for corner grips on rotation so arrows point the right way
//
// Parameters:
// angle - Float indicating current rotation angle in degrees
svgedit.select.Selector.prototype.updateGripCursors = function(angle) {
	var dir_arr = [];
	var steps = Math.round(angle / 45);
	if (steps < 0) steps += 8;
	for (var dir in selectorManager_.selectorGrips) {
		dir_arr.push(dir);
	}
	while (steps > 0) {
		dir_arr.push(dir_arr.shift());
		steps--;
	}
	var i = 0;
	for (var dir in selectorManager_.selectorGrips) {
		selectorManager_.selectorGrips[dir].setAttribute('style', ('cursor:' + dir_arr[i] + '-resize'));
		i++;
	}
};

// Function: svgedit.select.Selector.showGrips
// Show the resize grips of this selector
//
// Parameters:
// show - boolean indicating whether grips should be shown or not
svgedit.select.Selector.prototype.showGrips = function(show) {
	// TODO: use suspendRedraw() here
	var bShow = show ? 'inline' : 'none';
	selectorManager_.selectorGripsGroup.setAttribute('display', bShow);
	var elem = this.selectedElement;
	this.hasGrips = show;
	if (elem && show) {
		this.selectorGroup.appendChild(selectorManager_.selectorGripsGroup);
		this.updateGripCursors(svgedit.utilities.getRotationAngle(elem));
	}
};

// Function: svgedit.select.Selector.resize
// Updates the selector to match the element's size
svgedit.select.Selector.prototype.resize = function() {
	var selectedBox = this.selectorRect,
		mgr = selectorManager_,
		selectedGrips = mgr.selectorGrips,
		selected = this.selectedElement,
		sw = selected.getAttribute('stroke-width'),
		current_zoom = svgFactory_.currentZoom();
	var offset = 1/current_zoom;
	if (selected.getAttribute('stroke') !== 'none' && !isNaN(sw)) {
		offset += (sw/2);
	}

	var tagName = selected.tagName;
	if (tagName === 'text') {
		offset += 2/current_zoom;
	}

	// loop and transform our bounding box until we reach our first rotation
	var tlist = svgedit.transformlist.getTransformList(selected);
	var m = svgedit.math.transformListToTransform(tlist).matrix;

	// This should probably be handled somewhere else, but for now
	// it keeps the selection box correctly positioned when zoomed
	m.e *= current_zoom;
	m.f *= current_zoom;

	var bbox = svgedit.utilities.getBBox(selected);
	if (tagName === 'g' && !$.data(selected, 'gsvg')) {
		// The bbox for a group does not include stroke vals, so we
		// get the bbox based on its children.
		var stroked_bbox = svgFactory_.getStrokedBBox(selected.childNodes);
		if (stroked_bbox) {
			bbox = stroked_bbox;
		}
	}

	// apply the transforms
	var l = bbox.x, t = bbox.y, w = bbox.width, h = bbox.height,
		bbox = {x:l, y:t, width:w, height:h};

	// we need to handle temporary transforms too
	// if skewed, get its transformed box, then find its axis-aligned bbox

	//*
	offset *= current_zoom;

	var nbox = svgedit.math.transformBox(l*current_zoom, t*current_zoom, w*current_zoom, h*current_zoom, m),
		aabox = nbox.aabox,
		nbax = aabox.x - offset,
		nbay = aabox.y - offset,
		nbaw = aabox.width + (offset * 2),
		nbah = aabox.height + (offset * 2);

	// now if the shape is rotated, un-rotate it
	var cx = nbax + nbaw/2,
		cy = nbay + nbah/2;

	var angle = svgedit.utilities.getRotationAngle(selected);
	if (angle) {
		var rot = svgFactory_.svgRoot().createSVGTransform();
		rot.setRotate(-angle, cx, cy);
		var rotm = rot.matrix;
		nbox.tl = svgedit.math.transformPoint(nbox.tl.x, nbox.tl.y, rotm);
		nbox.tr = svgedit.math.transformPoint(nbox.tr.x, nbox.tr.y, rotm);
		nbox.bl = svgedit.math.transformPoint(nbox.bl.x, nbox.bl.y, rotm);
		nbox.br = svgedit.math.transformPoint(nbox.br.x, nbox.br.y, rotm);

		// calculate the axis-aligned bbox
		var tl = nbox.tl;
		var minx = tl.x,
			miny = tl.y,
			maxx = tl.x,
			maxy = tl.y;

		var Min = Math.min, Max = Math.max;

		minx = Min(minx, Min(nbox.tr.x, Min(nbox.bl.x, nbox.br.x) ) ) - offset;
		miny = Min(miny, Min(nbox.tr.y, Min(nbox.bl.y, nbox.br.y) ) ) - offset;
		maxx = Max(maxx, Max(nbox.tr.x, Max(nbox.bl.x, nbox.br.x) ) ) + offset;
		maxy = Max(maxy, Max(nbox.tr.y, Max(nbox.bl.y, nbox.br.y) ) ) + offset;

		nbax = minx;
		nbay = miny;
		nbaw = (maxx-minx);
		nbah = (maxy-miny);
	}
	var sr_handle = svgFactory_.svgRoot().suspendRedraw(100);

	var dstr = 'M' + nbax + ',' + nbay
				+ ' L' + (nbax+nbaw) + ',' + nbay
				+ ' ' + (nbax+nbaw) + ',' + (nbay+nbah)
				+ ' ' + nbax + ',' + (nbay+nbah) + 'z';
	selectedBox.setAttribute('d', dstr);

	var xform = angle ? 'rotate(' + [angle, cx, cy].join(',') + ')' : '';
	this.selectorGroup.setAttribute('transform', xform);

	// TODO(codedread): Is this if needed?
//	if (selected === selectedElements[0]) {
		this.gripCoords = {
			'nw': [nbax, nbay],
			'ne': [nbax+nbaw, nbay],
			'sw': [nbax, nbay+nbah],
			'se': [nbax+nbaw, nbay+nbah],
			'n':  [nbax + (nbaw)/2, nbay],
			'w':	[nbax, nbay + (nbah)/2],
			'e':	[nbax + nbaw, nbay + (nbah)/2],
			's':	[nbax + (nbaw)/2, nbay + nbah]
		};

		for (var dir in this.gripCoords) {
			var coords = this.gripCoords[dir];
			selectedGrips[dir].setAttribute('cx', coords[0]);
			selectedGrips[dir].setAttribute('cy', coords[1]);
		}

		// we want to go 20 pixels in the negative transformed y direction, ignoring scale
		mgr.rotateGripConnector.setAttribute('x1', nbax + (nbaw)/2);
		mgr.rotateGripConnector.setAttribute('y1', nbay);
		mgr.rotateGripConnector.setAttribute('x2', nbax + (nbaw)/2);
		mgr.rotateGripConnector.setAttribute('y2', nbay - (gripRadius*5));

		mgr.rotateGrip.setAttribute('cx', nbax + (nbaw)/2);
		mgr.rotateGrip.setAttribute('cy', nbay - (gripRadius*5));
//	}

	svgFactory_.svgRoot().unsuspendRedraw(sr_handle);
};


// Class: svgedit.select.SelectorManager
svgedit.select.SelectorManager = function() {
	// this will hold the <g> element that contains all selector rects/grips
	this.selectorParentGroup = null;

	// this is a special rect that is used for multi-select
	this.rubberBandBox = null;

	// this will hold objects of type svgedit.select.Selector (see above)
	this.selectors = [];

	// this holds a map of SVG elements to their Selector object
	this.selectorMap = {};

	// this holds a reference to the grip elements
	this.selectorGrips = {
		'nw': null,
		'n' :  null,
		'ne': null,
		'e' :  null,
		'se': null,
		's' :  null,
		'sw': null,
		'w' :  null
	};

	this.selectorGripsGroup = null;
	this.rotateGripConnector = null;
	this.rotateGrip = null;

	this.initGroup();
};

// Function: svgedit.select.SelectorManager.initGroup
// Resets the parent selector group element
svgedit.select.SelectorManager.prototype.initGroup = function() {
	// remove old selector parent group if it existed
	if (this.selectorParentGroup && this.selectorParentGroup.parentNode) {
		this.selectorParentGroup.parentNode.removeChild(this.selectorParentGroup);
	}

	// create parent selector group and add it to svgroot
	this.selectorParentGroup = svgFactory_.createSVGElement({
		'element': 'g',
		'attr': {'id': 'selectorParentGroup'}
	});
	this.selectorGripsGroup = svgFactory_.createSVGElement({
		'element': 'g',
		'attr': {'display': 'none'}
	});
	this.selectorParentGroup.appendChild(this.selectorGripsGroup);
	svgFactory_.svgRoot().appendChild(this.selectorParentGroup);

	this.selectorMap = {};
	this.selectors = [];
	this.rubberBandBox = null;

	// add the corner grips
	for (var dir in this.selectorGrips) {
		var grip = svgFactory_.createSVGElement({
			'element': 'circle',
			'attr': {
				'id': ('selectorGrip_resize_' + dir),
				'fill': '#22C',
				'r': gripRadius,
				'style': ('cursor:' + dir + '-resize'),
				// This expands the mouse-able area of the grips making them
				// easier to grab with the mouse.
				// This works in Opera and WebKit, but does not work in Firefox
				// see https://bugzilla.mozilla.org/show_bug.cgi?id=500174
				'stroke-width': 2,
				'pointer-events': 'all'
			}
		});

		$.data(grip, 'dir', dir);
		$.data(grip, 'type', 'resize');
		this.selectorGrips[dir] = this.selectorGripsGroup.appendChild(grip);
	}

	// add rotator elems
	this.rotateGripConnector = this.selectorGripsGroup.appendChild(
		svgFactory_.createSVGElement({
			'element': 'line',
			'attr': {
				'id': ('selectorGrip_rotateconnector'),
				'stroke': '#22C',
				'stroke-width': '1'
			}
		})
	);

	this.rotateGrip = this.selectorGripsGroup.appendChild(
		svgFactory_.createSVGElement({
			'element': 'circle',
			'attr': {
				'id': 'selectorGrip_rotate',
				'fill': 'lime',
				'r': gripRadius,
				'stroke': '#22C',
				'stroke-width': 2,
				'style': 'cursor:url(' + config_.imgPath + 'rotate.png) 12 12, auto;'
			}
		})
	);
	$.data(this.rotateGrip, 'type', 'rotate');

	if ($('#canvasBackground').length) return;

	var dims = config_.dimensions;
	var canvasbg = svgFactory_.createSVGElement({
		'element': 'svg',
		'attr': {
			'id': 'canvasBackground',
			'width': dims[0],
			'height': dims[1],
			'x': 0,
			'y': 0,
			'overflow': (svgedit.browser.isWebkit() ? 'none' : 'visible'), // Chrome 7 has a problem with this when zooming out
			'style': 'pointer-events:none'
		}
	});

	var rect = svgFactory_.createSVGElement({
		'element': 'rect',
		'attr': {
			'width': '100%',
			'height': '100%',
			'x': 0,
			'y': 0,
			'stroke-width': 1,
			'stroke': '#000',
			'fill': '#FFF',
			'style': 'pointer-events:none'
		}
	});

	// Both Firefox and WebKit are too slow with this filter region (especially at higher
	// zoom levels) and Opera has at least one bug
//	if (!svgedit.browser.isOpera()) rect.setAttribute('filter', 'url(#canvashadow)');
	canvasbg.appendChild(rect);
	svgFactory_.svgRoot().insertBefore(canvasbg, svgFactory_.svgContent());
};

// Function: svgedit.select.SelectorManager.requestSelector
// Returns the selector based on the given element
//
// Parameters:
// elem - DOM element to get the selector for
svgedit.select.SelectorManager.prototype.requestSelector = function(elem) {
	if (elem == null) return null;
	var N = this.selectors.length;
	// If we've already acquired one for this element, return it.
	if (typeof(this.selectorMap[elem.id]) == 'object') {
		this.selectorMap[elem.id].locked = true;
		return this.selectorMap[elem.id];
	}
	for (var i = 0; i < N; ++i) {
		if (this.selectors[i] && !this.selectors[i].locked) {
			this.selectors[i].locked = true;
			this.selectors[i].reset(elem);
			this.selectorMap[elem.id] = this.selectors[i];
			return this.selectors[i];
		}
	}
	// if we reached here, no available selectors were found, we create one
	this.selectors[N] = new svgedit.select.Selector(N, elem);
	this.selectorParentGroup.appendChild(this.selectors[N].selectorGroup);
	this.selectorMap[elem.id] = this.selectors[N];
	return this.selectors[N];
};

// Function: svgedit.select.SelectorManager.releaseSelector
// Removes the selector of the given element (hides selection box)
//
// Parameters:
// elem - DOM element to remove the selector for
svgedit.select.SelectorManager.prototype.releaseSelector = function(elem) {
	if (elem == null) return;
	var N = this.selectors.length,
		sel = this.selectorMap[elem.id];
	for (var i = 0; i < N; ++i) {
		if (this.selectors[i] && this.selectors[i] == sel) {
			if (sel.locked == false) {
				// TODO(codedread): Ensure this exists in this module.
				console.log('WARNING! selector was released but was already unlocked');
			}
			delete this.selectorMap[elem.id];
			sel.locked = false;
			sel.selectedElement = null;
			sel.showGrips(false);

			// remove from DOM and store reference in JS but only if it exists in the DOM
			try {
				sel.selectorGroup.setAttribute('display', 'none');
			} catch(e) { }

			break;
		}
	}
};

// Function: svgedit.select.SelectorManager.getRubberBandBox
// Returns the rubberBandBox DOM element. This is the rectangle drawn by the user for selecting/zooming
svgedit.select.SelectorManager.prototype.getRubberBandBox = function() {
	if (!this.rubberBandBox) {
		this.rubberBandBox = this.selectorParentGroup.appendChild(
			svgFactory_.createSVGElement({
				'element': 'rect',
				'attr': {
					'id': 'selectorRubberBand',
					'fill': '#22C',
					'fill-opacity': 0.15,
					'stroke': '#22C',
					'stroke-width': 0.5,
					'display': 'none',
					'style': 'pointer-events:none'
				}
			})
		);
	}
	return this.rubberBandBox;
};


/**
 * Interface: svgedit.select.SVGFactory
 * An object that creates SVG elements for the canvas.
 *
 * interface svgedit.select.SVGFactory {
 *   SVGElement createSVGElement(jsonMap);
 *   SVGSVGElement svgRoot();
 *   SVGSVGElement svgContent();
 *
 *   Number currentZoom();
 *   Object getStrokedBBox(Element[]); // TODO(codedread): Remove when getStrokedBBox() has been put into svgutils.js
 * }
 */

/**
 * Function: svgedit.select.init()
 * Initializes this module.
 *
 * Parameters:
 * config - an object containing configurable parameters (imgPath)
 * svgFactory - an object implementing the SVGFactory interface (see above).
 */
svgedit.select.init = function(config, svgFactory) {
	config_ = config;
	svgFactory_ = svgFactory;
	selectorManager_ = new svgedit.select.SelectorManager();
};

/**
 * Function: svgedit.select.getSelectorManager
 *
 * Returns:
 * The SelectorManager instance.
 */
svgedit.select.getSelectorManager = function() {
	return selectorManager_;
};

})();


/**
 * Package: svgedit.draw
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2011 Jeff Schiller
 */

// Dependencies:
// 1) jQuery
// 2) browser.js
// 3) svgutils.js

(function() {

if (!svgedit.draw) {
	svgedit.draw = {};
}
// alias
var NS = svgedit.NS;

var visElems = 'a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use'.split(',');

var RandomizeModes = {
	LET_DOCUMENT_DECIDE: 0,
	ALWAYS_RANDOMIZE: 1,
	NEVER_RANDOMIZE: 2
};
var randomize_ids = RandomizeModes.LET_DOCUMENT_DECIDE;

/**
 * This class encapsulates the concept of a layer in the drawing
 * @param name {String} Layer name
 * @param child {SVGGElement} Layer SVG group.
 */
svgedit.draw.Layer = function(name, group) {
	this.name_ = name;
	this.group_ = group;
};

svgedit.draw.Layer.prototype.getName = function() {
	return this.name_;
};

svgedit.draw.Layer.prototype.getGroup = function() {
	return this.group_;
};


// Called to ensure that drawings will or will not have randomized ids.
// The currentDrawing will have its nonce set if it doesn't already.
//
// Params:
// enableRandomization - flag indicating if documents should have randomized ids
svgedit.draw.randomizeIds = function(enableRandomization, currentDrawing) {
	randomize_ids = enableRandomization === false ?
		RandomizeModes.NEVER_RANDOMIZE :
		RandomizeModes.ALWAYS_RANDOMIZE;

	if (randomize_ids == RandomizeModes.ALWAYS_RANDOMIZE && !currentDrawing.getNonce()) {
		currentDrawing.setNonce(Math.floor(Math.random() * 100001));
	} else if (randomize_ids == RandomizeModes.NEVER_RANDOMIZE && currentDrawing.getNonce()) {
		currentDrawing.clearNonce();
	}
};

/**
 * This class encapsulates the concept of a SVG-edit drawing
 *
 * @param svgElem {SVGSVGElement} The SVG DOM Element that this JS object
 *     encapsulates.  If the svgElem has a se:nonce attribute on it, then
 *     IDs will use the nonce as they are generated.
 * @param opt_idPrefix {String} The ID prefix to use.  Defaults to "svg_"
 *     if not specified.
 */
svgedit.draw.Drawing = function(svgElem, opt_idPrefix) {
	if (!svgElem || !svgElem.tagName || !svgElem.namespaceURI ||
		svgElem.tagName != 'svg' || svgElem.namespaceURI != NS.SVG) {
		throw "Error: svgedit.draw.Drawing instance initialized without a <svg> element";
	}

	/**
	 * The SVG DOM Element that represents this drawing.
	 * @type {SVGSVGElement}
	 */
	this.svgElem_ = svgElem;
	
	/**
	 * The latest object number used in this drawing.
	 * @type {number}
	 */
	this.obj_num = 0;
	
	/**
	 * The prefix to prepend to each element id in the drawing.
	 * @type {String}
	 */
	this.idPrefix = opt_idPrefix || "svg_";
	
	/**
	 * An array of released element ids to immediately reuse.
	 * @type {Array.<number>}
	 */
	this.releasedNums = [];

	/**
	 * The z-ordered array of tuples containing layer names and <g> elements.
	 * The first layer is the one at the bottom of the rendering.
	 * TODO: Turn this into an Array.<Layer>
	 * @type {Array.<Array.<String, SVGGElement>>}
	 */
	this.all_layers = [];

	/**
	 * The current layer being used.
	 * TODO: Make this a {Layer}.
	 * @type {SVGGElement}
	 */
	this.current_layer = null;

	/**
	 * The nonce to use to uniquely identify elements across drawings.
	 * @type {!String}
	 */
	this.nonce_ = "";
	var n = this.svgElem_.getAttributeNS(NS.SE, 'nonce');
	// If already set in the DOM, use the nonce throughout the document
	// else, if randomizeIds(true) has been called, create and set the nonce.
	if (!!n && randomize_ids != RandomizeModes.NEVER_RANDOMIZE) {
		this.nonce_ = n;
	} else if (randomize_ids == RandomizeModes.ALWAYS_RANDOMIZE) {
		this.setNonce(Math.floor(Math.random() * 100001));
	}
};

svgedit.draw.Drawing.prototype.getElem_ = function(id) {
	if(this.svgElem_.querySelector) {
		// querySelector lookup
		return this.svgElem_.querySelector('#'+id);
	}
	// jQuery lookup: twice as slow as xpath in FF
	return $(this.svgElem_).find('[id=' + id + ']')[0];
};

svgedit.draw.Drawing.prototype.getSvgElem = function() {
	return this.svgElem_;
};

svgedit.draw.Drawing.prototype.getNonce = function() {
	return this.nonce_;
};

svgedit.draw.Drawing.prototype.setNonce = function(n) {
	this.svgElem_.setAttributeNS(NS.XMLNS, 'xmlns:se', NS.SE);
	this.svgElem_.setAttributeNS(NS.SE, 'se:nonce', n);
	this.nonce_ = n;
};

svgedit.draw.Drawing.prototype.clearNonce = function() {
	// We deliberately leave any se:nonce attributes alone,
	// we just don't use it to randomize ids.
	this.nonce_ = "";
};

/**
 * Returns the latest object id as a string.
 * @return {String} The latest object Id.
 */
svgedit.draw.Drawing.prototype.getId = function() {
	return this.nonce_ ?
		this.idPrefix + this.nonce_ + '_' + this.obj_num :
 		this.idPrefix + this.obj_num;
};

/**
 * Returns the next object Id as a string.
 * @return {String} The next object Id to use.
 */
svgedit.draw.Drawing.prototype.getNextId = function() {
	var oldObjNum = this.obj_num;
	var restoreOldObjNum = false;

	// If there are any released numbers in the release stack, 
	// use the last one instead of the next obj_num.
	// We need to temporarily use obj_num as that is what getId() depends on.
	if (this.releasedNums.length > 0) {
		this.obj_num = this.releasedNums.pop();
		restoreOldObjNum = true;
	} else {
		// If we are not using a released id, then increment the obj_num.
		this.obj_num++;
	}

	// Ensure the ID does not exist.
	var id = this.getId();
	while (this.getElem_(id)) {
		if (restoreOldObjNum) {
			this.obj_num = oldObjNum;
			restoreOldObjNum = false;
		}
		this.obj_num++;
		id = this.getId();
	}
	// Restore the old object number if required.
	if (restoreOldObjNum) {
		this.obj_num = oldObjNum;
	}
	return id;
};

// Function: svgedit.draw.Drawing.releaseId
// Releases the object Id, letting it be used as the next id in getNextId().
// This method DOES NOT remove any elements from the DOM, it is expected
// that client code will do this.
//
// Parameters:
// id - The id to release.
//
// Returns:
// True if the id was valid to be released, false otherwise.
svgedit.draw.Drawing.prototype.releaseId = function(id) {
	// confirm if this is a valid id for this Document, else return false
	var front = this.idPrefix + (this.nonce_ ? this.nonce_ + '_' : '');
	if (typeof id != typeof '' || id.indexOf(front) != 0) {
		return false;
	}
	// extract the obj_num of this id
	var num = parseInt(id.substr(front.length));

	// if we didn't get a positive number or we already released this number
	// then return false.
	if (typeof num != typeof 1 || num <= 0 || this.releasedNums.indexOf(num) != -1) {
		return false;
	}
	
	// push the released number into the released queue
	this.releasedNums.push(num);

	return true;
};

// Function: svgedit.draw.Drawing.getNumLayers
// Returns the number of layers in the current drawing.
// 
// Returns:
// The number of layers in the current drawing.
svgedit.draw.Drawing.prototype.getNumLayers = function() {
	return this.all_layers.length;
};

// Function: svgedit.draw.Drawing.hasLayer
// Check if layer with given name already exists
svgedit.draw.Drawing.prototype.hasLayer = function(name) {
	for(var i = 0; i < this.getNumLayers(); i++) {
		if(this.all_layers[i][0] == name) return true;
	}
	return false;
};


// Function: svgedit.draw.Drawing.getLayerName
// Returns the name of the ith layer. If the index is out of range, an empty string is returned.
//
// Parameters:
// i - the zero-based index of the layer you are querying.
// 
// Returns:
// The name of the ith layer
svgedit.draw.Drawing.prototype.getLayerName = function(i) {
	if (i >= 0 && i < this.getNumLayers()) {
		return this.all_layers[i][0];
	}
	return "";
};

// Function: svgedit.draw.Drawing.getCurrentLayer
// Returns:
// The SVGGElement representing the current layer.
svgedit.draw.Drawing.prototype.getCurrentLayer = function() {
	return this.current_layer;
};

// Function: getCurrentLayerName
// Returns the name of the currently selected layer. If an error occurs, an empty string 
// is returned.
//
// Returns:
// The name of the currently active layer.
svgedit.draw.Drawing.prototype.getCurrentLayerName = function() {
	for (var i = 0; i < this.getNumLayers(); ++i) {
		if (this.all_layers[i][1] == this.current_layer) {
			return this.getLayerName(i);
		}
	}
	return "";
};

// Function: setCurrentLayer
// Sets the current layer. If the name is not a valid layer name, then this function returns
// false. Otherwise it returns true. This is not an undo-able action.
//
// Parameters:
// name - the name of the layer you want to switch to.
//
// Returns:
// true if the current layer was switched, otherwise false
svgedit.draw.Drawing.prototype.setCurrentLayer = function(name) {
	for (var i = 0; i < this.getNumLayers(); ++i) {
		if (name == this.getLayerName(i)) {
			if (this.current_layer != this.all_layers[i][1]) {
				this.current_layer.setAttribute("style", "pointer-events:none");
				this.current_layer = this.all_layers[i][1];
				this.current_layer.setAttribute("style", "pointer-events:all");
			}
			return true;
		}
	}
	return false;
};


// Function: svgedit.draw.Drawing.deleteCurrentLayer
// Deletes the current layer from the drawing and then clears the selection. This function 
// then calls the 'changed' handler.  This is an undoable action.
// Returns:
// The SVGGElement of the layer removed or null.
svgedit.draw.Drawing.prototype.deleteCurrentLayer = function() {
	if (this.current_layer && this.getNumLayers() > 1) {
		// actually delete from the DOM and return it
		var parent = this.current_layer.parentNode;
		var nextSibling = this.current_layer.nextSibling;
		var oldLayerGroup = parent.removeChild(this.current_layer);
		this.identifyLayers();
		return oldLayerGroup;
	}
	return null;
};

// Function: svgedit.draw.Drawing.identifyLayers
// Updates layer system and sets the current layer to the
// top-most layer (last <g> child of this drawing).
svgedit.draw.Drawing.prototype.identifyLayers = function() {
	this.all_layers = [];
	var numchildren = this.svgElem_.childNodes.length;
	// loop through all children of SVG element
	var orphans = [], layernames = [];
	var a_layer = null;
	var childgroups = false;
	for (var i = 0; i < numchildren; ++i) {
		var child = this.svgElem_.childNodes.item(i);
		// for each g, find its layer name
		if (child && child.nodeType == 1) {
			if (child.tagName == "g") {
				childgroups = true;
				var name = $("title", child).text();

				// Hack for Opera 10.60
				if(!name && svgedit.browser.isOpera() && child.querySelectorAll) {
					name = $(child.querySelectorAll('title')).text();
				}

				// store layer and name in global variable
				if (name) {
					layernames.push(name);
					this.all_layers.push( [name, child] );
					a_layer = child;
					svgedit.utilities.walkTree(child, function(e){e.setAttribute("style", "pointer-events:inherit");});
					a_layer.setAttribute("style", "pointer-events:none");
				}
				// if group did not have a name, it is an orphan
				else {
					orphans.push(child);
				}
			}
			// if child has is "visible" (i.e. not a <title> or <defs> element), then it is an orphan
			else if(~visElems.indexOf(child.nodeName)) {
				var bb = svgedit.utilities.getBBox(child);
				orphans.push(child);
			}
		}
	}
	
	// create a new layer and add all the orphans to it
	var svgdoc = this.svgElem_.ownerDocument;
	if (orphans.length > 0 || !childgroups) {
		var i = 1;
		// TODO(codedread): What about internationalization of "Layer"?
		while (layernames.indexOf(("Layer " + i)) >= 0) { i++; }
		var newname = "Layer " + i;
		a_layer = svgdoc.createElementNS(NS.SVG, "g");
		var layer_title = svgdoc.createElementNS(NS.SVG, "title");
		layer_title.textContent = newname;
		a_layer.appendChild(layer_title);
		for (var j = 0; j < orphans.length; ++j) {
			a_layer.appendChild(orphans[j]);
		}
		this.svgElem_.appendChild(a_layer);
		this.all_layers.push( [newname, a_layer] );
	}
	svgedit.utilities.walkTree(a_layer, function(e){e.setAttribute("style", "pointer-events:inherit");});
	this.current_layer = a_layer;
	this.current_layer.setAttribute("style", "pointer-events:all");
};

// Function: svgedit.draw.Drawing.createLayer
// Creates a new top-level layer in the drawing with the given name and 
// sets the current layer to it.
//
// Parameters:
// name - The given name
//
// Returns:
// The SVGGElement of the new layer, which is also the current layer
// of this drawing.
svgedit.draw.Drawing.prototype.createLayer = function(name) {
	var svgdoc = this.svgElem_.ownerDocument;
	var new_layer = svgdoc.createElementNS(NS.SVG, "g");
	var layer_title = svgdoc.createElementNS(NS.SVG, "title");
	layer_title.textContent = name;
	new_layer.appendChild(layer_title);
	this.svgElem_.appendChild(new_layer);
	this.identifyLayers();
	return new_layer;
};

// Function: svgedit.draw.Drawing.getLayerVisibility
// Returns whether the layer is visible.  If the layer name is not valid, then this function
// returns false.
//
// Parameters:
// layername - the name of the layer which you want to query.
//
// Returns:
// The visibility state of the layer, or false if the layer name was invalid.
svgedit.draw.Drawing.prototype.getLayerVisibility = function(layername) {
	// find the layer
	var layer = null;
	for (var i = 0; i < this.getNumLayers(); ++i) {
		if (this.getLayerName(i) == layername) {
			layer = this.all_layers[i][1];
			break;
		}
	}
	if (!layer) return false;
	return (layer.getAttribute('display') != 'none');
};

// Function: svgedit.draw.Drawing.setLayerVisibility
// Sets the visibility of the layer. If the layer name is not valid, this function return 
// false, otherwise it returns true. This is an undo-able action.
//
// Parameters:
// layername - the name of the layer to change the visibility
// bVisible - true/false, whether the layer should be visible
//
// Returns:
// The SVGGElement representing the layer if the layername was valid, otherwise null.
svgedit.draw.Drawing.prototype.setLayerVisibility = function(layername, bVisible) {
	if (typeof bVisible != typeof true) {
		return null;
	}
	// find the layer
	var layer = null;
	for (var i = 0; i < this.getNumLayers(); ++i) {
		if (this.getLayerName(i) == layername) {
			layer = this.all_layers[i][1];
			break;
		}
	}
	if (!layer) return null;
	
	var oldDisplay = layer.getAttribute("display");
	if (!oldDisplay) oldDisplay = "inline";
	layer.setAttribute("display", bVisible ? "inline" : "none");
	return layer;
};


// Function: svgedit.draw.Drawing.getLayerOpacity
// Returns the opacity of the given layer.  If the input name is not a layer, null is returned.
//
// Parameters: 
// layername - name of the layer on which to get the opacity
//
// Returns:
// The opacity value of the given layer.  This will be a value between 0.0 and 1.0, or null
// if layername is not a valid layer
svgedit.draw.Drawing.prototype.getLayerOpacity = function(layername) {
	for (var i = 0; i < this.getNumLayers(); ++i) {
		if (this.getLayerName(i) == layername) {
			var g = this.all_layers[i][1];
			var opacity = g.getAttribute('opacity');
			if (!opacity) {
				opacity = '1.0';
			}
			return parseFloat(opacity);
		}
	}
	return null;
};

// Function: svgedit.draw.Drawing.setLayerOpacity
// Sets the opacity of the given layer.  If the input name is not a layer, nothing happens.
// If opacity is not a value between 0.0 and 1.0, then nothing happens.
//
// Parameters:
// layername - name of the layer on which to set the opacity
// opacity - a float value in the range 0.0-1.0
svgedit.draw.Drawing.prototype.setLayerOpacity = function(layername, opacity) {
	if (typeof opacity != typeof 1.0 || opacity < 0.0 || opacity > 1.0) {
		return;
	}
	for (var i = 0; i < this.getNumLayers(); ++i) {
		if (this.getLayerName(i) == layername) {
			var g = this.all_layers[i][1];
			g.setAttribute("opacity", opacity);
			break;
		}
	}
};

})();


/**
 * Package: svgedit.path
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2011 Alexis Deveria
 * Copyright(c) 2011 Jeff Schiller
 */

// Dependencies:
// 1) jQuery
// 2) browser.js
// 3) math.js
// 4) svgutils.js

(function() {

if (!svgedit.path) {
	svgedit.path = {};
}

var NS = svgedit.NS;
var uiStrings = {
	'pathNodeTooltip': 'Drag node to move it. Double-click node to change segment type',
	'pathCtrlPtTooltip': 'Drag control point to adjust curve properties'
};

var segData = {
	2: ['x', 'y'],
	4: ['x', 'y'],
	6: ['x', 'y', 'x1', 'y1', 'x2', 'y2'],
	8: ['x', 'y', 'x1', 'y1'],
	10: ['x', 'y', 'r1', 'r2', 'angle', 'largeArcFlag', 'sweepFlag'],
	12: ['x'],
	14: ['y'],
	16: ['x', 'y', 'x2', 'y2'],
	18: ['x', 'y']
};

var pathFuncs = [];

var link_control_pts = true;

// Stores references to paths via IDs.
// TODO: Make this cross-document happy.
var pathData = {};

svgedit.path.setLinkControlPoints = function(lcp) {
	link_control_pts = lcp;
};

svgedit.path.path = null;

var editorContext_ = null;

svgedit.path.init = function(editorContext) {
	editorContext_ = editorContext;

	pathFuncs = [0, 'ClosePath'];
	var pathFuncsStrs = ['Moveto', 'Lineto', 'CurvetoCubic', 'CurvetoQuadratic', 'Arc',
		'LinetoHorizontal', 'LinetoVertical', 'CurvetoCubicSmooth', 'CurvetoQuadraticSmooth'];
	$.each(pathFuncsStrs, function(i, s) {
		pathFuncs.push(s+'Abs');
		pathFuncs.push(s+'Rel');
	});
};

svgedit.path.insertItemBefore = function(elem, newseg, index) {
	// Support insertItemBefore on paths for FF2
	var list = elem.pathSegList;

	if (svgedit.browser.supportsPathInsertItemBefore()) {
		list.insertItemBefore(newseg, index);
		return;
	}
	var len = list.numberOfItems;
	var arr = [];
	for (var i=0; i<len; i++) {
		var cur_seg = list.getItem(i);
		arr.push(cur_seg);
	}
	list.clear();
	for (var i=0; i<len; i++) {
		if (i == index) { //index+1
			list.appendItem(newseg);
		}
		list.appendItem(arr[i]);
	}
};

// TODO: See if this should just live in replacePathSeg
svgedit.path.ptObjToArr = function(type, seg_item) {
	var arr = segData[type], len = arr.length;
	var out = Array(len);
	for (var i=0; i<len; i++) {
		out[i] = seg_item[arr[i]];
	}
	return out;
};

svgedit.path.getGripPt = function(seg, alt_pt) {
	var out = {
		x: alt_pt? alt_pt.x : seg.item.x,
		y: alt_pt? alt_pt.y : seg.item.y
	}, path = seg.path;

	if (path.matrix) {
		var pt = svgedit.math.transformPoint(out.x, out.y, path.matrix);
		out = pt;
	}

	out.x *= editorContext_.getCurrentZoom();
	out.y *= editorContext_.getCurrentZoom();

	return out;
};

svgedit.path.getPointFromGrip = function(pt, path) {
	var out = {
		x: pt.x,
		y: pt.y
	};

	if (path.matrix) {
		var pt = svgedit.math.transformPoint(out.x, out.y, path.imatrix);
		out.x = pt.x;
		out.y = pt.y;
	}

	out.x /= editorContext_.getCurrentZoom();
	out.y /= editorContext_.getCurrentZoom();

	return out;
};

svgedit.path.addPointGrip = function(index, x, y) {
	// create the container of all the point grips
	var pointGripContainer = svgedit.path.getGripContainer();

	var pointGrip = svgedit.utilities.getElem('pathpointgrip_'+index);
	// create it
	if (!pointGrip) {
		pointGrip = document.createElementNS(NS.SVG, 'circle');
		svgedit.utilities.assignAttributes(pointGrip, {
			'id': 'pathpointgrip_' + index,
			'display': 'none',
			'r': 4,
			'fill': '#0FF',
			'stroke': '#00F',
			'stroke-width': 2,
			'cursor': 'move',
			'style': 'pointer-events:all',
			'xlink:title': uiStrings.pathNodeTooltip
		});
		pointGrip = pointGripContainer.appendChild(pointGrip);

		var grip = $('#pathpointgrip_'+index);
		grip.dblclick(function() {
			if (svgedit.path.path) svgedit.path.path.setSegType();
		});
	}
	if (x && y) {
		// set up the point grip element and display it
		svgedit.utilities.assignAttributes(pointGrip, {
			'cx': x,
			'cy': y,
			'display': 'inline'
		});
	}
	return pointGrip;
};

svgedit.path.getGripContainer = function() {
	var c = svgedit.utilities.getElem('pathpointgrip_container');
	if (!c) {
		var parent = svgedit.utilities.getElem('selectorParentGroup');
		c = parent.appendChild(document.createElementNS(NS.SVG, 'g'));
		c.id = 'pathpointgrip_container';
	}
	return c;
};

svgedit.path.addCtrlGrip = function(id) {
	var pointGrip = svgedit.utilities.getElem('ctrlpointgrip_'+id);
	if (pointGrip) return pointGrip;

	pointGrip = document.createElementNS(NS.SVG, 'circle');
	svgedit.utilities.assignAttributes(pointGrip, {
		'id': 'ctrlpointgrip_' + id,
		'display': 'none',
		'r': 4,
		'fill': '#0FF',
		'stroke': '#55F',
		'stroke-width': 1,
		'cursor': 'move',
		'style': 'pointer-events:all',
		'xlink:title': uiStrings.pathCtrlPtTooltip
	});
	svgedit.path.getGripContainer().appendChild(pointGrip);
	return pointGrip;
};

svgedit.path.getCtrlLine = function(id) {
	var ctrlLine = svgedit.utilities.getElem('ctrlLine_'+id);
	if (ctrlLine) return ctrlLine;

	ctrlLine = document.createElementNS(NS.SVG, 'line');
	svgedit.utilities.assignAttributes(ctrlLine, {
		'id': 'ctrlLine_'+id,
		'stroke': '#555',
		'stroke-width': 1,
		'style': 'pointer-events:none'
	});
	svgedit.path.getGripContainer().appendChild(ctrlLine);
	return ctrlLine;
};

svgedit.path.getPointGrip = function(seg, update) {
	var index = seg.index;
	var pointGrip = svgedit.path.addPointGrip(index);

	if (update) {
		var pt = svgedit.path.getGripPt(seg);
		svgedit.utilities.assignAttributes(pointGrip, {
			'cx': pt.x,
			'cy': pt.y,
			'display': 'inline'
		});
	}

	return pointGrip;
};

svgedit.path.getControlPoints = function(seg) {
	var item = seg.item;
	var index = seg.index;
	if (!('x1' in item) || !('x2' in item)) return null;
	var cpt = {};
	var pointGripContainer = svgedit.path.getGripContainer();

	// Note that this is intentionally not seg.prev.item
	var prev = svgedit.path.path.segs[index-1].item;

	var seg_items = [prev, item];

	for (var i=1; i<3; i++) {
		var id = index + 'c' + i;

		var ctrlLine = cpt['c' + i + '_line'] = svgedit.path.getCtrlLine(id);

		var pt = svgedit.path.getGripPt(seg, {x:item['x' + i], y:item['y' + i]});
		var gpt = svgedit.path.getGripPt(seg, {x:seg_items[i-1].x, y:seg_items[i-1].y});

		svgedit.utilities.assignAttributes(ctrlLine, {
			'x1': pt.x,
			'y1': pt.y,
			'x2': gpt.x,
			'y2': gpt.y,
			'display': 'inline'
		});

		cpt['c' + i + '_line'] = ctrlLine;

		// create it
		pointGrip = cpt['c' + i] = svgedit.path.addCtrlGrip(id);

		svgedit.utilities.assignAttributes(pointGrip, {
			'cx': pt.x,
			'cy': pt.y,
			'display': 'inline'
		});
		cpt['c' + i] = pointGrip;
	}
	return cpt;
};

// This replaces the segment at the given index. Type is given as number.
svgedit.path.replacePathSeg = function(type, index, pts, elem) {
	var path = elem || svgedit.path.path.elem;
	var func = 'createSVGPathSeg' + pathFuncs[type];
	var seg = path[func].apply(path, pts);

	if (svgedit.browser.supportsPathReplaceItem()) {
		path.pathSegList.replaceItem(seg, index);
	} else {
		var segList = path.pathSegList;
		var len = segList.numberOfItems;
		var arr = [];
		for (var i=0; i<len; i++) {
			var cur_seg = segList.getItem(i);
			arr.push(cur_seg);
		}
		segList.clear();
		for (var i=0; i<len; i++) {
			if (i == index) {
				segList.appendItem(seg);
			} else {
				segList.appendItem(arr[i]);
			}
		}
	}
};

svgedit.path.getSegSelector = function(seg, update) {
	var index = seg.index;
	var segLine = svgedit.utilities.getElem('segline_' + index);
	if (!segLine) {
		var pointGripContainer = svgedit.path.getGripContainer();
		// create segline
		segLine = document.createElementNS(NS.SVG, 'path');
		svgedit.utilities.assignAttributes(segLine, {
			'id': 'segline_' + index,
			'display': 'none',
			'fill': 'none',
			'stroke': '#0FF',
			'stroke-width': 2,
			'style':'pointer-events:none',
			'd': 'M0,0 0,0'
		});
		pointGripContainer.appendChild(segLine);
	}

	if (update) {
		var prev = seg.prev;
		if (!prev) {
			segLine.setAttribute('display', 'none');
			return segLine;
		}

		var pt = svgedit.path.getGripPt(prev);
		// Set start point
		svgedit.path.replacePathSeg(2, 0, [pt.x, pt.y], segLine);

		var pts = svgedit.path.ptObjToArr(seg.type, seg.item, true);
		for (var i=0; i < pts.length; i+=2) {
			var pt = svgedit.path.getGripPt(seg, {x:pts[i], y:pts[i+1]});
			pts[i] = pt.x;
			pts[i+1] = pt.y;
		}

		svgedit.path.replacePathSeg(seg.type, 1, pts, segLine);
	}
	return segLine;
};

// Function: smoothControlPoints
// Takes three points and creates a smoother line based on them
// 
// Parameters: 
// ct1 - Object with x and y values (first control point)
// ct2 - Object with x and y values (second control point)
// pt - Object with x and y values (third point)
//
// Returns: 
// Array of two "smoothed" point objects
svgedit.path.smoothControlPoints = function(ct1, ct2, pt) {
	// each point must not be the origin
	var x1 = ct1.x - pt.x,
		y1 = ct1.y - pt.y,
		x2 = ct2.x - pt.x,
		y2 = ct2.y - pt.y;

	if ( (x1 != 0 || y1 != 0) && (x2 != 0 || y2 != 0) ) {
		var anglea = Math.atan2(y1, x1),
			angleb = Math.atan2(y2, x2),
			r1 = Math.sqrt(x1*x1+y1*y1),
			r2 = Math.sqrt(x2*x2+y2*y2),
			nct1 = editorContext_.getSVGRoot().createSVGPoint(),
			nct2 = editorContext_.getSVGRoot().createSVGPoint();
		if (anglea < 0) { anglea += 2*Math.PI; }
		if (angleb < 0) { angleb += 2*Math.PI; }

		var angleBetween = Math.abs(anglea - angleb),
			angleDiff = Math.abs(Math.PI - angleBetween)/2;

		var new_anglea, new_angleb;
		if (anglea - angleb > 0) {
			new_anglea = angleBetween < Math.PI ? (anglea + angleDiff) : (anglea - angleDiff);
			new_angleb = angleBetween < Math.PI ? (angleb - angleDiff) : (angleb + angleDiff);
		}
		else {
			new_anglea = angleBetween < Math.PI ? (anglea - angleDiff) : (anglea + angleDiff);
			new_angleb = angleBetween < Math.PI ? (angleb + angleDiff) : (angleb - angleDiff);
		}

		// rotate the points
		nct1.x = r1 * Math.cos(new_anglea) + pt.x;
		nct1.y = r1 * Math.sin(new_anglea) + pt.y;
		nct2.x = r2 * Math.cos(new_angleb) + pt.x;
		nct2.y = r2 * Math.sin(new_angleb) + pt.y;

		return [nct1, nct2];
	}
	return undefined;
};

svgedit.path.Segment = function(index, item) {
	this.selected = false;
	this.index = index;
	this.item = item;
	this.type = item.pathSegType;

	this.ctrlpts = [];
	this.ptgrip = null;
	this.segsel = null;
};

svgedit.path.Segment.prototype.showCtrlPts = function(y) {
	for (var i in this.ctrlpts) {
		this.ctrlpts[i].setAttribute('display', y ? 'inline' : 'none');
	}
};

svgedit.path.Segment.prototype.selectCtrls = function(y) {
	$('#ctrlpointgrip_' + this.index + 'c1, #ctrlpointgrip_' + this.index + 'c2').
		attr('fill', y ? '#0FF' : '#EEE');
};

svgedit.path.Segment.prototype.show = function(y) {
	if (this.ptgrip) {
		this.ptgrip.setAttribute('display', y ? 'inline' : 'none');
		this.segsel.setAttribute('display', y ? 'inline' : 'none');
		// Show/hide all control points if available
		this.showCtrlPts(y);
	}
};

svgedit.path.Segment.prototype.select = function(y) {
	if (this.ptgrip) {
		this.ptgrip.setAttribute('stroke', y ? '#0FF' : '#00F');
		this.segsel.setAttribute('display', y ? 'inline' : 'none');
		if (this.ctrlpts) {
			this.selectCtrls(y);
		}
		this.selected = y;
	}
};

svgedit.path.Segment.prototype.addGrip = function() {
	this.ptgrip = svgedit.path.getPointGrip(this, true);
	this.ctrlpts = svgedit.path.getControlPoints(this, true);
	this.segsel = svgedit.path.getSegSelector(this, true);
};

svgedit.path.Segment.prototype.update = function(full) {
	if (this.ptgrip) {
		var pt = svgedit.path.getGripPt(this);
		svgedit.utilities.assignAttributes(this.ptgrip, {
			'cx': pt.x,
			'cy': pt.y
		});

		svgedit.path.getSegSelector(this, true);

		if (this.ctrlpts) {
			if (full) {
				this.item = svgedit.path.path.elem.pathSegList.getItem(this.index);
				this.type = this.item.pathSegType;
			}
			svgedit.path.getControlPoints(this);
		}
		// this.segsel.setAttribute('display', y?'inline':'none');
	}
};

svgedit.path.Segment.prototype.move = function(dx, dy) {
	var item = this.item;

	if (this.ctrlpts) {
		var cur_pts = [item.x += dx, item.y += dy, 
			item.x1, item.y1, item.x2 += dx, item.y2 += dy];
	} else {
		var cur_pts = [item.x += dx, item.y += dy];
	}
	svgedit.path.replacePathSeg(this.type, this.index, cur_pts);

	if (this.next && this.next.ctrlpts) {
		var next = this.next.item;
		var next_pts = [next.x, next.y, 
			next.x1 += dx, next.y1 += dy, next.x2, next.y2];
		svgedit.path.replacePathSeg(this.next.type, this.next.index, next_pts);
	}

	if (this.mate) {
		// The last point of a closed subpath has a 'mate',
		// which is the 'M' segment of the subpath
		var item = this.mate.item;
		var pts = [item.x += dx, item.y += dy];
		svgedit.path.replacePathSeg(this.mate.type, this.mate.index, pts);
		// Has no grip, so does not need 'updating'?
	}

	this.update(true);
	if (this.next) this.next.update(true);
};

svgedit.path.Segment.prototype.setLinked = function(num) {
	var seg, anum, pt;
	if (num == 2) {
		anum = 1;
		seg = this.next;
		if (!seg) return;
		pt = this.item;
	} else {
		anum = 2;
		seg = this.prev;
		if (!seg) return;
		pt = seg.item;
	}

	var item = seg.item;

	item['x' + anum] = pt.x + (pt.x - this.item['x' + num]);
	item['y' + anum] = pt.y + (pt.y - this.item['y' + num]);

	var pts = [item.x, item.y,
		item.x1, item.y1,
		item.x2, item.y2];

	svgedit.path.replacePathSeg(seg.type, seg.index, pts);
	seg.update(true);
};

svgedit.path.Segment.prototype.moveCtrl = function(num, dx, dy) {
	var item = this.item;

	item['x' + num] += dx;
	item['y' + num] += dy;

	var pts = [item.x, item.y, item.x1, item.y1, item.x2, item.y2];

	svgedit.path.replacePathSeg(this.type, this.index, pts);
	this.update(true);
};

svgedit.path.Segment.prototype.setType = function(new_type, pts) {
	svgedit.path.replacePathSeg(new_type, this.index, pts);
	this.type = new_type;
	this.item = svgedit.path.path.elem.pathSegList.getItem(this.index);
	this.showCtrlPts(new_type === 6);
	this.ctrlpts = svgedit.path.getControlPoints(this);
	this.update(true);
};

svgedit.path.Path = function(elem) {
	if (!elem || elem.tagName !== 'path') {
		throw 'svgedit.path.Path constructed without a <path> element';
	}

	this.elem = elem;
	this.segs = [];
	this.selected_pts = [];
	svgedit.path.path = this;

	this.init();
};

// Reset path data
svgedit.path.Path.prototype.init = function() {
	// Hide all grips, etc
	$(svgedit.path.getGripContainer()).find('*').attr('display', 'none');
	var segList = this.elem.pathSegList;
	var len = segList.numberOfItems;
	this.segs = [];
	this.selected_pts = [];
	this.first_seg = null;

	// Set up segs array
	for (var i=0; i < len; i++) {
		var item = segList.getItem(i);
		var segment = new svgedit.path.Segment(i, item);
		segment.path = this;
		this.segs.push(segment);
	}

	var segs = this.segs;
	var start_i = null;

	for (var i=0; i < len; i++) {
		var seg = segs[i];
		var next_seg = (i+1) >= len ? null : segs[i+1];
		var prev_seg = (i-1) < 0 ? null : segs[i-1];

		if (seg.type === 2) {
			if (prev_seg && prev_seg.type !== 1) {
				// New sub-path, last one is open,
				// so add a grip to last sub-path's first point
				var start_seg = segs[start_i];
				start_seg.next = segs[start_i+1];
				start_seg.next.prev = start_seg;
				start_seg.addGrip();
			}
			// Remember that this is a starter seg
			start_i = i;
		} else if (next_seg && next_seg.type === 1) {
			// This is the last real segment of a closed sub-path
			// Next is first seg after "M"
			seg.next = segs[start_i+1];

			// First seg after "M"'s prev is this
			seg.next.prev = seg;
			seg.mate = segs[start_i];
			seg.addGrip();
			if (this.first_seg == null) {
				this.first_seg = seg;
			}
		} else if (!next_seg) {
			if (seg.type !== 1) {
				// Last seg, doesn't close so add a grip
				// to last sub-path's first point
				var start_seg = segs[start_i];
				start_seg.next = segs[start_i+1];
				start_seg.next.prev = start_seg;
				start_seg.addGrip();
				seg.addGrip();

				if (!this.first_seg) {
					// Open path, so set first as real first and add grip
					this.first_seg = segs[start_i];
				}
			}
		} else if (seg.type !== 1){
			// Regular segment, so add grip and its "next"
			seg.addGrip();

			// Don't set its "next" if it's an "M"
			if (next_seg && next_seg.type !== 2) {
				seg.next = next_seg;
				seg.next.prev = seg;
			}
		}
	}
	return this;
};

svgedit.path.Path.prototype.eachSeg = function(fn) {
	var len = this.segs.length;
	for (var i=0; i < len; i++) {
		var ret = fn.call(this.segs[i], i);
		if (ret === false) break;
	}
};

svgedit.path.Path.prototype.addSeg = function(index) {
	// Adds a new segment
	var seg = this.segs[index];
	if (!seg.prev) return;

	var prev = seg.prev;
	var newseg;
	switch(seg.item.pathSegType) {
	case 4:
		var new_x = (seg.item.x + prev.item.x) / 2;
		var new_y = (seg.item.y + prev.item.y) / 2;
		newseg = this.elem.createSVGPathSegLinetoAbs(new_x, new_y);
		break;
	case 6: //make it a curved segment to preserve the shape (WRS)
		// http://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm#Geometric_interpretation
		var p0_x = (prev.item.x + seg.item.x1)/2;
		var p1_x = (seg.item.x1 + seg.item.x2)/2;
		var p2_x = (seg.item.x2 + seg.item.x)/2;
		var p01_x = (p0_x + p1_x)/2;
		var p12_x = (p1_x + p2_x)/2;
		var new_x = (p01_x + p12_x)/2;
		var p0_y = (prev.item.y + seg.item.y1)/2;
		var p1_y = (seg.item.y1 + seg.item.y2)/2;
		var p2_y = (seg.item.y2 + seg.item.y)/2;
		var p01_y = (p0_y + p1_y)/2;
		var p12_y = (p1_y + p2_y)/2;
		var new_y = (p01_y + p12_y)/2;
		newseg = this.elem.createSVGPathSegCurvetoCubicAbs(new_x, new_y, p0_x, p0_y, p01_x, p01_y);
		var pts = [seg.item.x, seg.item.y, p12_x, p12_y, p2_x, p2_y];
		svgedit.path.replacePathSeg(seg.type, index, pts);
		break;
	}

	svgedit.path.insertItemBefore(this.elem, newseg, index);
};

svgedit.path.Path.prototype.deleteSeg = function(index) {
	var seg = this.segs[index];
	var list = this.elem.pathSegList;

	seg.show(false);
	var next = seg.next;
	if (seg.mate) {
		// Make the next point be the "M" point
		var pt = [next.item.x, next.item.y];
		svgedit.path.replacePathSeg(2, next.index, pt);

		// Reposition last node
		svgedit.path.replacePathSeg(4, seg.index, pt);

		list.removeItem(seg.mate.index);
	} else if (!seg.prev) {
		// First node of open path, make next point the M
		var item = seg.item;
		var pt = [next.item.x, next.item.y];
		svgedit.path.replacePathSeg(2, seg.next.index, pt);
		list.removeItem(index);
	} else {
		list.removeItem(index);
	}
};

svgedit.path.Path.prototype.subpathIsClosed = function(index) {
	var closed = false;
	// Check if subpath is already open
	svgedit.path.path.eachSeg(function(i) {
		if (i <= index) return true;
		if (this.type === 2) {
			// Found M first, so open
			return false;
		}
		if (this.type === 1) {
			// Found Z first, so closed
			closed = true;
			return false;
		}
	});

	return closed;
};

svgedit.path.Path.prototype.removePtFromSelection = function(index) {
	var pos = this.selected_pts.indexOf(index);
	if (pos == -1) {
		return;
	}
	this.segs[index].select(false);
	this.selected_pts.splice(pos, 1);
};

svgedit.path.Path.prototype.clearSelection = function() {
	this.eachSeg(function() {
		// 'this' is the segment here
		this.select(false);
	});
	this.selected_pts = [];
};

svgedit.path.Path.prototype.storeD = function() {
	this.last_d = this.elem.getAttribute('d');
};

svgedit.path.Path.prototype.show = function(y) {
	// Shows this path's segment grips
	this.eachSeg(function() {
		// 'this' is the segment here
		this.show(y);
	});
	if (y) {
		this.selectPt(this.first_seg.index);
	}
	return this;
};

// Move selected points
svgedit.path.Path.prototype.movePts = function(d_x, d_y) {
	var i = this.selected_pts.length;
	while(i--) {
		var seg = this.segs[this.selected_pts[i]];
		seg.move(d_x, d_y);
	}
};

svgedit.path.Path.prototype.moveCtrl = function(d_x, d_y) {
	var seg = this.segs[this.selected_pts[0]];
	seg.moveCtrl(this.dragctrl, d_x, d_y);
	if (link_control_pts) {
		seg.setLinked(this.dragctrl);
	}
};

svgedit.path.Path.prototype.setSegType = function(new_type) {
	this.storeD();
	var i = this.selected_pts.length;
	var text;
	while(i--) {
		var sel_pt = this.selected_pts[i];

		// Selected seg
		var cur = this.segs[sel_pt];
		var prev = cur.prev;
		if (!prev) continue;

		if (!new_type) { // double-click, so just toggle
			text = 'Toggle Path Segment Type';

			// Toggle segment to curve/straight line
			var old_type = cur.type;

			new_type = (old_type == 6) ? 4 : 6;
		}

		new_type = new_type-0;

		var cur_x = cur.item.x;
		var cur_y = cur.item.y;
		var prev_x = prev.item.x;
		var prev_y = prev.item.y;
		var points;
		switch ( new_type ) {
		case 6:
			if (cur.olditem) {
				var old = cur.olditem;
				points = [cur_x, cur_y, old.x1, old.y1, old.x2, old.y2];
			} else {
				var diff_x = cur_x - prev_x;
				var diff_y = cur_y - prev_y;
				// get control points from straight line segment
				/*
				var ct1_x = (prev_x + (diff_y/2));
				var ct1_y = (prev_y - (diff_x/2));
				var ct2_x = (cur_x + (diff_y/2));
				var ct2_y = (cur_y - (diff_x/2));
				*/
				//create control points on the line to preserve the shape (WRS)
				var ct1_x = (prev_x + (diff_x/3));
				var ct1_y = (prev_y + (diff_y/3));
				var ct2_x = (cur_x - (diff_x/3));
				var ct2_y = (cur_y - (diff_y/3));
				points = [cur_x, cur_y, ct1_x, ct1_y, ct2_x, ct2_y];
			}
			break;
		case 4:
			points = [cur_x, cur_y];

			// Store original prevve segment nums
			cur.olditem = cur.item;
			break;
		}

		cur.setType(new_type, points);
	}
	svgedit.path.path.endChanges(text);
};

svgedit.path.Path.prototype.selectPt = function(pt, ctrl_num) {
	this.clearSelection();
	if (pt == null) {
		this.eachSeg(function(i) {
			// 'this' is the segment here.
			if (this.prev) {
				pt = i;
			}
		});
	}
	this.addPtsToSelection(pt);
	if (ctrl_num) {
		this.dragctrl = ctrl_num;

		if (link_control_pts) {
			this.segs[pt].setLinked(ctrl_num);
		}
	}
};

// Update position of all points
svgedit.path.Path.prototype.update = function() {
	var elem = this.elem;
	if (svgedit.utilities.getRotationAngle(elem)) {
		this.matrix = svgedit.math.getMatrix(elem);
		this.imatrix = this.matrix.inverse();
	} else {
		this.matrix = null;
		this.imatrix = null;
	}

	this.eachSeg(function(i) {
		this.item = elem.pathSegList.getItem(i);
		this.update();
	});

	return this;
};

svgedit.path.getPath_ = function(elem) {
	var p = pathData[elem.id];
	if (!p) p = pathData[elem.id] = new svgedit.path.Path(elem);
	return p;
};

svgedit.path.removePath_ = function(id) {
	if (id in pathData) delete pathData[id];
};

var getRotVals = function(x, y) {
	dx = x - oldcx;
	dy = y - oldcy;

	// rotate the point around the old center
	r = Math.sqrt(dx*dx + dy*dy);
	theta = Math.atan2(dy, dx) + angle;
	dx = r * Math.cos(theta) + oldcx;
	dy = r * Math.sin(theta) + oldcy;

	// dx,dy should now hold the actual coordinates of each
	// point after being rotated

	// now we want to rotate them around the new center in the reverse direction
	dx -= newcx;
	dy -= newcy;

	r = Math.sqrt(dx*dx + dy*dy);
	theta = Math.atan2(dy, dx) - angle;

	return {'x':(r * Math.cos(theta) + newcx)/1,
		'y':(r * Math.sin(theta) + newcy)/1};
};

// If the path was rotated, we must now pay the piper:
// Every path point must be rotated into the rotated coordinate system of 
// its old center, then determine the new center, then rotate it back
// This is because we want the path to remember its rotation

// TODO: This is still using ye olde transform methods, can probably
// be optimized or even taken care of by recalculateDimensions
svgedit.path.recalcRotatedPath = function() {
	var current_path = svgedit.path.path.elem;
	var angle = svgedit.utilities.getRotationAngle(current_path, true);
	if (!angle) return;
//	selectedBBoxes[0] = svgedit.path.path.oldbbox;
	var box = svgedit.utilities.getBBox(current_path),
		oldbox = svgedit.path.path.oldbbox,//selectedBBoxes[0],
		oldcx = oldbox.x + oldbox.width/2,
		oldcy = oldbox.y + oldbox.height/2,
		newcx = box.x + box.width/2,
		newcy = box.y + box.height/2,

	// un-rotate the new center to the proper position
		dx = newcx - oldcx,
		dy = newcy - oldcy,
		r = Math.sqrt(dx*dx + dy*dy),
		theta = Math.atan2(dy, dx) + angle;

	newcx = r * Math.cos(theta) + oldcx;
	newcy = r * Math.sin(theta) + oldcy;

	var list = current_path.pathSegList,
		i = list.numberOfItems;
	while (i) {
		i -= 1;
		var seg = list.getItem(i),
			type = seg.pathSegType;
		if (type == 1) continue;

		var rvals = getRotVals(seg.x, seg.y),
			points = [rvals.x, rvals.y];
		if (seg.x1 != null && seg.x2 != null) {
			c_vals1 = getRotVals(seg.x1, seg.y1);
			c_vals2 = getRotVals(seg.x2, seg.y2);
			points.splice(points.length, 0, c_vals1.x , c_vals1.y, c_vals2.x, c_vals2.y);
		}
		svgedit.path.replacePathSeg(type, i, points);
	} // loop for each point

	box = svgedit.utilities.getBBox(current_path);
//	selectedBBoxes[0].x = box.x; selectedBBoxes[0].y = box.y;
//	selectedBBoxes[0].width = box.width; selectedBBoxes[0].height = box.height;

	// now we must set the new transform to be rotated around the new center
	var R_nc = svgroot.createSVGTransform(),
		tlist = svgedit.transformlist.getTransformList(current_path);
	R_nc.setRotate((angle * 180.0 / Math.PI), newcx, newcy);
	tlist.replaceItem(R_nc,0);
};

// ====================================
// Public API starts here

svgedit.path.clearData =  function() {
	pathData = {};
};

})();


/*
 * svgcanvas.js
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Pavol Rusnak
 * Copyright(c) 2010 Jeff Schiller
 *
 */

// Dependencies:
// 1) jQuery
// 2) browser.js
// 3) svgtransformlist.js
// 4) math.js
// 5) units.js
// 6) svgutils.js
// 7) sanitize.js
// 8) history.js
// 9) select.js
// 10) draw.js
// 11) path.js
// 12) coords.js
// 13) recalculate.js

if (!window.console) {
	window.console = {};
	window.console.log = function(str) {};
	window.console.dir = function(str) {};
}

if (window.opera) {
	window.console.log = function(str) { opera.postError(str); };
	window.console.dir = function(str) {};
}

// Class: SvgCanvas
// The main SvgCanvas class that manages all SVG-related functions
//
// Parameters:
// container - The container HTML element that should hold the SVG root element
// config - An object that contains configuration data
$.SvgCanvas = function(container, config)
{
// Alias Namespace constants
var NS = svgedit.NS;

// Default configuration options
var curConfig = {
	show_outside_canvas: true,
	selectNew: true,
	dimensions: [640, 480]
};

// Update config with new one if given
if (config) {
	$.extend(curConfig, config);
}

// Array with width/height of canvas
var dimensions = curConfig.dimensions;

var canvas = this;

// "document" element associated with the container (same as window.document using default svg-editor.js)
// NOTE: This is not actually a SVG document, but a HTML document.
var svgdoc = container.ownerDocument;

// This is a container for the document being edited, not the document itself.
var svgroot = svgdoc.importNode(svgedit.utilities.text2xml(
		'<svg id="svgroot" xmlns="' + NS.SVG + '" xlinkns="' + NS.XLINK + '" ' +
			'width="' + dimensions[0] + '" height="' + dimensions[1] + '" x="' + dimensions[0] + '" y="' + dimensions[1] + '" overflow="visible">' +
			'<defs>' +
				'<filter id="canvashadow" filterUnits="objectBoundingBox">' +
					'<feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/>'+
					'<feOffset in="blur" dx="5" dy="5" result="offsetBlur"/>'+
					'<feMerge>'+
						'<feMergeNode in="offsetBlur"/>'+
						'<feMergeNode in="SourceGraphic"/>'+
					'</feMerge>'+
				'</filter>'+
			'</defs>'+
		'</svg>').documentElement, true);
container.appendChild(svgroot);

// The actual element that represents the final output SVG element
var svgcontent = svgdoc.createElementNS(NS.SVG, "svg");

// This function resets the svgcontent element while keeping it in the DOM.
var clearSvgContentElement = canvas.clearSvgContentElement = function() {
	while (svgcontent.firstChild) { svgcontent.removeChild(svgcontent.firstChild); }

	// TODO: Clear out all other attributes first?
	$(svgcontent).attr({
		id: 'svgcontent',
		width: dimensions[0],
		height: dimensions[1],
		x: dimensions[0],
		y: dimensions[1],
		overflow: curConfig.show_outside_canvas ? 'visible' : 'hidden',
		xmlns: NS.SVG,
		"xmlns:se": NS.SE,
		"xmlns:xlink": NS.XLINK
	}).appendTo(svgroot);

	// TODO: make this string optional and set by the client
	var comment = svgdoc.createComment(" Created with SVG-edit - http://svg-edit.googlecode.com/ ");
	svgcontent.appendChild(comment);
};
clearSvgContentElement();

// Prefix string for element IDs
var idprefix = "svg_";

// Function: setIdPrefix
// Changes the ID prefix to the given value
//
// Parameters: 
// p - String with the new prefix 
canvas.setIdPrefix = function(p) {
	idprefix = p;
};

// Current svgedit.draw.Drawing object
// @type {svgedit.draw.Drawing}
canvas.current_drawing_ = new svgedit.draw.Drawing(svgcontent, idprefix);

// Function: getCurrentDrawing
// Returns the current Drawing.
// @return {svgedit.draw.Drawing}
var getCurrentDrawing = canvas.getCurrentDrawing = function() {
	return canvas.current_drawing_;
};

// Float displaying the current zoom level (1 = 100%, .5 = 50%, etc)
var current_zoom = 1;

// pointer to current group (for in-group editing)
var current_group = null;

// Object containing data for the currently selected styles
var all_properties = {
	shape: {
		fill: (curConfig.initFill.color == 'none' ? '' : '#') + curConfig.initFill.color,
		fill_paint: null,
		fill_opacity: curConfig.initFill.opacity,
		stroke: "#" + curConfig.initStroke.color,
		stroke_paint: null,
		stroke_opacity: curConfig.initStroke.opacity,
		stroke_width: curConfig.initStroke.width,
		stroke_dasharray: 'none',
		stroke_linejoin: 'miter',
		stroke_linecap: 'butt',
		opacity: curConfig.initOpacity
	}
};

all_properties.text = $.extend(true, {}, all_properties.shape);
$.extend(all_properties.text, {
	fill: "#000000",
	stroke_width: 0,
	font_size: 24,
	font_family: 'serif'
});

// Current shape style properties
var cur_shape = all_properties.shape;

// Array with all the currently selected elements
// default size of 1 until it needs to grow bigger
var selectedElements = new Array(1);

// Function: addSvgElementFromJson
// Create a new SVG element based on the given object keys/values and add it to the current layer
// The element will be ran through cleanupElement before being returned 
//
// Parameters:
// data - Object with the following keys/values:
// * element - tag name of the SVG element to create
// * attr - Object with attributes key-values to assign to the new element
// * curStyles - Boolean indicating that current style attributes should be applied first
//
// Returns: The new element
var addSvgElementFromJson = this.addSvgElementFromJson = function(data) {
	var shape = svgedit.utilities.getElem(data.attr.id);
	// if shape is a path but we need to create a rect/ellipse, then remove the path
	var current_layer = getCurrentDrawing().getCurrentLayer();
	if (shape && data.element != shape.tagName) {
		current_layer.removeChild(shape);
		shape = null;
	}
	if (!shape) {
		shape = svgdoc.createElementNS(NS.SVG, data.element);
		if (current_layer) {
			(current_group || current_layer).appendChild(shape);
		}
	}
	if (data.curStyles) {
		svgedit.utilities.assignAttributes(shape, {
			"fill": cur_shape.fill,
			"stroke": cur_shape.stroke,
			"stroke-width": cur_shape.stroke_width,
			"stroke-dasharray": cur_shape.stroke_dasharray,
			"stroke-linejoin": cur_shape.stroke_linejoin,
			"stroke-linecap": cur_shape.stroke_linecap,
			"stroke-opacity": cur_shape.stroke_opacity,
			"fill-opacity": cur_shape.fill_opacity,
			"opacity": cur_shape.opacity / 2,
			"style": "pointer-events:inherit"
		}, 100);
	}
	svgedit.utilities.assignAttributes(shape, data.attr, 100);
	svgedit.utilities.cleanupElement(shape);
	return shape;
};

// import svgtransformlist.js
var getTransformList = canvas.getTransformList = svgedit.transformlist.getTransformList;

// import from math.js.
var transformPoint = svgedit.math.transformPoint;
var matrixMultiply = canvas.matrixMultiply = svgedit.math.matrixMultiply;
var hasMatrixTransform = canvas.hasMatrixTransform = svgedit.math.hasMatrixTransform;
var transformListToTransform = canvas.transformListToTransform = svgedit.math.transformListToTransform;
var snapToAngle = svgedit.math.snapToAngle;
var getMatrix = svgedit.math.getMatrix;

// initialize from units.js
// send in an object implementing the ElementContainer interface (see units.js)
svgedit.units.init({
	getBaseUnit: function() { return curConfig.baseUnit; },
	getElement: svgedit.utilities.getElem,
	getHeight: function() { return svgcontent.getAttribute("height")/current_zoom; },
	getWidth: function() { return svgcontent.getAttribute("width")/current_zoom; },
	getRoundDigits: function() { return save_options.round_digits; }
});
// import from units.js
var convertToNum = canvas.convertToNum = svgedit.units.convertToNum;

// import from svgutils.js
svgedit.utilities.init({
	getDOMDocument: function() { return svgdoc; },
	getDOMContainer: function() { return container; },
	getSVGRoot: function() { return svgroot; },
	// TODO: replace this mostly with a way to get the current drawing.
	getSelectedElements: function() { return selectedElements; },
	getSVGContent: function() { return svgcontent; },
	getBaseUnit: function() { return curConfig.baseUnit; },
	getStepSize: function() { return curConfig.stepSize; }
});
var findDefs = canvas.findDefs = svgedit.utilities.findDefs;
var getUrlFromAttr = canvas.getUrlFromAttr = svgedit.utilities.getUrlFromAttr;
var getHref = canvas.getHref = svgedit.utilities.getHref;
var setHref = canvas.setHref = svgedit.utilities.setHref;
var getPathBBox = svgedit.utilities.getPathBBox;
var getBBox = canvas.getBBox = svgedit.utilities.getBBox;
var getRotationAngle = canvas.getRotationAngle = svgedit.utilities.getRotationAngle;
var getElem = canvas.getElem = svgedit.utilities.getElem;
var getRefElem = canvas.getRefElem = svgedit.utilities.getRefElem;
var assignAttributes = canvas.assignAttributes = svgedit.utilities.assignAttributes;
var cleanupElement = this.cleanupElement = svgedit.utilities.cleanupElement;

// import from coords.js
svgedit.coords.init({
	getDrawing: function() { return getCurrentDrawing(); },
	getGridSnapping: function() { return curConfig.gridSnapping; }
});
var remapElement = this.remapElement = svgedit.coords.remapElement;

// import from recalculate.js
svgedit.recalculate.init({
	getSVGRoot: function() { return svgroot; },
	getStartTransform: function() { return startTransform; },
	setStartTransform: function(transform) { startTransform = transform; }
});
var recalculateDimensions = this.recalculateDimensions = svgedit.recalculate.recalculateDimensions;

// import from sanitize.js
var nsMap = svgedit.getReverseNS();
var sanitizeSvg = canvas.sanitizeSvg = svgedit.sanitize.sanitizeSvg;

// import from history.js
var MoveElementCommand = svgedit.history.MoveElementCommand;
var InsertElementCommand = svgedit.history.InsertElementCommand;
var RemoveElementCommand = svgedit.history.RemoveElementCommand;
var ChangeElementCommand = svgedit.history.ChangeElementCommand;
var BatchCommand = svgedit.history.BatchCommand;
// Implement the svgedit.history.HistoryEventHandler interface.
canvas.undoMgr = new svgedit.history.UndoManager({
	handleHistoryEvent: function(eventType, cmd) {
		var EventTypes = svgedit.history.HistoryEventTypes;
		// TODO: handle setBlurOffsets.
		if (eventType == EventTypes.BEFORE_UNAPPLY || eventType == EventTypes.BEFORE_APPLY) {
			canvas.clearSelection();
		} else if (eventType == EventTypes.AFTER_APPLY || eventType == EventTypes.AFTER_UNAPPLY) {
			var elems = cmd.elements();
			canvas.pathActions.clear();
			call("changed", elems);
			var cmdType = cmd.type();
			var isApply = (eventType == EventTypes.AFTER_APPLY);
			if (cmdType == MoveElementCommand.type()) {
				var parent = isApply ? cmd.newParent : cmd.oldParent;
				if (parent == svgcontent) {
					canvas.identifyLayers();
				}
			} else if (cmdType == InsertElementCommand.type() ||
					cmdType == RemoveElementCommand.type()) {
				if (cmd.parent == svgcontent) {
					canvas.identifyLayers();
				}
				if (cmdType == InsertElementCommand.type()) {
					if (isApply) restoreRefElems(cmd.elem);
				} else {
					if (!isApply) restoreRefElems(cmd.elem);
				}
				if (cmd.elem.tagName === 'use') {
					setUseData(cmd.elem);
				}
			} else if (cmdType == ChangeElementCommand.type()) {
				// if we are changing layer names, re-identify all layers
				if (cmd.elem.tagName == "title" && cmd.elem.parentNode.parentNode == svgcontent) {
					canvas.identifyLayers();
				}
				var values = isApply ? cmd.newValues : cmd.oldValues;
				// If stdDeviation was changed, update the blur.
				if (values.stdDeviation) {
					canvas.setBlurOffsets(cmd.elem.parentNode, values.stdDeviation);
				}
				// This is resolved in later versions of webkit, perhaps we should
				// have a featured detection for correct 'use' behavior?
				// ——————————
				// Remove & Re-add hack for Webkit (issue 775) 
				//if (cmd.elem.tagName === 'use' && svgedit.browser.isWebkit()) {
				//	var elem = cmd.elem;
				//	if (!elem.getAttribute('x') && !elem.getAttribute('y')) {
				//		var parent = elem.parentNode;
				//		var sib = elem.nextSibling;
				//		parent.removeChild(elem);
				//		parent.insertBefore(elem, sib);
				//	}
				//}
			}
		}
	}
});
var addCommandToHistory = function(cmd) {
	canvas.undoMgr.addCommandToHistory(cmd);
};

// import from select.js
svgedit.select.init(curConfig, {
	createSVGElement: function(jsonMap) { return canvas.addSvgElementFromJson(jsonMap); },
	svgRoot: function() { return svgroot; },
	svgContent: function() { return svgcontent; },
	currentZoom: function() { return current_zoom; },
	// TODO(codedread): Remove when getStrokedBBox() has been put into svgutils.js.
	getStrokedBBox: function(elems) { return canvas.getStrokedBBox([elems]); }
});
// this object manages selectors for us
var selectorManager = this.selectorManager = svgedit.select.getSelectorManager();

// Import from path.js
svgedit.path.init({
	getCurrentZoom: function() { return current_zoom; },
	getSVGRoot: function() { return svgroot; }
});

// Interface strings, usually for title elements
var uiStrings = {
	"exportNoBlur": "Blurred elements will appear as un-blurred",
	"exportNoforeignObject": "foreignObject elements will not appear",
	"exportNoDashArray": "Strokes will appear filled",
	"exportNoText": "Text may not appear as expected"
};

var visElems = 'a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use';
var ref_attrs = ["clip-path", "fill", "filter", "marker-end", "marker-mid", "marker-start", "mask", "stroke"];

var elData = $.data;

// Animation element to change the opacity of any newly created element
var opac_ani = document.createElementNS(NS.SVG, 'animate');
$(opac_ani).attr({
	attributeName: 'opacity',
	begin: 'indefinite',
	dur: 1,
	fill: 'freeze'
}).appendTo(svgroot);

var restoreRefElems = function(elem) {
	// Look for missing reference elements, restore any found
	var attrs = $(elem).attr(ref_attrs);
	for (var o in attrs) {
		var val = attrs[o];
		if (val && val.indexOf('url(') === 0) {
			var id = svgedit.utilities.getUrlFromAttr(val).substr(1);
			var ref = getElem(id);
			if (!ref) {
				svgedit.utilities.findDefs().appendChild(removedElements[id]);
				delete removedElements[id];
			}
		}
	}
	
	var childs = elem.getElementsByTagName('*');
	
	if (childs.length) {
		for (var i = 0, l = childs.length; i < l; i++) {
			restoreRefElems(childs[i]);
		}
	}
};

(function() {
	// TODO For Issue 208: this is a start on a thumbnail
	//	var svgthumb = svgdoc.createElementNS(NS.SVG, "use");
	//	svgthumb.setAttribute('width', '100');
	//	svgthumb.setAttribute('height', '100');
	//	svgedit.utilities.setHref(svgthumb, '#svgcontent');
	//	svgroot.appendChild(svgthumb);

})();

// Object to contain image data for raster images that were found encodable
var encodableImages = {},
	
	// String with image URL of last loadable image
	last_good_img_url = curConfig.imgPath + 'logo.png',
	
	// Array with current disabled elements (for in-group editing)
	disabled_elems = [],
	
	// Object with save options
	save_options = {round_digits: 5},
	
	// Boolean indicating whether or not a draw action has been started
	started = false,
	
	// String with an element's initial transform attribute value
	startTransform = null,
	
	// String indicating the current editor mode
	current_mode = "select",
	
	// String with the current direction in which an element is being resized
	current_resize_mode = "none",
	
	// Object with IDs for imported files, to see if one was already added
	import_ids = {},

	// Current text style properties
	cur_text = all_properties.text,
	
	// Current general properties
	cur_properties = cur_shape,
	
	// Array with selected elements' Bounding box object
//	selectedBBoxes = new Array(1),
	
	// The DOM element that was just selected
	justSelected = null,
	
	// DOM element for selection rectangle drawn by the user
	rubberBox = null,
	
	// Array of current BBoxes (still needed?)
	curBBoxes = [],
	
	// Object to contain all included extensions
	extensions = {},
	
	// Canvas point for the most recent right click
	lastClickPoint = null,
	
	// Map of deleted reference elements
	removedElements = {};

// Clipboard for cut, copy&pasted elements
canvas.clipBoard = [];

// Should this return an array by default, so extension results aren't overwritten?
var runExtensions = this.runExtensions = function(action, vars, returnArray) {
	var result = returnArray ? [] : false;
	$.each(extensions, function(name, opts) {
		if (action in opts) {
			if (returnArray) {
				result.push(opts[action](vars));
			} else {
				result = opts[action](vars);
			}
		}
	});
	return result;
};

// Function: addExtension
// Add an extension to the editor
// 
// Parameters:
// name - String with the ID of the extension
// ext_func - Function supplied by the extension with its data
this.addExtension = function(name, ext_func) {
	if (!(name in extensions)) {
		// Provide private vars/funcs here. Is there a better way to do this?
		if ($.isFunction(ext_func)) {
			var ext = ext_func($.extend(canvas.getPrivateMethods(), {
				svgroot: svgroot,
				svgcontent: svgcontent,
				nonce: getCurrentDrawing().getNonce(),
				selectorManager: selectorManager
			}));
		} else {
			var ext = ext_func;
		}
		extensions[name] = ext;
		call("extension_added", ext);
	} else {
		console.log('Cannot add extension "' + name + '", an extension by that name already exists"');
	}
};
	
// This method rounds the incoming value to the nearest value based on the current_zoom
var round = this.round = function(val) {
	return parseInt(val*current_zoom, 10)/current_zoom;
};

// This method sends back an array or a NodeList full of elements that
// intersect the multi-select rubber-band-box on the current_layer only.
// 
// Since the only browser that supports the SVG DOM getIntersectionList is Opera, 
// we need to provide an implementation here.  We brute-force it for now.
// 
// Reference:
// Firefox does not implement getIntersectionList(), see https://bugzilla.mozilla.org/show_bug.cgi?id=501421
// Webkit does not implement getIntersectionList(), see https://bugs.webkit.org/show_bug.cgi?id=11274
var getIntersectionList = this.getIntersectionList = function(rect) {
	if (rubberBox == null) { return null; }

	var parent = current_group || getCurrentDrawing().getCurrentLayer();
	
	if (!curBBoxes.length) {
		// Cache all bboxes
		curBBoxes = getVisibleElementsAndBBoxes(parent);
	}
	
	var resultList = null;
	try {
		resultList = parent.getIntersectionList(rect, null);
	} catch(e) { }

	if (resultList == null || typeof(resultList.item) != "function") {
		resultList = [];
		
		if (!rect) {
			var rubberBBox = rubberBox.getBBox();
			var bb = {};
			
			for (var o in rubberBBox) {
				bb[o] = rubberBBox[o] / current_zoom;
			}
			rubberBBox = bb;
			
		} else {
			var rubberBBox = rect;
		}
		var i = curBBoxes.length;
		while (i--) {
			if (!rubberBBox.width || !rubberBBox.width) continue;
			if (svgedit.math.rectsIntersect(rubberBBox, curBBoxes[i].bbox))  {
				resultList.push(curBBoxes[i].elem);
			}
		}
	}
	// addToSelection expects an array, but it's ok to pass a NodeList 
	// because using square-bracket notation is allowed: 
	// http://www.w3.org/TR/DOM-Level-2-Core/ecma-script-binding.html
	return resultList;
};

// TODO(codedread): Migrate this into svgutils.js
// Function: getStrokedBBox
// Get the bounding box for one or more stroked and/or transformed elements
// 
// Parameters:
// elems - Array with DOM elements to check
// 
// Returns:
// A single bounding box object
getStrokedBBox = this.getStrokedBBox = function(elems) {
	if (!elems) elems = getVisibleElements();
	if (!elems.length) return false;
	// Make sure the expected BBox is returned if the element is a group
	var getCheckedBBox = function(elem) {

		try {
			// TODO: Fix issue with rotated groups. Currently they work
			// fine in FF, but not in other browsers (same problem mentioned
			// in Issue 339 comment #2).

			var bb = svgedit.utilities.getBBox(elem);
			var angle = svgedit.utilities.getRotationAngle(elem);

			if ((angle && angle % 90) ||
				svgedit.math.hasMatrixTransform(svgedit.transformlist.getTransformList(elem))) {
				// Accurate way to get BBox of rotated element in Firefox:
				// Put element in group and get its BBox
				var good_bb = false;
				// Get the BBox from the raw path for these elements
				var elemNames = ['ellipse', 'path', 'line', 'polyline', 'polygon'];
				if (elemNames.indexOf(elem.tagName) >= 0) {
					bb = good_bb = canvas.convertToPath(elem, true);
				} else if (elem.tagName == 'rect') {
					// Look for radius
					var rx = elem.getAttribute('rx');
					var ry = elem.getAttribute('ry');
					if (rx || ry) {
						bb = good_bb = canvas.convertToPath(elem, true);
					}
				}

				if (!good_bb) {
					// Must use clone else FF freaks out
					var clone = elem.cloneNode(true);
					var g = document.createElementNS(NS.SVG, "g");
					var parent = elem.parentNode;
					parent.appendChild(g);
					g.appendChild(clone);
					bb = svgedit.utilities.bboxToObj(g.getBBox());
					parent.removeChild(g);
				}

				// Old method: Works by giving the rotated BBox,
				// this is (unfortunately) what Opera and Safari do
				// natively when getting the BBox of the parent group
// 						var angle = angle * Math.PI / 180.0;
// 						var rminx = Number.MAX_VALUE, rminy = Number.MAX_VALUE, 
// 							rmaxx = Number.MIN_VALUE, rmaxy = Number.MIN_VALUE;
// 						var cx = round(bb.x + bb.width/2),
// 							cy = round(bb.y + bb.height/2);
// 						var pts = [ [bb.x - cx, bb.y - cy], 
// 									[bb.x + bb.width - cx, bb.y - cy],
// 									[bb.x + bb.width - cx, bb.y + bb.height - cy],
// 									[bb.x - cx, bb.y + bb.height - cy] ];
// 						var j = 4;
// 						while (j--) {
// 							var x = pts[j][0],
// 								y = pts[j][1],
// 								r = Math.sqrt( x*x + y*y );
// 							var theta = Math.atan2(y,x) + angle;
// 							x = round(r * Math.cos(theta) + cx);
// 							y = round(r * Math.sin(theta) + cy);
// 		
// 							// now set the bbox for the shape after it's been rotated
// 							if (x < rminx) rminx = x;
// 							if (y < rminy) rminy = y;
// 							if (x > rmaxx) rmaxx = x;
// 							if (y > rmaxy) rmaxy = y;
// 						}
// 						
// 						bb.x = rminx;
// 						bb.y = rminy;
// 						bb.width = rmaxx - rminx;
// 						bb.height = rmaxy - rminy;
			}
			return bb;
		} catch(e) {
			console.log(elem, e);
			return null;
		}
	};

	var full_bb;
	$.each(elems, function() {
		if (full_bb) return;
		if (!this.parentNode) return;
		full_bb = getCheckedBBox(this);
	});

	// This shouldn't ever happen...
	if (full_bb == null) return null;

	// full_bb doesn't include the stoke, so this does no good!
// 		if (elems.length == 1) return full_bb;

	var max_x = full_bb.x + full_bb.width;
	var max_y = full_bb.y + full_bb.height;
	var min_x = full_bb.x;
	var min_y = full_bb.y;

	// FIXME: same re-creation problem with this function as getCheckedBBox() above
	var getOffset = function(elem) {
		var sw = elem.getAttribute("stroke-width");
		var offset = 0;
		if (elem.getAttribute("stroke") != "none" && !isNaN(sw)) {
			offset += sw/2;
		}
		return offset;
	};
	var bboxes = [];
	$.each(elems, function(i, elem) {
		var cur_bb = getCheckedBBox(elem);
		if (cur_bb) {
			var offset = getOffset(elem);
			min_x = Math.min(min_x, cur_bb.x - offset);
			min_y = Math.min(min_y, cur_bb.y - offset);
			bboxes.push(cur_bb);
		}
	});
	
	full_bb.x = min_x;
	full_bb.y = min_y;
	
	$.each(elems, function(i, elem) {
		var cur_bb = bboxes[i];
		// ensure that elem is really an element node
		if (cur_bb && elem.nodeType == 1) {
			var offset = getOffset(elem);
			max_x = Math.max(max_x, cur_bb.x + cur_bb.width + offset);
			max_y = Math.max(max_y, cur_bb.y + cur_bb.height + offset);
		}
	});
	
	full_bb.width = max_x - min_x;
	full_bb.height = max_y - min_y;
	return full_bb;
};

// Function: getVisibleElements
// Get all elements that have a BBox (excludes <defs>, <title>, etc).
// Note that 0-opacity, off-screen etc elements are still considered "visible"
// for this function
//
// Parameters:
// parent - The parent DOM element to search within
//
// Returns:
// An array with all "visible" elements.
var getVisibleElements = this.getVisibleElements = function(parent) {
	if (!parent) parent = $(svgcontent).children(); // Prevent layers from being included
	
	var contentElems = [];
	$(parent).children().each(function(i, elem) {
		try {
			if (elem.getBBox()) {
				contentElems.push(elem);
			}
		} catch(e) {}
	});
	return contentElems.reverse();
};

// Function: getVisibleElementsAndBBoxes
// Get all elements that have a BBox (excludes <defs>, <title>, etc).
// Note that 0-opacity, off-screen etc elements are still considered "visible"
// for this function
//
// Parameters:
// parent - The parent DOM element to search within
//
// Returns:
// An array with objects that include:
// * elem - The element
// * bbox - The element's BBox as retrieved from getStrokedBBox
var getVisibleElementsAndBBoxes = this.getVisibleElementsAndBBoxes = function(parent) {
	if (!parent) parent = $(svgcontent).children(); // Prevent layers from being included
	
	var contentElems = [];
	$(parent).children().each(function(i, elem) {
		try {
			if (elem.getBBox()) {
				contentElems.push({'elem':elem, 'bbox':getStrokedBBox([elem])});
			}
		} catch(e) {}
	});
	return contentElems.reverse();
};

// Function: groupSvgElem
// Wrap an SVG element into a group element, mark the group as 'gsvg'
//
// Parameters:
// elem - SVG element to wrap
var groupSvgElem = this.groupSvgElem = function(elem) {
	var g = document.createElementNS(NS.SVG, "g");
	elem.parentNode.replaceChild(g, elem);
	$(g).append(elem).data('gsvg', elem)[0].id = getNextId();
};

// Function: copyElem
// Create a clone of an element, updating its ID and its children's IDs when needed
//
// Parameters:
// el - DOM element to clone
//
// Returns: The cloned element
var copyElem = function(el) {
	// manually create a copy of the element
	var new_el = document.createElementNS(el.namespaceURI, el.nodeName);
	$.each(el.attributes, function(i, attr) {
		if (attr.localName != '-moz-math-font-style') {
			new_el.setAttributeNS(attr.namespaceURI, attr.nodeName, attr.nodeValue);
		}
	});
	// set the copied element's new id
	new_el.removeAttribute("id");
	new_el.id = getNextId();
	
	// Opera's "d" value needs to be reset for Opera/Win/non-EN
	// Also needed for webkit (else does not keep curved segments on clone)
	if (svgedit.browser.isWebkit() && el.nodeName == 'path') {
		var fixed_d = pathActions.convertPath(el);
		new_el.setAttribute('d', fixed_d);
	}

	// now create copies of all children
	$.each(el.childNodes, function(i, child) {
		switch(child.nodeType) {
			case 1: // element node
				new_el.appendChild(copyElem(child));
				break;
			case 3: // text node
				new_el.textContent = child.nodeValue;
				break;
			default:
				break;
		}
	});
	
	if ($(el).data('gsvg')) {
		$(new_el).data('gsvg', new_el.firstChild);
	} else if ($(el).data('symbol')) {
		var ref = $(el).data('symbol');
		$(new_el).data('ref', ref).data('symbol', ref);
	} else if (new_el.tagName == 'image') {
		preventClickDefault(new_el);
	}
	return new_el;
};

// Set scope for these functions
var getId, getNextId, call;

(function(c) {

	// Object to contain editor event names and callback functions
	var events = {};

	getId = c.getId = function() { return getCurrentDrawing().getId(); };
	getNextId = c.getNextId = function() { return getCurrentDrawing().getNextId(); };

	// Function: call
	// Run the callback function associated with the given event
	//
	// Parameters:
	// event - String with the event name
	// arg - Argument to pass through to the callback function
	call = c.call = function(event, arg) {
		if (events[event]) {
			return events[event](this, arg);
		}
	};

	// Function: bind
	// Attaches a callback function to an event
	//
	// Parameters:
	// event - String indicating the name of the event
	// f - The callback function to bind to the event
	//
	// Return:
	// The previous event
	c.bind = function(event, f) {
		var old = events[event];
		events[event] = f;
		return old;
	};

}(canvas));

// Function: canvas.prepareSvg
// Runs the SVG Document through the sanitizer and then updates its paths.
//
// Parameters:
// newDoc - The SVG DOM document
this.prepareSvg = function(newDoc) {
	this.sanitizeSvg(newDoc.documentElement);

	// convert paths into absolute commands
	var paths = newDoc.getElementsByTagNameNS(NS.SVG, "path");
	for (var i = 0, len = paths.length; i < len; ++i) {
		var path = paths[i];
		path.setAttribute('d', pathActions.convertPath(path));
		pathActions.fixEnd(path);
	}
};

// Function: ffClone
// Hack for Firefox bugs where text element features aren't updated or get 
// messed up. See issue 136 and issue 137.
// This function clones the element and re-selects it 
// TODO: Test for this bug on load and add it to "support" object instead of 
// browser sniffing
//
// Parameters: 
// elem - The (text) DOM element to clone
var ffClone = function(elem) {
	if (!svgedit.browser.isGecko()) return elem;
	var clone = elem.cloneNode(true);
	elem.parentNode.insertBefore(clone, elem);
	elem.parentNode.removeChild(elem);
	selectorManager.releaseSelector(elem);
	selectedElements[0] = clone;
	selectorManager.requestSelector(clone).showGrips(true);
	return clone;
};


// this.each is deprecated, if any extension used this it can be recreated by doing this:
// $(canvas.getRootElem()).children().each(...)

// this.each = function(cb) {
// 	$(svgroot).children().each(cb);
// };


// Function: setRotationAngle
// Removes any old rotations if present, prepends a new rotation at the
// transformed center
//
// Parameters:
// val - The new rotation angle in degrees
// preventUndo - Boolean indicating whether the action should be undoable or not
this.setRotationAngle = function(val, preventUndo) {
	// ensure val is the proper type
	val = parseFloat(val);
	var elem = selectedElements[0];
	var oldTransform = elem.getAttribute("transform");
	var bbox = svgedit.utilities.getBBox(elem);
	var cx = bbox.x+bbox.width/2, cy = bbox.y+bbox.height/2;
	var tlist = svgedit.transformlist.getTransformList(elem);
	
	// only remove the real rotational transform if present (i.e. at index=0)
	if (tlist.numberOfItems > 0) {
		var xform = tlist.getItem(0);
		if (xform.type == 4) {
			tlist.removeItem(0);
		}
	}
	// find R_nc and insert it
	if (val != 0) {
		var center = svgedit.math.transformPoint(cx, cy, svgedit.math.transformListToTransform(tlist).matrix);
		var R_nc = svgroot.createSVGTransform();
		R_nc.setRotate(val, center.x, center.y);
		if (tlist.numberOfItems) {
			tlist.insertItemBefore(R_nc, 0);
		} else {
			tlist.appendItem(R_nc);
		}
	} else if (tlist.numberOfItems == 0) {
		elem.removeAttribute("transform");
	}
	
	if (!preventUndo) {
		// we need to undo it, then redo it so it can be undo-able! :)
		// TODO: figure out how to make changes to transform list undo-able cross-browser?
		var newTransform = elem.getAttribute("transform");
		elem.setAttribute("transform", oldTransform);
		changeSelectedAttribute("transform", newTransform, selectedElements);
		call("changed", selectedElements);
	}
	var pointGripContainer = svgedit.utilities.getElem("pathpointgrip_container");
// 		if (elem.nodeName == "path" && pointGripContainer) {
// 			pathActions.setPointContainerTransform(elem.getAttribute("transform"));
// 		}
	var selector = selectorManager.requestSelector(selectedElements[0]);
	selector.resize();
	selector.updateGripCursors(val);
};

// Function: recalculateAllSelectedDimensions
// Runs recalculateDimensions on the selected elements, 
// adding the changes to a single batch command
var recalculateAllSelectedDimensions = this.recalculateAllSelectedDimensions = function() {
	var text = (current_resize_mode == "none" ? "position" : "size");
	var batchCmd = new svgedit.history.BatchCommand(text);

	var i = selectedElements.length;
	while (i--) {
		var elem = selectedElements[i];
// 			if (svgedit.utilities.getRotationAngle(elem) && !svgedit.math.hasMatrixTransform(getTransformList(elem))) continue;
		var cmd = svgedit.recalculate.recalculateDimensions(elem);
		if (cmd) {
			batchCmd.addSubCommand(cmd);
		}
	}

	if (!batchCmd.isEmpty()) {
		addCommandToHistory(batchCmd);
		call("changed", selectedElements);
	}
};

// this is how we map paths to our preferred relative segment types
var pathMap = [0, 'z', 'M', 'm', 'L', 'l', 'C', 'c', 'Q', 'q', 'A', 'a', 
					'H', 'h', 'V', 'v', 'S', 's', 'T', 't'];
					
// Debug tool to easily see the current matrix in the browser's console
var logMatrix = function(m) {
	console.log([m.a, m.b, m.c, m.d, m.e, m.f]);
};

// Root Current Transformation Matrix in user units
var root_sctm = null;

// Group: Selection

// Function: clearSelection
// Clears the selection.  The 'selected' handler is then called.
// Parameters: 
// noCall - Optional boolean that when true does not call the "selected" handler
var clearSelection = this.clearSelection = function(noCall) {
	if (selectedElements[0] != null) {
		var len = selectedElements.length;
		for (var i = 0; i < len; ++i) {
			var elem = selectedElements[i];
			if (elem == null) break;
			selectorManager.releaseSelector(elem);
			selectedElements[i] = null;
		}
//		selectedBBoxes[0] = null;
	}
	if (!noCall) call("selected", selectedElements);
};

// TODO: do we need to worry about selectedBBoxes here?


// Function: addToSelection
// Adds a list of elements to the selection.  The 'selected' handler is then called.
//
// Parameters:
// elemsToAdd - an array of DOM elements to add to the selection
// showGrips - a boolean flag indicating whether the resize grips should be shown
var addToSelection = this.addToSelection = function(elemsToAdd, showGrips) {
	if (elemsToAdd.length == 0) { return; }
	// find the first null in our selectedElements array
	var j = 0;
	
	while (j < selectedElements.length) {
		if (selectedElements[j] == null) { 
			break;
		}
		++j;
	}

	// now add each element consecutively
	var i = elemsToAdd.length;
	while (i--) {
		var elem = elemsToAdd[i];
		if (!elem || !svgedit.utilities.getBBox(elem)) continue;

		if (elem.tagName === 'a' && elem.childNodes.length === 1) {
			// Make "a" element's child be the selected element 
			elem = elem.firstChild;
		}

		// if it's not already there, add it
		if (selectedElements.indexOf(elem) == -1) {

			selectedElements[j] = elem;

			// only the first selectedBBoxes element is ever used in the codebase these days
//			if (j == 0) selectedBBoxes[0] = svgedit.utilities.getBBox(elem);
			j++;
			var sel = selectorManager.requestSelector(elem);
	
			if (selectedElements.length > 1) {
				sel.showGrips(false);
			}
		}
	}
	call("selected", selectedElements);
	
	if (showGrips || selectedElements.length == 1) {
		selectorManager.requestSelector(selectedElements[0]).showGrips(true);
	}
	else {
		selectorManager.requestSelector(selectedElements[0]).showGrips(false);
	}

	// make sure the elements are in the correct order
	// See: http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-compareDocumentPosition

	selectedElements.sort(function(a, b) {
		if (a && b && a.compareDocumentPosition) {
			return 3 - (b.compareDocumentPosition(a) & 6);	
		}
		if (a == null) {
			return 1;
		}
	});
	
	// Make sure first elements are not null
	while (selectedElements[0] == null) selectedElements.shift(0);
};

// Function: selectOnly()
// Selects only the given elements, shortcut for clearSelection(); addToSelection()
//
// Parameters:
// elems - an array of DOM elements to be selected
var selectOnly = this.selectOnly = function(elems, showGrips) {
	clearSelection(true);
	addToSelection(elems, showGrips);
};

// TODO: could use slice here to make this faster?
// TODO: should the 'selected' handler

// Function: removeFromSelection
// Removes elements from the selection.
//
// Parameters:
// elemsToRemove - an array of elements to remove from selection
var removeFromSelection = this.removeFromSelection = function(elemsToRemove) {
	if (selectedElements[0] == null) { return; }
	if (elemsToRemove.length == 0) { return; }

	// find every element and remove it from our array copy
	var newSelectedItems = new Array(selectedElements.length);
		j = 0,
		len = selectedElements.length;
	for (var i = 0; i < len; ++i) {
		var elem = selectedElements[i];
		if (elem) {
			// keep the item
			if (elemsToRemove.indexOf(elem) == -1) {
				newSelectedItems[j] = elem;
				j++;
			} else { // remove the item and its selector
				selectorManager.releaseSelector(elem);
			}
		}
	}
	// the copy becomes the master now
	selectedElements = newSelectedItems;
};

// Function: selectAllInCurrentLayer
// Clears the selection, then adds all elements in the current layer to the selection.
this.selectAllInCurrentLayer = function() {
	var current_layer = getCurrentDrawing().getCurrentLayer();
	if (current_layer) {
		current_mode = "select";
		selectOnly($(current_group || current_layer).children());
	}
};

// Function: getMouseTarget
// Gets the desired element from a mouse event
// 
// Parameters:
// evt - Event object from the mouse event
// 
// Returns:
// DOM element we want
var getMouseTarget = this.getMouseTarget = function(evt) {
	if (evt == null) {
		return null;
	}
	var mouse_target = evt.target;
	
	// if it was a <use>, Opera and WebKit return the SVGElementInstance
	if (mouse_target.correspondingUseElement) mouse_target = mouse_target.correspondingUseElement;
	
	// for foreign content, go up until we find the foreignObject
	// WebKit browsers set the mouse target to the svgcanvas div 
	if ([NS.MATH, NS.HTML].indexOf(mouse_target.namespaceURI) >= 0 && 
		mouse_target.id != "svgcanvas") 
	{
		while (mouse_target.nodeName != "foreignObject") {
			mouse_target = mouse_target.parentNode;
			if (!mouse_target) return svgroot;
		}
	}
	
	// Get the desired mouse_target with jQuery selector-fu
	// If it's root-like, select the root
	var current_layer = getCurrentDrawing().getCurrentLayer();
	if ([svgroot, container, svgcontent, current_layer].indexOf(mouse_target) >= 0) {
		return svgroot;
	}
	
	var $target = $(mouse_target);

	// If it's a selection grip, return the grip parent
	if ($target.closest('#selectorParentGroup').length) {
		// While we could instead have just returned mouse_target, 
		// this makes it easier to indentify as being a selector grip
		return selectorManager.selectorParentGroup;
	}

	while (mouse_target.parentNode !== (current_group || current_layer)) {
		mouse_target = mouse_target.parentNode;
	}
	
// 	
// 	// go up until we hit a child of a layer
// 	while (mouse_target.parentNode.parentNode.tagName == 'g') {
// 		mouse_target = mouse_target.parentNode;
// 	}
	// Webkit bubbles the mouse event all the way up to the div, so we
	// set the mouse_target to the svgroot like the other browsers
// 	if (mouse_target.nodeName.toLowerCase() == "div") {
// 		mouse_target = svgroot;
// 	}
	
	return mouse_target;
};

// Mouse events
(function() {
	var d_attr = null,
		start_x = null,
		start_y = null,
		r_start_x = null,
		r_start_y = null,
		init_bbox = {},
		freehand = {
			minx: null,
			miny: null,
			maxx: null,
			maxy: null
		},
		sumDistance = 0,
		controllPoint2 = {x:0, y:0},
		controllPoint1 = {x:0, y:0},
		start = {x:0, y:0},
		end = {x:0, y:0},
		parameter,
		nextParameter,
		bSpline = {x:0, y:0},
		nextPos = {x:0, y:0},
		THRESHOLD_DIST = 0.8,
		STEP_COUNT = 10;

	var getBsplinePoint = function(t) {
		var spline = {x:0, y:0},
			p0 = controllPoint2,
			p1 = controllPoint1,
			p2 = start,
			p3 = end,
			S = 1.0 / 6.0,
			t2 = t * t,
			t3 = t2 * t;

		var m = Array
			(
				Array(-1, 3, -3, 1),
				Array(3, -6, 3, 0),
				Array(-3, 0, 3, 0),
				Array(1, 4, 1, 0)
			);

		spline.x = S * (
			(p0.x * m[0][0] + p1.x * m[0][1] + p2.x * m[0][2] + p3.x * m[0][3] ) * t3 +
				(p0.x * m[1][0] + p1.x * m[1][1] + p2.x * m[1][2] + p3.x * m[1][3] ) * t2 +
				(p0.x * m[2][0] + p1.x * m[2][1] + p2.x * m[2][2] + p3.x * m[2][3] ) * t +
				(p0.x * m[3][0] + p1.x * m[3][1] + p2.x * m[3][2] + p3.x * m[3][3] )   );
		spline.y = S * (
			(p0.y * m[0][0] + p1.y * m[0][1] + p2.y * m[0][2] + p3.y * m[0][3] ) * t3 +
				(p0.y * m[1][0] + p1.y * m[1][1] + p2.y * m[1][2] + p3.y * m[1][3] ) * t2 +
				(p0.y * m[2][0] + p1.y * m[2][1] + p2.y * m[2][2] + p3.y * m[2][3] ) * t +
				(p0.y * m[3][0] + p1.y * m[3][1] + p2.y * m[3][2] + p3.y * m[3][3] )   );

		return {
			x:spline.x,
			y:spline.y
		};
	};
	// - when we are in a create mode, the element is added to the canvas
	//   but the action is not recorded until mousing up
	// - when we are in select mode, select the element, remember the position
	//   and do nothing else
	var mouseDown = function(evt)
	{
		if (canvas.spaceKey || evt.button === 1) return;
		
		var right_click = evt.button === 2;
	
		if (evt.altKey) { // duplicate when  dragging
			svgCanvas.cloneSelectedElements(0, 0);
		}
	
		root_sctm = $('#svgcontent g')[0].getScreenCTM().inverse();
		
		var pt = svgedit.math.transformPoint( evt.pageX, evt.pageY, root_sctm ),
			mouse_x = pt.x * current_zoom,
			mouse_y = pt.y * current_zoom;
			
		evt.preventDefault();

		if (right_click) {
			current_mode = "select";
			lastClickPoint = pt;
		}
		
		// This would seem to be unnecessary...
// 		if (['select', 'resize'].indexOf(current_mode) == -1) {
// 			setGradient();
// 		}
		
		var x = mouse_x / current_zoom,
			y = mouse_y / current_zoom,
			mouse_target = getMouseTarget(evt);
		
		if (mouse_target.tagName === 'a' && mouse_target.childNodes.length === 1) {
			mouse_target = mouse_target.firstChild;
		}
		
		// real_x/y ignores grid-snap value
		var real_x = r_start_x = start_x = x;
		var real_y = r_start_y = start_y = y;

		if (curConfig.gridSnapping){
			x = svgedit.utilities.snapToGrid(x);
			y = svgedit.utilities.snapToGrid(y);
			start_x = svgedit.utilities.snapToGrid(start_x);
			start_y = svgedit.utilities.snapToGrid(start_y);
		}

		// if it is a selector grip, then it must be a single element selected, 
		// set the mouse_target to that and update the mode to rotate/resize
		
		if (mouse_target == selectorManager.selectorParentGroup && selectedElements[0] != null) {
			var grip = evt.target;
			var griptype = elData(grip, "type");
			// rotating
			if (griptype == "rotate") {
				current_mode = "rotate";
			}
			// resizing
			else if (griptype == "resize") {
				current_mode = "resize";
				current_resize_mode = elData(grip, "dir");
			}
			mouse_target = selectedElements[0];
		}
		
		startTransform = mouse_target.getAttribute("transform");
		var tlist = svgedit.transformlist.getTransformList(mouse_target);
		switch (current_mode) {
			case "select":
				started = true;
				current_resize_mode = "none";
				if (right_click) started = false;
				
				if (mouse_target != svgroot) {
					// if this element is not yet selected, clear selection and select it
					if (selectedElements.indexOf(mouse_target) == -1) {
						// only clear selection if shift is not pressed (otherwise, add 
						// element to selection)
						if (!evt.shiftKey) {
							// No need to do the call here as it will be done on addToSelection
							clearSelection(true);
						}
						addToSelection([mouse_target]);
						justSelected = mouse_target;
						pathActions.clear();
					}
					// else if it's a path, go into pathedit mode in mouseup
					
					if (!right_click) {
						// insert a dummy transform so if the element(s) are moved it will have
						// a transform to use for its translate
						for (var i = 0; i < selectedElements.length; ++i) {
							if (selectedElements[i] == null) continue;
							var slist = svgedit.transformlist.getTransformList(selectedElements[i]);
							if (slist.numberOfItems) {
								slist.insertItemBefore(svgroot.createSVGTransform(), 0);
							} else {
								slist.appendItem(svgroot.createSVGTransform());
							}
						}
					}
				} else if (!right_click){
					clearSelection();
					current_mode = "multiselect";
					if (rubberBox == null) {
						rubberBox = selectorManager.getRubberBandBox();
					}
					r_start_x *= current_zoom;
					r_start_y *= current_zoom;
// 					console.log('p',[evt.pageX, evt.pageY]);					
// 					console.log('c',[evt.clientX, evt.clientY]);	
// 					console.log('o',[evt.offsetX, evt.offsetY]);	
// 					console.log('s',[start_x, start_y]);
					
					svgedit.utilities.assignAttributes(rubberBox, {
						'x': r_start_x,
						'y': r_start_y,
						'width': 0,
						'height': 0,
						'display': 'inline'
					}, 100);
				}
				break;
			case "zoom": 
				started = true;
				if (rubberBox == null) {
					rubberBox = selectorManager.getRubberBandBox();
				}
				svgedit.utilities.assignAttributes(rubberBox, {
						'x': real_x * current_zoom,
						'y': real_x * current_zoom,
						'width': 0,
						'height': 0,
						'display': 'inline'
				}, 100);
				break;
			case "resize":
				started = true;
				start_x = x;
				start_y = y;
				
				// Getting the BBox from the selection box, since we know we
				// want to orient around it
				init_bbox = svgedit.utilities.getBBox($('#selectedBox0')[0]);
				var bb = {};
				$.each(init_bbox, function(key, val) {
					bb[key] = val/current_zoom;
				});
				init_bbox = bb;
				
				// append three dummy transforms to the tlist so that
				// we can translate,scale,translate in mousemove
				var pos = svgedit.utilities.getRotationAngle(mouse_target) ? 1 : 0;
				
				if (svgedit.math.hasMatrixTransform(tlist)) {
					tlist.insertItemBefore(svgroot.createSVGTransform(), pos);
					tlist.insertItemBefore(svgroot.createSVGTransform(), pos);
					tlist.insertItemBefore(svgroot.createSVGTransform(), pos);
				} else {
					tlist.appendItem(svgroot.createSVGTransform());
					tlist.appendItem(svgroot.createSVGTransform());
					tlist.appendItem(svgroot.createSVGTransform());
					
					if (svgedit.browser.supportsNonScalingStroke()) {
						// Handle crash for newer Chrome and Safari 6 (Mobile and Desktop): 
						// https://code.google.com/p/svg-edit/issues/detail?id=904
						// Chromium issue: https://code.google.com/p/chromium/issues/detail?id=114625
						// TODO: Remove this workaround once vendor fixes the issue
						var isWebkit = svgedit.browser.isWebkit();

						if (isWebkit) {
							var delayedStroke = function(ele) {
								var _stroke = ele.getAttributeNS(null, 'stroke');
								ele.removeAttributeNS(null, 'stroke');
								//Re-apply stroke after delay. Anything higher than 1 seems to cause flicker
								setTimeout(function() { ele.setAttributeNS(null, 'stroke', _stroke); }, 0);
							};
						}
						mouse_target.style.vectorEffect = 'non-scaling-stroke';
						if (isWebkit) delayedStroke(mouse_target);

						var all = mouse_target.getElementsByTagName('*'),
							len = all.length;
						for (var i = 0; i < len; i++) {
							all[i].style.vectorEffect = 'non-scaling-stroke';
							if (isWebkit) delayedStroke(all[i]);
						}
					}
				}
				break;
			case "fhellipse":
			case "fhrect":
			case "fhpath":
				start.x = real_x;
				start.y = real_y;
				started = true;
				d_attr = real_x + "," + real_y + " ";
				var stroke_w = cur_shape.stroke_width == 0 ? 1 : cur_shape.stroke_width;
				addSvgElementFromJson({
					"element": "polyline",
					"curStyles": true,
					"attr": {
						"points": d_attr,
						"id": getNextId(),
						"fill": "none",
						"opacity": cur_shape.opacity / 2,
						"stroke-linecap": "round",
						"style": "pointer-events:none"
					}
				});
				freehand.minx = real_x;
				freehand.maxx = real_x;
				freehand.miny = real_y;
				freehand.maxy = real_y;
				break;
			case "image":
				started = true;
				var newImage = addSvgElementFromJson({
					"element": "image",
					"attr": {
						"x": x,
						"y": y,
						"width": 0,
						"height": 0,
						"id": getNextId(),
						"opacity": cur_shape.opacity / 2,
						"style": "pointer-events:inherit"
					}
				});
				setHref(newImage, last_good_img_url);
				preventClickDefault(newImage);
				break;
			case "square":
				// FIXME: once we create the rect, we lose information that this was a square
				// (for resizing purposes this could be important)
			case "rect":
				started = true;
				start_x = x;
				start_y = y;
				addSvgElementFromJson({
					"element": "rect",
					"curStyles": true,
					"attr": {
						"x": x,
						"y": y,
						"width": 0,
						"height": 0,
						"id": getNextId(),
						"opacity": cur_shape.opacity / 2
					}
				});
				break;
			case "line":
				started = true;
				var stroke_w = cur_shape.stroke_width == 0 ? 1 : cur_shape.stroke_width;
				addSvgElementFromJson({
					"element": "line",
					"curStyles": true,
					"attr": {
						"x1": x,
						"y1": y,
						"x2": x,
						"y2": y,
						"id": getNextId(),
						"stroke": cur_shape.stroke,
						"stroke-width": stroke_w,
						"stroke-dasharray": cur_shape.stroke_dasharray,
						"stroke-linejoin": cur_shape.stroke_linejoin,
						"stroke-linecap": cur_shape.stroke_linecap,
						"stroke-opacity": cur_shape.stroke_opacity,
						"fill": "none",
						"opacity": cur_shape.opacity / 2,
						"style": "pointer-events:none"
					}
				});
				break;
			case "circle":
				started = true;
				addSvgElementFromJson({
					"element": "circle",
					"curStyles": true,
					"attr": {
						"cx": x,
						"cy": y,
						"r": 0,
						"id": getNextId(),
						"opacity": cur_shape.opacity / 2
					}
				});
				break;
			case "ellipse":
				started = true;
				addSvgElementFromJson({
					"element": "ellipse",
					"curStyles": true,
					"attr": {
						"cx": x,
						"cy": y,
						"rx": 0,
						"ry": 0,
						"id": getNextId(),
						"opacity": cur_shape.opacity / 2
					}
				});
				break;
			case "text":
				started = true;
				var newText = addSvgElementFromJson({
					"element": "text",
					"curStyles": true,
					"attr": {
						"x": x,
						"y": y,
						"id": getNextId(),
						"fill": cur_text.fill,
						"stroke-width": cur_text.stroke_width,
						"font-size": cur_text.font_size,
						"font-family": cur_text.font_family,
						"text-anchor": "middle",
						"xml:space": "preserve",
						"opacity": cur_shape.opacity
					}
				});
// 					newText.textContent = "text";
				break;
			case "path":
				// Fall through
			case "pathedit":
				start_x *= current_zoom;
				start_y *= current_zoom;
				pathActions.mouseDown(evt, mouse_target, start_x, start_y);
				started = true;
				break;
			case "textedit":
				start_x *= current_zoom;
				start_y *= current_zoom;
				textActions.mouseDown(evt, mouse_target, start_x, start_y);
				started = true;
				break;
			case "rotate":
				started = true;
				// we are starting an undoable change (a drag-rotation)
				canvas.undoMgr.beginUndoableChange("transform", selectedElements);
				break;
			default:
				// This could occur in an extension
				break;
		}
		
		var ext_result = runExtensions("mouseDown", {
			event: evt,
			start_x: start_x,
			start_y: start_y,
			selectedElements: selectedElements
		}, true);
		
		$.each(ext_result, function(i, r) {
			if (r && r.started) {
				started = true;
			}
		});
	};
	
	// in this function we do not record any state changes yet (but we do update
	// any elements that are still being created, moved or resized on the canvas)
	var mouseMove = function(evt)
	{
		if (!started) return;
		if (evt.button === 1 || canvas.spaceKey) return;

		var selected = selectedElements[0],
			pt = svgedit.math.transformPoint( evt.pageX, evt.pageY, root_sctm ),
			mouse_x = pt.x * current_zoom,
			mouse_y = pt.y * current_zoom,
			shape = svgedit.utilities.getElem(getId());

		var real_x = x = mouse_x / current_zoom;
		var real_y = y = mouse_y / current_zoom;

		if (curConfig.gridSnapping){
			x = svgedit.utilities.snapToGrid(x);
			y = svgedit.utilities.snapToGrid(y);
		}

		evt.preventDefault();
		
		switch (current_mode) {
			case "select":
				// we temporarily use a translate on the element(s) being dragged
				// this transform is removed upon mousing up and the element is 
				// relocated to the new location
				if (selectedElements[0] !== null) {
					var dx = x - start_x;
					var dy = y - start_y;
					
					if (curConfig.gridSnapping){
						dx = svgedit.utilities.snapToGrid(dx);
						dy = svgedit.utilities.snapToGrid(dy);
					}

					if (evt.shiftKey) { 
						var xya = svgedit.math.snapToAngle(start_x, start_y, x, y);
						x = xya.x;
						y = xya.y; 
					}

					if (dx != 0 || dy != 0) {
						var len = selectedElements.length;
						for (var i = 0; i < len; ++i) {
							var selected = selectedElements[i];
							if (selected == null) break;
//							if (i==0) {
//								var box = svgedit.utilities.getBBox(selected);
// 									selectedBBoxes[i].x = box.x + dx;
// 									selectedBBoxes[i].y = box.y + dy;
//							}

							// update the dummy transform in our transform list
							// to be a translate
							var xform = svgroot.createSVGTransform();
							var tlist = svgedit.transformlist.getTransformList(selected);
							// Note that if Webkit and there's no ID for this
							// element, the dummy transform may have gotten lost.
							// This results in unexpected behaviour
							
							xform.setTranslate(dx, dy);
							if (tlist.numberOfItems) {
								tlist.replaceItem(xform, 0);
							} else {
								tlist.appendItem(xform);
							}
							
							// update our internal bbox that we're tracking while dragging
							selectorManager.requestSelector(selected).resize();
						}
						
						call("transition", selectedElements);
					}
				}
				break;
			case "multiselect":
				real_x *= current_zoom;
				real_y *= current_zoom;
				svgedit.utilities.assignAttributes(rubberBox, {
					'x': Math.min(r_start_x, real_x),
					'y': Math.min(r_start_y, real_y),
					'width': Math.abs(real_x - r_start_x),
					'height': Math.abs(real_y - r_start_y)
				}, 100);

				// for each selected:
				// - if newList contains selected, do nothing
				// - if newList doesn't contain selected, remove it from selected
				// - for any newList that was not in selectedElements, add it to selected
				var elemsToRemove = [], elemsToAdd = [],
					newList = getIntersectionList(),
					len = selectedElements.length;
				
				for (var i = 0; i < len; ++i) {
					var ind = newList.indexOf(selectedElements[i]);
					if (ind == -1) {
						elemsToRemove.push(selectedElements[i]);
					} else {
						newList[ind] = null;
					}
				}
				
				len = newList.length;
				for (i = 0; i < len; ++i) { if (newList[i]) elemsToAdd.push(newList[i]); }
				
				if (elemsToRemove.length > 0) 
					canvas.removeFromSelection(elemsToRemove);
				
				if (elemsToAdd.length > 0) 
					addToSelection(elemsToAdd);
					
				break;
			case "resize":
				// we track the resize bounding box and translate/scale the selected element
				// while the mouse is down, when mouse goes up, we use this to recalculate
				// the shape's coordinates
				var tlist = svgedit.transformlist.getTransformList(selected),
					hasMatrix = svgedit.math.hasMatrixTransform(tlist),
					box = hasMatrix ? init_bbox : svgedit.utilities.getBBox(selected), 
					left = box.x, top = box.y, width = box.width,
					height = box.height, dx = (x-start_x), dy = (y-start_y);
				
				if (curConfig.gridSnapping){
					dx = svgedit.utilities.snapToGrid(dx);
					dy = svgedit.utilities.snapToGrid(dy);
					height = svgedit.utilities.snapToGrid(height);
					width = svgedit.utilities.snapToGrid(width);
				}

				// if rotated, adjust the dx,dy values
				var angle = svgedit.utilities.getRotationAngle(selected);
				if (angle) {
					var r = Math.sqrt( dx*dx + dy*dy ),
						theta = Math.atan2(dy, dx) - angle * Math.PI / 180.0;
					dx = r * Math.cos(theta);
					dy = r * Math.sin(theta);
				}

				// if not stretching in y direction, set dy to 0
				// if not stretching in x direction, set dx to 0
				if (current_resize_mode.indexOf("n")==-1 && current_resize_mode.indexOf("s")==-1) {
					dy = 0;
				}
				if (current_resize_mode.indexOf("e")==-1 && current_resize_mode.indexOf("w")==-1) {
					dx = 0;
				}				
				
				var ts = null,
					tx = 0, ty = 0,
					sy = height ? (height+dy)/height : 1, 
					sx = width ? (width+dx)/width : 1;
				// if we are dragging on the north side, then adjust the scale factor and ty
				if (current_resize_mode.indexOf("n") >= 0) {
					sy = height ? (height-dy)/height : 1;
					ty = height;
				}
				
				// if we dragging on the east side, then adjust the scale factor and tx
				if (current_resize_mode.indexOf("w") >= 0) {
					sx = width ? (width-dx)/width : 1;
					tx = width;
				}
				
				// update the transform list with translate,scale,translate
				var translateOrigin = svgroot.createSVGTransform(),
					scale = svgroot.createSVGTransform(),
					translateBack = svgroot.createSVGTransform();

				if (curConfig.gridSnapping){
					left = svgedit.utilities.snapToGrid(left);
					tx = svgedit.utilities.snapToGrid(tx);
					top = svgedit.utilities.snapToGrid(top);
					ty = svgedit.utilities.snapToGrid(ty);
				}

				translateOrigin.setTranslate(-(left+tx), -(top+ty));
				if (evt.shiftKey) {
					if (sx == 1) sx = sy;
					else sy = sx;
				}
				scale.setScale(sx, sy);
				
				translateBack.setTranslate(left+tx, top+ty);
				if (hasMatrix) {
					var diff = angle?1:0;
					tlist.replaceItem(translateOrigin, 2+diff);
					tlist.replaceItem(scale, 1+diff);
					tlist.replaceItem(translateBack, 0+diff);
				} else {
					var N = tlist.numberOfItems;
					tlist.replaceItem(translateBack, N-3);
					tlist.replaceItem(scale, N-2);
					tlist.replaceItem(translateOrigin, N-1);
				}

				selectorManager.requestSelector(selected).resize();
				
				call("transition", selectedElements);
				
				break;
			case "zoom":
				real_x *= current_zoom;
				real_y *= current_zoom;
				svgedit.utilities.assignAttributes(rubberBox, {
					'x': Math.min(r_start_x*current_zoom, real_x),
					'y': Math.min(r_start_y*current_zoom, real_y),
					'width': Math.abs(real_x - r_start_x*current_zoom),
					'height': Math.abs(real_y - r_start_y*current_zoom)
				}, 100);			
				break;
			case "text":
				svgedit.utilities.assignAttributes(shape,{
					'x': x,
					'y': y
				}, 1000);
				break;
			case "line":
				// Opera has a problem with suspendRedraw() apparently
				var handle = null;
				if (!window.opera) svgroot.suspendRedraw(1000);

				if (curConfig.gridSnapping){
					x = svgedit.utilities.snapToGrid(x);
					y = svgedit.utilities.snapToGrid(y);
				}

				var x2 = x;
				var y2 = y;					

				if (evt.shiftKey) {
					var xya = svgedit.math.snapToAngle(start_x, start_y, x2, y2);
					x2 = xya.x;
					y2 = xya.y;
				}
				
				shape.setAttributeNS(null, "x2", x2);
				shape.setAttributeNS(null, "y2", y2);
				if (!window.opera) svgroot.unsuspendRedraw(handle);
				break;
			case "foreignObject":
				// fall through
			case "square":
				// fall through
			case "rect":
				// fall through
			case "image":
				var square = (current_mode == 'square') || evt.shiftKey,
					w = Math.abs(x - start_x),
					h = Math.abs(y - start_y),
					new_x, new_y;
				if (square) {
					w = h = Math.max(w, h);
					new_x = start_x < x ? start_x : start_x - w;
					new_y = start_y < y ? start_y : start_y - h;
				} else {
					new_x = Math.min(start_x, x);
					new_y = Math.min(start_y, y);
				}
	
				if (curConfig.gridSnapping){
					w = svgedit.utilities.snapToGrid(w);
					h = svgedit.utilities.snapToGrid(h);
					new_x = svgedit.utilities.snapToGrid(new_x);
					new_y = svgedit.utilities.snapToGrid(new_y);
				}

				svgedit.utilities.assignAttributes(shape,{
					'width': w,
					'height': h,
					'x': new_x,
					'y': new_y
				},1000);
				
				break;
			case "circle":
				var c = $(shape).attr(["cx", "cy"]);
				var cx = c.cx, cy = c.cy,
					rad = Math.sqrt( (x-cx)*(x-cx) + (y-cy)*(y-cy) );
				if (curConfig.gridSnapping){
					rad = svgedit.utilities.snapToGrid(rad);
				}
				shape.setAttributeNS(null, "r", rad);
				break;
			case "ellipse":
				var c = $(shape).attr(["cx", "cy"]);
				var cx = c.cx, cy = c.cy;
				// Opera has a problem with suspendRedraw() apparently
					handle = null;
				if (!window.opera) svgroot.suspendRedraw(1000);
				if (curConfig.gridSnapping){
					x = svgedit.utilities.snapToGrid(x);
					cx = svgedit.utilities.snapToGrid(cx);
					y = svgedit.utilities.snapToGrid(y);
					cy = svgedit.utilities.snapToGrid(cy);
				}
				shape.setAttributeNS(null, "rx", Math.abs(x - cx) );
				var ry = Math.abs(evt.shiftKey?(x - cx):(y - cy));
				shape.setAttributeNS(null, "ry", ry );
				if (!window.opera) svgroot.unsuspendRedraw(handle);
				break;
			case "fhellipse":
			case "fhrect":
				freehand.minx = Math.min(real_x, freehand.minx);
				freehand.maxx = Math.max(real_x, freehand.maxx);
				freehand.miny = Math.min(real_y, freehand.miny);
				freehand.maxy = Math.max(real_y, freehand.maxy);
			// break; missing on purpose
			case "fhpath":
//				d_attr += + real_x + "," + real_y + " ";
//				shape.setAttributeNS(null, "points", d_attr);
				end.x = real_x; end.y = real_y;
				if (controllPoint2.x && controllPoint2.y){
					for (var i = 0; i < STEP_COUNT - 1; i++) {
						parameter = i / STEP_COUNT;
						nextParameter = (i + 1) / STEP_COUNT;
						bSpline = getBsplinePoint(nextParameter);
						nextPos = bSpline;
						bSpline = getBsplinePoint(parameter);
						sumDistance += Math.sqrt((nextPos.x - bSpline.x) * (nextPos.x - bSpline.x) + (nextPos.y - bSpline.y) * (nextPos.y - bSpline.y));
						if (sumDistance > THRESHOLD_DIST) {
							d_attr += + bSpline.x + "," + bSpline.y + " ";
							shape.setAttributeNS(null, "points", d_attr);
							sumDistance -= THRESHOLD_DIST;
						}
					}
				}
				controllPoint2 = {x:controllPoint1.x, y:controllPoint1.y};
				controllPoint1 = {x:start.x, y:start.y};
				start = {x:end.x, y:end.y};
				break;
			// update path stretch line coordinates
			case "path":
				// fall through
			case "pathedit":
				x *= current_zoom;
				y *= current_zoom;
				
				if (curConfig.gridSnapping){
					x = svgedit.utilities.snapToGrid(x);
					y = svgedit.utilities.snapToGrid(y);
					start_x = svgedit.utilities.snapToGrid(start_x);
					start_y = svgedit.utilities.snapToGrid(start_y);
				}
				if (evt.shiftKey) {
					var path = svgedit.path.path;
					if (path) {
						var x1 = path.dragging?path.dragging[0]:start_x;
						var y1 = path.dragging?path.dragging[1]:start_y;
					} else {
						var x1 = start_x;
						var y1 = start_y;
					}
					var xya = svgedit.math.snapToAngle(x1, y1, x, y);
					x = xya.x;
					y = xya.y;
				}
				
				if (rubberBox && rubberBox.getAttribute('display') !== 'none') {
					real_x *= current_zoom;
					real_y *= current_zoom;
					svgedit.utilities.assignAttributes(rubberBox, {
						'x': Math.min(r_start_x*current_zoom, real_x),
						'y': Math.min(r_start_y*current_zoom, real_y),
						'width': Math.abs(real_x - r_start_x*current_zoom),
						'height': Math.abs(real_y - r_start_y*current_zoom)
					},100);	
				}
				pathActions.mouseMove(x, y);
				
				break;
			case "textedit":
				x *= current_zoom;
				y *= current_zoom;
// 					if (rubberBox && rubberBox.getAttribute('display') != 'none') {
// 						svgedit.utilities.assignAttributes(rubberBox, {
// 							'x': Math.min(start_x,x),
// 							'y': Math.min(start_y,y),
// 							'width': Math.abs(x-start_x),
// 							'height': Math.abs(y-start_y)
// 						},100);
// 					}
				
				textActions.mouseMove(mouse_x, mouse_y);
				
				break;
			case "rotate":
				var box = svgedit.utilities.getBBox(selected),
					cx = box.x + box.width/2, 
					cy = box.y + box.height/2,
					m = svgedit.math.getMatrix(selected),
					center = svgedit.math.transformPoint(cx, cy, m);
				cx = center.x;
				cy = center.y;
				var angle = ((Math.atan2(cy-y, cx-x)  * (180/Math.PI))-90) % 360;
				if (curConfig.gridSnapping){
					angle = svgedit.utilities.snapToGrid(angle);
				}
				if (evt.shiftKey) { // restrict rotations to nice angles (WRS)
					var snap = 45;
					angle= Math.round(angle/snap)*snap;
				}

				canvas.setRotationAngle(angle<-180?(360+angle):angle, true);
				call("transition", selectedElements);
				break;
			default:
				break;
		}
		
		runExtensions("mouseMove", {
			event: evt,
			mouse_x: mouse_x,
			mouse_y: mouse_y,
			selected: selected
		});

	}; // mouseMove()
	
	// - in create mode, the element's opacity is set properly, we create an InsertElementCommand
	//   and store it on the Undo stack
	// - in move/resize mode, the element's attributes which were affected by the move/resize are
	//   identified, a ChangeElementCommand is created and stored on the stack for those attrs
	//   this is done in when we recalculate the selected dimensions()
	var mouseUp = function(evt) {
		if (evt.button === 2) return;
		var tempJustSelected = justSelected;
		justSelected = null;
		if (!started) return;
		var pt = svgedit.math.transformPoint( evt.pageX, evt.pageY, root_sctm ),
			mouse_x = pt.x * current_zoom,
			mouse_y = pt.y * current_zoom,
			x = mouse_x / current_zoom,
			y = mouse_y / current_zoom,
			element = svgedit.utilities.getElem(getId()),
			keep = false;

		var real_x = x;
		var real_y = y;

		// TODO: Make true when in multi-unit mode
		var useUnit = false; // (curConfig.baseUnit !== 'px');
		started = false;
		switch (current_mode)
		{
			// intentionally fall-through to select here
			case "resize":
			case "multiselect":
				if (rubberBox != null) {
					rubberBox.setAttribute("display", "none");
					curBBoxes = [];
				}
				current_mode = "select";
			case "select":
				if (selectedElements[0] != null) {
					// if we only have one selected element
					if (selectedElements[1] == null) {
						// set our current stroke/fill properties to the element's
						var selected = selectedElements[0];
						switch ( selected.tagName ) {
							case "g":
							case "use":
							case "image":
							case "foreignObject":
								break;
							default:
								cur_properties.fill = selected.getAttribute("fill");
								cur_properties.fill_opacity = selected.getAttribute("fill-opacity");
								cur_properties.stroke = selected.getAttribute("stroke");
								cur_properties.stroke_opacity = selected.getAttribute("stroke-opacity");
								cur_properties.stroke_width = selected.getAttribute("stroke-width");
								cur_properties.stroke_dasharray = selected.getAttribute("stroke-dasharray");
								cur_properties.stroke_linejoin = selected.getAttribute("stroke-linejoin");
								cur_properties.stroke_linecap = selected.getAttribute("stroke-linecap");
						}

						if (selected.tagName == "text") {
							cur_text.font_size = selected.getAttribute("font-size");
							cur_text.font_family = selected.getAttribute("font-family");
						}
						selectorManager.requestSelector(selected).showGrips(true);
						
						// This shouldn't be necessary as it was done on mouseDown...
// 							call("selected", [selected]);
					}
					// always recalculate dimensions to strip off stray identity transforms
					recalculateAllSelectedDimensions();
					// if it was being dragged/resized
					if (real_x != r_start_x || real_y != r_start_y) {
						var len = selectedElements.length;
						for	(var i = 0; i < len; ++i) {
							if (selectedElements[i] == null) break;
							if (!selectedElements[i].firstChild) {
								// Not needed for groups (incorrectly resizes elems), possibly not needed at all?
								selectorManager.requestSelector(selectedElements[i]).resize();
							}
						}
					}
					// no change in position/size, so maybe we should move to pathedit
					else {
						var t = evt.target;
						if (selectedElements[0].nodeName === "path" && selectedElements[1] == null) {
							pathActions.select(selectedElements[0]);
						} // if it was a path
						// else, if it was selected and this is a shift-click, remove it from selection
						else if (evt.shiftKey) {
							if (tempJustSelected != t) {
								canvas.removeFromSelection([t]);
							}
						}
					} // no change in mouse position
					
					// Remove non-scaling stroke
					if (svgedit.browser.supportsNonScalingStroke()) {
						var elem = selectedElements[0];
						if (elem) {
							elem.removeAttribute('style');
							svgedit.utilities.walkTree(elem, function(elem) {
								elem.removeAttribute('style');
							});
						}
					}

				}
				return;
				break;
			case "zoom":
				if (rubberBox != null) {
					rubberBox.setAttribute("display", "none");
				}
				var factor = evt.shiftKey?.5:2;
				call("zoomed", {
					'x': Math.min(r_start_x, real_x),
					'y': Math.min(r_start_y, real_y),
					'width': Math.abs(real_x - r_start_x),
					'height': Math.abs(real_y - r_start_y),
					'factor': factor
				});
				return;
			case "fhpath":
				// Check that the path contains at least 2 points; a degenerate one-point path
				// causes problems.
				// Webkit ignores how we set the points attribute with commas and uses space
				// to separate all coordinates, see https://bugs.webkit.org/show_bug.cgi?id=29870
				sumDistance = 0;
				controllPoint2 = {x:0, y:0};
				controllPoint1 = {x:0, y:0};
				start = {x:0, y:0};
				end = {x:0, y:0};
				var coords = element.getAttribute('points');
				var commaIndex = coords.indexOf(',');
				if (commaIndex >= 0) {
					keep = coords.indexOf(',', commaIndex+1) >= 0;
				} else {
					keep = coords.indexOf(' ', coords.indexOf(' ')+1) >= 0;
				}
				if (keep) {
					element = pathActions.smoothPolylineIntoPath(element);
				}
				break;
			case "line":
				var attrs = $(element).attr(["x1", "x2", "y1", "y2"]);
				keep = (attrs.x1 != attrs.x2 || attrs.y1 != attrs.y2);
				break;
			case "foreignObject":
			case "square":
			case "rect":
			case "image":
				var attrs = $(element).attr(["width", "height"]);
				// Image should be kept regardless of size (use inherit dimensions later)
				keep = (attrs.width != 0 || attrs.height != 0) || current_mode === "image";
				break;
			case "circle":
				keep = (element.getAttribute('r') != 0);
				break;
			case "ellipse":
				var attrs = $(element).attr(["rx", "ry"]);
				keep = (attrs.rx != null || attrs.ry != null);
				break;
			case "fhellipse":
				if ((freehand.maxx - freehand.minx) > 0 &&
					(freehand.maxy - freehand.miny) > 0) {
					element = addSvgElementFromJson({
						"element": "ellipse",
						"curStyles": true,
						"attr": {
							"cx": (freehand.minx + freehand.maxx) / 2,
							"cy": (freehand.miny + freehand.maxy) / 2,
							"rx": (freehand.maxx - freehand.minx) / 2,
							"ry": (freehand.maxy - freehand.miny) / 2,
							"id": getId()
						}
					});
					call("changed",[element]);
					keep = true;
				}
				break;
			case "fhrect":
				if ((freehand.maxx - freehand.minx) > 0 &&
					(freehand.maxy - freehand.miny) > 0) {
					element = addSvgElementFromJson({
						"element": "rect",
						"curStyles": true,
						"attr": {
							"x": freehand.minx,
							"y": freehand.miny,
							"width": (freehand.maxx - freehand.minx),
							"height": (freehand.maxy - freehand.miny),
							"id": getId()
						}
					});
					call("changed",[element]);
					keep = true;
				}
				break;
			case "text":
				keep = true;
				selectOnly([element]);
				textActions.start(element);
				break;
			case "path":
				// set element to null here so that it is not removed nor finalized
				element = null;
				// continue to be set to true so that mouseMove happens
				started = true;
				
				var res = pathActions.mouseUp(evt, element, mouse_x, mouse_y);
				element = res.element;
				keep = res.keep;
				break;
			case "pathedit":
				keep = true;
				element = null;
				pathActions.mouseUp(evt);
				break;
			case "textedit":
				keep = false;
				element = null;
				textActions.mouseUp(evt, mouse_x, mouse_y);
				break;
			case "rotate":
				keep = true;
				element = null;
				current_mode = "select";
				var batchCmd = canvas.undoMgr.finishUndoableChange();
				if (!batchCmd.isEmpty()) { 
					addCommandToHistory(batchCmd);
				}
				// perform recalculation to weed out any stray identity transforms that might get stuck
				recalculateAllSelectedDimensions();
				call("changed", selectedElements);
				break;
			default:
				// This could occur in an extension
				break;
		}
		
		var ext_result = runExtensions("mouseUp", {
			event: evt,
			mouse_x: mouse_x,
			mouse_y: mouse_y
		}, true);
		
		$.each(ext_result, function(i, r) {
			if (r) {
				keep = r.keep || keep;
				element = r.element;
				started = r.started || started;
			}
		});
		
		if (!keep && element != null) {
			getCurrentDrawing().releaseId(getId());
			element.parentNode.removeChild(element);
			element = null;
			
			var t = evt.target;
			
			// if this element is in a group, go up until we reach the top-level group 
			// just below the layer groups
			// TODO: once we implement links, we also would have to check for <a> elements
			while (t.parentNode.parentNode.tagName == "g") {
				t = t.parentNode;
			}
			// if we are not in the middle of creating a path, and we've clicked on some shape, 
			// then go to Select mode.
			// WebKit returns <div> when the canvas is clicked, Firefox/Opera return <svg>
			if ( (current_mode != "path" || !drawn_path) &&
				t.parentNode.id != "selectorParentGroup" &&
				t.id != "svgcanvas" && t.id != "svgroot") 
			{
				// switch into "select" mode if we've clicked on an element
				canvas.setMode("select");
				selectOnly([t], true);
			}
			
		} else if (element != null) {
			canvas.addedNew = true;
			
			if (useUnit) svgedit.units.convertAttrs(element);
			
			var ani_dur = .2, c_ani;
			if (opac_ani.beginElement && element.getAttribute('opacity') != cur_shape.opacity) {
				c_ani = $(opac_ani).clone().attr({
					to: cur_shape.opacity,
					dur: ani_dur
				}).appendTo(element);
				try {
					// Fails in FF4 on foreignObject
					c_ani[0].beginElement();
				} catch(e){}
			} else {
				ani_dur = 0;
			}
			
			// Ideally this would be done on the endEvent of the animation,
			// but that doesn't seem to be supported in Webkit
			setTimeout(function() {
				if (c_ani) c_ani.remove();
				element.setAttribute("opacity", cur_shape.opacity);
				element.setAttribute("style", "pointer-events:inherit");
				cleanupElement(element);
				if (current_mode === "path") {
					pathActions.toEditMode(element);
				} else if (curConfig.selectNew) {
					selectOnly([element], true);
				}
				// we create the insert command that is stored on the stack
				// undo means to call cmd.unapply(), redo means to call cmd.apply()
				addCommandToHistory(new svgedit.history.InsertElementCommand(element));
				
				call("changed",[element]);
			}, ani_dur * 1000);
		}
		
		startTransform = null;
	};
	
	var dblClick = function(evt) {
		var evt_target = evt.target;
		var parent = evt_target.parentNode;
		
		// Do nothing if already in current group
		if (parent === current_group) return;
		
		var mouse_target = getMouseTarget(evt);
		var tagName = mouse_target.tagName;
		
		if (tagName === 'text' && current_mode !== 'textedit') {
			var pt = svgedit.math.transformPoint( evt.pageX, evt.pageY, root_sctm );
			textActions.select(mouse_target, pt.x, pt.y);
		}
		
		if ((tagName === "g" || tagName === "a") && svgedit.utilities.getRotationAngle(mouse_target)) {
			// TODO: Allow method of in-group editing without having to do 
			// this (similar to editing rotated paths)
		
			// Ungroup and regroup
			pushGroupProperties(mouse_target);
			mouse_target = selectedElements[0];
			clearSelection(true);
		}
		// Reset context
		if (current_group) {
			leaveContext();
		}
		
		if ((parent.tagName !== 'g' && parent.tagName !== 'a') ||
			parent === getCurrentDrawing().getCurrentLayer() ||
			mouse_target === selectorManager.selectorParentGroup)
		{
			// Escape from in-group edit
			return;
		}
		setContext(mouse_target);
	};

	// prevent links from being followed in the canvas
	var handleLinkInCanvas = function(e) {
		e.preventDefault();
		return false;
	};
	
	// Added mouseup to the container here.
	// TODO(codedread): Figure out why after the Closure compiler, the window mouseup is ignored.
	$(container).mousedown(mouseDown).mousemove(mouseMove).click(handleLinkInCanvas).dblclick(dblClick).mouseup(mouseUp);
//	$(window).mouseup(mouseUp);
	
	 //TODO(rafaelcastrocouto): User preference for shift key and zoom factor
	$(container).bind("mousewheel DOMMouseScroll", function(e){
		//if (!e.shiftKey) return;
		e.preventDefault();
		var evt = e.originalEvent;

		root_sctm = $('#svgcontent g')[0].getScreenCTM().inverse();
		var pt = svgedit.math.transformPoint( evt.pageX, evt.pageY, root_sctm );

		var bbox = {
			'x': pt.x,
			'y': pt.y,
			'width': 0,
			'height': 0
		};

		var delta = (evt.wheelDelta) ? evt.wheelDelta : (evt.detail) ? -evt.detail : 0;
		if (!delta) return;

		bbox.factor = Math.max(3/4, Math.min(4/3, (delta)));
	
		call("zoomed", bbox);
	});
	
}());

// Function: preventClickDefault
// Prevents default browser click behaviour on the given element
//
// Parameters:
// img - The DOM element to prevent the cilck on
var preventClickDefault = function(img) {
	$(img).click(function(e){e.preventDefault();});
};

// Group: Text edit functions
// Functions relating to editing text elements
var textActions = canvas.textActions = function() {
	var curtext;
	var textinput;
	var cursor;
	var selblock;
	var blinker;
	var chardata = [];
	var textbb, transbb;
	var matrix;
	var last_x, last_y;
	var allow_dbl;
	
	function setCursor(index) {
		var empty = (textinput.value === "");
		$(textinput).focus();
	
		if (!arguments.length) {
			if (empty) {
				index = 0;
			} else {
				if (textinput.selectionEnd !== textinput.selectionStart) return;
				index = textinput.selectionEnd;
			}
		}
		
		var charbb;
		charbb = chardata[index];
		if (!empty) {
			textinput.setSelectionRange(index, index);
		}
		cursor = svgedit.utilities.getElem("text_cursor");
		if (!cursor) {
			cursor = document.createElementNS(NS.SVG, "line");
			svgedit.utilities.assignAttributes(cursor, {
				'id': "text_cursor",
				'stroke': "#333",
				'stroke-width': 1
			});
			cursor = svgedit.utilities.getElem("selectorParentGroup").appendChild(cursor);
		}
		
		if (!blinker) {
			blinker = setInterval(function() {
				var show = (cursor.getAttribute('display') === 'none');
				cursor.setAttribute('display', show?'inline':'none');
			}, 600);
		}
		
		var start_pt = ptToScreen(charbb.x, textbb.y);
		var end_pt = ptToScreen(charbb.x, (textbb.y + textbb.height));
		
		svgedit.utilities.assignAttributes(cursor, {
			x1: start_pt.x,
			y1: start_pt.y,
			x2: end_pt.x,
			y2: end_pt.y,
			visibility: 'visible',
			display: 'inline'
		});
		
		if (selblock) selblock.setAttribute('d', '');
	}
	
	function setSelection(start, end, skipInput) {
		if (start === end) {
			setCursor(end);
			return;
		}
	
		if (!skipInput) {
			textinput.setSelectionRange(start, end);
		}
		
		selblock = svgedit.utilities.getElem("text_selectblock");
		if (!selblock) {

			selblock = document.createElementNS(NS.SVG, "path");
			svgedit.utilities.assignAttributes(selblock, {
				'id': "text_selectblock",
				'fill': "green",
				'opacity': 0.5,
				'style': "pointer-events:none"
			});
			svgedit.utilities.getElem("selectorParentGroup").appendChild(selblock);
		}

		var startbb = chardata[start];		
		var endbb = chardata[end];
		
		cursor.setAttribute('visibility', 'hidden');
		
		var tl = ptToScreen(startbb.x, textbb.y),
			tr = ptToScreen(startbb.x + (endbb.x - startbb.x), textbb.y),
			bl = ptToScreen(startbb.x, textbb.y + textbb.height),
			br = ptToScreen(startbb.x + (endbb.x - startbb.x), textbb.y + textbb.height);
		
		var dstr = "M" + tl.x + "," + tl.y
					+ " L" + tr.x + "," + tr.y
					+ " " + br.x + "," + br.y
					+ " " + bl.x + "," + bl.y + "z";
		
		svgedit.utilities.assignAttributes(selblock, {
			d: dstr,
			'display': 'inline'
		});
	}
	
	function getIndexFromPoint(mouse_x, mouse_y) {
		// Position cursor here
		var pt = svgroot.createSVGPoint();
		pt.x = mouse_x;
		pt.y = mouse_y;

		// No content, so return 0
		if (chardata.length == 1) return 0;
		// Determine if cursor should be on left or right of character
		var charpos = curtext.getCharNumAtPosition(pt);
		if (charpos < 0) {
			// Out of text range, look at mouse coords
			charpos = chardata.length - 2;
			if (mouse_x <= chardata[0].x) {
				charpos = 0;
			}
		} else if (charpos >= chardata.length - 2) {
			charpos = chardata.length - 2;
		}
		var charbb = chardata[charpos];
		var mid = charbb.x + (charbb.width/2);
		if (mouse_x > mid) {
			charpos++;
		}
		return charpos;
	}
	
	function setCursorFromPoint(mouse_x, mouse_y) {
		setCursor(getIndexFromPoint(mouse_x, mouse_y));
	}
	
	function setEndSelectionFromPoint(x, y, apply) {
		var i1 = textinput.selectionStart;
		var i2 = getIndexFromPoint(x, y);
		
		var start = Math.min(i1, i2);
		var end = Math.max(i1, i2);
		setSelection(start, end, !apply);
	}
		
	function screenToPt(x_in, y_in) {
		var out = {
			x: x_in,
			y: y_in
		};
		
		out.x /= current_zoom;
		out.y /= current_zoom;			

		if (matrix) {
			var pt = svgedit.math.transformPoint(out.x, out.y, matrix.inverse());
			out.x = pt.x;
			out.y = pt.y;
		}
		
		return out;
	}	
	
	function ptToScreen(x_in, y_in) {
		var out = {
			x: x_in,
			y: y_in
		};
		
		if (matrix) {
			var pt = svgedit.math.transformPoint(out.x, out.y, matrix);
			out.x = pt.x;
			out.y = pt.y;
		}
		
		out.x *= current_zoom;
		out.y *= current_zoom;
		
		return out;
	}
	
	function hideCursor() {
		if (cursor) {
			cursor.setAttribute('visibility', 'hidden');
		}
	}
	
	function selectAll(evt) {
		setSelection(0, curtext.textContent.length);
		$(this).unbind(evt);
	}

	function selectWord(evt) {
		if (!allow_dbl || !curtext) return;
	
		var ept = svgedit.math.transformPoint( evt.pageX, evt.pageY, root_sctm ),
			mouse_x = ept.x * current_zoom,
			mouse_y = ept.y * current_zoom;
		var pt = screenToPt(mouse_x, mouse_y);
		
		var index = getIndexFromPoint(pt.x, pt.y);
		var str = curtext.textContent;
		var first = str.substr(0, index).replace(/[a-z0-9]+$/i, '').length;
		var m = str.substr(index).match(/^[a-z0-9]+/i);
		var last = (m?m[0].length:0) + index;
		setSelection(first, last);
		
		// Set tripleclick
		$(evt.target).click(selectAll);
		setTimeout(function() {
			$(evt.target).unbind('click', selectAll);
		}, 300);
		
	}

	return {
		select: function(target, x, y) {
			curtext = target;
			textActions.toEditMode(x, y);
		},
		start: function(elem) {
			curtext = elem;
			textActions.toEditMode();
		},
		mouseDown: function(evt, mouse_target, start_x, start_y) {
			var pt = screenToPt(start_x, start_y);
		
			textinput.focus();
			setCursorFromPoint(pt.x, pt.y);
			last_x = start_x;
			last_y = start_y;
			
			// TODO: Find way to block native selection
		},
		mouseMove: function(mouse_x, mouse_y) {
			var pt = screenToPt(mouse_x, mouse_y);
			setEndSelectionFromPoint(pt.x, pt.y);
		},			
		mouseUp: function(evt, mouse_x, mouse_y) {
			var pt = screenToPt(mouse_x, mouse_y);
			
			setEndSelectionFromPoint(pt.x, pt.y, true);
			
			// TODO: Find a way to make this work: Use transformed BBox instead of evt.target 
// 				if (last_x === mouse_x && last_y === mouse_y
// 					&& !svgedit.math.rectsIntersect(transbb, {x: pt.x, y: pt.y, width:0, height:0})) {
// 					textActions.toSelectMode(true);				
// 				}

			if (
				evt.target !== curtext
				&&	mouse_x < last_x + 2
				&& mouse_x > last_x - 2
				&&	mouse_y < last_y + 2
				&& mouse_y > last_y - 2) {

				textActions.toSelectMode(true);
			}

		},
		setCursor: setCursor,
		toEditMode: function(x, y) {
			allow_dbl = false;
			current_mode = "textedit";
			selectorManager.requestSelector(curtext).showGrips(false);
			// Make selector group accept clicks
			var sel = selectorManager.requestSelector(curtext).selectorRect;
			
			textActions.init();

			$(curtext).css('cursor', 'text');
			
// 				if (svgedit.browser.supportsEditableText()) {
// 					curtext.setAttribute('editable', 'simple');
// 					return;
// 				}
			
			if (!arguments.length) {
				setCursor();
			} else {
				var pt = screenToPt(x, y);
				setCursorFromPoint(pt.x, pt.y);
			}
			
			setTimeout(function() {
				allow_dbl = true;
			}, 300);
		},
		toSelectMode: function(selectElem) {
			current_mode = "select";
			clearInterval(blinker);
			blinker = null;
			if (selblock) $(selblock).attr('display', 'none');
			if (cursor) $(cursor).attr('visibility', 'hidden');
			$(curtext).css('cursor', 'move');
			
			if (selectElem) {
				clearSelection();
				$(curtext).css('cursor', 'move');
				
				call("selected", [curtext]);
				addToSelection([curtext], true);
			}
			if (curtext && !curtext.textContent.length) {
				// No content, so delete
				canvas.deleteSelectedElements();
			}
			
			$(textinput).blur();
			
			curtext = false;
			
// 				if (svgedit.browser.supportsEditableText()) {
// 					curtext.removeAttribute('editable');
// 				}
		},
		setInputElem: function(elem) {
			textinput = elem;
// 			$(textinput).blur(hideCursor);
		},
		clear: function() {
			if (current_mode == "textedit") {
				textActions.toSelectMode();
			}
		},
		init: function(inputElem) {
			if (!curtext) return;

// 				if (svgedit.browser.supportsEditableText()) {
// 					curtext.select();
// 					return;
// 				}
		
			if (!curtext.parentNode) {
				// Result of the ffClone, need to get correct element
				curtext = selectedElements[0];
				selectorManager.requestSelector(curtext).showGrips(false);
			}
			
			var str = curtext.textContent;
			var len = str.length;
			
			var xform = curtext.getAttribute('transform');

			textbb = svgedit.utilities.getBBox(curtext);
			
			matrix = xform ? svgedit.math.getMatrix(curtext) : null;

			chardata = Array(len);
			textinput.focus();
			
			$(curtext).unbind('dblclick', selectWord).dblclick(selectWord);
			
			if (!len) {
				var end = {x: textbb.x + (textbb.width/2), width: 0};
			}
			
			for (var i=0; i<len; i++) {
				var start = curtext.getStartPositionOfChar(i);
				var end = curtext.getEndPositionOfChar(i);
				
				if (!svgedit.browser.supportsGoodTextCharPos()) {
					var offset = canvas.contentW * current_zoom;
					start.x -= offset;
					end.x -= offset;
					
					start.x /= current_zoom;
					end.x /= current_zoom;
				}
				
				// Get a "bbox" equivalent for each character. Uses the
				// bbox data of the actual text for y, height purposes
				
				// TODO: Decide if y, width and height are actually necessary
				chardata[i] = {
					x: start.x,
					y: textbb.y, // start.y?
					width: end.x - start.x,
					height: textbb.height
				};
			}
			
			// Add a last bbox for cursor at end of text
			chardata.push({
				x: end.x,
				width: 0
			});
			setSelection(textinput.selectionStart, textinput.selectionEnd, true);
		}
	};
}();

// TODO: Migrate all of this code into path.js
// Group: Path edit functions
// Functions relating to editing path elements
var pathActions = canvas.pathActions = function() {
	
	var subpath = false;
	var current_path;
	var newPoint, firstCtrl;
	
	function resetD(p) {
		p.setAttribute("d", pathActions.convertPath(p));
	}

	// TODO: Move into path.js
	svgedit.path.Path.prototype.endChanges = function(text) {
		if (svgedit.browser.isWebkit()) resetD(this.elem);
		var cmd = new svgedit.history.ChangeElementCommand(this.elem, {d: this.last_d}, text);
		addCommandToHistory(cmd);
		call("changed", [this.elem]);
	};

	svgedit.path.Path.prototype.addPtsToSelection = function(indexes) {
		if (!$.isArray(indexes)) indexes = [indexes];
		for (var i=0; i< indexes.length; i++) {
			var index = indexes[i];
			var seg = this.segs[index];
			if (seg.ptgrip) {
				if (this.selected_pts.indexOf(index) == -1 && index >= 0) {
					this.selected_pts.push(index);
				}
			}
		}
		this.selected_pts.sort();
		var i = this.selected_pts.length,
			grips = new Array(i);
		// Loop through points to be selected and highlight each
		while (i--) {
			var pt = this.selected_pts[i];
			var seg = this.segs[pt];
			seg.select(true);
			grips[i] = seg.ptgrip;
		}
		// TODO: Correct this:
		pathActions.canDeleteNodes = true;
		
		pathActions.closed_subpath = this.subpathIsClosed(this.selected_pts[0]);
		
		call("selected", grips);
	};

	var current_path = null,
		drawn_path = null,
		hasMoved = false;
	
	// This function converts a polyline (created by the fh_path tool) into
	// a path element and coverts every three line segments into a single bezier
	// curve in an attempt to smooth out the free-hand
	var smoothPolylineIntoPath = function(element) {
		var points = element.points;
		var N = points.numberOfItems;
		if (N >= 4) {
			// loop through every 3 points and convert to a cubic bezier curve segment
			// 
			// NOTE: this is cheating, it means that every 3 points has the potential to 
			// be a corner instead of treating each point in an equal manner.  In general,
			// this technique does not look that good.
			// 
			// I am open to better ideas!
			// 
			// Reading:
			// - http://www.efg2.com/Lab/Graphics/Jean-YvesQueinecBezierCurves.htm
			// - http://www.codeproject.com/KB/graphics/BezierSpline.aspx?msg=2956963
			// - http://www.ian-ko.com/ET_GeoWizards/UserGuide/smooth.htm
			// - http://www.cs.mtu.edu/~shene/COURSES/cs3621/NOTES/spline/Bezier/bezier-der.html
			var curpos = points.getItem(0), prevCtlPt = null;
			var d = [];
			d.push(["M", curpos.x, ",", curpos.y, " C"].join(""));
			for (var i = 1; i <= (N-4); i += 3) {
				var ct1 = points.getItem(i);
				var ct2 = points.getItem(i+1);
				var end = points.getItem(i+2);
				
				// if the previous segment had a control point, we want to smooth out
				// the control points on both sides
				if (prevCtlPt) {
					var newpts = svgedit.path.smoothControlPoints( prevCtlPt, ct1, curpos );
					if (newpts && newpts.length == 2) {
						var prevArr = d[d.length-1].split(',');
						prevArr[2] = newpts[0].x;
						prevArr[3] = newpts[0].y;
						d[d.length-1] = prevArr.join(',');
						ct1 = newpts[1];
					}
				}
				
				d.push([ct1.x, ct1.y, ct2.x, ct2.y, end.x, end.y].join(','));
				
				curpos = end;
				prevCtlPt = ct2;
			}
			// handle remaining line segments
			d.push("L");
			for (;i < N;++i) {
				var pt = points.getItem(i);
				d.push([pt.x, pt.y].join(","));
			}
			d = d.join(" ");

			// create new path element
			element = addSvgElementFromJson({
				"element": "path",
				"curStyles": true,
				"attr": {
					"id": getId(),
					"d": d,
					"fill": "none"
				}
			});
			// No need to call "changed", as this is already done under mouseUp
		}
		return element;
	};

	return {
		mouseDown: function(evt, mouse_target, start_x, start_y) {
			if (current_mode === "path") {
				mouse_x = start_x;
				mouse_y = start_y;
				
				var x = mouse_x/current_zoom,
					y = mouse_y/current_zoom,
					stretchy = svgedit.utilities.getElem("path_stretch_line");
				newPoint = [x, y];	
				
				if (curConfig.gridSnapping){
					x = svgedit.utilities.snapToGrid(x);
					y = svgedit.utilities.snapToGrid(y);
					mouse_x = svgedit.utilities.snapToGrid(mouse_x);
					mouse_y = svgedit.utilities.snapToGrid(mouse_y);
				}

				if (!stretchy) {
					stretchy = document.createElementNS(NS.SVG, "path");
					svgedit.utilities.assignAttributes(stretchy, {
						'id': "path_stretch_line",
						'stroke': "#22C",
						'stroke-width': "0.5",
						'fill': 'none'
					});
					stretchy = svgedit.utilities.getElem("selectorParentGroup").appendChild(stretchy);
				}
				stretchy.setAttribute("display", "inline");
				
				var keep = null;
				
				// if pts array is empty, create path element with M at current point
				if (!drawn_path) {
					d_attr = "M" + x + "," + y + " ";
					drawn_path = addSvgElementFromJson({
						"element": "path",
						"curStyles": true,
						"attr": {
							"d": d_attr,
							"id": getNextId(),
							"opacity": cur_shape.opacity / 2
						}
					});
					// set stretchy line to first point
					stretchy.setAttribute('d', ['M', mouse_x, mouse_y, mouse_x, mouse_y].join(' '));
					var index = subpath ? svgedit.path.path.segs.length : 0;
					svgedit.path.addPointGrip(index, mouse_x, mouse_y);
				} else {
					// determine if we clicked on an existing point
					var seglist = drawn_path.pathSegList;
					var i = seglist.numberOfItems;
					var FUZZ = 6/current_zoom;
					var clickOnPoint = false;
					while (i) {
						i --;
						var item = seglist.getItem(i);
						var px = item.x, py = item.y;
						// found a matching point
						if ( x >= (px-FUZZ) && x <= (px+FUZZ) && y >= (py-FUZZ) && y <= (py+FUZZ) ) {
							clickOnPoint = true;
							break;
						}
					}
					
					// get path element that we are in the process of creating
					var id = getId();
				
					// Remove previous path object if previously created
					svgedit.path.removePath_(id);
					
					var newpath = svgedit.utilities.getElem(id);
					
					var len = seglist.numberOfItems;
					// if we clicked on an existing point, then we are done this path, commit it
					// (i, i+1) are the x,y that were clicked on
					if (clickOnPoint) {
						// if clicked on any other point but the first OR
						// the first point was clicked on and there are less than 3 points
						// then leave the path open
						// otherwise, close the path
						if (i <= 1 && len >= 2) {
							// Create end segment
							var abs_x = seglist.getItem(0).x;
							var abs_y = seglist.getItem(0).y;
							

							var s_seg = stretchy.pathSegList.getItem(1);
							if (s_seg.pathSegType === 4) {
								var newseg = drawn_path.createSVGPathSegLinetoAbs(abs_x, abs_y);
							} else {
								var newseg = drawn_path.createSVGPathSegCurvetoCubicAbs(
									abs_x,
									abs_y,
									s_seg.x1 / current_zoom,
									s_seg.y1 / current_zoom,
									abs_x,
									abs_y
								);
							}
							
							var endseg = drawn_path.createSVGPathSegClosePath();
							seglist.appendItem(newseg);
							seglist.appendItem(endseg);
						} else if (len < 3) {
							keep = false;
							return keep;
						}
						$(stretchy).remove();
						
						// this will signal to commit the path
						element = newpath;
						drawn_path = null;
						started = false;
						
						if (subpath) {
							if (svgedit.path.path.matrix) {
								svgedit.coords.remapElement(newpath, {}, svgedit.path.path.matrix.inverse());
							}
						
							var new_d = newpath.getAttribute("d");
							var orig_d = $(svgedit.path.path.elem).attr("d");
							$(svgedit.path.path.elem).attr("d", orig_d + new_d);
							$(newpath).remove();
							if (svgedit.path.path.matrix) {
								svgedit.path.recalcRotatedPath();
							}
							svgedit.path.path.init();
							pathActions.toEditMode(svgedit.path.path.elem);
							svgedit.path.path.selectPt();
							return false;
						}
					}
					// else, create a new point, update path element
					else {
						// Checks if current target or parents are #svgcontent
						if (!$.contains(container, getMouseTarget(evt))) {
							// Clicked outside canvas, so don't make point
							console.log("Clicked outside canvas");
							return false;
						}

						var num = drawn_path.pathSegList.numberOfItems;
						var last = drawn_path.pathSegList.getItem(num -1);
						var lastx = last.x, lasty = last.y;

						if (evt.shiftKey) {
							var xya = svgedit.math.snapToAngle(lastx, lasty, x, y);
							x = xya.x;
							y = xya.y;
						}
						
						// Use the segment defined by stretchy
						var s_seg = stretchy.pathSegList.getItem(1);
						if (s_seg.pathSegType === 4) {
							var newseg = drawn_path.createSVGPathSegLinetoAbs(round(x), round(y));
						} else {
							var newseg = drawn_path.createSVGPathSegCurvetoCubicAbs(
								round(x),
								round(y),
								s_seg.x1 / current_zoom,
								s_seg.y1 / current_zoom,
								s_seg.x2 / current_zoom,
								s_seg.y2 / current_zoom
							);
						}
						
						drawn_path.pathSegList.appendItem(newseg);
						
						x *= current_zoom;
						y *= current_zoom;
						
						// set stretchy line to latest point
						stretchy.setAttribute('d', ['M', x, y, x, y].join(' '));
						var index = num;
						if (subpath) index += svgedit.path.path.segs.length;
						svgedit.path.addPointGrip(index, x, y);
					}
// 					keep = true;
				}
				
				return;
			}
			
			// TODO: Make sure current_path isn't null at this point
			if (!svgedit.path.path) return;
			
			svgedit.path.path.storeD();
			
			var id = evt.target.id;
			if (id.substr(0,14) == "pathpointgrip_") {
				// Select this point
				var cur_pt = svgedit.path.path.cur_pt = parseInt(id.substr(14));
				svgedit.path.path.dragging = [start_x, start_y];
				var seg = svgedit.path.path.segs[cur_pt];
				
				// only clear selection if shift is not pressed (otherwise, add 
				// node to selection)
				if (!evt.shiftKey) {
					if (svgedit.path.path.selected_pts.length <= 1 || !seg.selected) {
						svgedit.path.path.clearSelection();
					}
					svgedit.path.path.addPtsToSelection(cur_pt);
				} else if (seg.selected) {
					svgedit.path.path.removePtFromSelection(cur_pt);
				} else {
					svgedit.path.path.addPtsToSelection(cur_pt);
				}
			} else if (id.indexOf("ctrlpointgrip_") == 0) {
				svgedit.path.path.dragging = [start_x, start_y];
				
				var parts = id.split('_')[1].split('c');
				var cur_pt = parts[0]-0;
				var ctrl_num = parts[1]-0;
				svgedit.path.path.selectPt(cur_pt, ctrl_num);
			}

			// Start selection box
			if (!svgedit.path.path.dragging) {
				if (rubberBox == null) {
					rubberBox = selectorManager.getRubberBandBox();
				}
				svgedit.utilities.assignAttributes(rubberBox, {
						'x': start_x * current_zoom,
						'y': start_y * current_zoom,
						'width': 0,
						'height': 0,
						'display': 'inline'
				}, 100);
			}
		},
		mouseMove: function(mouse_x, mouse_y) {
			hasMoved = true;
			if (current_mode === "path") {
				if (!drawn_path) return;
				var seglist = drawn_path.pathSegList;
				var index = seglist.numberOfItems - 1;

				if (newPoint) {
					// First point
// 					if (!index) return;

					// Set control points
					var pointGrip1 = svgedit.path.addCtrlGrip('1c1');
					var pointGrip2 = svgedit.path.addCtrlGrip('0c2');
					
					// dragging pointGrip1
					pointGrip1.setAttribute('cx', mouse_x);
					pointGrip1.setAttribute('cy', mouse_y);
					pointGrip1.setAttribute('display', 'inline');

					var pt_x = newPoint[0];
					var pt_y = newPoint[1];
					
					// set curve
					var seg = seglist.getItem(index);
					var cur_x = mouse_x / current_zoom;
					var cur_y = mouse_y / current_zoom;
					var alt_x = (pt_x + (pt_x - cur_x));
					var alt_y = (pt_y + (pt_y - cur_y));
					
					pointGrip2.setAttribute('cx', alt_x * current_zoom);
					pointGrip2.setAttribute('cy', alt_y * current_zoom);
					pointGrip2.setAttribute('display', 'inline');
					
					var ctrlLine = svgedit.path.getCtrlLine(1);
					svgedit.utilities.assignAttributes(ctrlLine, {
						x1: mouse_x,
						y1: mouse_y,
						x2: alt_x * current_zoom,
						y2: alt_y * current_zoom,
						display: 'inline'
					});

					if (index === 0) {
						firstCtrl = [mouse_x, mouse_y];
					} else {
						var last_x, last_y;
						
						var last = seglist.getItem(index - 1);
						var last_x = last.x;
						var last_y = last.y;
	
						if (last.pathSegType === 6) {
							last_x += (last_x - last.x2);
							last_y += (last_y - last.y2);
						} else if (firstCtrl) {
							last_x = firstCtrl[0]/current_zoom;
							last_y = firstCtrl[1]/current_zoom;
						}
						svgedit.path.replacePathSeg(6, index, [pt_x, pt_y, last_x, last_y, alt_x, alt_y], drawn_path);
					}
				} else {
					var stretchy = svgedit.utilities.getElem("path_stretch_line");
					if (stretchy) {
						var prev = seglist.getItem(index);
						if (prev.pathSegType === 6) {
							var prev_x = prev.x + (prev.x - prev.x2);
							var prev_y = prev.y + (prev.y - prev.y2);
							svgedit.path.replacePathSeg(6, 1, [mouse_x, mouse_y, prev_x * current_zoom, prev_y * current_zoom, mouse_x, mouse_y], stretchy);							
						} else if (firstCtrl) {
							svgedit.path.replacePathSeg(6, 1, [mouse_x, mouse_y, firstCtrl[0], firstCtrl[1], mouse_x, mouse_y], stretchy);
						} else {
							svgedit.path.replacePathSeg(4, 1, [mouse_x, mouse_y], stretchy);
						}
					}
				}
				return;
			}
			// if we are dragging a point, let's move it
			if (svgedit.path.path.dragging) {
				var pt = svgedit.path.getPointFromGrip({
					x: svgedit.path.path.dragging[0],
					y: svgedit.path.path.dragging[1]
				}, svgedit.path.path);
				var mpt = svgedit.path.getPointFromGrip({
					x: mouse_x,
					y: mouse_y
				}, svgedit.path.path);
				var diff_x = mpt.x - pt.x;
				var diff_y = mpt.y - pt.y;
				svgedit.path.path.dragging = [mouse_x, mouse_y];
				
				if (svgedit.path.path.dragctrl) {
					svgedit.path.path.moveCtrl(diff_x, diff_y);
				} else {
					svgedit.path.path.movePts(diff_x, diff_y);
				}
			} else {
				svgedit.path.path.selected_pts = [];
				svgedit.path.path.eachSeg(function(i) {
					var seg = this;
					if (!seg.next && !seg.prev) return;
						
					var item = seg.item;
					var rbb = rubberBox.getBBox();
					
					var pt = svgedit.path.getGripPt(seg);
					var pt_bb = {
						x: pt.x,
						y: pt.y,
						width: 0,
						height: 0
					};
				
					var sel = svgedit.math.rectsIntersect(rbb, pt_bb);

					this.select(sel);
					//Note that addPtsToSelection is not being run
					if (sel) svgedit.path.path.selected_pts.push(seg.index);
				});

			}
		}, 
		mouseUp: function(evt, element, mouse_x, mouse_y) {
			
			// Create mode
			if (current_mode === "path") {
				newPoint = null;
				if (!drawn_path) {
					element = svgedit.utilities.getElem(getId());
					started = false;
					firstCtrl = null;
				}

				return {
					keep: true,
					element: element
				};
			}
			
			// Edit mode
			
			if (svgedit.path.path.dragging) {
				var last_pt = svgedit.path.path.cur_pt;

				svgedit.path.path.dragging = false;
				svgedit.path.path.dragctrl = false;
				svgedit.path.path.update();
				
				if (hasMoved) {
					svgedit.path.path.endChanges("Move path point(s)");
				} 
				
				if (!evt.shiftKey && !hasMoved) {
					svgedit.path.path.selectPt(last_pt);
				} 
			} else if (rubberBox && rubberBox.getAttribute('display') != 'none') {
				// Done with multi-node-select
				rubberBox.setAttribute("display", "none");
				
				if (rubberBox.getAttribute('width') <= 2 && rubberBox.getAttribute('height') <= 2) {
					pathActions.toSelectMode(evt.target);
				}
				
			// else, move back to select mode	
			} else {
				pathActions.toSelectMode(evt.target);
			}
			hasMoved = false;
		},
		toEditMode: function(element) {
			svgedit.path.path = svgedit.path.getPath_(element);
			current_mode = "pathedit";
			clearSelection();
			svgedit.path.path.show(true).update();
			svgedit.path.path.oldbbox = svgedit.utilities.getBBox(svgedit.path.path.elem);
			subpath = false;
		},
		toSelectMode: function(elem) {
			var selPath = (elem == svgedit.path.path.elem);
			current_mode = "select";
			svgedit.path.path.show(false);
			current_path = false;
			clearSelection();
			
			if (svgedit.path.path.matrix) {
				// Rotated, so may need to re-calculate the center
				svgedit.path.recalcRotatedPath();
			}
			
			if (selPath) {
				call("selected", [elem]);
				addToSelection([elem], true);
			}
		},
		addSubPath: function(on) {
			if (on) {
				// Internally we go into "path" mode, but in the UI it will
				// still appear as if in "pathedit" mode.
				current_mode = "path";
				subpath = true;
			} else {
				pathActions.clear(true);
				pathActions.toEditMode(svgedit.path.path.elem);
			}
		},
		select: function(target) {
			if (current_path === target) {
				pathActions.toEditMode(target);
				current_mode = "pathedit";
			} // going into pathedit mode
			else {
				current_path = target;
			}	
		},
		reorient: function() {
			var elem = selectedElements[0];
			if (!elem) return;
			var angle = svgedit.utilities.getRotationAngle(elem);
			if (angle == 0) return;
			
			var batchCmd = new svgedit.history.BatchCommand("Reorient path");
			var changes = {
				d: elem.getAttribute('d'),
				transform: elem.getAttribute('transform')
			};
			batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(elem, changes));
			clearSelection();
			this.resetOrientation(elem);
			
			addCommandToHistory(batchCmd);

			// Set matrix to null
			svgedit.path.getPath_(elem).show(false).matrix = null; 

			this.clear();
	
			addToSelection([elem], true);
			call("changed", selectedElements);
		},
		
		clear: function(remove) {
			current_path = null;
			if (drawn_path) {
				var elem = svgedit.utilities.getElem(getId());
				$(svgedit.utilities.getElem("path_stretch_line")).remove();
				$(elem).remove();
				$(svgedit.utilities.getElem("pathpointgrip_container")).find('*').attr('display', 'none');
				drawn_path = firstCtrl = null;
				started = false;
			} else if (current_mode == "pathedit") {
				this.toSelectMode();
			}
			if (svgedit.path.path) svgedit.path.path.init().show(false);
		},
		resetOrientation: function(path) {
			if (path == null || path.nodeName != 'path') return false;
			var tlist = svgedit.transformlist.getTransformList(path);
			var m = svgedit.math.transformListToTransform(tlist).matrix;
			tlist.clear();
			path.removeAttribute("transform");
			var segList = path.pathSegList;
			
			// Opera/win/non-EN throws an error here.
			// TODO: Find out why!
			// Presumed fixed in Opera 10.5, so commented out for now
			
// 			try {
				var len = segList.numberOfItems;
// 			} catch(err) {
// 				var fixed_d = pathActions.convertPath(path);
// 				path.setAttribute('d', fixed_d);
// 				segList = path.pathSegList;
// 				var len = segList.numberOfItems;
// 			}
			var last_x, last_y;

			for (var i = 0; i < len; ++i) {
				var seg = segList.getItem(i);
				var type = seg.pathSegType;
				if (type == 1) continue;
				var pts = [];
				$.each(['',1,2], function(j, n) {
					var x = seg['x'+n], y = seg['y'+n];
					if (x !== undefined && y !== undefined) {
						var pt = svgedit.math.transformPoint(x, y, m);
						pts.splice(pts.length, 0, pt.x, pt.y);
					}
				});
				svgedit.path.replacePathSeg(type, i, pts, path);
			}
			
			reorientGrads(path, m);
		},
		zoomChange: function() {
			if (current_mode == "pathedit") {
				svgedit.path.path.update();
			}
		},
		getNodePoint: function() {
			var sel_pt = svgedit.path.path.selected_pts.length ? svgedit.path.path.selected_pts[0] : 1;

			var seg = svgedit.path.path.segs[sel_pt];
			return {
				x: seg.item.x,
				y: seg.item.y,
				type: seg.type
			};
		}, 
		linkControlPoints: function(linkPoints) {
			svgedit.path.setLinkControlPoints(linkPoints);
		},
		clonePathNode: function() {
			svgedit.path.path.storeD();
			
			var sel_pts = svgedit.path.path.selected_pts;
			var segs = svgedit.path.path.segs;
			
			var i = sel_pts.length;
			var nums = [];

			while (i--) {
				var pt = sel_pts[i];
				svgedit.path.path.addSeg(pt);
				
				nums.push(pt + i);
				nums.push(pt + i + 1);
			}
			svgedit.path.path.init().addPtsToSelection(nums);

			svgedit.path.path.endChanges("Clone path node(s)");
		},
		opencloseSubPath: function() {
			var sel_pts = svgedit.path.path.selected_pts;
			// Only allow one selected node for now
			if (sel_pts.length !== 1) return;
			
			var elem = svgedit.path.path.elem;
			var list = elem.pathSegList;

			var len = list.numberOfItems;

			var index = sel_pts[0];
			
			var open_pt = null;
			var start_item = null;

			// Check if subpath is already open
			svgedit.path.path.eachSeg(function(i) {
				if (this.type === 2 && i <= index) {
					start_item = this.item;
				}
				if (i <= index) return true;
				if (this.type === 2) {
					// Found M first, so open
					open_pt = i;
					return false;
				} else if (this.type === 1) {
					// Found Z first, so closed
					open_pt = false;
					return false;
				}
			});
			
			if (open_pt == null) {
				// Single path, so close last seg
				open_pt = svgedit.path.path.segs.length - 1;
			}

			if (open_pt !== false) {
				// Close this path
				
				// Create a line going to the previous "M"
				var newseg = elem.createSVGPathSegLinetoAbs(start_item.x, start_item.y);
			
				var closer = elem.createSVGPathSegClosePath();
				if (open_pt == svgedit.path.path.segs.length - 1) {
					list.appendItem(newseg);
					list.appendItem(closer);
				} else {
					svgedit.path.insertItemBefore(elem, closer, open_pt);
					svgedit.path.insertItemBefore(elem, newseg, open_pt);
				}
				
				svgedit.path.path.init().selectPt(open_pt+1);
				return;
			}
			
			// M 1,1 L 2,2 L 3,3 L 1,1 z // open at 2,2
			// M 2,2 L 3,3 L 1,1
			
			// M 1,1 L 2,2 L 1,1 z M 4,4 L 5,5 L6,6 L 5,5 z 
			// M 1,1 L 2,2 L 1,1 z [M 4,4] L 5,5 L(M)6,6 L 5,5 z 
			
			var seg = svgedit.path.path.segs[index];
			
			if (seg.mate) {
				list.removeItem(index); // Removes last "L"
				list.removeItem(index); // Removes the "Z"
				svgedit.path.path.init().selectPt(index - 1);
				return;
			}
			
			var last_m, z_seg;
			
			// Find this sub-path's closing point and remove
			for (var i=0; i<list.numberOfItems; i++) {
				var item = list.getItem(i);

				if (item.pathSegType === 2) {
					// Find the preceding M
					last_m = i;
				} else if (i === index) {
					// Remove it
					list.removeItem(last_m);
// 						index--;
				} else if (item.pathSegType === 1 && index < i) {
					// Remove the closing seg of this subpath
					z_seg = i-1;
					list.removeItem(i);
					break;
				}
			}
			
			var num = (index - last_m) - 1;
			
			while (num--) {
				svgedit.path.insertItemBefore(elem, list.getItem(last_m), z_seg);
			}
			
			var pt = list.getItem(last_m);
			
			// Make this point the new "M"
			svgedit.path.replacePathSeg(2, last_m, [pt.x, pt.y]);
			
			var i = index;
			
			svgedit.path.path.init().selectPt(0);
		},
		deletePathNode: function() {
			if (!pathActions.canDeleteNodes) return;
			svgedit.path.path.storeD();
			
			var sel_pts = svgedit.path.path.selected_pts;
			var i = sel_pts.length;

			while (i--) {
				var pt = sel_pts[i];
				svgedit.path.path.deleteSeg(pt);
			}
			
			// Cleanup
			var cleanup = function() {
				var segList = svgedit.path.path.elem.pathSegList;
				var len = segList.numberOfItems;
				
				var remItems = function(pos, count) {
					while (count--) {
						segList.removeItem(pos);
					}
				};

				if (len <= 1) return true;
				
				while (len--) {
					var item = segList.getItem(len);
					if (item.pathSegType === 1) {
						var prev = segList.getItem(len-1);
						var nprev = segList.getItem(len-2);
						if (prev.pathSegType === 2) {
							remItems(len-1, 2);
							cleanup();
							break;
						} else if (nprev.pathSegType === 2) {
							remItems(len-2, 3);
							cleanup();
							break;
						}

					} else if (item.pathSegType === 2) {
						if (len > 0) {
							var prev_type = segList.getItem(len-1).pathSegType;
							// Path has M M  
							if (prev_type === 2) {
								remItems(len-1, 1);
								cleanup();
								break;
							// Entire path ends with Z M 
							} else if (prev_type === 1 && segList.numberOfItems-1 === len) {
								remItems(len, 1);
								cleanup();
								break;
							}
						}
					}
				}	
				return false;
			};
			
			cleanup();
			
			// Completely delete a path with 1 or 0 segments
			if (svgedit.path.path.elem.pathSegList.numberOfItems <= 1) {
				pathActions.toSelectMode(svgedit.path.path.elem);
				canvas.deleteSelectedElements();
				return;
			}
			
			svgedit.path.path.init();
			svgedit.path.path.clearSelection();
			
			// TODO: Find right way to select point now
			// path.selectPt(sel_pt);
			if (window.opera) { // Opera repaints incorrectly
				var cp = $(svgedit.path.path.elem); 
				cp.attr('d', cp.attr('d'));
			}
			svgedit.path.path.endChanges("Delete path node(s)");
		},
		smoothPolylineIntoPath: smoothPolylineIntoPath,
		setSegType: function(v) {
			svgedit.path.path.setSegType(v);
		},
		moveNode: function(attr, newValue) {
			var sel_pts = svgedit.path.path.selected_pts;
			if (!sel_pts.length) return;
			
			svgedit.path.path.storeD();
			
			// Get first selected point
			var seg = svgedit.path.path.segs[sel_pts[0]];
			var diff = {x:0, y:0};
			diff[attr] = newValue - seg.item[attr];
			
			seg.move(diff.x, diff.y);
			svgedit.path.path.endChanges("Move path point");
		},
		fixEnd: function(elem) {
			// Adds an extra segment if the last seg before a Z doesn't end
			// at its M point
			// M0,0 L0,100 L100,100 z
			var segList = elem.pathSegList;
			var len = segList.numberOfItems;
			var last_m;
			for (var i = 0; i < len; ++i) {
				var item = segList.getItem(i);
				if (item.pathSegType === 2) {
					last_m = item;
				}
				
				if (item.pathSegType === 1) {
					var prev = segList.getItem(i-1);
					if (prev.x != last_m.x || prev.y != last_m.y) {
						// Add an L segment here
						var newseg = elem.createSVGPathSegLinetoAbs(last_m.x, last_m.y);
						svgedit.path.insertItemBefore(elem, newseg, i);
						// Can this be done better?
						pathActions.fixEnd(elem);
						break;
					}
					
				}
			}
			if (svgedit.browser.isWebkit()) resetD(elem);
		},
		// Convert a path to one with only absolute or relative values
		convertPath: function(path, toRel) {
			var segList = path.pathSegList;
			var len = segList.numberOfItems;
			var curx = 0, cury = 0;
			var d = "";
			var last_m = null;
			
			for (var i = 0; i < len; ++i) {
				var seg = segList.getItem(i);
				// if these properties are not in the segment, set them to zero
				var x = seg.x || 0,
					y = seg.y || 0,
					x1 = seg.x1 || 0,
					y1 = seg.y1 || 0,
					x2 = seg.x2 || 0,
					y2 = seg.y2 || 0;
	
				var type = seg.pathSegType;
				var letter = pathMap[type]['to'+(toRel?'Lower':'Upper')+'Case']();
				
				var addToD = function(pnts, more, last) {
					var str = '';
					var more = more?' '+more.join(' '):'';
					var last = last?' '+svgedit.units.shortFloat(last):'';
					$.each(pnts, function(i, pnt) {
						pnts[i] = svgedit.units.shortFloat(pnt);
					});
					d += letter + pnts.join(' ') + more + last;
				};
				
				switch (type) {
					case 1: // z,Z closepath (Z/z)
						d += "z";
						break;
					case 12: // absolute horizontal line (H)
						x -= curx;
					case 13: // relative horizontal line (h)
						if (toRel) {
							curx += x;
							letter = 'l';
						} else {
							x += curx;
							curx = x;
							letter = 'L';
						}
						// Convert to "line" for easier editing
						addToD([[x, cury]]);
						break;
					case 14: // absolute vertical line (V)
						y -= cury;
					case 15: // relative vertical line (v)
						if (toRel) {
							cury += y;
							letter = 'l';
						} else {
							y += cury;
							cury = y;
							letter = 'L';
						}
						// Convert to "line" for easier editing
						addToD([[curx, y]]);
						break;
					case 2: // absolute move (M)
					case 4: // absolute line (L)
					case 18: // absolute smooth quad (T)
						x -= curx;
						y -= cury;
					case 5: // relative line (l)
					case 3: // relative move (m)
						// If the last segment was a "z", this must be relative to 
						if (last_m && segList.getItem(i-1).pathSegType === 1 && !toRel) {
							curx = last_m[0];
							cury = last_m[1];
						}
					
					case 19: // relative smooth quad (t)
						if (toRel) {
							curx += x;
							cury += y;
						} else {
							x += curx;
							y += cury;
							curx = x;
							cury = y;
						}
						if (type === 3) last_m = [curx, cury];
						
						addToD([[x, y]]);
						break;
					case 6: // absolute cubic (C)
						x -= curx; x1 -= curx; x2 -= curx;
						y -= cury; y1 -= cury; y2 -= cury;
					case 7: // relative cubic (c)
						if (toRel) {
							curx += x;
							cury += y;
						} else {
							x += curx; x1 += curx; x2 += curx;
							y += cury; y1 += cury; y2 += cury;
							curx = x;
							cury = y;
						}
						addToD([[x1, y1], [x2, y2], [x, y]]);
						break;
					case 8: // absolute quad (Q)
						x -= curx; x1 -= curx;
						y -= cury; y1 -= cury;
					case 9: // relative quad (q) 
						if (toRel) {
							curx += x;
							cury += y;
						} else {
							x += curx; x1 += curx;
							y += cury; y1 += cury;
							curx = x;
							cury = y;
						}
						addToD([[x1, y1],[x, y]]);
						break;
					case 10: // absolute elliptical arc (A)
						x -= curx;
						y -= cury;
					case 11: // relative elliptical arc (a)
						if (toRel) {
							curx += x;
							cury += y;
						} else {
							x += curx;
							y += cury;
							curx = x;
							cury = y;
						}
						addToD([[seg.r1, seg.r2]], [
								seg.angle,
								(seg.largeArcFlag ? 1 : 0),
								(seg.sweepFlag ? 1 : 0)
							], [x, y]
						);
						break;
					case 16: // absolute smooth cubic (S)
						x -= curx; x2 -= curx;
						y -= cury; y2 -= cury;
					case 17: // relative smooth cubic (s)
						if (toRel) {
							curx += x;
							cury += y;
						} else {
							x += curx; x2 += curx;
							y += cury; y2 += cury;
							curx = x;
							cury = y;
						}
						addToD([[x2, y2],[x, y]]);
						break;
				} // switch on path segment type
			} // for each segment
			return d;
		}
	};
}();
// end pathActions

// Group: Serialization

// Function: removeUnusedDefElems
// Looks at DOM elements inside the <defs> to see if they are referred to,
// removes them from the DOM if they are not.
// 
// Returns:
// The amount of elements that were removed
var removeUnusedDefElems = this.removeUnusedDefElems = function() {
	var defs = svgcontent.getElementsByTagNameNS(NS.SVG, "defs");
	if (!defs || !defs.length) return 0;
	
// 	if (!defs.firstChild) return;
	
	var defelem_uses = [],
		numRemoved = 0;
	var attrs = ['fill', 'stroke', 'filter', 'marker-start', 'marker-mid', 'marker-end'];
	var alen = attrs.length;
	
	var all_els = svgcontent.getElementsByTagNameNS(NS.SVG, '*');
	var all_len = all_els.length;
	
	for (var i=0; i<all_len; i++) {
		var el = all_els[i];
		for (var j = 0; j < alen; j++) {
			var ref = svgedit.utilities.getUrlFromAttr(el.getAttribute(attrs[j]));
			if (ref) {
				defelem_uses.push(ref.substr(1));
			}
		}
		
		// gradients can refer to other gradients
		var href = getHref(el);
		if (href && href.indexOf('#') === 0) {
			defelem_uses.push(href.substr(1));
		}
	}
	
	var defelems = $(defs).find("linearGradient, radialGradient, filter, marker, svg, symbol");
		defelem_ids = [],
		i = defelems.length;
	while (i--) {
		var defelem = defelems[i];
		var id = defelem.id;
		if (defelem_uses.indexOf(id) < 0) {
			// Not found, so remove (but remember)
			removedElements[id] = defelem;
			defelem.parentNode.removeChild(defelem);
			numRemoved++;
		}
	}

	return numRemoved;
};

// Function: svgCanvasToString
// Main function to set up the SVG content for output 
//
// Returns: 
// String containing the SVG image for output
this.svgCanvasToString = function() {
	// keep calling it until there are none to remove
	while (removeUnusedDefElems() > 0) {}
	
	pathActions.clear(true);
	
	// Keep SVG-Edit comment on top
	$.each(svgcontent.childNodes, function(i, node) {
		if (i && node.nodeType === 8 && node.data.indexOf('Created with') >= 0) {
			svgcontent.insertBefore(node, svgcontent.firstChild);
		}
	});
	
	// Move out of in-group editing mode
	if (current_group) {
		leaveContext();
		selectOnly([current_group]);
	}
	
	var naked_svgs = [];
	
	// Unwrap gsvg if it has no special attributes (only id and style)
	$(svgcontent).find('g:data(gsvg)').each(function() {
		var attrs = this.attributes;
		var len = attrs.length;
		for (var i=0; i<len; i++) {
			if (attrs[i].nodeName == 'id' || attrs[i].nodeName == 'style') {
				len--;
			}
		}
		// No significant attributes, so ungroup
		if (len <= 0) {
			var svg = this.firstChild;
			naked_svgs.push(svg);
			$(this).replaceWith(svg);
		}
	});
	var output = this.svgToString(svgcontent, 0);
	
	// Rewrap gsvg
	if (naked_svgs.length) {
		$(naked_svgs).each(function() {
			groupSvgElem(this);
		});
	}
	
	return output;
};

// Function: svgToString
// Sub function ran on each SVG element to convert it to a string as desired
// 
// Parameters: 
// elem - The SVG element to convert
// indent - Integer with the amount of spaces to indent this tag
//
// Returns: 
// String with the given element as an SVG tag
this.svgToString = function(elem, indent) {
	var out = [], 
		toXml = svgedit.utilities.toXml;
	var unit = curConfig.baseUnit;
	var unit_re = new RegExp('^-?[\\d\\.]+' + unit + '$');

	if (elem) {
		cleanupElement(elem);
		var attrs = elem.attributes,
			attr,
			i,
			childs = elem.childNodes;
		
		for (var i=0; i<indent; i++) out.push(" ");
		out.push("<"); out.push(elem.nodeName);
		if (elem.id === 'svgcontent') {
			// Process root element separately
			var res = getResolution();
			
			var vb = "";
			// TODO: Allow this by dividing all values by current baseVal
			// Note that this also means we should properly deal with this on import
// 			if (curConfig.baseUnit !== "px") {
// 				var unit = curConfig.baseUnit;
// 				var unit_m = svgedit.units.getTypeMap()[unit];
// 				res.w = svgedit.units.shortFloat(res.w / unit_m)
// 				res.h = svgedit.units.shortFloat(res.h / unit_m)
// 				vb = ' viewBox="' + [0, 0, res.w, res.h].join(' ') + '"';
// 				res.w += unit;
// 				res.h += unit;
// 			}
			
			if (unit !== "px") {
				res.w = svgedit.units.convertUnit(res.w, unit) + unit;
				res.h = svgedit.units.convertUnit(res.h, unit) + unit;
			}
			
			out.push(' width="' + res.w + '" height="' + res.h + '"' + vb + ' xmlns="'+NS.SVG+'"');
			
			var nsuris = {};
			
			// Check elements for namespaces, add if found
			$(elem).find('*').andSelf().each(function() {
				var el = this;
				// for some elements have no attribute
				var uri = this.namespaceURI;
				if(uri && !nsuris[uri] && nsMap[uri] && nsMap[uri] !== 'xmlns' && nsMap[uri] !== 'xml' ) {
				  nsuris[uri] = true;
				  out.push(" xmlns:" + nsMap[uri] + '="' + uri +'"');
				}
		
				$.each(this.attributes, function(i, attr) {
					var uri = attr.namespaceURI;
					if (uri && !nsuris[uri] && nsMap[uri] !== 'xmlns' && nsMap[uri] !== 'xml' ) {
						nsuris[uri] = true;
						out.push(" xmlns:" + nsMap[uri] + '="' + uri +'"');
					}
				});
			});
			
			var i = attrs.length;
			var attr_names = ['width', 'height', 'xmlns', 'x', 'y', 'viewBox', 'id', 'overflow'];
			while (i--) {
				attr = attrs.item(i);
				var attrVal = toXml(attr.nodeValue);
				
				// Namespaces have already been dealt with, so skip
				if (attr.nodeName.indexOf('xmlns:') === 0) continue;

				// only serialize attributes we don't use internally
				if (attrVal != "" && attr_names.indexOf(attr.localName) == -1) {

					if (!attr.namespaceURI || nsMap[attr.namespaceURI]) {
						out.push(' '); 
						out.push(attr.nodeName); out.push("=\"");
						out.push(attrVal); out.push("\"");
					}
				}
			}
		} else {
			// Skip empty defs
			if (elem.nodeName === 'defs' && !elem.firstChild) return;
		
			var moz_attrs = ['-moz-math-font-style', '_moz-math-font-style'];
			for (var i=attrs.length-1; i>=0; i--) {
				attr = attrs.item(i);
				var attrVal = toXml(attr.nodeValue);
				//remove bogus attributes added by Gecko
				if (moz_attrs.indexOf(attr.localName) >= 0) continue;
				if (attrVal != "") {
					if (attrVal.indexOf('pointer-events') === 0) continue;
					if (attr.localName === "class" && attrVal.indexOf('se_') === 0) continue;
					out.push(" "); 
					if (attr.localName === 'd') attrVal = pathActions.convertPath(elem, true);
					if (!isNaN(attrVal)) {
						attrVal = svgedit.units.shortFloat(attrVal);
					} else if (unit_re.test(attrVal)) {
						attrVal = svgedit.units.shortFloat(attrVal) + unit;
					}
					
					// Embed images when saving 
					if (save_options.apply
						&& elem.nodeName === 'image' 
						&& attr.localName === 'href'
						&& save_options.images
						&& save_options.images === 'embed') 
					{
						var img = encodableImages[attrVal];
						if (img) attrVal = img;
					}
					
					// map various namespaces to our fixed namespace prefixes
					// (the default xmlns attribute itself does not get a prefix)
					if (!attr.namespaceURI || attr.namespaceURI == NS.SVG || nsMap[attr.namespaceURI]) {
						out.push(attr.nodeName); out.push("=\"");
						out.push(attrVal); out.push("\"");
					}
				}
			}
		}

		if (elem.hasChildNodes()) {
			out.push(">");
			indent++;
			var bOneLine = false;
			
			for (var i=0; i<childs.length; i++) {
				var child = childs.item(i);
				switch(child.nodeType) {
				case 1: // element node
					out.push("\n");
					out.push(this.svgToString(childs.item(i), indent));
					break;
				case 3: // text node
					var str = child.nodeValue.replace(/^\s+|\s+$/g, "");
					if (str != "") {
						bOneLine = true;
						out.push(toXml(str) + "");
					}
					break;
				case 4: // cdata node
					out.push("\n");
					out.push(new Array(indent+1).join(" "));
					out.push("<![CDATA[");
					out.push(child.nodeValue);
					out.push("]]>");
					break;
				case 8: // comment
					out.push("\n");
					out.push(new Array(indent+1).join(" "));
					out.push("<!--");
					out.push(child.data);
					out.push("-->");
					break;
				} // switch on node type
			}
			indent--;
			if (!bOneLine) {
				out.push("\n");
				for (var i=0; i<indent; i++) out.push(" ");
			}
			out.push("</"); out.push(elem.nodeName); out.push(">");
		} else {
			out.push("/>");
		}
	}
	return out.join('');
}; // end svgToString()

// Function: embedImage
// Converts a given image file to a data URL when possible, then runs a given callback
//
// Parameters: 
// val - String with the path/URL of the image
// callback - Optional function to run when image data is found, supplies the
// result (data URL or false) as first parameter.
this.embedImage = function(val, callback) {
	// load in the image and once it's loaded, get the dimensions
	$(new Image()).load(function() {
		// create a canvas the same size as the raster image
		var canvas = document.createElement("canvas");
		canvas.width = this.width;
		canvas.height = this.height;
		// load the raster image into the canvas
		canvas.getContext("2d").drawImage(this, 0, 0);
		// retrieve the data: URL
		try {
			var urldata = ';svgedit_url=' + encodeURIComponent(val);
			urldata = canvas.toDataURL().replace(';base64', urldata+';base64');
			encodableImages[val] = urldata;
		} catch(e) {
			encodableImages[val] = false;
		}
		last_good_img_url = val;
		if (callback) callback(encodableImages[val]);
	}).attr('src', val);
};

// Function: setGoodImage
// Sets a given URL to be a "last good image" URL
this.setGoodImage = function(val) {
	last_good_img_url = val;
};

this.open = function() {
	// Nothing by default, handled by optional widget/extension
};

// Function: save
// Serializes the current drawing into SVG XML text and returns it to the 'saved' handler.
// This function also includes the XML prolog.  Clients of the SvgCanvas bind their save
// function to the 'saved' event.
//
// Returns: 
// Nothing
this.save = function(opts) {
	// remove the selected outline before serializing
	clearSelection();
	// Update save options if provided
	if (opts) $.extend(save_options, opts);
	save_options.apply = true;
	
	// no need for doctype, see http://jwatt.org/svg/authoring/#doctype-declaration
	var str = this.svgCanvasToString();
	call("saved", str);
};

// Function: rasterExport
// Generates a Data URL based on the current image, then calls "exported" 
// with an object including the string, image information, and any issues found
this.rasterExport = function(imgType, quality) {
    var mimeType = 'image/' + imgType.toLowerCase();

    // remove the selected outline before serializing
	clearSelection();
	
	// Check for known CanVG issues 
	var issues = [];
	
	// Selector and notice
	var issue_list = {
		'feGaussianBlur': uiStrings.exportNoBlur,
		'foreignObject': uiStrings.exportNoforeignObject,
		'[stroke-dasharray]': uiStrings.exportNoDashArray
	};
	var content = $(svgcontent);
	
	// Add font/text check if Canvas Text API is not implemented
	if (!("font" in $('<canvas>')[0].getContext('2d'))) {
		issue_list['text'] = uiStrings.exportNoText;
	}
	
	$.each(issue_list, function(sel, descr) {
		if (content.find(sel).length) {
			issues.push(descr);
		}
	});

	var str = this.svgCanvasToString();
	call("exported", {svg: str, issues: issues, type: imgType, mimeType: mimeType, quality: quality});
};

// Function: getSvgString
// Returns the current drawing as raw SVG XML text.
//
// Returns:
// The current drawing as raw SVG XML text.
this.getSvgString = function() {
	save_options.apply = false;
	return this.svgCanvasToString();
};

// Function: randomizeIds
// This function determines whether to use a nonce in the prefix, when
// generating IDs for future documents in SVG-Edit.
// 
//  Parameters:
//   an optional boolean, which, if true, adds a nonce to the prefix. Thus
//	 svgCanvas.randomizeIds()  <==> svgCanvas.randomizeIds(true)
//
// if you're controlling SVG-Edit externally, and want randomized IDs, call
// this BEFORE calling svgCanvas.setSvgString
//
this.randomizeIds = function() {
	if (arguments.length > 0 && arguments[0] == false) {
		svgedit.draw.randomizeIds(false, getCurrentDrawing());
	} else {
		svgedit.draw.randomizeIds(true, getCurrentDrawing());
	}
};

// Function: uniquifyElems
// Ensure each element has a unique ID
//
// Parameters:
// g - The parent element of the tree to give unique IDs
var uniquifyElems = this.uniquifyElems = function(g) {
	var ids = {};
	// TODO: Handle markers and connectors.  These are not yet re-identified properly
	// as their referring elements do not get remapped.
	//
	// <marker id='se_marker_end_svg_7'/>
	// <polyline id='svg_7' se:connector='svg_1 svg_6' marker-end='url(#se_marker_end_svg_7)'/>
	// 
	// Problem #1: if svg_1 gets renamed, we do not update the polyline's se:connector attribute
	// Problem #2: if the polyline svg_7 gets renamed, we do not update the marker id nor the polyline's marker-end attribute
	var ref_elems = ["filter", "linearGradient", "pattern",	"radialGradient", "symbol", "textPath", "use"];
	
	svgedit.utilities.walkTree(g, function(n) {
		// if it's an element node
		if (n.nodeType == 1) {
			// and the element has an ID
			if (n.id) {
				// and we haven't tracked this ID yet
				if (!(n.id in ids)) {
					// add this id to our map
					ids[n.id] = {elem:null, attrs:[], hrefs:[]};
				}
				ids[n.id]["elem"] = n;
			}
			
			// now search for all attributes on this element that might refer
			// to other elements
			$.each(ref_attrs, function(i, attr) {
				var attrnode = n.getAttributeNode(attr);
				if (attrnode) {
					// the incoming file has been sanitized, so we should be able to safely just strip off the leading #
					var url = svgedit.utilities.getUrlFromAttr(attrnode.value),
						refid = url ? url.substr(1) : null;
					if (refid) {
						if (!(refid in ids)) {
							// add this id to our map
							ids[refid] = {elem:null, attrs:[], hrefs:[]};
						}
						ids[refid]["attrs"].push(attrnode);
					}
				}
			});
			
			// check xlink:href now
			var href = svgedit.utilities.getHref(n);
			// TODO: what if an <image> or <a> element refers to an element internally?
			if (href && ref_elems.indexOf(n.nodeName) >= 0) {
				var refid = href.substr(1);
				if (refid) {
					if (!(refid in ids)) {
						// add this id to our map
						ids[refid] = {elem:null, attrs:[], hrefs:[]};
					}
					ids[refid]["hrefs"].push(n);
				}
			}						
		}
	});
	
	// in ids, we now have a map of ids, elements and attributes, let's re-identify
	for (var oldid in ids) {
		if (!oldid) continue;
		var elem = ids[oldid]["elem"];
		if (elem) {
			var newid = getNextId();
			
			// assign element its new id
			elem.id = newid;
			
			// remap all url() attributes
			var attrs = ids[oldid]["attrs"];
			var j = attrs.length;
			while (j--) {
				var attr = attrs[j];
				attr.ownerElement.setAttribute(attr.name, "url(#" + newid + ")");
			}
			
			// remap all href attributes
			var hreffers = ids[oldid]["hrefs"];
			var k = hreffers.length;
			while (k--) {
				var hreffer = hreffers[k];
				svgedit.utilities.setHref(hreffer, "#"+newid);
			}
		}
	}
};

// Function setUseData
// Assigns reference data for each use element
var setUseData = this.setUseData = function(parent) {
	var elems = $(parent);
	
	if (parent.tagName !== 'use') {
		elems = elems.find('use');
	}
	
	elems.each(function() {
		var id = getHref(this).substr(1);
		var ref_elem = svgedit.utilities.getElem(id);
		if (!ref_elem) return;
		$(this).data('ref', ref_elem);
		if (ref_elem.tagName == 'symbol' || ref_elem.tagName == 'svg') {
			$(this).data('symbol', ref_elem).data('ref', ref_elem);
		}
	});
};

// Function convertGradients
// Converts gradients from userSpaceOnUse to objectBoundingBox
var convertGradients = this.convertGradients = function(elem) {
	var elems = $(elem).find('linearGradient, radialGradient');
	if (!elems.length && svgedit.browser.isWebkit()) {
		// Bug in webkit prevents regular *Gradient selector search
		elems = $(elem).find('*').filter(function() {
			return (this.tagName.indexOf('Gradient') >= 0);
		});
	}
	
	elems.each(function() {
		var grad = this;
		if ($(grad).attr('gradientUnits') === 'userSpaceOnUse') {
			// TODO: Support more than one element with this ref by duplicating parent grad
			var elems = $(svgcontent).find('[fill="url(#' + grad.id + ')"],[stroke="url(#' + grad.id + ')"]');
			if (!elems.length) return;
			
			// get object's bounding box
			var bb = svgedit.utilities.getBBox(elems[0]);
			
			// This will occur if the element is inside a <defs> or a <symbol>,
			// in which we shouldn't need to convert anyway.
			if (!bb) return;
			
			if (grad.tagName === 'linearGradient') {
				var g_coords = $(grad).attr(['x1', 'y1', 'x2', 'y2']);
				
				// If has transform, convert
				var tlist = grad.gradientTransform.baseVal;
				if (tlist && tlist.numberOfItems > 0) {
					var m = svgedit.math.transformListToTransform(tlist).matrix;
					var pt1 = svgedit.math.transformPoint(g_coords.x1, g_coords.y1, m);
					var pt2 = svgedit.math.transformPoint(g_coords.x2, g_coords.y2, m);
					
					g_coords.x1 = pt1.x;
					g_coords.y1 = pt1.y;
					g_coords.x2 = pt2.x;
					g_coords.y2 = pt2.y;
					grad.removeAttribute('gradientTransform');
				}
				
				$(grad).attr({
					x1: (g_coords.x1 - bb.x) / bb.width,
					y1: (g_coords.y1 - bb.y) / bb.height,
					x2: (g_coords.x2 - bb.x) / bb.width,
					y2: (g_coords.y2 - bb.y) / bb.height
				});
				grad.removeAttribute('gradientUnits');
			} else {
				// Note: radialGradient elements cannot be easily converted 
				// because userSpaceOnUse will keep circular gradients, while
				// objectBoundingBox will x/y scale the gradient according to
				// its bbox. 
				
				// For now we'll do nothing, though we should probably have
				// the gradient be updated as the element is moved, as 
				// inkscape/illustrator do.
			
//		 				var g_coords = $(grad).attr(['cx', 'cy', 'r']);
//		 				
// 						$(grad).attr({
// 							cx: (g_coords.cx - bb.x) / bb.width,
// 							cy: (g_coords.cy - bb.y) / bb.height,
// 							r: g_coords.r
// 						});
// 						
// 						grad.removeAttribute('gradientUnits');
			}
		}
	});
};

// Function: convertToGroup
// Converts selected/given <use> or child SVG element to a group
var convertToGroup = this.convertToGroup = function(elem) {
	if (!elem) {
		elem = selectedElements[0];
	}
	var $elem = $(elem);
	var batchCmd = new svgedit.history.BatchCommand();
	var ts;
	
	if ($elem.data('gsvg')) {
		// Use the gsvg as the new group
		var svg = elem.firstChild;
		var pt = $(svg).attr(['x', 'y']);
		
		$(elem.firstChild.firstChild).unwrap();
		$(elem).removeData('gsvg');
		
		var tlist = svgedit.transformlist.getTransformList(elem);
		var xform = svgroot.createSVGTransform();
		xform.setTranslate(pt.x, pt.y);
		tlist.appendItem(xform);
		svgedit.recalculate.recalculateDimensions(elem);
		call("selected", [elem]);
	} else if ($elem.data('symbol')) {
		elem = $elem.data('symbol');
		
		ts = $elem.attr('transform');
		var pos = $elem.attr(['x', 'y']);

		var vb = elem.getAttribute('viewBox');
		
		if (vb) {
			var nums = vb.split(' ');
			pos.x -= +nums[0];
			pos.y -= +nums[1];
		}
		
		// Not ideal, but works
		ts += " translate(" + (pos.x || 0) + "," + (pos.y || 0) + ")";
		
		var prev = $elem.prev();
		
		// Remove <use> element
		batchCmd.addSubCommand(new svgedit.history.RemoveElementCommand($elem[0], $elem[0].nextSibling, $elem[0].parentNode));
		$elem.remove();
		
		// See if other elements reference this symbol
		var has_more = $(svgcontent).find('use:data(symbol)').length;
			
		var g = svgdoc.createElementNS(NS.SVG, "g");
		var childs = elem.childNodes;
		
		for (var i = 0; i < childs.length; i++) {
			g.appendChild(childs[i].cloneNode(true));
		}
		
		// Duplicate the gradients for Gecko, since they weren't included in the <symbol>
		if (svgedit.browser.isGecko()) {
			var dupeGrads = $(svgedit.utilities.findDefs()).children('linearGradient,radialGradient,pattern').clone();
			$(g).append(dupeGrads);
		}
		
		if (ts) {
			g.setAttribute("transform", ts);
		}
		
		var parent = elem.parentNode;
		
		uniquifyElems(g);
		
		// Put the dupe gradients back into <defs> (after uniquifying them)
		if (svgedit.browser.isGecko()) {
			$(findDefs()).append( $(g).find('linearGradient,radialGradient,pattern') );
		}
	
		// now give the g itself a new id
		g.id = getNextId();
		
		prev.after(g);
		
		if (parent) {
			if (!has_more) {
				// remove symbol/svg element
				var nextSibling = elem.nextSibling;
				parent.removeChild(elem);
				batchCmd.addSubCommand(new svgedit.history.RemoveElementCommand(elem, nextSibling, parent));
			}
			batchCmd.addSubCommand(new svgedit.history.InsertElementCommand(g));
		}
		
		setUseData(g);
		
		if (svgedit.browser.isGecko()) {
			convertGradients(svgedit.utilities.findDefs());
		} else {
			convertGradients(g);
		}
		
		// recalculate dimensions on the top-level children so that unnecessary transforms
		// are removed
		svgedit.utilities.walkTreePost(g, function(n){
			try {
				svgedit.recalculate.recalculateDimensions(n);
			} catch(e) {
				console.log(e);
			}
		});
		
		// Give ID for any visible element missing one
		$(g).find(visElems).each(function() {
			if (!this.id) this.id = getNextId();
		});
		
		selectOnly([g]);
		
		var cm = pushGroupProperties(g, true);
		if (cm) {
			batchCmd.addSubCommand(cm);
		}

		addCommandToHistory(batchCmd);
		
	} else {
		console.log('Unexpected element to ungroup:', elem);
	}
};

//   
// Function: setSvgString
// This function sets the current drawing as the input SVG XML.
//
// Parameters:
// xmlString - The SVG as XML text.
//
// Returns:
// This function returns false if the set was unsuccessful, true otherwise.
this.setSvgString = function(xmlString) {
	try {
		// convert string into XML document
		var newDoc = svgedit.utilities.text2xml(xmlString);

		this.prepareSvg(newDoc);

		var batchCmd = new svgedit.history.BatchCommand("Change Source");

		// remove old svg document
		var nextSibling = svgcontent.nextSibling;
		var oldzoom = svgroot.removeChild(svgcontent);
		batchCmd.addSubCommand(new svgedit.history.RemoveElementCommand(oldzoom, nextSibling, svgroot));
	
		// set new svg document
		// If DOM3 adoptNode() available, use it. Otherwise fall back to DOM2 importNode()
		if (svgdoc.adoptNode) {
			svgcontent = svgdoc.adoptNode(newDoc.documentElement);
		}
		else {
			svgcontent = svgdoc.importNode(newDoc.documentElement, true);
		}
		
		svgroot.appendChild(svgcontent);
		var content = $(svgcontent);
		
		canvas.current_drawing_ = new svgedit.draw.Drawing(svgcontent, idprefix);
		
		// retrieve or set the nonce
		var nonce = getCurrentDrawing().getNonce();
		if (nonce) {
			call("setnonce", nonce);
		} else {
			call("unsetnonce");
		}
		
		// change image href vals if possible
		content.find('image').each(function() {
			var image = this;
			preventClickDefault(image);
			var val = getHref(this);
			if (val) {
				if (val.indexOf('data:') === 0) {
					// Check if an SVG-edit data URI
					var m = val.match(/svgedit_url=(.*?);/);
					if (m) {
						var url = decodeURIComponent(m[1]);
						$(new Image()).load(function () {
							image.setAttributeNS(NS.XLINK, 'xlink:href', url);
						}).attr('src', url);
					}
				}
				// Add to encodableImages if it loads
				canvas.embedImage(val);
			}
		});
	
		// Wrap child SVGs in group elements
		content.find('svg').each(function() {
			// Skip if it's in a <defs>
			if ($(this).closest('defs').length) return;
		
			uniquifyElems(this);
		
			// Check if it already has a gsvg group
			var pa = this.parentNode;
			if (pa.childNodes.length === 1 && pa.nodeName === 'g') {
				$(pa).data('gsvg', this);
				pa.id = pa.id || getNextId();
			} else {
				groupSvgElem(this);
			}
		});
		
		// For Firefox: Put all paint elems in defs
		if (svgedit.browser.isGecko()) {
			content.find('linearGradient, radialGradient, pattern').appendTo(svgedit.utilities.findDefs());
		}

		// Set ref element for <use> elements
		
		// TODO: This should also be done if the object is re-added through "redo"
		setUseData(content);
		
		convertGradients(content[0]);
		
		// recalculate dimensions on the top-level children so that unnecessary transforms
		// are removed
		svgedit.utilities.walkTreePost(svgcontent, function(n) {
			try {
				svgedit.recalculate.recalculateDimensions(n);
			} catch(e) {
				console.log(e);
			}
		});
		
		var attrs = {
			id: 'svgcontent',
			overflow: curConfig.show_outside_canvas?'visible':'hidden'
		};
		
		var percs = false;
		
		// determine proper size
		if (content.attr("viewBox")) {
			var vb = content.attr("viewBox").split(' ');
			attrs.width = vb[2];
			attrs.height = vb[3];
		}
		// handle content that doesn't have a viewBox
		else {
			$.each(['width', 'height'], function(i, dim) {
				// Set to 100 if not given
				var val = content.attr(dim);
				
				if (!val) val = '100%';
				
				if ((val+'').substr(-1) === "%") {
					// Use user units if percentage given
					percs = true;
				} else {
					attrs[dim] = svgedit.units.convertToNum(dim, val);
				}
			});
		}
		
		// identify layers
		identifyLayers();
		
		// Give ID for any visible layer children missing one
		content.children().find(visElems).each(function() {
			if (!this.id) this.id = getNextId();
		});
		
		// Percentage width/height, so let's base it on visible elements
		if (percs) {
			var bb = getStrokedBBox();
			attrs.width = bb.width + bb.x;
			attrs.height = bb.height + bb.y;
		}
		
		// Just in case negative numbers are given or 
		// result from the percs calculation
		if (attrs.width <= 0) attrs.width = 100;
		if (attrs.height <= 0) attrs.height = 100;
		
		content.attr(attrs);
		this.contentW = attrs['width'];
		this.contentH = attrs['height'];
		
		batchCmd.addSubCommand(new svgedit.history.InsertElementCommand(svgcontent));
		// update root to the correct size
		var changes = content.attr(["width", "height"]);
		batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(svgroot, changes));
		
		// reset zoom
		current_zoom = 1;
		
		// reset transform lists
		svgedit.transformlist.resetListMap();
		clearSelection();
		svgedit.path.clearData();
		svgroot.appendChild(selectorManager.selectorParentGroup);
		
		addCommandToHistory(batchCmd);
		call("changed", [svgcontent]);
	} catch(e) {
		console.log(e);
		return false;
	}

	return true;
};

// Function: importSvgString
// This function imports the input SVG XML as a <symbol> in the <defs>, then adds a
// <use> to the current layer.
//
// Parameters:
// xmlString - The SVG as XML text.
//
// Returns:
// This function returns false if the import was unsuccessful, true otherwise.
// TODO: 
// * properly handle if namespace is introduced by imported content (must add to svgcontent
// and update all prefixes in the imported node)
// * properly handle recalculating dimensions, recalculateDimensions() doesn't handle
// arbitrary transform lists, but makes some assumptions about how the transform list 
// was obtained
// * import should happen in top-left of current zoomed viewport	
this.importSvgString = function(xmlString) {

	try {
		// Get unique ID
		var uid = svgedit.utilities.encode64(xmlString.length + xmlString).substr(0,32);
		
		var useExisting = false;

		// Look for symbol and make sure symbol exists in image
		if (import_ids[uid]) {
			if ( $(import_ids[uid].symbol).parents('#svgroot').length ) {
				useExisting = true;
			}
		}
		
		var batchCmd = new svgedit.history.BatchCommand("Import SVG");
	
		if (useExisting) {
			var symbol = import_ids[uid].symbol;
			var ts = import_ids[uid].xform;
		} else {
			// convert string into XML document
			var newDoc = svgedit.utilities.text2xml(xmlString);
	
			this.prepareSvg(newDoc);
	
			// import new svg document into our document
			var svg;
			// If DOM3 adoptNode() available, use it. Otherwise fall back to DOM2 importNode()
			if (svgdoc.adoptNode) {
				svg = svgdoc.adoptNode(newDoc.documentElement);
			} else {
				svg = svgdoc.importNode(newDoc.documentElement, true);
			}
			
			uniquifyElems(svg);
			
			var innerw = svgedit.units.convertToNum('width', svg.getAttribute("width")),
				innerh = svgedit.units.convertToNum('height', svg.getAttribute("height")),
				innervb = svg.getAttribute("viewBox"),
				// if no explicit viewbox, create one out of the width and height
				vb = innervb ? innervb.split(" ") : [0, 0, innerw, innerh];
			for (var j = 0; j < 4; ++j)
				vb[j] = +(vb[j]);
	
			// TODO: properly handle preserveAspectRatio
			var canvasw = +svgcontent.getAttribute("width"),
				canvash = +svgcontent.getAttribute("height");
			// imported content should be 1/3 of the canvas on its largest dimension
			
			if (innerh > innerw) {
				var ts = "scale(" + (canvash/3)/vb[3] + ")";
			} else {
				var ts = "scale(" + (canvash/3)/vb[2] + ")";
			}
			
			// Hack to make recalculateDimensions understand how to scale
			ts = "translate(0) " + ts + " translate(0)";
			
			var symbol = svgdoc.createElementNS(NS.SVG, "symbol");
			var defs = svgedit.utilities.findDefs();
			
			if (svgedit.browser.isGecko()) {
				// Move all gradients into root for Firefox, workaround for this bug:
				// https://bugzilla.mozilla.org/show_bug.cgi?id=353575
				// TODO: Make this properly undo-able.
				$(svg).find('linearGradient, radialGradient, pattern').appendTo(defs);
			}
	
			while (svg.firstChild) {
				var first = svg.firstChild;
				symbol.appendChild(first);
			}
			var attrs = svg.attributes;
			for (var i=0; i < attrs.length; i++) {
				var attr = attrs[i];
				symbol.setAttribute(attr.nodeName, attr.nodeValue);
			}
			symbol.id = getNextId();
			
			// Store data
			import_ids[uid] = {
				symbol: symbol,
				xform: ts
			};
			
			svgedit.utilities.findDefs().appendChild(symbol);
			batchCmd.addSubCommand(new svgedit.history.InsertElementCommand(symbol));
		}
		
		var use_el = svgdoc.createElementNS(NS.SVG, "use");
		use_el.id = getNextId();
		setHref(use_el, "#" + symbol.id);
		
		(current_group || getCurrentDrawing().getCurrentLayer()).appendChild(use_el);
		batchCmd.addSubCommand(new svgedit.history.InsertElementCommand(use_el));
		clearSelection();
		
		use_el.setAttribute("transform", ts);
		svgedit.recalculate.recalculateDimensions(use_el);
		$(use_el).data('symbol', symbol).data('ref', symbol);
		addToSelection([use_el]);
		
		// TODO: Find way to add this in a recalculateDimensions-parsable way
// 				if (vb[0] != 0 || vb[1] != 0)
// 					ts = "translate(" + (-vb[0]) + "," + (-vb[1]) + ") " + ts;
		addCommandToHistory(batchCmd);
		call("changed", [svgcontent]);

	} catch(e) {
		console.log(e);
		return false;
	}

	return true;
};

// TODO(codedread): Move all layer/context functions in draw.js
// Layer API Functions

// Group: Layers

// Function: identifyLayers
// Updates layer system
var identifyLayers = canvas.identifyLayers = function() {
	leaveContext();
	getCurrentDrawing().identifyLayers();
};

// Function: createLayer
// Creates a new top-level layer in the drawing with the given name, sets the current layer 
// to it, and then clears the selection  This function then calls the 'changed' handler.
// This is an undoable action.
//
// Parameters:
// name - The given name
this.createLayer = function(name) {
	var batchCmd = new svgedit.history.BatchCommand("Create Layer");
	var new_layer = getCurrentDrawing().createLayer(name);
	batchCmd.addSubCommand(new svgedit.history.InsertElementCommand(new_layer));
	addCommandToHistory(batchCmd);
	clearSelection();
	call("changed", [new_layer]);
};

// Function: cloneLayer
// Creates a new top-level layer in the drawing with the given name, copies all the current layer's contents
// to it, and then clears the selection  This function then calls the 'changed' handler.
// This is an undoable action.
//
// Parameters:
// name - The given name
this.cloneLayer = function(name) {
	var batchCmd = new svgedit.history.BatchCommand("Duplicate Layer");
	var new_layer = svgdoc.createElementNS(NS.SVG, "g");
	var layer_title = svgdoc.createElementNS(NS.SVG, "title");
	layer_title.textContent = name;
	new_layer.appendChild(layer_title);
	var current_layer = getCurrentDrawing().getCurrentLayer();
	$(current_layer).after(new_layer);
	var childs = current_layer.childNodes;
	for (var i = 0; i < childs.length; i++) {
		var ch = childs[i];
		if (ch.localName == 'title') continue;
		new_layer.appendChild(copyElem(ch));
	}
	
	clearSelection();
	identifyLayers();

	batchCmd.addSubCommand(new svgedit.history.InsertElementCommand(new_layer));
	addCommandToHistory(batchCmd);
	canvas.setCurrentLayer(name);
	call("changed", [new_layer]);
};

// Function: deleteCurrentLayer
// Deletes the current layer from the drawing and then clears the selection. This function 
// then calls the 'changed' handler.  This is an undoable action.
this.deleteCurrentLayer = function() {
	var current_layer = getCurrentDrawing().getCurrentLayer();
	var nextSibling = current_layer.nextSibling;
	var parent = current_layer.parentNode;
	current_layer = getCurrentDrawing().deleteCurrentLayer();
	if (current_layer) {
		var batchCmd = new svgedit.history.BatchCommand("Delete Layer");
		// store in our Undo History
		batchCmd.addSubCommand(new svgedit.history.RemoveElementCommand(current_layer, nextSibling, parent));
		addCommandToHistory(batchCmd);
		clearSelection();
		call("changed", [parent]);
		return true;
	}
	return false;
};

// Function: setCurrentLayer
// Sets the current layer. If the name is not a valid layer name, then this function returns
// false. Otherwise it returns true. This is not an undo-able action.
//
// Parameters:
// name - the name of the layer you want to switch to.
//
// Returns:
// true if the current layer was switched, otherwise false
this.setCurrentLayer = function(name) {
	var result = getCurrentDrawing().setCurrentLayer(svgedit.utilities.toXml(name));
	if (result) {
		clearSelection();
	}
	return result;
};

// Function: renameCurrentLayer
// Renames the current layer. If the layer name is not valid (i.e. unique), then this function 
// does nothing and returns false, otherwise it returns true. This is an undo-able action.
// 
// Parameters:
// newname - the new name you want to give the current layer.  This name must be unique 
// among all layer names.
//
// Returns:
// true if the rename succeeded, false otherwise.
this.renameCurrentLayer = function(newname) {
	var drawing = getCurrentDrawing();
	if (drawing.current_layer) {
		var oldLayer = drawing.current_layer;
		// setCurrentLayer will return false if the name doesn't already exist
		// this means we are free to rename our oldLayer
		if (!canvas.setCurrentLayer(newname)) {
			var batchCmd = new svgedit.history.BatchCommand("Rename Layer");
			// find the index of the layer
			for (var i = 0; i < drawing.getNumLayers(); ++i) {
				if (drawing.all_layers[i][1] == oldLayer) break;
			}
			var oldname = drawing.getLayerName(i);
			drawing.all_layers[i][0] = svgedit.utilities.toXml(newname);
		
			// now change the underlying title element contents
			var len = oldLayer.childNodes.length;
			for (var i = 0; i < len; ++i) {
				var child = oldLayer.childNodes.item(i);
				// found the <title> element, now append all the
				if (child && child.tagName == "title") {
					// wipe out old name 
					while (child.firstChild) { child.removeChild(child.firstChild); }
					child.textContent = newname;

					batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(child, {"#text":oldname}));
					addCommandToHistory(batchCmd);
					call("changed", [oldLayer]);
					return true;
				}
			}
		}
		drawing.current_layer = oldLayer;
	}
	return false;
};

// Function: setCurrentLayerPosition
// Changes the position of the current layer to the new value. If the new index is not valid, 
// this function does nothing and returns false, otherwise it returns true. This is an
// undo-able action.
//
// Parameters:
// newpos - The zero-based index of the new position of the layer.  This should be between
// 0 and (number of layers - 1)
// 
// Returns:
// true if the current layer position was changed, false otherwise.
this.setCurrentLayerPosition = function(newpos) {
	var drawing = getCurrentDrawing();
	if (drawing.current_layer && newpos >= 0 && newpos < drawing.getNumLayers()) {
		for (var oldpos = 0; oldpos < drawing.getNumLayers(); ++oldpos) {
			if (drawing.all_layers[oldpos][1] == drawing.current_layer) break;
		}
		// some unknown error condition (current_layer not in all_layers)
		if (oldpos == drawing.getNumLayers()) { return false; }
		
		if (oldpos != newpos) {
			// if our new position is below us, we need to insert before the node after newpos
			var refLayer = null;
			var oldNextSibling = drawing.current_layer.nextSibling;
			if (newpos > oldpos ) {
				if (newpos < drawing.getNumLayers()-1) {
					refLayer = drawing.all_layers[newpos+1][1];
				}
			}
			// if our new position is above us, we need to insert before the node at newpos
			else {
				refLayer = drawing.all_layers[newpos][1];
			}
			svgcontent.insertBefore(drawing.current_layer, refLayer);
			addCommandToHistory(new svgedit.history.MoveElementCommand(drawing.current_layer, oldNextSibling, svgcontent));
			
			identifyLayers();
			canvas.setCurrentLayer(drawing.getLayerName(newpos));
			
			return true;
		}
	}
	
	return false;
};

// Function: setLayerVisibility
// Sets the visibility of the layer. If the layer name is not valid, this function return 
// false, otherwise it returns true. This is an undo-able action.
//
// Parameters:
// layername - the name of the layer to change the visibility
// bVisible - true/false, whether the layer should be visible
//
// Returns:
// true if the layer's visibility was set, false otherwise
this.setLayerVisibility = function(layername, bVisible) {
	var drawing = getCurrentDrawing();
	var prevVisibility = drawing.getLayerVisibility(layername);
	var layer = drawing.setLayerVisibility(layername, bVisible);
	if (layer) {
		var oldDisplay = prevVisibility ? 'inline' : 'none';
		addCommandToHistory(new svgedit.history.ChangeElementCommand(layer, {'display':oldDisplay}, 'Layer Visibility'));
	} else {
		return false;
	}
	
	if (layer == drawing.getCurrentLayer()) {
		clearSelection();
		pathActions.clear();
	}
//		call("changed", [selected]);	
	return true;
};

// Function: moveSelectedToLayer
// Moves the selected elements to layername. If the name is not a valid layer name, then false 
// is returned.  Otherwise it returns true. This is an undo-able action.
//
// Parameters:
// layername - the name of the layer you want to which you want to move the selected elements
//
// Returns:
// true if the selected elements were moved to the layer, false otherwise.
this.moveSelectedToLayer = function(layername) {
	// find the layer
	var layer = null;
	var drawing = getCurrentDrawing();
	for (var i = 0; i < drawing.getNumLayers(); ++i) {
		if (drawing.getLayerName(i) == layername) {
			layer = drawing.all_layers[i][1];
			break;
		}
	}
	if (!layer) return false;
	
	var batchCmd = new svgedit.history.BatchCommand("Move Elements to Layer");
	
	// loop for each selected element and move it
	var selElems = selectedElements;
	var i = selElems.length;
	while (i--) {
		var elem = selElems[i];
		if (!elem) continue;
		var oldNextSibling = elem.nextSibling;
		// TODO: this is pretty brittle!
		var oldLayer = elem.parentNode;
		layer.appendChild(elem);
		batchCmd.addSubCommand(new svgedit.history.MoveElementCommand(elem, oldNextSibling, oldLayer));
	}
	
	addCommandToHistory(batchCmd);
	
	return true;
};

this.mergeLayer = function(skipHistory) {
	var batchCmd = new svgedit.history.BatchCommand("Merge Layer");
	var drawing = getCurrentDrawing();
	var prev = $(drawing.current_layer).prev()[0];
	if (!prev) return;
	var childs = drawing.current_layer.childNodes;
	var len = childs.length;
	var layerNextSibling = drawing.current_layer.nextSibling;
	batchCmd.addSubCommand(new svgedit.history.RemoveElementCommand(drawing.current_layer, layerNextSibling, svgcontent));

	while (drawing.current_layer.firstChild) {
		var ch = drawing.current_layer.firstChild;
		if (ch.localName == 'title') {
			var chNextSibling = ch.nextSibling;
			batchCmd.addSubCommand(new svgedit.history.RemoveElementCommand(ch, chNextSibling, drawing.current_layer));
			drawing.current_layer.removeChild(ch);
			continue;
		}
		var oldNextSibling = ch.nextSibling;
		prev.appendChild(ch);
		batchCmd.addSubCommand(new svgedit.history.MoveElementCommand(ch, oldNextSibling, drawing.current_layer));
	}
	
	// Remove current layer
	svgcontent.removeChild(drawing.current_layer);
	
	if (!skipHistory) {
		clearSelection();
		identifyLayers();

		call("changed", [svgcontent]);
		
		addCommandToHistory(batchCmd);
	}
	
	drawing.current_layer = prev;
	return batchCmd;
};

this.mergeAllLayers = function() {
	var batchCmd = new svgedit.history.BatchCommand("Merge all Layers");
	var drawing = getCurrentDrawing();
	drawing.current_layer = drawing.all_layers[drawing.getNumLayers()-1][1];
	while ($(svgcontent).children('g').length > 1) {
		batchCmd.addSubCommand(canvas.mergeLayer(true));
	}
	
	clearSelection();
	identifyLayers();
	call("changed", [svgcontent]);
	addCommandToHistory(batchCmd);
};

// Function: leaveContext
// Return from a group context to the regular kind, make any previously
// disabled elements enabled again
var leaveContext = this.leaveContext = function() {
	var len = disabled_elems.length;
	if (len) {
		for (var i = 0; i < len; i++) {
			var elem = disabled_elems[i];
			var orig = elData(elem, 'orig_opac');
			if (orig !== 1) {
				elem.setAttribute('opacity', orig);
			} else {
				elem.removeAttribute('opacity');
			}
			elem.setAttribute('style', 'pointer-events: inherit');
		}
		disabled_elems = [];
		clearSelection(true);
		call("contextset", null);
	}
	current_group = null;
};

// Function: setContext
// Set the current context (for in-group editing)
var setContext = this.setContext = function(elem) {
	leaveContext();
	if (typeof elem === 'string') {
		elem = svgedit.utilities.getElem(elem);
	}

	// Edit inside this group
	current_group = elem;
	
	// Disable other elements
	$(elem).parentsUntil('#svgcontent').andSelf().siblings().each(function() {
		var opac = this.getAttribute('opacity') || 1;
		// Store the original's opacity
		elData(this, 'orig_opac', opac);
		this.setAttribute('opacity', opac * .33);
		this.setAttribute('style', 'pointer-events: none');
		disabled_elems.push(this);
	});

	clearSelection();
	call("contextset", current_group);
};

// Group: Document functions

// Function: clear
// Clears the current document.  This is not an undoable action.
this.clear = function() {
	pathActions.clear();

	clearSelection();

	// clear the svgcontent node
	canvas.clearSvgContentElement();

	// create new document
	canvas.current_drawing_ = new svgedit.draw.Drawing(svgcontent);

	// create empty first layer
	canvas.createLayer("Layer 1");
	
	// clear the undo stack
	canvas.undoMgr.resetUndoStack();

	// reset the selector manager
	selectorManager.initGroup();

	// reset the rubber band box
	rubberBox = selectorManager.getRubberBandBox();

	call("cleared");
};

// Function: linkControlPoints
// Alias function
this.linkControlPoints = pathActions.linkControlPoints;

// Function: getContentElem
// Returns the content DOM element
this.getContentElem = function() { return svgcontent; };

// Function: getRootElem
// Returns the root DOM element
this.getRootElem = function() { return svgroot; };

// Function: getSelectedElems
// Returns the array with selected DOM elements
this.getSelectedElems = function() { return selectedElements; };

// Function: getResolution
// Returns the current dimensions and zoom level in an object
var getResolution = this.getResolution = function() {
// 		var vb = svgcontent.getAttribute("viewBox").split(' ');
// 		return {'w':vb[2], 'h':vb[3], 'zoom': current_zoom};
	
	var width = svgcontent.getAttribute("width")/current_zoom;
	var height = svgcontent.getAttribute("height")/current_zoom;
	
	return {
		'w': width,
		'h': height,
		'zoom': current_zoom
	};
};

// Function: getZoom
// Returns the current zoom level
this.getZoom = function(){return current_zoom;};

// Function: getVersion
// Returns a string which describes the revision number of SvgCanvas.
this.getVersion = function() {
	return "svgcanvas.js ($Rev$)";
};

// Function: setUiStrings
// Update interface strings with given values
//
// Parameters:
// strs - Object with strings (see uiStrings for examples)
this.setUiStrings = function(strs) {
	$.extend(uiStrings, strs.notification);
};

// Function: setConfig
// Update configuration options with given values
//
// Parameters:
// opts - Object with options (see curConfig for examples)
this.setConfig = function(opts) {
	$.extend(curConfig, opts);
};

// Function: getTitle
// Returns the current group/SVG's title contents
this.getTitle = function(elem) {
	elem = elem || selectedElements[0];
	if (!elem) return;
	elem = $(elem).data('gsvg') || $(elem).data('symbol') || elem;
	var childs = elem.childNodes;
	for (var i=0; i<childs.length; i++) {
		if (childs[i].nodeName == 'title') {
			return childs[i].textContent;
		}
	}
	return '';
};

// Function: setGroupTitle
// Sets the group/SVG's title content
// TODO: Combine this with setDocumentTitle
this.setGroupTitle = function(val) {
	var elem = selectedElements[0];
	elem = $(elem).data('gsvg') || elem;
	
	var ts = $(elem).children('title');
	
	var batchCmd = new svgedit.history.BatchCommand("Set Label");
	
	if (!val.length) {
		// Remove title element
		var tsNextSibling = ts.nextSibling;
		batchCmd.addSubCommand(new svgedit.history.RemoveElementCommand(ts[0], tsNextSibling, elem));
		ts.remove();
	} else if (ts.length) {
		// Change title contents
		var title = ts[0];
		batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(title, {'#text': title.textContent}));
		title.textContent = val;
	} else {
		// Add title element
		title = svgdoc.createElementNS(NS.SVG, "title");
		title.textContent = val;
		$(elem).prepend(title);
		batchCmd.addSubCommand(new svgedit.history.InsertElementCommand(title));
	}

	addCommandToHistory(batchCmd);
};

// Function: getDocumentTitle
// Returns the current document title or an empty string if not found
this.getDocumentTitle = function() {
	return canvas.getTitle(svgcontent);
};

// Function: setDocumentTitle
// Adds/updates a title element for the document with the given name.
// This is an undoable action
//
// Parameters:
// newtitle - String with the new title
this.setDocumentTitle = function(newtitle) {
	var childs = svgcontent.childNodes, doc_title = false, old_title = '';
	
	var batchCmd = new svgedit.history.BatchCommand("Change Image Title");
	
	for (var i=0; i<childs.length; i++) {
		if (childs[i].nodeName == 'title') {
			doc_title = childs[i];
			old_title = doc_title.textContent;
			break;
		}
	}
	if (!doc_title) {
		doc_title = svgdoc.createElementNS(NS.SVG, "title");
		svgcontent.insertBefore(doc_title, svgcontent.firstChild);
	} 
	
	if (newtitle.length) {
		doc_title.textContent = newtitle;
	} else {
		// No title given, so element is not necessary
		doc_title.parentNode.removeChild(doc_title);
	}
	batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(doc_title, {'#text': old_title}));
	addCommandToHistory(batchCmd);
};

// Function: getEditorNS
// Returns the editor's namespace URL, optionally adds it to root element
//
// Parameters:
// add - Boolean to indicate whether or not to add the namespace value
this.getEditorNS = function(add) {
	if (add) {
		svgcontent.setAttribute('xmlns:se', NS.SE);
	}
	return NS.SE;
};

// Function: setResolution
// Changes the document's dimensions to the given size
//
// Parameters: 
// x - Number with the width of the new dimensions in user units. 
// Can also be the string "fit" to indicate "fit to content"
// y - Number with the height of the new dimensions in user units. 
//
// Returns:
// Boolean to indicate if resolution change was succesful. 
// It will fail on "fit to content" option with no content to fit to.
this.setResolution = function(x, y) {
	var res = getResolution();
	var w = res.w, h = res.h;
	var batchCmd;

	if (x == 'fit') {
		// Get bounding box
		var bbox = getStrokedBBox();
		
		if (bbox) {
			batchCmd = new svgedit.history.BatchCommand("Fit Canvas to Content");
			var visEls = getVisibleElements();
			addToSelection(visEls);
			var dx = [], dy = [];
			$.each(visEls, function(i, item) {
				dx.push(bbox.x*-1);
				dy.push(bbox.y*-1);
			});
			
			var cmd = canvas.moveSelectedElements(dx, dy, true);
			batchCmd.addSubCommand(cmd);
			clearSelection();
			
			x = Math.round(bbox.width);
			y = Math.round(bbox.height);
		} else {
			return false;
		}
	}
	if (x != w || y != h) {
		var handle = svgroot.suspendRedraw(1000);
		if (!batchCmd) {
			batchCmd = new svgedit.history.BatchCommand("Change Image Dimensions");
		}

		x = svgedit.units.convertToNum('width', x);
		y = svgedit.units.convertToNum('height', y);
		
		svgcontent.setAttribute('width', x);
		svgcontent.setAttribute('height', y);
		
		this.contentW = x;
		this.contentH = y;
		batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(svgcontent, {"width":w, "height":h}));

		svgcontent.setAttribute("viewBox", [0, 0, x/current_zoom, y/current_zoom].join(' '));
		batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(svgcontent, {"viewBox": ["0 0", w, h].join(' ')}));
	
		addCommandToHistory(batchCmd);
		svgroot.unsuspendRedraw(handle);
		call("changed", [svgcontent]);
	}
	return true;
};

// Function: getOffset
// Returns an object with x, y values indicating the svgcontent element's
// position in the editor's canvas.
this.getOffset = function() {
	return $(svgcontent).attr(['x', 'y']);
};

// Function: setBBoxZoom
// Sets the zoom level on the canvas-side based on the given value
// 
// Parameters:
// val - Bounding box object to zoom to or string indicating zoom option 
// editor_w - Integer with the editor's workarea box's width
// editor_h - Integer with the editor's workarea box's height
this.setBBoxZoom = function(val, editor_w, editor_h) {
	var spacer = .85;
	var bb;
	var calcZoom = function(bb) {
		if (!bb) return false;
		var w_zoom = Math.round((editor_w / bb.width)*100 * spacer)/100;
		var h_zoom = Math.round((editor_h / bb.height)*100 * spacer)/100;	
		var zoomlevel = Math.min(w_zoom, h_zoom);
		canvas.setZoom(zoomlevel);
		return {'zoom': zoomlevel, 'bbox': bb};
	};
	
	if (typeof val == 'object') {
		bb = val;
		if (bb.width == 0 || bb.height == 0) {
			var newzoom = bb.zoom?bb.zoom:current_zoom * bb.factor;
			canvas.setZoom(newzoom);
			return {'zoom': current_zoom, 'bbox': bb};
		}
		return calcZoom(bb);
	}

	switch (val) {
		case 'selection':
			if (!selectedElements[0]) return;
			var sel_elems = $.map(selectedElements, function(n){ if (n) return n; });
			bb = getStrokedBBox(sel_elems);
			break;
		case 'canvas':
			var res = getResolution();
			spacer = .95;
			bb = {width:res.w, height:res.h , x:0, y:0};
			break;
		case 'content':
			bb = getStrokedBBox();
			break;
		case 'layer':
			bb = getStrokedBBox(getVisibleElements(getCurrentDrawing().getCurrentLayer()));
			break;
		default:
			return;
	}
	return calcZoom(bb);
};

// Function: setZoom
// Sets the zoom to the given level
//
// Parameters:
// zoomlevel - Float indicating the zoom level to change to
this.setZoom = function(zoomlevel) {
	var res = getResolution();
	svgcontent.setAttribute("viewBox", "0 0 " + res.w/zoomlevel + " " + res.h/zoomlevel);
	current_zoom = zoomlevel;
	$.each(selectedElements, function(i, elem) {
		if (!elem) return;
		selectorManager.requestSelector(elem).resize();
	});
	pathActions.zoomChange();
	runExtensions("zoomChanged", zoomlevel);
};

// Function: getMode
// Returns the current editor mode string
this.getMode = function() {
	return current_mode;
};

// Function: setMode
// Sets the editor's mode to the given string
//
// Parameters:
// name - String with the new mode to change to
this.setMode = function(name) {
	pathActions.clear(true);
	textActions.clear();
	cur_properties = (selectedElements[0] && selectedElements[0].nodeName == 'text') ? cur_text : cur_shape;
	current_mode = name;
};

// Group: Element Styling

// Function: getColor
// Returns the current fill/stroke option
this.getColor = function(type) {
	return cur_properties[type];
};

// Function: setColor
// Change the current stroke/fill color/gradient value
// 
// Parameters:
// type - String indicating fill or stroke
// val - The value to set the stroke attribute to
// preventUndo - Boolean indicating whether or not this should be and undoable option
this.setColor = function(type, val, preventUndo) {
	cur_shape[type] = val;
	cur_properties[type + '_paint'] = {type:"solidColor"};
	var elems = [];
	var i = selectedElements.length;
	while (i--) {
		var elem = selectedElements[i];
		if (elem) {
			if (elem.tagName == "g") {
				svgedit.utilities.walkTree(elem, function(e){
					if (e.nodeName != "g") {
						elems.push(e);
					}
				});
			} else {
				if (type == 'fill') {
					if (elem.tagName != "polyline" && elem.tagName != "line") {
						elems.push(elem);
					}
				} else {
					elems.push(elem);
				}
			}
		}
	}
	if (elems.length > 0) {
		if (!preventUndo) {
			changeSelectedAttribute(type, val, elems);
			call("changed", elems);
		} else {
			changeSelectedAttributeNoUndo(type, val, elems);
		}
	}
};

// Function: setGradient
// Apply the current gradient to selected element's fill or stroke
//
// Parameters
// type - String indicating "fill" or "stroke" to apply to an element
var setGradient = this.setGradient = function(type) {
	if (!cur_properties[type + '_paint'] || cur_properties[type + '_paint'].type == "solidColor") return;
	var grad = canvas[type + 'Grad'];
	// find out if there is a duplicate gradient already in the defs
	var duplicate_grad = findDuplicateGradient(grad);
	var defs = svgedit.utilities.findDefs();
	// no duplicate found, so import gradient into defs
	if (!duplicate_grad) {
		var orig_grad = grad;
		grad = defs.appendChild( svgdoc.importNode(grad, true) );
		// get next id and set it on the grad
		grad.id = getNextId();
	} else { // use existing gradient
		grad = duplicate_grad;
	}
	canvas.setColor(type, "url(#" + grad.id + ")");
};

// Function: findDuplicateGradient
// Check if exact gradient already exists
//
// Parameters:
// grad - The gradient DOM element to compare to others
//
// Returns:
// The existing gradient if found, null if not
var findDuplicateGradient = function(grad) {
	var defs = svgedit.utilities.findDefs();
	var existing_grads = $(defs).find("linearGradient, radialGradient");
	var i = existing_grads.length;
	var rad_attrs = ['r', 'cx', 'cy', 'fx', 'fy'];
	while (i--) {
		var og = existing_grads[i];
		if (grad.tagName == "linearGradient") {
			if (grad.getAttribute('x1') != og.getAttribute('x1') ||
				grad.getAttribute('y1') != og.getAttribute('y1') ||
				grad.getAttribute('x2') != og.getAttribute('x2') ||
				grad.getAttribute('y2') != og.getAttribute('y2')) 
			{
				continue;
			}
		} else {
			var grad_attrs = $(grad).attr(rad_attrs);
			var og_attrs = $(og).attr(rad_attrs);
			
			var diff = false;
			$.each(rad_attrs, function(i, attr) {
				if (grad_attrs[attr] != og_attrs[attr]) diff = true;
			});
			
			if (diff) continue;
		}
		
		// else could be a duplicate, iterate through stops
		var stops = grad.getElementsByTagNameNS(NS.SVG, "stop");
		var ostops = og.getElementsByTagNameNS(NS.SVG, "stop");

		if (stops.length != ostops.length) {
			continue;
		}

		var j = stops.length;
		while (j--) {
			var stop = stops[j];
			var ostop = ostops[j];

			if (stop.getAttribute('offset') != ostop.getAttribute('offset') ||
				stop.getAttribute('stop-opacity') != ostop.getAttribute('stop-opacity') ||
				stop.getAttribute('stop-color') != ostop.getAttribute('stop-color')) 
			{
				break;
			}
		}

		if (j == -1) {
			return og;
		}
	} // for each gradient in defs

	return null;
};

function reorientGrads(elem, m) {
	var bb = svgedit.utilities.getBBox(elem);
	for (var i = 0; i < 2; i++) {
		var type = i === 0 ? 'fill' : 'stroke';
		var attrVal = elem.getAttribute(type);
		if (attrVal && attrVal.indexOf('url(') === 0) {
			var grad = svgedit.utilities.getRefElem(attrVal);
			if (grad.tagName === 'linearGradient') {
				var x1 = grad.getAttribute('x1') || 0;
				var y1 = grad.getAttribute('y1') || 0;
				var x2 = grad.getAttribute('x2') || 1;
				var y2 = grad.getAttribute('y2') || 0;
				
				// Convert to USOU points
				x1 = (bb.width * x1) + bb.x;
				y1 = (bb.height * y1) + bb.y;
				x2 = (bb.width * x2) + bb.x;
				y2 = (bb.height * y2) + bb.y;
			
				// Transform those points
				var pt1 = svgedit.math.transformPoint(x1, y1, m);
				var pt2 = svgedit.math.transformPoint(x2, y2, m);
				
				// Convert back to BB points
				var g_coords = {};
				
				g_coords.x1 = (pt1.x - bb.x) / bb.width;
				g_coords.y1 = (pt1.y - bb.y) / bb.height;
				g_coords.x2 = (pt2.x - bb.x) / bb.width;
				g_coords.y2 = (pt2.y - bb.y) / bb.height;
		
				var newgrad = grad.cloneNode(true);
				$(newgrad).attr(g_coords);
	
				newgrad.id = getNextId();
				svgedit.utilities.findDefs().appendChild(newgrad);
				elem.setAttribute(type, 'url(#' + newgrad.id + ')');
			}
		}
	}
}

// Function: setPaint
// Set a color/gradient to a fill/stroke
//
// Parameters:
// type - String with "fill" or "stroke"
// paint - The jGraduate paint object to apply
this.setPaint = function(type, paint) {
	// make a copy
	var p = new $.jGraduate.Paint(paint);
	this.setPaintOpacity(type, p.alpha / 100, true);

	// now set the current paint object
	cur_properties[type + '_paint'] = p;
	switch (p.type) {
		case 'solidColor':
			this.setColor(type, p.solidColor != 'none' ? '#' + p.solidColor : 'none');
			break;
		case 'linearGradient':
		case 'radialGradient':
			canvas[type + 'Grad'] = p[p.type];
			setGradient(type);
			break;
	}
};

// alias
this.setStrokePaint = function(paint) {
	this.setPaint('stroke', paint);
};

this.setFillPaint = function(paint) {
	this.setPaint('fill', paint);
};

// Function: getStrokeWidth
// Returns the current stroke-width value
this.getStrokeWidth = function() {
	return cur_properties.stroke_width;
};

// Function: setStrokeWidth
// Sets the stroke width for the current selected elements
// When attempting to set a line's width to 0, this changes it to 1 instead
//
// Parameters:
// val - A Float indicating the new stroke width value
this.setStrokeWidth = function(val) {
	if (val == 0 && ['line', 'path'].indexOf(current_mode) >= 0) {
		canvas.setStrokeWidth(1);
		return;
	}
	cur_properties.stroke_width = val;

	var elems = [];
	var i = selectedElements.length;
	while (i--) {
		var elem = selectedElements[i];
		if (elem) {
			if (elem.tagName == "g")
				svgedit.utilities.walkTree(elem, function(e){if (e.nodeName!="g") elems.push(e);});
			else
				elems.push(elem);
		}
	}
	if (elems.length > 0) {
		changeSelectedAttribute("stroke-width", val, elems);
		call("changed", selectedElements);
	}
};

// Function: setStrokeAttr
// Set the given stroke-related attribute the given value for selected elements
//
// Parameters:
// attr - String with the attribute name
// val - String or number with the attribute value
this.setStrokeAttr = function(attr, val) {
	cur_shape[attr.replace('-', '_')] = val;
	var elems = [];
	var i = selectedElements.length;
	while (i--) {
		var elem = selectedElements[i];
		if (elem) {
			if (elem.tagName == "g")
				svgedit.utilities.walkTree(elem, function(e){if (e.nodeName!="g") elems.push(e);});
			else
				elems.push(elem);
		}
	}
	if (elems.length > 0) {
		changeSelectedAttribute(attr, val, elems);
		call("changed", selectedElements);
	}
};

// Function: getStyle
// Returns current style options
this.getStyle = function() {
	return cur_shape;
};

// Function: getOpacity
// Returns the current opacity
this.getOpacity = function() {
	return cur_shape.opacity;
};

// Function: setOpacity
// Sets the given opacity to the current selected elements
this.setOpacity = function(val) {
	cur_shape.opacity = val;
	changeSelectedAttribute("opacity", val);
};

// Function: getOpacity
// Returns the current fill opacity
this.getFillOpacity = function() {
	return cur_shape.fill_opacity;
};

// Function: getStrokeOpacity
// Returns the current stroke opacity
this.getStrokeOpacity = function() {
	return cur_shape.stroke_opacity;
};

// Function: setPaintOpacity
// Sets the current fill/stroke opacity
//
// Parameters:
// type - String with "fill" or "stroke"
// val - Float with the new opacity value
// preventUndo - Boolean indicating whether or not this should be an undoable action
this.setPaintOpacity = function(type, val, preventUndo) {
	cur_shape[type + '_opacity'] = val;
	if (!preventUndo)
		changeSelectedAttribute(type + "-opacity", val);
	else
		changeSelectedAttributeNoUndo(type + "-opacity", val);
};

// Function: getPaintOpacity
// Gets the current fill/stroke opacity
//
// Parameters:
// type - String with "fill" or "stroke"
this.getPaintOpacity = function(type) {
	return type === 'fill' ? this.getFillOpacity() : this.getStrokeOpacity();
};

// Function: getBlur
// Gets the stdDeviation blur value of the given element
//
// Parameters:
// elem - The element to check the blur value for
this.getBlur = function(elem) {
	var val = 0;
//	var elem = selectedElements[0];

	if (elem) {
		var filter_url = elem.getAttribute('filter');
		if (filter_url) {
			var blur = svgedit.utilities.getElem(elem.id + '_blur');
			if (blur) {
				val = blur.firstChild.getAttribute('stdDeviation');
			}
		}
	}
	return val;
};

(function() {
	var cur_command = null;
	var filter = null;
	var filterHidden = false;
	
	// Function: setBlurNoUndo
	// Sets the stdDeviation blur value on the selected element without being undoable
	//
	// Parameters:
	// val - The new stdDeviation value
	canvas.setBlurNoUndo = function(val) {
		if (!filter) {
			canvas.setBlur(val);
			return;
		}
		if (val === 0) {
			// Don't change the StdDev, as that will hide the element.
			// Instead, just remove the value for "filter"
			changeSelectedAttributeNoUndo("filter", "");
			filterHidden = true;
		} else {
			var elem = selectedElements[0];
			if (filterHidden) {
				changeSelectedAttributeNoUndo("filter", 'url(#' + elem.id + '_blur)');
			}
			if (svgedit.browser.isWebkit()) {
				console.log('e', elem);
				elem.removeAttribute('filter');
				elem.setAttribute('filter', 'url(#' + elem.id + '_blur)');
			}
			changeSelectedAttributeNoUndo("stdDeviation", val, [filter.firstChild]);
			canvas.setBlurOffsets(filter, val);
		}
	};
	
	function finishChange() {
		var bCmd = canvas.undoMgr.finishUndoableChange();
		cur_command.addSubCommand(bCmd);
		addCommandToHistory(cur_command);
		cur_command = null;	
		filter = null;
	}

	// Function: setBlurOffsets
	// Sets the x, y, with, height values of the filter element in order to
	// make the blur not be clipped. Removes them if not neeeded
	//
	// Parameters:
	// filter - The filter DOM element to update
	// stdDev - The standard deviation value on which to base the offset size
	canvas.setBlurOffsets = function(filter, stdDev) {
		if (stdDev > 3) {
			// TODO: Create algorithm here where size is based on expected blur
			svgedit.utilities.assignAttributes(filter, {
				x: '-50%',
				y: '-50%',
				width: '200%',
				height: '200%'
			}, 100);
		} else {
			// Removing these attributes hides text in Chrome (see Issue 579)
			if (!svgedit.browser.isWebkit()) {
				filter.removeAttribute('x');
				filter.removeAttribute('y');
				filter.removeAttribute('width');
				filter.removeAttribute('height');
			}
		}
	};

	// Function: setBlur 
	// Adds/updates the blur filter to the selected element
	//
	// Parameters:
	// val - Float with the new stdDeviation blur value
	// complete - Boolean indicating whether or not the action should be completed (to add to the undo manager)
	canvas.setBlur = function(val, complete) {
		if (cur_command) {
			finishChange();
			return;
		}
	
		// Looks for associated blur, creates one if not found
		var elem = selectedElements[0];
		var elem_id = elem.id;
		filter = svgedit.utilities.getElem(elem_id + '_blur');
		
		val -= 0;
		
		var batchCmd = new svgedit.history.BatchCommand();
		
		// Blur found!
		if (filter) {
			if (val === 0) {
				filter = null;
			}
		} else {
			// Not found, so create
			var newblur = addSvgElementFromJson({ "element": "feGaussianBlur",
				"attr": {
					"in": 'SourceGraphic',
					"stdDeviation": val
				}
			});
			
			filter = addSvgElementFromJson({ "element": "filter",
				"attr": {
					"id": elem_id + '_blur'
				}
			});
			
			filter.appendChild(newblur);
			svgedit.utilities.findDefs().appendChild(filter);
			
			batchCmd.addSubCommand(new svgedit.history.InsertElementCommand(filter));
		}

		var changes = {filter: elem.getAttribute('filter')};
		
		if (val === 0) {
			elem.removeAttribute("filter");
			batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(elem, changes));
			return;
		}

		changeSelectedAttribute("filter", 'url(#' + elem_id + '_blur)');
		batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(elem, changes));
		canvas.setBlurOffsets(filter, val);
		
		cur_command = batchCmd;
		canvas.undoMgr.beginUndoableChange("stdDeviation", [filter?filter.firstChild:null]);
		if (complete) {
			canvas.setBlurNoUndo(val);
			finishChange();
		}
	};
}());

// Function: getBold
// Check whether selected element is bold or not
//
// Returns:
// Boolean indicating whether or not element is bold
this.getBold = function() {
	// should only have one element selected
	var selected = selectedElements[0];
	if (selected != null && selected.tagName  == "text" &&
		selectedElements[1] == null) 
	{
		return (selected.getAttribute("font-weight") == "bold");
	}
	return false;
};

// Function: setBold
// Make the selected element bold or normal
//
// Parameters:
// b - Boolean indicating bold (true) or normal (false)
this.setBold = function(b) {
	var selected = selectedElements[0];
	if (selected != null && selected.tagName  == "text" &&
		selectedElements[1] == null) 
	{
		changeSelectedAttribute("font-weight", b ? "bold" : "normal");
	}
	if (!selectedElements[0].textContent) {
		textActions.setCursor();
	}
};

// Function: getItalic
// Check whether selected element is italic or not
//
// Returns:
// Boolean indicating whether or not element is italic
this.getItalic = function() {
	var selected = selectedElements[0];
	if (selected != null && selected.tagName  == "text" &&
		selectedElements[1] == null) 
	{
		return (selected.getAttribute("font-style") == "italic");
	}
	return false;
};

// Function: setItalic
// Make the selected element italic or normal
//
// Parameters:
// b - Boolean indicating italic (true) or normal (false)
this.setItalic = function(i) {
	var selected = selectedElements[0];
	if (selected != null && selected.tagName  == "text" &&
		selectedElements[1] == null) 
	{
		changeSelectedAttribute("font-style", i ? "italic" : "normal");
	}
	if (!selectedElements[0].textContent) {
		textActions.setCursor();
	}
};

// Function: getFontFamily
// Returns the current font family
this.getFontFamily = function() {
	return cur_text.font_family;
};

// Function: setFontFamily
// Set the new font family
//
// Parameters:
// val - String with the new font family
this.setFontFamily = function(val) {
	cur_text.font_family = val;
	changeSelectedAttribute("font-family", val);
	if (selectedElements[0] && !selectedElements[0].textContent) {
		textActions.setCursor();
	}
};


// Function: setFontColor
// Set the new font color
//
// Parameters:
// val - String with the new font color
this.setFontColor = function(val) {
	cur_text.fill = val;
	changeSelectedAttribute("fill", val);
};

// Function: getFontColor
// Returns the current font color
this.getFontColor = function() {
	return cur_text.fill;
};

// Function: getFontSize
// Returns the current font size
this.getFontSize = function() {
	return cur_text.font_size;
};

// Function: setFontSize
// Applies the given font size to the selected element
//
// Parameters:
// val - Float with the new font size
this.setFontSize = function(val) {
	cur_text.font_size = val;
	changeSelectedAttribute("font-size", val);
	if (!selectedElements[0].textContent) {
		textActions.setCursor();
	}
};

// Function: getText
// Returns the current text (textContent) of the selected element
this.getText = function() {
	var selected = selectedElements[0];
	if (selected == null) { return ""; }
	return selected.textContent;
};

// Function: setTextContent
// Updates the text element with the given string
//
// Parameters:
// val - String with the new text
this.setTextContent = function(val) {
	changeSelectedAttribute("#text", val);
	textActions.init(val);
	textActions.setCursor();
};

// Function: setImageURL
// Sets the new image URL for the selected image element. Updates its size if
// a new URL is given
// 
// Parameters:
// val - String with the image URL/path
this.setImageURL = function(val) {
	var elem = selectedElements[0];
	if (!elem) return;
	
	var attrs = $(elem).attr(['width', 'height']);
	var setsize = (!attrs.width || !attrs.height);

	var cur_href = getHref(elem);
	
	// Do nothing if no URL change or size change
	if (cur_href !== val) {
		setsize = true;
	} else if (!setsize) return;

	var batchCmd = new svgedit.history.BatchCommand("Change Image URL");

	setHref(elem, val);
	batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(elem, {
		"#href": cur_href
	}));

	if (setsize) {
		$(new Image()).load(function() {
			var changes = $(elem).attr(['width', 'height']);
		
			$(elem).attr({
				width: this.width,
				height: this.height
			});
			
			selectorManager.requestSelector(elem).resize();
			
			batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(elem, changes));
			addCommandToHistory(batchCmd);
			call("changed", [elem]);
		}).attr('src', val);
	} else {
		addCommandToHistory(batchCmd);
	}
};

// Function: setLinkURL
// Sets the new link URL for the selected anchor element.
// 
// Parameters:
// val - String with the link URL/path
this.setLinkURL = function(val) {
	var elem = selectedElements[0];
	if (!elem) return;
	if (elem.tagName !== 'a') {
		// See if parent is an anchor
		var parents_a = $(elem).parents('a');
		if (parents_a.length) {
			elem = parents_a[0];
		} else {
			return;
		}
	}
	
	var cur_href = getHref(elem);
	
	if (cur_href === val) return;
	
	var batchCmd = new svgedit.history.BatchCommand("Change Link URL");

	setHref(elem, val);
	batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(elem, {
		"#href": cur_href
	}));

	addCommandToHistory(batchCmd);
};


// Function: setRectRadius
// Sets the rx & ry values to the selected rect element to change its corner radius
// 
// Parameters:
// val - The new radius
this.setRectRadius = function(val) {
	var selected = selectedElements[0];
	if (selected != null && selected.tagName == "rect") {
		var r = selected.getAttribute("rx");
		if (r != val) {
			selected.setAttribute("rx", val);
			selected.setAttribute("ry", val);
			addCommandToHistory(new svgedit.history.ChangeElementCommand(selected, {"rx":r, "ry":r}, "Radius"));
			call("changed", [selected]);
		}
	}
};

// Function: makeHyperlink
// Wraps the selected element(s) in an anchor element or converts group to one
this.makeHyperlink = function(url) {
	canvas.groupSelectedElements('a', url);
	
	// TODO: If element is a single "g", convert to "a"
	//	if (selectedElements.length > 1 && selectedElements[1]) {

};

// Function: removeHyperlink
this.removeHyperlink = function() {
	canvas.ungroupSelectedElement();
};

// Group: Element manipulation

// Function: setSegType
// Sets the new segment type to the selected segment(s). 
//
// Parameters:
// new_type - Integer with the new segment type
// See http://www.w3.org/TR/SVG/paths.html#InterfaceSVGPathSeg for list
this.setSegType = function(new_type) {
	pathActions.setSegType(new_type);
}

// TODO(codedread): Remove the getBBox argument and split this function into two.
// Function: convertToPath
// Convert selected element to a path, or get the BBox of an element-as-path
//
// Parameters: 
// elem - The DOM element to be converted
// getBBox - Boolean on whether or not to only return the path's BBox
//
// Returns:
// If the getBBox flag is true, the resulting path's bounding box object.
// Otherwise the resulting path element is returned.
this.convertToPath = function(elem, getBBox) {
	if (elem == null) {
		var elems = selectedElements;
		$.each(selectedElements, function(i, elem) {
			if (elem) canvas.convertToPath(elem);
		});
		return;
	}
	
	if (!getBBox) {
		var batchCmd = new svgedit.history.BatchCommand("Convert element to Path");
	}
	
	var attrs = getBBox?{}:{
		"fill": cur_shape.fill,
		"fill-opacity": cur_shape.fill_opacity,
		"stroke": cur_shape.stroke,
		"stroke-width": cur_shape.stroke_width,
		"stroke-dasharray": cur_shape.stroke_dasharray,
		"stroke-linejoin": cur_shape.stroke_linejoin,
		"stroke-linecap": cur_shape.stroke_linecap,
		"stroke-opacity": cur_shape.stroke_opacity,
		"opacity": cur_shape.opacity,
		"visibility":"hidden"
	};
	
	// any attribute on the element not covered by the above
	// TODO: make this list global so that we can properly maintain it
	// TODO: what about @transform, @clip-rule, @fill-rule, etc?
	$.each(['marker-start', 'marker-end', 'marker-mid', 'filter', 'clip-path'], function() {
		if (elem.getAttribute(this)) {
			attrs[this] = elem.getAttribute(this);
		}
	});
	
	var path = addSvgElementFromJson({
		"element": "path",
		"attr": attrs
	});
	
	var eltrans = elem.getAttribute("transform");
	if (eltrans) {
		path.setAttribute("transform", eltrans);
	}
	
	var id = elem.id;
	var parent = elem.parentNode;
	if (elem.nextSibling) {
		parent.insertBefore(path, elem);
	} else {
		parent.appendChild(path);
	}
	
	var d = '';
	
	var joinSegs = function(segs) {
		$.each(segs, function(j, seg) {
			var l = seg[0], pts = seg[1];
			d += l;
			for (var i=0; i < pts.length; i+=2) {
				d += (pts[i] +','+pts[i+1]) + ' ';
			}
		});
	};

	// Possibly the cubed root of 6, but 1.81 works best
	var num = 1.81;

	switch (elem.tagName) {
	case 'ellipse':
	case 'circle':
		var a = $(elem).attr(['rx', 'ry', 'cx', 'cy']);
		var cx = a.cx, cy = a.cy, rx = a.rx, ry = a.ry;
		if (elem.tagName == 'circle') {
			rx = ry = $(elem).attr('r');
		}
	
		joinSegs([
			['M',[(cx-rx),(cy)]],
			['C',[(cx-rx),(cy-ry/num), (cx-rx/num),(cy-ry), (cx),(cy-ry)]],
			['C',[(cx+rx/num),(cy-ry), (cx+rx),(cy-ry/num), (cx+rx),(cy)]],
			['C',[(cx+rx),(cy+ry/num), (cx+rx/num),(cy+ry), (cx),(cy+ry)]],
			['C',[(cx-rx/num),(cy+ry), (cx-rx),(cy+ry/num), (cx-rx),(cy)]],
			['Z',[]]
		]);
		break;
	case 'path':
		d = elem.getAttribute('d');
		break;
	case 'line':
		var a = $(elem).attr(["x1", "y1", "x2", "y2"]);
		d = "M"+a.x1+","+a.y1+"L"+a.x2+","+a.y2;
		break;
	case 'polyline':
	case 'polygon':
		d = "M" + elem.getAttribute('points');
		break;
	case 'rect':
		var r = $(elem).attr(['rx', 'ry']);
		var rx = r.rx, ry = r.ry;
		var b = elem.getBBox();
		var x = b.x, y = b.y, w = b.width, h = b.height;
		var num = 4-num; // Why? Because!
		
		if (!rx && !ry) {
			// Regular rect
			joinSegs([
				['M',[x, y]],
				['L',[x+w, y]],
				['L',[x+w, y+h]],
				['L',[x, y+h]],
				['L',[x, y]],
				['Z',[]]
			]);
		} else {
			joinSegs([
				['M',[x, y+ry]],
				['C',[x, y+ry/num, x+rx/num, y, x+rx, y]],
				['L',[x+w-rx, y]],
				['C',[x+w-rx/num, y, x+w, y+ry/num, x+w, y+ry]],
				['L',[x+w, y+h-ry]],
				['C',[x+w, y+h-ry/num, x+w-rx/num, y+h, x+w-rx, y+h]],
				['L',[x+rx, y+h]],
				['C',[x+rx/num, y+h, x, y+h-ry/num, x, y+h-ry]],
				['L',[x, y+ry]],
				['Z',[]]
			]);
		}
		break;
	default:
		path.parentNode.removeChild(path);
		break;
	}
	
	if (d) {
		path.setAttribute('d', d);
	}
	
	if (!getBBox) {
		// Replace the current element with the converted one
		
		// Reorient if it has a matrix
		if (eltrans) {
			var tlist = svgedit.transformlist.getTransformList(path);
			if (svgedit.math.hasMatrixTransform(tlist)) {
				pathActions.resetOrientation(path);
			}
		}
		
		var nextSibling = elem.nextSibling;
		batchCmd.addSubCommand(new svgedit.history.RemoveElementCommand(elem, nextSibling, parent));
		batchCmd.addSubCommand(new svgedit.history.InsertElementCommand(path));

		clearSelection();
		elem.parentNode.removeChild(elem);
		path.setAttribute('id', id);
		path.removeAttribute("visibility");
		addToSelection([path], true);
		
		addCommandToHistory(batchCmd);
		
	} else {
		// Get the correct BBox of the new path, then discard it
		pathActions.resetOrientation(path);
		var bb = false;
		try {
			bb = path.getBBox();
		} catch(e) {
			// Firefox fails
		}
		path.parentNode.removeChild(path);
		return bb;
	}
};


// Function: changeSelectedAttributeNoUndo
// This function makes the changes to the elements. It does not add the change
// to the history stack. 
// 
// Parameters:
// attr - String with the attribute name
// newValue - String or number with the new attribute value
// elems - The DOM elements to apply the change to
var changeSelectedAttributeNoUndo = function(attr, newValue, elems) {
	var handle = svgroot.suspendRedraw(1000);
	if (current_mode == 'pathedit') {
		// Editing node
		pathActions.moveNode(attr, newValue);
	}
	var elems = elems || selectedElements;
	var i = elems.length;
	var no_xy_elems = ['g', 'polyline', 'path'];
	var good_g_attrs = ['transform', 'opacity', 'filter'];
	
	while (i--) {
		var elem = elems[i];
		if (elem == null) continue;
		
		// Set x,y vals on elements that don't have them
		if ((attr === 'x' || attr === 'y') && no_xy_elems.indexOf(elem.tagName) >= 0) {
			var bbox = getStrokedBBox([elem]);
			var diff_x = attr === 'x' ? newValue - bbox.x : 0;
			var diff_y = attr === 'y' ? newValue - bbox.y : 0;
			canvas.moveSelectedElements(diff_x*current_zoom, diff_y*current_zoom, true);
			continue;
		}
		
		// only allow the transform/opacity/filter attribute to change on <g> elements, slightly hacky
		// TODO: FIXME: This doesn't seem right.  Where's the body of this if statement?
		if (elem.tagName === "g" && good_g_attrs.indexOf(attr) >= 0);
		var oldval = attr === "#text" ? elem.textContent : elem.getAttribute(attr);
		if (oldval == null)  oldval = "";
		if (oldval !== String(newValue)) {
			if (attr == "#text") {
				var old_w = svgedit.utilities.getBBox(elem).width;
				elem.textContent = newValue;
				
				// FF bug occurs on on rotated elements
				if (/rotate/.test(elem.getAttribute('transform'))) {
					elem = ffClone(elem);
				}
				
				// Hoped to solve the issue of moving text with text-anchor="start",
				// but this doesn't actually fix it. Hopefully on the right track, though. -Fyrd
				
// 					var box=getBBox(elem), left=box.x, top=box.y, width=box.width,
// 						height=box.height, dx = width - old_w, dy=0;
// 					var angle = svgedit.utilities.getRotationAngle(elem, true);
// 					if (angle) {
// 						var r = Math.sqrt( dx*dx + dy*dy );
// 						var theta = Math.atan2(dy,dx) - angle;
// 						dx = r * Math.cos(theta);
// 						dy = r * Math.sin(theta);
// 						
// 						elem.setAttribute('x', elem.getAttribute('x')-dx);
// 						elem.setAttribute('y', elem.getAttribute('y')-dy);
// 					}
				
			} else if (attr == "#href") {
				setHref(elem, newValue);
			}
			else elem.setAttribute(attr, newValue);

			// Go into "select" mode for text changes
			// NOTE: Important that this happens AFTER elem.setAttribute() or else attributes like
			// font-size can get reset to their old value, ultimately by svgEditor.updateContextPanel(),
			// after calling textActions.toSelectMode() below
			if (current_mode === "textedit" && attr !== "#text" && elem.textContent.length) {
				textActions.toSelectMode(elem);
			}

//			if (i==0)
//				selectedBBoxes[0] = svgedit.utilities.getBBox(elem);
			// Use the Firefox ffClone hack for text elements with gradients or
			// where other text attributes are changed. 
			if (svgedit.browser.isGecko() && elem.nodeName === 'text' && /rotate/.test(elem.getAttribute('transform'))) {
				if ((newValue+'').indexOf('url') === 0 || ['font-size', 'font-family', 'x', 'y'].indexOf(attr) >= 0 && elem.textContent) {
					elem = ffClone(elem);
				}
			}
			// Timeout needed for Opera & Firefox
			// codedread: it is now possible for this function to be called with elements
			// that are not in the selectedElements array, we need to only request a
			// selector if the element is in that array
			if (selectedElements.indexOf(elem) >= 0) {
				setTimeout(function() {
					// Due to element replacement, this element may no longer
					// be part of the DOM
					if (!elem.parentNode) return;
					selectorManager.requestSelector(elem).resize();
				}, 0);
			}
			// if this element was rotated, and we changed the position of this element
			// we need to update the rotational transform attribute 
			var angle = svgedit.utilities.getRotationAngle(elem);
			if (angle != 0 && attr != "transform") {
				var tlist = svgedit.transformlist.getTransformList(elem);
				var n = tlist.numberOfItems;
				while (n--) {
					var xform = tlist.getItem(n);
					if (xform.type == 4) {
						// remove old rotate
						tlist.removeItem(n);
						
						var box = svgedit.utilities.getBBox(elem);
						var center = svgedit.math.transformPoint(box.x+box.width/2, box.y+box.height/2, svgedit.math.transformListToTransform(tlist).matrix);
						var cx = center.x,
							cy = center.y;
						var newrot = svgroot.createSVGTransform();
						newrot.setRotate(angle, cx, cy);
						tlist.insertItemBefore(newrot, n);
						break;
					}
				}
			}
		} // if oldValue != newValue
	} // for each elem
	svgroot.unsuspendRedraw(handle);	
};

// Function: changeSelectedAttribute
// Change the given/selected element and add the original value to the history stack
// If you want to change all selectedElements, ignore the elems argument.
// If you want to change only a subset of selectedElements, then send the
// subset to this function in the elems argument.
// 
// Parameters:
// attr - String with the attribute name
// newValue - String or number with the new attribute value
// elems - The DOM elements to apply the change to
var changeSelectedAttribute = this.changeSelectedAttribute = function(attr, val, elems) {
	var elems = elems || selectedElements;
	canvas.undoMgr.beginUndoableChange(attr, elems);
	var i = elems.length;

	changeSelectedAttributeNoUndo(attr, val, elems);

	var batchCmd = canvas.undoMgr.finishUndoableChange();
	if (!batchCmd.isEmpty()) { 
		addCommandToHistory(batchCmd);
	}
};

// Function: deleteSelectedElements
// Removes all selected elements from the DOM and adds the change to the 
// history stack
this.deleteSelectedElements = function() {
	var batchCmd = new svgedit.history.BatchCommand("Delete Elements");
	var len = selectedElements.length;
	var selectedCopy = []; //selectedElements is being deleted
	for (var i = 0; i < len; ++i) {
		var selected = selectedElements[i];
		if (selected == null) break;

		var parent = selected.parentNode;
		var t = selected;
		
		// this will unselect the element and remove the selectedOutline
		selectorManager.releaseSelector(t);
		
		// Remove the path if present.
		svgedit.path.removePath_(t.id);
		
		// Get the parent if it's a single-child anchor
		if (parent.tagName === 'a' && parent.childNodes.length === 1) {
			t = parent;
			parent = parent.parentNode;
		}
		
		var nextSibling = t.nextSibling;
		var elem = parent.removeChild(t);
		selectedCopy.push(selected); //for the copy
		selectedElements[i] = null;
		batchCmd.addSubCommand(new RemoveElementCommand(elem, nextSibling, parent));
	}
	if (!batchCmd.isEmpty()) addCommandToHistory(batchCmd);
	call("changed", selectedCopy);
	clearSelection();
};

// Function: cutSelectedElements
// Removes all selected elements from the DOM and adds the change to the 
// history stack. Remembers removed elements on the clipboard

// TODO: Combine similar code with deleteSelectedElements
this.cutSelectedElements = function() {
	var batchCmd = new svgedit.history.BatchCommand("Cut Elements");
	var len = selectedElements.length;
	var selectedCopy = []; //selectedElements is being deleted
	for (var i = 0; i < len; ++i) {
		var selected = selectedElements[i];
		if (selected == null) break;

		var parent = selected.parentNode;
		var t = selected;

		// this will unselect the element and remove the selectedOutline
		selectorManager.releaseSelector(t);

		// Remove the path if present.
		svgedit.path.removePath_(t.id);

		var nextSibling = t.nextSibling;
		var elem = parent.removeChild(t);
		selectedCopy.push(selected); //for the copy
		selectedElements[i] = null;
		batchCmd.addSubCommand(new RemoveElementCommand(elem, nextSibling, parent));
	}
	if (!batchCmd.isEmpty()) addCommandToHistory(batchCmd);
	call("changed", selectedCopy);
	clearSelection();
	
	canvas.clipBoard = selectedCopy;
};

// Function: copySelectedElements
// Remembers the current selected elements on the clipboard
this.copySelectedElements = function() {
	canvas.clipBoard = $.merge([], selectedElements);
};

this.pasteElements = function(type, x, y) {
	var cb = canvas.clipBoard;
	var len = cb.length;
	if (!len) return;
	
	var pasted = [];
	var batchCmd = new svgedit.history.BatchCommand('Paste elements');
	
	// Move elements to lastClickPoint

	while (len--) {
		var elem = cb[len];
		if (!elem) continue;
		var copy = copyElem(elem);

		// See if elem with elem ID is in the DOM already
		if (!svgedit.utilities.getElem(elem.id)) copy.id = elem.id;
		
		pasted.push(copy);
		(current_group || getCurrentDrawing().getCurrentLayer()).appendChild(copy);
		batchCmd.addSubCommand(new svgedit.history.InsertElementCommand(copy));
	}
	
	selectOnly(pasted);
	
	if (type !== 'in_place') {
		
		var ctr_x, ctr_y;
		
		if (!type) {
			ctr_x = lastClickPoint.x;
			ctr_y = lastClickPoint.y;
		} else if (type === 'point') {
			ctr_x = x;
			ctr_y = y;
		} 
		
		var bbox = getStrokedBBox(pasted);
		var cx = ctr_x - (bbox.x + bbox.width/2),
			cy = ctr_y - (bbox.y + bbox.height/2),
			dx = [],
			dy = [];
	
		$.each(pasted, function(i, item) {
			dx.push(cx);
			dy.push(cy);
		});
		
		var cmd = canvas.moveSelectedElements(dx, dy, false);
		batchCmd.addSubCommand(cmd);
	}

	addCommandToHistory(batchCmd);
	call("changed", pasted);
};

// Function: groupSelectedElements
// Wraps all the selected elements in a group (g) element

// Parameters: 
// type - type of element to group into, defaults to <g>
this.groupSelectedElements = function(type) {
	if (!type) type = 'g';
	var cmd_str = '';
	
	switch (type) {
		case "a":
			cmd_str = "Make hyperlink";
			var url = '';
			if (arguments.length > 1) {
				url = arguments[1];
			}
			break;
		default:
			type = 'g';
			cmd_str = "Group Elements";
			break;
	}
	
	var batchCmd = new svgedit.history.BatchCommand(cmd_str);
	
	// create and insert the group element
	var g = addSvgElementFromJson({
							"element": type,
							"attr": {
								"id": getNextId()
							}
						});
	if (type === 'a') {
		setHref(g, url);
	}
	batchCmd.addSubCommand(new svgedit.history.InsertElementCommand(g));
	
	// now move all children into the group
	var i = selectedElements.length;
	while (i--) {
		var elem = selectedElements[i];
		if (elem == null) continue;
		
		if (elem.parentNode.tagName === 'a' && elem.parentNode.childNodes.length === 1) {
			elem = elem.parentNode;
		}
		
		var oldNextSibling = elem.nextSibling;
		var oldParent = elem.parentNode;
		g.appendChild(elem);
		batchCmd.addSubCommand(new svgedit.history.MoveElementCommand(elem, oldNextSibling, oldParent));			
	}
	if (!batchCmd.isEmpty()) addCommandToHistory(batchCmd);
	
	// update selection
	selectOnly([g], true);
};


// Function: pushGroupProperties
// Pushes all appropriate parent group properties down to its children, then
// removes them from the group
var pushGroupProperties = this.pushGroupProperties = function(g, undoable) {

	var children = g.childNodes;
	var len = children.length;
	var xform = g.getAttribute("transform");

	var glist = svgedit.transformlist.getTransformList(g);
	var m = svgedit.math.transformListToTransform(glist).matrix;
	
	var batchCmd = new svgedit.history.BatchCommand("Push group properties");

	// TODO: get all fill/stroke properties from the group that we are about to destroy
	// "fill", "fill-opacity", "fill-rule", "stroke", "stroke-dasharray", "stroke-dashoffset", 
	// "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", 
	// "stroke-width"
	// and then for each child, if they do not have the attribute (or the value is 'inherit')
	// then set the child's attribute
	
	var i = 0;
	var gangle = svgedit.utilities.getRotationAngle(g);
	
	var gattrs = $(g).attr(['filter', 'opacity']);
	var gfilter, gblur;
	
	for (var i = 0; i < len; i++) {
		var elem = children[i];
		
		if (elem.nodeType !== 1) continue;
		
		if (gattrs.opacity !== null && gattrs.opacity !== 1) {
			var c_opac = elem.getAttribute('opacity') || 1;
			var new_opac = Math.round((elem.getAttribute('opacity') || 1) * gattrs.opacity * 100)/100;
			changeSelectedAttribute('opacity', new_opac, [elem]);
		}

		if (gattrs.filter) {
			var cblur = this.getBlur(elem);
			var orig_cblur = cblur;
			if (!gblur) gblur = this.getBlur(g);
			if (cblur) {
				// Is this formula correct?
				cblur = (gblur-0) + (cblur-0);
			} else if (cblur === 0) {
				cblur = gblur;
			}
			
			// If child has no current filter, get group's filter or clone it.
			if (!orig_cblur) {
				// Set group's filter to use first child's ID
				if (!gfilter) {
					gfilter = svgedit.utilities.getRefElem(gattrs.filter);
				} else {
					// Clone the group's filter
					gfilter = copyElem(gfilter);
					svgedit.utilities.findDefs().appendChild(gfilter);
				}
			} else {
				gfilter = svgedit.utilities.getRefElem(elem.getAttribute('filter'));
			}

			// Change this in future for different filters
			var suffix = (gfilter.firstChild.tagName === 'feGaussianBlur')?'blur':'filter'; 
			gfilter.id = elem.id + '_' + suffix;
			changeSelectedAttribute('filter', 'url(#' + gfilter.id + ')', [elem]);
			
			// Update blur value 
			if (cblur) {
				changeSelectedAttribute('stdDeviation', cblur, [gfilter.firstChild]);
				canvas.setBlurOffsets(gfilter, cblur);
			}
		}
		
		var chtlist = svgedit.transformlist.getTransformList(elem);

		// Don't process gradient transforms
		if (~elem.tagName.indexOf('Gradient')) chtlist = null;
		
		// Hopefully not a problem to add this. Necessary for elements like <desc/>
		if (!chtlist) continue;
		
		// Apparently <defs> can get get a transformlist, but we don't want it to have one!
		if (elem.tagName === 'defs') continue;
		
		if (glist.numberOfItems) {
			// TODO: if the group's transform is just a rotate, we can always transfer the
			// rotate() down to the children (collapsing consecutive rotates and factoring
			// out any translates)
			if (gangle && glist.numberOfItems == 1) {
				// [Rg] [Rc] [Mc]
				// we want [Tr] [Rc2] [Mc] where:
				// 	- [Rc2] is at the child's current center but has the 
				//	  sum of the group and child's rotation angles
				// 	- [Tr] is the equivalent translation that this child 
				// 	  undergoes if the group wasn't there
				
				// [Tr] = [Rg] [Rc] [Rc2_inv]
				
				// get group's rotation matrix (Rg)
				var rgm = glist.getItem(0).matrix;
				
				// get child's rotation matrix (Rc)
				var rcm = svgroot.createSVGMatrix();
				var cangle = svgedit.utilities.getRotationAngle(elem);
				if (cangle) {
					rcm = chtlist.getItem(0).matrix;
				}
				
				// get child's old center of rotation
				var cbox = svgedit.utilities.getBBox(elem);
				var ceqm = svgedit.math.transformListToTransform(chtlist).matrix;
				var coldc = svgedit.math.transformPoint(cbox.x+cbox.width/2, cbox.y+cbox.height/2, ceqm);
				
				// sum group and child's angles
				var sangle = gangle + cangle;
				
				// get child's rotation at the old center (Rc2_inv)
				var r2 = svgroot.createSVGTransform();
				r2.setRotate(sangle, coldc.x, coldc.y);
				
				// calculate equivalent translate
				var trm = svgedit.math.matrixMultiply(rgm, rcm, r2.matrix.inverse());
				
				// set up tlist
				if (cangle) {
					chtlist.removeItem(0);
				}
				
				if (sangle) {
					if (chtlist.numberOfItems) {
						chtlist.insertItemBefore(r2, 0);
					} else {
						chtlist.appendItem(r2);
					}
				}

				if (trm.e || trm.f) {
					var tr = svgroot.createSVGTransform();
					tr.setTranslate(trm.e, trm.f);
					if (chtlist.numberOfItems) {
						chtlist.insertItemBefore(tr, 0);
					} else {
						chtlist.appendItem(tr);
					}
				}
			} else { // more complicated than just a rotate
			
				// transfer the group's transform down to each child and then
				// call svgedit.recalculate.recalculateDimensions()				
				var oldxform = elem.getAttribute("transform");
				var changes = {};
				changes["transform"] = oldxform ? oldxform : "";

				var newxform = svgroot.createSVGTransform();

				// [ gm ] [ chm ] = [ chm ] [ gm' ]
				// [ gm' ] = [ chm_inv ] [ gm ] [ chm ]
				var chm = svgedit.math.transformListToTransform(chtlist).matrix,
					chm_inv = chm.inverse();
				var gm = svgedit.math.matrixMultiply( chm_inv, m, chm );
				newxform.setMatrix(gm);
				chtlist.appendItem(newxform);
			}
			var cmd = svgedit.recalculate.recalculateDimensions(elem);
			if (cmd)	batchCmd.addSubCommand(cmd);
		}
	}

	
	// remove transform and make it undo-able
	if (xform) {
		var changes = {};
		changes["transform"] = xform;
		g.setAttribute("transform", "");
		g.removeAttribute("transform");				
		batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(g, changes));
	}
	
	if (undoable && !batchCmd.isEmpty()) {
		return batchCmd;
	}
};


// Function: ungroupSelectedElement
// Unwraps all the elements in a selected group (g) element. This requires
// significant recalculations to apply group's transforms, etc to its children
this.ungroupSelectedElement = function() {
	var g = selectedElements[0];
	if ($(g).data('gsvg') || $(g).data('symbol')) {
		// Is svg, so actually convert to group
		convertToGroup(g);
		return;
	}
	if (g.tagName === 'use') {
		// Somehow doesn't have data set, so retrieve
		var symbol = svgedit.utilities.getElem(getHref(g).substr(1));
		$(g).data('symbol', symbol).data('ref', symbol);
		convertToGroup(g);
		return;
	}
	var parents_a = $(g).parents('a');
	if (parents_a.length) {
		g = parents_a[0];
	}
	
	// Look for parent "a"
	if (g.tagName === "g" || g.tagName === "a") {
		
		var batchCmd = new svgedit.history.BatchCommand("Ungroup Elements");
		var cmd = pushGroupProperties(g, true);
		if (cmd) batchCmd.addSubCommand(cmd);
		
		var parent = g.parentNode;
		var anchor = g.nextSibling;
		var children = new Array(g.childNodes.length);
		
		var i = 0;
		
		while (g.firstChild) {
			var elem = g.firstChild;
			var oldNextSibling = elem.nextSibling;
			var oldParent = elem.parentNode;
			
			// Remove child title elements
			if (elem.tagName === 'title') {
				var nextSibling = elem.nextSibling;
				batchCmd.addSubCommand(new svgedit.history.RemoveElementCommand(elem, nextSibling, oldParent));
				oldParent.removeChild(elem);
				continue;
			}
			
			children[i++] = elem = parent.insertBefore(elem, anchor);
			batchCmd.addSubCommand(new svgedit.history.MoveElementCommand(elem, oldNextSibling, oldParent));
		}

		// remove the group from the selection			
		clearSelection();
		
		// delete the group element (but make undo-able)
		var gNextSibling = g.nextSibling;
		g = parent.removeChild(g);
		batchCmd.addSubCommand(new svgedit.history.RemoveElementCommand(g, gNextSibling, parent));

		if (!batchCmd.isEmpty()) addCommandToHistory(batchCmd);
		
		// update selection
		addToSelection(children);
	}
};

// Function: moveToTopSelectedElement
// Repositions the selected element to the bottom in the DOM to appear on top of
// other elements
this.moveToTopSelectedElement = function() {
	var selected = selectedElements[0];
	if (selected != null) {
		var t = selected;
		var oldParent = t.parentNode;
		var oldNextSibling = t.nextSibling;
		t = t.parentNode.appendChild(t);
		// If the element actually moved position, add the command and fire the changed
		// event handler.
		if (oldNextSibling != t.nextSibling) {
			addCommandToHistory(new svgedit.history.MoveElementCommand(t, oldNextSibling, oldParent, "top"));
			call("changed", [t]);
		}
	}
};

// Function: moveToBottomSelectedElement
// Repositions the selected element to the top in the DOM to appear under 
// other elements
this.moveToBottomSelectedElement = function() {
	var selected = selectedElements[0];
	if (selected != null) {
		var t = selected;
		var oldParent = t.parentNode;
		var oldNextSibling = t.nextSibling;
		var firstChild = t.parentNode.firstChild;
		if (firstChild.tagName == 'title') {
			firstChild = firstChild.nextSibling;
		}
		// This can probably be removed, as the defs should not ever apppear
		// inside a layer group
		if (firstChild.tagName == 'defs') {
			firstChild = firstChild.nextSibling;
		}
		t = t.parentNode.insertBefore(t, firstChild);
		// If the element actually moved position, add the command and fire the changed
		// event handler.
		if (oldNextSibling != t.nextSibling) {
			addCommandToHistory(new svgedit.history.MoveElementCommand(t, oldNextSibling, oldParent, "bottom"));
			call("changed", [t]);
		}
	}
};

// Function: moveUpDownSelected
// Moves the select element up or down the stack, based on the visibly
// intersecting elements
//
// Parameters: 
// dir - String that's either 'Up' or 'Down'
this.moveUpDownSelected = function(dir) {
	var selected = selectedElements[0];
	if (!selected) return;
	
	curBBoxes = [];
	var closest, found_cur;
	// jQuery sorts this list
	var list = $(getIntersectionList(getStrokedBBox([selected]))).toArray();
	if (dir == 'Down') list.reverse();

	$.each(list, function() {
		if (!found_cur) {
			if (this == selected) {
				found_cur = true;
			}
			return;
		}
		closest = this;
		return false;
	});
	if (!closest) return;
	
	var t = selected;
	var oldParent = t.parentNode;
	var oldNextSibling = t.nextSibling;
	$(closest)[dir == 'Down'?'before':'after'](t);
	// If the element actually moved position, add the command and fire the changed
	// event handler.
	if (oldNextSibling != t.nextSibling) {
		addCommandToHistory(new svgedit.history.MoveElementCommand(t, oldNextSibling, oldParent, "Move " + dir));
		call("changed", [t]);
	}
};

// Function: moveSelectedElements
// Moves selected elements on the X/Y axis 
//
// Parameters:
// dx - Float with the distance to move on the x-axis
// dy - Float with the distance to move on the y-axis
// undoable - Boolean indicating whether or not the action should be undoable
//
// Returns:
// Batch command for the move
this.moveSelectedElements = function(dx, dy, undoable) {
	// if undoable is not sent, default to true
	// if single values, scale them to the zoom
	if (dx.constructor != Array) {
		dx /= current_zoom;
		dy /= current_zoom;
	}
	undoable = undoable || true;
	var batchCmd = new svgedit.history.BatchCommand("position");
	var i = selectedElements.length;
	while (i--) {
		var selected = selectedElements[i];
		if (selected != null) {
//			if (i==0)
//				selectedBBoxes[0] = svgedit.utilities.getBBox(selected);
			
//			var b = {};
//			for (var j in selectedBBoxes[i]) b[j] = selectedBBoxes[i][j];
//			selectedBBoxes[i] = b;
			
			var xform = svgroot.createSVGTransform();
			var tlist = svgedit.transformlist.getTransformList(selected);
			
			// dx and dy could be arrays
			if (dx.constructor == Array) {
//				if (i==0) {
//					selectedBBoxes[0].x += dx[0];
//					selectedBBoxes[0].y += dy[0];
//				}
				xform.setTranslate(dx[i], dy[i]);
			} else {
//				if (i==0) {
//					selectedBBoxes[0].x += dx;
//					selectedBBoxes[0].y += dy;
//				}
				xform.setTranslate(dx, dy);
			}

			if (tlist.numberOfItems) {
				tlist.insertItemBefore(xform, 0);
			} else {
				tlist.appendItem(xform);
			}
			
			var cmd = svgedit.recalculate.recalculateDimensions(selected);
			if (cmd) {
				batchCmd.addSubCommand(cmd);
			}
			
			selectorManager.requestSelector(selected).resize();
		}
	}
	if (!batchCmd.isEmpty()) {
		if (undoable)
			addCommandToHistory(batchCmd);
		call("changed", selectedElements);
		return batchCmd;
	}
};

// Function: cloneSelectedElements
// Create deep DOM copies (clones) of all selected elements and move them slightly 
// from their originals
this.cloneSelectedElements = function(x, y) {
	var batchCmd = new svgedit.history.BatchCommand("Clone Elements");
	// find all the elements selected (stop at first null)
	var len = selectedElements.length;
	function sortfunction(a, b){
		return ($(b).index() - $(a).index()); //causes an array to be sorted numerically and ascending
	}
	selectedElements.sort(sortfunction);
	for (var i = 0; i < len; ++i) {
		var elem = selectedElements[i];
		if (elem == null) break;
	}
	// use slice to quickly get the subset of elements we need
	var copiedElements = selectedElements.slice(0, i);
	this.clearSelection(true);
	// note that we loop in the reverse way because of the way elements are added
	// to the selectedElements array (top-first)
	var i = copiedElements.length;
	while (i--) {
		// clone each element and replace it within copiedElements
		var elem = copiedElements[i] = copyElem(copiedElements[i]);
		(current_group || getCurrentDrawing().getCurrentLayer()).appendChild(elem);
		batchCmd.addSubCommand(new svgedit.history.InsertElementCommand(elem));
	}
	
	if (!batchCmd.isEmpty()) {
		addToSelection(copiedElements.reverse()); // Need to reverse for correct selection-adding
		this.moveSelectedElements(x, y, false);
		addCommandToHistory(batchCmd);
	}
};

// Function: alignSelectedElements
// Aligns selected elements
//
// Parameters:
// type - String with single character indicating the alignment type
// relative_to - String that must be one of the following: 
// "selected", "largest", "smallest", "page"
this.alignSelectedElements = function(type, relative_to) {
	var bboxes = [], angles = [];
	var minx = Number.MAX_VALUE, maxx = Number.MIN_VALUE, miny = Number.MAX_VALUE, maxy = Number.MIN_VALUE;
	var curwidth = Number.MIN_VALUE, curheight = Number.MIN_VALUE;
	var len = selectedElements.length;
	if (!len) return;
	for (var i = 0; i < len; ++i) {
		if (selectedElements[i] == null) break;
		var elem = selectedElements[i];
		bboxes[i] = getStrokedBBox([elem]);
		
		// now bbox is axis-aligned and handles rotation
		switch (relative_to) {
			case 'smallest':
				if ( (type == 'l' || type == 'c' || type == 'r') && (curwidth == Number.MIN_VALUE || curwidth > bboxes[i].width) ||
					 (type == 't' || type == 'm' || type == 'b') && (curheight == Number.MIN_VALUE || curheight > bboxes[i].height) ) {
					minx = bboxes[i].x;
					miny = bboxes[i].y;
					maxx = bboxes[i].x + bboxes[i].width;
					maxy = bboxes[i].y + bboxes[i].height;
					curwidth = bboxes[i].width;
					curheight = bboxes[i].height;
				}
				break;
			case 'largest':
				if ( (type == 'l' || type == 'c' || type == 'r') && (curwidth == Number.MIN_VALUE || curwidth < bboxes[i].width) ||
					 (type == 't' || type == 'm' || type == 'b') && (curheight == Number.MIN_VALUE || curheight < bboxes[i].height) ) {
					minx = bboxes[i].x;
					miny = bboxes[i].y;
					maxx = bboxes[i].x + bboxes[i].width;
					maxy = bboxes[i].y + bboxes[i].height;
					curwidth = bboxes[i].width;
					curheight = bboxes[i].height;
				}
				break;
			default: // 'selected'
				if (bboxes[i].x < minx) minx = bboxes[i].x;
				if (bboxes[i].y < miny) miny = bboxes[i].y;
				if (bboxes[i].x + bboxes[i].width > maxx) maxx = bboxes[i].x + bboxes[i].width;
				if (bboxes[i].y + bboxes[i].height > maxy) maxy = bboxes[i].y + bboxes[i].height;
				break;
		}
	} // loop for each element to find the bbox and adjust min/max

	if (relative_to == 'page') {
		minx = 0;
		miny = 0;
		maxx = canvas.contentW;
		maxy = canvas.contentH;
	}

	var dx = new Array(len);
	var dy = new Array(len);
	for (var i = 0; i < len; ++i) {
		if (selectedElements[i] == null) break;
		var elem = selectedElements[i];
		var bbox = bboxes[i];
		dx[i] = 0;
		dy[i] = 0;
		switch (type) {
			case 'l': // left (horizontal)
				dx[i] = minx - bbox.x;
				break;
			case 'c': // center (horizontal)
				dx[i] = (minx+maxx)/2 - (bbox.x + bbox.width/2);
				break;
			case 'r': // right (horizontal)
				dx[i] = maxx - (bbox.x + bbox.width);
				break;
			case 't': // top (vertical)
				dy[i] = miny - bbox.y;
				break;
			case 'm': // middle (vertical)
				dy[i] = (miny+maxy)/2 - (bbox.y + bbox.height/2);
				break;
			case 'b': // bottom (vertical)
				dy[i] = maxy - (bbox.y + bbox.height);
				break;
		}
	}
	this.moveSelectedElements(dx, dy);
};

// Group: Additional editor tools

this.contentW = getResolution().w;
this.contentH = getResolution().h;

// Function: updateCanvas
// Updates the editor canvas width/height/position after a zoom has occurred 
//
// Parameters:
// w - Float with the new width
// h - Float with the new height
//
// Returns: 
// Object with the following values:
// * x - The canvas' new x coordinate
// * y - The canvas' new y coordinate
// * old_x - The canvas' old x coordinate
// * old_y - The canvas' old y coordinate
// * d_x - The x position difference
// * d_y - The y position difference
this.updateCanvas = function(w, h) {
	svgroot.setAttribute("width", w);
	svgroot.setAttribute("height", h);
	var bg = $('#canvasBackground')[0];
	var old_x = svgcontent.getAttribute('x');
	var old_y = svgcontent.getAttribute('y');
	var x = (w/2 - this.contentW*current_zoom/2);
	var y = (h/2 - this.contentH*current_zoom/2);

	svgedit.utilities.assignAttributes(svgcontent, {
		width: this.contentW*current_zoom,
		height: this.contentH*current_zoom,
		'x': x,
		'y': y,
		"viewBox" : "0 0 " + this.contentW + " " + this.contentH
	});
	
	svgedit.utilities.assignAttributes(bg, {
		width: svgcontent.getAttribute('width'),
		height: svgcontent.getAttribute('height'),
		x: x,
		y: y
	});

	var bg_img = svgedit.utilities.getElem('background_image');
	if (bg_img) {
		svgedit.utilities.assignAttributes(bg_img, {
			'width': '100%',
			'height': '100%'
		});
	}
	
	selectorManager.selectorParentGroup.setAttribute("transform", "translate(" + x + "," + y + ")");
	 runExtensions("canvasUpdated",{new_x:x, new_y:y, old_x:old_x, old_y:old_y, d_x:x - old_x, d_y:y - old_y});
	return {x:x, y:y, old_x:old_x, old_y:old_y, d_x:x - old_x, d_y:y - old_y};
};

// Function: setBackground
// Set the background of the editor (NOT the actual document)
//
// Parameters:
// color - String with fill color to apply
// url - URL or path to image to use
this.setBackground = function(color, url) {
	var bg =  svgedit.utilities.getElem('canvasBackground');
	var border = $(bg).find('rect')[0];
	var bg_img = svgedit.utilities.getElem('background_image');
	border.setAttribute('fill', color);
	if (url) {
		if (!bg_img) {
			bg_img = svgdoc.createElementNS(NS.SVG, "image");
			svgedit.utilities.assignAttributes(bg_img, {
				'id': 'background_image',
				'width': '100%',
				'height': '100%',
				'preserveAspectRatio': 'xMinYMin',
				'style':'pointer-events:none'
			});
		}
		setHref(bg_img, url);
		bg.appendChild(bg_img);
	} else if (bg_img) {
		bg_img.parentNode.removeChild(bg_img);
	}
};

// Function: cycleElement
// Select the next/previous element within the current layer
//
// Parameters:
// next - Boolean where true = next and false = previous element
this.cycleElement = function(next) {
	var cur_elem = selectedElements[0];
	var elem = false;
	var all_elems = getVisibleElements(current_group || getCurrentDrawing().getCurrentLayer());
	if (!all_elems.length) return;
	if (cur_elem == null) {
		var num = next?all_elems.length-1:0;
		elem = all_elems[num];
	} else {
		var i = all_elems.length;
		while (i--) {
			if (all_elems[i] == cur_elem) {
				var num = next?i-1:i+1;
				if (num >= all_elems.length) {
					num = 0;
				} else if (num < 0) {
					num = all_elems.length-1;
				} 
				elem = all_elems[num];
				break;
			} 
		}
	}		
	selectOnly([elem], true);
	call("selected", selectedElements);
};

this.clear();


// DEPRECATED: getPrivateMethods 
// Since all methods are/should be public somehow, this function should be removed

// Being able to access private methods publicly seems wrong somehow,
// but currently appears to be the best way to allow testing and provide
// access to them to plugins.
this.getPrivateMethods = function() {
	var obj = {
		addCommandToHistory: addCommandToHistory,
		setGradient: setGradient,
		addSvgElementFromJson: addSvgElementFromJson,
		assignAttributes: assignAttributes,
		BatchCommand: BatchCommand,
		call: call,
		ChangeElementCommand: ChangeElementCommand,
		copyElem: copyElem,
		ffClone: ffClone,
		findDefs: findDefs,
		findDuplicateGradient: findDuplicateGradient,
		getElem: getElem,
		getId: getId,
		getIntersectionList: getIntersectionList,
		getMouseTarget: getMouseTarget,
		getNextId: getNextId,
		getPathBBox: getPathBBox,
		getUrlFromAttr: getUrlFromAttr,
		hasMatrixTransform: hasMatrixTransform,
		identifyLayers: identifyLayers,
		InsertElementCommand: InsertElementCommand,
		isIdentity: svgedit.math.isIdentity,
		logMatrix: logMatrix,
		matrixMultiply: matrixMultiply,
		MoveElementCommand: MoveElementCommand,
		preventClickDefault: preventClickDefault,
		recalculateAllSelectedDimensions: recalculateAllSelectedDimensions,
		recalculateDimensions: recalculateDimensions,
		remapElement: remapElement,
		RemoveElementCommand: RemoveElementCommand,
		removeUnusedDefElems: removeUnusedDefElems,
		round: round,
		runExtensions: runExtensions,
		sanitizeSvg: sanitizeSvg,
		SVGEditTransformList: svgedit.transformlist.SVGTransformList,
		toString: toString,
		transformBox: svgedit.math.transformBox,
		transformListToTransform: transformListToTransform,
		transformPoint: transformPoint,
		walkTree: svgedit.utilities.walkTree
	};
	return obj;
};

};


/*
 * svg-editor.js
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Pavol Rusnak
 * Copyright(c) 2010 Jeff Schiller
 * Copyright(c) 2010 Narendra Sisodiya
 *
 */

// Dependencies:
// 1) units.js
// 2) browser.js
// 3) svgcanvas.js

(function() {

	if (!window.svgEditor) window.svgEditor = function($) {
		var svgCanvas,
			Editor = {},
			isReady = false,
			defaultPrefs = {
				lang: 'en',
				iconsize: 'm',
				bkgd_color: '#FFF',
				bkgd_url: '',
				img_save: 'embed'
			},
			curPrefs = {},

			// Note: Difference between Prefs and Config is that Prefs can be
			// changed in the UI and are stored in the browser, config can not
			curConfig = {
				canvasName: 'default',
				canvas_expansion: 3,
				dimensions: [640,480],
				initFill: {
					color: 'FF0000', // solid red
					opacity: 1
				},
				initStroke: {
					width: 5,
					color: '000000', // solid black
					opacity: 1
				},
				initOpacity: 1,
				imgPath: 'images/',
				langPath: 'locale/',
				extPath: 'extensions/',
				jGraduatePath: 'jgraduate/images/',
				extensions: [
					'ext-markers.js',
					'ext-connector.js',
					'ext-eyedropper.js',
					'ext-shapes.js',
					'ext-imagelib.js',
					'ext-grid.js',
					'ext-polygon.js',
					'ext-star.js'
				],
				initTool: 'select',
				wireframe: false,
				colorPickerCSS: null,
				gridSnapping: false,
				gridColor: '#000',
				baseUnit: 'px',
				snappingStep: 10,
				showRulers: true
			},
			uiStrings = Editor.uiStrings = {
				common: {
					ok: 'OK',
					cancel: 'Cancel',
					key_up: 'Up',
					key_down: 'Down',
					key_backspace: 'Backspace',
					key_del: 'Del'
				},
				// This is needed if the locale is English, since the locale strings are not read in that instance.
				layers: {
					layer: 'Layer'
				},
				notification: {
					invalidAttrValGiven: 'Invalid value given',
					noContentToFitTo: 'No content to fit to',
					dupeLayerName: 'There is already a layer named that!',
					enterUniqueLayerName: 'Please enter a unique layer name',
					enterNewLayerName: 'Please enter the new layer name',
					layerHasThatName: 'Layer already has that name',
					QmoveElemsToLayer: 'Move selected elements to layer \'%s\'?',
					QwantToClear: 'Do you want to clear the drawing?\nThis will also erase your undo history!',
					QwantToOpen: 'Do you want to open a new file?\nThis will also erase your undo history!',
					QerrorsRevertToSource: 'There were parsing errors in your SVG source.\nRevert back to original SVG source?',
					QignoreSourceChanges: 'Ignore changes made to SVG source?',
					featNotSupported: 'Feature not supported',
					enterNewImgURL: 'Enter the new image URL',
					defsFailOnSave: 'NOTE: Due to a bug in your browser, this image may appear wrong (missing gradients or elements). It will however appear correct once actually saved.',
					loadingImage: 'Loading image, please wait...',
					saveFromBrowser: 'Select \'Save As...\' in your browser to save this image as a %s file.',
					noteTheseIssues: 'Also note the following issues: ',
					unsavedChanges: 'There are unsaved changes.',
					enterNewLinkURL: 'Enter the new hyperlink URL',
					errorLoadingSVG: 'Error: Unable to load SVG data',
					URLloadFail: 'Unable to load from URL',
					retrieving: 'Retrieving \'%s\' ...'
				}
			},
			customHandlers = {};

		Editor.curConfig = curConfig;
		Editor.tool_scale = 1;

		// Store and retrieve preferences
		$.pref = function(key, val) {
			if (val) curPrefs[key] = val;
			key = 'svg-edit-'+key;
			var host = location.hostname,
				onWeb = host && host.indexOf('.') >= 0,
				store = (val != undefined),
				storage = false;
			// Some FF versions throw security errors here
			try {
				if (window.localStorage) { // && onWeb removed so Webkit works locally
					storage = localStorage;
				}
			} catch(e) {}
			try {
				if (window.globalStorage && onWeb) {
					storage = globalStorage[host];
				}
			} catch(e) {}

			if (storage) {
				if (store) {
					storage.setItem(key, val);
				} else if (storage.getItem(key)) {
					return storage.getItem(key) + ''; // Convert to string for FF (.value fails in Webkit)
				}
			} else if (window.widget) {
				if (store) {
					widget.setPreferenceForKey(val, key);
				} else {
					return widget.preferenceForKey(key);
				}
			} else {
				if (store) {
					var d = new Date();
					d.setTime(d.getTime() + 31536000000);
					val = encodeURIComponent(val);
					document.cookie = key+'='+val+'; expires='+d.toUTCString();
				} else {
					var result = document.cookie.match(new RegExp(key + '=([^;]+)'));
					return result ? decodeURIComponent(result[1]) : '';
				}
			}
		};

		Editor.setConfig = function(opts) {
			$.each(opts, function(key, val) {
				// Only allow prefs defined in defaultPrefs
				if (key in defaultPrefs) {
					$.pref(key, val);
				}
			});
			$.extend(true, curConfig, opts);
			if (opts.extensions) {
				curConfig.extensions = opts.extensions;
			}
		};

		// Extension mechanisms must call setCustomHandlers with two functions: opts.open and opts.save
		// opts.open's responsibilities are:
		// 	- invoke a file chooser dialog in 'open' mode
		//	- let user pick a SVG file
		//	- calls setCanvas.setSvgString() with the string contents of that file
		// opts.save's responsibilities are:
		//	- accept the string contents of the current document
		//	- invoke a file chooser dialog in 'save' mode
		// 	- save the file to location chosen by the user
		Editor.setCustomHandlers = function(opts) {
			Editor.ready(function() {
				if (opts.open) {
					$('#tool_open > input[type="file"]').remove();
					$('#tool_open').show();
					svgCanvas.open = opts.open;
				}
				if (opts.save) {
					Editor.showSaveWarning = false;
					svgCanvas.bind('saved', opts.save);
				}
				if (opts.exportImage || opts.pngsave) { // Deprecating pngsave
					svgCanvas.bind('exported', opts.exportImage || opts.pngsave);
				}
				customHandlers = opts;
			});
		};

		Editor.randomizeIds = function() {
			svgCanvas.randomizeIds(arguments);
		};

		Editor.init = function() {
			// For external openers
			(function() {
				// let the opener know SVG Edit is ready
				var w = window.opener;
				if (w) {
					try {
						var svgEditorReadyEvent = w.document.createEvent('Event');
						svgEditorReadyEvent.initEvent('svgEditorReady', true, true);
						w.document.documentElement.dispatchEvent(svgEditorReadyEvent);
					}
					catch(e) {}
				}
			})();

			(function() {
				// Load config/data from URL if given
				var urldata = $.deparam.querystring(true);
				if (!$.isEmptyObject(urldata)) {
					if (urldata.dimensions) {
						urldata.dimensions = urldata.dimensions.split(',');
					}

					if (urldata.extensions) {
						urldata.extensions = urldata.extensions.split(',');
					}

					if (urldata.bkgd_color) {
						urldata.bkgd_color = '#' + urldata.bkgd_color;
					}

					svgEditor.setConfig(urldata);

					var src = urldata.source;
					var qstr = $.param.querystring();

					if (!src) { // urldata.source may have been null if it ended with '='
						if (qstr.indexOf('source=data:') >= 0) {
							src = qstr.match(/source=(data:[^&]*)/)[1];
						}
					}

					if (src) {
						if (src.indexOf('data:') === 0) {
							// plusses get replaced by spaces, so re-insert
							src = src.replace(/ /g, '+');
							Editor.loadFromDataURI(src);
						} else {
							Editor.loadFromString(src);
						}
					} else if (qstr.indexOf('paramurl=') !== -1) {
						// Get paramater URL (use full length of remaining location.href)
						svgEditor.loadFromURL(qstr.substr(9));
					} else if (urldata.url) {
						svgEditor.loadFromURL(urldata.url);
					}
				} else {
					var name = 'svgedit-' + Editor.curConfig.canvasName;
					var cached = window.localStorage && window.localStorage.getItem(name);
					if (cached) {
						Editor.loadFromString(cached);
					}
				}
			})();

			var extFunc = function() {
				$.each(curConfig.extensions, function() {
					var extname = this;
					$.getScript(curConfig.extPath + extname, function(d) {
						// Fails locally in Chrome 5
						if (!d) {
							var s = document.createElement('script');
							s.src = curConfig.extPath + extname;
							document.querySelector('head').appendChild(s);
						}
					});
				});

				var good_langs = [];

				$('#lang_select option').each(function() {
					good_langs.push(this.value);
				});

				// var lang = ('lang' in curPrefs) ? curPrefs.lang : null;
				Editor.putLocale(null, good_langs);
			};

			// Load extensions
			// Bit of a hack to run extensions in local Opera/IE9
			if (document.location.protocol === 'file:') {
				setTimeout(extFunc, 100);
			} else {
				extFunc();
			}
			$.svgIcons(curConfig.imgPath + 'svg_edit_icons.svg', {
				w:24, h:24,
				id_match: false,
				no_img: !svgedit.browser.isWebkit(), // Opera & Firefox 4 gives odd behavior w/images
				fallback_path: curConfig.imgPath,
				fallback: {
					'new_image': 'clear.png',
					'save': 'save.png',
					'open': 'open.png',
					'source': 'source.png',
					'docprops': 'document-properties.png',
					'wireframe': 'wireframe.png',

					'undo': 'undo.png',
					'redo': 'redo.png',

					'select': 'select.png',
					'select_node': 'select_node.png',
					'pencil': 'fhpath.png',
					'pen': 'line.png',
					'square': 'square.png',
					'rect': 'rect.png',
					'fh_rect': 'freehand-square.png',
					'circle': 'circle.png',
					'ellipse': 'ellipse.png',
					'fh_ellipse': 'freehand-circle.png',
					'path': 'path.png',
					'text': 'text.png',
					'image': 'image.png',
					'zoom': 'zoom.png',

					'clone': 'clone.png',
					'node_clone': 'node_clone.png',
					'delete': 'delete.png',
					'node_delete': 'node_delete.png',
					'group': 'shape_group.png',
					'ungroup': 'shape_ungroup.png',
					'move_top': 'move_top.png',
					'move_bottom': 'move_bottom.png',
					'to_path': 'to_path.png',
					'link_controls': 'link_controls.png',
					'reorient': 'reorient.png',

					'align_left': 'align-left.png',
					'align_center': 'align-center.png',
					'align_right': 'align-right.png',
					'align_top': 'align-top.png',
					'align_middle': 'align-middle.png',
					'align_bottom': 'align-bottom.png',

					'go_up': 'go-up.png',
					'go_down': 'go-down.png',

					'ok': 'save.png',
					'cancel': 'cancel.png',

					'arrow_right': 'flyouth.png',
					'arrow_down': 'dropdown.gif'
				},
				placement: {
					'#logo': 'logo',

					'#tool_clear div,#layer_new': 'new_image',
					'#tool_save div': 'save',
					'#tool_export div': 'export',
					'#tool_open div div': 'open',
					'#tool_import div div': 'import',
					'#tool_source': 'source',
					'#tool_docprops > div': 'docprops',
					'#tool_wireframe': 'wireframe',

					'#tool_undo': 'undo',
					'#tool_redo': 'redo',

					'#tool_select': 'select',
					'#tool_fhpath': 'pencil',
					'#tool_line': 'pen',
					'#tool_rect,#tools_rect_show': 'rect',
					'#tool_square': 'square',
					'#tool_fhrect': 'fh_rect',
					'#tool_ellipse,#tools_ellipse_show': 'ellipse',
					'#tool_circle': 'circle',
					'#tool_fhellipse': 'fh_ellipse',
					'#tool_path': 'path',
					'#tool_text,#layer_rename': 'text',
					'#tool_image': 'image',
					'#tool_zoom': 'zoom',

					'#tool_clone,#tool_clone_multi': 'clone',
					'#tool_node_clone': 'node_clone',
					'#layer_delete,#tool_delete,#tool_delete_multi': 'delete',
					'#tool_node_delete': 'node_delete',
					'#tool_add_subpath': 'add_subpath',
					'#tool_openclose_path': 'open_path',
					'#tool_move_top': 'move_top',
					'#tool_move_bottom': 'move_bottom',
					'#tool_topath': 'to_path',
					'#tool_node_link': 'link_controls',
					'#tool_reorient': 'reorient',
					'#tool_group': 'group',
					'#tool_ungroup': 'ungroup',
					'#tool_unlink_use': 'unlink_use',

					'#tool_alignleft, #tool_posleft': 'align_left',
					'#tool_aligncenter, #tool_poscenter': 'align_center',
					'#tool_alignright, #tool_posright': 'align_right',
					'#tool_aligntop, #tool_postop': 'align_top',
					'#tool_alignmiddle, #tool_posmiddle': 'align_middle',
					'#tool_alignbottom, #tool_posbottom': 'align_bottom',
					'#cur_position': 'align',

					'#linecap_butt,#cur_linecap': 'linecap_butt',
					'#linecap_round': 'linecap_round',
					'#linecap_square': 'linecap_square',

					'#linejoin_miter,#cur_linejoin': 'linejoin_miter',
					'#linejoin_round': 'linejoin_round',
					'#linejoin_bevel': 'linejoin_bevel',

					'#url_notice': 'warning',

					'#layer_up': 'go_up',
					'#layer_down': 'go_down',
					'#layer_moreopts': 'context_menu',
					'#layerlist td.layervis': 'eye',

					'#tool_source_save,#tool_docprops_save,#tool_prefs_save': 'ok',
					'#tool_source_cancel,#tool_docprops_cancel,#tool_prefs_cancel': 'cancel',

					'#rwidthLabel, #iwidthLabel': 'width',
					'#rheightLabel, #iheightLabel': 'height',
					'#cornerRadiusLabel span': 'c_radius',
					'#angleLabel': 'angle',
					'#linkLabel,#tool_make_link,#tool_make_link_multi': 'globe_link',
					'#zoomLabel': 'zoom',
					'#tool_fill label': 'fill',
					'#tool_stroke .icon_label': 'stroke',
					'#group_opacityLabel': 'opacity',
					'#blurLabel': 'blur',
					'#font_sizeLabel': 'fontsize',

					'.flyout_arrow_horiz': 'arrow_right',
					'.dropdown button, #main_button .dropdown': 'arrow_down',
					'#palette .palette_item:first, #fill_bg, #stroke_bg': 'no_color'
				},
				resize: {
					'#logo .svg_icon': 28,
					'.flyout_arrow_horiz .svg_icon': 5,
					'.layer_button .svg_icon, #layerlist td.layervis .svg_icon': 14,
					'.dropdown button .svg_icon': 7,
					'#main_button .dropdown .svg_icon': 9,
					'.palette_item:first .svg_icon' : 15,
					'#fill_bg .svg_icon, #stroke_bg .svg_icon': 16,
					'.toolbar_button button .svg_icon': 16,
					'.stroke_tool div div .svg_icon': 20,
					'#tools_bottom label .svg_icon': 18
				},
				callback: function(icons) {
					$('.toolbar_button button > svg, .toolbar_button button > img').each(function() {
						$(this).parent().prepend(this);
					});

					var tleft = $('#tools_left');
					if (tleft.length !== 0) {
						var min_height = tleft.offset().top + tleft.outerHeight();
					}
// 					var size = $.pref('iconsize');
// 					if (size && size != 'm') {
// 						svgEditor.setIconSize(size);
// 					} else if ($(window).height() < min_height) {
// 						// Make smaller
// 						svgEditor.setIconSize('s');
// 					}

					// Look for any missing flyout icons from plugins
					$('.tools_flyout').each(function() {
						var shower = $('#' + this.id + '_show');
						var sel = shower.attr('data-curopt');
						// Check if there's an icon here
						if (!shower.children('svg, img').length) {
							var clone = $(sel).children().clone();
							if (clone.length) {
								clone[0].removeAttribute('style'); //Needed for Opera
								shower.append(clone);
							}
						}
					});

					svgEditor.runCallbacks();

					setTimeout(function() {
						$('.flyout_arrow_horiz:empty').each(function() {
							$(this).append($.getSvgIcon('arrow_right').width(5).height(5));
						});
					}, 1);
				}
			});

			Editor.canvas = svgCanvas = new $.SvgCanvas(document.getElementById('svgcanvas'), curConfig);
			Editor.showSaveWarning = false;
			var palette = [
				'#000000', '#3f3f3f', '#7f7f7f', '#bfbfbf', '#ffffff',
				'#ff0000', '#ff7f00', '#ffff00', '#7fff00',
				'#00ff00', '#00ff7f', '#00ffff', '#007fff',
				'#0000ff', '#7f00ff', '#ff00ff', '#ff007f',
				'#7f0000', '#7f3f00', '#7f7f00', '#3f7f00',
				'#007f00', '#007f3f', '#007f7f', '#003f7f',
				'#00007f', '#3f007f', '#7f007f', '#7f003f',
				'#ffaaaa', '#ffd4aa', '#ffffaa', '#d4ffaa',
				'#aaffaa', '#aaffd4', '#aaffff', '#aad4ff',
				'#aaaaff', '#d4aaff', '#ffaaff', '#ffaad4'
				],
				modKey = (svgedit.browser.isMac() ? 'meta+' : 'ctrl+'), // ⌘
				path = svgCanvas.pathActions,
				undoMgr = svgCanvas.undoMgr,
				Utils = svgedit.utilities,
				defaultImageURL = curConfig.imgPath + 'logo.png',
				workarea = $('#workarea'),
				canv_menu = $('#cmenu_canvas'),
				layer_menu = $('#cmenu_layers'),
				exportWindow = null,
				tool_scale = 1,
				zoomInIcon = 'crosshair',
				zoomOutIcon = 'crosshair',
				ui_context = 'toolbars',
				origSource = '',
				paintBox = {fill: null, stroke:null};

			// This sets up alternative dialog boxes. They mostly work the same way as
			// their UI counterparts, expect instead of returning the result, a callback
			// needs to be included that returns the result as its first parameter.
			// In the future we may want to add additional types of dialog boxes, since
			// they should be easy to handle this way.
			(function() {
				$('#dialog_container').draggable({cancel: '#dialog_content, #dialog_buttons *', containment: 'window'});
				var box = $('#dialog_box'),
					btn_holder = $('#dialog_buttons'),
					dialog_content = $('#dialog_content'),
					dbox = function(type, msg, callback, defaultVal, opts, changeCb) {
						var ok, ctrl;
						dialog_content.html('<p>'+msg.replace(/\n/g, '</p><p>')+'</p>')
							.toggleClass('prompt', (type == 'prompt'));
						btn_holder.empty();

						ok = $('<input type="button" value="' + uiStrings.common.ok + '">').appendTo(btn_holder);

						if (type !== 'alert') {
							$('<input type="button" value="' + uiStrings.common.cancel + '">')
								.appendTo(btn_holder)
								.click(function() { box.hide(); callback(false);});
						}

						if (type === 'prompt') {
							ctrl = $('<input type="text">').prependTo(btn_holder);
							ctrl.val(defaultVal || '');
							ctrl.bind('keydown', 'return', function() {ok.click();});
						}
						else if (type === 'select') {
							var div = $('<div style="text-align:center;">');
							ctrl = $('<select>').appendTo(div);
							$.each(opts || [], function (opt, val) {
								ctrl.append($('<option>').html(val));
							});
							dialog_content.append(div);
							if (defaultVal) {
								ctrl.val(defaultVal);
							}
							if (changeCb) {
								ctrl.bind('change', 'return', changeCb);
							}
							ctrl.bind('keydown', 'return', function() {ok.click();});
						}

						if (type === 'process') {
							ok.hide();
						}

						box.show();

						ok.click(function() {
							box.hide();
							var resp = (type === 'prompt' || type === 'select') ? ctrl.val() : true;
							if (callback) callback(resp);
						}).focus();

						if (type === 'prompt' || type === 'select') ctrl.focus();
					};

				$.alert = function(msg, cb) { dbox('alert', msg, cb);};
				$.confirm = function(msg, cb) {	dbox('confirm', msg, cb);};
				$.process_cancel = function(msg, cb) { dbox('process', msg, cb);};
				$.prompt = function(msg, txt, cb) { dbox('prompt', msg, cb, txt);};
				$.select = function(msg, opts, cb, changeCb, txt) { dbox('select', msg, cb, txt, opts, changeCb);};
			}());

			var setSelectMode = function() {
				var curr = $('.tool_button_current');
				if (curr.length && curr[0].id !== 'tool_select') {
					curr.removeClass('tool_button_current').addClass('tool_button');
					$('#tool_select').addClass('tool_button_current').removeClass('tool_button');
					$('#styleoverrides').text('#svgcanvas svg *{cursor:move;pointer-events:all} #svgcanvas svg{cursor:default}');
				}
				svgCanvas.setMode('select');
				workarea.css('cursor', 'auto');
			};

			var togglePathEditMode = function(editmode, elems) {
				$('#path_node_panel').toggle(editmode);
				$('#tools_bottom_2,#tools_bottom_3').toggle(!editmode);
				if (editmode) {
					// Change select icon
					$('.tool_button_current').removeClass('tool_button_current').addClass('tool_button');
					$('#tool_select').addClass('tool_button_current').removeClass('tool_button');
					setIcon('#tool_select', 'select_node');
					multiselected = false;
					if (elems.length) {
						selectedElement = elems[0];
					}
				} else {
					setTimeout(function () {
						setIcon('#tool_select', 'select');
					}, 1000);
				}
			};

			// used to make the flyouts stay on the screen longer the very first time
			var flyoutspeed = 1250;
			var textBeingEntered = false;
			var selectedElement = null;
			var multiselected = false;
			var editingsource = false;
			var docprops = false;
			var preferences = false;
			var cur_context = '';
			var origTitle = $('title:first').text();

			var saveHandler = function(window, svg) {
				Editor.showSaveWarning = false;

				// by default, we add the XML prolog back, systems integrating SVG-edit (wikis, CMSs)
				// can just provide their own custom save handler and might not want the XML prolog
				svg = '<?xml version="1.0"?>\n' + svg;

				// IE9 doesn't allow standalone Data URLs
				// https://connect.microsoft.com/IE/feedback/details/542600/data-uri-images-fail-when-loaded-by-themselves
				if (svgedit.browser.isIE()) {
					showSourceEditor(0, true);
					return;
				}

				// Opens the SVG in new window
				var win = window.open('data:image/svg+xml;base64,' + Utils.encode64(svg));

				// Alert will only appear the first time saved OR the first time the bug is encountered
				var done = $.pref('save_notice_done');
				if (done !== 'all') {
					var note = uiStrings.notification.saveFromBrowser.replace('%s', 'SVG');

					// Check if FF and has <defs/>
					if (svgedit.browser.isGecko()) {
						if (svg.indexOf('<defs') !== -1) {
							// warning about Mozilla bug #308590 when applicable (seems to be fixed now in Feb 2013)
							note += '\n\n' + uiStrings.notification.defsFailOnSave;
							$.pref('save_notice_done', 'all');
							done = 'all';
						} else {
							$.pref('save_notice_done', 'part');
						}
					} else {
						$.pref('save_notice_done', 'all');
					}
					if (done !== 'part') {
						win.alert(note);
					}
				}
			};

			var exportHandler = function(window, data) {
				var issues = data.issues,
					type = data.type || 'PNG',
					dataURLType = (type === 'ICO' ? 'BMP' : type).toLowerCase();

				if (!$('#export_canvas').length) {
					$('<canvas>', {id: 'export_canvas'}).hide().appendTo('body');
				}
				var c = $('#export_canvas')[0];

				c.width = svgCanvas.contentW;
				c.height = svgCanvas.contentH;
				canvg(c, data.svg, {renderCallback: function() {
					var datauri = data.quality ? c.toDataURL('image/' + dataURLType, data.quality) : c.toDataURL('image/' + dataURLType);
					exportWindow.location.href = datauri;
					var done = $.pref('export_notice_done');
					if (done !== 'all') {
						var note = uiStrings.notification.saveFromBrowser.replace('%s', type);

						// Check if there's issues
						if (issues.length) {
							var pre = '\n \u2022 ';
							note += ('\n\n' + uiStrings.notification.noteTheseIssues + pre + issues.join(pre));
						}

						// Note that this will also prevent the notice even though new issues may appear later.
						// May want to find a way to deal with that without annoying the user
						$.pref('export_notice_done', 'all');
						exportWindow.alert(note);
					}
				}});
			};

			// called when we've selected a different element
			var selectedChanged = function(window, elems) {
				var mode = svgCanvas.getMode();
				if (mode === 'select') setSelectMode();
				var is_node = (mode == "pathedit");
				// if elems[1] is present, then we have more than one element
				selectedElement = (elems.length === 1 || elems[1] == null ? elems[0] : null);
				multiselected = (elems.length >= 2 && elems[1] != null);
				if (selectedElement != null) {
					// unless we're already in always set the mode of the editor to select because
					// upon creation of a text element the editor is switched into
					// select mode and this event fires - we need our UI to be in sync

					if (!is_node) {
						updateToolbar();
					}
				} // if (elem != null)

				// Deal with pathedit mode
				togglePathEditMode(is_node, elems);
				updateContextPanel();
				svgCanvas.runExtensions('selectedChanged', {
					elems: elems,
					selectedElement: selectedElement,
					multiselected: multiselected
				});
			};

			// Call when part of element is in process of changing, generally
			// on mousemove actions like rotate, move, etc.
			var elementTransition = function(window, elems) {
				var mode = svgCanvas.getMode();
				var elem = elems[0];

				if (!elem) return;

				multiselected = (elems.length >= 2 && elems[1] != null);
				// Only updating fields for single elements for now
				if (!multiselected) {
					switch (mode) {
						case 'rotate':
							var ang = svgCanvas.getRotationAngle(elem);
							$('#angle').val(ang);
							$('#tool_reorient').toggleClass('disabled', ang === 0);
							break;

						// TODO: Update values that change on move/resize, etc
// 						case "select":
// 						case "resize":
// 							break;
					}
				}
				svgCanvas.runExtensions('elementTransition', {
					elems: elems
				});
			};

			// called when any element has changed
			var elementChanged = function(window, elems) {
				var mode = svgCanvas.getMode();
				if (mode === 'select') {
					setSelectMode();
				}

				for (var i = 0; i < elems.length; ++i) {
					var elem = elems[i];

					// if the element changed was the svg, then it could be a resolution change
					if (elem && elem.tagName === 'svg') {
						populateLayers();
						updateCanvas();
					}
					// Update selectedElement if element is no longer part of the image.
					// This occurs for the text elements in Firefox
					else if (elem && selectedElement && selectedElement.parentNode == null) {
// 						|| elem && elem.tagName == "path" && !multiselected) { // This was added in r1430, but not sure why
						selectedElement = elem;
					}
				}

				Editor.showSaveWarning = true;

				// we update the contextual panel with potentially new
				// positional/sizing information (we DON'T want to update the
				// toolbar here as that creates an infinite loop)
				// also this updates the history buttons

				// we tell it to skip focusing the text control if the
				// text element was previously in focus
				updateContextPanel();

				// In the event a gradient was flipped:
				if (selectedElement && mode === 'select') {
					paintBox.fill.update();
					paintBox.stroke.update();
				}

				svgCanvas.runExtensions('elementChanged', {
					elems: elems
				});
			};

			var zoomChanged = svgCanvas.zoomChanged = function(window, bbox, autoCenter) {
				var scrbar = 15,
					res = svgCanvas.getResolution(),
					w_area = workarea,
					canvas_pos = $('#svgcanvas').position();
				var z_info = svgCanvas.setBBoxZoom(bbox, w_area.width()-scrbar, w_area.height()-scrbar);
				if (!z_info) return;
				var zoomlevel = z_info.zoom,
					bb = z_info.bbox;

				if (zoomlevel < 0.001) {
					changeZoom({value: 0.1});
					return;
				}

				$('#zoom').val((zoomlevel*100).toFixed(1));

				if (autoCenter) {
					updateCanvas();
				} else {
					updateCanvas(false, {x: bb.x * zoomlevel + (bb.width * zoomlevel)/2, y: bb.y * zoomlevel + (bb.height * zoomlevel)/2});
				}

				if (svgCanvas.getMode() == 'zoom' && bb.width) {
					// Go to select if a zoom box was drawn
					setSelectMode();
				}

				zoomDone();
			};

			$('#cur_context_panel').delegate('a', 'click', function() {
				var link = $(this);
				if (link.attr('data-root')) {
					svgCanvas.leaveContext();
				} else {
					svgCanvas.setContext(link.text());
				}
				svgCanvas.clearSelection();
				return false;
			});

			var contextChanged = function(win, context) {
				var link_str = '';
				if (context) {
					var str = '';
					link_str = '<a href="#" data-root="y">' + svgCanvas.getCurrentDrawing().getCurrentLayerName() + '</a>';

					$(context).parentsUntil('#svgcontent > g').andSelf().each(function() {
						if (this.id) {
							str += ' > ' + this.id;
							if (this !== context) {
								link_str += ' > <a href="#">' + this.id + '</a>';
							} else {
								link_str += ' > ' + this.id;
							}
						}
					});

					cur_context = str;
				} else {
					cur_context = null;
				}
				$('#cur_context_panel').toggle(!!context).html(link_str);

				updateTitle();
			};

			// Makes sure the current selected paint is available to work with
			var prepPaints = function() {
				paintBox.fill.prep();
				paintBox.stroke.prep();
			};

			var flyout_funcs = {};

			var setupFlyouts = function(holders) {
				$.each(holders, function(hold_sel, btn_opts) {
					var buttons = $(hold_sel).children();
					var show_sel = hold_sel + '_show';
					var shower = $(show_sel);
					var def = false;
					buttons.addClass('tool_button')
						.unbind('click mousedown mouseup') // may not be necessary
						.each(function(i) {
							// Get this buttons options
							var opts = btn_opts[i];

							// Remember the function that goes with this ID
							flyout_funcs[opts.sel] = opts.fn;

							if (opts.isDefault) def = i;

							// Clicking the icon in flyout should set this set's icon
							var func = function(event) {
								var options = opts;
								//find the currently selected tool if comes from keystroke
								if (event.type === 'keydown') {
									var flyoutIsSelected = $(options.parent + '_show').hasClass('tool_button_current');
									var currentOperation = $(options.parent + '_show').attr('data-curopt');
									$.each(holders[opts.parent], function(i, tool) {
										if (tool.sel == currentOperation) {
											if (!event.shiftKey || !flyoutIsSelected) {
												options = tool;
											} else {
												options = holders[opts.parent][i+1] || holders[opts.parent][0];
											}
										}
									});
								}
								if ($(this).hasClass('disabled')) return false;
								if (toolButtonClick(show_sel)) {
									options.fn();
								}
								if (options.icon) {
									var icon = $.getSvgIcon(options.icon, true);
								} else {
									var icon = $(options.sel).children().eq(0).clone();
								}

								icon[0].setAttribute('width', shower.width());
								icon[0].setAttribute('height', shower.height());
								shower.children(':not(.flyout_arrow_horiz)').remove();
								shower.append(icon).attr('data-curopt', options.sel); // This sets the current mode
							};

							$(this).mouseup(func);

							if (opts.key) {
								$(document).bind('keydown', opts.key[0] + ' shift+' + opts.key[0], func);
							}
						});

					if (def) {
						shower.attr('data-curopt', btn_opts[def].sel);
					} else if (!shower.attr('data-curopt')) {
						// Set first as default
						shower.attr('data-curopt', btn_opts[0].sel);
					}

					var timer;
					var pos = $(show_sel).position();

					// Clicking the "show" icon should set the current mode
					shower.mousedown(function(evt) {
						if (shower.hasClass('disabled')) return false;
						var holder = $(hold_sel);
						var l = pos.left + 34;
						var w = holder.width() * -1;
						var time = holder.data('shown_popop') ? 200 : 0;
						timer = setTimeout(function() {
							// Show corresponding menu
							if (!shower.data('isLibrary')) {
								holder.css('left', w).show().animate({
									left: l
								}, 150);
							} else {
								holder.css('left', l).show();
							}
							holder.data('shown_popop', true);
						},time);
						evt.preventDefault();
					}).mouseup(function(evt) {
						clearTimeout(timer);
						var opt = $(this).attr('data-curopt');
						// Is library and popped up, so do nothing
						if (shower.data('isLibrary') && $(show_sel.replace('_show', '')).is(':visible')) {
							toolButtonClick(show_sel, true);
							return;
						}
						if (toolButtonClick(show_sel) && (opt in flyout_funcs)) {
							flyout_funcs[opt]();
						}
					});
					// $('#tools_rect').mouseleave(function(){$('#tools_rect').fadeOut();});
				});
				setFlyoutTitles();
				setFlyoutPositions();
			};

			var makeFlyoutHolder = function(id, child) {
				var div = $('<div>', {
					'class': 'tools_flyout',
					id: id
				}).appendTo('#svg_editor').append(child);

				return div;
			};

			var setFlyoutPositions = function() {
				$('.tools_flyout').each(function() {
					var shower = $('#' + this.id + '_show');
					var pos = shower.offset();
					var w = shower.outerWidth();
					$(this).css({left: (pos.left + w)*tool_scale, top: pos.top});
				});
			};

			var setFlyoutTitles = function() {
				$('.tools_flyout').each(function() {
					var shower = $('#' + this.id + '_show');
					if (shower.data('isLibrary')) return;

					var tooltips = [];
					$(this).children().each(function() {
						tooltips.push(this.title);
					});
					shower[0].title = tooltips.join(' / ');
				});
			};

			var resize_timer;

			var extAdded = function(window, ext) {
				var cb_called = false;
				var resize_done = false;
				var cb_ready = true; // Set to false to delay callback (e.g. wait for $.svgIcons)

				function prepResize() {
					if (resize_timer) {
						clearTimeout(resize_timer);
						resize_timer = null;
					}
					if (!resize_done) {
						resize_timer = setTimeout(function() {
							resize_done = true;
							setIconSize(curPrefs.iconsize);
						}, 50);
					}
				}

				var runCallback = function() {
					if (ext.callback && !cb_called && cb_ready) {
						cb_called = true;
						ext.callback();
					}
				};

				var btn_selects = [];

				if (ext.context_tools) {
					$.each(ext.context_tools, function(i, tool) {
						// Add select tool
						var cont_id = tool.container_id ? (' id="' + tool.container_id + '"') : '';
						var panel = $('#' + tool.panel);

						// create the panel if it doesn't exist
						if (!panel.length)
							panel = $('<div>', {id: tool.panel}).appendTo('#tools_top');

						// TODO: Allow support for other types, or adding to existing tool
						switch (tool.type) {
						case 'tool_button':
							var html = '<div class="tool_button">' + tool.id + '</div>';
							var div = $(html).appendTo(panel);
							if (tool.events) {
								$.each(tool.events, function(evt, func) {
									$(div).bind(evt, func);
								});
							}
							break;
						case 'select':
							var html = '<label' + cont_id + '>'
								+ '<select id="' + tool.id + '">';
							$.each(tool.options, function(val, text) {
								var sel = (val == tool.defval) ? " selected":"";
								html += '<option value="'+val+'"' + sel + '>' + text + '</option>';
							});
							html += "</select></label>";
							// Creates the tool, hides & adds it, returns the select element
							var sel = $(html).appendTo(panel).find('select');

							$.each(tool.events, function(evt, func) {
								$(sel).bind(evt, func);
							});
							break;
						case 'button-select':
							var html = '<div id="' + tool.id + '" class="dropdown toolset" title="' + tool.title + '">'
								+ '<div id="cur_' + tool.id + '" class="icon_label"></div><button></button></div>';

							var list = $('<ul id="' + tool.id + '_opts"></ul>').appendTo('#option_lists');

							if (tool.colnum) {
								list.addClass('optcols' + tool.colnum);
							}

							// Creates the tool, hides & adds it, returns the select element
							var dropdown = $(html).appendTo(panel).children();

							btn_selects.push({
								elem: ('#' + tool.id),
								list: ('#' + tool.id + '_opts'),
								title: tool.title,
								callback: tool.events.change,
								cur: ('#cur_' + tool.id)
							});

							break;
						case 'input':
							var html = '<label' + cont_id + '>'
								+ '<span id="' + tool.id + '_label">'
								+ tool.label + ':</span>'
								+ '<input id="' + tool.id + '" title="' + tool.title
								+ '" size="' + (tool.size || "4") + '" value="' + (tool.defval || "") + '" type="text"/></label>';

							// Creates the tool, hides & adds it, returns the select element

							// Add to given tool.panel
							var inp = $(html).appendTo(panel).find('input');

							if (tool.spindata) {
								inp.SpinButton(tool.spindata);
							}

							if (tool.events) {
								$.each(tool.events, function(evt, func) {
									inp.bind(evt, func);
								});
							}
							break;

						default:
							break;
						}
					});
				}

				if (ext.buttons) {
					var fallback_obj = {},
						placement_obj = {},
						svgicons = ext.svgicons,
						holders = {};

					// Add buttons given by extension
					$.each(ext.buttons, function(i, btn) {
						var icon;
						var id = btn.id;
						var num = i;

						// Give button a unique ID
						while($('#'+id).length) {
							id = btn.id + '_' + (++num);
						}

						if (!svgicons) {
							icon = $('<img src="' + btn.icon + '">');
						} else {
							fallback_obj[id] = btn.icon;
							var svgicon = btn.svgicon?btn.svgicon:btn.id;
							if (btn.type == 'app_menu') {
								placement_obj['#' + id + ' > div'] = svgicon;
							} else {
								placement_obj['#' + id] = svgicon;
							}
						}

						var cls, parent;

						// Set button up according to its type
						switch ( btn.type ) {
						case 'mode_flyout':
						case 'mode':
							cls = 'tool_button';
							parent = '#tools_left';
							break;
						case 'context':
							cls = 'tool_button';
							parent = '#' + btn.panel;
							// create the panel if it doesn't exist
							if (!$(parent).length)
								$('<div>', {id: btn.panel}).appendTo('#tools_top');
							break;
						case 'app_menu':
							cls = '';
							parent = '#main_menu ul';
							break;
						}

						var button = $((btn.list || btn.type == 'app_menu') ? '<li/>' : '<div/>')
							.attr('id', id)
							.attr('title', btn.title)
							.addClass(cls);
						if (!btn.includeWith && !btn.list) {
							if ('position' in btn) {
								$(parent).children().eq(btn.position).before(button);
							} else {
								button.appendTo(parent);
							}

							if (btn.type =='mode_flyout') {
							// Add to flyout menu / make flyout menu
	// 							var opts = btn.includeWith;
	// 							// opts.button, default, position
								var ref_btn = $(button);

								var flyout_holder = ref_btn.parent();
								// Create a flyout menu if there isn't one already
								if (!ref_btn.parent().hasClass('tools_flyout')) {
									// Create flyout placeholder
									var tls_id = ref_btn[0].id.replace('tool_', 'tools_');
									var show_btn = ref_btn.clone()
										.attr('id',tls_id + '_show')
										.append($('<div>', {'class': 'flyout_arrow_horiz'}));

									ref_btn.before(show_btn);

									// Create a flyout div
									flyout_holder = makeFlyoutHolder(tls_id, ref_btn);
									flyout_holder.data('isLibrary', true);
									show_btn.data('isLibrary', true);
								}
	// 							var ref_data = Actions.getButtonData(opts.button);

								placement_obj['#' + tls_id + '_show'] = btn.id;
								// TODO: Find way to set the current icon using the iconloader if this is not default

								// Include data for extension button as well as ref button
								var cur_h = holders['#'+flyout_holder[0].id] = [{
									sel: '#'+id,
									fn: btn.events.click,
									icon: btn.id,
// 									key: btn.key,
									isDefault: true
								}, ref_data];
	//
	// 							// {sel:'#tool_rect', fn: clickRect, evt: 'mouseup', key: 4, parent: '#tools_rect', icon: 'rect'}
	//
	// 							var pos = ('position' in opts)?opts.position:'last';
	// 							var len = flyout_holder.children().length;
	//
	// 							// Add at given position or end
	// 							if (!isNaN(pos) && pos >= 0 && pos < len) {
	// 								flyout_holder.children().eq(pos).before(button);
	// 							} else {
	// 								flyout_holder.append(button);
	// 								cur_h.reverse();
	// 							}
							} else if (btn.type == 'app_menu') {
								button.append('<div>').append(btn.title);
							}

						} else if (btn.list) {
							// Add button to list
							button.addClass('push_button');
							$('#' + btn.list + '_opts').append(button);
 							if (btn.isDefault) {
 								$('#cur_' + btn.list).append(button.children().clone());
 								var svgicon = btn.svgicon?btn.svgicon:btn.id;
	 							placement_obj['#cur_' + btn.list] = svgicon;
 							}
						} else if (btn.includeWith) {
							// Add to flyout menu / make flyout menu
							var opts = btn.includeWith;
							// opts.button, default, position
							var ref_btn = $(opts.button);

							var flyout_holder = ref_btn.parent();
							// Create a flyout menu if there isn't one already
							if (!ref_btn.parent().hasClass('tools_flyout')) {
								// Create flyout placeholder
								var tls_id = ref_btn[0].id.replace('tool_', 'tools_');
								var show_btn = ref_btn.clone()
									.attr('id',tls_id + '_show')
									.append($('<div>', {'class': 'flyout_arrow_horiz'}));

								ref_btn.before(show_btn);

								// Create a flyout div
								flyout_holder = makeFlyoutHolder(tls_id, ref_btn);
							}

							var ref_data = Actions.getButtonData(opts.button);

							if (opts.isDefault) {
								placement_obj['#' + tls_id + '_show'] = btn.id;
							}
							// TODO: Find way to set the current icon using the iconloader if this is not default

							// Include data for extension button as well as ref button
							var cur_h = holders['#'+flyout_holder[0].id] = [{
								sel: '#'+id,
								fn: btn.events.click,
								icon: btn.id,
								key: btn.key,
								isDefault: btn.includeWith?btn.includeWith.isDefault:0
							}, ref_data];

							// {sel:'#tool_rect', fn: clickRect, evt: 'mouseup', key: 4, parent: '#tools_rect', icon: 'rect'}

							var pos = ('position' in opts) ? opts.position : 'last';
							var len = flyout_holder.children().length;

							// Add at given position or end
							if (!isNaN(pos) && pos >= 0 && pos < len) {
								flyout_holder.children().eq(pos).before(button);
							} else {
								flyout_holder.append(button);
								cur_h.reverse();
							}
						}

						if (!svgicons) {
							button.append(icon);
						}

						if (!btn.list) {
							// Add given events to button
							$.each(btn.events, function(name, func) {
								if (name == 'click' && btn.type == 'mode') {
									if (btn.includeWith) {
										button.bind(name, func);
									} else {
										button.bind(name, function() {
											if (toolButtonClick(button)) {
												func();
											}
										});
									}
									if (btn.key) {
										$(document).bind('keydown', btn.key, func);
										if (btn.title) button.attr('title', btn.title + ' ['+btn.key+']');
									}
								} else {
									button.bind(name, func);
								}
							});
						}

						setupFlyouts(holders);
					});

					$.each(btn_selects, function() {
						addAltDropDown(this.elem, this.list, this.callback, {seticon: true});
					});

					if (svgicons)
						cb_ready = false; // Delay callback

					$.svgIcons(svgicons, {
						w:24, h:24,
						id_match: false,
						no_img: (!svgedit.browser.isWebkit()),
						fallback: fallback_obj,
						placement: placement_obj,
						callback: function(icons) {
							// Non-ideal hack to make the icon match the current size
							if (curPrefs.iconsize && curPrefs.iconsize != 'm') {
								prepResize();
							}
							cb_ready = true; // Ready for callback
							runCallback();
						}
					});
				}

				runCallback();
			};

			var getPaint = function(color, opac, type) {
				// update the editor's fill paint
				var opts = { alpha: opac };
				if (color.indexOf('url(#') === 0) {
					var refElem = svgCanvas.getRefElem(color);
					if (refElem) {
						refElem = refElem.cloneNode(true);
					} else {
						refElem = $('#' + type + '_color defs *')[0];
					}
					opts[refElem.tagName] = refElem;
				} else if (color.indexOf('#') === 0) {
					opts.solidColor = color.substr(1);
				} else {
					opts.solidColor = 'none';
				}
				return new $.jGraduate.Paint(opts);
			};

			// updates the toolbar (colors, opacity, etc) based on the selected element
			// This function also updates the opacity and id elements that are in the context panel
			var updateToolbar = function() {
				if (selectedElement != null) {
					switch (selectedElement.tagName) {
					case 'use':
					case 'image':
					case 'foreignObject':
						break;
					case 'g':
					case 'a':
						// Look for common styles
						var gWidth = null;
						var childs = selectedElement.getElementsByTagName('*');
						for (var i = 0, len = childs.length; i < len; i++) {
							var swidth = childs[i].getAttribute('stroke-width');

							if (i === 0) {
								gWidth = swidth;
							} else if (gWidth !== swidth) {
								gWidth = null;
							}
						}

						$('#stroke_width').val(gWidth === null ? '' : gWidth);

						paintBox.fill.update(true);
						paintBox.stroke.update(true);

						break;
					default:
						paintBox.fill.update(true);
						paintBox.stroke.update(true);

						$('#stroke_width').val(selectedElement.getAttribute('stroke-width') || 1);
						$('#stroke_style').val(selectedElement.getAttribute('stroke-dasharray') || 'none');

						var attr = selectedElement.getAttribute('stroke-linejoin') || 'miter';

						if ($('#linejoin_' + attr).length != 0)
							setStrokeOpt($('#linejoin_' + attr)[0]);

						attr = selectedElement.getAttribute('stroke-linecap') || 'butt';

						if ($('#linecap_' + attr).length != 0)
							setStrokeOpt($('#linecap_' + attr)[0]);
					}
				}

				// All elements including image and group have opacity
				if (selectedElement != null) {
					var opac_perc = ((selectedElement.getAttribute('opacity')||1.0)*100);
					$('#group_opacity').val(opac_perc);
					$('#opac_slider').slider('option', 'value', opac_perc);
					$('#elem_id').val(selectedElement.id);
				}

				updateToolButtonState();
			};

			var setImageURL = Editor.setImageURL = function(url) {
				if (!url) url = defaultImageURL;
				svgCanvas.setImageURL(url);
				$('#image_url').val(url);

				if (url.indexOf('data:') === 0) {
					// data URI found
					$('#image_url').hide();
					$('#change_image_url').show();
				} else {
					// regular URL
					svgCanvas.embedImage(url, function(dataURI) {
						// Couldn't embed, so show warning
						$('#url_notice').toggle(!dataURI);
						defaultImageURL = url;
					});
					$('#image_url').show();
					$('#change_image_url').hide();
				}
			};

			var setInputWidth = function(elem) {
				var w = Math.min(Math.max(12 + elem.value.length * 6, 50), 300);
				$(elem).width(w);
			};

			// updates the context panel tools based on the selected element
			var updateContextPanel = function() {
				var elem = selectedElement;
				// If element has just been deleted, consider it null
				if (elem != null && !elem.parentNode) elem = null;
				var currentLayerName = svgCanvas.getCurrentDrawing().getCurrentLayerName();
				var currentMode = svgCanvas.getMode();
				var unit = curConfig.baseUnit !== 'px' ? curConfig.baseUnit : null;

				var is_node = currentMode == 'pathedit'; //elem ? (elem.id && elem.id.indexOf('pathpointgrip') == 0) : false;
				var menu_items = $('#cmenu_canvas li');
				$('#selected_panel, #multiselected_panel, #g_panel, #rect_panel, #circle_panel,\
					#ellipse_panel, #line_panel, #text_panel, #image_panel, #container_panel, #use_panel, #a_panel').hide();
				if (elem != null) {
					var elname = elem.nodeName;
					// If this is a link with no transform and one child, pretend
					// its child is selected
// 					if (elname === 'a') { // && !$(elem).attr('transform')) {
// 						elem = elem.firstChild;
// 					}

					var angle = svgCanvas.getRotationAngle(elem);
					$('#angle').val(angle);

					var blurval = svgCanvas.getBlur(elem);
					$('#blur').val(blurval);
					$('#blur_slider').slider('option', 'value', blurval);

					if (svgCanvas.addedNew) {
						if (elname === 'image') {
							// Prompt for URL if not a data URL
							if (svgCanvas.getHref(elem).indexOf('data:') !== 0) {
								promptImgURL();
							}
						} /*else if (elname == 'text') {
							// TODO: Do something here for new text
						}*/
					}

					if (!is_node && currentMode != 'pathedit') {
						$('#selected_panel').show();
						// Elements in this array already have coord fields
						if (['line', 'circle', 'ellipse'].indexOf(elname) >= 0) {
							$('#xy_panel').hide();
						} else {
							var x,y;

							// Get BBox vals for g, polyline and path
							if (['g', 'polyline', 'path'].indexOf(elname) >= 0) {
								var bb = svgCanvas.getStrokedBBox([elem]);
								if (bb) {
									x = bb.x;
									y = bb.y;
								}
							} else {
								x = elem.getAttribute('x');
								y = elem.getAttribute('y');
							}

							if (unit) {
								x = svgedit.units.convertUnit(x);
								y = svgedit.units.convertUnit(y);
							}

							$('#selected_x').val(x || 0);
							$('#selected_y').val(y || 0);
							$('#xy_panel').show();
						}

						// Elements in this array cannot be converted to a path
						var no_path = ['image', 'text', 'path', 'g', 'use'].indexOf(elname) == -1;
						$('#tool_topath').toggle(no_path);
						$('#tool_reorient').toggle(elname === 'path');
						$('#tool_reorient').toggleClass('disabled', angle === 0);
					} else {
						var point = path.getNodePoint();
						$('#tool_add_subpath').removeClass('push_button_pressed').addClass('tool_button');
						$('#tool_node_delete').toggleClass('disabled', !path.canDeleteNodes);

						// Show open/close button based on selected point
						setIcon('#tool_openclose_path', path.closed_subpath ? 'open_path' : 'close_path');

						if (point) {
							var seg_type = $('#seg_type');
							if (unit) {
								point.x = svgedit.units.convertUnit(point.x);
								point.y = svgedit.units.convertUnit(point.y);
							}
							$('#path_node_x').val(point.x);
							$('#path_node_y').val(point.y);
							if (point.type) {
								seg_type.val(point.type).removeAttr('disabled');
							} else {
								seg_type.val(4).attr('disabled', 'disabled');
							}
						}
						return;
					}

					// update contextual tools here
					var panels = {
						g: [],
						a: [],
						rect: ['rx', 'width', 'height'],
						image: ['width', 'height'],
						circle: ['cx', 'cy', 'r'],
						ellipse: ['cx', 'cy', 'rx', 'ry'],
						line: ['x1', 'y1', 'x2', 'y2'],
						text: [],
						use: []
					};

					var el_name = elem.tagName;

// 					if ($(elem).data('gsvg')) {
// 						$('#g_panel').show();
// 					}

					var link_href = null;
					if (el_name === 'a') {
						link_href = svgCanvas.getHref(elem);
						$('#g_panel').show();
					}

					if (elem.parentNode.tagName === 'a') {
						if (!$(elem).siblings().length) {
							$('#a_panel').show();
							link_href = svgCanvas.getHref(elem.parentNode);
						}
					}

					// Hide/show the make_link buttons
					$('#tool_make_link, #tool_make_link').toggle(!link_href);

					if (link_href) {
						$('#link_url').val(link_href);
					}

					if (panels[el_name]) {
						var cur_panel = panels[el_name];

						$('#' + el_name + '_panel').show();

						$.each(cur_panel, function(i, item) {
							var attrVal = elem.getAttribute(item);
							if (curConfig.baseUnit !== 'px' && elem[item]) {
								var bv = elem[item].baseVal.value;
								attrVal = svgedit.units.convertUnit(bv);
							}
							$('#' + el_name + '_' + item).val(attrVal || 0);
						});

						if (el_name == 'text') {
							$('#text_panel').css('display', 'inline');
							if (svgCanvas.getItalic()) {
								$('#tool_italic').addClass('push_button_pressed').removeClass('tool_button');
							} else {
								$('#tool_italic').removeClass('push_button_pressed').addClass('tool_button');
							}
							if (svgCanvas.getBold()) {
								$('#tool_bold').addClass('push_button_pressed').removeClass('tool_button');
							} else {
								$('#tool_bold').removeClass('push_button_pressed').addClass('tool_button');
							}
							$('#font_family').val(elem.getAttribute('font-family'));
							$('#font_size').val(elem.getAttribute('font-size'));
							$('#text').val(elem.textContent);
							if (svgCanvas.addedNew) {
								// Timeout needed for IE9
								setTimeout(function() {
									$('#text').focus().select();
								}, 100);
							}
						} // text
						else if (el_name == 'image') {
							setImageURL(svgCanvas.getHref(elem));
						} // image
						else if (el_name === 'g' || el_name === 'use') {
							$('#container_panel').show();
							var title = svgCanvas.getTitle();
							var label = $('#g_title')[0];
							label.value = title;
							setInputWidth(label);
							$('#g_title').prop('disabled', el_name == 'use');
						}
					}
					menu_items[(el_name === 'g' ? 'en' : 'dis') + 'ableContextMenuItems']('#ungroup');
					menu_items[((el_name === 'g' || !multiselected) ? 'dis' : 'en') + 'ableContextMenuItems']('#group');
				} // if (elem != null)
				else if (multiselected) {
					$('#multiselected_panel').show();
					menu_items
						.enableContextMenuItems('#group')
						.disableContextMenuItems('#ungroup');
				} else {
					menu_items.disableContextMenuItems('#delete,#cut,#copy,#group,#ungroup,#move_front,#move_up,#move_down,#move_back');
				}

				// update history buttons
				$('#tool_undo').toggleClass('disabled', undoMgr.getUndoStackSize() === 0);
				$('#tool_redo').toggleClass('disabled', undoMgr.getRedoStackSize() === 0);

				svgCanvas.addedNew = false;

				if ( (elem && !is_node)	|| multiselected) {
					// update the selected elements' layer
					$('#selLayerNames').removeAttr('disabled').val(currentLayerName);

					// Enable regular menu options
					canv_menu.enableContextMenuItems('#delete,#cut,#copy,#move_front,#move_up,#move_down,#move_back');
				} else {
					$('#selLayerNames').attr('disabled', 'disabled');
				}
			};

			$('#text').focus( function(){ textBeingEntered = true; } );
			$('#text').blur( function(){ textBeingEntered = false; } );

			// bind the selected event to our function that handles updates to the UI
			svgCanvas.bind('selected', selectedChanged);
			svgCanvas.bind('transition', elementTransition);
			svgCanvas.bind('changed', elementChanged);
			svgCanvas.bind('saved', saveHandler);
			svgCanvas.bind('exported', exportHandler);
			svgCanvas.bind('zoomed', zoomChanged);
			svgCanvas.bind('contextset', contextChanged);
			svgCanvas.bind('extension_added', extAdded);
			svgCanvas.textActions.setInputElem($('#text')[0]);

			var str = '<div class="palette_item" data-rgb="none"></div>';
			$.each(palette, function(i,item) {
				str += '<div class="palette_item" style="background-color: ' + item + ';" data-rgb="' + item + '"></div>';
			});
			$('#palette').append(str);

			// Set up editor background functionality
			// TODO add checkerboard as "pattern"
			var color_blocks = ['#FFF', '#888', '#000']; // ,'url(data:image/gif;base64,R0lGODlhEAAQAIAAAP%2F%2F%2F9bW1iH5BAAAAAAALAAAAAAQABAAAAIfjG%2Bgq4jM3IFLJgpswNly%2FXkcBpIiVaInlLJr9FZWAQA7)'];
			var str = '';
			$.each(color_blocks, function() {
				str += '<div class="color_block" style="background-color:' + this + ';"></div>';
			});
			$('#bg_blocks').append(str);
			var blocks = $('#bg_blocks div');
			var cur_bg = 'cur_background';
			blocks.each(function() {
				var blk = $(this);
				blk.click(function() {
					blocks.removeClass(cur_bg);
					$(this).addClass(cur_bg);
				});
			});

			if ($.pref('bkgd_color')) {
				setBackground($.pref('bkgd_color'), $.pref('bkgd_url'));
			} else if ($.pref('bkgd_url')) {
				// No color set, only URL
				setBackground(defaultPrefs.bkgd_color, $.pref('bkgd_url'));
			}

			if ($.pref('img_save')) {
				curPrefs.img_save = $.pref('img_save');
				$('#image_save_opts input').val([curPrefs.img_save]);
			}

			var changeRectRadius = function(ctl) {
				svgCanvas.setRectRadius(ctl.value);
			};

			var changeFontSize = function(ctl) {
				svgCanvas.setFontSize(ctl.value);
			};

			var changeStrokeWidth = function(ctl) {
				var val = ctl.value;
				if (val == 0 && selectedElement && ['line', 'polyline'].indexOf(selectedElement.nodeName) >= 0) {
					val = ctl.value = 1;
				}
				svgCanvas.setStrokeWidth(val);
			};

			var changeRotationAngle = function(ctl) {
				svgCanvas.setRotationAngle(ctl.value);
				$('#tool_reorient').toggleClass('disabled', parseInt(ctl.value, 10) === 0);
			};
			var changeZoom = function(ctl) {
				var zoomlevel = ctl.value / 100;
				if (zoomlevel < .001) {
					ctl.value = .1;
					return;
				}
				var zoom = svgCanvas.getZoom();
				var w_area = workarea;

				zoomChanged(window, {
					width: 0,
					height: 0,
					// center pt of scroll position
					x: (w_area[0].scrollLeft + w_area.width()/2)/zoom,
					y: (w_area[0].scrollTop + w_area.height()/2)/zoom,
					zoom: zoomlevel
				}, true);
			};

			var changeOpacity = function(ctl, val) {
				if (val == null) val = ctl.value;
				$('#group_opacity').val(val);
				if (!ctl || !ctl.handle) {
					$('#opac_slider').slider('option', 'value', val);
				}
				svgCanvas.setOpacity(val/100);
			};

			var changeBlur = function(ctl, val, noUndo) {
				if (val == null) val = ctl.value;
				$('#blur').val(val);
				var complete = false;
				if (!ctl || !ctl.handle) {
					$('#blur_slider').slider('option', 'value', val);
					complete = true;
				}
				if (noUndo) {
					svgCanvas.setBlurNoUndo(val);
				} else {
					svgCanvas.setBlur(val, complete);
				}
			};

			var operaRepaint = function() {
				// Repaints canvas in Opera. Needed for stroke-dasharray change as well as fill change
				if (!window.opera) return;
				$('<p/>').hide().appendTo('body').remove();
			};

			$('#stroke_style').change(function() {
				svgCanvas.setStrokeAttr('stroke-dasharray', $(this).val());
				operaRepaint();
			});

			$('#stroke_linejoin').change(function() {
				svgCanvas.setStrokeAttr('stroke-linejoin', $(this).val());
				operaRepaint();
			});

			// Lose focus for select elements when changed (Allows keyboard shortcuts to work better)
			$('select').change(function(){$(this).blur();});

			// fired when user wants to move elements to another layer
			var promptMoveLayerOnce = false;
			$('#selLayerNames').change(function() {
				var destLayer = this.options[this.selectedIndex].value;
				var confirmStr = uiStrings.notification.QmoveElemsToLayer.replace('%s', destLayer);
				var moveToLayer = function(ok) {
					if (!ok) return;
					promptMoveLayerOnce = true;
					svgCanvas.moveSelectedToLayer(destLayer);
					svgCanvas.clearSelection();
					populateLayers();
				};
				if (destLayer) {
					if (promptMoveLayerOnce) {
						moveToLayer(true);
					} else {
						$.confirm(confirmStr, moveToLayer);
					}
				}
			});

			$('#font_family').change(function() {
				svgCanvas.setFontFamily(this.value);
			});

			$('#seg_type').change(function() {
				svgCanvas.setSegType($(this).val());
			});

			$('#text').keyup(function() {
				svgCanvas.setTextContent(this.value);
			});

			$('#image_url').change(function() {
				setImageURL(this.value);
			});

			$('#link_url').change(function() {
				if (this.value.length) {
					svgCanvas.setLinkURL(this.value);
				} else {
					svgCanvas.removeHyperlink();
				}
			});

			$('#g_title').change(function() {
				svgCanvas.setGroupTitle(this.value);
			});

			$('.attr_changer').change(function() {
				var attr = this.getAttribute('data-attr');
				var val = this.value;
				var valid = svgedit.units.isValidUnit(attr, val, selectedElement);

				if (!valid) {
					$.alert(uiStrings.notification.invalidAttrValGiven);
					this.value = selectedElement.getAttribute(attr);
					return false;
				}

				if (attr !== 'id') {
					if (isNaN(val)) {
						val = svgCanvas.convertToNum(attr, val);
					} else if (curConfig.baseUnit !== 'px') {
						// Convert unitless value to one with given unit

						var unitData = svgedit.units.getTypeMap();

						if (selectedElement[attr] || svgCanvas.getMode() === 'pathedit' || attr === 'x' || attr === 'y') {
							val *= unitData[curConfig.baseUnit];
						}
					}
				}

				// if the user is changing the id, then de-select the element first
				// change the ID, then re-select it with the new ID
				if (attr === 'id') {
					var elem = selectedElement;
					svgCanvas.clearSelection();
					elem.id = val;
					svgCanvas.addToSelection([elem],true);
				} else {
					svgCanvas.changeSelectedAttribute(attr, val);
				}
				this.blur();
			});

			// Prevent selection of elements when shift-clicking
			$('#palette').mouseover(function() {
				var inp = $('<input type="hidden">');
				$(this).append(inp);
				inp.focus().remove();
			});

			$('.palette_item').mousedown(function(evt) {
				// shift key or right click for stroke
				var picker = evt.shiftKey || evt.button === 2 ? 'stroke' : 'fill';
				var color = $(this).data('rgb');
				var paint;

				// Webkit-based browsers returned 'initial' here for no stroke
				if (color === 'none' || color === 'transparent' || color === 'initial') {
					color = 'none';
					paint = new $.jGraduate.Paint();
				} else {
					paint = new $.jGraduate.Paint({alpha: 100, solidColor: color.substr(1)});
				}

				paintBox[picker].setPaint(paint);
				svgCanvas.setColor(picker, color);

				if (color !== 'none' && svgCanvas.getPaintOpacity(picker) !== 1) {
					svgCanvas.setPaintOpacity(picker, 1.0);
				}
				updateToolButtonState();
			}).bind('contextmenu', function(e) {e.preventDefault();});

			$('#toggle_stroke_tools').on('click', function() {
				$('#tools_bottom').toggleClass('expanded');
			});

			// This is a common function used when a tool has been clicked (chosen)
			// It does several common things:
			// - removes the tool_button_current class from whatever tool currently has it
			// - hides any flyouts
			// - adds the tool_button_current class to the button passed in
			var toolButtonClick = function(button, noHiding) {
				if ($(button).hasClass('disabled')) return false;
				if ($(button).parent().hasClass('tools_flyout')) return true;
				var fadeFlyouts = fadeFlyouts || 'normal';
				if (!noHiding) {
					$('.tools_flyout').fadeOut(fadeFlyouts);
				}
				$('#styleoverrides').text('');
				workarea.css('cursor', 'auto');
				$('.tool_button_current').removeClass('tool_button_current').addClass('tool_button');
				$(button).addClass('tool_button_current').removeClass('tool_button');
				return true;
			};

			(function() {
				var last_x = null, last_y = null, w_area = workarea[0],
					panning = false, keypan = false;

				$('#svgcanvas').bind('mousemove mouseup', function(evt) {
					if (panning === false) return;

					w_area.scrollLeft -= (evt.clientX - last_x);
					w_area.scrollTop -= (evt.clientY - last_y);

					last_x = evt.clientX;
					last_y = evt.clientY;

					if (evt.type === 'mouseup') panning = false;
					return false;
				}).mousedown(function(evt) {
					if (evt.button === 1 || keypan === true) {
						panning = true;
						last_x = evt.clientX;
						last_y = evt.clientY;
						return false;
					}
				});

				$(window).mouseup(function() {
					panning = false;
				});

				$(document).bind('keydown', 'space', function(evt) {
					svgCanvas.spaceKey = keypan = true;
					evt.preventDefault();
				}).bind('keyup', 'space', function(evt) {
					evt.preventDefault();
					svgCanvas.spaceKey = keypan = false;
				}).bind('keydown', 'shift', function(evt) {
					if (svgCanvas.getMode() === 'zoom') {
						workarea.css('cursor', zoomOutIcon);
					}
				}).bind('keyup', 'shift', function(evt) {
					if (svgCanvas.getMode() === 'zoom') {
						workarea.css('cursor', zoomInIcon);
					}
				});

				Editor.setPanning = function(active) {
					svgCanvas.spaceKey = keypan = active;
				};
			}());

			function setStrokeOpt(opt, changeElem) {
				var id = opt.id;
				var bits = id.split('_');
				var pre = bits[0];
				var val = bits[1];

				if (changeElem) {
					svgCanvas.setStrokeAttr('stroke-' + pre, val);
				}
				operaRepaint();
				setIcon('#cur_' + pre , id, 20);
				$(opt).addClass('current').siblings().removeClass('current');
			}

			(function() {
				var button = $('#main_icon');
				var overlay = $('#main_icon span');
				var list = $('#main_menu');
				var on_button = false;
				var height = 0;
				var js_hover = true;
				var set_click = false;

				var hideMenu = function() {
					list.fadeOut(200);
				};

				$(window).mouseup(function(evt) {
					if (!on_button) {
						button.removeClass('buttondown');
						// do not hide if it was the file input as that input needs to be visible
						// for its change event to fire
						if (evt.target.tagName != 'INPUT') {
							list.fadeOut(200);
						} else if (!set_click) {
							set_click = true;
							$(evt.target).click(function() {
								list.css('margin-left', '-9999px').show();
							});
						}
					}
					on_button = false;
				}).mousedown(function(evt) {
// 					$('.contextMenu').hide();
					var islib = $(evt.target).closest('div.tools_flyout, .contextMenu').length;
					if (!islib) $('.tools_flyout:visible,.contextMenu').fadeOut(250);
				});

				overlay.bind('mousedown',function() {
					if (!button.hasClass('buttondown')) {
						// Margin must be reset in case it was changed before;
						list.css('margin-left', 0).show();
						if (!height) {
							height = list.height();
						}
						// Using custom animation as slideDown has annoying 'bounce effect'
						list.css('height',0).animate({
							'height': height
						}, 200);
						on_button = true;
					} else {
						list.fadeOut(200);
					}
					button.toggleClass('buttondown buttonup');
				}).hover(function() {
					on_button = true;
				}).mouseout(function() {
					on_button = false;
				});

				var list_items = $('#main_menu li');

				// Check if JS method of hovering needs to be used (Webkit bug)
				list_items.mouseover(function() {
					js_hover = ($(this).css('background-color') == 'rgba(0, 0, 0, 0)');

					list_items.unbind('mouseover');
					if (js_hover) {
						list_items.mouseover(function() {
							this.style.backgroundColor = '#FFC';
						}).mouseout(function() {
							this.style.backgroundColor = 'transparent';
							return true;
						});
					}
				});
			}());
			// Made public for UI customization.
			// TODO: Group UI functions into a public svgEditor.ui interface.
			Editor.addDropDown = function(elem, callback, dropUp) {
				if ($(elem).length == 0) return; // Quit if called on non-existant element
				var button = $(elem).find('button');
				var list = $(elem).find('ul').attr('id', $(elem)[0].id + '-list');
				var on_button = false;
				if (dropUp) {
					$(elem).addClass('dropup');
				} else {
					// Move list to place where it can overflow container
					$('#option_lists').append(list);
				}
				list.find('li').bind('mouseup', callback);

				$(window).mouseup(function(evt) {
					if (!on_button) {
						button.removeClass('down');
						list.hide();
					}
					on_button = false;
				});

				button.bind('mousedown',function() {
					if (!button.hasClass('down')) {
						if (!dropUp) {
							var pos = $(elem).position();
							list.css({
								top: pos.top + 24,
								left: pos.left - 10
							});
						}
						list.show();
						on_button = true;
					} else {
						list.hide();
					}
					button.toggleClass('down');
				}).hover(function() {
					on_button = true;
				}).mouseout(function() {
					on_button = false;
				});
			};

			// TODO: Combine this with addDropDown or find other way to optimize
			var addAltDropDown = function(elem, list, callback, opts) {
				var button = $(elem);
				var list = $(list);
				var on_button = false;
				var dropUp = opts.dropUp;
				if (dropUp) {
					$(elem).addClass('dropup');
				}
				list.find('li').bind('mouseup', function() {
					if (opts.seticon) {
						setIcon('#cur_' + button[0].id , $(this).children());
						$(this).addClass('current').siblings().removeClass('current');
					}
					callback.apply(this, arguments);

				});

				$(window).mouseup(function(evt) {
					if (!on_button) {
						button.removeClass('down');
						list.hide();
						list.css({top:0, left:0});
					}
					on_button = false;
				});

				var height = list.height();
				button.bind('mousedown',function() {
					var off = button.offset();
					if (dropUp) {
						off.top -= list.height();
						off.left += 8;
					} else {
						off.top += button.height();
					}
					list.offset(off);

					if (!button.hasClass('down')) {
						list.show();
						on_button = true;
					} else {
						// CSS position must be reset for Webkit
						list.hide();
						list.css({top:0, left:0});
					}
					button.toggleClass('down');
				}).hover(function() {
					on_button = true;
				}).mouseout(function() {
					on_button = false;
				});

				if (opts.multiclick) {
					list.mousedown(function() {
						on_button = true;
					});
				}
			};

			Editor.addDropDown('#font_family_dropdown', function() {
				$('#font_family').val($(this).text()).change();
			});

			Editor.addDropDown('#opacity_dropdown', function() {
				if ($(this).find('div').length) return;
				var perc = parseInt($(this).text().split('%')[0]);
				changeOpacity(false, perc);
			}, true);

			// For slider usage, see: http://jqueryui.com/demos/slider/
			$('#opac_slider').slider({
				start: function() {
					$('#opacity_dropdown li:not(.special)').hide();
				},
				stop: function() {
					$('#opacity_dropdown li').show();
					$(window).mouseup();
				},
				slide: function(evt, ui) {
					changeOpacity(ui);
				}
			});

			Editor.addDropDown('#blur_dropdown', $.noop);

			var slideStart = false;

			$('#blur_slider').slider({
				max: 10,
				step: 0.1,
				stop: function(evt, ui) {
					slideStart = false;
					changeBlur(ui);
					$('#blur_dropdown li').show();
					$(window).mouseup();
				},
				start: function() {
					slideStart = true;
				},
				slide: function(evt, ui) {
					changeBlur(ui, null, slideStart);
				}
			});

			Editor.addDropDown('#zoom_dropdown', function() {
				var item = $(this);
				var val = item.data('val');
				if (val) {
					zoomChanged(window, val);
				} else {
					changeZoom({value: parseInt(item.text(), 10)});
				}
			}, true);

			addAltDropDown('#stroke_linecap', '#linecap_opts', function() {
				setStrokeOpt(this, true);
			}, {dropUp: true});

			addAltDropDown('#stroke_linejoin', '#linejoin_opts', function() {
				setStrokeOpt(this, true);
			}, {dropUp: true});

			addAltDropDown('#tool_position', '#position_opts', function() {
				var letter = this.id.replace('tool_pos', '').charAt(0);
				svgCanvas.alignSelectedElements(letter, 'page');
			}, {multiclick: true});

			/*

			When a flyout icon is selected
				(if flyout) {
				- Change the icon
				- Make pressing the button run its stuff
				}
				- Run its stuff

			When its shortcut key is pressed
				- If not current in list, do as above
				, else:
				- Just run its stuff

			*/

			// Unfocus text input when workarea is mousedowned.
			(function() {
				var inp;
				var unfocus = function() {
					$(inp).blur();
				};

				$('#svg_editor').find('button, select, input:not(#text)').focus(function() {
					inp = this;
					ui_context = 'toolbars';
					workarea.mousedown(unfocus);
				}).blur(function() {
					ui_context = 'canvas';
					workarea.unbind('mousedown', unfocus);
					// Go back to selecting text if in textedit mode
					if (svgCanvas.getMode() == 'textedit') {
						$('#text').focus();
					}
				});
			}());

			var clickSelect = function() {
				if (toolButtonClick('#tool_select')) {
					svgCanvas.setMode('select');
					$('#styleoverrides').text('#svgcanvas svg *{cursor:move;pointer-events:all}, #svgcanvas svg{cursor:default}');
				}
			};

			var clickFHPath = function() {
				if (toolButtonClick('#tool_fhpath')) {
					svgCanvas.setMode('fhpath');
				}
			};

			var clickLine = function() {
				if (toolButtonClick('#tool_line')) {
					svgCanvas.setMode('line');
				}
			};

			var clickSquare = function() {
				if (toolButtonClick('#tool_square')) {
					svgCanvas.setMode('square');
				}
			};

			var clickRect = function() {
				if (toolButtonClick('#tool_rect')) {
					svgCanvas.setMode('rect');
				}
			};

			var clickFHRect = function() {
				if (toolButtonClick('#tool_fhrect')) {
					svgCanvas.setMode('fhrect');
				}
			};

			var clickCircle = function() {
				if (toolButtonClick('#tool_circle')) {
					svgCanvas.setMode('circle');
				}
			};

			var clickEllipse = function() {
				if (toolButtonClick('#tool_ellipse')) {
					svgCanvas.setMode('ellipse');
				}
			};

			var clickFHEllipse = function() {
				if (toolButtonClick('#tool_fhellipse')) {
					svgCanvas.setMode('fhellipse');
				}
			};

			var clickImage = function() {
				if (toolButtonClick('#tool_image')) {
					svgCanvas.setMode('image');
				}
			};

			var clickZoom = function() {
				if (toolButtonClick('#tool_zoom')) {
					svgCanvas.setMode('zoom');
					workarea.css('cursor', zoomInIcon);
				}
			};

			var dblclickZoom = function() {
				if (toolButtonClick('#tool_zoom')) {
					zoomImage();
					setSelectMode();
				}
			};

			var clickText = function() {
				if (toolButtonClick('#tool_text')) {
					svgCanvas.setMode('text');
				}
			};

			var clickPath = function() {
				if (toolButtonClick('#tool_path')) {
					svgCanvas.setMode('path');
				}
			};

			// Delete is a contextual tool that only appears in the ribbon if
			// an element has been selected
			var deleteSelected = function() {
				if (selectedElement != null || multiselected) {
					svgCanvas.deleteSelectedElements();
				}
			};

			var cutSelected = function() {
				if (selectedElement != null || multiselected) {
					svgCanvas.cutSelectedElements();
				}
			};

			var copySelected = function() {
				if (selectedElement != null || multiselected) {
					svgCanvas.copySelectedElements();
				}
			};

			var pasteInCenter = function() {
				var zoom = svgCanvas.getZoom();
				var x = (workarea[0].scrollLeft + workarea.width()/2)/zoom - svgCanvas.contentW;
				var y = (workarea[0].scrollTop + workarea.height()/2)/zoom - svgCanvas.contentH;
				svgCanvas.pasteElements('point', x, y);
			};

			var moveToTopSelected = function() {
				if (selectedElement != null) {
					svgCanvas.moveToTopSelectedElement();
				}
			};

			var moveToBottomSelected = function() {
				if (selectedElement != null) {
					svgCanvas.moveToBottomSelectedElement();
				}
			};

			var moveUpDownSelected = function(dir) {
				if (selectedElement != null) {
					svgCanvas.moveUpDownSelected(dir);
				}
			};

			var convertToPath = function() {
				if (selectedElement != null) {
					svgCanvas.convertToPath();
				}
			};

			var reorientPath = function() {
				if (selectedElement != null) {
					path.reorient();
				}
			};

			var makeHyperlink = function() {
				if (selectedElement != null || multiselected) {
					$.prompt(uiStrings.notification.enterNewLinkURL, 'http://', function(url) {
						if (url) svgCanvas.makeHyperlink(url);
					});
				}
			};

			var moveSelected = function(dx,dy) {
				if (selectedElement != null || multiselected) {
					if (curConfig.gridSnapping) {
						// Use grid snap value regardless of zoom level
						var multi = svgCanvas.getZoom() * curConfig.snappingStep;
						dx *= multi;
						dy *= multi;
					}
					svgCanvas.moveSelectedElements(dx,dy);
				}
			};

			var linkControlPoints = function() {
				$('#tool_node_link').toggleClass('push_button_pressed tool_button');
				path.linkControlPoints(linked);
			};

			var clonePathNode = function() {
				if (path.getNodePoint()) {
					path.clonePathNode();
				}
			};

			var deletePathNode = function() {
				if (path.getNodePoint()) {
					path.deletePathNode();
				}
			};

			var addSubPath = function() {
				button.toggleClass('push_button_pressed tool_button');
				path.addSubPath(sp);
			};

			var opencloseSubPath = function() {
				path.opencloseSubPath();
			};

			var selectNext = function() {
				svgCanvas.cycleElement(1);
			};

			var selectPrev = function() {
				svgCanvas.cycleElement(0);
			};

			var rotateSelected = function(cw, step) {
				if (selectedElement == null || multiselected) return;
				if (!cw) step *= -1;
				var angle = parseFloat($('#angle').val()) + step;
				svgCanvas.setRotationAngle(angle);
				updateContextPanel();
			};

			var clickClear = function() {
				var dims = curConfig.dimensions;
				$.confirm(uiStrings.notification.QwantToClear, function(ok) {
					if (!ok) return;
					setSelectMode();
					svgCanvas.clear();
					svgCanvas.setResolution(dims[0], dims[1]);
					updateCanvas(true);
					zoomImage();
					populateLayers();
					updateContextPanel();
					prepPaints();
					svgCanvas.runExtensions('onNewDocument');
				});
			};

			var clickBold = function() {
				svgCanvas.setBold( !svgCanvas.getBold() );
				updateContextPanel();
				return false;
			};

			var clickItalic = function() {
				svgCanvas.setItalic( !svgCanvas.getItalic() );
				updateContextPanel();
				return false;
			};

			var clickSave = function() {
				// In the future, more options can be provided here
				var saveOpts = {
					'images': curPrefs.img_save,
					'round_digits': 6
				};
				svgCanvas.save(saveOpts);
			};

			var clickExport = function() {
				$.select('Select an image type for export: ', [
					// See http://kangax.github.io/jstests/toDataUrl_mime_type_test/ for a useful list of MIME types and browser support
					// 'ICO', // Todo: Find a way to preserve transparency in SVG-Edit if not working presently and do full packaging for x-icon; then switch back to position after 'PNG'
					'PNG',
					'JPEG', 'BMP', 'WEBP'
				], function (imgType) { // todo: replace hard-coded msg with uiStrings.notification.
					if (!imgType) {
						return;
					}
					// Open placeholder window (prevents popup)
					if (!customHandlers.exportImage && !customHandlers.pngsave) {
						var str = uiStrings.notification.loadingImage;
						exportWindow = window.open('data:text/html;charset=utf-8,<title>' + str + '<\/title><h1>' + str + '<\/h1>');
					}
					var quality = parseInt($('#image-slider').val(), 10)/100;
					if (window.canvg) {
						svgCanvas.rasterExport(imgType, quality);
					} else {
						$.getScript('canvg/rgbcolor.js', function() {
							$.getScript('canvg/canvg.js', function() {
								svgCanvas.rasterExport(imgType, quality);
							});
						});
					}
				}, function () {
					var sel = $(this);
					if (sel.val() === 'JPEG' || sel.val() === 'WEBP') {
						if (!$('#image-slider').length) {
							$('<div><label>Quality: <input id="image-slider" type="range" min="1" max="100" value="92" /></label></div>').appendTo(sel.parent()); // Todo: i18n-ize label
						}
					}
					else {
						$('#image-slider').parent().remove();
					}
				});
			};

			// by default, svgCanvas.open() is a no-op.
			// it is up to an extension mechanism (opera widget, etc)
			// to call setCustomHandlers() which will make it do something
			var clickOpen = function() {
				svgCanvas.open();
			};

			var clickImport = function() {
			};

			var clickUndo = function() {
				if (undoMgr.getUndoStackSize() > 0) {
					undoMgr.undo();
					populateLayers();
				}
			};

			var clickRedo = function() {
				if (undoMgr.getRedoStackSize() > 0) {
					undoMgr.redo();
					populateLayers();
				}
			};

			var clickGroup = function() {
				// group
				if (multiselected) {
					svgCanvas.groupSelectedElements();
				}
				// ungroup
				else if (selectedElement) {
					svgCanvas.ungroupSelectedElement();
				}
			};

			var clickClone = function() {
				svgCanvas.cloneSelectedElements(20, 20);
			};

			var clickAlign = function() {
				var letter = this.id.replace('tool_align', '').charAt(0);
				svgCanvas.alignSelectedElements(letter, $('#align_relative_to').val());
			};

			var zoomImage = function(multiplier) {
				var res = svgCanvas.getResolution();
				multiplier = multiplier ? res.zoom * multiplier : 1;
				// setResolution(res.w * multiplier, res.h * multiplier, true);
				$('#zoom').val(multiplier * 100);
				svgCanvas.setZoom(multiplier);
				zoomDone();
				updateCanvas(true);
			};

			var zoomDone = function() {
				updateWireFrame();
				// updateCanvas(); // necessary?
			};

			var clickWireframe = function() {
				$('#tool_wireframe').toggleClass('push_button_pressed tool_button');
				workarea.toggleClass('wireframe');

				if (supportsNonSS) return;
				var wf_rules = $('#wireframe_rules');
				if (!wf_rules.length) {
					wf_rules = $('<style id="wireframe_rules"><\/style>').appendTo('head');
				} else {
					wf_rules.empty();
				}

				updateWireFrame();
			};

			var updateWireFrame = function() {
				// Test support
				if (supportsNonSS) return;

				var rule = '#workarea.wireframe #svgcontent * { stroke-width: ' + 1/svgCanvas.getZoom() + 'px; }';
				$('#wireframe_rules').text(workarea.hasClass('wireframe') ? rule : '');
			};

			var showSourceEditor = function(e, forSaving) {
				if (editingsource) return;

				editingsource = true;
				origSource = svgCanvas.getSvgString();
				$('#save_output_btns').toggle(!!forSaving);
				$('#tool_source_back').toggle(!forSaving);
				$('#svg_source_textarea').val(origSource);
				$('#svg_source_editor').fadeIn();
				$('#svg_source_textarea').focus();
			};

			$('#svg_docprops_container, #svg_prefs_container').draggable({cancel: 'button,fieldset', containment: 'window'});

			var showDocProperties = function() {
				if (docprops) return;
				docprops = true;

				// This selects the correct radio button by using the array notation
				$('#image_save_opts input').val([curPrefs.img_save]);

				// update resolution option with actual resolution
				var res = svgCanvas.getResolution();
				if (curConfig.baseUnit !== 'px') {
					res.w = svgedit.units.convertUnit(res.w) + curConfig.baseUnit;
					res.h = svgedit.units.convertUnit(res.h) + curConfig.baseUnit;
				}

				$('#canvas_width').val(res.w);
				$('#canvas_height').val(res.h);
				$('#canvas_title').val(svgCanvas.getDocumentTitle());

				$('#svg_docprops').show();
			};

			var showPreferences = function() {
				if (preferences) return;
				preferences = true;
				$('#main_menu').hide();

				// Update background color with current one
				var blocks = $('#bg_blocks div');
				var cur_bg = 'cur_background';
				var canvas_bg = $.pref('bkgd_color');
				var url = $.pref('bkgd_url');
		// 		if (url) url = url[1];
				blocks.each(function() {
					var blk = $(this);
					var is_bg = blk.css('background-color') == canvas_bg;
					blk.toggleClass(cur_bg, is_bg);
					if (is_bg) $('#canvas_bg_url').removeClass(cur_bg);
				});
				if (!canvas_bg) blocks.eq(0).addClass(cur_bg);
				if (url) {
					$('#canvas_bg_url').val(url);
				}
				$('#grid_snapping_on').prop('checked', curConfig.gridSnapping);
				$('#grid_snapping_step').attr('value', curConfig.snappingStep);
				$('#grid_color').attr('value', curConfig.gridColor);

				$('#svg_prefs').show();
			};

			var saveSourceEditor = function() {
				if (!editingsource) return;

				var saveChanges = function() {
					svgCanvas.clearSelection();
					hideSourceEditor();
					zoomImage();
					populateLayers();
					updateTitle();
					prepPaints();
				};

				if (!svgCanvas.setSvgString($('#svg_source_textarea').val())) {
					$.confirm(uiStrings.notification.QerrorsRevertToSource, function(ok) {
						if (!ok) return false;
						saveChanges();
					});
				} else {
					saveChanges();
				}
				setSelectMode();
			};

			var updateTitle = function(title) {
				title = title || svgCanvas.getDocumentTitle();
				var newTitle = origTitle + (title ? ': ' + title : '');

				// Remove title update with current context info, isn't really necessary
// 				if (cur_context) {
// 					new_title = new_title + cur_context;
// 				}
				$('title:first').text(newTitle);
			};

			var saveDocProperties = function() {
				// set title
				var newTitle = $('#canvas_title').val();
				updateTitle(newTitle);
				svgCanvas.setDocumentTitle(newTitle);

				// update resolution
				var width = $('#canvas_width'), w = width.val();
				var height = $('#canvas_height'), h = height.val();

				if (w != 'fit' && !svgedit.units.isValidUnit('width', w)) {
					$.alert(uiStrings.notification.invalidAttrValGiven);
					width.parent().addClass('error');
					return false;
				}

				width.parent().removeClass('error');

				if (h != 'fit' && !svgedit.units.isValidUnit('height', h)) {
					$.alert(uiStrings.notification.invalidAttrValGiven);
					height.parent().addClass('error');
					return false;
				}

				height.parent().removeClass('error');

				if (!svgCanvas.setResolution(w, h)) {
					$.alert(uiStrings.notification.noContentToFitTo);
					return false;
				}

				// set image save option
				curPrefs.img_save = $('#image_save_opts :checked').val();
				$.pref('img_save',curPrefs.img_save);
				updateCanvas();
				hideDocProperties();
			};

			var savePreferences = function() {
				// set background
				var color = $('#bg_blocks div.cur_background').css('background-color') || '#FFF';
				setBackground(color, $('#canvas_bg_url').val());

				// set language
				var lang = $('#lang_select').val();
				if (lang != curPrefs.lang) {
					Editor.putLocale(lang);
				}

				// set icon size
				setIconSize($('#iconsize').val());

				// set grid setting
				curConfig.gridSnapping = $('#grid_snapping_on')[0].checked;
				curConfig.snappingStep = $('#grid_snapping_step').val();
				curConfig.gridColor = $('#grid_color').val();
				curConfig.showRulers = $('#show_rulers')[0].checked;

				$('#rulers').toggle(curConfig.showRulers);
				if (curConfig.showRulers) updateRulers();
				curConfig.baseUnit = $('#base_unit').val();

				svgCanvas.setConfig(curConfig);

				updateCanvas();
				hidePreferences();
			};

			function setBackground(color, url) {
				// if (color == curPrefs.bkgd_color && url == curPrefs.bkgd_url) return;
				$.pref('bkgd_color', color);
				$.pref('bkgd_url', url);

				// This should be done in svgcanvas.js for the borderRect fill
				svgCanvas.setBackground(color, url);
			}

			var setIcon = Editor.setIcon = function(elem, icon_id, forcedSize) {
				var icon = (typeof icon_id === 'string') ? $.getSvgIcon(icon_id, true) : icon_id.clone();
				if (!icon) {
					console.log('NOTE: Icon image missing: ' + icon_id);
					return;
				}
				$(elem).empty().append(icon);
			};

			var uaPrefix = (function() {
				var regex = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/;
				var someScript = document.getElementsByTagName('script')[0];
				for (var prop in someScript.style) {
					if (regex.test(prop)) {
						// test is faster than match, so it's better to perform
						// that on the lot and match only when necessary
						return prop.match(regex)[0];
					}
				}
				// Nothing found so far?
				if ('WebkitOpacity' in someScript.style) return 'Webkit';
				if ('KhtmlOpacity' in someScript.style) return 'Khtml';

				return '';
			})();

			var scaleElements = function(elems, scale) {
				var prefix = '-' + uaPrefix.toLowerCase() + '-';
				var sides = ['top', 'left', 'bottom', 'right'];

				elems.each(function() {
					// Handled in CSS
					// this.style[uaPrefix + 'Transform'] = 'scale(' + scale + ')';
					var el = $(this);
					var w = el.outerWidth() * (scale - 1);
					var h = el.outerHeight() * (scale - 1);
					var margins = {};

					for (var i = 0; i < 4; i++) {
						var s = sides[i];
						var cur = el.data('orig_margin-' + s);
						if (cur == null) {
							cur = parseInt(el.css('margin-' + s), 10);
							// Cache the original margin
							el.data('orig_margin-' + s, cur);
						}
						var val = cur * scale;
						if (s === 'right') {
							val += w;
						} else if (s === 'bottom') {
							val += h;
						}

						el.css('margin-' + s, val);
						// el.css('outline', '1px solid red');
					}
				});
			};

			var setIconSize = Editor.setIconSize = function(size, force) {
				if (size == curPrefs.size && !force) return;

// 				var elems = $('.tool_button, .push_button, .tool_button_current, .disabled, .icon_label, #url_notice, #tool_open');
				var sel_toscale = '#tools_top .toolset, #editor_panel > *, #history_panel > *,\
				#main_button, #tools_left > *, #path_node_panel > *, #multiselected_panel > *,\
				#g_panel > *, #tool_font_size > *, .tools_flyout';

				var elems = $(sel_toscale);
				var scale = 1;

				if (typeof size == 'number') {
					scale = size;
				} else {
					var icon_sizes = { s:.75, m:1, l:1.25, xl:1.5 };
					scale = icon_sizes[size];
				}

				Editor.tool_scale = tool_scale = scale;

				setFlyoutPositions();
				// $('.tools_flyout').each(function() {
// 					var pos = $(this).position();
// 					console.log($(this), pos.left+(34 * scale));
// 					$(this).css({'left': pos.left+(34 * scale), 'top': pos.top+(77 * scale)});
// 					console.log('l', $(this).css('left'));
// 				});

// 				var scale = .75;

				var hidden_ps = elems.parents(':hidden');
				hidden_ps.css('visibility', 'hidden').show();
				scaleElements(elems, scale);
				hidden_ps.css('visibility', 'visible').hide();
// 				return;

				$.pref('iconsize', size);
				$('#iconsize').val(size);

				// Change icon size
// 				$('.tool_button, .push_button, .tool_button_current, .disabled, .icon_label, #url_notice, #tool_open')
// 				.find('> svg, > img').each(function() {
// 					this.setAttribute('width',size_num);
// 					this.setAttribute('height',size_num);
// 				});
//
// 				$.resizeSvgIcons({
// 					'.flyout_arrow_horiz > svg, .flyout_arrow_horiz > img': size_num / 5,
// 					'#logo > svg, #logo > img': size_num * 1.3,
// 					'#tools_bottom .icon_label > *': (size_num === 16 ? 18 : size_num * .75)
// 				});
// 				if (size != 's') {
// 					$.resizeSvgIcons({'#layerbuttons svg, #layerbuttons img': size_num * .6});
// 				}

				// Note that all rules will be prefixed with '#svg_editor' when parsed
				var cssResizeRules = {
// 					'.tool_button,\
// 					.push_button,\
// 					.tool_button_current,\
// 					.push_button_pressed,\
// 					.disabled,\
// 					.icon_label,\
// 					.tools_flyout .tool_button': {
// 						'width': {s: '16px', l: '32px', xl: '48px'},
// 						'height': {s: '16px', l: '32px', xl: '48px'},
// 						'padding': {s: '1px', l: '2px', xl: '3px'}
// 					},
// 					'.tool_sep': {
// 						'height': {s: '16px', l: '32px', xl: '48px'},
// 						'margin': {s: '2px 2px', l: '2px 5px', xl: '2px 8px'}
// 					},
// 					'#main_icon': {
// 						'width': {s: '31px', l: '53px', xl: '75px'},
// 						'height': {s: '22px', l: '42px', xl: '64px'}
// 					},
					'#tools_top': {
						'left': 50,
						'height': 72
					},
					'#tools_left': {
						'width': 31,
						'top': 74
					},
					'div#workarea': {
						'left': 38,
						'top': 74
					}
// 					'#tools_bottom': {
// 						'left': {s: '27px', l: '46px', xl: '65px'},
// 						'height': {s: '58px', l: '98px', xl: '145px'}
// 					},
// 					'#color_tools': {
// 						'border-spacing': {s: '0 1px'},
// 						'margin-top': {s: '-1px'}
// 					},
// 					'#color_tools .icon_label': {
// 						'width': {l:'43px', xl: '60px'}
// 					},
// 					'.color_tool': {
// 						'height': {s: '20px'}
// 					},
// 					'#tool_opacity': {
// 						'top': {s: '1px'},
// 						'height': {s: 'auto', l:'auto', xl:'auto'}
// 					},
// 					'#tools_top input, #tools_bottom input': {
// 						'margin-top': {s: '2px', l: '4px', xl: '5px'},
// 						'height': {s: 'auto', l: 'auto', xl: 'auto'},
// 						'border': {s: '1px solid #555', l: 'auto', xl: 'auto'},
// 						'font-size': {s: '.9em', l: '1.2em', xl: '1.4em'}
// 					},
// 					'#zoom_panel': {
// 						'margin-top': {s: '3px', l: '4px', xl: '5px'}
// 					},
// 					'#copyright, #tools_bottom .label': {
// 						'font-size': {l: '1.5em', xl: '2em'},
// 						'line-height': {s: '15px'}
// 					},
// 					'#tools_bottom_2': {
// 						'width': {l: '295px', xl: '355px'},
// 						'top': {s: '4px'}
// 					},
// 					'#tools_top > div, #tools_top': {
// 						'line-height': {s: '17px', l: '34px', xl: '50px'}
// 					},
// 					'.dropdown button': {
// 						'height': {s: '18px', l: '34px', xl: '40px'},
// 						'line-height': {s: '18px', l: '34px', xl: '40px'},
// 						'margin-top': {s: '3px'}
// 					},
// 					'#tools_top label, #tools_bottom label': {
// 						'font-size': {s: '1em', l: '1.5em', xl: '2em'},
// 						'height': {s: '25px', l: '42px', xl: '64px'}
// 					},
// 					'div.toolset': {
// 						'height': {s: '25px', l: '42px', xl: '64px'}
// 					},
// 					'#tool_bold, #tool_italic': {
// 						'font-size': {s: '1.5em', l: '3em', xl: '4.5em'}
// 					},
// 					'#sidepanels': {
// 						'top': {s: '50px', l: '88px', xl: '125px'},
// 						'bottom': {s: '51px', l: '68px', xl: '65px'}
// 					},
// 					'#layerbuttons': {
// 						'width': {l: '130px', xl: '175px'},
// 						'height': {l: '24px', xl: '30px'}
// 					},
// 					'#layerlist': {
// 						'width': {l: '128px', xl: '150px'}
// 					},
// 					'.layer_button': {
// 						'width': {l: '19px', xl: '28px'},
// 						'height': {l: '19px', xl: '28px'}
// 					},
// 					'input.spin-button': {
// 						'background-image': {l: 'url('images/spinbtn_updn_big.png')', xl: 'url('images/spinbtn_updn_big.png')'},
// 						'background-position': {l: '100% -5px', xl: '100% -2px'},
// 						'padding-right': {l: '24px', xl: '24px' }
// 					},
// 					'input.spin-button.up': {
// 						'background-position': {l: '100% -45px', xl: '100% -42px'}
// 					},
// 					'input.spin-button.down': {
// 						'background-position': {l: '100% -85px', xl: '100% -82px'}
// 					},
// 					'#position_opts': {
// 						'width': {all: (size_num*4) +'px'}
// 					}
				};

				var rule_elem = $('#tool_size_rules');
				if (!rule_elem.length) {
					rule_elem = $('<style id="tool_size_rules"><\/style>').appendTo('head');
				} else {
					rule_elem.empty();
				}

				if (size != 'm') {
					var styleStr = '';
					$.each(cssResizeRules, function(selector, rules) {
						selector = '#svg_editor ' + selector.replace(/,/g,', #svg_editor');
						styleStr += selector + '{';
						$.each(rules, function(prop, values) {
							if (typeof values === 'number') {
								var val = (values * scale) + 'px';
							} else if (values[size] || values.all) {
								var val = (values[size] || values.all);
							}
							styleStr += (prop + ':' + val + ';');
						});
						styleStr += '}';
					});
					//this.style[uaPrefix + 'Transform'] = 'scale(' + scale + ')';
					var prefix = '-' + uaPrefix.toLowerCase() + '-';
					styleStr += (sel_toscale + '{' + prefix + 'transform: scale(' + scale + ');}'
					+ ' #svg_editor div.toolset .toolset {' + prefix + 'transform: scale(1); margin: 1px !important;}' // Hack for markers
					+ ' #svg_editor .ui-slider {' + prefix + 'transform: scale(' + (1/scale) + ');}' // Hack for sliders
					);
					rule_elem.text(styleStr);
				}

				setFlyoutPositions();
			};

			var cancelOverlays = function() {
				$('#dialog_box').hide();
				if (!editingsource && !docprops && !preferences) {
					if (cur_context) {
						svgCanvas.leaveContext();
					}
					return;
				}

				if (editingsource) {
					if (origSource !== $('#svg_source_textarea').val()) {
						$.confirm(uiStrings.notification.QignoreSourceChanges, function(ok) {
							if (ok) hideSourceEditor();
						});
					} else {
						hideSourceEditor();
					}
				} else if (docprops) {
					hideDocProperties();
				} else if (preferences) {
					hidePreferences();
				}
				resetScrollPos();
			};

			var hideSourceEditor = function() {
				$('#svg_source_editor').hide();
				editingsource = false;
				$('#svg_source_textarea').blur();
			};

			var hideDocProperties = function() {
				$('#svg_docprops').hide();
				$('#canvas_width,#canvas_height').removeAttr('disabled');
				$('#resolution')[0].selectedIndex = 0;
				$('#image_save_opts input').val([curPrefs.img_save]);
				docprops = false;
			};

			var hidePreferences = function() {
				$('#svg_prefs').hide();
				preferences = false;
			};

			var win_wh = {width:$(window).width(), height:$(window).height()};
			var resetScrollPos = $.noop, curScrollPos;

			// Fix for Issue 781: Drawing area jumps to top-left corner on window resize (IE9)
			if (svgedit.browser.isIE()) {
				(function() {
					resetScrollPos = function() {
						if (workarea[0].scrollLeft === 0 && workarea[0].scrollTop === 0) {
							workarea[0].scrollLeft = curScrollPos.left;
							workarea[0].scrollTop = curScrollPos.top;
						}
					};

					curScrollPos = {
						left: workarea[0].scrollLeft,
						top: workarea[0].scrollTop
					};

					$(window).resize(resetScrollPos);
					svgEditor.ready(function() {
						// TODO: Find better way to detect when to do this to minimize
						// flickering effect
						setTimeout(function() {
							resetScrollPos();
						}, 500);
					});

					workarea.scroll(function() {
						curScrollPos = {
							left: workarea[0].scrollLeft,
							top: workarea[0].scrollTop
						};
					});
				}());
			}

			$(window).resize(function(evt) {
				$.each(win_wh, function(type, val) {
					var curval = $(window)[type]();
					workarea[0]['scroll' + (type === 'width' ? 'Left' : 'Top')] -= (curval - val)/2;
					win_wh[type] = curval;
				});
				setFlyoutPositions();
			});

			(function() {
				workarea.scroll(function() {
					// TODO: jQuery's scrollLeft/Top() wouldn't require a null check
					if ($('#ruler_x').length != 0) {
						$('#ruler_x')[0].scrollLeft = workarea[0].scrollLeft;
					}
					if ($('#ruler_y').length != 0) {
						$('#ruler_y')[0].scrollTop = workarea[0].scrollTop;
					}
				});

			}());

			$('#url_notice').click(function() {
				$.alert(this.title);
			});

			$('#change_image_url').click(promptImgURL);

			function promptImgURL() {
				var curhref = svgCanvas.getHref(selectedElement);
				curhref = curhref.indexOf('data:') === 0 ? '' : curhref;
				$.prompt(uiStrings.notification.enterNewImgURL, curhref, function(url) {
					if (url) setImageURL(url);
				});
			}

			// added these event handlers for all the push buttons so they
			// behave more like buttons being pressed-in and not images
			(function() {
				var toolnames = ['clear', 'open', 'save', 'source', 'delete', 'delete_multi', 'paste', 'clone', 'clone_multi', 'move_top', 'move_bottom'];
				var all_tools = '';
				var cur_class = 'tool_button_current';

				$.each(toolnames, function(i,item) {
					all_tools += '#tool_' + item + (i == toolnames.length-1 ? ',' : '');
				});

				$(all_tools).mousedown(function() {
					$(this).addClass(cur_class);
				}).bind('mousedown mouseout', function() {
					$(this).removeClass(cur_class);
				});

				$('#tool_undo, #tool_redo').mousedown(function() {
					if (!$(this).hasClass('disabled')) $(this).addClass(cur_class);
				}).bind('mousedown mouseout',function() {
					$(this).removeClass(cur_class);}
				);
			}());

			// switch modifier key in tooltips if mac
			// NOTE: This code is not used yet until I can figure out how to successfully bind ctrl/meta
			// in Opera and Chrome
			if (svgedit.browser.isMac() && !window.opera) {
				var shortcutButtons = ['tool_clear', 'tool_save', 'tool_source', 'tool_undo', 'tool_redo', 'tool_clone'];
				var i = shortcutButtons.length;
				while (i--) {
					var button = document.getElementById(shortcutButtons[i]);
					if (button) {
						var title = button.title;
						var index = title.indexOf('Ctrl+');
						button.title = [title.substr(0, index), 'Cmd+', title.substr(index + 5)].join('');
					}
				}
			}

			// TODO: go back to the color boxes having white background-color and then setting
			//	background-image to none.png (otherwise partially transparent gradients look weird)
			var colorPicker = function(elem) {
				var picker = elem.attr('id') == 'stroke_color' ? 'stroke' : 'fill';
// 				var opacity = (picker == 'stroke' ? $('#stroke_opacity') : $('#fill_opacity'));
				var paint = paintBox[picker].paint;
				var title = (picker == 'stroke' ? 'Pick a Stroke Paint and Opacity' : 'Pick a Fill Paint and Opacity');
				var was_none = false;
				var pos = elem.offset();
				$('#color_picker')
					.draggable({cancel: '.jGraduate_tabs, .jGraduate_colPick, .jGraduate_gradPick, .jPicker', containment: 'window'})
					.css(curConfig.colorPickerCSS || {'left': pos.left-140, 'bottom': 40})
					.jGraduate(
					{
						paint: paint,
						window: { pickerTitle: title },
						images: { clientPath: curConfig.jGraduatePath },
						newstop: 'inverse'
					},
					function(p) {
						paint = new $.jGraduate.Paint(p);
						paintBox[picker].setPaint(paint);
						svgCanvas.setPaint(picker, paint);
						$('#color_picker').hide();
					},
					function() {
						$('#color_picker').hide();
					});
			};

			var updateToolButtonState = function() {
				var bNoFill = (svgCanvas.getColor('fill') == 'none');
				var bNoStroke = (svgCanvas.getColor('stroke') == 'none');
				var buttonsNeedingStroke = [ '#tool_fhpath', '#tool_line' ];
				var buttonsNeedingFillAndStroke = [ '#tools_rect .tool_button', '#tools_ellipse .tool_button', '#tool_text', '#tool_path'];
				if (bNoStroke) {
					for (var index in buttonsNeedingStroke) {
						var button = buttonsNeedingStroke[index];
						if ($(button).hasClass('tool_button_current')) {
							clickSelect();
						}
						$(button).addClass('disabled');
					}
				} else {
					for (var index in buttonsNeedingStroke) {
						var button = buttonsNeedingStroke[index];
						$(button).removeClass('disabled');
					}
				}

				if (bNoStroke && bNoFill) {
					for (var index in buttonsNeedingFillAndStroke) {
						var button = buttonsNeedingFillAndStroke[index];
						if ($(button).hasClass('tool_button_current')) {
							clickSelect();
						}
						$(button).addClass('disabled');
					}
				} else {
					for (var index in buttonsNeedingFillAndStroke) {
						var button = buttonsNeedingFillAndStroke[index];
						$(button).removeClass('disabled');
					}
				}

				svgCanvas.runExtensions('toolButtonStateUpdate', {
					nofill: bNoFill,
					nostroke: bNoStroke
				});

				// Disable flyouts if all inside are disabled
				$('.tools_flyout').each(function() {
					var shower = $('#' + this.id + '_show');
					var has_enabled = false;
					$(this).children().each(function() {
						if (!$(this).hasClass('disabled')) {
							has_enabled = true;
						}
					});
					shower.toggleClass('disabled', !has_enabled);
				});

				operaRepaint();
			};

			var PaintBox = function(container, type) {
				var cur = curConfig[type === 'fill' ? 'initFill' : 'initStroke'];
				// set up gradients to be used for the buttons
				var svgdocbox = new DOMParser().parseFromString(
					'<svg xmlns="http://www.w3.org/2000/svg"><rect width="16.5" height="16.5"\
					fill="#' + cur.color + '" opacity="' + cur.opacity + '"/>\
					<defs><linearGradient id="gradbox_"/></defs></svg>', 'text/xml');
				var docElem = svgdocbox.documentElement;

				docElem = $(container)[0].appendChild(document.importNode(docElem, true));
				docElem.setAttribute('width',16.5);

				this.rect = docElem.firstChild;
				this.defs = docElem.getElementsByTagName('defs')[0];
				this.grad = this.defs.firstChild;
				this.paint = new $.jGraduate.Paint({solidColor: cur.color});
				this.type = type;

				this.setPaint = function(paint, apply) {
					this.paint = paint;

					var fillAttr = 'none';
					var ptype = paint.type;
					var opac = paint.alpha / 100;

					switch ( ptype ) {
						case 'solidColor':
							fillAttr = (paint[ptype] != 'none') ? '#' + paint[ptype] : paint[ptype];
							break;
						case 'linearGradient':
						case 'radialGradient':
							this.defs.removeChild(this.grad);
							this.grad = this.defs.appendChild(paint[ptype]);
							var id = this.grad.id = 'gradbox_' + this.type;
							fillAttr = 'url(#' + id + ')';
					}

					this.rect.setAttribute('fill', fillAttr);
					this.rect.setAttribute('opacity', opac);

					if (apply) {
						svgCanvas.setColor(this.type, paintColor, true);
						svgCanvas.setPaintOpacity(this.type, paintOpacity, true);
					}
				};

				this.update = function(apply) {
					if (!selectedElement) return;
					var type = this.type;

					switch ( selectedElement.tagName ) {
					case 'use':
					case 'image':
					case 'foreignObject':
						// These elements don't have fill or stroke, so don't change
						// the current value
						return;
					case 'g':
					case 'a':
						var gPaint = null;

						var childs = selectedElement.getElementsByTagName('*');
						for (var i = 0, len = childs.length; i < len; i++) {
							var elem = childs[i];
							var p = elem.getAttribute(type);
							if (i === 0) {
								gPaint = p;
							} else if (gPaint !== p) {
								gPaint = null;
								break;
							}
						}
						if (gPaint === null) {
							// No common color, don't update anything
							var paintColor = null;
							return;
						}
						var paintColor = gPaint;
						var paintOpacity = 1;
						break;
					default:
						var paintOpacity = parseFloat(selectedElement.getAttribute(type + '-opacity'));
						if (isNaN(paintOpacity)) {
							paintOpacity = 1.0;
						}

						var defColor = type === 'fill' ? 'black' : 'none';
						var paintColor = selectedElement.getAttribute(type) || defColor;
					}

					if (apply) {
						svgCanvas.setColor(type, paintColor, true);
						svgCanvas.setPaintOpacity(type, paintOpacity, true);
					}

					paintOpacity *= 100;

					var paint = getPaint(paintColor, paintOpacity, type);
					// update the rect inside #fill_color/#stroke_color
					this.setPaint(paint);
				};

				this.prep = function() {
					var ptype = this.paint.type;

					switch ( ptype ) {
						case 'linearGradient':
						case 'radialGradient':
							var paint = new $.jGraduate.Paint({copy: this.paint});
							svgCanvas.setPaint(type, paint);
					}
				};
			};

			paintBox.fill = new PaintBox('#fill_color', 'fill');
			paintBox.stroke = new PaintBox('#stroke_color', 'stroke');

			$('#stroke_width').val(curConfig.initStroke.width);
			$('#group_opacity').val(curConfig.initOpacity * 100);

			// Use this SVG elem to test vectorEffect support
			var testEl = paintBox.fill.rect.cloneNode(false);
			testEl.setAttribute('style', 'vector-effect:non-scaling-stroke');
			var supportsNonSS = (testEl.style.vectorEffect === 'non-scaling-stroke');
			testEl.removeAttribute('style');
			var svgdocbox = paintBox.fill.rect.ownerDocument;
			// Use this to test support for blur element. Seems to work to test support in Webkit
			var blurTest = svgdocbox.createElementNS(svgedit.NS.SVG, 'feGaussianBlur');
			if (typeof blurTest.stdDeviationX === 'undefined') {
				$('#tool_blur').hide();
			}
			$(blurTest).remove();

			// Test for zoom icon support
			(function() {
				var pre = '-' + uaPrefix.toLowerCase() + '-zoom-';
				var zoom = pre + 'in';
				workarea.css('cursor', zoom);
				if (workarea.css('cursor') === zoom) {
					zoomInIcon = zoom;
					zoomOutIcon = pre + 'out';
				}
				workarea.css('cursor', 'auto');
			}());

			// Test for embedImage support (use timeout to not interfere with page load)
			setTimeout(function() {
				svgCanvas.embedImage('images/logo.png', function(datauri) {
					if (!datauri) {
						// Disable option
						$('#image_save_opts [value=embed]').attr('disabled', 'disabled');
						$('#image_save_opts input').val(['ref']);
						curPrefs.img_save = 'ref';
						$('#image_opt_embed').css('color', '#666').attr('title', uiStrings.notification.featNotSupported);
					}
				});
			}, 1000);

			$('#fill_color, #tool_fill .icon_label').click(function() {
				colorPicker($('#fill_color'));
				updateToolButtonState();
			});

			$('#stroke_color, #tool_stroke .icon_label').click(function() {
				colorPicker($('#stroke_color'));
				updateToolButtonState();
			});

			$('#group_opacityLabel').click(function() {
				$('#opacity_dropdown button').mousedown();
				$(window).mouseup();
			});

			$('#zoomLabel').click(function() {
				$('#zoom_dropdown button').mousedown();
				$(window).mouseup();
			});

			$('#tool_move_top').mousedown(function(evt) {
				$('#tools_stacking').show();
				evt.preventDefault();
			});

			$('.layer_button').mousedown(function() {
				$(this).addClass('layer_buttonpressed');
			}).mouseout(function() {
				$(this).removeClass('layer_buttonpressed');
			}).mouseup(function() {
				$(this).removeClass('layer_buttonpressed');
			});

			$('.push_button').mousedown(function() {
				if (!$(this).hasClass('disabled')) {
					$(this).addClass('push_button_pressed').removeClass('push_button');
				}
			}).mouseout(function() {
				$(this).removeClass('push_button_pressed').addClass('push_button');
			}).mouseup(function() {
				$(this).removeClass('push_button_pressed').addClass('push_button');
			});

			// ask for a layer name
			$('#layer_new').click(function() {
				var i = svgCanvas.getCurrentDrawing().getNumLayers();
				do {
					var uniqName = uiStrings.layers.layer + ' ' + ++i;
				} while(svgCanvas.getCurrentDrawing().hasLayer(uniqName));

				$.prompt(uiStrings.notification.enterUniqueLayerName, uniqName, function(newName) {
					if (!newName) return;
					if (svgCanvas.getCurrentDrawing().hasLayer(newName)) {
						$.alert(uiStrings.notification.dupeLayerName);
						return;
					}
					svgCanvas.createLayer(newName);
					updateContextPanel();
					populateLayers();
				});
			});

			function deleteLayer() {
				if (svgCanvas.deleteCurrentLayer()) {
					updateContextPanel();
					populateLayers();
					// This matches what SvgCanvas does
					// TODO: make this behavior less brittle (svg-editor should get which
					// layer is selected from the canvas and then select that one in the UI)
					$('#layerlist tr.layer').removeClass('layersel');
					$('#layerlist tr.layer:first').addClass('layersel');
				}
			}

			function cloneLayer() {
				var name = svgCanvas.getCurrentDrawing().getCurrentLayerName() + ' copy';

				$.prompt(uiStrings.notification.enterUniqueLayerName, name, function(newName) {
					if (!newName) return;
					if (svgCanvas.getCurrentDrawing().hasLayer(newName)) {
						$.alert(uiStrings.notification.dupeLayerName);
						return;
					}
					svgCanvas.cloneLayer(newName);
					updateContextPanel();
					populateLayers();
				});
			}

			function mergeLayer() {
				if ($('#layerlist tr.layersel').index() == svgCanvas.getCurrentDrawing().getNumLayers()-1) return;
				svgCanvas.mergeLayer();
				updateContextPanel();
				populateLayers();
			}

			function moveLayer(pos) {
				var curIndex = $('#layerlist tr.layersel').index();
				var total = svgCanvas.getCurrentDrawing().getNumLayers();
				if (curIndex > 0 || curIndex < total-1) {
					curIndex += pos;
					svgCanvas.setCurrentLayerPosition(total-curIndex-1);
					populateLayers();
				}
			}

			$('#layer_delete').click(deleteLayer);

			$('#layer_up').click(function() {
				moveLayer(-1);
			});

			$('#layer_down').click(function() {
				moveLayer(1);
			});

			$('#layer_rename').click(function() {
				var curIndex = $('#layerlist tr.layersel').prevAll().length;
				var oldName = $('#layerlist tr.layersel td.layername').text();
				$.prompt(uiStrings.notification.enterNewLayerName, '', function(newName) {
					if (!newName) return;
					if (oldName == newName || svgCanvas.getCurrentDrawing().hasLayer(newName)) {
						$.alert(uiStrings.notification.layerHasThatName);
						return;
					}

					svgCanvas.renameCurrentLayer(newName);
					populateLayers();
				});
			});

			var SIDEPANEL_MAXWIDTH = 300;
			var SIDEPANEL_OPENWIDTH = 150;
			var sidedrag = -1, sidedragging = false, allowmove = false;

			var changeSidePanelWidth = function(delta) {
				var rulerX = $('#ruler_x');
				$('#sidepanels').width('+=' + delta);
				$('#layerpanel').width('+=' + delta);
				rulerX.css('right', parseInt(rulerX.css('right'), 10) + delta);
				workarea.css('right', parseInt(workarea.css('right'), 10) + delta);
				svgCanvas.runExtensions("workareaResized");
			};

			var resizeSidePanel = function(evt) {
				if (!allowmove) return;
				if (sidedrag == -1) return;
				sidedragging = true;
				var deltaX = sidedrag - evt.pageX;
				var sideWidth = $('#sidepanels').width();
				if (sideWidth + deltaX > SIDEPANEL_MAXWIDTH) {
					deltaX = SIDEPANEL_MAXWIDTH - sideWidth;
					sideWidth = SIDEPANEL_MAXWIDTH;
				} else if (sideWidth + deltaX < 2) {
					deltaX = 2 - sideWidth;
					sideWidth = 2;
				}
				if (deltaX == 0) return;
				sidedrag -= deltaX;
				changeSidePanelWidth(deltaX);
			};

			$('#sidepanel_handle')
				.mousedown(function(evt) {
					sidedrag = evt.pageX;
					$(window).mousemove(resizeSidePanel);
					allowmove = false;
					// Silly hack for Chrome, which always runs mousemove right after mousedown
					setTimeout(function() {
						allowmove = true;
					}, 20);
				})
				.mouseup(function(evt) {
					if (!sidedragging) toggleSidePanel();
					sidedrag = -1;
					sidedragging = false;
				});

			$(window).mouseup(function() {
				sidedrag = -1;
				sidedragging = false;
				$('#svg_editor').unbind('mousemove', resizeSidePanel);
			});

			// if width is non-zero, then fully close it, otherwise fully open it
			// the optional close argument forces the side panel closed
			var toggleSidePanel = function(close) {
				var w = $('#sidepanels').width();
				var deltaX = (w > 2 || close ? 2 : SIDEPANEL_OPENWIDTH) - w;
				changeSidePanelWidth(deltaX);
			};

			// this function highlights the layer passed in (by fading out the other layers)
			// if no layer is passed in, this function restores the other layers
			var toggleHighlightLayer = function(layerNameToHighlight) {
				var curNames = new Array(svgCanvas.getCurrentDrawing().getNumLayers());
				for (var i = 0; i < curNames.length; ++i) { curNames[i] = svgCanvas.getCurrentDrawing().getLayerName(i); }

				if (layerNameToHighlight) {
					for (var i = 0; i < curNames.length; ++i) {
						if (curNames[i] != layerNameToHighlight) {
							svgCanvas.getCurrentDrawing().setLayerOpacity(curNames[i], 0.5);
						}
					}
				} else {
					for (var i = 0; i < curNames.length; ++i) {
						svgCanvas.getCurrentDrawing().setLayerOpacity(curNames[i], 1.0);
					}
				}
			};

			var populateLayers = function() {
				svgCanvas.clearSelection();
				var layerlist = $('#layerlist tbody').empty();
				var selLayerNames = $('#selLayerNames').empty();
				var drawing = svgCanvas.getCurrentDrawing();
				var currentLayerName = drawing.getCurrentLayerName();
				var layer = svgCanvas.getCurrentDrawing().getNumLayers();
				var icon = $.getSvgIcon('eye');
				// we get the layers in the reverse z-order (the layer rendered on top is listed first)
				while (layer--) {
					var name = drawing.getLayerName(layer);
					var layerTr = $('<tr class="layer">').toggleClass('layersel', name === currentLayerName);
					var layerVis = $('<td class="layervis">').toggleClass('layerinvis', !drawing.getLayerVisibility(name));
					var layerName = $('<td class="layername">' + name + '</td>');
					layerlist.append(layerTr.append(layerVis, layerName));
					selLayerNames.append('<option value="' + name + '">' + name + '</option>');
				}
				if (icon !== undefined) {
					var copy = icon.clone();
					$('td.layervis', layerlist).append(icon.clone());
					$.resizeSvgIcons({'td.layervis .svg_icon': 14});
				}
				// handle selection of layer
				$('#layerlist td.layername')
					.mouseup(function(evt) {
						$('#layerlist tr.layer').removeClass('layersel');
						$(this.parentNode).addClass('layersel');
						svgCanvas.setCurrentLayer(this.textContent);
						evt.preventDefault();
					})
					.mouseover(function() {
						toggleHighlightLayer(this.textContent);
					})
					.mouseout(function() {
						toggleHighlightLayer();
					});
				$('#layerlist td.layervis').click(function() {
					var row = $(this.parentNode).prevAll().length;
					var name = $('#layerlist tr.layer:eq(' + row + ') td.layername').text();
					var vis = $(this).hasClass('layerinvis');
					svgCanvas.setLayerVisibility(name, vis);
					$(this).toggleClass('layerinvis');
				});

				// if there were too few rows, let's add a few to make it not so lonely
				var num = 5 - $('#layerlist tr.layer').size();
				while (num-- > 0) {
					// FIXME: there must a better way to do this
					layerlist.append('<tr><td style="color:white">_</td><td/></tr>');
				}
			};
			populateLayers();

		// 	function changeResolution(x,y) {
		// 		var zoom = svgCanvas.getResolution().zoom;
		// 		setResolution(x * zoom, y * zoom);
		// 	}

			var centerCanvas = function() {
				// this centers the canvas vertically in the workarea (horizontal handled in CSS)
				workarea.css('line-height', workarea.height() + 'px');
			};

			$(window).bind('load resize', centerCanvas);

			function stepFontSize(elem, step) {
				var orig_val = elem.value-0;
				var sug_val = orig_val + step;
				var increasing = sug_val >= orig_val;
				if (step === 0) return orig_val;

				if (orig_val >= 24) {
					if (increasing) {
						return Math.round(orig_val * 1.1);
					}
					return Math.round(orig_val / 1.1);
				} else if (orig_val <= 1) {
					if (increasing) {
						return orig_val * 2;
					}
					return orig_val / 2;
				}
				return sug_val;
			}

			function stepZoom(elem, step) {
				var orig_val = elem.value-0;
				if (orig_val === 0) return 100;
				var sug_val = orig_val + step;
				if (step === 0) return orig_val;

				if (orig_val >= 100) {
					return sug_val;
				}
				if (sug_val >= orig_val) {
					return orig_val * 2;
				}
				return orig_val / 2;
			}

		// 	function setResolution(w, h, center) {
		// 		updateCanvas();
		// // 		w-=0; h-=0;
		// // 		$('#svgcanvas').css( { 'width': w, 'height': h } );
		// // 		$('#canvas_width').val(w);
		// // 		$('#canvas_height').val(h);
		// //
		// // 		if (center) {
		// // 			var w_area = workarea;
		// // 			var scroll_y = h/2 - w_area.height()/2;
		// // 			var scroll_x = w/2 - w_area.width()/2;
		// // 			w_area[0].scrollTop = scroll_y;
		// // 			w_area[0].scrollLeft = scroll_x;
		// // 		}
		// 	}

			$('#resolution').change(function() {
				var wh = $('#canvas_width,#canvas_height');
				if (!this.selectedIndex) {
					if ($('#canvas_width').val() == 'fit') {
						wh.removeAttr('disabled').val(100);
					}
				} else if (this.value == 'content') {
					wh.val('fit').attr('disabled', 'disabled');
				} else {
					var dims = this.value.split('x');
					$('#canvas_width').val(dims[0]);
					$('#canvas_height').val(dims[1]);
					wh.removeAttr('disabled');
				}
			});

			//Prevent browser from erroneously repopulating fields
			$('input,select').attr('autocomplete', 'off');

			// Associate all button actions as well as non-button keyboard shortcuts
			var Actions = function() {
				// sel:'selector', fn:function, evt:'event', key:[key, preventDefault, NoDisableInInput]
				var tool_buttons = [
					{sel: '#tool_select', fn: clickSelect, evt: 'click', key: ['V', true]},
					{sel: '#tool_fhpath', fn: clickFHPath, evt: 'click', key: ['Q', true]},
					{sel: '#tool_line', fn: clickLine, evt: 'click', key: ['L', true]},
					{sel: '#tool_rect', fn: clickRect, evt: 'mouseup', key: ['R', true], parent: '#tools_rect', icon: 'rect'},
					{sel: '#tool_square', fn: clickSquare, evt: 'mouseup', parent: '#tools_rect', icon: 'square'},
					{sel: '#tool_fhrect', fn: clickFHRect, evt: 'mouseup', parent: '#tools_rect', icon: 'fh_rect'},
					{sel: '#tool_ellipse', fn: clickEllipse, evt: 'mouseup', key: ['E', true], parent: '#tools_ellipse', icon: 'ellipse'},
					{sel: '#tool_circle', fn: clickCircle, evt: 'mouseup', parent: '#tools_ellipse', icon: 'circle'},
					{sel: '#tool_fhellipse', fn: clickFHEllipse, evt: 'mouseup', parent: '#tools_ellipse', icon: 'fh_ellipse'},
					{sel: '#tool_path', fn: clickPath, evt: 'click', key: ['P', true]},
					{sel: '#tool_text', fn: clickText, evt: 'click', key: ['T', true]},
					{sel: '#tool_image', fn: clickImage, evt: 'mouseup'},
					{sel: '#tool_zoom', fn: clickZoom, evt: 'mouseup', key: ['Z', true]},
					{sel: '#tool_clear', fn: clickClear, evt: 'mouseup', key: ['N', true]},
					{sel: '#tool_save', fn: function() { editingsource?saveSourceEditor():clickSave()}, evt: 'mouseup', key: ['S', true]},
					{sel: '#tool_export', fn: clickExport, evt: 'mouseup'},
					{sel: '#tool_open', fn: clickOpen, evt: 'mouseup', key: ['O', true]},
					{sel: '#tool_import', fn: clickImport, evt: 'mouseup'},
					{sel: '#tool_source', fn: showSourceEditor, evt: 'click', key: ['U', true]},
					{sel: '#tool_wireframe', fn: clickWireframe, evt: 'click', key: ['F', true]},
					{sel: '#tool_source_cancel,.overlay,#tool_docprops_cancel,#tool_prefs_cancel', fn: cancelOverlays, evt: 'click', key: ['esc', false, false], hidekey: true},
					{sel: '#tool_source_save', fn: saveSourceEditor, evt: 'click'},
					{sel: '#tool_docprops_save', fn: saveDocProperties, evt: 'click'},
					{sel: '#tool_docprops', fn: showDocProperties, evt: 'mouseup'},
					{sel: '#tool_prefs_save', fn: savePreferences, evt: 'click'},
					{sel: '#tool_prefs_option', fn: function() {showPreferences(); return false;}, evt: 'mouseup'},
					{sel: '#tool_delete,#tool_delete_multi', fn: deleteSelected, evt: 'click', key: ['del/backspace', true]},
					{sel: '#tool_reorient', fn: reorientPath, evt: 'click'},
					{sel: '#tool_node_link', fn: linkControlPoints, evt: 'click'},
					{sel: '#tool_node_clone', fn: clonePathNode, evt: 'click'},
					{sel: '#tool_node_delete', fn: deletePathNode, evt: 'click'},
					{sel: '#tool_openclose_path', fn: opencloseSubPath, evt: 'click'},
					{sel: '#tool_add_subpath', fn: addSubPath, evt: 'click'},
					{sel: '#tool_move_top', fn: moveToTopSelected, evt: 'click', key: 'ctrl+shift+]'},
					{sel: '#tool_move_bottom', fn: moveToBottomSelected, evt: 'click', key: 'ctrl+shift+['},
					{sel: '#tool_topath', fn: convertToPath, evt: 'click'},
					{sel: '#tool_make_link,#tool_make_link_multi', fn: makeHyperlink, evt: 'click'},
					{sel: '#tool_undo', fn: clickUndo, evt: 'click', key: ['Z', true]},
					{sel: '#tool_redo', fn: clickRedo, evt: 'click', key: ['Y', true]},
					{sel: '#tool_clone,#tool_clone_multi', fn: clickClone, evt: 'click', key: ['D', true]},
					{sel: '#tool_group', fn: clickGroup, evt: 'click', key: ['G', true]},
					{sel: '#tool_ungroup', fn: clickGroup, evt: 'click'},
					{sel: '#tool_unlink_use', fn: clickGroup, evt: 'click'},
					{sel: '[id^=tool_align]', fn: clickAlign, evt: 'click'},
					// these two lines are required to make Opera work properly with the flyout mechanism
		// 			{sel: '#tools_rect_show', fn: clickRect, evt: 'click'},
		// 			{sel: '#tools_ellipse_show', fn: clickEllipse, evt: 'click'},
					{sel: '#tool_bold', fn: clickBold, evt: 'mousedown'},
					{sel: '#tool_italic', fn: clickItalic, evt: 'mousedown'},
					{sel: '#sidepanel_handle', fn: toggleSidePanel, key: ['X']},
					{sel: '#copy_save_done', fn: cancelOverlays, evt: 'click'},

					// Shortcuts not associated with buttons

					{key: 'ctrl+left', fn: function(){rotateSelected(0,1)}},
					{key: 'ctrl+right', fn: function(){rotateSelected(1,1)}},
					{key: 'ctrl+shift+left', fn: function(){rotateSelected(0,5)}},
					{key: 'ctrl+shift+right', fn: function(){rotateSelected(1,5)}},
					{key: 'shift+O', fn: selectPrev},
					{key: 'shift+P', fn: selectNext},
					{key: [modKey+'up', true], fn: function(){zoomImage(2);}},
					{key: [modKey+'down', true], fn: function(){zoomImage(.5);}},
					{key: [modKey+']', true], fn: function(){moveUpDownSelected('Up');}},
					{key: [modKey+'[', true], fn: function(){moveUpDownSelected('Down');}},
					{key: ['up', true], fn: function(){moveSelected(0,-1);}},
					{key: ['down', true], fn: function(){moveSelected(0,1);}},
					{key: ['left', true], fn: function(){moveSelected(-1,0);}},
					{key: ['right', true], fn: function(){moveSelected(1,0);}},
					{key: 'shift+up', fn: function(){moveSelected(0,-10)}},
					{key: 'shift+down', fn: function(){moveSelected(0,10)}},
					{key: 'shift+left', fn: function(){moveSelected(-10,0)}},
					{key: 'shift+right', fn: function(){moveSelected(10,0)}},
					{key: ['alt+up', true], fn: function(){svgCanvas.cloneSelectedElements(0,-1)}},
					{key: ['alt+down', true], fn: function(){svgCanvas.cloneSelectedElements(0,1)}},
					{key: ['alt+left', true], fn: function(){svgCanvas.cloneSelectedElements(-1,0)}},
					{key: ['alt+right', true], fn: function(){svgCanvas.cloneSelectedElements(1,0)}},
					{key: ['alt+shift+up', true], fn: function(){svgCanvas.cloneSelectedElements(0,-10)}},
					{key: ['alt+shift+down', true], fn: function(){svgCanvas.cloneSelectedElements(0,10)}},
					{key: ['alt+shift+left', true], fn: function(){svgCanvas.cloneSelectedElements(-10,0)}},
					{key: ['alt+shift+right', true], fn: function(){svgCanvas.cloneSelectedElements(10,0)}},
					{key: 'A', fn: function(){svgCanvas.selectAllInCurrentLayer();}},

					// Standard shortcuts
					{key: modKey+'z', fn: clickUndo},
					{key: modKey + 'shift+z', fn: clickRedo},
					{key: modKey + 'y', fn: clickRedo},

					{key: modKey+'x', fn: cutSelected},
					{key: modKey+'c', fn: copySelected},
					{key: modKey+'v', fn: pasteInCenter}
				];

				// Tooltips not directly associated with a single function
				var key_assocs = {
					'4/Shift+4': '#tools_rect_show',
					'5/Shift+5': '#tools_ellipse_show'
				};

				return {
					setAll: function() {
						var flyouts = {};

						$.each(tool_buttons, function(i, opts) {
							// Bind function to button
							if (opts.sel) {
								var btn = $(opts.sel);
								if (btn.length == 0) return true; // Skip if markup does not exist
								if (opts.evt) {
									if (svgedit.browser.isTouch() && opts.evt === 'click') {
										opts.evt = 'mousedown';
									}
									btn[opts.evt](opts.fn);
								}

								// Add to parent flyout menu, if able to be displayed
								if (opts.parent && $(opts.parent + '_show').length != 0) {
									var f_h = $(opts.parent);
									if (!f_h.length) {
										f_h = makeFlyoutHolder(opts.parent.substr(1));
									}

									f_h.append(btn);

									if (!$.isArray(flyouts[opts.parent])) {
										flyouts[opts.parent] = [];
									}
									flyouts[opts.parent].push(opts);
								}
							}

							// Bind function to shortcut key
							if (opts.key) {
								// Set shortcut based on options
								var keyval, shortcut = '', disInInp = true, fn = opts.fn, pd = false;
								if ($.isArray(opts.key)) {
									keyval = opts.key[0];
									if (opts.key.length > 1) pd = opts.key[1];
									if (opts.key.length > 2) disInInp = opts.key[2];
								} else {
									keyval = opts.key;
								}
								keyval += '';

								$.each(keyval.split('/'), function(i, key) {
									$(document).bind('keydown', key, function(e) {
										fn();
										if (pd) {
											e.preventDefault();
										}
										// Prevent default on ALL keys?
										return false;
									});
								});

								// Put shortcut in title
								if (opts.sel && !opts.hidekey && btn.attr('title')) {
									var newTitle = btn.attr('title').split('[')[0] + ' (' + keyval + ')';
									key_assocs[keyval] = opts.sel;
									// Disregard for menu items
									if (!btn.parents('#main_menu').length) {
										btn.attr('title', newTitle);
									}
								}
							}
						});

						// Setup flyouts
						setupFlyouts(flyouts);

						// Misc additional actions

						// Make 'return' keypress trigger the change event
						$('.attr_changer, #image_url').bind('keydown', 'return',
							function(evt) {$(this).change();evt.preventDefault();}
						);

						$(window).bind('keydown', 'tab', function(e) {
							if (ui_context === 'canvas') {
								e.preventDefault();
								selectNext();
							}
						}).bind('keydown', 'shift+tab', function(e) {
							if (ui_context === 'canvas') {
								e.preventDefault();
								selectPrev();
							}
						});

						$('#tool_zoom').dblclick(dblclickZoom);
					},
					setTitles: function() {
						$.each(key_assocs, function(keyval, sel) {
							var menu = ($(sel).parents('#main_menu').length);

							$(sel).each(function() {
								if (menu) {
									var t = $(this).text().split(' [')[0];
								} else {
									var t = this.title.split(' [')[0];
								}
								var key_str = '';
								// Shift+Up
								$.each(keyval.split('/'), function(i, key) {
									var mod_bits = key.split('+'), mod = '';
									if (mod_bits.length > 1) {
										mod = mod_bits[0] + '+';
										key = mod_bits[1];
									}
									key_str += (i?'/':'') + mod + (uiStrings['key_'+key] || key);
								});
								if (menu) {
									this.lastChild.textContent = t +' ['+key_str+']';
								} else {
									this.title = t +' ['+key_str+']';
								}
							});
						});
					},
					getButtonData: function(sel) {
						var b;
						$.each(tool_buttons, function(i, btn) {
							if (btn.sel === sel) b = btn;
						});
						return b;
					}
				};
			}();

			Actions.setAll();

			// Select given tool
			Editor.ready(function() {
				var tool,
					itool = curConfig.initTool,
					container = $('#tools_left, #svg_editor .tools_flyout'),
					pre_tool = container.find('#tool_' + itool),
					reg_tool = container.find('#' + itool);
				if (pre_tool.length) {
					tool = pre_tool;
				} else if (reg_tool.length) {
					tool = reg_tool;
				} else {
					tool = $('#tool_select');
				}
				tool.click().mouseup();

				if (curConfig.wireframe) {
					$('#tool_wireframe').click();
				}

				if (curConfig.showlayers) {
					toggleSidePanel();
				}

				$('#rulers').toggle(!!curConfig.showRulers);

				if (curConfig.showRulers) {
					$('#show_rulers')[0].checked = true;
				}

				if (curConfig.baseUnit) {
					$('#base_unit').val(curConfig.baseUnit);
				}

				if (curConfig.gridSnapping) {
					$('#grid_snapping_on')[0].checked = true;
				}

				if (curConfig.snappingStep) {
					$('#grid_snapping_step').val(curConfig.snappingStep);
				}

				if (curConfig.gridColor) {
					$('#grid_color').val(curConfig.gridColor);
				}
			});

			// init SpinButtons
			$('#rect_rx').SpinButton({ min: 0, max: 1000, callback: changeRectRadius });
			$('#stroke_width').SpinButton({ min: 0, max: 99, smallStep: 0.1, callback: changeStrokeWidth });
			$('#angle').SpinButton({ min: -180, max: 180, step: 5, callback: changeRotationAngle });
			$('#font_size').SpinButton({ min: 0.001, stepfunc: stepFontSize, callback: changeFontSize });
			$('#group_opacity').SpinButton({ min: 0, max: 100, step: 5, callback: changeOpacity });
			$('#blur').SpinButton({ min: 0, max: 10, step: .1, callback: changeBlur });
			$('#zoom').SpinButton({ min: 0.001, max: 10000, step: 50, stepfunc: stepZoom, callback: changeZoom })
				// Set default zoom
				.val(svgCanvas.getZoom() * 100);

			$('#workarea').contextMenu({
					menu: 'cmenu_canvas',
					inSpeed: 0
				},
				function(action, el, pos) {
					switch (action) {
						case 'delete':
							deleteSelected();
							break;
						case 'cut':
							cutSelected();
							break;
						case 'copy':
							copySelected();
							break;
						case 'paste':
							svgCanvas.pasteElements();
							break;
						case 'paste_in_place':
							svgCanvas.pasteElements('in_place');
							break;
						case 'group':
							svgCanvas.groupSelectedElements();
							break;
						case 'ungroup':
							svgCanvas.ungroupSelectedElement();
							break;
						case 'move_front':
							moveToTopSelected();
							break;
						case 'move_up':
							moveUpDownSelected('Up');
							break;
						case 'move_down':
							moveUpDownSelected('Down');
							break;
						case 'move_back':
							moveToBottomSelected();
							break;
						default:
							if (svgedit.contextmenu && svgedit.contextmenu.hasCustomHandler(action)) {
								svgedit.contextmenu.getCustomHandler(action).call();
							}
							break;
					}
					if (svgCanvas.clipBoard.length) {
						canv_menu.enableContextMenuItems('#paste,#paste_in_place');
					}
				}
			);

			var lmenu_func = function(action, el, pos) {
				switch ( action ) {
					case 'dupe':
						cloneLayer();
						break;
					case 'delete':
						deleteLayer();
						break;
					case 'merge_down':
						mergeLayer();
						break;
					case 'merge_all':
						svgCanvas.mergeAllLayers();
						updateContextPanel();
						populateLayers();
						break;
				}
			};

			$('#layerlist').contextMenu({
					menu: 'cmenu_layers',
					inSpeed: 0
				},
				lmenu_func
			);

			$('#layer_moreopts').contextMenu({
					menu: 'cmenu_layers',
					inSpeed: 0,
					allowLeft: true
				},
				lmenu_func
			);

			$('.contextMenu li').mousedown(function(ev) {
				ev.preventDefault();
			});

			$('#cmenu_canvas li').disableContextMenu();
			canv_menu.enableContextMenuItems('#delete,#cut,#copy');

			window.onbeforeunload = function() {
				if ('localStorage' in window) {
					var name = 'svgedit-' + Editor.curConfig.canvasName;
					window.localStorage.setItem(name, svgCanvas.getSvgString());
					Editor.showSaveWarning = false;
				}

				// Suppress warning if page is empty
				if (undoMgr.getUndoStackSize() === 0) {
					Editor.showSaveWarning = false;
				}

				// showSaveWarning is set to 'false' when the page is saved.
				if (!curConfig.no_save_warning && Editor.showSaveWarning) {
					// Browser already asks question about closing the page
					return uiStrings.notification.unsavedChanges;
				}
			};

			Editor.openPrep = function(func) {
				$('#main_menu').hide();
				if (undoMgr.getUndoStackSize() === 0) {
					func(true);
				} else {
					$.confirm(uiStrings.notification.QwantToOpen, func);
				}
			};

			// use HTML5 File API: http://www.w3.org/TR/FileAPI/
			// if browser has HTML5 File API support, then we will show the open menu item
			// and provide a file input to click. When that change event fires, it will
			// get the text contents of the file and send it to the canvas
			if (window.FileReader) {
				var importImage = function(e) {
					$.process_cancel(uiStrings.notification.loadingImage);
					e.stopPropagation();
					e.preventDefault();
					$('#workarea').removeAttr('style');
					$('#main_menu').hide();
					var file = (e.type == 'drop') ? e.dataTransfer.files[0] : this.files[0];
					if (!file) {
						return;
					}
					if (file.type.indexOf('image') != -1) {
						//detected an image
						//svg handling
						if (file.type.indexOf('svg') != -1) {
							var reader = new FileReader();
							reader.onloadend = function(e) {
								svgCanvas.importSvgString(e.target.result, true);
								svgCanvas.ungroupSelectedElement();
								svgCanvas.ungroupSelectedElement();
								svgCanvas.groupSelectedElements();
								svgCanvas.alignSelectedElements('m', 'page');
								svgCanvas.alignSelectedElements('c', 'page');
							};
							reader.readAsText(file);
						} else {
						//bitmap handling
							var reader = new FileReader();
							reader.onloadend = function(e) {
								// let's insert the new image until we know its dimensions
								insertNewImage = function(width, height) {
									var newImage = svgCanvas.addSvgElementFromJson({
										element: 'image',
										attr: {
											x: 0,
											y: 0,
											width: width,
											height: height,
											id: svgCanvas.getNextId(),
											style: 'pointer-events:inherit'
										}
									});
									svgCanvas.setHref(newImage, e.target.result);
									svgCanvas.selectOnly([newImage]);
									svgCanvas.alignSelectedElements('m', 'page');
									svgCanvas.alignSelectedElements('c', 'page');
									updateContextPanel();
								};
									// create dummy img so we know the default dimensions
								var imgWidth = 100;
								var imgHeight = 100;
								var img = new Image();
								img.src = e.target.result;
								img.style.opacity = 0;
								img.onload = function() {
									imgWidth = img.offsetWidth;
									imgHeight = img.offsetHeight;
									insertNewImage(imgWidth, imgHeight);
								};
							};
							reader.readAsDataURL(file);
						}
					}
				};

				function onDragEnter(e) {
					e.stopPropagation();
					e.preventDefault();
					// and indicator should be displayed here, such as "drop files here"
				}

				function onDragOver(e) {
					e.stopPropagation();
					e.preventDefault();
				}

				function onDragLeave(e) {
					e.stopPropagation();
					e.preventDefault();
					// hypothetical indicator should be removed here
				}

				workarea[0].addEventListener('dragenter', onDragEnter, false);
				workarea[0].addEventListener('dragover', onDragOver, false);
				workarea[0].addEventListener('dragleave', onDragLeave, false);
				workarea[0].addEventListener('drop', importImage, false);

				var open = $('<input type="file">').change(function() {
					var f = this;
					Editor.openPrep(function(ok) {
						if (!ok) return;
						svgCanvas.clear();
						if (f.files.length==1) {
							$.process_cancel(uiStrings.notification.loadingImage);
							var reader = new FileReader();
							reader.onloadend = function(e) {
								loadSvgString(e.target.result);
								updateCanvas();
							};
							reader.readAsText(f.files[0]);
						}
					});
				});
				$('#tool_open').show().prepend(open);

				var imgImport = $('<input type="file">').change(importImage);
				$('#tool_import').show().prepend(imgImport);
			}

			var updateCanvas = Editor.updateCanvas = function(center, new_ctr) {
				var w = workarea.width(), h = workarea.height();
				var w_orig = w, h_orig = h;
				var zoom = svgCanvas.getZoom();
				var w_area = workarea;
				var cnvs = $('#svgcanvas');
				var old_ctr = {
					x: w_area[0].scrollLeft + w_orig/2,
					y: w_area[0].scrollTop + h_orig/2
				};
				var multi = curConfig.canvas_expansion;
				w = Math.max(w_orig, svgCanvas.contentW * zoom * multi);
				h = Math.max(h_orig, svgCanvas.contentH * zoom * multi);

				if (w == w_orig && h == h_orig) {
					workarea.css('overflow', 'hidden');
				} else {
					workarea.css('overflow', 'scroll');
				}

				var old_can_y = cnvs.height()/2;
				var old_can_x = cnvs.width()/2;
				cnvs.width(w).height(h);
				var new_can_y = h/2;
				var new_can_x = w/2;
				var offset = svgCanvas.updateCanvas(w, h);

				var ratio = new_can_x / old_can_x;

				var scroll_x = w/2 - w_orig/2;
				var scroll_y = h/2 - h_orig/2;

				if (!new_ctr) {
					var old_dist_x = old_ctr.x - old_can_x;
					var new_x = new_can_x + old_dist_x * ratio;

					var old_dist_y = old_ctr.y - old_can_y;
					var new_y = new_can_y + old_dist_y * ratio;

					new_ctr = {
						x: new_x,
						y: new_y
					};
				} else {
					new_ctr.x += offset.x,
					new_ctr.y += offset.y;
				}

				if (center) {
					// Go to top-left for larger documents
					if (svgCanvas.contentW > w_area.width()) {
						// Top-left
						workarea[0].scrollLeft = offset.x - 10;
						workarea[0].scrollTop = offset.y - 10;
					} else {
						// Center
						w_area[0].scrollLeft = scroll_x;
						w_area[0].scrollTop = scroll_y;
					}
				} else {
					w_area[0].scrollLeft = new_ctr.x - w_orig/2;
					w_area[0].scrollTop = new_ctr.y - h_orig/2;
				}
				if (curConfig.showRulers) {
					updateRulers(cnvs, zoom);
					workarea.scroll();
				}
				$('#dialog_box').hide();
			};

			// Make [1,2,5] array
			var r_intervals = [];
			for (var i = .1; i < 1E5; i *= 10) {
				r_intervals.push(1 * i);
				r_intervals.push(2 * i);
				r_intervals.push(5 * i);
			}

			function updateRulers(scanvas, zoom) {
				if (!zoom) zoom = svgCanvas.getZoom();
				if (!scanvas) scanvas = $('#svgcanvas');

				var limit = 30000;
				var contentElem = svgCanvas.getContentElem();
				var units = svgedit.units.getTypeMap();
				var unit = units[curConfig.baseUnit]; // 1 = 1px

				// draw x ruler then y ruler
				for (var d = 0; d < 2; d++) {
					var isX = (d === 0);
					var dim = isX ? 'x' : 'y';
					var lentype = isX ? 'width' : 'height';
					var contentDim = contentElem.getAttribute(dim) - 0;

					var $hcanv_orig = $('#ruler_' + dim + ' canvas:first');

					// Bit of a hack to fully clear the canvas in Safari & IE9
					var $hcanv = $hcanv_orig.clone();
					$hcanv_orig.replaceWith($hcanv);

					var hcanv = $hcanv[0];

					// Set the canvas size to the width of the container
					var ruler_len = scanvas[lentype]();
					var total_len = ruler_len;
					hcanv.parentNode.style[lentype] = total_len + 'px';
					var ctx_num = 0;
					var ctx_arr;
					var ctx = hcanv.getContext('2d');

					ctx.fillStyle = 'rgb(200,0,0)';
					ctx.fillRect(0, 0, hcanv.width, hcanv.height);

					// Remove any existing canvasses
					$hcanv.siblings().remove();

					// Create multiple canvases when necessary (due to browser limits)
					if (ruler_len >= limit) {
						var num = parseInt(ruler_len / limit, 10) + 1;
						ctx_arr = Array(num);
						ctx_arr[0] = ctx;
						for (var i = 1; i < num; i++) {
							hcanv[lentype] = limit;
							var copy = hcanv.cloneNode(true);
							hcanv.parentNode.appendChild(copy);
							ctx_arr[i] = copy.getContext('2d');
						}

						copy[lentype] = ruler_len % limit;

						// set copy width to last
						ruler_len = limit;
					}

					hcanv[lentype] = ruler_len;

					var u_multi = unit * zoom;

					// Calculate the main number interval
					var raw_m = 50 / u_multi;
					var multi = 1;
					for (var i = 0; i < r_intervals.length; i++) {
						var num = r_intervals[i];
						multi = num;
						if (raw_m <= num) {
							break;
						}
					}

					var big_int = multi * u_multi;

					ctx.font = '9px sans-serif';

					var ruler_d = ((contentDim / u_multi) % multi) * u_multi;
					var label_pos = ruler_d - big_int;
					// draw big intervals
					for (; ruler_d < total_len; ruler_d += big_int) {
						label_pos += big_int;
						var real_d = ruler_d - contentDim;

						var cur_d = Math.round(ruler_d) + 0.5;
						if (isX) {
							ctx.moveTo(cur_d, 15);
							ctx.lineTo(cur_d, 0);
						} else {
							ctx.moveTo(15, cur_d);
							ctx.lineTo(0, cur_d);
						}

						var num = (label_pos - contentDim) / u_multi;
						var label;
						if (multi >= 1) {
							label = Math.round(num);
						} else {
							var decs = (multi+'').split('.')[1].length;
							label = num.toFixed(decs)-0;
						}

						// Change 1000s to Ks
						if (label !== 0 && label !== 1000 && label % 1000 === 0) {
							label = (label / 1000) + 'K';
						}

						if (isX) {
							ctx.fillText(label, ruler_d+2, 8);
						} else {
							// draw label vertically
							var str = (label+'').split('');
							for (var i = 0; i < str.length; i++) {
								ctx.fillText(str[i], 1, (ruler_d+9) + i*9);
							}
						}

						var part = big_int / 10;
						// draw the small intervals
						for (var i = 1; i < 10; i++) {
							var sub_d = Math.round(ruler_d + part * i) + 0.5;
							if (ctx_arr && sub_d > ruler_len) {
								ctx_num++;
								ctx.stroke();
								if (ctx_num >= ctx_arr.length) {
									i = 10;
									ruler_d = total_len;
									continue;
								}
								ctx = ctx_arr[ctx_num];
								ruler_d -= limit;
								sub_d = Math.round(ruler_d + part * i) + 0.5;
							}

							// odd lines are slighly longer
							var line_num = (i % 2) ? 12 : 10;
							if (isX) {
								ctx.moveTo(sub_d, 15);
								ctx.lineTo(sub_d, line_num);
							} else {
								ctx.moveTo(15, sub_d);
								ctx.lineTo(line_num, sub_d);
							}
						}
					}
					ctx.strokeStyle = '#000';
					ctx.stroke();
				}
			}

// 			$(function() {
				updateCanvas(true);
// 			});

		//	var revnums = "svg-editor.js ($Rev$) ";
		//	revnums += svgCanvas.getVersion();
		//	$('#copyright')[0].setAttribute('title', revnums);

			// Callback handler for embedapi.js
			try {
				window.addEventListener('message', function(e) {
					// We accept and post strings for the sake of IE9 support
					if (typeof e.data !== 'string' || e.data.charAt() === '|') {
						return;
					}
					var data = JSON.parse(e.data);
					if (!data || typeof data !== 'object' || data.namespace !== 'svgCanvas') {
						return;
					}
					var cbid = data.id,
						name = data.name,
						args = data.args;
					try {
						e.source.postMessage(JSON.stringify({namespace: 'svg-edit', id: cbid, result: svgCanvas[name].apply(svgCanvas, args)}), '*');
					} catch(err) {
						e.source.postMessage(JSON.stringify({namespace: 'svg-edit', id: cbid, error: err.message}), '*');
					}
 				}, false);
			} catch(err) {
				window.embed_error = err;
			}

			// For Compatibility with older extensions
			$(function() {
				window.svgCanvas = svgCanvas;
				svgCanvas.ready = svgEditor.ready;
			});

			Editor.setLang = function(lang, allStrings) {
				$.pref('lang', lang);
				$('#lang_select').val(lang);
				if (!allStrings) {
					return;
				}
				var notif = allStrings.notification;
				// $.extend will only replace the given strings
				var oldLayerName = $('#layerlist tr.layersel td.layername').text();
				var rename_layer = (oldLayerName == uiStrings.common.layer + ' 1');

				$.extend(uiStrings, allStrings);
				svgCanvas.setUiStrings(allStrings);
				Actions.setTitles();

				if (rename_layer) {
					svgCanvas.renameCurrentLayer(uiStrings.common.layer + ' 1');
					populateLayers();
				}

				svgCanvas.runExtensions('langChanged', lang);

				// Update flyout tooltips
				setFlyoutTitles();

				// Copy title for certain tool elements
				var elems = {
					'#stroke_color': '#tool_stroke .icon_label, #tool_stroke .color_block',
					'#fill_color': '#tool_fill label, #tool_fill .color_block',
					'#linejoin_miter': '#cur_linejoin',
					'#linecap_butt': '#cur_linecap'
				};

				$.each(elems, function(source, dest) {
					$(dest).attr('title', $(source)[0].title);
				});

				// Copy alignment titles
				$('#multiselected_panel div[id^=tool_align]').each(function() {
					$('#tool_pos' + this.id.substr(10))[0].title = this.title;
				});
			};
		};

		var callbacks = [];

		function loadSvgString(str, callback) {
			var success = svgCanvas.setSvgString(str) !== false;
			callback = callback || $.noop;
			if (success) {
				callback(true);
			} else {
				$.alert(uiStrings.notification.errorLoadingSVG, function() {
					callback(false);
				});
			}
		}

		Editor.ready = function(cb) {
			if (!isReady) {
				callbacks.push(cb);
			} else {
				cb();
			}
		};

		Editor.runCallbacks = function() {
			$.each(callbacks, function() {
				this();
			});
			isReady = true;
		};

		Editor.loadFromString = function(str) {
			Editor.ready(function() {
				loadSvgString(str);
			});
		};

		Editor.disableUI = function(featList) {
// 			$(function() {
// 				$('#tool_wireframe, #tool_image, #main_button, #tool_source, #sidepanels').remove();
// 				$('#tools_top').css('left', 5);
// 			});
		};

		Editor.loadFromURL = function(url, opts) {
			if (!opts) opts = {};

			var cache = opts.cache;
			var cb = opts.callback;

			Editor.ready(function() {
				$.ajax({
					'url': url,
					'dataType': 'text',
					cache: !!cache,
					beforeSend:function(){
						$.process_cancel(uiStrings.notification.loadingImage);
					},
					success: function(str) {
						loadSvgString(str, cb);
					},
					error: function(xhr, stat, err) {
						if (xhr.status != 404 && xhr.responseText) {
							loadSvgString(xhr.responseText, cb);
						} else {
							$.alert(uiStrings.notification.URLloadFail + ': \n'+err+'', cb);
						}
					},
					complete:function(){
						$('#dialog_box').hide();
					}
				});
			});
		};

		Editor.loadFromDataURI = function(str) {
			Editor.ready(function() {
				var pre = 'data:image/svg+xml;base64,';
				var src = str.substring(pre.length);
				loadSvgString(svgedit.utilities.decode64(src));
			});
		};

		Editor.addExtension = function() {
			var args = arguments;

			// Note that we don't want this on Editor.ready since some extensions
			// may want to run before then (like server_opensave).
			$(function() {
				if (svgCanvas) svgCanvas.addExtension.apply(this, args);
			});
		};

		return Editor;
	}(jQuery);

	// Run init once DOM is loaded
	$(svgEditor.init);

})();


/*
 * Localizing script for SVG-edit UI
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2010 Narendra Sisodya
 * Copyright(c) 2010 Alexis Deveria
 *
 */

// Dependencies
// 1) jQuery
// 2) svgcanvas.js
// 3) svg-editor.js

var svgEditor = (function($, Editor) {

	var lang_param;
	
	function setStrings(type, obj, ids) {
		// Root element to look for element from
		var parent = $('#svg_editor').parent();
		for(var sel in obj) {
			var val = obj[sel];
			if(!val) console.log(sel);
			
			if(ids) sel = '#' + sel;
			var $elem = parent.find(sel);
			if($elem.length) {
				var elem = parent.find(sel)[0];
				
				switch ( type ) {
					case 'content':
						for(var i = 0; i < elem.childNodes.length; i++) {
							var node = elem.childNodes[i];
							if(node.nodeType === 3 && node.textContent.replace(/\s/g,'')) {
								node.textContent = val;
								break;
							}
						}
						break;
					
					case 'title':
						elem.title = val;
						break;
				}
				
				
			} else {
				console.log('Missing: ' + sel);
			}
		}
	}

	Editor.readLang = function(langData) {
		var more = Editor.canvas.runExtensions("addlangData", lang_param, true);
		$.each(more, function(i, m) {
			if(m.data) {
				langData = $.merge(langData, m.data);
			}
		});
		
		// Old locale file, do nothing for now.
		if(!langData.tools) return;
		
		var tools = langData.tools,
			misc = langData.misc,
			properties = langData.properties,
			config = langData.config,
			layers = langData.layers,
			common = langData.common,
			ui = langData.ui;
		
		setStrings('content', {
			copyrightLabel: misc.powered_by,
			curve_segments: properties.curve_segments,
			fitToContent: tools.fitToContent,
			fit_to_all: tools.fit_to_all,
			fit_to_canvas: tools.fit_to_canvas,
			fit_to_layer_content: tools.fit_to_layer_content,
			fit_to_sel: tools.fit_to_sel,
			
			icon_large: config.icon_large,
			icon_medium: config.icon_medium,
			icon_small: config.icon_small,
			icon_xlarge: config.icon_xlarge,
			image_opt_embed: config.image_opt_embed,
			image_opt_ref: config.image_opt_ref,
			includedImages: config.included_images,
			
			largest_object: tools.largest_object,
			
			layersLabel: layers.layers,
			page: tools.page,
			relativeToLabel: tools.relativeTo,
			selLayerLabel: layers.move_elems_to,
			selectedPredefined: config.select_predefined,
			
			selected_objects: tools.selected_objects,
			smallest_object: tools.smallest_object,
			straight_segments: properties.straight_segments,
			
			svginfo_bg_url: config.editor_img_url + ":",
			svginfo_bg_note: config.editor_bg_note,
			svginfo_change_background: config.background,
			svginfo_dim: config.doc_dims,
			svginfo_editor_prefs: config.editor_prefs,
			svginfo_height: common.height,
			svginfo_icons: config.icon_size,
			svginfo_image_props: config.image_props,
			svginfo_lang: config.language,
			svginfo_title: config.doc_title,
			svginfo_width: common.width,
			
			tool_docprops_cancel: common.cancel,
			tool_docprops_save: common.ok,

			tool_source_cancel: common.cancel,
			tool_source_save: common.ok,
			
			tool_prefs_cancel: common.cancel,
			tool_prefs_save: common.ok,

			sidepanel_handle: layers.layers.split('').join(' '),

			tool_clear: tools.new_doc,
			tool_docprops: tools.docprops,
			tool_export: tools.export_img,
			tool_import: tools.import_doc,
			tool_imagelib: tools.imagelib,
			tool_open: tools.open_doc,
			tool_save: tools.save_doc,
			
			svginfo_units_rulers: config.units_and_rulers,
			svginfo_rulers_onoff: config.show_rulers,
			svginfo_unit: config.base_unit,
			
			svginfo_grid_settings: config.grid,
			svginfo_snap_onoff: config.snapping_onoff,
			svginfo_snap_step: config.snapping_stepsize,
			svginfo_grid_color: config.grid_color
		}, true);
		
		// Shape categories
		var cats = {};
		for (var o in langData.shape_cats) {
			cats['#shape_cats [data-cat="' + o + '"]'] = langData.shape_cats[o];
		}
		
		// TODO: Find way to make this run after shapelib ext has loaded
		setTimeout(function() {
			setStrings('content', cats);
		}, 2000);
		
		// Context menus
		var opts = {};
		$.each(['cut','copy','paste', 'paste_in_place', 'delete', 'group', 'ungroup', 'move_front', 'move_up', 'move_down', 'move_back'], function() {
			opts['#cmenu_canvas a[href="#' + this + '"]'] = tools[this];
		});

		$.each(['dupe','merge_down', 'merge_all'], function() {
			opts['#cmenu_layers a[href="#' + this + '"]'] = layers[this];
		});

		opts['#cmenu_layers a[href="#delete"]'] = layers.del;
		
		setStrings('content', opts);
		
		setStrings('title', {
			align_relative_to: tools.align_relative_to,
			circle_cx: properties.circle_cx,
			circle_cy: properties.circle_cy,
			circle_r: properties.circle_r,
			cornerRadiusLabel: properties.corner_radius,
			ellipse_cx: properties.ellipse_cx,
			ellipse_cy: properties.ellipse_cy,
			ellipse_rx: properties.ellipse_rx,
			ellipse_ry: properties.ellipse_ry,
			fill_color: properties.fill_color,
			font_family: properties.font_family,
			idLabel: properties.id,
			image_height: properties.image_height,
			image_url: properties.image_url,
			image_width: properties.image_width,
			layer_delete: layers.del,
			layer_down: layers.move_down,
			layer_new: layers['new'],
			layer_rename: layers.rename,
			layer_moreopts: common.more_opts,
			layer_up: layers.move_up,
			line_x1: properties.line_x1,
			line_x2: properties.line_x2,
			line_y1: properties.line_y1,
			line_y2: properties.line_y2,
			linecap_butt: properties.linecap_butt,
			linecap_round: properties.linecap_round,
			linecap_square: properties.linecap_square,
			linejoin_bevel: properties.linejoin_bevel,
			linejoin_miter: properties.linejoin_miter,
			linejoin_round: properties.linejoin_round,
			main_icon: tools.main_menu,
			mode_connect: tools.mode_connect,
			tools_shapelib_show: tools.mode_shapelib,
			palette: ui.palette_info,
			zoom_panel: ui.zoom_level,
			path_node_x: properties.node_x,
			path_node_y: properties.node_y,
			rect_height_tool: properties.rect_height,
			rect_width_tool: properties.rect_width,
			seg_type: properties.seg_type,
			selLayerNames: layers.move_selected,
			selected_x: properties.pos_x,
			selected_y: properties.pos_y,
			stroke_color: properties.stroke_color,
			stroke_style: properties.stroke_style,
			stroke_width: properties.stroke_width,
			svginfo_title: config.doc_title,
			text: properties.text_contents,
			toggle_stroke_tools: ui.toggle_stroke_tools,
			tool_add_subpath: tools.add_subpath,
			tool_alignbottom: tools.align_bottom,
			tool_aligncenter: tools.align_center,
			tool_alignleft: tools.align_left,
			tool_alignmiddle: tools.align_middle,
			tool_alignright: tools.align_right,
			tool_aligntop: tools.align_top,
			tool_angle: properties.angle,
			tool_blur: properties.blur,
			tool_bold: properties.bold,
			tool_circle: tools.mode_circle,
			tool_clone: tools.clone,
			tool_clone_multi: tools.clone,
			tool_delete: tools.del,
			tool_delete_multi: tools.del,
			tool_ellipse: tools.mode_ellipse,
			tool_eyedropper: tools.mode_eyedropper,
			tool_fhellipse: tools.mode_fhellipse,
			tool_fhpath: tools.mode_fhpath,
			tool_fhrect: tools.mode_fhrect,
			tool_font_size: properties.font_size,
			tool_group: tools.group,
			tool_make_link: tools.make_link,
			tool_link_url: tools.set_link_url,
			tool_image: tools.mode_image,
			tool_italic: properties.italic,
			tool_line: tools.mode_line,
			tool_move_bottom: tools.move_bottom,
			tool_move_top: tools.move_top,
			tool_node_clone: tools.node_clone,
			tool_node_delete: tools.node_delete,
			tool_node_link: tools.node_link,
			tool_opacity: properties.opacity,
			tool_openclose_path: tools.openclose_path,
			tool_path: tools.mode_path,
			tool_position: tools.align_to_page,
			tool_rect: tools.mode_rect,
			tool_redo: tools.redo,
			tool_reorient: tools.reorient_path,
			tool_select: tools.mode_select,
			tool_source: tools.source_save,
			tool_square: tools.mode_square,
			tool_text: tools.mode_text,
			tool_topath: tools.to_path,
			tool_undo: tools.undo,
			tool_ungroup: tools.ungroup,
			tool_wireframe: tools.wireframe_mode,
			view_grid: tools.toggle_grid,
			tool_zoom: tools.mode_zoom,
			url_notice: tools.no_embed

			}
		, true);
		
		Editor.setLang(lang_param, langData);
	}

	Editor.putLocale = function(given_param, good_langs){
	
		if(given_param) {
			lang_param = given_param;
		} else {
			lang_param = $.pref('lang');
			if(!lang_param) {
				if (navigator.userLanguage) // Explorer
					lang_param = navigator.userLanguage;
				else if (navigator.language) // FF, Opera, ...
					lang_param = navigator.language;
				if (lang_param == "")
					return;
			}
			
			console.log('Lang: ' + lang_param);
			
			// Set to English if language is not in list of good langs
			if($.inArray(lang_param, good_langs) == -1 && lang_param !== 'test') {
				lang_param = "en";
			}
	
			// don't bother on first run if language is English		
			if(lang_param.indexOf("en") == 0) return;

		}
		
		var conf = Editor.curConfig;
		
		var url = conf.langPath + "lang." + lang_param + ".js";
		
		$.getScript(url, function(d) {
			// Fails locally in Chrome 5+
			if(!d) {
				var s = document.createElement('script');
				s.src = url;
				document.querySelector('head').appendChild(s);
			}
		});
		
	};
	
	return Editor;
}(jQuery, svgEditor));

/**
 * Package: svgedit.contextmenu
 * 
 * Licensed under the Apache License, Version 2
 * 
 * Author: Adam Bender
 */
// Dependencies:
// 1) jQuery (for dom injection of context menus)
var svgedit = svgedit || {};
(function() {
	var self = this;
	if (!svgedit.contextmenu) {
		svgedit.contextmenu = {};
	}
	self.contextMenuExtensions = {};
	var menuItemIsValid = function(menuItem) {
		return menuItem && menuItem.id && menuItem.label && menuItem.action && typeof menuItem.action == 'function';
	};
	var addContextMenuItem = function(menuItem) {
		// menuItem: {id, label, shortcut, action}
		if (!menuItemIsValid(menuItem)) {
			console.error("Menu items must be defined and have at least properties: id, label, action, where action must be a function");
			return;
		}
		if (menuItem.id in self.contextMenuExtensions) {
			console.error('Cannot add extension "' + menuItem.id + '", an extension by that name already exists"');
			return;
		}
		// Register menuItem action, see below for deferred menu dom injection
		console.log("Registed contextmenu item: {id:"+ menuItem.id+", label:"+menuItem.label+"}");
		self.contextMenuExtensions[menuItem.id] = menuItem;
		//TODO: Need to consider how to handle custom enable/disable behavior
	};
	var hasCustomHandler = function(handlerKey) {
		return self.contextMenuExtensions[handlerKey] && true;
	};
	var getCustomHandler = function(handlerKey) {
		return self.contextMenuExtensions[handlerKey].action;
	};
	var injectExtendedContextMenuItemIntoDom = function(menuItem) {
		if (Object.keys(self.contextMenuExtensions).length === 0) {
			// all menuItems appear at the bottom of the menu in their own container.
			// if this is the first extension menu we need to add the separator.
			$("#cmenu_canvas").append("<li class='separator'>");
		}
		var shortcut = menuItem.shortcut || "";
		$("#cmenu_canvas").append("<li class='disabled'><a href='#" + menuItem.id + "'>"
									+ menuItem.label + "<span class='shortcut'>"
									+ shortcut + "</span></a></li>");
	};
	// Defer injection to wait out initial menu processing. This probably goes away once all context
	// menu behavior is brought here.
	svgEditor.ready(function() {
		for (var menuItem in contextMenuExtensions) {
			injectExtendedContextMenuItemIntoDom(contextMenuExtensions[menuItem]);
		}
	});
	svgedit.contextmenu.resetCustomMenus = function(){self.contextMenuExtensions = {};};
	svgedit.contextmenu.add = addContextMenuItem;
	svgedit.contextmenu.hasCustomHandler = hasCustomHandler;
	svgedit.contextmenu.getCustomHandler = getCustomHandler;
})();


/*
 * ext-panning.js
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2013 Luis Aguirre
 *
 */
 
/* 
	This is a very basic SVG-Edit extension to let tablet/mobile devices panning without problem
*/

svgEditor.addExtension('ext-panning', function() {
	return {
		name: 'Extension Panning',
		svgicons: 'extensions/ext-panning.xml',
		buttons: [{
			id: 'ext-panning',
			type: 'mode',
			title: 'Panning',
			events: {
				click: function() {
					svgCanvas.setMode('ext-panning');
				}
			}
		}],
		mouseDown: function() {
			if(svgCanvas.getMode() == 'ext-panning') {
				svgEditor.setPanning(true);
				return {started: true};
			}
		},
		mouseUp: function() {
			if(svgCanvas.getMode() == 'ext-panning') {
				svgEditor.setPanning(false);
				return {
					keep: false,
					element: null
				};
			}
		}
	};
});


/*!
 * jQuery UI 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */(function(a,b){function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;if(!b.href||!g||f.nodeName.toLowerCase()!=="map")return!1;h=a("img[usemap=#"+g+"]")[0];return!!h&&d(h)}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}a.ui=a.ui||{};a.ui.version||(a.extend(a.ui,{version:"1.8.17",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)});return c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){if(c===b)return g["inner"+d].call(this);return this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){if(typeof b!="number")return g["outer"+d].call(this,b);return this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!!d&&!!a.element[0].parentNode)for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;if(b[d]>0)return!0;b[d]=1,e=b[d]>0,b[d]=0;return e},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}}))})(jQuery);/*!
 * jQuery UI Widget 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}});return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e;if(f&&e.charAt(0)==="_")return h;f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b){h=f;return!1}}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))});return h}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);this.element.trigger(c,d);return!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);/*!
 * jQuery UI Mouse 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent")){a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation();return!1}}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted){b.preventDefault();return!0}}!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0;return!0}},_mouseMove:function(b){if(a.browser.msie&&!(document.documentMode>=9)&&!b.button)return this._mouseUp(b);if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b));return!this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b));return!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);/*
 * jQuery UI Draggable 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!!this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy();return this}},_mouseCapture:function(b){var c=this.options;if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle"))return!1;this.handle=this._getHandle(b);if(!this.handle)return!1;c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")});return!0},_mouseStart:function(b){var c=this.options;this.helper=this._createHelper(b),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment();if(this._trigger("start",b)===!1){this._clear();return!1}this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.helper.addClass("ui-draggable-dragging"),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b);return!0},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1){this._mouseUp({});return!1}this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";a.ui.ddmanager&&a.ui.ddmanager.drag(this,b);return!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var d=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){d._trigger("stop",b)!==!1&&d._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b);return a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)});return c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute");return d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute"));return a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.17"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!!e.length){var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);/*
 * jQuery UI Slider 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */(function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=!0,f=a(this).data("index.ui-slider-handle"),g,h,i,j;if(!b.options.disabled){switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:e=!1;if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),g=b._start(d,f);if(g===!1)return}}j=b.options.step,b.options.values&&b.options.values.length?h=i=b.values(f):h=i=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:i=b._valueMin();break;case a.ui.keyCode.END:i=b._valueMax();break;case a.ui.keyCode.PAGE_UP:i=b._trimAlignValue(h+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:i=b._trimAlignValue(h-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(h===b._valueMax())return;i=b._trimAlignValue(h+j);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(h===b._valueMin())return;i=b._trimAlignValue(h-j)}b._slide(d,f,i);return e}}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy();return this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;if(c.disabled)return!1;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i);if(j===!1)return!1;this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0;return!0},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);this._slide(a,this._handleIndex,c);return!1},_mouseStop:function(a){this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1;return!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e;return this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values());return this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length)this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);else return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1)this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);else{if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()}},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;a=this._trimAlignValue(a);return a},_values:function(a){var b,c,d;if(arguments.length){b=this.options.values[a],b=this._trimAlignValue(b);return b}c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;Math.abs(c)*2>=b&&(d+=c>0?b:-b);return parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.17"})})(jQuery);


/*
 * jPicker 1.1.6
 *
 * jQuery Plugin for Photoshop style color picker
 *
 * Copyright (c) 2010 Christopher T. Tillman
 * Digital Magic Productions, Inc. (http://www.digitalmagicpro.com/)
 * MIT style license, FREE to use, alter, copy, sell, and especially ENHANCE
 *
 * Painstakingly ported from John Dyers' excellent work on his own color picker based on the Prototype framework.
 *
 * John Dyers' website: (http://johndyer.name)
 * Color Picker page:   (http://johndyer.name/post/2007/09/PhotoShop-like-JavaScript-Color-Picker.aspx)
 *
 */
(function($, version)
{
  Math.precision = function(value, precision)
    {
      if (precision === undefined) precision = 0;
      return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
    };
  var Slider = // encapsulate slider functionality for the ColorMap and ColorBar - could be useful to use a jQuery UI draggable for this with certain extensions
      function(bar, options)
      {
        var $this = this, // private properties, methods, and events - keep these variables and classes invisible to outside code
          arrow = bar.find('img:first'), // the arrow image to drag
          minX = 0,
          maxX = 100,
          rangeX = 100,
          minY = 0,
          maxY = 100,
          rangeY = 100,
          x = 0,
          y = 0,
          offset,
          timeout,
          changeEvents = new Array(),
          fireChangeEvents =
            function(context)
            {
              for (var i = 0; i < changeEvents.length; i++) changeEvents[i].call($this, $this, context);
            },
          mouseDown = // bind the mousedown to the bar not the arrow for quick snapping to the clicked location
            function(e)
            {
              var off = bar.offset();
              offset = { l: off.left | 0, t: off.top | 0 };
              clearTimeout(timeout);
              timeout = setTimeout( // using setTimeout for visual updates - once the style is updated the browser will re-render internally allowing the next Javascript to run
                function()
                {
                  setValuesFromMousePosition.call($this, e);
                }, 0);
              // Bind mousemove and mouseup event to the document so it responds when dragged of of the bar - we will unbind these when on mouseup to save processing
              $(document).bind('mousemove', mouseMove).bind('mouseup', mouseUp);
              e.preventDefault(); // don't try to select anything or drag the image to the desktop
            },
          mouseMove = // set the values as the mouse moves
            function(e)
            {
              clearTimeout(timeout);
              timeout = setTimeout(
                function()
                {
                  setValuesFromMousePosition.call($this, e);
                }, 0);
              e.stopPropagation();
              e.preventDefault();
              return false;
            },
          mouseUp = // unbind the document events - they aren't needed when not dragging
            function(e)
            {
              $(document).unbind('mouseup', mouseUp).unbind('mousemove', mouseMove);
              e.stopPropagation();
              e.preventDefault();
              return false;
            },
          setValuesFromMousePosition = // calculate mouse position and set value within the current range
            function(e)
            {
              var locX = e.pageX - offset.l,
                  locY = e.pageY - offset.t,
                  barW = bar.w, // local copies for YUI compressor
                  barH = bar.h;
              // keep the arrow within the bounds of the bar
              if (locX < 0) locX = 0;
              else if (locX > barW) locX = barW;
              if (locY < 0) locY = 0;
              else if (locY > barH) locY = barH;
              val.call($this, 'xy', { x: ((locX / barW) * rangeX) + minX, y: ((locY / barH) * rangeY) + minY });
            },
          draw =
            function()
            {
              var arrowOffsetX = 0,
                arrowOffsetY = 0,
                barW = bar.w,
                barH = bar.h,
                arrowW = arrow.w,
                arrowH = arrow.h;
              setTimeout(
                function()
                {
                  if (rangeX > 0) // range is greater than zero
                  {
                    // constrain to bounds
                    if (x == maxX) arrowOffsetX = barW;
                    else arrowOffsetX = ((x / rangeX) * barW) | 0;
                  }
                  if (rangeY > 0) // range is greater than zero
                  {
                    // constrain to bounds
                    if (y == maxY) arrowOffsetY = barH;
                    else arrowOffsetY = ((y / rangeY) * barH) | 0;
                  }
                  // if arrow width is greater than bar width, center arrow and prevent horizontal dragging
                  if (arrowW >= barW) arrowOffsetX = (barW >> 1) - (arrowW >> 1); // number >> 1 - superfast bitwise divide by two and truncate (move bits over one bit discarding lowest)
                  else arrowOffsetX -= arrowW >> 1;
                  // if arrow height is greater than bar height, center arrow and prevent vertical dragging
                  if (arrowH >= barH) arrowOffsetY = (barH >> 1) - (arrowH >> 1);
                  else arrowOffsetY -= arrowH >> 1;
                  // set the arrow position based on these offsets
                  arrow.css({ left: arrowOffsetX + 'px', top: arrowOffsetY + 'px' });
                }, 0);
            },
          val =
            function(name, value, context)
            {
              var set = value !== undefined;
              if (!set)
              {
                if (name === undefined || name == null) name = 'xy';
                switch (name.toLowerCase())
                {
                  case 'x': return x;
                  case 'y': return y;
                  case 'xy':
                  default: return { x: x, y: y };
                }
              }
              if (context != null && context == $this) return;
              var changed = false,
                  newX,
                  newY;
              if (name == null) name = 'xy';
              switch (name.toLowerCase())
              {
                case 'x':
                  newX = value && (value.x && value.x | 0 || value | 0) || 0;
                  break;
                case 'y':
                  newY = value && (value.y && value.y | 0 || value | 0) || 0;
                  break;
                case 'xy':
                default:
                  newX = value && value.x && value.x | 0 || 0;
                  newY = value && value.y && value.y | 0 || 0;
                  break;
              }
              if (newX != null)
              {
                if (newX < minX) newX = minX;
                else if (newX > maxX) newX = maxX;
                if (x != newX)
                {
                  x = newX;
                  changed = true;
                }
              }
              if (newY != null)
              {
                if (newY < minY) newY = minY;
                else if (newY > maxY) newY = maxY;
                if (y != newY)
                {
                  y = newY;
                  changed = true;
                }
              }
              changed && fireChangeEvents.call($this, context || $this);
            },
          range =
            function (name, value)
            {
              var set = value !== undefined;
              if (!set)
              {
                if (name === undefined || name == null) name = 'all';
                switch (name.toLowerCase())
                {
                  case 'minx': return minX;
                  case 'maxx': return maxX;
                  case 'rangex': return { minX: minX, maxX: maxX, rangeX: rangeX };
                  case 'miny': return minY;
                  case 'maxy': return maxY;
                  case 'rangey': return { minY: minY, maxY: maxY, rangeY: rangeY };
                  case 'all':
                  default: return { minX: minX, maxX: maxX, rangeX: rangeX, minY: minY, maxY: maxY, rangeY: rangeY };
                }
              }
              var changed = false,
                  newMinX,
                  newMaxX,
                  newMinY,
                  newMaxY;
              if (name == null) name = 'all';
              switch (name.toLowerCase())
              {
                case 'minx':
                  newMinX = value && (value.minX && value.minX | 0 || value | 0) || 0;
                  break;
                case 'maxx':
                  newMaxX = value && (value.maxX && value.maxX | 0 || value | 0) || 0;
                  break;
                case 'rangex':
                  newMinX = value && value.minX && value.minX | 0 || 0;
                  newMaxX = value && value.maxX && value.maxX | 0 || 0;
                  break;
                case 'miny':
                  newMinY = value && (value.minY && value.minY | 0 || value | 0) || 0;
                  break;
                case 'maxy':
                  newMaxY = value && (value.maxY && value.maxY | 0 || value | 0) || 0;
                  break;
                case 'rangey':
                  newMinY = value && value.minY && value.minY | 0 || 0;
                  newMaxY = value && value.maxY && value.maxY | 0 || 0;
                  break;
                case 'all':
                default:
                  newMinX = value && value.minX && value.minX | 0 || 0;
                  newMaxX = value && value.maxX && value.maxX | 0 || 0;
                  newMinY = value && value.minY && value.minY | 0 || 0;
                  newMaxY = value && value.maxY && value.maxY | 0 || 0;
                  break;
              }
              if (newMinX != null && minX != newMinX)
              {
                minX = newMinX;
                rangeX = maxX - minX;
              }
              if (newMaxX != null && maxX != newMaxX)
              {
                maxX = newMaxX;
                rangeX = maxX - minX;
              }
              if (newMinY != null && minY != newMinY)
              {
                minY = newMinY;
                rangeY = maxY - minY;
              }
              if (newMaxY != null && maxY != newMaxY)
              {
                maxY = newMaxY;
                rangeY = maxY - minY;
              }
            },
          bind =
            function (callback)
            {
              if ($.isFunction(callback)) changeEvents.push(callback);
            },
          unbind =
            function (callback)
            {
              if (!$.isFunction(callback)) return;
              var i;
              while ((i = $.inArray(callback, changeEvents)) != -1) changeEvents.splice(i, 1);
            },
          destroy =
            function()
            {
              // unbind all possible events and null objects
              $(document).unbind('mouseup', mouseUp).unbind('mousemove', mouseMove);
              bar.unbind('mousedown', mouseDown);
              bar = null;
              arrow = null;
              changeEvents = null;
            };
        $.extend(true, $this, // public properties, methods, and event bindings - these we need to access from other controls
          {
            val: val,
            range: range,
            bind: bind,
            unbind: unbind,
            destroy: destroy
          });
        // initialize this control
        arrow.src = options.arrow && options.arrow.image;
        arrow.w = options.arrow && options.arrow.width || arrow.width();
        arrow.h = options.arrow && options.arrow.height || arrow.height();
        bar.w = options.map && options.map.width || bar.width();
        bar.h = options.map && options.map.height || bar.height();
        // bind mousedown event
        bar.bind('mousedown', mouseDown);
        bind.call($this, draw);
      },
    ColorValuePicker = // controls for all the input elements for the typing in color values
      function(picker, color, bindedHex, alphaPrecision)
      {
        var $this = this, // private properties and methods
          inputs = picker.find('td.Text input'),
          red = inputs.eq(3),
          green = inputs.eq(4),
          blue = inputs.eq(5),
          alpha = inputs.length > 7 ? inputs.eq(6) : null,
          hue = inputs.eq(0),
          saturation = inputs.eq(1),
          value = inputs.eq(2),
          hex = inputs.eq(inputs.length > 7 ? 7 : 6),
          ahex = inputs.length > 7 ? inputs.eq(8) : null,
          keyDown = // input box key down - use arrows to alter color
            function(e)
            {
              if (e.target.value == '' && e.target != hex.get(0) && (bindedHex != null && e.target != bindedHex.get(0) || bindedHex == null)) return;
              if (!validateKey(e)) return e;
              switch (e.target)
              {
                case red.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      red.val(setValueInRange.call($this, (red.val() << 0) + 1, 0, 255));
                      color.val('r', red.val(), e.target);
                      return false;
                    case 40:
                      red.val(setValueInRange.call($this, (red.val() << 0) - 1, 0, 255));
                      color.val('r', red.val(), e.target);
                      return false;
                  }
                  break;
                case green.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      green.val(setValueInRange.call($this, (green.val() << 0) + 1, 0, 255));
                      color.val('g', green.val(), e.target);
                      return false;
                    case 40:
                      green.val(setValueInRange.call($this, (green.val() << 0) - 1, 0, 255));
                      color.val('g', green.val(), e.target);
                      return false;
                  }
                  break;
                case blue.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      blue.val(setValueInRange.call($this, (blue.val() << 0) + 1, 0, 255));
                      color.val('b', blue.val(), e.target);
                      return false;
                    case 40:
                      blue.val(setValueInRange.call($this, (blue.val() << 0) - 1, 0, 255));
                      color.val('b', blue.val(), e.target);
                      return false;
                  }
                  break;
                case alpha && alpha.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      alpha.val(setValueInRange.call($this, parseFloat(alpha.val()) + 1, 0, 100));
                      color.val('a', Math.precision((alpha.val() * 255) / 100, alphaPrecision), e.target);
                      return false;
                    case 40:
                      alpha.val(setValueInRange.call($this, parseFloat(alpha.val()) - 1, 0, 100));
                      color.val('a', Math.precision((alpha.val() * 255) / 100, alphaPrecision), e.target);
                      return false;
                  }
                  break;
                case hue.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      hue.val(setValueInRange.call($this, (hue.val() << 0) + 1, 0, 360));
                      color.val('h', hue.val(), e.target);
                      return false;
                    case 40:
                      hue.val(setValueInRange.call($this, (hue.val() << 0) - 1, 0, 360));
                      color.val('h', hue.val(), e.target);
                      return false;
                  }
                  break;
                case saturation.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      saturation.val(setValueInRange.call($this, (saturation.val() << 0) + 1, 0, 100));
                      color.val('s', saturation.val(), e.target);
                      return false;
                    case 40:
                      saturation.val(setValueInRange.call($this, (saturation.val() << 0) - 1, 0, 100));
                      color.val('s', saturation.val(), e.target);
                      return false;
                  }
                  break;
                case value.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      value.val(setValueInRange.call($this, (value.val() << 0) + 1, 0, 100));
                      color.val('v', value.val(), e.target);
                      return false;
                    case 40:
                      value.val(setValueInRange.call($this, (value.val() << 0) - 1, 0, 100));
                      color.val('v', value.val(), e.target);
                      return false;
                  }
                  break;
              }
            },
          keyUp = // input box key up - validate value and set color
            function(e)
            {
              if (e.target.value == '' && e.target != hex.get(0) && (bindedHex != null && e.target != bindedHex.get(0) || bindedHex == null)) return;
              if (!validateKey(e)) return e;
              switch (e.target)
              {
                case red.get(0):
                  red.val(setValueInRange.call($this, red.val(), 0, 255));
                  color.val('r', red.val(), e.target);
                  break;
                case green.get(0):
                  green.val(setValueInRange.call($this, green.val(), 0, 255));
                  color.val('g', green.val(), e.target);
                  break;
                case blue.get(0):
                  blue.val(setValueInRange.call($this, blue.val(), 0, 255));
                  color.val('b', blue.val(), e.target);
                  break;
                case alpha && alpha.get(0):
                  alpha.val(setValueInRange.call($this, alpha.val(), 0, 100));
                  color.val('a', Math.precision((alpha.val() * 255) / 100, alphaPrecision), e.target);
                  break;
                case hue.get(0):
                  hue.val(setValueInRange.call($this, hue.val(), 0, 360));
                  color.val('h', hue.val(), e.target);
                  break;
                case saturation.get(0):
                  saturation.val(setValueInRange.call($this, saturation.val(), 0, 100));
                  color.val('s', saturation.val(), e.target);
                  break;
                case value.get(0):
                  value.val(setValueInRange.call($this, value.val(), 0, 100));
                  color.val('v', value.val(), e.target);
                  break;
                case hex.get(0):
                  hex.val(hex.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 6));
                  bindedHex && bindedHex.val(hex.val());
                  color.val('hex', hex.val() != '' ? hex.val() : null, e.target);
                  break;
                case bindedHex && bindedHex.get(0):
                  bindedHex.val(bindedHex.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 6));
                  hex.val(bindedHex.val());
                  color.val('hex', bindedHex.val() != '' ? bindedHex.val() : null, e.target);
                  break;
                case ahex && ahex.get(0):
                  ahex.val(ahex.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 2));
                  color.val('a', ahex.val() != null ? parseInt(ahex.val(), 16) : null, e.target);
                  break;
              }
            },
          blur = // input box blur - reset to original if value empty
            function(e)
            {
              if (color.val() != null)
              {
                switch (e.target)
                {
                  case red.get(0): red.val(color.val('r')); break;
                  case green.get(0): green.val(color.val('g')); break;
                  case blue.get(0): blue.val(color.val('b')); break;
                  case alpha && alpha.get(0): alpha.val(Math.precision((color.val('a') * 100) / 255, alphaPrecision)); break;
                  case hue.get(0): hue.val(color.val('h')); break;
                  case saturation.get(0): saturation.val(color.val('s')); break;
                  case value.get(0): value.val(color.val('v')); break;
                  case hex.get(0):
                  case bindedHex && bindedHex.get(0):
                    hex.val(color.val('hex'));
                    bindedHex && bindedHex.val(color.val('hex'));
                    break;
                  case ahex && ahex.get(0): ahex.val(color.val('ahex').substring(6)); break;
                }
              }
            },
          validateKey = // validate key
            function(e)
            {
              switch(e.keyCode)
              {
                case 9:
                case 16:
                case 29:
                case 37:
                case 39:
                  return false;
                case 'c'.charCodeAt():
                case 'v'.charCodeAt():
                  if (e.ctrlKey) return false;
              }
              return true;
            },
          setValueInRange = // constrain value within range
            function(value, min, max)
            {
              if (value == '' || isNaN(value)) return min;
              if (value > max) return max;
              if (value < min) return min;
              return value;
            },
          colorChanged =
            function(ui, context)
            {
              var all = ui.val('all');
              if (context != red.get(0)) red.val(all != null ? all.r : '');
              if (context != green.get(0)) green.val(all != null ? all.g : '');
              if (context != blue.get(0)) blue.val(all != null ? all.b : '');
              if (alpha && context != alpha.get(0)) alpha.val(all != null ? Math.precision((all.a * 100) / 255, alphaPrecision) : '');
              if (context != hue.get(0)) hue.val(all != null ? all.h : '');
              if (context != saturation.get(0)) saturation.val(all != null ? all.s : '');
              if (context != value.get(0)) value.val(all != null ? all.v : '');
              if (context != hex.get(0) && (bindedHex && context != bindedHex.get(0) || !bindedHex)) hex.val(all != null ? all.hex : '');
              if (bindedHex && context != bindedHex.get(0) && context != hex.get(0)) bindedHex.val(all != null ? all.hex : '');
              if (ahex && context != ahex.get(0)) ahex.val(all != null ? all.ahex.substring(6) : '');
            },
          destroy =
            function()
            {
              // unbind all events and null objects
              red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).add(hex).add(bindedHex).add(ahex).unbind('keyup', keyUp).unbind('blur', blur);
              red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).unbind('keydown', keyDown);
              color.unbind(colorChanged);
              red = null;
              green = null;
              blue = null;
              alpha = null;
              hue = null;
              saturation = null;
              value = null;
              hex = null;
              ahex = null;
            };
        $.extend(true, $this, // public properties and methods
          {
            destroy: destroy
          });
        red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).add(hex).add(bindedHex).add(ahex).bind('keyup', keyUp).bind('blur', blur);
        red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).bind('keydown', keyDown);
        color.bind(colorChanged);
      };
  $.jPicker =
    {
      List: [], // array holding references to each active instance of the control
      Color: // color object - we will be able to assign by any color space type or retrieve any color space info
             // we want this public so we can optionally assign new color objects to initial values using inputs other than a string hex value (also supported)
        function(init)
        {
          var $this = this,
            r,
            g,
            b,
            a,
            h,
            s,
            v,
            changeEvents = new Array(),
            fireChangeEvents = 
              function(context)
              {
                for (var i = 0; i < changeEvents.length; i++) changeEvents[i].call($this, $this, context);
              },
            val =
              function(name, value, context)
              {
                // Kind of ugly
                var set = Boolean(value);
                if (set && value.ahex === "") value.ahex = "00000000";
                if (!set)
                {
                  if (name === undefined || name == null || name == '') name = 'all';
                  if (r == null) return null;
                  switch (name.toLowerCase())
                  {
                    case 'ahex': return ColorMethods.rgbaToHex({ r: r, g: g, b: b, a: a });
                    case 'hex': return val('ahex').substring(0, 6);
                    case 'all': return { r: r, g: g, b: b, a: a, h: h, s: s, v: v, hex: val.call($this, 'hex'), ahex: val.call($this, 'ahex') };
                    default:
                      var ret={};
                      for (var i = 0; i < name.length; i++)
                      {
                        switch (name.charAt(i))
                        {
                          case 'r':
                            if (name.length == 1) ret = r;
                            else ret.r = r;
                            break;
                          case 'g':
                            if (name.length == 1) ret = g;
                            else ret.g = g;
                            break;
                          case 'b':
                            if (name.length == 1) ret = b;
                            else ret.b = b;
                            break;
                          case 'a':
                            if (name.length == 1) ret = a;
                            else ret.a = a;
                            break;
                          case 'h':
                            if (name.length == 1) ret = h;
                            else ret.h = h;
                            break;
                          case 's':
                            if (name.length == 1) ret = s;
                            else ret.s = s;
                            break;
                          case 'v':
                            if (name.length == 1) ret = v;
                            else ret.v = v;
                            break;
                        }
                      }
                      return ret == {} ? val.call($this, 'all') : ret;
                      break;
                  }
                }
                if (context != null && context == $this) return;
                var changed = false;
                if (name == null) name = '';
                if (value == null)
                {
                  if (r != null)
                  {
                    r = null;
                    changed = true;
                  }
                  if (g != null)
                  {
                    g = null;
                    changed = true;
                  }
                  if (b != null)
                  {
                    b = null;
                    changed = true;
                  }
                  if (a != null)
                  {
                    a = null;
                    changed = true;
                  }
                  if (h != null)
                  {
                    h = null;
                    changed = true;
                  }
                  if (s != null)
                  {
                    s = null;
                    changed = true;
                  }
                  if (v != null)
                  {
                    v = null;
                    changed = true;
                  }
                  changed && fireChangeEvents.call($this, context || $this);
                  return;
                }
                switch (name.toLowerCase())
                {
                  case 'ahex':
                  case 'hex':
                    var ret = ColorMethods.hexToRgba(value && (value.ahex || value.hex) || value || 'none');

                    val.call($this, 'rgba', { r: ret.r, g: ret.g, b: ret.b, a: name == 'ahex' ? ret.a : a != null ? a : 255 }, context);
                    break;
                  default:
                    if (value && (value.ahex != null || value.hex != null))
                    {
                      val.call($this, 'ahex', value.ahex || value.hex || '00000000', context);
                      return;
                    }
                    var newV = {}, rgb = false, hsv = false;
                    if (value.r !== undefined && !name.indexOf('r') == -1) name += 'r';
                    if (value.g !== undefined && !name.indexOf('g') == -1) name += 'g';
                    if (value.b !== undefined && !name.indexOf('b') == -1) name += 'b';
                    if (value.a !== undefined && !name.indexOf('a') == -1) name += 'a';
                    if (value.h !== undefined && !name.indexOf('h') == -1) name += 'h';
                    if (value.s !== undefined && !name.indexOf('s') == -1) name += 's';
                    if (value.v !== undefined && !name.indexOf('v') == -1) name += 'v';
                    for (var i = 0; i < name.length; i++)
                    {
                      switch (name.charAt(i))
                      {
                        case 'r':
                          if (hsv) continue;
                          rgb = true;
                          newV.r = value && value.r && value.r | 0 || value && value | 0 || 0;
                          if (newV.r < 0) newV.r = 0;
                          else if (newV.r > 255) newV.r = 255;
                          if (r != newV.r)
                          {
                            r = newV.r;
                            changed = true;
                          }
                          break;
                        case 'g':
                          if (hsv) continue;
                          rgb = true;
                          newV.g = value && value.g && value.g | 0 || value && value | 0 || 0;
                          if (newV.g < 0) newV.g = 0;
                          else if (newV.g > 255) newV.g = 255;
                          if (g != newV.g)
                          {
                            g = newV.g;
                            changed = true;
                          }
                          break;
                        case 'b':
                          if (hsv) continue;
                          rgb = true;
                          newV.b = value && value.b && value.b | 0 || value && value | 0 || 0;
                          if (newV.b < 0) newV.b = 0;
                          else if (newV.b > 255) newV.b = 255;
                          if (b != newV.b)
                          {
                            b = newV.b;
                            changed = true;
                          }
                          break;
                        case 'a':
                          newV.a = value && value.a != null ? value.a | 0 : value != null ? value | 0 : 255;
                          if (newV.a < 0) newV.a = 0;
                          else if (newV.a > 255) newV.a = 255;
                          if (a != newV.a)
                          {
                            a = newV.a;
                            changed = true;
                          }
                          break;
                        case 'h':
                          if (rgb) continue;
                          hsv = true;
                          newV.h = value && value.h && value.h | 0 || value && value | 0 || 0;
                          if (newV.h < 0) newV.h = 0;
                          else if (newV.h > 360) newV.h = 360;
                          if (h != newV.h)
                          {
                            h = newV.h;
                            changed = true;
                          }
                          break;
                        case 's':
                          if (rgb) continue;
                          hsv = true;
                          newV.s = value && value.s != null ? value.s | 0 : value != null ? value | 0 : 100;
                          if (newV.s < 0) newV.s = 0;
                          else if (newV.s > 100) newV.s = 100;
                          if (s != newV.s)
                          {
                            s = newV.s;
                            changed = true;
                          }
                          break;
                        case 'v':
                          if (rgb) continue;
                          hsv = true;
                          newV.v = value && value.v != null ? value.v | 0 : value != null ? value | 0 : 100;
                          if (newV.v < 0) newV.v = 0;
                          else if (newV.v > 100) newV.v = 100;
                          if (v != newV.v)
                          {
                            v = newV.v;
                            changed = true;
                          }
                          break;
                      }
                    }
                    if (changed)
                    {
                      if (rgb)
                      {
                        r = r || 0;
                        g = g || 0;
                        b = b || 0;
                        var ret = ColorMethods.rgbToHsv({ r: r, g: g, b: b });
                        h = ret.h;
                        s = ret.s;
                        v = ret.v;
                      }
                      else if (hsv)
                      {
                        h = h || 0;
                        s = s != null ? s : 100;
                        v = v != null ? v : 100;
                        var ret = ColorMethods.hsvToRgb({ h: h, s: s, v: v });
                        r = ret.r;
                        g = ret.g;
                        b = ret.b;
                      }
                      a = a != null ? a : 255;
                      fireChangeEvents.call($this, context || $this);
                    }
                    break;
                }
              },
            bind =
              function(callback)
              {
                if ($.isFunction(callback)) changeEvents.push(callback);
              },
            unbind =
              function(callback)
              {
                if (!$.isFunction(callback)) return;
                var i;
                while ((i = $.inArray(callback, changeEvents)) != -1) changeEvents.splice(i, 1);
              },
            destroy =
              function()
              {
                changeEvents = null;
              }
          $.extend(true, $this, // public properties and methods
            {
              val: val,
              bind: bind,
              unbind: unbind,
              destroy: destroy
            });
          if (init)
          {
            if (init.ahex != null) val('ahex', init);
            else if (init.hex != null) val((init.a != null ? 'a' : '') + 'hex', init.a != null ? { ahex: init.hex + ColorMethods.intToHex(init.a) } : init);
            else if (init.r != null && init.g != null && init.b != null) val('rgb' + (init.a != null ? 'a' : ''), init);
            else if (init.h != null && init.s != null && init.v != null) val('hsv' + (init.a != null ? 'a' : ''), init);
          }
        },
      ColorMethods: // color conversion methods  - make public to give use to external scripts
        {
          hexToRgba:
            function(hex)
            {
              if (hex === '' || hex === 'none') return { r: null, g: null, b: null, a: null };
              hex = this.validateHex(hex);
              var r = '00', g = '00', b = '00', a = '255';
              if (hex.length == 6) hex += 'ff';
              if (hex.length > 6)
              {
                r = hex.substring(0, 2);
                g = hex.substring(2, 4);
                b = hex.substring(4, 6);
                a = hex.substring(6, hex.length);
              }
              else
              {
                if (hex.length > 4)
                {
                  r = hex.substring(4, hex.length);
                  hex = hex.substring(0, 4);
                }
                if (hex.length > 2)
                {
                  g = hex.substring(2, hex.length);
                  hex = hex.substring(0, 2);
                }
                if (hex.length > 0) b = hex.substring(0, hex.length);
              }
              return { r: this.hexToInt(r), g: this.hexToInt(g), b: this.hexToInt(b), a: this.hexToInt(a) };
            },
          validateHex:
            function(hex)
            {
              //if (typeof hex === "object") return "";
              hex = hex.toLowerCase().replace(/[^a-f0-9]/g, '');
              if (hex.length > 8) hex = hex.substring(0, 8);
              return hex;
            },
          rgbaToHex:
            function(rgba)
            {
              return this.intToHex(rgba.r) + this.intToHex(rgba.g) + this.intToHex(rgba.b) + this.intToHex(rgba.a);
            },
          intToHex:
            function(dec)
            {
              var result = (dec | 0).toString(16);
              if (result.length == 1) result = ('0' + result);
              return result.toLowerCase();
            },
          hexToInt:
            function(hex)
            {
              return parseInt(hex, 16);
            },
          rgbToHsv:
            function(rgb)
            {
              var r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255, hsv = { h: 0, s: 0, v: 0 }, min = 0, max = 0, delta;
              if (r >= g && r >= b)
              {
                max = r;
                min = g > b ? b : g;
              }
              else if (g >= b && g >= r)
              {
                max = g;
                min = r > b ? b : r;
              }
              else
              {
                max = b;
                min = g > r ? r : g;
              }
              hsv.v = max;
              hsv.s = max ? (max - min) / max : 0;
              if (!hsv.s) hsv.h = 0;
              else
              {
                delta = max - min;
                if (r == max) hsv.h = (g - b) / delta;
                else if (g == max) hsv.h = 2 + (b - r) / delta;
                else hsv.h = 4 + (r - g) / delta;
                hsv.h = parseInt(hsv.h * 60);
                if (hsv.h < 0) hsv.h += 360;
              }
              hsv.s = (hsv.s * 100) | 0;
              hsv.v = (hsv.v * 100) | 0;
              return hsv;
            },
          hsvToRgb:
            function(hsv)
            {
              var rgb = { r: 0, g: 0, b: 0, a: 100 }, h = hsv.h, s = hsv.s, v = hsv.v;
              if (s == 0)
              {
                if (v == 0) rgb.r = rgb.g = rgb.b = 0;
                else rgb.r = rgb.g = rgb.b = (v * 255 / 100) | 0;
              }
              else
              {
                if (h == 360) h = 0;
                h /= 60;
                s = s / 100;
                v = v / 100;
                var i = h | 0,
                    f = h - i,
                    p = v * (1 - s),
                    q = v * (1 - (s * f)),
                    t = v * (1 - (s * (1 - f)));
                switch (i)
                {
                  case 0:
                    rgb.r = v;
                    rgb.g = t;
                    rgb.b = p;
                    break;
                  case 1:
                    rgb.r = q;
                    rgb.g = v;
                    rgb.b = p;
                    break;
                  case 2:
                    rgb.r = p;
                    rgb.g = v;
                    rgb.b = t;
                    break;
                  case 3:
                    rgb.r = p;
                    rgb.g = q;
                    rgb.b = v;
                    break;
                  case 4:
                    rgb.r = t;
                    rgb.g = p;
                    rgb.b = v;
                    break;
                  case 5:
                    rgb.r = v;
                    rgb.g = p;
                    rgb.b = q;
                    break;
                }
                rgb.r = (rgb.r * 255) | 0;
                rgb.g = (rgb.g * 255) | 0;
                rgb.b = (rgb.b * 255) | 0;
              }
              return rgb;
            }
        }
    };
  var Color = $.jPicker.Color, List = $.jPicker.List, ColorMethods = $.jPicker.ColorMethods; // local copies for YUI compressor
  $.fn.jPicker =
    function(options)
    {
      var $arguments = arguments;
      return this.each(
        function()
        {
          var $this = this, settings = $.extend(true, {}, $.fn.jPicker.defaults, options); // local copies for YUI compressor
          if ($($this).get(0).nodeName.toLowerCase() == 'input') // Add color picker icon if binding to an input element and bind the events to the input
          {
            $.extend(true, settings,
              {
                window:
                {
                  bindToInput: true,
                  expandable: true,
                  input: $($this)
                }
              });
            if($($this).val()=='')
            {
              settings.color.active = new Color({ hex: null });
              settings.color.current = new Color({ hex: null });
            }
            else if (ColorMethods.validateHex($($this).val()))
            {
              settings.color.active = new Color({ hex: $($this).val(), a: settings.color.active.val('a') });
              settings.color.current = new Color({ hex: $($this).val(), a: settings.color.active.val('a') });
            }
          }
          if (settings.window.expandable)
            $($this).after('<span class="jPicker"><span class="Icon"><span class="Color">&nbsp;</span><span class="Alpha">&nbsp;</span><span class="Image" title="Click To Open Color Picker">&nbsp;</span><span class="Container">&nbsp;</span></span></span>');
          else settings.window.liveUpdate = false; // Basic control binding for inline use - You will need to override the liveCallback or commitCallback function to retrieve results
          var isLessThanIE7 = parseFloat(navigator.appVersion.split('MSIE')[1]) < 7 && document.body.filters, // needed to run the AlphaImageLoader function for IE6
            container = null,
            colorMapDiv = null,
            colorBarDiv = null,
            colorMapL1 = null, // different layers of colorMap and colorBar
            colorMapL2 = null,
            colorMapL3 = null,
            colorBarL1 = null,
            colorBarL2 = null,
            colorBarL3 = null,
            colorBarL4 = null,
            colorBarL5 = null,
            colorBarL6 = null,
            colorMap = null, // color maps
            colorBar = null,
            colorPicker = null,
            elementStartX = null, // Used to record the starting css positions for dragging the control
            elementStartY = null,
            pageStartX = null, // Used to record the mousedown coordinates for dragging the control
            pageStartY = null,
            activePreview = null, // color boxes above the radio buttons
            currentPreview = null,
            okButton = null,
            cancelButton = null,
            grid = null, // preset colors grid
            iconColor = null, // iconColor for popup icon
            iconAlpha = null, // iconAlpha for popup icon
            iconImage = null, // iconImage popup icon
            moveBar = null, // drag bar
            setColorMode = // set color mode and update visuals for the new color mode
              function(colorMode)
              {
                var active = color.active, // local copies for YUI compressor
                  clientPath = images.clientPath,
                  hex = active.val('hex'),
                  rgbMap,
                  rgbBar;
                settings.color.mode = colorMode;
                switch (colorMode)
                {
                  case 'h':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setImgLoc.call($this, colorMapL1, 0);
                        setAlpha.call($this, colorMapL1, 100);
                        setImgLoc.call($this, colorMapL2, 260);
                        setAlpha.call($this, colorMapL2, 100);
                        setBG.call($this, colorBarDiv, 'transparent');
                        setImgLoc.call($this, colorBarL1, 0);
                        setAlpha.call($this, colorBarL1, 100);
                        setImgLoc.call($this, colorBarL2, 260);
                        setAlpha.call($this, colorBarL2, 100);
                        setImgLoc.call($this, colorBarL3, 260);
                        setAlpha.call($this, colorBarL3, 100);
                        setImgLoc.call($this, colorBarL4, 260);
                        setAlpha.call($this, colorBarL4, 100);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 100, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 360 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('s'), y: 100 - active.val('v') }, colorMap);
                    colorBar.val('y', 360 - active.val('h'), colorBar);
                    break;
                  case 's':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setImgLoc.call($this, colorMapL1, -260);
                        setImgLoc.call($this, colorMapL2, -520);
                        setImgLoc.call($this, colorBarL1, -260);
                        setImgLoc.call($this, colorBarL2, -520);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 360, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 100 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('h'), y: 100 - active.val('v') }, colorMap);
                    colorBar.val('y', 100 - active.val('s'), colorBar);
                    break;
                  case 'v':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, '000000');
                        setImgLoc.call($this, colorMapL1, -780);
                        setImgLoc.call($this, colorMapL2, 260);
                        setBG.call($this, colorBarDiv, hex);
                        setImgLoc.call($this, colorBarL1, -520);
                        setImgLoc.call($this, colorBarL2, 260);
                        setAlpha.call($this, colorBarL2, 100);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 360, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 100 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('h'), y: 100 - active.val('s') }, colorMap);
                    colorBar.val('y', 100 - active.val('v'), colorBar);
                    break;
                  case 'r':
                    rgbMap = -1040;
                    rgbBar = -780;
                    colorMap.range('all', { minX: 0, maxX: 255, minY: 0, maxY: 255 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('b'), y: 255 - active.val('g') }, colorMap);
                    colorBar.val('y', 255 - active.val('r'), colorBar);
                    break;
                  case 'g':
                    rgbMap = -1560;
                    rgbBar = -1820;
                    colorMap.range('all', { minX: 0, maxX: 255, minY: 0, maxY: 255 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('b'), y: 255 - active.val('r') }, colorMap);
                    colorBar.val('y', 255 - active.val('g'), colorBar);
                    break;
                  case 'b':
                    rgbMap = -2080;
                    rgbBar = -2860;
                    colorMap.range('all', { minX: 0, maxX: 255, minY: 0, maxY: 255 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('r'), y: 255 - active.val('g') }, colorMap);
                    colorBar.val('y', 255 - active.val('b'), colorBar);
                    break;
                  case 'a':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setImgLoc.call($this, colorMapL1, -260);
                        setImgLoc.call($this, colorMapL2, -520);
                        setImgLoc.call($this, colorBarL1, 260);
                        setImgLoc.call($this, colorBarL2, 260);
                        setAlpha.call($this, colorBarL2, 100);
                        setImgLoc.call($this, colorBarL6, 0);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 360, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('h'), y: 100 - active.val('v') }, colorMap);
                    colorBar.val('y', 255 - active.val('a'), colorBar);
                    break;
                  default:
                    throw ('Invalid Mode');
                    break;
                }
                switch (colorMode)
                {
                  case 'h':
                    break;
                  case 's':
                  case 'v':
                  case 'a':
                    setTimeout(
                      function()
                      {
                        setAlpha.call($this, colorMapL1, 100);
                        setAlpha.call($this, colorBarL1, 100);
                        setImgLoc.call($this, colorBarL3, 260);
                        setAlpha.call($this, colorBarL3, 100);
                        setImgLoc.call($this, colorBarL4, 260);
                        setAlpha.call($this, colorBarL4, 100);
                      }, 0);
                    break;
                  case 'r':
                  case 'g':
                  case 'b':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setBG.call($this, colorBarDiv, 'transparent');
                        setAlpha.call($this, colorBarL1, 100);
                        setAlpha.call($this, colorMapL1, 100);
                        setImgLoc.call($this, colorMapL1, rgbMap);
                        setImgLoc.call($this, colorMapL2, rgbMap - 260);
                        setImgLoc.call($this, colorBarL1, rgbBar - 780);
                        setImgLoc.call($this, colorBarL2, rgbBar - 520);
                        setImgLoc.call($this, colorBarL3, rgbBar);
                        setImgLoc.call($this, colorBarL4, rgbBar - 260);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    break;
                }
                if (active.val('ahex') == null) return;
                activeColorChanged.call($this, active);
              },
            activeColorChanged = // Update color when user changes text values
              function(ui, context)
              {
                if (context == null || (context != colorBar && context != colorMap)) positionMapAndBarArrows.call($this, ui, context);
                setTimeout(
                  function()
                  {
                    updatePreview.call($this, ui);
                    updateMapVisuals.call($this, ui);
                    updateBarVisuals.call($this, ui);
                  }, 0);
              },
            mapValueChanged = // user has dragged the ColorMap pointer
              function(ui, context)
              {
                var active = color.active;
                if (context != colorMap && active.val() == null) return;
                var xy = ui.val('all');
                switch (settings.color.mode)
                {
                  case 'h':
                    active.val('sv', { s: xy.x, v: 100 - xy.y }, context);
                    break;
                  case 's':
                  case 'a':
                    active.val('hv', { h: xy.x, v: 100 - xy.y }, context);
                    break;
                  case 'v':
                    active.val('hs', { h: xy.x, s: 100 - xy.y }, context);
                    break;
                  case 'r':
                    active.val('gb', { g: 255 - xy.y, b: xy.x }, context);
                    break;
                  case 'g':
                    active.val('rb', { r: 255 - xy.y, b: xy.x }, context);
                    break;
                  case 'b':
                    active.val('rg', { r: xy.x, g: 255 - xy.y }, context);
                    break;
                }
              },
            colorBarValueChanged = // user has dragged the ColorBar slider
              function(ui, context)
              {
                var active = color.active;
                if (context != colorBar && active.val() == null) return;
                switch (settings.color.mode)
                {
                  case 'h':
                    active.val('h', { h: 360 - ui.val('y') }, context);
                    break;
                  case 's':
                    active.val('s', { s: 100 - ui.val('y') }, context);
                    break;
                  case 'v':
                    active.val('v', { v: 100 - ui.val('y') }, context);
                    break;
                  case 'r':
                    active.val('r', { r: 255 - ui.val('y') }, context);
                    break;
                  case 'g':
                    active.val('g', { g: 255 - ui.val('y') }, context);
                    break;
                  case 'b':
                    active.val('b', { b: 255 - ui.val('y') }, context);
                    break;
                  case 'a':
                    active.val('a', 255 - ui.val('y'), context);
                    break;
                }
              },
            positionMapAndBarArrows = // position map and bar arrows to match current color
              function(ui, context)
              {
                if (context != colorMap)
                {
                  switch (settings.color.mode)
                  {
                    case 'h':
                      var sv = ui.val('sv');
                      colorMap.val('xy', { x: sv != null ? sv.s : 100, y: 100 - (sv != null ? sv.v : 100) }, context);
                      break;
                    case 's':
                    case 'a':
                      var hv = ui.val('hv');
                      colorMap.val('xy', { x: hv && hv.h || 0, y: 100 - (hv != null ? hv.v : 100) }, context);
                      break;
                    case 'v':
                      var hs = ui.val('hs');
                      colorMap.val('xy', { x: hs && hs.h || 0, y: 100 - (hs != null ? hs.s : 100) }, context);
                      break;
                    case 'r':
                      var bg = ui.val('bg');
                      colorMap.val('xy', { x: bg && bg.b || 0, y: 255 - (bg && bg.g || 0) }, context);
                      break;
                    case 'g':
                      var br = ui.val('br');
                      colorMap.val('xy', { x: br && br.b || 0, y: 255 - (br && br.r || 0) }, context);
                      break;
                    case 'b':
                      var rg = ui.val('rg');
                      colorMap.val('xy', { x: rg && rg.r || 0, y: 255 - (rg && rg.g || 0) }, context);
                      break;
                  }
                }
                if (context != colorBar)
                {
                  switch (settings.color.mode)
                  {
                    case 'h':
                      colorBar.val('y', 360 - (ui.val('h') || 0), context);
                      break;
                    case 's':
                      var s = ui.val('s');
                      colorBar.val('y', 100 - (s != null ? s : 100), context);
                      break;
                    case 'v':
                      var v = ui.val('v');
                      colorBar.val('y', 100 - (v != null ? v : 100), context);
                      break;
                    case 'r':
                      colorBar.val('y', 255 - (ui.val('r') || 0), context);
                      break;
                    case 'g':
                      colorBar.val('y', 255 - (ui.val('g') || 0), context);
                      break;
                    case 'b':
                      colorBar.val('y', 255 - (ui.val('b') || 0), context);
                      break;
                    case 'a':
                      var a = ui.val('a');
                      colorBar.val('y', 255 - (a != null ? a : 255), context);
                      break;
                  }
                }
              },
            updatePreview =
              function(ui)
              {
                try
                {
                  var all = ui.val('all');
                  activePreview.css({ backgroundColor: all && '#' + all.hex || 'transparent' });
                  setAlpha.call($this, activePreview, all && Math.precision((all.a * 100) / 255, 4) || 0);
                }
                catch (e) { }
              },
            updateMapVisuals =
              function(ui)
              {
                switch (settings.color.mode)
                {
                  case 'h':
                    setBG.call($this, colorMapDiv, new Color({ h: ui.val('h') || 0, s: 100, v: 100 }).val('hex'));
                    break;
                  case 's':
                  case 'a':
                    var s = ui.val('s');
                    setAlpha.call($this, colorMapL2, 100 - (s != null ? s : 100));
                    break;
                  case 'v':
                    var v = ui.val('v');
                    setAlpha.call($this, colorMapL1, v != null ? v : 100);
                    break;
                  case 'r':
                    setAlpha.call($this, colorMapL2, Math.precision((ui.val('r') || 0) / 255 * 100, 4));
                    break;
                  case 'g':
                    setAlpha.call($this, colorMapL2, Math.precision((ui.val('g') || 0) / 255 * 100, 4));
                    break;
                  case 'b':
                    setAlpha.call($this, colorMapL2, Math.precision((ui.val('b') || 0) / 255 * 100));
                    break;
                }
                var a = ui.val('a');
                setAlpha.call($this, colorMapL3, Math.precision(((255 - (a || 0)) * 100) / 255, 4));
              },
            updateBarVisuals =
              function(ui)
              {
                switch (settings.color.mode)
                {
                  case 'h':
                    var a = ui.val('a');
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (a || 0)) * 100) / 255, 4));
                    break;
                  case 's':
                    var hva = ui.val('hva'),
                        saturatedColor = new Color({ h: hva && hva.h || 0, s: 100, v: hva != null ? hva.v : 100 });
                    setBG.call($this, colorBarDiv, saturatedColor.val('hex'));
                    setAlpha.call($this, colorBarL2, 100 - (hva != null ? hva.v : 100));
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (hva && hva.a || 0)) * 100) / 255, 4));
                    break;
                  case 'v':
                    var hsa = ui.val('hsa'),
                        valueColor = new Color({ h: hsa && hsa.h || 0, s: hsa != null ? hsa.s : 100, v: 100 });
                    setBG.call($this, colorBarDiv, valueColor.val('hex'));
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (hsa && hsa.a || 0)) * 100) / 255, 4));
                    break;
                  case 'r':
                  case 'g':
                  case 'b':
                    var hValue = 0, vValue = 0, rgba = ui.val('rgba');
                    if (settings.color.mode == 'r')
                    {
                      hValue = rgba && rgba.b || 0;
                      vValue = rgba && rgba.g || 0;
                    }
                    else if (settings.color.mode == 'g')
                    {
                      hValue = rgba && rgba.b || 0;
                      vValue = rgba && rgba.r || 0;
                    }
                    else if (settings.color.mode == 'b')
                    {
                      hValue = rgba && rgba.r || 0;
                      vValue = rgba && rgba.g || 0;
                    }
                    var middle = vValue > hValue ? hValue : vValue;
                    setAlpha.call($this, colorBarL2, hValue > vValue ? Math.precision(((hValue - vValue) / (255 - vValue)) * 100, 4) : 0);
                    setAlpha.call($this, colorBarL3, vValue > hValue ? Math.precision(((vValue - hValue) / (255 - hValue)) * 100, 4) : 0);
                    setAlpha.call($this, colorBarL4, Math.precision((middle / 255) * 100, 4));
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (rgba && rgba.a || 0)) * 100) / 255, 4));
                    break;
                  case 'a':
                    var a = ui.val('a');
                    setBG.call($this, colorBarDiv, ui.val('hex') || '000000');
                    setAlpha.call($this, colorBarL5, a != null ? 0 : 100);
                    setAlpha.call($this, colorBarL6, a != null ? 100 : 0);
                    break;
                }
              },
            setBG =
              function(el, c)
              {
                el.css({ backgroundColor: c && c.length == 6 && '#' + c || 'transparent' });
              },
            setImg =
              function(img, src)
              {
                if (isLessThanIE7 && (src.indexOf('AlphaBar.png') != -1 || src.indexOf('Bars.png') != -1 || src.indexOf('Maps.png') != -1))
                {
                  img.attr('pngSrc', src);
                  img.css({ backgroundImage: 'none', filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + src + '\', sizingMethod=\'scale\')' });
                }
                else img.css({ backgroundImage: 'url(\'' + src + '\')' });
              },
            setImgLoc =
              function(img, y)
              {
                img.css({ top: y + 'px' });
              },
            setAlpha =
              function(obj, alpha)
              {
                obj.css({ visibility: alpha > 0 ? 'visible' : 'hidden' });
                if (alpha > 0 && alpha < 100)
                {
                  if (isLessThanIE7)
                  {
                    var src = obj.attr('pngSrc');
                    if (src != null && (src.indexOf('AlphaBar.png') != -1 || src.indexOf('Bars.png') != -1 || src.indexOf('Maps.png') != -1))
                      obj.css({ filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + src + '\', sizingMethod=\'scale\') progid:DXImageTransform.Microsoft.Alpha(opacity=' + alpha + ')' });
                    else obj.css({ opacity: Math.precision(alpha / 100, 4) });
                  }
                  else obj.css({ opacity: Math.precision(alpha / 100, 4) });
                }
                else if (alpha == 0 || alpha == 100)
                {
                  if (isLessThanIE7)
                  {
                    var src = obj.attr('pngSrc');
                    if (src != null && (src.indexOf('AlphaBar.png') != -1 || src.indexOf('Bars.png') != -1 || src.indexOf('Maps.png') != -1))
                      obj.css({ filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + src + '\', sizingMethod=\'scale\')' });
                    else obj.css({ opacity: '' });
                  }
                  else obj.css({ opacity: '' });
                }
              },
            revertColor = // revert color to original color when opened
              function()
              {
                color.active.val('ahex', color.current.val('ahex'));
              },
            commitColor = // commit the color changes
              function()
              {
                color.current.val('ahex', color.active.val('ahex'));
              },
            radioClicked =
              function(e)
              {
                $(this).parents('tbody:first').find('input:radio[value!="'+e.target.value+'"]').removeAttr('checked');
                setColorMode.call($this, e.target.value);
              },
            currentClicked =
              function()
              {
                revertColor.call($this);
              },
            cancelClicked =
              function()
              {
                revertColor.call($this);
                settings.window.expandable && hide.call($this);
                $.isFunction(cancelCallback) && cancelCallback.call($this, color.active, cancelButton);
              },
            okClicked =
              function()
              {
                commitColor.call($this);
                settings.window.expandable && hide.call($this);
                $.isFunction(commitCallback) && commitCallback.call($this, color.active, okButton);
              },
            iconImageClicked =
              function()
              {
                show.call($this);
              },
            currentColorChanged =
              function(ui, context)
              {
                var hex = ui.val('hex');
                currentPreview.css({ backgroundColor: hex && '#' + hex || 'transparent' });
                setAlpha.call($this, currentPreview, Math.precision(((ui.val('a') || 0) * 100) / 255, 4));
              },
            expandableColorChanged =
              function(ui, context)
              {
                var hex = ui.val('hex');
                var va = ui.val('va');
                iconColor.css({ backgroundColor: hex && '#' + hex || 'transparent' });
                setAlpha.call($this, iconAlpha, Math.precision(((255 - (va && va.a || 0)) * 100) / 255, 4));
                if (settings.window.bindToInput&&settings.window.updateInputColor)
                  settings.window.input.css(
                    {
                      backgroundColor: hex && '#' + hex || 'transparent',
                      color: va == null || va.v > 75 ? '#000000' : '#ffffff'
                    });
              },
            moveBarMouseDown =
              function(e)
              {
                var element = settings.window.element, // local copies for YUI compressor
                  page = settings.window.page;
                elementStartX = parseInt(container.css('left'));
                elementStartY = parseInt(container.css('top'));
                pageStartX = e.pageX;
                pageStartY = e.pageY;
                // bind events to document to move window - we will unbind these on mouseup
                $(document).bind('mousemove', documentMouseMove).bind('mouseup', documentMouseUp);
                e.preventDefault(); // prevent attempted dragging of the column
              },
            documentMouseMove =
              function(e)
              {
                container.css({ left: elementStartX - (pageStartX - e.pageX) + 'px', top: elementStartY - (pageStartY - e.pageY) + 'px' });
                if (settings.window.expandable && !$.support.boxModel) container.prev().css({ left: container.css("left"), top: container.css("top") });
                e.stopPropagation();
                e.preventDefault();
                return false;
              },
            documentMouseUp =
              function(e)
              {
                $(document).unbind('mousemove', documentMouseMove).unbind('mouseup', documentMouseUp);
                e.stopPropagation();
                e.preventDefault();
                return false;
              },
            quickPickClicked =
              function(e)
              {
                e.preventDefault();
                e.stopPropagation();
                color.active.val('ahex', $(this).attr('title') || null, e.target);
                return false;
              },
            commitCallback = $.isFunction($arguments[1]) && $arguments[1] || null,
            liveCallback = $.isFunction($arguments[2]) && $arguments[2] || null,
            cancelCallback = $.isFunction($arguments[3]) && $arguments[3] || null,
            show =
              function()
              {
                color.current.val('ahex', color.active.val('ahex'));
                var attachIFrame = function()
                  {
                    if (!settings.window.expandable || $.support.boxModel) return;
                    var table = container.find('table:first');
                    container.before('<iframe/>');
                    container.prev().css({ width: table.width(), height: container.height(), opacity: 0, position: 'absolute', left: container.css("left"), top: container.css("top") });
                  };
                if (settings.window.expandable)
                {
                  $(document.body).children('div.jPicker.Container').css({zIndex:10});
                  container.css({zIndex:20});
                }
                switch (settings.window.effects.type)
                {
                  case 'fade':
                    container.fadeIn(settings.window.effects.speed.show, attachIFrame);
                    break;
                  case 'slide':
                    container.slideDown(settings.window.effects.speed.show, attachIFrame);
                    break;
                  case 'show':
                  default:
                    container.show(settings.window.effects.speed.show, attachIFrame);
                    break;
                }
              },
            hide =
              function()
              {
                var removeIFrame = function()
                  {
                    if (settings.window.expandable) container.css({ zIndex: 10 });
                    if (!settings.window.expandable || $.support.boxModel) return;
                    container.prev().remove();
                  };
                switch (settings.window.effects.type)
                {
                  case 'fade':
                    container.fadeOut(settings.window.effects.speed.hide, removeIFrame);
                    break;
                  case 'slide':
                    container.slideUp(settings.window.effects.speed.hide, removeIFrame);
                    break;
                  case 'show':
                  default:
                    container.hide(settings.window.effects.speed.hide, removeIFrame);
                    break;
                }
              },
            initialize =
              function()
              {
                var win = settings.window,
                    popup = win.expandable ? $($this).next().find('.Container:first') : null;
                container = win.expandable ? $('<div/>') : $($this);
                container.addClass('jPicker Container');
                if (win.expandable) container.hide();
                container.get(0).onselectstart = function(event){ if (event.target.nodeName.toLowerCase() !== 'input') return false; };
                // inject html source code - we are using a single table for this control - I know tables are considered bad, but it takes care of equal height columns and
                // this control really is tabular data, so I believe it is the right move
                var all = color.active.val('all');
                if (win.alphaPrecision < 0) win.alphaPrecision = 0;
                else if (win.alphaPrecision > 2) win.alphaPrecision = 2;
                var controlHtml='<table class="jPicker" cellpadding="0" cellspacing="0"><tbody>' + (win.expandable ? '<tr><td class="Move" colspan="5">&nbsp;</td></tr>' : '') + '<tr><td rowspan="9"><h2 class="Title">' + (win.title || localization.text.title) + '</h2><div class="Map"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><img src="' + images.clientPath + images.colorMap.arrow.file + '" class="Arrow"/></div></td><td rowspan="9"><div class="Bar"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><span class="Map4">&nbsp;</span><span class="Map5">&nbsp;</span><span class="Map6">&nbsp;</span><img src="' + images.clientPath + images.colorBar.arrow.file + '" class="Arrow"/></div></td><td colspan="2" class="Preview">' + localization.text.newColor + '<div><span class="Active" title="' + localization.tooltips.colors.newColor + '">&nbsp;</span><span class="Current" title="' + localization.tooltips.colors.currentColor + '">&nbsp;</span></div>' + localization.text.currentColor + '</td><td rowspan="9" class="Button"><input type="button" class="Ok" value="' + localization.text.ok + '" title="' + localization.tooltips.buttons.ok + '"/><input type="button" class="Cancel" value="' + localization.text.cancel + '" title="' + localization.tooltips.buttons.cancel + '"/><hr/><div class="Grid">&nbsp;</div></td></tr><tr class="Hue"><td class="Radio"><label title="' + localization.tooltips.hue.radio + '"><input type="radio" value="h"' + (settings.color.mode == 'h' ? ' checked="checked"' : '') + '/>H:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.h : '') + '" title="' + localization.tooltips.hue.textbox + '"/>&nbsp;&deg;</td></tr><tr class="Saturation"><td class="Radio"><label title="' + localization.tooltips.saturation.radio + '"><input type="radio" value="s"' + (settings.color.mode == 's' ? ' checked="checked"' : '') + '/>S:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.s : '') + '" title="' + localization.tooltips.saturation.textbox + '"/>&nbsp;%</td></tr><tr class="Value"><td class="Radio"><label title="' + localization.tooltips.value.radio + '"><input type="radio" value="v"' + (settings.color.mode == 'v' ? ' checked="checked"' : '') + '/>V:</label><br/><br/></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.v : '') + '" title="' + localization.tooltips.value.textbox + '"/>&nbsp;%<br/><br/></td></tr><tr class="Red"><td class="Radio"><label title="' + localization.tooltips.red.radio + '"><input type="radio" value="r"' + (settings.color.mode == 'r' ? ' checked="checked"' : '') + '/>R:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.r : '') + '" title="' + localization.tooltips.red.textbox + '"/></td></tr><tr class="Green"><td class="Radio"><label title="' + localization.tooltips.green.radio + '"><input type="radio" value="g"' + (settings.color.mode == 'g' ? ' checked="checked"' : '') + '/>G:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.g : '') + '" title="' + localization.tooltips.green.textbox + '"/></td></tr><tr class="Blue"><td class="Radio"><label title="' + localization.tooltips.blue.radio + '"><input type="radio" value="b"' + (settings.color.mode == 'b' ? ' checked="checked"' : '') + '/>B:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.b : '') + '" title="' + localization.tooltips.blue.textbox + '"/></td></tr><tr class="Alpha"><td class="Radio">' + (win.alphaSupport ? '<label title="' + localization.tooltips.alpha.radio + '"><input type="radio" value="a"' + (settings.color.mode == 'a' ? ' checked="checked"' : '') + '/>A:</label>' : '&nbsp;') + '</td><td class="Text">' + (win.alphaSupport ? '<input type="text" maxlength="' + (3 + win.alphaPrecision) + '" value="' + (all != null ? Math.precision((all.a * 100) / 255, win.alphaPrecision) : '') + '" title="' + localization.tooltips.alpha.textbox + '"/>&nbsp;%' : '&nbsp;') + '</td></tr><tr class="Hex"><td colspan="2" class="Text"><label title="' + localization.tooltips.hex.textbox + '">#:<input type="text" maxlength="6" class="Hex" value="' + (all != null ? all.hex : '') + '"/></label>' + (win.alphaSupport ? '<input type="text" maxlength="2" class="AHex" value="' + (all != null ? all.ahex.substring(6) : '') + '" title="' + localization.tooltips.hex.alpha + '"/></td>' : '&nbsp;') + '</tr></tbody></table>';
                if (win.expandable)
                {
                  container.html(controlHtml);
                  if($(document.body).children('div.jPicker.Container').length==0)$(document.body).prepend(container);
                  else $(document.body).children('div.jPicker.Container:last').after(container);
                  container.mousedown(
                    function()
                    {
                      $(document.body).children('div.jPicker.Container').css({zIndex:10});
                      container.css({zIndex:20});
                    });
                  container.css( // positions must be set and display set to absolute before source code injection or IE will size the container to fit the window
                    {
                      left:
                        win.position.x == 'left' ? (popup.offset().left - 530 - (win.position.y == 'center' ? 25 : 0)) + 'px' :
                        win.position.x == 'center' ? (popup.offset().left - 260) + 'px' :
                        win.position.x == 'right' ? (popup.offset().left - 10 + (win.position.y == 'center' ? 25 : 0)) + 'px' :
                        win.position.x == 'screenCenter' ? (($(document).width() >> 1) - 260) + 'px' : (popup.offset().left + parseInt(win.position.x)) + 'px',
                      position: 'absolute',
                      top: win.position.y == 'top' ? (popup.offset().top - 312) + 'px' :
                           win.position.y == 'center' ? (popup.offset().top - 156) + 'px' :
                           win.position.y == 'bottom' ? (popup.offset().top + 25) + 'px' : (popup.offset().top + parseInt(win.position.y)) + 'px'
                    });
                }
                else
                {
                  container = $($this);
                  container.html(controlHtml);
                }
                // initialize the objects to the source code just injected
                var tbody = container.find('tbody:first');
                colorMapDiv = tbody.find('div.Map:first');
                colorBarDiv = tbody.find('div.Bar:first');
                var MapMaps = colorMapDiv.find('span'),
                    BarMaps = colorBarDiv.find('span');
                colorMapL1 = MapMaps.filter('.Map1:first');
                colorMapL2 = MapMaps.filter('.Map2:first');
                colorMapL3 = MapMaps.filter('.Map3:first');
                colorBarL1 = BarMaps.filter('.Map1:first');
                colorBarL2 = BarMaps.filter('.Map2:first');
                colorBarL3 = BarMaps.filter('.Map3:first');
                colorBarL4 = BarMaps.filter('.Map4:first');
                colorBarL5 = BarMaps.filter('.Map5:first');
                colorBarL6 = BarMaps.filter('.Map6:first');
                // create color pickers and maps
                colorMap = new Slider(colorMapDiv,
                  {
                    map:
                    {
                      width: images.colorMap.width,
                      height: images.colorMap.height
                    },
                    arrow:
                    {
                      image: images.clientPath + images.colorMap.arrow.file,
                      width: images.colorMap.arrow.width,
                      height: images.colorMap.arrow.height
                    }
                  });
                colorMap.bind(mapValueChanged);
                colorBar = new Slider(colorBarDiv,
                  {
                    map:
                    {
                      width: images.colorBar.width,
                      height: images.colorBar.height
                    },
                    arrow:
                    {
                      image: images.clientPath + images.colorBar.arrow.file,
                      width: images.colorBar.arrow.width,
                      height: images.colorBar.arrow.height
                    }
                  });
                colorBar.bind(colorBarValueChanged);
                colorPicker = new ColorValuePicker(tbody, color.active, win.expandable && win.bindToInput ? win.input : null, win.alphaPrecision);
                var hex = all != null ? all.hex : null,
                    preview = tbody.find('.Preview'),
                    button = tbody.find('.Button');
                activePreview = preview.find('.Active:first').css({ backgroundColor: hex && '#' + hex || 'transparent' });
                currentPreview = preview.find('.Current:first').css({ backgroundColor: hex && '#' + hex || 'transparent' }).bind('click', currentClicked);
                setAlpha.call($this, currentPreview, Math.precision(color.current.val('a') * 100) / 255, 4);
                okButton = button.find('.Ok:first').bind('click', okClicked);
                cancelButton = button.find('.Cancel:first').bind('click', cancelClicked);
                grid = button.find('.Grid:first');
                setTimeout(
                  function()
                  {
                    setImg.call($this, colorMapL1, images.clientPath + 'Maps.png');
                    setImg.call($this, colorMapL2, images.clientPath + 'Maps.png');
                    setImg.call($this, colorMapL3, images.clientPath + 'map-opacity.png');
                    setImg.call($this, colorBarL1, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL2, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL3, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL4, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL5, images.clientPath + 'bar-opacity.png');
                    setImg.call($this, colorBarL6, images.clientPath + 'AlphaBar.png');
                    setImg.call($this, preview.find('div:first'), images.clientPath + 'preview-opacity.png');
                  }, 0);
                tbody.find('td.Radio input').bind('click', radioClicked);
                // initialize quick list
                if (color.quickList && color.quickList.length > 0)
                {
                  var html = '';
                  for (i = 0; i < color.quickList.length; i++)
                  {
                    /* if default colors are hex strings, change them to color objects */
                    if ((typeof (color.quickList[i])).toString().toLowerCase() == 'string') color.quickList[i] = new Color({ hex: color.quickList[i] });
                    var alpha = color.quickList[i].val('a');
                    var ahex = color.quickList[i].val('ahex');
                    if (!win.alphaSupport && ahex) ahex = ahex.substring(0, 6) + 'ff';
                    var quickHex = color.quickList[i].val('hex');
                    if(!ahex) ahex = "00000000";
                    html+='<span class="QuickColor"' + (ahex && ' title="#' + ahex + '"' || 'none') + ' style="background-color:' + (quickHex && '#' + quickHex || '') + ';' + (quickHex ? '' : 'background-image:url(' + images.clientPath + 'NoColor.png)') + (win.alphaSupport && alpha && alpha < 255 ? ';opacity:' + Math.precision(alpha / 255, 4) + ';filter:Alpha(opacity=' + Math.precision(alpha / 2.55, 4) + ')' : '') + '">&nbsp;</span>';
                  }
                  setImg.call($this, grid, images.clientPath + 'bar-opacity.png');
                  grid.html(html);
                  grid.find('.QuickColor').click(quickPickClicked);
                }
                setColorMode.call($this, settings.color.mode);
                color.active.bind(activeColorChanged);
                $.isFunction(liveCallback) && color.active.bind(liveCallback);
                color.current.bind(currentColorChanged);
                // bind to input
                if (win.expandable)
                {
                  $this.icon = popup.parents('.Icon:first');
                  iconColor = $this.icon.find('.Color:first').css({ backgroundColor: hex && '#' + hex || 'transparent' });
                  iconAlpha = $this.icon.find('.Alpha:first');
                  setImg.call($this, iconAlpha, images.clientPath + 'bar-opacity.png');
                  setAlpha.call($this, iconAlpha, Math.precision(((255 - (all != null ? all.a : 0)) * 100) / 255, 4));
                  iconImage = $this.icon.find('.Image:first').css(
                    {
                      backgroundImage: 'url(\'' + images.clientPath + images.picker.file + '\')'
                    }).bind('click', iconImageClicked);
                  if (win.bindToInput&&win.updateInputColor)
                    win.input.css(
                      {
                        backgroundColor: hex && '#' + hex || 'transparent',
                        color: all == null || all.v > 75 ? '#000000' : '#ffffff'
                      });
                  moveBar = tbody.find('.Move:first').bind('mousedown', moveBarMouseDown);
                  color.active.bind(expandableColorChanged);
                }
                else show.call($this);
              },
            destroy =
              function()
              {
                container.find('td.Radio input').unbind('click', radioClicked);
                currentPreview.unbind('click', currentClicked);
                cancelButton.unbind('click', cancelClicked);
                okButton.unbind('click', okClicked);
                if (settings.window.expandable)
                {
                  iconImage.unbind('click', iconImageClicked);
                  moveBar.unbind('mousedown', moveBarMouseDown);
                  $this.icon = null;
                }
                container.find('.QuickColor').unbind('click', quickPickClicked);
                colorMapDiv = null;
                colorBarDiv = null;
                colorMapL1 = null;
                colorMapL2 = null;
                colorMapL3 = null;
                colorBarL1 = null;
                colorBarL2 = null;
                colorBarL3 = null;
                colorBarL4 = null;
                colorBarL5 = null;
                colorBarL6 = null;
                colorMap.destroy();
                colorMap = null;
                colorBar.destroy();
                colorBar = null;
                colorPicker.destroy();
                colorPicker = null;
                activePreview = null;
                currentPreview = null;
                okButton = null;
                cancelButton = null;
                grid = null;
                commitCallback = null;
                cancelCallback = null;
                liveCallback = null;
                container.html('');
                for (i = 0; i < List.length; i++) if (List[i] == $this) List.splice(i, 1);
              },
            images = settings.images, // local copies for YUI compressor
            localization = settings.localization,
            color =
              {
                active: (typeof(settings.color.active)).toString().toLowerCase() == 'string' ? new Color({ ahex: !settings.window.alphaSupport && settings.color.active ? settings.color.active.substring(0, 6) + 'ff' : settings.color.active }) : new Color({ ahex: !settings.window.alphaSupport && settings.color.active.val('ahex') ? settings.color.active.val('ahex').substring(0, 6) + 'ff' : settings.color.active.val('ahex') }),
                current: (typeof(settings.color.active)).toString().toLowerCase() == 'string' ? new Color({ ahex: !settings.window.alphaSupport && settings.color.active ? settings.color.active.substring(0, 6) + 'ff' : settings.color.active }) : new Color({ ahex: !settings.window.alphaSupport && settings.color.active.val('ahex') ? settings.color.active.val('ahex').substring(0, 6) + 'ff' : settings.color.active.val('ahex') }),
                quickList: settings.color.quickList
              };
          $.extend(true, $this, // public properties, methods, and callbacks
            {
              commitCallback: commitCallback, // commitCallback function can be overridden to return the selected color to a method you specify when the user clicks "OK"
              liveCallback: liveCallback, // liveCallback function can be overridden to return the selected color to a method you specify in live mode (continuous update)
              cancelCallback: cancelCallback, // cancelCallback function can be overridden to a method you specify when the user clicks "Cancel"
              color: color,
              show: show,
              hide: hide,
              destroy: destroy // destroys this control entirely, removing all events and objects, and removing itself from the List
            });
          List.push($this);
          setTimeout(
            function()
            {
              initialize.call($this);
            }, 0);
        });
    };
  $.fn.jPicker.defaults = /* jPicker defaults - you can change anything in this section (such as the clientPath to your images) without fear of breaking the program */
      {
      window:
        {
          title: null, /* any title for the jPicker window itself - displays "Drag Markers To Pick A Color" if left null */
          effects:
          {
            type: 'slide', /* effect used to show/hide an expandable picker. Acceptable values "slide", "show", "fade" */
            speed:
            {
              show: 'slow', /* duration of "show" effect. Acceptable values are "fast", "slow", or time in ms */
              hide: 'fast' /* duration of "hide" effect. Acceptable values are "fast", "slow", or time in ms */
            }
          },
          position:
          {
            x: 'screenCenter', /* acceptable values "left", "center", "right", "screenCenter", or relative px value */
            y: 'top' /* acceptable values "top", "bottom", "center", or relative px value */
          },
          expandable: false, /* default to large static picker - set to true to make an expandable picker (small icon with popup) - set automatically when binded to input element */
          liveUpdate: true, /* set false if you want the user to have to click "OK" before the binded input box updates values (always "true" for expandable picker) */
          alphaSupport: false, /* set to true to enable alpha picking */
          alphaPrecision: 0, /* set decimal precision for alpha percentage display - hex codes do not map directly to percentage integers - range 0-2 */
          updateInputColor: true /* set to false to prevent binded input colors from changing */
        },
      color:
        {
          mode: 'h', /* acceptabled values "h" (hue), "s" (saturation), "v" (value), "r" (red), "g" (green), "b" (blue), "a" (alpha) */
          active: new Color({ ahex: '#ffcc00ff' }), /* acceptable values are any declared $.jPicker.Color object or string HEX value (e.g. #ffc000) WITH OR WITHOUT the "#" prefix */
          quickList: /* the quick pick color list */
            [
              new Color({ h: 360, s: 33, v: 100 }), /* acceptable values are any declared $.jPicker.Color object or string HEX value (e.g. #ffc000) WITH OR WITHOUT the "#" prefix */
              new Color({ h: 360, s: 66, v: 100 }),
              new Color({ h: 360, s: 100, v: 100 }),
              new Color({ h: 360, s: 100, v: 75 }),
              new Color({ h: 360, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 100 }),
              new Color({ h: 30, s: 33, v: 100 }),
              new Color({ h: 30, s: 66, v: 100 }),
              new Color({ h: 30, s: 100, v: 100 }),
              new Color({ h: 30, s: 100, v: 75 }),
              new Color({ h: 30, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 90 }),
              new Color({ h: 60, s: 33, v: 100 }),
              new Color({ h: 60, s: 66, v: 100 }),
              new Color({ h: 60, s: 100, v: 100 }),
              new Color({ h: 60, s: 100, v: 75 }),
              new Color({ h: 60, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 80 }),
              new Color({ h: 90, s: 33, v: 100 }),
              new Color({ h: 90, s: 66, v: 100 }),
              new Color({ h: 90, s: 100, v: 100 }),
              new Color({ h: 90, s: 100, v: 75 }),
              new Color({ h: 90, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 70 }),
              new Color({ h: 120, s: 33, v: 100 }),
              new Color({ h: 120, s: 66, v: 100 }),
              new Color({ h: 120, s: 100, v: 100 }),
              new Color({ h: 120, s: 100, v: 75 }),
              new Color({ h: 120, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 60 }),
              new Color({ h: 150, s: 33, v: 100 }),
              new Color({ h: 150, s: 66, v: 100 }),
              new Color({ h: 150, s: 100, v: 100 }),
              new Color({ h: 150, s: 100, v: 75 }),
              new Color({ h: 150, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 50 }),
              new Color({ h: 180, s: 33, v: 100 }),
              new Color({ h: 180, s: 66, v: 100 }),
              new Color({ h: 180, s: 100, v: 100 }),
              new Color({ h: 180, s: 100, v: 75 }),
              new Color({ h: 180, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 40 }),
              new Color({ h: 210, s: 33, v: 100 }),
              new Color({ h: 210, s: 66, v: 100 }),
              new Color({ h: 210, s: 100, v: 100 }),
              new Color({ h: 210, s: 100, v: 75 }),
              new Color({ h: 210, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 30 }),
              new Color({ h: 240, s: 33, v: 100 }),
              new Color({ h: 240, s: 66, v: 100 }),
              new Color({ h: 240, s: 100, v: 100 }),
              new Color({ h: 240, s: 100, v: 75 }),
              new Color({ h: 240, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 20 }),
              new Color({ h: 270, s: 33, v: 100 }),
              new Color({ h: 270, s: 66, v: 100 }),
              new Color({ h: 270, s: 100, v: 100 }),
              new Color({ h: 270, s: 100, v: 75 }),
              new Color({ h: 270, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 10 }),
              new Color({ h: 300, s: 33, v: 100 }),
              new Color({ h: 300, s: 66, v: 100 }),
              new Color({ h: 300, s: 100, v: 100 }),
              new Color({ h: 300, s: 100, v: 75 }),
              new Color({ h: 300, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 0 }),
              new Color({ h: 330, s: 33, v: 100 }),
              new Color({ h: 330, s: 66, v: 100 }),
              new Color({ h: 330, s: 100, v: 100 }),
              new Color({ h: 330, s: 100, v: 75 }),
              new Color({ h: 330, s: 100, v: 50 }),
              new Color()
            ]
        },
      images:
        {
          clientPath: '/jPicker/images/', /* Path to image files */
          colorMap:
          {
            width: 256,
            height: 256,
            arrow:
            {
              file: 'mappoint.gif', /* ColorMap arrow icon */
              width: 15,
              height: 15
            }
          },
          colorBar:
          {
            width: 20,
            height: 256,
            arrow:
            {
              file: 'rangearrows.gif', /* ColorBar arrow icon */
              width: 20,
              height: 7
            }
          },
          picker:
          {
            file: 'picker.gif', /* Color Picker icon */
            width: 25,
            height: 24
          }
        },
      localization: /* alter these to change the text presented by the picker (e.g. different language) */
        {
          text:
          {
            title: 'Drag Markers To Pick A Color',
            newColor: 'new',
            currentColor: 'current',
            ok: 'OK',
            cancel: 'Cancel'
          },
          tooltips:
          {
            colors:
            {
              newColor: 'New Color - Press &ldquo;OK&rdquo; To Commit',
              currentColor: 'Click To Revert To Original Color'
            },
            buttons:
            {
              ok: 'Commit To This Color Selection',
              cancel: 'Cancel And Revert To Original Color'
            },
            hue:
            {
              radio: 'Set To &ldquo;Hue&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Hue&rdquo; Value (0-360&deg;)'
            },
            saturation:
            {
              radio: 'Set To &ldquo;Saturation&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Saturation&rdquo; Value (0-100%)'
            },
            value:
            {
              radio: 'Set To &ldquo;Value&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Value&rdquo; Value (0-100%)'
            },
            red:
            {
              radio: 'Set To &ldquo;Red&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Red&rdquo; Value (0-255)'
            },
            green:
            {
              radio: 'Set To &ldquo;Green&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Green&rdquo; Value (0-255)'
            },
            blue:
            {
              radio: 'Set To &ldquo;Blue&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Blue&rdquo; Value (0-255)'
            },
            alpha:
            {
              radio: 'Set To &ldquo;Alpha&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Alpha&rdquo; Value (0-100)'
            },
            hex:
            {
              textbox: 'Enter A &ldquo;Hex&rdquo; Color Value (#000000-#ffffff)',
              alpha: 'Enter A &ldquo;Alpha&rdquo; Value (#00-#ff)'
            }
          }
        }
    };
})(jQuery, '1.1.6');


/*
 * ext-overview_window.js
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2013 James Sacksteder
 *
 */

var overviewWindowGlobals={};
svgEditor.addExtension("overview_window", function() {	
	//define and insert the base html element
	var propsWindowHtml= "\
		<div id=\"overview_window_content_pane\" style=\" width:100%; word-wrap:break-word;  display:inline-block; margin-top:20px;\">\
			<div id=\"overview_window_content\" style=\"position:relative; left:12px; top:0px;\">\
				<div style=\"background-color:#A0A0A0; display:inline-block; overflow:visible;\">\
					<svg id=\"overviewMiniView\" width=\"150\" height=\"100\" x=\"0\" y=\"0\" viewBox=\"0 0 4800 3600\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\
						<use x=\"0\" y=\"0\" xlink:href=\"#svgroot\"> <\/use>\
					 </svg>\
					 <div id=\"overview_window_view_box\" style=\"min-width:50px; min-height:50px; position:absolute; top:30px; left:30px; z-index:5; background-color:rgba(255,0,102,0.3);\">\
					 <\/div>\
				 <\/div>\
			<\/div>\
		<\/div>";
	$("#sidepanels").append(propsWindowHtml);
	
	//define dynamic animation of the view box.
	var updateViewBox = function(){
		var portHeight=parseFloat($("#workarea").css("height"));
		var portWidth=parseFloat($("#workarea").css("width"));
		var portX=$("#workarea").scrollLeft();
		var portY=$("#workarea").scrollTop();
		var windowWidth=parseFloat($("#svgcanvas").css("width"));
		var windowHeight=parseFloat($("#svgcanvas").css("height"));
		var overviewWidth=$("#overviewMiniView").attr("width");
		var overviewHeight=$("#overviewMiniView").attr("height");
		
		var viewBoxX=portX/windowWidth*overviewWidth;
		var viewBoxY=portY/windowHeight*overviewHeight;
		var viewBoxWidth=portWidth/windowWidth*overviewWidth;
		var viewBoxHeight=portHeight/windowHeight*overviewHeight;
		
		$("#overview_window_view_box").css("min-width",viewBoxWidth+"px");
		$("#overview_window_view_box").css("min-height",viewBoxHeight+"px");
		$("#overview_window_view_box").css("top",viewBoxY+"px");
		$("#overview_window_view_box").css("left",viewBoxX+"px");
	};
	$("#workarea").scroll(function(){
		if(!(overviewWindowGlobals.viewBoxDragging)){
			updateViewBox()
		}
	});
	$("#workarea").resize(updateViewBox);
	updateViewBox();
	
	//comphensate for changes in zoom and canvas size
	var updateViewDimensions= function(){
		var viewWidth=$("#svgroot").attr("width");
		var viewHeight=$("#svgroot").attr("height");
		var viewX=640;
		var viewY=480;
		
		if(svgedit.browser.isIE())
		{
			//This has only been tested with Firefox 10 and IE 9 (without chrome frame).
			//I am not sure if if is Firefox or IE that is being non compliant here.
			//Either way the one that is noncompliant may become more compliant later.
			//TAG:HACK  
			//TAG:VERSION_DEPENDENT
			//TAG:BROWSER_SNIFFING
			viewX=0;
			viewY=0;
		}
		
		var svgWidth_old=$("#overviewMiniView").attr("width");
		var svgHeight_new=viewHeight/viewWidth*svgWidth_old;
		$("#overviewMiniView").attr("viewBox",viewX+" "+viewY+" "+viewWidth+" "+viewHeight);
		$("#overviewMiniView").attr("height",svgHeight_new);
		updateViewBox();
	};
	updateViewDimensions();
	
	//set up the overview window as a controller for the view port.
	overviewWindowGlobals.viewBoxDragging=false;
	var updateViewPortFromViewBox = function(){
	
		var windowWidth =parseFloat($("#svgcanvas").css("width" ));
		var windowHeight=parseFloat($("#svgcanvas").css("height"));
		var overviewWidth =$("#overviewMiniView").attr("width" );
		var overviewHeight=$("#overviewMiniView").attr("height");
		var viewBoxX=parseFloat($("#overview_window_view_box").css("left"));
		var viewBoxY=parseFloat($("#overview_window_view_box").css("top" ));
		
		var portX=viewBoxX/overviewWidth *windowWidth;
		var portY=viewBoxY/overviewHeight*windowHeight;

		$("#workarea").scrollLeft(portX);
		$("#workarea").scrollTop(portY);
	};
	$( "#overview_window_view_box" ).draggable({  containment: "parent"
		,drag: updateViewPortFromViewBox
		,start:function(){overviewWindowGlobals.viewBoxDragging=true; }
		,stop :function(){overviewWindowGlobals.viewBoxDragging=false;}
	});  
	$("#overviewMiniView").click(function(evt){
		//Firefox doesn't support evt.offsetX and evt.offsetY
		var mouseX=(evt.offsetX || evt.originalEvent.layerX);
		var mouseY=(evt.offsetY || evt.originalEvent.layerY);
		var overviewWidth =$("#overviewMiniView").attr("width" );
		var overviewHeight=$("#overviewMiniView").attr("height");
		var viewBoxWidth =parseFloat($("#overview_window_view_box").css("min-width" ));
		var viewBoxHeight=parseFloat($("#overview_window_view_box").css("min-height"));
 
		var viewBoxX=mouseX-.5*viewBoxWidth;
		var viewBoxY=mouseY-.5*viewBoxHeight;
		//deal with constraints
		if(viewBoxX<0){
			viewBoxX=0;
		}
		if(viewBoxY<0){
			viewBoxY=0;
		}
		if(viewBoxX+viewBoxWidth>overviewWidth){
			viewBoxX=overviewWidth-viewBoxWidth;
		}
		if(viewBoxY+viewBoxHeight>overviewHeight){
			viewBoxY=overviewHeight-viewBoxHeight;
		}
		
		$("#overview_window_view_box").css("top",viewBoxY+"px");
		$("#overview_window_view_box").css("left",viewBoxX+"px");
		updateViewPortFromViewBox();
	});
	
	return{
		name: "overview window",
		canvasUpdated:updateViewDimensions,
		workareaResized:updateViewBox
	};
});
