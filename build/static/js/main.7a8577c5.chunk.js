(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(17)},,,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),s=(t(14),t(1)),m=t(2),i=t(4),o=t(3),d=t(5),u=(t(15),t(16),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).onChangeHandler=function(e){t.setState({number:e.target.value},function(){t.setState({string_number:t.convert(t.state.number)})})},t.convert=function(e){for(var a,n="",l=0,r=0;e>=1;)a=e%1e3,e=Math.floor(e/1e3),n=(r=t.getHundreds(a))+" "+(void 0!==t.decades[Math.pow(1e3,l)]&&r?t.decades[Math.pow(1e3,l)]:"")+(n.replace(/\s/g,"")?", "+n:""),l++;return n},t.getDecades=function(e){if(void 0!==t.numbers[e])return t.numbers[e];var a=e%10,n=10*Math.floor(e/10);return t.numbers[n]+(0!==a?" "+t.numbers[a]:"")},t.getHundreds=function(e){if(void 0!==t.numbers[e])return t.numbers[e];if(e<100)return t.getDecades(e);var a=Math.floor(e/100);return t.numbers[a]+" "+t.decades[100]+" "+t.getDecades(e%100)},t.numbers={0:"",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",70:"seventy",80:"eighty",90:"ninety"},t.decades={100:"hundred",1000:"thousand",1000000:"million",1000000000:"billion",1000000000000:"trillion",1000000000000000:"quadrillion"},t.state={number:"",string_number:""},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",onChange:this.onChangeHandler,name:"number",value:this.state.number,className:"form-control",placeholder:"Enter number"})),l.a.createElement("div",null,this.state.string_number))}}]),a}(l.a.Component)),E=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).state={number:"",string_number:""},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row breadcrumbs"},l.a.createElement("div",{className:"col-1"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fas fa-arrow-left "}))),l.a.createElement("div",{className:"col-10"},l.a.createElement("h4",null,"manchesterunited")),l.a.createElement("div",{className:"col-1"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fas fa-ellipsis-v"})))),l.a.createElement("div",{className:"row logo"},l.a.createElement("div",{className:"col-3 "},l.a.createElement("div",{className:"gradient-box"},l.a.createElement("img",{src:"images/220px-Manchester_United_FC_crest.svg.png",alt:"...",className:" img-thumbnail rounded-circle"}))),l.a.createElement("div",{className:"col-9"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4 text-center"},l.a.createElement("h3",null,l.a.createElement("a",{href:"#"},"8788")),l.a.createElement("span",{className:"text-muted"},"posts")),l.a.createElement("div",{className:"col-4 text-center"},l.a.createElement("h3",null,l.a.createElement("a",{href:"#"},"23.7m")),l.a.createElement("span",{className:"text-muted"},"followers")),l.a.createElement("div",{className:"col-4 text-center"},l.a.createElement("h3",null,l.a.createElement("a",{href:"#"},"94")),l.a.createElement("span",{className:"text-muted"},"following"))),l.a.createElement("div",{className:"row buttons"},l.a.createElement("div",{className:"col col-8"},l.a.createElement("button",{className:"btn btn-outline-secondary text-center"},l.a.createElement("h5",null,"Message"))),l.a.createElement("div",{className:"col col-2"},l.a.createElement("button",{className:"btn btn-outline-secondary"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fas fa-user-check"})))),l.a.createElement("div",{className:"col col-2"},l.a.createElement("button",{className:"btn btn-outline-secondary"},l.a.createElement("h5",null,l.a.createElement("i",{className:"fas fa-angle-down"}))))))),l.a.createElement("div",{className:"row description"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h4",null,"Manchester United ",l.a.createElement("i",{className:"fas fa-check-circle"})),l.a.createElement("p",{className:"text-muted"},"Sport Team"),l.a.createElement("p",null,"Follow our ",l.a.createElement("a",{href:"#"},"#Treble99")," jorney on ",l.a.createElement("a",{href:"#"},"#MUTV"),":"),l.a.createElement("p",null,l.a.createElement("a",{href:"#"},"manutd.co/KOV")),l.a.createElement("p",null,l.a.createElement("a",{href:""},"Old Trafford, Manchester, United Kingdom M16 ORA ")),l.a.createElement("p",{className:"text-muted"},l.a.createElement("span",null," Followed by "),l.a.createElement("a",{href:"#",className:"text-dark font-weight-bolder"},"fellaini"),",",l.a.createElement("a",{href:"#",className:"text-dark font-weight-bolder"}," iamzlatanibragimovich"),",",l.a.createElement("a",{href:"#",className:"text-dark font-weight-bolder"}," paulpogba")," +",l.a.createElement("a",{href:"#",className:"text-dark font-weight-bolder"}," 29 more")))),l.a.createElement("div",{className:"row stories"},l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"storie main"},l.a.createElement("a",{href:"#"},l.a.createElement("span",{className:"overlay"}),l.a.createElement("img",{src:"images/220px-Manchester_United_FC_crest.svg.png",alt:"",className:"img-thumbnail rounded-circle"}),l.a.createElement("span",null,"IGTV")),l.a.createElement("i",{className:"tvicon fas fa-tv"}))),l.a.createElement("div",{className:"col-1"},l.a.createElement("div",{className:"divider"})),l.a.createElement("div",{className:"col-9 stories_list"},l.a.createElement("div",{className:"storie"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"images/220px-Manchester_United_FC_crest.svg.png",alt:"",className:"img-thumbnail rounded-circle"}),l.a.createElement("span",null,"MUTV"))),l.a.createElement("div",{className:"storie"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"images/220px-Manchester_United_FC_crest.svg.png",alt:"",className:"img-thumbnail rounded-circle"}),l.a.createElement("span",null,"#MUWomen"))),l.a.createElement("div",{className:"storie"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"images/220px-Manchester_United_FC_crest.svg.png",alt:"",className:"img-thumbnail rounded-circle"}),l.a.createElement("span",null,"#BemVindoFriend"))),l.a.createElement("div",{className:"storie"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"images/220px-Manchester_United_FC_crest.svg.png",alt:"",className:"img-thumbnail rounded-circle"}),l.a.createElement("span",null,"PL 2018 / 2019"))),l.a.createElement("div",{className:"storie"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"images/220px-Manchester_United_FC_crest.svg.png",alt:"",className:"img-thumbnail rounded-circle"}),l.a.createElement("span",null,"PL 2018 / 2019"))))),l.a.createElement("div",{className:"row shops"},l.a.createElement("div",{className:"col-6 text-center"},l.a.createElement("a",{href:""},l.a.createElement("h4",null,"Shop"))),l.a.createElement("div",{className:"col-6 text-center"},l.a.createElement("a",{href:""},l.a.createElement("h4",null,"Directions")))),l.a.createElement("div",{className:"row view_tabs"},l.a.createElement("div",{className:"col-12"},l.a.createElement("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist"},l.a.createElement("li",{className:"nav-item col-4"},l.a.createElement("a",{className:"nav-link text-center active",id:"images-tab","data-toggle":"tab",href:"#images",role:"tab","aria-controls":"home","aria-selected":"true"},l.a.createElement("i",{className:"fas fa-th"}))),l.a.createElement("li",{className:"nav-item col-4"},l.a.createElement("a",{className:"nav-link text-center",id:"numbers-tab","data-toggle":"tab",href:"#numbers",role:"tab","aria-controls":"profile","aria-selected":"false"},l.a.createElement("i",{className:"fas fa-bars"}))),l.a.createElement("li",{className:"nav-item col-4"},l.a.createElement("a",{className:"nav-link text-center",id:"contact-tab","data-toggle":"tab",href:"#contact",role:"tab","aria-controls":"contact","aria-selected":"false"},l.a.createElement("i",{className:"fas fa-user-alt"})))))),l.a.createElement("div",{className:"tab-content",id:"myTabContent"},l.a.createElement("div",{className:"tab-pane fade show active",id:"images",role:"tabpanel","aria-labelledby":"images-tab"},l.a.createElement("div",{className:"row images"},l.a.createElement("div",{className:"col-4"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"images/banner-leeds-600x600.jpg",alt:"",className:"rounded-0 float-left img-fluid"}))),l.a.createElement("div",{className:"col-4"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"images/banner-perth-glory-600x600.jpg",alt:"",className:"rounded-0 float-left img-fluid"}))),l.a.createElement("div",{className:"col-4"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"images/home-pre-sale-600x600.jpg",alt:"",className:"rounded-0 float-left img-fluid"}))))),l.a.createElement("div",{className:"tab-pane fade show",id:"numbers",role:"tabpanel","aria-labelledby":"numbers-tab"},l.a.createElement(u,null)),l.a.createElement("div",{className:"tab-pane fade show",id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"})))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.7a8577c5.chunk.js.map