const __vite__fileDeps = ["assets/Ranking-DiGiNNkt.js", "assets/Ranking-CxUanoA3.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function mf(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const et={},si=[],pn=()=>{},Cb=()=>!1,ac=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),gf=t=>t.startsWith("onUpdate:"),Tt=Object.assign,yf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sb=Object.prototype.hasOwnProperty,Ne=(t,e)=>Sb.call(t,e),de=Array.isArray,ii=t=>lc(t)==="[object Map]",Zy=t=>lc(t)==="[object Set]",ge=t=>typeof t=="function",st=t=>typeof t=="string",Ms=t=>typeof t=="symbol",Qe=t=>t!==null&&typeof t=="object",ev=t=>(Qe(t)||ge(t))&&ge(t.then)&&ge(t.catch),tv=Object.prototype.toString,lc=t=>tv.call(t),Pb=t=>lc(t).slice(8,-1),nv=t=>lc(t)==="[object Object]",vf=t=>st(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vo=mf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nb=/-(\w)/g,Hn=cc(t=>t.replace(Nb,(e,n)=>n?n.toUpperCase():"")),kb=/\B([A-Z])/g,ki=cc(t=>t.replace(kb,"-$1").toLowerCase()),uc=cc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Eu=cc(t=>t?`on${uc(t)}`:""),Hr=(t,e)=>!Object.is(t,e),Tu=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},rv=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ob=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let a_;const sv=()=>a_||(a_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hc(t){if(de(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=st(r)?xb(r):hc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(st(t)||Qe(t))return t}const Lb=/;(?![^(]*\))/g,Db=/:([^]+)/,Mb=/\/\*[^]*?\*\//g;function xb(t){const e={};return t.replace(Mb,"").split(Lb).forEach(n=>{if(n){const r=n.split(Db);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function fc(t){let e="";if(st(t))e=t;else if(de(t))for(let n=0;n<t.length;n++){const r=fc(t[n]);r&&(e+=r+" ")}else if(Qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function y$(t){if(!t)return null;let{class:e,style:n}=t;return e&&!st(e)&&(t.class=fc(e)),n&&(t.style=hc(n)),t}const Fb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vb=mf(Fb);function iv(t){return!!t||t===""}const v$=t=>st(t)?t:t==null?"":de(t)||Qe(t)&&(t.toString===tv||!ge(t.toString))?JSON.stringify(t,ov,2):String(t),ov=(t,e)=>e&&e.__v_isRef?ov(t,e.value):ii(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Iu(r,i)+" =>"]=s,n),{})}:Zy(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Iu(n))}:Ms(e)?Iu(e):Qe(e)&&!de(e)&&!nv(e)?String(e):e,Iu=(t,e="")=>{var n;return Ms(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let an;class av{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=an,!e&&an&&(this.index=(an.scopes||(an.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=an;try{return an=this,e()}finally{an=n}}}on(){an=this}off(){an=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function lv(t){return new av(t)}function Ub(t,e=an){e&&e.active&&e.effects.push(t)}function cv(){return an}function $b(t){an&&an.cleanups.push(t)}let Es;class Ef{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ub(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,Xr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return!0;if(Bb(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),Jr()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Mr,n=Es;try{return Mr=!0,Es=this,this._runnings++,l_(this),this.fn()}finally{c_(this),this._runnings--,Es=n,Mr=e}}stop(){this.active&&(l_(this),c_(this),this.onStop&&this.onStop(),this.active=!1)}}function Bb(t){return t.value}function l_(t){t._trackId++,t._depsLength=0}function c_(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)uv(t.deps[e],t);t.deps.length=t._depsLength}}function uv(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Mr=!0,rh=0;const hv=[];function Xr(){hv.push(Mr),Mr=!1}function Jr(){const t=hv.pop();Mr=t===void 0?!0:t}function Tf(){rh++}function If(){for(rh--;!rh&&sh.length;)sh.shift()()}function fv(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&uv(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const sh=[];function dv(t,e,n){Tf();for(const r of t.keys()){if(!t.computed&&r.computed&&t.get(r)===r._trackId&&r._runnings>0){r._dirtyLevel=2;continue}let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&sh.push(r.scheduler)))}If()}const pv=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Il=new WeakMap,Ts=Symbol(""),ih=Symbol("");function rn(t,e,n){if(Mr&&Es){let r=Il.get(t);r||Il.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=pv(()=>r.delete(n))),fv(Es,s)}}function lr(t,e,n,r,s,i){const o=Il.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&de(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||!Ms(h)&&h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":de(t)?vf(n)&&a.push(o.get("length")):(a.push(o.get(Ts)),ii(t)&&a.push(o.get(ih)));break;case"delete":de(t)||(a.push(o.get(Ts)),ii(t)&&a.push(o.get(ih)));break;case"set":ii(t)&&a.push(o.get(Ts));break}Tf();for(const l of a)l&&dv(l,5);If()}function jb(t,e){const n=Il.get(t);return n&&n.get(e)}const Wb=mf("__proto__,__v_isRef,__isVue"),_v=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ms)),u_=Hb();function Hb(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Me(this);for(let i=0,o=this.length;i<o;i++)rn(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Me)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Xr(),Tf();const r=Me(this)[e].apply(this,n);return If(),Jr(),r}}),t}function qb(t){Ms(t)||(t=String(t));const e=Me(this);return rn(e,"has",t),e.hasOwnProperty(t)}class mv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?sR:Ev:i?vv:yv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=de(e);if(!s){if(o&&Ne(u_,n))return Reflect.get(u_,n,r);if(n==="hasOwnProperty")return qb}const a=Reflect.get(e,n,r);return(Ms(n)?_v.has(n):Wb(n))||(s||rn(e,"get",n),i)?a:It(a)?o&&vf(n)?a:a.value:Qe(a)?s?Iv(a):pc(a):a}}class gv extends mv{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Vo(i);if(!wl(r)&&!Vo(r)&&(i=Me(i),r=Me(r)),!de(e)&&It(i)&&!It(r))return l?!1:(i.value=r,!0)}const o=de(e)&&vf(n)?Number(n)<e.length:Ne(e,n),a=Reflect.set(e,n,r,s);return e===Me(s)&&(o?Hr(r,i)&&lr(e,"set",n,r):lr(e,"add",n,r)),a}deleteProperty(e,n){const r=Ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&lr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ms(n)||!_v.has(n))&&rn(e,"has",n),r}ownKeys(e){return rn(e,"iterate",de(e)?"length":Ts),Reflect.ownKeys(e)}}class Gb extends mv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Kb=new gv,zb=new Gb,Yb=new gv(!0);const wf=t=>t,dc=t=>Reflect.getPrototypeOf(t);function Ua(t,e,n=!1,r=!1){t=t.__v_raw;const s=Me(t),i=Me(e);n||(Hr(e,i)&&rn(s,"get",e),rn(s,"get",i));const{has:o}=dc(s),a=r?wf:n?Rf:Uo;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function $a(t,e=!1){const n=this.__v_raw,r=Me(n),s=Me(t);return e||(Hr(t,s)&&rn(r,"has",t),rn(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ba(t,e=!1){return t=t.__v_raw,!e&&rn(Me(t),"iterate",Ts),Reflect.get(t,"size",t)}function h_(t){t=Me(t);const e=Me(this);return dc(e).has.call(e,t)||(e.add(t),lr(e,"add",t,t)),this}function f_(t,e){e=Me(e);const n=Me(this),{has:r,get:s}=dc(n);let i=r.call(n,t);i||(t=Me(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Hr(e,o)&&lr(n,"set",t,e):lr(n,"add",t,e),this}function d_(t){const e=Me(this),{has:n,get:r}=dc(e);let s=n.call(e,t);s||(t=Me(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&lr(e,"delete",t,void 0),i}function p_(){const t=Me(this),e=t.size!==0,n=t.clear();return e&&lr(t,"clear",void 0,void 0),n}function ja(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Me(o),l=e?wf:t?Rf:Uo;return!t&&rn(a,"iterate",Ts),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function Wa(t,e,n){return function(...r){const s=this.__v_raw,i=Me(s),o=ii(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?wf:e?Rf:Uo;return!e&&rn(i,"iterate",l?ih:Ts),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function Ir(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Qb(){const t={get(i){return Ua(this,i)},get size(){return Ba(this)},has:$a,add:h_,set:f_,delete:d_,clear:p_,forEach:ja(!1,!1)},e={get(i){return Ua(this,i,!1,!0)},get size(){return Ba(this)},has:$a,add:h_,set:f_,delete:d_,clear:p_,forEach:ja(!1,!0)},n={get(i){return Ua(this,i,!0)},get size(){return Ba(this,!0)},has(i){return $a.call(this,i,!0)},add:Ir("add"),set:Ir("set"),delete:Ir("delete"),clear:Ir("clear"),forEach:ja(!0,!1)},r={get(i){return Ua(this,i,!0,!0)},get size(){return Ba(this,!0)},has(i){return $a.call(this,i,!0)},add:Ir("add"),set:Ir("set"),delete:Ir("delete"),clear:Ir("clear"),forEach:ja(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Wa(i,!1,!1),n[i]=Wa(i,!0,!1),e[i]=Wa(i,!1,!0),r[i]=Wa(i,!0,!0)}),[t,n,e,r]}const[Xb,Jb,Zb,eR]=Qb();function Af(t,e){const n=e?t?eR:Zb:t?Jb:Xb;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ne(n,s)&&s in r?n:r,s,i)}const tR={get:Af(!1,!1)},nR={get:Af(!1,!0)},rR={get:Af(!0,!1)};const yv=new WeakMap,vv=new WeakMap,Ev=new WeakMap,sR=new WeakMap;function iR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oR(t){return t.__v_skip||!Object.isExtensible(t)?0:iR(Pb(t))}function pc(t){return Vo(t)?t:bf(t,!1,Kb,tR,yv)}function Tv(t){return bf(t,!1,Yb,nR,vv)}function Iv(t){return bf(t,!0,zb,rR,Ev)}function bf(t,e,n,r,s){if(!Qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=oR(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Eo(t){return Vo(t)?Eo(t.__v_raw):!!(t&&t.__v_isReactive)}function Vo(t){return!!(t&&t.__v_isReadonly)}function wl(t){return!!(t&&t.__v_isShallow)}function wv(t){return t?!!t.__v_raw:!1}function Me(t){const e=t&&t.__v_raw;return e?Me(e):t}function aR(t){return Object.isExtensible(t)&&rv(t,"__v_skip",!0),t}const Uo=t=>Qe(t)?pc(t):t,Rf=t=>Qe(t)?Iv(t):t;class Av{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ef(()=>e(this._value),()=>al(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Me(this);return(!e._cacheable||e.effect.dirty)&&Hr(e._value,e._value=e.effect.run())&&al(e,5),bv(e),e.effect._dirtyLevel>=2&&al(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function lR(t,e,n=!1){let r,s;const i=ge(t);return i?(r=t,s=pn):(r=t.get,s=t.set),new Av(r,s,i||!s,n)}function bv(t){var e;Mr&&Es&&(t=Me(t),fv(Es,(e=t.dep)!=null?e:t.dep=pv(()=>t.dep=void 0,t instanceof Av?t:void 0)))}function al(t,e=5,n,r){t=Me(t);const s=t.dep;s&&dv(s,e)}function It(t){return!!(t&&t.__v_isRef===!0)}function tn(t){return Rv(t,!1)}function _c(t){return Rv(t,!0)}function Rv(t,e){return It(t)?t:new cR(t,e)}class cR{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Me(e),this._value=n?e:Uo(e)}get value(){return bv(this),this._value}set value(e){const n=this.__v_isShallow||wl(e)||Vo(e);e=n?e:Me(e),Hr(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Uo(e),al(this,5))}}function xr(t){return It(t)?t.value:t}function tr(t){return ge(t)?t():xr(t)}const uR={get:(t,e,n)=>xr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return It(s)&&!It(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Cv(t){return Eo(t)?t:new Proxy(t,uR)}function E$(t){const e=de(t)?new Array(t.length):{};for(const n in t)e[n]=Sv(t,n);return e}class hR{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return jb(Me(this._object),this._key)}}class fR{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function T$(t,e,n){return It(t)?t:ge(t)?new fR(t):Qe(t)&&arguments.length>1?Sv(t,e,n):tn(t)}function Sv(t,e,n){const r=t[e];return It(r)?r:new hR(t,e,n)}/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fr(t,e,n,r){try{return r?t(...r):t()}catch(s){mc(s,e,n)}}function Sn(t,e,n,r){if(ge(t)){const s=Fr(t,e,n,r);return s&&ev(s)&&s.catch(i=>{mc(i,e,n)}),s}if(de(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Sn(t[i],e,n,r));return s}}function mc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Xr(),Fr(l,null,10,[t,o,a]),Jr();return}}dR(t,n,s,r)}function dR(t,e,n,r=!0){console.error(t)}let $o=!1,oh=!1;const Bt=[];let Mn=0;const oi=[];let Rr=null,_s=0;const Pv=Promise.resolve();let Cf=null;function Nv(t){const e=Cf||Pv;return t?e.then(this?t.bind(this):t):e}function pR(t){let e=Mn+1,n=Bt.length;for(;e<n;){const r=e+n>>>1,s=Bt[r],i=Bo(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Sf(t){(!Bt.length||!Bt.includes(t,$o&&t.allowRecurse?Mn+1:Mn))&&(t.id==null?Bt.push(t):Bt.splice(pR(t.id),0,t),kv())}function kv(){!$o&&!oh&&(oh=!0,Cf=Pv.then(Lv))}function _R(t){const e=Bt.indexOf(t);e>Mn&&Bt.splice(e,1)}function mR(t){de(t)?oi.push(...t):(!Rr||!Rr.includes(t,t.allowRecurse?_s+1:_s))&&oi.push(t),kv()}function __(t,e,n=$o?Mn+1:0){for(;n<Bt.length;n++){const r=Bt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Bt.splice(n,1),n--,r()}}}function Ov(t){if(oi.length){const e=[...new Set(oi)].sort((n,r)=>Bo(n)-Bo(r));if(oi.length=0,Rr){Rr.push(...e);return}for(Rr=e,_s=0;_s<Rr.length;_s++){const n=Rr[_s];n.active!==!1&&n()}Rr=null,_s=0}}const Bo=t=>t.id==null?1/0:t.id,gR=(t,e)=>{const n=Bo(t)-Bo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Lv(t){oh=!1,$o=!0,Bt.sort(gR);try{for(Mn=0;Mn<Bt.length;Mn++){const e=Bt[Mn];e&&e.active!==!1&&Fr(e,null,14)}}finally{Mn=0,Bt.length=0,Ov(),$o=!1,Cf=null,(Bt.length||oi.length)&&Lv()}}function yR(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||et;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[h]||et;p&&(s=n.map(m=>st(m)?m.trim():m)),d&&(s=n.map(Ob))}let a,l=r[a=Eu(e)]||r[a=Eu(Hn(e))];!l&&i&&(l=r[a=Eu(ki(e))]),l&&Sn(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Sn(u,t,6,s)}}function Dv(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ge(t)){const l=u=>{const h=Dv(u,e,!0);h&&(a=!0,Tt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Qe(t)&&r.set(t,null),null):(de(i)?i.forEach(l=>o[l]=null):Tt(o,i),Qe(t)&&r.set(t,o),o)}function gc(t,e){return!t||!ac(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,ki(e))||Ne(t,e))}let jt=null,yc=null;function Al(t){const e=jt;return jt=t,yc=t&&t.type.__scopeId||null,e}function I$(t){yc=t}function w$(){yc=null}function vR(t,e=jt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&P_(-1);const i=Al(e);let o;try{o=t(...s)}finally{Al(i),r._d&&P_(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wu(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:m,ctx:A,inheritAttrs:N}=t,P=Al(t);let V,B;try{if(n.shapeFlag&4){const L=s||r,j=L;V=Dn(u.call(j,L,h,d,m,p,A)),B=a}else{const L=e;V=Dn(L.length>1?L(d,{attrs:a,slots:o,emit:l}):L(d,null)),B=e.props?a:ER(a)}}catch(L){bo.length=0,mc(L,t,1),V=Wt(qr)}let C=V;if(B&&N!==!1){const L=Object.keys(B),{shapeFlag:j}=C;L.length&&j&7&&(i&&L.some(gf)&&(B=TR(B,i)),C=di(C,B,!1,!0))}return n.dirs&&(C=di(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),V=C,Al(P),V}const ER=t=>{let e;for(const n in t)(n==="class"||n==="style"||ac(n))&&((e||(e={}))[n]=t[n]);return e},TR=(t,e)=>{const n={};for(const r in t)(!gf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function IR(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?m_(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==r[p]&&!gc(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?m_(r,o,u):!0:!!o;return!1}function m_(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!gc(n,i))return!0}return!1}function wR({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Mv="components";function A$(t,e){return bR(Mv,t,!0,e)||t}const AR=Symbol.for("v-ndc");function bR(t,e,n=!0,r=!1){const s=jt||Rt;if(s){const i=s.type;if(t===Mv){const a=yC(i,!1);if(a&&(a===e||a===Hn(e)||a===uc(Hn(e))))return i}const o=g_(s[t]||i[t],e)||g_(s.appContext[t],e);return!o&&r?i:o}}function g_(t,e){return t&&(t[e]||t[Hn(e)]||t[uc(Hn(e))])}const RR=t=>t.__isSuspense;function CR(t,e){e&&e.pendingBranch?de(t)?e.effects.push(...t):e.effects.push(t):mR(t)}function vc(t,e,n=Rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Xr();const a=ua(n),l=Sn(e,n,t,o);return a(),Jr(),l});return r?s.unshift(i):s.push(i),i}}const gr=t=>(e,n=Rt)=>{(!Ec||t==="sp")&&vc(t,(...r)=>e(...r),n)},xv=gr("bm"),Fv=gr("m"),SR=gr("bu"),PR=gr("u"),NR=gr("bum"),Pf=gr("um"),Vv=gr("sp"),kR=gr("rtg"),OR=gr("rtc");function LR(t,e=Rt){vc("ec",t,e)}function cs(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Xr(),Sn(l,n,8,[t.el,a,t,e]),Jr())}}function b$(t,e,n,r){let s;const i=n;if(de(t)||st(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(Qe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=e(t[u],u,a,i)}}else s=[];return s}/*! #__NO_SIDE_EFFECTS__ */function la(t,e){return ge(t)?Tt({name:t.name},e,{setup:t}):t}const To=t=>!!t.type.__asyncLoader;function R$(t,e,n={},r,s){if(jt.isCE||jt.parent&&To(jt.parent)&&jt.parent.isCE)return Wt("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),Df();const o=i&&Uv(i(n)),a=Mf(ln,{key:n.key||o&&o.key||`_${e}`},o||[],o&&t._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Uv(t){return t.some(e=>Rl(e)?!(e.type===qr||e.type===ln&&!Uv(e.children)):!0)?t:null}const ah=t=>t?iE(t)?Ff(t):ah(t.parent):null,Io=Tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ah(t.parent),$root:t=>ah(t.root),$emit:t=>t.emit,$options:t=>Nf(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Sf(t.update)}),$nextTick:t=>t.n||(t.n=Nv.bind(t.proxy)),$watch:t=>eC.bind(t)}),Au=(t,e)=>t!==et&&!t.__isScriptSetup&&Ne(t,e),DR={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Au(r,e))return o[e]=1,r[e];if(s!==et&&Ne(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ne(u,e))return o[e]=3,i[e];if(n!==et&&Ne(n,e))return o[e]=4,n[e];lh&&(o[e]=0)}}const h=Io[e];let d,p;if(h)return e==="$attrs"&&rn(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==et&&Ne(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Ne(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Au(s,e)?(s[e]=n,!0):r!==et&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==et&&Ne(t,o)||Au(e,o)||(a=i[0])&&Ne(a,o)||Ne(r,o)||Ne(Io,o)||Ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function C$(){return MR().slots}function MR(){const t=fr();return t.setupContext||(t.setupContext=aE(t))}function y_(t){return de(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let lh=!0;function xR(t){const e=Nf(t),n=t.proxy,r=t.ctx;lh=!1,e.beforeCreate&&v_(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:m,updated:A,activated:N,deactivated:P,beforeDestroy:V,beforeUnmount:B,destroyed:C,unmounted:L,render:j,renderTracked:M,renderTriggered:I,errorCaptured:g,serverPrefetch:T,expose:S,inheritAttrs:O,components:D,directives:R,filters:nt}=e;if(u&&FR(u,r,null),o)for(const Ee in o){const ve=o[Ee];ge(ve)&&(r[Ee]=ve.bind(n))}if(s){const Ee=s.call(n,n);Qe(Ee)&&(t.data=pc(Ee))}if(lh=!0,i)for(const Ee in i){const ve=i[Ee],ut=ge(ve)?ve.bind(n,n):ge(ve.get)?ve.get.bind(n,n):pn,At=!ge(ve)&&ge(ve.set)?ve.set.bind(n):pn,Je=rt({get:ut,set:At});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Le=>Je.value=Le})}if(a)for(const Ee in a)$v(a[Ee],r,n,Ee);if(l){const Ee=ge(l)?l.call(n):l;Reflect.ownKeys(Ee).forEach(ve=>{ll(ve,Ee[ve])})}h&&v_(h,t,"c");function Oe(Ee,ve){de(ve)?ve.forEach(ut=>Ee(ut.bind(n))):ve&&Ee(ve.bind(n))}if(Oe(xv,d),Oe(Fv,p),Oe(SR,m),Oe(PR,A),Oe(tC,N),Oe(nC,P),Oe(LR,g),Oe(OR,M),Oe(kR,I),Oe(NR,B),Oe(Pf,L),Oe(Vv,T),de(S))if(S.length){const Ee=t.exposed||(t.exposed={});S.forEach(ve=>{Object.defineProperty(Ee,ve,{get:()=>n[ve],set:ut=>n[ve]=ut})})}else t.exposed||(t.exposed={});j&&t.render===pn&&(t.render=j),O!=null&&(t.inheritAttrs=O),D&&(t.components=D),R&&(t.directives=R)}function FR(t,e,n=pn){de(t)&&(t=ch(t));for(const r in t){const s=t[r];let i;Qe(s)?"default"in s?i=mn(s.from||r,s.default,!0):i=mn(s.from||r):i=mn(s),It(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function v_(t,e,n){Sn(de(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function $v(t,e,n,r){const s=r.includes(".")?Xv(n,r):()=>n[r];if(st(t)){const i=e[t];ge(i)&&Vr(s,i)}else if(ge(t))Vr(s,t.bind(n));else if(Qe(t))if(de(t))t.forEach(i=>$v(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&Vr(s,i,t)}}function Nf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>bl(l,u,o,!0)),bl(l,e,o)),Qe(e)&&i.set(e,l),l}function bl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&bl(t,i,n,!0),s&&s.forEach(o=>bl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=VR[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const VR={data:E_,props:T_,emits:T_,methods:fo,computed:fo,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:fo,directives:fo,watch:$R,provide:E_,inject:UR};function E_(t,e){return e?t?function(){return Tt(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function UR(t,e){return fo(ch(t),ch(e))}function ch(t){if(de(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Yt(t,e){return t?[...new Set([].concat(t,e))]:e}function fo(t,e){return t?Tt(Object.create(null),t,e):e}function T_(t,e){return t?de(t)&&de(e)?[...new Set([...t,...e])]:Tt(Object.create(null),y_(t),y_(e??{})):e}function $R(t,e){if(!t)return e;if(!e)return t;const n=Tt(Object.create(null),t);for(const r in e)n[r]=Yt(t[r],e[r]);return n}function Bv(){return{app:null,config:{isNativeTag:Cb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let BR=0;function jR(t,e){return function(r,s=null){ge(r)||(r=Tt({},r)),s!=null&&!Qe(s)&&(s=null);const i=Bv(),o=new WeakSet;let a=!1;const l=i.app={_uid:BR++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:EC,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&ge(u.install)?(o.add(u),u.install(l,...h)):ge(u)&&(o.add(u),u(l,...h))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,h){return h?(i.components[u]=h,l):i.components[u]},directive(u,h){return h?(i.directives[u]=h,l):i.directives[u]},mount(u,h,d){if(!a){const p=Wt(r,s);return p.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(p,u):t(p,u,d),a=!0,l._container=u,u.__vue_app__=l,Ff(p.component)}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return i.provides[u]=h,l},runWithContext(u){const h=wo;wo=l;try{return u()}finally{wo=h}}};return l}}let wo=null;function ll(t,e){if(Rt){let n=Rt.provides;const r=Rt.parent&&Rt.parent.provides;r===n&&(n=Rt.provides=Object.create(r)),n[t]=e}}function mn(t,e,n=!1){const r=Rt||jt;if(r||wo){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:wo._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}const jv={},Wv=()=>Object.create(jv),Hv=t=>Object.getPrototypeOf(t)===jv;function WR(t,e,n,r=!1){const s={},i=Wv();t.propsDefaults=Object.create(null),qv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Tv(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function HR(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Me(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(gc(t.emitsOptions,p))continue;const m=e[p];if(l)if(Ne(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const A=Hn(p);s[A]=uh(l,a,A,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{qv(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!Ne(e,d)&&((h=ki(d))===d||!Ne(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=uh(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Ne(e,d))&&(delete i[d],u=!0)}u&&lr(t.attrs,"set","")}function qv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(vo(l))continue;const u=e[l];let h;s&&Ne(s,h=Hn(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:gc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Me(n),u=a||et;for(let h=0;h<i.length;h++){const d=i[h];n[d]=uh(s,l,d,u[d],t,!Ne(u,d))}}return o}function uh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ne(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ge(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=ua(s);r=u[n]=l.call(null,e),h()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ki(n))&&(r=!0))}return r}function Gv(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ge(t)){const h=d=>{l=!0;const[p,m]=Gv(d,e,!0);Tt(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Qe(t)&&r.set(t,si),si;if(de(i))for(let h=0;h<i.length;h++){const d=Hn(i[h]);I_(d)&&(o[d]=et)}else if(i)for(const h in i){const d=Hn(h);if(I_(d)){const p=i[h],m=o[d]=de(p)||ge(p)?{type:p}:Tt({},p);if(m){const A=b_(Boolean,m.type),N=b_(String,m.type);m[0]=A>-1,m[1]=N<0||A<N,(A>-1||Ne(m,"default"))&&a.push(d)}}}const u=[o,a];return Qe(t)&&r.set(t,u),u}function I_(t){return t[0]!=="$"&&!vo(t)}function w_(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function A_(t,e){return w_(t)===w_(e)}function b_(t,e){return de(e)?e.findIndex(n=>A_(n,t)):ge(e)&&A_(e,t)?0:-1}const Kv=t=>t[0]==="_"||t==="$stable",kf=t=>de(t)?t.map(Dn):[Dn(t)],qR=(t,e,n)=>{if(e._n)return e;const r=vR((...s)=>kf(e(...s)),n);return r._c=!1,r},zv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Kv(s))continue;const i=t[s];if(ge(i))e[s]=qR(s,i,r);else if(i!=null){const o=kf(i);e[s]=()=>o}}},Yv=(t,e)=>{const n=kf(e);t.slots.default=()=>n},GR=(t,e)=>{const n=t.slots=Wv();if(t.vnode.shapeFlag&32){const r=e._;r?(Tt(n,e),rv(n,"_",r,!0)):zv(e,n)}else e&&Yv(t,e)},KR=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=et;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Tt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,zv(e,s)),o=e}else e&&(Yv(t,e),o={default:1});if(i)for(const a in s)!Kv(a)&&o[a]==null&&delete s[a]};function hh(t,e,n,r,s=!1){if(de(t)){t.forEach((p,m)=>hh(p,e&&(de(e)?e[m]:e),n,r,s));return}if(To(r)&&!s)return;const i=r.shapeFlag&4?Ff(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===et?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==l&&(st(u)?(h[u]=null,Ne(d,u)&&(d[u]=null)):It(u)&&(u.value=null)),ge(l))Fr(l,a,12,[o,h]);else{const p=st(l),m=It(l);if(p||m){const A=()=>{if(t.f){const N=p?Ne(d,l)?d[l]:h[l]:l.value;s?de(N)&&yf(N,i):de(N)?N.includes(i)||N.push(i):p?(h[l]=[i],Ne(d,l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else p?(h[l]=o,Ne(d,l)&&(d[l]=o)):m&&(l.value=o,t.k&&(h[t.k]=o))};o?(A.id=-1,en(A,n)):A()}}}const en=CR;function zR(t){return YR(t)}function YR(t,e){const n=sv();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:m=pn,insertStaticContent:A}=t,N=(b,v,F,K=null,q=null,X=null,ee=void 0,E=null,w=!!v.dynamicChildren)=>{if(b===v)return;b&&!so(b,v)&&(K=G(b),Le(b,q,X,!0),b=null),v.patchFlag===-2&&(w=!1,v.dynamicChildren=null);const{type:k,ref:H,shapeFlag:te}=v;switch(k){case ca:P(b,v,F,K);break;case qr:V(b,v,F,K);break;case cl:b==null&&B(v,F,K,ee);break;case ln:D(b,v,F,K,q,X,ee,E,w);break;default:te&1?j(b,v,F,K,q,X,ee,E,w):te&6?R(b,v,F,K,q,X,ee,E,w):(te&64||te&128)&&k.process(b,v,F,K,q,X,ee,E,w,ie)}H!=null&&q&&hh(H,b&&b.ref,X,v||b,!v)},P=(b,v,F,K)=>{if(b==null)r(v.el=a(v.children),F,K);else{const q=v.el=b.el;v.children!==b.children&&u(q,v.children)}},V=(b,v,F,K)=>{b==null?r(v.el=l(v.children||""),F,K):v.el=b.el},B=(b,v,F,K)=>{[b.el,b.anchor]=A(b.children,v,F,K,b.el,b.anchor)},C=({el:b,anchor:v},F,K)=>{let q;for(;b&&b!==v;)q=p(b),r(b,F,K),b=q;r(v,F,K)},L=({el:b,anchor:v})=>{let F;for(;b&&b!==v;)F=p(b),s(b),b=F;s(v)},j=(b,v,F,K,q,X,ee,E,w)=>{v.type==="svg"?ee="svg":v.type==="math"&&(ee="mathml"),b==null?M(v,F,K,q,X,ee,E,w):T(b,v,q,X,ee,E,w)},M=(b,v,F,K,q,X,ee,E)=>{let w,k;const{props:H,shapeFlag:te,transition:Y,dirs:x}=b;if(w=b.el=o(b.type,X,H&&H.is,H),te&8?h(w,b.children):te&16&&g(b.children,w,null,K,q,bu(b,X),ee,E),x&&cs(b,null,K,"created"),I(w,b,b.scopeId,ee,K),H){for(const le in H)le!=="value"&&!vo(le)&&i(w,le,null,H[le],X,b.children,K,q,Ze);"value"in H&&i(w,"value",null,H.value,X),(k=H.onVnodeBeforeMount)&&Ln(k,K,b)}x&&cs(b,null,K,"beforeMount");const $=QR(q,Y);$&&Y.beforeEnter(w),r(w,v,F),((k=H&&H.onVnodeMounted)||$||x)&&en(()=>{k&&Ln(k,K,b),$&&Y.enter(w),x&&cs(b,null,K,"mounted")},q)},I=(b,v,F,K,q)=>{if(F&&m(b,F),K)for(let X=0;X<K.length;X++)m(b,K[X]);if(q){let X=q.subTree;if(v===X){const ee=q.vnode;I(b,ee,ee.scopeId,ee.slotScopeIds,q.parent)}}},g=(b,v,F,K,q,X,ee,E,w=0)=>{for(let k=w;k<b.length;k++){const H=b[k]=E?Cr(b[k]):Dn(b[k]);N(null,H,v,F,K,q,X,ee,E)}},T=(b,v,F,K,q,X,ee)=>{const E=v.el=b.el;let{patchFlag:w,dynamicChildren:k,dirs:H}=v;w|=b.patchFlag&16;const te=b.props||et,Y=v.props||et;let x;if(F&&us(F,!1),(x=Y.onVnodeBeforeUpdate)&&Ln(x,F,v,b),H&&cs(v,b,F,"beforeUpdate"),F&&us(F,!0),k?S(b.dynamicChildren,k,E,F,K,bu(v,q),X):ee||ve(b,v,E,null,F,K,bu(v,q),X,!1),w>0){if(w&16)O(E,v,te,Y,F,K,q);else if(w&2&&te.class!==Y.class&&i(E,"class",null,Y.class,q),w&4&&i(E,"style",te.style,Y.style,q),w&8){const $=v.dynamicProps;for(let le=0;le<$.length;le++){const ce=$[le],xe=te[ce],_t=Y[ce];(_t!==xe||ce==="value")&&i(E,ce,xe,_t,q,b.children,F,K,Ze)}}w&1&&b.children!==v.children&&h(E,v.children)}else!ee&&k==null&&O(E,v,te,Y,F,K,q);((x=Y.onVnodeUpdated)||H)&&en(()=>{x&&Ln(x,F,v,b),H&&cs(v,b,F,"updated")},K)},S=(b,v,F,K,q,X,ee)=>{for(let E=0;E<v.length;E++){const w=b[E],k=v[E],H=w.el&&(w.type===ln||!so(w,k)||w.shapeFlag&70)?d(w.el):F;N(w,k,H,null,K,q,X,ee,!0)}},O=(b,v,F,K,q,X,ee)=>{if(F!==K){if(F!==et)for(const E in F)!vo(E)&&!(E in K)&&i(b,E,F[E],null,ee,v.children,q,X,Ze);for(const E in K){if(vo(E))continue;const w=K[E],k=F[E];w!==k&&E!=="value"&&i(b,E,k,w,ee,v.children,q,X,Ze)}"value"in K&&i(b,"value",F.value,K.value,ee)}},D=(b,v,F,K,q,X,ee,E,w)=>{const k=v.el=b?b.el:a(""),H=v.anchor=b?b.anchor:a("");let{patchFlag:te,dynamicChildren:Y,slotScopeIds:x}=v;x&&(E=E?E.concat(x):x),b==null?(r(k,F,K),r(H,F,K),g(v.children||[],F,H,q,X,ee,E,w)):te>0&&te&64&&Y&&b.dynamicChildren?(S(b.dynamicChildren,Y,F,q,X,ee,E),(v.key!=null||q&&v===q.subTree)&&Of(b,v,!0)):ve(b,v,F,H,q,X,ee,E,w)},R=(b,v,F,K,q,X,ee,E,w)=>{v.slotScopeIds=E,b==null?v.shapeFlag&512?q.ctx.activate(v,F,K,ee,w):nt(v,F,K,q,X,ee,w):pt(b,v,w)},nt=(b,v,F,K,q,X,ee)=>{const E=b.component=pC(b,K,q);if(Jv(b)&&(E.ctx.renderer=ie),_C(E),E.asyncDep){if(q&&q.registerDep(E,Oe,ee),!b.el){const w=E.subTree=Wt(qr);V(null,w,v,F)}}else Oe(E,b,v,F,q,X,ee)},pt=(b,v,F)=>{const K=v.component=b.component;if(IR(b,v,F))if(K.asyncDep&&!K.asyncResolved){Ee(K,v,F);return}else K.next=v,_R(K.update),K.effect.dirty=!0,K.update();else v.el=b.el,K.vnode=v},Oe=(b,v,F,K,q,X,ee)=>{const E=()=>{if(b.isMounted){let{next:H,bu:te,u:Y,parent:x,vnode:$}=b;{const ht=Qv(b);if(ht){H&&(H.el=$.el,Ee(b,H,ee)),ht.asyncDep.then(()=>{b.isUnmounted||E()});return}}let le=H,ce;us(b,!1),H?(H.el=$.el,Ee(b,H,ee)):H=$,te&&Tu(te),(ce=H.props&&H.props.onVnodeBeforeUpdate)&&Ln(ce,x,H,$),us(b,!0);const xe=wu(b),_t=b.subTree;b.subTree=xe,N(_t,xe,d(_t.el),G(_t),b,q,X),H.el=xe.el,le===null&&wR(b,xe.el),Y&&en(Y,q),(ce=H.props&&H.props.onVnodeUpdated)&&en(()=>Ln(ce,x,H,$),q)}else{let H;const{el:te,props:Y}=v,{bm:x,m:$,parent:le}=b,ce=To(v);if(us(b,!1),x&&Tu(x),!ce&&(H=Y&&Y.onVnodeBeforeMount)&&Ln(H,le,v),us(b,!0),te&&Pe){const xe=()=>{b.subTree=wu(b),Pe(te,b.subTree,b,q,null)};ce?v.type.__asyncLoader().then(()=>!b.isUnmounted&&xe()):xe()}else{const xe=b.subTree=wu(b);N(null,xe,F,K,b,q,X),v.el=xe.el}if($&&en($,q),!ce&&(H=Y&&Y.onVnodeMounted)){const xe=v;en(()=>Ln(H,le,xe),q)}(v.shapeFlag&256||le&&To(le.vnode)&&le.vnode.shapeFlag&256)&&b.a&&en(b.a,q),b.isMounted=!0,v=F=K=null}},w=b.effect=new Ef(E,pn,()=>Sf(k),b.scope),k=b.update=()=>{w.dirty&&w.run()};k.id=b.uid,us(b,!0),k()},Ee=(b,v,F)=>{v.component=b;const K=b.vnode.props;b.vnode=v,b.next=null,HR(b,v.props,K,F),KR(b,v.children,F),Xr(),__(b),Jr()},ve=(b,v,F,K,q,X,ee,E,w=!1)=>{const k=b&&b.children,H=b?b.shapeFlag:0,te=v.children,{patchFlag:Y,shapeFlag:x}=v;if(Y>0){if(Y&128){At(k,te,F,K,q,X,ee,E,w);return}else if(Y&256){ut(k,te,F,K,q,X,ee,E,w);return}}x&8?(H&16&&Ze(k,q,X),te!==k&&h(F,te)):H&16?x&16?At(k,te,F,K,q,X,ee,E,w):Ze(k,q,X,!0):(H&8&&h(F,""),x&16&&g(te,F,K,q,X,ee,E,w))},ut=(b,v,F,K,q,X,ee,E,w)=>{b=b||si,v=v||si;const k=b.length,H=v.length,te=Math.min(k,H);let Y;for(Y=0;Y<te;Y++){const x=v[Y]=w?Cr(v[Y]):Dn(v[Y]);N(b[Y],x,F,null,q,X,ee,E,w)}k>H?Ze(b,q,X,!0,!1,te):g(v,F,K,q,X,ee,E,w,te)},At=(b,v,F,K,q,X,ee,E,w)=>{let k=0;const H=v.length;let te=b.length-1,Y=H-1;for(;k<=te&&k<=Y;){const x=b[k],$=v[k]=w?Cr(v[k]):Dn(v[k]);if(so(x,$))N(x,$,F,null,q,X,ee,E,w);else break;k++}for(;k<=te&&k<=Y;){const x=b[te],$=v[Y]=w?Cr(v[Y]):Dn(v[Y]);if(so(x,$))N(x,$,F,null,q,X,ee,E,w);else break;te--,Y--}if(k>te){if(k<=Y){const x=Y+1,$=x<H?v[x].el:K;for(;k<=Y;)N(null,v[k]=w?Cr(v[k]):Dn(v[k]),F,$,q,X,ee,E,w),k++}}else if(k>Y)for(;k<=te;)Le(b[k],q,X,!0),k++;else{const x=k,$=k,le=new Map;for(k=$;k<=Y;k++){const Kt=v[k]=w?Cr(v[k]):Dn(v[k]);Kt.key!=null&&le.set(Kt.key,k)}let ce,xe=0;const _t=Y-$+1;let ht=!1,ss=0;const zn=new Array(_t);for(k=0;k<_t;k++)zn[k]=0;for(k=x;k<=te;k++){const Kt=b[k];if(xe>=_t){Le(Kt,q,X,!0);continue}let fn;if(Kt.key!=null)fn=le.get(Kt.key);else for(ce=$;ce<=Y;ce++)if(zn[ce-$]===0&&so(Kt,v[ce])){fn=ce;break}fn===void 0?Le(Kt,q,X,!0):(zn[fn-$]=k+1,fn>=ss?ss=fn:ht=!0,N(Kt,v[fn],F,null,q,X,ee,E,w),xe++)}const js=ht?XR(zn):si;for(ce=js.length-1,k=_t-1;k>=0;k--){const Kt=$+k,fn=v[Kt],Ws=Kt+1<H?v[Kt+1].el:K;zn[k]===0?N(null,fn,F,Ws,q,X,ee,E,w):ht&&(ce<0||k!==js[ce]?Je(fn,F,Ws,2):ce--)}}},Je=(b,v,F,K,q=null)=>{const{el:X,type:ee,transition:E,children:w,shapeFlag:k}=b;if(k&6){Je(b.component.subTree,v,F,K);return}if(k&128){b.suspense.move(v,F,K);return}if(k&64){ee.move(b,v,F,ie);return}if(ee===ln){r(X,v,F);for(let te=0;te<w.length;te++)Je(w[te],v,F,K);r(b.anchor,v,F);return}if(ee===cl){C(b,v,F);return}if(K!==2&&k&1&&E)if(K===0)E.beforeEnter(X),r(X,v,F),en(()=>E.enter(X),q);else{const{leave:te,delayLeave:Y,afterLeave:x}=E,$=()=>r(X,v,F),le=()=>{te(X,()=>{$(),x&&x()})};Y?Y(X,$,le):le()}else r(X,v,F)},Le=(b,v,F,K=!1,q=!1)=>{const{type:X,props:ee,ref:E,children:w,dynamicChildren:k,shapeFlag:H,patchFlag:te,dirs:Y,memoIndex:x}=b;if(E!=null&&hh(E,null,F,b,!0),x!=null&&(v.renderCache[x]=void 0),H&256){v.ctx.deactivate(b);return}const $=H&1&&Y,le=!To(b);let ce;if(le&&(ce=ee&&ee.onVnodeBeforeUnmount)&&Ln(ce,v,b),H&6)Lt(b.component,F,K);else{if(H&128){b.suspense.unmount(F,K);return}$&&cs(b,null,v,"beforeUnmount"),H&64?b.type.remove(b,v,F,q,ie,K):k&&(X!==ln||te>0&&te&64)?Ze(k,v,F,!1,!0):(X===ln&&te&384||!q&&H&16)&&Ze(w,v,F),K&&Ue(b)}(le&&(ce=ee&&ee.onVnodeUnmounted)||$)&&en(()=>{ce&&Ln(ce,v,b),$&&cs(b,null,v,"unmounted")},F)},Ue=b=>{const{type:v,el:F,anchor:K,transition:q}=b;if(v===ln){Gt(F,K);return}if(v===cl){L(b);return}const X=()=>{s(F),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(b.shapeFlag&1&&q&&!q.persisted){const{leave:ee,delayLeave:E}=q,w=()=>ee(F,X);E?E(b.el,X,w):w()}else X()},Gt=(b,v)=>{let F;for(;b!==v;)F=p(b),s(b),b=F;s(v)},Lt=(b,v,F)=>{const{bum:K,scope:q,update:X,subTree:ee,um:E,m:w,a:k}=b;R_(w),R_(k),K&&Tu(K),q.stop(),X&&(X.active=!1,Le(ee,b,v,F)),E&&en(E,v),en(()=>{b.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Ze=(b,v,F,K=!1,q=!1,X=0)=>{for(let ee=X;ee<b.length;ee++)Le(b[ee],v,F,K,q)},G=b=>b.shapeFlag&6?G(b.component.subTree):b.shapeFlag&128?b.suspense.next():p(b.anchor||b.el);let re=!1;const Z=(b,v,F)=>{b==null?v._vnode&&Le(v._vnode,null,null,!0):N(v._vnode||null,b,v,null,null,null,F),re||(re=!0,__(),Ov(),re=!1),v._vnode=b},ie={p:N,um:Le,m:Je,r:Ue,mt:nt,mc:g,pc:ve,pbc:S,n:G,o:t};let Te,Pe;return{render:Z,hydrate:Te,createApp:jR(Z,Te)}}function bu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function us({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function QR(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Of(t,e,n=!1){const r=t.children,s=e.children;if(de(r)&&de(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Cr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Of(o,a)),a.type===ca&&(a.el=o.el)}}function XR(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Qv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qv(e)}function R_(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const JR=Symbol.for("v-scx"),ZR=()=>mn(JR);function S$(t,e){return Lf(t,null,e)}const Ha={};function Vr(t,e,n){return Lf(t,e,n)}function Lf(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=et){if(e&&i){const M=e;e=(...I)=>{M(...I),j()}}const l=Rt,u=M=>r===!0?M:ms(M,r===!1?1:void 0);let h,d=!1,p=!1;if(It(t)?(h=()=>t.value,d=wl(t)):Eo(t)?(h=()=>u(t),d=!0):de(t)?(p=!0,d=t.some(M=>Eo(M)||wl(M)),h=()=>t.map(M=>{if(It(M))return M.value;if(Eo(M))return u(M);if(ge(M))return Fr(M,l,2)})):ge(t)?e?h=()=>Fr(t,l,2):h=()=>(m&&m(),Sn(t,l,3,[A])):h=pn,e&&r){const M=h;h=()=>ms(M())}let m,A=M=>{m=C.onStop=()=>{Fr(M,l,4),m=C.onStop=void 0}},N;if(Ec)if(A=pn,e?n&&Sn(e,l,3,[h(),p?[]:void 0,A]):h(),s==="sync"){const M=ZR();N=M.__watcherHandles||(M.__watcherHandles=[])}else return pn;let P=p?new Array(t.length).fill(Ha):Ha;const V=()=>{if(!(!C.active||!C.dirty))if(e){const M=C.run();(r||d||(p?M.some((I,g)=>Hr(I,P[g])):Hr(M,P)))&&(m&&m(),Sn(e,l,3,[M,P===Ha?void 0:p&&P[0]===Ha?[]:P,A]),P=M)}else C.run()};V.allowRecurse=!!e;let B;s==="sync"?B=V:s==="post"?B=()=>en(V,l&&l.suspense):(V.pre=!0,l&&(V.id=l.uid),B=()=>Sf(V));const C=new Ef(h,pn,B),L=cv(),j=()=>{C.stop(),L&&yf(L.effects,C)};return e?n?V():P=C.run():s==="post"?en(C.run.bind(C),l&&l.suspense):C.run(),N&&N.push(j),j}function eC(t,e,n){const r=this.proxy,s=st(t)?t.includes(".")?Xv(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=ua(this),a=Lf(s,i.bind(r),n);return o(),a}function Xv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ms(t,e=1/0,n){if(e<=0||!Qe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,It(t))ms(t.value,e,n);else if(de(t))for(let r=0;r<t.length;r++)ms(t[r],e,n);else if(Zy(t)||ii(t))t.forEach(r=>{ms(r,e,n)});else if(nv(t)){for(const r in t)ms(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ms(t[r],e,n)}return t}const Jv=t=>t.type.__isKeepAlive;function tC(t,e){Zv(t,"a",e)}function nC(t,e){Zv(t,"da",e)}function Zv(t,e,n=Rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(vc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Jv(s.parent.vnode)&&rC(r,e,n,s),s=s.parent}}function rC(t,e,n,r){const s=vc(e,t,r,!0);Pf(()=>{yf(r[e],s)},n)}function eE(t,e){t.shapeFlag&6&&t.component?eE(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}const sC=t=>t.__isTeleport,Ao=t=>t&&(t.disabled||t.disabled===""),C_=t=>typeof SVGElement<"u"&&t instanceof SVGElement,S_=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,fh=(t,e)=>{const n=t&&t.to;return st(n)?e?e(n):null:n},iC={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,u){const{mc:h,pc:d,pbc:p,o:{insert:m,querySelector:A,createText:N,createComment:P}}=u,V=Ao(e.props);let{shapeFlag:B,children:C,dynamicChildren:L}=e;if(t==null){const j=e.el=N(""),M=e.anchor=N("");m(j,n,r),m(M,n,r);const I=e.target=fh(e.props,A),g=e.targetAnchor=N("");I&&(m(g,I),o==="svg"||C_(I)?o="svg":(o==="mathml"||S_(I))&&(o="mathml"));const T=(S,O)=>{B&16&&h(C,S,O,s,i,o,a,l)};V?T(n,M):I&&T(I,g)}else{e.el=t.el;const j=e.anchor=t.anchor,M=e.target=t.target,I=e.targetAnchor=t.targetAnchor,g=Ao(t.props),T=g?n:M,S=g?j:I;if(o==="svg"||C_(M)?o="svg":(o==="mathml"||S_(M))&&(o="mathml"),L?(p(t.dynamicChildren,L,T,s,i,o,a),Of(t,e,!0)):l||d(t,e,T,S,s,i,o,a,!1),V)g?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):qa(e,n,j,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const O=e.target=fh(e.props,A);O&&qa(e,O,null,u,0)}else g&&qa(e,M,I,u,1)}tE(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:l,anchor:u,targetAnchor:h,target:d,props:p}=t;if(d&&i(h),o&&i(u),a&16){const m=o||!Ao(p);for(let A=0;A<l.length;A++){const N=l[A];s(N,e,n,m,!!N.dynamicChildren)}}},move:qa,hydrate:oC};function qa(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:h}=t,d=i===2;if(d&&r(o,e,n),(!d||Ao(h))&&l&16)for(let p=0;p<u.length;p++)s(u[p],e,n,2);d&&r(a,e,n)}function oC(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l}},u){const h=e.target=fh(e.props,l);if(h){const d=h._lpa||h.firstChild;if(e.shapeFlag&16)if(Ao(e.props))e.anchor=u(o(t),e,a(t),n,r,s,i),e.targetAnchor=d;else{e.anchor=o(t);let p=d;for(;p;)if(p=o(p),p&&p.nodeType===8&&p.data==="teleport anchor"){e.targetAnchor=p,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(d,e,h,n,r,s,i)}tE(e)}return e.anchor&&o(e.anchor)}const P$=iC;function tE(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const ln=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),qr=Symbol.for("v-cmt"),cl=Symbol.for("v-stc"),bo=[];let wn=null;function Df(t=!1){bo.push(wn=t?null:[])}function aC(){bo.pop(),wn=bo[bo.length-1]||null}let jo=1;function P_(t){jo+=t}function nE(t){return t.dynamicChildren=jo>0?wn||si:null,aC(),jo>0&&wn&&wn.push(t),t}function N$(t,e,n,r,s,i){return nE(sE(t,e,n,r,s,i,!0))}function Mf(t,e,n,r,s){return nE(Wt(t,e,n,r,s,!0))}function Rl(t){return t?t.__v_isVNode===!0:!1}function so(t,e){return t.type===e.type&&t.key===e.key}const rE=({key:t})=>t??null,ul=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?st(t)||It(t)||ge(t)?{i:jt,r:t,k:e,f:!!n}:t:null);function sE(t,e=null,n=null,r=0,s=null,i=t===ln?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rE(e),ref:e&&ul(e),scopeId:yc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:jt};return a?(xf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=st(n)?8:16),jo>0&&!o&&wn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&wn.push(l),l}const Wt=lC;function lC(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===AR)&&(t=qr),Rl(t)){const a=di(t,e,!0);return n&&xf(a,n),jo>0&&!i&&wn&&(a.shapeFlag&6?wn[wn.indexOf(t)]=a:wn.push(a)),a.patchFlag=-2,a}if(vC(t)&&(t=t.__vccOpts),e){e=cC(e);let{class:a,style:l}=e;a&&!st(a)&&(e.class=fc(a)),Qe(l)&&(wv(l)&&!de(l)&&(l=Tt({},l)),e.style=hc(l))}const o=st(t)?1:RR(t)?128:sC(t)?64:Qe(t)?4:ge(t)?2:0;return sE(t,e,n,r,s,o,i,!0)}function cC(t){return t?wv(t)||Hv(t)?Tt({},t):t:null}function di(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?hC(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&rE(u),ref:e&&e.ref?n&&i?de(i)?i.concat(ul(e)):[i,ul(e)]:ul(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ln?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&di(t.ssContent),ssFallback:t.ssFallback&&di(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&eE(h,l.clone(h)),h}function uC(t=" ",e=0){return Wt(ca,null,t,e)}function k$(t,e){const n=Wt(cl,null,t);return n.staticCount=e,n}function O$(t="",e=!1){return e?(Df(),Mf(qr,null,t)):Wt(qr,null,t)}function Dn(t){return t==null||typeof t=="boolean"?Wt(qr):de(t)?Wt(ln,null,t.slice()):typeof t=="object"?Cr(t):Wt(ca,null,String(t))}function Cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:di(t)}function xf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(de(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),xf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Hv(e)?e._ctx=jt:s===3&&jt&&(jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:jt},n=32):(e=String(e),r&64?(n=16,e=[uC(e)]):n=8);t.children=e,t.shapeFlag|=n}function hC(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=fc([e.class,r.class]));else if(s==="style")e.style=hc([e.style,r.style]);else if(ac(s)){const i=e[s],o=r[s];o&&i!==o&&!(de(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ln(t,e,n,r=null){Sn(t,e,7,[n,r])}const fC=Bv();let dC=0;function pC(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||fC,i={uid:dC++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new av(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gv(r,s),emitsOptions:Dv(r,s),emit:null,emitted:null,propsDefaults:et,inheritAttrs:r.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yR.bind(null,i),t.ce&&t.ce(i),i}let Rt=null;const fr=()=>Rt||jt;let Cl,dh;{const t=sv(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Cl=e("__VUE_INSTANCE_SETTERS__",n=>Rt=n),dh=e("__VUE_SSR_SETTERS__",n=>Ec=n)}const ua=t=>{const e=Rt;return Cl(t),t.scope.on(),()=>{t.scope.off(),Cl(e)}},N_=()=>{Rt&&Rt.scope.off(),Cl(null)};function iE(t){return t.vnode.shapeFlag&4}let Ec=!1;function _C(t,e=!1){e&&dh(e);const{props:n,children:r}=t.vnode,s=iE(t);WR(t,n,s,e),GR(t,r);const i=s?mC(t,e):void 0;return e&&dh(!1),i}function mC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,DR);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?aE(t):null,i=ua(t);Xr();const o=Fr(r,t,0,[t.props,s]);if(Jr(),i(),ev(o)){if(o.then(N_,N_),e)return o.then(a=>{k_(t,a,e)}).catch(a=>{mc(a,t,0)});t.asyncDep=o}else k_(t,o,e)}else oE(t,e)}function k_(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Qe(e)&&(t.setupState=Cv(e)),oE(t,n)}let O_;function oE(t,e,n){const r=t.type;if(!t.render){if(!e&&O_&&!r.render){const s=r.template||Nf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=Tt(Tt({isCustomElement:i,delimiters:a},o),l);r.render=O_(s,u)}}t.render=r.render||pn}{const s=ua(t);Xr();try{xR(t)}finally{Jr(),s()}}}const gC={get(t,e){return rn(t,"get",""),t[e]}};function aE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,gC),slots:t.slots,emit:t.emit,expose:e}}function Ff(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Cv(aR(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Io)return Io[n](t)},has(e,n){return n in e||n in Io}})):t.proxy}function yC(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function vC(t){return ge(t)&&"__vccOpts"in t}const rt=(t,e)=>lR(t,e,Ec);function Tc(t,e,n){const r=arguments.length;return r===2?Qe(e)&&!de(e)?Rl(e)?Wt(t,null,[e]):Wt(t,e):Wt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rl(n)&&(n=[n]),Wt(t,e,n))}const EC="3.4.29";/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const TC="http://www.w3.org/2000/svg",IC="http://www.w3.org/1998/Math/MathML",nr=typeof document<"u"?document:null,L_=nr&&nr.createElement("template"),wC={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?nr.createElementNS(TC,t):e==="mathml"?nr.createElementNS(IC,t):n?nr.createElement(t,{is:n}):nr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>nr.createTextNode(t),createComment:t=>nr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{L_.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=L_.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},AC=Symbol("_vtc");function bC(t,e,n){const r=t[AC];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const D_=Symbol("_vod"),RC=Symbol("_vsh"),CC=Symbol(""),SC=/(^|;)\s*display\s*:/;function PC(t,e,n){const r=t.style,s=st(n);let i=!1;if(n&&!s){if(e)if(st(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&hl(r,a,"")}else for(const o in e)n[o]==null&&hl(r,o,"");for(const o in n)o==="display"&&(i=!0),hl(r,o,n[o])}else if(s){if(e!==n){const o=r[CC];o&&(n+=";"+o),r.cssText=n,i=SC.test(n)}}else e&&t.removeAttribute("style");D_ in t&&(t[D_]=i?r.display:"",t[RC]&&(r.display="none"))}const M_=/\s*!important$/;function hl(t,e,n){if(de(n))n.forEach(r=>hl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=NC(t,e);M_.test(n)?t.setProperty(ki(r),n.replace(M_,""),"important"):t[r]=n}}const x_=["Webkit","Moz","ms"],Ru={};function NC(t,e){const n=Ru[e];if(n)return n;let r=Hn(e);if(r!=="filter"&&r in t)return Ru[e]=r;r=uc(r);for(let s=0;s<x_.length;s++){const i=x_[s]+r;if(i in t)return Ru[e]=i}return e}const F_="http://www.w3.org/1999/xlink";function V_(t,e,n,r,s,i=Vb(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(F_,e.slice(6,e.length)):t.setAttributeNS(F_,e,n):n==null||i&&!iv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":String(n))}function kC(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?t.getAttribute("value")||"":t.value,h=n==null?"":String(n);(u!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=iv(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function OC(t,e,n,r){t.addEventListener(e,n,r)}function LC(t,e,n,r){t.removeEventListener(e,n,r)}const U_=Symbol("_vei");function DC(t,e,n,r,s=null){const i=t[U_]||(t[U_]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=MC(e);if(r){const u=i[e]=VC(r,s);OC(t,a,u,l)}else o&&(LC(t,a,o,l),i[e]=void 0)}}const $_=/(?:Once|Passive|Capture)$/;function MC(t){let e;if($_.test(t)){e={};let r;for(;r=t.match($_);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ki(t.slice(2)),e]}let Cu=0;const xC=Promise.resolve(),FC=()=>Cu||(xC.then(()=>Cu=0),Cu=Date.now());function VC(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Sn(UC(r,n.value),e,5,[r])};return n.value=t,n.attached=FC(),n}function UC(t,e){if(de(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const B_=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$C=(t,e,n,r,s,i,o,a,l)=>{const u=s==="svg";e==="class"?bC(t,r,u):e==="style"?PC(t,n,r):ac(e)?gf(e)||DC(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):BC(t,e,r,u))?(kC(t,e,r,i,o,a,l),(e==="value"||e==="checked"||e==="selected")&&V_(t,e,r,u,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),V_(t,e,r,u))};function BC(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&B_(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return B_(e)&&st(n)?!1:e in t}const jC=Tt({patchProp:$C},wC);let j_;function WC(){return j_||(j_=zR(jC))}const HC=(...t)=>{const e=WC().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=GC(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,qC(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function qC(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function GC(t){return st(t)?document.querySelector(t):t}/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ys=typeof document<"u";function KC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const $e=Object.assign;function Su(t,e){const n={};for(const r in e){const s=e[r];n[r]=Nn(s)?s.map(t):t(s)}return n}const Ro=()=>{},Nn=Array.isArray,lE=/#/g,zC=/&/g,YC=/\//g,QC=/=/g,XC=/\?/g,cE=/\+/g,JC=/%5B/g,ZC=/%5D/g,uE=/%5E/g,eS=/%60/g,hE=/%7B/g,tS=/%7C/g,fE=/%7D/g,nS=/%20/g;function Vf(t){return encodeURI(""+t).replace(tS,"|").replace(JC,"[").replace(ZC,"]")}function rS(t){return Vf(t).replace(hE,"{").replace(fE,"}").replace(uE,"^")}function ph(t){return Vf(t).replace(cE,"%2B").replace(nS,"+").replace(lE,"%23").replace(zC,"%26").replace(eS,"`").replace(hE,"{").replace(fE,"}").replace(uE,"^")}function sS(t){return ph(t).replace(QC,"%3D")}function iS(t){return Vf(t).replace(lE,"%23").replace(XC,"%3F")}function oS(t){return t==null?"":iS(t).replace(YC,"%2F")}function Wo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const aS=/\/$/,lS=t=>t.replace(aS,"");function Pu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=fS(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Wo(o)}}function cS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function W_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&pi(e.matched[r],n.matched[s])&&dE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function pi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function dE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hS(t[n],e[n]))return!1;return!0}function hS(t,e){return Nn(t)?H_(t,e):Nn(e)?H_(e,t):t===e}function H_(t,e){return Nn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function fS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var Ho;(function(t){t.pop="pop",t.push="push"})(Ho||(Ho={}));var Co;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Co||(Co={}));function dS(t){if(!t)if(Ys){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),lS(t)}const pS=/^[^#]+#/;function _S(t,e){return t.replace(pS,"#")+e}function mS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ic=()=>({left:window.scrollX,top:window.scrollY});function gS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function q_(t,e){return(history.state?history.state.position-e:-1)+t}const _h=new Map;function yS(t,e){_h.set(t,e)}function vS(t){const e=_h.get(t);return _h.delete(t),e}let ES=()=>location.protocol+"//"+location.host;function pE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),W_(l,"")}return W_(n,t)+r+s}function TS(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=pE(t,location),A=n.value,N=e.value;let P=0;if(p){if(n.value=m,e.value=p,o&&o===A){o=null;return}P=N?p.position-N.position:0}else r(m);s.forEach(V=>{V(n.value,A,{delta:P,type:Ho.pop,direction:P?P>0?Co.forward:Co.back:Co.unknown})})};function l(){o=n.value}function u(p){s.push(p);const m=()=>{const A=s.indexOf(p);A>-1&&s.splice(A,1)};return i.push(m),m}function h(){const{history:p}=window;p.state&&p.replaceState($e({},p.state,{scroll:Ic()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function G_(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ic():null}}function IS(t){const{history:e,location:n}=window,r={value:pE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:ES()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[h?"replace":"assign"](p)}}function o(l,u){const h=$e({},e.state,G_(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=$e({},s.value,e.state,{forward:l,scroll:Ic()});i(h.current,h,!0);const d=$e({},G_(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function wS(t){t=dS(t);const e=IS(t),n=TS(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=$e({location:"",base:t,go:r,createHref:_S.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function AS(t){return typeof t=="string"||t&&typeof t=="object"}function _E(t){return typeof t=="string"||typeof t=="symbol"}const wr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},mE=Symbol("");var K_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(K_||(K_={}));function _i(t,e){return $e(new Error,{type:t,[mE]:!0},e)}function Xn(t,e){return t instanceof Error&&mE in t&&(e==null||!!(t.type&e))}const z_="[^/]+?",bS={sensitive:!1,strict:!1,start:!0,end:!0},RS=/[.+*?^${}()[\]/\\]/g;function CS(t,e){const n=$e({},bS,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(RS,"\\$&"),m+=40;else if(p.type===1){const{value:A,repeatable:N,optional:P,regexp:V}=p;i.push({name:A,repeatable:N,optional:P});const B=V||z_;if(B!==z_){m+=10;try{new RegExp(`(${B})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${A}" (${B}): `+L.message)}}let C=N?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;d||(C=P&&u.length<2?`(?:/${C})`:"/"+C),P&&(C+="?"),s+=C,m+=20,P&&(m+=-8),N&&(m+=-20),B===".*"&&(m+=-50)}h.push(m)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const m=h[p]||"",A=i[p-1];d[A.name]=m&&A.repeatable?m.split("/"):m}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const m of p)if(m.type===0)h+=m.value;else if(m.type===1){const{value:A,repeatable:N,optional:P}=m,V=A in u?u[A]:"";if(Nn(V)&&!N)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const B=Nn(V)?V.join("/"):V;if(!B)if(P)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);h+=B}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function SS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function gE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=SS(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Y_(r))return 1;if(Y_(s))return-1}return s.length-r.length}function Y_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const PS={type:0,value:""},NS=/[a-zA-Z0-9_]/;function kS(t){if(!t)return[[]];if(t==="/")return[[PS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:NS.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function OS(t,e,n){const r=CS(kS(t.path),n),s=$e(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function LS(t,e){const n=[],r=new Map;e=J_({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,d,p){const m=!p,A=DS(h);A.aliasOf=p&&p.record;const N=J_(e,h),P=[A];if("alias"in h){const C=typeof h.alias=="string"?[h.alias]:h.alias;for(const L of C)P.push($e({},A,{components:p?p.record.components:A.components,path:L,aliasOf:p?p.record:A}))}let V,B;for(const C of P){const{path:L}=C;if(d&&L[0]!=="/"){const j=d.record.path,M=j[j.length-1]==="/"?"":"/";C.path=d.record.path+(L&&M+L)}if(V=OS(C,d,N),p?p.alias.push(V):(B=B||V,B!==V&&B.alias.push(V),m&&h.name&&!X_(V)&&o(h.name)),yE(V)&&l(V),A.children){const j=A.children;for(let M=0;M<j.length;M++)i(j[M],V,p&&p.children[M])}p=p||V}return B?()=>{o(B)}:Ro}function o(h){if(_E(h)){const d=r.get(h);d&&(r.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=FS(h,n);n.splice(d,0,h),h.record.name&&!X_(h)&&r.set(h.record.name,h)}function u(h,d){let p,m={},A,N;if("name"in h&&h.name){if(p=r.get(h.name),!p)throw _i(1,{location:h});N=p.record.name,m=$e(Q_(d.params,p.keys.filter(B=>!B.optional).concat(p.parent?p.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),h.params&&Q_(h.params,p.keys.map(B=>B.name))),A=p.stringify(m)}else if(h.path!=null)A=h.path,p=n.find(B=>B.re.test(A)),p&&(m=p.parse(A),N=p.record.name);else{if(p=d.name?r.get(d.name):n.find(B=>B.re.test(d.path)),!p)throw _i(1,{location:h,currentLocation:d});N=p.record.name,m=$e({},d.params,h.params),A=p.stringify(m)}const P=[];let V=p;for(;V;)P.unshift(V.record),V=V.parent;return{name:N,path:A,params:m,matched:P,meta:xS(P)}}return t.forEach(h=>i(h)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Q_(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function DS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:MS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function MS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function X_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xS(t){return t.reduce((e,n)=>$e(e,n.meta),{})}function J_(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function FS(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;gE(t,e[i])<0?r=i:n=i+1}const s=VS(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function VS(t){let e=t;for(;e=e.parent;)if(yE(e)&&gE(t,e)===0)return e}function yE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function US(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(cE," "),o=i.indexOf("="),a=Wo(o<0?i:i.slice(0,o)),l=o<0?null:Wo(i.slice(o+1));if(a in e){let u=e[a];Nn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Z_(t){let e="";for(let n in t){const r=t[n];if(n=sS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Nn(r)?r.map(i=>i&&ph(i)):[r&&ph(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function $S(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Nn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const BS=Symbol(""),em=Symbol(""),Uf=Symbol(""),vE=Symbol(""),mh=Symbol("");function io(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(_i(4,{from:n,to:e})):p instanceof Error?l(p):AS(p)?l(_i(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function Nu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(jS(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Sr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const d=KC(h)?h.default:h;o.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&Sr(m,n,r,o,a,s)()}))}}return i}function jS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tm(t){const e=mn(Uf),n=mn(vE),r=rt(()=>{const l=xr(t.to);return e.resolve(l)}),s=rt(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(pi.bind(null,h));if(p>-1)return p;const m=nm(l[u-2]);return u>1&&nm(h)===m&&d[d.length-1].path!==m?d.findIndex(pi.bind(null,l[u-2])):p}),i=rt(()=>s.value>-1&&GS(n.params,r.value.params)),o=rt(()=>s.value>-1&&s.value===n.matched.length-1&&dE(n.params,r.value.params));function a(l={}){return qS(l)?e[xr(t.replace)?"replace":"push"](xr(t.to)).catch(Ro):Promise.resolve()}return{route:r,href:rt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const WS=la({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tm,setup(t,{slots:e}){const n=pc(tm(t)),{options:r}=mn(Uf),s=rt(()=>({[rm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[rm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Tc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),HS=WS;function qS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function GS(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Nn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function nm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const rm=(t,e,n)=>t??e??n,KS=la({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=mn(mh),s=rt(()=>t.route||r.value),i=mn(em,0),o=rt(()=>{let u=xr(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=rt(()=>s.value.matched[o.value]);ll(em,rt(()=>o.value+1)),ll(BS,a),ll(mh,s);const l=tn();return Vr(()=>[l.value,a.value,t.name],([u,h,d],[p,m,A])=>{h&&(h.instances[d]=u,m&&m!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!pi(h,m)||!p)&&(h.enterCallbacks[d]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return sm(n.default,{Component:p,route:u});const m=d.props[h],A=m?m===!0?u.params:typeof m=="function"?m(u):m:null,P=Tc(p,$e({},A,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return sm(n.default,{Component:P,route:u})||P}}});function sm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const EE=KS;function zS(t){const e=LS(t.routes,t),n=t.parseQuery||US,r=t.stringifyQuery||Z_,s=t.history,i=io(),o=io(),a=io(),l=_c(wr);let u=wr;Ys&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Su.bind(null,G=>""+G),d=Su.bind(null,oS),p=Su.bind(null,Wo);function m(G,re){let Z,ie;return _E(G)?(Z=e.getRecordMatcher(G),ie=re):ie=G,e.addRoute(ie,Z)}function A(G){const re=e.getRecordMatcher(G);re&&e.removeRoute(re)}function N(){return e.getRoutes().map(G=>G.record)}function P(G){return!!e.getRecordMatcher(G)}function V(G,re){if(re=$e({},re||l.value),typeof G=="string"){const v=Pu(n,G,re.path),F=e.resolve({path:v.path},re),K=s.createHref(v.fullPath);return $e(v,F,{params:p(F.params),hash:Wo(v.hash),redirectedFrom:void 0,href:K})}let Z;if(G.path!=null)Z=$e({},G,{path:Pu(n,G.path,re.path).path});else{const v=$e({},G.params);for(const F in v)v[F]==null&&delete v[F];Z=$e({},G,{params:d(v)}),re.params=d(re.params)}const ie=e.resolve(Z,re),Te=G.hash||"";ie.params=h(p(ie.params));const Pe=cS(r,$e({},G,{hash:rS(Te),path:ie.path})),b=s.createHref(Pe);return $e({fullPath:Pe,hash:Te,query:r===Z_?$S(G.query):G.query||{}},ie,{redirectedFrom:void 0,href:b})}function B(G){return typeof G=="string"?Pu(n,G,l.value.path):$e({},G)}function C(G,re){if(u!==G)return _i(8,{from:re,to:G})}function L(G){return I(G)}function j(G){return L($e(B(G),{replace:!0}))}function M(G){const re=G.matched[G.matched.length-1];if(re&&re.redirect){const{redirect:Z}=re;let ie=typeof Z=="function"?Z(G):Z;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=B(ie):{path:ie},ie.params={}),$e({query:G.query,hash:G.hash,params:ie.path!=null?{}:G.params},ie)}}function I(G,re){const Z=u=V(G),ie=l.value,Te=G.state,Pe=G.force,b=G.replace===!0,v=M(Z);if(v)return I($e(B(v),{state:typeof v=="object"?$e({},Te,v.state):Te,force:Pe,replace:b}),re||Z);const F=Z;F.redirectedFrom=re;let K;return!Pe&&uS(r,ie,Z)&&(K=_i(16,{to:F,from:ie}),Je(ie,ie,!0,!1)),(K?Promise.resolve(K):S(F,ie)).catch(q=>Xn(q)?Xn(q,2)?q:At(q):ve(q,F,ie)).then(q=>{if(q){if(Xn(q,2))return I($e({replace:b},B(q.to),{state:typeof q.to=="object"?$e({},Te,q.to.state):Te,force:Pe}),re||F)}else q=D(F,ie,!0,b,Te);return O(F,ie,q),q})}function g(G,re){const Z=C(G,re);return Z?Promise.reject(Z):Promise.resolve()}function T(G){const re=Gt.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(G):G()}function S(G,re){let Z;const[ie,Te,Pe]=YS(G,re);Z=Nu(ie.reverse(),"beforeRouteLeave",G,re);for(const v of ie)v.leaveGuards.forEach(F=>{Z.push(Sr(F,G,re))});const b=g.bind(null,G,re);return Z.push(b),Ze(Z).then(()=>{Z=[];for(const v of i.list())Z.push(Sr(v,G,re));return Z.push(b),Ze(Z)}).then(()=>{Z=Nu(Te,"beforeRouteUpdate",G,re);for(const v of Te)v.updateGuards.forEach(F=>{Z.push(Sr(F,G,re))});return Z.push(b),Ze(Z)}).then(()=>{Z=[];for(const v of Pe)if(v.beforeEnter)if(Nn(v.beforeEnter))for(const F of v.beforeEnter)Z.push(Sr(F,G,re));else Z.push(Sr(v.beforeEnter,G,re));return Z.push(b),Ze(Z)}).then(()=>(G.matched.forEach(v=>v.enterCallbacks={}),Z=Nu(Pe,"beforeRouteEnter",G,re,T),Z.push(b),Ze(Z))).then(()=>{Z=[];for(const v of o.list())Z.push(Sr(v,G,re));return Z.push(b),Ze(Z)}).catch(v=>Xn(v,8)?v:Promise.reject(v))}function O(G,re,Z){a.list().forEach(ie=>T(()=>ie(G,re,Z)))}function D(G,re,Z,ie,Te){const Pe=C(G,re);if(Pe)return Pe;const b=re===wr,v=Ys?history.state:{};Z&&(ie||b?s.replace(G.fullPath,$e({scroll:b&&v&&v.scroll},Te)):s.push(G.fullPath,Te)),l.value=G,Je(G,re,Z,b),At()}let R;function nt(){R||(R=s.listen((G,re,Z)=>{if(!Lt.listening)return;const ie=V(G),Te=M(ie);if(Te){I($e(Te,{replace:!0}),ie).catch(Ro);return}u=ie;const Pe=l.value;Ys&&yS(q_(Pe.fullPath,Z.delta),Ic()),S(ie,Pe).catch(b=>Xn(b,12)?b:Xn(b,2)?(I(b.to,ie).then(v=>{Xn(v,20)&&!Z.delta&&Z.type===Ho.pop&&s.go(-1,!1)}).catch(Ro),Promise.reject()):(Z.delta&&s.go(-Z.delta,!1),ve(b,ie,Pe))).then(b=>{b=b||D(ie,Pe,!1),b&&(Z.delta&&!Xn(b,8)?s.go(-Z.delta,!1):Z.type===Ho.pop&&Xn(b,20)&&s.go(-1,!1)),O(ie,Pe,b)}).catch(Ro)}))}let pt=io(),Oe=io(),Ee;function ve(G,re,Z){At(G);const ie=Oe.list();return ie.length?ie.forEach(Te=>Te(G,re,Z)):console.error(G),Promise.reject(G)}function ut(){return Ee&&l.value!==wr?Promise.resolve():new Promise((G,re)=>{pt.add([G,re])})}function At(G){return Ee||(Ee=!G,nt(),pt.list().forEach(([re,Z])=>G?Z(G):re()),pt.reset()),G}function Je(G,re,Z,ie){const{scrollBehavior:Te}=t;if(!Ys||!Te)return Promise.resolve();const Pe=!Z&&vS(q_(G.fullPath,0))||(ie||!Z)&&history.state&&history.state.scroll||null;return Nv().then(()=>Te(G,re,Pe)).then(b=>b&&gS(b)).catch(b=>ve(b,G,re))}const Le=G=>s.go(G);let Ue;const Gt=new Set,Lt={currentRoute:l,listening:!0,addRoute:m,removeRoute:A,hasRoute:P,getRoutes:N,resolve:V,options:t,push:L,replace:j,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Oe.add,isReady:ut,install(G){const re=this;G.component("RouterLink",HS),G.component("RouterView",EE),G.config.globalProperties.$router=re,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>xr(l)}),Ys&&!Ue&&l.value===wr&&(Ue=!0,L(s.location).catch(Te=>{}));const Z={};for(const Te in wr)Object.defineProperty(Z,Te,{get:()=>l.value[Te],enumerable:!0});G.provide(Uf,re),G.provide(vE,Tv(Z)),G.provide(mh,l);const ie=G.unmount;Gt.add(G),G.unmount=function(){Gt.delete(G),Gt.size<1&&(u=wr,R&&R(),R=null,l.value=wr,Ue=!1,Ee=!1),ie()}}};function Ze(G){return G.reduce((re,Z)=>re.then(()=>T(Z)),Promise.resolve())}return Lt}function YS(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>pi(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>pi(u,l))||s.push(l))}return[n,r,s]}const QS={__name:"App",setup(t){return(e,n)=>(Df(),Mf(xr(EE)))}},XS="modulepreload",JS=function(t){return"/"+t},im={},ZS=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(a=>{if(a=JS(a),a in im)return;im[a]=!0;const l=a.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":XS,l||(h.as="script",h.crossOrigin=""),h.href=a,o&&h.setAttribute("nonce",o),document.head.appendChild(h),l)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},e0=[{path:"/",name:"home",component:()=>ZS(()=>import("assets/Ranking-DiGiNNkt.js"),__vite__mapDeps([0,1]))}],TE=zS({history:wS(),routes:e0});TE.beforeEach((t,e,n)=>{let r="en";rb.global.locale.value=r,n()});/*!
  * shared v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const Sl=typeof window<"u",Zr=(t,e=!1)=>e?Symbol.for(t):Symbol(t),t0=(t,e,n)=>n0({l:t,k:e,s:n}),n0=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),ft=t=>typeof t=="number"&&isFinite(t),r0=t=>wE(t)==="[object Date]",Gr=t=>wE(t)==="[object RegExp]",wc=t=>pe(t)&&Object.keys(t).length===0,Pt=Object.assign;let om;const rr=()=>om||(om=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function am(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const s0=Object.prototype.hasOwnProperty;function Pl(t,e){return s0.call(t,e)}const Ye=Array.isArray,We=t=>typeof t=="function",se=t=>typeof t=="string",Ie=t=>typeof t=="boolean",Ve=t=>t!==null&&typeof t=="object",i0=t=>Ve(t)&&We(t.then)&&We(t.catch),IE=Object.prototype.toString,wE=t=>IE.call(t),pe=t=>{if(!Ve(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},o0=t=>t==null?"":Ye(t)||pe(t)&&t.toString===IE?JSON.stringify(t,null,2):String(t);function a0(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}function Ac(t){let e=t;return()=>++e}function l0(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Ga=t=>!Ve(t)||Ye(t);function fl(t,e){if(Ga(t)||Ga(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(i=>{Ga(r[i])||Ga(s[i])?s[i]=r[i]:n.push({src:r[i],des:s[i]})})}}/*!
  * message-compiler v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function c0(t,e,n){return{line:t,column:e,offset:n}}function Nl(t,e,n){return{start:t,end:e}}const u0=/\{([0-9a-zA-Z]+)\}/g;function AE(t,...e){return e.length===1&&h0(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(u0,(n,r)=>e.hasOwnProperty(r)?e[r]:"")}const bE=Object.assign,lm=t=>typeof t=="string",h0=t=>t!==null&&typeof t=="object";function RE(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}const $f={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},f0={[$f.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function d0(t,e,...n){const r=AE(f0[t],...n||[]),s={message:String(r),code:t};return e&&(s.location=e),s}const he={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},p0={[he.EXPECTED_TOKEN]:"Expected token: '{0}'",[he.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[he.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[he.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[he.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[he.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[he.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[he.EMPTY_PLACEHOLDER]:"Empty placeholder",[he.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[he.INVALID_LINKED_FORMAT]:"Invalid linked format",[he.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[he.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[he.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[he.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[he.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[he.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Oi(t,e,n={}){const{domain:r,messages:s,args:i}=n,o=AE((s||p0)[t]||"",...i||[]),a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=r,a}function _0(t){throw t}const Jn=" ",m0="\r",Qt=`
`,g0="\u2028",y0="\u2029";function v0(t){const e=t;let n=0,r=1,s=1,i=0;const o=I=>e[I]===m0&&e[I+1]===Qt,a=I=>e[I]===Qt,l=I=>e[I]===y0,u=I=>e[I]===g0,h=I=>o(I)||a(I)||l(I)||u(I),d=()=>n,p=()=>r,m=()=>s,A=()=>i,N=I=>o(I)||l(I)||u(I)?Qt:e[I],P=()=>N(n),V=()=>N(n+i);function B(){return i=0,h(n)&&(r++,s=0),o(n)&&n++,n++,s++,e[n]}function C(){return o(n+i)&&i++,i++,e[n+i]}function L(){n=0,r=1,s=1,i=0}function j(I=0){i=I}function M(){const I=n+i;for(;I!==n;)B();i=0}return{index:d,line:p,column:m,peekOffset:A,charAt:N,currentChar:P,currentPeek:V,next:B,peek:C,reset:L,resetPeek:j,skipToPeek:M}}const Ar=void 0,E0=".",cm="'",T0="tokenizer";function I0(t,e={}){const n=e.location!==!1,r=v0(t),s=()=>r.index(),i=()=>c0(r.line(),r.column(),r.index()),o=i(),a=s(),l={currentType:14,offset:a,startLoc:o,endLoc:o,lastType:14,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>l,{onError:h}=e;function d(E,w,k,...H){const te=u();if(w.column+=k,w.offset+=k,h){const Y=n?Nl(te.startLoc,w):null,x=Oi(E,Y,{domain:T0,args:H});h(x)}}function p(E,w,k){E.endLoc=i(),E.currentType=w;const H={type:w};return n&&(H.loc=Nl(E.startLoc,E.endLoc)),k!=null&&(H.value=k),H}const m=E=>p(E,14);function A(E,w){return E.currentChar()===w?(E.next(),w):(d(he.EXPECTED_TOKEN,i(),0,w),"")}function N(E){let w="";for(;E.currentPeek()===Jn||E.currentPeek()===Qt;)w+=E.currentPeek(),E.peek();return w}function P(E){const w=N(E);return E.skipToPeek(),w}function V(E){if(E===Ar)return!1;const w=E.charCodeAt(0);return w>=97&&w<=122||w>=65&&w<=90||w===95}function B(E){if(E===Ar)return!1;const w=E.charCodeAt(0);return w>=48&&w<=57}function C(E,w){const{currentType:k}=w;if(k!==2)return!1;N(E);const H=V(E.currentPeek());return E.resetPeek(),H}function L(E,w){const{currentType:k}=w;if(k!==2)return!1;N(E);const H=E.currentPeek()==="-"?E.peek():E.currentPeek(),te=B(H);return E.resetPeek(),te}function j(E,w){const{currentType:k}=w;if(k!==2)return!1;N(E);const H=E.currentPeek()===cm;return E.resetPeek(),H}function M(E,w){const{currentType:k}=w;if(k!==8)return!1;N(E);const H=E.currentPeek()===".";return E.resetPeek(),H}function I(E,w){const{currentType:k}=w;if(k!==9)return!1;N(E);const H=V(E.currentPeek());return E.resetPeek(),H}function g(E,w){const{currentType:k}=w;if(!(k===8||k===12))return!1;N(E);const H=E.currentPeek()===":";return E.resetPeek(),H}function T(E,w){const{currentType:k}=w;if(k!==10)return!1;const H=()=>{const Y=E.currentPeek();return Y==="{"?V(E.peek()):Y==="@"||Y==="%"||Y==="|"||Y===":"||Y==="."||Y===Jn||!Y?!1:Y===Qt?(E.peek(),H()):D(E,!1)},te=H();return E.resetPeek(),te}function S(E){N(E);const w=E.currentPeek()==="|";return E.resetPeek(),w}function O(E){const w=N(E),k=E.currentPeek()==="%"&&E.peek()==="{";return E.resetPeek(),{isModulo:k,hasSpace:w.length>0}}function D(E,w=!0){const k=(te=!1,Y="",x=!1)=>{const $=E.currentPeek();return $==="{"?Y==="%"?!1:te:$==="@"||!$?Y==="%"?!0:te:$==="%"?(E.peek(),k(te,"%",!0)):$==="|"?Y==="%"||x?!0:!(Y===Jn||Y===Qt):$===Jn?(E.peek(),k(!0,Jn,x)):$===Qt?(E.peek(),k(!0,Qt,x)):!0},H=k();return w&&E.resetPeek(),H}function R(E,w){const k=E.currentChar();return k===Ar?Ar:w(k)?(E.next(),k):null}function nt(E){const w=E.charCodeAt(0);return w>=97&&w<=122||w>=65&&w<=90||w>=48&&w<=57||w===95||w===36}function pt(E){return R(E,nt)}function Oe(E){const w=E.charCodeAt(0);return w>=97&&w<=122||w>=65&&w<=90||w>=48&&w<=57||w===95||w===36||w===45}function Ee(E){return R(E,Oe)}function ve(E){const w=E.charCodeAt(0);return w>=48&&w<=57}function ut(E){return R(E,ve)}function At(E){const w=E.charCodeAt(0);return w>=48&&w<=57||w>=65&&w<=70||w>=97&&w<=102}function Je(E){return R(E,At)}function Le(E){let w="",k="";for(;w=ut(E);)k+=w;return k}function Ue(E){P(E);const w=E.currentChar();return w!=="%"&&d(he.EXPECTED_TOKEN,i(),0,w),E.next(),"%"}function Gt(E){let w="";for(;;){const k=E.currentChar();if(k==="{"||k==="}"||k==="@"||k==="|"||!k)break;if(k==="%")if(D(E))w+=k,E.next();else break;else if(k===Jn||k===Qt)if(D(E))w+=k,E.next();else{if(S(E))break;w+=k,E.next()}else w+=k,E.next()}return w}function Lt(E){P(E);let w="",k="";for(;w=Ee(E);)k+=w;return E.currentChar()===Ar&&d(he.UNTERMINATED_CLOSING_BRACE,i(),0),k}function Ze(E){P(E);let w="";return E.currentChar()==="-"?(E.next(),w+=`-${Le(E)}`):w+=Le(E),E.currentChar()===Ar&&d(he.UNTERMINATED_CLOSING_BRACE,i(),0),w}function G(E){return E!==cm&&E!==Qt}function re(E){P(E),A(E,"'");let w="",k="";for(;w=R(E,G);)w==="\\"?k+=Z(E):k+=w;const H=E.currentChar();return H===Qt||H===Ar?(d(he.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),H===Qt&&(E.next(),A(E,"'")),k):(A(E,"'"),k)}function Z(E){const w=E.currentChar();switch(w){case"\\":case"'":return E.next(),`\\${w}`;case"u":return ie(E,w,4);case"U":return ie(E,w,6);default:return d(he.UNKNOWN_ESCAPE_SEQUENCE,i(),0,w),""}}function ie(E,w,k){A(E,w);let H="";for(let te=0;te<k;te++){const Y=Je(E);if(!Y){d(he.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${w}${H}${E.currentChar()}`);break}H+=Y}return`\\${w}${H}`}function Te(E){return E!=="{"&&E!=="}"&&E!==Jn&&E!==Qt}function Pe(E){P(E);let w="",k="";for(;w=R(E,Te);)k+=w;return k}function b(E){let w="",k="";for(;w=pt(E);)k+=w;return k}function v(E){const w=k=>{const H=E.currentChar();return H==="{"||H==="%"||H==="@"||H==="|"||H==="("||H===")"||!H||H===Jn?k:(k+=H,E.next(),w(k))};return w("")}function F(E){P(E);const w=A(E,"|");return P(E),w}function K(E,w){let k=null;switch(E.currentChar()){case"{":return w.braceNest>=1&&d(he.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),E.next(),k=p(w,2,"{"),P(E),w.braceNest++,k;case"}":return w.braceNest>0&&w.currentType===2&&d(he.EMPTY_PLACEHOLDER,i(),0),E.next(),k=p(w,3,"}"),w.braceNest--,w.braceNest>0&&P(E),w.inLinked&&w.braceNest===0&&(w.inLinked=!1),k;case"@":return w.braceNest>0&&d(he.UNTERMINATED_CLOSING_BRACE,i(),0),k=q(E,w)||m(w),w.braceNest=0,k;default:{let te=!0,Y=!0,x=!0;if(S(E))return w.braceNest>0&&d(he.UNTERMINATED_CLOSING_BRACE,i(),0),k=p(w,1,F(E)),w.braceNest=0,w.inLinked=!1,k;if(w.braceNest>0&&(w.currentType===5||w.currentType===6||w.currentType===7))return d(he.UNTERMINATED_CLOSING_BRACE,i(),0),w.braceNest=0,X(E,w);if(te=C(E,w))return k=p(w,5,Lt(E)),P(E),k;if(Y=L(E,w))return k=p(w,6,Ze(E)),P(E),k;if(x=j(E,w))return k=p(w,7,re(E)),P(E),k;if(!te&&!Y&&!x)return k=p(w,13,Pe(E)),d(he.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,k.value),P(E),k;break}}return k}function q(E,w){const{currentType:k}=w;let H=null;const te=E.currentChar();switch((k===8||k===9||k===12||k===10)&&(te===Qt||te===Jn)&&d(he.INVALID_LINKED_FORMAT,i(),0),te){case"@":return E.next(),H=p(w,8,"@"),w.inLinked=!0,H;case".":return P(E),E.next(),p(w,9,".");case":":return P(E),E.next(),p(w,10,":");default:return S(E)?(H=p(w,1,F(E)),w.braceNest=0,w.inLinked=!1,H):M(E,w)||g(E,w)?(P(E),q(E,w)):I(E,w)?(P(E),p(w,12,b(E))):T(E,w)?(P(E),te==="{"?K(E,w)||H:p(w,11,v(E))):(k===8&&d(he.INVALID_LINKED_FORMAT,i(),0),w.braceNest=0,w.inLinked=!1,X(E,w))}}function X(E,w){let k={type:14};if(w.braceNest>0)return K(E,w)||m(w);if(w.inLinked)return q(E,w)||m(w);switch(E.currentChar()){case"{":return K(E,w)||m(w);case"}":return d(he.UNBALANCED_CLOSING_BRACE,i(),0),E.next(),p(w,3,"}");case"@":return q(E,w)||m(w);default:{if(S(E))return k=p(w,1,F(E)),w.braceNest=0,w.inLinked=!1,k;const{isModulo:te,hasSpace:Y}=O(E);if(te)return Y?p(w,0,Gt(E)):p(w,4,Ue(E));if(D(E))return p(w,0,Gt(E));break}}return k}function ee(){const{currentType:E,offset:w,startLoc:k,endLoc:H}=l;return l.lastType=E,l.lastOffset=w,l.lastStartLoc=k,l.lastEndLoc=H,l.offset=s(),l.startLoc=i(),r.currentChar()===Ar?p(l,14):X(r,l)}return{nextToken:ee,currentOffset:s,currentPosition:i,context:u}}const w0="parser",A0=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function b0(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function R0(t={}){const e=t.location!==!1,{onError:n,onWarn:r}=t;function s(C,L,j,M,...I){const g=C.currentPosition();if(g.offset+=M,g.column+=M,n){const T=e?Nl(j,g):null,S=Oi(L,T,{domain:w0,args:I});n(S)}}function i(C,L,j,M,...I){const g=C.currentPosition();if(g.offset+=M,g.column+=M,r){const T=e?Nl(j,g):null;r(d0(L,T,I))}}function o(C,L,j){const M={type:C};return e&&(M.start=L,M.end=L,M.loc={start:j,end:j}),M}function a(C,L,j,M){e&&(C.end=L,C.loc&&(C.loc.end=j))}function l(C,L){const j=C.context(),M=o(3,j.offset,j.startLoc);return M.value=L,a(M,C.currentOffset(),C.currentPosition()),M}function u(C,L){const j=C.context(),{lastOffset:M,lastStartLoc:I}=j,g=o(5,M,I);return g.index=parseInt(L,10),C.nextToken(),a(g,C.currentOffset(),C.currentPosition()),g}function h(C,L,j){const M=C.context(),{lastOffset:I,lastStartLoc:g}=M,T=o(4,I,g);return T.key=L,j===!0&&(T.modulo=!0),C.nextToken(),a(T,C.currentOffset(),C.currentPosition()),T}function d(C,L){const j=C.context(),{lastOffset:M,lastStartLoc:I}=j,g=o(9,M,I);return g.value=L.replace(A0,b0),C.nextToken(),a(g,C.currentOffset(),C.currentPosition()),g}function p(C){const L=C.nextToken(),j=C.context(),{lastOffset:M,lastStartLoc:I}=j,g=o(8,M,I);return L.type!==12?(s(C,he.UNEXPECTED_EMPTY_LINKED_MODIFIER,j.lastStartLoc,0),g.value="",a(g,M,I),{nextConsumeToken:L,node:g}):(L.value==null&&s(C,he.UNEXPECTED_LEXICAL_ANALYSIS,j.lastStartLoc,0,Tn(L)),g.value=L.value||"",a(g,C.currentOffset(),C.currentPosition()),{node:g})}function m(C,L){const j=C.context(),M=o(7,j.offset,j.startLoc);return M.value=L,a(M,C.currentOffset(),C.currentPosition()),M}function A(C){const L=C.context(),j=o(6,L.offset,L.startLoc);let M=C.nextToken();if(M.type===9){const I=p(C);j.modifier=I.node,M=I.nextConsumeToken||C.nextToken()}switch(M.type!==10&&s(C,he.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Tn(M)),M=C.nextToken(),M.type===2&&(M=C.nextToken()),M.type){case 11:M.value==null&&s(C,he.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Tn(M)),j.key=m(C,M.value||"");break;case 5:M.value==null&&s(C,he.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Tn(M)),j.key=h(C,M.value||"");break;case 6:M.value==null&&s(C,he.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Tn(M)),j.key=u(C,M.value||"");break;case 7:M.value==null&&s(C,he.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Tn(M)),j.key=d(C,M.value||"");break;default:{s(C,he.UNEXPECTED_EMPTY_LINKED_KEY,L.lastStartLoc,0);const I=C.context(),g=o(7,I.offset,I.startLoc);return g.value="",a(g,I.offset,I.startLoc),j.key=g,a(j,I.offset,I.startLoc),{nextConsumeToken:M,node:j}}}return a(j,C.currentOffset(),C.currentPosition()),{node:j}}function N(C){const L=C.context(),j=L.currentType===1?C.currentOffset():L.offset,M=L.currentType===1?L.endLoc:L.startLoc,I=o(2,j,M);I.items=[];let g=null,T=null;do{const D=g||C.nextToken();switch(g=null,D.type){case 0:D.value==null&&s(C,he.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Tn(D)),I.items.push(l(C,D.value||""));break;case 6:D.value==null&&s(C,he.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Tn(D)),I.items.push(u(C,D.value||""));break;case 4:T=!0;break;case 5:D.value==null&&s(C,he.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Tn(D)),I.items.push(h(C,D.value||"",!!T)),T&&(i(C,$f.USE_MODULO_SYNTAX,L.lastStartLoc,0,Tn(D)),T=null);break;case 7:D.value==null&&s(C,he.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Tn(D)),I.items.push(d(C,D.value||""));break;case 8:{const R=A(C);I.items.push(R.node),g=R.nextConsumeToken||null;break}}}while(L.currentType!==14&&L.currentType!==1);const S=L.currentType===1?L.lastOffset:C.currentOffset(),O=L.currentType===1?L.lastEndLoc:C.currentPosition();return a(I,S,O),I}function P(C,L,j,M){const I=C.context();let g=M.items.length===0;const T=o(1,L,j);T.cases=[],T.cases.push(M);do{const S=N(C);g||(g=S.items.length===0),T.cases.push(S)}while(I.currentType!==14);return g&&s(C,he.MUST_HAVE_MESSAGES_IN_PLURAL,j,0),a(T,C.currentOffset(),C.currentPosition()),T}function V(C){const L=C.context(),{offset:j,startLoc:M}=L,I=N(C);return L.currentType===14?I:P(C,j,M,I)}function B(C){const L=I0(C,bE({},t)),j=L.context(),M=o(0,j.offset,j.startLoc);return e&&M.loc&&(M.loc.source=C),M.body=V(L),t.onCacheKey&&(M.cacheKey=t.onCacheKey(C)),j.currentType!==14&&s(L,he.UNEXPECTED_LEXICAL_ANALYSIS,j.lastStartLoc,0,C[j.offset]||""),a(M,L.currentOffset(),L.currentPosition()),M}return{parse:B}}function Tn(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function C0(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function um(t,e){for(let n=0;n<t.length;n++)Bf(t[n],e)}function Bf(t,e){switch(t.type){case 1:um(t.cases,e),e.helper("plural");break;case 2:um(t.items,e);break;case 6:{Bf(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function S0(t,e={}){const n=C0(t);n.helper("normalize"),t.body&&Bf(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function P0(t){const e=t.body;return e.type===2?hm(e):e.cases.forEach(n=>hm(n)),t}function hm(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=RE(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}const N0="minifier";function Qs(t){switch(t.t=t.type,t.type){case 0:{const e=t;Qs(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let r=0;r<n.length;r++)Qs(n[r]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let r=0;r<n.length;r++)Qs(n[r]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Qs(e.key),e.k=e.key,delete e.key,e.modifier&&(Qs(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}default:throw Oi(he.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:N0,args:[t.type]})}delete t.type}const k0="parser";function O0(t,e){const{sourceMap:n,filename:r,breakLineCode:s,needIndent:i}=e,o=e.location!==!1,a={filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:s,needIndent:i,indentLevel:0};o&&t.loc&&(a.source=t.loc.source);const l=()=>a;function u(P,V){a.code+=P}function h(P,V=!0){const B=V?s:"";u(i?B+"  ".repeat(P):B)}function d(P=!0){const V=++a.indentLevel;P&&h(V)}function p(P=!0){const V=--a.indentLevel;P&&h(V)}function m(){h(a.indentLevel)}return{context:l,push:u,indent:d,deindent:p,newline:m,helper:P=>`_${P}`,needIndent:()=>a.needIndent}}function L0(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),mi(t,e.key),e.modifier?(t.push(", "),mi(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function D0(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const s=e.items.length;for(let i=0;i<s&&(mi(t,e.items[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function M0(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const s=e.cases.length;for(let i=0;i<s&&(mi(t,e.cases[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function x0(t,e){e.body?mi(t,e.body):t.push("null")}function mi(t,e){const{helper:n}=t;switch(e.type){case 0:x0(t,e);break;case 1:M0(t,e);break;case 2:D0(t,e);break;case 6:L0(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw Oi(he.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:k0,args:[e.type]})}}const F0=(t,e={})=>{const n=lm(e.mode)?e.mode:"normal",r=lm(e.filename)?e.filename:"message.intl",s=!!e.sourceMap,i=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,o=e.needIndent?e.needIndent:n!=="arrow",a=t.helpers||[],l=O0(t,{mode:n,filename:r,sourceMap:s,breakLineCode:i,needIndent:o});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(o),a.length>0&&(l.push(`const { ${RE(a.map(d=>`${d}: _${d}`),", ")} } = ctx`),l.newline()),l.push("return "),mi(l,t),l.deindent(o),l.push("}"),delete t.helpers;const{code:u,map:h}=l.context();return{ast:t,code:u,map:h?h.toJSON():void 0}};function V0(t,e={}){const n=bE({},e),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,a=R0(n).parse(t);return r?(i&&P0(a),s&&Qs(a),{ast:a,code:""}):(S0(a,n),F0(a,n))}/*!
  * core-base v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function U0(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(rr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(rr().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(rr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const es=[];es[0]={w:[0],i:[3,0],"[":[4],o:[7]};es[1]={w:[1],".":[2],"[":[4],o:[7]};es[2]={w:[2],i:[3,0],0:[3,0]};es[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};es[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};es[5]={"'":[4,0],o:8,l:[5,0]};es[6]={'"':[4,0],o:8,l:[6,0]};const $0=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function B0(t){return $0.test(t)}function j0(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function W0(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function H0(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:B0(e)?j0(e):"*"+e}function q0(t){const e=[];let n=-1,r=0,s=0,i,o,a,l,u,h,d;const p=[];p[0]=()=>{o===void 0?o=a:o+=a},p[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},p[2]=()=>{p[0](),s++},p[3]=()=>{if(s>0)s--,r=4,p[0]();else{if(s=0,o===void 0||(o=H0(o),o===!1))return!1;p[1]()}};function m(){const A=t[n+1];if(r===5&&A==="'"||r===6&&A==='"')return n++,a="\\"+A,p[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&m())){if(l=W0(i),d=es[r],u=d[l]||d.l||8,u===8||(r=u[0],u[1]!==void 0&&(h=p[u[1]],h&&(a=i,h()===!1))))return;if(r===7)return e}}const fm=new Map;function G0(t,e){return Ve(t)?t[e]:null}function K0(t,e){if(!Ve(t))return null;let n=fm.get(e);if(n||(n=q0(e),n&&fm.set(e,n)),!n)return null;const r=n.length;let s=t,i=0;for(;i<r;){const o=s[n[i]];if(o===void 0||We(s))return null;s=o,i++}return s}const z0=t=>t,Y0=t=>"",Q0="text",X0=t=>t.length===0?"":a0(t),J0=o0;function dm(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function Z0(t){const e=ft(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(ft(t.named.count)||ft(t.named.n))?ft(t.named.count)?t.named.count:ft(t.named.n)?t.named.n:e:e}function eP(t,e){e.count||(e.count=t),e.n||(e.n=t)}function tP(t={}){const e=t.locale,n=Z0(t),r=Ve(t.pluralRules)&&se(e)&&We(t.pluralRules[e])?t.pluralRules[e]:dm,s=Ve(t.pluralRules)&&se(e)&&We(t.pluralRules[e])?dm:void 0,i=V=>V[r(n,V.length,s)],o=t.list||[],a=V=>o[V],l=t.named||{};ft(t.pluralIndex)&&eP(n,l);const u=V=>l[V];function h(V){const B=We(t.messages)?t.messages(V):Ve(t.messages)?t.messages[V]:!1;return B||(t.parent?t.parent.message(V):Y0)}const d=V=>t.modifiers?t.modifiers[V]:z0,p=pe(t.processor)&&We(t.processor.normalize)?t.processor.normalize:X0,m=pe(t.processor)&&We(t.processor.interpolate)?t.processor.interpolate:J0,A=pe(t.processor)&&se(t.processor.type)?t.processor.type:Q0,P={list:a,named:u,plural:i,linked:(V,...B)=>{const[C,L]=B;let j="text",M="";B.length===1?Ve(C)?(M=C.modifier||M,j=C.type||j):se(C)&&(M=C||M):B.length===2&&(se(C)&&(M=C||M),se(L)&&(j=L||j));const I=h(V)(P),g=j==="vnode"&&Ye(I)&&M?I[0]:I;return M?d(M)(g,j):g},message:h,type:A,interpolate:m,normalize:p,values:Pt({},o,l)};return P}let qo=null;function nP(t){qo=t}function rP(t,e,n){qo&&qo.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const sP=iP("function:translate");function iP(t){return e=>qo&&qo.emit(t,e)}const CE=$f.__EXTEND_POINT__,hs=Ac(CE),oP={NOT_FOUND_KEY:CE,FALLBACK_TO_TRANSLATE:hs(),CANNOT_FORMAT_NUMBER:hs(),FALLBACK_TO_NUMBER_FORMAT:hs(),CANNOT_FORMAT_DATE:hs(),FALLBACK_TO_DATE_FORMAT:hs(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:hs(),__EXTEND_POINT__:hs()},SE=he.__EXTEND_POINT__,fs=Ac(SE),An={INVALID_ARGUMENT:SE,INVALID_DATE_ARGUMENT:fs(),INVALID_ISO_DATE_ARGUMENT:fs(),NOT_SUPPORT_NON_STRING_MESSAGE:fs(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:fs(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:fs(),NOT_SUPPORT_LOCALE_TYPE:fs(),__EXTEND_POINT__:fs()};function xn(t){return Oi(t,null,void 0)}function jf(t,e){return e.locale!=null?pm(e.locale):pm(t.locale)}let ku;function pm(t){if(se(t))return t;if(We(t)){if(t.resolvedOnce&&ku!=null)return ku;if(t.constructor.name==="Function"){const e=t();if(i0(e))throw xn(An.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return ku=e}else throw xn(An.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw xn(An.NOT_SUPPORT_LOCALE_TYPE)}function aP(t,e,n){return[...new Set([n,...Ye(e)?e:Ve(e)?Object.keys(e):se(e)?[e]:[n]])]}function PE(t,e,n){const r=se(n)?n:gi,s=t;s.__localeChainCache||(s.__localeChainCache=new Map);let i=s.__localeChainCache.get(r);if(!i){i=[];let o=[n];for(;Ye(o);)o=_m(i,o,e);const a=Ye(e)||!pe(e)?e:e.default?e.default:null;o=se(a)?[a]:a,Ye(o)&&_m(i,o,!1),s.__localeChainCache.set(r,i)}return i}function _m(t,e,n){let r=!0;for(let s=0;s<e.length&&Ie(r);s++){const i=e[s];se(i)&&(r=lP(t,e[s],n))}return r}function lP(t,e,n){let r;const s=e.split("-");do{const i=s.join("-");r=cP(t,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function cP(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(Ye(n)||pe(n))&&n[s]&&(r=n[s])}return r}const uP="9.13.1",bc=-1,gi="en-US",mm="",gm=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function hP(){return{upper:(t,e)=>e==="text"&&se(t)?t.toUpperCase():e==="vnode"&&Ve(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&se(t)?t.toLowerCase():e==="vnode"&&Ve(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&se(t)?gm(t):e==="vnode"&&Ve(t)&&"__v_isVNode"in t?gm(t.children):t}}let NE;function ym(t){NE=t}let kE;function fP(t){kE=t}let OE;function dP(t){OE=t}let LE=null;const pP=t=>{LE=t},_P=()=>LE;let DE=null;const vm=t=>{DE=t},mP=()=>DE;let Em=0;function gP(t={}){const e=We(t.onWarn)?t.onWarn:l0,n=se(t.version)?t.version:uP,r=se(t.locale)||We(t.locale)?t.locale:gi,s=We(r)?gi:r,i=Ye(t.fallbackLocale)||pe(t.fallbackLocale)||se(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=pe(t.messages)?t.messages:{[s]:{}},a=pe(t.datetimeFormats)?t.datetimeFormats:{[s]:{}},l=pe(t.numberFormats)?t.numberFormats:{[s]:{}},u=Pt({},t.modifiers||{},hP()),h=t.pluralRules||{},d=We(t.missing)?t.missing:null,p=Ie(t.missingWarn)||Gr(t.missingWarn)?t.missingWarn:!0,m=Ie(t.fallbackWarn)||Gr(t.fallbackWarn)?t.fallbackWarn:!0,A=!!t.fallbackFormat,N=!!t.unresolving,P=We(t.postTranslation)?t.postTranslation:null,V=pe(t.processor)?t.processor:null,B=Ie(t.warnHtmlMessage)?t.warnHtmlMessage:!0,C=!!t.escapeParameter,L=We(t.messageCompiler)?t.messageCompiler:NE,j=We(t.messageResolver)?t.messageResolver:kE||G0,M=We(t.localeFallbacker)?t.localeFallbacker:OE||aP,I=Ve(t.fallbackContext)?t.fallbackContext:void 0,g=t,T=Ve(g.__datetimeFormatters)?g.__datetimeFormatters:new Map,S=Ve(g.__numberFormatters)?g.__numberFormatters:new Map,O=Ve(g.__meta)?g.__meta:{};Em++;const D={version:n,cid:Em,locale:r,fallbackLocale:i,messages:o,modifiers:u,pluralRules:h,missing:d,missingWarn:p,fallbackWarn:m,fallbackFormat:A,unresolving:N,postTranslation:P,processor:V,warnHtmlMessage:B,escapeParameter:C,messageCompiler:L,messageResolver:j,localeFallbacker:M,fallbackContext:I,onWarn:e,__meta:O};return D.datetimeFormats=a,D.numberFormats=l,D.__datetimeFormatters=T,D.__numberFormatters=S,__INTLIFY_PROD_DEVTOOLS__&&rP(D,n,O),D}function Wf(t,e,n,r,s){const{missing:i,onWarn:o}=t;if(i!==null){const a=i(t,n,e,s);return se(a)?a:e}else return e}function oo(t,e,n){const r=t;r.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function yP(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function vP(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let r=n+1;r<e.length;r++)if(yP(t,e[r]))return!0;return!1}function Ou(t){return n=>EP(n,t)}function EP(t,e){const n=e.b||e.body;if((n.t||n.type)===1){const r=n,s=r.c||r.cases;return t.plural(s.reduce((i,o)=>[...i,Tm(t,o)],[]))}else return Tm(t,n)}function Tm(t,e){const n=e.s||e.static;if(n)return t.type==="text"?n:t.normalize([n]);{const r=(e.i||e.items).reduce((s,i)=>[...s,gh(t,i)],[]);return t.normalize(r)}}function gh(t,e){const n=e.t||e.type;switch(n){case 3:{const r=e;return r.v||r.value}case 9:{const r=e;return r.v||r.value}case 4:{const r=e;return t.interpolate(t.named(r.k||r.key))}case 5:{const r=e;return t.interpolate(t.list(r.i!=null?r.i:r.index))}case 6:{const r=e,s=r.m||r.modifier;return t.linked(gh(t,r.k||r.key),s?gh(t,s):void 0,t.type)}case 7:{const r=e;return r.v||r.value}case 8:{const r=e;return r.v||r.value}default:throw new Error(`unhandled node type on format message part: ${n}`)}}const ME=t=>t;let ei=Object.create(null);const yi=t=>Ve(t)&&(t.t===0||t.type===0)&&("b"in t||"body"in t);function xE(t,e={}){let n=!1;const r=e.onError||_0;return e.onError=s=>{n=!0,r(s)},{...V0(t,e),detectError:n}}const TP=(t,e)=>{if(!se(t))throw xn(An.NOT_SUPPORT_NON_STRING_MESSAGE);{Ie(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||ME)(t),s=ei[r];if(s)return s;const{code:i,detectError:o}=xE(t,e),a=new Function(`return ${i}`)();return o?a:ei[r]=a}};function IP(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&se(t)){Ie(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||ME)(t),s=ei[r];if(s)return s;const{ast:i,detectError:o}=xE(t,{...e,location:!1,jit:!0}),a=Ou(i);return o?a:ei[r]=a}else{const n=t.cacheKey;if(n){const r=ei[n];return r||(ei[n]=Ou(t))}else return Ou(t)}}const Im=()=>"",dn=t=>We(t);function wm(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:a}=t,[l,u]=yh(...e),h=Ie(u.missingWarn)?u.missingWarn:t.missingWarn,d=Ie(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn,p=Ie(u.escapeParameter)?u.escapeParameter:t.escapeParameter,m=!!u.resolvedMessage,A=se(u.default)||Ie(u.default)?Ie(u.default)?i?l:()=>l:u.default:n?i?l:()=>l:"",N=n||A!=="",P=jf(t,u);p&&wP(u);let[V,B,C]=m?[l,P,a[P]||{}]:FE(t,l,P,o,d,h),L=V,j=l;if(!m&&!(se(L)||yi(L)||dn(L))&&N&&(L=A,j=L),!m&&(!(se(L)||yi(L)||dn(L))||!se(B)))return s?bc:l;let M=!1;const I=()=>{M=!0},g=dn(L)?L:VE(t,l,B,L,j,I);if(M)return L;const T=RP(t,B,C,u),S=tP(T),O=AP(t,g,S),D=r?r(O,l):O;if(__INTLIFY_PROD_DEVTOOLS__){const R={timestamp:Date.now(),key:se(l)?l:dn(L)?L.key:"",locale:B||(dn(L)?L.locale:""),format:se(L)?L:dn(L)?L.source:"",message:D};R.meta=Pt({},t.__meta,_P()||{}),sP(R)}return D}function wP(t){Ye(t.list)?t.list=t.list.map(e=>se(e)?am(e):e):Ve(t.named)&&Object.keys(t.named).forEach(e=>{se(t.named[e])&&(t.named[e]=am(t.named[e]))})}function FE(t,e,n,r,s,i){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:u}=t,h=u(t,r,n);let d={},p,m=null;const A="translate";for(let N=0;N<h.length&&(p=h[N],d=o[p]||{},(m=l(d,e))===null&&(m=d[e]),!(se(m)||yi(m)||dn(m)));N++)if(!vP(p,h)){const P=Wf(t,e,p,i,A);P!==e&&(m=P)}return[m,p,d]}function VE(t,e,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:a}=t;if(dn(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||e,u}if(o==null){const u=()=>r;return u.locale=n,u.key=e,u}const l=o(r,bP(t,n,s,r,a,i));return l.locale=n,l.key=e,l.source=r,l}function AP(t,e,n){return e(n)}function yh(...t){const[e,n,r]=t,s={};if(!se(e)&&!ft(e)&&!dn(e)&&!yi(e))throw xn(An.INVALID_ARGUMENT);const i=ft(e)?String(e):(dn(e),e);return ft(n)?s.plural=n:se(n)?s.default=n:pe(n)&&!wc(n)?s.named=n:Ye(n)&&(s.list=n),ft(r)?s.plural=r:se(r)?s.default=r:pe(r)&&Pt(s,r),[i,s]}function bP(t,e,n,r,s,i){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>t0(e,n,o)}}function RP(t,e,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:u,fallbackContext:h}=t,p={locale:e,modifiers:s,pluralRules:i,messages:m=>{let A=o(n,m);if(A==null&&h){const[,,N]=FE(h,m,e,a,l,u);A=o(N,m)}if(se(A)||yi(A)){let N=!1;const V=VE(t,m,e,A,m,()=>{N=!0});return N?Im:V}else return dn(A)?A:Im}};return t.processor&&(p.processor=t.processor),r.list&&(p.list=r.list),r.named&&(p.named=r.named),ft(r.plural)&&(p.pluralIndex=r.plural),p}function Am(t,...e){const{datetimeFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,u,h,d]=vh(...e),p=Ie(h.missingWarn)?h.missingWarn:t.missingWarn;Ie(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn;const m=!!h.part,A=jf(t,h),N=o(t,s,A);if(!se(l)||l==="")return new Intl.DateTimeFormat(A,d).format(u);let P={},V,B=null;const C="datetime format";for(let M=0;M<N.length&&(V=N[M],P=n[V]||{},B=P[l],!pe(B));M++)Wf(t,l,V,p,C);if(!pe(B)||!se(V))return r?bc:l;let L=`${V}__${l}`;wc(d)||(L=`${L}__${JSON.stringify(d)}`);let j=a.get(L);return j||(j=new Intl.DateTimeFormat(V,Pt({},B,d)),a.set(L,j)),m?j.formatToParts(u):j.format(u)}const UE=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function vh(...t){const[e,n,r,s]=t,i={};let o={},a;if(se(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw xn(An.INVALID_ISO_DATE_ARGUMENT);const u=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(u);try{a.toISOString()}catch{throw xn(An.INVALID_ISO_DATE_ARGUMENT)}}else if(r0(e)){if(isNaN(e.getTime()))throw xn(An.INVALID_DATE_ARGUMENT);a=e}else if(ft(e))a=e;else throw xn(An.INVALID_ARGUMENT);return se(n)?i.key=n:pe(n)&&Object.keys(n).forEach(l=>{UE.includes(l)?o[l]=n[l]:i[l]=n[l]}),se(r)?i.locale=r:pe(r)&&(o=r),pe(s)&&(o=s),[i.key||"",a,i,o]}function bm(t,e,n){const r=t;for(const s in n){const i=`${e}__${s}`;r.__datetimeFormatters.has(i)&&r.__datetimeFormatters.delete(i)}}function Rm(t,...e){const{numberFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,u,h,d]=Eh(...e),p=Ie(h.missingWarn)?h.missingWarn:t.missingWarn;Ie(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn;const m=!!h.part,A=jf(t,h),N=o(t,s,A);if(!se(l)||l==="")return new Intl.NumberFormat(A,d).format(u);let P={},V,B=null;const C="number format";for(let M=0;M<N.length&&(V=N[M],P=n[V]||{},B=P[l],!pe(B));M++)Wf(t,l,V,p,C);if(!pe(B)||!se(V))return r?bc:l;let L=`${V}__${l}`;wc(d)||(L=`${L}__${JSON.stringify(d)}`);let j=a.get(L);return j||(j=new Intl.NumberFormat(V,Pt({},B,d)),a.set(L,j)),m?j.formatToParts(u):j.format(u)}const $E=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Eh(...t){const[e,n,r,s]=t,i={};let o={};if(!ft(e))throw xn(An.INVALID_ARGUMENT);const a=e;return se(n)?i.key=n:pe(n)&&Object.keys(n).forEach(l=>{$E.includes(l)?o[l]=n[l]:i[l]=n[l]}),se(r)?i.locale=r:pe(r)&&(o=r),pe(s)&&(o=s),[i.key||"",a,i,o]}function Cm(t,e,n){const r=t;for(const s in n){const i=`${e}__${s}`;r.__numberFormatters.has(i)&&r.__numberFormatters.delete(i)}}U0();/*!
  * vue-i18n v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const CP="9.13.1";function SP(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(rr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(rr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(rr().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(rr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(rr().__INTLIFY_PROD_DEVTOOLS__=!1)}const BE=oP.__EXTEND_POINT__,Zn=Ac(BE);Zn(),Zn(),Zn(),Zn(),Zn(),Zn(),Zn(),Zn(),Zn();const jE=An.__EXTEND_POINT__,Zt=Ac(jE),dt={UNEXPECTED_RETURN_TYPE:jE,INVALID_ARGUMENT:Zt(),MUST_BE_CALL_SETUP_TOP:Zt(),NOT_INSTALLED:Zt(),NOT_AVAILABLE_IN_LEGACY_MODE:Zt(),REQUIRED_VALUE:Zt(),INVALID_VALUE:Zt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Zt(),NOT_INSTALLED_WITH_PROVIDE:Zt(),UNEXPECTED_ERROR:Zt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Zt(),BRIDGE_SUPPORT_VUE_2_ONLY:Zt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Zt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Zt(),__EXTEND_POINT__:Zt()};function Et(t,...e){return Oi(t,null,void 0)}const Th=Zr("__translateVNode"),Ih=Zr("__datetimeParts"),wh=Zr("__numberParts"),WE=Zr("__setPluralRules"),HE=Zr("__injectWithOption"),Ah=Zr("__dispose");function Go(t){if(!Ve(t))return t;for(const e in t)if(Pl(t,e))if(!e.includes("."))Ve(t[e])&&Go(t[e]);else{const n=e.split("."),r=n.length-1;let s=t,i=!1;for(let o=0;o<r;o++){if(n[o]in s||(s[n[o]]={}),!Ve(s[n[o]])){i=!0;break}s=s[n[o]]}i||(s[n[r]]=t[e],delete t[e]),Ve(s[n[r]])&&Go(s[n[r]])}return t}function Rc(t,e){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=e,o=pe(n)?n:Ye(r)?{}:{[t]:{}};if(Ye(r)&&r.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:u}=a;l?(o[l]=o[l]||{},fl(u,o[l])):fl(u,o)}else se(a)&&fl(JSON.parse(a),o)}),s==null&&i)for(const a in o)Pl(o,a)&&Go(o[a]);return o}function qE(t){return t.type}function GE(t,e,n){let r=Ve(e.messages)?e.messages:{};"__i18nGlobal"in n&&(r=Rc(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{t.mergeLocaleMessage(i,r[i])});{if(Ve(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(Ve(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Sm(t){return Wt(ca,null,t,0)}const Pm="__INTLIFY_META__",Nm=()=>[],PP=()=>!1;let km=0;function Om(t){return(e,n,r,s)=>t(n,r,fr()||void 0,s)}const NP=()=>{const t=fr();let e=null;return t&&(e=qE(t)[Pm])?{[Pm]:e}:null};function Hf(t={},e){const{__root:n,__injectWithOption:r}=t,s=n===void 0,i=t.flatJson,o=Sl?tn:_c,a=!!t.translateExistCompatible;let l=Ie(t.inheritLocale)?t.inheritLocale:!0;const u=o(n&&l?n.locale.value:se(t.locale)?t.locale:gi),h=o(n&&l?n.fallbackLocale.value:se(t.fallbackLocale)||Ye(t.fallbackLocale)||pe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:u.value),d=o(Rc(u.value,t)),p=o(pe(t.datetimeFormats)?t.datetimeFormats:{[u.value]:{}}),m=o(pe(t.numberFormats)?t.numberFormats:{[u.value]:{}});let A=n?n.missingWarn:Ie(t.missingWarn)||Gr(t.missingWarn)?t.missingWarn:!0,N=n?n.fallbackWarn:Ie(t.fallbackWarn)||Gr(t.fallbackWarn)?t.fallbackWarn:!0,P=n?n.fallbackRoot:Ie(t.fallbackRoot)?t.fallbackRoot:!0,V=!!t.fallbackFormat,B=We(t.missing)?t.missing:null,C=We(t.missing)?Om(t.missing):null,L=We(t.postTranslation)?t.postTranslation:null,j=n?n.warnHtmlMessage:Ie(t.warnHtmlMessage)?t.warnHtmlMessage:!0,M=!!t.escapeParameter;const I=n?n.modifiers:pe(t.modifiers)?t.modifiers:{};let g=t.pluralRules||n&&n.pluralRules,T;T=(()=>{s&&vm(null);const x={version:CP,locale:u.value,fallbackLocale:h.value,messages:d.value,modifiers:I,pluralRules:g,missing:C===null?void 0:C,missingWarn:A,fallbackWarn:N,fallbackFormat:V,unresolving:!0,postTranslation:L===null?void 0:L,warnHtmlMessage:j,escapeParameter:M,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};x.datetimeFormats=p.value,x.numberFormats=m.value,x.__datetimeFormatters=pe(T)?T.__datetimeFormatters:void 0,x.__numberFormatters=pe(T)?T.__numberFormatters:void 0;const $=gP(x);return s&&vm($),$})(),oo(T,u.value,h.value);function O(){return[u.value,h.value,d.value,p.value,m.value]}const D=rt({get:()=>u.value,set:x=>{u.value=x,T.locale=u.value}}),R=rt({get:()=>h.value,set:x=>{h.value=x,T.fallbackLocale=h.value,oo(T,u.value,x)}}),nt=rt(()=>d.value),pt=rt(()=>p.value),Oe=rt(()=>m.value);function Ee(){return We(L)?L:null}function ve(x){L=x,T.postTranslation=x}function ut(){return B}function At(x){x!==null&&(C=Om(x)),B=x,T.missing=C}const Je=(x,$,le,ce,xe,_t)=>{O();let ht;try{__INTLIFY_PROD_DEVTOOLS__,s||(T.fallbackContext=n?mP():void 0),ht=x(T)}finally{__INTLIFY_PROD_DEVTOOLS__,s||(T.fallbackContext=void 0)}if(le!=="translate exists"&&ft(ht)&&ht===bc||le==="translate exists"&&!ht){const[ss,zn]=$();return n&&P?ce(n):xe(ss)}else{if(_t(ht))return ht;throw Et(dt.UNEXPECTED_RETURN_TYPE)}};function Le(...x){return Je($=>Reflect.apply(wm,null,[$,...x]),()=>yh(...x),"translate",$=>Reflect.apply($.t,$,[...x]),$=>$,$=>se($))}function Ue(...x){const[$,le,ce]=x;if(ce&&!Ve(ce))throw Et(dt.INVALID_ARGUMENT);return Le($,le,Pt({resolvedMessage:!0},ce||{}))}function Gt(...x){return Je($=>Reflect.apply(Am,null,[$,...x]),()=>vh(...x),"datetime format",$=>Reflect.apply($.d,$,[...x]),()=>mm,$=>se($))}function Lt(...x){return Je($=>Reflect.apply(Rm,null,[$,...x]),()=>Eh(...x),"number format",$=>Reflect.apply($.n,$,[...x]),()=>mm,$=>se($))}function Ze(x){return x.map($=>se($)||ft($)||Ie($)?Sm(String($)):$)}const re={normalize:Ze,interpolate:x=>x,type:"vnode"};function Z(...x){return Je($=>{let le;const ce=$;try{ce.processor=re,le=Reflect.apply(wm,null,[ce,...x])}finally{ce.processor=null}return le},()=>yh(...x),"translate",$=>$[Th](...x),$=>[Sm($)],$=>Ye($))}function ie(...x){return Je($=>Reflect.apply(Rm,null,[$,...x]),()=>Eh(...x),"number format",$=>$[wh](...x),Nm,$=>se($)||Ye($))}function Te(...x){return Je($=>Reflect.apply(Am,null,[$,...x]),()=>vh(...x),"datetime format",$=>$[Ih](...x),Nm,$=>se($)||Ye($))}function Pe(x){g=x,T.pluralRules=g}function b(x,$){return Je(()=>{if(!x)return!1;const le=se($)?$:u.value,ce=K(le),xe=T.messageResolver(ce,x);return a?xe!=null:yi(xe)||dn(xe)||se(xe)},()=>[x],"translate exists",le=>Reflect.apply(le.te,le,[x,$]),PP,le=>Ie(le))}function v(x){let $=null;const le=PE(T,h.value,u.value);for(let ce=0;ce<le.length;ce++){const xe=d.value[le[ce]]||{},_t=T.messageResolver(xe,x);if(_t!=null){$=_t;break}}return $}function F(x){const $=v(x);return $??(n?n.tm(x)||{}:{})}function K(x){return d.value[x]||{}}function q(x,$){if(i){const le={[x]:$};for(const ce in le)Pl(le,ce)&&Go(le[ce]);$=le[x]}d.value[x]=$,T.messages=d.value}function X(x,$){d.value[x]=d.value[x]||{};const le={[x]:$};if(i)for(const ce in le)Pl(le,ce)&&Go(le[ce]);$=le[x],fl($,d.value[x]),T.messages=d.value}function ee(x){return p.value[x]||{}}function E(x,$){p.value[x]=$,T.datetimeFormats=p.value,bm(T,x,$)}function w(x,$){p.value[x]=Pt(p.value[x]||{},$),T.datetimeFormats=p.value,bm(T,x,$)}function k(x){return m.value[x]||{}}function H(x,$){m.value[x]=$,T.numberFormats=m.value,Cm(T,x,$)}function te(x,$){m.value[x]=Pt(m.value[x]||{},$),T.numberFormats=m.value,Cm(T,x,$)}km++,n&&Sl&&(Vr(n.locale,x=>{l&&(u.value=x,T.locale=x,oo(T,u.value,h.value))}),Vr(n.fallbackLocale,x=>{l&&(h.value=x,T.fallbackLocale=x,oo(T,u.value,h.value))}));const Y={id:km,locale:D,fallbackLocale:R,get inheritLocale(){return l},set inheritLocale(x){l=x,x&&n&&(u.value=n.locale.value,h.value=n.fallbackLocale.value,oo(T,u.value,h.value))},get availableLocales(){return Object.keys(d.value).sort()},messages:nt,get modifiers(){return I},get pluralRules(){return g||{}},get isGlobal(){return s},get missingWarn(){return A},set missingWarn(x){A=x,T.missingWarn=A},get fallbackWarn(){return N},set fallbackWarn(x){N=x,T.fallbackWarn=N},get fallbackRoot(){return P},set fallbackRoot(x){P=x},get fallbackFormat(){return V},set fallbackFormat(x){V=x,T.fallbackFormat=V},get warnHtmlMessage(){return j},set warnHtmlMessage(x){j=x,T.warnHtmlMessage=x},get escapeParameter(){return M},set escapeParameter(x){M=x,T.escapeParameter=x},t:Le,getLocaleMessage:K,setLocaleMessage:q,mergeLocaleMessage:X,getPostTranslationHandler:Ee,setPostTranslationHandler:ve,getMissingHandler:ut,setMissingHandler:At,[WE]:Pe};return Y.datetimeFormats=pt,Y.numberFormats=Oe,Y.rt=Ue,Y.te=b,Y.tm=F,Y.d=Gt,Y.n=Lt,Y.getDateTimeFormat=ee,Y.setDateTimeFormat=E,Y.mergeDateTimeFormat=w,Y.getNumberFormat=k,Y.setNumberFormat=H,Y.mergeNumberFormat=te,Y[HE]=r,Y[Th]=Z,Y[Ih]=Te,Y[wh]=ie,Y}function kP(t){const e=se(t.locale)?t.locale:gi,n=se(t.fallbackLocale)||Ye(t.fallbackLocale)||pe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=We(t.missing)?t.missing:void 0,s=Ie(t.silentTranslationWarn)||Gr(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,i=Ie(t.silentFallbackWarn)||Gr(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=Ie(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=pe(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,h=We(t.postTranslation)?t.postTranslation:void 0,d=se(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,p=!!t.escapeParameterHtml,m=Ie(t.sync)?t.sync:!0;let A=t.messages;if(pe(t.sharedMessages)){const M=t.sharedMessages;A=Object.keys(M).reduce((g,T)=>{const S=g[T]||(g[T]={});return Pt(S,M[T]),g},A||{})}const{__i18n:N,__root:P,__injectWithOption:V}=t,B=t.datetimeFormats,C=t.numberFormats,L=t.flatJson,j=t.translateExistCompatible;return{locale:e,fallbackLocale:n,messages:A,flatJson:L,datetimeFormats:B,numberFormats:C,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:u,postTranslation:h,warnHtmlMessage:d,escapeParameter:p,messageResolver:t.messageResolver,inheritLocale:m,translateExistCompatible:j,__i18n:N,__root:P,__injectWithOption:V}}function bh(t={},e){{const n=Hf(kP(t)),{__extender:r}=t,s={id:n.id,get locale(){return n.locale.value},set locale(i){n.locale.value=i},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(i){n.fallbackLocale.value=i},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(i){},get missing(){return n.getMissingHandler()},set missing(i){n.setMissingHandler(i)},get silentTranslationWarn(){return Ie(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(i){n.missingWarn=Ie(i)?!i:i},get silentFallbackWarn(){return Ie(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(i){n.fallbackWarn=Ie(i)?!i:i},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(i){n.fallbackFormat=i},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(i){n.setPostTranslationHandler(i)},get sync(){return n.inheritLocale},set sync(i){n.inheritLocale=i},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(i){n.warnHtmlMessage=i!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(i){n.escapeParameter=i},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(i){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...i){const[o,a,l]=i,u={};let h=null,d=null;if(!se(o))throw Et(dt.INVALID_ARGUMENT);const p=o;return se(a)?u.locale=a:Ye(a)?h=a:pe(a)&&(d=a),Ye(l)?h=l:pe(l)&&(d=l),Reflect.apply(n.t,n,[p,h||d||{},u])},rt(...i){return Reflect.apply(n.rt,n,[...i])},tc(...i){const[o,a,l]=i,u={plural:1};let h=null,d=null;if(!se(o))throw Et(dt.INVALID_ARGUMENT);const p=o;return se(a)?u.locale=a:ft(a)?u.plural=a:Ye(a)?h=a:pe(a)&&(d=a),se(l)?u.locale=l:Ye(l)?h=l:pe(l)&&(d=l),Reflect.apply(n.t,n,[p,h||d||{},u])},te(i,o){return n.te(i,o)},tm(i){return n.tm(i)},getLocaleMessage(i){return n.getLocaleMessage(i)},setLocaleMessage(i,o){n.setLocaleMessage(i,o)},mergeLocaleMessage(i,o){n.mergeLocaleMessage(i,o)},d(...i){return Reflect.apply(n.d,n,[...i])},getDateTimeFormat(i){return n.getDateTimeFormat(i)},setDateTimeFormat(i,o){n.setDateTimeFormat(i,o)},mergeDateTimeFormat(i,o){n.mergeDateTimeFormat(i,o)},n(...i){return Reflect.apply(n.n,n,[...i])},getNumberFormat(i){return n.getNumberFormat(i)},setNumberFormat(i,o){n.setNumberFormat(i,o)},mergeNumberFormat(i,o){n.mergeNumberFormat(i,o)},getChoiceIndex(i,o){return-1}};return s.__extender=r,s}}const qf={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function OP({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,s)=>[...r,...s.type===ln?s.children:[s]],[]):e.reduce((n,r)=>{const s=t[r];return s&&(n[r]=s()),n},{})}function KE(t){return ln}const LP=la({name:"i18n-t",props:Pt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>ft(t)||!isNaN(t)}},qf),setup(t,e){const{slots:n,attrs:r}=e,s=t.i18n||Gf({useScope:t.scope,__useComponent:!0});return()=>{const i=Object.keys(n).filter(d=>d!=="_"),o={};t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=se(t.plural)?+t.plural:t.plural);const a=OP(e,i),l=s[Th](t.keypath,a,o),u=Pt({},r),h=se(t.tag)||Ve(t.tag)?t.tag:KE();return Tc(h,u,l)}}}),Lm=LP;function DP(t){return Ye(t)&&!se(t[0])}function zE(t,e,n,r){const{slots:s,attrs:i}=e;return()=>{const o={part:!0};let a={};t.locale&&(o.locale=t.locale),se(t.format)?o.key=t.format:Ve(t.format)&&(se(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((p,m)=>n.includes(m)?Pt({},p,{[m]:t.format[m]}):p,{}));const l=r(t.value,o,a);let u=[o.key];Ye(l)?u=l.map((p,m)=>{const A=s[p.type],N=A?A({[p.type]:p.value,index:m,parts:l}):[p.value];return DP(N)&&(N[0].key=`${p.type}-${m}`),N}):se(l)&&(u=[l]);const h=Pt({},i),d=se(t.tag)||Ve(t.tag)?t.tag:KE();return Tc(d,h,u)}}const MP=la({name:"i18n-n",props:Pt({value:{type:Number,required:!0},format:{type:[String,Object]}},qf),setup(t,e){const n=t.i18n||Gf({useScope:t.scope,__useComponent:!0});return zE(t,e,$E,(...r)=>n[wh](...r))}}),Dm=MP,xP=la({name:"i18n-d",props:Pt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},qf),setup(t,e){const n=t.i18n||Gf({useScope:t.scope,__useComponent:!0});return zE(t,e,UE,(...r)=>n[Ih](...r))}}),Mm=xP;function FP(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function VP(t){const e=o=>{const{instance:a,modifiers:l,value:u}=o;if(!a||!a.$)throw Et(dt.UNEXPECTED_ERROR);const h=FP(t,a.$),d=xm(u);return[Reflect.apply(h.t,h,[...Fm(d)]),h]};return{created:(o,a)=>{const[l,u]=e(a);Sl&&t.global===u&&(o.__i18nWatcher=Vr(u.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=u,o.textContent=l},unmounted:o=>{Sl&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,u=xm(a);o.textContent=Reflect.apply(l.t,l,[...Fm(u)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function xm(t){if(se(t))return{path:t};if(pe(t)){if(!("path"in t))throw Et(dt.REQUIRED_VALUE,"path");return t}else throw Et(dt.INVALID_VALUE)}function Fm(t){const{path:e,locale:n,args:r,choice:s,plural:i}=t,o={},a=r||{};return se(n)&&(o.locale=n),ft(s)&&(o.plural=s),ft(i)&&(o.plural=i),[e,a,o]}function UP(t,e,...n){const r=pe(n[0])?n[0]:{},s=!!r.useI18nComponentName;(Ie(r.globalInstall)?r.globalInstall:!0)&&([s?"i18n":Lm.name,"I18nT"].forEach(o=>t.component(o,Lm)),[Dm.name,"I18nN"].forEach(o=>t.component(o,Dm)),[Mm.name,"I18nD"].forEach(o=>t.component(o,Mm))),t.directive("t",VP(e))}function $P(t,e,n){return{beforeCreate(){const r=fr();if(!r)throw Et(dt.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const i=s.i18n;if(s.__i18n&&(i.__i18n=s.__i18n),i.__root=e,this===this.$root)this.$i18n=Vm(t,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=bh(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=Vm(t,s);else{this.$i18n=bh({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&GE(e,s,s),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$tc=(...i)=>this.$i18n.tc(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=fr();if(!r)throw Et(dt.UNEXPECTED_ERROR);const s=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(r),delete this.$i18n}}}function Vm(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[WE](e.pluralizationRules||t.pluralizationRules);const n=Rc(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}const BP=Zr("global-vue-i18n");function jP(t={},e){const n=__VUE_I18N_LEGACY_API__&&Ie(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,r=Ie(t.globalInjection)?t.globalInjection:!0,s=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,i=new Map,[o,a]=WP(t,n),l=Zr("");function u(p){return i.get(p)||null}function h(p,m){i.set(p,m)}function d(p){i.delete(p)}{const p={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return s},async install(m,...A){if(m.__VUE_I18N_SYMBOL__=l,m.provide(m.__VUE_I18N_SYMBOL__,p),pe(A[0])){const V=A[0];p.__composerExtend=V.__composerExtend,p.__vueI18nExtend=V.__vueI18nExtend}let N=null;!n&&r&&(N=JP(m,p.global)),__VUE_I18N_FULL_INSTALL__&&UP(m,p,...A),__VUE_I18N_LEGACY_API__&&n&&m.mixin($P(a,a.__composer,p));const P=m.unmount;m.unmount=()=>{N&&N(),p.dispose(),P()}},get global(){return a},dispose(){o.stop()},__instances:i,__getInstance:u,__setInstance:h,__deleteInstance:d};return p}}function Gf(t={}){const e=fr();if(e==null)throw Et(dt.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Et(dt.NOT_INSTALLED);const n=HP(e),r=GP(n),s=qE(e),i=qP(t,s);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw Et(dt.NOT_AVAILABLE_IN_LEGACY_MODE);return QP(e,i,r,t)}if(i==="global")return GE(r,t,s),r;if(i==="parent"){let l=KP(n,e,t.__useComponent);return l==null&&(l=r),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=Pt({},t);"__i18n"in s&&(l.__i18n=s.__i18n),r&&(l.__root=r),a=Hf(l),o.__composerExtend&&(a[Ah]=o.__composerExtend(a)),YP(o,e,a),o.__setInstance(e,a)}return a}function WP(t,e,n){const r=lv();{const s=__VUE_I18N_LEGACY_API__&&e?r.run(()=>bh(t)):r.run(()=>Hf(t));if(s==null)throw Et(dt.UNEXPECTED_ERROR);return[r,s]}}function HP(t){{const e=mn(t.isCE?BP:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Et(t.isCE?dt.NOT_INSTALLED_WITH_PROVIDE:dt.UNEXPECTED_ERROR);return e}}function qP(t,e){return wc(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function GP(t){return t.mode==="composition"?t.global:t.global.__composer}function KP(t,e,n=!1){let r=null;const s=e.root;let i=zP(e,n);for(;i!=null;){const o=t;if(t.mode==="composition")r=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(i);a!=null&&(r=a.__composer,n&&r&&!r[HE]&&(r=null))}if(r!=null||s===i)break;i=i.parent}return r}function zP(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function YP(t,e,n){Fv(()=>{},e),Pf(()=>{const r=n;t.__deleteInstance(e);const s=r[Ah];s&&(s(),delete r[Ah])},e)}function QP(t,e,n,r={}){const s=e==="local",i=_c(null);if(s&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw Et(dt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const o=Ie(r.inheritLocale)?r.inheritLocale:!se(r.locale),a=tn(!s||o?n.locale.value:se(r.locale)?r.locale:gi),l=tn(!s||o?n.fallbackLocale.value:se(r.fallbackLocale)||Ye(r.fallbackLocale)||pe(r.fallbackLocale)||r.fallbackLocale===!1?r.fallbackLocale:a.value),u=tn(Rc(a.value,r)),h=tn(pe(r.datetimeFormats)?r.datetimeFormats:{[a.value]:{}}),d=tn(pe(r.numberFormats)?r.numberFormats:{[a.value]:{}}),p=s?n.missingWarn:Ie(r.missingWarn)||Gr(r.missingWarn)?r.missingWarn:!0,m=s?n.fallbackWarn:Ie(r.fallbackWarn)||Gr(r.fallbackWarn)?r.fallbackWarn:!0,A=s?n.fallbackRoot:Ie(r.fallbackRoot)?r.fallbackRoot:!0,N=!!r.fallbackFormat,P=We(r.missing)?r.missing:null,V=We(r.postTranslation)?r.postTranslation:null,B=s?n.warnHtmlMessage:Ie(r.warnHtmlMessage)?r.warnHtmlMessage:!0,C=!!r.escapeParameter,L=s?n.modifiers:pe(r.modifiers)?r.modifiers:{},j=r.pluralRules||s&&n.pluralRules;function M(){return[a.value,l.value,u.value,h.value,d.value]}const I=rt({get:()=>i.value?i.value.locale.value:a.value,set:v=>{i.value&&(i.value.locale.value=v),a.value=v}}),g=rt({get:()=>i.value?i.value.fallbackLocale.value:l.value,set:v=>{i.value&&(i.value.fallbackLocale.value=v),l.value=v}}),T=rt(()=>i.value?i.value.messages.value:u.value),S=rt(()=>h.value),O=rt(()=>d.value);function D(){return i.value?i.value.getPostTranslationHandler():V}function R(v){i.value&&i.value.setPostTranslationHandler(v)}function nt(){return i.value?i.value.getMissingHandler():P}function pt(v){i.value&&i.value.setMissingHandler(v)}function Oe(v){return M(),v()}function Ee(...v){return i.value?Oe(()=>Reflect.apply(i.value.t,null,[...v])):Oe(()=>"")}function ve(...v){return i.value?Reflect.apply(i.value.rt,null,[...v]):""}function ut(...v){return i.value?Oe(()=>Reflect.apply(i.value.d,null,[...v])):Oe(()=>"")}function At(...v){return i.value?Oe(()=>Reflect.apply(i.value.n,null,[...v])):Oe(()=>"")}function Je(v){return i.value?i.value.tm(v):{}}function Le(v,F){return i.value?i.value.te(v,F):!1}function Ue(v){return i.value?i.value.getLocaleMessage(v):{}}function Gt(v,F){i.value&&(i.value.setLocaleMessage(v,F),u.value[v]=F)}function Lt(v,F){i.value&&i.value.mergeLocaleMessage(v,F)}function Ze(v){return i.value?i.value.getDateTimeFormat(v):{}}function G(v,F){i.value&&(i.value.setDateTimeFormat(v,F),h.value[v]=F)}function re(v,F){i.value&&i.value.mergeDateTimeFormat(v,F)}function Z(v){return i.value?i.value.getNumberFormat(v):{}}function ie(v,F){i.value&&(i.value.setNumberFormat(v,F),d.value[v]=F)}function Te(v,F){i.value&&i.value.mergeNumberFormat(v,F)}const Pe={get id(){return i.value?i.value.id:-1},locale:I,fallbackLocale:g,messages:T,datetimeFormats:S,numberFormats:O,get inheritLocale(){return i.value?i.value.inheritLocale:o},set inheritLocale(v){i.value&&(i.value.inheritLocale=v)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(u.value)},get modifiers(){return i.value?i.value.modifiers:L},get pluralRules(){return i.value?i.value.pluralRules:j},get isGlobal(){return i.value?i.value.isGlobal:!1},get missingWarn(){return i.value?i.value.missingWarn:p},set missingWarn(v){i.value&&(i.value.missingWarn=v)},get fallbackWarn(){return i.value?i.value.fallbackWarn:m},set fallbackWarn(v){i.value&&(i.value.missingWarn=v)},get fallbackRoot(){return i.value?i.value.fallbackRoot:A},set fallbackRoot(v){i.value&&(i.value.fallbackRoot=v)},get fallbackFormat(){return i.value?i.value.fallbackFormat:N},set fallbackFormat(v){i.value&&(i.value.fallbackFormat=v)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:B},set warnHtmlMessage(v){i.value&&(i.value.warnHtmlMessage=v)},get escapeParameter(){return i.value?i.value.escapeParameter:C},set escapeParameter(v){i.value&&(i.value.escapeParameter=v)},t:Ee,getPostTranslationHandler:D,setPostTranslationHandler:R,getMissingHandler:nt,setMissingHandler:pt,rt:ve,d:ut,n:At,tm:Je,te:Le,getLocaleMessage:Ue,setLocaleMessage:Gt,mergeLocaleMessage:Lt,getDateTimeFormat:Ze,setDateTimeFormat:G,mergeDateTimeFormat:re,getNumberFormat:Z,setNumberFormat:ie,mergeNumberFormat:Te};function b(v){v.locale.value=a.value,v.fallbackLocale.value=l.value,Object.keys(u.value).forEach(F=>{v.mergeLocaleMessage(F,u.value[F])}),Object.keys(h.value).forEach(F=>{v.mergeDateTimeFormat(F,h.value[F])}),Object.keys(d.value).forEach(F=>{v.mergeNumberFormat(F,d.value[F])}),v.escapeParameter=C,v.fallbackFormat=N,v.fallbackRoot=A,v.fallbackWarn=m,v.missingWarn=p,v.warnHtmlMessage=B}return xv(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw Et(dt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const v=i.value=t.proxy.$i18n.__composer;e==="global"?(a.value=v.locale.value,l.value=v.fallbackLocale.value,u.value=v.messages.value,h.value=v.datetimeFormats.value,d.value=v.numberFormats.value):s&&b(v)}),Pe}const XP=["locale","fallbackLocale","availableLocales"],Um=["t","rt","d","n","tm","te"];function JP(t,e){const n=Object.create(null);return XP.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i)throw Et(dt.UNEXPECTED_ERROR);const o=It(i.value)?{get(){return i.value.value},set(a){i.value.value=a}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,Um.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i||!i.value)throw Et(dt.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,i)}),()=>{delete t.config.globalProperties.$i18n,Um.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}SP();__INTLIFY_JIT_COMPILATION__?ym(IP):ym(TP);fP(K0);dP(PE);if(__INTLIFY_PROD_DEVTOOLS__){const t=rr();t.__INTLIFY__=!0,nP(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}var $m={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(t,e){if(!t)throw Li(e)},Li=function(t){return new Error("Firebase Database ("+YE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ZP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(p=64)),r.push(n[h],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(QE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new eN;const p=i<<2|a>>4;if(r.push(p),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const A=u<<6&192|d;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XE=function(t){const e=QE(t);return Cc.encodeByteArray(e,!0)},kl=function(t){return XE(t).replace(/\./g,"")},Ol=function(t){try{return Cc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(t){return JE(void 0,t)}function JE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!nN(n)||(t[n]=JE(t[n],e[n]));return t}function nN(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=()=>rN().__FIREBASE_DEFAULTS__,iN=()=>{if(typeof process>"u"||typeof $m>"u")return;const t=$m.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ol(t[1]);return e&&JSON.parse(e)},Sc=()=>{try{return sN()||iN()||oN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},aN=t=>{var e,n;return(n=(e=Sc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lN=t=>{const e=aN(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ZE=()=>{var t;return(t=Sc())===null||t===void 0?void 0:t.config},cN=t=>{var e;return(e=Sc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[kl(JSON.stringify(n)),kl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function hN(){var t;const e=(t=Sc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fN(){const t=Ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nT(){return YE.NODE_ADMIN===!0}function dN(){return!hN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zf(){try{return typeof indexedDB=="object"}catch{return!1}}function rT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function pN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_N,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ts.prototype.create)}}class ts{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mN(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vn(s,a,r)}}function mN(t,e){return t.replace(gN,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){return JSON.parse(t)}function Ct(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=zo(Ol(i[0])||""),n=zo(Ol(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},yN=function(t){const e=sT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vN=function(t){const e=sT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ll(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Yo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Bm(i)&&Bm(o)){if(!Yo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const p=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(p<<1|p>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):d<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(s<<5|s>>>27)+u+l+h+r[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=p}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function TN(t,e){const n=new IN(t,e);return n.subscribe.bind(n)}class IN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wN(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Lu),s.error===void 0&&(s.error=Lu),s.complete===void 0&&(s.complete=Lu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lu(){}function AN(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,ne(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Pc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=1e3,CN=2,SN=4*60*60*1e3,PN=.5;function jm(t,e=RN,n=CN){const r=e*Math.pow(n,t),s=Math.round(PN*r*(Math.random()-.5)*2);return Math.min(SN,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t){return t&&t._delegate?t._delegate:t}class Jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ko;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ON(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kN(t){return t===ds?void 0:t}function ON(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const DN={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},MN=we.INFO,xN={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},FN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xN[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mi{constructor(e){this.name=e,this._logLevel=MN,this._logHandler=FN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const VN=(t,e)=>e.some(n=>t instanceof n);let Wm,Hm;function UN(){return Wm||(Wm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $N(){return Hm||(Hm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iT=new WeakMap,Ch=new WeakMap,oT=new WeakMap,Du=new WeakMap,Yf=new WeakMap;function BN(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iT.set(n,t)}).catch(()=>{}),Yf.set(e,t),e}function jN(t){if(Ch.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ch.set(t,e)}let Sh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ch.get(t);if(e==="objectStoreNames")return t.objectStoreNames||oT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WN(t){Sh=t(Sh)}function HN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Mu(this),e,...n);return oT.set(r,e.sort?e.sort():[e]),Ur(r)}:$N().includes(t)?function(...e){return t.apply(Mu(this),e),Ur(iT.get(this))}:function(...e){return Ur(t.apply(Mu(this),e))}}function qN(t){return typeof t=="function"?HN(t):(t instanceof IDBTransaction&&jN(t),VN(t,UN())?new Proxy(t,Sh):t)}function Ur(t){if(t instanceof IDBRequest)return BN(t);if(Du.has(t))return Du.get(t);const e=qN(t);return e!==t&&(Du.set(t,e),Yf.set(e,t)),e}const Mu=t=>Yf.get(t);function aT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ur(o.result),l.oldVersion,l.newVersion,Ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const GN=["get","getKey","getAll","getAllKeys","count"],KN=["put","add","delete","clear"],xu=new Map;function qm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xu.get(e))return xu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=KN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||GN.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return xu.set(e,i),i}WN(t=>({...t,get:(e,n,r)=>qm(e,n)||t.get(e,n,r),has:(e,n)=>!!qm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ph="@firebase/app",Gm="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new Mi("@firebase/app"),QN="@firebase/app-compat",XN="@firebase/analytics-compat",JN="@firebase/analytics",ZN="@firebase/app-check-compat",ek="@firebase/app-check",tk="@firebase/auth",nk="@firebase/auth-compat",rk="@firebase/database",sk="@firebase/database-compat",ik="@firebase/functions",ok="@firebase/functions-compat",ak="@firebase/installations",lk="@firebase/installations-compat",ck="@firebase/messaging",uk="@firebase/messaging-compat",hk="@firebase/performance",fk="@firebase/performance-compat",dk="@firebase/remote-config",pk="@firebase/remote-config-compat",_k="@firebase/storage",mk="@firebase/storage-compat",gk="@firebase/firestore",yk="@firebase/vertexai-preview",vk="@firebase/firestore-compat",Ek="firebase",Tk="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="[DEFAULT]",Ik={[Ph]:"fire-core",[QN]:"fire-core-compat",[JN]:"fire-analytics",[XN]:"fire-analytics-compat",[ek]:"fire-app-check",[ZN]:"fire-app-check-compat",[tk]:"fire-auth",[nk]:"fire-auth-compat",[rk]:"fire-rtdb",[sk]:"fire-rtdb-compat",[ik]:"fire-fn",[ok]:"fire-fn-compat",[ak]:"fire-iid",[lk]:"fire-iid-compat",[ck]:"fire-fcm",[uk]:"fire-fcm-compat",[hk]:"fire-perf",[fk]:"fire-perf-compat",[dk]:"fire-rc",[pk]:"fire-rc-compat",[_k]:"fire-gcs",[mk]:"fire-gcs-compat",[gk]:"fire-fst",[vk]:"fire-fst-compat",[yk]:"fire-vertex","fire-js":"fire-js",[Ek]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new Map,wk=new Map,kh=new Map;function Km(t,e){try{t.container.addComponent(e)}catch(n){As.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sn(t){const e=t.name;if(kh.has(e))return As.debug(`There were multiple attempts to register component ${e}.`),!1;kh.set(e,t);for(const n of Dl.values())Km(n,t);for(const n of wk.values())Km(n,t);return!0}function xi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$r=new ts("app","Firebase",Ak);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $r.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=Tk;function lT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw $r.create("bad-app-name",{appName:String(s)});if(n||(n=ZE()),!n)throw $r.create("no-options");const i=Dl.get(s);if(i){if(Yo(n,i.options)&&Yo(r,i.config))return i;throw $r.create("duplicate-app",{appName:s})}const o=new LN(s);for(const l of kh.values())o.addComponent(l);const a=new bk(n,r,o);return Dl.set(s,a),a}function Qf(t=Nh){const e=Dl.get(t);if(!e&&t===Nh&&ZE())return lT();if(!e)throw $r.create("no-app",{appName:t});return e}function Nt(t,e,n){var r;let s=(r=Ik[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),As.warn(a.join(" "));return}sn(new Jt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="firebase-heartbeat-database",Ck=1,Qo="firebase-heartbeat-store";let Fu=null;function cT(){return Fu||(Fu=aT(Rk,Ck,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qo)}catch(n){console.warn(n)}}}}).catch(t=>{throw $r.create("idb-open",{originalErrorMessage:t.message})})),Fu}async function Sk(t){try{const n=(await cT()).transaction(Qo),r=await n.objectStore(Qo).get(uT(t));return await n.done,r}catch(e){if(e instanceof vn)As.warn(e.message);else{const n=$r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});As.warn(n.message)}}}async function zm(t,e){try{const r=(await cT()).transaction(Qo,"readwrite");await r.objectStore(Qo).put(e,uT(t)),await r.done}catch(n){if(n instanceof vn)As.warn(n.message);else{const r=$r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});As.warn(r.message)}}}function uT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=1024,Nk=30*24*60*60*1e3;class kk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ym();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Nk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ym(),{heartbeatsToSend:r,unsentEntries:s}=Ok(this._heartbeatsCache.heartbeats),i=kl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ym(){return new Date().toISOString().substring(0,10)}function Ok(t,e=Pk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Lk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zf()?rT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qm(t){return kl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(t){sn(new Jt("platform-logger",e=>new zN(e),"PRIVATE")),sn(new Jt("heartbeat",e=>new kk(e),"PRIVATE")),Nt(Ph,Gm,t),Nt(Ph,Gm,"esm2017"),Nt("fire-js","")}Dk("");var Mk="firebase",xk="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(Mk,xk,"app");/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Fk={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Ka(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function za(t){return t.toString().indexOf("`")===-1}za(t=>t``)||za(t=>t`\0`)||za(t=>t`\n`)||za(t=>t`\u0000`);Ka``&&Ka`\0`&&Ka`\n`&&Ka`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let hT="google#safe";function Vk(){if(typeof window<"u")return window.trustedTypes}function fT(){var t;return hT!==""&&(t=Vk())!==null&&t!==void 0?t:null}let Ya;function Uk(){var t,e;if(Ya===void 0)try{Ya=(e=(t=fT())===null||t===void 0?void 0:t.createPolicy(hT,{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n}))!==null&&e!==void 0?e:null}catch{Ya=null}return Ya}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class dT{constructor(e,n){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Xm(t){var e;const n=t,r=(e=Uk())===null||e===void 0?void 0:e.createScriptURL(n);return r??new dT(n,Fk)}function $k(t){var e;if(!((e=fT())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof dT)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let n="";throw new Error(n)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Bk(t,...e){if(e.length===0)return Xm(t[0]);t[0].toLowerCase();let n=t[0];for(let r=0;r<e.length;r++)n+=encodeURIComponent(e[r])+t[r+1];return Xm(n)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function jk(t){return Wk("script",t)}function Wk(t,e){var n;const r=e.document,s=(n=r.querySelector)===null||n===void 0?void 0:n.call(r,`${t}[nonce]`);return s&&(s.nonce||s.getAttribute("nonce"))||""}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Hk(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,n=jk(e||window);n&&t.setAttribute("nonce",n)}function qk(t,e,n){t.src=$k(e),Hk(t)}const pT="@firebase/installations",Xf="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=1e4,mT=`w:${Xf}`,gT="FIS_v2",Gk="https://firebaseinstallations.googleapis.com/v1",Kk=60*60*1e3,zk="installations",Yk="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},bs=new ts(zk,Yk,Qk);function yT(t){return t instanceof vn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT({projectId:t}){return`${Gk}/projects/${t}/installations`}function ET(t){return{token:t.token,requestStatus:2,expiresIn:Jk(t.expiresIn),creationTime:Date.now()}}async function TT(t,e){const r=(await e.json()).error;return bs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function IT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Xk(t,{refreshToken:e}){const n=IT(t);return n.append("Authorization",Zk(e)),n}async function wT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Jk(t){return Number(t.replace("s","000"))}function Zk(t){return`${gT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=vT(t),s=IT(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:gT,appId:t.appId,sdkVersion:mT},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await wT(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:ET(u.authToken)}}else throw await TT("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=/^[cdef][\w-]{21}$/,Oh="";function rO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=sO(t);return nO.test(n)?n:Oh}catch{return Oh}}function sO(t){return tO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=new Map;function RT(t,e){const n=Nc(t);CT(n,e),iO(n,e)}function CT(t,e){const n=bT.get(t);if(n)for(const r of n)r(e)}function iO(t,e){const n=oO();n&&n.postMessage({key:t,fid:e}),aO()}let gs=null;function oO(){return!gs&&"BroadcastChannel"in self&&(gs=new BroadcastChannel("[Firebase] FID Change"),gs.onmessage=t=>{CT(t.data.key,t.data.fid)}),gs}function aO(){bT.size===0&&gs&&(gs.close(),gs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO="firebase-installations-database",cO=1,Rs="firebase-installations-store";let Vu=null;function Jf(){return Vu||(Vu=aT(lO,cO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rs)}}})),Vu}async function Ml(t,e){const n=Nc(t),s=(await Jf()).transaction(Rs,"readwrite"),i=s.objectStore(Rs),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&RT(t,e.fid),e}async function ST(t){const e=Nc(t),r=(await Jf()).transaction(Rs,"readwrite");await r.objectStore(Rs).delete(e),await r.done}async function kc(t,e){const n=Nc(t),s=(await Jf()).transaction(Rs,"readwrite"),i=s.objectStore(Rs),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&RT(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zf(t){let e;const n=await kc(t.appConfig,r=>{const s=uO(r),i=hO(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Oh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function uO(t){const e=t||{fid:rO(),registrationStatus:0};return PT(e)}function hO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(bs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=fO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:dO(t)}:{installationEntry:e}}async function fO(t,e){try{const n=await eO(t,e);return Ml(t.appConfig,n)}catch(n){throw yT(n)&&n.customData.serverCode===409?await ST(t.appConfig):await Ml(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function dO(t){let e=await Jm(t.appConfig);for(;e.registrationStatus===1;)await AT(100),e=await Jm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Zf(t);return r||n}return e}function Jm(t){return kc(t,e=>{if(!e)throw bs.create("installation-not-found");return PT(e)})}function PT(t){return pO(t)?{fid:t.fid,registrationStatus:0}:t}function pO(t){return t.registrationStatus===1&&t.registrationTime+_T<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _O({appConfig:t,heartbeatServiceProvider:e},n){const r=mO(t,n),s=Xk(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:mT,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await wT(()=>fetch(r,a));if(l.ok){const u=await l.json();return ET(u)}else throw await TT("Generate Auth Token",l)}function mO(t,{fid:e}){return`${vT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ed(t,e=!1){let n;const r=await kc(t.appConfig,i=>{if(!NT(i))throw bs.create("not-registered");const o=i.authToken;if(!e&&vO(o))return i;if(o.requestStatus===1)return n=gO(t,e),i;{if(!navigator.onLine)throw bs.create("app-offline");const a=TO(i);return n=yO(t,a),a}});return n?await n:r.authToken}async function gO(t,e){let n=await Zm(t.appConfig);for(;n.authToken.requestStatus===1;)await AT(100),n=await Zm(t.appConfig);const r=n.authToken;return r.requestStatus===0?ed(t,e):r}function Zm(t){return kc(t,e=>{if(!NT(e))throw bs.create("not-registered");const n=e.authToken;return IO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yO(t,e){try{const n=await _O(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ml(t.appConfig,r),n}catch(n){if(yT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ST(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ml(t.appConfig,r)}throw n}}function NT(t){return t!==void 0&&t.registrationStatus===2}function vO(t){return t.requestStatus===2&&!EO(t)}function EO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Kk}function TO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function IO(t){return t.requestStatus===1&&t.requestTime+_T<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wO(t){const e=t,{installationEntry:n,registrationPromise:r}=await Zf(e);return r?r.catch(console.error):ed(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AO(t,e=!1){const n=t;return await bO(n),(await ed(n,e)).token}async function bO(t){const{registrationPromise:e}=await Zf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(t){if(!t||!t.options)throw Uu("App Configuration");if(!t.name)throw Uu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Uu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Uu(t){return bs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="installations",CO="installations-internal",SO=t=>{const e=t.getProvider("app").getImmediate(),n=RO(e),r=xi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},PO=t=>{const e=t.getProvider("app").getImmediate(),n=xi(e,kT).getImmediate();return{getId:()=>wO(n),getToken:s=>AO(n,s)}};function NO(){sn(new Jt(kT,SO,"PUBLIC")),sn(new Jt(CO,PO,"PRIVATE"))}NO();Nt(pT,Xf);Nt(pT,Xf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="analytics",kO="firebase_id",OO="origin",LO=60*1e3,DO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",MO="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Mi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function xO(t,e){const n=document.createElement("script"),r=Bk`https://www.googletagmanager.com/gtag/js?l=${t}&id=${e}`;qk(n,r),n.async=!0,document.head.appendChild(n)}function FO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function VO(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await OT(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(a){un.error(a)}t("config",s,i)}async function UO(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await OT(n);for(const l of o){const u=a.find(d=>d.measurementId===l),h=u&&e[u.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){un.error(i)}}function $O(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,l]=o;await UO(t,e,n,a,l)}else if(i==="config"){const[a,l]=o;await VO(t,e,n,r,a,l)}else if(i==="consent"){const[a,l]=o;t("consent",a,l)}else if(i==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){un.error(a)}}return s}function BO(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=$O(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function jO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(MO)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gn=new ts("analytics","Analytics",WO);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=30,qO=1e3;class GO{constructor(e={},n=qO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const LT=new GO;function KO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function zO(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:KO(r)},i=DO.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw gn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function YO(t,e=LT,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw gn.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw gn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new JO;return setTimeout(async()=>{a.abort()},LO),DT({appId:r,apiKey:s,measurementId:i},o,a,e)}async function DT(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=LT){var i;const{appId:o,measurementId:a}=t;try{await QO(r,e)}catch(l){if(a)return un.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await zO(t);return s.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!XO(u)){if(s.deleteThrottleMetadata(o),a)return un.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const h=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?jm(n,s.intervalMillis,HO):jm(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(o,d),un.debug(`Calling attemptFetch again in ${h} millis`),DT(t,d,r,s)}}function QO(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(gn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function XO(t){if(!(t instanceof vn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class JO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ZO(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eL(){if(zf())try{await rT()}catch(t){return un.warn(gn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return un.warn(gn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tL(t,e,n,r,s,i,o){var a;const l=YO(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&un.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>un.error(m)),e.push(l);const u=eL().then(m=>{if(m)return r.getId()}),[h,d]=await Promise.all([l,u]);jO(i)||xO(i,h.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[OO]="firebase",p.update=!0,d!=null&&(p[kO]=d),s("config",h.measurementId,p),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e){this.app=e}_delete(){return delete So[this.app.options.appId],Promise.resolve()}}let So={},eg=[];const tg={};let $u="dataLayer",rL="gtag",ng,MT,rg=!1;function sL(){const t=[];if(eT()&&t.push("This is a browser extension environment."),pN()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=gn.create("invalid-analytics-context",{errorInfo:e});un.warn(n.message)}}function iL(t,e,n){sL();const r=t.options.appId;if(!r)throw gn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)un.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gn.create("no-api-key");if(So[r]!=null)throw gn.create("already-exists",{id:r});if(!rg){FO($u);const{wrappedGtag:i,gtagCore:o}=BO(So,eg,tg,$u,rL);MT=i,ng=o,rg=!0}return So[r]=tL(t,eg,tg,e,ng,$u,n),new nL(t)}function oL(t=Qf()){t=wt(t);const e=xi(t,xl);return e.isInitialized()?e.getImmediate():aL(t)}function aL(t,e={}){const n=xi(t,xl);if(n.isInitialized()){const s=n.getImmediate();if(Yo(e,n.getOptions()))return s;throw gn.create("already-initialized")}return n.initialize({options:e})}function lL(t,e,n,r){t=wt(t),ZO(MT,So[t.app.options.appId],e,n,r).catch(s=>un.error(s))}const sg="@firebase/analytics",ig="0.10.6";function cL(){sn(new Jt(xl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return iL(r,s,n)},"PUBLIC")),sn(new Jt("analytics-internal",t,"PRIVATE")),Nt(sg,ig),Nt(sg,ig,"esm2017");function t(e){try{const n=e.getProvider(xl).getImmediate();return{logEvent:(r,s,i)=>lL(n,r,s,i)}}catch(n){throw gn.create("interop-component-reg-failed",{reason:n})}}}cL();var og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Is,xT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function T(){}T.prototype=g.prototype,I.D=g.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(S,O,D){for(var R=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)R[nt-2]=arguments[nt];return g.prototype[O].apply(S,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,T){T||(T=0);var S=Array(16);if(typeof g=="string")for(var O=0;16>O;++O)S[O]=g.charCodeAt(T++)|g.charCodeAt(T++)<<8|g.charCodeAt(T++)<<16|g.charCodeAt(T++)<<24;else for(O=0;16>O;++O)S[O]=g[T++]|g[T++]<<8|g[T++]<<16|g[T++]<<24;g=I.g[0],T=I.g[1],O=I.g[2];var D=I.g[3],R=g+(D^T&(O^D))+S[0]+3614090360&4294967295;g=T+(R<<7&4294967295|R>>>25),R=D+(O^g&(T^O))+S[1]+3905402710&4294967295,D=g+(R<<12&4294967295|R>>>20),R=O+(T^D&(g^T))+S[2]+606105819&4294967295,O=D+(R<<17&4294967295|R>>>15),R=T+(g^O&(D^g))+S[3]+3250441966&4294967295,T=O+(R<<22&4294967295|R>>>10),R=g+(D^T&(O^D))+S[4]+4118548399&4294967295,g=T+(R<<7&4294967295|R>>>25),R=D+(O^g&(T^O))+S[5]+1200080426&4294967295,D=g+(R<<12&4294967295|R>>>20),R=O+(T^D&(g^T))+S[6]+2821735955&4294967295,O=D+(R<<17&4294967295|R>>>15),R=T+(g^O&(D^g))+S[7]+4249261313&4294967295,T=O+(R<<22&4294967295|R>>>10),R=g+(D^T&(O^D))+S[8]+1770035416&4294967295,g=T+(R<<7&4294967295|R>>>25),R=D+(O^g&(T^O))+S[9]+2336552879&4294967295,D=g+(R<<12&4294967295|R>>>20),R=O+(T^D&(g^T))+S[10]+4294925233&4294967295,O=D+(R<<17&4294967295|R>>>15),R=T+(g^O&(D^g))+S[11]+2304563134&4294967295,T=O+(R<<22&4294967295|R>>>10),R=g+(D^T&(O^D))+S[12]+1804603682&4294967295,g=T+(R<<7&4294967295|R>>>25),R=D+(O^g&(T^O))+S[13]+4254626195&4294967295,D=g+(R<<12&4294967295|R>>>20),R=O+(T^D&(g^T))+S[14]+2792965006&4294967295,O=D+(R<<17&4294967295|R>>>15),R=T+(g^O&(D^g))+S[15]+1236535329&4294967295,T=O+(R<<22&4294967295|R>>>10),R=g+(O^D&(T^O))+S[1]+4129170786&4294967295,g=T+(R<<5&4294967295|R>>>27),R=D+(T^O&(g^T))+S[6]+3225465664&4294967295,D=g+(R<<9&4294967295|R>>>23),R=O+(g^T&(D^g))+S[11]+643717713&4294967295,O=D+(R<<14&4294967295|R>>>18),R=T+(D^g&(O^D))+S[0]+3921069994&4294967295,T=O+(R<<20&4294967295|R>>>12),R=g+(O^D&(T^O))+S[5]+3593408605&4294967295,g=T+(R<<5&4294967295|R>>>27),R=D+(T^O&(g^T))+S[10]+38016083&4294967295,D=g+(R<<9&4294967295|R>>>23),R=O+(g^T&(D^g))+S[15]+3634488961&4294967295,O=D+(R<<14&4294967295|R>>>18),R=T+(D^g&(O^D))+S[4]+3889429448&4294967295,T=O+(R<<20&4294967295|R>>>12),R=g+(O^D&(T^O))+S[9]+568446438&4294967295,g=T+(R<<5&4294967295|R>>>27),R=D+(T^O&(g^T))+S[14]+3275163606&4294967295,D=g+(R<<9&4294967295|R>>>23),R=O+(g^T&(D^g))+S[3]+4107603335&4294967295,O=D+(R<<14&4294967295|R>>>18),R=T+(D^g&(O^D))+S[8]+1163531501&4294967295,T=O+(R<<20&4294967295|R>>>12),R=g+(O^D&(T^O))+S[13]+2850285829&4294967295,g=T+(R<<5&4294967295|R>>>27),R=D+(T^O&(g^T))+S[2]+4243563512&4294967295,D=g+(R<<9&4294967295|R>>>23),R=O+(g^T&(D^g))+S[7]+1735328473&4294967295,O=D+(R<<14&4294967295|R>>>18),R=T+(D^g&(O^D))+S[12]+2368359562&4294967295,T=O+(R<<20&4294967295|R>>>12),R=g+(T^O^D)+S[5]+4294588738&4294967295,g=T+(R<<4&4294967295|R>>>28),R=D+(g^T^O)+S[8]+2272392833&4294967295,D=g+(R<<11&4294967295|R>>>21),R=O+(D^g^T)+S[11]+1839030562&4294967295,O=D+(R<<16&4294967295|R>>>16),R=T+(O^D^g)+S[14]+4259657740&4294967295,T=O+(R<<23&4294967295|R>>>9),R=g+(T^O^D)+S[1]+2763975236&4294967295,g=T+(R<<4&4294967295|R>>>28),R=D+(g^T^O)+S[4]+1272893353&4294967295,D=g+(R<<11&4294967295|R>>>21),R=O+(D^g^T)+S[7]+4139469664&4294967295,O=D+(R<<16&4294967295|R>>>16),R=T+(O^D^g)+S[10]+3200236656&4294967295,T=O+(R<<23&4294967295|R>>>9),R=g+(T^O^D)+S[13]+681279174&4294967295,g=T+(R<<4&4294967295|R>>>28),R=D+(g^T^O)+S[0]+3936430074&4294967295,D=g+(R<<11&4294967295|R>>>21),R=O+(D^g^T)+S[3]+3572445317&4294967295,O=D+(R<<16&4294967295|R>>>16),R=T+(O^D^g)+S[6]+76029189&4294967295,T=O+(R<<23&4294967295|R>>>9),R=g+(T^O^D)+S[9]+3654602809&4294967295,g=T+(R<<4&4294967295|R>>>28),R=D+(g^T^O)+S[12]+3873151461&4294967295,D=g+(R<<11&4294967295|R>>>21),R=O+(D^g^T)+S[15]+530742520&4294967295,O=D+(R<<16&4294967295|R>>>16),R=T+(O^D^g)+S[2]+3299628645&4294967295,T=O+(R<<23&4294967295|R>>>9),R=g+(O^(T|~D))+S[0]+4096336452&4294967295,g=T+(R<<6&4294967295|R>>>26),R=D+(T^(g|~O))+S[7]+1126891415&4294967295,D=g+(R<<10&4294967295|R>>>22),R=O+(g^(D|~T))+S[14]+2878612391&4294967295,O=D+(R<<15&4294967295|R>>>17),R=T+(D^(O|~g))+S[5]+4237533241&4294967295,T=O+(R<<21&4294967295|R>>>11),R=g+(O^(T|~D))+S[12]+1700485571&4294967295,g=T+(R<<6&4294967295|R>>>26),R=D+(T^(g|~O))+S[3]+2399980690&4294967295,D=g+(R<<10&4294967295|R>>>22),R=O+(g^(D|~T))+S[10]+4293915773&4294967295,O=D+(R<<15&4294967295|R>>>17),R=T+(D^(O|~g))+S[1]+2240044497&4294967295,T=O+(R<<21&4294967295|R>>>11),R=g+(O^(T|~D))+S[8]+1873313359&4294967295,g=T+(R<<6&4294967295|R>>>26),R=D+(T^(g|~O))+S[15]+4264355552&4294967295,D=g+(R<<10&4294967295|R>>>22),R=O+(g^(D|~T))+S[6]+2734768916&4294967295,O=D+(R<<15&4294967295|R>>>17),R=T+(D^(O|~g))+S[13]+1309151649&4294967295,T=O+(R<<21&4294967295|R>>>11),R=g+(O^(T|~D))+S[4]+4149444226&4294967295,g=T+(R<<6&4294967295|R>>>26),R=D+(T^(g|~O))+S[11]+3174756917&4294967295,D=g+(R<<10&4294967295|R>>>22),R=O+(g^(D|~T))+S[2]+718787259&4294967295,O=D+(R<<15&4294967295|R>>>17),R=T+(D^(O|~g))+S[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+O&4294967295,I.g[3]=I.g[3]+D&4294967295}r.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var T=g-this.blockSize,S=this.B,O=this.h,D=0;D<g;){if(O==0)for(;D<=T;)s(this,I,D),D+=this.blockSize;if(typeof I=="string"){for(;D<g;)if(S[O++]=I.charCodeAt(D++),O==this.blockSize){s(this,S),O=0;break}}else for(;D<g;)if(S[O++]=I[D++],O==this.blockSize){s(this,S),O=0;break}}this.h=O,this.o+=g},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var T=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=T&255,T/=256;for(this.u(I),I=Array(16),g=T=0;4>g;++g)for(var S=0;32>S;S+=8)I[T++]=this.g[g]>>>S&255;return I};function i(I,g){var T=a;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=g(I)}function o(I,g){this.h=g;for(var T=[],S=!0,O=I.length-1;0<=O;O--){var D=I[O]|0;S&&D==g||(T[O]=D,S=!1)}this.g=T}var a={};function l(I){return-128<=I&&128>I?i(I,function(g){return new o([g|0],0>g?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return d;if(0>I)return P(u(-I));for(var g=[],T=1,S=0;I>=T;S++)g[S]=I/T|0,T*=4294967296;return new o(g,0)}function h(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return P(h(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(g,8)),S=d,O=0;O<I.length;O+=8){var D=Math.min(8,I.length-O),R=parseInt(I.substring(O,O+D),g);8>D?(D=u(Math.pow(g,D)),S=S.j(D).add(u(R))):(S=S.j(T),S=S.add(u(R)))}return S}var d=l(0),p=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(N(this))return-P(this).m();for(var I=0,g=1,T=0;T<this.g.length;T++){var S=this.i(T);I+=(0<=S?S:4294967296+S)*g,g*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(A(this))return"0";if(N(this))return"-"+P(this).toString(I);for(var g=u(Math.pow(I,6)),T=this,S="";;){var O=L(T,g).g;T=V(T,O.j(g));var D=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=O,A(T))return D+S;for(;6>D.length;)D="0"+D;S=D+S}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function A(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function N(I){return I.h==-1}t.l=function(I){return I=V(this,I),N(I)?-1:A(I)?0:1};function P(I){for(var g=I.g.length,T=[],S=0;S<g;S++)T[S]=~I.g[S];return new o(T,~I.h).add(p)}t.abs=function(){return N(this)?P(this):this},t.add=function(I){for(var g=Math.max(this.g.length,I.g.length),T=[],S=0,O=0;O<=g;O++){var D=S+(this.i(O)&65535)+(I.i(O)&65535),R=(D>>>16)+(this.i(O)>>>16)+(I.i(O)>>>16);S=R>>>16,D&=65535,R&=65535,T[O]=R<<16|D}return new o(T,T[T.length-1]&-2147483648?-1:0)};function V(I,g){return I.add(P(g))}t.j=function(I){if(A(this)||A(I))return d;if(N(this))return N(I)?P(this).j(P(I)):P(P(this).j(I));if(N(I))return P(this.j(P(I)));if(0>this.l(m)&&0>I.l(m))return u(this.m()*I.m());for(var g=this.g.length+I.g.length,T=[],S=0;S<2*g;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var O=0;O<I.g.length;O++){var D=this.i(S)>>>16,R=this.i(S)&65535,nt=I.i(O)>>>16,pt=I.i(O)&65535;T[2*S+2*O]+=R*pt,B(T,2*S+2*O),T[2*S+2*O+1]+=D*pt,B(T,2*S+2*O+1),T[2*S+2*O+1]+=R*nt,B(T,2*S+2*O+1),T[2*S+2*O+2]+=D*nt,B(T,2*S+2*O+2)}for(S=0;S<g;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=g;S<2*g;S++)T[S]=0;return new o(T,0)};function B(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function C(I,g){this.g=I,this.h=g}function L(I,g){if(A(g))throw Error("division by zero");if(A(I))return new C(d,d);if(N(I))return g=L(P(I),g),new C(P(g.g),P(g.h));if(N(g))return g=L(I,P(g)),new C(P(g.g),g.h);if(30<I.g.length){if(N(I)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var T=p,S=g;0>=S.l(I);)T=j(T),S=j(S);var O=M(T,1),D=M(S,1);for(S=M(S,2),T=M(T,2);!A(S);){var R=D.add(S);0>=R.l(I)&&(O=O.add(T),D=R),S=M(S,1),T=M(T,1)}return g=V(I,O.j(g)),new C(O,g)}for(O=d;0<=I.l(g);){for(T=Math.max(1,Math.floor(I.m()/g.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),D=u(T),R=D.j(g);N(R)||0<R.l(I);)T-=S,D=u(T),R=D.j(g);A(D)&&(D=p),O=O.add(D),I=V(I,R)}return new C(O,I)}t.A=function(I){return L(this,I).h},t.and=function(I){for(var g=Math.max(this.g.length,I.g.length),T=[],S=0;S<g;S++)T[S]=this.i(S)&I.i(S);return new o(T,this.h&I.h)},t.or=function(I){for(var g=Math.max(this.g.length,I.g.length),T=[],S=0;S<g;S++)T[S]=this.i(S)|I.i(S);return new o(T,this.h|I.h)},t.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),T=[],S=0;S<g;S++)T[S]=this.i(S)^I.i(S);return new o(T,this.h^I.h)};function j(I){for(var g=I.g.length+1,T=[],S=0;S<g;S++)T[S]=I.i(S)<<1|I.i(S-1)>>>31;return new o(T,I.h)}function M(I,g){var T=g>>5;g%=32;for(var S=I.g.length-T,O=[],D=0;D<S;D++)O[D]=0<g?I.i(D+T)>>>g|I.i(D+T+1)<<32-g:I.i(D+T);return new o(O,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Is=o}).apply(typeof og<"u"?og:typeof self<"u"?self:typeof window<"u"?window:{});var Qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var FT,VT,po,UT,dl,Lh,$T,BT,jT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,_){return c==Array.prototype||c==Object.prototype||(c[f]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qa=="object"&&Qa];for(var f=0;f<c.length;++f){var _=c[f];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var _=r;c=c.split(".");for(var y=0;y<c.length-1;y++){var U=c[y];if(!(U in _))break e;_=_[U]}c=c[c.length-1],y=_[c],f=f(y),f!=y&&f!=null&&e(_,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var _=0,y=!1,U={next:function(){if(!y&&_<c.length){var W=_++;return{value:f(W,c[W]),done:!1}}return y=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,_){return c.call.apply(c.bind,arguments)}function d(c,f,_){if(!c)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,y),c.apply(f,U)}}return function(){return c.apply(f,arguments)}}function p(c,f,_){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function m(c,f){var _=Array.prototype.slice.call(arguments,1);return function(){var y=_.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function A(c,f){function _(){}_.prototype=f.prototype,c.aa=f.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(y,U,W){for(var J=Array(arguments.length-2),je=2;je<arguments.length;je++)J[je-2]=arguments[je];return f.prototype[U].apply(y,J)}}function N(c){const f=c.length;if(0<f){const _=Array(f);for(let y=0;y<f;y++)_[y]=c[y];return _}return[]}function P(c,f){for(let _=1;_<arguments.length;_++){const y=arguments[_];if(l(y)){const U=c.length||0,W=y.length||0;c.length=U+W;for(let J=0;J<W;J++)c[U+J]=y[J]}else c.push(y)}}class V{constructor(f,_){this.i=f,this.j=_,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function B(c){return/^[\s\xa0]*$/.test(c)}function C(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function L(c){return L[" "](c),c}L[" "]=function(){};var j=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function M(c,f,_){for(const y in c)f.call(_,c[y],y,c)}function I(c,f){for(const _ in c)f.call(void 0,c[_],_,c)}function g(c){const f={};for(const _ in c)f[_]=c[_];return f}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(c,f){let _,y;for(let U=1;U<arguments.length;U++){y=arguments[U];for(_ in y)c[_]=y[_];for(let W=0;W<T.length;W++)_=T[W],Object.prototype.hasOwnProperty.call(y,_)&&(c[_]=y[_])}}function O(c){var f=1;c=c.split(":");const _=[];for(;0<f&&c.length;)_.push(c.shift()),f--;return c.length&&_.push(c.join(":")),_}function D(c){a.setTimeout(()=>{throw c},0)}function R(){var c=ut;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class nt{constructor(){this.h=this.g=null}add(f,_){const y=pt.get();y.set(f,_),this.h?this.h.next=y:this.g=y,this.h=y}}var pt=new V(()=>new Oe,c=>c.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(f,_){this.h=f,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,ve=!1,ut=new nt,At=()=>{const c=a.Promise.resolve(void 0);Ee=()=>{c.then(Je)}};var Je=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(_){D(_)}var f=pt;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}ve=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Gt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};a.addEventListener("test",_,f),a.removeEventListener("test",_,f)}catch{}return c}();function Lt(c,f){if(Ue.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(j){e:{try{L(f.nodeName);var U=!0;break e}catch{}U=!1}U||(f=null)}}else _=="mouseover"?f=c.fromElement:_=="mouseout"&&(f=c.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ze[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Lt.aa.h.call(this)}}A(Lt,Ue);var Ze={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var G="closure_listenable_"+(1e6*Math.random()|0),re=0;function Z(c,f,_,y,U){this.listener=c,this.proxy=null,this.src=f,this.type=_,this.capture=!!y,this.ha=U,this.key=++re,this.da=this.fa=!1}function ie(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Te(c){this.src=c,this.g={},this.h=0}Te.prototype.add=function(c,f,_,y,U){var W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);var J=b(c,f,y,U);return-1<J?(f=c[J],_||(f.fa=!1)):(f=new Z(f,this.src,W,!!y,U),f.fa=_,c.push(f)),f};function Pe(c,f){var _=f.type;if(_ in c.g){var y=c.g[_],U=Array.prototype.indexOf.call(y,f,void 0),W;(W=0<=U)&&Array.prototype.splice.call(y,U,1),W&&(ie(f),c.g[_].length==0&&(delete c.g[_],c.h--))}}function b(c,f,_,y){for(var U=0;U<c.length;++U){var W=c[U];if(!W.da&&W.listener==f&&W.capture==!!_&&W.ha==y)return U}return-1}var v="closure_lm_"+(1e6*Math.random()|0),F={};function K(c,f,_,y,U){if(Array.isArray(f)){for(var W=0;W<f.length;W++)K(c,f[W],_,y,U);return null}return _=Y(_),c&&c[G]?c.K(f,_,u(y)?!!y.capture:!!y,U):q(c,f,_,!1,y,U)}function q(c,f,_,y,U,W){if(!f)throw Error("Invalid event type");var J=u(U)?!!U.capture:!!U,je=H(c);if(je||(c[v]=je=new Te(c)),_=je.add(f,_,y,J,W),_.proxy)return _;if(y=X(),_.proxy=y,y.src=c,y.listener=_,c.addEventListener)Gt||(U=J),U===void 0&&(U=!1),c.addEventListener(f.toString(),y,U);else if(c.attachEvent)c.attachEvent(w(f.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return _}function X(){function c(_){return f.call(c.src,c.listener,_)}const f=k;return c}function ee(c,f,_,y,U){if(Array.isArray(f))for(var W=0;W<f.length;W++)ee(c,f[W],_,y,U);else y=u(y)?!!y.capture:!!y,_=Y(_),c&&c[G]?(c=c.i,f=String(f).toString(),f in c.g&&(W=c.g[f],_=b(W,_,y,U),-1<_&&(ie(W[_]),Array.prototype.splice.call(W,_,1),W.length==0&&(delete c.g[f],c.h--)))):c&&(c=H(c))&&(f=c.g[f.toString()],c=-1,f&&(c=b(f,_,y,U)),(_=-1<c?f[c]:null)&&E(_))}function E(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[G])Pe(f.i,c);else{var _=c.type,y=c.proxy;f.removeEventListener?f.removeEventListener(_,y,c.capture):f.detachEvent?f.detachEvent(w(_),y):f.addListener&&f.removeListener&&f.removeListener(y),(_=H(f))?(Pe(_,c),_.h==0&&(_.src=null,f[v]=null)):ie(c)}}}function w(c){return c in F?F[c]:F[c]="on"+c}function k(c,f){if(c.da)c=!0;else{f=new Lt(f,this);var _=c.listener,y=c.ha||c.src;c.fa&&E(c),c=_.call(y,f)}return c}function H(c){return c=c[v],c instanceof Te?c:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function Y(c){return typeof c=="function"?c:(c[te]||(c[te]=function(f){return c.handleEvent(f)}),c[te])}function x(){Le.call(this),this.i=new Te(this),this.M=this,this.F=null}A(x,Le),x.prototype[G]=!0,x.prototype.removeEventListener=function(c,f,_,y){ee(this,c,f,_,y)};function $(c,f){var _,y=c.F;if(y)for(_=[];y;y=y.F)_.push(y);if(c=c.M,y=f.type||f,typeof f=="string")f=new Ue(f,c);else if(f instanceof Ue)f.target=f.target||c;else{var U=f;f=new Ue(y,c),S(f,U)}if(U=!0,_)for(var W=_.length-1;0<=W;W--){var J=f.g=_[W];U=le(J,y,!0,f)&&U}if(J=f.g=c,U=le(J,y,!0,f)&&U,U=le(J,y,!1,f)&&U,_)for(W=0;W<_.length;W++)J=f.g=_[W],U=le(J,y,!1,f)&&U}x.prototype.N=function(){if(x.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var _=c.g[f],y=0;y<_.length;y++)ie(_[y]);delete c.g[f],c.h--}}this.F=null},x.prototype.K=function(c,f,_,y){return this.i.add(String(c),f,!1,_,y)},x.prototype.L=function(c,f,_,y){return this.i.add(String(c),f,!0,_,y)};function le(c,f,_,y){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var U=!0,W=0;W<f.length;++W){var J=f[W];if(J&&!J.da&&J.capture==_){var je=J.listener,bt=J.ha||J.src;J.fa&&Pe(c.i,J),U=je.call(bt,y)!==!1&&U}}return U&&!y.defaultPrevented}function ce(c,f,_){if(typeof c=="function")_&&(c=p(c,_));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function xe(c){c.g=ce(()=>{c.g=null,c.i&&(c.i=!1,xe(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class _t extends Le{constructor(f,_){super(),this.m=f,this.l=_,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:xe(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ht(c){Le.call(this),this.h=c,this.g={}}A(ht,Le);var ss=[];function zn(c){M(c.g,function(f,_){this.g.hasOwnProperty(_)&&E(f)},c),c.g={}}ht.prototype.N=function(){ht.aa.N.call(this),zn(this)},ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var js=a.JSON.stringify,Kt=a.JSON.parse,fn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Ws(){}Ws.prototype.h=null;function mp(c){return c.h||(c.h=c.i())}function gp(){}var qi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ou(){Ue.call(this,"d")}A(ou,Ue);function au(){Ue.call(this,"c")}A(au,Ue);var is={},yp=null;function ba(){return yp=yp||new x}is.La="serverreachability";function vp(c){Ue.call(this,is.La,c)}A(vp,Ue);function Gi(c){const f=ba();$(f,new vp(f))}is.STAT_EVENT="statevent";function Ep(c,f){Ue.call(this,is.STAT_EVENT,c),this.stat=f}A(Ep,Ue);function zt(c){const f=ba();$(f,new Ep(f,c))}is.Ma="timingevent";function Tp(c,f){Ue.call(this,is.Ma,c),this.size=f}A(Tp,Ue);function Ki(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function zi(){this.g=!0}zi.prototype.xa=function(){this.g=!1};function sb(c,f,_,y,U,W){c.info(function(){if(c.g)if(W)for(var J="",je=W.split("&"),bt=0;bt<je.length;bt++){var ke=je[bt].split("=");if(1<ke.length){var Dt=ke[0];ke=ke[1];var Mt=Dt.split("_");J=2<=Mt.length&&Mt[1]=="type"?J+(Dt+"="+ke+"&"):J+(Dt+"=redacted&")}}else J=null;else J=W;return"XMLHTTP REQ ("+y+") [attempt "+U+"]: "+f+`
`+_+`
`+J})}function ib(c,f,_,y,U,W,J){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+U+"]: "+f+`
`+_+`
`+W+" "+J})}function Hs(c,f,_,y){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+ab(c,_)+(y?" "+y:"")})}function ob(c,f){c.info(function(){return"TIMEOUT: "+f})}zi.prototype.info=function(){};function ab(c,f){if(!c.g)return f;if(!f)return null;try{var _=JSON.parse(f);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var y=_[c];if(!(2>y.length)){var U=y[1];if(Array.isArray(U)&&!(1>U.length)){var W=U[0];if(W!="noop"&&W!="stop"&&W!="close")for(var J=1;J<U.length;J++)U[J]=""}}}}return js(_)}catch{return f}}var Ra={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ip={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lu;function Ca(){}A(Ca,Ws),Ca.prototype.g=function(){return new XMLHttpRequest},Ca.prototype.i=function(){return{}},lu=new Ca;function vr(c,f,_,y){this.j=c,this.i=f,this.l=_,this.R=y||1,this.U=new ht(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wp}function wp(){this.i=null,this.g="",this.h=!1}var Ap={},cu={};function uu(c,f,_){c.L=1,c.v=ka(Yn(f)),c.m=_,c.P=!0,bp(c,null)}function bp(c,f){c.F=Date.now(),Sa(c),c.A=Yn(c.v);var _=c.A,y=c.R;Array.isArray(y)||(y=[String(y)]),Up(_.i,"t",y),c.C=0,_=c.j.J,c.h=new wp,c.g=r_(c.j,_?f:null,!c.m),0<c.O&&(c.M=new _t(p(c.Y,c,c.g),c.O)),f=c.U,_=c.g,y=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(ss[0]=U.toString()),U=ss);for(var W=0;W<U.length;W++){var J=K(_,U[W],y||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=c.H?g(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),Gi(),sb(c.i,c.u,c.A,c.l,c.R,c.m)}vr.prototype.ca=function(c){c=c.target;const f=this.M;f&&Qn(c)==3?f.j():this.Y(c)},vr.prototype.Y=function(c){try{if(c==this.g)e:{const Mt=Qn(this.g);var f=this.g.Ba();const Ks=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||Gp(this.g)))){this.J||Mt!=4||f==7||(f==8||0>=Ks?Gi(3):Gi(2)),hu(this);var _=this.g.Z();this.X=_;t:if(Rp(this)){var y=Gp(this.g);c="";var U=y.length,W=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){os(this),Yi(this);var J="";break t}this.h.i=new a.TextDecoder}for(f=0;f<U;f++)this.h.h=!0,c+=this.h.i.decode(y[f],{stream:!(W&&f==U-1)});y.length=0,this.h.g+=c,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=_==200,ib(this.i,this.u,this.A,this.l,this.R,Mt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,bt=this.g;if((je=bt.g?bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(je)){var ke=je;break t}}ke=null}if(_=ke)Hs(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fu(this,_);else{this.o=!1,this.s=3,zt(12),os(this),Yi(this);break e}}if(this.P){_=!0;let En;for(;!this.J&&this.C<J.length;)if(En=lb(this,J),En==cu){Mt==4&&(this.s=4,zt(14),_=!1),Hs(this.i,this.l,null,"[Incomplete Response]");break}else if(En==Ap){this.s=4,zt(15),Hs(this.i,this.l,J,"[Invalid Chunk]"),_=!1;break}else Hs(this.i,this.l,En,null),fu(this,En);if(Rp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||J.length!=0||this.h.h||(this.s=1,zt(16),_=!1),this.o=this.o&&_,!_)Hs(this.i,this.l,J,"[Invalid Chunked Response]"),os(this),Yi(this);else if(0<J.length&&!this.W){this.W=!0;var Dt=this.j;Dt.g==this&&Dt.ba&&!Dt.M&&(Dt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),yu(Dt),Dt.M=!0,zt(11))}}else Hs(this.i,this.l,J,null),fu(this,J);Mt==4&&os(this),this.o&&!this.J&&(Mt==4?Zp(this.j,this):(this.o=!1,Sa(this)))}else bb(this.g),_==400&&0<J.indexOf("Unknown SID")?(this.s=3,zt(12)):(this.s=0,zt(13)),os(this),Yi(this)}}}catch{}finally{}};function Rp(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function lb(c,f){var _=c.C,y=f.indexOf(`
`,_);return y==-1?cu:(_=Number(f.substring(_,y)),isNaN(_)?Ap:(y+=1,y+_>f.length?cu:(f=f.slice(y,y+_),c.C=y+_,f)))}vr.prototype.cancel=function(){this.J=!0,os(this)};function Sa(c){c.S=Date.now()+c.I,Cp(c,c.I)}function Cp(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Ki(p(c.ba,c),f)}function hu(c){c.B&&(a.clearTimeout(c.B),c.B=null)}vr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(ob(this.i,this.A),this.L!=2&&(Gi(),zt(17)),os(this),this.s=2,Yi(this)):Cp(this,this.S-c)};function Yi(c){c.j.G==0||c.J||Zp(c.j,c)}function os(c){hu(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,zn(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function fu(c,f){try{var _=c.j;if(_.G!=0&&(_.g==c||du(_.h,c))){if(!c.K&&du(_.h,c)&&_.G==3){try{var y=_.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var U=y;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)xa(_),Da(_);else break e;gu(_),zt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=Ki(p(_.Za,_),6e3));if(1>=Np(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else ls(_,11)}else if((c.K||_.g==c)&&xa(_),!B(f))for(U=_.Da.g.parse(f),f=0;f<U.length;f++){let ke=U[f];if(_.T=ke[0],ke=ke[1],_.G==2)if(ke[0]=="c"){_.K=ke[1],_.ia=ke[2];const Dt=ke[3];Dt!=null&&(_.la=Dt,_.j.info("VER="+_.la));const Mt=ke[4];Mt!=null&&(_.Aa=Mt,_.j.info("SVER="+_.Aa));const Ks=ke[5];Ks!=null&&typeof Ks=="number"&&0<Ks&&(y=1.5*Ks,_.L=y,_.j.info("backChannelRequestTimeoutMs_="+y)),y=_;const En=c.g;if(En){const Va=En.g?En.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Va){var W=y.h;W.g||Va.indexOf("spdy")==-1&&Va.indexOf("quic")==-1&&Va.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(pu(W,W.h),W.h=null))}if(y.D){const vu=En.g?En.g.getResponseHeader("X-HTTP-Session-Id"):null;vu&&(y.ya=vu,qe(y.I,y.D,vu))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),y=_;var J=c;if(y.qa=n_(y,y.J?y.ia:null,y.W),J.K){kp(y.h,J);var je=J,bt=y.L;bt&&(je.I=bt),je.B&&(hu(je),Sa(je)),y.g=J}else Xp(y);0<_.i.length&&Ma(_)}else ke[0]!="stop"&&ke[0]!="close"||ls(_,7);else _.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?ls(_,7):mu(_):ke[0]!="noop"&&_.l&&_.l.ta(ke),_.v=0)}}Gi(4)}catch{}}var cb=class{constructor(c,f){this.g=c,this.map=f}};function Sp(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pp(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Np(c){return c.h?1:c.g?c.g.size:0}function du(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function pu(c,f){c.g?c.g.add(f):c.h=f}function kp(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Sp.prototype.cancel=function(){if(this.i=Op(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Op(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const _ of c.g.values())f=f.concat(_.D);return f}return N(c.i)}function ub(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],_=c.length,y=0;y<_;y++)f.push(c[y]);return f}f=[],_=0;for(y in c)f[_++]=c[y];return f}function hb(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var _=0;_<c;_++)f.push(_);return f}f=[],_=0;for(const y in c)f[_++]=y;return f}}}function Lp(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var _=hb(c),y=ub(c),U=y.length,W=0;W<U;W++)f.call(void 0,y[W],_&&_[W],c)}var Dp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fb(c,f){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var y=c[_].indexOf("="),U=null;if(0<=y){var W=c[_].substring(0,y);U=c[_].substring(y+1)}else W=c[_];f(W,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function as(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof as){this.h=c.h,Pa(this,c.j),this.o=c.o,this.g=c.g,Na(this,c.s),this.l=c.l;var f=c.i,_=new Ji;_.i=f.i,f.g&&(_.g=new Map(f.g),_.h=f.h),Mp(this,_),this.m=c.m}else c&&(f=String(c).match(Dp))?(this.h=!1,Pa(this,f[1]||"",!0),this.o=Qi(f[2]||""),this.g=Qi(f[3]||"",!0),Na(this,f[4]),this.l=Qi(f[5]||"",!0),Mp(this,f[6]||"",!0),this.m=Qi(f[7]||"")):(this.h=!1,this.i=new Ji(null,this.h))}as.prototype.toString=function(){var c=[],f=this.j;f&&c.push(Xi(f,xp,!0),":");var _=this.g;return(_||f=="file")&&(c.push("//"),(f=this.o)&&c.push(Xi(f,xp,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Xi(_,_.charAt(0)=="/"?_b:pb,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Xi(_,gb)),c.join("")};function Yn(c){return new as(c)}function Pa(c,f,_){c.j=_?Qi(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Na(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Mp(c,f,_){f instanceof Ji?(c.i=f,yb(c.i,c.h)):(_||(f=Xi(f,mb)),c.i=new Ji(f,c.h))}function qe(c,f,_){c.i.set(f,_)}function ka(c){return qe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Qi(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Xi(c,f,_){return typeof c=="string"?(c=encodeURI(c).replace(f,db),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function db(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var xp=/[#\/\?@]/g,pb=/[#\?:]/g,_b=/[#\?]/g,mb=/[#\?@]/g,gb=/#/g;function Ji(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function Er(c){c.g||(c.g=new Map,c.h=0,c.i&&fb(c.i,function(f,_){c.add(decodeURIComponent(f.replace(/\+/g," ")),_)}))}t=Ji.prototype,t.add=function(c,f){Er(this),this.i=null,c=qs(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(f),this.h+=1,this};function Fp(c,f){Er(c),f=qs(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Vp(c,f){return Er(c),f=qs(c,f),c.g.has(f)}t.forEach=function(c,f){Er(this),this.g.forEach(function(_,y){_.forEach(function(U){c.call(f,U,y,this)},this)},this)},t.na=function(){Er(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),_=[];for(let y=0;y<f.length;y++){const U=c[y];for(let W=0;W<U.length;W++)_.push(f[y])}return _},t.V=function(c){Er(this);let f=[];if(typeof c=="string")Vp(this,c)&&(f=f.concat(this.g.get(qs(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)f=f.concat(c[_])}return f},t.set=function(c,f){return Er(this),this.i=null,c=qs(this,c),Vp(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Up(c,f,_){Fp(c,f),0<_.length&&(c.i=null,c.g.set(qs(c,f),N(_)),c.h+=_.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var _=0;_<f.length;_++){var y=f[_];const W=encodeURIComponent(String(y)),J=this.V(y);for(y=0;y<J.length;y++){var U=W;J[y]!==""&&(U+="="+encodeURIComponent(String(J[y]))),c.push(U)}}return this.i=c.join("&")};function qs(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function yb(c,f){f&&!c.j&&(Er(c),c.i=null,c.g.forEach(function(_,y){var U=y.toLowerCase();y!=U&&(Fp(this,y),Up(this,U,_))},c)),c.j=f}function vb(c,f){const _=new zi;if(a.Image){const y=new Image;y.onload=m(Tr,_,"TestLoadImage: loaded",!0,f,y),y.onerror=m(Tr,_,"TestLoadImage: error",!1,f,y),y.onabort=m(Tr,_,"TestLoadImage: abort",!1,f,y),y.ontimeout=m(Tr,_,"TestLoadImage: timeout",!1,f,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else f(!1)}function Eb(c,f){const _=new zi,y=new AbortController,U=setTimeout(()=>{y.abort(),Tr(_,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:y.signal}).then(W=>{clearTimeout(U),W.ok?Tr(_,"TestPingServer: ok",!0,f):Tr(_,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(U),Tr(_,"TestPingServer: error",!1,f)})}function Tr(c,f,_,y,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),y(_)}catch{}}function Tb(){this.g=new fn}function Ib(c,f,_){const y=_||"";try{Lp(c,function(U,W){let J=U;u(U)&&(J=js(U)),f.push(y+W+"="+encodeURIComponent(J))})}catch(U){throw f.push(y+"type="+encodeURIComponent("_badmap")),U}}function Zi(c){this.l=c.Ub||null,this.j=c.eb||!1}A(Zi,Ws),Zi.prototype.g=function(){return new Oa(this.l,this.j)},Zi.prototype.i=function(c){return function(){return c}}({});function Oa(c,f){x.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Oa,x),t=Oa.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,to(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,eo(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,to(this)),this.g&&(this.readyState=3,to(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$p(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function $p(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?eo(this):to(this),this.readyState==3&&$p(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,eo(this))},t.Qa=function(c){this.g&&(this.response=c,eo(this))},t.ga=function(){this.g&&eo(this)};function eo(c){c.readyState=4,c.l=null,c.j=null,c.v=null,to(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var _=f.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=f.next();return c.join(`\r
`)};function to(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Bp(c){let f="";return M(c,function(_,y){f+=y,f+=":",f+=_,f+=`\r
`}),f}function _u(c,f,_){e:{for(y in _){var y=!1;break e}y=!0}y||(_=Bp(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):qe(c,f,_))}function tt(c){x.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(tt,x);var wb=/^https?$/i,Ab=["POST","PUT"];t=tt.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,_,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lu.g(),this.v=this.o?mp(this.o):mp(lu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(W){jp(this,W);return}if(c=_||"",_=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var U in y)_.set(U,y[U]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const W of y.keys())_.set(W,y.get(W));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(_.keys()).find(W=>W.toLowerCase()=="content-type"),U=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Ab,f,void 0))||y||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,J]of _)this.g.setRequestHeader(W,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qp(this),this.u=!0,this.g.send(c),this.u=!1}catch(W){jp(this,W)}};function jp(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Wp(c),La(c)}function Wp(c){c.A||(c.A=!0,$(c,"complete"),$(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,$(this,"complete"),$(this,"abort"),La(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),La(this,!0)),tt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hp(this):this.bb())},t.bb=function(){Hp(this)};function Hp(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Qn(c)!=4||c.Z()!=2)){if(c.u&&Qn(c)==4)ce(c.Ea,0,c);else if($(c,"readystatechange"),Qn(c)==4){c.h=!1;try{const J=c.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var _;if(!(_=f)){var y;if(y=J===0){var U=String(c.D).match(Dp)[1]||null;!U&&a.self&&a.self.location&&(U=a.self.location.protocol.slice(0,-1)),y=!wb.test(U?U.toLowerCase():"")}_=y}if(_)$(c,"complete"),$(c,"success");else{c.m=6;try{var W=2<Qn(c)?c.g.statusText:""}catch{W=""}c.l=W+" ["+c.Z()+"]",Wp(c)}}finally{La(c)}}}}function La(c,f){if(c.g){qp(c);const _=c.g,y=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||$(c,"ready");try{_.onreadystatechange=y}catch{}}}function qp(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Qn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),Kt(f)}};function Gp(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function bb(c){const f={};c=(c.g&&2<=Qn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(B(c[y]))continue;var _=O(c[y]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const W=f[U]||[];f[U]=W,W.push(_)}I(f,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function no(c,f,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||f}function Kp(c){this.Aa=0,this.i=[],this.j=new zi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=no("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=no("baseRetryDelayMs",5e3,c),this.cb=no("retryDelaySeedMs",1e4,c),this.Wa=no("forwardChannelMaxRetries",2,c),this.wa=no("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Sp(c&&c.concurrentRequestLimit),this.Da=new Tb,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Kp.prototype,t.la=8,t.G=1,t.connect=function(c,f,_,y){zt(0),this.W=c,this.H=f||{},_&&y!==void 0&&(this.H.OSID=_,this.H.OAID=y),this.F=this.X,this.I=n_(this,null,this.W),Ma(this)};function mu(c){if(zp(c),c.G==3){var f=c.U++,_=Yn(c.I);if(qe(_,"SID",c.K),qe(_,"RID",f),qe(_,"TYPE","terminate"),ro(c,_),f=new vr(c,c.j,f),f.L=2,f.v=ka(Yn(_)),_=!1,a.navigator&&a.navigator.sendBeacon)try{_=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!_&&a.Image&&(new Image().src=f.v,_=!0),_||(f.g=r_(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Sa(f)}t_(c)}function Da(c){c.g&&(yu(c),c.g.cancel(),c.g=null)}function zp(c){Da(c),c.u&&(a.clearTimeout(c.u),c.u=null),xa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function Ma(c){if(!Pp(c.h)&&!c.s){c.s=!0;var f=c.Ga;Ee||At(),ve||(Ee(),ve=!0),ut.add(f,c),c.B=0}}function Rb(c,f){return Np(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Ki(p(c.Ga,c,f),e_(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new vr(this,this.j,c);let W=this.o;if(this.S&&(W?(W=g(W),S(W,this.S)):W=this.S),this.m!==null||this.O||(U.H=W,W=null),this.P)e:{for(var f=0,_=0;_<this.i.length;_++){t:{var y=this.i[_];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=_;break e}if(f===4096||_===this.i.length-1){f=_+1;break e}}f=1e3}else f=1e3;f=Qp(this,U,f),_=Yn(this.I),qe(_,"RID",c),qe(_,"CVER",22),this.D&&qe(_,"X-HTTP-Session-Id",this.D),ro(this,_),W&&(this.O?f="headers="+encodeURIComponent(String(Bp(W)))+"&"+f:this.m&&_u(_,this.m,W)),pu(this.h,U),this.Ua&&qe(_,"TYPE","init"),this.P?(qe(_,"$req",f),qe(_,"SID","null"),U.T=!0,uu(U,_,null)):uu(U,_,f),this.G=2}}else this.G==3&&(c?Yp(this,c):this.i.length==0||Pp(this.h)||Yp(this))};function Yp(c,f){var _;f?_=f.l:_=c.U++;const y=Yn(c.I);qe(y,"SID",c.K),qe(y,"RID",_),qe(y,"AID",c.T),ro(c,y),c.m&&c.o&&_u(y,c.m,c.o),_=new vr(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),f&&(c.i=f.D.concat(c.i)),f=Qp(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),pu(c.h,_),uu(_,y,f)}function ro(c,f){c.H&&M(c.H,function(_,y){qe(f,y,_)}),c.l&&Lp({},function(_,y){qe(f,y,_)})}function Qp(c,f,_){_=Math.min(c.i.length,_);var y=c.l?p(c.l.Na,c.l,c):null;e:{var U=c.i;let W=-1;for(;;){const J=["count="+_];W==-1?0<_?(W=U[0].g,J.push("ofs="+W)):W=0:J.push("ofs="+W);let je=!0;for(let bt=0;bt<_;bt++){let ke=U[bt].g;const Dt=U[bt].map;if(ke-=W,0>ke)W=Math.max(0,U[bt].g-100),je=!1;else try{Ib(Dt,J,"req"+ke+"_")}catch{y&&y(Dt)}}if(je){y=J.join("&");break e}}}return c=c.i.splice(0,_),f.D=c,y}function Xp(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;Ee||At(),ve||(Ee(),ve=!0),ut.add(f,c),c.v=0}}function gu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Ki(p(c.Fa,c),e_(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Jp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Ki(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,zt(10),Da(this),Jp(this))};function yu(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function Jp(c){c.g=new vr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=Yn(c.qa);qe(f,"RID","rpc"),qe(f,"SID",c.K),qe(f,"AID",c.T),qe(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&qe(f,"TO",c.ja),qe(f,"TYPE","xmlhttp"),ro(c,f),c.m&&c.o&&_u(f,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=ka(Yn(f)),_.m=null,_.P=!0,bp(_,c)}t.Za=function(){this.C!=null&&(this.C=null,Da(this),gu(this),zt(19))};function xa(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Zp(c,f){var _=null;if(c.g==f){xa(c),yu(c),c.g=null;var y=2}else if(du(c.h,f))_=f.D,kp(c.h,f),y=1;else return;if(c.G!=0){if(f.o)if(y==1){_=f.m?f.m.length:0,f=Date.now()-f.F;var U=c.B;y=ba(),$(y,new Tp(y,_)),Ma(c)}else Xp(c);else if(U=f.s,U==3||U==0&&0<f.X||!(y==1&&Rb(c,f)||y==2&&gu(c)))switch(_&&0<_.length&&(f=c.h,f.i=f.i.concat(_)),U){case 1:ls(c,5);break;case 4:ls(c,10);break;case 3:ls(c,6);break;default:ls(c,2)}}}function e_(c,f){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*f}function ls(c,f){if(c.j.info("Error code "+f),f==2){var _=p(c.fb,c),y=c.Xa;const U=!y;y=new as(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Pa(y,"https"),ka(y),U?vb(y.toString(),_):Eb(y.toString(),_)}else zt(2);c.G=0,c.l&&c.l.sa(f),t_(c),zp(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),zt(2)):(this.j.info("Failed to ping google.com"),zt(1))};function t_(c){if(c.G=0,c.ka=[],c.l){const f=Op(c.h);(f.length!=0||c.i.length!=0)&&(P(c.ka,f),P(c.ka,c.i),c.h.i.length=0,N(c.i),c.i.length=0),c.l.ra()}}function n_(c,f,_){var y=_ instanceof as?Yn(_):new as(_);if(y.g!="")f&&(y.g=f+"."+y.g),Na(y,y.s);else{var U=a.location;y=U.protocol,f=f?f+"."+U.hostname:U.hostname,U=+U.port;var W=new as(null);y&&Pa(W,y),f&&(W.g=f),U&&Na(W,U),_&&(W.l=_),y=W}return _=c.D,f=c.ya,_&&f&&qe(y,_,f),qe(y,"VER",c.la),ro(c,y),y}function r_(c,f,_){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new tt(new Zi({eb:_})):new tt(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function s_(){}t=s_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Fa(){}Fa.prototype.g=function(c,f){return new on(c,f)};function on(c,f){x.call(this),this.g=new Kp(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!B(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!B(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Gs(this)}A(on,x),on.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){mu(this.g)},on.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=js(c),c=_);f.i.push(new cb(f.Ya++,c)),f.G==3&&Ma(f)},on.prototype.N=function(){this.g.l=null,delete this.j,mu(this.g),delete this.g,on.aa.N.call(this)};function i_(c){ou.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const _ in f){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}A(i_,ou);function o_(){au.call(this),this.status=1}A(o_,au);function Gs(c){this.g=c}A(Gs,s_),Gs.prototype.ua=function(){$(this.g,"a")},Gs.prototype.ta=function(c){$(this.g,new i_(c))},Gs.prototype.sa=function(c){$(this.g,new o_)},Gs.prototype.ra=function(){$(this.g,"b")},Fa.prototype.createWebChannel=Fa.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,jT=function(){return new Fa},BT=function(){return ba()},$T=is,Lh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ra.NO_ERROR=0,Ra.TIMEOUT=8,Ra.HTTP_ERROR=6,dl=Ra,Ip.COMPLETE="complete",UT=Ip,gp.EventType=qi,qi.OPEN="a",qi.CLOSE="b",qi.ERROR="c",qi.MESSAGE="d",x.prototype.listen=x.prototype.K,po=gp,VT=Zi,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,FT=tt}).apply(typeof Qa<"u"?Qa:typeof self<"u"?self:typeof window<"u"?window:{});const ag="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Mi("@firebase/firestore");function ao(){return Cs.logLevel}function ae(t,...e){if(Cs.logLevel<=we.DEBUG){const n=e.map(td);Cs.debug(`Firestore (${Fi}): ${t}`,...n)}}function dr(t,...e){if(Cs.logLevel<=we.ERROR){const n=e.map(td);Cs.error(`Firestore (${Fi}): ${t}`,...n)}}function Ei(t,...e){if(Cs.logLevel<=we.WARN){const n=e.map(td);Cs.warn(`Firestore (${Fi}): ${t}`,...n)}}function td(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${Fi}) INTERNAL ASSERTION FAILED: `+t;throw dr(e),new Error(e)}function He(t,e){t||fe()}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ft.UNAUTHENTICATED))}shutdown(){}}class hL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fL{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(He(typeof r.accessToken=="string"),new WT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string"),new Ft(e)}}class dL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new dL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _L{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(He(typeof n.token=="string"),this.R=n.token,new _L(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=gL(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function De(t,e){return t<e?-1:t>e?1:0}function Ti(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new oe(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _e(e)}static min(){return new _e(new lt(0,0))}static max(){return new _e(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(),r===void 0?r=e.length-n:r>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ze extends Xo{construct(e,n,r){return new ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const yL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends Xo{construct(e,n,r){return new St(e,n,r)}static isValidIdentifier(e){return yL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new St(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new oe(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new oe(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new oe(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new oe(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(n)}static emptyPath(){return new St([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(ze.fromString(e))}static fromName(e){return new ue(ze.fromString(e).popFirst(5))}static empty(){return new ue(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new ze(e.slice()))}}function vL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Kr(s,ue.empty(),e)}function EL(t){return new Kr(t.readTime,t.key,-1)}class Kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kr(_e.min(),ue.empty(),-1)}static max(){return new Kr(_e.max(),ue.empty(),-1)}}function TL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:De(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==IL)throw t;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Q((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):Q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):Q.reject(n)}static resolve(e){return new Q((n,r)=>{n(e)})}static reject(e){return new Q((n,r)=>{r(e)})}static waitFor(e){return new Q((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=Q.resolve(!1);for(const r of e)n=n.next(s=>s?Q.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new Q((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new Q((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function AL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}nd.oe=-1;function Oc(t){return t==null}function Fl(t){return t===0&&1/t==-1/0}function bL(t){return typeof t=="number"&&Number.isInteger(t)&&!Fl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ct=class Dh{constructor(e,n){this.comparator=e,this.root=n||Br.EMPTY}insert(e,n){return new Dh(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Br.BLACK,null,null))}remove(e){return new Dh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Br.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xa(this.root,e,this.comparator,!0)}},Xa=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Br=class er{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??er.RED,this.left=s??er.EMPTY,this.right=i??er.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new er(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return er.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return er.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,er.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,er.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}};Br.EMPTY=null,Br.RED=!0,Br.BLACK=!1;Br.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Br(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cg(this.data.getIterator())}getIteratorFrom(e){return new cg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class cg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.fields=e,e.sort(St.comparator)}static empty(){return new bn([])}unionWith(e){let n=new kt(St.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ti(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new GT("Invalid base64 string: "+i):i}}(e);return new qt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const RL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zr(t){if(He(!!t),typeof t=="string"){let e=0;const n=RL.exec(t);if(He(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ot(t.seconds),nanos:ot(t.nanos)}}function ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ss(t){return typeof t=="string"?qt.fromBase64String(t):qt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sd(t){const e=t.mapValue.fields.__previous_value__;return rd(e)?sd(e):e}function Jo(t){const e=zr(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Zo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Zo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rd(t)?4:SL(t)?9007199254740991:10:fe()}function qn(t,e){if(t===e)return!0;const n=Ps(t);if(n!==Ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Jo(t).isEqual(Jo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=zr(s.timestampValue),a=zr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ss(s.bytesValue).isEqual(Ss(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ot(s.geoPointValue.latitude)===ot(i.geoPointValue.latitude)&&ot(s.geoPointValue.longitude)===ot(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ot(s.integerValue)===ot(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ot(s.doubleValue),a=ot(i.doubleValue);return o===a?Fl(o)===Fl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ti(t.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(lg(o)!==lg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!qn(o[l],a[l])))return!1;return!0}(t,e);default:return fe()}}function ea(t,e){return(t.values||[]).find(n=>qn(n,e))!==void 0}function Ii(t,e){if(t===e)return 0;const n=Ps(t),r=Ps(e);if(n!==r)return De(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return De(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ot(i.integerValue||i.doubleValue),l=ot(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return ug(t.timestampValue,e.timestampValue);case 4:return ug(Jo(t),Jo(e));case 5:return De(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ss(i),l=Ss(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=De(a[u],l[u]);if(h!==0)return h}return De(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=De(ot(i.latitude),ot(o.latitude));return a!==0?a:De(ot(i.longitude),ot(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const h=Ii(a[u],l[u]);if(h)return h}return De(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ja.mapValue&&o===Ja.mapValue)return 0;if(i===Ja.mapValue)return 1;if(o===Ja.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=De(l[d],h[d]);if(p!==0)return p;const m=Ii(a[l[d]],u[h[d]]);if(m!==0)return m}return De(l.length,h.length)}(t.mapValue,e.mapValue);default:throw fe()}}function ug(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return De(t,e);const n=zr(t),r=zr(e),s=De(n.seconds,r.seconds);return s!==0?s:De(n.nanos,r.nanos)}function wi(t){return Mh(t)}function Mh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ss(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Mh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Mh(n.fields[o])}`;return s+"}"}(t.mapValue):fe()}function hg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xh(t){return!!t&&"integerValue"in t}function id(t){return!!t&&"arrayValue"in t}function fg(t){return!!t&&"nullValue"in t}function dg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pl(t){return!!t&&"mapValue"in t}function Po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Po(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Po(n)}setAll(e){let n=St.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Po(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];pl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){xs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new cn(Po(this.value))}}function KT(t){const e=[];return xs(t.fields,(n,r)=>{const s=new St([n]);if(pl(r)){const i=KT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new bn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Vt(e,0,_e.min(),_e.min(),_e.min(),cn.empty(),0)}static newFoundDocument(e,n,r,s){return new Vt(e,1,n,_e.min(),r,s,0)}static newNoDocument(e,n){return new Vt(e,2,n,_e.min(),_e.min(),cn.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,_e.min(),_e.min(),cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n){this.position=e,this.inclusive=n}}function pg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=Ii(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _g(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n="asc"){this.field=e,this.dir=n}}function PL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{}class at extends zT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kL(e,n,r):n==="array-contains"?new DL(e,r):n==="in"?new ML(e,r):n==="not-in"?new xL(e,r):n==="array-contains-any"?new FL(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new OL(e,r):new LL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ii(n,this.value)):n!==null&&Ps(this.value)===Ps(n)&&this.matchesComparison(Ii(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kn extends zT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new kn(e,n)}matches(e){return YT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function YT(t){return t.op==="and"}function QT(t){return NL(t)&&YT(t)}function NL(t){for(const e of t.filters)if(e instanceof kn)return!1;return!0}function Fh(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+wi(t.value);if(QT(t))return t.filters.map(e=>Fh(e)).join(",");{const e=t.filters.map(n=>Fh(n)).join(",");return`${t.op}(${e})`}}function XT(t,e){return t instanceof at?function(r,s){return s instanceof at&&r.op===s.op&&r.field.isEqual(s.field)&&qn(r.value,s.value)}(t,e):t instanceof kn?function(r,s){return s instanceof kn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&XT(o,s.filters[a]),!0):!1}(t,e):void fe()}function JT(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${wi(n.value)}`}(t):t instanceof kn?function(n){return n.op.toString()+" {"+n.getFilters().map(JT).join(" ,")+"}"}(t):"Filter"}class kL extends at{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class OL extends at{constructor(e,n){super(e,"in",n),this.keys=ZT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LL extends at{constructor(e,n){super(e,"not-in",n),this.keys=ZT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ZT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class DL extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return id(n)&&ea(n.arrayValue,this.value)}}class ML extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ea(this.value.arrayValue,n)}}class xL extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ea(this.value.arrayValue,n)}}class FL extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!id(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ea(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function mg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new VL(t,e,n,r,s,i,o)}function od(t){const e=ye(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wi(r)).join(",")),e.ue=n}return e.ue}function ad(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!XT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_g(t.startAt,e.startAt)&&_g(t.endAt,e.endAt)}function Vh(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function UL(t,e,n,r,s,i,o,a){return new Vi(t,e,n,r,s,i,o,a)}function Lc(t){return new Vi(t)}function gg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function eI(t){return t.collectionGroup!==null}function No(t){const e=ye(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new kt(St.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ta(i,r))}),n.has(St.keyField().canonicalString())||e.ce.push(new ta(St.keyField(),r))}return e.ce}function Un(t){const e=ye(t);return e.le||(e.le=$L(e,No(t))),e.le}function $L(t,e){if(t.limitType==="F")return mg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ta(s.field,i)});const n=t.endAt?new Vl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vl(t.startAt.position,t.startAt.inclusive):null;return mg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Uh(t,e){const n=t.filters.concat([e]);return new Vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $h(t,e,n){return new Vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dc(t,e){return ad(Un(t),Un(e))&&t.limitType===e.limitType}function tI(t){return`${od(Un(t))}|lt:${t.limitType}`}function Xs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>JT(s)).join(", ")}]`),Oc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>wi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>wi(s)).join(",")),`Target(${r})`}(Un(t))}; limitType=${t.limitType})`}function Mc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of No(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=pg(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,No(r),s)||r.endAt&&!function(o,a,l){const u=pg(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,No(r),s))}(t,e)}function BL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function nI(t){return(e,n)=>{let r=!1;for(const s of No(t)){const i=jL(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function jL(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Ii(l,u):fe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return qT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL=new ct(ue.comparator);function pr(){return WL}const rI=new ct(ue.comparator);function _o(...t){let e=rI;for(const n of t)e=e.insert(n.key,n);return e}function sI(t){let e=rI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ys(){return ko()}function iI(){return ko()}function ko(){return new Ui(t=>t.toString(),(t,e)=>t.isEqual(e))}const HL=new ct(ue.comparator),qL=new kt(ue.comparator);function Ae(...t){let e=qL;for(const n of t)e=e.add(n);return e}const GL=new kt(De);function KL(){return GL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fl(e)?"-0":e}}function aI(t){return{integerValue:""+t}}function lI(t,e){return bL(e)?aI(e):oI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this._=void 0}}function zL(t,e,n){return t instanceof Ul?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&rd(i)&&(i=sd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof na?uI(t,e):t instanceof ra?hI(t,e):function(s,i){const o=cI(s,i),a=yg(o)+yg(s.Pe);return xh(o)&&xh(s.Pe)?aI(a):oI(s.serializer,a)}(t,e)}function YL(t,e,n){return t instanceof na?uI(t,e):t instanceof ra?hI(t,e):n}function cI(t,e){return t instanceof sa?function(r){return xh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ul extends xc{}class na extends xc{constructor(e){super(),this.elements=e}}function uI(t,e){const n=fI(e);for(const r of t.elements)n.some(s=>qn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ra extends xc{constructor(e){super(),this.elements=e}}function hI(t,e){let n=fI(e);for(const r of t.elements)n=n.filter(s=>!qn(s,r));return{arrayValue:{values:n}}}class sa extends xc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function yg(t){return ot(t.integerValue||t.doubleValue)}function fI(t){return id(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e,n){this.field=e,this.transform=n}}function XL(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof na&&s instanceof na||r instanceof ra&&s instanceof ra?Ti(r.elements,s.elements,qn):r instanceof sa&&s instanceof sa?qn(r.Pe,s.Pe):r instanceof Ul&&s instanceof Ul}(t.transform,e.transform)}class JL{constructor(e,n){this.version=e,this.transformResults=n}}class ur{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ur}static exists(e){return new ur(void 0,e)}static updateTime(e){return new ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _l(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fc{}function dI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _I(t.key,ur.none()):new Vc(t.key,t.data,ur.none());{const n=t.data,r=cn.empty();let s=new kt(St.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Fs(t.key,r,new bn(s.toArray()),ur.none())}}function ZL(t,e,n){t instanceof Vc?function(s,i,o){const a=s.value.clone(),l=Eg(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Fs?function(s,i,o){if(!_l(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Eg(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(pI(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Oo(t,e,n,r){return t instanceof Vc?function(i,o,a,l){if(!_l(i.precondition,o))return a;const u=i.value.clone(),h=Tg(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fs?function(i,o,a,l){if(!_l(i.precondition,o))return a;const u=Tg(i.fieldTransforms,l,o),h=o.data;return h.setAll(pI(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return _l(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function eD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=cI(r.transform,s||null);i!=null&&(n===null&&(n=cn.empty()),n.set(r.field,i))}return n||null}function vg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ti(r,s,(i,o)=>XL(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vc extends Fc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fs extends Fc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Eg(t,e,n){const r=new Map;He(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,YL(o,a,n[s]))}return r}function Tg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,zL(i,o,e))}return r}class _I extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tD extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ZL(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Oo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Oo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=iI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=dI(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Ti(this.mutations,e.mutations,(n,r)=>vg(n,r))&&Ti(this.baseMutations,e.baseMutations,(n,r)=>vg(n,r))}}class ld{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){He(e.mutations.length===r.length);let s=function(){return HL}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ld(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,Re;function iD(t){switch(t){default:return fe();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function mI(t){if(t===void 0)return dr("GRPC error has no .code"),z.UNKNOWN;switch(t){case it.OK:return z.OK;case it.CANCELLED:return z.CANCELLED;case it.UNKNOWN:return z.UNKNOWN;case it.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case it.INTERNAL:return z.INTERNAL;case it.UNAVAILABLE:return z.UNAVAILABLE;case it.UNAUTHENTICATED:return z.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case it.NOT_FOUND:return z.NOT_FOUND;case it.ALREADY_EXISTS:return z.ALREADY_EXISTS;case it.PERMISSION_DENIED:return z.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case it.ABORTED:return z.ABORTED;case it.OUT_OF_RANGE:return z.OUT_OF_RANGE;case it.UNIMPLEMENTED:return z.UNIMPLEMENTED;case it.DATA_LOSS:return z.DATA_LOSS;default:return fe()}}(Re=it||(it={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=new Is([4294967295,4294967295],0);function Ig(t){const e=oD().encode(t),n=new xT;return n.update(e),new Uint8Array(n.digest())}function wg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Is([n,r],0),new Is([s,i],0)]}class cd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mo(`Invalid padding: ${n}`);if(r<0)throw new mo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new mo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Is.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Is.fromNumber(r)));return s.compare(aD)===1&&(s=new Is([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ig(e),[r,s]=wg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new cd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Ig(e),[r,s]=wg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Uc(_e.min(),s,new ct(De),pr(),Ae())}}class da{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new da(r,n,Ae(),Ae(),Ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class gI{constructor(e,n){this.targetId=e,this.me=n}}class yI{constructor(e,n,r=qt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ag{constructor(){this.fe=0,this.ge=Rg(),this.pe=qt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Ae(),n=Ae(),r=Ae();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe()}}),new da(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Rg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,He(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class lD{constructor(e){this.Le=e,this.Be=new Map,this.ke=pr(),this.qe=bg(),this.Qe=new ct(De)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:fe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Vh(i))if(r===0){const o=new ue(i.path);this.Ue(n,o,Vt.newNoDocument(o,_e.min()))}else He(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ss(r).toUint8Array()}catch(l){if(l instanceof GT)return Ei("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new cd(o,s,i)}catch(l){return Ei(l instanceof mo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Vh(a.target)){const l=new ue(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Vt.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=Ae();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Uc(e,n,this.Qe,this.ke,r);return this.ke=pr(),this.qe=bg(),this.Qe=new ct(De),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ag,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new kt(De),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ae("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ag),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function bg(){return new ct(ue.comparator)}function Rg(){return new ct(ue.comparator)}const cD={asc:"ASCENDING",desc:"DESCENDING"},uD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hD={and:"AND",or:"OR"};class fD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bh(t,e){return t.useProto3Json||Oc(e)?e:{value:e}}function $l(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dD(t,e){return $l(t,e.toTimestamp())}function $n(t){return He(!!t),_e.fromTimestamp(function(n){const r=zr(n);return new lt(r.seconds,r.nanos)}(t))}function ud(t,e){return jh(t,e).canonicalString()}function jh(t,e){const n=function(s){return new ze(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function EI(t){const e=ze.fromString(t);return He(bI(e)),e}function Wh(t,e){return ud(t.databaseId,e.path)}function Bu(t,e){const n=EI(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(II(n))}function TI(t,e){return ud(t.databaseId,e)}function pD(t){const e=EI(t);return e.length===4?ze.emptyPath():II(e)}function Hh(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function II(t){return He(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Cg(t,e,n){return{name:Wh(t,e),fields:n.value.mapValue.fields}}function _D(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(He(h===void 0||typeof h=="string"),qt.fromBase64String(h||"")):(He(h===void 0||h instanceof Buffer||h instanceof Uint8Array),qt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?z.UNKNOWN:mI(u.code);return new oe(h,u.message||"")}(o);n=new yI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bu(t,r.document.name),i=$n(r.document.updateTime),o=r.document.createTime?$n(r.document.createTime):_e.min(),a=new cn({mapValue:{fields:r.document.fields}}),l=Vt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new ml(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Bu(t,r.document),i=r.readTime?$n(r.readTime):_e.min(),o=Vt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ml([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Bu(t,r.document),i=r.removedTargetIds||[];n=new ml([],i,s,null)}else{if(!("filter"in e))return fe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new sD(s,i),a=r.targetId;n=new gI(a,o)}}return n}function mD(t,e){let n;if(e instanceof Vc)n={update:Cg(t,e.key,e.value)};else if(e instanceof _I)n={delete:Wh(t,e.key)};else if(e instanceof Fs)n={update:Cg(t,e.key,e.data),updateMask:bD(e.fieldMask)};else{if(!(e instanceof tD))return fe();n={verify:Wh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ul)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof na)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ra)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof sa)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw fe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:dD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe()}(t,e.precondition)),n}function gD(t,e){return t&&t.length>0?(He(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?$n(s.updateTime):$n(i);return o.isEqual(_e.min())&&(o=$n(i)),new JL(o,s.transformResults||[])}(n,e))):[]}function yD(t,e){return{documents:[TI(t,e.path)]}}function vD(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=TI(t,s);const i=function(u){if(u.length!==0)return AI(kn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Js(p.field),direction:ID(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Bh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function ED(t){let e=pD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){He(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const p=wI(d);return p instanceof kn&&QT(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(A){return new ta(Zs(A.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Oc(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,m=d.values||[];return new Vl(m,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,m=d.values||[];return new Vl(m,p)}(n.endAt)),UL(e,s,o,i,a,"F",l,u)}function TD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function wI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zs(n.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Zs(n.unaryFilter.field);return at.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zs(n.unaryFilter.field);return at.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zs(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(t):t.fieldFilter!==void 0?function(n){return at.create(Zs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return kn.create(n.compositeFilter.filters.map(r=>wI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe()}}(n.compositeFilter.op))}(t):fe()}function ID(t){return cD[t]}function wD(t){return uD[t]}function AD(t){return hD[t]}function Js(t){return{fieldPath:t.canonicalString()}}function Zs(t){return St.fromServerFormat(t.fieldPath)}function AI(t){return t instanceof at?function(n){if(n.op==="=="){if(dg(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NAN"}};if(fg(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dg(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NOT_NAN"}};if(fg(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Js(n.field),op:wD(n.op),value:n.value}}}(t):t instanceof kn?function(n){const r=n.getFilters().map(s=>AI(s));return r.length===1?r[0]:{compositeFilter:{op:AD(n.op),filters:r}}}(t):fe()}function bD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r,s,i=_e.min(),o=_e.min(),a=qt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e){this.ct=e}}function CD(t){const e=ED({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$h(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(){this._n=new PD}addToCollectionParentIndex(e,n){return this._n.add(n),Q.resolve()}getCollectionParents(e,n){return Q.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return Q.resolve()}deleteFieldIndex(e,n){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,n){return Q.resolve()}getDocumentsMatchingTarget(e,n){return Q.resolve(null)}getIndexType(e,n){return Q.resolve(0)}getFieldIndexes(e,n){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,n){return Q.resolve(Kr.min())}getMinOffsetFromCollectionGroup(e,n){return Q.resolve(Kr.min())}updateCollectionGroup(e,n,r){return Q.resolve()}updateIndexEntries(e,n){return Q.resolve()}}class PD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new kt(ze.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new kt(ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ai(0)}static Ln(){return new Ai(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(){this.changes=new Ui(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?Q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Oo(r.mutation,s,bn.empty(),lt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ae()){const s=ys();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=_o();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ys();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=pr();const o=ko(),a=function(){return ko()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Fs)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Oo(h.mutation,u,h.mutation.getFieldMask(),lt.now())):o.set(u.key,bn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new kD(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ko();let s=new ct((o,a)=>o-a),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||bn.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||Ae()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=iI();h.forEach(p=>{if(!i.has(p)){const m=dI(n.get(p),r.get(p));m!==null&&d.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return Q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):eI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):Q.resolve(ys());let a=-1,l=i;return o.next(u=>Q.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?Q.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ae())).next(h=>({batchId:a,changes:sI(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=_o();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=_o();return this.indexManager.getCollectionParents(e,i).next(a=>Q.forEach(a,l=>{const u=function(d,p){return new Vi(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Vt.newInvalidDocument(h)))});let a=_o();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&Oo(h.mutation,u,bn.empty(),lt.now()),Mc(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return Q.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:$n(s.createTime)}}(n)),Q.resolve()}getNamedQuery(e,n){return Q.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:CD(s.bundledQuery),readTime:$n(s.readTime)}}(n)),Q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(){this.overlays=new ct(ue.comparator),this.hr=new Map}getOverlay(e,n){return Q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ys();return Q.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),Q.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),Q.resolve()}getOverlaysForCollection(e,n,r){const s=ys(),i=n.length+1,o=new ue(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return Q.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ct((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=ys(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ys(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return Q.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rD(n,r));let i=this.hr.get(n);i===void 0&&(i=Ae(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.Pr=new kt(gt.Ir),this.Tr=new kt(gt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new gt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new gt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ue(new ze([])),r=new gt(n,e),s=new gt(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ue(new ze([])),r=new gt(n,e),s=new gt(n,e+1);let i=Ae();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new gt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class gt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ue.comparator(e.key,n.key)||De(e.pr,n.pr)}static Er(e,n){return De(e.pr,n.pr)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new kt(gt.Ir)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nD(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new gt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return Q.resolve(o)}lookupMutationBatch(e,n){return Q.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return Q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new gt(n,0),s=new gt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),Q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new kt(De);return n.forEach(s=>{const i=new gt(s,0),o=new gt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),Q.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new gt(new ue(i),0);let a=new kt(De);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.pr)),!0)},o),Q.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){He(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return Q.forEach(n.mutations,s=>{const i=new gt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new gt(n,0),s=this.wr.firstAfterOrEqual(r);return Q.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.vr=e,this.docs=function(){return new ct(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return Q.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let r=pr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Vt.newInvalidDocument(s))}),Q.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=pr();const o=n.path,a=new ue(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||TL(EL(h),r)<=0||(s.has(h.key)||Mc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return Q.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe()}Fr(e,n){return Q.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FD(this)}getSize(e){return Q.resolve(this.size)}}class FD extends ND{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),Q.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e){this.persistence=e,this.Mr=new Ui(n=>od(n),ad),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.Or=0,this.Nr=new hd,this.targetCount=0,this.Lr=Ai.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),Q.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ai(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,Q.resolve()}updateTargetData(e,n){return this.qn(n),Q.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),Q.waitFor(i).next(()=>s)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return Q.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),Q.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),Q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),Q.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return Q.resolve(r)}containsKey(e,n){return Q.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n){this.Br={},this.overlays={},this.kr=new nd(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new VD(this),this.indexManager=new SD,this.remoteDocumentCache=function(s){return new xD(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new RD(n),this.$r=new LD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new MD(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){ae("MemoryPersistence","Starting transaction:",e);const s=new $D(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return Q.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class $D extends wL{constructor(e){super(),this.currentSequenceNumber=e}}class fd{constructor(e){this.persistence=e,this.zr=new hd,this.jr=null}static Hr(e){return new fd(e)}get Jr(){if(this.jr)return this.jr;throw fe()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),Q.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),Q.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),Q.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.Jr,r=>{const s=ue.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return Q.or([()=>Q.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=Ae(),s=Ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new dd(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return dN()?8:AL(Ot())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new BD;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(ao()<=we.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Xs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),Q.resolve()):(ao()<=we.DEBUG&&ae("QueryEngine","Query:",Xs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(ao()<=we.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Xs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Un(n))):Q.resolve())}ji(e,n){if(gg(n))return Q.resolve(null);let r=Un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=$h(n,null,"F"),r=Un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ae(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,$h(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,s){return gg(n)||s.isEqual(_e.min())?Q.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?Q.resolve(null):(ao()<=we.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xs(n)),this.es(e,o,n,vL(s,-1)).next(a=>a))})}Zi(e,n){let r=new kt(nI(e));return n.forEach((s,i)=>{Mc(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return ao()<=we.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Xs(n)),this.zi.getDocumentsMatchingQuery(e,n,Kr.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new ct(De),this.rs=new Ui(i=>od(i),ad),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OD(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function HD(t,e,n,r){return new WD(t,e,n,r)}async function RI(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Ae();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function qD(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let m=Q.resolve();return p.forEach(A=>{m=m.next(()=>h.getEntry(l,A)).next(N=>{const P=u.docVersions.get(A);He(P!==null),N.version.compareTo(P)<0&&(d.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),h.addEntry(N)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Ae();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function CI(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function GD(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((h,d)=>{const p=s.get(d);if(!p)return;a.push(n.Qr.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(i,h.addedDocuments,d)));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(qt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),s=s.insert(d,m),function(N,P,V){return N.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(p,m,h)&&a.push(n.Qr.updateTargetData(i,m))});let l=pr(),u=Ae();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(KD(i,o,e.documentUpdates).next(h=>{l=h.cs,u=h.ls})),!r.isEqual(_e.min())){const h=n.Qr.getLastRemoteSnapshotVersion(i).next(d=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return Q.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ns=s,i))}function KD(t,e,n){let r=Ae(),s=Ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=pr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(_e.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ae("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:s}})}function zD(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function YD(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,Q.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function qh(t,e,n){const r=ye(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!fa(o))throw o;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Sg(t,e,n){const r=ye(t);let s=_e.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=ye(l),p=d.rs.get(h);return p!==void 0?Q.resolve(d.ns.get(p)):d.Qr.getTargetData(u,h)}(r,o,Un(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:Ae())).next(a=>(QD(r,BL(e),a),{documents:a,hs:i})))}function QD(t,e,n){let r=t.ss.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Pg{constructor(){this.activeTargetIds=KL()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XD{constructor(){this.no=new Pg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Pg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za=null;function ju(){return Za===null?Za=function(){return 268435456+Math.round(2147483648*Math.random())}():Za++,"0x"+Za.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class t1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,o){const a=ju(),l=this.vo(n,r.toUriEncodedString());ae("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,i,o),this.Mo(n,l,u,s).then(h=>(ae("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Ei("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}xo(n,r,s,i,o,a){return this.Co(n,r,s,i,o)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}vo(n,r){const s=ZD[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=ju();return new Promise((o,a)=>{const l=new FT;l.setWithCredentials(!0),l.listenOnce(UT.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case dl.NO_ERROR:const h=l.getResponseJson();ae(xt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case dl.TIMEOUT:ae(xt,`RPC '${e}' ${i} timed out`),a(new oe(z.DEADLINE_EXCEEDED,"Request time out"));break;case dl.HTTP_ERROR:const d=l.getStatus();if(ae(xt,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const A=function(P){const V=P.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(V)>=0?V:z.UNKNOWN}(m.status);a(new oe(A,m.message))}else a(new oe(z.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new oe(z.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{ae(xt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ae(xt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Oo(e,n,r){const s=ju(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jT(),a=BT(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new VT({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ae(xt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,m=!1;const A=new e1({lo:P=>{m?ae(xt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(ae(xt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),ae(xt,`RPC '${e}' stream ${s} sending:`,P),d.send(P))},ho:()=>d.close()}),N=(P,V,B)=>{P.listen(V,C=>{try{B(C)}catch(L){setTimeout(()=>{throw L},0)}})};return N(d,po.EventType.OPEN,()=>{m||(ae(xt,`RPC '${e}' stream ${s} transport opened.`),A.mo())}),N(d,po.EventType.CLOSE,()=>{m||(m=!0,ae(xt,`RPC '${e}' stream ${s} transport closed`),A.po())}),N(d,po.EventType.ERROR,P=>{m||(m=!0,Ei(xt,`RPC '${e}' stream ${s} transport errored:`,P),A.po(new oe(z.UNAVAILABLE,"The operation could not be completed")))}),N(d,po.EventType.MESSAGE,P=>{var V;if(!m){const B=P.data[0];He(!!B);const C=B,L=C.error||((V=C[0])===null||V===void 0?void 0:V.error);if(L){ae(xt,`RPC '${e}' stream ${s} received error:`,L);const j=L.status;let M=function(T){const S=it[T];if(S!==void 0)return mI(S)}(j),I=L.message;M===void 0&&(M=z.INTERNAL,I="Unknown error status: "+j+" with message "+L.message),m=!0,A.po(new oe(M,I)),d.close()}else ae(xt,`RPC '${e}' stream ${s} received:`,B),A.yo(B)}}),N(a,$T.STAT_EVENT,P=>{P.stat===Lh.PROXY?ae(xt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Lh.NOPROXY&&ae(xt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.fo()},0),A}}function Wu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(t){return new fD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&ae("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n,r,s,i,o,a,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new SI(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(dr(n.toString()),dr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new oe(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class n1 extends PI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=_D(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?$n(o.readTime):_e.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Hh(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Vh(l)?{documents:yD(i,l)}:{query:vD(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=vI(i,o.resumeToken);const u=Bh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){a.readTime=$l(i,o.snapshotVersion.toTimestamp());const u=Bh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=TD(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Hh(this.serializer),n.removeTarget=e,this.i_(n)}}class r1 extends PI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(He(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=gD(e.writeResults,e.commitTime),r=$n(e.commitTime);return this.listener.A_(r,n)}return He(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Hh(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mD(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new oe(z.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,jh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(z.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,jh(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe(z.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class i1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(dr(n),this.y_=!1):ae("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(o=>{r.enqueueAndForget(async()=>{Vs(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ye(l);u.M_.add(4),await pa(u),u.N_.set("Unknown"),u.M_.delete(4),await Bc(u)}(this))})}),this.N_=new i1(r,s)}}async function Bc(t){if(Vs(t))for(const e of t.x_)await e(!0)}async function pa(t){for(const e of t.x_)await e(!1)}function NI(t,e){const n=ye(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),gd(n)?md(n):$i(n).Xo()&&_d(n,e))}function pd(t,e){const n=ye(t),r=$i(n);n.F_.delete(e),r.Xo()&&kI(n,e),n.F_.size===0&&(r.Xo()?r.n_():Vs(n)&&n.N_.set("Unknown"))}function _d(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$i(t).P_(e)}function kI(t,e){t.L_.xe(e),$i(t).I_(e)}function md(t){t.L_=new lD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),$i(t).start(),t.N_.w_()}function gd(t){return Vs(t)&&!$i(t).Zo()&&t.F_.size>0}function Vs(t){return ye(t).M_.size===0}function OI(t){t.L_=void 0}async function a1(t){t.N_.set("Online")}async function l1(t){t.F_.forEach((e,n)=>{_d(t,e)})}async function c1(t,e){OI(t),gd(t)?(t.N_.D_(e),md(t)):t.N_.set("Unknown")}async function u1(t,e,n){if(t.N_.set("Online"),e instanceof yI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.F_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.F_.delete(a),s.L_.removeTarget(a))}(t,e)}catch(r){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bl(t,r)}else if(e instanceof ml?t.L_.Ke(e):e instanceof gI?t.L_.He(e):t.L_.We(e),!n.isEqual(_e.min()))try{const r=await CI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.L_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.F_.get(u);h&&i.F_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.F_.get(l);if(!h)return;i.F_.set(l,h.withResumeToken(qt.EMPTY_BYTE_STRING,h.snapshotVersion)),kI(i,l);const d=new Dr(h.target,l,u,h.sequenceNumber);_d(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ae("RemoteStore","Failed to raise snapshot:",r),await Bl(t,r)}}async function Bl(t,e,n){if(!fa(e))throw e;t.M_.add(1),await pa(t),t.N_.set("Offline"),n||(n=()=>CI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Bc(t)})}function LI(t,e){return e().catch(n=>Bl(t,n,e))}async function jc(t){const e=ye(t),n=Yr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;h1(e);)try{const s=await zD(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,f1(e,s)}catch(s){await Bl(e,s)}DI(e)&&MI(e)}function h1(t){return Vs(t)&&t.v_.length<10}function f1(t,e){t.v_.push(e);const n=Yr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function DI(t){return Vs(t)&&!Yr(t).Zo()&&t.v_.length>0}function MI(t){Yr(t).start()}async function d1(t){Yr(t).V_()}async function p1(t){const e=Yr(t);for(const n of t.v_)e.d_(n.mutations)}async function _1(t,e,n){const r=t.v_.shift(),s=ld.from(r,e,n);await LI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await jc(t)}async function m1(t,e){e&&Yr(t).E_&&await async function(r,s){if(function(o){return iD(o)&&o!==z.ABORTED}(s.code)){const i=r.v_.shift();Yr(r).t_(),await LI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await jc(r)}}(t,e),DI(t)&&MI(t)}async function kg(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const r=Vs(n);n.M_.add(3),await pa(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Bc(n)}async function g1(t,e){const n=ye(t);e?(n.M_.delete(2),await Bc(n)):e||(n.M_.add(2),await pa(n),n.N_.set("Unknown"))}function $i(t){return t.B_||(t.B_=function(n,r,s){const i=ye(n);return i.f_(),new n1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:a1.bind(null,t),To:l1.bind(null,t),Ao:c1.bind(null,t),h_:u1.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),gd(t)?md(t):t.N_.set("Unknown")):(await t.B_.stop(),OI(t))})),t.B_}function Yr(t){return t.k_||(t.k_=function(n,r,s){const i=ye(n);return i.f_(),new r1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:d1.bind(null,t),Ao:m1.bind(null,t),R_:p1.bind(null,t),A_:_1.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await jc(t)):(await t.k_.stop(),t.v_.length>0&&(ae("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new yd(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vd(t,e){if(dr("AsyncQueue",`${e}: ${t}`),fa(t))return new oe(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=_o(),this.sortedSet=new ct(this.comparator)}static emptySet(e){return new ai(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ai)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ai;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(){this.q_=new ct(ue.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):fe():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class bi{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new bi(e,n,ai.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class v1{constructor(){this.queries=new Ui(e=>tI(e),Dc),this.onlineState="Unknown",this.z_=new Set}}async function Ed(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new y1,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=vd(o,`Initialization of query '${Xs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&Id(n)}async function Td(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function E1(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.U_)a.H_(s)&&(r=!0);o.K_=s}}r&&Id(n)}function T1(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function Id(t){t.z_.forEach(e=>{e.next()})}var Gh,Lg;(Lg=Gh||(Gh={})).J_="default",Lg.Cache="cache";class wd{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new bi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Gh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.key=e}}class FI{constructor(e){this.key=e}}class I1{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Ae(),this.mutatedKeys=Ae(),this.Ia=nI(e),this.Ta=new ai(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Og,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const p=s.get(h),m=Mc(this.query,d)?d:null,A=!!p&&this.mutatedKeys.has(p.key),N=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let P=!1;p&&m?p.data.isEqual(m.data)?A!==N&&(r.track({type:3,doc:m}),P=!0):this.Ra(p,m)||(r.track({type:2,doc:m}),P=!0,(l&&this.Ia(m,l)>0||u&&this.Ia(m,u)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),P=!0):p&&!m&&(r.track({type:1,doc:p}),P=!0,(l||u)&&(a=!0)),P&&(m?(o=o.add(m),i=N?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,d)=>function(m,A){const N=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return N(m)-N(A)}(h.type,d.type)||this.Ia(h.doc,d.doc)),this.Va(r),s=s!=null&&s;const a=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new bi(this.query,e.Ta,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Og,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Ae(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new FI(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new xI(r))}),n}pa(e){this.la=e.hs,this.Pa=Ae();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return bi.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class w1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class A1{constructor(e){this.key=e,this.wa=!1}}class b1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ui(a=>tI(a),Dc),this.Da=new Map,this.Ca=new Set,this.va=new ct(ue.comparator),this.Fa=new Map,this.Ma=new hd,this.xa={},this.Oa=new Map,this.Na=Ai.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function R1(t,e,n=!0){const r=WI(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await VI(r,e,n,!0),s}async function C1(t,e){const n=WI(t);await VI(n,e,!0,!1)}async function VI(t,e,n,r){const s=await YD(t.localStore,Un(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await S1(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&NI(t.remoteStore,s),a}async function S1(t,e,n,r,s){t.Ba=(d,p,m)=>async function(N,P,V,B){let C=P.view.da(V);C.Xi&&(C=await Sg(N.localStore,P.query,!1).then(({documents:I})=>P.view.da(I,C)));const L=B&&B.targetChanges.get(P.targetId),j=B&&B.targetMismatches.get(P.targetId)!=null,M=P.view.applyChanges(C,N.isPrimaryClient,L,j);return Mg(N,P.targetId,M.fa),M.snapshot}(t,d,p,m);const i=await Sg(t.localStore,e,!0),o=new I1(e,i.hs),a=o.da(i.documents),l=da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);Mg(t,n,u.fa);const h=new w1(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function P1(t,e,n){const r=ye(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!Dc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await qh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&pd(r.remoteStore,s.targetId),Kh(r,s.targetId)}).catch(ha)):(Kh(r,s.targetId),await qh(r.localStore,s.targetId,!0))}async function N1(t,e){const n=ye(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),pd(n.remoteStore,r.targetId))}async function k1(t,e,n){const r=V1(t);try{const s=await function(o,a){const l=ye(o),u=lt.now(),h=a.reduce((m,A)=>m.add(A.key),Ae());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let A=pr(),N=Ae();return l.os.getEntries(m,h).next(P=>{A=P,A.forEach((V,B)=>{B.isValidDocument()||(N=N.add(V))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,A)).next(P=>{d=P;const V=[];for(const B of a){const C=eD(B,d.get(B.key).overlayedDocument);C!=null&&V.push(new Fs(B.key,C,KT(C.value.mapValue),ur.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,V,a)}).next(P=>{p=P;const V=P.applyToLocalDocumentSet(d,N);return l.documentOverlayCache.saveOverlays(m,P.batchId,V)})}).then(()=>({batchId:p.batchId,changes:sI(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.xa[o.currentUser.toKey()];u||(u=new ct(De)),u=u.insert(a,l),o.xa[o.currentUser.toKey()]=u}(r,s.batchId,n),await _a(r,s.changes),await jc(r.remoteStore)}catch(s){const i=vd(s,"Failed to persist write");n.reject(i)}}async function UI(t,e){const n=ye(t);try{const r=await GD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(He(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?He(o.wa):s.removedDocuments.size>0&&(He(o.wa),o.wa=!1))}),await _a(n,r,e)}catch(r){await ha(r)}}function Dg(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const a=o.view.j_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ye(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.U_)p.j_(a)&&(u=!0)}),u&&Id(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function O1(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new ct(ue.comparator);o=o.insert(i,Vt.newNoDocument(i,_e.min()));const a=Ae().add(i),l=new Uc(_e.min(),new Map,new ct(De),o,a);await UI(r,l),r.va=r.va.remove(i),r.Fa.delete(e),Ad(r)}else await qh(r.localStore,e,!1).then(()=>Kh(r,e,n)).catch(ha)}async function L1(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await qD(n.localStore,e);BI(n,r,null),$I(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _a(n,s)}catch(s){await ha(s)}}async function D1(t,e,n){const r=ye(t);try{const s=await function(o,a){const l=ye(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(He(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);BI(r,e,n),$I(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _a(r,s)}catch(s){await ha(s)}}function $I(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function BI(t,e,n){const r=ye(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||jI(t,r)})}function jI(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(pd(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Ad(t))}function Mg(t,e,n){for(const r of n)r instanceof xI?(t.Ma.addReference(r.key,e),M1(t,r)):r instanceof FI?(ae("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||jI(t,r.key)):fe()}function M1(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(ae("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Ad(t))}function Ad(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ue(ze.fromString(e)),r=t.Na.next();t.Fa.set(r,new A1(n)),t.va=t.va.insert(n,r),NI(t.remoteStore,new Dr(Un(Lc(n.path)),r,"TargetPurposeLimboResolution",nd.oe))}}async function _a(t,e,n){const r=ye(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=dd.Ki(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Sa.h_(s),await async function(l,u){const h=ye(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>Q.forEach(u,p=>Q.forEach(p.qi,m=>h.persistence.referenceDelegate.addReference(d,p.targetId,m)).next(()=>Q.forEach(p.Qi,m=>h.persistence.referenceDelegate.removeReference(d,p.targetId,m)))))}catch(d){if(!fa(d))throw d;ae("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const m=h.ns.get(p),A=m.snapshotVersion,N=m.withLastLimboFreeSnapshotVersion(A);h.ns=h.ns.insert(p,N)}}}(r.localStore,i))}async function x1(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const r=await RI(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(a=>{a.forEach(l=>{l.reject(new oe(z.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _a(n,r.us)}}function F1(t,e){const n=ye(t),r=n.Fa.get(e);if(r&&r.wa)return Ae().add(r.key);{let s=Ae();const i=n.Da.get(e);if(!i)return s;for(const o of i){const a=n.ba.get(o);s=s.unionWith(a.view.Ea)}return s}}function WI(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=UI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=F1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=O1.bind(null,e),e.Sa.h_=E1.bind(null,e.eventManager),e.Sa.ka=T1.bind(null,e.eventManager),e}function V1(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=L1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=D1.bind(null,e),e}class xg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=$c(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return HD(this.persistence,new jD,e.initialUser,this.serializer)}createPersistence(e){return new UD(fd.Hr,this.serializer)}createSharedClientState(e){return new XD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class U1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=x1.bind(null,this.syncEngine),await g1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new v1}()}createDatastore(e){const n=$c(e.databaseInfo.databaseId),r=function(i){return new t1(i)}(e.databaseInfo);return function(i,o,a,l){return new s1(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new o1(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Dg(this.syncEngine,n,0),function(){return Ng.D()?new Ng:new JD}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const d=new b1(s,i,o,a,l,u);return h&&(d.La=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=ye(r);ae("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await pa(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):dr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ft.UNAUTHENTICATED,this.clientId=HT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ae("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ae("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oe(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hu(t,e){t.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await RI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await j1(t);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>kg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>kg(e.remoteStore,s)),t._onlineComponents=e}function B1(t){return t.name==="FirebaseError"?t.code===z.FAILED_PRECONDITION||t.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function j1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!B1(n))throw n;Ei("Error using user provided cache. Falling back to memory cache: "+n),await Hu(t,new xg)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await Hu(t,new xg);return t._offlineComponents}async function HI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await Fg(t,t._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await Fg(t,new U1))),t._onlineComponents}function W1(t){return HI(t).then(e=>e.syncEngine)}async function jl(t){const e=await HI(t),n=e.eventManager;return n.onListen=R1.bind(null,e.syncEngine),n.onUnlisten=P1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=C1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=N1.bind(null,e.syncEngine),n}function H1(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new bd({next:p=>{o.enqueueAndForget(()=>Td(i,d));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new oe(z.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&l&&l.source==="server"?u.reject(new oe(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new wd(Lc(a.path),h,{includeMetadataChanges:!0,ra:!0});return Ed(i,d)}(await jl(t),t.asyncQueue,e,n,r)),r.promise}function q1(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new bd({next:p=>{o.enqueueAndForget(()=>Td(i,d)),p.fromCache&&l.source==="server"?u.reject(new oe(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new wd(a,h,{includeMetadataChanges:!0,ra:!0});return Ed(i,d)}(await jl(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t,e,n){if(!n)throw new oe(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function G1(t,e,n,r){if(e===!0&&r===!0)throw new oe(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ug(t){if(!ue.isDocumentKey(t))throw new oe(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $g(t){if(ue.isDocumentKey(t))throw new oe(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function Bn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wc(t);throw new oe(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new oe(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}G1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new oe(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new oe(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new oe(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oe(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new oe(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uL;switch(r.type){case"firstParty":return new pL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Vg.get(n);r&&(ae("ComponentProvider","Removing Datastore"),Vg.delete(n),r.terminate())}(this),Promise.resolve()}}function K1(t,e,n,r={}){var s;const i=(t=Bn(t,Hc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ft.MOCK_USER;else{a=uN(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new oe(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ft(u)}t._authCredentials=new hL(new WT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rs(this.firestore,e,this._query)}}class Xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xt(this.firestore,e,this._key)}}class jr extends rs{constructor(e,n,r){super(e,n,Lc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xt(this.firestore,null,new ue(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function F$(t,e,...n){if(t=wt(t),GI("collection","path",e),t instanceof Hc){const r=ze.fromString(e,...n);return $g(r),new jr(t,null,r)}{if(!(t instanceof Xt||t instanceof jr))throw new oe(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return $g(r),new jr(t.firestore,null,r)}}function V$(t,e,...n){if(t=wt(t),arguments.length===1&&(e=HT.newId()),GI("doc","path",e),t instanceof Hc){const r=ze.fromString(e,...n);return Ug(r),new Xt(t,null,new ue(r))}{if(!(t instanceof Xt||t instanceof jr))throw new oe(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return Ug(r),new Xt(t.firestore,t instanceof jr?t.converter:null,new ue(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new SI(this,"async_queue_retry"),this.hu=()=>{const n=Wu();n&&ae("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Wu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Wu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new cr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!fa(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw dr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=yd.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&fe()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function jg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ri extends Hc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new z1}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zI(this),this._firestoreClient.terminate()}}function KI(t,e){const n=typeof t=="object"?t:Qf(),r=typeof t=="string"?t:"(default)",s=xi(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=lN("firestore");i&&K1(s,...i)}return s}function qc(t){return t._firestoreClient||zI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zI(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new CL(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,qI(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new $1(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ci(qt.fromBase64String(e))}catch(n){throw new oe(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ci(qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=/^__.*__$/;class YI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function QI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class Rd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Rd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Wl(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(QI(this.fu)&&Y1.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Q1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$c(e)}Fu(e,n,r,s=!1){return new Rd({fu:e,methodName:n,vu:r,path:St.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function XI(t){const e=t._freezeSettings(),n=$c(t._databaseId);return new Q1(t._databaseId,!!e.ignoreUndefinedProperties,n)}class Yc extends Kc{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yc}}class Cd extends Kc{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new sa(e.serializer,lI(e.serializer,this.xu));return new QL(e.path,n)}isEqual(e){return e instanceof Cd&&this.xu===e.xu}}function X1(t,e,n,r){const s=t.Fu(1,e,n);ZI("Data must be an object, but it was:",s,r);const i=[],o=cn.empty();xs(r,(l,u)=>{const h=Sd(e,l,n);u=wt(u);const d=s.Su(h);if(u instanceof Yc)i.push(h);else{const p=ma(u,d);p!=null&&(i.push(h),o.set(h,p))}});const a=new bn(i);return new YI(o,a,s.fieldTransforms)}function J1(t,e,n,r,s,i){const o=t.Fu(1,e,n),a=[Wg(e,r,n)],l=[s];if(i.length%2!=0)throw new oe(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Wg(e,i[p])),l.push(i[p+1]);const u=[],h=cn.empty();for(let p=a.length-1;p>=0;--p)if(!nM(u,a[p])){const m=a[p];let A=l[p];A=wt(A);const N=o.Su(m);if(A instanceof Yc)u.push(m);else{const P=ma(A,N);P!=null&&(u.push(m),h.set(m,P))}}const d=new bn(u);return new YI(h,d,o.fieldTransforms)}function Z1(t,e,n,r=!1){return ma(n,t.Fu(r?4:3,e))}function ma(t,e){if(JI(t=wt(t)))return ZI("Unsupported field value:",e,t),eM(t,e);if(t instanceof Kc)return function(r,s){if(!QI(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=ma(a,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=lt.fromDate(r);return{timestampValue:$l(s.serializer,i)}}if(r instanceof lt){const i=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$l(s.serializer,i)}}if(r instanceof zc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ci)return{bytesValue:vI(s.serializer,r._byteString)};if(r instanceof Xt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ud(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Wc(r)}`)}(t,e)}function eM(t,e){const n={};return qT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(r,s)=>{const i=ma(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function JI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof zc||t instanceof Ci||t instanceof Xt||t instanceof Kc)}function ZI(t,e,n){if(!JI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Wc(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Wg(t,e,n){if((e=wt(e))instanceof Gc)return e._internalPath;if(typeof e=="string")return Sd(t,e);throw Wl("Field path arguments must be of type string or ",t,!1,void 0,n)}const tM=new RegExp("[~\\*/\\[\\]]");function Sd(t,e,n){if(e.search(tM)>=0)throw Wl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gc(...e.split("."))._internalPath}catch{throw Wl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new oe(z.INVALID_ARGUMENT,a+t+l)}function nM(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Pd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rM extends ew{data(){return super.data()}}function Pd(t,e){return typeof e=="string"?Sd(t,e):e instanceof Gc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nd{}class nw extends Nd{}function U$(t,e,...n){let r=[];e instanceof Nd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Od).length,a=i.filter(l=>l instanceof kd).length;if(o>1||o>0&&a>0)throw new oe(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class kd extends nw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new kd(e,n,r)}_apply(e){const n=this._parse(e);return rw(e._query,n),new rs(e.firestore,e.converter,Uh(e._query,n))}_parse(e){const n=XI(e.firestore);return function(i,o,a,l,u,h,d){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new oe(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){qg(d,h);const m=[];for(const A of d)m.push(Hg(l,i,A));p={arrayValue:{values:m}}}else p=Hg(l,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||qg(d,h),p=Z1(a,o,d,h==="in"||h==="not-in");return at.create(u,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Od extends Nd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Od(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:kn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)rw(o,l),o=Uh(o,l)}(e._query,n),new rs(e.firestore,e.converter,Uh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ld extends nw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ld(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new oe(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new oe(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ta(i,o)}(e._query,this._field,this._direction);return new rs(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Vi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function $$(t,e="asc"){const n=e,r=Pd("orderBy",t);return Ld._create(r,n)}function Hg(t,e,n){if(typeof(n=wt(n))=="string"){if(n==="")throw new oe(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!eI(e)&&n.indexOf("/")!==-1)throw new oe(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ze.fromString(n));if(!ue.isDocumentKey(r))throw new oe(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hg(t,new ue(r))}if(n instanceof Xt)return hg(t,n._key);throw new oe(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wc(n)}.`)}function qg(t,e){if(!Array.isArray(t)||t.length===0)throw new oe(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rw(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new oe(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class sM{convertValue(e,n="none"){switch(Ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw fe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new zc(ot(e.latitude),ot(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=sd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Jo(e));default:return null}}convertTimestamp(e){const n=zr(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ze.fromString(e);He(bI(r));const s=new Zo(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||dr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sw extends ew{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Pd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class gl extends sw{data(e={}){return super.data(e)}}class iw{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new go(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new gl(this._firestore,this._userDataWriter,r.key,r,new go(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new gl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new go(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new gl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new go(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:iM(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t){t=Bn(t,Xt);const e=Bn(t.firestore,Ri);return H1(qc(e),t._key).then(n=>aw(e,t,n))}class Dd extends sM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ci(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xt(this.firestore,null,n)}}function oM(t){t=Bn(t,rs);const e=Bn(t.firestore,Ri),n=qc(e),r=new Dd(e);return tw(t._query),q1(n,t._query).then(s=>new iw(e,r,t,s))}function B$(t,e,n,...r){t=Bn(t,Xt);const s=Bn(t.firestore,Ri),i=XI(s);let o;return o=typeof(e=wt(e))=="string"||e instanceof Gc?J1(i,"updateDoc",t._key,e,n,r):X1(i,"updateDoc",t._key,e),aM(s,[o.toMutation(t._key,ur.exists(!0))])}function Md(t,...e){var n,r,s;t=wt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||jg(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(jg(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(s=d.complete)===null||s===void 0?void 0:s.bind(d)}let l,u,h;if(t instanceof Xt)u=Bn(t.firestore,Ri),h=Lc(t._key.path),l={next:d=>{e[o]&&e[o](aw(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Bn(t,rs);u=Bn(d.firestore,Ri),h=d._query;const p=new Dd(u);l={next:m=>{e[o]&&e[o](new iw(u,p,d,m))},error:e[o+1],complete:e[o+2]},tw(t._query)}return function(p,m,A,N){const P=new bd(N),V=new wd(m,P,A);return p.asyncQueue.enqueueAndForget(async()=>Ed(await jl(p),V)),()=>{P.$a(),p.asyncQueue.enqueueAndForget(async()=>Td(await jl(p),V))}}(qc(u),h,a,l)}function aM(t,e){return function(r,s){const i=new cr;return r.asyncQueue.enqueueAndForget(async()=>k1(await W1(r),s,i)),i.promise}(qc(t),e)}function aw(t,e,n){const r=n.docs.get(e._key),s=new Dd(t);return new sw(t,s,e._key,r,new go(n.hasPendingWrites,n.fromCache),e.converter)}function j$(t){return new Cd("increment",-50)}(function(e,n=!0){(function(s){Fi=s})(ns),sn(new Jt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ri(new fL(r.getProvider("auth-internal")),new mL(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new oe(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Nt(ag,"4.6.4",e),Nt(ag,"4.6.4","esm2017")})();const xd=lT({apiKey:"AIzaSyAfrKrBmJlx4pLDZi6C1ig-WrfCummR_yI",authDomain:"pp20years.firebaseapp.com",projectId:"pp20years",storageBucket:"pp20years.appspot.com",messagingSenderId:"361365772842",appId:"1:361365772842:web:5d0bf2c269f098bfeb8153",measurementId:"G-ECEZK23EEV"});oL(xd);const W$=KI(xd);function Fd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function lw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lM=lw,cw=new ts("auth","Firebase",lw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new Mi("@firebase/auth");function cM(t,...e){Hl.logLevel<=we.WARN&&Hl.warn(`Auth (${ns}): ${t}`,...e)}function yl(t,...e){Hl.logLevel<=we.ERROR&&Hl.error(`Auth (${ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t,...e){throw Vd(t,...e)}function jn(t,...e){return Vd(t,...e)}function uw(t,e,n){const r=Object.assign(Object.assign({},lM()),{[e]:n});return new ts("auth","Firebase",r).create(e,{appName:t.name})}function ws(t){return uw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cw.create(t,...e)}function me(t,e,...n){if(!t)throw Vd(e,...n)}function sr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yl(e),new Error(e)}function mr(t,e){t||sr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uM(){return Gg()==="http:"||Gg()==="https:"}function Gg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uM()||eT()||"connection"in navigator)?navigator.onLine:!0}function fM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n){this.shortDelay=e,this.longDelay=n,mr(n>e,"Short delay should be less than long delay!"),this.isMobile=Kf()||tT()}get(){return hM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t,e){mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pM=new ga(3e4,6e4);function $d(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bi(t,e,n,r,s={}){return fw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Di(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),hw.fetch()(dw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function fw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dM),e);try{const s=new mM(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw el(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw el(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw el(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw el(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw uw(t,h,u);_r(t,h)}}catch(s){if(s instanceof vn)throw s;_r(t,"network-request-failed",{message:String(s)})}}async function _M(t,e,n,r,s={}){const i=await Bi(t,e,n,r,s);return"mfaPendingCredential"in i&&_r(t,"multi-factor-auth-required",{_serverResponse:i}),i}function dw(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ud(t.config,s):`${t.config.apiScheme}://${s}`}class mM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jn(this.auth,"network-request-failed")),pM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function el(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=jn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gM(t,e){return Bi(t,"POST","/v1/accounts:delete",e)}async function pw(t,e){return Bi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yM(t,e=!1){const n=wt(t),r=await n.getIdToken(e),s=Bd(r);me(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Lo(qu(s.auth_time)),issuedAtTime:Lo(qu(s.iat)),expirationTime:Lo(qu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qu(t){return Number(t)*1e3}function Bd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ol(n);return s?JSON.parse(s):(yl("Failed to decode base64 JWT payload"),null)}catch(s){return yl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Kg(t){const e=Bd(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ia(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&vM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lo(this.lastLoginAt),this.creationTime=Lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ia(t,pw(n,{idToken:r}));me(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?_w(i.providerUserInfo):[],a=IM(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Yh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function TM(t){const e=wt(t);await ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IM(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _w(t){return t.map(e=>{var{providerId:n}=e,r=Fd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wM(t,e){const n=await fw(t,{},async()=>{const r=Di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=dw(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AM(t,e){return Bi(t,"POST","/v2/accounts:revokeToken",$d(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=Kg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await wM(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new li;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(me(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ir{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Fd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new EM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ia(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yM(this,e)}reload(){return TM(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lr(this.auth.app))return Promise.reject(ws(this.auth));const e=await this.getIdToken();return await ia(this,gM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,V=(u=n.createdAt)!==null&&u!==void 0?u:void 0,B=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:C,emailVerified:L,isAnonymous:j,providerData:M,stsTokenManager:I}=n;me(C&&I,e,"internal-error");const g=li.fromJSON(this.name,I);me(typeof C=="string",e,"internal-error"),br(d,e.name),br(p,e.name),me(typeof L=="boolean",e,"internal-error"),me(typeof j=="boolean",e,"internal-error"),br(m,e.name),br(A,e.name),br(N,e.name),br(P,e.name),br(V,e.name),br(B,e.name);const T=new ir({uid:C,auth:e,email:p,emailVerified:L,displayName:d,isAnonymous:j,photoURL:A,phoneNumber:m,tenantId:N,stsTokenManager:g,createdAt:V,lastLoginAt:B});return M&&Array.isArray(M)&&(T.providerData=M.map(S=>Object.assign({},S))),P&&(T._redirectEventId=P),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new li;s.updateFromServerResponse(n);const i=new ir({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ql(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];me(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?_w(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new li;a.updateFromIdToken(r);const l=new ir({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Yh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=new Map;function or(t){mr(t instanceof Function,"Expected a class definition");let e=zg.get(t);return e?(mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mw.type="NONE";const Yg=mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(t,e,n){return`firebase:${t}:${e}:${n}`}class ci{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vl(this.userKey,s.apiKey,i),this.fullPersistenceKey=vl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ci(or(Yg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||or(Yg);const o=vl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=ir._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ci(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ci(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tw(e))return"Blackberry";if(Iw(e))return"Webos";if(jd(e))return"Safari";if((e.includes("chrome/")||yw(e))&&!e.includes("edge/"))return"Chrome";if(Ew(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gw(t=Ot()){return/firefox\//i.test(t)}function jd(t=Ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yw(t=Ot()){return/crios\//i.test(t)}function vw(t=Ot()){return/iemobile/i.test(t)}function Ew(t=Ot()){return/android/i.test(t)}function Tw(t=Ot()){return/blackberry/i.test(t)}function Iw(t=Ot()){return/webos/i.test(t)}function Qc(t=Ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bM(t=Ot()){var e;return Qc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function RM(){return fN()&&document.documentMode===10}function ww(t=Ot()){return Qc(t)||Ew(t)||Iw(t)||Tw(t)||/windows phone/i.test(t)||vw(t)}function CM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t,e=[]){let n;switch(t){case"Browser":n=Qg(Ot());break;case"Worker":n=`${Qg(Ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ns}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PM(t,e={}){return Bi(t,"GET","/v2/passwordPolicy",$d(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM=6;class kM{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xg(this),this.idTokenSubscription=new Xg(this),this.beforeStateQueue=new SM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=or(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pw(this,{idToken:e}),r=await ir._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Lr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lr(this.app))return Promise.reject(ws(this));const n=e?wt(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lr(this.app)?Promise.reject(ws(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lr(this.app)?Promise.reject(ws(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PM(this),n=new kM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ts("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await AM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&or(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Aw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&cM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bw(t){return wt(t)}class Xg{constructor(e){this.auth=e,this.observer=null,this.addObserver=TN(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LM(t){Wd=t}function DM(t){return Wd.loadJS(t)}function MM(){return Wd.gapiScript}function xM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FM(t,e){const n=xi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Yo(i,e??{}))return s;_r(s,"already-initialized")}return n.initialize({options:e})}function VM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sr("not implemented")}_getIdTokenResponse(e){return sr("not implemented")}_linkToIdToken(e,n){return sr("not implemented")}_getReauthenticationResolver(e){return sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t,e){return _M(t,"POST","/v1/accounts:signInWithIdp",$d(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM="http://localhost";class Ns extends Rw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_r("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Fd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ns(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ui(e,n)}buildRequest(){const e={requestUri:UM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Di(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends Cw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends ya{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ns._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends ya{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends ya{constructor(){super("twitter.com")}static credential(e,n){return Ns._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Or.credential(n,r)}catch{return null}}}Or.TWITTER_SIGN_IN_METHOD="twitter.com";Or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ir._fromIdTokenResponse(e,r,s),o=Jg(r);return new Si({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Jg(r);return new Si({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Jg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Gl(e,n,r,s)}}function Sw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gl._fromErrorAndOperation(t,i,e,r):i})}async function $M(t,e,n=!1){const r=await ia(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Si._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BM(t,e,n=!1){const{auth:r}=t;if(Lr(r.app))return Promise.reject(ws(r));const s="reauthenticate";try{const i=await ia(t,Sw(r,s,e,t),n);me(i.idToken,r,"internal-error");const o=Bd(i.idToken);me(o,r,"internal-error");const{sub:a}=o;return me(t.uid===a,r,"user-mismatch"),Si._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&_r(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jM(t,e,n=!1){if(Lr(t.app))return Promise.reject(ws(t));const r="signIn",s=await Sw(t,r,e),i=await Si._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function WM(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}const Kl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kl,"1"),this.storage.removeItem(Kl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HM(){const t=Ot();return jd(t)||Qc(t)}const qM=1e3,GM=10;class Nw extends Pw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=HM()&&CM(),this.fallbackToPolling=ww(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);RM()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,GM):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nw.type="LOCAL";const KM=Nw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw extends Pw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kw.type="SESSION";const Ow=kw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await zM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Hd("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(){return window}function QM(t){Wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(){return typeof Wn().WorkerGlobalScope<"u"&&typeof Wn().importScripts=="function"}async function XM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ZM(){return Lw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="firebaseLocalStorageDb",ex=1,zl="firebaseLocalStorage",Mw="fbase_key";class va{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jc(t,e){return t.transaction([zl],e?"readwrite":"readonly").objectStore(zl)}function tx(){const t=indexedDB.deleteDatabase(Dw);return new va(t).toPromise()}function Qh(){const t=indexedDB.open(Dw,ex);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zl,{keyPath:Mw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zl)?e(r):(r.close(),await tx(),e(await Qh()))})})}async function Zg(t,e,n){const r=Jc(t,!0).put({[Mw]:e,value:n});return new va(r).toPromise()}async function nx(t,e){const n=Jc(t,!1).get(e),r=await new va(n).toPromise();return r===void 0?null:r.value}function ey(t,e){const n=Jc(t,!0).delete(e);return new va(n).toPromise()}const rx=800,sx=3;class xw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xc._getInstance(ZM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XM(),!this.activeServiceWorker)return;this.sender=new YM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qh();return await Zg(e,Kl,"1"),await ey(e,Kl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ey(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jc(s,!1).getAll();return new va(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xw.type="LOCAL";const ix=xw;new ga(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t,e){return e?or(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd extends Rw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ax(t){return jM(t.auth,new qd(t),t.bypassAuthState)}function lx(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),BM(n,new qd(t),t.bypassAuthState)}async function cx(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),$M(n,new qd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ax;case"linkViaPopup":case"linkViaRedirect":return cx;case"reauthViaPopup":case"reauthViaRedirect":return lx;default:_r(this.auth,"internal-error")}}resolve(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=new ga(2e3,1e4);class ti extends Fw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ti.currentPopupAction&&ti.currentPopupAction.cancel(),ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){mr(this.filter.length===1,"Popup operations only handle one event");const e=Hd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ux.get())};e()}}ti.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx="pendingRedirect",El=new Map;class fx extends Fw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=El.get(this.auth._key());if(!e){try{const r=await dx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}El.set(this.auth._key(),e)}return this.bypassAuthState||El.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dx(t,e){const n=mx(e),r=_x(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function px(t,e){El.set(t._key(),e)}function _x(t){return or(t._redirectPersistence)}function mx(t){return vl(hx,t.config.apiKey,t.name)}async function gx(t,e,n=!1){if(Lr(t.app))return Promise.reject(ws(t));const r=bw(t),s=ox(r,e),o=await new fx(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=10*60*1e3;class vx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ex(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(jn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yx&&this.cachedEventUids.clear(),this.cachedEventUids.has(ty(e))}saveEventToCache(e){this.cachedEventUids.add(ty(e)),this.lastProcessedEventTime=Date.now()}}function ty(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ex(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tx(t,e={}){return Bi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wx=/^https?/;async function Ax(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Tx(t);for(const n of e)try{if(bx(n))return}catch{}_r(t,"unauthorized-domain")}function bx(t){const e=zh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wx.test(n))return!1;if(Ix.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=new ga(3e4,6e4);function ny(){const t=Wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Cx(t){return new Promise((e,n)=>{var r,s,i;function o(){ny(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ny(),n(jn(t,"network-request-failed"))},timeout:Rx.get()})}if(!((s=(r=Wn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Wn().gapi)===null||i===void 0)&&i.load)o();else{const a=xM("iframefcb");return Wn()[a]=()=>{gapi.load?o():n(jn(t,"network-request-failed"))},DM(`${MM()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Tl=null,e})}let Tl=null;function Sx(t){return Tl=Tl||Cx(t),Tl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=new ga(5e3,15e3),Nx="__/auth/iframe",kx="emulator/auth/iframe",Ox={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dx(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ud(e,kx):`https://${t.config.authDomain}/${Nx}`,r={apiKey:e.apiKey,appName:t.name,v:ns},s=Lx.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Di(r).slice(1)}`}async function Mx(t){const e=await Sx(t),n=Wn().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:Dx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ox,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=jn(t,"network-request-failed"),a=Wn().setTimeout(()=>{i(o)},Px.get());function l(){Wn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fx=500,Vx=600,Ux="_blank",$x="http://localhost";class ry{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bx(t,e,n,r=Fx,s=Vx){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},xx),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ot().toLowerCase();n&&(a=yw(u)?Ux:n),gw(u)&&(e=e||$x,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[m,A])=>`${p}${m}=${A},`,"");if(bM(u)&&a!=="_self")return jx(e||"",a),new ry(null);const d=window.open(e||"",a,h);me(d,t,"popup-blocked");try{d.focus()}catch{}return new ry(d)}function jx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx="__/auth/handler",Hx="emulator/auth/handler",qx=encodeURIComponent("fac");async function sy(t,e,n,r,s,i){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ns,eventId:s};if(e instanceof Cw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof ya){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${qx}=${encodeURIComponent(l)}`:"";return`${Gx(t)}?${Di(a).slice(1)}${u}`}function Gx({config:t}){return t.emulator?Ud(t,Hx):`https://${t.authDomain}/${Wx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="webStorageSupport";class Kx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ow,this._completeRedirectFn=gx,this._overrideRedirectResult=px}async _openPopup(e,n,r,s){var i;mr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await sy(e,n,r,zh(),s);return Bx(e,o,Hd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await sy(e,n,r,zh(),s);return QM(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Mx(e),r=new vx(e);return n.register("authEvent",s=>(me(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gu,{type:Gu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Gu];o!==void 0&&n(!!o),_r(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ax(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ww()||jd()||Qc()}}const zx=Kx;var iy="@firebase/auth",oy="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xx(t){sn(new Jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Aw(t)},u=new OM(r,s,i,l);return VM(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),sn(new Jt("auth-internal",e=>{const n=bw(e.getProvider("auth").getImmediate());return(r=>new Yx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(iy,oy,Qx(t)),Nt(iy,oy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=5*60;cN("authIdTokenMaxAge");function Zx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}LM({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=jn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Zx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xx("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eF=new Map,tF={activated:!1,tokenObservers:[]};function On(t){return eF.get(t)||Object.assign({},tF)}const ay={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ko,this.pending.promise.catch(n=>{}),await rF(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ko,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function rF(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sF={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Yl=new ts("appCheck","AppCheck",sF);function Uw(t){if(!On(t).activated)throw Yl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iF="firebase-app-check-database",oF=1,Xh="firebase-app-check-store";let tl=null;function aF(){return tl||(tl=new Promise((t,e)=>{try{const n=indexedDB.open(iF,oF);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Yl.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Xh,{keyPath:"compositeKey"})}}}catch(n){e(Yl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),tl)}function lF(t,e){return cF(uF(t),e)}async function cF(t,e){const r=(await aF()).transaction(Xh,"readwrite"),i=r.objectStore(Xh).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var u;a(Yl.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function uF(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Mi("@firebase/app-check");function ly(t,e){return zf()?lF(t,e).catch(n=>{Jh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hF={error:"UNKNOWN_ERROR"};function fF(t){return Cc.encodeString(JSON.stringify(t),!1)}async function Zh(t,e=!1){const n=t.app;Uw(n);const r=On(n);let s=r.token,i;if(s&&!yo(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(yo(l)?s=l:await ly(n,void 0))}if(!e&&s&&yo(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await On(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Jh.warn(l.message):Jh.error(l),i=l}let a;return s?i?yo(s)?a={token:s.token,internalError:i}:a=uy(i):(a={token:s.token},r.token=s,await ly(n,s)):a=uy(i),o&&mF(n,a),a}async function dF(t){const e=t.app;Uw(e);const{provider:n}=On(e);{const{token:r}=await n.getToken();return{token:r}}}function pF(t,e,n,r){const{app:s}=t,i=On(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&yo(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),cy(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>cy(t))}function $w(t,e){const n=On(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function cy(t){const{app:e}=t,n=On(e);let r=n.tokenRefresher;r||(r=_F(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function _F(t){const{app:e}=t;return new nF(async()=>{const n=On(e);let r;if(n.token?r=await Zh(t,!0):r=await Zh(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=On(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},ay.RETRIAL_MIN_WAIT,ay.RETRIAL_MAX_WAIT)}function mF(t,e){const n=On(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function yo(t){return t.expireTimeMillis-Date.now()>0}function uy(t){return{token:fF(hF),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=On(this.app);for(const n of e)$w(this.app,n.next);return Promise.resolve()}}function yF(t,e){return new gF(t,e)}function vF(t){return{getToken:e=>Zh(t,e),getLimitedUseToken:()=>dF(t),addTokenListener:e=>pF(t,"INTERNAL",e),removeTokenListener:e=>$w(t.app,e)}}const EF="@firebase/app-check",TF="0.8.6",IF="app-check",hy="app-check-internal";function wF(){sn(new Jt(IF,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return yF(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(hy).initialize()})),sn(new Jt(hy,t=>{const e=t.getProvider("app-check").getImmediate();return vF(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Nt(EF,TF)}wF();const Bw=Symbol("firebaseApp");function Zc(t){return fr()&&mn(Bw,null)||Qf(t)}const Fn=()=>{};function Gd(t,e){return e.split(".").reduce((n,r)=>n&&n[r],t)}function AF(t,e,n){const r=(""+e).split("."),s=r.pop(),i=r.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(s),1,n):i[s]=n}function Us(t){return!!t&&typeof t=="object"}const bF=Object.prototype;function RF(t){return Us(t)&&Object.getPrototypeOf(t)===bF}function Kd(t){return Us(t)&&t.type==="document"}function CF(t){return Us(t)&&t.type==="collection"}function SF(t){return Kd(t)||CF(t)}function PF(t){return Us(t)&&t.type==="query"}function NF(t){return Us(t)&&"ref"in t}function kF(t){return Us(t)&&typeof t.bucket=="string"}function OF(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const LF=Symbol.for("v-scx");function DF(){return fr(),!!mn(LF,0)}const nl=new WeakMap;function MF(t,e){if(!nl.has(t)){const n=lv(!0);nl.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),nl.delete(t)}}return nl.get(t)}const xF=new WeakMap,rl=new WeakMap;function FF(t){const e=Zc(t);if(!rl.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{rl.set(e,i),n(i.value)}];rl.set(e,s)}return rl.get(e)}function VF(t,e){WM(e,n=>{const r=FF();t.value=n,Array.isArray(r)&&r[1](t)})}var fy={};const dy="@firebase/database",py="1.0.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jw="";function UF(t){jw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ct(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:zo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BF{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $F(e)}}catch{}return new BF},vs=Ww("localStorage"),jF=Ww("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Mi("@firebase/database"),WF=function(){let t=1;return function(){return t++}}(),Hw=function(t){const e=bN(t),n=new EN;n.update(e);const r=n.digest();return Cc.encodeByteArray(r)},Ea=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ea.apply(null,r):typeof r=="object"?e+=Ct(r):e+=r,e+=" "}return e};let Do=null,_y=!0;const HF=function(t,e){ne(!e,"Can't turn on custom loggers persistently."),hi.logLevel=we.VERBOSE,Do=hi.log.bind(hi)},Ut=function(...t){if(_y===!0&&(_y=!1,Do===null&&jF.get("logging_enabled")===!0&&HF()),Do){const e=Ea.apply(null,t);Do(e)}},Ta=function(t){return function(...e){Ut(t,...e)}},ef=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ea(...t);hi.error(e)},ks=function(...t){const e=`FIREBASE FATAL ERROR: ${Ea(...t)}`;throw hi.error(e),new Error(e)},hn=function(...t){const e="FIREBASE WARNING: "+Ea(...t);hi.warn(e)},qF=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&hn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},GF=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Pi="[MIN_NAME]",Os="[MAX_NAME]",ji=function(t,e){if(t===e)return 0;if(t===Pi||e===Os)return-1;if(e===Pi||t===Os)return 1;{const n=my(t),r=my(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},KF=function(t,e){return t===e?0:t<e?-1:1},lo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ct(e))},zd=function(t){if(typeof t!="object"||t===null)return Ct(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ct(e[r]),n+=":",n+=zd(t[e[r]]);return n+="}",n},Gw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function yn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Kw=function(t){ne(!qw(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},zF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},YF=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},QF=new RegExp("^-?(0*)\\d{1,10}$"),XF=-2147483648,JF=2147483647,my=function(t){if(QF.test(t)){const e=Number(t);if(e>=XF&&e<=JF)return e}return null},Ia=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw hn("Exception was thrown by user callback.",n),e},Math.floor(0))}},ZF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Mo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){hn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ut("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',hn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="5",zw="v",Yw="s",Qw="r",Xw="f",Jw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zw="ls",eA="p",tf="ac",tA="websocket",nA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function rV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function rA(t,e,n){ne(typeof e=="string","typeof type must == string"),ne(typeof n=="object","typeof params must == object");let r;if(e===tA)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===nA)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rV(t)&&(n.ns=t.namespace);const s=[];return yn(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(){this.counters_={}}incrementCounter(e,n=1){yr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return tN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku={},zu={};function Qd(t){const e=t.toString();return Ku[e]||(Ku[e]=new sV),Ku[e]}function iV(t,e){const n=t.toString();return zu[n]||(zu[n]=e()),zu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Ia(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="start",aV="close",lV="pLPCommand",cV="pRTLPCB",sA="id",iA="pw",oA="ser",uV="cb",hV="seg",fV="ts",dV="d",pV="dframe",aA=1870,lA=30,_V=aA-lA,mV=25e3,gV=3e4;class ni{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ta(e),this.stats_=Qd(n),this.urlFn=l=>(this.appCheckToken&&(l[tf]=this.appCheckToken),rA(n,nA,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new oV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gV)),GF(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xd((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gy)this.id=a,this.password=l;else if(o===aV)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[gy]="t",r[oA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[uV]=this.scriptTagHolder.uniqueCallbackIdentifier),r[zw]=Yd,this.transportSessionId&&(r[Yw]=this.transportSessionId),this.lastSessionId&&(r[Zw]=this.lastSessionId),this.applicationId&&(r[eA]=this.applicationId),this.appCheckToken&&(r[tf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Jw.test(location.hostname)&&(r[Qw]=Xw);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ni.forceAllow_=!0}static forceDisallow(){ni.forceDisallow_=!0}static isAvailable(){return ni.forceAllow_?!0:!ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zF()&&!YF()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=XE(n),s=Gw(r,_V);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[pV]="t",r[sA]=e,r[iA]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ct(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xd{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=WF(),window[lV+this.uniqueCallbackIdentifier]=e,window[cV+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ut("frame writing exception"),a.stack&&Ut(a.stack),Ut(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ut("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sA]=this.myID,e[iA]=this.myPW,e[oA]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lA+r.length<=aA;){const o=this.pendingSegs.shift();r=r+"&"+hV+s+"="+o.seg+"&"+fV+s+"="+o.ts+"&"+dV+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(mV)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ut("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yV=16384,vV=45e3;let Ql=null;typeof MozWebSocket<"u"?Ql=MozWebSocket:typeof WebSocket<"u"&&(Ql=WebSocket);class In{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ta(this.connId),this.stats_=Qd(n),this.connURL=In.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[zw]=Yd,typeof location<"u"&&location.hostname&&Jw.test(location.hostname)&&(o[Qw]=Xw),n&&(o[Yw]=n),r&&(o[Zw]=r),s&&(o[tf]=s),i&&(o[eA]=i),rA(e,tA,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vs.set("previous_websocket_failure",!0);try{let r;nT(),this.mySock=new Ql(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){In.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ql!==null&&!In.forceDisallow_}static previouslyFailed(){return vs.isInMemoryStorage||vs.get("previous_websocket_failure")===!0}markConnectionHealthy(){vs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=zo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Gw(n,yV);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vV))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}In.responsesRequiredToBeHealthy=2;In.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ni,In]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=In&&In.isAvailable();let r=n&&!In.previouslyFailed();if(e.webSocketOnly&&(n||hn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[In];else{const s=this.transports_=[];for(const i of oa.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);oa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}oa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV=6e4,TV=5e3,IV=10*1024,wV=100*1024,Yu="t",yy="d",AV="s",vy="r",bV="e",Ey="o",Ty="a",Iy="n",wy="p",RV="h";class CV{constructor(e,n,r,s,i,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ta("c:"+this.id+":"),this.transportManager_=new oa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Mo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>IV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yu in e){const n=e[Yu];n===Ty?this.upgradeIfSecondaryHealthy_():n===vy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ey&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=lo("t",e),r=lo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ty,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Iy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=lo("t",e),r=lo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=lo(Yu,e);if(yy in e){const r=e[yy];if(n===RV){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Iy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===AV?this.onConnectionShutdown_(r):n===vy?this.onReset_(r):n===bV?ef("Server Error: "+r):n===Ey?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ef("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Yd!==r&&hn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Mo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(EV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(TV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends uA{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Kf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xl}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=32,by=768;class Xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Be(){return new Xe("")}function Ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Qr(t){return t.pieces_.length-t.pieceNum_}function Ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Xe(t.pieces_,e)}function hA(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function SV(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fA(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function dA(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Xe(e,0)}function vt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Xe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Xe(n,0)}function be(t){return t.pieceNum_>=t.pieces_.length}function _n(t,e){const n=Ce(t),r=Ce(e);if(n===null)return e;if(n===r)return _n(Ke(t),Ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function pA(t,e){if(Qr(t)!==Qr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Rn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Qr(t)>Qr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class PV{constructor(e,n){this.errorPrefix_=n,this.parts_=fA(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Pc(this.parts_[r]);_A(this)}}function NV(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Pc(e),_A(t)}function kV(t){const e=t.parts_.pop();t.byteLength_-=Pc(e),t.parts_.length>0&&(t.byteLength_-=1)}function _A(t){if(t.byteLength_>by)throw new Error(t.errorPrefix_+"has a key path longer than "+by+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ay)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ay+") or object contains a cycle "+ps(t))}function ps(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd extends uA{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Jd}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=1e3,OV=60*5*1e3,Ry=30*1e3,LV=1.3,DV=3e4,MV="server_kill",Cy=3;class hr extends cA{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=hr.nextPersistentConnectionId_++,this.log_=Ta("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=co,this.maxReconnectDelay_=OV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!nT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Ct(i)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Ko,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;hr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yr(e,"w")){const r=vi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();hn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ry)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ct(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ef("Unrecognized action received from server: "+Ct(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=co,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=co,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>DV&&(this.reconnectDelay_=co),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*LV)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+hr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){ne(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ut("getToken() completed but was canceled"):(Ut("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new CV(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{hn(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(MV)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&hn(d),l())}}}interrupt(e){Ut("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ut("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rh(this.interruptReasons_)&&(this.reconnectDelay_=co,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>zd(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Xe(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Ut("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cy&&(this.reconnectDelay_=Ry,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ut("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+jw.replace(/\./g,"-")]=1,Kf()?e["framework.cordova"]=1:tT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xl.getInstance().currentlyOnline();return Rh(this.interruptReasons_)&&e}}hr.nextPersistentConnectionId_=0;hr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Se(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Se(Pi,e),s=new Se(Pi,n);return this.compare(r,s)!==0}minPost(){return Se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl;class mA extends eu{static get __EMPTY_NODE(){return sl}static set __EMPTY_NODE(e){sl=e}compare(e,n){return ji(e.name,n.name)}isDefinedOn(e){throw Li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Se.MIN}maxPost(){return new Se(Os,sl)}makePost(e,n){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new Se(e,sl)}toString(){return".key"}}const fi=new mA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class yt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??yt.RED,this.left=s??nn.EMPTY_NODE,this.right=i??nn.EMPTY_NODE}copy(e,n,r,s,i){return new yt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return nn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return nn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}yt.RED=!0;yt.BLACK=!1;class xV{copy(e,n,r,s,i){return this}insert(e,n,r){return new yt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nn{constructor(e,n=nn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,yt.BLACK,null,null))}remove(e){return new nn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,yt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new il(this.root_,null,this.comparator_,!0,e)}}nn.EMPTY_NODE=new xV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FV(t,e){return ji(t.name,e.name)}function Zd(t,e){return ji(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf;function VV(t){nf=t}const gA=function(t){return typeof t=="number"?"number:"+Kw(t):"string:"+t},yA=function(t){if(t.isLeafNode()){const e=t.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yr(e,".sv"),"Priority must be a string or number.")}else ne(t===nf||t.isEmpty(),"priority of unexpected type.");ne(t===nf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sy;class mt{constructor(e,n=mt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),yA(this.priorityNode_)}static set __childrenNodeConstructor(e){Sy=e}static get __childrenNodeConstructor(){return Sy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new mt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:mt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return be(e)?this:Ce(e)===".priority"?this.priorityNode_:mt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:mt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ce(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(ne(r!==".priority"||Qr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,mt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gA(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Kw(this.value_):e+=this.value_,this.lazyHash_=Hw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===mt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof mt.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=mt.VALUE_TYPE_ORDER.indexOf(n),i=mt.VALUE_TYPE_ORDER.indexOf(r);return ne(s>=0,"Unknown leaf type: "+n),ne(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}mt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vA,EA;function UV(t){vA=t}function $V(t){EA=t}class BV extends eu{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?ji(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Se.MIN}maxPost(){return new Se(Os,new mt("[PRIORITY-POST]",EA))}makePost(e,n){const r=vA(e);return new Se(n,new mt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ht=new BV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jV=Math.log(2);class WV{constructor(e){const n=i=>parseInt(Math.log(i)/jV,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Jl=function(t,e,n,r){t.sort(e);const s=function(l,u){const h=u-l;let d,p;if(h===0)return null;if(h===1)return d=t[l],p=n?n(d):d,new yt(p,d.node,yt.BLACK,null,null);{const m=parseInt(h/2,10)+l,A=s(l,m),N=s(m+1,u);return d=t[m],p=n?n(d):d,new yt(p,d.node,yt.BLACK,A,N)}},i=function(l){let u=null,h=null,d=t.length;const p=function(A,N){const P=d-A,V=d;d-=A;const B=s(P+1,V),C=t[P],L=n?n(C):C;m(new yt(L,C.node,N,null,B))},m=function(A){u?(u.left=A,u=A):(h=A,u=A)};for(let A=0;A<l.count;++A){const N=l.nextBitIsOne(),P=Math.pow(2,l.count-(A+1));N?p(P,yt.BLACK):(p(P,yt.BLACK),p(P,yt.RED))}return h},o=new WV(t.length),a=i(o);return new nn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qu;const zs={};class ar{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return ne(zs&&Ht,"ChildrenNode.ts has not been loaded"),Qu=Qu||new ar({".priority":zs},{".priority":Ht}),Qu}get(e){const n=vi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nn?n:null}hasIndex(e){return yr(this.indexSet_,e.toString())}addIndex(e,n){ne(e!==fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Se.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Jl(r,e.getCompare()):a=zs;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new ar(h,u)}addToIndexes(e,n){const r=Ll(this.indexes_,(s,i)=>{const o=vi(this.indexSet_,i);if(ne(o,"Missing index implementation for "+i),s===zs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Se.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Jl(a,o.getCompare())}else return zs;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Se(e.name,a))),l.insert(e,e.node)}});return new ar(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ll(this.indexes_,s=>{if(s===zs)return s;{const i=n.get(e.name);return i?s.remove(new Se(e.name,i)):s}});return new ar(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo;class Fe{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&yA(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return uo||(uo=new Fe(new nn(Zd),null,ar.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||uo}updatePriority(e){return this.children_.isEmpty()?this:new Fe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?uo:n}}getChild(e){const n=Ce(e);return n===null?this:this.getImmediateChild(n).getChild(Ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(ne(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Se(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?uo:this.priorityNode_;return new Fe(s,o,i)}}updateChild(e,n){const r=Ce(e);if(r===null)return n;{ne(Ce(e)!==".priority"||Qr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Ke(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Ht,(o,a)=>{n[o]=a.val(e),r++,i&&Fe.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+gA(this.getPriority().val())+":"),this.forEachChild(Ht,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Hw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Se(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Se(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Se.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Se.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===wa?-1:0}withIndex(e){if(e===fi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Fe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ht),s=n.getIterator(Ht);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fi?null:this.indexMap_.get(e.toString())}}Fe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class HV extends Fe{constructor(){super(new nn(Zd),Fe.EMPTY_NODE,ar.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Fe.EMPTY_NODE}isEmpty(){return!1}}const wa=new HV;Object.defineProperties(Se,{MIN:{value:new Se(Pi,Fe.EMPTY_NODE)},MAX:{value:new Se(Os,wa)}});mA.__EMPTY_NODE=Fe.EMPTY_NODE;mt.__childrenNodeConstructor=Fe;VV(wa);$V(wa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qV=!0;function $t(t,e=null){if(t===null)return Fe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new mt(n,$t(e))}if(!(t instanceof Array)&&qV){const n=[];let r=!1;if(yn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=$t(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Se(o,l)))}}),n.length===0)return Fe.EMPTY_NODE;const i=Jl(n,FV,o=>o.name,Zd);if(r){const o=Jl(n,Ht.getCompare());return new Fe(i,$t(e),new ar({".priority":o},{".priority":Ht}))}else return new Fe(i,$t(e),ar.Default)}else{let n=Fe.EMPTY_NODE;return yn(t,(r,s)=>{if(yr(t,r)&&r.substring(0,1)!=="."){const i=$t(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority($t(e))}}UV($t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV extends eu{constructor(e){super(),this.indexPath_=e,ne(!be(e)&&Ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?ji(e.name,n.name):i}makePost(e,n){const r=$t(e),s=Fe.EMPTY_NODE.updateChild(this.indexPath_,r);return new Se(n,s)}maxPost(){const e=Fe.EMPTY_NODE.updateChild(this.indexPath_,wa);return new Se(Os,e)}toString(){return fA(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV extends eu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ji(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Se.MIN}maxPost(){return Se.MAX}makePost(e,n){const r=$t(e);return new Se(n,r)}toString(){return".value"}}const zV=new KV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YV(t){return{type:"value",snapshotNode:t}}function QV(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function XV(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Py(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function JV(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ht}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pi}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Os}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ht}copy(){const e=new ep;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ny(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ht?n="$priority":t.index_===zV?n="$value":t.index_===fi?n="$key":(ne(t.index_ instanceof GV,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ct(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ct(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ct(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ct(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ct(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ky(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ht&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends cA{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ta("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Zl.getListenId_(e,r),a={};this.listens_[o]=a;const l=Ny(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,r),vi(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",s(p,null)}})}unlisten(e,n){const r=Zl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ny(e._queryParams),r=e._path.toString(),s=new Ko;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Di(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=zo(a.responseText)}catch{hn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&hn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(){this.rootNode_=Fe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(){return{value:null,children:new Map}}function TA(t,e,n){if(be(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ce(e);t.children.has(r)||t.children.set(r,ec());const s=t.children.get(r);e=Ke(e),TA(s,e,n)}}function rf(t,e,n){t.value!==null?n(e,t.value):eU(t,(r,s)=>{const i=new Xe(e.toString()+"/"+r);rf(s,i,n)})}function eU(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&yn(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=10*1e3,nU=30*1e3,rU=5*60*1e3;class sU{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tU(e);const r=Oy+(nU-Oy)*Math.random();Mo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;yn(e,(s,i)=>{i>0&&yr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Mo(this.reportStats_.bind(this),Math.floor(Math.random()*2*rU))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Vn||(Vn={}));function IA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function AA(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Vn.ACK_USER_WRITE,this.source=IA()}operationForChild(e){if(be(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Xe(e));return new tc(Be(),n,this.revert)}}else return ne(Ce(this.path)===e,"operationForChild called for unrelated child."),new tc(Ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Vn.OVERWRITE}operationForChild(e){return be(this.path)?new Ls(this.source,Be(),this.snap.getImmediateChild(e)):new Ls(this.source,Ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Vn.MERGE}operationForChild(e){if(be(this.path)){const n=this.children.subtree(new Xe(e));return n.isEmpty()?null:n.value?new Ls(this.source,Be(),n.value):new aa(this.source,Be(),n)}else return ne(Ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new aa(this.source,Ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(be(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function iU(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(JV(o.childName,o.snapshotNode))}),ho(t,s,"child_removed",e,r,n),ho(t,s,"child_added",e,r,n),ho(t,s,"child_moved",i,r,n),ho(t,s,"child_changed",e,r,n),ho(t,s,"value",e,r,n),s}function ho(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>aU(t,a,l)),o.forEach(a=>{const l=oU(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function oU(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function aU(t,e,n){if(e.childName==null||n.childName==null)throw Li("Should only compare child_ events.");const r=new Se(e.childName,e.snapshotNode),s=new Se(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t,e){return{eventCache:t,serverCache:e}}function xo(t,e,n,r){return bA(new tp(e,n,r),t.serverCache)}function RA(t,e,n,r){return bA(t.eventCache,new tp(e,n,r))}function sf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ds(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu;const lU=()=>(Xu||(Xu=new nn(KF)),Xu);class Ge{constructor(e,n=lU()){this.value=e,this.children=n}static fromObject(e){let n=new Ge(null);return yn(e,(r,s)=>{n=n.set(new Xe(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Be(),value:this.value};if(be(e))return null;{const r=Ce(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Ke(e),n);return i!=null?{path:vt(new Xe(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(be(e))return this;{const n=Ce(e),r=this.children.get(n);return r!==null?r.subtree(Ke(e)):new Ge(null)}}set(e,n){if(be(e))return new Ge(n,this.children);{const r=Ce(e),i=(this.children.get(r)||new Ge(null)).set(Ke(e),n),o=this.children.insert(r,i);return new Ge(this.value,o)}}remove(e){if(be(e))return this.children.isEmpty()?new Ge(null):new Ge(null,this.children);{const n=Ce(e),r=this.children.get(n);if(r){const s=r.remove(Ke(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ge(null):new Ge(this.value,i)}else return this}}get(e){if(be(e))return this.value;{const n=Ce(e),r=this.children.get(n);return r?r.get(Ke(e)):null}}setTree(e,n){if(be(e))return n;{const r=Ce(e),i=(this.children.get(r)||new Ge(null)).setTree(Ke(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ge(this.value,o)}}fold(e){return this.fold_(Be(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(vt(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Be(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(be(e))return null;{const i=Ce(e),o=this.children.get(i);return o?o.findOnPath_(Ke(e),vt(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Be(),n)}foreachOnPath_(e,n,r){if(be(e))return this;{this.value&&r(n,this.value);const s=Ce(e),i=this.children.get(s);return i?i.foreachOnPath_(Ke(e),vt(n,s),r):new Ge(null)}}foreach(e){this.foreach_(Be(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(vt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.writeTree_=e}static empty(){return new Pn(new Ge(null))}}function Fo(t,e,n){if(be(e))return new Pn(new Ge(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=_n(s,e);return i=i.updateChild(o,n),new Pn(t.writeTree_.set(s,i))}else{const s=new Ge(n),i=t.writeTree_.setTree(e,s);return new Pn(i)}}}function Ly(t,e,n){let r=t;return yn(n,(s,i)=>{r=Fo(r,vt(e,s),i)}),r}function Dy(t,e){if(be(e))return Pn.empty();{const n=t.writeTree_.setTree(e,new Ge(null));return new Pn(n)}}function of(t,e){return $s(t,e)!=null}function $s(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(_n(n.path,e)):null}function My(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ht,(r,s)=>{e.push(new Se(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Se(r,s.value))}),e}function Wr(t,e){if(be(e))return t;{const n=$s(t,e);return n!=null?new Pn(new Ge(n)):new Pn(t.writeTree_.subtree(e))}}function af(t){return t.writeTree_.isEmpty()}function Ni(t,e){return CA(Be(),t.writeTree_,e)}function CA(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(ne(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=CA(vt(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(vt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t,e){return LA(e,t)}function cU(t,e,n,r,s){ne(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Fo(t.visibleWrites,e,n)),t.lastWriteId=r}function uU(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function hU(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);ne(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&fU(a,r.path)?s=!1:Rn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return dU(t),!0;if(r.snap)t.visibleWrites=Dy(t.visibleWrites,r.path);else{const a=r.children;yn(a,l=>{t.visibleWrites=Dy(t.visibleWrites,vt(r.path,l))})}return!0}else return!1}function fU(t,e){if(t.snap)return Rn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Rn(vt(t.path,n),e))return!0;return!1}function dU(t){t.visibleWrites=PA(t.allWrites,pU,Be()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pU(t){return t.visible}function PA(t,e,n){let r=Pn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)Rn(n,o)?(a=_n(n,o),r=Fo(r,a,i.snap)):Rn(o,n)&&(a=_n(o,n),r=Fo(r,Be(),i.snap.getChild(a)));else if(i.children){if(Rn(n,o))a=_n(n,o),r=Ly(r,a,i.children);else if(Rn(o,n))if(a=_n(o,n),be(a))r=Ly(r,Be(),i.children);else{const l=vi(i.children,Ce(a));if(l){const u=l.getChild(Ke(a));r=Fo(r,Be(),u)}}}else throw Li("WriteRecord should have .snap or .children")}}return r}function NA(t,e,n,r,s){if(!r&&!s){const i=$s(t.visibleWrites,e);if(i!=null)return i;{const o=Wr(t.visibleWrites,e);if(af(o))return n;if(n==null&&!of(o,Be()))return null;{const a=n||Fe.EMPTY_NODE;return Ni(o,a)}}}else{const i=Wr(t.visibleWrites,e);if(!s&&af(i))return n;if(!s&&n==null&&!of(i,Be()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(Rn(u.path,e)||Rn(e,u.path))},a=PA(t.allWrites,o,e),l=n||Fe.EMPTY_NODE;return Ni(a,l)}}}function _U(t,e,n){let r=Fe.EMPTY_NODE;const s=$s(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ht,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Wr(t.visibleWrites,e);return n.forEachChild(Ht,(o,a)=>{const l=Ni(Wr(i,new Xe(o)),a);r=r.updateImmediateChild(o,l)}),My(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Wr(t.visibleWrites,e);return My(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function mU(t,e,n,r,s){ne(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=vt(e,n);if(of(t.visibleWrites,i))return null;{const o=Wr(t.visibleWrites,i);return af(o)?s.getChild(n):Ni(o,s.getChild(n))}}function gU(t,e,n,r){const s=vt(e,n),i=$s(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Wr(t.visibleWrites,s);return Ni(o,r.getNode().getImmediateChild(n))}else return null}function yU(t,e){return $s(t.visibleWrites,e)}function vU(t,e,n,r,s,i,o){let a;const l=Wr(t.visibleWrites,e),u=$s(l,Be());if(u!=null)a=u;else if(n!=null)a=Ni(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),p=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=p.getNext();for(;m&&h.length<s;)d(m,r)!==0&&h.push(m),m=p.getNext();return h}else return[]}function EU(){return{visibleWrites:Pn.empty(),allWrites:[],lastWriteId:-1}}function lf(t,e,n,r){return NA(t.writeTree,t.treePath,e,n,r)}function kA(t,e){return _U(t.writeTree,t.treePath,e)}function xy(t,e,n,r){return mU(t.writeTree,t.treePath,e,n,r)}function nc(t,e){return yU(t.writeTree,vt(t.treePath,e))}function TU(t,e,n,r,s,i){return vU(t.writeTree,t.treePath,e,n,r,s,i)}function np(t,e,n){return gU(t.writeTree,t.treePath,e,n)}function OA(t,e){return LA(vt(t.treePath,e),t.writeTree)}function LA(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IU{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;ne(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),ne(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Py(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,XV(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,QV(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Py(r,e.snapshotNode,s.oldSnap));else throw Li("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wU{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const DA=new wU;class rp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new tp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return np(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ds(this.viewCache_),i=TU(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function AU(t,e){ne(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function bU(t,e,n,r,s){const i=new IU;let o,a;if(n.type===Vn.OVERWRITE){const u=n;u.source.fromUser?o=cf(t,e,u.path,u.snap,r,s,i):(ne(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!be(u.path),o=rc(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===Vn.MERGE){const u=n;u.source.fromUser?o=CU(t,e,u.path,u.children,r,s,i):(ne(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=uf(t,e,u.path,u.children,r,s,a,i))}else if(n.type===Vn.ACK_USER_WRITE){const u=n;u.revert?o=NU(t,e,u.path,r,s,i):o=SU(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===Vn.LISTEN_COMPLETE)o=PU(t,e,n.path,r,i);else throw Li("Unknown operation type: "+n.type);const l=i.getChanges();return RU(e,o,l),{viewCache:o,changes:l}}function RU(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=sf(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(YV(sf(e)))}}function MA(t,e,n,r,s,i){const o=e.eventCache;if(nc(r,n)!=null)return e;{let a,l;if(be(n))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ds(e),h=u instanceof Fe?u:Fe.EMPTY_NODE,d=kA(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=lf(r,Ds(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Ce(n);if(u===".priority"){ne(Qr(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=xy(r,n,h,l);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=Ke(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const p=xy(r,n,o.getNode(),l);p!=null?d=o.getNode().getImmediateChild(u).updateChild(h,p):d=o.getNode().getImmediateChild(u)}else d=np(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,h,s,i):a=o.getNode()}}return xo(e,a,o.isFullyInitialized()||be(n),t.filter.filtersNodes())}}function rc(t,e,n,r,s,i,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(be(n))u=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=h.updateFullNode(l.getNode(),m,null)}else{const m=Ce(n);if(!l.isCompleteForPath(n)&&Qr(n)>1)return e;const A=Ke(n),P=l.getNode().getImmediateChild(m).updateChild(A,r);m===".priority"?u=h.updatePriority(l.getNode(),P):u=h.updateChild(l.getNode(),m,P,A,DA,null)}const d=RA(e,u,l.isFullyInitialized()||be(n),h.filtersNodes()),p=new rp(s,d,i);return MA(t,d,n,s,p,a)}function cf(t,e,n,r,s,i,o){const a=e.eventCache;let l,u;const h=new rp(s,e,i);if(be(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=xo(e,u,!0,t.filter.filtersNodes());else{const d=Ce(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=xo(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=Ke(n),m=a.getNode().getImmediateChild(d);let A;if(be(p))A=r;else{const N=h.getCompleteChild(d);N!=null?hA(p)===".priority"&&N.getChild(dA(p)).isEmpty()?A=N:A=N.updateChild(p,r):A=Fe.EMPTY_NODE}if(m.equals(A))l=e;else{const N=t.filter.updateChild(a.getNode(),d,A,p,h,o);l=xo(e,N,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Fy(t,e){return t.eventCache.isCompleteForChild(e)}function CU(t,e,n,r,s,i,o){let a=e;return r.foreach((l,u)=>{const h=vt(n,l);Fy(e,Ce(h))&&(a=cf(t,a,h,u,s,i,o))}),r.foreach((l,u)=>{const h=vt(n,l);Fy(e,Ce(h))||(a=cf(t,a,h,u,s,i,o))}),a}function Vy(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function uf(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;be(n)?u=r:u=new Ge(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,p)=>{if(h.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),A=Vy(t,m,p);l=rc(t,l,new Xe(d),A,s,i,o,a)}}),u.children.inorderTraversal((d,p)=>{const m=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!h.hasChild(d)&&!m){const A=e.serverCache.getNode().getImmediateChild(d),N=Vy(t,A,p);l=rc(t,l,new Xe(d),N,s,i,o,a)}}),l}function SU(t,e,n,r,s,i,o){if(nc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(be(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return rc(t,e,n,l.getNode().getChild(n),s,i,a,o);if(be(n)){let u=new Ge(null);return l.getNode().forEachChild(fi,(h,d)=>{u=u.set(new Xe(h),d)}),uf(t,e,n,u,s,i,a,o)}else return e}else{let u=new Ge(null);return r.foreach((h,d)=>{const p=vt(n,h);l.isCompleteForPath(p)&&(u=u.set(h,l.getNode().getChild(p)))}),uf(t,e,n,u,s,i,a,o)}}function PU(t,e,n,r,s){const i=e.serverCache,o=RA(e,i.getNode(),i.isFullyInitialized()||be(n),i.isFiltered());return MA(t,o,n,r,DA,s)}function NU(t,e,n,r,s,i){let o;if(nc(r,n)!=null)return e;{const a=new rp(r,e,s),l=e.eventCache.getNode();let u;if(be(n)||Ce(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=lf(r,Ds(e));else{const d=e.serverCache.getNode();ne(d instanceof Fe,"serverChildren would be complete if leaf node"),h=kA(r,d)}h=h,u=t.filter.updateFullNode(l,h,i)}else{const h=Ce(n);let d=np(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?u=t.filter.updateChild(l,h,d,Ke(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,Fe.EMPTY_NODE,Ke(n),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=lf(r,Ds(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||nc(r,Be())!=null,xo(e,u,o,t.filter.filtersNodes())}}function kU(t,e){const n=Ds(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!be(e)&&!n.getImmediateChild(Ce(e)).isEmpty())?n.getChild(e):null}function Uy(t,e,n,r){e.type===Vn.MERGE&&e.source.queryId!==null&&(ne(Ds(t.viewCache_),"We should always have a full cache before handling merges"),ne(sf(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=bU(t.processor_,s,e,n,r);return AU(t.processor_,i.viewCache),ne(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,OU(t,i.changes,i.viewCache.eventCache.getNode())}function OU(t,e,n,r){const s=t.eventRegistrations_;return iU(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $y;function LU(t){ne(!$y,"__referenceConstructor has already been defined"),$y=t}function sp(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return ne(i!=null,"SyncTree gave us an op for an invalid query."),Uy(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Uy(o,e,n,r));return i}}function ip(t,e){let n=null;for(const r of t.views.values())n=n||kU(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let By;function DU(t){ne(!By,"__referenceConstructor has already been defined"),By=t}class jy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ge(null),this.pendingWriteTree_=EU(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function MU(t,e,n,r,s){return cU(t.pendingWriteTree_,e,n,r,s),s?nu(t,new Ls(IA(),e,n)):[]}function ri(t,e,n=!1){const r=uU(t.pendingWriteTree_,e);if(hU(t.pendingWriteTree_,e)){let i=new Ge(null);return r.snap!=null?i=i.set(Be(),!0):yn(r.children,o=>{i=i.set(new Xe(o),!0)}),nu(t,new tc(r.path,i,n))}else return[]}function tu(t,e,n){return nu(t,new Ls(wA(),e,n))}function xU(t,e,n){const r=Ge.fromObject(n);return nu(t,new aa(wA(),e,r))}function FU(t,e,n,r){const s=UA(t,r);if(s!=null){const i=$A(s),o=i.path,a=i.queryId,l=_n(o,e),u=new Ls(AA(a),l,n);return BA(t,o,u)}else return[]}function VU(t,e,n,r){const s=UA(t,r);if(s){const i=$A(s),o=i.path,a=i.queryId,l=_n(o,e),u=Ge.fromObject(n),h=new aa(AA(a),l,u);return BA(t,o,h)}else return[]}function xA(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=_n(o,e),u=ip(a,l);if(u)return u});return NA(s,e,i,n,!0)}function nu(t,e){return FA(e,t.syncPointTree_,null,SA(t.pendingWriteTree_,Be()))}function FA(t,e,n,r){if(be(t.path))return VA(t,e,n,r);{const s=e.get(Be());n==null&&s!=null&&(n=ip(s,Be()));let i=[];const o=Ce(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=OA(r,o);i=i.concat(FA(a,l,u,h))}return s&&(i=i.concat(sp(s,t,r,n))),i}}function VA(t,e,n,r){const s=e.get(Be());n==null&&s!=null&&(n=ip(s,Be()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=OA(r,o),h=t.operationForChild(o);h&&(i=i.concat(VA(h,a,l,u)))}),s&&(i=i.concat(sp(s,t,r,n))),i}function UA(t,e){return t.tagToQueryMap.get(e)}function $A(t){const e=t.indexOf("$");return ne(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Xe(t.substr(0,e))}}function BA(t,e,n){const r=t.syncPointTree_.get(e);ne(r,"Missing sync point for query tag that we're tracking");const s=SA(t.pendingWriteTree_,e);return sp(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new op(n)}node(){return this.node_}}class ap{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=vt(this.path_,e);return new ap(this.syncTree_,n)}node(){return xA(this.syncTree_,this.path_)}}const UU=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Wy=function(t,e,n){if(!t||typeof t!="object")return t;if(ne(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return $U(t[".sv"],e,n);if(typeof t[".sv"]=="object")return BU(t[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},$U=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:ne(!1,"Unexpected server value: "+t)}},BU=function(t,e,n){t.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&ne(!1,"Unexpected increment value: "+r);const s=e.node();if(ne(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},jU=function(t,e,n,r){return lp(e,new ap(n,t),r)},WU=function(t,e,n){return lp(t,new op(e),n)};function lp(t,e,n){const r=t.getPriority().val(),s=Wy(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Wy(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new mt(a,$t(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new mt(s))),o.forEachChild(Ht,(a,l)=>{const u=lp(l,e.getImmediateChild(a),n);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function up(t,e){let n=e instanceof Xe?e:new Xe(e),r=t,s=Ce(n);for(;s!==null;){const i=vi(r.node.children,s)||{children:{},childCount:0};r=new cp(s,r,i),n=Ke(n),s=Ce(n)}return r}function Wi(t){return t.node.value}function jA(t,e){t.node.value=e,hf(t)}function WA(t){return t.node.childCount>0}function HU(t){return Wi(t)===void 0&&!WA(t)}function ru(t,e){yn(t.node.children,(n,r)=>{e(new cp(n,t,r))})}function HA(t,e,n,r){n&&!r&&e(t),ru(t,s=>{HA(s,e,!0,r)}),n&&r&&e(t)}function qU(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Aa(t){return new Xe(t.parent===null?t.name:Aa(t.parent)+"/"+t.name)}function hf(t){t.parent!==null&&GU(t.parent,t.name,t)}function GU(t,e,n){const r=HU(n),s=yr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,hf(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,hf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KU=/[\[\].#$\/\u0000-\u001F\u007F]/,zU=/[\[\].#$\u0000-\u001F\u007F]/,Ju=10*1024*1024,qA=function(t){return typeof t=="string"&&t.length!==0&&!KU.test(t)},YU=function(t){return typeof t=="string"&&t.length!==0&&!zU.test(t)},QU=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),YU(t)},GA=function(t,e,n){const r=n instanceof Xe?new PV(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ps(r));if(typeof e=="function")throw new Error(t+"contains a function "+ps(r)+" with contents = "+e.toString());if(qw(e))throw new Error(t+"contains "+e.toString()+" "+ps(r));if(typeof e=="string"&&e.length>Ju/3&&Pc(e)>Ju)throw new Error(t+"contains a string greater than "+Ju+" utf8 bytes "+ps(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(yn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!qA(o)))throw new Error(t+" contains an invalid key ("+o+") "+ps(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);NV(r,o),GA(t,a,r),kV(r)}),s&&i)throw new Error(t+' contains ".value" child '+ps(r)+" in addition to actual children.")}},XU=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qA(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!QU(n))throw new Error(AN(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ZU(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!pA(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Bs(t,e,n){ZU(t,n),e2(t,r=>Rn(r,e)||Rn(e,r))}function e2(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(t2(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function t2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Do&&Ut("event: "+n.toString()),Ia(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2="repo_interrupt",r2=25;class s2{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new JU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ec(),this.transactionQueueTree_=new cp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function i2(t,e,n){if(t.stats_=Qd(t.repoInfo_),t.forceRestClient_||ZF())t.server_=new Zl(t.repoInfo_,(r,s,i,o)=>{Hy(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>qy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ct(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new hr(t.repoInfo_,e,(r,s,i,o)=>{Hy(t,r,s,i,o)},r=>{qy(t,r)},r=>{a2(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=iV(t.repoInfo_,()=>new sU(t.stats_,t.server_)),t.infoData_=new ZV,t.infoSyncTree_=new jy({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=tu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),hp(t,"connected",!1),t.serverSyncTree_=new jy({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);Bs(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function o2(t){const n=t.infoData_.getNode(new Xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function KA(t){return UU({timestamp:o2(t)})}function Hy(t,e,n,r,s){t.dataUpdateCount++;const i=new Xe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Ll(n,u=>$t(u));o=VU(t.serverSyncTree_,i,l,s)}else{const l=$t(n);o=FU(t.serverSyncTree_,i,l,s)}else if(r){const l=Ll(n,u=>$t(u));o=xU(t.serverSyncTree_,i,l)}else{const l=$t(n);o=tu(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=dp(t,i)),Bs(t.eventQueue_,a,o)}function qy(t,e){hp(t,"connected",e),e===!1&&c2(t)}function a2(t,e){yn(e,(n,r)=>{hp(t,n,r)})}function hp(t,e,n){const r=new Xe("/.info/"+e),s=$t(n);t.infoData_.updateSnapshot(r,s);const i=tu(t.infoSyncTree_,r,s);Bs(t.eventQueue_,r,i)}function l2(t){return t.nextWriteId_++}function c2(t){zA(t,"onDisconnectEvents");const e=KA(t),n=ec();rf(t.onDisconnect_,Be(),(s,i)=>{const o=jU(s,i,t.serverSyncTree_,e);TA(n,s,o)});let r=[];rf(n,Be(),(s,i)=>{r=r.concat(tu(t.serverSyncTree_,s,i));const o=d2(t,s);dp(t,o)}),t.onDisconnect_=ec(),Bs(t.eventQueue_,Be(),r)}function u2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(n2)}function zA(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ut(n,...e)}function YA(t,e,n){return xA(t.serverSyncTree_,e,n)||Fe.EMPTY_NODE}function fp(t,e=t.transactionQueueTree_){if(e||su(t,e),Wi(e)){const n=XA(t,e);ne(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&h2(t,Aa(e),n)}else WA(e)&&ru(e,n=>{fp(t,n)})}function h2(t,e,n){const r=n.map(u=>u.currentWriteId),s=YA(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];ne(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=_n(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,u=>{zA(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(ri(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&d.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();su(t,up(t.transactionQueueTree_,e)),fp(t,t.transactionQueueTree_),Bs(t.eventQueue_,e,h);for(let p=0;p<d.length;p++)Ia(d[p])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{hn("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}dp(t,e)}},o)}function dp(t,e){const n=QA(t,e),r=Aa(n),s=XA(t,n);return f2(t,s,r),r}function f2(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=_n(n,l.path);let h=!1,d;if(ne(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,s=s.concat(ri(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=r2)h=!0,d="maxretry",s=s.concat(ri(t.serverSyncTree_,l.currentWriteId,!0));else{const p=YA(t,l.path,o);l.currentInputSnapshot=p;const m=e[a].update(p.val());if(m!==void 0){GA("transaction failed: Data returned ",m,l.path);let A=$t(m);typeof m=="object"&&m!=null&&yr(m,".priority")||(A=A.updatePriority(p.getPriority()));const P=l.currentWriteId,V=KA(t),B=WU(A,p,V);l.currentOutputSnapshotRaw=A,l.currentOutputSnapshotResolved=B,l.currentWriteId=l2(t),o.splice(o.indexOf(P),1),s=s.concat(MU(t.serverSyncTree_,l.path,B,l.currentWriteId,l.applyLocally)),s=s.concat(ri(t.serverSyncTree_,P,!0))}else h=!0,d="nodata",s=s.concat(ri(t.serverSyncTree_,l.currentWriteId,!0))}Bs(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}su(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ia(r[a]);fp(t,t.transactionQueueTree_)}function QA(t,e){let n,r=t.transactionQueueTree_;for(n=Ce(e);n!==null&&Wi(r)===void 0;)r=up(r,n),e=Ke(e),n=Ce(e);return r}function XA(t,e){const n=[];return JA(t,e,n),n.sort((r,s)=>r.order-s.order),n}function JA(t,e,n){const r=Wi(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);ru(e,s=>{JA(t,s,n)})}function su(t,e){const n=Wi(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,jA(e,n.length>0?n:void 0)}ru(e,r=>{su(t,r)})}function d2(t,e){const n=Aa(QA(t,e)),r=up(t.transactionQueueTree_,e);return qU(r,s=>{Zu(t,s)}),Zu(t,r),HA(r,s=>{Zu(t,s)}),n}function Zu(t,e){const n=Wi(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(ne(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(ne(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ri(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?jA(e,void 0):n.length=i+1,Bs(t.eventQueue_,Aa(e),s);for(let o=0;o<r.length;o++)Ia(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function _2(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):hn(`Invalid query segment '${n}' in query '${t}'`)}return e}const Gy=function(t,e){const n=m2(t),r=n.namespace;n.domain==="firebase.com"&&ks(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ks("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||qF();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new nV(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Xe(n.pathString)}},m2=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(s=p2(t.substring(h,d)));const p=_2(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const A=e.indexOf(".");r=e.substring(0,A).toLowerCase(),n=e.substring(A+1),i=r}"ns"in p&&(i=p.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return be(this._path)?null:hA(this._path)}get ref(){return new Hi(this._repo,this._path)}get _queryIdentifier(){const e=ky(this._queryParams),n=zd(e);return n==="{}"?"default":n}get _queryObject(){return ky(this._queryParams)}isEqual(e){if(e=wt(e),!(e instanceof pp))return!1;const n=this._repo===e._repo,r=pA(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+SV(this._path)}}class Hi extends pp{constructor(e,n){super(e,n,new ep,!1)}get parent(){const e=dA(this._path);return e===null?null:new Hi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}LU(Hi);DU(Hi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2="FIREBASE_DATABASE_EMULATOR_HOST",ff={};let y2=!1;function v2(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||ks("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ut("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Gy(i,s),a=o.repoInfo,l;typeof process<"u"&&fy&&(l=fy[g2]),l?(i=`http://${l}?ns=${a.namespace}`,o=Gy(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new tV(t.name,t.options,e);XU("Invalid Firebase Database URL",o),be(o.path)||ks("Database URL must point to the root of a Firebase Database (not including a child path).");const h=T2(a,t,u,new eV(t.name,n));return new I2(h,t)}function E2(t,e){const n=ff[e];(!n||n[t.key]!==t)&&ks(`Database ${e}(${t.repoInfo_}) has already been deleted.`),u2(t),delete n[t.key]}function T2(t,e,n,r){let s=ff[e.name];s||(s={},ff[e.name]=s);let i=s[t.toURLString()];return i&&ks("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new s2(t,y2,n,r),s[t.toURLString()]=i,i}class I2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(i2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Hi(this._repo,Be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(E2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ks("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w2(t){UF(ns),sn(new Jt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return v2(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Nt(dy,py,t),Nt(dy,py,"esm2017")}hr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};hr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};w2();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA="firebasestorage.googleapis.com",A2="storageBucket",b2=2*60*1e3,R2=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends vn{constructor(e,n,r=0){super(eh(e),`Firebase Storage: ${n} (${eh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Kn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return eh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Gn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Gn||(Gn={}));function eh(t){return"storage/"+t}function C2(){const t="An unknown error occurred, please check the error payload for server response.";return new Kn(Gn.UNKNOWN,t)}function S2(){return new Kn(Gn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function P2(){return new Kn(Gn.CANCELED,"User canceled the upload/download.")}function N2(t){return new Kn(Gn.INVALID_URL,"Invalid URL '"+t+"'.")}function k2(t){return new Kn(Gn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ky(t){return new Kn(Gn.INVALID_ARGUMENT,t)}function eb(){return new Kn(Gn.APP_DELETED,"The Firebase app was deleted.")}function O2(t){return new Kn(Gn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Cn.makeFromUrl(e,n)}catch{return new Cn(e,"")}if(r.path==="")return r;throw k2(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${h}/b/${s}/o${p}`,"i"),A={bucket:1,path:3},N=n===ZA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",V=new RegExp(`^https?://${N}/${s}/${P}`,"i"),C=[{regex:a,indices:l,postModify:i},{regex:m,indices:A,postModify:u},{regex:V,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<C.length;L++){const j=C[L],M=j.regex.exec(e);if(M){const I=M[j.indices.bucket];let g=M[j.indices.path];g||(g=""),r=new Cn(I,g),j.postModify(r);break}}if(r==null)throw N2(e);return r}}class L2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...P){u||(u=!0,e.apply(null,P))}function d(P){s=setTimeout(()=>{s=null,t(m,l())},P)}function p(){i&&clearTimeout(i)}function m(P,...V){if(u){p();return}if(P){p(),h.call(null,P,...V);return}if(l()||o){p(),h.call(null,P,...V);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,d(C)}let A=!1;function N(P){A||(A=!0,p(),!u&&(s!==null?(P||(a=2),clearTimeout(s),d(0)):P||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function M2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x2(t){return t!==void 0}function zy(t,e,n,r){if(r<e)throw Ky(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ky(`Invalid value for '${t}'. Expected ${n} or less.`)}function F2(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(sc||(sc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n,r,s,i,o,a,l,u,h,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,A)=>{this.resolve_=m,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ol(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===sc.NO_ERROR,l=i.getStatus();if(!a||V2(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===sc.ABORT;r(!1,new ol(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ol(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());x2(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=C2();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?eb():P2();o(l)}else{const l=S2();o(l)}};this.canceled_?n(!1,new ol(!1,null,!0)):this.backoffId_=D2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&M2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ol{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function B2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function j2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function W2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function H2(t,e,n,r,s,i,o=!0){const a=F2(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return j2(u,e),$2(u,n),B2(u,i),W2(u,r),new U2(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function G2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n){this._service=e,n instanceof Cn?this._location=n:this._location=Cn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ic(e,n)}get root(){const e=new Cn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return G2(this._location.path)}get storage(){return this._service}get parent(){const e=q2(this._location.path);if(e===null)return null;const n=new Cn(this._location.bucket,e);return new ic(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw O2(e)}}function Yy(t,e){const n=e==null?void 0:e[A2];return n==null?null:Cn.makeFromBucketSpec(n,t)}class K2{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ZA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=b2,this._maxUploadRetryTime=R2,this._requests=new Set,s!=null?this._bucket=Cn.makeFromBucketSpec(s,this._host):this._bucket=Yy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Cn.makeFromBucketSpec(this._url,e):this._bucket=Yy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ic(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new L2(eb());{const o=H2(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Qy="@firebase/storage",Xy="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2="storage";function Y2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new K2(n,r,s,e,ns)}function Q2(){sn(new Jt(z2,Y2,"PUBLIC").setMultipleInstances(!0)),Nt(Qy,Xy,""),Nt(Qy,Xy,"esm2017")}Q2();const th=new WeakMap;function tb(t,e){return th.has(e)||th.set(e,{f:{},r:{},s:{},u:{}}),th.get(e)}function X2(t,e,n,r){if(!t)return n;const[s,i]=nb(t);if(!s)return n;const o=tb(void 0,r)[s]||{},a=e||i;return a&&a in o?o[a]:n}function J2(t,e,n,r){if(!t)return;const[s,i]=nb(t);if(!s)return;const o=tb(void 0,r)[s],a=e||i;if(a)return n.then(l=>{o[a]=l}).catch(Fn),a}function nb(t){return SF(t)||PF(t)?["f",t.path]:NF(t)?["r",t.toString()]:kF(t)?["s",t.toString()]:[]}const nh=new WeakMap;function Z2(t,e,n){const r=Zc();nh.has(r)||nh.set(r,new Map);const s=nh.get(r),i=J2(e,n,t,r);return i&&s.set(i,t),i?()=>s.delete(i):Fn}const e$={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function df(t,e,n,r){if(!RF(t))return[t,{}];const s=[{},{}],i=Object.keys(n).reduce((a,l)=>{const u=n[l];return a[u.path]=u.data(),a},{});function o(a,l,u,h){l=l||{};const[d,p]=h;Object.getOwnPropertyNames(a).forEach(m=>{const A=Object.getOwnPropertyDescriptor(a,m);A&&!A.enumerable&&Object.defineProperty(d,m,A)});for(const m in a){const A=a[m];if(A==null||A instanceof Date||A instanceof lt||A instanceof zc)d[m]=A;else if(Kd(A)){const N=u+m;d[m]=N in n?l[m]:A.path,p[N]=A.converter?A:A.withConverter(r.converter)}else if(Array.isArray(A)){d[m]=Array(A.length);for(let N=0;N<A.length;N++){const P=A[N];P&&P.path in i&&(d[m][N]=i[P.path])}o(A,l[m]||d[m],u+m+".",[d[m],p])}else Us(A)?(d[m]={},o(A,l[m],u+m+".",[d[m],p])):d[m]=A}}return o(t,e,"",s),s}const _p={reset:!1,wait:!0,maxRefDepth:2,converter:e$,snapshotOptions:{serverTimestamps:"estimate"}};function oc(t){for(const e in t)t[e].unsub()}function pf(t,e,n,r,s,i,o,a,l){const[u,h]=df(r.data(t.snapshotOptions),Gd(e,n),s,t);i.set(e,n,u),_f(t,e,n,s,h,i,o,a,l)}function t$({ref:t,target:e,path:n,depth:r,resolve:s,reject:i,ops:o},a){const l=Object.create(null);let u=Fn;return a.once?ow(t).then(h=>{h.exists()?pf(a,e,n,h,l,o,r,s,i):(o.set(e,n,null),s())}).catch(i):u=Md(t,h=>{h.exists()?pf(a,e,n,h,l,o,r,s,i):(o.set(e,n,null),s())},i),()=>{u(),oc(l)}}function _f(t,e,n,r,s,i,o,a,l){const u=Object.keys(s);if(Object.keys(r).filter(N=>u.indexOf(N)<0).forEach(N=>{r[N].unsub(),delete r[N]}),!u.length||++o>t.maxRefDepth)return a(n);let d=0;const p=u.length,m=Object.create(null);function A(N){N in m&&++d>=p&&a(n)}u.forEach(N=>{const P=r[N],V=s[N],B=`${n}.${N}`;if(m[B]=!0,P)if(P.path!==V.path)P.unsub();else return;r[N]={data:()=>Gd(e,B),unsub:t$({ref:V,target:e,path:B,depth:o,ops:i,resolve:A.bind(null,B),reject:l},t),path:V.path}})}function n$(t,e,n,r,s,i){const o=Object.assign({},_p,i),{snapshotListenOptions:a,snapshotOptions:l,wait:u,once:h}=o,d="value";let p=tn(u?[]:t.value);u||n.set(t,d,[]);const m=r;let A,N=Fn;const P=[],V={added:({newIndex:C,doc:L})=>{P.splice(C,0,Object.create(null));const j=P[C],[M,I]=df(L.data(l),void 0,j,o);n.add(tr(p),C,M),_f(o,p,`${d}.${C}`,j,I,n,0,r.bind(null,L),s)},modified:({oldIndex:C,newIndex:L,doc:j})=>{const M=tr(p),I=P[C],g=M[C],[T,S]=df(j.data(l),g,I,o);P.splice(L,0,I),n.remove(M,C),n.add(M,L,T),_f(o,p,`${d}.${L}`,I,S,n,0,r,s)},removed:({oldIndex:C})=>{const L=tr(p);n.remove(L,C),oc(P.splice(C,1)[0])}};function B(C){const L=C.docChanges(a);if(!A&&L.length){A=!0;let j=0;const M=L.length,I=Object.create(null);for(let g=0;g<M;g++)I[L[g].doc.id]=!0;r=g=>{g&&g.id in I&&++j>=M&&(u&&(n.set(t,d,tr(p)),p=t),m(tr(p)),r=Fn)}}L.forEach(j=>{V[j.type](j)}),L.length||(u&&(n.set(t,d,tr(p)),p=t),r(tr(p)))}return h?oM(e).then(B).catch(s):N=Md(e,B,s),C=>{if(N(),C){const L=typeof C=="function"?C():[];n.set(t,d,L)}P.forEach(oc)}}function r$(t,e,n,r,s,i){const o=Object.assign({},_p,i),a="value",l=Object.create(null);r=OF(r,()=>Gd(t,a));let u=Fn;function h(d){d.exists()?pf(o,t,a,d,l,n,0,r,s):(n.set(t,a,null),r(null))}return o.once?ow(e).then(h).catch(s):u=Md(e,h,s),d=>{if(u(),d){const p=typeof d=="function"?d():null;n.set(t,a,p)}oc(l)}}const Jy=Symbol();function s$(t,e){let n=Fn;const r=Object.assign({},_p,e),s=tr(t),i=r.target||tn();DF()&&(r.once=!0);const o=X2(s,r.ssrKey,Jy,Zc()),a=o!==Jy;a&&(i.value=o);let l=!a;const u=tn(!1),h=tn(),d=_c(),p=cv();let m=Fn;function A(){let V=tr(t);const B=new Promise((C,L)=>{if(n(r.reset),!V)return n=Fn,C(null);u.value=l,l=!0,V.converter||(V=V.withConverter(r.converter)),n=(Kd(V)?r$:n$)(i,V,i$,C,L,r)}).catch(C=>(d.value===B&&(h.value=C),Promise.reject(C))).finally(()=>{d.value===B&&(u.value=!1)});d.value=B}let N=Fn;(It(t)||typeof t=="function")&&(N=Vr(t,A)),A(),s&&(m=Z2(d.value,s,r.ssrKey)),fr()&&Vv(()=>d.value),p&&$b(P);function P(V=r.reset){N(),m(),n(V)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>d},stop:{get:()=>P}})}const i$={set:(t,e,n)=>AF(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function H$(t,e){return s$(t,{target:tn([]),...e})}function q$(t){return KI(Zc(t))}function o$(t){return l$({initialUser:t,dependencies:{popupRedirectResolver:zx,persistence:[ix,KM,Ow]}})}const a$=Symbol("VueFireAuth");function l$({dependencies:t,initialUser:e}){return(n,r)=>{const[s,i]=c$(n,r,e,t);VF(s,i)}}function c$(t,e,n,r,s=FM(t,r)){const i=MF(t,e).run(()=>tn(n));return xF.set(t,i),e.provide(a$,s),[i,s]}function u$(t,{firebaseApp:e,modules:n=[]}){t.provide(Bw,e);for(const r of n)r(e,t)}const h$={copyright:"© Copyright 2024 Liberal Party of Canada. All Rights Reserved. Authorized by the Federal Liberal Agency of Canada, registered agent for the Liberal Party of Canada.",privacy:"Privacy Policy","privacy-link":"https://www.liberal.ca/privacy"},f$={header_1:"20 YEARS",header_2:"WITHOUT PIERRE POILIEVRE IS",header_3:"ENOUGH",ayn_link:"https://action.liberal.ca/fairness-for-every-generation-2024/",ayn_cta:"Add your name",share_cta:"Share"},d$={"countdown-view":{intro:"Since 2004, he's fought to stop marriage equality, increase the retirement age, bring American-style anti union laws to Canada, and make life harder for middle class Canadians.",tunein:"Tune in right here to see Pierre Poilievre's record over the past 20 years."},"countdown-timer":{days:"days",hours:"hours",minutes:"minutes",seconds:"seconds"},footer:h$,banner:f$,"share-drawer":{cta:"Share",title:"Share this on social media and in your group chats.",description:"Select where how you'd like to share it or copy the link directly!",copy:"Copy","copy-success":"Copied!",cancel:"Cancel","social-buttons":{email:"Email"}},"share-message":{text:"20 years without Pierre Poilievre is enough:",url:"https://pierresrecord.ca"},"ranking-view":{intro:"Help us rank the best of Pierre Poilievre's record.",hiw_cta:"HOW DOES IT WORK?",hiw:"Click  🤡🔫 to shoot the clowns, and share them with your friends.",loader:"Hang in there, loading 20 years of Pierre's best moments."},"temp-view":{text:"www.pierresrecord.ca"}},p$={copyright:"© Copyright 2024 Parti libéral du Canada. Tous droits réservés. Autorisé par l’Agence libérale fédérale du Canada, agent enregistré pour le Parti libéral du Canada.",privacy:"Politique de protection des renseignements personnels","privacy-link":" https://liberal.ca/fr/confidentialite/"},_$={header_1:"20 ANS",header_2:"DE PIERRE POILIEVRE C’EST",header_3:"ASSEZ",ayn_link:"https://action.liberal.ca/fr/une-chance-equitable-pour-chaque-generation-2024/",ayn_cta:"Ajoutez votre nom",share_cta:"Partagez"},m$={"countdown-view":{intro:"Depuis 2004, il s’est battu pour empêcher le mariage égalitaire, augmenter l’âge de la retraite, faire adopter au Canada des lois antisyndicales inspirées des États-Unis et rendre la vie plus difficile pour les Canadiennes et les Canadiens de la classe moyenne.",tunein:"Suivez-nous ici pour voir le bilan de Pierre Poilievre au cours de ces 20 dernières années."},"countdown-timer":{days:"jours",hours:"heures",minutes:"minutes",seconds:"secondes"},footer:p$,banner:_$,"share-drawer":{cta:"Partagez",title:"Partagez ceci sur les médias sociaux et dans vos groupes de discussion.",description:"Choisissez comment le partager ou copiez directement le lien!",copy:"Copier","copy-success":"Copié!",cancel:"Annuler","social-buttons":{email:"Courriel"}},"share-message":{text:"20 ans de Pierre Poilievre, c’est assez :",url:"https://lebilandepierre.ca"},"ranking-view":{intro:"Classez les pires moments du bilan de Pierre Poilievre.",hiw_cta:"COMMENT CELA FONCTIONNE-T-IL?",hiw:"Cliquez sur 🤡 pour classer ses pires moments et les partager avec vos amis.",loader:"Patientez. Le chargement des pires moments de Pierre des 20 dernières années est en cours."}},g$={en:d$,fr:m$},rb=jP({locale:"en",legacy:!1,fallbackLocale:"en",messages:g$}),iu=HC(QS);iu.use(rb);iu.use(TE);iu.use(u$,{firebaseApp:xd,modules:[o$()]});iu.mount("#app");export{$$ as $,Wt as A,Pf as B,qr as C,S$ as D,hc as E,ln as F,NR as G,cv as H,$b as I,fc as J,Gf as K,N$ as L,sE as M,uC as N,v$ as O,C$ as P,B$ as Q,j$ as R,V$ as S,P$ as T,W$ as U,I$ as V,w$ as W,k$ as X,q$ as Y,F$ as Z,U$ as _,Df as a,H$ as a0,A$ as a1,b$ as a2,Mf as b,rt as c,la as d,pc as e,lv as f,fr as g,Hn as h,T$ as i,tn as j,Tc as k,E$ as l,hC as m,y$ as n,Fv as o,cC as p,mn as q,R$ as r,ll as s,Eu as t,xr as u,Vr as v,vR as w,Nv as x,di as y,O$ as z};
