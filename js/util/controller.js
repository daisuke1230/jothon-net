function import$(t,e){var r={}.hasOwnProperty;for(var n in e)r.call(e,n)&&(t[n]=e[n]);return t}var controller;controller={modelWrap:function(t,e,r){var n;switch(n=t.getAttribute("data-model"),r.model[n]=t,e[n]=null,t.nodeName.toLowerCase()){case"input":switch(t.getAttribute("type")){case"checkbox":return t.addEventListener("change",function(){return e[n]=this.checked});default:return t.addEventListener("input",function(){return e[n]=this.value})}break;case"textarea":return t.addEventListener("input",function(){return e[n]=this.value})}},rootWrap:function(t,e,r){var n,a,o,i,u,l,c,d;for(n=[{root:e,model:{},text:{}},{}],a=n[0],o=n[1],i=e.querySelectorAll("*[data-dom]"),u=0,l=i.length;u<l;++u)c=i[u],a[c.getAttribute("data-dom")]=c;for(i=e.querySelectorAll("*[data-model]"),u=0,l=i.length;u<l;++u)c=i[u],this.modelWrap(c,o,a);for(i=e.querySelectorAll("*[data-text]"),u=0,l=i.length;u<l;++u)c=i[u],a.text[c.getAttribute("data-text")]=c;return d=new t(a,o,r),d.dom=a,d.data=o,d},register:function(t,e){var r,n;return r=document.querySelectorAll("*[data-controller="+t.controller+"]"),import$(t.prototype,{fire:function(t,e){var r,n,a,o,i,u=[];for(r=0,o=(n=(a=this._handlers||(this._handlers={}))[t]||(a[t]=[])).length;r<o;++r)i=n[r],u.push(i(e));return u},listen:function(t,e){var r;return((r=this._handlers||(this._handlers={}))[t]||(r[t]=[])).push(e)},setText:function(t,e){return this.dom.text[t].innerText=e},set:function(t,e){var r;switch(this.data[t]=e,r=this.dom.model[t],r.getAttribute("type")){case"checkbox":r.checked=!!e;break;default:r.value=e}return this.fire(t,e)},get:function(t){return this.data[t]}}),function(){var a,o,i,u=[];for(a=0,i=(o=r).length;a<i;++a)n=o[a],u.push(this.rootWrap(t,n,e));return u}.call(this)}};