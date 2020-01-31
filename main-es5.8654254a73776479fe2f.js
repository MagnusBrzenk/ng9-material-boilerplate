function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,e,n){t.exports=n("jbcS")},jbcS:function(t,e,n){"use strict";n.r(e),n("yLV6");var a,r,o,i=n("fXoL"),s=n("jhN1"),c=n("tyNb"),b=function(t){return t.SetSiteSettings="[SiteSettings] Set SiteSettings",t.SetSiteTheme="[SiteSettings] Set SiteTheme",t.SetIsPageAnimated="[SiteSettings] Set IsPageAnimated",t.LoadSiteSettingsFromLocalStorage="[SiteSettings] Load SiteSettings From LocalStorage",t}({}),l=function t(e){_classCallCheck(this,t),this.siteSettings=e,this.type=b.SetSiteSettings},u=function t(e){_classCallCheck(this,t),this.theme=e,this.type=b.SetSiteTheme},p=function t(){_classCallCheck(this,t),this.type=b.LoadSiteSettingsFromLocalStorage},d=n("kt0X"),f=((r=function(){function t(e){var n=this;_classCallCheck(this,t),this.store=e,this.store.select((function(t){return t.siteSettingsSubstate})).subscribe((function(t){return n.settings=JSON.stringify(t)}))}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onSubmitLight",value:function(){this.store.dispatch(new u("LIGHT-THEME"))}},{key:"onSubmitDark",value:function(){this.store.dispatch(new u("DARK-THEME"))}}]),t}()).\u0275fac=function(t){return new(t||r)(i.Mb(d.h))},r.\u0275cmp=i.Gb({type:r,selectors:[["app-home-page"]],decls:8,vars:1,consts:[[3,"click"]],template:function(t,e){1&t&&(i.Sb(0,"p"),i.rc(1,"home-page works!!"),i.Qb(),i.Sb(2,"div"),i.rc(3),i.Sb(4,"button",0),i.ac("click",(function(t){return e.onSubmitLight()})),i.rc(5,"Light"),i.Qb(),i.Sb(6,"button",0),i.ac("click",(function(t){return e.onSubmitDark()})),i.rc(7,"Dark"),i.Qb(),i.Qb()),2&t&&(i.zb(3),i.tc(" ",e.settings," "))},styles:[".xxx[_ngcontent-%COMP%]{display:block;background-color:green;height:100%}"]}),r),g=((a=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=i.Gb({type:a,selectors:[["app-about-page"]],decls:120,vars:0,template:function(t,e){1&t&&(i.Sb(0,"p"),i.rc(1,"about-page works!"),i.Qb(),i.Sb(2,"p"),i.rc(3,"about-page works!"),i.Qb(),i.Sb(4,"p"),i.rc(5,"about-page works!"),i.Qb(),i.Sb(6,"p"),i.rc(7,"about-page works!"),i.Qb(),i.Sb(8,"p"),i.rc(9,"about-page works!"),i.Qb(),i.Sb(10,"p"),i.rc(11,"about-page works!"),i.Qb(),i.Sb(12,"p"),i.rc(13,"about-page works!"),i.Qb(),i.Sb(14,"p"),i.rc(15,"about-page works!"),i.Qb(),i.Sb(16,"p"),i.rc(17,"about-page works!"),i.Qb(),i.Sb(18,"p"),i.rc(19,"about-page works!"),i.Qb(),i.Sb(20,"p"),i.rc(21,"about-page works!"),i.Qb(),i.Sb(22,"p"),i.rc(23,"about-page works!"),i.Qb(),i.Sb(24,"p"),i.rc(25,"about-page works!"),i.Qb(),i.Sb(26,"p"),i.rc(27,"about-page works!"),i.Qb(),i.Sb(28,"p"),i.rc(29,"about-page works!"),i.Qb(),i.Sb(30,"p"),i.rc(31,"about-page works!"),i.Qb(),i.Sb(32,"p"),i.rc(33,"about-page works!"),i.Qb(),i.Sb(34,"p"),i.rc(35,"about-page works!"),i.Qb(),i.Sb(36,"p"),i.rc(37,"about-page works!"),i.Qb(),i.Sb(38,"p"),i.rc(39,"about-page works!"),i.Qb(),i.Sb(40,"p"),i.rc(41,"about-page works!"),i.Qb(),i.Sb(42,"p"),i.rc(43,"about-page works!"),i.Qb(),i.Sb(44,"p"),i.rc(45,"about-page works!"),i.Qb(),i.Sb(46,"p"),i.rc(47,"about-page works!"),i.Qb(),i.Sb(48,"p"),i.rc(49,"about-page works!"),i.Qb(),i.Sb(50,"p"),i.rc(51,"about-page works!"),i.Qb(),i.Sb(52,"p"),i.rc(53,"about-page works!"),i.Qb(),i.Sb(54,"p"),i.rc(55,"about-page works!"),i.Qb(),i.Sb(56,"p"),i.rc(57,"about-page works!"),i.Qb(),i.Sb(58,"p"),i.rc(59,"about-page works!"),i.Qb(),i.Sb(60,"p"),i.rc(61,"about-page works!"),i.Qb(),i.Sb(62,"p"),i.rc(63,"about-page works!"),i.Qb(),i.Sb(64,"p"),i.rc(65,"about-page works!"),i.Qb(),i.Sb(66,"p"),i.rc(67,"about-page works!"),i.Qb(),i.Sb(68,"p"),i.rc(69,"about-page works!"),i.Qb(),i.Sb(70,"p"),i.rc(71,"about-page works!"),i.Qb(),i.Sb(72,"p"),i.rc(73,"about-page works!"),i.Qb(),i.Sb(74,"p"),i.rc(75,"about-page works!"),i.Qb(),i.Sb(76,"p"),i.rc(77,"about-page works!"),i.Qb(),i.Sb(78,"p"),i.rc(79,"about-page works!"),i.Qb(),i.Sb(80,"p"),i.rc(81,"about-page works!"),i.Qb(),i.Sb(82,"p"),i.rc(83,"about-page works!"),i.Qb(),i.Sb(84,"p"),i.rc(85,"about-page works!"),i.Qb(),i.Sb(86,"p"),i.rc(87,"about-page works!"),i.Qb(),i.Sb(88,"p"),i.rc(89,"about-page works!"),i.Qb(),i.Sb(90,"p"),i.rc(91,"about-page works!"),i.Qb(),i.Sb(92,"p"),i.rc(93,"about-page works!"),i.Qb(),i.Sb(94,"p"),i.rc(95,"about-page works!"),i.Qb(),i.Sb(96,"p"),i.rc(97,"about-page works!"),i.Qb(),i.Sb(98,"p"),i.rc(99,"about-page works!"),i.Qb(),i.Sb(100,"p"),i.rc(101,"about-page works!"),i.Qb(),i.Sb(102,"p"),i.rc(103,"about-page works!"),i.Qb(),i.Sb(104,"p"),i.rc(105,"about-page works!"),i.Qb(),i.Sb(106,"p"),i.rc(107,"about-page works!"),i.Qb(),i.Sb(108,"p"),i.rc(109,"about-page works!"),i.Qb(),i.Sb(110,"p"),i.rc(111,"about-page works!"),i.Qb(),i.Sb(112,"p"),i.rc(113,"about-page works!"),i.Qb(),i.Sb(114,"p"),i.rc(115,"about-page works!"),i.Qb(),i.Sb(116,"p"),i.rc(117,"about-page works!"),i.Qb(),i.Sb(118,"p"),i.rc(119,"about-page works!"),i.Qb())},styles:[""]}),a),m=n("3Pt+"),h=n("tk/3"),S=((o=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"sendEmail",value:function(t,e,n){return this.http.post("https://p6i5pjflbe.execute-api.us-east-1.amazonaws.com/prod/contact/",{name:t,email:e,message:n})}}]),t}()).\u0275fac=function(t){return new(t||o)(i.Wb(h.b))},o.\u0275prov=i.Ib({token:o,factory:o.\u0275fac,providedIn:"root"}),o),v=n("ofXK"),k=n("MSSf"),w=n("IRfi"),C=n("A2Vd"),y=n("Xlwt"),Q=n("3aqf");function O(t,e){1&t&&(i.Sb(0,"mat-error"),i.rc(1," Name is required "),i.Qb())}function _(t,e){1&t&&(i.Sb(0,"mat-error"),i.rc(1," Email is required "),i.Qb())}function x(t,e){1&t&&(i.Sb(0,"mat-error"),i.rc(1," Email should be valid "),i.Qb())}function M(t,e){1&t&&(i.Sb(0,"mat-error"),i.rc(1," Message is required "),i.Qb())}function E(t,e){1&t&&(i.Sb(0,"mat-error"),i.rc(1," Message must be longer than 10 characters "),i.Qb())}function P(t,e){1&t&&(i.Sb(0,"mat-error"),i.rc(1," Message must be less than 1000 characters "),i.Qb())}var T,j,I,L,U=((j=function(){function t(e,n){_classCallCheck(this,t),this.fb=e,this.emailer=n,this.routeAnimationsElements="",this.form=this.fb.group({username:["",[m.n.required]],email:["",[m.n.required,m.n.email]],message:["",[m.n.required,m.n.minLength(10),m.n.maxLength(1e3)]]})}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"submit",value:function(){this.form.valid&&this.emailer.sendEmail(this.form.get("username").value,this.form.get("email").value,this.form.get("message").value).subscribe((function(t){console.log("Response:",t)}))}},{key:"reset",value:function(){this.form.reset(),this.form.clearValidators(),this.form.clearAsyncValidators()}},{key:"isFormSubmittable",value:function(){return!(!this.form.get("username")||!this.form.get("email")||!this.form.get("message")||this.form.get("message").hasError("required")||this.form.get("message").hasError("minlength")||this.form.get("message").hasError("maxlength")||this.form.get("email").hasError("required")||this.form.get("username").hasError("required"))}}]),t}()).\u0275fac=function(t){return new(t||j)(i.Mb(m.b),i.Mb(S))},j.\u0275cmp=i.Gb({type:j,selectors:[["app-contact"]],decls:30,vars:14,consts:[[1,"contact-page-wrapper",3,"ngClass"],[1,"container"],[1,"row"],[1,"col"],[1,"main-heading"],[3,"formGroup","ngSubmit"],[1,"row","justify-content-center"],[1,"col-md-8"],[1,"mat-card-theme-override"],[1,"col",3,"ngClass"],["matInput","","placeholder","Name","formControlName","username"],[4,"ngIf"],["matInput","","placeholder","Email","formControlName","email","type","email"],["matInput","","placeholder","Message","formControlName","message","minlength","10","maxlength","1000","cdkTextareaAutosize","","cdkAutosizeMinRows","10","cdkAutosizeMaxRows","10"],["autosize","cdkTextareaAutosize"],["align","end"],[1,"row","buttons","d-flex","justify-content-end","pad"],["mat-raised-button","","color","primary",3,"ngClass","disabled"]],template:function(t,e){if(1&t&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"div",2),i.Sb(3,"div",3),i.Sb(4,"h1",4),i.rc(5," Contact "),i.Qb(),i.Qb(),i.Qb(),i.Sb(6,"form",5),i.ac("ngSubmit",(function(t){return e.submit()})),i.Sb(7,"div",6),i.Sb(8,"div",7),i.Sb(9,"mat-card",8),i.Sb(10,"div",2),i.Sb(11,"mat-form-field",9),i.Nb(12,"input",10),i.qc(13,O,2,0,"mat-error",11),i.Qb(),i.Sb(14,"mat-form-field",9),i.Nb(15,"input",12),i.qc(16,_,2,0,"mat-error",11),i.qc(17,x,2,0,"mat-error",11),i.Qb(),i.Qb(),i.Sb(18,"div",2),i.Sb(19,"mat-form-field",9),i.Nb(20,"textarea",13,14),i.Sb(22,"mat-hint",15),i.rc(23),i.Qb(),i.qc(24,M,2,0,"mat-error",11),i.qc(25,E,2,0,"mat-error",11),i.qc(26,P,2,0,"mat-error",11),i.Qb(),i.Qb(),i.Sb(27,"div",16),i.Sb(28,"button",17),i.rc(29," Send "),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&t){var n,a,r=null==(n=e.form.get("username"))?null:n.invalid,o=null,s=null==(o=e.form.get("email"))?null:o.hasError("required"),c=null,b=null==(c=e.form.get("email"))?null:c.hasError("email"),l=null,u=null==(l=e.form.get("message"))?null:l.hasError("required"),p=null,d=null==(p=e.form.get("message"))?null:p.hasError("minlength"),f=null,g=null==(f=e.form.get("message"))?null:f.hasError("maxlength");i.fc("ngClass",e.routeAnimationsElements),i.zb(6),i.fc("formGroup",e.form),i.zb(5),i.fc("ngClass",e.routeAnimationsElements),i.zb(2),i.fc("ngIf",r),i.zb(1),i.fc("ngClass",e.routeAnimationsElements),i.zb(2),i.fc("ngIf",s),i.zb(1),i.fc("ngIf",b),i.zb(2),i.fc("ngClass",e.routeAnimationsElements),i.zb(4),i.tc(" ",null==(a=e.form.get("message"))?null:null==a.value?null:a.value.length," / 1000 "),i.zb(1),i.fc("ngIf",u),i.zb(1),i.fc("ngIf",d),i.zb(1),i.fc("ngIf",g),i.zb(2),i.fc("ngClass",e.routeAnimationsElements)("disabled",!e.isFormSubmittable())}},directives:[v.h,m.o,m.k,m.d,k.a,w.b,C.a,m.a,m.j,m.c,v.j,Q.b,m.g,m.f,w.e,y.a,w.a],styles:["h1[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:25px;text-transform:uppercase;text-align:center}h2[_ngcontent-%COMP%]{margin:auto}.contact-page-wrapper[_ngcontent-%COMP%]{height:100%;width:100%;position:relative;box-sizing:border-box;z-index:0;text-align:center}mat-card[_ngcontent-%COMP%]{margin-bottom:20px}mat-checkbox[_ngcontent-%COMP%]{margin:10px 0 20px}mat-slider[_ngcontent-%COMP%]{width:100%}.buttons[_ngcontent-%COMP%]{margin:20px 0}"],changeDetection:0}),j),A=((T=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||T)},T.\u0275cmp=i.Gb({type:T,selectors:[["app-settings-page"]],decls:2,vars:0,template:function(t,e){1&t&&(i.Sb(0,"p"),i.rc(1,"settings-page works!"),i.Qb())},styles:[""]}),T),z=n("wHSu"),N=n("6NWb"),R=((L=function(){function t(){_classCallCheck(this,t),this.faCheckSquare=z.b,this.faSpinner=z.d,this.faSquare=z.e}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||L)},L.\u0275cmp=i.Gb({type:L,selectors:[["app-test-page"]],decls:15,vars:9,consts:[[3,"icon","fixedWidth"],[3,"icon","spin","fixedWidth"]],template:function(t,e){1&t&&(i.Sb(0,"h1"),i.rc(1,"This is the main content"),i.Qb(),i.Sb(2,"ul"),i.Sb(3,"li"),i.Nb(4,"fa-icon",0),i.rc(5," List icons can"),i.Qb(),i.Sb(6,"li"),i.Nb(7,"fa-icon",0),i.rc(8," be used to"),i.Qb(),i.Sb(9,"li"),i.Nb(10,"fa-icon",1),i.rc(11," replace bullets"),i.Qb(),i.Sb(12,"li"),i.Nb(13,"fa-icon",0),i.rc(14," in lists"),i.Qb(),i.Qb()),2&t&&(i.zb(4),i.fc("icon",e.faCheckSquare)("fixedWidth",!0),i.zb(3),i.fc("icon",e.faCheckSquare)("fixedWidth",!0),i.zb(3),i.fc("icon",e.faSpinner)("spin",!0)("fixedWidth",!0),i.zb(3),i.fc("icon",e.faSquare)("fixedWidth",!0))},directives:[N.a],styles:[""]}),L),q=((I=function(){function t(e){_classCallCheck(this,t),this.http=e,this.apiUrl="https://jsonplaceholder.typicode.com"}return _createClass(t,[{key:"getUsers",value:function(t){return this.http.get("".concat(this.apiUrl,"/users/").concat(t||""))}}]),t}()).\u0275fac=function(t){return new(t||I)(i.Wb(h.b))},I.\u0275prov=i.Ib({token:I,factory:I.\u0275fac,providedIn:"root"}),I);function W(t,e){if(1&t&&(i.Sb(0,"mat-card",5),i.Sb(1,"mat-card-header"),i.Nb(2,"div",6),i.Sb(3,"mat-card-title"),i.rc(4),i.Qb(),i.Sb(5,"mat-card-subtitle"),i.rc(6),i.Qb(),i.Qb(),i.Sb(7,"mat-card-actions"),i.Sb(8,"button",7),i.rc(9,"LIKE"),i.Qb(),i.Sb(10,"button",7),i.rc(11,"SHARE"),i.Qb(),i.Qb(),i.Qb()),2&t){var n=i.cc(2).index,a=i.cc();i.zb(4),i.tc(" ",a.users[n+1].name,""),i.zb(2),i.sc(a.users[n+1].username)}}function F(t,e){if(1&t&&(i.Sb(0,"span"),i.Sb(1,"div",3),i.Sb(2,"div",4),i.Sb(3,"mat-card",5),i.Sb(4,"mat-card-header"),i.Nb(5,"div",6),i.Sb(6,"mat-card-title"),i.rc(7),i.Qb(),i.Sb(8,"mat-card-subtitle"),i.rc(9),i.Qb(),i.Qb(),i.Sb(10,"mat-card-actions"),i.Sb(11,"button",7),i.rc(12,"LIKE"),i.Qb(),i.Sb(13,"button",7),i.rc(14,"SHARE"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Sb(15,"div",4),i.qc(16,W,12,2,"mat-card",8),i.Qb(),i.Qb(),i.Qb()),2&t){var n=i.cc().index,a=i.cc();i.zb(7),i.tc(" ",a.users[n].name," "),i.zb(2),i.sc(a.users[n].username),i.zb(7),i.fc("ngIf",!!a.users[n+1])}}function G(t,e){if(1&t&&(i.Sb(0,"div"),i.qc(1,F,17,3,"span",2),i.Qb()),2&t){var n=e.index;i.zb(1),i.fc("ngIf",n%2==0)}}var D,H=((D=function(){function t(e,n){_classCallCheck(this,t),this.testData=e,this.route=n}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this,e=this.route.snapshot.paramMap.get("id");this.testData.getUsers(e||"").subscribe((function(e){t.users=Array.isArray(e)?e:[e]}))}}]),t}()).\u0275fac=function(t){return new(t||D)(i.Mb(q),i.Mb(c.a))},D.\u0275cmp=i.Gb({type:D,selectors:[["app-test-users-page"]],decls:6,vars:1,consts:[[1,"container"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"row","grid-row"],[1,"col-sm-6"],[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],["mat-button",""],["class","example-card",4,"ngIf"]],template:function(t,e){1&t&&(i.Sb(0,"div",0),i.Sb(1,"h1"),i.rc(2,"Users Grid"),i.Qb(),i.Sb(3,"h3"),i.rc(4,"Using Bootstrap Responsive Grid"),i.Qb(),i.qc(5,G,2,1,"div",1),i.Qb()),2&t&&(i.zb(5),i.fc("ngForOf",e.users))},directives:[v.i,v.j,k.a,k.d,k.c,k.g,k.f,k.b,y.a],styles:["[_nghost-%COMP%]{display:block;overflow:scroll}.example-card[_ngcontent-%COMP%]{max-width:400px}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}mat-card-header[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}"]}),D),$=0,J=function t(e){_classCallCheck(this,t),this.id=(e.id||"uuid-"+ ++$)+"",this.name=e.name||"<NAME>",this.username=e.username||"<USERNAME>",this.email=e.email||"<EMAIL>",this.address=e.address||void 0,this.phone=e.phone||void 0,this.website=e.website||void 0,this.company=e.company||void 0},K=function(t){return t.AddTestUser="[TestUser] Add UserEntities",t.RemoveTestUser="[TestUser] Remove UserEntities",t.LoadTestUsers="[TestUser] Load UserEntities",t.TestUsersLoaded="[TestUser] TestUsers Loaded",t.TestUsersLoadFailed="[TestUser] TestUsers Load Failed",t}({}),B=function t(e){_classCallCheck(this,t),this.testUser=e,this.type=K.AddTestUser},X=function t(){_classCallCheck(this,t),this.type=K.LoadTestUsers},V=function t(e){_classCallCheck(this,t),this.users=e,this.type=K.TestUsersLoaded},Y=function t(e){_classCallCheck(this,t),this.error=e,this.type=K.TestUsersLoadFailed},Z=Object(d.o)((function(t){return t.testUserSubstate}),(function(t){return t.testUsers})),tt=Object(d.o)((function(t){return t.testUserSubstate}),(function(t){return t.testUsers.filter((function(t,e){return e%2!=0}))}));function et(t,e){if(1&t&&(i.Sb(0,"div"),i.Sb(1,"div",8),i.rc(2),i.Qb(),i.Qb()),2&t){var n=e.$implicit;i.zb(2),i.tc(" ",n.username+" "+n.id," ")}}function nt(t,e){if(1&t&&(i.Sb(0,"div"),i.Sb(1,"div",9),i.rc(2),i.Qb(),i.Qb()),2&t){var n=e.$implicit;i.zb(2),i.tc(" ",n.username+" "+n.id," ")}}var at,rt,ot,it,st,ct,bt,lt,ut,pt,dt,ft=[{path:"",component:f,pathMatch:"full"},{path:"about",component:g,pathMatch:"full"},{path:"contact",component:U,pathMatch:"full"},{path:"settings",component:A,pathMatch:"full"},{path:"test",component:R,pathMatch:"full"},{path:"test-users",component:H,pathMatch:"full"},{path:"test-more-users",component:(at=function(){function t(e){var n=this;_classCallCheck(this,t),this.store=e,e.select(Z).subscribe((function(t){return n.users=t})),e.select(tt).subscribe((function(t){return n.everyOtherUser=t}))}return _createClass(t,[{key:"addUser",value:function(t){this.store.dispatch(new B(new J({username:t})))}},{key:"ngOnInit",value:function(){this.store.dispatch(new X)}}]),t}(),at.\u0275fac=function(t){return new(t||at)(i.Mb(d.h))},at.\u0275cmp=i.Gb({type:at,selectors:[["app-test-more-users"]],decls:13,vars:2,consts:[[1,"container-fluid"],[1,"well"],["type","text","placeholder","Username",1,"form-control"],["username",""],[1,"btn","btn-primary",3,"click"],[2,"display","inline-block","background","green","width","30%"],[4,"ngFor","ngForOf"],[2,"display","inline-block","background","red","width","30%"],[2,"display","block","background","rgba(0,0,0,0.2)"],[2,"display","block","background","rgba(255,0,0,0.2)"]],template:function(t,e){if(1&t){var n=i.Tb();i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"h2"),i.rc(3,"Enter a user name:"),i.Qb(),i.Nb(4,"input",2,3),i.Nb(6,"br"),i.Sb(7,"button",4),i.ac("click",(function(t){i.ic(n);var a=i.hc(5);return e.addUser(a.value)})),i.rc(8," Add User "),i.Qb(),i.Qb(),i.Sb(9,"div",5),i.qc(10,et,3,1,"div",6),i.Qb(),i.Sb(11,"div",7),i.qc(12,nt,3,1,"div",6),i.Qb(),i.Qb()}2&t&&(i.zb(10),i.fc("ngForOf",e.users),i.zb(2),i.fc("ngForOf",e.everyOtherUser))},directives:[v.i],styles:[""]}),at),pathMatch:"full"},{path:"test-users/:id",component:H},{path:"**",redirectTo:""}],gt=((rt=function t(){_classCallCheck(this,t)}).\u0275mod=i.Kb({type:rt}),rt.\u0275inj=i.Jb({factory:function(t){return new(t||rt)},imports:[[c.h.forRoot(ft)],c.h]}),rt),mt=["DARK-THEME","LIGHT-THEME"],ht=n("OCB9"),St=((ot=function(){function t(e){_classCallCheck(this,t),this.overlayContainer=e,this.defaultPermittedLocalStorageState={siteTheme:"DARK-THEME",isPageAnimated:!0,testKey:"foo"}}return _createClass(t,[{key:"getLocalStorageState",value:function(){var t=this;return window.localStorage?Object.keys(localStorage).reduce((function(e,n){return e[n]=t.getItem(n),e}),{}):Object.assign({},this.defaultPermittedLocalStorageState)}},{key:"getItem",value:function(t){if(!localStorage)return this.defaultPermittedLocalStorageState[t];var e=localStorage.getItem(t);try{return e?JSON.parse(e):"NO_ITEM_FOUND"}catch(n){return console.error(n),"NO_ITEM_FOUND"}}},{key:"setItem",value:function(t,e){window.localStorage.setItem(t,JSON.stringify(e)),"siteTheme"===t&&this.updateCdkOverlayClass(e)}},{key:"removeItem",value:function(t){window.localStorage.removeItem(t)}},{key:"verifyAndRepairLocalStorageState",value:function(){var t=this,e=this.defaultPermittedLocalStorageState,n=this.getLocalStorageState();Object.keys(n).forEach((function(n){Object.keys(e).includes(n)||t.removeItem(n)}));var a=Object.keys(e).reduce((function(t,a){var r=void 0===n[a],o=typeof n[a]!=typeof e[a],i=!mt.includes(n[a]);return t[a]=r||o||i?e[a]:n[a],t}),{});this.setLocalStorageState(a)}},{key:"setLocalStorageState",value:function(t){var e=this;Object.keys(t).forEach((function(n){e.setItem(n,t[n])}))}},{key:"updateCdkOverlayClass",value:function(t){var e=this.overlayContainer.getContainerElement().classList,n=Array.from(e).filter((function(t){return t.includes("-theme")}));n.length&&e.remove.apply(e,_toConsumableArray(n)),e.add(t.toLowerCase())}}]),t}()).\u0275fac=function(t){return new(t||ot)(i.Wb(ht.c))},ot.\u0275prov=i.Ib({token:ot,factory:ot.\u0275fac,providedIn:"root"}),ot),vt=n("RzEb"),kt=n("kEI4"),wt=n("TY1r"),Ct=((it=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||it)},it.\u0275cmp=i.Gb({type:it,selectors:[["app-side-nav"]],decls:21,vars:1,consts:[["mat-list-icon",""],["routerLink",""],["routerLink","about"],["routerLink","contact"],["mat-list-icon","",2,"transform","translate(-2px,-3px)"],["icon","cog",3,"fixedWidth"],["routerLink","settings"]],template:function(t,e){1&t&&(i.Sb(0,"mat-nav-list"),i.Sb(1,"mat-list-item"),i.Sb(2,"mat-icon",0),i.rc(3," home "),i.Qb(),i.Sb(4,"span",1),i.rc(5,"Home"),i.Qb(),i.Qb(),i.Sb(6,"mat-list-item"),i.Sb(7,"mat-icon",0),i.rc(8," info "),i.Qb(),i.Sb(9,"span",2),i.rc(10,"About"),i.Qb(),i.Qb(),i.Sb(11,"mat-list-item"),i.Sb(12,"mat-icon",0),i.rc(13," mail "),i.Qb(),i.Sb(14,"span",3),i.rc(15,"Contact"),i.Qb(),i.Qb(),i.Sb(16,"mat-list-item"),i.Sb(17,"mat-icon",4),i.Nb(18,"fa-icon",5),i.Qb(),i.Sb(19,"span",6),i.rc(20,"Settings"),i.Qb(),i.Qb(),i.Qb()),2&t&&(i.zb(18),i.fc("fixedWidth",!0))},directives:[kt.d,kt.b,wt.a,kt.a,c.g,N.a],styles:["mat-list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:10px}"]}),it),yt=n("J0hL"),Qt=((bt=function(){function t(){_classCallCheck(this,t),this.faBars=z.a,this.faCog=z.c,this.openSidenav=new i.m}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"_openSideNav",value:function(){this.openSidenav.emit()}}]),t}()).\u0275fac=function(t){return new(t||bt)},bt.\u0275cmp=i.Gb({type:bt,selectors:[["app-header"]],outputs:{openSidenav:"openSidenav"},decls:25,vars:6,consts:[["color","primary",1,"main-mat-toolbar"],[1,"not-showing-side-nav","d-none","d-md-flex"],[1,"links-in-header"],["routerLink",""],["routerLink","about"],["routerLink","contact"],[1,"spacer"],["mat-icon-button","","routerLink","settings"],[3,"icon","fixedWidth"],[1,"showing-side-nav","d-md-none"],["mat-icon-button","","color","white",3,"click"],[2,"background-color","rgba(255,0,0,0.0)"]],template:function(t,e){1&t&&(i.Sb(0,"mat-toolbar",0),i.Sb(1,"div",1),i.Sb(2,"ul",2),i.Sb(3,"li",3),i.rc(4," SiteTitle "),i.Qb(),i.Sb(5,"li",4),i.rc(6," About "),i.Qb(),i.Sb(7,"li",5),i.rc(8," Contact "),i.Qb(),i.Qb(),i.Sb(9,"div",6),i.rc(10," This div will use up in-between space and this text won't be seen "),i.Qb(),i.Sb(11,"button",7),i.Nb(12,"fa-icon",8),i.Qb(),i.Qb(),i.Sb(13,"div",9),i.Sb(14,"button",10),i.ac("click",(function(t){return e._openSideNav()})),i.Nb(15,"fa-icon",8),i.Qb(),i.Sb(16,"div",6),i.rc(17," This div will use up in-between space and this text won't be seen "),i.Qb(),i.Sb(18,"ul",11),i.Sb(19,"li",3),i.rc(20," SiteTitle "),i.Qb(),i.Qb(),i.Sb(21,"div",6),i.rc(22," This div will use up in-between space and this text won't be seen "),i.Qb(),i.Sb(23,"button",7),i.Nb(24,"fa-icon",8),i.Qb(),i.Qb(),i.Qb()),2&t&&(i.zb(12),i.fc("icon",e.faCog)("fixedWidth",!0),i.zb(3),i.fc("icon",e.faBars)("fixedWidth",!0),i.zb(9),i.fc("icon",e.faCog)("fixedWidth",!0))},directives:[yt.a,c.g,y.a,N.a],styles:["mat-toolbar[_ngcontent-%COMP%]{min-height:55px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}mat-toolbar[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:24px}mat-toolbar[_ngcontent-%COMP%]   .not-showing-side-nav[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%]   .showing-side-nav[_ngcontent-%COMP%]{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}mat-toolbar[_ngcontent-%COMP%]   .not-showing-side-nav[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%]   .showing-side-nav[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 1 auto;overflow:hidden;color:transparent}mat-toolbar[_ngcontent-%COMP%]   .not-showing-side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%]   .showing-side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;align-items:center;margin:0;padding:0;font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}mat-toolbar[_ngcontent-%COMP%]   .not-showing-side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%]   .showing-side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;margin:auto 20px;height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-flex:1;flex:1}"]}),bt),Ot=((ct=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||ct)},ct.\u0275cmp=i.Gb({type:ct,selectors:[["app-footer"]],decls:2,vars:0,template:function(t,e){1&t&&(i.Sb(0,"p"),i.rc(1,"footer works!"),i.Qb())},styles:["[_nghost-%COMP%]{display:block;min-height:20px}"]}),ct),_t=((st=function(){function t(e,n){_classCallCheck(this,t),this.localStorageService=e,this.store=n,this.title="ng9-boilerplate",this.localStorageService.verifyAndRepairLocalStorageState(),this.store.dispatch(new p)}return _createClass(t,[{key:"_openSidenav",value:function(){console.log("Do sth")}}]),t}()).\u0275fac=function(t){return new(t||st)(i.Mb(St),i.Mb(d.h))},st.\u0275cmp=i.Gb({type:st,selectors:[["app-entry-root"]],decls:11,vars:0,consts:[["mode","push"],["sidenav",""],[1,"header-wrapper"],[3,"openSidenav"],[1,"routed-page-wrapper"],[1,"footer-wrapper"]],template:function(t,e){if(1&t){var n=i.Tb();i.Sb(0,"mat-sidenav-container"),i.Sb(1,"mat-sidenav",0,1),i.Nb(3,"app-side-nav"),i.Qb(),i.Sb(4,"mat-sidenav-content"),i.Sb(5,"div",2),i.Sb(6,"app-header",3),i.ac("openSidenav",(function(t){return i.ic(n),i.hc(2).open()})),i.Qb(),i.Qb(),i.Sb(7,"div",4),i.Nb(8,"router-outlet"),i.Qb(),i.Sb(9,"div",5),i.Nb(10,"app-footer"),i.Qb(),i.Qb(),i.Qb()}},directives:[vt.b,vt.a,Ct,vt.c,Qt,c.i,Ot],styles:["mat-sidenav-container[_ngcontent-%COMP%]{position:relative;min-height:100vh;width:100%}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{min-width:150px}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-height:100vh;background-color:#ff0}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:10;height:55px;background-color:red}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]   .routed-page-wrapper[_ngcontent-%COMP%]{margin-top:55px;background-color:pink;width:100%;-webkit-box-flex:1;flex:1;padding:20px 30px}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]{background-color:orange}"]}),st),xt=n("R1ws"),Mt=n("z6cu"),Et=n("lJxs"),Pt=n("tS1D"),Tt=n("JIr8"),jt=n("0DX0"),It=((ut=function(){function t(e){_classCallCheck(this,t),this.snackBar=e}return _createClass(t,[{key:"intercept",value:function(t,e){var n=this,a=parseInt(t.headers.get("timeout"),10)||3e3;return e.handle(t).pipe(Object(Et.a)((function(t){return t})),Object(Pt.a)(a),Object(Tt.a)((function(t){var e="",a="";return t.error instanceof ErrorEvent?(e="Error: ".concat(t.error.message),a="A network error occurred originating in your browser."):(e="Error Code: ".concat(t.status,"\nMessage: ").concat(t.message),a="The data API is unreachable. Please try again later."),n.snackBar.open(a,"Close",{duration:5e3}),Object(Mt.a)(e)})),Object(Et.a)((function(t){return console.log("API pipeline completed"),t})))}}]),t}()).\u0275fac=function(t){return new(t||ut)(i.Wb(jt.a))},ut.\u0275prov=i.Ib({token:ut,factory:ut.\u0275fac}),ut),Lt=((lt=function t(){_classCallCheck(this,t)}).\u0275mod=i.Kb({type:lt}),lt.\u0275inj=i.Jb({factory:function(t){return new(t||lt)},providers:[{provide:h.a,useClass:It,multi:!0}],imports:[[v.b,h.c]]}),lt),Ut=n("SnT8"),At=((dt=function t(e){_classCallCheck(this,t),e.addIcons(z.c)}).\u0275mod=i.Kb({type:dt}),dt.\u0275inj=i.Jb({factory:function(t){return new(t||dt)(i.Wb(N.b))},imports:[[N.c],N.c]}),dt),zt=((pt=function t(){_classCallCheck(this,t)}).\u0275mod=i.Kb({type:pt}),pt.\u0275inj=i.Jb({factory:function(t){return new(t||pt)},imports:[[],v.b,m.e,m.m,At,y.b,k.e,Ut.a,w.d,wt.b,C.b,kt.c,vt.d,jt.b,yt.b,Q.c]}),pt),Nt=n("Jho9"),Rt=n("Ta0S"),qt=function(t){return t.AddTestEntity="[TestEntity] Add TestEntities",t.RemoveTestEntity="[TestEntity] Remove TestEntities",t}({}),Wt={testEntities:[]},Ft={testUsers:[]},Gt={siteTheme:"DARK-THEME",isPageAnimated:!0},Dt={testEntitySubstate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case qt.AddTestEntity:return Object.assign(Object.assign({},t),{testEntities:[].concat(_toConsumableArray(t.testEntities),[e.testEntity])});case qt.RemoveTestEntity:return Object.assign(Object.assign({},t),{testEntities:t.testEntities.filter((function(t){return t!==e.testEntity}))});default:return t}},testUserSubstate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case K.AddTestUser:return Object.assign(Object.assign({},t),{testUsers:[].concat(_toConsumableArray(t.testUsers),[e.testUser])});case K.RemoveTestUser:return Object.assign(Object.assign({},t),{testUsers:t.testUsers.filter((function(t){return t!==e.testUser}))});case K.TestUsersLoaded:return Object.assign(Object.assign({},t),{testUsers:t.testUsers.concat(e.users).filter((function(t,e,n){return n.map((function(t){return t.id})).indexOf(t.id)===e}))});case K.TestUsersLoadFailed:default:return t}},siteSettingsSubstate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b.SetSiteSettings:return Object.assign({},e.siteSettings);case b.SetSiteTheme:return Object.assign(Object.assign({},t),{siteTheme:e.theme});default:return t}},router:Rt.b},Ht=[];n("B3rN");var $t,Jt,Kt,Bt=n("snw9"),Xt=n("mrSG"),Vt=n("LRne"),Yt=n("5+tZ"),Zt=(($t=function t(e,n){var a=this;_classCallCheck(this,t),this.actions$=e,this.dataService=n,this.loadTestUsers$=this.actions$.pipe(Object(Bt.e)(K.LoadTestUsers),Object(Et.a)((function(t){return console.log("Effects pipeline pinged"),t})),Object(Yt.a)((function(t){return a.dataService.getUsers().pipe(Object(Et.a)((function(t){return console.log("Effects pipeline pinged 2"),new V(Array.isArray(t)?t:[t])})),Object(Tt.a)((function(t){return Object(Vt.a)(new Y(t))})))})))}).\u0275fac=function(t){return new(t||$t)(i.Wb(Bt.a),i.Wb(q))},$t.\u0275prov=i.Ib({token:$t,factory:$t.\u0275fac}),Object(Xt.a)([Object(Bt.b)()],$t.prototype,"loadTestUsers$",void 0),$t),te=n("zp1y"),ee=((Kt=function t(e,n,a){var r=this;_classCallCheck(this,t),this.actions$=e,this.localStorageService=n,this.store$=a,this.loadSiteSettings$=this.actions$.pipe(Object(Bt.e)(b.LoadSiteSettingsFromLocalStorage),Object(Et.a)((function(t){var e=r.localStorageService.getLocalStorageState();return new l(e)}))),this.updateLocalStorage$=this.actions$.pipe(Object(Bt.e)(b.SetSiteSettings,b.SetSiteTheme,b.SetIsPageAnimated),Object(Et.a)((function(t){return t})),Object(te.a)(this.store$),Object(Et.a)((function(t){r.localStorageService.setItem("siteTheme",t[1].siteSettingsSubstate.siteTheme)})))}).\u0275fac=function(t){return new(t||Kt)(i.Wb(Bt.a),i.Wb(St),i.Wb(d.h))},Kt.\u0275prov=i.Ib({token:Kt,factory:Kt.\u0275fac}),Object(Xt.a)([Object(Bt.b)()],Kt.prototype,"loadSiteSettings$",void 0),Object(Xt.a)([Object(Bt.b)({dispatch:!1})],Kt.prototype,"updateLocalStorage$",void 0),Kt),ne=((Jt=function t(){_classCallCheck(this,t)}).\u0275mod=i.Kb({type:Jt,bootstrap:[_t]}),Jt.\u0275inj=i.Jb({factory:function(t){return new(t||Jt)},providers:[],imports:[[s.a,gt,xt.b,Lt,zt,Nt.a.register("ngsw-worker.js",{enabled:!0}),Bt.c.forRoot([Zt,ee]),d.j.forRoot(Dt,{metaReducers:Ht}),[],Rt.a.forRoot({stateKey:"router"})]]}),Jt);Object(i.R)(),s.e().bootstrapModule(ne).catch((function(t){return console.error(t)}))},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0,5]]]);