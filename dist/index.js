"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=n(function(h,s){
var o=require('@stdlib/stats-base-variancepn/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function y(e,r,t,a){return x(o(e,r,t,a))}s.exports=y
});var v=n(function(j,u){
var f=require('@stdlib/stats-base-variancepn/dist').ndarray,l=require('@stdlib/math-base-special-sqrt/dist');function m(e,r,t,a,d){return l(f(e,r,t,a,d))}u.exports=m
});var c=n(function(k,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=i(),R=v();O(q,"ndarray",R);p.exports=q
});var b=c();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
