import{a as c,b as F,m as T,n as V}from"./chunk-7SMTJZZP.js";import{a as A}from"./chunk-IJMMPBSN.js";import"./chunk-BCOK47RC.js";import"./chunk-AFMMQFCP.js";import"./chunk-HPSNOQTZ.js";import"./chunk-6AKESU7J.js";import"./chunk-RAJ4HTP7.js";import"./chunk-N2SCIOI6.js";import"./chunk-6XXA7HXI.js";import"./chunk-2OPUPMLU.js";import"./chunk-TJXMHTLD.js";import{c as R}from"./chunk-BNBCP7ER.js";import"./chunk-FAX5B2RI.js";import{Cb as n,Db as i,Eb as _,Ib as v,Lb as f,Nb as S,Tb as x,Tc as M,Ub as w,Vb as E,Xc as L,Za as o,Zb as r,_a as u,_b as m,ec as C,fc as I,ga as b,ob as h,qa as p,ra as g,tb as y}from"./chunk-OHLU4CVY.js";import"./chunk-GAL4ENT6.js";var P=()=>[5,10,20];function D(l,t){if(l&1){let e=v();n(0,"tr")(1,"td"),r(2),i(),n(3,"td"),r(4),i(),n(5,"td"),r(6),i(),n(7,"td"),r(8),i(),n(9,"td")(10,"button",8),f("click",function(){let a=p(e).$implicit,d=S();return g(d.edit(a.id))}),r(11," Edit "),i(),n(12,"button",9),f("click",function(){let a=p(e).$implicit,d=S();return g(d.deleteStory(a.id))}),r(13," Delete "),i()()()}if(l&2){let e=t.$implicit;o(2),m(e.title),o(2),m(e.category),o(2),m(e.status),o(2),m(e.content_type)}}var O=class l{constructor(t,e){this.router=t;this.storyService=e}stories=[];displayedColumns=["title","category","publication_status","symbol","Actions"];dataSource=new V(this.stories);paginator;ngOnInit(){this.storyService.getAllStories().subscribe({next:t=>{console.log("stories",t),this.stories=t},error:t=>{console.error("Error retrieving contacts:",t)}})}ngAfterViewInit(){this.dataSource.paginator=this.paginator?this.paginator:null}edit(t=0){console.log("Editing category with ID:",t),this.router.navigate([`category/update/${t}`])}deleteStory(t=0){confirm("Are you sure you want to delete this story?")&&this.storyService.deleteStory(t).subscribe({next:()=>{alert("Story deleted successfully!"),this.stories=this.stories.filter(e=>e.id!==t)},error:e=>{console.log(e),alert("Failed to delete story. Please try again.")}})}static \u0275fac=function(e){return new(e||l)(u(R),u(A))};static \u0275cmp=b({type:l,selectors:[["app-reading-later"]],viewQuery:function(e,s){if(e&1&&x(c,5),e&2){let a;w(a=E())&&(s.paginator=a.first)}},standalone:!0,features:[C],decls:21,vars:3,consts:[[1,"container"],[1,"title-part"],[1,"title"],[1,"mat-elevation-z8"],[1,"table","text-center"],["scope","col"],[4,"ngFor","ngForOf"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],[1,"btn","bg-warning","mx-3",3,"click"],[1,"btn","bg-danger",3,"click"]],template:function(e,s){e&1&&(n(0,"div",0)(1,"div",1)(2,"h5",2),r(3,"Stories"),i()(),n(4,"div",3)(5,"table",4)(6,"thead")(7,"tr")(8,"th",5),r(9,"Title"),i(),n(10,"th",5),r(11,"Category"),i(),n(12,"th",5),r(13,"Status"),i(),n(14,"th",5),r(15,"Content type"),i(),n(16,"th",5),r(17,"Action"),i()()(),n(18,"tbody"),h(19,D,14,4,"tr",6),i()(),_(20,"mat-paginator",7),i()()),e&2&&(o(19),y("ngForOf",s.stories),o(),y("pageSizeOptions",I(2,P)))},dependencies:[L,M,F,c,T]})};export{O as ReadingLaterComponent};
