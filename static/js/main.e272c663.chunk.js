(this["webpackJsonpcalculadora-trader"]=this["webpackJsonpcalculadora-trader"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r=n(0),l=n.n(r),c=n(7),u=n.n(c),i=(n(14),n(2)),o=n(3),m=n(1),s=n(5),d=n(4),f=(n(15),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={minEntry:2},a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(o.a)(n,[{key:"handleChange",value:function(e){var t;t="R$"===e.target.value?2:1,this.setState({minEntry:t})}},{key:"handleSubmit",value:function(e){var t=e.target,n={entry:t.entry.value,currency:t.currency.value,entries:t.entries.value,payout:t.payout.value};this.props.onCalcSubmit(n),e.preventDefault()}},{key:"render",value:function(){var e=this.props.config,t=e.entry,n=e.currency,a=e.entries,r=e.payout;return l.a.createElement("form",{className:"Form",onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"1\xb0 Entrada:"),l.a.createElement("input",{name:"entry",type:"number",defaultValue:t,min:this.state.minEntry,max:"20"})),l.a.createElement("div",null,l.a.createElement("label",null,"Moeda:"),l.a.createElement("select",{name:"currency",defaultValue:n,onChange:this.handleChange},l.a.createElement("option",{value:"R$"},"Real"),l.a.createElement("option",{value:"$"},"Dollar"))),l.a.createElement("div",null,l.a.createElement("label",null,"Qtd. Entradas:"),l.a.createElement("input",{name:"entries",type:"number",defaultValue:a,min:"1",max:"7"})),l.a.createElement("div",null,l.a.createElement("label",null,"Payout:"),l.a.createElement("input",{name:"payout",type:"number",defaultValue:r,min:"50",max:"100"})),l.a.createElement("button",{type:"submit"},"="))}}]),n}(l.a.Component)),p=(n(16),function(e){var t=e.management,n=t.listOfEntries,a=t.expense,r=t.title,c=t.profit,u=e.currency;return l.a.createElement("tr",{className:"Management"},l.a.createElement("td",null,r),l.a.createElement("td",null,n.map((function(e,t){return l.a.createElement("span",{key:t},u,e.toFixed(2).replace(".",","))}))),l.a.createElement("td",null,u,a.toFixed(2).replace(".",",")),l.a.createElement("td",null,u,c.toFixed(2).replace(".",",")))}),h=n(8),E=function(e,t){return e*t},v=function(e,t){return e*(t+1)},y=function(e,t,n){for(var a=parseFloat(e),r=[a],l=a,c=0;c<t-1;c++)l+=a=n(a,l,r),r.push(a);return{listOfEntries:r,applied:l,lastEntry:r[r.length-1]}},b=function(e,t){var n,a=0,r=0,l=Object(h.a)(e);try{for(l.s();!(n=l.n()).done;){var c=n.value,u=v(r,t);a+=c>u?c-u:0,r=c}}catch(i){l.e(i)}finally{l.f()}return a},g=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"toRecover",r=e.entry,l=e.entries,c=e.payout,u=y(r,l,n),i=u.listOfEntries,o=u.applied,m=u.lastEntry,s=0,d=0;if("toRecover"===a)d=v(m,c)-o,s=o;else{var f=b(i,c);d=E(o,c)-(f-r),s=f}return{title:t,listOfEntries:i,expense:s,profit:d}},O=function(e){return e/a},C=function(e){var t,n=e.entry;t=e.payout,a=t/100,e.payout=a;return[g(e,"S\xf3 recupera",(function(e,t){return O(t)})),g(e,"Martingale",(function(e){return 2*e})),g(e,"Martingale Conservador",(function(e,t){return O(t+E(n,a))})),g(e,"Casti\xe7al",(function(e){return e/.3*.7})),g(e,"Soros",(function(e){return v(e,a)}),"iAdd")]},j=(n(17),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){var e=C(this.props.config),t=this.props.config.currency;return l.a.createElement("div",{className:"Managements"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nome"),l.a.createElement("th",null,"Entradas"),l.a.createElement("th",null,"Banca"),l.a.createElement("th",null,"Lucro")),e.map((function(e,n){return l.a.createElement(p,{key:n,management:e,currency:t})})))))}}]),n}(l.a.Component)),S=(n(18),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={entry:2,currency:"R$",entries:3,payout:87},a.handleCalcSubmit=a.handleCalcSubmit.bind(Object(m.a)(a)),a}return Object(o.a)(n,[{key:"handleCalcSubmit",value:function(e){this.setState(e)}},{key:"render",value:function(){return l.a.createElement("article",{className:"App"},l.a.createElement("div",{className:"sidebar"},l.a.createElement("h1",null,"Calculadora Op\xe7\xf5es Bin\xe1rias"),l.a.createElement(f,{onCalcSubmit:this.handleCalcSubmit,config:this.state})),l.a.createElement(j,{config:this.state}))}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e272c663.chunk.js.map