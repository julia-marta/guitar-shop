(this["webpackJsonpguitar-shop"]=this["webpackJsonpguitar-shop"]||[]).push([[0],{37:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(19),r=c.n(n),i=c(2),s=c(18),l=c(10),o=c(3),u=c(15),b=c.n(u),j=c(24),p=c(27),m=c.n(p),d=c(13),O=function(e){return Number(e).toLocaleString("ru-RU")},h=function(e,t){return Object.values(e).reduce((function(e,c){return[].concat(Object(d.a)(e),[c[t]])}),[])},g=function(e){return/^[0-9 ]*$/.test(e)},x=function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,c){m.a.parse(t,{download:!0,header:!0,complete:function(t){return e(t)},error:function(e){return c(e)}})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=Object(s.b)("guitar-shop/getData",Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("https://docs.google.com/spreadsheets/d/1E6XeNhetKyCRYK68ArXQNAHj41UAClgZqEhjf7thrC0/gviz/tq?tqx=out:csv");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))),f={guitarData:{},cartData:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):{},sorting:{},filter:{price:{min:"",max:""},type:{electric:!1,acoustic:!1,ukulele:!1},strings:{4:!1,6:!1,7:!1,12:!1}},availableStrings:[4,6,7,12],promoCode:"",orderSum:0,popUp:null,index:localStorage.getItem("index")?Number(localStorage.getItem("index")):0},y=Object(s.c)({name:"guitar-shop",initialState:f,reducers:{openPopUp:function(e,t){e.popUp=t.payload},closePopUp:function(e,t){e.popUp=null},setSorting:function(e,t){e.sorting=t.payload},setFilter:function(e,t){e.filter=t.payload},setAvailableStrings:function(e,t){e.availableStrings=t.payload},addToCart:function(e,t){e.cartData[t.payload]?e.cartData[t.payload]=Object(o.a)(Object(o.a)({},e.cartData[t.payload]),{},{count:e.cartData[t.payload].count+1}):(e.cartData[t.payload]={id:t.payload,count:1},e.index+=1),localStorage.setItem("cart",JSON.stringify(e.cartData)),localStorage.setItem("index",e.index)},changeCount:function(e,t){e.cartData[t.payload.id]=Object(o.a)(Object(o.a)({},e.cartData[t.payload.id]),{},{count:t.payload.count}),localStorage.setItem("cart",JSON.stringify(e.cartData))},deleteFromCart:function(e,t){delete e.cartData[t.payload],e.index-=1,0===Object.keys(e.cartData).length?(localStorage.removeItem("cart"),localStorage.removeItem("index")):(localStorage.setItem("cart",JSON.stringify(e.cartData)),localStorage.setItem("index",e.index))},setOrderSum:function(e,t){e.orderSum=t.payload},setPromoCode:function(e,t){e.promoCode=t.payload}},extraReducers:Object(l.a)({},_.fulfilled,(function(e,t){var c=t.payload.reduce((function(e,t,c){return e[c+1]=t,e}),{});e.guitarData=c,e.catalogueData=c}))}),v=y.reducer,N=y.actions,C=(N.setCatalogueData,N.openPopUp),k=N.closePopUp,E=N.setSorting,S=N.setFilter,w=N.setAvailableStrings,D=N.addToCart,T=N.changeCount,I=N.deleteFromCart,A=N.setOrderSum,P=N.setPromoCode,U=v,R=["\u041a\u0430\u0442\u0430\u043b\u043e\u0433","\u0413\u0434\u0435 \u043a\u0443\u043f\u0438\u0442\u044c?","\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438","C\u0435\u0440\u0432\u0438\u0441-\u0446\u0435\u043d\u0442\u0440\u044b"],G=[{type:"map",label:"\u041a\u0430\u043a \u043f\u0440\u043e\u0435\u0445\u0430\u0442\u044c"},{type:"search",label:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0430\u0439\u0442\u0443"},{type:"basket",label:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}],M=[{type:"facebook",label:"\u0424\u0435\u0439\u0441\u0431\u0443\u043a"},{type:"instagram",label:"\u0418\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c"},{type:"twitter",label:"\u0422\u0432\u0438\u0442\u0442\u0435\u0440"}],F=[{type:"about",title:"\u041e \u043d\u0430\u0441",text:["\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0433\u0438\u0442\u0430\u0440, \u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u0433\u0438\u0442\u0430\u0440\u043d\u0430\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0441\u043a\u0430\u044f \u0432 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435.","\u0412\u0441\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u044b, \u043e\u0442\u0441\u0442\u0440\u043e\u0435\u043d\u044b \u0438 \u0434\u043e\u0432\u0435\u0434\u0435\u043d\u044b \u0434\u043e \u0438\u0434\u0435\u0430\u043b\u0430!"]},{type:"catalogue",title:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433",items:["\u0410\u043a\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0433\u0438\u0442\u0430\u0440\u044b","\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0433\u0438\u0442\u0430\u0440\u044b","\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u0433\u0438\u0442\u0430\u0440\u044b","\u0411\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u044b","\u0423\u043a\u0443\u043b\u0435\u043b\u0435"]},{type:"information",title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",items:["\u0413\u0434\u0435 \u043a\u0443\u043f\u0438\u0442\u044c?","\u0411\u043b\u043e\u0433","\u0412\u043e\u043f\u0440\u043e\u0441 - \u043e\u0442\u0432\u0435\u0442","\u0412\u043e\u0437\u0432\u0440\u0430\u0442","\u0421\u0435\u0440\u0432\u0438\u0441-\u0446\u0435\u043d\u0442\u0440\u044b"]},{type:"contacts",title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",text:["\u0433. \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u043c. \u041d\u0435\u0432\u0441\u043a\u0438\u0439 \u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442, \u0443\u043b. \u041a\u0430\u0437\u0430\u043d\u0441\u043a\u0430\u044f 6.",{type:"phone",content:"8-812-500-50-50"},"\u0420\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b:",{type:"clock",content:"\u0441 11:00 \u0434\u043e 20:00,"},"\u0431\u0435\u0437 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0445."]}],B=["\u0413\u043b\u0430\u0432\u043d\u0430\u044f","\u041a\u0430\u0442\u0430\u043b\u043e\u0433","\u041e\u0444\u043e\u0440\u043c\u043b\u044f\u0435\u043c"],K=["1","2","3","4","5"],L=[4,6,7,12],H=["GITARAHIT","SUPERGITARA","GITARA2020"],W="\u041d\u0430\u0437\u0430\u0434",q="\u0414\u0430\u043b\u0435\u0435",J="...",Y="decrease",X="increase",z="header",Q="footer",V={MORE:{type:"mono",title:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"},BUY:{type:"color",title:"\u041a\u0443\u043f\u0438\u0442\u044c"},ADD:{type:"color",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"},DELETE:{type:"color",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"},CONTINUE:{type:"transparent",title:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0438"},GO_TO_BASKET:{type:"color",title:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"},PROMO:{type:"mono",title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u0443\u043f\u043e\u043d"},CHECKOUT:{type:"color",title:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}},Z={ADD:{type:"add",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",buttons:[V.ADD]},DELETE:{type:"delete",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0442\u043e\u0432\u0430\u0440?",buttons:[V.DELETE,V.CONTINUE]},SUCCESS:{type:"success",title:"\u0422\u043e\u0432\u0430\u0440 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",buttons:[V.GO_TO_BASKET,V.CONTINUE]}},$={PRICE:{title:"\u043f\u043e \u0446\u0435\u043d\u0435",type:"price"},RATING:{title:"\u043f\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"rating"}},ee={ASCENDING:{title:"\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e",type:"ascending",icon:"toggle_up"},DESCENDING:{title:"\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",type:"descending",icon:"toggle_down"}},te={SO757575:"guitar1",TK129049:"guitar2",RO111111:"guitar3",TK436457:"guitar4",DI192138:"guitar5",SO934345:"guitar1",DI082347:"guitar3",SO135646:"guitar6",VO154751:"guitar5","\u0443\u043a\u0443\u043b\u0435\u043b\u0435":"guitar3","\u0430\u043a\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0433\u0438\u0442\u0430\u0440\u0430":"guitar5","\u044d\u043b\u0435\u043a\u0442\u0440\u043e\u0433\u0438\u0442\u0430\u0440\u0430":"guitar1"},ce="invalid",ae="applied",ne="/",re="/cart",ie="Esc",se="Escape",le="catalogue",oe="cart",ue={CATALOGUE:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0433\u0438\u0442\u0430\u0440",CART:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"},be={legend:"\u0426\u0435\u043d\u0430,",name:"price",inputs:[{name:"min",label:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430"},{name:"max",label:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430"}]},je={legend:"\u0422\u0438\u043f \u0433\u0438\u0442\u0430\u0440",name:"guitar-type",checkboxes:[{name:"acoustic",label:"\u0410\u043a\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0433\u0438\u0442\u0430\u0440\u044b"},{name:"electric",label:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u0433\u0438\u0442\u0430\u0440\u044b"},{name:"ukulele",label:"\u0423\u043a\u0443\u043b\u0435\u043b\u0435"}]},pe={legend:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u0443\u043d",name:"strings",checkboxes:[{name:4,label:"4"},{name:6,label:"6"},{name:7,label:"7"},{name:12,label:"12"}]},me={electric:{name:"\u044d\u043b\u0435\u043a\u0442\u0440\u043e\u0433\u0438\u0442\u0430\u0440\u0430",strings:[4,6,7]},acoustic:{name:"\u0430\u043a\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0433\u0438\u0442\u0430\u0440\u0430",strings:[6,7,12]},ukulele:{name:"\u0443\u043a\u0443\u043b\u0435\u043b\u0435",strings:[4]}},de={ARROW:{name:"arrow",width:16,height:16},BASKET:{name:"basket",width:16,height:18},CART:{name:"cart",width:12,height:13},CHECKBOX:{name:"checkbox",width:14,height:14},CLOCK:{name:"clock",width:10,height:10},FACEBOOK:{name:"facebook",width:24,height:24},INSTAGRAM:{name:"instagram",width:24,height:24},MAP:{name:"map",width:40,height:40},PHONE:{name:"phone",width:10,height:10},SEARCH:{name:"search",width:40,height:40},STAR:{name:"star",width:12,height:12},STAR_EMPTY:{name:"star-empty",width:12,height:12},TOGGLE_DOWN:{name:"toggle-down",width:22,height:22},TOGGLE_UP:{name:"toggle-up",width:22,height:22},TWITTER:{name:"twitter",width:24,height:24}},Oe=String.fromCharCode(8381),he=function(e){return function(e){return function(t){return"guitar-shop/getData/fulfilled"===t.type&&t.payload.map((function(e){return e.image=te[e.code]?te[e.code]:te[e.type]})),e(t)}}},ge=(c(37),c(12)),xe=c(5),_e=c(28),fe=c(0),ye=function(e){var t=e.type,c=e.isMain,a=Object(fe.jsx)(fe.Fragment,{children:Object(fe.jsx)("img",{src:"svg/".concat(t,"_logo.svg"),width:"67",height:"70",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Guitar Shop"})});return Object(fe.jsx)("div",{className:"".concat(t,"__logo"),children:c?Object(fe.jsx)("a",{className:"".concat(t,"__logo-link"),href:"#",children:a}):Object(fe.jsx)(ge.b,{to:ne,children:a})})},ve=function(e){var t=e.title,c=e.isActive,a=e.onClick;return Object(fe.jsx)("li",{className:"menu__item",children:Object(fe.jsx)("a",{className:"menu__link ".concat(c?"menu__link--active":""),href:"#",onClick:a,children:t})})},Ne=function(e){var t=e.icon;return Object(fe.jsx)("svg",{className:"icon icon--".concat(t.name),width:t.width,height:t.height,children:Object(fe.jsx)("use",{xlinkHref:"svg/sprite.svg#icon-".concat(t.name)})})},Ce=function(e){var t=e.icon,c=e.label;return Object(fe.jsx)("li",{className:"menu__item",children:Object(fe.jsx)("a",{className:"menu__link",href:"#","aria-label":c,children:Object(fe.jsx)(Ne,{icon:de["".concat(t.toUpperCase())]})})})},ke=function(e){var t=e.text;return Object(fe.jsx)("li",{className:"menu__item ".concat("object"===typeof t?"menu__item--icon":""),children:"object"===typeof t?Object(fe.jsxs)(fe.Fragment,{children:[Object(fe.jsx)(Ne,{icon:de["".concat(t.type.toUpperCase())]}),"phone"===t.type?Object(fe.jsx)("a",{className:"menu__text menu__text--link",href:"tel:".concat(t.content),children:t.content}):Object(fe.jsx)("p",{className:"menu__text",children:t.content})]}):Object(fe.jsx)("p",{className:"menu__text",children:t})})},Ee=function(e){var t=e.icon,c=e.label,a=Object(i.c)((function(e){return e.index}));return Object(fe.jsx)("li",{className:"menu__item",children:Object(fe.jsxs)(ge.b,{className:"menu__link",to:re,"aria-label":c,children:[Object(fe.jsx)(Ne,{icon:de["".concat(t.toUpperCase())]}),Object(fe.jsx)("sup",{className:"menu__index",children:a})]})})},Se=function(e){var t=e.type,c=e.items,a=e.activeItem,n=e.isText,r=e.isIconsOnly,i=e.onItemClick;return Object(fe.jsx)("ul",{className:"menu menu--".concat(t),children:c.map((function(e,t){return n?Object(fe.jsx)(ke,{text:e},t+1):"basket"===e.type?Object(fe.jsx)(Ee,{icon:e.type,label:e.label},t+1):r?Object(fe.jsx)(Ce,{icon:e.type,label:e.label,onClick:i},t+1):Object(fe.jsx)(ve,{title:e,onClick:i,isActive:e===a},t+1)}))})},we=function(e){var t=e.isMain,c=e.isWebPSupport;return Object(fe.jsx)("header",{className:"header",children:Object(fe.jsxs)("div",{className:"header__wrapper ".concat(c?"header__wrapper--webp":"header__wrapper--no-webp"," container"),children:[Object(fe.jsx)(ye,{type:z,isMain:t}),Object(fe.jsxs)("nav",{className:"header__navigation",children:[Object(fe.jsx)(Se,{type:"main",items:R}),Object(fe.jsx)(Se,{type:"user",items:G,isIconsOnly:!0})]})]})})},De=function(e){var t=e.items;return Object(fe.jsx)("ul",{className:"breadcrumbs",children:t.map((function(e,c){return Object(fe.jsx)("li",{className:"breadcrumbs__item",children:c===t.length-1?Object(fe.jsx)("a",{className:"breadcrumbs__link",href:"#",children:e}):Object(fe.jsxs)(fe.Fragment,{children:[Object(fe.jsx)(ge.b,{className:"breadcrumbs__link",to:ne,children:e}),Object(fe.jsx)(Ne,{icon:de.ARROW})]})},c+1)}))})},Te=function(e){var t=e.type,c=e.children,a=e.isMain?B.slice(0,B.length-1):B;return Object(fe.jsxs)("main",{className:"main",children:[Object(fe.jsx)("h1",{className:"visually-hidden",children:"Guitar Shop: \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u0433\u0438\u0442\u0430\u0440, \u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u0433\u0438\u0442\u0430\u0440\u043d\u0430\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0441\u043a\u0430\u044f \u0432 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435."}),Object(fe.jsx)("section",{className:t,children:Object(fe.jsxs)("div",{className:"".concat(t,"__wrapper container"),children:[Object(fe.jsx)("h2",{className:"".concat(t,"__title"),children:ue["".concat(t.toUpperCase())]}),Object(fe.jsx)(De,{items:a}),c]})})]})},Ie=c(7),Ae=function(e){var t=e.name,c=e.legend,a=e.symbol,n=e.children;return Object(fe.jsxs)("fieldset",{className:"filter__item filter__item--".concat(t),children:[Object(fe.jsxs)("h3",{className:"filter__title filter__title--subtitle",children:[c," ",a&&Object(fe.jsx)("span",{children:a})]}),Object(fe.jsx)("div",{className:"filter__wrapper filter__wrapper--".concat(t),children:n})]})},Pe=function(e){var t=e.className,c=e.name,a=e.label,n=e.value,r=e.placeholder,i=e.onChangeInput,s=e.onBlurInput;return Object(fe.jsxs)(fe.Fragment,{children:[Object(fe.jsx)("label",{className:"visually-hidden",htmlFor:c,children:a}),Object(fe.jsx)("input",{className:t,type:"text",id:c,name:c,value:n,onChange:i,onBlur:s,placeholder:r})]})},Ue=function(e){var t=e.inputs,c=e.minCataloguePrice,n=e.maxCataloguePrice,r=Object(i.c)((function(e){return e.filter})),s=Object(i.b)(),u=O(c),b=O(n),j=r.price.min&&r.price.max&&r.price.min>r.price.max,p=r.price.min&&r.price.min<c,m=r.price.max&&r.price.max>n,d=Object(a.useCallback)((function(e){e.preventDefault();var t=e.target.value.replace(/\s/g,"");g(t)&&s(S(Object(o.a)(Object(o.a)({},r),{},{price:Object(o.a)(Object(o.a)({},r.price),{},Object(l.a)({},e.target.id,Number(t)))})))}),[s,r]),h=Object(a.useCallback)((function(e){var t,a=e.target.id;j&&(t="min"===a?{max:r.price.max,min:r.price.max}:{max:r.price.min,min:r.price.min}),p&&(t={max:r.price.max,min:c}),m&&(t={max:n,min:r.price.min}),t&&s(S(Object(o.a)(Object(o.a)({},r),{},{price:{min:t.min,max:t.max}})))}),[s,r,m,p,j,n,c]);return Object(fe.jsx)(fe.Fragment,{children:t.map((function(e){return Object(fe.jsx)(Pe,{className:"filter__input",name:e.name,label:e.label,value:r.price[e.name]>0?O(r.price[e.name]):0===r.price[e.name]?"0":"",placeholder:"min"===e.name?u:b,onChangeInput:d,onBlurInput:h},e.name)}))})},Re=function(e){var t=e.name,c=e.label,n=e.value,r=e.disabled,s=e.onChangeCheckbox,u=Object(i.c)((function(e){return e.filter})),b=Object(i.b)();return Object(a.useEffect)((function(){r&&n&&b(S(Object(o.a)(Object(o.a)({},u),{},{strings:Object(o.a)(Object(o.a)({},u.strings),{},Object(l.a)({},t,!1))})))}),[r,b,u,t,n]),Object(fe.jsxs)("div",{className:"filter__checkbox-wrapper",children:[Object(fe.jsx)("input",{type:"checkbox",className:"filter__checkbox visually-hidden",id:t,name:t,checked:n,disabled:r,onChange:s}),Object(fe.jsxs)("label",{className:"filter__label",htmlFor:t,children:[c,Object(fe.jsx)(Ne,{icon:de.CHECKBOX})]})]})},Ge=function(e){var t=e.checkboxes,c=Object(i.c)((function(e){return e.filter})),n=Object(i.b)(),r=Object(a.useCallback)((function(e){n(S(Object(o.a)(Object(o.a)({},c),{},{type:Object(o.a)(Object(o.a)({},c.type),{},Object(l.a)({},e.target.id,!!e.target.checked))})))}),[n,c]);return Object(fe.jsx)(fe.Fragment,{children:t.map((function(e){return Object(fe.jsx)(Re,{name:e.name,label:e.label,value:c.type[e.name],onChangeCheckbox:r},e.name)}))})},Me=function(e){var t=e.checkboxes,c=Object(i.c)((function(e){return e.filter})),n=Object(i.c)((function(e){return e.availableStrings})),r=Object(i.b)(),s=Object(a.useCallback)((function(e){r(S(Object(o.a)(Object(o.a)({},c),{},{strings:Object(o.a)(Object(o.a)({},c.strings),{},Object(l.a)({},e.target.id,!!e.target.checked))})))}),[r,c]);return Object(fe.jsx)(fe.Fragment,{children:t.map((function(e){return Object(fe.jsx)(Re,{name:e.name,label:e.label,value:c.strings[e.name],onChangeCheckbox:s,disabled:!n.includes(e.name)},e.name)}))})},Fe=be,Be=je,Ke=pe,Le=function(e){var t=e.minPrice,c=e.maxPrice;return Object(fe.jsxs)("form",{action:"#",className:"catalogue__filter filter",children:[Object(fe.jsx)("h3",{className:"filter__title",children:"\u0424\u0438\u043b\u044c\u0442\u0440"}),Object(fe.jsx)(Ae,{name:Fe.name,legend:Fe.legend,symbol:Oe,children:Object(fe.jsx)(Ue,{inputs:Fe.inputs,minCataloguePrice:t,maxCataloguePrice:c})}),Object(fe.jsx)(Ae,{name:Be.name,legend:Be.legend,children:Object(fe.jsx)(Ge,{checkboxes:Be.checkboxes})}),Object(fe.jsx)(Ae,{name:Ke.name,legend:Ke.legend,children:Object(fe.jsx)(Me,{checkboxes:Ke.checkboxes})})]})},He=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.sorting})),c=h($,"title"),n=Object.values(ee),r=Object(a.useCallback)((function(c){switch(c.preventDefault(),c.target.innerText){case $.PRICE.title:e(E({order:t.order?t.order:ee.ASCENDING.type,type:$.PRICE.type}));break;case $.RATING.title:e(E({order:t.order?t.order:ee.ASCENDING.type,type:$.RATING.type}))}}),[e,t]),s=Object(a.useCallback)((function(c){switch(c.preventDefault(),c.target.id){case ee.DESCENDING.type:e(E({type:t.type?t.type:$.PRICE.type,order:ee.DESCENDING.type}));break;case ee.ASCENDING.type:e(E({type:t.type?t.type:$.PRICE.type,order:ee.ASCENDING.type}))}}),[e,t]);return Object(fe.jsxs)("div",{className:"catalogue__sorting",children:[Object(fe.jsx)("p",{className:"catalogue__sorting-title",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c:"}),Object(fe.jsx)(Se,{type:"sorting",items:c,activeItem:t.type&&$[t.type.toUpperCase()].title,onItemClick:r}),Object(fe.jsx)("div",{className:"catalogue__sorting-toggles",children:n.map((function(e){return Object(fe.jsx)("button",{id:e.type,className:"catalogue__sorting-toggle ".concat(t.order&&t.order===e.type?"catalogue__sorting-toggle--active":""),type:"button","aria-label":e.title,onClick:s,children:Object(fe.jsx)(Ne,{icon:de["".concat(e.icon.toUpperCase())]})},e.type)}))})]})},We=function(e){var t=e.title,c=e.className,a=e.type,n=e.icon,r=e.path,i=e.onClick;return r?Object(fe.jsxs)(ge.b,{to:r,className:"".concat(c," button ").concat(a?"button--".concat(a):""),children:[n&&Object(fe.jsx)(Ne,{icon:n}),t]}):Object(fe.jsxs)("a",{href:"#",className:"".concat(c," button ").concat(a?"button--".concat(a):""),onClick:i,children:[n&&Object(fe.jsx)(Ne,{icon:n}),t]})},qe=function(e){var t,c=e.guitar,n=Object(i.b)(),r=(t=c.rating,Math.round(t/10*1.7)),s=Object(a.useCallback)((function(e){e.preventDefault(),n(C({name:Z.ADD.type.toUpperCase(),product:c.id}))}),[n,c]);return Object(fe.jsxs)("li",{className:"catalogue__item guitar",children:[Object(fe.jsx)("div",{className:"guitar__wrapper guitar__image",children:Object(fe.jsxs)("picture",{children:[Object(fe.jsx)("source",{type:"image/webp",srcSet:"guitars/".concat(c.image,".webp 1x, guitars/").concat(c.image,"@2x.webp 2x")}),Object(fe.jsx)("img",{className:"guitar__picture",src:"guitars/".concat(c.image,".png"),srcSet:"guitars/".concat(c.image,"@2x.png 2x"),width:"68",height:"190",alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u0433\u0438\u0442\u0430\u0440\u044b ".concat(c.title)})]})}),Object(fe.jsxs)("div",{className:"guitar__wrapper guitar__rating",children:[Object(fe.jsx)("ul",{className:"guitar__star-list",children:K.map((function(e,t){return Object(fe.jsx)("li",{className:"guitar__star",children:t<r?Object(fe.jsx)(Ne,{icon:de.STAR}):Object(fe.jsx)(Ne,{icon:de.STAR_EMPTY})},e)}))}),Object(fe.jsx)("span",{className:"guitar__wrapper guitar__reviews",children:c.rating})]}),Object(fe.jsxs)("div",{className:"guitar__wrapper guitar__info",children:[Object(fe.jsx)("p",{className:"guitar__text",children:c.title}),Object(fe.jsx)("p",{className:"guitar__text",children:"".concat(O(c.price)," ").concat(Oe)})]}),Object(fe.jsxs)("div",{className:"guitar__wrapper guitar__buttons",children:[Object(fe.jsx)(We,{title:V.MORE.title,className:"guitar__button",type:V.MORE.type}),Object(fe.jsx)(We,{title:V.BUY.title,className:"guitar__button guitar__button--basket",type:V.BUY.type,icon:de.CART,onClick:s})]})]})},Je=function(e){var t=e.items;return t.length>0?Object(fe.jsx)("ul",{className:"catalogue__list",children:t.map((function(e,t){return Object(fe.jsx)(qe,{guitar:e},e.id)}))}):Object(fe.jsx)("p",{className:"catalogue__empty-message",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})},Ye=W,Xe=q,ze=J,Qe=function(e){var t=e.currentPage,c=e.totalPages,n=e.onButtonClick,r={previous:t>1&&Ye,first:1,prevDots:t>2&&c>3&&ze,currentPage:1===t&&c>=3?t+1:t===c&&c>=3?t-1:c>=3&&t,nextDots:t<c-1&&c>3&&ze,last:c>1&&c,next:t<c&&Xe},i=Object(a.useCallback)((function(e){if(e.preventDefault(),e.target.innerText!==ze){var c=e.target.innerText===Ye?t-1:e.target.innerText===Xe?t+1:Number(e.target.innerText);n(c)}}),[t,n]);return c>0&&Object(fe.jsx)("ul",{className:"catalogue__pagination pagination",children:Object.values(r).map((function(e,c){return e?Object(fe.jsx)("li",{className:"pagination__item ".concat(e===Ye||e===Xe?"pagination__item--nav":""),children:Object(fe.jsx)(We,{title:e.toString(),className:"pagination__button ".concat(e===t?"pagination__button--active":e===Ye||e===Xe?"pagination__button--nav":e===ze?"pagination__button--dots":""),type:"pagination",onClick:i})},c+1):""}))})},Ve=function(e){var t=e.guitars,c=Object(a.useState)(1),n=Object(Ie.a)(c,2),r=n[0],i=n[1],s=Object(a.useState)({start:0,end:9}),l=Object(Ie.a)(s,2),o=l[0],u=l[1],b=Object(a.useState)(0),j=Object(Ie.a)(b,2),p=j[0],m=j[1],d=Object(a.useState)([]),O=Object(Ie.a)(d,2),h=O[0],g=O[1];Object(a.useEffect)((function(){var e=Math.ceil(t.length/9);m(e),g(t.slice(o.start,o.end))}),[o,t]),Object(a.useEffect)((function(){i(1),u({start:0,end:9})}),[p]);var x=Object(a.useCallback)((function(e){i(e);var c=9*(e-1),a=c+9>t.length?t.length:c+9;u({start:c,end:a})}),[t]);return Object(fe.jsxs)("div",{className:"catalogue__showcase",children:[Object(fe.jsx)(He,{}),Object(fe.jsx)(Je,{items:h}),Object(fe.jsx)(Qe,{currentPage:r,totalPages:p,onButtonClick:x})]})},Ze=function(){var e=Object(i.c)((function(e){return e.guitarData})),t=Object(i.c)((function(e){return e.filter})),c=Object(i.c)((function(e){return e.sorting})),n=Object(i.b)(),r=Object(a.useState)(Object.values(e)),s=Object(Ie.a)(r,2),l=s[0],o=s[1],u=Object(a.useState)({min:0,max:0}),b=Object(Ie.a)(u,2),j=b[0],p=b[1];return Object(a.useEffect)((function(){var t=h(e,"price"),c=Math.max.apply(null,t),a=Math.min.apply(null,t);p({min:a,max:c})}),[e]),Object(a.useEffect)((function(){var a=t.price.min||0===t.price.min||t.price.max||0===t.price.min,r=Object.values(t.type).some((function(e){return!0===e})),i=Object.values(t.strings).some((function(e){return!0===e}));n(w(L));var s,l,u=Object.values(e);if(a){var b=t.price.min?t.price.min:0,p=t.price.max?t.price.max:j.max;s=b,l=p,u=u.filter((function(e){return s<=Number(e.price)&&Number(e.price)<=l}))}if(r){var m=Object.entries(t.type).reduce((function(e,t){var c=Object(Ie.a)(t,2),a=c[0];return!0===c[1]?[].concat(Object(d.a)(e),[me[a].name]):e}),[]),O=Object(d.a)(new Set(Object.entries(t.type).reduce((function(e,t){var c=Object(Ie.a)(t,2),a=c[0];return!0===c[1]?[].concat(Object(d.a)(e),[me[a].strings]):e}),[]).flat()));n(w(O)),u=function(e,t){return e.filter((function(e){return t.includes(e.type)}))}(u,m)}i&&(u=function(e,t){return e.filter((function(e){return t.includes(e.strings)}))}(u,Object.entries(t.strings).reduce((function(e,t){var c=Object(Ie.a)(t,2),a=c[0];return!0===c[1]?[].concat(Object(d.a)(e),[a]):e}),[])));var h=function(e,t,c){switch(c){case"ascending":return e.sort((function(e,c){return e[t]-c[t]}));case"descending":return e.sort((function(e,c){return c[t]-e[t]}));default:return e}}(u,c.type,c.order);o(h)}),[e,j,n,t,c]),Object(fe.jsxs)("div",{className:"catalogue__content",children:[Object(fe.jsx)(Le,{minPrice:j.min,maxPrice:j.max}),Object(fe.jsx)(Ve,{guitars:l})]})},$e=function(e){var t,c=e.guitar,a=e.isPopUp;return Object(fe.jsxs)(fe.Fragment,{children:[Object(fe.jsx)("div",{className:"purchase__image",children:Object(fe.jsxs)("picture",{children:[Object(fe.jsx)("source",{type:"image/webp",srcSet:"guitars/".concat(c.image,".webp 1x, guitars/").concat(c.image,"@2x.webp 2x")}),Object(fe.jsx)("img",{className:"purchase__picture",src:"guitars/".concat(c.image,".png"),srcSet:"guitars/".concat(c.image,"@2x.png 2x"),width:"48",height:"124",alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u0433\u0438\u0442\u0430\u0440\u044b ".concat(c.title)})]})}),Object(fe.jsxs)("div",{className:"purchase__info",children:[Object(fe.jsxs)("h3",{className:"purchase__title",children:[a?"\u0413\u0438\u0442\u0430\u0440\u0430":c.type," ",c.title]}),Object(fe.jsx)("p",{className:"purchase__text",children:"\u0410\u0440\u0442\u0438\u043a\u0443\u043b: ".concat(c.code)}),Object(fe.jsx)("p",{className:"purchase__text",children:"".concat((t=c.type,t[0].toUpperCase()+t.substring(1)),", ").concat(c.strings," \u0441\u0442\u0440\u0443\u043d\u043d\u0430\u044f")}),a&&Object(fe.jsx)("p",{className:"purchase__sum",children:"\u0426\u0435\u043d\u0430: ".concat(O(c.price)," ").concat(Oe)})]})]})},et=function(e){var t=e.guitar,c=e.isEmptyCard,n=Object(i.b)(),r=Object(a.useCallback)((function(e){e.preventDefault(),g(e.target.value)?n(T({id:t.id,count:Number(e.target.value)})):n(T({id:t.id,count:1}))}),[n,t]),s=Object(a.useCallback)((function(e){if(Number(e.target.value)<1)return n(C({name:Z.DELETE.type.toUpperCase(),product:t.id})),void n(T({id:t.id,count:1}))}),[n,t]),l=Object(a.useCallback)((function(e){switch(e.preventDefault(),e.target.id){case Y:var c=t.count-1;if(c<1)return n(C({name:Z.DELETE.type.toUpperCase(),product:t.id})),void n(T({id:t.id,count:1}));n(T({id:t.id,count:c}));break;case X:n(T({id:t.id,count:t.count+1}));break;default:return}}),[n,t]),o=Object(a.useCallback)((function(e){e.preventDefault(),n(C({name:Z.DELETE.type.toUpperCase(),product:t.id}))}),[n,t]);return Object(fe.jsxs)("li",{className:"cart__item purchase ".concat(c?"purchase--empty":""),children:[c&&Object(fe.jsxs)(fe.Fragment,{children:[Object(fe.jsxs)("h3",{className:"purchase__title",children:[Object(fe.jsx)(Ne,{icon:de.CART}),"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"]}),Object(fe.jsx)(We,{title:V.CONTINUE.title,className:"pop-up__button",type:V.CONTINUE.type,path:ne})]}),t&&Object(fe.jsxs)(fe.Fragment,{children:[Object(fe.jsx)("button",{type:"button",className:"purchase__delete","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440",onClick:o}),Object(fe.jsx)($e,{guitar:t}),Object(fe.jsx)("p",{className:"purchase__price",children:"".concat(O(t.price)," ").concat(Oe)}),Object(fe.jsxs)("div",{className:"purchase__quantity",children:[Object(fe.jsx)("button",{id:"decrease",className:"purchase__\u0441ontrol purchase__\u0441ontrol--decrease",type:"button","aria-label":"\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c",onClick:l}),Object(fe.jsx)("label",{className:"visually-hidden",htmlFor:"quantity",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(fe.jsx)("input",{className:"purchase__input",type:"number",id:"quantity",name:"quantity",value:t.count,onChange:r,onBlur:s}),Object(fe.jsx)("button",{id:"increase",className:"purchase__\u0441ontrol purchase__\u0441ontrol--increase",type:"button","aria-label":"\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c",onClick:l})]}),Object(fe.jsx)("p",{className:"purchase__sum",children:"".concat(O(t.price*t.count)," ").concat(Oe)})]})]})},tt=function(){var e=Object(i.c)((function(e){return e.cartData})),t=Object(i.c)((function(e){return e.guitarData})),c=Object(i.c)((function(e){return e.promoCode})),n=Object(i.b)(),r=Object.values(t).filter((function(t){return Object.keys(e).includes(t.id)})).map((function(t){return Object(o.a)(Object(o.a)({},t),{},{count:e[t.id].count})})),s=0===r.length;return Object(a.useEffect)((function(){if(s)n(A(0));else{var e=function(e,t){var c=e.reduce((function(e,t){var c=t.price,a=t.count;return e+Number(c)*a}),0);if(t){var a;switch(t){case"GITARAHIT":a=.1*c;break;case"SUPERGITARA":a=700;break;case"GITARA2020":a=.3*c>3500?3500:.3*c;break;default:return a}c-=a}return c}(r,c);n(A(e)),A(e)}}),[n,s,c,r]),Object(fe.jsxs)("ul",{className:"cart__list",children:[s&&Object(fe.jsx)(et,{isEmptyCard:!0}),!s&&r.map((function(e){return Object(fe.jsx)(et,{guitar:e},e.id)}))]})},ct=function(){var e=Object(i.c)((function(e){return e.orderSum})),t=Object(i.c)((function(e){return e.promoCode})),c=Object(i.b)(),n=Object(a.useState)(""),r=Object(Ie.a)(n,2),s=r[0],l=r[1],o=Object(a.useState)(!1),u=Object(Ie.a)(o,2),b=u[0],j=u[1],p=Object(a.useCallback)((function(e){e.preventDefault(),j(!1),l(e.target.value)}),[]),m=Object(a.useCallback)((function(e){e.preventDefault(),H.includes(s.toUpperCase())?t?j(ae):c(P(s.toUpperCase())):j(ce)}),[c,t,s]);return Object(fe.jsxs)("form",{action:"#",className:"cart__order order",children:[Object(fe.jsxs)("div",{className:"order__promo",children:[Object(fe.jsx)("p",{className:"order__promo-title",children:"\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434 \u043d\u0430 \u0441\u043a\u0438\u0434\u043a\u0443"}),Object(fe.jsx)("p",{className:"order__promo-subtitle",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434, \u0435\u0441\u043b\u0438 \u043e\u043d \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c."}),Object(fe.jsxs)("div",{className:"order__promo-wrapper",children:[Object(fe.jsx)(Pe,{className:"order__promo-input ".concat(b?"order__promo-input--error":""),name:"promo",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434",value:s,onChangeInput:p}),b&&Object(fe.jsx)("span",{className:"order__promo-error",children:"".concat(b===ce?"\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434 \u043d\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u0435\u043d":"\u0412\u044b \u0443\u0436\u0435 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434")}),Object(fe.jsx)(We,{title:V.PROMO.title,className:"order__button order__button--promo",type:V.PROMO.type,onClick:m})]})]}),Object(fe.jsxs)("div",{className:"order__checkout",children:[Object(fe.jsx)("p",{className:"order__checkout-total",children:"\u0412\u0441\u0435\u0433\u043e: ".concat(O(e)," ").concat(Oe)}),Object(fe.jsx)(We,{title:V.CHECKOUT.title,className:"order__button order__button--checkout",type:V.CHECKOUT.type})]})]})},at=function(){return Object(fe.jsxs)("div",{className:"cart__content",children:[Object(fe.jsx)(tt,{}),Object(fe.jsx)(ct,{})]})},nt=function(e){var t=e.isMain,c=e.isWebPSupport;return Object(fe.jsx)("footer",{className:"footer",children:Object(fe.jsxs)("div",{className:"footer__wrapper ".concat(c?"footer__wrapper--webp":"footer__wrapper--no-webp"," container"),children:[Object(fe.jsx)(ye,{type:Q,isMain:t}),Object(fe.jsx)(Se,{type:"social",items:M,isIconsOnly:!0}),Object(fe.jsx)("ul",{className:"footer__navigation",children:F.map((function(e){return Object(fe.jsxs)("li",{className:"footer__navigation-item",children:[Object(fe.jsx)("h3",{className:"footer__navigation-title",children:e.title}),e.text?Object(fe.jsx)(Se,{type:e.type,items:e.text,isText:!0}):Object(fe.jsx)(Se,{type:e.type,items:e.items})]},e.type)}))})]})})},rt=function(e){var t=e.type,c=e.title,n=e.productId,r=e.buttons,s=Object(i.c)((function(e){return e.guitarData[n]}))||null,l=Object(i.b)(),o=Object(xe.f)(),u=Object(a.useCallback)((function(e){e.preventDefault(),l(k())}),[l]),b=Object(a.useCallback)((function(e){switch(e.preventDefault(),e.target.innerText){case V.ADD.title:l(D(n)),l(k()),l(C({name:Z.SUCCESS.type.toUpperCase()}));break;case V.CONTINUE.title:l(k());break;case V.GO_TO_BASKET.title:l(k()),o.push(re);break;case V.DELETE.title:l(I(n)),l(k())}}),[l,o,n]);return Object(fe.jsxs)("section",{className:"pop-up",onClick:u,children:[Object(fe.jsx)("h2",{className:"visually-hidden",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(fe.jsxs)("div",{className:"pop-up__window pop-up__window--".concat(t),onClick:function(e){return e.stopPropagation()},children:[Object(fe.jsx)("button",{type:"button",className:"pop-up__close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f-\u0430\u043f",onClick:u}),Object(fe.jsx)("h3",{className:"pop-up__title",children:c}),Object(fe.jsxs)("div",{className:"pop-up__content",children:[s&&Object(fe.jsx)("div",{className:"pop-up__item",children:Object(fe.jsx)($e,{guitar:s,isPopUp:!0})}),Object(fe.jsx)("div",{className:"pop-up__buttons",children:r.map((function(e,t){return Object(fe.jsx)(We,{title:e.title,className:"pop-up__button",type:e.type,onClick:b},t+1)}))})]})]})]})},it=function(e){var t=e.type,c=Object(_e.useWebPSupportCheck)(),n=t===le,r=Object(i.c)((function(e){return e.popUp})),s=Object(i.b)();Object(a.useEffect)((function(){r?(document.body.style.overflow="hidden",document.addEventListener("keydown",l)):(document.body.style.overflow="auto",document.removeEventListener("keydown",l))}));var l=Object(a.useCallback)((function(e){e.key!==se&&e.key!==ie||(e.preventDefault(),s(k()))}),[s]);return Object(fe.jsxs)(fe.Fragment,{children:[Object(fe.jsx)(we,{isMain:n,isWebPSupport:c}),Object(fe.jsx)(Te,{type:t,isMain:n,children:n?Object(fe.jsx)(Ze,{}):Object(fe.jsx)(at,{})}),Object(fe.jsx)(nt,{isMain:n,isWebPSupport:c}),r&&Object(fe.jsx)(rt,{type:Z[r.name].type,title:Z[r.name].title,buttons:Z[r.name].buttons,productId:r.product})]})},st=ne,lt=re,ot=le,ut=oe,bt=function(){return Object(fe.jsx)(ge.a,{children:Object(fe.jsxs)(xe.c,{children:[Object(fe.jsx)(xe.a,{exact:!0,path:st,children:Object(fe.jsx)(it,{type:ot})}),Object(fe.jsx)(xe.a,{exact:!0,path:lt,children:Object(fe.jsx)(it,{type:ut})})]})})},jt=Object(s.a)({reducer:U,middleware:function(e){return e({serializableCheck:!1}).concat(he)}});Promise.all([jt.dispatch(_())]).then((function(){r.a.render(Object(fe.jsx)(i.a,{store:jt,children:Object(fe.jsx)(bt,{})}),document.getElementById("root"))})).catch((function(e){console.error(e)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.ce9e1ab9.chunk.js.map