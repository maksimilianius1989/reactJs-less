!function(e){function t(t){for(var n,i,c=t[0],l=t[1],u=t[2],s=0,f=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(p&&p(t);f.length;)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var l=r[c];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={1:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="dist/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;a.push([78,0]),r()}({22:function(e,t,r){e.exports={active:"active_6cc4b3e",my_item:"my_item_c446d00"}},49:function(e,t,r){e.exports={input:"input_569093f"}},50:function(e,t,r){e.exports={col:"col_bb9b535"}},78:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"all",function(){return tt});var o={};r.r(o),r.d(o,"load",function(){return rt}),r.d(o,"add",function(){return nt}),r.d(o,"remove",function(){return ot}),r.d(o,"changeCnt",function(){return at}),r.d(o,"clean",function(){return it});var a,i=r(0),c=r.n(i),l=r(13),u=r.n(l),p=r(22),s=r.n(p),f=r(16),y=r(7),b=r(6),d=r.n(b),m=r(81),h=r(82),v=r(80),O=r(11);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=Object(O.b)("stores")(a=Object(O.c)(a=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=E(this,(e=j(t)).call.apply(e,[this].concat(o)))).state={showModal:!1},r.show=function(){r.setState({showModal:!0})},r.hide=function(){r.setState({showModal:!1})},r.confirm=function(){r.props.stores.order.send().then(function(){r.hide(),r.props.history.push(Ee.result)})},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,c.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props.stores.order,t=this.props.stores.cart,r=[],n=function(t){var n=e.formData[t];r.push(c.a.createElement(m.a.Group,{key:t,controlId:"order-form-"+t},c.a.createElement(m.a.Label,null,n.label),c.a.createElement(m.a.Control,{type:"text",value:n.value,onChange:function(r){return e.change(t,r.target.value)}}),null===n.valid||n.valid?"":c.a.createElement(m.a.Text,{className:"text-muted"},n.errorText)))};for(var o in e.formData)n(o);return c.a.createElement("div",null,c.a.createElement("h2",null,"Order"),c.a.createElement("hr",null),c.a.createElement(m.a,null,r),c.a.createElement(y.b,{className:"btn btn-warning",to:Ee.home},"Back to cart")," ",c.a.createElement(h.a,{variant:"primary",onClick:this.show,disabled:!e.formValid},"Apply order"),c.a.createElement(v.a,{show:this.state.showModal,backdrop:"static",onHide:this.hide},c.a.createElement(v.a.Header,{closeButton:!0},c.a.createElement(v.a.Title,null,"Check information")),c.a.createElement(v.a.Body,null,"Total cart: ",t.total),c.a.createElement(v.a.Footer,null,c.a.createElement(h.a,{variant:"secondary",onClick:this.hide},"Ooops"),c.a.createElement(h.a,{variant:"primary",onClick:this.confirm},"All right"))))}}])&&w(r.prototype,n),o&&w(r,o),t}())||a)||a;function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=x(this,(e=T(t)).call.apply(e,[this].concat(o)))).nativeInput=c.a.createRef(),r.checkChange=function(e){r.props.value.toString()!==e.target.value&&r.props.onChange(e)},r.checkEnterKey=function(e){13===e.keyCode&&r.checkChange(e)},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,c.a.Component),r=t,(n=[{key:"componentDidUpdate",value:function(e,t){var r=this.nativeInput.current;e.value!==this.props.value&&this.props.value!=r.value&&(r.value=this.props.value)}},{key:"setValue",value:function(e){this.nativeInput.current.value=e}},{key:"render",value:function(){return c.a.createElement("input",_({},this.props.nativeProps,{defaultValue:this.props.value,onBlur:this.checkChange,onKeyUp:this.checkEnterKey,ref:this.nativeInput}))}}])&&S(r.prototype,n),o&&S(r,o),t}();I.defaultProps={onChange:function(e){},nativeProps:{}},I.propTypes={value:d.a.any.isRequired,onChange:d.a.func,nativeProps:d.a.object};var z=r(49),N=r.n(z);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var q=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=A(this,(e=B(t)).call.apply(e,[this].concat(o)))).lazyInput=c.a.createRef(),r.increase=function(){r.set(r.props.cnt+1)},r.decrease=function(){r.set(r.props.cnt-1)},r.onChange=function(e){var t=parseInt(e.target.value),n=r.set(isNaN(t)?r.props.min:t);n.toString()!==e.target.value&&r.lazyInput.current.setValue(n)},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,c.a.PureComponent),r=t,(n=[{key:"set",value:function(e){var t=Math.min(Math.max(e,this.props.min),this.props.max);return this.props.onChange(t),t}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{onClick:this.decrease,disabled:this.props.disabled||this.props.cnt<=this.props.min},"-"),c.a.createElement(I,{nativeProps:{type:"text",className:N.a.input,disabled:this.props.disabled},value:this.props.cnt,onChange:this.onChange,ref:this.lazyInput}),c.a.createElement("button",{onClick:this.increase,disabled:this.props.disabled||this.props.cnt>=this.props.max},"+"))}}])&&M(r.prototype,n),o&&M(r,o),t}();q.defaultProps={onChange:function(e){}},q.propTypes={min:d.a.number.isRequired,max:d.a.number.isRequired,cnt:d.a.number.isRequired,onChange:d.a.func,disabled:d.a.bool};var F=function(e){return Object(O.b)("stores")(Object(O.c)(e))};function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var G=Object(f.f)(function(e){var t=e.history,r=(e.location,e.match,e.staticContext,e.to);return H(e,["history","location","match","staticContext","to"]),c.a.createElement("button",U({},e,{onClick:function(e){return t.push(r)}}))});function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function J(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Y=F(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),J(this,L(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,c.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props.stores.cart,t=e.productsDetailed.map(function(t,r){return c.a.createElement("tr",{key:t.id},c.a.createElement("td",null,t.title),c.a.createElement("td",null,t.price),c.a.createElement("td",null,c.a.createElement(q,{min:1,max:t.rest,cnt:t.cnt,onChange:function(r){return e.change(t.id,r)},disabled:t.id in e.processId})),c.a.createElement("td",null,t.price*t.cnt),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){return e.remove(t.id)},disabled:t.id in e.processId},"X")))});return c.a.createElement("div",null,c.a.createElement("h2",null,"Cart"),c.a.createElement("table",{className:"table table-bordered"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Title"),c.a.createElement("td",null,"Price"),c.a.createElement("td",null,"Count"),c.a.createElement("td",null,"Total"),c.a.createElement("td",null,"Actions"))),c.a.createElement("tbody",null,t)),c.a.createElement("h3",null,"Total: ",e.total),c.a.createElement("hr",null),c.a.createElement(G,{to:Ee.order,className:"btn btn-primary"},"Send"))}}])&&$(r.prototype,n),o&&$(r,o),t}());function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function W(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var re,ne=F(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),W(this,ee(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(t,c.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props.stores.order.lastOrderCache;return c.a.createElement("div",null,c.a.createElement("h2",null,"Congratulations!"),c.a.createElement("p",null,"Hi, ",e.name,"!"),c.a.createElement("p",null,c.a.createElement("strong",null,"Total: ",e.total)),c.a.createElement("div",null))}}])&&Q(r.prototype,n),o&&Q(r,o),t}()),oe=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Error 404, page not found"),c.a.createElement("hr",null),c.a.createElement("div",{className:"alert alert-warning"},c.a.createElement("p",null,"Go to",c.a.createElement(y.b,{to:Ee.home},"home page"))))},ae=r(83),ie=r(50),ce=r.n(ie);function le(e){return(le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function pe(e,t){return!t||"object"!==le(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function fe(e,t){return(fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ye,be=Object(O.b)("stores")(re=Object(O.c)(re=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),pe(this,se(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fe(e,t)}(t,c.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props.stores.cart,t=this.props.stores.products.items.map(function(t){var r;return r=e.inCart(t.id)?c.a.createElement(h.a,{variant:"danger",onClick:function(){return e.remove(t.id)},disabled:t.id in e.processId},"Remove from cart"):c.a.createElement(h.a,{variant:"success",onClick:function(){return e.add(t.id)},disabled:t.id in e.processId},"Add to cart"),c.a.createElement("div",{className:"col col-4 "+ce.a.col,key:t.id},c.a.createElement(ae.a,null,c.a.createElement(ae.a.Body,null,c.a.createElement(ae.a.Title,null,t.title),c.a.createElement(ae.a.Text,null,c.a.createElement("strong",null,"Price: ",t.price)),c.a.createElement(y.b,{to:je("product",{id:t.id})},"Get more..."),c.a.createElement("hr",null),r)))});return c.a.createElement("div",null,c.a.createElement("h1",null,"Products page"),c.a.createElement("div",{className:"row"},t))}}])&&ue(r.prototype,n),o&&ue(r,o),t}())||re)||re,de=function(e){var t;return t=e.inCart?c.a.createElement(h.a,{variant:"danger",onClick:e.onRemove},"Remove from cart"):c.a.createElement(h.a,{variant:"success",onClick:e.onAdd},"Add to cart"),c.a.createElement("div",null,c.a.createElement("h1",null,e.title),c.a.createElement("hr",null),c.a.createElement("div",null,c.a.createElement("strong",null,"Price: ",e.price)),c.a.createElement(y.b,{to:e.backUrl},"back to list"),c.a.createElement("p",null,"Text about product"),t)};function me(e){return(me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function he(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ve(e,t){return!t||"object"!==me(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Oe(e){return(Oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ge(e,t){return(ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var we=[{name:"home",url:"/",component:be,exact:!0},{name:"product",url:"/products/:id",component:Object(O.b)("stores")(ye=Object(O.c)(ye=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ve(this,Oe(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ge(e,t)}(t,c.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props.match.params.id,t=this.props.stores.products.getById(e),r=this.props.stores.cart;return null===t?c.a.createElement(oe,null):c.a.createElement(de,{title:t.title,price:t.price,backUrl:Ee.home,inCart:r.inCart(t.id),onAdd:function(){return r.add(t.id)},onRemove:function(){return r.remove(t.id)}})}}])&&he(r.prototype,n),o&&he(r,o),t}())||ye)||ye,exact:!0},{name:"cart",url:"/cart",component:Y,exact:!0},{name:"order",url:"/order",component:k,exact:!0},{name:"result",url:"/done",component:ne,exact:!0},{url:"**",component:function(){return c.a.createElement(oe,null)}}],Ee={};we.forEach(function(e){e.hasOwnProperty("name")&&(Ee[e.name]=e.url)});var je=function(e,t){Ee.hasOwnProperty(e);var r=Ee[e];for(var n in t)r=r.replace(":"+n,t[n]);return r},Pe=we;function ke(e){return(ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ce(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _e(e,t){return!t||"object"!==ke(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xe(e,t){return(xe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Te,De,Ie,ze=F(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_e(this,Se(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&xe(e,t)}(t,c.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props.stores.cart,t=Pe.map(function(e){return c.a.createElement(f.a,{path:e.url,component:e.component,exact:e.exact,key:e.url})});return c.a.createElement(y.a,null,c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement("hr",null),c.a.createElement("div",{className:"row justify-content-between"},c.a.createElement("div",{className:"col col-4"},c.a.createElement("div",{className:"alert alert-success"},"Site name")),c.a.createElement("div",{className:"col col-3"},c.a.createElement("strong",null,"In Cart: ",e.cartCnt,c.a.createElement("br",null),"Total: ",e.total))),c.a.createElement("hr",null))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col-3"},c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item ".concat(s.a.my_item)},c.a.createElement(y.c,{to:Ee.home,activeClassName:s.a.active,exact:!0},"Home")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(y.c,{to:Ee.cart,activeClassName:s.a.active},"Cart")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(y.c,{to:Ee.order,activeClassName:s.a.active},"Order now")))),c.a.createElement("div",{className:"col col-9"},c.a.createElement(f.c,null,t)))))}}])&&Ce(r.prototype,n),o&&Ce(r,o),t}()),Ne=(r(77),r(3));function Re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Me(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ae(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function Be(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ve(e,t,r,n,o){var a={};return Object.keys(n).forEach(function(e){a[e]=n[e]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var qe,Fe,Ue=(De=Ve((Te=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Ae(this,"products",De,this),Ae(this,"processId",Ie,this),this.rootStore=t,this.api=this.rootStore.api.cart,this.storage=this.rootStore.storage,this.token=this.storage.getItem("cartToken")}var t,r,n;return t=e,(r=[{key:"load",value:function(){var e=this;this.api.load(this.token).then(function(t){e.products=t.cart,console.log("---------------\x3e",t),t.needUpdate&&(e.token=t.token,e.storage.setItem("cartToken",e.token))})}},{key:"add",value:function(e){var t=this;e in this.processId||this.inCart(e)||(this.processId[e]=!0,this.api.add(this.token,e).then(function(r){r&&(t.products.push({id:e,cnt:1}),delete t.processId[e])}))}},{key:"change",value:function(e,t){var r=this;if(!(e in this.processId)){var n=this.isFindId(e);-1!==n&&(this.processId[e]=!0,this.api.changeCnt(this.token,e,t).then(function(o){r.products[n].cnt=t,delete r.processId[e]}))}}},{key:"remove",value:function(e){var t=this;if(this.inCart(e)&&!(e in this.processId)){var r=this.isFindId(e);-1!==r&&(this.processId[e]=!0,this.api.remove(this.token,e).then(function(n){t.products.splice(r,1),delete t.processId[e]}))}}},{key:"clean",value:function(){var e=this;return new Promise(function(t,r){e.api.clean(e.token).then(function(n){n?(e.products=[],t()):r()})})}},{key:"isFindId",value:function(e){return this.products.findIndex(function(t){return t.id===e})}},{key:"productsDetailed",get:function(){var e=this;return this.products.map(function(t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Re(r,!0).forEach(function(t){Me(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Re(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.rootStore.products.getById(t.id),{cnt:t.cnt})})}},{key:"inCart",get:function(){var e=this;return function(t){return e.products.some(function(e){return e.id===t})}}},{key:"cartCnt",get:function(){return this.products.length}},{key:"total",get:function(){return this.productsDetailed.reduce(function(e,t){return e+t.price*t.cnt},0)}}])&&Be(t.prototype,r),n&&Be(t,n),e}()).prototype,"products",[Ne.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Ie=Ve(Te.prototype,"processId",[Ne.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Ve(Te.prototype,"productsDetailed",[Ne.e],Object.getOwnPropertyDescriptor(Te.prototype,"productsDetailed"),Te.prototype),Ve(Te.prototype,"inCart",[Ne.e],Object.getOwnPropertyDescriptor(Te.prototype,"inCart"),Te.prototype),Ve(Te.prototype,"cartCnt",[Ne.e],Object.getOwnPropertyDescriptor(Te.prototype,"cartCnt"),Te.prototype),Ve(Te.prototype,"total",[Ne.e],Object.getOwnPropertyDescriptor(Te.prototype,"total"),Te.prototype),Ve(Te.prototype,"load",[Ne.d],Object.getOwnPropertyDescriptor(Te.prototype,"load"),Te.prototype),Ve(Te.prototype,"add",[Ne.d],Object.getOwnPropertyDescriptor(Te.prototype,"add"),Te.prototype),Ve(Te.prototype,"change",[Ne.d],Object.getOwnPropertyDescriptor(Te.prototype,"change"),Te.prototype),Ve(Te.prototype,"remove",[Ne.d],Object.getOwnPropertyDescriptor(Te.prototype,"remove"),Te.prototype),Ve(Te.prototype,"clean",[Ne.d],Object.getOwnPropertyDescriptor(Te.prototype,"clean"),Te.prototype),Te);function He(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ge(e,t,r,n,o){var a={};return Object.keys(n).forEach(function(e){a[e]=n[e]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var Ke,$e,Je,Le=(Fe=Ge((qe=function(){function e(t){var r,n,o,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,n="items",a=this,(o=Fe)&&Object.defineProperty(r,n,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(a):void 0}),this.rootStore=t,this.api=this.rootStore.api.products,console.log("---------------\x3e this.api",this.api)}var t,r,n;return t=e,(r=[{key:"load",value:function(){var e=this;return new Promise(function(t,r){e.api.all().then(function(r){e.items=r,t(!0)})})}},{key:"getById",value:function(e){var t=this.productsMap[e];return void 0===t?null:this.items[t]}},{key:"productsMap",get:function(){var e={};return this.items.forEach(function(t,r){e[t.id.toString()]=r}),e}}])&&He(t.prototype,r),n&&He(t,n),e}()).prototype,"items",[Ne.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Ge(qe.prototype,"productsMap",[Ne.e],Object.getOwnPropertyDescriptor(qe.prototype,"productsMap"),qe.prototype),Ge(qe.prototype,"load",[Ne.d],Object.getOwnPropertyDescriptor(qe.prototype,"load"),qe.prototype),qe);function Xe(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function Ye(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ze(e,t,r,n,o){var a={};return Object.keys(n).forEach(function(e){a[e]=n[e]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var Qe=($e=Ze((Ke=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Xe(this,"formData",$e,this),Xe(this,"lastOrderCache",Je,this),this.rootStore=t}var t,r,n;return t=e,(r=[{key:"change",value:function(e,t){var r=this.formData[e];r.value=t,r.valid=r.validator(r.value)}},{key:"send",value:function(){var e=this;return new Promise(function(t,r){e.rootStore.cart.clean().then(function(){for(var r in e.lastOrderCache.total=e.rootStore.cart.total,e.formData)e.lastOrderCache[r]=e.formData[r].value,e.formData[r]="";t()})})}},{key:"formValid",get:function(){return Object.values(this.formData).every(function(e){return e.valid})}},{key:"data",get:function(){var e={};for(var t in this.formData)e[t]=this.formData[t].value;return e}}])&&Ye(t.prototype,r),n&&Ye(t,n),e}()).prototype,"formData",[Ne.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{name:{value:"",label:"Your name",validator:function(e){return/^[aA-zZ]{2,}$/.test(e)},errorText:"Латинские символы не мение 2-х",valid:null},phone:{value:"",label:"Phone",validator:function(e){return/^[0-9]{7,15}$/.test(e)},errorText:"От 7 до 15 цифр",valid:null},email:{value:"",label:"Email",validator:function(e){return/^.+@.+$/.test(e)},errorText:"Собака",valid:null}}}}),Je=Ze(Ke.prototype,"lastOrderCache",[Ne.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{name:"",email:"",phone:"",total:""}}}),Ze(Ke.prototype,"formValid",[Ne.e],Object.getOwnPropertyDescriptor(Ke.prototype,"formValid"),Ke.prototype),Ze(Ke.prototype,"data",[Ne.e],Object.getOwnPropertyDescriptor(Ke.prototype,"data"),Ke.prototype),Ze(Ke.prototype,"change",[Ne.d],Object.getOwnPropertyDescriptor(Ke.prototype,"change"),Ke.prototype),Ze(Ke.prototype,"send",[Ne.d],Object.getOwnPropertyDescriptor(Ke.prototype,"send"),Ke.prototype),Ke),We="/reactcourseapi/";function et(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:We;return fetch(r+e,t).then(function(e){return 200!==e.status?e.text().then(function(e){throw new Error(e)}):e.json()})}function tt(){return et("products/all.php")}function rt(e){var t="cart/load.php";return null!==e&&(t+="?token="+e),et(t)}function nt(e,t){return et("cart/add.php?token=".concat(e,"&id=").concat(t))}function ot(e,t){return et("cart/remove.php?token=".concat(e,"&id=").concat(t))}function at(e,t,r){return et("cart/change.php?token=".concat(e,"&id=").concat(t,"&cnt=").concat(r))}function it(e){return et("cart/clean.php?token=".concat(e))}var ct=new function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api={products:n,cart:o},this.storage=localStorage,this.cart=new Ue(this),this.products=new Le(this),this.order=new Qe(this)};ct.products.load().then(function(){u.a.render(c.a.createElement(O.a,{stores:ct},c.a.createElement(ze,null)),document.querySelector("#app"))}),ct.cart.load()}});