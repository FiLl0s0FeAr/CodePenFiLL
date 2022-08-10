(this.webpackJsonpcodepenfill=this.webpackJsonpcodepenfill||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},45:function(e,t,n){},52:function(e,t,n){},77:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var r,a=n(1),i=n.n(a),c=n(21),o=n.n(c),s=(n(45),n(7)),l=n(16),u=n(9),d=n(10),p=n(2),j=n.n(p),b=n(4),v=function(e){return{type:"PROMISE",status:"PENDING",name:e}},f=function(e,t){return{type:"PROMISE",status:"RESOLVED",name:e,payload:t}},h=function(e,t){return{type:"PROMISE",status:"REJECTED",name:e,error:t}},m=function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(r){var a;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(v(e)),n.prev=1,n.next=4,t;case 4:return a=n.sent,r(f(e,a)),n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(1),r(h(e,n.t0));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},O=n(14),x=(r="/graphql",function(e,t){return fetch(r,{method:"POST",headers:Object(O.a)({"content-type":"application/json"},localStorage.authToken?{Authorization:"Bearer "+localStorage.authToken}:{}),body:JSON.stringify({query:e,variables:t})}).then((function(e){return e.json()}))}),g=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"query login($login:String!, $password:String!) {\n      login(\n         login: $login,\n         password: $password\n      )\n   }",e.next=3,x("query login($login:String!, $password:String!) {\n      login(\n         login: $login,\n         password: $password\n      )\n   }",{login:t,password:n});case 3:return r=e.sent,localStorage.authToken=r.data.login,console.log(r),e.abrupt("return",r.data.login);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"mutation reg($login:String!, $password:String!) {\n      createUser(\n         login: $login,\n         password: $password\n      ) {\n         _id\n      }\n   }",e.next=3,x("mutation reg($login:String!, $password:String!) {\n      createUser(\n         login: $login,\n         password: $password\n      ) {\n         _id\n      }\n   }",{login:t,password:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"query userOne($query:String) {\n      UserFindOne(query:$query) {\n         _id  avatar {\n            url\n         }\n      }\n   }",e.next=3,x("query userOne($query:String) {\n      UserFindOne(query:$query) {\n         _id  avatar {\n            url\n         }\n      }\n   }",{query:JSON.stringify([{_id:t}])});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"mutation setAvatar($idUser:String , $idAvatar:ID) { \n      UserUpsert(user:{_id: $idUser, avatar: {_id: $idAvatar}}) {\n         _id, avatar {\n            url\n         }\n      }\n   }",e.next=3,x("mutation setAvatar($idUser:String , $idAvatar:ID) { \n      UserUpsert(user:{_id: $idUser, avatar: {_id: $idAvatar}}) {\n         _id, avatar {\n            url\n         }\n      }\n   }",{idUser:t,idAvatar:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"mutation newSnippet($snippet:SnippetInput) {\n      SnippetUpsert(snippet:$snippet){\n        _id\n      }\n   }",e.next=3,x("mutation newSnippet($snippet:SnippetInput) {\n      SnippetUpsert(snippet:$snippet){\n        _id\n      }\n   }",{snippet:{title:t,description:n,files:r,_id:a}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"query snippetFind($query:String) {\n      SnippetFind(query:$query) {\n         owner {\n            _id\n         }\n         title description _id files {\n            type text name\n         }\n      }\n   }",e.next=3,x("query snippetFind($query:String) {\n      SnippetFind(query:$query) {\n         owner {\n            _id\n         }\n         title description _id files {\n            type text name\n         }\n      }\n   }",{query:JSON.stringify([{_id:t}])});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"query snippetFind($query:String) {\n      SnippetFind(query:$query) {\n         owner {\n            _id\n         }\n         title description _id files {\n            type text name\n         }\n      }\n   }",e.next=3,x("query snippetFind($query:String) {\n      SnippetFind(query:$query) {\n         owner {\n            _id\n         }\n         title description _id files {\n            type text name\n         }\n      }\n   }",{query:JSON.stringify([{___owner:t},{sort:[{_id:-1}]}])});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"query snippetFind($query:String) {\n      SnippetFind(query:$query) {\n         owner {\n            _id login\n         }\n         title description _id files {\n            type text name\n         }\n      }\n   }",e.next=3,x("query snippetFind($query:String) {\n      SnippetFind(query:$query) {\n         owner {\n            _id login\n         }\n         title description _id files {\n            type text name\n         }\n      }\n   }",{query:JSON.stringify([{$or:[{title:"/".concat(t.trim().split(" ").join("|"),"/")},{description:"/".concat(t.trim().split(" ").join("|"),"/")}]},{sort:[{title:1}]}])});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(e,t){return m("login",g(e,t))},q=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,a,i,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(m("findUser",S(null===(r=n())||void 0===r||null===(a=r.auth)||void 0===a||null===(i=a.payload)||void 0===i||null===(c=i.sub)||void 0===c?void 0:c.id)));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},T=function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(r){var a;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r($(e,t));case 2:return null!==(a=n.sent)?r({type:"LOGIN",token:a}):(alert("User doesn\u2019t exist!"),localStorage.clear()),n.next=6,r(q());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(e,t){return m("reg",y(e,t))},I=n(5),U=(n(52),n(53),n(0)),A=(n(29),function(e){var t=e.history;return Object(U.jsxs)("div",{class:"px-4 py-5 my-5 text-center",children:[Object(U.jsx)("h1",{class:"display-5 fw-bold",children:"CodePen FiLL Project"}),Object(U.jsxs)("div",{class:"col-lg-6 mx-auto",children:[Object(U.jsx)("p",{class:"lead mb-4",children:'CodePen is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets. It functions as an online code editor and open-source learning environment, where developers can create code snippets, called "pens," and test them. It was founded in 2012 by full-stack developers Alex Vazquez and Tim Sabat and front-end designer Chris Coyier. Its employees work remotely, rarely all meeting together in person. CodePen is a large community for web designers and developers to showcase their coding skills, with an estimated 330,000 registered users and 14.16 million monthly visitors.'}),Object(U.jsxs)("div",{class:"d-grid gap-2 d-sm-flex justify-content-sm-center",children:[Object(U.jsx)("button",{type:"button",class:"btn btn-primary btn-lg px-4 gap-3",onClick:function(){return t.push("./login")},children:"Login"}),Object(U.jsx)("button",{type:"button",class:"btn btn-outline-secondary btn-lg px-4",onClick:function(){return t.push("./reg")},children:"Registration"})]})]})]})}),E=(n(27),n(40)),L=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new FormData).append("photo",e),t.next=4,n(m("upload",fetch("/upload",{method:"POST",headers:localStorage.authToken?{Authorization:"Bearer "+localStorage.authToken}:{},body:r}).then((function(e){return e.json()}))));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n,r){var a,i,c,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(m("setAvatar",w(null===(a=r())||void 0===a||null===(i=a.auth)||void 0===i||null===(c=i.payload)||void 0===c||null===(o=c.sub)||void 0===o?void 0:o.id,e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};var D=Object(s.b)((function(e){var t,n,r,a,i,c;return{link:null===e||void 0===e||null===(t=e.promise)||void 0===t||null===(n=t.findUser)||void 0===n||null===(r=n.payload)||void 0===r||null===(a=r.data)||void 0===a||null===(i=a.UserFindOne)||void 0===i||null===(c=i.avatar)||void 0===c?void 0:c.url}}))((function(e){var t=e.link;return Object(U.jsx)("img",{src:t?"http://localhost:3000/"+t:"".concat(".","/img/defaultAvatar.jpg"),className:"avatar",alt:"avatar"})})),B=Object(s.b)(null,{onUpload:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(L(e));case 2:return r=t.sent,t.next=5,n(P(r._id));case 5:return t.next=7,n(q());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.onUpload,n=Object(E.a)(),r=n.acceptedFiles,a=n.getRootProps,i=n.getInputProps,c=r.map((function(e){return t(e)}));return console.log(c),Object(U.jsxs)("div",Object(O.a)(Object(O.a)({},a({})),{},{children:[Object(U.jsx)("input",Object(O.a)({},i())),Object(U.jsx)(D,{})]}))})),M=Object(s.b)((function(e){var t,n,r;return{username:null===e||void 0===e||null===(t=e.auth)||void 0===t||null===(n=t.payload)||void 0===n||null===(r=n.sub)||void 0===r?void 0:r.login,logedIn:e.auth.token}}),{onLogOut:function(){return{type:"LOGOUT"}}})((function(e){var t=e.username,n=e.onLogOut;return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)("header",{class:"d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom",children:[Object(U.jsxs)("div",{class:"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none",children:[Object(U.jsx)(B,{}),Object(U.jsx)("span",{class:"fs-4",children:"CodePen FiLL"})]}),Object(U.jsxs)("ul",{class:"nav nav-pills",children:[Object(U.jsx)("li",{class:"nav-item",children:Object(U.jsx)("a",{href:"/new-snippet",class:"nav-link active","aria-current":"page",children:t})}),Object(U.jsx)("li",{class:"nav-item",children:Object(U.jsx)("a",{href:"/search",class:"nav-link",children:"Search"})}),Object(U.jsx)("li",{class:"nav-item",children:Object(U.jsx)("a",{href:"/snippets",class:"nav-link",children:"My Snippets"})}),Object(U.jsx)("li",{class:"nav-item",children:Object(U.jsx)("a",{href:"/",class:"nav-link",onClick:function(){return n()},children:"Log out"})})]})]})})})),z=function(){return Object(U.jsx)("nav",{children:Object(U.jsx)(M,{})})},J=n(15),R={textmate:"textmate",monokai:"monokai",xcode:"xcode",terminal:"terminal",github:"github",solarized_dark:"solarized_dark"},G=function(e){var t=e.listObj,n=void 0===t?R:t,r=e.onChange,a=e.value;return Object(U.jsx)("select",{class:"btn btn-primary dropdown-toggle dropdown-toggle-split",value:a,onChange:function(e){return r(e.target.value)},children:Object.entries(n).map((function(e){var t=Object(I.a)(e,2),n=t[0],r=t[1];return Object(U.jsx)("option",{class:"dropdown-item",value:n,children:r},n)}))})},V={12:12,16:16,20:20,28:28,32:32,40:40},H=function(e){var t=e.listObj,n=void 0===t?V:t,r=e.onChange,a=e.value;return Object(U.jsx)("select",{class:"btn btn-primary dropdown-toggle dropdown-toggle-split",value:a,onChange:function(e){return r(e.target.value)},children:Object.entries(n).map((function(e){var t=Object(I.a)(e,2),n=t[0],r=t[1];return Object(U.jsx)("option",{class:"dropdown-item",value:n,children:r},n)}))})},Y=n(36),K=n.n(Y),Q=(n(60),n(61),n(62),n(63),n(64),n(65),n(66),n(67),n(68),n(69),n(70),n(71),n(72),n(73),n(74),n(75),n(76),{html:"html",css:"css",javascript:"javascript",java:"java",python:"python",xml:"xml",json:"json",typescript:"typescript",markdown:"markdown",mysql:"mysql"}),W=function(e){var t=e.listObj,n=void 0===t?Q:t,r=e.onChange,a=e.value;return Object(U.jsx)("select",{class:"btn btn-primary dropdown-toggle dropdown-toggle-split",value:a,onChange:function(e){return r(e.target.value)},children:Object.entries(n).map((function(e){var t=Object(I.a)(e,2),n=t[0],r=t[1];return Object(U.jsx)("option",{class:"dropdown-item",value:n,children:r},n)}))})},X=(n(77),function(e){var t=e.data,n=void 0===t?{type:"",name:"",text:"",index:""}:t,r=e.onChange,a=e.theme,i=e.font;return Object(U.jsxs)("div",{className:"all_editors",children:[" ","Editor: "," ",Object(U.jsx)(W,{onChange:function(e){return r({type:e,text:n.text,name:n.name})},value:n.type}),Object(U.jsx)("br",{}),"Name of editor: ",Object(U.jsx)("input",{placeholder:"Enter a name for your editor",type:"text",value:n.name,onChange:function(e){return r({type:n.type,text:n.text,name:e.target.value})}}),Object(U.jsx)(K.a,{className:"editor",value:n.text,onChange:function(e){return r({type:n.type,text:e,name:n.name})},placeholder:"Enter some code",mode:n.type,name:n.name,theme:a,fontSize:Number(i),showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})]})}),Z=[{type:"html",name:"",text:""},{type:"css",name:"",text:""},{type:"javascript",name:"",text:""}],ee=function(e,t,n,r){return function(){var a=Object(b.a)(j.a.mark((function a(i){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i(m("addSnippet",k(e,t,n,r)));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},te=function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(z,{}),Object(U.jsx)(ne,{})]})},ne=Object(s.b)(null,{onSave:ee})((function(e){var t=e.onSave,n=Object(a.useState)(Z),r=Object(I.a)(n,2),i=r[0],c=r[1],o=Object(a.useState)(""),s=Object(I.a)(o,2),l=s[0],u=s[1],d=Object(a.useState)(""),p=Object(I.a)(d,2),j=p[0],b=p[1],v=Object(a.useState)(""),f=Object(I.a)(v,2),h=f[0],m=f[1],O=Object(a.useState)(),x=Object(I.a)(O,2),g=x[0],y=x[1],S=Object(a.useState)(),w=Object(I.a)(S,2),k=w[0],C=w[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){var e={html:"",css:"",javascript:""};i.forEach((function(t){var n=t.type,r=t.text;return e[n]=r})),m("\n            <html>\n              <body>".concat(e.html,"</body>\n              <style>").concat(e.css,"</style>\n              <script>").concat(e.javascript,"<\/script>\n            </html>\n          "))}),300);return function(){return clearTimeout(e)}}),[i]),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("br",{}),"Theme: ",Object(U.jsx)(G,{onChange:y,value:g}),Object(U.jsx)("br",{}),"FontSize: ",Object(U.jsx)(H,{onChange:C,value:k}),Object(U.jsx)("br",{}),Object(U.jsx)("button",{class:"btn btn-outline-secondary btn-lg px-4",onClick:function(){return c([].concat(Object(J.a)(i),[{type:"",name:"",text:""}]))},children:"+"}),Object(U.jsx)("button",{class:"btn btn-outline-secondary btn-lg px-4",onClick:function(){i.pop(),c(Object(J.a)(i))},children:"-"}),Object(U.jsx)("br",{}),i.map((function(e,t){return Object(U.jsx)(X,{data:e,theme:g,font:k,onChange:function(e){var n=Object(J.a)(i);n.splice(t,1,e),c(n)}},t)})),Object(U.jsx)("div",{className:"pane",children:Object(U.jsx)("iframe",{srcDoc:h,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})}),Object(U.jsxs)("div",{class:"mb-3",children:[Object(U.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Set Snippet name"}),Object(U.jsx)("input",{type:"email",class:"form-control",placeholder:"Snippet name",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(U.jsxs)("div",{class:"mb-3",children:[Object(U.jsx)("label",{for:"exampleFormControlTextarea1",class:"form-label",children:"Description"}),Object(U.jsx)("textarea",{class:"form-control",rows:"1",placeholder:"Add Your Description",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(U.jsx)("div",{class:"col-12",children:Object(U.jsx)("button",{class:"btn btn-primary",type:"submit",onClick:function(){return t(l,j,i)},children:"Create snippet"})})]})})),re=Object(s.b)((function(e){var t,n,r,a;return{snippets:null===e||void 0===e||null===(t=e.promise)||void 0===t||null===(n=t.searchSnippet)||void 0===n||null===(r=n.payload)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.SnippetFind}}),{onSearch:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(m("searchSnippet",F(e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.onSearch,n=e.snippets,r=Object(a.useState)(""),i=Object(I.a)(r,2),c=i[0],o=i[1];return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(z,{}),Object(U.jsx)("br",{}),Object(U.jsxs)("div",{children:[Object(U.jsx)("input",{value:c,onChange:function(e){return o(e.target.value)},type:"search",placeholder:"Name or description","aria-label":"Search"}),Object(U.jsx)("br",{}),Object(U.jsx)("div",{children:Object(U.jsx)("button",{class:"btn btn-outline-secondary px-4",onClick:function(){return t(c)},children:"Search"})})]}),Object(U.jsx)("div",{children:null===n||void 0===n?void 0:n.map((function(e){return Object(U.jsx)("div",{children:Object(U.jsx)("div",{class:"card",children:Object(U.jsxs)("div",{class:"card-body",children:[Object(U.jsx)("h5",{class:"card-title",children:"Name: ".concat(e.title)||!1}),Object(U.jsx)("p",{class:"card-text",children:"Description: ".concat(e.description)||!1}),Object(U.jsx)("p",{children:"Owner: ".concat(e.owner.login)}),Object(U.jsx)("img",{class:"card-img-top",src:"".concat(".","/img/defaultProject.jpg"),alt:"code"}),Object(U.jsx)("p",{}),Object(U.jsx)("div",{children:Object(U.jsx)(l.b,{to:"/search-snippet/"+e._id,children:Object(U.jsx)("button",{class:"btn btn-primary",children:"Open snippet"})})})]})})},e._id)}))})]})})),ae=re,ie=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(m("findSnippetById",C(e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ce=Object(s.b)((function(e){var t,n,r,a,i,c,o,s,l,u,d,p,j,b,v,f,h,m;return{titleText:null===e||void 0===e||null===(t=e.promise)||void 0===t||null===(n=t.findSnippetById)||void 0===n||null===(r=n.payload)||void 0===r||null===(a=r.data)||void 0===a||null===(i=a.SnippetFind)||void 0===i||null===(c=i[0])||void 0===c?void 0:c.title,descriptionText:null===e||void 0===e||null===(o=e.promise)||void 0===o||null===(s=o.findSnippetById)||void 0===s||null===(l=s.payload)||void 0===l||null===(u=l.data)||void 0===u||null===(d=u.SnippetFind)||void 0===d||null===(p=d[0])||void 0===p?void 0:p.description,filesArr:null===e||void 0===e||null===(j=e.promise)||void 0===j||null===(b=j.findSnippetById)||void 0===b||null===(v=b.payload)||void 0===v||null===(f=v.data)||void 0===f||null===(h=f.SnippetFind)||void 0===h||null===(m=h[0])||void 0===m?void 0:m.files}}),{getSnippet:ie})((function(e){var t,n,r,i=e.getSnippet,c=e.match.params.id,o=e.titleText,s=e.descriptionText,l=e.filesArr;Object(a.useEffect)((function(){i(c)}),[c,i]);var u=Object(a.useState)([]),d=Object(I.a)(u,2),p=d[0],j=d[1],b=Object(a.useState)(""),v=Object(I.a)(b,2),f=v[0],h=v[1],m=Object(a.useState)(""),O=Object(I.a)(m,2),x=O[0],g=O[1];Object(a.useEffect)((function(){j(l),h(o),g(s)}),[l,o,s]);var y=Object(a.useState)(""),S=Object(I.a)(y,2),w=S[0],k=S[1],C=null===p||void 0===p||null===(t=p.filter((function(e){return"html"===(null===e||void 0===e?void 0:e.type)}))[0])||void 0===t?void 0:t.text,N=null===p||void 0===p||null===(n=p.filter((function(e){return"css"===(null===e||void 0===e?void 0:e.type)}))[0])||void 0===n?void 0:n.text,F=null===p||void 0===p||null===(r=p.filter((function(e){return"javascript"===(null===e||void 0===e?void 0:e.type)}))[0])||void 0===r?void 0:r.text;return console.log(F),Object(a.useEffect)((function(){var e=setTimeout((function(){k("\n            <html>\n              <body>".concat(C,"</body>\n              <style>").concat(N,"</style>\n              <script>").concat(F,"<\/script>\n            </html>\n          "))}),250);return function(){return clearTimeout(e)}}),[C,N,F]),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(z,{}),Object(U.jsxs)("div",{class:"mb-3",children:[Object(U.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Snippet name"}),Object(U.jsx)("input",{type:"email",class:"form-control",placeholder:"Default Snippet Name",value:f,onChange:function(e){return h(e.target.value)}})]}),Object(U.jsxs)("div",{class:"mb-3",children:[Object(U.jsx)("label",{for:"exampleFormControlTextarea1",class:"form-label",children:"Description"}),Object(U.jsx)("textarea",{class:"form-control",placeholder:"Default Description",value:x,onChange:function(e){return g(e.target.value)},rows:"1"})]}),Object(U.jsx)("br",{}),null===p||void 0===p?void 0:p.map((function(e,t){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(X,{data:e,onChange:function(e){var n=e.type,r=e.name,a=e.text;return j([].concat(Object(J.a)(p.slice(0,t)),[{type:n,name:r,text:a}],Object(J.a)(p.slice(t,1))))}})})})),Object(U.jsx)("br",{}),Object(U.jsx)("div",{children:Object(U.jsx)("div",{children:Object(U.jsx)("iframe",{className:"pane",srcDoc:w,title:"output",sandbox:"allow-scripts",frameBorder:"0",style:{marginTop:20},width:"95%",height:"95%"})})})]})})),oe=ce,se=Object(s.b)((function(e){var t,n,r,a;return{snippets:null===e||void 0===e||null===(t=e.promise)||void 0===t||null===(n=t.findSnippet)||void 0===n||null===(r=n.payload)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.SnippetFind}}))((function(e){var t=e.snippets;return t?Object(U.jsxs)("div",{children:[Object(U.jsx)(z,{}),Object(U.jsx)("div",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(U.jsx)("div",{children:Object(U.jsx)("div",{class:"card",children:Object(U.jsxs)("div",{children:[Object(U.jsx)("h5",{class:"card-title",children:"Name: ".concat(e.title)||!1}),Object(U.jsx)("p",{class:"card-text",children:"Description: ".concat(e.description)||!1}),Object(U.jsx)("img",{class:"card-img-top",src:"".concat(".","/img/defaultProject.jpg"),alt:"code"}),Object(U.jsx)("div",{children:Object(U.jsx)(l.b,{to:"/snippet/"+e._id,children:Object(U.jsx)("button",{class:"btn btn-primary",children:"Open project"})})})]})})},e._id)}))})]}):Object(U.jsxs)("div",{children:[Object(U.jsx)(l.b,{to:"/",children:Object(U.jsx)("button",{children:"Back to Main Page"})})," ",Object(U.jsx)("br",{})," ",Object(U.jsx)("br",{}),Object(U.jsx)("div",{children:Object(U.jsx)("span",{style:{margin:10,fontSize:20},children:"Loading..."})})]})})),le=Object(s.b)((function(e){var t,n,r,a,i,c,o,s,l,u,d,p,j,b,v,f,h,m;return{titleText:null===e||void 0===e||null===(t=e.promise)||void 0===t||null===(n=t.findSnippetById)||void 0===n||null===(r=n.payload)||void 0===r||null===(a=r.data)||void 0===a||null===(i=a.SnippetFind)||void 0===i||null===(c=i[0])||void 0===c?void 0:c.title,descriptionText:null===e||void 0===e||null===(o=e.promise)||void 0===o||null===(s=o.findSnippetById)||void 0===s||null===(l=s.payload)||void 0===l||null===(u=l.data)||void 0===u||null===(d=u.SnippetFind)||void 0===d||null===(p=d[0])||void 0===p?void 0:p.description,filesArr:null===e||void 0===e||null===(j=e.promise)||void 0===j||null===(b=j.findSnippetById)||void 0===b||null===(v=b.payload)||void 0===v||null===(f=v.data)||void 0===f||null===(h=f.SnippetFind)||void 0===h||null===(m=h[0])||void 0===m?void 0:m.files}}),{getSnippet:ie,onSave:ee})((function(e){var t,n,r,i=e.onSave,c=e.getSnippet,o=e.match.params.id,s=e.titleText,l=e.descriptionText,u=e.filesArr;Object(a.useEffect)((function(){c(o)}),[o,c]);var d=Object(a.useState)([]),p=Object(I.a)(d,2),j=p[0],b=p[1],v=Object(a.useState)(""),f=Object(I.a)(v,2),h=f[0],m=f[1],O=Object(a.useState)(""),x=Object(I.a)(O,2),g=x[0],y=x[1];Object(a.useEffect)((function(){b(u),m(s),y(l)}),[u,s,l]);var S=Object(a.useState)(""),w=Object(I.a)(S,2),k=w[0],C=w[1],N=null===j||void 0===j||null===(t=j.filter((function(e){return"html"===(null===e||void 0===e?void 0:e.type)}))[0])||void 0===t?void 0:t.text,F=null===j||void 0===j||null===(n=j.filter((function(e){return"css"===(null===e||void 0===e?void 0:e.type)}))[0])||void 0===n?void 0:n.text,$=null===j||void 0===j||null===(r=j.filter((function(e){return"js"===(null===e||void 0===e?void 0:e.type)}))[0])||void 0===r?void 0:r.text;return console.log($),Object(a.useEffect)((function(){var e=setTimeout((function(){C("\n            <html>\n              <body>".concat(N,"</body>\n              <style>").concat(F,"</style>\n              <script>").concat($,"<\/script>\n            </html>\n          "))}),250);return function(){return clearTimeout(e)}}),[N,F,$]),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(z,{}),Object(U.jsxs)("div",{class:"mb-3",children:[Object(U.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Snippet name"}),Object(U.jsx)("input",{type:"email",class:"form-control",placeholder:"Default Snippet Name",value:h,onChange:function(e){return m(e.target.value)}})]}),Object(U.jsxs)("div",{class:"mb-3",children:[Object(U.jsx)("label",{for:"exampleFormControlTextarea1",class:"form-label",children:"Description"}),Object(U.jsx)("textarea",{class:"form-control",placeholder:"Default Description",value:g,onChange:function(e){return y(e.target.value)},rows:"1"})]}),Object(U.jsx)("div",{class:"col-12",children:Object(U.jsx)("button",{class:"btn btn-primary",type:"submit",onClick:function(){return i(h,g,j)},children:"Update snippet"})}),Object(U.jsx)("br",{}),null===j||void 0===j?void 0:j.map((function(e,t){return Object(U.jsx)(X,{data:e,onChange:function(e){var n=Object(J.a)(j);n.splice(t,1,e),b(n)}},t)})),Object(U.jsx)("div",{className:"pane",children:Object(U.jsx)("iframe",{srcDoc:k,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})})]})})),ue=le,de=d.a(),pe=Object(s.b)(null,{onLogin:T})((function(e){var t=e.onLogin,n=Object(a.useState)(""),r=Object(I.a)(n,2),i=r[0],c=r[1],o=Object(a.useState)(""),s=Object(I.a)(o,2),l=s[0],u=s[1];return Object(U.jsx)("div",{className:"Auth-form-container",children:Object(U.jsxs)("div",{className:"Auth-form-content",children:[Object(U.jsx)("h3",{className:"Auth-form-title",children:"Sign In"}),Object(U.jsxs)("div",{className:"form-group mt-3",children:[Object(U.jsx)("label",{children:"Username"}),Object(U.jsx)("input",{type:"login",className:"form-control mt-1",placeholder:"Enter username",value:i,onChange:function(e){return c(e.target.value)}})]}),Object(U.jsxs)("div",{className:"form-group mt-3",children:[Object(U.jsx)("label",{children:"Password"}),Object(U.jsx)("input",{type:"password",className:"form-control mt-1",placeholder:"Enter password",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(U.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(U.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:!i||!l,onClick:function(){return t(i,l)},children:"Submit"})}),Object(U.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(U.jsx)("a",{href:"/",children:Object(U.jsx)("button",{type:"button",className:"btn btn-primary main-page",children:"Main page"})})})]})})})),je=Object(s.b)(null,{Reg:function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(r){var a,i;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r(_(e,t));case 2:null!==(null===(i=n.sent)||void 0===i||null===(a=i.data)||void 0===a?void 0:a.createUser)?r(T(e,t)):alert("User already exists!");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.Reg,n=Object(a.useState)(""),r=Object(I.a)(n,2),i=r[0],c=r[1],o=Object(a.useState)(""),s=Object(I.a)(o,2),l=s[0],u=s[1],d=Object(a.useState)(""),p=Object(I.a)(d,2),j=p[0],b=p[1];return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)("div",{className:"Auth-form-container",children:Object(U.jsxs)("div",{className:"Auth-form-content",children:[Object(U.jsx)("h3",{className:"Auth-form-title",children:"Sign Up"}),Object(U.jsxs)("div",{className:"form-group mt-3",children:[Object(U.jsx)("label",{children:"Username"}),Object(U.jsx)("input",{type:"login",className:"form-control mt-1",placeholder:"Enter username",value:i,onChange:function(e){return c(e.target.value)}})]}),Object(U.jsxs)("div",{className:"form-group mt-3",children:[Object(U.jsx)("label",{children:"Password"}),Object(U.jsx)("input",{type:"password",className:"form-control mt-1",placeholder:"Enter password",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(U.jsxs)("div",{className:"form-group mt-3",children:[Object(U.jsx)("label",{children:"Confinm Password"}),Object(U.jsx)("input",{type:"password",className:"form-control mt-1",placeholder:"Confinm Password",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(U.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(U.jsxs)("button",{type:"submit",className:"btn btn-primary main-page",disabled:!i||!l||l!==j,onClick:function(){return t(i,l)},children:["Submit."," "]})}),Object(U.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(U.jsx)("a",{href:"/",children:Object(U.jsx)("button",{type:"button",className:"btn btn-primary main-page",children:"Main page"})})})]})})})})),be=Object(s.b)((function(e){return{token:e.auth.token}}),null)((function(e){var t=e.token;return Object(U.jsx)("div",{className:"App",children:Object(U.jsxs)(l.a,{history:de,children:[t&&Object(U.jsxs)(u.d,{children:[Object(U.jsx)(u.a,{from:"/login",to:"/new-snippet"}),Object(U.jsx)(u.a,{from:"/reg",to:"/new-snippet"}),Object(U.jsx)(u.b,{exact:!0,path:"/new-snippet",component:te}),Object(U.jsx)(u.b,{path:"/snippets",component:se}),Object(U.jsx)(u.b,{path:"/search-snippet/:id",component:oe}),Object(U.jsx)(u.b,{path:"/snippet/:id",component:ue}),Object(U.jsx)(u.b,{path:"/search",component:ae})]}),!t&&Object(U.jsxs)(u.d,{children:[Object(U.jsx)(u.b,{path:"/login",component:pe}),Object(U.jsx)(u.b,{path:"/reg",component:je}),Object(U.jsx)(u.b,{path:"/",component:A})]})]})})})),ve=n(24),fe=n(38),he=n(39),me=function(e){return JSON.parse(Object(he.decode)(e.split(".")[1]))};var Oe=function(e,t){var n=t.type,r=t.token;if(void 0===e){if(!localStorage.authToken)return{};n="LOGIN",r=localStorage.authToken}return"LOGIN"===n?(console.log("LOGIN"),localStorage.authToken=r,{token:r,payload:me(r)}):"LOGOUT"===n?(console.log("LOGOUT"),localStorage.removeItem("authToken"),{}):e},xe=n(22);var ge,ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.status,a=t.payload,i=t.error,c=t.name;return"PROMISE"===n?Object(O.a)(Object(O.a)({},e),{},Object(xe.a)({},c,{status:r,payload:a,error:i})):e},Se=Object(ve.b)({promise:ye,auth:Oe}),we=Object(ve.c)(Se,Object(ve.a)(fe.a));we.subscribe((function(){return console.log(we.getState())})),localStorage.authToken&&(we.dispatch(q()),we.dispatch((ge=we.getState().auth.payload.sub.id,function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(m("findSnippet",N(ge)));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));var ke=we;n(81);var Ce=function(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(s.a,{store:ke,children:Object(U.jsx)(be,{})})})},Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};o.a.render(Object(U.jsx)(i.a.StrictMode,{children:Object(U.jsx)(Ce,{})}),document.getElementById("root")),Ne()}},[[82,1,2]]]);
//# sourceMappingURL=main.236b1c25.chunk.js.map