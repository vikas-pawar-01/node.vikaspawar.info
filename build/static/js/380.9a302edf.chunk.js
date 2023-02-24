"use strict";(self.webpackChunkmy_blog_frontend=self.webpackChunkmy_blog_frontend||[]).push([[380],{6017:function(e,n,t){t(2791);var r=t(184);n.Z=function(e){return(0,r.jsx)("div",{className:"center",children:e.children})}},1380:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r=t(2791),c=t(3360),a=t(5630),s=t(6030),i=t(5441),u=t(184),o=function(){var e=(0,s.v9)((function(e){return e.counter.value})),n=(0,s.I0)(),t=(0,r.useRef)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:"State Management Using Redux:"}),(0,u.jsx)(c.Z,{className:"btn-padding",variant:"success",onClick:function(){return n((0,i.nP)())},children:"+"}),(0,u.jsx)("span",{children:e}),(0,u.jsx)(c.Z,{className:"btn-padding",variant:"danger",onClick:function(){return n((0,i.Mj)())},children:"-"}),(0,u.jsx)(a.Z.Control,{type:"number",ref:t,placeholder:"Enter amount"}),(0,u.jsx)(c.Z,{className:"btn-margin-top",variant:"primary",onClick:function(){return n((0,i.ds)(t.current.value))},children:"Add Amount"})]})},l=t(4395),h=function(){var e=(0,r.useContext)(l.ZP),n=(0,r.useRef)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:"State Management with Context"}),(0,u.jsx)(c.Z,{className:"btn-padding",variant:"success",onClick:function(){return e.increment()},children:"+"}),(0,u.jsx)("span",{children:e.counter}),(0,u.jsx)(c.Z,{className:"btn-padding",variant:"danger",onClick:function(){return e.decrement()},children:"-"}),(0,u.jsx)(a.Z.Control,{type:"number",ref:n,placeholder:"Enter amount"}),(0,u.jsx)(c.Z,{className:"btn-margin-top",variant:"primary",onClick:function(){return e.incrementByAmount(n.current.value)},children:"Add Amount"})]})},d=function(){var e={a:1,b:[2,3],age:10,ol:{a:5,age:20},d:{age:30}},n=0;return function e(t,r){for(var c in t)"age"===c&&(n+=t.age),"object"==typeof t[c]&&null!=t[c]&&e(t[c],r)}(e,0),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("h2",{children:["Recurssive Function: Nested Age Total = ",n]}),(0,u.jsx)("pre",{children:JSON.stringify(e,null,2)})]})},x=t(9439),f=function(){var e=(0,r.useState)(),n=(0,x.Z)(e,2),t=n[0],c=n[1];return(0,r.useEffect)((function(){var e=setInterval((function(){var e=new Date,n="".concat(e.getDate(),"/").concat(e.getMonth(),"/").concat(e.getFullYear()," \n            ").concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds());c(n)}),1e3);return setTimeout((function(){clearInterval(e)}),1e6),function(){clearInterval(e)}}),[]),(0,u.jsxs)("h2",{children:["Timer: ",t]})},j=t(6017),m=function(){var e=(0,r.useState)(!1),n=(0,x.Z)(e,2),t=n[0],a=n[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{children:"Toggle Text:"}),!t&&(0,u.jsx)("p",{children:"Hello World."}),t&&(0,u.jsx)("p",{children:"Welcome."}),(0,u.jsx)(c.Z,{onClick:function(){a(!t)},children:"Changed!"})]})},p=function(){var e=(0,r.useState)("black"),n=(0,x.Z)(e,2),t=n[0],a=n[1],s=(0,r.useState)("show"),i=(0,x.Z)(s,2),o=i[0],l=i[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{className:t,children:["When you click on button, ",(0,u.jsx)("br",{}),"text turns red, ",(0,u.jsx)("br",{}),"after 1 sec, button disappears, ",(0,u.jsx)("br",{}),"after 3 seconds button reappaears and text turns black again"]}),(0,u.jsx)(c.Z,{className:o,onClick:function(){a("red"),setTimeout((function(){l("hide")}),1e3),setTimeout((function(){l("show"),a("black")}),3e3)},children:"Click!"})]})},g=t(5861),v=t(4687),b=t.n(v),k=function(){var e=(0,r.useState)(""),n=(0,x.Z)(e,2),t=n[0],a=n[1],s=(0,r.useState)([]),i=(0,x.Z)(s,2),o=i[0],l=i[1];(0,r.useEffect)((function(){var e=function(){var e=(0,g.Z)(b().mark((function e(){var n,t;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/todos");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,l(t.todos);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var h=function(){var e=(0,g.Z)(b().mark((function e(n){var r,c;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),0!==t.trim().length){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("http://localhost:8000/api/todo",{method:"POST",body:JSON.stringify({name:t}),headers:{"Content-Type":"application/json"}});case 6:return r=e.sent,e.next=9,r.json();case 9:if(c=e.sent,console.log(c),r.ok){e.next=13;break}throw new Error(c.message);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:a("");case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(n){return e.apply(this,arguments)}}();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{children:"Todo: "}),(0,u.jsx)("input",{type:"text",id:"name",name:"name",onChange:function(e){a(e.target.value)},value:t}),"\xa0\xa0",(0,u.jsx)(c.Z,{onClick:h,children:"Save"}),(0,u.jsx)("p",{children:"List Todo"}),(0,u.jsx)("ul",{children:o.map((function(e){return(0,u.jsx)("li",{children:e.name},e.key)}))})]})},Z=t(3293),C=(0,Z.cn)({key:"counterState",default:0}),y=(0,Z.cn)({key:"incrementByState",default:1}),S=function(){var e=(0,Z.FV)(C),n=(0,x.Z)(e,2),t=n[0],r=n[1],s=(0,Z.FV)(y),i=(0,x.Z)(s,2),o=i[0],l=i[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:"State Management with Recoil"}),(0,u.jsxs)("p",{children:["You have clicked button ",t," times."]}),(0,u.jsx)(a.Z.Control,{value:o,onChange:function(e){return l(Number(e.target.value))},type:"number",placeholder:"Enter number"}),(0,u.jsx)("br",{}),(0,u.jsx)(c.Z,{onClick:function(){return r(t+o)},children:"Set By Number"})]})},N=(0,t(32).Pi)((function(e){var n=e.counter,t=(0,r.useState)(1),s=(0,x.Z)(t,2),i=s[0],o=s[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:"State Management with Mobx"}),(0,u.jsxs)("p",{children:["You have clicked button ",n.numberOfClicks," times."]}),(0,u.jsx)(a.Z.Control,{value:i,onChange:function(e){return o(Number(e.target.value))},type:"number",placeholder:"Enter number"}),(0,u.jsx)("br",{}),(0,u.jsx)(c.Z,{onClick:function(){return n.increment(i)},children:"Set By Number"})]})})),w=t(3144),F=t(5671),T=t(4098),M=(0,w.Z)((function e(){var n=this;(0,F.Z)(this,e),this.numberOfClicks=0,this.increment=function(e){n.numberOfClicks+=e},(0,T.rC)(this,{numberOfClicks:T.LO,increment:T.aD})})),O=new M,E=function(){return(0,u.jsxs)(j.Z,{children:[(0,u.jsx)(f,{}),(0,u.jsx)("hr",{}),(0,u.jsx)(o,{}),(0,u.jsx)("hr",{}),(0,u.jsx)(h,{}),(0,u.jsx)("hr",{}),(0,u.jsx)(S,{}),(0,u.jsx)("hr",{}),(0,u.jsx)(N,{counter:O}),(0,u.jsx)("hr",{}),(0,u.jsx)(d,{}),(0,u.jsx)("hr",{}),(0,u.jsx)(m,{}),(0,u.jsx)("hr",{}),(0,u.jsx)(p,{}),(0,u.jsx)("hr",{}),(0,u.jsx)(k,{})]})}}}]);
//# sourceMappingURL=380.9a302edf.chunk.js.map