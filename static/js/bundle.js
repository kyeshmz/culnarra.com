!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e,n){t.exports=n.p+"../css/style.css"},function(t,e,n){"use strict";n.r(e);var i=window,o=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.msRequestAnimationFrame||function(t){return setTimeout(t,16)},r=window,a=r.cancelAnimationFrame||r.mozCancelAnimationFrame||function(t){clearTimeout(t)};function u(){for(var t,e,n,i=arguments[0]||{},o=1,r=arguments.length;o<r;o++)if(null!==(t=arguments[o]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function l(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function s(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function c(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var f=document.documentElement;function d(t){var e="";return t.fake&&(e=f.style.overflow,t.style.background="",t.style.overflow=f.style.overflow="hidden",f.appendChild(t)),e}function p(t,e){t.fake&&(t.remove(),f.style.overflow=e,f.offsetHeight)}function v(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function m(t){return("insertRule"in t?t.cssRules:t.rules).length}function h(t,e,n){for(var i=0,o=t.length;i<o;i++)e.call(n,t[i],i)}var y="classList"in document.createElement("_"),g=y?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},x=y?function(t,e){g(t,e)||t.classList.add(e)}:function(t,e){g(t,e)||(t.className+=" "+e)},b=y?function(t,e){g(t,e)&&t.classList.remove(e)}:function(t,e){g(t,e)&&(t.className=t.className.replace(e,""))};function C(t,e){return t.hasAttribute(e)}function T(t,e){return t.getAttribute(e)}function w(t){return void 0!==t.item}function M(t,e){if(t=w(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function B(t,e){t=w(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var o=n;o--;)t[i].removeAttribute(e[o])}function E(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function N(t,e){"none"!==t.style.display&&(t.style.display="none")}function O(t,e){"none"===t.style.display&&(t.style.display="")}function S(t){return"none"!==window.getComputedStyle(t).display}function A(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach(function(i){"ms"===i&&"transform"!==t||e.push(i+n)}),t=e}for(var i=document.createElement("fakeelement"),o=(t.length,0);o<t.length;o++){var r=t[o];if(void 0!==i.style[r])return r}return!1}function L(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var P=!1;try{var D=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,D)}catch(t){}var H=!!P&&{passive:!0};function k(t,e,n){for(var i in e){var o=["touchstart","touchmove"].indexOf(i)>=0&&!n&&H;t.addEventListener(i,e[i],o)}}function R(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&H;t.removeEventListener(n,e[n],i)}}function I(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach(function(n){n(e,t)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var z=function(t){t=u({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0},t||{});var e=document,n=window,i={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},r={},f=t.useLocalStorage;if(f){var y=navigator.userAgent,w=new Date;try{(r=n.localStorage)?(r.setItem(w,w),f=r.getItem(w)==w,r.removeItem(w)):f=!1,f||(r={})}catch(t){f=!1}f&&(r.tnsApp&&r.tnsApp!==y&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){r.removeItem(t)}),localStorage.tnsApp=y)}var P=r.tC?l(r.tC):s(r,"tC",function(){var t=document,e=c(),n=d(e),i=t.createElement("div"),o=!1;e.appendChild(i);try{for(var r,a="(10px * 10)",u=["calc"+a,"-moz-calc"+a,"-webkit-calc"+a],l=0;l<3;l++)if(r=u[l],i.style.width=r,100===i.offsetWidth){o=r.replace(a,"");break}}catch(t){}return e.fake?p(e,n):i.remove(),o}(),f),D=r.tPL?l(r.tPL):s(r,"tPL",function(){var t,e=document,n=c(),i=d(n),o=e.createElement("div"),r=e.createElement("div"),a="";o.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)a+="<div></div>";return r.innerHTML=a,o.appendChild(r),n.appendChild(o),t=Math.abs(o.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?p(n,i):o.remove(),t}(),f),H=r.tMQ?l(r.tMQ):s(r,"tMQ",function(){var t,e=document,n=c(),i=d(n),o=e.createElement("div"),r=e.createElement("style"),a="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",o.className="tns-mq-test",n.appendChild(r),n.appendChild(o),r.styleSheet?r.styleSheet.cssText=a:r.appendChild(e.createTextNode(a)),t=window.getComputedStyle?window.getComputedStyle(o).position:o.currentStyle.position,n.fake?p(n,i):o.remove(),"absolute"===t}(),f),W=r.tTf?l(r.tTf):s(r,"tTf",A("transform"),f),j=r.t3D?l(r.t3D):s(r,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=c(),o=d(i),r=n.createElement("p"),a=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return a+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(a),i.fake?p(i,o):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(W),f),F=r.tTDu?l(r.tTDu):s(r,"tTDu",A("transitionDuration"),f),q=r.tTDe?l(r.tTDe):s(r,"tTDe",A("transitionDelay"),f),_=r.tADu?l(r.tADu):s(r,"tADu",A("animationDuration"),f),V=r.tADe?l(r.tADe):s(r,"tADe",A("animationDelay"),f),G=r.tTE?l(r.tTE):s(r,"tTE",L(F,"Transition"),f),Q=r.tAE?l(r.tAE):s(r,"tAE",L(_,"Animation"),f),X=n.console&&"function"==typeof n.console.warn,Y=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],K={};if(Y.forEach(function(n){if("string"==typeof t[n]){var i=t[n],o=e.querySelector(i);if(K[n]=i,!o||!o.nodeName)return void(X&&console.warn("Can't find",t[n]));t[n]=o}}),!(t.container.children.length<1)){var J=t.responsive,U=t.nested,Z="carousel"===t.mode;if(J){0 in J&&(t=u(t,J[0]),delete J[0]);var $={};for(var tt in J){var et=J[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}J=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,ot=t.animateDelay,rt=t.animateNormal}var at,ut,lt="horizontal"===t.axis,st=e.createElement("div"),ct=e.createElement("div"),ft=t.container,dt=ft.parentNode,pt=ft.outerHTML,vt=ft.children,mt=vt.length,ht=An(),yt=!1;J&&Jn(),Z&&(ft.className+=" tns-vpfix");var gt,xt,bt,Ct,Tt,wt,Mt,Bt,Et=t.autoWidth,Nt=Hn("fixedWidth"),Ot=Hn("edgePadding"),St=Hn("gutter"),At=Pn(),Lt=Hn("center"),Pt=Et?1:Math.floor(Hn("items")),Dt=Hn("slideBy"),Ht=t.viewportMax||t.fixedWidthViewportWidth,kt=Hn("arrowKeys"),Rt=Hn("speed"),It=t.rewind,zt=!It&&t.loop,Wt=Hn("autoHeight"),jt=Hn("controls"),Ft=Hn("controlsText"),qt=Hn("nav"),_t=Hn("touch"),Vt=Hn("mouseDrag"),Gt=Hn("autoplay"),Qt=Hn("autoplayTimeout"),Xt=Hn("autoplayText"),Yt=Hn("autoplayHoverPause"),Kt=Hn("autoplayResetOnVisibility"),Jt=(Bt=document.createElement("style"),Mt&&Bt.setAttribute("media",Mt),document.querySelector("head").appendChild(Bt),Bt.sheet?Bt.sheet:Bt.styleSheet),Ut=t.lazyload,Zt=(t.lazyloadSelector,[]),$t=zt?(Tt=function(){if(Et||Nt&&!Ht)return mt-1;var e=Nt?"fixedWidth":"items",n=[];if((Nt||t[e]<mt)&&n.push(t[e]),J)for(var i in J){var o=J[i][e];o&&(Nt||o<mt)&&n.push(o)}return n.length||n.push(0),Math.ceil(Nt?Ht/Math.min.apply(null,n):Math.max.apply(null,n))}(),wt=Z?Math.ceil((5*Tt-mt)/2):4*Tt-mt,wt=Math.max(Tt,wt),Dn("edgePadding")?wt+1:wt):0,te=Z?mt+2*$t:mt+$t,ee=!(!Nt&&!Et||zt),ne=Nt?wi():null,ie=!Z||!zt,oe=lt?"left":"top",re="",ae="",ue=Nt?function(){return Lt&&!zt?mt-1:Math.ceil(-ne/(Nt+St))}:Et?function(){for(var t=te;t--;)if(gt[t]>-ne)return t}:function(){return Lt&&Z&&!zt?mt-1:zt||Z?Math.max(0,te-Math.ceil(Pt)):te-1},le=Nn(Hn("startIndex")),se=le,ce=(En(),0),fe=Et?null:ue(),de=t.preventActionWhenRunning,pe=t.swipeAngle,ve=!pe||"?",me=!1,he=t.onInit,ye=new I,ge=" tns-slider tns-"+t.mode,xe=ft.id||(Ct=window.tnsId,window.tnsId=Ct?Ct+1:1,"tns"+window.tnsId),be=Hn("disable"),Ce=!1,Te=t.freezable,we=!(!Te||Et)&&Kn(),Me=!1,Be={click:Pi,keydown:function(t){t=ji(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Qe.disabled||Pi(t,-1):Xe.disabled||Pi(t,1))}},Ee={click:function(t){if(me){if(de)return;Ai()}var e=Fi(t=ji(t));for(;e!==Ue&&!C(e,"data-nav");)e=e.parentNode;if(C(e,"data-nav")){var n=en=Number(T(e,"data-nav")),i=Nt||Et?n*mt/$e:n*Pt,o=He?n:Math.min(Math.ceil(i),mt-1);Li(o,t),nn===n&&(sn&&Ii(),en=-1)}},keydown:function(t){t=ji(t);var n=e.activeElement;if(!C(n,"data-nav"))return;var o=[i.LEFT,i.RIGHT,i.ENTER,i.SPACE].indexOf(t.keyCode),r=Number(T(n,"data-nav"));o>=0&&(0===o?r>0&&Wi(Je[r-1]):1===o?r<$e-1&&Wi(Je[r+1]):(en=r,Li(r,t)))}},Ne={mouseover:function(){sn&&(Hi(),cn=!0)},mouseout:function(){cn&&(Di(),cn=!1)}},Oe={visibilitychange:function(){e.hidden?sn&&(Hi(),dn=!0):dn&&(Di(),dn=!1)}},Se={keydown:function(t){t=ji(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&Pi(t,0===e?-1:1)}},Ae={touchstart:Gi,touchmove:Qi,touchend:Xi,touchcancel:Xi},Le={mousedown:Gi,mousemove:Qi,mouseup:Xi,mouseleave:Xi},Pe=Dn("controls"),De=Dn("nav"),He=!!Et||t.navAsThumbnails,ke=Dn("autoplay"),Re=Dn("touch"),Ie=Dn("mouseDrag"),ze="tns-slide-active",We="tns-complete",je={load:function(t){ri(Fi(t))},error:function(t){e=Fi(t),x(e,"failed"),ai(e);var e}},Fe="force"===t.preventScrollOnTouch;if(Pe)var qe,_e,Ve=t.controlsContainer,Ge=t.controlsContainer?t.controlsContainer.outerHTML:"",Qe=t.prevButton,Xe=t.nextButton,Ye=t.prevButton?t.prevButton.outerHTML:"",Ke=t.nextButton?t.nextButton.outerHTML:"";if(De)var Je,Ue=t.navContainer,Ze=t.navContainer?t.navContainer.outerHTML:"",$e=Et?mt:Ki(),tn=0,en=-1,nn=Sn(),on=nn,rn="tns-nav-active",an="Carousel Page ",un=" (Current Slide)";if(ke)var ln,sn,cn,fn,dn,pn="forward"===t.autoplayDirection?1:-1,vn=t.autoplayButton,mn=t.autoplayButton?t.autoplayButton.outerHTML:"",hn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Re||Ie)var yn,gn,xn={},bn={},Cn=!1,Tn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Et||Bn(be||we),W&&(oe=W,re="translate",j?(re+=lt?"3d(":"3d(0px, ",ae=lt?", 0px, 0px)":", 0px)"):(re+=lt?"X(":"Y(",ae=")")),Z&&(ft.className=ft.className.replace("tns-vpfix","")),function(){Dn("gutter");st.className="tns-outer",ct.className="tns-inner",st.id=xe+"-ow",ct.id=xe+"-iw",""===ft.id&&(ft.id=xe);ge+=D||Et?" tns-subpixel":" tns-no-subpixel",ge+=P?" tns-calc":" tns-no-calc",Et&&(ge+=" tns-autowidth");ge+=" tns-"+t.axis,ft.className+=ge,Z?((at=e.createElement("div")).id=xe+"-mw",at.className="tns-ovh",st.appendChild(at),at.appendChild(ct)):st.appendChild(ct);if(Wt){var n=at||ct;n.className+=" tns-ah"}if(dt.insertBefore(st,ft),ct.appendChild(ft),h(vt,function(t,e){x(t,"tns-item"),t.id||(t.id=xe+"-item"+e),!Z&&rt&&x(t,rt),M(t,{"aria-hidden":"true",tabindex:"-1"})}),$t){for(var i=e.createDocumentFragment(),o=e.createDocumentFragment(),r=$t;r--;){var a=r%mt,u=vt[a].cloneNode(!0);if(B(u,"id"),o.insertBefore(u,o.firstChild),Z){var l=vt[mt-1-a].cloneNode(!0);B(l,"id"),i.appendChild(l)}}ft.insertBefore(i,ft.firstChild),ft.appendChild(o),vt=ft.children}}(),function(){if(!Z)for(var e=le,i=le+Math.min(mt,Pt);e<i;e++){var o=vt[e];o.style.left=100*(e-le)/Pt+"%",x(o,nt),b(o,rt)}lt&&(D||Et?(v(Jt,"#"+xe+" > .tns-item","font-size:"+n.getComputedStyle(vt[0]).fontSize+";",m(Jt)),v(Jt,"#"+xe,"font-size:0;",m(Jt))):Z&&h(vt,function(t,e){t.style.marginLeft=function(t){return P?P+"("+100*t+"% / "+te+")":100*t/te+"%"}(e)}));if(H){if(F){var r=at&&t.autoHeight?jn(t.speed):"";v(Jt,"#"+xe+"-mw",r,m(Jt))}r=kn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),v(Jt,"#"+xe+"-iw",r,m(Jt)),Z&&(r=lt&&!Et?"width:"+Rn(t.fixedWidth,t.gutter,t.items)+";":"",F&&(r+=jn(Rt)),v(Jt,"#"+xe,r,m(Jt))),r=lt&&!Et?In(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(r+=zn(t.gutter)),Z||(F&&(r+=jn(Rt)),_&&(r+=Fn(Rt))),r&&v(Jt,"#"+xe+" > .tns-item",r,m(Jt))}else{fi(),ct.style.cssText=kn(Ot,St,Nt,Wt),Z&&lt&&!Et&&(ft.style.width=Rn(Nt,St,Pt));var r=lt&&!Et?In(Nt,St,Pt):"";St&&(r+=zn(St)),r&&v(Jt,"#"+xe+" > .tns-item",r,m(Jt))}if(J&&H)for(var a in J){a=parseInt(a);var u=J[a],r="",l="",s="",c="",f="",d=Et?null:Hn("items",a),p=Hn("fixedWidth",a),y=Hn("speed",a),g=Hn("edgePadding",a),C=Hn("autoHeight",a),T=Hn("gutter",a);F&&at&&Hn("autoHeight",a)&&"speed"in u&&(l="#"+xe+"-mw{"+jn(y)+"}"),("edgePadding"in u||"gutter"in u)&&(s="#"+xe+"-iw{"+kn(g,T,p,y,C)+"}"),Z&&lt&&!Et&&("fixedWidth"in u||"items"in u||Nt&&"gutter"in u)&&(c="width:"+Rn(p,T,d)+";"),F&&"speed"in u&&(c+=jn(y)),c&&(c="#"+xe+"{"+c+"}"),("fixedWidth"in u||Nt&&"gutter"in u||!Z&&"items"in u)&&(f+=In(p,T,d)),"gutter"in u&&(f+=zn(T)),!Z&&"speed"in u&&(F&&(f+=jn(y)),_&&(f+=Fn(y))),f&&(f="#"+xe+" > .tns-item{"+f+"}"),(r=l+s+c+f)&&Jt.insertRule("@media (min-width: "+a/16+"em) {"+r+"}",Jt.cssRules.length)}}(),qn();var wn=zt?Z?function(){var t=ce,e=fe;t+=Dt,e-=Dt,Ot?(t+=1,e-=1):Nt&&(At+St)%(Nt+St)&&(e-=1),$t&&(le>e?le-=mt:le<t&&(le+=mt))}:function(){if(le>fe)for(;le>=ce+mt;)le-=mt;else if(le<ce)for(;le<=fe-mt;)le+=mt}:function(){le=Math.max(ce,Math.min(fe,le))},Mn=Z?function(){var t,e,n,i,o,r,a,u,l,s,c;Ci(ft,""),F||!Rt?(Ei(),Rt&&S(ft)||Ai()):(t=ft,e=oe,n=re,i=ae,o=Mi(),r=Rt,a=Ai,u=Math.min(r,10),l=o.indexOf("%")>=0?"%":"px",o=o.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(o-s)/r*u,setTimeout(function o(){r-=u,s+=c,t.style[e]=n+s+l+i,r>0?setTimeout(o,u):a()},u)),lt||Yi()}:function(){Zt=[];var t={};t[G]=t[Q]=Ai,R(vt[se],t),k(vt[le],t),Ni(se,nt,it,!0),Ni(le,rt,nt),G&&Q&&Rt&&S(ft)||Ai()};return{version:"2.9.1",getInfo:Ui,events:ye,goTo:Li,play:function(){Gt&&!sn&&(Ri(),fn=!1)},pause:function(){sn&&(Ii(),fn=!0)},isOn:yt,updateSliderHeight:pi,refresh:qn,destroy:function(){if(Jt.disabled=!0,Jt.ownerNode&&Jt.ownerNode.remove(),R(n,{resize:Xn}),kt&&R(e,Se),Ve&&R(Ve,Be),Ue&&R(Ue,Ee),R(ft,Ne),R(ft,Oe),vn&&R(vn,{click:zi}),Gt&&clearInterval(ln),Z&&G){var i={};i[G]=Ai,R(ft,i)}_t&&R(ft,Ae),Vt&&R(ft,Le);var o=[pt,Ge,Ye,Ke,Ze,mn];for(var r in Y.forEach(function(e,n){var i="container"===e?st:t[e];if("object"==typeof i){var r=!!i.previousElementSibling&&i.previousElementSibling,a=i.parentNode;i.outerHTML=o[n],t[e]=r?r.nextElementSibling:a.firstElementChild}}),Y=nt=it=ot=rt=lt=st=ct=ft=dt=pt=vt=mt=ut=ht=Et=Nt=Ot=St=At=Pt=Dt=Ht=kt=Rt=It=zt=Wt=Jt=Ut=gt=Zt=$t=te=ee=ne=ie=oe=re=ae=ue=le=se=ce=fe=pe=ve=me=he=ye=ge=xe=be=Ce=Te=we=Me=Be=Ee=Ne=Oe=Se=Ae=Le=Pe=De=He=ke=Re=Ie=ze=We=je=xt=jt=Ft=Ve=Ge=Qe=Xe=qe=_e=qt=Ue=Ze=Je=$e=tn=en=nn=on=rn=an=un=Gt=Qt=pn=Xt=Yt=vn=mn=Kt=hn=ln=sn=cn=fn=dn=xn=bn=yn=Cn=gn=Tn=_t=Vt=null,this)"rebuild"!==r&&(this[r]=null);yt=!1},rebuild:function(){return z(u(t,K))}}}function Bn(t){t&&(jt=qt=_t=Vt=kt=Gt=Yt=Kt=!1)}function En(){for(var t=Z?le-$t:le;t<0;)t+=mt;return t%mt+1}function Nn(t){return t=t?Math.max(0,Math.min(zt?mt-1:mt-Pt,t)):0,Z?t+$t:t}function On(t){for(null==t&&(t=le),Z&&(t-=$t);t<0;)t+=mt;return Math.floor(t%mt)}function Sn(){var t,e=On();return t=He?e:Nt||Et?Math.ceil((e+1)*$e/mt-1):Math.floor(e/Pt),!zt&&Z&&le===fe&&(t=$e-1),t}function An(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function Ln(t){return"top"===t?"afterbegin":"beforeend"}function Pn(){var t=Ot?2*Ot-St:0;return function t(n){var i,o,r=e.createElement("div");return n.appendChild(r),o=(i=r.getBoundingClientRect()).right-i.left,r.remove(),o||t(n.parentNode)}(dt)-t}function Dn(e){if(t[e])return!0;if(J)for(var n in J)if(J[n][e])return!0;return!1}function Hn(e,n){if(null==n&&(n=ht),"items"===e&&Nt)return Math.floor((At+St)/(Nt+St))||1;var i=t[e];if(J)for(var o in J)n>=parseInt(o)&&e in J[o]&&(i=J[o][e]);return"slideBy"===e&&"page"===i&&(i=Hn("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function kn(t,e,n,i,o){var r="";if(void 0!==t){var a=t;e&&(a-=e),r=lt?"margin: 0 "+a+"px 0 "+t+"px;":"margin: "+t+"px 0 "+a+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(lt?u+" 0 0":"0 "+u+" 0")+";"}return!Z&&o&&F&&i&&(r+=jn(i)),r}function Rn(t,e,n){return t?(t+e)*te+"px":P?P+"("+100*te+"% / "+n+")":100*te/n+"%"}function In(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var o=Z?te:n;i=P?P+"(100% / "+o+")":100/o+"%"}return i="width:"+i,"inner"!==U?i+";":i+" !important;"}function zn(t){var e="";!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;");return e}function Wn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function jn(t){return Wn(F,18)+"transition-duration:"+t/1e3+"s;"}function Fn(t){return Wn(_,17)+"animation-duration:"+t/1e3+"s;"}function qn(){if(Dn("autoHeight")||Et||!lt){var t=ft.querySelectorAll("img");h(t,function(t){var e=t.src;e&&e.indexOf("data:image")<0?(k(t,je),t.src="",t.src=e,x(t,"loading")):Ut||ri(t)}),o(function(){si(E(t),function(){xt=!0})}),!Et&&lt&&(t=ui(le,Math.min(le+Pt-1,te-1))),Ut?_n():o(function(){si(E(t),_n)})}else Z&&Bi(),Gn(),Qn()}function _n(){if(Et){var t=zt?le:mt-1;!function e(){vt[t-1].getBoundingClientRect().right.toFixed(2)===vt[t].getBoundingClientRect().left.toFixed(2)?Vn():setTimeout(function(){e()},16)}()}else Vn()}function Vn(){lt&&!Et||(vi(),Et?(ne=wi(),Te&&(we=Kn()),fe=ue(),Bn(be||we)):Yi()),Z&&Bi(),Gn(),Qn()}function Gn(){if(mi(),st.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ni()+"</span>  of "+mt+"</div>"),bt=st.querySelector(".tns-liveregion .current"),ke){var e=Gt?"stop":"start";vn?M(vn,{"data-action":e}):t.autoplayButtonOutput&&(st.insertAdjacentHTML(Ln(t.autoplayPosition),'<button data-action="'+e+'">'+hn[0]+e+hn[1]+Xt[0]+"</button>"),vn=st.querySelector("[data-action]")),vn&&k(vn,{click:zi}),Gt&&(Ri(),Yt&&k(ft,Ne),Kt&&k(ft,Oe))}if(De){if(Ue)M(Ue,{"aria-label":"Carousel Pagination"}),h(Je=Ue.children,function(t,e){M(t,{"data-nav":e,tabindex:"-1","aria-label":an+(e+1),"aria-controls":xe})});else{for(var n="",i=He?"":'style="display:none"',o=0;o<mt;o++)n+='<button data-nav="'+o+'" tabindex="-1" aria-controls="'+xe+'" '+i+' aria-label="'+an+(o+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",st.insertAdjacentHTML(Ln(t.navPosition),n),Ue=st.querySelector(".tns-nav"),Je=Ue.children}if(Ji(),F){var r=F.substring(0,F.length-18).toLowerCase(),a="transition: all "+Rt/1e3+"s";r&&(a="-"+r+"-"+a),v(Jt,"[aria-controls^="+xe+"-item]",a,m(Jt))}M(Je[nn],{"aria-label":an+(nn+1)+un}),B(Je[nn],"tabindex"),x(Je[nn],rn),k(Ue,Ee)}Pe&&(Ve||Qe&&Xe||(st.insertAdjacentHTML(Ln(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+xe+'">'+Ft[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+xe+'">'+Ft[1]+"</button></div>"),Ve=st.querySelector(".tns-controls")),Qe&&Xe||(Qe=Ve.children[0],Xe=Ve.children[1]),t.controlsContainer&&M(Ve,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&M([Qe,Xe],{"aria-controls":xe,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(M(Qe,{"data-controls":"prev"}),M(Xe,{"data-controls":"next"})),qe=yi(Qe),_e=yi(Xe),bi(),Ve?k(Ve,Be):(k(Qe,Be),k(Xe,Be))),Un()}function Qn(){if(Z&&G){var i={};i[G]=Ai,k(ft,i)}_t&&k(ft,Ae,t.preventScrollOnTouch),Vt&&k(ft,Le),kt&&k(e,Se),"inner"===U?ye.on("outerResized",function(){Yn(),ye.emit("innerLoaded",Ui())}):(J||Nt||Et||Wt||!lt)&&k(n,{resize:Xn}),Wt&&("outer"===U?ye.on("innerLoaded",li):be||li()),oi(),be?ti():we&&$n(),ye.on("indexChanged",ci),"inner"===U&&ye.emit("innerLoaded",Ui()),"function"==typeof he&&he(Ui()),yt=!0}function Xn(t){o(function(){Yn(ji(t))})}function Yn(n){if(yt){"outer"===U&&ye.emit("outerResized",Ui(n)),ht=An();var i,o=ut,r=!1;J&&(Jn(),(i=o!==ut)&&ye.emit("newBreakpointStart",Ui(n)));var a,u,l=Pt,s=be,c=we,f=kt,d=jt,p=qt,y=_t,g=Vt,C=Gt,T=Yt,w=Kt,M=le;if(i){var B=Nt,E=Wt,S=Ft,A=Lt,L=Xt;if(!H)var P=St,D=Ot}if(kt=Hn("arrowKeys"),jt=Hn("controls"),qt=Hn("nav"),_t=Hn("touch"),Lt=Hn("center"),Vt=Hn("mouseDrag"),Gt=Hn("autoplay"),Yt=Hn("autoplayHoverPause"),Kt=Hn("autoplayResetOnVisibility"),i&&(be=Hn("disable"),Nt=Hn("fixedWidth"),Rt=Hn("speed"),Wt=Hn("autoHeight"),Ft=Hn("controlsText"),Xt=Hn("autoplayText"),Qt=Hn("autoplayTimeout"),H||(Ot=Hn("edgePadding"),St=Hn("gutter"))),Bn(be),At=Pn(),lt&&!Et||be||(vi(),lt||(Yi(),r=!0)),(Nt||Et)&&(ne=wi(),fe=ue()),(i||Nt)&&(Pt=Hn("items"),Dt=Hn("slideBy"),(u=Pt!==l)&&(Nt||Et||(fe=ue()),wn())),i&&be!==s&&(be?ti():function(){if(!Ce)return;if(Jt.disabled=!1,ft.className+=ge,Bi(),zt)for(var t=$t;t--;)Z&&O(vt[t]),O(vt[te-t-1]);if(!Z)for(var e=le,n=le+mt;e<n;e++){var i=vt[e],o=e<le+Pt?nt:rt;i.style.left=100*(e-le)/Pt+"%",x(i,o)}Zn(),Ce=!1}()),Te&&(i||Nt||Et)&&(we=Kn())!==c&&(we?(Ei(Mi(Nn(0))),$n()):(!function(){if(!Me)return;Ot&&H&&(ct.style.margin="");if($t)for(var t="tns-transparent",e=$t;e--;)Z&&b(vt[e],t),b(vt[te-e-1],t);Zn(),Me=!1}(),r=!0)),Bn(be||we),Gt||(Yt=Kt=!1),kt!==f&&(kt?k(e,Se):R(e,Se)),jt!==d&&(jt?Ve?O(Ve):(Qe&&O(Qe),Xe&&O(Xe)):Ve?N(Ve):(Qe&&N(Qe),Xe&&N(Xe))),qt!==p&&(qt?O(Ue):N(Ue)),_t!==y&&(_t?k(ft,Ae,t.preventScrollOnTouch):R(ft,Ae)),Vt!==g&&(Vt?k(ft,Le):R(ft,Le)),Gt!==C&&(Gt?(vn&&O(vn),sn||fn||Ri()):(vn&&N(vn),sn&&Ii())),Yt!==T&&(Yt?k(ft,Ne):R(ft,Ne)),Kt!==w&&(Kt?k(e,Oe):R(e,Oe)),i){if(Nt===B&&Lt===A||(r=!0),Wt!==E&&(Wt||(ct.style.height="")),jt&&Ft!==S&&(Qe.innerHTML=Ft[0],Xe.innerHTML=Ft[1]),vn&&Xt!==L){var I=Gt?1:0,z=vn.innerHTML,W=z.length-L[I].length;z.substring(W)===L[I]&&(vn.innerHTML=z.substring(0,W)+Xt[I])}}else Lt&&(Nt||Et)&&(r=!0);if((u||Nt&&!Et)&&($e=Ki(),Ji()),(a=le!==M)?(ye.emit("indexChanged",Ui()),r=!0):u?a||ci():(Nt||Et)&&(oi(),mi(),ei()),!u&&Z||function(){for(var t=le+Math.min(mt,Pt),e=te;e--;){var n=vt[e];e>=le&&e<t?(x(n,"tns-moving"),n.style.left=100*(e-le)/Pt+"%",x(n,nt),b(n,rt)):n.style.left&&(n.style.left="",x(n,rt),b(n,nt)),b(n,it)}setTimeout(function(){h(vt,function(t){b(t,"tns-moving")})},300)}(),!be&&!we){if(i&&!H&&(Wt===autoheightTem&&Rt===speedTem||fi(),Ot===D&&St===P||(ct.style.cssText=kn(Ot,St,Nt,Rt,Wt)),lt)){Z&&(ft.style.width=Rn(Nt,St,Pt));var j=In(Nt,St,Pt)+zn(St);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Jt,m(Jt)-1),v(Jt,"#"+xe+" > .tns-item",j,m(Jt))}Wt&&li(),r&&(Bi(),se=le)}i&&ye.emit("newBreakpointEnd",Ui(n))}}function Kn(){if(!Nt&&!Et)return mt<=(Lt?Pt-(Pt-1)/2:Pt);var t=Nt?(Nt+St)*mt:gt[mt],e=Ot?At+2*Ot:At+St;return Lt&&(e-=Nt?(At-Nt)/2:(At-(gt[le+1]-gt[le]-St))/2),t<=e}function Jn(){for(var t in ut=0,J)t=parseInt(t),ht>=t&&(ut=t)}function Un(){!Gt&&vn&&N(vn),!qt&&Ue&&N(Ue),jt||(Ve?N(Ve):(Qe&&N(Qe),Xe&&N(Xe)))}function Zn(){Gt&&vn&&O(vn),qt&&Ue&&O(Ue),jt&&(Ve?O(Ve):(Qe&&O(Qe),Xe&&O(Xe)))}function $n(){if(!Me){if(Ot&&(ct.style.margin="0px"),$t)for(var t="tns-transparent",e=$t;e--;)Z&&x(vt[e],t),x(vt[te-e-1],t);Un(),Me=!0}}function ti(){if(!Ce){if(Jt.disabled=!0,ft.className=ft.className.replace(ge.substring(1),""),B(ft,["style"]),zt)for(var t=$t;t--;)Z&&N(vt[t]),N(vt[te-t-1]);if(lt&&Z||B(ct,["style"]),!Z)for(var e=le,n=le+mt;e<n;e++){var i=vt[e];B(i,["style"]),b(i,nt),b(i,rt)}Un(),Ce=!0}}function ei(){var t=ni();bt.innerHTML!==t&&(bt.innerHTML=t)}function ni(){var t=ii(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function ii(t){null==t&&(t=Mi());var e,n,i,o=le;if(Lt||Ot?(Et||Nt)&&(n=-(parseFloat(t)+Ot),i=n+At+2*Ot):Et&&(n=gt[le],i=n+At),Et)gt.forEach(function(t,r){r<te&&((Lt||Ot)&&t<=n+.5&&(o=r),i-t>=.5&&(e=r))});else{if(Nt){var r=Nt+St;Lt||Ot?(o=Math.floor(n/r),e=Math.ceil(i/r-1)):e=o+Math.ceil(At/r)-1}else if(Lt||Ot){var a=Pt-1;if(Lt?(o-=a/2,e=le+a/2):e=le+a,Ot){var u=Ot*Pt/At;o-=u,e+=u}o=Math.floor(o),e=Math.ceil(e)}else e=o+Pt-1;o=Math.max(o,0),e=Math.min(e,te-1)}return[o,e]}function oi(){Ut&&!be&&ui.apply(null,ii()).forEach(function(t){if(!g(t,We)){var e={};e[G]=function(t){t.stopPropagation()},k(t,e),k(t,je),t.src=T(t,"data-src");var n=T(t,"data-srcset");n&&(t.srcset=n),x(t,"loading")}})}function ri(t){x(t,"loaded"),ai(t)}function ai(t){x(t,"tns-complete"),b(t,"loading"),R(t,je)}function ui(t,e){for(var n=[];t<=e;)h(vt[t].querySelectorAll("img"),function(t){n.push(t)}),t++;return n}function li(){var t=ui.apply(null,ii());o(function(){si(t,pi)})}function si(t,e){return xt?e():(t.forEach(function(e,n){g(e,We)&&t.splice(n,1)}),t.length?void o(function(){si(t,e)}):e())}function ci(){oi(),mi(),ei(),bi(),function(){if(qt&&(nn=en>=0?en:Sn(),en=-1,nn!==on)){var t=Je[on],e=Je[nn];M(t,{tabindex:"-1","aria-label":an+(on+1)}),b(t,rn),M(e,{"aria-label":an+(nn+1)+un}),B(e,"tabindex"),x(e,rn),on=nn}}()}function fi(){Z&&Wt&&(at.style[F]=Rt/1e3+"s")}function di(t,e){for(var n=[],i=t,o=Math.min(t+e,te);i<o;i++)n.push(vt[i].offsetHeight);return Math.max.apply(null,n)}function pi(){var t=Wt?di(le,Pt):di($t,mt),e=at||ct;e.style.height!==t&&(e.style.height=t+"px")}function vi(){gt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=vt[0].getBoundingClientRect()[t];h(vt,function(i,o){o&&gt.push(i.getBoundingClientRect()[t]-n),o===te-1&&gt.push(i.getBoundingClientRect()[e]-n)})}function mi(){var t=ii(),e=t[0],n=t[1];h(vt,function(t,i){i>=e&&i<=n?C(t,"aria-hidden")&&(B(t,["aria-hidden","tabindex"]),x(t,ze)):C(t,"aria-hidden")||(M(t,{"aria-hidden":"true",tabindex:"-1"}),b(t,ze))})}function hi(t){return t.nodeName.toLowerCase()}function yi(t){return"button"===hi(t)}function gi(t){return"true"===t.getAttribute("aria-disabled")}function xi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function bi(){if(jt&&!It&&!zt){var t=qe?Qe.disabled:gi(Qe),e=_e?Xe.disabled:gi(Xe),n=le<=ce,i=!It&&le>=fe;n&&!t&&xi(qe,Qe,!0),!n&&t&&xi(qe,Qe,!1),i&&!e&&xi(_e,Xe,!0),!i&&e&&xi(_e,Xe,!1)}}function Ci(t,e){F&&(t.style[F]=e)}function Ti(t){return null==t&&(t=le),Et?(At-(Ot?St:0)-(gt[t+1]-gt[t]-St))/2:Nt?(At-Nt)/2:(Pt-1)/2}function wi(){var t=At+(Ot?St:0)-(Nt?(Nt+St)*te:gt[te]);return Lt&&!zt&&(t=Nt?-(Nt+St)*(te-1)-Ti():Ti(te-1)-gt[te-1]),t>0&&(t=0),t}function Mi(t){var e;if(null==t&&(t=le),lt&&!Et)if(Nt)e=-(Nt+St)*t,Lt&&(e+=Ti());else{var n=W?te:Pt;Lt&&(t-=Ti()),e=100*-t/n}else e=-gt[t],Lt&&Et&&(e+=Ti());return ee&&(e=Math.max(e,ne)),e+=!lt||Et||Nt?"px":"%"}function Bi(t){Ci(ft,"0s"),Ei(t)}function Ei(t){null==t&&(t=Mi()),ft.style[oe]=re+t+ae}function Ni(t,e,n,i){var o=t+Pt;zt||(o=Math.min(o,te));for(var r=t;r<o;r++){var a=vt[r];i||(a.style.left=100*(r-le)/Pt+"%"),ot&&q&&(a.style[q]=a.style[V]=ot*(r-t)/1e3+"s"),b(a,e),x(a,n),i&&Zt.push(a)}}function Oi(t,e){ie&&wn(),(le!==se||e)&&(ye.emit("indexChanged",Ui()),ye.emit("transitionStart",Ui()),Wt&&li(),sn&&t&&["click","keydown"].indexOf(t.type)>=0&&Ii(),me=!0,Mn())}function Si(t){return t.toLowerCase().replace(/-/g,"")}function Ai(t){if(Z||me){if(ye.emit("transitionEnd",Ui(t)),!Z&&Zt.length>0)for(var e=0;e<Zt.length;e++){var n=Zt[e];n.style.left="",V&&q&&(n.style[V]="",n.style[q]=""),b(n,it),x(n,rt)}if(!t||!Z&&t.target.parentNode===ft||t.target===ft&&Si(t.propertyName)===Si(oe)){if(!ie){var i=le;wn(),le!==i&&(ye.emit("indexChanged",Ui()),Bi())}"inner"===U&&ye.emit("innerLoaded",Ui()),me=!1,se=le}}}function Li(t,e){if(!we)if("prev"===t)Pi(e,-1);else if("next"===t)Pi(e,1);else{if(me){if(de)return;Ai()}var n=On(),i=0;if("first"===t?i=-n:"last"===t?i=Z?mt-Pt-n:mt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<Pt){var o=i>0?1:-1;i+=le+i-mt>=ce?mt*o:2*mt*o*-1}le+=i,Z&&zt&&(le<ce&&(le+=mt),le>fe&&(le-=mt)),On(le)!==On(se)&&Oi(e)}}function Pi(t,e){if(me){if(de)return;Ai()}var n;if(!e){for(var i=Fi(t=ji(t));i!==Ve&&[Qe,Xe].indexOf(i)<0;)i=i.parentNode;var o=[Qe,Xe].indexOf(i);o>=0&&(n=!0,e=0===o?-1:1)}if(It){if(le===ce&&-1===e)return void Li("last",t);if(le===fe&&1===e)return void Li("first",t)}e&&(le+=Dt*e,Et&&(le=Math.floor(le)),Oi(n||t&&"keydown"===t.type?t:null))}function Di(){ln=setInterval(function(){Pi(null,pn)},Qt),sn=!0}function Hi(){clearInterval(ln),sn=!1}function ki(t,e){M(vn,{"data-action":t}),vn.innerHTML=hn[0]+t+hn[1]+e}function Ri(){Di(),vn&&ki("stop",Xt[1])}function Ii(){Hi(),vn&&ki("start",Xt[0])}function zi(){sn?(Ii(),fn=!0):(Ri(),fn=!1)}function Wi(t){t.focus()}function ji(t){return qi(t=t||n.event)?t.changedTouches[0]:t}function Fi(t){return t.target||n.event.srcElement}function qi(t){return t.type.indexOf("touch")>=0}function _i(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Vi(){return r=bn.y-xn.y,a=bn.x-xn.x,e=Math.atan2(r,a)*(180/Math.PI),n=pe,i=!1,(o=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":o<=n&&(i="vertical"),i===t.axis;var e,n,i,o,r,a}function Gi(t){if(me){if(de)return;Ai()}Gt&&sn&&Hi(),Cn=!0,gn&&(a(gn),gn=null);var e=ji(t);ye.emit(qi(t)?"touchStart":"dragStart",Ui(t)),!qi(t)&&["img","a"].indexOf(hi(Fi(t)))>=0&&_i(t),bn.x=xn.x=e.clientX,bn.y=xn.y=e.clientY,Z&&(yn=parseFloat(ft.style[oe].replace(re,"")),Ci(ft,"0s"))}function Qi(t){if(Cn){var e=ji(t);bn.x=e.clientX,bn.y=e.clientY,Z?gn||(gn=o(function(){!function t(e){if(!ve)return void(Cn=!1);a(gn);Cn&&(gn=o(function(){t(e)}));"?"===ve&&(ve=Vi());if(ve){!Fe&&qi(e)&&(Fe=!0);try{e.type&&ye.emit(qi(e)?"touchMove":"dragMove",Ui(e))}catch(t){}var n=yn,i=Tn(bn,xn);if(!lt||Nt||Et)n+=i,n+="px";else{var r=W?i*Pt*100/((At+St)*te):100*i/(At+St);n+=r,n+="%"}ft.style[oe]=re+n+ae}}(t)})):("?"===ve&&(ve=Vi()),ve&&(Fe=!0)),Fe&&t.preventDefault()}}function Xi(e){if(Cn){gn&&(a(gn),gn=null),Z&&Ci(ft,""),Cn=!1;var n=ji(e);bn.x=n.clientX,bn.y=n.clientY;var i=Tn(bn,xn);if(Math.abs(i)){if(!qi(e)){var r=Fi(e);k(r,{click:function t(e){_i(e),R(r,{click:t})}})}Z?gn=o(function(){if(lt&&!Et){var t=-i*Pt/(At+St);t=i>0?Math.floor(t):Math.ceil(t),le+=t}else{var n=-(yn+i);if(n<=0)le=ce;else if(n>=gt[te-1])le=fe;else for(var o=0;o<te&&n>=gt[o];)le=o,n>gt[o]&&i<0&&(le+=1),o++}Oi(e,i),ye.emit(qi(e)?"touchEnd":"dragEnd",Ui(e))}):ve&&Pi(e,i>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Fe=!1),pe&&(ve="?"),Gt&&!sn&&Di()}function Yi(){(at||ct).style.height=gt[le+Pt]-gt[le]+"px"}function Ki(){var t=Nt?(Nt+St)*mt/At:mt/Pt;return Math.min(Math.ceil(t),mt)}function Ji(){if(qt&&!He&&$e!==tn){var t=tn,e=$e,n=O;for(tn>$e&&(t=$e,e=tn,n=N);t<e;)n(Je[t]),t++;tn=$e}}function Ui(t){return{container:ft,slideItems:vt,navContainer:Ue,navItems:Je,controlsContainer:Ve,hasControls:Pe,prevButton:Qe,nextButton:Xe,items:Pt,slideBy:Dt,cloneCount:$t,slideCount:mt,slideCountNew:te,index:le,indexCached:se,displayIndex:En(),navCurrentIndex:nn,navCurrentIndexCached:on,pages:$e,pagesCached:tn,sheet:Jt,isOn:yt,event:t||{}}}X&&console.warn("No slides found in",t.container)},W=document.getElementsByClassName("abstract-slider"),j=document.getElementsByClassName("relatedprj-feed"),F=document.getElementsByClassName("relatednote-feed"),q=document.getElementsByClassName("relatedcard-feed");if(W.length>0)z({container:".abstract-slider",mouseDrag:!0,items:1,slideBy:"page",autoplay:!0,speed:900,autoplayTimeout:2400,controls:!0,controlsText:["＜","＞"],nav:!0,nested:"inner",autoplayButtonOutput:!1,autoplayHoverPause:!0,controlsPosition:!1,prevButton:!1,nextButton:!1});if(j.length>0)z({container:".relatedprj-feed",mouseDrag:!0,items:2,slideBy:"page",autoplay:!0,speed:800,autoplayTimeout:2400,controls:!0,controlsText:["＜","＞"],nav:!1,nested:"inner",autoplayButtonOutput:!1,autoplayHoverPause:!0,controlsPosition:"bottom",prevButton:!1,nextButton:!1});if(F.length>0)z({container:".relatednote-feed",mouseDrag:!0,items:1,slideBy:"page",autoplay:!0,speed:600,autoplayTimeout:2400,controls:!0,controlsText:["＜","＞"],nav:!1,nested:"inner",autoplayButtonOutput:!1,autoplayHoverPause:!0,controlsPosition:"bottom",prevButton:!1,nextButton:!1});if(q.length>0)z({container:".relatedcard-feed",mouseDrag:!0,items:1,slideBy:"page",autoplay:!0,speed:800,autoplayTimeout:2400,controls:!0,controlsText:["＜","＞"],nav:!1,nested:"inner",autoplayButtonOutput:!1,autoplayHoverPause:!0,controlsPosition:"bottom",prevButton:!1,nextButton:!1})}]);