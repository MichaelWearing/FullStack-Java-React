(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c,a,j=n(1),i=n.n(j),s=n(20),r=n.n(s),d=(n(28),n(2)),b=n(3),l=b.a.div(c||(c=Object(d.a)(["\n  background: cyan;\n"]))),u=b.a.h1(a||(a=Object(d.a)(["\n  background: violet;\n\n  text-align: center;\n  padding: 5px 0px;\n  font-size: 50px;\n"]))),o=n(0);function O(){return Object(o.jsx)(l,{children:Object(o.jsx)(u,{children:"Header"})})}var h,x,p,f,v,g,m,y,S,k=n(5),w=n(6),C=n.n(w),D=b.a.div(h||(h=Object(d.a)(["\n  background: yellow;\n"]))),E=b.a.h1(x||(x=Object(d.a)([""]))),B=b.a.form(p||(p=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),T=b.a.input(f||(f=Object(d.a)(["\n  padding: 5px;\n  margin: 5px;\n"]))),I=b.a.button(v||(v=Object(d.a)(["\n\n"])));function J(e){e.students;var t=e.setStudents,n=Object(j.useState)(""),c=Object(k.a)(n,2),a=c[0],i=c[1],s=Object(j.useState)(""),r=Object(k.a)(s,2),d=r[0],b=r[1],l=Object(j.useState)(""),u=Object(k.a)(l,2),O=u[0],h=u[1];return Object(o.jsxs)(D,{children:[Object(o.jsx)(E,{children:"StudentCreation"}),Object(o.jsxs)(B,{onSubmit:function(e){return function(e){e.preventDefault(),C.a.post("http://localhost:8080/api/v1/student",{name:a,email:d,dob:O}).then((function(e){console.log(e)})),C.a.get("http://localhost:8080/api/v1/student").then((function(e){t(e.data)})),console.log(a,d,O)}(e)},children:[Object(o.jsx)(T,{placeholder:"Name",value:a,onChange:function(e){return i(e.currentTarget.value)}}),Object(o.jsx)(T,{placeholder:"E-mail",value:d,onChange:function(e){return b(e.currentTarget.value)}}),Object(o.jsx)(T,{type:"date",placeholder:"Date of Birth",value:O,onChange:function(e){return h(e.currentTarget.value)}}),Object(o.jsx)(I,{type:"submit",children:"Submit"})]})]})}var N,z,A,F=b.a.div(g||(g=Object(d.a)(["\n  background: steelblue;\n\n  margin: 10px;\n  padding: 10px;\n"]))),H=b.a.div(m||(m=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  min-width: 40vh;\n"]))),M=b.a.p(y||(y=Object(d.a)([""]))),q=b.a.p(S||(S=Object(d.a)([""])));function G(e){var t=e.id,n=e.name,c=e.email,a=e.dob,j=e.age;return Object(o.jsxs)(F,{children:[Object(o.jsxs)(H,{children:[Object(o.jsx)(M,{children:"Id: "}),Object(o.jsx)(q,{children:t})]}),Object(o.jsxs)(H,{children:[Object(o.jsx)(M,{children:"Name: "}),Object(o.jsx)(q,{children:n})]}),Object(o.jsxs)(H,{children:[Object(o.jsx)(M,{children:"E-mail: "}),Object(o.jsx)(q,{children:c})]}),Object(o.jsxs)(H,{children:[Object(o.jsx)(M,{children:"D.O.B: "}),Object(o.jsx)(q,{children:a})]}),Object(o.jsxs)(H,{children:[Object(o.jsx)(M,{children:"Age: "}),Object(o.jsx)(q,{children:j})]})]})}var K,L=b.a.div(N||(N=Object(d.a)(["\n  background: lime;\n"]))),P=b.a.h1(z||(z=Object(d.a)(["\n  text-align: center;\n"]))),Q=b.a.div(A||(A=Object(d.a)([""])));function R(e){var t=e.students,n=e.setStudents;Object(j.useEffect)((function(){C.a.get("http://localhost:8080/api/v1/student").then((function(e){n(e.data)}))}),[]);return Object(o.jsxs)(L,{children:[Object(o.jsx)(P,{children:"StudentDisplay"}),Object(o.jsx)(Q,{children:t.map((function(e){return Object(o.jsx)(G,{id:e.id,name:e.name,email:e.email,dob:e.dob,age:e.age},e.id)}))})]})}var U=b.a.div(K||(K=Object(d.a)(["\n  background: cyan;\n\n  display: flex;\n  justify-content: space-evenly;\n"])));function V(){var e=Object(j.useState)([]),t=Object(k.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(U,{children:[Object(o.jsx)(J,{students:n,setStudents:c}),Object(o.jsx)(R,{students:n,setStudents:c})]})}var W=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(O,{}),Object(o.jsx)(V,{})]})};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(W,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.fc2011e0.chunk.js.map