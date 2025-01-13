import{a as N}from"./chunk-5LRLNLMG.js";import"./chunk-BCOK47RC.js";import{d as V}from"./chunk-AFMMQFCP.js";import"./chunk-HPSNOQTZ.js";import"./chunk-6AKESU7J.js";import{a as z,b as A}from"./chunk-MYKWXPOJ.js";import{b as D,c as E,g as k,h as G}from"./chunk-RAJ4HTP7.js";import{b as F,d as s,g as P,h as O,i as p,k as d,m as S,o as w,p as R,u as I}from"./chunk-N2SCIOI6.js";import"./chunk-6XXA7HXI.js";import"./chunk-TJXMHTLD.js";import{a as b,c as M,f as x}from"./chunk-BNBCP7ER.js";import"./chunk-FAX5B2RI.js";import{Cb as r,Db as t,Eb as f,Lb as C,Uc as v,Xc as _,Za as m,Zb as i,_a as l,ec as h,ga as u,ob as y,tb as g}from"./chunk-OHLU4CVY.js";import"./chunk-GAL4ENT6.js";function T(c,e){c&1&&(r(0,"mat-error"),i(1," Category name is required and must be at least 3 characters. "),t())}var j=class c{constructor(e,a,o){this.activatedRoute=e;this.router=a;this.categoryService=o}categoryForm=new p({});category={cat_id:0,category_name:""};ngOnInit(){this.categoryForm=new p({cat_id:new d(this.activatedRoute.snapshot.params.id?this.activatedRoute.snapshot.params.id:null,[]),category_name:new d("",[s.required,s.minLength(3)])}),this.activatedRoute.snapshot.params.id&&this.categoryService.showCategory(this.activatedRoute.snapshot.params.id).subscribe({next:e=>{this.category=e.data,this.categoryForm.patchValue({category_name:this.category.category_name})},error:e=>{console.log("error",e)}})}onSubmit(){this.categoryForm.valid?this.activatedRoute.snapshot.params.id?this.categoryService.updateCategory(this.categoryForm.value.cat_id,this.categoryForm.value.category_name).subscribe({next:e=>{alert("Updated successfully"),this.categoryForm.reset(),this.router.navigateByUrl("admin/categories")},error:e=>{alert("Failed to add category. Please try again.")}}):this.categoryService.addCategory(this.categoryForm.value.category_name).subscribe({next:e=>{alert("added successfully"),this.categoryForm.reset(),this.router.navigateByUrl("admin/categories")},error:e=>{alert("Failed to add category. Please try again.")}}):alert("Please enter a valid category name.")}static \u0275fac=function(a){return new(a||c)(l(b),l(M),l(N))};static \u0275cmp=u({type:c,selectors:[["app-create-category"]],standalone:!0,features:[h],decls:14,vars:3,consts:[[1,"category","my-5","m-auto","shadow","bg-white"],[1,"title","mb-3"],[1,"container"],[1,"category-form",3,"ngSubmit","formGroup"],[1,"form-field"],["appearance","outline"],["matInput","","formControlName","category_name","placeholder","Category name"],[4,"ngIf"],[1,"text-center"],["type","submit","value","Create Category","mat-raised-button","",1,"btn",3,"disabled"]],template:function(a,o){if(a&1&&(r(0,"div",0)(1,"h5",1),i(2,"Create new Category"),t(),r(3,"div",2)(4,"form",3),C("ngSubmit",function(){return o.onSubmit()}),r(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),i(8,"Category Name"),t(),f(9,"input",6),t(),y(10,T,2,0,"mat-error",7),t(),r(11,"div",8)(12,"button",9),i(13," Create Category "),t()()()()()),a&2){let n;m(4),g("formGroup",o.categoryForm),m(6),g("ngIf",((n=o.categoryForm.get("category_name"))==null?null:n.touched)&&((n=o.categoryForm.get("category_name"))==null?null:n.invalid)),m(2),g("disabled",o.categoryForm.invalid)}},dependencies:[x,V,k,D,E,A,z,G,I,S,F,P,O,w,R,_,v],styles:[".category[_ngcontent-%COMP%]{max-width:600px;margin:50px auto;position:relative;box-shadow:0 10px 30px #0000001a;padding:30px}.category[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center;letter-spacing:3px;font-size:1.5em;line-height:48px;padding-bottom:20px;color:#f87f27;background:linear-gradient(to right,#f87f27,#262628);background-clip:text;-webkit-text-fill-color:transparent}.category-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{position:relative;margin:40px 0}.category-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]{display:block;width:100%;height:36px;border-width:0 0 2px 0;border-color:#26262893;font-size:14px;line-height:26px;font-weight:400}.category-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]:focus{outline:none}.category-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], .category-form[_ngcontent-%COMP%]   .input-text.not-empty[_ngcontent-%COMP%] + .label[_ngcontent-%COMP%]{transform:translateY(-24px)}.category-form[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{color:#262628;font-size:18px}.btn[_ngcontent-%COMP%]{background-color:#f87f27;color:#fff;font-size:16px;line-height:26px;font-weight:500;margin:10px 0}.btn[_ngcontent-%COMP%]:hover{background-color:#262628;color:#f87f27}mat-form-field[_ngcontent-%COMP%]{width:100%}"],changeDetection:0})};export{j as CreateCategoryComponent};
