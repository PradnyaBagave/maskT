(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fee37f4e"],{"04d0":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("RwvListErrors",{attrs:{errors:t.errors}}),r("form",{on:{submit:function(e){e.preventDefault(),t.onPublish(t.article.slug)}}},[r("fieldset",{attrs:{disabled:t.inProgress}},[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?"},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)"},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.tagInput,expression:"tagInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags"},domProps:{value:t.tagInput},on:{keypress:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault(),t.addTag(t.tagInput)},input:function(e){e.target.composing||(t.tagInput=e.target.value)}}}),r("div",{staticClass:"tag-list"},t._l(t.article.tagList,function(e,s){return r("span",{key:e+s,staticClass:"tag-default tag-pill"},[r("i",{staticClass:"ion-close-round",on:{click:function(r){t.removeTag(e)}}}),t._v("\n                  "+t._s(e)+"\n                ")])}),0)])]),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{disabled:t.inProgress,type:"submit"}},[t._v("\n            Publish Article\n          ")])])],1)])])])},a=[],n=r("be94"),i=(r("96cf"),r("1da1")),o=r("2f62"),c=r("4360"),l=r("e98d"),u=r("6c33"),p={name:"RwvArticleEdit",components:{RwvListErrors:l["a"]},props:{previousArticle:{type:Object,required:!1}},beforeRouteUpdate:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,r,s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].dispatch(u["f"]);case 2:return t.abrupt("return",s());case 3:case"end":return t.stop()}},t,this)}));function e(e,r,s){return t.apply(this,arguments)}return e}(),beforeRouteEnter:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,r,s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].dispatch(u["f"]);case 2:if(void 0===e.params.slug){t.next=5;break}return t.next=5,c["a"].dispatch(u["l"],e.params.slug,e.params.previousArticle);case 5:return t.abrupt("return",s());case 6:case"end":return t.stop()}},t,this)}));function e(e,r,s){return t.apply(this,arguments)}return e}(),beforeRouteLeave:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,r,s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].dispatch(u["f"]);case 2:s();case 3:case"end":return t.stop()}},t,this)}));function e(e,r,s){return t.apply(this,arguments)}return e}(),data:function(){return{tagInput:null,inProgress:!1,errors:{}}},computed:Object(n["a"])({},Object(o["b"])(["article"])),methods:{onPublish:function(t){var e=this,r=t?u["b"]:u["e"];this.inProgress=!0,this.$store.dispatch(r).then(function(t){var r=t.data;e.inProgress=!1,e.$router.push({name:"article",params:{slug:r.article.slug}})}).catch(function(t){var r=t.response;e.inProgress=!1,e.errors=r.data.errors})},removeTag:function(t){this.$store.dispatch(u["d"],t)},addTag:function(t){this.$store.dispatch(u["c"],t),this.tagInput=null}}},d=p,f=r("2877"),m=Object(f["a"])(d,s,a,!1,null,null,null);m.options.__file="ArticleEdit.vue";e["default"]=m.exports},e98d:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"error-messages"},t._l(t.errors,function(e,s){return r("li",{key:s},[r("span",{domProps:{textContent:t._s(s)}}),t._l(e,function(e){return r("span",{key:e,domProps:{textContent:t._s(e)}})})],2)}),0)},a=[],n=(r("cadf"),r("551c"),r("097d"),{name:"RwvListErorrs",props:{errors:{type:Object,required:!0}}}),i=n,o=r("2877"),c=Object(o["a"])(i,s,a,!1,null,null,null);c.options.__file="ListErrors.vue";e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-fee37f4e.cbc50a5c.js.map