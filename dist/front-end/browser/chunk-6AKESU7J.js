import{D as L,E as x,a as m,d as c,e as F,f as h,p as B}from"./chunk-TJXMHTLD.js";import{$ as T,A as y,Aa as p,Da as M,Lc as k,S as O,Y as u,Z as b,_a as f,ba as l,c as C,e as V,f as a,ha as D,ia as I,k as R,w as E,z}from"./chunk-OHLU4CVY.js";var j=class{};function q(i){return i&&typeof i.connect=="function"&&!(i instanceof V)}var v=function(i){return i[i.REPLACED=0]="REPLACED",i[i.INSERTED=1]="INSERTED",i[i.MOVED=2]="MOVED",i[i.REMOVED=3]="REMOVED",i}(v||{}),X=new T("_ViewRepeater"),A=class{applyChanges(n,e,t,s,r){n.forEachOperation((o,d,w)=>{let _,g;if(o.previousIndex==null){let S=t(o,d,w);_=e.createEmbeddedView(S.templateRef,S.context,S.index),g=v.INSERTED}else w==null?(e.remove(d),g=v.REMOVED):(_=e.get(d),e.move(_,w),g=v.MOVED);r&&r({context:_?.context,operation:g,record:o})})}detach(){}};var P=class{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(n=!1,e,t=!0,s){this._multiple=n,this._emitChanges=t,this.compareWith=s,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new a,e&&e.length&&(n?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n);n.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let s=this._hasQueuedChanges();return this._emitChangeEvent(),s}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var K=(()=>{class i{constructor(){this._listeners=[]}notify(e,t){for(let s of this._listeners)s(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var U=20,H=(()=>{class i{constructor(e,t,s){this._ngZone=e,this._platform=t,this._scrolled=new a,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=s}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=U){return this._platform.isBrowser?new C(t=>{this._globalSubscription||this._addGlobalListener();let s=e>0?this._scrolled.pipe(y(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{s.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):R()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let s=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(z(r=>!r||s.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((s,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let s=B(t),r=e.getElementRef().nativeElement;do if(s==r)return!0;while(s=s.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return E(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static{this.\u0275fac=function(t){return new(t||i)(l(p),l(m),l(k,8))}}static{this.\u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),je=(()=>{class i{constructor(e,t,s,r){this.elementRef=e,this.scrollDispatcher=t,this.ngZone=s,this.dir=r,this._destroyed=new a,this._elementScrolled=new C(o=>this.ngZone.runOutsideAngular(()=>E(this.elementRef.nativeElement,"scroll").pipe(O(this._destroyed)).subscribe(o)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,s=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=s?e.end:e.start),e.right==null&&(e.right=s?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),s&&h()!=c.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),h()==c.INVERTED?e.left=e.right:h()==c.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;F()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",s="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let o=this.dir&&this.dir.value=="rtl";return e=="start"?e=o?s:t:e=="end"&&(e=o?t:s),o&&h()==c.INVERTED?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:o&&h()==c.NEGATED?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static{this.\u0275fac=function(t){return new(t||i)(f(M),f(H),f(p),f(L,8))}}static{this.\u0275dir=I({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0})}}return i})(),G=20,Ae=(()=>{class i{constructor(e,t,s){this._platform=e,this._change=new a,this._changeListener=r=>{this._change.next(r)},this._document=s,t.runOutsideAngular(()=>{if(e.isBrowser){let r=this._getWindow();r.addEventListener("resize",this._changeListener),r.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:s}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+s,right:e.left+t,height:s,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),s=e.documentElement,r=s.getBoundingClientRect(),o=-r.top||e.body.scrollTop||t.scrollY||s.scrollTop||0,d=-r.left||e.body.scrollLeft||t.scrollX||s.scrollLeft||0;return{top:o,left:d}}change(e=G){return e>0?this._change.pipe(y(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static{this.\u0275fac=function(t){return new(t||i)(l(m),l(p),l(k,8))}}static{this.\u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var N=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=D({type:i})}static{this.\u0275inj=b({})}}return i})(),Pe=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=D({type:i})}static{this.\u0275inj=b({imports:[x,N,x,N]})}}return i})();export{j as a,q as b,v as c,X as d,A as e,P as f,K as g,H as h,je as i,Ae as j,N as k,Pe as l};
