"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(h,i){
var o=require('@stdlib/stats-strided-variancepn/dist').ndarray,y=require('@stdlib/math-base-special-sqrt/dist');function f(e,r,a,t,c){return y(o(e,r,a,t,c))}i.exports=f
});var v=s(function(j,u){
var x=require('@stdlib/strided-base-stride2offset/dist'),l=n();function m(e,r,a,t){return l(e,r,a,t,x(e,t))}u.exports=m
});var p=s(function(k,d){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),R=n();O(q,"ndarray",R);d.exports=q
});var b=p();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
