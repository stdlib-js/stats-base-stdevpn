// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var a=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=t?r+i(n):i(n)+r,a&&(r="-"+r)),r}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=a(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=a(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):n.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(r){return"string"==typeof r}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,i,a=parseFloat(r.arg);if(!isFinite(a)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);a=r.arg}switch(r.specifier){case"e":case"E":i=a.toExponential(r.precision);break;case"f":case"F":i=a.toFixed(r.precision);break;case"g":case"G":p(a)<1e-4?((e=r.precision)>0&&(e-=1),i=a.toExponential(e)):i=a.toPrecision(r.precision),r.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,b,"e"),i=f.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),r.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),a>=0&&r.sign&&(i=r.sign+i),i=r.specifier===u.call(r.specifier)?u.call(i):l.call(i)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function k(r,e,t){var i=e-r.length;return i<0?r:r=t?r+_(i):_(i)+r}var x=String.fromCharCode,E=isNaN,S=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,t,i,n,o,p,l,u,f;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(p="",l=1,u=0;u<r.length;u++)if(s(i=r[u]))p+=i;else{if(e=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,E(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=k(i.arg,i.width,i.padRight)),p+=i.arg||"",l+=1}return p}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,i,a;for(t=[],a=0,i=$.exec(r);i;)(e=r.slice(a,$.lastIndex-i[0].length)).length&&t.push(e),t.push(F(i)),a=$.lastIndex,i=$.exec(r);return(e=r.slice(a)).length&&t.push(e),t}function I(r){return"string"==typeof r}function T(r){var e,t,i;if(!I(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return j.apply(null,t)}var C=Object.prototype,N=C.toString,R=C.__defineGetter__,O=C.__defineSetter__,P=C.__lookupGetter__,Z=C.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,a,n,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(P.call(r,e)||Z.call(r,e)?(i=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&R&&R.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function W(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var L=Math.floor;function M(r,e,t,i){var a,n,o,c,s,p,l,u,f,g,d,h,w;if(r<=0)return 0;if(1===r||0===t)return e[i];if(a=i,r<8){for(d=0,w=0;w<r;w++)d+=e[a],a+=t;return d}if(r<=128){for(n=e[a],o=e[a+t],c=e[a+2*t],s=e[a+3*t],p=e[a+4*t],l=e[a+5*t],u=e[a+6*t],f=e[a+7*t],a+=8*t,g=r%8,w=8;w<r-g;w+=8)n+=e[a],o+=e[a+t],c+=e[a+2*t],s+=e[a+3*t],p+=e[a+4*t],l+=e[a+5*t],u+=e[a+6*t],f+=e[a+7*t],a+=8*t;for(d=n+o+(c+s)+(p+l+(u+f));w<r;w++)d+=e[a],a+=t;return d}return h=L(r/2),M(h-=h%8,e,t,a)+M(r-h,e,t,a+h*t)}function U(r,e,t){var i,a,n;if(r<=0)return 0;if(1===r||0===t)return e[0];if(i=t<0?(1-r)*t:0,r<8){for(a=0,n=0;n<r;n++)a+=e[i],i+=t;return a}return M(r,e,t,i)}function X(r,e,t,i){var a,n,o,c,s,p,l;if(p=r-e,r<=0||p<=0)return NaN;if(1===r||0===i)return 0;for(a=U(r,t,i)/r,n=i<0?(1-r)*i:0,o=0,c=0,l=0;l<r;l++)o+=(s=t[n]-a)*s,c+=s,n+=i;return o/p-c/r*(c/p)}W(U,"ndarray",M),W(X,"ndarray",(function(r,e,t,i,a){var n,o,c,s,p,l,u;if(l=r-e,r<=0||l<=0)return NaN;if(1===r||0===i)return 0;for(n=M(r,t,i,a)/r,o=a,c=0,s=0,u=0;u<r;u++)c+=(p=t[o]-n)*p,s+=p,o+=i;return c/l-s/r*(s/l)}));const{ndarray:q}=X;var z=Math.sqrt;function B(r,e,t,i){return z(X(r,e,t,i))}W(B,"ndarray",(function(r,e,t,i,a){return z(q(r,e,t,i,a))}));const{ndarray:D}=B;export{B as default,D as ndarray};
//# sourceMappingURL=mod.js.map