(this["webpackJsonpcheese-frontend"]=this["webpackJsonpcheese-frontend"]||[]).push([[0],{194:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),i=n(21),s=n.n(i),c=(n(85),n(7)),o=n.n(c),u=n(9),l=n(11),d=n(14),m=n(18),h=n(17),p=n(12),b=n.n(p),j=function e(){Object(l.a)(this,e)};j.state={update:function(){}};var f=n(0);function v(e){var t=e.onMenuButtonClick,n=e.isMenuButtonActive?" active":"";return Object(f.jsx)("header",{className:"header container",children:Object(f.jsxs)("div",{className:"header__content header-content",children:[Object(f.jsx)("div",{className:"header__menu-button menu-button"+n,onClick:t,children:"\u041c\u0435\u043d\u044e"}),Object(f.jsx)("div",{className:"header__title",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0448\u0442\u0430\u043c\u043c\u0430"})]})})}function O(e){var t=e.items,n=e.activeItem,a=e.onChoose;return Object(f.jsx)("div",{className:"main-content__menu",children:Object(f.jsx)("div",{className:"menu",children:t.map((function(e){var r=e.id,i=e.label;return Object(f.jsx)(g,{label:i,isActive:r===n.id,onClick:function(){return a(t.find((function(e){return e.id===r})))}},r)}))})})}function g(e){var t=e.label,n=e.isActive,a=e.onClick,r=n?" active":"";return Object(f.jsx)("div",{onClick:a,className:"menu__item menu-item"+r,children:Object(f.jsx)("div",{className:"menu-item__text item-text",children:Object(f.jsx)("span",{children:t})})})}var x=n(22),y=n(10),_=3e4,C=function(e){return"\u0438\u0441\u0442\u0435\u043a\u043b\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f (".concat(e/1e3,"\u0441)")},S=function(e){return{timeout:e,timeoutErrorMessage:C(e)}};function k(){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(o.a.mark((function e(){var t,n,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:_,e.next=3,b.a.get("/strain",S(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return L.apply(this,arguments)}function L(){return(L=Object(u.a)(o.a.mark((function e(t){var n,a,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:_,e.next=3,b.a.get("/strain/".concat(t),S(n));case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(o.a.mark((function e(){var t,n,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:_,e.next=3,b.a.get("/strain-genus",S(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(o.a.mark((function e(){var t,n,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:_,e.next=3,b.a.get("/strain-type",S(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(o.a.mark((function e(){var t,n,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:_,e.next=3,b.a.get("/property/with_parameters",S(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return Object(f.jsxs)("div",{className:"property",children:[Object(f.jsx)("div",{className:"property__title",children:Object(f.jsx)("span",{children:e.title})}),e.children]})}var U=n(15);function E(e){var t=Object(a.useState)(Object(U.a)()),n=Object(y.a)(t,1)[0];return Object(f.jsxs)("div",{className:"strain-form__item form__field",children:[Object(f.jsx)("label",{htmlFor:n,className:"strain-form__label form-label",children:e.label}),Object(f.jsx)("select",{name:e.name,value:e.activeItem,onChange:function(t){return e.onSelectChange(t.target)},id:n,className:"strain-form__input form-input",children:e.items.map((function(e){var t=e.text,n=e.value;return Object(f.jsx)("option",{value:n,children:t},n)}))})]})}function J(e){var t=Object(a.useState)(Object(U.a)()),n=Object(y.a)(t,1)[0];return Object(f.jsxs)("div",{className:"strain-form__item form__field",children:[Object(f.jsx)("label",{htmlFor:n,className:"strain-form__label form-label",children:e.label}),Object(f.jsx)("input",{name:e.name,value:e.value,onChange:function(t){return e.onChange(t.target.value,t.target.name)},id:n,type:"text",className:"strain-form__input form-input"})]})}var q=n(80),R=n(77),T=n.n(R),z=n(76),G=n.n(z);n(106);function H(e){var t=e.locale,n=void 0===t?G.a:t,a=e.dateFormat,r=void 0===a?"dd.MM.yyyy":a,i=Object(q.a)(e,["locale","dateFormat"]);return Object(f.jsx)(T.a,Object(x.a)({locale:n,dateFormat:r},i))}function K(e){var t=Object(a.useState)(Object(U.a)()),n=Object(y.a)(t,1)[0];return Object(f.jsxs)("div",{className:"strain-form__item form__field",children:[Object(f.jsx)("label",{htmlFor:n,className:"strain-form__label form-label",children:e.label}),Object(f.jsx)(H,{name:e.name,selected:""===e.value?new Date:new Date(e.value),onChange:function(t){return e.onChange(function(e){return e.toISOString().split("T")[0]}(t),e.name)},id:n,className:"strain-form__input form-input"})]})}var Q=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).strain=void 0,a.onSubmit=function(e){},a.onBaseFieldChanged=function(e,t){a.strain[t]=e,a.forceUpdate()},a.state={isLoading:!1,genusList:[],typeList:[]},a.strain={name:"",collectionIndex:"",dateReceiving:"",source:"",dateAdded:"",obtainingMethod:"",properties:[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a,r,i,s,c,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:return t=e.sent,console.log("all props:",t),n=this.props.strainId,this.setState({isLoading:!0}),e.prev=6,e.next=9,n?Promise.all([I(),B(),M(n)]):Promise.all([I(),B()]);case 9:a=e.sent,r=Object(y.a)(a,3),i=r[0],s=r[1],c=r[2],this.setState({genusList:i,typeList:s}),c&&(this.strain=c,this.setState({genus:null===(u=c.type)||void 0===u?void 0:u.genus}),this.forceUpdate()),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(6),this.setState({requestError:e.t0});case 21:this.setState({isLoading:!1});case 22:case"end":return e.stop()}}),e,this,[[6,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,n=this.state,a=n.isLoading,r=n.requestError;if(a)return Object(f.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445..."});if(r)return"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445: ".concat(r.message);var i=this.state,s=i.genusList,c=i.typeList,o=i.genus,u=this.strain;return Object(f.jsxs)("div",{className:"strain-adding",children:[Object(f.jsxs)("form",{onSubmit:this.onSubmit,className:"strain-form form--position-block-center",children:[Object(f.jsx)(E,{label:"\u0420\u043e\u0434",items:s.map((function(e){return{text:e.name,value:e.id.toString()}})),activeItem:null===o||void 0===o?void 0:o.id.toString(),onSelectChange:function(e){var n,a=parseInt(e.value,10),r=s.find((function(e){return a===e.id}));(null===(n=u.type)||void 0===n?void 0:n.genus.id)!==(null===r||void 0===r?void 0:r.id)&&delete u.type,t.setState({genus:r}),t.forceUpdate()}}),Object(f.jsx)(E,{label:"\u0412\u0438\u0434",items:c.filter((function(e){return e.genus.id===(null===o||void 0===o?void 0:o.id)})).map((function(e){return{text:e.name,value:e.id.toString()}})),activeItem:null===(e=u.type)||void 0===e?void 0:e.id.toString(),onSelectChange:function(e){var n=parseInt(e.value,10);u.type=c.find((function(e){return n===e.id})),t.forceUpdate()}}),Object(f.jsx)(J,{label:"\u0418\u0441\u0445\u0440\u043e\u0434\u043d\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441",name:"name",value:u.name,onChange:this.onBaseFieldChanged}),Object(f.jsx)(K,{label:"\u0414\u0430\u0442\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f",name:"dateReceiving",value:u.dateReceiving,onChange:this.onBaseFieldChanged}),Object(f.jsx)(J,{label:"\u0418\u043d\u0434\u0435\u043a\u0441 \u0448\u0442\u0430\u043c\u043c\u043e\u0432",name:"collectionIndex",value:u.collectionIndex,onChange:this.onBaseFieldChanged}),Object(f.jsx)(J,{label:"\u041f\u0440\u043e\u0438\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435",name:"source",value:u.source,onChange:this.onBaseFieldChanged}),Object(f.jsx)(J,{label:"\u0421\u043f\u043e\u0441\u043e\u0431 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f",name:"obtainingMethod",value:u.obtainingMethod,onChange:this.onBaseFieldChanged}),Object(f.jsx)("div",{className:"strain-form__properties properties",children:u.properties.map((function(e){var n,a;return Object(f.jsxs)(P,{title:e.propertyName,children:[null===(n=e.ungroupedParameters)||void 0===n?void 0:n.map((function(e){return Object(f.jsx)(V,{param:e,onChange:function(n,a){e.value=n,t.forceUpdate()}},e.id)})),null===(a=e.groups)||void 0===a?void 0:a.map((function(e){return Object(f.jsx)("div",{style:{border:"1px dashed"},children:e.parameters.map((function(e){return Object(f.jsx)(V,{param:e,onChange:function(n,a){e.value=n,t.forceUpdate()}},e.id)}))},e.groupId)}))]},e.propertyId)}))})]}),Object(f.jsxs)("div",{className:"strain-adding__buttons form-buttons",children:[Object(f.jsx)("button",{type:"submit",className:"form-buttons__submit-button form-button submit-button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(f.jsx)("button",{type:"button",className:"form-buttons__cancel-button form-button cancel-button",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})}}]),n}(r.a.Component);function V(e){var t=e.param,n=e.onChange,a={label:t.formalParameter.value,name:t.id.toString(),value:t.value,onChange:function(e,a){return n(e,t)}};return"Date"===t.formalParameter.parameterDataType.name?Object(f.jsx)(K,Object(x.a)({},a)):Object(f.jsx)(J,Object(x.a)({},a))}var W=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isLoading:!1,strainList:[],typeList:[],genusList:[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.prev=1,e.next=4,Promise.all([k(),B(),I()]);case 4:t=e.sent,n=Object(y.a)(t,3),a=n[0],r=n[1],i=n[2],this.setState({strainList:a,typeList:r,genusList:i}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),this.setState({requestError:e.t0});case 15:this.setState({isLoading:!1});case 16:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.requestError;if(t)return Object(f.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445..."});if(n)return"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445: ".concat(n.message);var a=this.state,r=a.strainList,i=a.typeList,s=a.genusList;return Object(f.jsxs)("div",{children:["\u0448\u0442\u0430\u043c\u043c\u044b",Object(f.jsx)("pre",{children:JSON.stringify(r,null,2)}),"\u0432\u0438\u0434\u044b",Object(f.jsx)("pre",{children:JSON.stringify(i,null,2)}),"\u0440\u043e\u0434\u0430",Object(f.jsx)("pre",{children:JSON.stringify(s,null,2)})]})}}]),n}(r.a.Component),X=["\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043c\u0438\u043a\u0440\u043e\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043c\u043e\u0432","\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0448\u0442\u0430\u043c\u043c \u043c\u0438\u043a\u0440\u043e\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043c\u0430","\u041f\u043e\u0438\u0441\u043a \u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0448\u0442\u0430\u043c\u043c\u043e\u0432 \u043c\u0438\u043a\u0440\u043e\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043c\u043e\u0432","\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043c\u0438\u043a\u0440\u043e\u043e\u0440\u0433\u0430\u043d\u0437\u0438\u043c\u043e\u0432"].map((function(e,t){return{id:t,label:e}})),Y=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onMenuItemChoose=function(e){a.setState({activeMenuItem:e})},a.onMenuButtonClick=function(){a.setState((function(e,t){return{isBlockMenuActive:!e.isBlockMenuActive}}))},a.state={isBlockMenuActive:!0,activeMenuItem:X[0]},b.a.defaults.baseURL="http://localhost:8081",j.state.update=function(){a.forceUpdate()},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"chooseScreen",value:function(){switch(this.state.activeMenuItem.id){case 0:return Object(f.jsx)(W,{});case 1:return Object(f.jsx)(Q,{strainId:2});default:return null}}},{key:"render",value:function(){var e=this.state,t=e.isBlockMenuActive,n=e.activeMenuItem;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(v,{onMenuButtonClick:this.onMenuButtonClick,isMenuButtonActive:this.state.isBlockMenuActive}),Object(f.jsx)("main",{className:"main container",children:Object(f.jsxs)("div",{className:"main__content main-content",children:[t?Object(f.jsx)(O,{items:X,activeItem:n,onChoose:this.onMenuItemChoose}):null,this.chooseScreen()]})})]})}}]),n}(r.a.Component),Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,196)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(Y,{})}),document.getElementById("root")),Z()},85:function(e,t,n){}},[[194,1,2]]]);
//# sourceMappingURL=main.727867f5.chunk.js.map