(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{cAcB:function(n,l,u){"use strict";u.r(l);var o=u("CcnG"),t=u("mrSG"),i=u("Wcq6"),r=u.n(i),b=u("ZBkt"),c=function(){function n(n){var l=this;this.afAuth=n,this.afAuth.authState.subscribe(function(n){l.user=n})}return n.prototype.signInWithGoogle=function(){return console.log("Sign in with google"),this.oauthSignIn(new r.a.auth.GoogleAuthProvider)},n.prototype.oauthSignIn=function(n){return this.afAuth.auth.signInWithPopup(n)},n.ngInjectableDef=o.S({factory:function(){return new n(o.W(b.a))},token:n,providedIn:"root"}),n}(),e=function(){function n(n){this.auth=n}return n.prototype.ngOnInit=function(){},n.prototype.signInGoogle=function(){return t.__awaiter(this,void 0,void 0,function(){var n;return t.__generator(this,function(l){switch(l.label){case 0:return[4,this.auth.signInWithGoogle()];case 1:return n=l.sent(),console.log(n),[2]}})})},n}(),a=function(){return function(){}}(),h=u("pMnS"),s=u("oBZk"),p=u("ZZ/e"),g=u("ZYCi"),f=u("Ip0R"),w=o.nb({encapsulation:0,styles:[["h2[_ngcontent-%COMP%]{margin-bottom:50px}"]],data:{}});function k(n){return o.Eb(0,[(n()(),o.pb(0,0,null,null,13,"ion-toolbar",[],null,null,null,s.N,s.t)),o.ob(1,49152,null,0,p.yb,[o.h,o.k],null,null),(n()(),o.pb(2,0,null,0,8,"ion-buttons",[["slot","start"]],null,null,null,s.w,s.c)),o.ob(3,49152,null,0,p.i,[o.h,o.k],null,null),(n()(),o.pb(4,0,null,0,6,"ion-button",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==o.yb(n,6).onClick()&&t),"click"===l&&(t=!1!==o.yb(n,8).onClick(u)&&t),t},s.v,s.b)),o.ob(5,49152,null,0,p.h,[o.h,o.k],null,null),o.ob(6,16384,null,0,g.n,[g.m,g.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.zb(7,1),o.ob(8,737280,null,0,p.Gb,[f.g,p.Db,o.k,g.m,[2,g.n]],null,null),(n()(),o.pb(9,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","icon-only"]],null,null,null,s.H,s.n)),o.ob(10,49152,null,0,p.z,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.pb(11,0,null,0,2,"ion-title",[["color","primary"]],null,null,null,s.M,s.s)),o.ob(12,49152,null,0,p.wb,[o.h,o.k],{color:[0,"color"]},null),(n()(),o.Db(-1,0,["Auth Page"])),(n()(),o.pb(14,0,null,null,8,"ion-content",[["class","ion-padding-horizontal"]],null,null,null,s.D,s.j)),o.ob(15,49152,null,0,p.r,[o.h,o.k],null,null),(n()(),o.pb(16,0,null,0,3,"ion-text",[["class","ion-padding-vertical text"]],null,null,null,s.L,s.r)),o.ob(17,49152,null,0,p.tb,[o.h,o.k],null,null),(n()(),o.pb(18,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),o.Db(-1,null,["Welcome to Notes. Pen things down by subjects"])),(n()(),o.pb(20,0,null,0,2,"ion-button",[["class","auth-button"],["color","primary"],["fill","outline"]],null,[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.signInGoogle()&&o),o},s.v,s.b)),o.ob(21,49152,null,0,p.h,[o.h,o.k],{color:[0,"color"],fill:[1,"fill"]},null),(n()(),o.Db(-1,0,[" Sign in with Google "]))],function(n,l){var u=n(l,7,0,"/");n(l,6,0,u),n(l,8,0),n(l,10,0,"arrow-back"),n(l,12,0,"primary"),n(l,21,0,"primary","outline")},null)}function m(n){return o.Eb(0,[(n()(),o.pb(0,0,null,null,1,"app-auth",[],null,null,null,k,w)),o.ob(1,114688,null,0,e,[c],null,null)],function(n,l){n(l,1,0)},null)}var v=o.lb("app-auth",e,m,{},{},[]),y=u("gIcY");u.d(l,"AuthPageModuleNgFactory",function(){return d});var d=o.mb(a,[],function(n){return o.vb([o.wb(512,o.j,o.bb,[[8,[h.a,v]],[3,o.j],o.x]),o.wb(4608,f.k,f.j,[o.u,[2,f.r]]),o.wb(4608,y.c,y.c,[]),o.wb(4608,p.a,p.a,[o.z,o.g]),o.wb(4608,p.Cb,p.Cb,[p.a,o.j,o.q,f.c]),o.wb(4608,p.Fb,p.Fb,[p.a,o.j,o.q,f.c]),o.wb(1073742336,f.b,f.b,[]),o.wb(1073742336,y.b,y.b,[]),o.wb(1073742336,y.a,y.a,[]),o.wb(1073742336,p.Ab,p.Ab,[]),o.wb(1073742336,g.o,g.o,[[2,g.u],[2,g.m]]),o.wb(1073742336,a,a,[]),o.wb(1024,g.k,function(){return[[{path:"",component:e}]]},[])])})}}]);