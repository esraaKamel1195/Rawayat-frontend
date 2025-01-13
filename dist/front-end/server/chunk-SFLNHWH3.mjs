import './polyfills.server.mjs';
import{d as Q}from"./chunk-DL2HDLCX.mjs";import{a as j,b as V}from"./chunk-2TNK437T.mjs";import{a as $,b as K}from"./chunk-GPWFGHYN.mjs";import"./chunk-PZUJBLPM.mjs";import"./chunk-BI4PDNBI.mjs";import{b as U,c as Z,d as H,g as J,h as Y}from"./chunk-JJJL62AU.mjs";import{a as E}from"./chunk-PMN4URV3.mjs";import{b as I,d as p,g as k,h as D,m as L,o as N,p as q,q as z,s as T,t as A,u as R}from"./chunk-ZGHL4WF5.mjs";import"./chunk-5LTXXU3Y.mjs";import{b as B,c as G}from"./chunk-KLCAW5LL.mjs";import"./chunk-67HAECRY.mjs";import{a as w}from"./chunk-KA3EQVIX.mjs";import{d as y,e as O,g as F}from"./chunk-APY6NCEA.mjs";import"./chunk-NP6UCXIG.mjs";import{$a as a,$b as i,Eb as t,Fb as o,Gb as M,Nb as f,Pb as b,ab as c,ac as h,bd as S,ed as P,ga as v,gc as C,kb as u,qb as d,ub as x,vb as s}from"./chunk-JFMF6S6U.mjs";import"./chunk-5XUXGTUW.mjs";function X(n,e){n&1&&(t(0,"mat-error"),i(1," Email is required "),o())}function ee(n,e){n&1&&(t(0,"mat-error"),i(1," Please enter a valid email "),o())}function te(n,e){n&1&&(t(0,"mat-error",18),i(1," Password is required "),o())}function oe(n,e){if(n&1&&(t(0,"div",19)(1,"mat-error"),i(2),o()()),n&2){let m=b();a(2),h(m.errorMessage())}}var W=class n{constructor(e,m,r,l){this.fb=e;this.authService=m;this.router=r;this.deviceService=l;this.loginForm=this.fb.group({email:["",[p.required,p.email,p.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],password:["",[p.required]],device_name:[l.getDeviceInfo().device?l.getDeviceInfo().device:l.getDeviceInfo().deviceType,p.required]})}errorMessage=u("");hide=u(!0);loginForm;updateErrorMessage(){this.loginForm.get("email")?.hasError("required")?this.errorMessage.set("You must enter a value"):this.loginForm.get("email")?.hasError("email")?this.errorMessage.set("Not a valid email"):this.errorMessage.set("")}clickEvent(e){this.hide.set(!this.hide()),e.stopPropagation()}login(){console.log("this.loginForm.value",this.loginForm.value),this.loginForm.invalid&&(this.errorMessage.set("Form data not vaild"),this.loginForm.markAllAsTouched()),this.authService.login(this.loginForm.value).subscribe({next:e=>{console.log("Login successful:",e),localStorage.setItem("token",JSON.stringify(e.token)),localStorage.setItem("user",JSON.stringify(e.user)),e.user.role==="admin"?this.router.navigateByUrl("/admin/categories"):e.user.role==="reader"&&this.router.navigateByUrl("/home")},error:e=>{console.error("Login error:",e),this.errorMessage.set(e.error.message)}})}static \u0275fac=function(m){return new(m||n)(c(T),c(w),c(y),c(E))};static \u0275cmp=v({type:n,selectors:[["app-login"]],standalone:!0,features:[C],decls:34,vars:9,consts:[[1,"login","my-5","m-auto","shadow","bg-white"],[1,"title","mb-3"],[1,"container"],[1,"login-form",3,"ngSubmit","formGroup"],[1,"form-field"],["appearance","outline"],["matInput","","placeholder","pat@example.com","formControlName","email","name","email","id","email","required","",3,"blur"],[4,"ngIf"],["matInput","","placeholder","password","formControlName","password","name","password","id","password","required","",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["class","pb-1",4,"ngIf"],[1,"ps-3"],["routerLink","/auth/forget-password"],["class","error my-3 py-3",4,"ngIf"],[1,"text-center"],["type","submit",1,"btn"],[1,"action-btn-link"],["routerLink","/auth/register",1,"action-btn"],[1,"pb-1"],[1,"error","my-3","py-3"]],template:function(m,r){if(m&1&&(t(0,"div",0)(1,"h5",1),i(2,"Login"),o(),t(3,"div",2)(4,"form",3),f("ngSubmit",function(){return r.login()}),t(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),i(8,"Enter your email"),o(),t(9,"input",6),f("blur",function(){return r.updateErrorMessage()}),o(),d(10,X,2,0,"mat-error",7)(11,ee,2,0,"mat-error",7),o()(),t(12,"div",4)(13,"mat-form-field",5)(14,"mat-label"),i(15,"Enter your password"),o(),M(16,"input",8),t(17,"button",9),f("click",function(g){return r.clickEvent(g)}),t(18,"mat-icon"),i(19),o()(),d(20,te,2,0,"mat-error",10),o()(),t(21,"div",11)(22,"a",12),i(23," Forgot password ? "),o()(),d(24,oe,3,1,"div",13),t(25,"div",14)(26,"button",15),i(27,"Login"),o()(),t(28,"div",14)(29,"p",16),i(30," Don't have an account? "),t(31,"b")(32,"u",17),i(33,"Register"),o()()()()()()()),m&2){let l,g,_;a(4),s("formGroup",r.loginForm),a(6),s("ngIf",(l=r.loginForm.get("email"))==null?null:l.hasError("required")),a(),s("ngIf",(g=r.loginForm.get("email"))==null?null:g.hasError("email")),a(5),s("type",r.hide()?"password":"text"),a(),x("aria-label","Hide password")("aria-pressed",r.hide()),a(2),h(r.hide()?"visibility_off":"visibility"),a(),s("ngIf",(_=r.loginForm.get("password"))==null?null:_.hasError("required")),a(4),s("ngIf",r.errorMessage())}},dependencies:[P,S,F,O,A,L,I,k,D,z,Y,J,U,Z,H,G,B,K,$,Q,R,N,q,V,j],styles:[".login[_ngcontent-%COMP%]{max-width:500px;margin:50px auto;position:relative;box-shadow:0 10px 30px #0000001a;padding:30px}.login[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center;letter-spacing:3px;font-size:1.5em;line-height:48px;padding-bottom:20px;color:#f87f27;background:linear-gradient(to right,#f87f27,#262628);background-clip:text;-webkit-text-fill-color:transparent}.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{position:relative;margin:10px 0}.login-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]{display:block;width:100%;height:36px;border-width:0 0 2px 0;border-color:#26262893;font-size:14px;line-height:26px;font-weight:400}.login-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]:focus{outline:none}.login-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .input-text.not-empty[_ngcontent-%COMP%] + .label[_ngcontent-%COMP%]{transform:translateY(-24px)}.login-form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;left:20px;bottom:11px;font-size:16px;line-height:26px;font-weight:500;color:#262628;cursor:text;text-transform:capitalize;transition:.2s ease-in-out}.image[_ngcontent-%COMP%]{text-transform:capitalize;font-size:16px;font-weight:500;color:#262628;cursor:text;padding-left:10px}.btn[_ngcontent-%COMP%]{background-color:#f87f27;font-size:16px;line-height:26px;font-weight:500;color:#fff;margin:25px 0;padding:5px 15px}.btn[_ngcontent-%COMP%]:hover{background-color:#262628;color:#fff}.action-btn[_ngcontent-%COMP%]{cursor:pointer;color:#f87f27}.action-btn[_ngcontent-%COMP%]:hover{color:#b15443}.login-form[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{color:#262628;font-size:18px;font-weight:500;margin-bottom:10px;padding-bottom:5px}.login-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] + mat-form-field[_ngcontent-%COMP%]{margin-left:8px;color:#262628!important;height:50px;background-color:#fff}mat-form-field[_ngcontent-%COMP%]{width:100%;border-color:#262628}a[_ngcontent-%COMP%]{color:#f87f27;text-decoration:none;font-weight:500;text-shadow:#262628}a[_ngcontent-%COMP%]:hover{color:#262628}"],changeDetection:0})};export{W as LoginComponent};
