(function(e){function t(t){for(var n,o,r=t[0],c=t[1],l=t[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},i={"publish-panel":0},a=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["aioseopjsonp"]=window["aioseopjsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var p=c;a.push([21,"chunk-vendors","chunk-common"]),s()})({21:function(e,t,s){e.exports=s("c64f")},"35aa":function(e,t,s){"use strict";s("5cbf")},"5cbf":function(e,t,s){},7476:function(e,t,s){},c64f:function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("159b");var n=s("a026"),i=(s("1725"),s("75b9"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.currentPost.id?s("div",{staticClass:"seo-overview"},[s("ul",{staticClass:"pre-publish-checklist"},e._l(e.tips,(function(t,n){return s("li",{key:n},[s("span",{staticClass:"icon"},[s(t.icon,{tag:"component",class:t.type})],1),s("span",[e._v(e._s(t.label)+": "),s("span",{staticClass:"result",class:t.value.endsWith("/100")?t.type:null},[e._v(e._s(t.value))])]),e.dynamicOptions.searchAppearance.postTypes[e.currentPost.postType]&&e.dynamicOptions.searchAppearance.postTypes[e.currentPost.postType].advanced.showMetaBox?s("span",{staticClass:"edit",on:{click:function(s){return e.openSidebar(t.name)}}},[s("svg-pencil")],1):e._e()])})),0),e.$allowed("aioseo_page_analysis")?s("div",{staticClass:"snippet-preview"},[s("p",{staticClass:"title"},[e._v(e._s(e.strings.snippetPreview)+":")]),s("core-google-search-preview",{class:{ismobile:e.currentPost.generalMobilePrev},attrs:{title:e.currentPost.title||e.currentPost.tags.title||"#post_title #separator_sa #site_title",separator:e.options.searchAppearance.global.separator,description:e.currentPost.description||e.currentPost.tags.description||"#post_content"},scopedSlots:e._u([{key:"domain",fn:function(){return[s("a",{attrs:{href:e.liveTags.permalink,target:"_blank"}},[e._v(" "+e._s(e.liveTags.permalink)+" ")])]},proxy:!0}],null,!1,4038479585)})],1):e._e(),e.$allowed("aioseo_page_analysis")&&e.currentPost.canonicalUrl?s("div",{staticClass:"canonical-url"},[s("p",{staticClass:"title"},[e._v(" "+e._s(e.strings.canonicalUrl)+": "),s("span",{staticClass:"edit",on:{click:function(t){return e.openSidebar("canonical")}}},[s("svg-pencil")],1)]),s("a",{attrs:{href:e.currentPost.canonicalUrl,target:"_blank",rel:"noopener noreferrer"}},[s("span",[e._v(e._s(e.currentPost.canonicalUrl))]),s("svg-external")],1)]):e._e()]):e._e()}),a=[],o=s("5530"),r=(s("4de4"),s("b0c0"),s("8ba4"),s("a9e3"),s("2f62")),c=s("cd79"),l={mixins:[c["a"]],data:function(){return{strings:{snippetPreview:this.$t.__("Snippet Preview",this.$td),canonicalUrl:this.$t.__("Canonical URL",this.$td)}}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(r["e"])(["currentPost","options","dynamicOptions"])),Object(r["e"])("live-tags",["liveTags"])),{},{tips:function(){var e=this,t=[{label:this.$t.__("Visibility",this.$td),name:"visibility",access:"aioseo_page_advanced_settings"},{label:this.$t.__("SEO Analysis",this.$td),name:"seoAnalysis",access:"aioseo_page_analysis"},{label:this.$t.__("Readability",this.$td),name:"redabilityAnalysis",access:"aioseo_page_analysis"},{label:this.$t.__("Focus Keyphrase",this.$td),name:"focusKeyphrase",access:"aioseo_page_analysis"}].filter((function(t){return e.$allowed(t.access)&&("aioseo_page_analysis"!==t.access||e.options.advanced.truSeo)}));return t.forEach((function(s,n){t[n]=Object(o["a"])(Object(o["a"])({},s),e.getData(s.name))})),t},canImprove:function(){return this.tips.some((function(e){return"error"===e.type}))}}),methods:{getIcon:function(e){switch(e){case"error":return"svg-circle-close";case"warning":return"svg-circle-exclamation";case"success":default:return"svg-circle-check"}},getData:function(e){var t,s={};switch(e){case"visibility":s.value=this.$t.__("Good!",this.$td),s.type="success",t=this.currentPost.default?this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType]&&!this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType].advanced.robotsMeta.default&&this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType].advanced.robotsMeta.noindex:this.currentPost.noindex,t&&(s.value=this.$t.__("Blocked!",this.$td),s.type="error");break;case"seoAnalysis":s.value=this.$t.__("N/A",this.$td),s.type="error",t=this.currentPost.seo_score,Number.isInteger(t)&&(s.value=t+"/100",s.type=80<t?"success":50<t?"warning":"error");break;case"redabilityAnalysis":s.value=this.$t.__("Good!",this.$td),s.type="success",t=this.currentPost.page_analysis.analysis.readability.errors,t&&0<t&&(s.value=this.$t.sprintf(this.$t._n("%1$s error found!","%1$s errors found!",t,this.$td),t),s.type="error");break;case"focusKeyphrase":s.value=this.$t.__("No focus keyphrase!",this.$td),s.type="error",t=this.currentPost.keyphrases.focus,t&&t.keyphrase&&(s.value=t.score+"/100",s.type=80<t.score?"success":50<t.score?"warning":"error");break}return Object(o["a"])(Object(o["a"])({},s),{},{icon:this.getIcon(s.type)})},openSidebar:function(e){var t=window.wp.data.dispatch("core/edit-post"),s=t.closePublishSidebar,n=t.openGeneralSidebar;switch(s(),n("aioseo-post-settings-sidebar/aioseo-post-settings-sidebar"),e){case"canonical":case"visibility":this.$bus.$emit("open-post-settings",{tab:"advanced"});break;case"seoAnalysis":this.$bus.$emit("open-post-settings",{tab:"general",card:"basicseo"});break;case"redabilityAnalysis":this.$bus.$emit("open-post-settings",{tab:"general",card:"readability"});break;case"focusKeyphrase":this.$bus.$emit("open-post-settings",{tab:"general",card:"focus"});break}}},mounted:function(){var e=this;this.$nextTick((function(){var t=document.querySelector(".aioseo-pre-publish .editor-post-publish-panel__link");t&&(t.innerHTML=e.canImprove?e.$t.__("Your post needs improvement!",e.$td):e.$t.__("You're good to go!",e.$td))}))}},p=l,u=(s("fa7a"),s("2877")),d=Object(u["a"])(p,i,a,!1,null,null,null),h=d.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.liveTags.permalink?s("div",{staticClass:"aioseo-post-publish"},[s("h2",{staticClass:"title"},[e._v(e._s(e.strings.title))]),s("p",{staticClass:"description"},[e._v(e._s(e.strings.description))]),s("div",{staticClass:"links"},e._l(e.socialNetworks,(function(e,t){return s("a",{key:t,staticClass:"link",attrs:{target:"_blank",href:e.link}},[s(e.icon,{tag:"component"})],1)})),0)]):e._e()},f=[],m=(s("d81d"),s("9911"),{mixins:[c["a"]],data:function(){return{strings:{title:this.$t.__("Get out the word!",this.$td),description:this.$t.__("Share your content on your favorite social media platforms to drive engagement and increase your SEO.",this.$td)}}},computed:Object(o["a"])(Object(o["a"])({},Object(r["e"])("live-tags",["liveTags"])),{},{socialNetworks:function(){var e=this;return[{icon:"svg-twitter-rounded",link:"https://twitter.com/share?url="},{icon:"svg-facebook-rounded",link:"https://www.facebook.com/sharer/sharer.php?u="},{icon:"svg-pinterest-rounded",link:"https://pinterest.com/pin/create/button/?url="},{icon:"svg-linkedin-rounded",link:"http://www.linkedin.com/shareArticle?url="}].map((function(t){return Object(o["a"])(Object(o["a"])({},t),{},{link:t.link+e.liveTags.permalink})}))}})}),v=m,_=(s("35aa"),Object(u["a"])(v,b,f,!1,null,null,null)),g=_.exports,y=s("cf27"),w=s("927a");(function(e){if(Object(w["a"])()&&Object(w["e"])()&&e.editPost.PluginDocumentSettingPanel){var t=e.editPost.PluginDocumentSettingPanel,s=e.editPost.PluginPrePublishPanel,n=e.editPost.PluginPostPublishPanel,i=e.plugins.registerPlugin,a=window.aioseo.user;(a.capabilities.aioseo_page_analysis||a.capabilities.aioseo_page_general_settings||a.capabilities.aioseo_page_advanced_settings)&&i("aioseo",{render:function(){return e.element.createElement(e.element.Fragment,{},e.element.createElement(t,{title:"AIOSEO",className:"aioseo-document-setting aioseo-seo-overview",icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-document-setting"}))),e.element.createElement(s,{title:["AIOSEO",":",e.element.createElement("span",{class:"editor-post-publish-panel__link"})],className:"aioseo-pre-publish aioseo-seo-overview",initialOpen:!0,icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-pre-publish"}))),e.element.createElement(n,{title:"AIOSEO",initialOpen:!0,icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-post-publish"}))))}})}})(window.wp);var P=s("0d58"),$=(s("2d26"),s("96cf"),s("7b8f")),O=s("bba4"),k=s.n(O);if(n["default"].config.productionTip=!1,window.aioseo.currentPost&&"post"===window.aioseo.currentPost.context){var j=[{id:"aioseo-pre-publish",component:h},{id:"aioseo-document-setting",component:h},{id:"aioseo-post-publish",component:g}];j.forEach((function(e){document.getElementById(e.id)?new n["default"]({store:y["a"],render:function(t){return t(e.component)}}).$mount("#"+e.id):(Object($["a"])("#"+e.id,k()(e.id)),document.addEventListener("animationstart",(function(t){k()(e.id)===t.animationName&&new n["default"]({store:y["a"],render:function(t){return t(e.component)}}).$mount("#"+e.id)}),{passive:!0}))}))}window.addEventListener("load",(function(){Object(P["a"])(!1)}))},fa7a:function(e,t,s){"use strict";s("7476")}});