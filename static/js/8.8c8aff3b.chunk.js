(this.webpackJsonpdopegood=this.webpackJsonpdopegood||[]).push([[8],{139:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var r=function(e,t){for(var c=[],r=e;r<=t;r++)c.push(r);return c}},147:function(e,t,c){},164:function(e,t,c){},176:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return v}));var r=c(3),n=c(1),s=(c(147),c(11)),a=c(21),i=c(4),o=c.n(i),l=c(9),d=c(8),j=c(10),u=c(139),m=c(0);function b(e){var t=e.product_id,c=e.replyTo,a=e.toggleReplyFor,i=Object(n.useState)(5),b=Object(r.a)(i,2),p=b[0],h=b[1],O=Object(n.useState)(""),v=Object(r.a)(O,2),x=v[0],f=v[1],g=Object(n.useState)(""),w=Object(r.a)(g,2),N=(w[0],w[1]),y=Object(n.useState)(""),k=Object(r.a)(y,2),C=k[0],_=k[1],R=Object(n.useState)(""),S=Object(r.a)(R,2),T=(S[0],S[1]),F=Object(s.c)((function(e){return e.shop.user})),A=function(){var e=Object(l.a)(o.a.mark((function e(){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N(""),T(""),F){e.next=5;break}return d.b.error("You must login to post a review"),e.abrupt("return");case 5:if(Y()){e.next=8;break}return d.b.error("Validation for review failed. Please provide required fields"),e.abrupt("return");case 8:return r={name:x,text:C,user_id:F._id,product_id:t,rate:p},c&&(r.replyTo=c),F.img&&(r.img=F.img),e.next=13,Object(j.c)("".concat("https://dope-good.herokuapp.com","/api/review"),r);case 13:(n=e.sent).success?(d.b.success("Your review has successfuly submitted and its under confirmation from admin."),f(""),_("")):"User Already has a review on this product."===n.message?d.b.error("You already have a review on this product."):d.b.error("Some Error occured during submitting your review."),c&&a(c);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){return x.length<3&&N(""),C.length<3&&T("You must provide a comment"),!0};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"form--review-rating text-center ".concat(c?"new-reply":""),children:[c&&Object(m.jsx)("svg",{onClick:function(){return a(c)},xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 close-reply",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),c?Object(m.jsx)("h5",{children:"Add Reply"}):Object(m.jsx)("h5",{children:"Add Your Review"}),!c&&Object(m.jsxs)("div",{className:"form--review-rating-content",children:[Object(m.jsx)("span",{children:"Your Ratting"}),Object(u.a)(1,5).map((function(e){return Object(m.jsx)("div",{className:"product--rating",onClick:function(){return h(e)},children:Object(u.a)(1,e).map((function(t){return Object(m.jsx)("i",{className:"fa fa-star ".concat(p===e?"active":"")},t)}))},e)}))]})]}),Object(m.jsx)("div",{className:"form--review ".concat(c?"new-reply":""),children:Object(m.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-12",children:Object(m.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Enter your name",value:x,onChange:function(e){return f(e.target.value)}})}),Object(m.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-12",children:Object(m.jsx)("textarea",{className:"form-control",id:"review",rows:"2",placeholder:"Comment review",value:C,onChange:function(e){return _(e.target.value)}})}),Object(m.jsx)("div",{className:" col-sm-12 col-md-12 col-lg-12 text--center ",children:Object(m.jsx)("button",{className:"btn btn--primary btn--rounded new-review-btn",onClick:A,type:"button",children:"Submit"})})]})})})]})}function p(e){var t=e._id,c=e.text,r=e.img,n=e.name,s=e.rate,a=e.created_at,i=e.product_id,o=e.isReply,l=e.toggleReplyFor,d=e.replyFor;return Object(m.jsxs)("div",{className:"comment-wrapper ".concat(o?"reply-comment":""),children:[Object(m.jsx)("div",{className:"author--img ".concat(o?"reply-comment":""),children:r?Object(m.jsx)("img",{src:r,alt:n}):Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",clipRule:"evenodd"})})}),Object(m.jsxs)("div",{className:"review--comment-content ".concat(o?"reply-comment":""),children:[Object(m.jsxs)("div",{className:"comment-top-info",children:[Object(m.jsxs)("div",{className:"pull-left",children:[Object(m.jsx)("h6",{children:n}),Object(m.jsx)("span",{className:"review--date",children:function(e){var t=new Date(e),c=t.getMonth(),r=t.getDate(),n=t.getFullYear();return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][c]," ").concat(r,"th, ").concat(n)}(a)})]}),!o&&Object(m.jsx)("div",{className:"pull-right product--rating",children:Object(u.a)(1,s).map((function(e,t){return Object(m.jsx)("i",{className:"fa fa-star active"},t)}))})]}),Object(m.jsx)("div",{className:"product--comment",children:Object(m.jsx)("p",{children:c})}),!o&&d!==t&&Object(m.jsxs)("button",{className:"reply",onClick:function(){return l(t)},children:["reply",Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})]}),!o&&d===t&&Object(m.jsx)(b,{replyTo:d,toggleReplyFor:l,product_id:i})]})}c(164);function h(e){var t=e.showTab,c=e.reviews,s=e.product_id,i=Object(n.useState)(""),d=Object(r.a)(i,2),j=d[0],u=d[1],h=c.filter((function(e){return!e.replyTo||!e.replyTo.length})),O=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(j===t?"":t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"tab-pane fade ".concat(2===t?"show active":""),id:"reviews",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-sm-12 col-md-12 col-lg-8 offset-lg-2",children:[c.length?Object(m.jsx)("ul",{className:"product--review-comments list-unstyled",children:h.map((function(e,t){var r,n=e._id;return Object(m.jsxs)("li",{className:"review--comment",children:[Object(m.jsx)(p,Object(a.a)(Object(a.a)({},e),{},{replyFor:j,toggleReplyFor:O,product_id:s})),(r=n,c.filter((function(e){return e.replyTo&&e.replyTo===r}))).map((function(e,t){return Object(m.jsx)(p,Object(a.a)(Object(a.a)({},e),{},{isReply:!0}),t)}))]},t)}))}):Object(m.jsx)("div",{className:"no-comment",children:"No Comments for this product"}),Object(m.jsx)(b,{product_id:s})]})})})}var O=c(165);function v(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(s.c)((function(e){return e.shop.singleProduct})),o=i._id,l=i.description,d=i.properties,j=i.additionalInfo,u=i.reviews,b=function(e){c!==e&&a(e)};return o?Object(m.jsx)("section",{id:"product-detalis2",className:"product-detalis product-detalis-2 pb-80",children:Object(m.jsx)("div",{className:"container details-cont",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-10 offset-lg-1",children:Object(m.jsxs)("div",{className:"product--tabs tabs",children:[Object(m.jsxs)("ul",{className:"nav nav-tabs",role:"tablist",children:[Object(m.jsx)("li",{children:Object(m.jsx)("button",{className:0===c?"active":"",onClick:function(){return b(0)},children:"description"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{className:1===c?"active":"",onClick:function(){return b(1)},children:"Addtional info"})}),Object(m.jsx)("li",{children:Object(m.jsxs)("button",{className:2===c?"active":"",onClick:function(){return b(2)},children:["reviews(",u.filter((function(e){return!e.replyTo||!e.replyTo.length})).length,")"]})})]}),Object(m.jsxs)("div",{className:"tab-content",children:[Object(m.jsx)("div",{className:"tab-pane fade ".concat(0===c?"show active":""),id:"description",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-10 offset-lg-1",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-8",children:Object(m.jsx)("div",{className:"product--desc",children:Object(m.jsx)("p",{children:Object(m.jsx)(O.a,{content:l})})})}),d.length>0&&Object(m.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-4",children:d.map((function(e){var t=e.title,c=e.items;return Object(m.jsxs)("div",{className:"product--desc-list",children:[Object(m.jsx)("h6",{children:t}),Object(m.jsx)("ul",{className:"list-unstyled mb-0",children:c.map((function(e,t){return Object(m.jsx)("li",{children:e},t)}))})]},t)}))})]})})})}),Object(m.jsx)("div",{className:"tab-pane fade ".concat(1===c?"show active":""),id:"addtional-info",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-10 offset-lg-1",children:Object(m.jsx)("div",{className:"product--desc",children:j?Object(m.jsx)("p",{children:Object(m.jsx)(O.a,{content:j})}):"No additional info for this product."})})})}),Object(m.jsx)(h,{showTab:c,reviews:u,product_id:o})]})]})})})})}):null}}}]);
//# sourceMappingURL=8.8c8aff3b.chunk.js.map