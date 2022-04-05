"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[709],{69224:function(e,a,r){var t=r(27378),o=r(82861),n=r(25414),i=r(22913),l=r(4665),s=r(37214),c=r(85571),d=r(70360),m=r(63219),u=r(26579),h=r(94149),p=r(64870),g=r(53184),v=r(88068),Z=r(11230),f=r(75562),x=r(91675),y=r(75873),b=r.n(y),w=r(48119),k=r(14697),I=r(64502),E=r(39767),L=r(24862),S=r(76482),z=r(48189);var N={name:"1n55ztc",styles:"color:var(--secondary-text-color);transition:all 0.2s ease-out;&:hover{color:var(--secondary-text-hover-color);}"},M="DOCS",A="DEVELOPER",q="OSS",D="COMMUNITY",T="LEARN",C="IO",H=new Map;H.set(M,{text:"Docs",href:"https://docs.newrelic.com/"}).set(A,{text:"Developer",href:"https://developer.newrelic.com/"}).set(q,{text:"Open Source",href:"https://opensource.newrelic.com/"}).set(D,{text:"Community",href:"https://discuss.newrelic.com/"}).set(T,{text:"Learn",href:"https://learn.newrelic.com/"}).set(C,{text:"Instant Observability",href:"https://newrelic.com/instant-observability"});var O=function(e,a){void 0===a&&(a=null);var r=[];return H.forEach((function(t){var n=t.text,i=t.href;switch(e){case"main":r.push((0,o.tZ)("li",{key:i},(0,o.tZ)(h.Z,{href:i,activeSite:a&&H.get(a),instrumentation:{component:"globalHeader",layoutElement:"globalHeader"}},n)));break;case"dropdown":r.push((0,o.tZ)(d.Z.MenuItem,{key:i,href:i},n))}})),r},P="815px",R="770px",j="600px",K=(0,o.iv)(N,";display:flex;align-items:center;",""),U={name:"12rb0a1",styles:"display:block;cursor:pointer"},V={name:"jc7m2k",styles:"button{background:var(color-brand-500);border:1px solid var(color-brand-500);border-radius:4px;}"},Q={name:"zjik7",styles:"display:flex"},F={name:"kidiex",styles:"display:flex;align-items:right"},W={name:"1b6ec4m",styles:"margin:0 24px;@media screen and (max-width: 450px){margin:0;}"},B={name:"1to4uf8",styles:"--active-color:none;margin:0;height:72px;border-radius:0px;font-size:0.75rem;color:var(--color-neutrals-100);background:transparent;.dark-mode &{--active-color:var(--color-dark-100);}&:hover{color:var(--color-neutrals-600);background-color:var(--active-color);}"},G={name:"ik8o7k",styles:".logo-text{fill:var(--color-neutrals-050);}"},X={name:"127vvv2",styles:"padding-left:0;padding-right:0"},Y={name:"ik8o7k",styles:".logo-text{fill:var(--color-neutrals-050);}"},_={name:"1yqme4d",styles:"height:var(--global-header-height);display:flex;justify-content:space-between;max-width:var(--site-max-width);margin:0 auto;padding:0 var(--site-content-padding)"},J={name:"1i2n29d",styles:"background-color:var(--color-neutrals-800);box-shadow:var(--shadow-2);position:sticky;top:0;z-index:80;.dark-mode &{background-color:var(--color-dark-300);}"};a.Z=function(e){var a=e.className,r=e.activeSite,h=(0,E.Z)(),y=(0,v.useLocation)(),M=(0,Z.Z)(),A=M.queryParams,q=M.setQueryParam,D=M.deleteQueryParam,T=function(){var e=(0,Z.Z)(),a=e.queryParams,r=e.setQueryParam,o=a.get("q"),n=(0,t.useState)(o),i=n[0],l=n[1],s=a.has("q"),c=(0,L.Z)();return(0,I.Z)((function(){s&&(r("q",i),i&&i.length>2&&c.track({eventName:"swiftypeSearchInput",category:"GlobalSearch",name:"searchInput",layoutElement:"globalHeader",searchTerm:i}))}),400,[i,r,s]),(0,t.useEffect)((function(){l(o)}),[o]),[i,l]}(),C=T[0],H=T[1],$=(0,x.Z)().t,ee=(0,n.K2)("2729649786").allLocale.nodes,ae=(0,g.ZP)({maxWidth:"350px"}),re=new RegExp("^\\/("+ee.map((function(e){return e.locale})).join("|")+")"),te=(0,f.Z)(),oe=(0,z.Z)(null,(function(e){return{eventName:"localeDropDownClick",category:"LocaleDropDown",origin:"gatsbyTheme",layoutElement:"globalHeader",locale:e.locale}}));return(0,o.tZ)(t.Fragment,null,(0,o.tZ)(k.Z,{value:C,onChange:function(e){return H(e)},onClose:function(){D("q")},isOpen:h&&A.has("q")}),(0,o.tZ)(i.Z,null),(0,o.tZ)("div",{"data-swiftype-index":!1,className:a,css:J},(0,o.tZ)("div",{css:_},(0,o.tZ)("nav",{css:(0,o.iv)("display:flex;align-items:center;height:100%;overflow:hidden;position:relative;@media screen and (max-width: 1235px){&::after{content:'';position:absolute;right:0;height:100%;width:2rem;pointer-events:none;background:linear-gradient(\n                    to right,\n                    ",(0,w.m4)("#f4f5f5",0),",\n                    var(--color-neutrals-800)\n                  );.dark-mode &{background:linear-gradient(\n                      to right,\n                      ",(0,w.m4)("#22353c",0),",\n                      var(--color-dark-100)\n                    );}}}@media screen and (max-width: ",R,"){overflow:visible;&::after{background:none!important;width:0!important;}}","")},(0,o.tZ)(s.Z,{href:"https://newrelic.com/",css:(0,o.iv)("display:flex;align-items:center;margin-right:1rem;@media screen and (max-width: ",R,"){display:none;}",""),instrumentation:{component:"globalHeaderLogo",layoutElement:"globalHeader"}},(0,o.tZ)(m.Z,{size:"104px",css:Y})),(0,o.tZ)(d.Z,{css:(0,o.iv)("display:none;@media screen and (max-width: ",R,"){display:block;}","")},(0,o.tZ)(d.Z.Toggle,{size:c.Z.SIZE.EXTRA_SMALL,variant:c.Z.VARIANT.LINK,chevron:!1,css:X},(0,o.tZ)(m.Z,{size:ae?"24px":"104px",css:G,omitText:ae})),(0,o.tZ)(d.Z.Menu,null,O("dropdown",r))),(0,o.tZ)("ul",{css:(0,o.iv)("height:100%;margin:0;padding:0;display:flex;list-style-type:none;white-space:nowrap;overflow-x:auto;position:relative;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;>li{margin:0;flex:0 0 auto;}@media screen and (max-width: ",R,"){display:none;}","")},O("main",r))),(0,o.tZ)("ul",{css:(0,o.iv)("margin:0;margin-left:1rem;padding:0;display:flex;list-style-type:none;align-items:center;flex:1;>li{transition:all 0.2s ease-out;color:var(--secondary-text-color);&:not(:first-of-type){margin-left:0.5rem;}}@media screen and (max-width: ",P,"){flex:unset;}","")},(0,o.tZ)("li",{css:(0,o.iv)("flex:1;margin:0rem 1rem;@media screen and (max-width: ",P,"){flex:unset;}","")},(0,o.tZ)(n.rU,{to:"?q=",css:(0,o.iv)(K," display:none;@media screen and (max-width: ",P,"){display:block;}","")},(0,o.tZ)(u.Z,{css:U,name:"fe-search",size:"1.5rem"})),(0,o.tZ)(p.Z,{placeholder:$("searchInput.placeholder"),size:p.Z.SIZE.MEDIUM,focusWithHotKey:"/",css:(0,o.iv)("--icon-size:1.5rem;min-width:150px;max-width:350px;svg{color:var(--color-neutrals-500);width:1.5rem;height:1.5rem;}input{--hover-border-color:var(--color-neutrals-600);--background-color:var(--color-neutrals-700);background:var(--background-color);border:none;height:40px;.dark-mode &{--background-color:var(--color-dark-500);}&:hover{box-shadow:0 0 0 1px var(--color-neutrals-600);}}.search-hotkey{background:var(--color-neutrals-700);border-color:var(--color-neutrals-600);border-radius:0.125rem;font-size:0.875rem;padding:0.125rem 0.375rem;.dark-mode &{background:var(--color-dark-500);}}@media screen and (max-width: ",P,"){display:none;}",""),onFocus:function(){q("q","")}})),ee.length>1&&(0,o.tZ)("li",{css:(0,o.iv)("@media screen and (max-width: ",j,"){display:none;}","")},(0,o.tZ)(d.Z,{align:"right"},(0,o.tZ)(d.Z.Toggle,{size:c.Z.SIZE.SMALL,variant:c.Z.VARIANT.LINK,css:B},te.localName),(0,o.tZ)(d.Z.Menu,null,ee.map((function(e){var a=e.isDefault,r=e.locale,t=e.localName;return(0,o.tZ)(d.Z.MenuItem,{as:n.rU,key:r,href:b().join(a?"":"/"+r,y.pathname.replace(re,"")),onClick:function(){return oe({locale:r})}},t)}))))),(0,o.tZ)("li",null,(0,o.tZ)(l.Z,{css:[U,N,W,"",""],size:"1.5rem"})),(0,o.tZ)("li",{css:F},(0,o.tZ)(c.Z,{as:s.Z,size:c.Z.SIZE.SMALL,variant:c.Z.VARIANT.LINK,href:"https://one.newrelic.com",css:(0,o.iv)("margin:0 0.625rem;font-weight:600;font-size:0.875rem;white-space:nowrap;color:var(--color-brand-400);border:1px solid var(--color-brand-400);border-radius:4px;@media screen and (max-width: ",j,"){display:none;}",""),instrumentation:{component:"headerLogInButton",layoutElement:"globalHeader"}},(0,o.tZ)("span",null,$("button.login")))),(0,o.tZ)("li",{css:Q},(0,o.tZ)(S.Z,{css:V}))))))}}}]);
//# sourceMappingURL=39846a80-92d4fde7dd9b4d069945.js.map