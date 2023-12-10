/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/downloadjs";
exports.ids = ["vendor-chunks/downloadjs"];
exports.modules = {

/***/ "(ssr)/./node_modules/downloadjs/download.js":
/*!*********************************************!*\
  !*** ./node_modules/downloadjs/download.js ***!
  \*********************************************/
/***/ (function(module, exports) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//download.js v4.2, by dandavis; 2008-2016. [MIT] see http://danml.com/download.html for tests/usage\n// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime\n// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs\n// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.\n// v4 adds AMD/UMD, commonJS, and plain browser support\n// v4.1 adds url download capability via solo URL argument (same domain/CORS only)\n// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors\n// https://github.com/rndme/download\n\n(function (root, factory) {\n\tif (true) {\n\t\t// AMD. Register as an anonymous module.\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}(this, function () {\n\n\treturn function download(data, strFileName, strMimeType) {\n\n\t\tvar self = window, // this script is only for browsers anyway...\n\t\t\tdefaultMime = \"application/octet-stream\", // this default mime also triggers iframe downloads\n\t\t\tmimeType = strMimeType || defaultMime,\n\t\t\tpayload = data,\n\t\t\turl = !strFileName && !strMimeType && payload,\n\t\t\tanchor = document.createElement(\"a\"),\n\t\t\ttoString = function(a){return String(a);},\n\t\t\tmyBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),\n\t\t\tfileName = strFileName || \"download\",\n\t\t\tblob,\n\t\t\treader;\n\t\t\tmyBlob= myBlob.call ? myBlob.bind(self) : Blob ;\n\t  \n\t\tif(String(this)===\"true\"){ //reverse arguments, allowing download.bind(true, \"text/xml\", \"export.xml\") to act as a callback\n\t\t\tpayload=[payload, mimeType];\n\t\t\tmimeType=payload[0];\n\t\t\tpayload=payload[1];\n\t\t}\n\n\n\t\tif(url && url.length< 2048){ // if no filename and no mime, assume a url was passed as the only argument\n\t\t\tfileName = url.split(\"/\").pop().split(\"?\")[0];\n\t\t\tanchor.href = url; // assign href prop to temp anchor\n\t\t  \tif(anchor.href.indexOf(url) !== -1){ // if the browser determines that it's a potentially valid url path:\n        \t\tvar ajax=new XMLHttpRequest();\n        \t\tajax.open( \"GET\", url, true);\n        \t\tajax.responseType = 'blob';\n        \t\tajax.onload= function(e){ \n\t\t\t\t  download(e.target.response, fileName, defaultMime);\n\t\t\t\t};\n        \t\tsetTimeout(function(){ ajax.send();}, 0); // allows setting custom ajax headers using the return:\n\t\t\t    return ajax;\n\t\t\t} // end if valid url?\n\t\t} // end if url?\n\n\n\t\t//go ahead and download dataURLs right away\n\t\tif(/^data:([\\w+-]+\\/[\\w+.-]+)?[,;]/.test(payload)){\n\t\t\n\t\t\tif(payload.length > (1024*1024*1.999) && myBlob !== toString ){\n\t\t\t\tpayload=dataUrlToBlob(payload);\n\t\t\t\tmimeType=payload.type || defaultMime;\n\t\t\t}else{\t\t\t\n\t\t\t\treturn navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:\n\t\t\t\t\tnavigator.msSaveBlob(dataUrlToBlob(payload), fileName) :\n\t\t\t\t\tsaver(payload) ; // everyone else can save dataURLs un-processed\n\t\t\t}\n\t\t\t\n\t\t}else{//not data url, is it a string with special needs?\n\t\t\tif(/([\\x80-\\xff])/.test(payload)){\t\t\t  \n\t\t\t\tvar i=0, tempUiArr= new Uint8Array(payload.length), mx=tempUiArr.length;\n\t\t\t\tfor(i;i<mx;++i) tempUiArr[i]= payload.charCodeAt(i);\n\t\t\t \tpayload=new myBlob([tempUiArr], {type: mimeType});\n\t\t\t}\t\t  \n\t\t}\n\t\tblob = payload instanceof myBlob ?\n\t\t\tpayload :\n\t\t\tnew myBlob([payload], {type: mimeType}) ;\n\n\n\t\tfunction dataUrlToBlob(strUrl) {\n\t\t\tvar parts= strUrl.split(/[:;,]/),\n\t\t\ttype= parts[1],\n\t\t\tdecoder= parts[2] == \"base64\" ? atob : decodeURIComponent,\n\t\t\tbinData= decoder( parts.pop() ),\n\t\t\tmx= binData.length,\n\t\t\ti= 0,\n\t\t\tuiArr= new Uint8Array(mx);\n\n\t\t\tfor(i;i<mx;++i) uiArr[i]= binData.charCodeAt(i);\n\n\t\t\treturn new myBlob([uiArr], {type: type});\n\t\t }\n\n\t\tfunction saver(url, winMode){\n\n\t\t\tif ('download' in anchor) { //html5 A[download]\n\t\t\t\tanchor.href = url;\n\t\t\t\tanchor.setAttribute(\"download\", fileName);\n\t\t\t\tanchor.className = \"download-js-link\";\n\t\t\t\tanchor.innerHTML = \"downloading...\";\n\t\t\t\tanchor.style.display = \"none\";\n\t\t\t\tdocument.body.appendChild(anchor);\n\t\t\t\tsetTimeout(function() {\n\t\t\t\t\tanchor.click();\n\t\t\t\t\tdocument.body.removeChild(anchor);\n\t\t\t\t\tif(winMode===true){setTimeout(function(){ self.URL.revokeObjectURL(anchor.href);}, 250 );}\n\t\t\t\t}, 66);\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\t// handle non-a[download] safari as best we can:\n\t\t\tif(/(Version)\\/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*Safari\\//.test(navigator.userAgent)) {\n\t\t\t\tif(/^data:/.test(url))\turl=\"data:\"+url.replace(/^data:([\\w\\/\\-\\+]+)/, defaultMime);\n\t\t\t\tif(!window.open(url)){ // popup blocked, offer direct download:\n\t\t\t\t\tif(confirm(\"Displaying New Document\\n\\nUse Save As... to download, then click back to return to this page.\")){ location.href=url; }\n\t\t\t\t}\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\t//do iframe dataURL download (old ch+FF):\n\t\t\tvar f = document.createElement(\"iframe\");\n\t\t\tdocument.body.appendChild(f);\n\n\t\t\tif(!winMode && /^data:/.test(url)){ // force a mime that will download:\n\t\t\t\turl=\"data:\"+url.replace(/^data:([\\w\\/\\-\\+]+)/, defaultMime);\n\t\t\t}\n\t\t\tf.src=url;\n\t\t\tsetTimeout(function(){ document.body.removeChild(f); }, 333);\n\n\t\t}//end saver\n\n\n\n\n\t\tif (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)\n\t\t\treturn navigator.msSaveBlob(blob, fileName);\n\t\t}\n\n\t\tif(self.URL){ // simple fast and modern way using Blob and URL:\n\t\t\tsaver(self.URL.createObjectURL(blob), true);\n\t\t}else{\n\t\t\t// handle non-Blob()+non-URL browsers:\n\t\t\tif(typeof blob === \"string\" || blob.constructor===toString ){\n\t\t\t\ttry{\n\t\t\t\t\treturn saver( \"data:\" +  mimeType   + \";base64,\"  +  self.btoa(blob)  );\n\t\t\t\t}catch(y){\n\t\t\t\t\treturn saver( \"data:\" +  mimeType   + \",\" + encodeURIComponent(blob)  );\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Blob but not URL support:\n\t\t\treader=new FileReader();\n\t\t\treader.onload=function(e){\n\t\t\t\tsaver(this.result);\n\t\t\t};\n\t\t\treader.readAsDataURL(blob);\n\t\t}\n\t\treturn true;\n\t}; /* end download() */\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG93bmxvYWRqcy9kb3dubG9hZC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxpSUFBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLElBQTBDO0FBQy9DO0FBQ0EsRUFBRSxpQ0FBTyxFQUFFLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsa0dBQUM7QUFDckIsR0FBRyxLQUFLLEVBUUw7QUFDSCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrQkFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSwrQkFBK0I7QUFDL0I7QUFDQSxzQkFBc0I7QUFDdEIsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxhQUFhLE1BQU07QUFDcEQ7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsR0FBRyxLQUFLO0FBQ1I7QUFDQTtBQUNBLFVBQVUsS0FBSztBQUNmLHNDQUFzQyxlQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGVBQWU7OztBQUd6QztBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUyxLQUFLOztBQUVkLCtCQUErQixXQUFXO0FBQzFDOztBQUVBOztBQUVBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCLHVDQUF1QztBQUN0RixLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0Isb0hBQW9IO0FBQ3BIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrQkFBK0I7O0FBRXpELEdBQUc7Ozs7O0FBS0gsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9kb3dubG9hZGpzL2Rvd25sb2FkLmpzP2Y1OTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy9kb3dubG9hZC5qcyB2NC4yLCBieSBkYW5kYXZpczsgMjAwOC0yMDE2LiBbTUlUXSBzZWUgaHR0cDovL2Rhbm1sLmNvbS9kb3dubG9hZC5odG1sIGZvciB0ZXN0cy91c2FnZVxuLy8gdjEgbGFuZGVkIGEgRkYrQ2hyb21lIGNvbXBhdCB3YXkgb2YgZG93bmxvYWRpbmcgc3RyaW5ncyB0byBsb2NhbCB1bi1uYW1lZCBmaWxlcywgdXBncmFkZWQgdG8gdXNlIGEgaGlkZGVuIGZyYW1lIGFuZCBvcHRpb25hbCBtaW1lXG4vLyB2MiBhZGRlZCBuYW1lZCBmaWxlcyB2aWEgYVtkb3dubG9hZF0sIG1zU2F2ZUJsb2IsIElFICgxMCspIHN1cHBvcnQsIGFuZCB3aW5kb3cuVVJMIHN1cHBvcnQgZm9yIGxhcmdlcitmYXN0ZXIgc2F2ZXMgdGhhbiBkYXRhVVJMc1xuLy8gdjMgYWRkZWQgZGF0YVVSTCBhbmQgQmxvYiBJbnB1dCwgYmluZC10b2dnbGUgYXJpdHksIGFuZCBsZWdhY3kgZGF0YVVSTCBmYWxsYmFjayB3YXMgaW1wcm92ZWQgd2l0aCBmb3JjZS1kb3dubG9hZCBtaW1lIGFuZCBiYXNlNjQgc3VwcG9ydC4gMy4xIGltcHJvdmVkIHNhZmFyaSBoYW5kbGluZy5cbi8vIHY0IGFkZHMgQU1EL1VNRCwgY29tbW9uSlMsIGFuZCBwbGFpbiBicm93c2VyIHN1cHBvcnRcbi8vIHY0LjEgYWRkcyB1cmwgZG93bmxvYWQgY2FwYWJpbGl0eSB2aWEgc29sbyBVUkwgYXJndW1lbnQgKHNhbWUgZG9tYWluL0NPUlMgb25seSlcbi8vIHY0LjIgYWRkcyBzZW1hbnRpYyB2YXJpYWJsZSBuYW1lcywgbG9uZyAob3ZlciAyTUIpIGRhdGFVUkwgc3VwcG9ydCwgYW5kIGhpZGRlbiBieSBkZWZhdWx0IHRlbXAgYW5jaG9yc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3JuZG1lL2Rvd25sb2FkXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cdFx0Ly8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG5cdFx0Ly8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG5cdFx0Ly8gbGlrZSBOb2RlLlxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG5cdFx0cm9vdC5kb3dubG9hZCA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIGRvd25sb2FkKGRhdGEsIHN0ckZpbGVOYW1lLCBzdHJNaW1lVHlwZSkge1xuXG5cdFx0dmFyIHNlbGYgPSB3aW5kb3csIC8vIHRoaXMgc2NyaXB0IGlzIG9ubHkgZm9yIGJyb3dzZXJzIGFueXdheS4uLlxuXHRcdFx0ZGVmYXVsdE1pbWUgPSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLCAvLyB0aGlzIGRlZmF1bHQgbWltZSBhbHNvIHRyaWdnZXJzIGlmcmFtZSBkb3dubG9hZHNcblx0XHRcdG1pbWVUeXBlID0gc3RyTWltZVR5cGUgfHwgZGVmYXVsdE1pbWUsXG5cdFx0XHRwYXlsb2FkID0gZGF0YSxcblx0XHRcdHVybCA9ICFzdHJGaWxlTmFtZSAmJiAhc3RyTWltZVR5cGUgJiYgcGF5bG9hZCxcblx0XHRcdGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxuXHRcdFx0dG9TdHJpbmcgPSBmdW5jdGlvbihhKXtyZXR1cm4gU3RyaW5nKGEpO30sXG5cdFx0XHRteUJsb2IgPSAoc2VsZi5CbG9iIHx8IHNlbGYuTW96QmxvYiB8fCBzZWxmLldlYktpdEJsb2IgfHwgdG9TdHJpbmcpLFxuXHRcdFx0ZmlsZU5hbWUgPSBzdHJGaWxlTmFtZSB8fCBcImRvd25sb2FkXCIsXG5cdFx0XHRibG9iLFxuXHRcdFx0cmVhZGVyO1xuXHRcdFx0bXlCbG9iPSBteUJsb2IuY2FsbCA/IG15QmxvYi5iaW5kKHNlbGYpIDogQmxvYiA7XG5cdCAgXG5cdFx0aWYoU3RyaW5nKHRoaXMpPT09XCJ0cnVlXCIpeyAvL3JldmVyc2UgYXJndW1lbnRzLCBhbGxvd2luZyBkb3dubG9hZC5iaW5kKHRydWUsIFwidGV4dC94bWxcIiwgXCJleHBvcnQueG1sXCIpIHRvIGFjdCBhcyBhIGNhbGxiYWNrXG5cdFx0XHRwYXlsb2FkPVtwYXlsb2FkLCBtaW1lVHlwZV07XG5cdFx0XHRtaW1lVHlwZT1wYXlsb2FkWzBdO1xuXHRcdFx0cGF5bG9hZD1wYXlsb2FkWzFdO1xuXHRcdH1cblxuXG5cdFx0aWYodXJsICYmIHVybC5sZW5ndGg8IDIwNDgpeyAvLyBpZiBubyBmaWxlbmFtZSBhbmQgbm8gbWltZSwgYXNzdW1lIGEgdXJsIHdhcyBwYXNzZWQgYXMgdGhlIG9ubHkgYXJndW1lbnRcblx0XHRcdGZpbGVOYW1lID0gdXJsLnNwbGl0KFwiL1wiKS5wb3AoKS5zcGxpdChcIj9cIilbMF07XG5cdFx0XHRhbmNob3IuaHJlZiA9IHVybDsgLy8gYXNzaWduIGhyZWYgcHJvcCB0byB0ZW1wIGFuY2hvclxuXHRcdCAgXHRpZihhbmNob3IuaHJlZi5pbmRleE9mKHVybCkgIT09IC0xKXsgLy8gaWYgdGhlIGJyb3dzZXIgZGV0ZXJtaW5lcyB0aGF0IGl0J3MgYSBwb3RlbnRpYWxseSB2YWxpZCB1cmwgcGF0aDpcbiAgICAgICAgXHRcdHZhciBhamF4PW5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBcdFx0YWpheC5vcGVuKCBcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICBcdFx0YWpheC5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICAgIFx0XHRhamF4Lm9ubG9hZD0gZnVuY3Rpb24oZSl7IFxuXHRcdFx0XHQgIGRvd25sb2FkKGUudGFyZ2V0LnJlc3BvbnNlLCBmaWxlTmFtZSwgZGVmYXVsdE1pbWUpO1xuXHRcdFx0XHR9O1xuICAgICAgICBcdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyBhamF4LnNlbmQoKTt9LCAwKTsgLy8gYWxsb3dzIHNldHRpbmcgY3VzdG9tIGFqYXggaGVhZGVycyB1c2luZyB0aGUgcmV0dXJuOlxuXHRcdFx0ICAgIHJldHVybiBhamF4O1xuXHRcdFx0fSAvLyBlbmQgaWYgdmFsaWQgdXJsP1xuXHRcdH0gLy8gZW5kIGlmIHVybD9cblxuXG5cdFx0Ly9nbyBhaGVhZCBhbmQgZG93bmxvYWQgZGF0YVVSTHMgcmlnaHQgYXdheVxuXHRcdGlmKC9eZGF0YTooW1xcdystXStcXC9bXFx3Ky4tXSspP1ssO10vLnRlc3QocGF5bG9hZCkpe1xuXHRcdFxuXHRcdFx0aWYocGF5bG9hZC5sZW5ndGggPiAoMTAyNCoxMDI0KjEuOTk5KSAmJiBteUJsb2IgIT09IHRvU3RyaW5nICl7XG5cdFx0XHRcdHBheWxvYWQ9ZGF0YVVybFRvQmxvYihwYXlsb2FkKTtcblx0XHRcdFx0bWltZVR5cGU9cGF5bG9hZC50eXBlIHx8IGRlZmF1bHRNaW1lO1xuXHRcdFx0fWVsc2V7XHRcdFx0XG5cdFx0XHRcdHJldHVybiBuYXZpZ2F0b3IubXNTYXZlQmxvYiA/ICAvLyBJRTEwIGNhbid0IGRvIGFbZG93bmxvYWRdLCBvbmx5IEJsb2JzOlxuXHRcdFx0XHRcdG5hdmlnYXRvci5tc1NhdmVCbG9iKGRhdGFVcmxUb0Jsb2IocGF5bG9hZCksIGZpbGVOYW1lKSA6XG5cdFx0XHRcdFx0c2F2ZXIocGF5bG9hZCkgOyAvLyBldmVyeW9uZSBlbHNlIGNhbiBzYXZlIGRhdGFVUkxzIHVuLXByb2Nlc3NlZFxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fWVsc2V7Ly9ub3QgZGF0YSB1cmwsIGlzIGl0IGEgc3RyaW5nIHdpdGggc3BlY2lhbCBuZWVkcz9cblx0XHRcdGlmKC8oW1xceDgwLVxceGZmXSkvLnRlc3QocGF5bG9hZCkpe1x0XHRcdCAgXG5cdFx0XHRcdHZhciBpPTAsIHRlbXBVaUFycj0gbmV3IFVpbnQ4QXJyYXkocGF5bG9hZC5sZW5ndGgpLCBteD10ZW1wVWlBcnIubGVuZ3RoO1xuXHRcdFx0XHRmb3IoaTtpPG14OysraSkgdGVtcFVpQXJyW2ldPSBwYXlsb2FkLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHQgXHRwYXlsb2FkPW5ldyBteUJsb2IoW3RlbXBVaUFycl0sIHt0eXBlOiBtaW1lVHlwZX0pO1xuXHRcdFx0fVx0XHQgIFxuXHRcdH1cblx0XHRibG9iID0gcGF5bG9hZCBpbnN0YW5jZW9mIG15QmxvYiA/XG5cdFx0XHRwYXlsb2FkIDpcblx0XHRcdG5ldyBteUJsb2IoW3BheWxvYWRdLCB7dHlwZTogbWltZVR5cGV9KSA7XG5cblxuXHRcdGZ1bmN0aW9uIGRhdGFVcmxUb0Jsb2Ioc3RyVXJsKSB7XG5cdFx0XHR2YXIgcGFydHM9IHN0clVybC5zcGxpdCgvWzo7LF0vKSxcblx0XHRcdHR5cGU9IHBhcnRzWzFdLFxuXHRcdFx0ZGVjb2Rlcj0gcGFydHNbMl0gPT0gXCJiYXNlNjRcIiA/IGF0b2IgOiBkZWNvZGVVUklDb21wb25lbnQsXG5cdFx0XHRiaW5EYXRhPSBkZWNvZGVyKCBwYXJ0cy5wb3AoKSApLFxuXHRcdFx0bXg9IGJpbkRhdGEubGVuZ3RoLFxuXHRcdFx0aT0gMCxcblx0XHRcdHVpQXJyPSBuZXcgVWludDhBcnJheShteCk7XG5cblx0XHRcdGZvcihpO2k8bXg7KytpKSB1aUFycltpXT0gYmluRGF0YS5jaGFyQ29kZUF0KGkpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IG15QmxvYihbdWlBcnJdLCB7dHlwZTogdHlwZX0pO1xuXHRcdCB9XG5cblx0XHRmdW5jdGlvbiBzYXZlcih1cmwsIHdpbk1vZGUpe1xuXG5cdFx0XHRpZiAoJ2Rvd25sb2FkJyBpbiBhbmNob3IpIHsgLy9odG1sNSBBW2Rvd25sb2FkXVxuXHRcdFx0XHRhbmNob3IuaHJlZiA9IHVybDtcblx0XHRcdFx0YW5jaG9yLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGVOYW1lKTtcblx0XHRcdFx0YW5jaG9yLmNsYXNzTmFtZSA9IFwiZG93bmxvYWQtanMtbGlua1wiO1xuXHRcdFx0XHRhbmNob3IuaW5uZXJIVE1MID0gXCJkb3dubG9hZGluZy4uLlwiO1xuXHRcdFx0XHRhbmNob3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFuY2hvcik7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0YW5jaG9yLmNsaWNrKCk7XG5cdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhbmNob3IpO1xuXHRcdFx0XHRcdGlmKHdpbk1vZGU9PT10cnVlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHNlbGYuVVJMLnJldm9rZU9iamVjdFVSTChhbmNob3IuaHJlZik7fSwgMjUwICk7fVxuXHRcdFx0XHR9LCA2Nik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBoYW5kbGUgbm9uLWFbZG93bmxvYWRdIHNhZmFyaSBhcyBiZXN0IHdlIGNhbjpcblx0XHRcdGlmKC8oVmVyc2lvbilcXC8oXFxkKylcXC4oXFxkKykoPzpcXC4oXFxkKykpPy4qU2FmYXJpXFwvLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdFx0XHRcdGlmKC9eZGF0YTovLnRlc3QodXJsKSlcdHVybD1cImRhdGE6XCIrdXJsLnJlcGxhY2UoL15kYXRhOihbXFx3XFwvXFwtXFwrXSspLywgZGVmYXVsdE1pbWUpO1xuXHRcdFx0XHRpZighd2luZG93Lm9wZW4odXJsKSl7IC8vIHBvcHVwIGJsb2NrZWQsIG9mZmVyIGRpcmVjdCBkb3dubG9hZDpcblx0XHRcdFx0XHRpZihjb25maXJtKFwiRGlzcGxheWluZyBOZXcgRG9jdW1lbnRcXG5cXG5Vc2UgU2F2ZSBBcy4uLiB0byBkb3dubG9hZCwgdGhlbiBjbGljayBiYWNrIHRvIHJldHVybiB0byB0aGlzIHBhZ2UuXCIpKXsgbG9jYXRpb24uaHJlZj11cmw7IH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly9kbyBpZnJhbWUgZGF0YVVSTCBkb3dubG9hZCAob2xkIGNoK0ZGKTpcblx0XHRcdHZhciBmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZik7XG5cblx0XHRcdGlmKCF3aW5Nb2RlICYmIC9eZGF0YTovLnRlc3QodXJsKSl7IC8vIGZvcmNlIGEgbWltZSB0aGF0IHdpbGwgZG93bmxvYWQ6XG5cdFx0XHRcdHVybD1cImRhdGE6XCIrdXJsLnJlcGxhY2UoL15kYXRhOihbXFx3XFwvXFwtXFwrXSspLywgZGVmYXVsdE1pbWUpO1xuXHRcdFx0fVxuXHRcdFx0Zi5zcmM9dXJsO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGYpOyB9LCAzMzMpO1xuXG5cdFx0fS8vZW5kIHNhdmVyXG5cblxuXG5cblx0XHRpZiAobmF2aWdhdG9yLm1zU2F2ZUJsb2IpIHsgLy8gSUUxMCsgOiAoaGFzIEJsb2IsIGJ1dCBub3QgYVtkb3dubG9hZF0gb3IgVVJMKVxuXHRcdFx0cmV0dXJuIG5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIGZpbGVOYW1lKTtcblx0XHR9XG5cblx0XHRpZihzZWxmLlVSTCl7IC8vIHNpbXBsZSBmYXN0IGFuZCBtb2Rlcm4gd2F5IHVzaW5nIEJsb2IgYW5kIFVSTDpcblx0XHRcdHNhdmVyKHNlbGYuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSwgdHJ1ZSk7XG5cdFx0fWVsc2V7XG5cdFx0XHQvLyBoYW5kbGUgbm9uLUJsb2IoKStub24tVVJMIGJyb3dzZXJzOlxuXHRcdFx0aWYodHlwZW9mIGJsb2IgPT09IFwic3RyaW5nXCIgfHwgYmxvYi5jb25zdHJ1Y3Rvcj09PXRvU3RyaW5nICl7XG5cdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRyZXR1cm4gc2F2ZXIoIFwiZGF0YTpcIiArICBtaW1lVHlwZSAgICsgXCI7YmFzZTY0LFwiICArICBzZWxmLmJ0b2EoYmxvYikgICk7XG5cdFx0XHRcdH1jYXRjaCh5KXtcblx0XHRcdFx0XHRyZXR1cm4gc2F2ZXIoIFwiZGF0YTpcIiArICBtaW1lVHlwZSAgICsgXCIsXCIgKyBlbmNvZGVVUklDb21wb25lbnQoYmxvYikgICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQmxvYiBidXQgbm90IFVSTCBzdXBwb3J0OlxuXHRcdFx0cmVhZGVyPW5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRyZWFkZXIub25sb2FkPWZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRzYXZlcih0aGlzLnJlc3VsdCk7XG5cdFx0XHR9O1xuXHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9OyAvKiBlbmQgZG93bmxvYWQoKSAqL1xufSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/downloadjs/download.js\n");

/***/ })

};
;