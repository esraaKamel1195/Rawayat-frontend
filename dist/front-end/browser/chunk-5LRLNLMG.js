import{a as o}from"./chunk-BCOK47RC.js";import{a as n}from"./chunk-FAX5B2RI.js";import{Y as i,ba as a,p as s}from"./chunk-OHLU4CVY.js";var g=class r{constructor(t,e){this.http=t;this.sharedHttp=e}apiUrl="https://whitesmoke-coyote-648419.hostingersite.com/api";getAllCategories(){return this.http.get(`${this.apiUrl}/categories`).pipe(s(t=>t.data))}showCategory(t){return this.sharedHttp.get(`categories/${t}`)}addCategory(t){return this.http.post(`${this.apiUrl}/categories/`,{category_name:t})}updateCategory(t,e){return this.http.put(`${this.apiUrl}/categories/${t}`,{category_name:e})}deleteCategory(t){return this.http.delete(`${this.apiUrl}/categories/${t}`)}sendSelectedUserCategory(t){return this.http.post(`${this.apiUrl}/users/select-categories-and-get-stories`,{categories:t})}getTagsByCategory(t){return this.sharedHttp.get(`category/${t}/tags`)}addTagStore(t){return this.sharedHttp.post("Tags",{name:t})}storeStoryTags(t,e){return this.sharedHttp.post(`stories/${t}/tags`,{tag_id:e})}editTag(t,e){return this.sharedHttp.put(`Tags/${t}`,{name:e})}updateStoryTags(t,e,p){return this.sharedHttp.put(`stories/${t}/tags`,{old_tag_id:e,new_tag_id:p})}deleteTag(t){return this.sharedHttp.delete(`Tags/${t}`)}removeTagsFromStory(t,e){return this.sharedHttp.post(`stories/${t}/tags/remove`,{tag_id:e})}static \u0275fac=function(e){return new(e||r)(a(n),a(o))};static \u0275prov=i({token:r,factory:r.\u0275fac,providedIn:"root"})};export{g as a};