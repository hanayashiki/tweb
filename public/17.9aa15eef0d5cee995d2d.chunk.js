(this.webpackJsonp=this.webpackJsonp||[]).push([[17],{10:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));const i=s(48).a.debug,n="undefined"!=typeof window?window:self,r=i?n:{};e.b=i,i||(n.sandpitTurtle=()=>{for(let t in r)n[t]=r[t]})},45:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));class i{constructor(t){this._constructor(t)}_constructor(t=!1){this.reuseResults=t,this.listeners={},this.listenerResults={}}addEventListener(t,e,s){var i;this.listenerResults.hasOwnProperty(t)&&(e(...this.listenerResults[t]),s)||(null!==(i=this.listeners[t])&&void 0!==i?i:this.listeners[t]=[]).push({callback:e,once:s})}removeEventListener(t,e){this.listeners[t]&&this.listeners[t].findAndSplice(t=>t.callback===e)}dispatchEvent(t,...e){this.reuseResults&&(this.listenerResults[t]=e);const s=[],i=this.listeners[t];if(i){i.slice().forEach(n=>{-1!==i.findIndex(t=>t.callback===n.callback)&&(s.push(n.callback(...e)),n.once&&this.removeEventListener(t,n.callback))})}return s}cleanup(){this.listeners={},this.listenerResults={}}}},48:function(t,e,s){"use strict";const i={test:location.search.indexOf("test=1")>0,debug:location.search.indexOf("debug=1")>0,http:!1,ssl:!0,multipleConnections:!0,asServiceWorker:!1};e.a=i},9:function(t,e,s){"use strict";s.r(e),s.d(e,"RootScope",(function(){return r}));var i=s(45),n=s(10);class r extends i.a{constructor(){super(),this._overlayIsActive=!1,this.myId=0,this.idle={isIDLE:!0},this.connectionStatus={},this.broadcast=(t,e)=>{this.dispatchEvent(t,e)},this.on=(t,e,s)=>{super.addEventListener(t,e,s)},this.addEventListener=this.on,this.off=(t,e)=>{super.removeEventListener(t,e)},this.removeEventListener=this.off,this.on("user_auth",t=>{this.myId=t}),this.on("connection_status_change",t=>{const e=t;this.connectionStatus[t.name]=e})}get overlayIsActive(){return this._overlayIsActive}set overlayIsActive(t){this._overlayIsActive=t,this.broadcast("overlay_toggle",t)}}const c=new r;n.a.rootScope=c,e.default=c,c.addEventListener("album_edit",t=>{}),c.addEventListener("album_edit",t=>{})}}]);