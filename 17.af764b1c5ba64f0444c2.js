(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"sW7/":function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=function(){return function(){}}(),i=u("pMnS"),e=u("oBZk"),r=u("ZZ/e"),c=u("ZYCi"),b=u("Ip0R"),a=u("mrSG"),p=u("ezX+"),s=u("sP8P"),g=function(){function n(n,l,u){this.notesService=n,this.subjectService=l,this.route=u,this.loading=!0}return n.prototype.ngOnInit=function(){return a.__awaiter(this,void 0,void 0,function(){var n;return a.__generator(this,function(l){return this.loading=!0,n=this.route.snapshot.paramMap.get("id"),this.getNote(n),this.getSubject(n),[2]})})},n.prototype.getNote=function(n){var l=this;this.notesService.getSubjectNotes(n).subscribe(function(n){l.loading=!1,l.notes=n})},n.prototype.getSubject=function(n){var l=this;this.subjectService.getSubject(n).subscribe(function(n){l.subject=n})},n}(),k=t.nb({encapsulation:0,styles:[["ion-card.note[_ngcontent-%COMP%]{border-radius:12px;background-color:var(--subject-background-color);box-shadow:1px 1px 7px 0 rgba(153,153,153,.2);margin-bottom:20px}ion-card.note[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:5px 0}ion-card.note[_ngcontent-%COMP%]:hover{box-shadow:1px 1px 10px 0 rgba(153,153,153,.5)}ion-card.note[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-weight:800}ion-card.note[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{max-height:100px}.empty[_ngcontent-%COMP%]{margin:auto;height:75vh;display:flex;justify-content:center;align-items:center;align-content:center;flex-wrap:wrap}.empty[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{text-align:center;width:150%}.empty[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20vw}"]],data:{}});function h(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,1,"ion-progress-bar",[["type","indeterminate"]],null,null,null,e.K,e.q)),t.ob(1,49152,null,0,r.V,[t.h,t.k],{type:[0,"type"]},null)],function(n,l){n(l,1,0,"indeterminate")},null)}function m(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,6,"div",[["class","empty"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"ion-icon",[["color","primary"],["name","book"]],null,null,null,e.G,e.m)),t.ob(2,49152,null,0,r.z,[t.h,t.k],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.pb(3,0,null,null,3,"ion-text",[["color","primary"]],null,null,null,e.L,e.r)),t.ob(4,49152,null,0,r.tb,[t.h,t.k],{color:[0,"color"]},null),(n()(),t.pb(5,0,null,0,1,"h4",[],null,null,null,null,null)),(n()(),t.Db(-1,null,["No notes in this subject"]))],function(n,l){n(l,2,0,"primary","book"),n(l,4,0,"primary")},null)}function f(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,2,"ion-card-subtitle",[],null,null,null,e.z,e.g)),t.ob(1,49152,null,0,r.m,[t.h,t.k],null,null),(n()(),t.Db(2,0,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.subject.title)})}function d(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,14,"ion-card",[["class","ion-margin-vertical note"]],null,[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==t.yb(n,2).onClick()&&o),"click"===l&&(o=!1!==t.yb(n,4).onClick(u)&&o),o},e.B,e.d)),t.ob(1,49152,null,0,r.j,[t.h,t.k],null,null),t.ob(2,16384,null,0,c.n,[c.m,c.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.zb(3,1),t.ob(4,737280,null,0,r.Gb,[b.g,r.Db,t.k,c.m,[2,c.n]],null,null),(n()(),t.pb(5,0,null,0,7,"ion-card-header",[],null,null,null,e.y,e.f)),t.ob(6,49152,null,0,r.l,[t.h,t.k],null,null),(n()(),t.gb(16777216,null,0,1,null,f)),t.ob(8,16384,null,0,b.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(9,0,null,0,3,"ion-card-title",[["color","primary"]],null,null,null,e.A,e.h)),t.ob(10,49152,null,0,r.n,[t.h,t.k],{color:[0,"color"]},null),(n()(),t.pb(11,0,null,0,1,"h1",[],null,null,null,null,null)),(n()(),t.Db(12,null,["",""])),(n()(),t.pb(13,0,null,0,1,"ion-card-content",[],[[8,"innerHTML",1]],null,null,e.x,e.e)),t.ob(14,49152,null,0,r.k,[t.h,t.k],null,null)],function(n,l){var u=n(l,3,0,"/note/"+l.context.$implicit.id);n(l,2,0,u),n(l,4,0),n(l,8,0,!!l.context.$implicit.subject),n(l,10,0,"primary")},function(n,l){n(l,12,0,l.context.$implicit.title),n(l,13,0,l.context.$implicit.content)})}function y(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,13,"ion-toolbar",[],null,null,null,e.N,e.t)),t.ob(1,49152,null,0,r.yb,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,8,"ion-buttons",[["slot","start"]],null,null,null,e.w,e.c)),t.ob(3,49152,null,0,r.i,[t.h,t.k],null,null),(n()(),t.pb(4,0,null,0,6,"ion-button",[["color","primary"]],null,[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==t.yb(n,6).onClick()&&o),"click"===l&&(o=!1!==t.yb(n,8).onClick(u)&&o),o},e.v,e.b)),t.ob(5,49152,null,0,r.h,[t.h,t.k],{color:[0,"color"]},null),t.ob(6,16384,null,0,c.n,[c.m,c.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.zb(7,1),t.ob(8,737280,null,0,r.Gb,[b.g,r.Db,t.k,c.m,[2,c.n]],null,null),(n()(),t.pb(9,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","icon-only"]],null,null,null,e.G,e.m)),t.ob(10,49152,null,0,r.z,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.pb(11,0,null,0,2,"ion-title",[["color","primary"]],null,null,null,e.M,e.s)),t.ob(12,49152,null,0,r.wb,[t.h,t.k],{color:[0,"color"]},null),(n()(),t.Db(13,0,[" "," "])),(n()(),t.gb(16777216,null,null,1,null,h)),t.ob(15,16384,null,0,b.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(16,0,null,null,14,"ion-content",[],null,null,null,e.D,e.j)),t.ob(17,49152,null,0,r.r,[t.h,t.k],null,null),(n()(),t.gb(16777216,null,0,1,null,m)),t.ob(19,16384,null,0,b.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,0,1,null,d)),t.ob(21,278528,null,0,b.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.pb(22,0,null,0,8,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,e.F,e.k)),t.ob(23,49152,null,0,r.t,[t.h,t.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),t.pb(24,0,null,0,6,"ion-fab-button",[["translucent",""]],null,[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==t.yb(n,26).onClick()&&o),"click"===l&&(o=!1!==t.yb(n,28).onClick(u)&&o),o},e.E,e.l)),t.ob(25,49152,null,0,r.u,[t.h,t.k],{translucent:[0,"translucent"]},null),t.ob(26,16384,null,0,c.n,[c.m,c.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.zb(27,1),t.ob(28,737280,null,0,r.Gb,[b.g,r.Db,t.k,c.m,[2,c.n]],null,null),(n()(),t.pb(29,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,e.G,e.m)),t.ob(30,49152,null,0,r.z,[t.h,t.k],{name:[0,"name"]},null)],function(n,l){var u=l.component;n(l,5,0,"primary");var t=n(l,7,0,"/");n(l,6,0,t),n(l,8,0),n(l,10,0,"arrow-back"),n(l,12,0,"primary"),n(l,15,0,u.loading),n(l,19,0,0==(null==u.notes?null:u.notes.length)),n(l,21,0,u.notes),n(l,23,0,"end","bottom"),n(l,25,0,"");var o=n(l,27,0,"/note/"+u.subjectId+"/new");n(l,26,0,o),n(l,28,0),n(l,30,0,"add")},function(n,l){var u=l.component;n(l,13,0,null==u.subject?null:u.subject.title)})}function w(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,1,"app-note-list",[],null,null,null,y,k)),t.ob(1,114688,null,0,g,[p.a,s.a,c.a],null,null)],function(n,l){n(l,1,0)},null)}var v=t.lb("app-note-list",g,w,{},{},[]),x=u("gIcY");u.d(l,"NoteListPageModuleNgFactory",function(){return C});var C=t.mb(o,[],function(n){return t.vb([t.wb(512,t.j,t.bb,[[8,[i.a,v]],[3,t.j],t.x]),t.wb(4608,b.k,b.j,[t.u,[2,b.q]]),t.wb(4608,x.g,x.g,[]),t.wb(4608,r.a,r.a,[t.z,t.g]),t.wb(4608,r.Cb,r.Cb,[r.a,t.j,t.q,b.c]),t.wb(4608,r.Fb,r.Fb,[r.a,t.j,t.q,b.c]),t.wb(1073742336,b.b,b.b,[]),t.wb(1073742336,x.f,x.f,[]),t.wb(1073742336,x.a,x.a,[]),t.wb(1073742336,r.Ab,r.Ab,[]),t.wb(1073742336,c.o,c.o,[[2,c.u],[2,c.m]]),t.wb(1073742336,o,o,[]),t.wb(1024,c.k,function(){return[[{path:"",component:g}]]},[])])})}}]);