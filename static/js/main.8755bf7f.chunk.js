(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),c=a(2),s=a(7),o=(a(14),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],u=a(9),m=a.n(u),j=a(0),b=function(e){var t=e.user,a=t.name,n=t.email;return Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},h=function(e){var t=e.todo,a=t.user,n=t.id,i=t.title,r=t.completed;return Object(j.jsxs)("article",{"data-id":n,className:m()("TodoInfo",{"TodoInfo--completed":r}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:i}),a&&Object(j.jsx)(b,{user:a})]})},O=function(e){var t=e.todos;return Object(j.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(h,{todo:e},e.id)}))})},f=d.map((function(e){var t=l.find((function(t){return t.id===e.userId}));return Object(s.a)(Object(s.a)({},e),{},{user:t})})),p=function(){var e=Object(o.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),s=Object(c.a)(i,2),u=s[0],m=s[1],b=Object(o.useState)(!1),h=Object(c.a)(b,2),p=h[0],x=h[1],v=Object(o.useState)(!1),y=Object(c.a)(v,2),S=y[0],N=y[1],I=Object(o.useState)(f),g=Object(c.a)(I,2),C=g[0],_=g[1],k=Math.max.apply(Math,Object(r.a)(d.map((function(e){return e.id}))));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){(e.preventDefault(),x(!a),N(0===u),a&&0!==u)&&(!function(e){_((function(t){return[].concat(Object(r.a)(t),[e])}))}({user:l.find((function(e){return e.id===u})),id:k+1,title:a,completed:!1,userId:u}),n(""),m(0),x(!1),N(!1))},children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(j.jsx)("input",{id:"title",placeholder:"Enter a title",type:"text","data-cy":"titleInput",value:a,onChange:function(e){n(e.target.value),x(!1)}}),p&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"user",children:"User: "}),Object(j.jsxs)("select",{id:"user",value:u,"data-cy":"userSelect",onChange:function(e){m(Number(e.target.value)),N(!1)},children:[Object(j.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"},"0"),l.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),S&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(j.jsx)(O,{todos:C})]})};i.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8755bf7f.chunk.js.map