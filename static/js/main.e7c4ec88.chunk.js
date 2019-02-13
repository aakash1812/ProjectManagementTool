(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t(58)},31:function(e,a,t){},34:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(24),i=t.n(s),r=(t(31),t(7)),m=t(8),c=t(10),o=t(9),d=t(11),h=(t(34),t(60)),u=t(61),p=t(13),b=t(6),E=t(62),F=t(59),g=t(14),v=t.n(g),f=function(e){var a=e.formErrors;return l.a.createElement("div",{className:"formErrors"},Object.keys(a).map(function(e,t){return a[e].length>0?l.a.createElement("p",{key:t},a[e]):""}))},_=function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(c.a)(this,Object(o.a)(a).call(this))).setRedirect=function(){return l.a.createElement(E.a,{to:"/registrationSuccess"})},e.state={name:"",password:"",email:"",team_role:"admin",formErrors:{name:"",email:"",password:""},emailValid:!1,passwordValid:!1,nameValid:!1,formValid:!1,signupSuccess:!1},e.handleChange=e.handleChange.bind(Object(b.a)(Object(b.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(Object(b.a)(e))),e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"validateField",value:function(e,a){var t=this.state.formErrors,n=this.state.nameValid,l=this.state.emailValid,s=this.state.passwordValid;switch(e){case"name":n=a.length>=1,t.name=n?"":"*Name Too Short";break;case"email":l=a.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),t.email=l?"":"*Invalid Email";break;case"password":s=a.length>=6,t.password=s?"":"*Password Too Short"}this.setState({formErrors:t,nameValid:n,emailValid:l,passwordValid:s},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.nameValid&&this.state.emailValid&&this.state.passwordValid})}},{key:"handleChange",value:function(e){var a=this,t=e.target,n=t.value,l=t.name;this.setState(Object(p.a)({},l,n),function(){a.validateField(l,n)})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),v.a.post("http://localhost:5000/signup",{name:this.state.name,email:this.state.email,password:this.state.password,team_role:this.state.team_role}).then(function(e){console.log(e),"Success"===e.data&&a.setState({signupSuccess:!0})}).catch(function(e){console.log(e)}),console.log("SignUpForm was submitted with the following data"),console.log(this.state)}},{key:"errorClass",value:function(e){return 0===e.length?"":"has-error"}},{key:"render",value:function(){return this.state.signupSuccess?this.setRedirect():l.a.createElement("div",{className:"FormCenter"},l.a.createElement("div",{className:"PageSwitcher"},l.a.createElement(F.a,{exact:!0,to:"/signin",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item"},"Sign In")),l.a.createElement("form",{onSubmit:this.handleSubmit,className:"FormFields"},l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"name"},"Full Name"),l.a.createElement("input",{type:"text",id:"name",className:"FormField__Input",placeholder:"Enter your Full Name",name:"name",value:this.state.name,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"password"},"Password"),l.a.createElement("input",{type:"text",id:"password",className:"FormField__Input",placeholder:"Enter your Password",name:"password",value:this.state.password,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"email"},"E-mail Address"),l.a.createElement("input",{type:"text",id:"email",className:"FormField__Input",placeholder:"Enter your E-mail Address",name:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"team_role"},"Sign Up As"),l.a.createElement("select",{id:"team_role",name:"team_role",value:this.state.team_role,onChange:this.handleChange},l.a.createElement("option",{value:"admin"},"Admin"),l.a.createElement("option",{value:"team_member"},"Team Member"))),l.a.createElement("div",{className:"panel panel-default"},l.a.createElement(f,{formErrors:this.state.formErrors})," "),l.a.createElement("div",{className:"FormField"},l.a.createElement("button",{className:"FormField__Button mr-20",disabled:!this.state.formValid,onSubmit:this.onSubmit},"Sign Up"))))}}]),a}(l.a.Component),w=function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(c.a)(this,Object(o.a)(a).call(this))).setRedirect=function(){return l.a.createElement(E.a,{to:"/dashboard"})},e.state={email:"",password:"",signinSuccess:!1},e.handleChange=e.handleChange.bind(Object(b.a)(Object(b.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(Object(b.a)(e))),e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"handleChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(p.a)({},n,t))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),v.a.post("http://localhost:5000/signin",{email:this.state.email,password:this.state.password}).then(function(e){null!=e.data&&200===e.status&&a.setState({signinSuccess:!0}),console.log(e)}).catch(function(e){console.log(e)}),console.log("SignInForm was submitted with the following data"),console.log(this.state)}},{key:"render",value:function(){return this.state.signinSuccess?this.setRedirect():l.a.createElement("div",{className:"FormCenter"},l.a.createElement("div",{className:"PageSwitcher"},l.a.createElement(F.a,{exact:!0,to:"/signup",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item"},"Sign Up")),l.a.createElement("form",Object(p.a)({onSubmit:this.handleSubmit,className:"FormFields"},"onSubmit",this.handleSubmit),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"email"},"E-mail Address"),l.a.createElement("input",{type:"text",id:"name",className:"FormField__Input",placeholder:"Enter your E-mail Address",name:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"password"},"Password"),l.a.createElement("input",{type:"text",id:"password",className:"FormField__Input",placeholder:"Enter your Password",name:"password",value:this.state.password,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("button",{className:"FormField__Button mr-20"},"Sign In"))))}}]),a}(n.Component),S=function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome to Employee Management Tool")),l.a.createElement("div",{className:"FormTitle"},l.a.createElement(F.a,{exact:!0,to:"/signin",activeClassName:"FormTitle__Link--Active",className:"FormTitle__Link"},"Sign In")))},N=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Welcome to Dashboard")}}]),a}(l.a.Component),j=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App__Aside"}),l.a.createElement("div",{className:"App__Form"},l.a.createElement(u.a,{exact:!0,path:"/",in:!0,component:w},"  "),l.a.createElement(u.a,{exact:!0,path:"/signup",in:!0,component:_},"  "),l.a.createElement(u.a,{exact:!0,path:"/signin",component:w},"  "),l.a.createElement(u.a,{exact:!0,path:"/registrationSuccess",component:S},"  "),l.a.createElement(u.a,{exact:!0,path:"/dashboard",component:N},"  "))))}}]),a}(l.a.Component);i.a.render(l.a.createElement(j,null),document.querySelector("#root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.e7c4ec88.chunk.js.map