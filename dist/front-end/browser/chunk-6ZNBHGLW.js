import{a}from"./chunk-FAX5B2RI.js";import{Y as s,ba as i,g as r}from"./chunk-OHLU4CVY.js";var o=class e{constructor(t){this.http=t}isLoggedIn$=new r(!1);apiUrl="https://whitesmoke-coyote-648419.hostingersite.com/api";isLocalStorageAvailable(){try{return typeof localStorage<"u"}catch{return!1}}register(t){return this.http.post(`${this.apiUrl}/users/register`,t)}login(t){return this.http.post(`${this.apiUrl}/users/login`,t)}verifyEmail(t){return this.http.get(`${this.apiUrl}/users/verify-email?token=${t}`)}forgetPassword(t){return this.http.post(`${this.apiUrl}/users/reset-password`,{email:t})}resetPassword(t){return this.http.post(`${this.apiUrl}/users/reset`,t)}getToken(){return this.isLocalStorageAvailable()?JSON.parse(String(localStorage.getItem("token"))):null}isAuthenticated(){return!!this.getToken()}getUserRole(){return this.isLocalStorageAvailable()?JSON.parse(localStorage.getItem("user")||"{}").role:"not registered"}logout(){return this.http.post(`${this.apiUrl}/users/logout`,{})}static \u0275fac=function(n){return new(n||e)(i(a))};static \u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"})};export{o as a};
