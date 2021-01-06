(this["webpackJsonpyta-helpwhoneeds-frontend"]=this["webpackJsonpyta-helpwhoneeds-frontend"]||[]).push([[0],{420:function(e,t,a){},421:function(e,t,a){},668:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(0),i=a.n(s),r=a(15),o=a.n(r),l=(a(420),a(421),a(23)),c=a.n(l),d=a(42),u=a(18),j=a(20),p=a(323),m=a(405),b=a(324),h=a(325),O=a(695),x=a(696),g=a(326),f=a(91),y=a(255),v=a(254),k=a(392),T=a(327),w=a(391),C=a.n(w),D=a(28),S=a(37),N=a(390),I=(a(423),N.a.initializeApp({apiKey:"AIzaSyAQD-Hez1rIIaIlTYomLubx8QCfjmH9iNQ",authDomain:"helpwhoneeds-dev.firebaseapp.com",projectId:"helpwhoneeds-dev",storageBucket:"helpwhoneeds-dev.appspot.com",messagingSenderId:"610243223694",appId:"1:610243223694:web:2fc8ba826f29471e54e9df"})),F=I.auth(),A=i.a.createContext();function R(){return Object(s.useContext)(A)}function P(e){var t=e.children,a=Object(s.useState)(),i=Object(u.a)(a,2),r=i[0],o=i[1],l=Object(s.useState)(!0),c=Object(u.a)(l,2),d=c[0],j=c[1];Object(s.useEffect)((function(){return F.onAuthStateChanged((function(e){o(e),j(!1)}))}),[]);var p={currentUser:r,login:function(e,t){return F.signInWithEmailAndPassword(e,t)},signup:function(e,t){return F.createUserWithEmailAndPassword(e,t)},signout:function(){return F.signOut()},resetPassword:function(e){return F.sendPasswordResetEmail(e)}};return Object(n.jsx)(A.Provider,{value:p,children:!d&&t})}var W=Object(p.a)((function(e){return{root:{flexGrow:1,"& > svg":{margin:e.spacing(2)}},title:{flexGrow:1},appBar:{backgroundColor:"#9370db"}}}));function L(e){return Object(n.jsx)(m.a,Object(j.a)(Object(j.a)({},e),{},{children:Object(n.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})}))}var B=function(){var e=W(),t=R(),a=t.currentUser,r=t.signout,o=i.a.useState(!1),l=Object(u.a)(o,2),j=l[0],p=l[1],m=i.a.useState(null),w=Object(u.a)(m,2),N=w[0],I=w[1];Object(s.useEffect)((function(){p(null!==a)}),[a]),console.log(a),console.log("auth"+j);var F=Boolean(N),A=Object(D.g)(),P=function(){I(null)};function B(){return(B=Object(d.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r();case 3:p(!1),A.push("/"),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),p(null!==a),console.log(e.t0),alert("failed to log out");case 12:console.log("auth"+j),P();case 14:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(b.a,{children:Object(n.jsx)(h.a,{control:Object(n.jsx)(O.a,{checked:j,onChange:function(e){p(e.target.checked)},"aria-label":"login switch"}),label:j?"Logout":"Login"})}),Object(n.jsx)(x.a,{position:"static",className:e.appBar,children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)(L,{color:"action",fontSize:"large",onClick:function(e){return window.location.href="/HelpWhoNeeds/"}}),Object(n.jsx)(f.a,{variant:"h6",className:e.title,children:"Help Who Needs"}),Object(n.jsx)(y.a,{color:"inherit",component:S.b,to:"/about",children:"About"}),Object(n.jsx)(y.a,{color:"inherit",component:S.b,to:"/contact",children:"Contact"}),j&&Object(n.jsxs)("div",{children:[Object(n.jsx)(v.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){I(e.currentTarget)},color:"inherit",children:Object(n.jsx)(C.a,{})}),Object(n.jsxs)(k.a,{id:"menu-appbar",anchorEl:N,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:F,onClose:P,children:[Object(n.jsx)(T.a,{onClick:P,children:"Profile"}),Object(n.jsx)(T.a,{onClick:P,children:"My account"}),Object(n.jsx)(T.a,{onClick:function(){return B.apply(this,arguments)},children:"Sign Out"})]})]})]})})]})},q=Object(p.a)({button:{margin:"10px"},pInfo:{textAlign:"center"},divContentWrapper:{textAlign:"center",minHeight:"100%",paddingLeft:"50px"}}),M=function(){var e=q(),t=R().currentUser,a=Object(D.g)();return Object(n.jsxs)("div",{className:e.divContentWrapper,children:[Object(n.jsx)("h1",{children:"Help Who Needs"}),Object(n.jsx)("p",{children:"Our TechForGood project aims to match a volunteer with a vulnerable person who is shielding in these unprecedented times. Hence our application is called HelpWhoNeeds. The app will aim to match a volunteer with a vulnerable person in their immediate local area helping with chores such as shopping, GP visits, prescriptions, dog walking or just some social contact with the appropriate measures in place. We hope this app brings some comfort and relief to the users with a sense of moral and social obligation."}),Object(n.jsxs)("p",{className:e.pInfo,children:[" If you would like help or need any assistant using our system, please call ",Object(n.jsx)("strong",{children:"0800 123 4567"}),"."]}),Object(n.jsx)(y.a,{className:e.button,variant:"outlined",color:"default",onClick:function(){t?a.push("/addTask"):a.push("/login/AssistanceRequester")},children:"I need Help"}),Object(n.jsx)(y.a,{className:e.button,variant:"outlined",color:"default",onClick:function(){t?a.push("/myTask"):a.push("/login/Volunteer")},children:"I can Help"})]})},z=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"This is the About Page"}),Object(n.jsx)("p",{children:"Add the description of our Team (Your Tech Angels) and the project"})]})},H=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"This is the Contact Page"}),Object(n.jsx)("p",{children:"Add the Contact form"})]})},E=Object(p.a)({footer:{boxSizing:"border-box",height:"50px",padding:"15px",backgroundColor:"#eee",borderTop:"1px solid #e0e0e0",position:"absolute",width:"100%",textAlign:"center"}});var U=function(){var e=E();return Object(n.jsx)("footer",{className:e.footer,children:Object(n.jsxs)("div",{children:["Made by ",Object(n.jsx)("a",{href:"https://github.com/YourTechAngels",children:"YourTechAngels"})]})})},Y=a(711),V=a(699),G=a(328),J=a(383),K=a(701),Q=a(710),X=a(700),Z=a(253),$=a(126),_=a.n($),ee=a(698);function te(){return Object(n.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(S.b,{color:"inherit",to:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var ae=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ne(){var e=ae(),t=Object(D.h)().userType,a=Object(s.useRef)(),i=Object(s.useRef)(),r=R().login,o=Object(s.useState)(""),l=Object(u.a)(o,2),j=l[0],p=l[1],m=Object(s.useState)(!1),b=Object(u.a)(m,2),O=b[0],x=b[1],g=Object(D.g)(),v="AssistanceRequester"==="".concat(t)?"Requestee":"".concat(t);function k(){return(k=Object(d.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,p(""),x(!0),e.next=6,r(a.current.value,i.current.value);case 6:"Volunteer"==="".concat(t)?(g.push("/myTask"),console.log("/HelpWhoNeeds")):g.push("/addTask"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),p("Failed to log in");case 12:x(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(n.jsxs)(ee.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(V.a,{}),Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)(Y.a,{className:e.avatar,children:Object(n.jsx)(_.a,{})}),Object(n.jsxs)(f.a,{component:"h1",variant:"h5",children:[v," Sign in"]}),j&&Object(n.jsx)(Q.a,{severity:"error",children:Object(n.jsxs)(X.a,{children:["Error: ",j]})}),Object(n.jsxs)("form",{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(n.jsx)(G.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"email",inputRef:a,id:"email",label:"Email Address",autoFocus:!0}),Object(n.jsx)(G.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"password",inputRef:i,label:"Password",id:"password"}),Object(n.jsx)(h.a,{control:Object(n.jsx)(J.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(n.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:O,children:"Sign In"}),Object(n.jsxs)(K.a,{container:!0,children:[Object(n.jsx)(K.a,{item:!0,xs:!0,children:Object(n.jsx)(S.b,{to:"/forgotPassword/".concat(t),variant:"body2",children:"Forgot password?"})}),Object(n.jsx)(K.a,{container:!0,children:Object(n.jsx)(K.a,{item:!0,xs:!0,children:Object(n.jsxs)("div",{className:"w-100 text-center mt-2",children:["New User ?",Object(n.jsx)(S.b,{to:"/signUp/".concat(t),variant:"body2",children:"Sign Up "})]})})})]})]})]}),Object(n.jsx)(Z.a,{mt:8,children:Object(n.jsx)(te,{})})]})}function se(){return Object(n.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(S.b,{color:"inherit",to:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var ie=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function re(){var e=Object(s.useRef)(),t=Object(s.useRef)(),a=Object(s.useRef)(),i=R().signup,r=Object(s.useState)(""),o=Object(u.a)(r,2),l=o[0],j=o[1],p=Object(s.useState)(!1),m=Object(u.a)(p,2),b=m[0],h=m[1],O=Object(D.g)(),x=ie(),g=Object(D.h)().user;function v(){return(v=Object(d.a)(c.a.mark((function n(s){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s.preventDefault(),console.log(e.current.value,t.current.value,a.current.value),t.current.value===a.current.value){n.next=4;break}return n.abrupt("return",j("Passwords does not match"));case 4:return n.prev=4,j(""),h(!0),n.next=9,i(e.current.value,t.current.value);case 9:O.push("/registrationPage/".concat(g)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(4),j("Failed to create an account");case 15:h(!1);case 16:case"end":return n.stop()}}),n,null,[[4,12]])})))).apply(this,arguments)}return Object(n.jsxs)(ee.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(V.a,{}),Object(n.jsxs)("div",{className:x.paper,children:[Object(n.jsx)(Y.a,{className:x.avatar,children:Object(n.jsx)(_.a,{})}),Object(n.jsx)(f.a,{component:"h1",variant:"h5",children:"Sign Up"}),l&&Object(n.jsx)(Q.a,{severity:"error",children:Object(n.jsxs)(X.a,{children:["Error: ",l]})}),Object(n.jsxs)("form",{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(n.jsx)(G.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"email",inputRef:e,id:"email",label:"Email Address",autoFocus:!0}),Object(n.jsx)(G.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"password",inputRef:t,label:"Password",id:"password"}),Object(n.jsx)(G.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"password",inputRef:a,label:"Confirm Password",id:"passwordConfirm"}),Object(n.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",disabled:b,color:"primary",children:"Sign Up"})]})]}),"  ",Object(n.jsx)(Z.a,{mt:8,children:Object(n.jsx)(se,{})})]})}function oe(){return Object(n.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(S.b,{color:"inherit",to:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var le=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ce(){var e=le(),t=Object(s.useRef)(),a=R().resetPassword,i=Object(s.useState)(""),r=Object(u.a)(i,2),o=r[0],l=r[1],j=Object(s.useState)(""),p=Object(u.a)(j,2),m=p[0],b=p[1],h=Object(s.useState)(!1),O=Object(u.a)(h,2),x=O[0],g=O[1],v=Object(D.h)().user;function k(){return(k=Object(d.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,b(""),l(""),g(!0),e.next=7,a(t.current.value);case 7:b("Check your inbox for password reset instructions"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),l("Failed to reset password");case 13:g(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(n.jsxs)(ee.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(V.a,{}),Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)(Y.a,{className:e.avatar,children:Object(n.jsx)(_.a,{})}),Object(n.jsx)(f.a,{component:"h1",variant:"h5",children:" Forgot Password "}),o&&Object(n.jsx)(Q.a,{severity:"error",children:Object(n.jsxs)(X.a,{children:["Error: ",o]})}),m&&Object(n.jsx)(Q.a,{severity:"success",children:Object(n.jsx)(X.a,{children:m})}),Object(n.jsxs)("form",{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(n.jsx)(G.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"email",inputRef:t,id:"email",label:"Email Address"}),Object(n.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",disabled:x,color:"primary",children:"Reset Password"})]}),Object(n.jsx)(K.a,{container:!0,children:Object(n.jsx)(K.a,{item:!0,xs:!0,children:Object(n.jsxs)("div",{className:"w-100 text-center mt-2",children:["Go to ",Object(n.jsx)(S.b,{to:"/login/".concat(v),variant:"body2",children:"Sign In"})]})})}),Object(n.jsx)(K.a,{container:!0,children:Object(n.jsx)(K.a,{item:!0,xs:!0,children:Object(n.jsxs)("div",{className:"w-100 text-center mt-3",children:["New User ?",Object(n.jsx)(S.b,{to:"/signUp/".concat(v),variant:"body2",children:"Sign Up "})]})})})]}),"  ",Object(n.jsx)(Z.a,{mt:8,children:Object(n.jsx)(oe,{})})]})}var de=a(62),ue=a(702),je={textFld:{width:"85%",height:40,paddingLeft:8},button:{border:"4px",fontWeight:"bold",marginLeft:10,marginTop:"10px"}};function pe(e){var t=Object(s.useState)({initialInputState:{firstName:"",lastName:"",DateOfBirth:"",postcode:"",address1:"",address2:"",city:"",county:""}}),a=Object(u.a)(t,2),r=a[0],o=a[1],l=r.firstName,c=r.lastName,d=r.DateOfBirth,p=r.postcode,m=r.address1,b=r.address2,O=r.city,x=r.county,g=Object(s.useState)(""),f=Object(u.a)(g,2),v=f[0],k=f[1],T=function(e){o(Object(j.a)(Object(j.a)({},r),{},Object(de.a)({},e.target.name,e.target.value)))},w=Object(D.h)().user;return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)("h2",{align:"center",children:" Registration form"}),v&&Object(n.jsx)(Q.a,{severity:"success",children:Object(n.jsx)(X.a,{children:v})}),Object(n.jsxs)(K.a,{container:!0,"flex-start":"left",children:[Object(n.jsx)("p",{style:{paddingLeft:8},children:"Please enter your details here"})," "]}),Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault(),k("Data has been saved successfully"),console.log(r)},children:Object(n.jsxs)(K.a,{container:!0,spacing:3,children:[Object(n.jsx)(K.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(G.a,{required:!0,id:"firstName",type:"text",name:"firstName",label:"First name",variant:"outlined",onChange:T,value:l||"",style:je.textFld,autoComplete:"given-name"})}),Object(n.jsx)(K.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(G.a,{required:!0,id:"lastName",name:"lastName",type:"text",label:"Last name",onChange:T,value:c||"",variant:"outlined",style:je.textFld,autoComplete:"family-name"})}),Object(n.jsx)(K.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(G.a,{id:"DateOfBirth",name:"DateOfBirth",type:"date",InputLabelProps:{shrink:!0},label:"Date Of Birth",onChange:T,value:d||"",variant:"outlined",style:je.textFld})}),Object(n.jsxs)(K.a,{item:!0,xs:12,sm:12,children:[Object(n.jsxs)(ue.a,{children:[Object(n.jsx)(G.a,{required:!0,id:"postcode",name:"postcode",label:"Post code",variant:"outlined",onChange:T,value:p||"",style:je.textFld,autoComplete:" postal-code"}),Object(n.jsx)(K.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(y.a,{variant:"outlined",className:"btn btn-secondary w-100",onClick:function(){console.log("Find Address button clicked")},children:"Find Address"})})]}),"  "]}),Object(n.jsx)(K.a,{item:!0,xs:12,children:Object(n.jsx)(G.a,{required:!0,id:"address1",name:"address1",onChange:T,value:m||"",label:"Address line 1",variant:"outlined",style:je.textFld,autoComplete:"address-line1"})}),Object(n.jsx)(K.a,{item:!0,xs:12,children:Object(n.jsx)(G.a,{id:"address2",name:"address2",label:"Address line 2",variant:"outlined",onChange:T,value:b||"",style:je.textFld,autoComplete:"address-line2"})}),Object(n.jsx)(K.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(G.a,{required:!0,id:"city",name:"city",label:"City",onChange:T,value:O||"",variant:"outlined",style:je.textFld,autoComplete:"address-level2"})}),Object(n.jsx)(K.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(G.a,{id:"county",name:"county",variant:"outlined",onChange:T,value:x||"",style:je.textFld,label:"County"})}),Object(n.jsx)(K.a,{item:!0,xs:12,children:"Volunteer"==="".concat(w)&&Object(n.jsx)(h.a,{control:Object(n.jsx)(J.a,{color:"secondary",style:{marginLeft:"5px"},name:"dbsCheck",value:"yes"}),label:"I have a valid DBS certificate"})}),Object(n.jsx)(K.a,{item:!0,xs:12,align:"center",children:Object(n.jsx)(y.a,{variant:"contained",className:"btn btn-primary w-100",type:"submit",children:"Submit"})})]})})]})}var me=a(158),be=a.n(me),he=a(264),Oe=a.n(he),xe=a(114),ge=a(703),fe=a(704),ye=a(707),ve=a(706),ke=a(705),Te=a(708),we=a(16),Ce=function(e){return{textFld:{width:"85%",height:40,paddingLeft:8},button:{border:"4px",color:"default",fontWeight:"bold",marginLeft:10,marginTop:"10px"},form:{display:"flex",flexDirection:"column",margin:"auto",width:"fit-content"}}},De=function(e){var t=e.open,a=e.handleClose,s=e.title,i=e.data,r=Object(we.a)(),o=Object(Te.a)(r.breakpoints.down("sm"));return console.log(i),Object(n.jsx)("div",{children:Object(n.jsxs)(fe.a,{open:t,onClose:a,fullScreen:o,"aria-labelledby":"responsive-dialog-title",children:[Object(n.jsx)(ye.a,{children:s}),Object(n.jsx)(ve.a,{children:Object(n.jsx)("form",{className:Ce.form,noValidate:!0,children:i&&Object(n.jsxs)(K.a,{container:!0,spacing:3,children:[i.firstName," ",i.lastName,Object(n.jsx)(K.a,{item:!0,xs:12,sm:12,children:Object(n.jsx)(G.a,{id:"taskType",type:"string",label:"Task",value:i.taskType,variant:"outlined",style:Ce.textFld,autoComplete:"family-name"})}),Object(n.jsx)(K.a,{item:!0,xs:12,sm:12,children:Object(n.jsx)(G.a,{id:"taskSummary",type:"string",label:"Task Summary",value:i.taskSummary,variant:"outlined",multiline:!0,rows:6,style:Ce.textFld,autoComplete:"family-name"})}),Object(n.jsx)(K.a,{item:!0,xs:12,sm:6}),Object(n.jsx)(K.a,{item:!0,xs:12,sm:6})]})})}),Object(n.jsx)(ke.a,{children:Object(n.jsx)(y.a,{autoFocus:!0,onClick:a,color:"primary",children:"Close"})})]})})},Se=a(709),Ne=Object(p.a)((function(e){return{root:{top:e.spacing(15)}}}));var Ie=function(e){var t=Ne(),a=e.notify,s=e.setNotify,i=function(e,t){"clickaway"!==t&&s(Object(j.a)(Object(j.a)({},a),{},{isOpen:!1}))};return Object(n.jsx)(Se.a,{className:t.root,open:a.isOpen,autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"center"},onClose:i,children:Object(n.jsx)(Q.a,{severity:a.type,onClose:i,children:a.message})})},Fe=Object(p.a)((function(e){return{dailog:{padding:e.spacing(2),position:"absolute",top:e.spacing(15)},dailogContent:{textAlign:"center"},dailogAction:{justifyContent:"center"}}})),Ae=function e(t){var a=Fe(),s=t.confirmDialog,i=t.setConfirmDialog;return Object(n.jsxs)(fe.a,{open:s.isOpen,className:a.dailog,children:[Object(n.jsx)(ye.a,{children:Object(n.jsx)(f.a,{variant:"h6",children:s.title})}),Object(n.jsx)(ve.a,{className:a.dailogContent,children:Object(n.jsx)(f.a,{variant:"subtitle2",children:s.subTitle})}),Object(n.jsxs)(ke.a,{className:a.dailogAction,children:[Object(n.jsx)(y.a,{variant:"contained",size:"small",style:{minWidth:"90px"},onClick:s.onConfirm,children:"OK"}),Object(n.jsx)(y.a,{variant:"contained",size:"small",style:{minWidth:"90px"},onClick:function(){return i(Object(j.a)(Object(j.a)({},e),{},{isOpen:!1}))},children:"Cancel"})]})]})},Re="DD MMM YYYY",Pe={filterType:"multiselect",selectableRows:"none",selectableRowsOnClick:!0},We=Object(p.a)((function(e){return{h5:{color:"#4C4B51",textAlign:"center"}}})),Le=[{id:1,lastName:"Snow",firstName:"Jon",taskType:"Shopping",taskSummary:"I need help with Shopping from Tesco",date:"2020-12-28",distance:1,volId:1},{id:2,lastName:"Lannister",firstName:"Cersei",taskType:"Dog Walking",taskSummary:"I need help with dog walkingevery morning and afternoon",date:"2021-01-20",distance:1,volId:1},{id:3,lastName:"Lannister",firstName:"Jaime",taskType:"Shopping",taskSummary:"I need help with Shopping from Asda",date:"2021-01-28",distance:2.3,volId:null},{id:4,lastName:"Stark",firstName:"Arya",taskType:"Pharmacy",taskSummary:"I need help with picking up my prescription from local gp",date:"2021-03-20",distance:.8,volId:null},{id:5,lastName:"Targaryen",firstName:"Daenerys",taskType:"Hospital",taskSummary:"I need help to drop off and pick up from my hospital",date:"2021-01-10",distance:2,volId:null},{id:6,lastName:"Melisandre",firstName:null,taskType:"Phone Call",taskSummary:"I need someone to give me a call to have a chat",date:"2021-01-20",distance:5,volId:null},{id:7,lastName:"Clifford",firstName:"Ferrara",taskType:"Shopping",taskSummary:"I need help with Shopping from Tesco",date:"2021-01-20",distance:4,volId:null},{id:8,lastName:"Frances",firstName:"Rossini",taskType:"Other",taskSummary:"I need help with mowing my garden",date:"2021-01-20",distance:2,volId:null},{id:9,lastName:"Roxie",firstName:"Harvey",taskType:"Shopping",taskSummary:"I need help with Shopping from Sainsbuyrys",date:"2021-01-20",distance:3,volId:null},{id:10,lastName:"Indra",firstName:"Thapa",taskType:"Medical",taskSummary:"I need help with picking up my prescription",date:"2021-01-20",distance:3,volId:null},{id:11,lastName:"Paanas",firstName:"Thapa",taskType:"Medical",taskSummary:"I need help with picking up my prescription",date:"2021-01-20",distance:3,volId:null},{id:12,lastName:"Paanas",firstName:"Thapa",taskType:"Medical",taskSummary:"I need help with picking up my prescription",date:"2021-01-20",distance:3,volId:null},{id:13,lastName:"Kate",firstName:"Middleton",taskType:"Medical",taskSummary:"I need help with picking up my prescription",date:"2021-01-20",distance:3,volId:null},{id:14,lastName:"Joe",firstName:"Kelly",taskType:"Shopping",taskSummary:"I need help with Shopping from Tesco",date:"2021-01-20",distance:4,volId:null},{id:15,lastName:"Frances",firstName:"Rai",taskType:"Other",taskSummary:"I need help with mowing my garden",date:"2021-01-20",distance:2,volId:null},{id:16,lastName:"Roxie",firstName:"Raymond",taskType:"Shopping",taskSummary:"I need help with Shopping from Sainsbuyrys",date:"2021-01-20",distance:3,volId:null}];function Be(){var e=We(),t=Object(xe.a)({overrides:{MuiDataTable:{root:{width:"min-content"},responsiveScroll:{maxHeight:"none"}},MUIDataTableBodyCell:{root:{backgroundColor:"#FFF",width:"90px"}}}}),a=Object(s.useState)(Le),r=Object(u.a)(a,2),o=r[0],l=r[1],c=o.filter((function(e){return null!==e.volId&&1===e.volId})),d=o.filter((function(e){return null===e.volId})),p=i.a.useState(!1),m=Object(u.a)(p,2),b=m[0],h=m[1],O=i.a.useState(null),x=Object(u.a)(O,2),g=x[0],f=x[1],v=Object(s.useState)({isOpen:!1,message:" ",type:" "}),k=Object(u.a)(v,2),T=k[0],w=k[1],C=Object(s.useState)({isOpen:!1,title:"",subTitle:""}),D=Object(u.a)(C,2),S=D[0],N=D[1],I=function(e,t){h(!0),f(t)},F=[{name:"id",label:"ID",options:{display:!1,sort:!1,filter:!1,viewColumns:!1}},{name:"volId",label:"volunteer ID",viewColumns:!1,options:{display:!1,sort:!1,filter:!1}},{name:"firstName",label:"First name",options:{display:!1,filter:!0,sort:!0}},{name:"lastName",label:"Last name",options:{display:!1,filter:!0,sort:!0}},{name:"firstName",label:"Full Name",options:{filter:!1,sort:!1,customBodyRender:function(e,t,a){return Object(n.jsxs)("div",{children:[t.rowData[2]," ",t.rowData[3]]})}}},{name:"taskType",label:"Task",options:{filter:!0,sort:!0}},{name:"date",label:"Start Date",options:{filter:!0,sort:!0,customBodyRender:function(e){return Oe()(new Date(e)).format(Re)}}},{name:"distance",label:"Distance",options:{filter:!0,sort:!0}},{name:"id",label:"Action",options:{sort:!1,filter:!1,viewColumns:!1,display:!1,customBodyRender:function(e,t){return Object(n.jsx)(y.a,{variant:"contained",color:"primary",size:"small",disabled:null!==t.rowData[1],style:{marginLeft:2,backgroundColor:null===t.rowData[1]?"green":"lightgrey"},className:"button",value:e,onClick:function(){N({isOpen:!0,title:"Do you agree to accept this task?",subTitle:"Once accepted it will be assigned to you.To return the task you need to go to your task list and reject it.",onConfirm:function(){N(Object(j.a)(Object(j.a)({},S),{},{isOpen:!1}));var t=Le.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{volId:1}):t}));l(t),console.log("assignTasks"),console.log(d),console.log("myTask"),console.log(c),console.log(o),w({isOpen:!0,message:"Task is successfully assigned to you.",type:"success"})}})},children:"Accept"})}}},{name:"id",label:"Action",options:{sort:!1,filter:!1,viewColumns:!1,display:!0,customBodyRender:function(e,t){return Object(n.jsx)(y.a,{variant:"contained",color:"secondary",size:"small",disabled:null===t.rowData[1],style:{marginLeft:2},className:"button",value:e,onClick:function(){N({isOpen:!0,title:"Are you sure to return your assigned Task?",subTitle:"Once rejected it will be unassigned from you.To reassign the task you need to go to search task and accept it again.",onConfirm:function(){N(Object(j.a)(Object(j.a)({},S),{},{isOpen:!1})),console.log(t.rowData[1]);var a=Le.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{volId:null}):t}));l(a),console.log("myTask"),console.log(c),console.log("assignTasks"),console.log(d),console.log(o),w({isOpen:!0,message:"Task is unssigned from you",type:"warning"})}})},children:"Reject"})}}},{name:"id",label:" Task Detail",options:{filter:!1,sort:!1,viewColumns:!1,customBodyRender:function(e,t,a){return Object(n.jsx)(y.a,{variant:"contained",color:"primary",size:"small",style:{marginLeft:16},value:e,onClick:function(t){var a=o.find((function(t){return t.id===e}));console.log(a),null!=a&&I(0,a)},children:"View"})}}}],A=[{name:"id",label:"ID",options:{display:!1,sort:!1,filter:!1,viewColumns:!1}},{name:"volId",label:"volunteer ID",options:{display:!1,sort:!1,filter:!1}},{name:"firstName",label:"First name",options:{display:!1,filter:!0,sort:!0}},{name:"lastName",label:"Last name",options:{display:!1,filter:!0,sort:!0}},{name:"firstName",label:"Full Name",options:{filter:!1,sort:!1,customBodyRender:function(e,t,a){return Object(n.jsxs)("div",{children:[t.rowData[2]," ",t.rowData[3]]})}}},{name:"taskType",label:"Task",options:{filter:!0,sort:!0}},{name:"date",label:"Start Date",options:{filter:!0,sort:!0,customBodyRender:function(e){return Oe()(new Date(e)).format(Re)}}},{name:"distance",label:"Distance",options:{filter:!0,sort:!0}},{name:"id",label:"Action",options:{sort:!1,filter:!1,viewColumns:!1,display:!0,customBodyRender:function(e,t){return Object(n.jsx)(y.a,{variant:"contained",color:"primary",size:"small",disabled:null!==t.rowData[1],style:{marginLeft:2,backgroundColor:null===t.rowData[1]?"green":"lightgrey"},className:"button",value:e,onClick:function(){N({isOpen:!0,title:"Do you agree to accept this task?",subTitle:"Once accepted it will be assigned to you.To return the task you need to go to your task list and reject it.",onConfirm:function(){N(Object(j.a)(Object(j.a)({},S),{},{isOpen:!1}));var t=Le.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{volId:1}):t}));l(t),console.log("assignTasks"),console.log(d),console.log("myTask"),console.log(c),console.log(o),w({isOpen:!0,message:"Task is successfully assigned to you.",type:"success"})}})},children:"Accept"})}}},{name:"id",label:"Action",options:{sort:!1,filter:!1,viewColumns:!1,display:!1,customBodyRender:function(e,t){return Object(n.jsx)(y.a,{variant:"contained",color:"secondary",size:"small",disabled:null===t.rowData[1],style:{marginLeft:2},className:"button",value:e,onClick:function(){N({isOpen:!0,title:"Are you sure to return your assigned Task?",subTitle:"Once rejected it will be unassigned from you.To reassign the task you need to go to search task and accept it again.",onConfirm:function(){N(Object(j.a)(Object(j.a)({},S),{},{isOpen:!1})),console.log(t.rowData[1]);var a=Le.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{volId:null}):t}));l(a),w({isOpen:!0,message:"Task is unssigned from you",type:"warning"})}})},children:"Reject"})}}},{name:"id",label:" Task Detail",options:{filter:!1,sort:!1,viewColumns:!1,customBodyRender:function(e,t,a){return Object(n.jsx)(y.a,{variant:"contained",color:"primary",size:"small",style:{marginLeft:16},value:e,onClick:function(t){var a=o.find((function(t){return t.id===e}));console.log(a),null!=a&&I(0,a)},children:"View"})}}}];return Object(n.jsx)(i.a.Fragment,{children:Object(n.jsxs)("div",{style:{height:"100%"},children:[Object(n.jsxs)(K.a,{id:"start-time",container:!0,spacing:2,children:[Object(n.jsxs)(K.a,{item:!0,xs:12,sm:6,children:[Object(n.jsx)("h4",{className:e.h5,children:"My Assigned Tasks"}),Object(n.jsx)(ge.a,{theme:t,children:Object(n.jsx)(be.a,{title:"My Task List",data:c,columns:F,options:Pe})})]}),Object(n.jsxs)(K.a,{item:!0,xs:12,sm:6,children:[Object(n.jsx)("h4",{className:e.h5,children:"Search New Tasks"}),Object(n.jsx)(ge.a,{theme:t,children:Object(n.jsx)(be.a,{title:"New Unassigned Task List",data:d,columns:A,options:Pe})})]})]}),Object(n.jsx)(De,{open:b,handleClose:function(){h(!1),f(null)},title:"Task Summary",data:g}),Object(n.jsx)(Ie,{notify:T,setNotify:w}),Object(n.jsx)(Ae,{confirmDialog:S,setConfirmDialog:N})]})})}var qe=a(31),Me=a(396),ze=a.n(Me),He=a(398),Ee=a.n(He),Ue=a(400),Ye=a.n(Ue),Ve=a(397),Ge=a.n(Ve),Je=a(399),Ke=a.n(Je),Qe=a(401),Xe=a.n(Qe),Ze=a(403),$e=Object(p.a)({p:{margin:"10px 2px 10px 2px"}});var _e=function(e){var t=e.open,a=e.handleClose,s=e.taskType,i=e.addTask,r=function(e){return e.getFullYear()+"-"+(1+e.getMonth()).toString().padStart(2,"0")+"-"+e.getDate().toString().padStart(2,"0")},o=Object(Ze.a)({defaultValues:{taskDetails:"",startDate:null,startTime:"08:00",endDate:null,endTime:"20:00"},mode:"all"}),l=o.register,c=o.handleSubmit,d=o.reset,u=o.errors,j=o.watch,p=o.setValue,m=o.clearErrors,b=(o.control,function(){d(),a()}),h=j(),O=$e(),x="Required field";return Object(n.jsx)("div",{children:Object(n.jsx)(fe.a,{open:t,onClose:b,fullWidth:!0,maxWidth:"sm",children:Object(n.jsxs)("form",{onSubmit:c((function(e){var t=new Date(e.startDate+"T"+e.startTime),a=new Date(e.endDate+"T"+e.endTime);i({taskType:s,taskDetails:e.taskDetails,start:t,end:a}),b()})),children:[Object(n.jsx)(ye.a,{id:"dialog-add-task",children:{shop:"Shopping",pharm:"Collect medicine",dog:"Dog Walking",hospital:"Visit Hospital Appointment",phone:"Friendly Chat",any:"I need help with ..."}[s]}),Object(n.jsxs)(ve.a,{children:[Object(n.jsx)(G.a,{id:"taskDetails",name:"taskDetails",inputRef:l({required:["shop","any"].includes(s)}),autoFocus:!0,label:"Details",multiline:!0,rows:5,variant:"outlined",fullWidth:!0,InputLabelProps:{shrink:!0},error:u.taskDetails,helperText:u.taskDetails&&"Details are required for this task type"}),Object(n.jsxs)("p",{className:O.p,children:[Object(n.jsx)("br",{}),"Set dates when you need it: ",Object(n.jsx)("br",{}),Object(n.jsx)(f.a,{variant:"caption",children:"Providing wider time window will increase your chances to find a volunteer."})]}),Object(n.jsxs)(K.a,{id:"start-time",container:!0,spacing:3,children:[Object(n.jsx)(K.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(G.a,{inputRef:l({required:x}),id:"startDate",name:"startDate",label:"Starting from",type:"date",margin:"dense",fullWidth:!0,inputProps:{min:r(new Date)},onChange:function(e){e.target.value&&(!h.endDate||h.endDate&&h.endDate<e.target.value)&&p("endDate",e.target.value)},InputLabelProps:{shrink:!0},error:u.hasOwnProperty("startDate"),helperText:u.startDate&&u.startDate.message})}),Object(n.jsx)(K.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(G.a,{inputRef:l({required:x}),type:"time",id:"startTime",name:"startTime",label:"Time",margin:"dense",fullWidth:!0,InputLabelProps:{shrink:!0},error:u.hasOwnProperty("startTime"),helperText:u.startTime&&u.startTime.message})})]}),Object(n.jsxs)(K.a,{id:"finish-time",container:!0,spacing:3,children:[Object(n.jsx)(K.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(G.a,{inputRef:l({required:x}),type:"date",margin:"dense",inputProps:{min:r(new Date)},id:"endDate",name:"endDate",label:"Ending at",fullWidth:!0,onChange:function(e){e.target.value&&h.startDate&&h.startDate>e.target.value&&p("startDate",e.target.value)},InputLabelProps:{shrink:!0},error:u.hasOwnProperty("endDate"),helperText:u.endDate&&u.endDate.message})}),Object(n.jsx)(K.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(G.a,{inputRef:l({required:x,validate:function(){var e=new Date(h.startDate+"T"+h.startTime),t=new Date(h.endDate+"T"+h.endTime);if(h.startDate&&h.startTime&&h.endDate&&h.endTime)return e.setMinutes(e.getMinutes()+30)>t?"Not enough time to complete your task. Consider at least 30 minutes.":void 0;m("endTime")}}),type:"time",id:"endTime",name:"endTime",label:"Time",margin:"dense",fullWidth:!0,InputLabelProps:{shrink:!0},error:u.hasOwnProperty("endTime"),helperText:u.endTime&&u.endTime.message})})]})]}),Object(n.jsxs)(ke.a,{children:[Object(n.jsx)(y.a,{onClick:b,color:"primary",children:"Cancel"}),Object(n.jsx)(y.a,{type:"Submit",color:"primary",children:"Add"})]})]})})})},et={filterType:"multiselect",selectableRows:"none",selectableRowsOnClick:!0,count:5};function tt(e){var t=e.taskList;return Object(n.jsx)(i.a.Fragment,{children:Object(n.jsx)(be.a,{title:"All Tasks",data:t,columns:[{name:"id",label:"ID",options:{display:!1,sort:!1,filter:!1}},{name:"taskType",label:"Task Type",options:{filter:!0,sort:!0}},{name:"taskDetails",label:" Task Detail",options:{filter:!1,sort:!1}},{name:"start",label:"Start Time",options:{filter:!0,sort:!0}},{name:"end",label:"End Time",options:{filter:!0,sort:!0}},{name:"status",label:"State",options:{filter:!0,sort:!0}},{name:"actions",label:"Actions",options:{sort:!1,filter:!1}}],options:et})})}var at=Object(p.a)({h1:{color:"#4C4B51"},largeButton:{border:5,color:"#FF8E53",padding:"15px 15px",margin:"5px 15px 10px 15px",height:100,width:100},largeIcon:{fontSize:60},label:{flexDirection:"column"},icon:{fontSize:"32px !important",marginBottom:5}});var nt=function(){var e=Object(s.useState)([{id:1,taskType:"Shopping",taskDetails:"I need help with Shopping from Tesco",start:"2020-12-28T10:00",end:"2020-12-28T10:00",status:"done"},{id:2,taskType:"Dog Walking",taskDetails:"I need help with dog walkingevery morning and afternoon",start:"2020-12-28T10:00",end:"2020-12-28T10:00",status:"done"},{id:3,taskType:"Shopping",taskDetails:"I need help with Shopping from Asda",start:"2020-12-28T10:00",end:"2020-12-28T10:00",status:"done"},{id:4,taskType:"Pharmacy",taskDetails:"I need help with picking up my prescription from local gp",start:"2020-12-28T10:00",end:"2020-12-28T10:00",status:"done"},{id:5,taskType:"Hospital",taskDetails:"I need help to drop off and pick up from my hospital",start:"2020-12-28T10:00",end:"2020-12-28T10:00",status:"done"},{id:6,taskType:"Phone Call",taskDetails:"I need someone to give me a call to have a chat",start:"2020-12-28T10:00",end:"2020-12-28T10:00",status:"done"},{id:7,taskType:"Shopping",taskDetails:"I need help with Shopping from Tesco",start:"2020-12-28T10:00",end:"2020-12-28T10:00",status:"done"},{id:8,taskType:"Other",taskDetails:"I need help with mowing my garden",start:"2020-12-28T10:00",end:"2020-12-28T10:00",status:"done"},{id:9,taskType:"Shopping",taskDetails:"I need help with Shopping from Sainsbuyrys",start:"2020-12-28T10:00",end:"2020-12-28T10:00",status:"done"},{id:10,taskType:"Medical",taskDetails:"I need help with picking up my prescription",start:"2020-12-28T10:00",end:"2020-12-28T10:00",status:"done"}]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=11,l=i.a.useState(!1),c=Object(u.a)(l,2),d=c[0],j=c[1],p=i.a.useState(null),m=Object(u.a)(p,2),b=m[0],h=m[1],O=function(e,t){h(t),j(!0)},x=at();return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"text",children:"I need help with..."}),Object(n.jsxs)(y.a,{classes:{root:x.largeButton,label:x.label},onClick:function(e){return O(0,"shop")},children:[Object(n.jsx)(ze.a,{className:x.largeIcon}),"Shopping"]}),Object(n.jsxs)(y.a,{classes:{root:x.largeButton,label:x.label},onClick:function(e){return O(0,"pharm")},children:[Object(n.jsx)(Ge.a,{className:x.largeIcon}),"Pharmacy"]}),Object(n.jsxs)(y.a,{classes:{root:x.largeButton,label:x.label},onClick:function(e){return O(0,"dog")},children:[Object(n.jsx)(Ee.a,{className:x.largeIcon}),"Dog Walk"]}),Object(n.jsxs)(y.a,{classes:{root:x.largeButton,label:x.label},onClick:function(e){return O(0,"hospital")},children:[Object(n.jsx)(Ke.a,{className:x.largeIcon}),"Hospital"]}),Object(n.jsxs)(y.a,{classes:{root:x.largeButton,label:x.label},onClick:function(e){return O(0,"phone")},children:[Object(n.jsx)(Ye.a,{className:x.largeIcon}),"Phone Call"]}),Object(n.jsxs)(y.a,{classes:{root:x.largeButton,label:x.label},onClick:function(e){return O(0,"any")},children:[Object(n.jsx)(Xe.a,{className:x.largeIcon}),"Other"]}),Object(n.jsx)(_e,{open:d,handleClose:function(){h(null),j(!1)},taskType:b,addTask:function(e){e.id=o,o++,e.status="open";var t=[].concat(Object(qe.a)(a),[e]);r(t),console.log("New task added: ",e),console.log("Tasks list :",t),console.log("Tasks list :",a)}}),Object(n.jsx)(tt,{taskList:a})]})},st=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(Be,{})})},it=a(402);function rt(e){var t=e.component,a=Object(it.a)(e,["component"]),s=R().currentUser;return Object(n.jsx)(D.b,Object(j.a)(Object(j.a)({},a),{},{render:function(e){return console.log(s),s?Object(n.jsx)(t,Object(j.a)({},e)):Object(n.jsx)(D.a,{to:"/"})}}))}var ot=function(){return Object(n.jsx)(S.a,{children:Object(n.jsx)(P,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(B,{}),Object(n.jsx)("div",{className:"AppContent",children:Object(n.jsxs)(D.d,{children:[Object(n.jsx)(D.b,{exact:!0,path:"/HelpWhoNeeds/",children:Object(n.jsx)(M,{})}),Object(n.jsx)(D.b,{path:"/about",children:Object(n.jsx)(z,{})}),Object(n.jsx)(D.b,{path:"/contact",children:Object(n.jsx)(H,{})}),Object(n.jsx)(D.b,{path:"/login/:userType",children:Object(n.jsx)(ne,{})}),Object(n.jsx)(D.b,{path:"/signUp/:user",children:Object(n.jsx)(re,{})}),Object(n.jsx)(D.b,{path:"/forgotPassword/:user",children:Object(n.jsx)(ce,{})}),Object(n.jsx)(D.b,{path:"/requestee/tasks",children:Object(n.jsx)(nt,{})}),Object(n.jsx)(rt,{path:"/registrationPage/:user",component:pe}),Object(n.jsx)(rt,{path:"/searchTask",component:Be}),Object(n.jsx)(rt,{path:"/myTask",component:st}),Object(n.jsx)(rt,{path:"/addTask",component:nt})]})}),Object(n.jsx)(U,{})]})})})},lt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,713)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(ot,{})}),document.getElementById("root")),lt()}},[[668,1,2]]]);
//# sourceMappingURL=main.37901916.chunk.js.map