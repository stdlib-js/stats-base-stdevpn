// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,a=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,f=n.__lookupSetter__;var l=t,c=function(r,e,t){var l,c,_,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(i.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),_="get"in t,v="set"in t,c&&(_||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},_=e()?l:c;var v=function(r,e,t){_(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},p=Math.floor;var y=function r(e,t,n,a){var o,u,i,f,l,c,_,v,y,d,b,s,j;if(e<=0)return 0;if(1===e||0===n)return t[a];if(o=a,e<8){for(b=0,j=0;j<e;j++)b+=t[o],o+=n;return b}if(e<=128){for(u=t[o],i=t[o+n],f=t[o+2*n],l=t[o+3*n],c=t[o+4*n],_=t[o+5*n],v=t[o+6*n],y=t[o+7*n],o+=8*n,d=e%8,j=8;j<e-d;j+=8)u+=t[o],i+=t[o+n],f+=t[o+2*n],l+=t[o+3*n],c+=t[o+4*n],_+=t[o+5*n],v+=t[o+6*n],y+=t[o+7*n],o+=8*n;for(b=u+i+(f+l)+(c+_+(v+y));j<e;j++)b+=t[o],o+=n;return b}return s=p(e/2),r(s-=s%8,t,n,o)+r(e-s,t,n,o+s*n)},d=y;var b=function(r,e,t){var n,a,o;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(a=0,o=0;o<r;o++)a+=e[n],n+=t;return a}return d(r,e,t,n)};v(b,"ndarray",y);var s=b;var j=b.ndarray;var g=function(r,e,t,n){var a,o,u,i,f,l,c;if(l=r-e,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(a=s(r,t,n)/r,o=n<0?(1-r)*n:0,u=0,i=0,c=0;c<r;c++)u+=(f=t[o]-a)*f,i+=f,o+=n;return u/l-i/r*(i/l)};v(g,"ndarray",(function(r,e,t,n,a){var o,u,i,f,l,c,_;if(c=r-e,r<=0||c<=0)return NaN;if(1===r||0===n)return 0;for(o=j(r,t,n,a)/r,u=a,i=0,f=0,_=0;_<r;_++)i+=(l=t[u]-o)*l,f+=l,u+=n;return i/c-f/r*(f/c)}));var m=g,w=Math.sqrt,h=m,N=w;var O=m.ndarray,P=w;var E=function(r,e,t,n){return N(h(r,e,t,n))};v(E,"ndarray",(function(r,e,t,n,a){return P(O(r,e,t,n,a))}));var S=E;export{S as default};
//# sourceMappingURL=mod.js.map
