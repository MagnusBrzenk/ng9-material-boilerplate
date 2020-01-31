function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,e,n){t.exports=n("jbcS")},jbcS:function(t,e,n){"use strict";n.r(e),n("yLV6");var a,r,o,s=n("fXoL"),i=n("jhN1"),c=n("tyNb"),b=function(t){return t.SetSiteSettings="[SiteSettings] Set SiteSettings",t.SetSiteTheme="[SiteSettings] Set SiteTheme",t.SetIsPageAnimated="[SiteSettings] Set IsPageAnimated",t.LoadSiteSettingsFromLocalStorage="[SiteSettings] Load SiteSettings From LocalStorage",t}({}),l=function t(e){_classCallCheck(this,t),this.siteSettings=e,this.type=b.SetSiteSettings},u=function t(e){_classCallCheck(this,t),this.theme=e,this.type=b.SetSiteTheme},p=function t(){_classCallCheck(this,t),this.type=b.LoadSiteSettingsFromLocalStorage},d=n("kt0X"),f=((r=function(){function t(e){var n=this;_classCallCheck(this,t),this.store=e,this.store.select((function(t){return t.siteSettingsSubstate})).subscribe((function(t){return n.settings=JSON.stringify(t)}))}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onSubmitLight",value:function(){console.log("Light Button pressed"),this.store.dispatch(new u("LIGHT-THEME"))}},{key:"onSubmitDark",value:function(){console.log("Dark Button pressed"),this.store.dispatch(new u("DARK-THEME"))}}]),t}()).\u0275fac=function(t){return new(t||r)(s.Mb(d.h))},r.\u0275cmp=s.Gb({type:r,selectors:[["app-home-page"]],decls:8,vars:1,consts:[[3,"click"]],template:function(t,e){1&t&&(s.Sb(0,"p"),s.rc(1,"home-page works!!"),s.Qb(),s.Sb(2,"div"),s.rc(3),s.Sb(4,"button",0),s.ac("click",(function(t){return e.onSubmitLight()})),s.rc(5,"Light"),s.Qb(),s.Sb(6,"button",0),s.ac("click",(function(t){return e.onSubmitDark()})),s.rc(7,"Dark"),s.Qb(),s.Qb()),2&t&&(s.zb(3),s.tc(" ",e.settings," "))},styles:[".xxx[_ngcontent-%COMP%]{display:block;background-color:green;height:100%}"]}),r),g=((a=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=s.Gb({type:a,selectors:[["app-about-page"]],decls:120,vars:0,template:function(t,e){1&t&&(s.Sb(0,"p"),s.rc(1,"about-page works!"),s.Qb(),s.Sb(2,"p"),s.rc(3,"about-page works!"),s.Qb(),s.Sb(4,"p"),s.rc(5,"about-page works!"),s.Qb(),s.Sb(6,"p"),s.rc(7,"about-page works!"),s.Qb(),s.Sb(8,"p"),s.rc(9,"about-page works!"),s.Qb(),s.Sb(10,"p"),s.rc(11,"about-page works!"),s.Qb(),s.Sb(12,"p"),s.rc(13,"about-page works!"),s.Qb(),s.Sb(14,"p"),s.rc(15,"about-page works!"),s.Qb(),s.Sb(16,"p"),s.rc(17,"about-page works!"),s.Qb(),s.Sb(18,"p"),s.rc(19,"about-page works!"),s.Qb(),s.Sb(20,"p"),s.rc(21,"about-page works!"),s.Qb(),s.Sb(22,"p"),s.rc(23,"about-page works!"),s.Qb(),s.Sb(24,"p"),s.rc(25,"about-page works!"),s.Qb(),s.Sb(26,"p"),s.rc(27,"about-page works!"),s.Qb(),s.Sb(28,"p"),s.rc(29,"about-page works!"),s.Qb(),s.Sb(30,"p"),s.rc(31,"about-page works!"),s.Qb(),s.Sb(32,"p"),s.rc(33,"about-page works!"),s.Qb(),s.Sb(34,"p"),s.rc(35,"about-page works!"),s.Qb(),s.Sb(36,"p"),s.rc(37,"about-page works!"),s.Qb(),s.Sb(38,"p"),s.rc(39,"about-page works!"),s.Qb(),s.Sb(40,"p"),s.rc(41,"about-page works!"),s.Qb(),s.Sb(42,"p"),s.rc(43,"about-page works!"),s.Qb(),s.Sb(44,"p"),s.rc(45,"about-page works!"),s.Qb(),s.Sb(46,"p"),s.rc(47,"about-page works!"),s.Qb(),s.Sb(48,"p"),s.rc(49,"about-page works!"),s.Qb(),s.Sb(50,"p"),s.rc(51,"about-page works!"),s.Qb(),s.Sb(52,"p"),s.rc(53,"about-page works!"),s.Qb(),s.Sb(54,"p"),s.rc(55,"about-page works!"),s.Qb(),s.Sb(56,"p"),s.rc(57,"about-page works!"),s.Qb(),s.Sb(58,"p"),s.rc(59,"about-page works!"),s.Qb(),s.Sb(60,"p"),s.rc(61,"about-page works!"),s.Qb(),s.Sb(62,"p"),s.rc(63,"about-page works!"),s.Qb(),s.Sb(64,"p"),s.rc(65,"about-page works!"),s.Qb(),s.Sb(66,"p"),s.rc(67,"about-page works!"),s.Qb(),s.Sb(68,"p"),s.rc(69,"about-page works!"),s.Qb(),s.Sb(70,"p"),s.rc(71,"about-page works!"),s.Qb(),s.Sb(72,"p"),s.rc(73,"about-page works!"),s.Qb(),s.Sb(74,"p"),s.rc(75,"about-page works!"),s.Qb(),s.Sb(76,"p"),s.rc(77,"about-page works!"),s.Qb(),s.Sb(78,"p"),s.rc(79,"about-page works!"),s.Qb(),s.Sb(80,"p"),s.rc(81,"about-page works!"),s.Qb(),s.Sb(82,"p"),s.rc(83,"about-page works!"),s.Qb(),s.Sb(84,"p"),s.rc(85,"about-page works!"),s.Qb(),s.Sb(86,"p"),s.rc(87,"about-page works!"),s.Qb(),s.Sb(88,"p"),s.rc(89,"about-page works!"),s.Qb(),s.Sb(90,"p"),s.rc(91,"about-page works!"),s.Qb(),s.Sb(92,"p"),s.rc(93,"about-page works!"),s.Qb(),s.Sb(94,"p"),s.rc(95,"about-page works!"),s.Qb(),s.Sb(96,"p"),s.rc(97,"about-page works!"),s.Qb(),s.Sb(98,"p"),s.rc(99,"about-page works!"),s.Qb(),s.Sb(100,"p"),s.rc(101,"about-page works!"),s.Qb(),s.Sb(102,"p"),s.rc(103,"about-page works!"),s.Qb(),s.Sb(104,"p"),s.rc(105,"about-page works!"),s.Qb(),s.Sb(106,"p"),s.rc(107,"about-page works!"),s.Qb(),s.Sb(108,"p"),s.rc(109,"about-page works!"),s.Qb(),s.Sb(110,"p"),s.rc(111,"about-page works!"),s.Qb(),s.Sb(112,"p"),s.rc(113,"about-page works!"),s.Qb(),s.Sb(114,"p"),s.rc(115,"about-page works!"),s.Qb(),s.Sb(116,"p"),s.rc(117,"about-page works!"),s.Qb(),s.Sb(118,"p"),s.rc(119,"about-page works!"),s.Qb())},styles:[""]}),a),h=n("3Pt+"),m=n("tk/3"),S=((o=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"sendEmail",value:function(t,e,n){return this.http.post("https://p6i5pjflbe.execute-api.us-east-1.amazonaws.com/prod/contact/",{name:t,email:e,message:n})}}]),t}()).\u0275fac=function(t){return new(t||o)(s.Wb(m.b))},o.\u0275prov=s.Ib({token:o,factory:o.\u0275fac,providedIn:"root"}),o),v=n("ofXK"),k=n("MSSf"),w=n("IRfi"),C=n("A2Vd"),y=n("Xlwt"),Q=n("3aqf");function O(t,e){1&t&&(s.Sb(0,"mat-error"),s.rc(1," Name is required "),s.Qb())}function _(t,e){1&t&&(s.Sb(0,"mat-error"),s.rc(1," Email is required "),s.Qb())}function x(t,e){1&t&&(s.Sb(0,"mat-error"),s.rc(1," Email should be valid "),s.Qb())}function M(t,e){1&t&&(s.Sb(0,"mat-error"),s.rc(1," Message is required "),s.Qb())}function E(t,e){1&t&&(s.Sb(0,"mat-error"),s.rc(1," Message must be longer than 10 characters "),s.Qb())}function P(t,e){1&t&&(s.Sb(0,"mat-error"),s.rc(1," Message must be less than 1000 characters "),s.Qb())}var T,j,I,L,U=((j=function(){function t(e,n){_classCallCheck(this,t),this.fb=e,this.emailer=n,this.routeAnimationsElements="",this.form=this.fb.group({username:["",[h.n.required]],email:["",[h.n.required,h.n.email]],message:["",[h.n.required,h.n.minLength(10),h.n.maxLength(1e3)]]})}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"submit",value:function(){this.form.valid&&this.emailer.sendEmail(this.form.get("username").value,this.form.get("email").value,this.form.get("message").value).subscribe((function(t){console.log("Response:",t)}))}},{key:"reset",value:function(){this.form.reset(),this.form.clearValidators(),this.form.clearAsyncValidators()}},{key:"isFormSubmittable",value:function(){return!(!this.form.get("username")||!this.form.get("email")||!this.form.get("message")||this.form.get("message").hasError("required")||this.form.get("message").hasError("minlength")||this.form.get("message").hasError("maxlength")||this.form.get("email").hasError("required")||this.form.get("username").hasError("required"))}}]),t}()).\u0275fac=function(t){return new(t||j)(s.Mb(h.b),s.Mb(S))},j.\u0275cmp=s.Gb({type:j,selectors:[["app-contact"]],decls:30,vars:14,consts:[[1,"contact-page-wrapper",3,"ngClass"],[1,"container"],[1,"row"],[1,"col"],[1,"main-heading"],[3,"formGroup","ngSubmit"],[1,"row","justify-content-center"],[1,"col-md-8"],[1,"mat-card-theme-override"],[1,"col",3,"ngClass"],["matInput","","placeholder","Name","formControlName","username"],[4,"ngIf"],["matInput","","placeholder","Email","formControlName","email","type","email"],["matInput","","placeholder","Message","formControlName","message","minlength","10","maxlength","1000","cdkTextareaAutosize","","cdkAutosizeMinRows","10","cdkAutosizeMaxRows","10"],["autosize","cdkTextareaAutosize"],["align","end"],[1,"row","buttons","d-flex","justify-content-end","pad"],["mat-raised-button","","color","primary",3,"ngClass","disabled"]],template:function(t,e){if(1&t&&(s.Sb(0,"div",0),s.Sb(1,"div",1),s.Sb(2,"div",2),s.Sb(3,"div",3),s.Sb(4,"h1",4),s.rc(5," Contact "),s.Qb(),s.Qb(),s.Qb(),s.Sb(6,"form",5),s.ac("ngSubmit",(function(t){return e.submit()})),s.Sb(7,"div",6),s.Sb(8,"div",7),s.Sb(9,"mat-card",8),s.Sb(10,"div",2),s.Sb(11,"mat-form-field",9),s.Nb(12,"input",10),s.qc(13,O,2,0,"mat-error",11),s.Qb(),s.Sb(14,"mat-form-field",9),s.Nb(15,"input",12),s.qc(16,_,2,0,"mat-error",11),s.qc(17,x,2,0,"mat-error",11),s.Qb(),s.Qb(),s.Sb(18,"div",2),s.Sb(19,"mat-form-field",9),s.Nb(20,"textarea",13,14),s.Sb(22,"mat-hint",15),s.rc(23),s.Qb(),s.qc(24,M,2,0,"mat-error",11),s.qc(25,E,2,0,"mat-error",11),s.qc(26,P,2,0,"mat-error",11),s.Qb(),s.Qb(),s.Sb(27,"div",16),s.Sb(28,"button",17),s.rc(29," Send "),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&t){var n,a,r=null==(n=e.form.get("username"))?null:n.invalid,o=null,i=null==(o=e.form.get("email"))?null:o.hasError("required"),c=null,b=null==(c=e.form.get("email"))?null:c.hasError("email"),l=null,u=null==(l=e.form.get("message"))?null:l.hasError("required"),p=null,d=null==(p=e.form.get("message"))?null:p.hasError("minlength"),f=null,g=null==(f=e.form.get("message"))?null:f.hasError("maxlength");s.fc("ngClass",e.routeAnimationsElements),s.zb(6),s.fc("formGroup",e.form),s.zb(5),s.fc("ngClass",e.routeAnimationsElements),s.zb(2),s.fc("ngIf",r),s.zb(1),s.fc("ngClass",e.routeAnimationsElements),s.zb(2),s.fc("ngIf",i),s.zb(1),s.fc("ngIf",b),s.zb(2),s.fc("ngClass",e.routeAnimationsElements),s.zb(4),s.tc(" ",null==(a=e.form.get("message"))?null:null==a.value?null:a.value.length," / 1000 "),s.zb(1),s.fc("ngIf",u),s.zb(1),s.fc("ngIf",d),s.zb(1),s.fc("ngIf",g),s.zb(2),s.fc("ngClass",e.routeAnimationsElements)("disabled",!e.isFormSubmittable())}},directives:[v.h,h.o,h.k,h.d,k.a,w.b,C.a,h.a,h.j,h.c,v.j,Q.b,h.g,h.f,w.e,y.a,w.a],styles:["h1[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:25px;text-transform:uppercase;text-align:center}h2[_ngcontent-%COMP%]{margin:auto}.contact-page-wrapper[_ngcontent-%COMP%]{height:100%;width:100%;position:relative;box-sizing:border-box;z-index:0;text-align:center}mat-card[_ngcontent-%COMP%]{margin-bottom:20px}mat-checkbox[_ngcontent-%COMP%]{margin:10px 0 20px}mat-slider[_ngcontent-%COMP%]{width:100%}.buttons[_ngcontent-%COMP%]{margin:20px 0}"],changeDetection:0}),j),A=((T=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||T)},T.\u0275cmp=s.Gb({type:T,selectors:[["app-settings-page"]],decls:2,vars:0,template:function(t,e){1&t&&(s.Sb(0,"p"),s.rc(1,"settings-page works!"),s.Qb())},styles:[""]}),T),z=n("wHSu"),N=n("6NWb"),R=((L=function(){function t(){_classCallCheck(this,t),this.faCheckSquare=z.b,this.faSpinner=z.d,this.faSquare=z.e}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||L)},L.\u0275cmp=s.Gb({type:L,selectors:[["app-test-page"]],decls:15,vars:9,consts:[[3,"icon","fixedWidth"],[3,"icon","spin","fixedWidth"]],template:function(t,e){1&t&&(s.Sb(0,"h1"),s.rc(1,"This is the main content"),s.Qb(),s.Sb(2,"ul"),s.Sb(3,"li"),s.Nb(4,"fa-icon",0),s.rc(5," List icons can"),s.Qb(),s.Sb(6,"li"),s.Nb(7,"fa-icon",0),s.rc(8," be used to"),s.Qb(),s.Sb(9,"li"),s.Nb(10,"fa-icon",1),s.rc(11," replace bullets"),s.Qb(),s.Sb(12,"li"),s.Nb(13,"fa-icon",0),s.rc(14," in lists"),s.Qb(),s.Qb()),2&t&&(s.zb(4),s.fc("icon",e.faCheckSquare)("fixedWidth",!0),s.zb(3),s.fc("icon",e.faCheckSquare)("fixedWidth",!0),s.zb(3),s.fc("icon",e.faSpinner)("spin",!0)("fixedWidth",!0),s.zb(3),s.fc("icon",e.faSquare)("fixedWidth",!0))},directives:[N.a],styles:[""]}),L),q=((I=function(){function t(e){_classCallCheck(this,t),this.http=e,this.apiUrl="https://jsonplaceholder.typicode.com"}return _createClass(t,[{key:"getUsers",value:function(t){return this.http.get("".concat(this.apiUrl,"/users/").concat(t||""))}}]),t}()).\u0275fac=function(t){return new(t||I)(s.Wb(m.b))},I.\u0275prov=s.Ib({token:I,factory:I.\u0275fac,providedIn:"root"}),I);function W(t,e){if(1&t&&(s.Sb(0,"mat-card",5),s.Sb(1,"mat-card-header"),s.Nb(2,"div",6),s.Sb(3,"mat-card-title"),s.rc(4),s.Qb(),s.Sb(5,"mat-card-subtitle"),s.rc(6),s.Qb(),s.Qb(),s.Sb(7,"mat-card-actions"),s.Sb(8,"button",7),s.rc(9,"LIKE"),s.Qb(),s.Sb(10,"button",7),s.rc(11,"SHARE"),s.Qb(),s.Qb(),s.Qb()),2&t){var n=s.cc(2).index,a=s.cc();s.zb(4),s.tc(" ",a.users[n+1].name,""),s.zb(2),s.sc(a.users[n+1].username)}}function F(t,e){if(1&t&&(s.Sb(0,"span"),s.Sb(1,"div",3),s.Sb(2,"div",4),s.Sb(3,"mat-card",5),s.Sb(4,"mat-card-header"),s.Nb(5,"div",6),s.Sb(6,"mat-card-title"),s.rc(7),s.Qb(),s.Sb(8,"mat-card-subtitle"),s.rc(9),s.Qb(),s.Qb(),s.Sb(10,"mat-card-actions"),s.Sb(11,"button",7),s.rc(12,"LIKE"),s.Qb(),s.Sb(13,"button",7),s.rc(14,"SHARE"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Sb(15,"div",4),s.qc(16,W,12,2,"mat-card",8),s.Qb(),s.Qb(),s.Qb()),2&t){var n=s.cc().index,a=s.cc();s.zb(7),s.tc(" ",a.users[n].name," "),s.zb(2),s.sc(a.users[n].username),s.zb(7),s.fc("ngIf",!!a.users[n+1])}}function D(t,e){if(1&t&&(s.Sb(0,"div"),s.qc(1,F,17,3,"span",2),s.Qb()),2&t){var n=e.index;s.zb(1),s.fc("ngIf",n%2==0)}}var G,H=((G=function(){function t(e,n){_classCallCheck(this,t),this.testData=e,this.route=n}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this,e=this.route.snapshot.paramMap.get("id");this.testData.getUsers(e||"").subscribe((function(e){t.users=Array.isArray(e)?e:[e]}))}}]),t}()).\u0275fac=function(t){return new(t||G)(s.Mb(q),s.Mb(c.a))},G.\u0275cmp=s.Gb({type:G,selectors:[["app-test-users-page"]],decls:6,vars:1,consts:[[1,"container"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"row","grid-row"],[1,"col-sm-6"],[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],["mat-button",""],["class","example-card",4,"ngIf"]],template:function(t,e){1&t&&(s.Sb(0,"div",0),s.Sb(1,"h1"),s.rc(2,"Users Grid"),s.Qb(),s.Sb(3,"h3"),s.rc(4,"Using Bootstrap Responsive Grid"),s.Qb(),s.qc(5,D,2,1,"div",1),s.Qb()),2&t&&(s.zb(5),s.fc("ngForOf",e.users))},directives:[v.i,v.j,k.a,k.d,k.c,k.g,k.f,k.b,y.a],styles:["[_nghost-%COMP%]{display:block;overflow:scroll}.example-card[_ngcontent-%COMP%]{max-width:400px}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}mat-card-header[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}"]}),G),$=0,J=function t(e){_classCallCheck(this,t),this.id=(e.id||"uuid-"+ ++$)+"",this.name=e.name||"<NAME>",this.username=e.username||"<USERNAME>",this.email=e.email||"<EMAIL>",this.address=e.address||void 0,this.phone=e.phone||void 0,this.website=e.website||void 0,this.company=e.company||void 0},K=function(t){return t.AddTestUser="[TestUser] Add UserEntities",t.RemoveTestUser="[TestUser] Remove UserEntities",t.LoadTestUsers="[TestUser] Load UserEntities",t.TestUsersLoaded="[TestUser] TestUsers Loaded",t.TestUsersLoadFailed="[TestUser] TestUsers Load Failed",t}({}),B=function t(e){_classCallCheck(this,t),this.testUser=e,this.type=K.AddTestUser},X=function t(){_classCallCheck(this,t),this.type=K.LoadTestUsers},V=function t(e){_classCallCheck(this,t),this.users=e,this.type=K.TestUsersLoaded},Y=function t(e){_classCallCheck(this,t),this.error=e,this.type=K.TestUsersLoadFailed},Z=Object(d.o)((function(t){return t.testUserSubstate}),(function(t){return t.testUsers})),tt=Object(d.o)((function(t){return t.testUserSubstate}),(function(t){return t.testUsers.filter((function(t,e){return e%2!=0}))}));function et(t,e){if(1&t&&(s.Sb(0,"div"),s.Sb(1,"div",8),s.rc(2),s.Qb(),s.Qb()),2&t){var n=e.$implicit;s.zb(2),s.tc(" ",n.username+" "+n.id," ")}}function nt(t,e){if(1&t&&(s.Sb(0,"div"),s.Sb(1,"div",9),s.rc(2),s.Qb(),s.Qb()),2&t){var n=e.$implicit;s.zb(2),s.tc(" ",n.username+" "+n.id," ")}}var at,rt,ot,st,it,ct,bt,lt,ut,pt,dt,ft=[{path:"",component:f,pathMatch:"full"},{path:"about",component:g,pathMatch:"full"},{path:"contact",component:U,pathMatch:"full"},{path:"settings",component:A,pathMatch:"full"},{path:"test",component:R,pathMatch:"full"},{path:"test-users",component:H,pathMatch:"full"},{path:"test-more-users",component:(at=function(){function t(e){var n=this;_classCallCheck(this,t),this.store=e,e.select(Z).subscribe((function(t){return n.users=t})),e.select(tt).subscribe((function(t){return n.everyOtherUser=t}))}return _createClass(t,[{key:"addUser",value:function(t){this.store.dispatch(new B(new J({username:t})))}},{key:"ngOnInit",value:function(){this.store.dispatch(new X)}}]),t}(),at.\u0275fac=function(t){return new(t||at)(s.Mb(d.h))},at.\u0275cmp=s.Gb({type:at,selectors:[["app-test-more-users"]],decls:13,vars:2,consts:[[1,"container-fluid"],[1,"well"],["type","text","placeholder","Username",1,"form-control"],["username",""],[1,"btn","btn-primary",3,"click"],[2,"display","inline-block","background","green","width","30%"],[4,"ngFor","ngForOf"],[2,"display","inline-block","background","red","width","30%"],[2,"display","block","background","rgba(0,0,0,0.2)"],[2,"display","block","background","rgba(255,0,0,0.2)"]],template:function(t,e){if(1&t){var n=s.Tb();s.Sb(0,"div",0),s.Sb(1,"div",1),s.Sb(2,"h2"),s.rc(3,"Enter a user name:"),s.Qb(),s.Nb(4,"input",2,3),s.Nb(6,"br"),s.Sb(7,"button",4),s.ac("click",(function(t){s.ic(n);var a=s.hc(5);return e.addUser(a.value)})),s.rc(8," Add User "),s.Qb(),s.Qb(),s.Sb(9,"div",5),s.qc(10,et,3,1,"div",6),s.Qb(),s.Sb(11,"div",7),s.qc(12,nt,3,1,"div",6),s.Qb(),s.Qb()}2&t&&(s.zb(10),s.fc("ngForOf",e.users),s.zb(2),s.fc("ngForOf",e.everyOtherUser))},directives:[v.i],styles:[""]}),at),pathMatch:"full"},{path:"test-users/:id",component:H},{path:"**",redirectTo:""}],gt=((rt=function t(){_classCallCheck(this,t)}).\u0275mod=s.Kb({type:rt}),rt.\u0275inj=s.Jb({factory:function(t){return new(t||rt)},imports:[[c.h.forRoot(ft)],c.h]}),rt),ht=["DARK-THEME","LIGHT-THEME"],mt=n("OCB9"),St=((ot=function(){function t(e){_classCallCheck(this,t),this.overlayContainer=e,this.defaultPermittedLocalStorageState={siteTheme:"DARK-THEME",isPageAnimated:!0,testKey:"foo"}}return _createClass(t,[{key:"getLocalStorageState",value:function(){var t=this;return window.localStorage?Object.keys(localStorage).reduce((function(e,n){return e[n]=t.getItem(n),e}),{}):Object.assign({},this.defaultPermittedLocalStorageState)}},{key:"getItem",value:function(t){if(!localStorage)return this.defaultPermittedLocalStorageState[t];var e=localStorage.getItem(t);try{return e?JSON.parse(e):"NO_ITEM_FOUND"}catch(n){return console.error(n),"NO_ITEM_FOUND"}}},{key:"setItem",value:function(t,e){window.localStorage.setItem(t,JSON.stringify(e)),"siteTheme"===t&&this.updateCdkOverlayClass(e)}},{key:"removeItem",value:function(t){window.localStorage.removeItem(t)}},{key:"verifyAndRepairLocalStorageState",value:function(){var t=this,e=this.defaultPermittedLocalStorageState,n=this.getLocalStorageState();Object.keys(n).forEach((function(n){Object.keys(e).includes(n)||t.removeItem(n)}));var a=Object.keys(e).reduce((function(t,a){var r=void 0===n[a],o=typeof n[a]!=typeof e[a],s=!ht.includes(n[a]);return t[a]=r||o||s?e[a]:n[a],t}),{});this.setLocalStorageState(a)}},{key:"setLocalStorageState",value:function(t){var e=this;Object.keys(t).forEach((function(n){e.setItem(n,t[n])}))}},{key:"updateCdkOverlayClass",value:function(t){var e=this.overlayContainer.getContainerElement().classList,n=Array.from(e).filter((function(t){return t.includes("-theme")}));n.length&&e.remove.apply(e,_toConsumableArray(n)),e.add(t.toLowerCase())}}]),t}()).\u0275fac=function(t){return new(t||ot)(s.Wb(mt.c))},ot.\u0275prov=s.Ib({token:ot,factory:ot.\u0275fac,providedIn:"root"}),ot),vt=n("RzEb"),kt=n("kEI4"),wt=n("TY1r"),Ct=((st=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||st)},st.\u0275cmp=s.Gb({type:st,selectors:[["app-side-nav"]],decls:21,vars:1,consts:[["mat-list-icon",""],["routerLink",""],["routerLink","about"],["routerLink","contact"],["mat-list-icon","",2,"transform","translate(-2px,-3px)"],["icon","cog",3,"fixedWidth"],["routerLink","settings"]],template:function(t,e){1&t&&(s.Sb(0,"mat-nav-list"),s.Sb(1,"mat-list-item"),s.Sb(2,"mat-icon",0),s.rc(3," home "),s.Qb(),s.Sb(4,"span",1),s.rc(5,"Home"),s.Qb(),s.Qb(),s.Sb(6,"mat-list-item"),s.Sb(7,"mat-icon",0),s.rc(8," info "),s.Qb(),s.Sb(9,"span",2),s.rc(10,"About"),s.Qb(),s.Qb(),s.Sb(11,"mat-list-item"),s.Sb(12,"mat-icon",0),s.rc(13," mail "),s.Qb(),s.Sb(14,"span",3),s.rc(15,"Contact"),s.Qb(),s.Qb(),s.Sb(16,"mat-list-item"),s.Sb(17,"mat-icon",4),s.Nb(18,"fa-icon",5),s.Qb(),s.Sb(19,"span",6),s.rc(20,"Settings"),s.Qb(),s.Qb(),s.Qb()),2&t&&(s.zb(18),s.fc("fixedWidth",!0))},directives:[kt.d,kt.b,wt.a,kt.a,c.g,N.a],styles:["mat-list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:10px}"]}),st),yt=n("J0hL"),Qt=((bt=function(){function t(){_classCallCheck(this,t),this.faBars=z.a,this.faCog=z.c,this.openSidenav=new s.m}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"_openSideNav",value:function(){this.openSidenav.emit()}}]),t}()).\u0275fac=function(t){return new(t||bt)},bt.\u0275cmp=s.Gb({type:bt,selectors:[["app-header"]],outputs:{openSidenav:"openSidenav"},decls:25,vars:6,consts:[["color","primary",1,"main-mat-toolbar"],[1,"not-showing-side-nav","d-none","d-md-flex"],[1,"links-in-header"],["routerLink",""],["routerLink","about"],["routerLink","contact"],[1,"spacer"],["mat-icon-button","","routerLink","settings"],[3,"icon","fixedWidth"],[1,"showing-side-nav","d-md-none"],["mat-icon-button","","color","white",3,"click"],[2,"background-color","rgba(255,0,0,0.0)"]],template:function(t,e){1&t&&(s.Sb(0,"mat-toolbar",0),s.Sb(1,"div",1),s.Sb(2,"ul",2),s.Sb(3,"li",3),s.rc(4," SiteTitle "),s.Qb(),s.Sb(5,"li",4),s.rc(6," About "),s.Qb(),s.Sb(7,"li",5),s.rc(8," Contact "),s.Qb(),s.Qb(),s.Sb(9,"div",6),s.rc(10," This div will use up in-between space and this text won't be seen "),s.Qb(),s.Sb(11,"button",7),s.Nb(12,"fa-icon",8),s.Qb(),s.Qb(),s.Sb(13,"div",9),s.Sb(14,"button",10),s.ac("click",(function(t){return e._openSideNav()})),s.Nb(15,"fa-icon",8),s.Qb(),s.Sb(16,"div",6),s.rc(17," This div will use up in-between space and this text won't be seen "),s.Qb(),s.Sb(18,"ul",11),s.Sb(19,"li",3),s.rc(20," SiteTitle "),s.Qb(),s.Qb(),s.Sb(21,"div",6),s.rc(22," This div will use up in-between space and this text won't be seen "),s.Qb(),s.Sb(23,"button",7),s.Nb(24,"fa-icon",8),s.Qb(),s.Qb(),s.Qb()),2&t&&(s.zb(12),s.fc("icon",e.faCog)("fixedWidth",!0),s.zb(3),s.fc("icon",e.faBars)("fixedWidth",!0),s.zb(9),s.fc("icon",e.faCog)("fixedWidth",!0))},directives:[yt.a,c.g,y.a,N.a],styles:["mat-toolbar[_ngcontent-%COMP%]{min-height:55px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}mat-toolbar[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:24px}mat-toolbar[_ngcontent-%COMP%]   .not-showing-side-nav[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%]   .showing-side-nav[_ngcontent-%COMP%]{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}mat-toolbar[_ngcontent-%COMP%]   .not-showing-side-nav[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%]   .showing-side-nav[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 1 auto;overflow:hidden;color:transparent}mat-toolbar[_ngcontent-%COMP%]   .not-showing-side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%]   .showing-side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;align-items:center;margin:0;padding:0;font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}mat-toolbar[_ngcontent-%COMP%]   .not-showing-side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%]   .showing-side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;margin:auto 20px;height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-flex:1;flex:1}"]}),bt),Ot=((ct=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||ct)},ct.\u0275cmp=s.Gb({type:ct,selectors:[["app-footer"]],decls:2,vars:0,template:function(t,e){1&t&&(s.Sb(0,"p"),s.rc(1,"footer works!"),s.Qb())},styles:["[_nghost-%COMP%]{display:block;min-height:20px}"]}),ct),_t=((it=function(){function t(e,n){_classCallCheck(this,t),this.localStorageService=e,this.store=n,this.title="ng9-boilerplate",this.localStorageService.verifyAndRepairLocalStorageState(),this.store.dispatch(new p)}return _createClass(t,[{key:"_openSidenav",value:function(){console.log("Do sth")}}]),t}()).\u0275fac=function(t){return new(t||it)(s.Mb(St),s.Mb(d.h))},it.\u0275cmp=s.Gb({type:it,selectors:[["app-entry-root"]],decls:11,vars:0,consts:[["mode","push"],["sidenav",""],[1,"header-wrapper"],[3,"openSidenav"],[1,"routed-page-wrapper"],[1,"footer-wrapper"]],template:function(t,e){if(1&t){var n=s.Tb();s.Sb(0,"mat-sidenav-container"),s.Sb(1,"mat-sidenav",0,1),s.Nb(3,"app-side-nav"),s.Qb(),s.Sb(4,"mat-sidenav-content"),s.Sb(5,"div",2),s.Sb(6,"app-header",3),s.ac("openSidenav",(function(t){return s.ic(n),s.hc(2).open()})),s.Qb(),s.Qb(),s.Sb(7,"div",4),s.Nb(8,"router-outlet"),s.Qb(),s.Sb(9,"div",5),s.Nb(10,"app-footer"),s.Qb(),s.Qb(),s.Qb()}},directives:[vt.b,vt.a,Ct,vt.c,Qt,c.i,Ot],styles:["mat-sidenav-container[_ngcontent-%COMP%]{position:relative;min-height:100vh;width:100%}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]{min-width:150px}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-height:100vh;background-color:#ff0}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:10;height:55px;background-color:red}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]   .routed-page-wrapper[_ngcontent-%COMP%]{margin-top:55px;background-color:pink;width:100%;-webkit-box-flex:1;flex:1;padding:20px 30px}mat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]{background-color:orange}"]}),it),xt=n("R1ws"),Mt=n("z6cu"),Et=n("lJxs"),Pt=n("tS1D"),Tt=n("JIr8"),jt=n("0DX0"),It=((ut=function(){function t(e){_classCallCheck(this,t),this.snackBar=e}return _createClass(t,[{key:"intercept",value:function(t,e){var n=this,a=parseInt(t.headers.get("timeout"),10)||3e3;return e.handle(t).pipe(Object(Et.a)((function(t){return t})),Object(Pt.a)(a),Object(Tt.a)((function(t){var e="",a="";return t.error instanceof ErrorEvent?(e="Error: ".concat(t.error.message),a="A network error occurred originating in your browser."):(e="Error Code: ".concat(t.status,"\nMessage: ").concat(t.message),a="The data API is unreachable. Please try again later."),n.snackBar.open(a,"Close",{duration:5e3}),Object(Mt.a)(e)})),Object(Et.a)((function(t){return console.log("API pipeline completed"),t})))}}]),t}()).\u0275fac=function(t){return new(t||ut)(s.Wb(jt.a))},ut.\u0275prov=s.Ib({token:ut,factory:ut.\u0275fac}),ut),Lt=((lt=function t(){_classCallCheck(this,t)}).\u0275mod=s.Kb({type:lt}),lt.\u0275inj=s.Jb({factory:function(t){return new(t||lt)},providers:[{provide:m.a,useClass:It,multi:!0}],imports:[[v.b,m.c]]}),lt),Ut=n("SnT8"),At=((dt=function t(e){_classCallCheck(this,t),e.addIcons(z.c)}).\u0275mod=s.Kb({type:dt}),dt.\u0275inj=s.Jb({factory:function(t){return new(t||dt)(s.Wb(N.b))},imports:[[N.c],N.c]}),dt),zt=((pt=function t(){_classCallCheck(this,t)}).\u0275mod=s.Kb({type:pt}),pt.\u0275inj=s.Jb({factory:function(t){return new(t||pt)},imports:[[],v.b,h.e,h.m,At,y.b,k.e,Ut.a,w.d,wt.b,C.b,kt.c,vt.d,jt.b,yt.b,Q.c]}),pt),Nt=n("Jho9"),Rt=n("Ta0S"),qt=function(t){return t.AddTestEntity="[TestEntity] Add TestEntities",t.RemoveTestEntity="[TestEntity] Remove TestEntities",t}({}),Wt={testEntities:[]},Ft={testUsers:[]},Dt={siteTheme:"DARK-THEME",isPageAnimated:!0},Gt={testEntitySubstate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case qt.AddTestEntity:return Object.assign(Object.assign({},t),{testEntities:[].concat(_toConsumableArray(t.testEntities),[e.testEntity])});case qt.RemoveTestEntity:return Object.assign(Object.assign({},t),{testEntities:t.testEntities.filter((function(t){return t!==e.testEntity}))});default:return t}},testUserSubstate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case K.AddTestUser:return Object.assign(Object.assign({},t),{testUsers:[].concat(_toConsumableArray(t.testUsers),[e.testUser])});case K.RemoveTestUser:return Object.assign(Object.assign({},t),{testUsers:t.testUsers.filter((function(t){return t!==e.testUser}))});case K.TestUsersLoaded:return Object.assign(Object.assign({},t),{testUsers:t.testUsers.concat(e.users).filter((function(t,e,n){return n.map((function(t){return t.id})).indexOf(t.id)===e}))});case K.TestUsersLoadFailed:default:return t}},siteSettingsSubstate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b.SetSiteSettings:return Object.assign({},e.siteSettings);case b.SetSiteTheme:return Object.assign(Object.assign({},t),{siteTheme:e.theme});default:return t}},router:Rt.b},Ht=[];n("B3rN");var $t,Jt,Kt,Bt=n("snw9"),Xt=n("mrSG"),Vt=n("LRne"),Yt=n("5+tZ"),Zt=(($t=function t(e,n){var a=this;_classCallCheck(this,t),this.actions$=e,this.dataService=n,this.loadTestUsers$=this.actions$.pipe(Object(Bt.e)(K.LoadTestUsers),Object(Et.a)((function(t){return console.log("Effects pipeline pinged"),t})),Object(Yt.a)((function(t){return a.dataService.getUsers().pipe(Object(Et.a)((function(t){return console.log("Effects pipeline pinged 2"),new V(Array.isArray(t)?t:[t])})),Object(Tt.a)((function(t){return Object(Vt.a)(new Y(t))})))})))}).\u0275fac=function(t){return new(t||$t)(s.Wb(Bt.a),s.Wb(q))},$t.\u0275prov=s.Ib({token:$t,factory:$t.\u0275fac}),Object(Xt.a)([Object(Bt.b)()],$t.prototype,"loadTestUsers$",void 0),$t),te=n("zp1y"),ee=((Kt=function t(e,n,a){var r=this;_classCallCheck(this,t),this.actions$=e,this.localStorageService=n,this.store$=a,this.loadSiteSettings$=this.actions$.pipe(Object(Bt.e)(b.LoadSiteSettingsFromLocalStorage),Object(Et.a)((function(t){console.log("Effects pipeline pinged");var e=r.localStorageService.getLocalStorageState();return new l(e)}))),this.updateLocalStorage$=this.actions$.pipe(Object(Bt.e)(b.SetSiteSettings,b.SetSiteTheme,b.SetIsPageAnimated),Object(Et.a)((function(t){return console.log("?????"),t})),Object(te.a)(this.store$),Object(Et.a)((function(t){console.log("Updating local storage..."),console.log(t),r.localStorageService.setItem("siteTheme",t[1].siteSettingsSubstate.siteTheme)})))}).\u0275fac=function(t){return new(t||Kt)(s.Wb(Bt.a),s.Wb(St),s.Wb(d.h))},Kt.\u0275prov=s.Ib({token:Kt,factory:Kt.\u0275fac}),Object(Xt.a)([Object(Bt.b)()],Kt.prototype,"loadSiteSettings$",void 0),Object(Xt.a)([Object(Bt.b)({dispatch:!1})],Kt.prototype,"updateLocalStorage$",void 0),Kt),ne=((Jt=function t(){_classCallCheck(this,t)}).\u0275mod=s.Kb({type:Jt,bootstrap:[_t]}),Jt.\u0275inj=s.Jb({factory:function(t){return new(t||Jt)},providers:[],imports:[[i.a,gt,xt.b,Lt,zt,Nt.a.register("ngsw-worker.js",{enabled:!0}),Bt.c.forRoot([Zt,ee]),d.j.forRoot(Gt,{metaReducers:Ht}),[],Rt.a.forRoot({stateKey:"router"})]]}),Jt);Object(s.R)(),i.e().bootstrapModule(ne).catch((function(t){return console.error(t)}))},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0,5]]]);