(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{cAcB:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=u("mrSG"),o=u("lGQG"),i=u("6nr9"),r=u("ZZ/e"),a={dark:"Low light",pink:"Pink",blue:"Blue",black:"Black",red:"Red",green:"Green"},s=function(){function n(n,l,u){this.auth=n,this.settings=l,this.actionSheetController=u,this.isAuthenticated=!1,this.isSignUp=!0,this.user={email:"",name:"",password:""}}return n.prototype.ionViewDidEnter=function(){return e.__awaiter(this,void 0,void 0,function(){return e.__generator(this,function(n){switch(n.label){case 0:return[4,this.auth.initializeAuth()];case 1:return n.sent(),this.setAuthState(),[2]}})})},n.prototype.changeAuthType=function(){this.isSignUp=!this.isSignUp},n.prototype.logOut=function(){return e.__awaiter(this,void 0,void 0,function(){return e.__generator(this,function(n){switch(n.label){case 0:return[4,this.auth.signOut()];case 1:return n.sent(),this.setAuthState(),[2]}})})},n.prototype.signUp=function(){return e.__awaiter(this,void 0,void 0,function(){var n;return e.__generator(this,function(l){switch(l.label){case 0:return[4,this.auth.signUp((n=this.user).email,n.password,n.name)];case 1:return l.sent(),this.setAuthState(),[2]}})})},n.prototype.logIn=function(){return e.__awaiter(this,void 0,void 0,function(){var n,l,u,t;return e.__generator(this,function(e){switch(e.label){case 0:l=(n=this.user).email,u=n.password,e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this.auth.signIn(l,u)];case 2:return e.sent(),[3,4];case 3:return t=e.sent(),this.message=t.message,[3,4];case 4:return this.setAuthState(),[2]}})})},n.prototype.setAuthState=function(){this.isAuthenticated=!!this.auth.user},n.prototype.presentThemeSheet=function(){return e.__awaiter(this,void 0,void 0,function(){var n=this;return e.__generator(this,function(l){switch(l.label){case 0:return[4,this.actionSheetController.create({header:"Set theme",buttons:Object.keys(a).map(function(l){return{text:a[l],handler:function(){return n.settings.changeTheme(l)}}})})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},n}(),b=function(){return function(){}}(),c=u("pMnS"),p=u("oBZk"),g=u("gIcY"),h=u("Ip0R"),d=u("ZYCi"),f=t.nb({encapsulation:0,styles:[["h2[_ngcontent-%COMP%]{margin-bottom:50px}ion-button[_ngcontent-%COMP%]{--padding-top:20px;--padding-bottom:20px;--padding-start:40px;--padding-end:40px}"]],data:{}});function k(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function y(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,11,"ion-item",[],null,null,null,p.I,p.o)),t.ob(1,49152,null,0,r.G,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,p.J,p.p)),t.ob(3,49152,null,0,r.M,[t.h,t.k],{position:[0,"position"]},null),(n()(),t.Db(-1,0,["Name"])),(n()(),t.pb(5,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.yb(n,6)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==t.yb(n,6)._handleInputEvent(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.user.name=u)&&e),e},p.H,p.n)),t.ob(6,16384,null,0,r.Ib,[t.k],null,null),t.Ab(1024,null,g.b,function(n){return[n]},[r.Ib]),t.ob(8,671744,null,0,g.e,[[8,null],[8,null],[8,null],[6,g.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ab(2048,null,g.c,null,[g.e]),t.ob(10,16384,null,0,g.d,[[4,g.c]],null,null),t.ob(11,49152,null,0,r.F,[t.h,t.k],{type:[0,"type"]},null)],function(n,l){var u=l.component;n(l,3,0,"stacked"),n(l,8,0,u.user.name),n(l,11,0,"text")},function(n,l){n(l,5,0,t.yb(l,10).ngClassUntouched,t.yb(l,10).ngClassTouched,t.yb(l,10).ngClassPristine,t.yb(l,10).ngClassDirty,t.yb(l,10).ngClassValid,t.yb(l,10).ngClassInvalid,t.yb(l,10).ngClassPending)})}function m(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,2,"ion-button",[["class","ion-padding-vertical"],["size","large"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.signUp()&&t),t},p.v,p.b)),t.ob(1,49152,null,0,r.j,[t.h,t.k],{size:[0,"size"]},null),(n()(),t.Db(-1,0,[" Sign Up "]))],function(n,l){n(l,1,0,"large")},null)}function v(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,2,"ion-button",[["class","ion-padding-vertical"],["expand","block"],["size","large"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.logIn()&&t),t},p.v,p.b)),t.ob(1,49152,null,0,r.j,[t.h,t.k],{expand:[0,"expand"],size:[1,"size"]},null),(n()(),t.Db(-1,0,[" Log In "]))],function(n,l){n(l,1,0,"block","large")},null)}function C(n){return t.Eb(0,[(n()(),t.gb(16777216,null,null,1,null,y)),t.ob(1,16384,null,0,h.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(2,0,null,null,11,"ion-item",[],null,null,null,p.I,p.o)),t.ob(3,49152,null,0,r.G,[t.h,t.k],null,null),(n()(),t.pb(4,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,p.J,p.p)),t.ob(5,49152,null,0,r.M,[t.h,t.k],{position:[0,"position"]},null),(n()(),t.Db(-1,0,["Email"])),(n()(),t.pb(7,0,null,0,6,"ion-input",[["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.yb(n,8)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==t.yb(n,8)._handleInputEvent(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.user.email=u)&&e),e},p.H,p.n)),t.ob(8,16384,null,0,r.Ib,[t.k],null,null),t.Ab(1024,null,g.b,function(n){return[n]},[r.Ib]),t.ob(10,671744,null,0,g.e,[[8,null],[8,null],[8,null],[6,g.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ab(2048,null,g.c,null,[g.e]),t.ob(12,16384,null,0,g.d,[[4,g.c]],null,null),t.ob(13,49152,null,0,r.F,[t.h,t.k],{type:[0,"type"]},null),(n()(),t.pb(14,0,null,null,11,"ion-item",[],null,null,null,p.I,p.o)),t.ob(15,49152,null,0,r.G,[t.h,t.k],null,null),(n()(),t.pb(16,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,p.J,p.p)),t.ob(17,49152,null,0,r.M,[t.h,t.k],{position:[0,"position"]},null),(n()(),t.Db(-1,0,["Password"])),(n()(),t.pb(19,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.yb(n,20)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==t.yb(n,20)._handleInputEvent(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.user.password=u)&&e),e},p.H,p.n)),t.ob(20,16384,null,0,r.Ib,[t.k],null,null),t.Ab(1024,null,g.b,function(n){return[n]},[r.Ib]),t.ob(22,671744,null,0,g.e,[[8,null],[8,null],[8,null],[6,g.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ab(2048,null,g.c,null,[g.e]),t.ob(24,16384,null,0,g.d,[[4,g.c]],null,null),t.ob(25,49152,null,0,r.F,[t.h,t.k],{type:[0,"type"]},null),(n()(),t.pb(26,0,null,null,2,"ion-text",[["class","ion-margin"],["color","danger"]],null,null,null,p.L,p.r)),t.ob(27,49152,null,0,r.vb,[t.h,t.k],{color:[0,"color"]},null),(n()(),t.Db(28,0,["",""])),(n()(),t.gb(16777216,null,null,1,null,m)),t.ob(30,16384,null,0,h.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,v)),t.ob(32,16384,null,0,h.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(0,null,null,0))],function(n,l){var u=l.component;n(l,1,0,u.isSignUp),n(l,5,0,"stacked"),n(l,10,0,u.user.email),n(l,13,0,"email"),n(l,17,0,"stacked"),n(l,22,0,u.user.password),n(l,25,0,"password"),n(l,27,0,"danger"),n(l,30,0,u.isSignUp),n(l,32,0,!u.isSignUp)},function(n,l){var u=l.component;n(l,7,0,t.yb(l,12).ngClassUntouched,t.yb(l,12).ngClassTouched,t.yb(l,12).ngClassPristine,t.yb(l,12).ngClassDirty,t.yb(l,12).ngClassValid,t.yb(l,12).ngClassInvalid,t.yb(l,12).ngClassPending),n(l,19,0,t.yb(l,24).ngClassUntouched,t.yb(l,24).ngClassTouched,t.yb(l,24).ngClassPristine,t.yb(l,24).ngClassDirty,t.yb(l,24).ngClassValid,t.yb(l,24).ngClassInvalid,t.yb(l,24).ngClassPending),n(l,28,0,u.message)})}function w(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.logOut()&&t),t},p.v,p.b)),t.ob(1,49152,null,0,r.j,[t.h,t.k],{expand:[0,"expand"]},null),(n()(),t.Db(-1,0,[" Log Out "]))],function(n,l){n(l,1,0,"block")},null)}function I(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,13,"ion-toolbar",[],null,null,null,p.N,p.t)),t.ob(1,49152,null,0,r.Ab,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,8,"ion-buttons",[["slot","start"]],null,null,null,p.w,p.c)),t.ob(3,49152,null,0,r.k,[t.h,t.k],null,null),(n()(),t.pb(4,0,null,0,6,"ion-button",[["color","primary"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.yb(n,6).onClick()&&e),"click"===l&&(e=!1!==t.yb(n,8).onClick(u)&&e),e},p.v,p.b)),t.ob(5,49152,null,0,r.j,[t.h,t.k],{color:[0,"color"]},null),t.ob(6,16384,null,0,d.n,[d.m,d.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.zb(7,1),t.ob(8,737280,null,0,r.Hb,[h.g,r.Fb,t.k,d.m,[2,d.n]],null,null),(n()(),t.pb(9,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","icon-only"]],null,null,null,p.G,p.m)),t.ob(10,49152,null,0,r.B,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.pb(11,0,null,0,2,"ion-title",[["color","primary"]],null,null,null,p.M,p.s)),t.ob(12,49152,null,0,r.yb,[t.h,t.k],{color:[0,"color"]},null),(n()(),t.Db(-1,0,["Auth Page"])),(n()(),t.pb(14,0,null,null,16,"ion-content",[],null,null,null,p.D,p.j)),t.ob(15,49152,null,0,r.t,[t.h,t.k],null,null),(n()(),t.pb(16,0,null,0,3,"ion-text",[["class","ion-padding-vertical text"],["color","primary"]],null,null,null,p.L,p.r)),t.ob(17,49152,null,0,r.vb,[t.h,t.k],{color:[0,"color"]},null),(n()(),t.pb(18,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),t.Db(-1,null,["Welcome to Notes. Pen things down by subjects"])),(n()(),t.gb(16777216,null,0,1,null,k)),t.ob(21,16384,null,0,h.i,[t.O,t.L],{ngIf:[0,"ngIf"],ngIfThen:[1,"ngIfThen"],ngIfElse:[2,"ngIfElse"]},null),(n()(),t.gb(0,[["notAuthenticated",2]],0,0,null,C)),(n()(),t.gb(0,[["authenticated",2]],0,0,null,w)),(n()(),t.pb(24,0,null,0,3,"div",[],null,null,null,null,null)),(n()(),t.pb(25,0,null,null,2,"ion-button",[["fill","clear"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.changeAuthType()&&t),t},p.v,p.b)),t.ob(26,49152,null,0,r.j,[t.h,t.k],{fill:[0,"fill"]},null),(n()(),t.Db(27,0,[" "," "])),(n()(),t.pb(28,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.presentThemeSheet()&&t),t},p.v,p.b)),t.ob(29,49152,null,0,r.j,[t.h,t.k],{expand:[0,"expand"]},null),(n()(),t.Db(-1,0,[" Set Theme "]))],function(n,l){var u=l.component;n(l,5,0,"primary");var e=n(l,7,0,"/");n(l,6,0,e),n(l,8,0),n(l,10,0,"arrow-back"),n(l,12,0,"primary"),n(l,17,0,"primary"),n(l,21,0,u.isAuthenticated,t.yb(l,23),t.yb(l,22)),n(l,26,0,"clear"),n(l,29,0,"block")},function(n,l){n(l,27,0,l.component.isSignUp?"Sign In instead":"Sign Up instead")})}function _(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,1,"app-auth",[],null,null,null,I,f)),t.ob(1,49152,null,0,s,[o.a,i.a,r.a],null,null)],null,null)}var S=t.lb("app-auth",s,_,{},{},[]);u.d(l,"AuthPageModuleNgFactory",function(){return A});var A=t.mb(b,[],function(n){return t.vb([t.wb(512,t.j,t.bb,[[8,[c.a,S]],[3,t.j],t.x]),t.wb(4608,h.k,h.j,[t.u,[2,h.r]]),t.wb(4608,g.g,g.g,[]),t.wb(4608,r.c,r.c,[t.z,t.g]),t.wb(4608,r.Eb,r.Eb,[r.c,t.j,t.q,h.c]),t.wb(4608,r.Gb,r.Gb,[r.c,t.j,t.q,h.c]),t.wb(1073742336,h.b,h.b,[]),t.wb(1073742336,g.f,g.f,[]),t.wb(1073742336,g.a,g.a,[]),t.wb(1073742336,r.Cb,r.Cb,[]),t.wb(1073742336,d.o,d.o,[[2,d.u],[2,d.m]]),t.wb(1073742336,b,b,[]),t.wb(1024,d.k,function(){return[[{path:"",component:s}]]},[])])})}}]);