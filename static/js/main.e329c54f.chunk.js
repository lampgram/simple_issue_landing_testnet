(this.webpackJsonpinit=this.webpackJsonpinit||[]).push([[0],{18:function(e,t,n){e.exports=n(43)},23:function(e,t,n){},24:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},25:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(12),o=n.n(i),c=(n(23),n(13)),r=n(14),u=n(2),s=n(17),h=n(16),m=(n(24),n(25),n(15)),b=n.n(m),d=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={recipient:"",meta1_coins_amount:""},e.handleChange1=e.handleChange1.bind(Object(u.a)(e)),e.handleChange2=e.handleChange2.bind(Object(u.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(r.a)(n,[{key:"handleSubmit",value:function(){b.a.post("https://altdevopsclaimcert.testnet.meta1.io/meta1-issue?apiKey=c7e57b1367ab31ec3992f98011b2918e0b72da5c33714bd6d909d8",this.state).then((function(e){console.log(e),alert(e.statusText)})).catch((function(e){console.log(e),"Error: Request failed with status code 500"==e?alert("no tokens/account to be claimed"):alert(e)}))}},{key:"handleChange1",value:function(e){this.setState({recipient:e.target.value})}},{key:"handleChange2",value:function(e){this.setState({meta1_coins_amount:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Recipient on META1 blockchain",l.a.createElement("br",null),l.a.createElement("input",{value:this.state.recipient,onChange:this.handleChange1})),l.a.createElement("br",null),"\xa0",l.a.createElement("br",null),l.a.createElement("label",null,"META1 tokens to be claimed",l.a.createElement("br",null),l.a.createElement("input",{type:"number",value:this.state.meta1_coins_amount,onChange:this.handleChange2})),l.a.createElement("br",null),"\xa0",l.a.createElement("br",null),l.a.createElement("button",{type:"submit",onClick:this.handleSubmit,value:"Submit"},"Submit")))}}]),n}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.e329c54f.chunk.js.map