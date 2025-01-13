import{a as F}from"./chunk-BI5P7MO7.js";import{a as _,b as O,c as A,d as H,e as P,f as $,g as Q,h as z,i as N,j,k as U,l as q,m as B,n as x}from"./chunk-7SMTJZZP.js";import"./chunk-BCOK47RC.js";import"./chunk-AFMMQFCP.js";import"./chunk-HPSNOQTZ.js";import"./chunk-6AKESU7J.js";import"./chunk-RAJ4HTP7.js";import"./chunk-N2SCIOI6.js";import"./chunk-6XXA7HXI.js";import"./chunk-2OPUPMLU.js";import"./chunk-TJXMHTLD.js";import{c as I}from"./chunk-BNBCP7ER.js";import"./chunk-FAX5B2RI.js";import{Cb as r,Db as n,Eb as f,Fb as R,Gb as g,Ib as h,Lb as u,Nb as v,Tb as b,Tc as V,Ub as E,Vb as y,Xc as k,Za as s,Zb as o,_a as C,_b as D,ec as M,fc as T,ga as S,ob as w,qa as d,ra as p,tb as c}from"./chunk-OHLU4CVY.js";import"./chunk-GAL4ENT6.js";var L=()=>[5,10,20];function J(i,e){i&1&&(r(0,"th",15),o(1,"Username"),n())}function K(i,e){if(i&1&&(r(0,"td",16),o(1),n()),i&2){let t=e.$implicit;s(),D(t.username)}}function W(i,e){i&1&&(r(0,"th",15),o(1,"Actions"),n())}function X(i,e){if(i&1){let t=h();r(0,"td",16)(1,"button",17),u("click",function(){let l=d(t).$implicit,m=v();return p(m.edit(l.id))}),o(2," Edit "),n(),r(3,"button",18),u("click",function(){let l=d(t).$implicit,m=v();return p(m.deleteReview(l.id))}),o(4," Delete "),n()()}}function Y(i,e){i&1&&f(0,"tr",19)}function Z(i,e){i&1&&f(0,"tr",20)}function ee(i,e){if(i&1){let t=h();r(0,"tr")(1,"td")(2,"button",17),u("click",function(){let l=d(t).$implicit,m=v();return p(m.edit(l.id))}),o(3," Edit "),n(),r(4,"button",18),u("click",function(){let l=d(t).$implicit,m=v();return p(m.deleteReview(l.id))}),o(5," Delete "),n()()()}}var G=class i{constructor(e,t){this.router=e;this.reviewsService=t}reviews=[];displayedColumns=["name","actions"];dataSource=new x(this.reviews);paginator;ngOnInit(){this.reviewsService.getAllReviews(5).subscribe({next:e=>{console.log("response",e),this.reviews=e,this.dataSource=new x(this.reviews)},error:e=>{console.log("error",e)}})}ngAfterViewInit(){this.dataSource.paginator=this.paginator?this.paginator:null}edit(e=0){console.log("Editing review with ID:",e),this.router.navigate([`review/update/${e}`])}deleteReview(e=0){confirm("Are you sure you want to delete this review?")&&this.reviewsService.deleteFeedback(e).subscribe({next:()=>{alert("Review deleted successfully!"),this.reviews=this.reviews.filter(t=>t.id!==e)},error:()=>{alert("Failed to delete tag. Please try again.")}})}static \u0275fac=function(t){return new(t||i)(C(I),C(F))};static \u0275cmp=S({type:i,selectors:[["app-reviews"]],viewQuery:function(t,a){if(t&1&&b(_,5),t&2){let l;E(l=y())&&(a.paginator=l.first)}},standalone:!0,features:[M],decls:30,vars:6,consts:[[1,"container"],[1,"title-part"],[1,"title"],[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","username"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"table","text-center"],["scope","col"],[4,"ngFor","ngForOf"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[1,"btn","bg-warning","mx-3",3,"click"],[1,"btn","bg-danger",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,a){t&1&&(r(0,"div",0)(1,"div",1)(2,"h5",2),o(3,"Reviews"),n()(),r(4,"div",3)(5,"table",4),R(6,5),w(7,J,2,0,"th",6)(8,K,2,1,"td",7),g(),R(9,8),w(10,W,2,0,"th",6)(11,X,5,0,"td",7),g(),w(12,Y,1,0,"tr",9)(13,Z,1,0,"tr",10),n(),r(14,"table",11)(15,"thead")(16,"tr")(17,"th",12),o(18,"Username"),n(),r(19,"th",12),o(20,"Email"),n(),r(21,"th",12),o(22,"Role"),n(),r(23,"th",12),o(24,"Gender"),n(),r(25,"th",12),o(26,"Action"),n()()(),r(27,"tbody"),w(28,ee,6,0,"tr",13),n()(),f(29,"mat-paginator",14),n()()),t&2&&(s(5),c("dataSource",a.dataSource),s(7),c("matHeaderRowDef",a.displayedColumns),s(),c("matRowDefColumns",a.displayedColumns),s(15),c("ngForOf",a.reviews),s(),c("pageSizeOptions",T(5,L)))},dependencies:[k,V,O,_,B,A,P,N,$,H,j,Q,z,U,q]})};export{G as ReviewsComponent};
