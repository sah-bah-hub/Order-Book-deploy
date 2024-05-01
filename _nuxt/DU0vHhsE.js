import{u as q,a as T,V as J,T as G,M as Q,H as X}from"./BvenQELS.js";import{g as Y,h as z,s as Z,i as ee,j as te,k as se,l as re,m as W,n as ae,q as ne,u as E,v as oe,x as ie,y as M,z as x,A as ce,B as le,C as ue,f as de,D as fe,E as he,G as pe,o as B,c as D,b as P,w as N,d as ye,a as b,F as S,r as O,H as _e,I as U,t as L}from"./BVxFu7KM.js";import"./cIhSmrql.js";const K=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ge(r,a){a?a={...K,...a}:a=K;const s=I(a);return s.dispatch(r),s.toString()}const me=Object.freeze(["prototype","__proto__","constructor"]);function I(r){let a="",s=new Map;const t=e=>{a+=e};return{toString(){return a},getContext(){return s},dispatch(e){return r.replacer&&(e=r.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const n=Object.prototype.toString.call(e);let i="";const p=n.length;p<10?i="unknown:["+n+"]":i=n.slice(8,p-1),i=i.toLowerCase();let l=null;if((l=s.get(e))===void 0)s.set(e,s.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](e):r.ignoreUnknown||this.unkown(e,i);else{let c=Object.keys(e);r.unorderedObjects&&(c=c.sort());let o=[];r.respectType!==!1&&!V(e)&&(o=me),r.excludeKeys&&(c=c.filter(u=>!r.excludeKeys(u)),o=o.filter(u=>!r.excludeKeys(u))),t("object:"+(c.length+o.length)+":");const d=u=>{this.dispatch(u),t(":"),r.excludeValues||this.dispatch(e[u]),t(",")};for(const u of c)d(u);for(const u of o)d(u)}},array(e,n){if(n=n===void 0?r.unorderedArrays!==!1:n,t("array:"+e.length+":"),!n||e.length<=1){for(const l of e)this.dispatch(l);return}const i=new Map,p=e.map(l=>{const c=I(r);c.dispatch(l);for(const[o,d]of c.getContext())i.set(o,d);return c.toString()});return s=i,p.sort(),this.array(p,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,n){if(t(n),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),V(e)?this.dispatch("[native]"):this.dispatch(e.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),r.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const n=[...e];return this.array(n,r.unorderedSets!==!1)},set(e){t("set:");const n=[...e];return this.array(n,r.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(r.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const A="[native code] }",be=A.length;function V(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-be)===A}class k{constructor(a,s){a=this.words=a||[],this.sigBytes=s===void 0?a.length*4:s}toString(a){return(a||we).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let s=0;s<a.sigBytes;s++){const t=a.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=t<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<a.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=a.words[s>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new k([...this.words])}}const we={stringify(r){const a=[];for(let s=0;s<r.sigBytes;s++){const t=r.words[s>>>2]>>>24-s%4*8&255;a.push((t>>>4).toString(16),(t&15).toString(16))}return a.join("")}},ve={stringify(r){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let t=0;t<r.sigBytes;t+=3){const e=r.words[t>>>2]>>>24-t%4*8&255,n=r.words[t+1>>>2]>>>24-(t+1)%4*8&255,i=r.words[t+2>>>2]>>>24-(t+2)%4*8&255,p=e<<16|n<<8|i;for(let l=0;l<4&&t*8+l*6<r.sigBytes*8;l++)s.push(a.charAt(p>>>6*(3-l)&63))}return s.join("")}},Be={parse(r){const a=r.length,s=[];for(let t=0;t<a;t++)s[t>>>2]|=(r.charCodeAt(t)&255)<<24-t%4*8;return new k(s,a)}},De={parse(r){return Be.parse(unescape(encodeURIComponent(r)))}};class ke{constructor(){this._data=new k,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new k,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=De.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,s){}_process(a){let s,t=this._data.sigBytes/(this.blockSize*4);a?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,n=Math.min(e*4,this._data.sigBytes);if(e){for(let i=0;i<e;i+=this.blockSize)this._doProcessBlock(this._data.words,i);s=this._data.words.splice(0,e),this._data.sigBytes-=n}return new k(s,n)}}class Se extends ke{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}const $=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Ce=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],C=[];class xe extends Se{constructor(){super(...arguments),this._hash=new k([...$])}reset(){super.reset(),this._hash=new k([...$])}_doProcessBlock(a,s){const t=this._hash.words;let e=t[0],n=t[1],i=t[2],p=t[3],l=t[4],c=t[5],o=t[6],d=t[7];for(let u=0;u<64;u++){if(u<16)C[u]=a[s+u]|0;else{const w=C[u-15],F=(w<<25|w>>>7)^(w<<14|w>>>18)^w>>>3,g=C[u-2],H=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;C[u]=F+C[u-7]+H+C[u-16]}const f=l&c^~l&o,_=e&n^e&i^n&i,y=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),v=(l<<26|l>>>6)^(l<<21|l>>>11)^(l<<7|l>>>25),m=d+v+f+Ce[u]+C[u],h=y+_;d=o,o=c,c=l,l=p+m|0,p=i,i=n,n=e,e=m+h|0}t[0]=t[0]+e|0,t[1]=t[1]+n|0,t[2]=t[2]+i|0,t[3]=t[3]+p|0,t[4]=t[4]+l|0,t[5]=t[5]+c|0,t[6]=t[6]+o|0,t[7]=t[7]+d|0}finalize(a){super.finalize(a);const s=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(t+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Pe(r){return new xe().finalize(r).toString(ve)}function Oe(r,a={}){const s=typeof r=="string"?r:ge(r,a);return Pe(s).slice(0,10)}const ze=r=>r==="defer"||r===!1;function Ne(...r){var _;const a=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(a);let[s,t,e={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=ae(),i=t,p=()=>null,l=()=>n.isHydrating?n.payload.data[s]:n.static.data[s];e.server=e.server??!0,e.default=e.default??p,e.getCachedData=e.getCachedData??l,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??Y.deep,e.dedupe=e.dedupe??"cancel";const c=()=>e.getCachedData(s,n)!=null;if(!n._asyncData[s]||!e.immediate){(_=n.payload._errors)[s]??(_[s]=null);const y=e.deep?z:Z;n._asyncData[s]={data:y(e.getCachedData(s,n)??e.default()),pending:z(!c()),error:ee(n.payload._errors,s),status:z("idle")}}const o={...n._asyncData[s]};o.refresh=o.execute=(y={})=>{if(n._asyncDataPromises[s]){if(ze(y.dedupe??e.dedupe))return n._asyncDataPromises[s];n._asyncDataPromises[s].cancelled=!0}if((y._initial||n.isHydrating&&y._initial!==!1)&&c())return Promise.resolve(e.getCachedData(s,n));o.pending.value=!0,o.status.value="pending";const v=new Promise((m,h)=>{try{m(i(n))}catch(w){h(w)}}).then(async m=>{if(v.cancelled)return n._asyncDataPromises[s];let h=m;e.transform&&(h=await e.transform(m)),e.pick&&(h=Le(h,e.pick)),n.payload.data[s]=h,o.data.value=h,o.error.value=null,o.status.value="success"}).catch(m=>{if(v.cancelled)return n._asyncDataPromises[s];o.error.value=ne(m),o.data.value=E(e.default()),o.status.value="error"}).finally(()=>{v.cancelled||(o.pending.value=!1,delete n._asyncDataPromises[s])});return n._asyncDataPromises[s]=v,n._asyncDataPromises[s]},o.clear=()=>Ue(n,s);const d=()=>o.refresh({_initial:!0}),u=e.server!==!1&&n.payload.serverRendered;{const y=oe();if(y&&!y._nuxtOnBeforeMountCbs){y._nuxtOnBeforeMountCbs=[];const h=y._nuxtOnBeforeMountCbs;te(()=>{h.forEach(w=>{w()}),h.splice(0,h.length)}),se(()=>h.splice(0,h.length))}u&&n.isHydrating&&(o.error.value||c())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):y&&(n.payload.serverRendered&&n.isHydrating||e.lazy)&&e.immediate?y._nuxtOnBeforeMountCbs.push(d):e.immediate&&d();const v=ie();if(e.watch){const h=re(e.watch,()=>o.refresh());v&&W(h)}const m=n.hook("app:data:refresh",async h=>{(!h||h.includes(s))&&await o.refresh()});v&&W(m)}const f=Promise.resolve(n._asyncDataPromises[s]).then(()=>o);return Object.assign(f,o),f}function Ue(r,a){a in r.payload.data&&(r.payload.data[a]=void 0),a in r.payload._errors&&(r.payload._errors[a]=null),r._asyncData[a]&&(r._asyncData[a].data.value=void 0,r._asyncData[a].error.value=null,r._asyncData[a].pending.value=!1,r._asyncData[a].status.value="idle"),a in r._asyncDataPromises&&(r._asyncDataPromises[a].cancelled=!0,r._asyncDataPromises[a]=void 0)}function Le(r,a){const s={};for(const t of a)s[t]=r[t];return s}function Ee(r,a,s){const[t={},e]=[{},a],n=M(()=>x(r)),i=t.key||Oe([e,typeof n.value=="string"?n.value:"",...Fe(t)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const p=i===e?"$f"+i:i;if(!t.baseURL&&typeof n.value=="string"&&n.value[0]==="/"&&n.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:l,lazy:c,default:o,transform:d,pick:u,watch:f,immediate:_,getCachedData:y,deep:v,dedupe:m,...h}=t,w=ce({...le,...h,cache:typeof t.cache=="boolean"?void 0:t.cache}),F={server:l,lazy:c,default:o,transform:d,pick:u,immediate:_,getCachedData:y,deep:v,dedupe:m,watch:f===!1?[]:[w,n,...f||[]]};let g;return Ne(p,()=>{var R;(R=g==null?void 0:g.abort)==null||R.call(g),g=typeof AbortController<"u"?new AbortController:{};const j=x(t.timeout);return j&&setTimeout(()=>g.abort(),j),(t.$fetch||globalThis.$fetch)(n.value,{signal:g.signal,...w})},F)}function Fe(r){var s;const a=[((s=x(r.method))==null?void 0:s.toUpperCase())||"GET",x(r.baseURL)];for(const t of[r.params||r.query]){const e=x(t);if(!e)continue;const n={};for(const[i,p]of Object.entries(e))n[x(i)]=x(p);a.push(n)}return a}const Me=ue("stockOrderStore",()=>{const r=q();let a;const s=c=>({price:Number(c[0]),quantity:Number(c[1]),total:Number(c[0])*Number(c[1])}),t=z({asks:[],bids:[]}),e=z(0),n=async()=>{try{const{data:c}=await Ee(`https://api.binance.com/api/v3/depth?symbol=${r.currentPair}&limit=1000`,"$2ExK9c3ChQ"),o=c.value;e.value=o.lastUpdateId,t.value={asks:o.asks.map(d=>s(d)),bids:o.bids.map(d=>s(d))}}catch(c){console.error("Request error - ",c)}},i=c=>{const o=JSON.parse(c.data);o.U<=e.value||(o.U<=e.value+1&&o.u>=e.value+1&&(t.value={asks:o.a.filter(d=>Number(d[1])!==0).map(d=>s(d)),bids:o.b.filter(d=>Number(d[1])!==0).map(d=>s(d))}),e.value=o.u)};return{getDepth:n,depthData:t,closeWwsConection:()=>{a.close()},openWwsConection:()=>{a=new WebSocket(`wss://stream.binance.com:9443/ws/${r.currentPair.toLocaleLowerCase()}@depth`),a.addEventListener("message",i),a.addEventListener("open",()=>console.log("Connected to WebSocket API Binance")),a.addEventListener("error",c=>console.error("Error connecting to WebSocket API Binance:",c)),a.addEventListener("close",()=>console.log("Connection with WebSocket API Binance is closed"))}}}),He={class:"order-book"},je={class:"order-book__content"},Re={class:"order-table__header"},Te={class:"order-table__body"},We={class:"order-table__header"},Ke={class:"order-table__body"},Ve={class:"order-book__options"},Je=de({__name:"stockOrder",async setup(r){let a,s;const t=Me();[a,s]=fe(()=>t.getDepth()),await a,s();const e=["price","quantity","total"],n=z(10),i=M(()=>t.depthData.asks.slice(0,n.value)),p=M(()=>t.depthData.asks.slice(0,n.value));return he(()=>{t.openWwsConection()}),pe(()=>{t.closeWwsConection()}),(l,c)=>{const o=G,d=Q,u=X;return B(),D(S,null,[P(u,null,{default:N(()=>[P(o,null,{default:N(()=>[ye(" Order Book ")]),_:1}),P(d,{name:"description",hid:"description",content:"Order Book"})]),_:1}),b("section",He,[b("div",je,[P(T,{class:"order-book__table order-table bids"},{default:N(()=>[b("thead",Re,[b("tr",null,[(B(),D(S,null,O(e,f=>b("th",{key:f,class:U(`order-table__header-${f}`)},L(f),3)),64))])]),b("tbody",Te,[(B(!0),D(S,null,O(E(p),f=>(B(),D("tr",{key:f.price},[(B(),D(S,null,O(e,_=>b("td",{key:_,class:U(`order-table__body-${_}`)},L(f[_]),3)),64))]))),128))])]),_:1}),P(T,{class:"order-book__table order-table asks"},{default:N(()=>[b("thead",We,[b("tr",null,[(B(),D(S,null,O(e,f=>b("th",{key:f,class:U(`order-table__header-${f}`)},L(f),3)),64))])]),b("tbody",Ke,[(B(!0),D(S,null,O(E(i),f=>(B(),D("tr",{key:f.price},[(B(),D(S,null,O(e,_=>b("td",{key:_,class:U(`order-table__body-${_}`)},L(f[_]),3)),64))]))),128))])]),_:1})]),b("div",Ve,[P(J,{label:"size",items:[10,20,50,100,500],variant:"solo-filled","item-props":!0,modelValue:E(n),"onUpdate:modelValue":c[0]||(c[0]=f=>_e(n)?n.value=f:null)},null,8,["modelValue"])])])],64)}}});export{Je as default};
