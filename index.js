// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__,l=t,c=function(r,e,t){var l,c,d,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),d="get"in t,p="set"in t,c&&(d||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return d&&a&&a.call(r,e,t.get),p&&i&&i.call(r,e,t.set),r},d=e()?l:c,p=function(r,e,t){d(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},_=Math.floor,y=function r(e,t,n,o){var a,i,u,f,l,c,d,p,y,s,b,v,j;if(e<=0)return 0;if(1===e||0===n)return t[o];if(a=o,e<8){for(b=0,j=0;j<e;j++)b+=t[a],a+=n;return b}if(e<=128){for(i=t[a],u=t[a+n],f=t[a+2*n],l=t[a+3*n],c=t[a+4*n],d=t[a+5*n],p=t[a+6*n],y=t[a+7*n],a+=8*n,s=e%8,j=8;j<e-s;j+=8)i+=t[a],u+=t[a+n],f+=t[a+2*n],l+=t[a+3*n],c+=t[a+4*n],d+=t[a+5*n],p+=t[a+6*n],y+=t[a+7*n],a+=8*n;for(b=i+u+(f+l)+(c+d+(p+y));j<e;j++)b+=t[a],a+=n;return b}return v=_(e/2),r(v-=v%8,t,n,a)+r(e-v,t,n,a+v*n)},s=y,b=function(r,e,t){var n,o,a;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,a=0;a<r;a++)o+=e[n],n+=t;return o}return s(r,e,t,n)};p(b,"ndarray",y);var v=b,j=b.ndarray,m=function(r,e,t,n){var o,a,i,u,f,l,c;if(l=r-e,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(o=v(r,t,n)/r,a=n<0?(1-r)*n:0,i=0,u=0,c=0;c<r;c++)i+=(f=t[a]-o)*f,u+=f,a+=n;return i/l-u/r*(u/l)};p(m,"ndarray",(function(r,e,t,n,o){var a,i,u,f,l,c,d;if(c=r-e,r<=0||c<=0)return NaN;if(1===r||0===n)return 0;for(a=j(r,t,n,o)/r,i=o,u=0,f=0,d=0;d<r;d++)u+=(l=t[i]-a)*l,f+=l,i+=n;return u/c-f/r*(f/c)}));var g=m,h=Math.sqrt;function w(r,e,t,n){return h(g(r,e,t,n))}return p(w,"ndarray",(function(r,e,t,n,o){return h(g.ndarray(r,e,t,n,o))})),w},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).stdevpn=e();
//# sourceMappingURL=index.js.map
