"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[441],{52410:function(t,e,n){n.r(e);var a=n(27378),l=n(42426),i=n(82861);var r={name:"b2qbgx",styles:"@media screen and (max-width: 1280px){display:none;}"},o={name:"pha8e7",styles:"padding:5px"},s={name:"1v03bf2",styles:"padding:2rem"},u={name:"13y9w60",styles:"display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));grid-gap:2rem;padding:1rem"},c={name:"1v03bf2",styles:"padding:2rem"},p={name:"1v03bf2",styles:"padding:2rem"},d={name:"nb4m7t",styles:"display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));grid-gap:2rem;padding:1rem;border-radius:4px;background:var(--secondary-background-color)"},m={name:"1v03bf2",styles:"padding:2rem"},Z={name:"1v03bf2",styles:"padding:2rem"},g={name:"vdlzky",styles:"display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));grid-gap:2rem;margin-bottom:2rem"},h={name:"1vl27lg",styles:"display:flex;align-items:flex-start;gap:1rem"},v={name:"1nzw1un",styles:"display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:2rem;align-items:start"},f={name:"8dk3vg",styles:"margin-bottom:1rem"},y={name:"8dk3vg",styles:"margin-bottom:1rem"},A={name:"1yp7290",styles:"margin-bottom:2rem"},x={name:"1yp7290",styles:"margin-bottom:2rem"},T={name:"1w1iefw",styles:"section{margin-bottom:4rem;}"},b={name:"15zcfva",styles:"display:grid;grid-template-columns:minmax(0, 1fr) 320px;grid-template-areas:'content page-tools';grid-gap:var(--site-content-padding);@media screen and (max-width: 1280px){grid-template-columns:minmax(0, 1fr);grid-template-areas:content;}"};e.default=function(){var t=(0,l.$G)().t,e=(0,a.useState)(""),n=e[0],I=e[1];return(0,i.tZ)(l.Ar.Main,{css:b},(0,i.tZ)(l.Ar.Content,{css:T},(0,i.tZ)("h1",null,t("home.welcome")),(0,i.tZ)("p",null,t("home.intro")),(0,i.tZ)("section",null,(0,i.tZ)("h2",null,"Search inputs"),(0,i.tZ)(l.Mj,{style:{margin:"1rem 0",maxWidth:"500px"},placeholder:"Test out a small search",onClear:function(){return I("")},onChange:function(t){return I(t.target.value)},value:n,size:l.Mj.SIZE.SMALL}),(0,i.tZ)(l.Mj,{style:{margin:"1rem 0",maxWidth:"500px"},placeholder:"Test out a medium search",onClear:function(){return I("")},onChange:function(t){return I(t.target.value)},value:n}),(0,i.tZ)(l.Mj,{style:{marginBottom:"1rem",maxWidth:"500px"},placeholder:"Test out a large search",onClear:function(){return I("")},onChange:function(t){return I(t.target.value)},value:n,size:l.Mj.SIZE.LARGE})),(0,i.tZ)("section",null,(0,i.tZ)("h2",null,"Collapsers"),(0,i.tZ)(l.ax,null,(0,i.tZ)(l.iC,{id:"example-1",title:"Check out this cool collapser"},"This is a pretty neat little utility. I can show all kinds of stuff in here."),(0,i.tZ)(l.iC,{title:(0,i.tZ)("code",null,"api_doc")},"You can even use JSX in the title"),(0,i.tZ)(l.iC,{title:"This one is open by default",defaultOpen:!0},"And you can see everything inside of it!"))),(0,i.tZ)("section",null,(0,i.tZ)(l.UW,{variant:l.UW.VARIANT.CAUTION},"Danger! Exercise extreme caution."),(0,i.tZ)(l.UW,{variant:l.UW.VARIANT.IMPORTANT},"Important! I said, this is important."),(0,i.tZ)(l.UW,{variant:l.UW.VARIANT.TIP},"Here's a tip."),(0,i.tZ)(l.UW,{variant:l.UW.VARIANT.TIP,title:"Hello"},"Here's a tip with a custom title"),(0,i.tZ)(l.UW,{variant:l.UW.VARIANT.TIP,title:null},"Here's a tip with no title"),(0,i.tZ)(l.UW,{variant:l.UW.VARIANT.COURSE},"This callout is for a guide that is part of a super cool course")),(0,i.tZ)("section",null,(0,i.tZ)("h2",null,"A code block"),(0,i.tZ)(l.dn,{copyable:!0,lineNumbers:!0,highlightedLines:"5-7,11",fileName:"src/components/Button.js",language:"jsx",css:x},"\nimport React from 'react';\nimport PropTypes from 'prop-types';\n\nconst Button = ({ children, ...props }) => (\n  <button type=\"button\" className=\"button\" {...props}>{children}</button>\n);\n\nButton.propTypes = {\n  children: PropTypes.node\n};\n\nexport default Button;\n"),(0,i.tZ)("h2",null,"A live editable code block w/ preview"),(0,i.tZ)(l.dn,{copyable:!0,lineNumbers:!0,live:!0,preview:!0,fileName:"src/components/Button.js",language:"jsx",scope:{Button:l.zx},css:A},"\n<Button variant={Button.VARIANT.PRIMARY} onClick={() => alert('Hello!')}>Hello!</Button>\n"),(0,i.tZ)("h2",null,"Code block w/ embedded var/mark/links"),(0,i.tZ)(l.dn,{language:"graphql",css:y},'\nquery AccountQuery(<var>$accountId:</var> ID!) {\n  <a href="/build-apps">account</a>(id: <var>$accountId</var>) {\n    <a href="/build-apps/build-hello-world-app"><var>name</var></a>\n  }\n}\n'),(0,i.tZ)(l.dn,{language:"yaml",css:f},'\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: <mark>nri-integration-cfg</mark>\n  namespace: default\ndata:\n<mark>  apache-config.yaml: |\n    ---\n    # Run auto discovery to find pods with label "app=apache"\n    # https://docs.newrelic.com/docs/integrations/host-integrations/installation/container-auto-discovery\n    discovery:\n      command:\n        # Use the optional arguments:\n        # --namespaces: Comma separated namespaces to discover pods on\n        # --tls: Use secure (TLS) connection\n        # --port: Port used to connect to the kubelet. Default is 10255\n        exec: /var/db/newrelic-infra/nri-discovery-kubernetes --port <var>PORT</var> --tls\n        match:\n          label.app: apache\n    <a href="https://one.newrelic.com">integrations</a>:\n      - name: nri-apache\n        env:\n          # Use the discovered IP as the host address\n          STATUS_URL: http://${discovery.ip}/server-status?auto\n          METRICS: 1</mark>\n'),(0,i.tZ)(l.dn,{language:"xml"},"\n<dependency>\n  <groupId>com.newrelic.agent.java</groupId>\n  <artifactId>newrelic-java</artifactId>\n  <version><var>JAVA_AGENT_VERSION</var></version>\n  <scope>provided</scope>\n  <type>zip</type>\n</dependency>\n")),(0,i.tZ)("section",null,(0,i.tZ)("h2",null,"Terminal"),(0,i.tZ)(l.oI,null,"cd packages/gatsby-theme-newrelic"),(0,i.tZ)("h2",null,"Animated terminal"),(0,i.tZ)(l.oI,{animate:!0},'\nnr1 create --type nerdpack --name pageviews-app\n[output] {success}✔  {plain}Component created successfully!\n[output]    {purple}nerdpack {blue}pageviews-app {plain}is available at {green}"./pageviews-app"\n            ')),(0,i.tZ)("section",null,(0,i.tZ)("h2",null,"Buttons"),(0,i.tZ)("h3",null,"Variants"),(0,i.tZ)("div",{css:v},(0,i.tZ)(l.zx,{onClick:function(){return alert("Hello!")},variant:l.zx.VARIANT.PRIMARY},"Primary"),(0,i.tZ)(l.zx,{onClick:function(){return alert("Hello!")},variant:l.zx.VARIANT.NORMAL},"Normal"),(0,i.tZ)(l.zx,{onClick:function(){return alert("Hello!")},variant:l.zx.VARIANT.OUTLINE},"Outline"),(0,i.tZ)(l.zx,{onClick:function(){return alert("Hello!")},variant:l.zx.VARIANT.LINK},"Link")),(0,i.tZ)("h3",null,"Sizes"),(0,i.tZ)("div",{css:h},(0,i.tZ)(l.zx,{onClick:function(){return alert("Hello!")},variant:l.zx.VARIANT.PRIMARY},"Default"),(0,i.tZ)(l.zx,{onClick:function(){return alert("Hello!")},variant:l.zx.VARIANT.PRIMARY,size:l.zx.SIZE.SMALL},"Small"),(0,i.tZ)(l.zx,{onClick:function(){return alert("Hello!")},variant:l.zx.VARIANT.PRIMARY,size:l.zx.SIZE.EXTRA_SMALL},"Extra small"))),(0,i.tZ)("section",null,(0,i.tZ)(l.Ks,{resources:[{url:"https://newrelic.com/instant-observability/",title:"developer"}]})),(0,i.tZ)("section",null,(0,i.tZ)("h2",null,"Primary surfaces"),(0,i.tZ)("div",{css:g},(0,i.tZ)(l.Tg,{base:l.Tg.BASE.PRIMARY,css:Z},"Non-interactive"),(0,i.tZ)(l.Tg,{interactive:!0,base:l.Tg.BASE.PRIMARY,css:m},"Interactive")),(0,i.tZ)("h2",null,"Secondary surfaces"),(0,i.tZ)("div",{css:d},(0,i.tZ)(l.Tg,{base:l.Tg.BASE.SECONDARY,css:p},"Non-interactive"),(0,i.tZ)(l.Tg,{interactive:!0,base:l.Tg.BASE.SECONDARY,css:c},"Interactive")),(0,i.tZ)("h2",null,"Surfaces as other elements"),(0,i.tZ)("div",{css:u},(0,i.tZ)(l.Tg,{base:l.Tg.BASE.PRIMARY,to:"foobar",as:l.rU,css:s},"I'm a link!"))),(0,i.tZ)("section",null,(0,i.tZ)("h2",null,"Wistia video"),(0,i.tZ)(l.nk,{id:"inyshp3m7r",type:l.nk.TYPE.WISTIA,width:"500px"}),(0,i.tZ)("h2",null,"YouTube video"),(0,i.tZ)(l.nk,{id:"ZagZfNQYJEU",type:l.nk.TYPE.YOUTUBE,width:"500px"})),(0,i.tZ)("section",null,(0,i.tZ)("h2",null,"Internal Links"),(0,i.tZ)("p",null,"This ",(0,i.tZ)(l.rU,{to:"/build-apps"},"Internal Link")," automatically uses localized path if on translated site."),(0,i.tZ)("p",null,"This"," ",(0,i.tZ)(l.rU,{to:"/build-apps",shouldAutoLocalize:!1},"Internal Link")," ","does not automatically use localized path if on translated site.")),(0,i.tZ)("section",null,(0,i.tZ)("h2",null,"External Links"),(0,i.tZ)(l.Tg,{base:l.Tg.BASE.PRIMARY,to:"https://newrelic.com",as:l.rU,css:o,displayExternalIcon:!0},"Surface"),(0,i.tZ)(l.zx,{as:l.rU,displayExternalIcon:!0,to:"https://newrelic.com"},"Button"),(0,i.tZ)(l.dL,{to:"https://newrelic.com",displayExternalIcon:!0},"External Link")),(0,i.tZ)("section",null,(0,i.tZ)("h2",null,"Tables"),(0,i.tZ)(l.iA,null,(0,i.tZ)("thead",null,(0,i.tZ)("tr",null,(0,i.tZ)("td",null,"Col 1"),(0,i.tZ)("td",null,"Col 2"),(0,i.tZ)("td",null,"Col 3"),(0,i.tZ)("td",null,"Col 4"),(0,i.tZ)("td",null,"Col 5"))),(0,i.tZ)("tbody",null,Array.from({length:10},(function(t,e){return e+1})).map((function(t){return(0,i.tZ)("tr",{key:t},(0,i.tZ)("td",null,"Row ",t," - Column 1"),(0,i.tZ)("td",null,"Row ",t," - Column 2"),(0,i.tZ)("td",null,"Row ",t," - Column 3"),(0,i.tZ)("td",null,"Row ",t," - Column 4"),(0,i.tZ)("td",null,"Row ",t," - Column 5"))}))))),(0,i.tZ)("section",null,(0,i.tZ)(l.PS,null,(0,i.tZ)(l.Vp,null,"React"),(0,i.tZ)(l.Vp,{interactive:!0},"Agent")))),(0,i.tZ)(l.Ar.PageTools,{css:r},(0,i.tZ)(l.aL,{pageTitle:"Demo Site"}),(0,i.tZ)(l.UB,{fileRelativePath:"demo/src/pages/index.js"}),(0,i.tZ)(l.B$.Section,null,(0,i.tZ)(l.B$.Title,null,"How to use"),(0,i.tZ)("p",null,"The ",(0,i.tZ)("code",null,"PageTools")," component is great for use as a sidebar to give page-specific context to a user"))))}}}]);
//# sourceMappingURL=d676735c-5b15c50299a5e2f62f7c.js.map