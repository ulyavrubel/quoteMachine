(this["webpackJsonprandom-qoute"]=this["webpackJsonprandom-qoute"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(2),r=n.n(c),u=(n(13),n(14),n(3)),s=n(4),i=n(6),l=n(5),d=n(7),h=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(i.a)(this,Object(l.a)(e).call(this))).getQuote=function(){fetch("http://quotes.stormconsultancy.co.uk/random.json").then((function(t){return t.json()})).then((function(e){t.setState({quote:e})}))},t.handleClick=function(){t.getQuote()},t.state={quote:{}},t}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"render",value:function(){return a.a.createElement("div",{class:"card",id:"quote-box"},a.a.createElement("div",{class:"card-header"},"Quote"),a.a.createElement("div",{class:"card-body"},a.a.createElement("blockquote",{class:"blockquote mb-0",id:"text"},a.a.createElement("p",null,this.state.quote.quote),a.a.createElement("footer",{class:"blockquote-footer",id:"author"},this.state.quote.author)),a.a.createElement("div",{id:"buttons"},a.a.createElement("a",{id:"tweet-quote",href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-text":this.state.quote.quote,"data-lang":"en","data-show-count":"false","data-size":"large"},"Tweet"),a.a.createElement("button",{id:"new-quote",className:"btn btn-secondary",onClick:this.handleClick},"Next Quote"))))}}]),e}(a.a.Component);var m=function(){return a.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.4fdf2344.chunk.js.map