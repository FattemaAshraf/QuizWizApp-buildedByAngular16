"use strict";(self.webpackChunkQuiz=self.webpackChunkQuiz||[]).push([[397],{1541:(m,l,o)=>{o.d(l,{g:()=>t});var u=o(5879),r=o(9862);let t=(()=>{class c{constructor(s){this._HttpClient=s}getFirst5IncomingQuizzes(){return this._HttpClient.get("quiz/incomming")}getCompletedQuizzes(){return this._HttpClient.get("quiz/completed")}joinQuiz(s){return this._HttpClient.post("quiz/join",s)}getQuestionsWiyhoutAnswer(s){return this._HttpClient.get(`quiz/without-answers/${s}`)}submitAnswer(s,d){return this._HttpClient.post(`quiz/submit/${s}`,{answers:d})}static#t=this.\u0275fac=function(d){return new(d||c)(u.LFG(r.eN))};static#i=this.\u0275prov=u.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},7666:(m,l,o)=>{o.r(l),o.d(l,{StudentModule:()=>f});var u=o(6814),r=o(4581),t=o(5879),c=o(1541),h=o(2425),s=o(342);function d(i,v){if(1&i){const e=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8)(4,"div",9),t._UZ(5,"img",10),t.qZA(),t.TgZ(6,"div",11)(7,"div")(8,"h5"),t._uU(9),t.qZA(),t.TgZ(10,"p"),t._uU(11),t.ALo(12,"date"),t.qZA()(),t.TgZ(13,"div",12)(14,"p"),t._uU(15),t.qZA(),t.TgZ(16,"a",13),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.copyCode())}),t._UZ(17,"i",14),t.qZA()()()()()()()}if(2&i){const e=v.$implicit;t.xp6(9),t.Oqu(e.title),t.xp6(2),t.Oqu(t.xi3(12,4,e.schadule,"yyyy-MM-dd")),t.xp6(4),t.hij("Code: ",e.code,""),t.xp6(1),t.Q6J("cdkCopyToClipboard",e.code)}}const p=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class i{constructor(e,n){this._QuizService=e,this._Toastr=n,this.quizzes=[]}ngOnInit(){this.getIncoming5Quizzes()}getIncoming5Quizzes(){this._QuizService.getFirst5IncomingQuizzes().subscribe({next:e=>{console.log(e),this.quizzes=e}})}copyCode(){this._Toastr.success("Code copied to your clipboard")}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(c.g),t.Y36(h._W))};static#i=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],decls:7,vars:1,consts:[["id","quizes"],[1,"container-fluid"],[1,"row","mx-2","mt-4","quiz-header"],[1,"mt-3"],["class","col-md-6",4,"ngFor","ngForOf"],[1,"col-md-6"],[1,"m-3","quiz"],[1,"p-0","quiz-header"],[1,"row"],[1,"col-md-3","bg-beigeColor","d-flex","justify-content-center","align-items-center"],["src","../../../../../../assets/images/img.svg","alt",""],[1,"col-md-9","p-2"],[1,"d-flex","justify-content-between","pe-3"],[3,"cdkCopyToClipboard","click"],[1,"fa-solid","fa-copy","fs-2","fw-bold","pointer",2,"color","#c5d86d"]],template:function(n,a){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),t._uU(5,"Upcoming quizzes"),t.qZA()(),t.YNc(6,d,18,7,"div",4),t.qZA()()()),2&n&&(t.xp6(6),t.Q6J("ngForOf",a.quizzes))},dependencies:[u.sg,s.i3,u.uU]})}return i})()},{path:"quizes",loadChildren:()=>o.e(450).then(o.bind(o,8450)).then(i=>i.QuizesModule)},{path:"results",loadChildren:()=>o.e(268).then(o.bind(o,3268)).then(i=>i.ResultsModule)}];let g=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#i=this.\u0275mod=t.oAB({type:i});static#o=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(p),r.Bz]})}return i})();var z=o(7825);let f=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#i=this.\u0275mod=t.oAB({type:i});static#o=this.\u0275inj=t.cJS({imports:[u.ez,g,z.m]})}return i})()}}]);