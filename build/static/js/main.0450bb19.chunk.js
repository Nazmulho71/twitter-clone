(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},78:function(e,t,s){},80:function(e,t,s){"use strict";s.r(t);var a=s(4),c=s(2),n=s.n(c),i=s(24),j=s.n(i),r=(s(60),s(115)),o=s(94),l=s(95),d=s(96),b=s(97),x=s(98),p=s(99),m=s(100),O=s(101),u=s(102);s(61);var h=function(e){var t=e.active,s=e.text,c=e.Icon;return Object(a.jsxs)("div",{className:"sidebarOption ".concat(t&&"sidebarOption--active"),children:[Object(a.jsx)(c,{}),Object(a.jsx)("h2",{children:s})]})};s(62);var f=function(){return Object(a.jsxs)("div",{className:"sidebar",children:[Object(a.jsx)(o.a,{className:"sidebar__twitterIcon"}),Object(a.jsx)(h,{active:!0,Icon:l.a,text:"Home"}),Object(a.jsx)(h,{Icon:d.a,text:"Explore"}),Object(a.jsx)(h,{Icon:b.a,text:"Notifications"}),Object(a.jsx)(h,{Icon:x.a,text:"Messages"}),Object(a.jsx)(h,{Icon:p.a,text:"Bookmarks"}),Object(a.jsx)(h,{Icon:m.a,text:"Lists"}),Object(a.jsx)(h,{Icon:O.a,text:"Profile"}),Object(a.jsx)(h,{Icon:u.a,text:"More"}),Object(a.jsx)(r.a,{variant:"outlined",className:"sidebar__tweet",children:"Tweet"})]})},v=s(30),g=s(114),_=s(50),N=s(52).a.initializeApp({apiKey:"AIzaSyCNGwg2CeihCZ-fYoXYgKKvjXBUJbUlQ44",authDomain:"twitter-clone-d5bca.firebaseapp.com",projectId:"twitter-clone-d5bca",storageBucket:"twitter-clone-d5bca.appspot.com",messagingSenderId:"588900711939",appId:"1:588900711939:web:8f567a5544faee628c5836",measurementId:"G-TP14E64G7P"}).firestore(),w=s(116),I=s(103),y=s(104),S=s(105),z=s(106),B=s(107);s(70);var C=function(){var e=Object(c.useState)(""),t=Object(v.a)(e,2),s=t[0],n=t[1],i=Object(c.useState)(""),j=Object(v.a)(i,2),o=j[0],l=j[1];return Object(a.jsx)("div",{className:"tweetBox",children:Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"tweetBox__input",children:[Object(a.jsx)(w.a,{src:"https://pbs.twimg.com/profile_images/1275313891233247239/tmcbgfkb_400x400.jpg"}),Object(a.jsx)("input",{onChange:function(e){return n(e.target.value)},value:s,placeholder:"What's happening?",type:"text"})]}),Object(a.jsx)("input",{onChange:function(e){return l(e.target.value)},value:o,className:"tweetBox__imageInput",placeholder:"Enter image URL",type:"text"}),Object(a.jsxs)("h1",{className:"tweetBox__icons",children:[Object(a.jsx)(I.a,{style:{padding:"5px"}}),Object(a.jsx)(y.a,{style:{padding:"5px"}}),Object(a.jsx)(S.a,{style:{padding:"5px"}}),Object(a.jsx)(z.a,{style:{padding:"5px"}}),Object(a.jsx)(B.a,{style:{padding:"5px"}})]}),Object(a.jsx)(r.a,{onClick:function(e){e.preventDefault(),N.collection("posts").add({displayName:"Md Nazmul Hossain",username:"Nazmulho71",verified:!0,text:s,image:o,avatar:"https://pbs.twimg.com/profile_images/1275313891233247239/tmcbgfkb_400x400.jpg"}),n(""),l("")},type:"submit",className:"tweetBox__tweetButton",children:"Tweet"})]})})},k=s(108),T=s(109),E=s(110),P=s(111),D=s(112),F=s(113),L=(s(71),Object(c.forwardRef)((function(e,t){var s=e.displayName,c=e.username,n=e.verified,i=e.text,j=e.image,r=e.avatar;return Object(a.jsxs)("div",{className:"post",ref:t,children:[Object(a.jsx)(w.a,{className:"post__avatarr",src:r}),Object(a.jsxs)("div",{className:"post__body",children:[Object(a.jsxs)("div",{className:"post__header",children:[Object(a.jsx)("div",{className:"post__headerText",children:Object(a.jsxs)("h3",{children:[s," ",Object(a.jsxs)("span",{className:"post__headerSpecial",children:[n&&Object(a.jsx)(k.a,{className:"post__badge"})," @",c]})]})}),Object(a.jsx)("div",{className:"post__headerDescription",children:Object(a.jsx)("p",{children:i})})]}),Object(a.jsx)("img",{src:j,alt:""}),Object(a.jsxs)("div",{className:"post__footer",children:[Object(a.jsx)(T.a,{fontSize:"small"}),Object(a.jsx)(E.a,{fontSize:"small"}),Object(a.jsx)(P.a,{fontSize:"small"}),Object(a.jsx)(D.a,{fontSize:"small"}),Object(a.jsx)(F.a,{fontSize:"small"})]})]})]})})));s(72);var M=function(){var e=Object(c.useState)([]),t=Object(v.a)(e,2),s=t[0],n=t[1];return Object(c.useEffect)((function(){N.collection("posts").onSnapshot((function(e){return n(e.docs.map((function(e){return e.data()})))}))}),[]),Object(a.jsxs)("div",{className:"feed",children:[Object(a.jsxs)("div",{className:"feed__header",children:[Object(a.jsx)("h2",{children:"Home"}),Object(a.jsx)(g.a,{className:"feed__icon"})]}),Object(a.jsx)(C,{}),Object(a.jsx)(_.a,{children:s.map((function(e){return Object(a.jsx)(L,{displayName:e.displayName,username:e.username,verified:e.verified,text:e.text,avatar:e.avatar,image:e.image},e.text)}))})]})},G=s(39),H=s(51),J=s.n(H);s(73);var K=function(){return Object(a.jsxs)("div",{className:"widgets",children:[Object(a.jsxs)("div",{className:"widgets__input",children:[Object(a.jsx)(J.a,{className:"widgets__searchIcon"}),Object(a.jsx)("input",{placeholder:"Search Twitter",type:"text"})]}),Object(a.jsxs)("div",{className:"widgets__widgetContainer",children:[Object(a.jsx)("h2",{children:"Trends for you"}),Object(a.jsx)(G.c,{tweetId:"1322805869340360704"}),Object(a.jsx)(G.b,{sourceType:"profile",screenName:"Nazmulho71",options:{height:400}}),Object(a.jsx)(G.a,{url:"https://web.facebook.com/mdnazmulho71/",options:{text:"#reactjs is awesome",via:"Nazmulho71"}})]})]})};s(78);var U=function(){return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(f,{}),Object(a.jsx)(M,{}),Object(a.jsx)(K,{})]})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,117)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};j.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root")),A()}},[[80,1,2]]]);
//# sourceMappingURL=main.0450bb19.chunk.js.map