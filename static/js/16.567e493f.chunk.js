(this.webpackJsonpcomfeey=this.webpackJsonpcomfeey||[]).push([[16],{158:function(e,t,c){},174:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return O}));var s=c(3),n=c(1),i=c(19),r=c(5),a=c(11),l=c(21),o=c(14),d=c(156),j=c(0);function b(){var e=Object(a.b)(),t=Object(n.useState)([100,3e3]),c=Object(s.a)(t,2),i=c[0],r=c[1];return Object(j.jsxs)("div",{className:"category--filter",children:[Object(j.jsx)("h4",{className:"subtitle mt-0",children:"price"}),Object(j.jsx)(d.Range,{values:i,step:10,min:100,max:3e3,onChange:function(t){r(t),e(Object(o.c)({target:"price",value:{min:t[0],max:t[1]}}))},renderTrack:function(e){var t=e.props,c=e.children;return Object(j.jsx)("div",{onMouseDown:t.onMouseDown,onTouchStart:t.onTouchStart,style:Object(l.a)(Object(l.a)({},t.style),{},{height:"8px",width:"100%",margin:"0 auto"}),children:Object(j.jsx)("div",{ref:t.ref,style:{height:"4px",width:"100%",borderRadius:"10px",background:"#ccc",alignSelf:"center"},children:c})})},renderThumb:function(e){var t=e.props;e.isDragged;return Object(j.jsx)("div",Object(l.a)(Object(l.a)({},t),{},{style:Object(l.a)(Object(l.a)({},t.style),{},{height:"20px",width:"20px",borderRadius:"50%",backgroundColor:"#f26c4f",display:"flex",justifyContent:"center",alignItems:"center"}),children:Object(j.jsx)("div",{style:{height:"16px",width:"16px",borderRadius:"50%",backgroundColor:"#f26c4f"}})}))}}),Object(j.jsxs)("div",{className:"range-counter",children:[Object(j.jsxs)("span",{style:{color:"#fff"},children:["$ ",i[0]]}),Object(j.jsxs)("span",{style:{color:"#fff"},children:["$ ",i[1]]})]})]})}var u=c(66);function h(){var e=Object(a.b)(),t=Object(n.useState)([]),c=Object(s.a)(t,2),i=c[0],r=c[1];return Object(j.jsxs)("div",{className:"color--filter",children:[Object(j.jsx)("h4",{className:"subtitle",children:"color"}),Object(j.jsx)("div",{className:"widget-color-form d-flex flex-wrap mb-0",children:["white","black","brown","red","blue","grey","pink","green","purple","beige"].map((function(t,c){return Object(j.jsx)("div",{className:"input-radio color-option",onClick:function(){return function(t){i.includes(t)?r(i.filter((function(e){return e!==t}))):r([].concat(Object(u.a)(i),[t])),e(Object(o.c)({target:"color",value:t}))}(t)},children:Object(j.jsx)("label",{className:"label-radio color-".concat(c+1),children:Object(j.jsx)("span",{className:"radio-indicator ".concat(i.includes(t)?"active":""),children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})})})},c)}))})]})}c(158);function O(){var e=Object(i.h)(),t=e.cat,c=e.subcat,l=Object(i.g)(),o=Object(a.c)((function(e){return e.shop.categories})),d=Object(n.useState)(0),u=Object(s.a)(d,2),O=u[0],x=u[1];return Object(n.useEffect)((function(){if(t){var e=o.findIndex((function(e){return e.name.toLowerCase()===t}));console.log("activeIdx"),console.log(e),x(e)}}),[t,c,o]),Object(j.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-3 filters-wrapper",children:Object(j.jsxs)("div",{className:"sidebar cat-sidebar",children:[Object(j.jsxs)("div",{className:"widget widget-categories2",children:[Object(j.jsx)("div",{className:"widget--title",children:Object(j.jsx)("h3",{children:"categories"})}),Object(j.jsx)("div",{className:"widget--content",children:Object(j.jsx)("ul",{className:"main--list list-unstyled mb-0",children:o.map((function(e,s){var n=e.name,i=e.count,a=e._id,o=e.subCategories;return Object(j.jsxs)("li",{className:O===s?"active":"",children:[Object(j.jsxs)(r.b,{to:"/shop/".concat(n),onClick:function(e){return function(e,t){O!==e?x(e):(t.preventDefault(),x(-1),console.log("pushing to history"),l.push("/shop"))}(s,e)},className:t===n?"active-cat":"",children:[n," ",Object(j.jsxs)("span",{children:["(",i,")"]})]}),o.length?Object(j.jsx)("ul",{className:"inner--list list-unstyled mb-0",children:o.map((function(e){var t=e.name,s=e._id,i=e.count;return Object(j.jsx)("li",{children:Object(j.jsxs)(r.b,{to:"/shop/".concat(n,"/").concat(t),className:c===t?"active-cat":"",children:[t,Object(j.jsx)("span",{children:i})]})},s)}))}):""]},a)}))})})]}),Object(j.jsxs)("div",{className:"widget widget-filter",children:[Object(j.jsx)("div",{className:"widget--title",children:Object(j.jsx)("h3",{children:"Filter By"})}),Object(j.jsxs)("div",{className:"widget--content",children:[Object(j.jsx)(b,{}),Object(j.jsx)(h,{})]})]})]})})}}}]);
//# sourceMappingURL=16.567e493f.chunk.js.map