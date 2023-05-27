import{d as rs,r as S,a as G,w as T,l as w,o as _,c as f,b as O,e as t,f as A,v as $,u as o,F as N,g as V,h as B,t as m,n as C,i as z,j as us,k as ps,m as ms,p as _s}from"./vendor-44723ee6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const v of a.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&n(v)}).observe(document,{childList:!0,subtree:!0});function c(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=c(s);fetch(s.href,a)}})();const I=async function(i,e){try{let c=await fetch("Home/"+i,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:e?JSON.stringify(e):null});return c.ok?await c.json():null}catch(c){return console.log(c),null}};let h="";async function fs(){h=localStorage.getItem("darkMode")??"dark",h=h==="dark"?"dark":"light",document.body.classList.add(h),localStorage.setItem("darkMode",h)}function Ss(){document.body.classList.remove(h),h=h==="dark"?"light":"dark",document.body.classList.add(h),localStorage.setItem("darkMode",h)}fs();const E=rs("Store",()=>{const i=S([]),e=S([]),c=S([]),n=S([]),s=S([]),a=S([]),v=S("Home"),R=S(""),g=()=>{const l=d=>{var L;const b=d.FirstName+" "+d.LastName,k=P.value.toLowerCase(),U=w.includes((L=d.StudentId)==null?void 0:L.toLowerCase(),k),H=w.includes(b==null?void 0:b.toLowerCase(),k);return U||H},p=c.value.filter(l);n.value=p},P=S(""),j=()=>{const l=d=>{var L;const b=d.FirstName+" "+d.LastName,k=R.value.toLowerCase(),U=w.includes((L=d.StudentId)==null?void 0:L.toLowerCase(),k),H=w.includes(b==null?void 0:b.toLowerCase(),k);return U||H},p=i.value.filter(l);e.value=p},y=G({Id:void 0,StudentId:"",FirstName:"",LastName:"",StateId:-1,StateCode:"",MajorId:-1,MajorCode:"",GPA:void 0,Status:"A"}),u=G({StudentId:!0,FirstName:!0,LastName:!0,StateId:!0,MajorId:!0,GPA:!0,Submit:!1}),r=G({...y}),q=G({...y}),K=S(!1),D=S(!1),Q=/^\d{1}.\d{2}$/,W=(l,p)=>{let d=!0;u.StudentId=r.StudentId.trim()!=="",d&&(d=u.StudentId),u.FirstName=r.FirstName.trim()!=="",d&&(d=u.FirstName),u.LastName=r.LastName.trim()!="",d&&(d=u.LastName),u.StateId=r.StateId>0,d&&(d=u.StateId),u.MajorId=r.MajorId>0,d&&(d=u.MajorId),u.GPA=(r.GPA??0)>=0&&Q.test(String(r.GPA).trim()),d&&(d=u.GPA),u.Submit=d},x=S(!1),X=()=>{if(w.isEqual(r,q)){x.value=!1;return}x.value=!0},Y=()=>{Object.assign(r,y)};function Z(){F("AddEdit"),Object.assign(r,y),D.value=!D.value}function ss(l){F("AddEdit"),Object.assign(r,w.cloneDeep(e.value[l])),Object.assign(q,e.value[l]),D.value=!0}function es(){F("Home"),D.value=!1,Object.assign(r,y)}async function ts(){s.value=await I("GetStates")}async function os(){a.value=await I("GetMajors")}async function M(){i.value=[],c.value=[],(await I("StudentGetAll")).forEach(p=>{p.Status=="A"?(i.value.push(p),console.log("Added to Data")):(c.value.push(p),console.log("Added to Deleted Data"))}),j(),g()}async function ns(){return await I("CheckStudentId",r.StudentId)}async function as(){await ns()?(u.Submit=!1,u.StudentId=!1):(await I("StudentAdd",r),Object.assign(r,y),M(),D.value=!1)}async function ls(){await I("StudentUpdate",r),M()}async function cs(l){let p=i.value.findIndex(d=>d.Id==e.value[l].Id);e.value[l].Status="D",c.value.push(e.value[l]),i.value.splice(p,1),await I("StudentUpdate",e.value[l]),j(),g()}async function ds(l){let p=c.value.findIndex(d=>d.Id==n.value[l].Id);c.value[l].Status="A",i.value.push(n.value[l]),c.value.splice(p,1),await I("StudentUpdate",n.value[l]),j(),g()}async function is(l){let p=c.value.findIndex(d=>d.Id==n.value[l].Id);await I("StudentDelete",n.value[l]),c.value.splice(p,1),g()}function F(l){v.value=l}return T(R,()=>{g(),P.value=R.value}),T(P,()=>{j(),R.value=P.value}),T(r,(l,p)=>{X(),W(),K.value=x.value&&u.Submit},{deep:!0}),M(),os(),ts(),{AddPromptIsShown:D,CanSubmit:K,ComponentName:v,Data:i,DelSearchFilter:R,DelSortedData:n,MajorsDropdown:a,NewRecordInfo:r,RecordValidation:u,SearchFilter:P,SortedData:e,StatesDropdown:s,AddRecord:as,ClearAddPrompt:Y,CloseAddPrompt:es,DeleteRecord:cs,Display:F,DisplayAddPrompt:Z,DisplayEditPrompt:ss,EditRecord:ls,GetAllRecords:M,PurgeRecord:is,RestoreRecord:ds,SwitchColors:Ss}}),vs=(i,e)=>{const c=i.__vccOpts||i;for(const[n,s]of e)c[n]=s;return c},hs={};function Is(i,e){return _(),f("p",null,"This is a project made by Ryan Abdul-Kader for CSCI234 PLA")}const Cs=vs(hs,[["render",Is]]),As={class:"p-1 columns"},Ns=t("span",{class:"column is-11"},null,-1),bs=t("span",{class:"column is-3"},null,-1),ys=B('<div class="columns br unselectable p-1"><span class="column is-4">Student ID</span><span class="column is-9">Name</span><span class="column is-2">State</span><span class="column is-2">Major</span><span class="column is-2">GPA</span><span class="column is-2">Status</span><span class="column is-3">Action</span></div>',1),Ds={class:"column is-4"},ws={class:"column is-9"},$s={class:"column is-2"},Rs={class:"column is-2"},gs={class:"column is-2"},Ps={class:"column is-2"},ks={class:"column is-3"},Ls=["onClick"],js=["onClick"],Ms=O({__name:"Delete",setup(i){const e=E();return(c,n)=>(_(),f(N,null,[t("div",As,[A(t("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>o(e).DelSearchFilter=s),placeholder:"Search for Deleted Records",class:"column is-10"},null,512),[[$,o(e).DelSearchFilter]]),Ns,bs]),ys,(_(!0),f(N,null,V(o(e).DelSortedData,(s,a)=>(_(),f("div",{class:"columns br unselectable cell p-1",key:a},[t("span",Ds,m(s.StudentId),1),t("span",ws,m(s.FirstName+" "+s.LastName),1),t("span",$s,m(s.StateCode),1),t("span",Rs,m(s.MajorCode),1),t("span",gs,m(s.GPA),1),t("span",Ps,m(s.Status),1),t("span",ks,[t("button",{onClick:v=>o(e).RestoreRecord(a)},"Restore",8,Ls),t("button",{class:"ml-2",onClick:v=>o(e).PurgeRecord(a)},"Purge",8,js)])]))),128))],64))}}),Fs={class:"p-1 columns"},Gs=t("span",{class:"column is-11"},null,-1),Vs={class:"column is-3"},Os=B('<div class="columns br unselectable p-1"><span class="column is-4">Student ID</span><span class="column is-9">Name</span><span class="column is-2">State</span><span class="column is-2">Major</span><span class="column is-2">GPA</span><span class="column is-2">Status</span><span class="column is-3">Action</span></div>',1),Es={class:"column is-4"},xs={class:"column is-9"},Us={class:"column is-2"},Hs={class:"column is-2"},Ts={class:"column is-2"},Bs={class:"column is-2"},qs={class:"column is-3"},Ks=["onClick"],zs=["onClick"],Js=O({__name:"Home",setup(i){const e=E();return(c,n)=>(_(),f(N,null,[t("div",Fs,[A(t("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>o(e).SearchFilter=s),placeholder:"Search for Records",class:"column is-10"},null,512),[[$,o(e).SearchFilter]]),Gs,t("span",Vs,[t("button",{onClick:n[1]||(n[1]=(...s)=>o(e).GetAllRecords&&o(e).GetAllRecords(...s))},"Refresh"),t("button",{class:"ml-2",onClick:n[2]||(n[2]=(...s)=>o(e).DisplayAddPrompt&&o(e).DisplayAddPrompt(...s))},"Add")])]),Os,(_(!0),f(N,null,V(o(e).SortedData,(s,a)=>(_(),f("div",{class:"columns br unselectable cell p-1",key:a},[t("span",Es,m(s.StudentId),1),t("span",xs,m(s.FirstName+" "+s.LastName),1),t("span",Us,m(s.StateCode),1),t("span",Hs,m(s.MajorCode),1),t("span",Ts,m(s.GPA),1),t("span",Bs,m(s.Status),1),t("span",qs,[t("button",{onClick:v=>o(e).DisplayEditPrompt(a)},"Edit",8,Ks),t("button",{class:"ml-2",onClick:v=>o(e).DeleteRecord(a)},"Delete",8,zs)])]))),128))],64))}}),Qs={class:"p-1 columns"},Ws=t("span",{class:"column is-2"},null,-1),Xs=t("span",{class:"column is-6"},"First Name",-1),Ys=t("span",{class:"column is-6"},"Last Name",-1),Zs=t("span",{class:"column is-6"},"GPA",-1),se={class:"column is-3"},ee=["disabled"],te={class:"p-1 columns"},oe=t("span",{class:"column is-2"},null,-1),ne={class:"column is-6"},ae={class:"column is-6"},le={class:"column is-6"},ce=t("span",{class:"column is-3"},null,-1),de=B('<div class="p-1 columns"><span class="column is-2"></span><span class="column is-6">Student ID</span><span class="column is-6">State</span><span class="column is-6">Major</span><span class="column is-4"></span></div>',1),ie={class:"p-1 columns"},re=t("span",{class:"column is-2"},null,-1),ue={class:"column is-6"},pe={class:"column is-6"},me=["value"],_e={class:"column is-6"},fe=["value"],Se=t("span",{class:"column is-4"},null,-1),ve=O({__name:"AddEdit",setup(i){const e=E();return(c,n)=>(_(),f(N,null,[t("div",Qs,[Ws,Xs,Ys,Zs,t("span",se,[t("button",{class:"ml-2",onClick:n[0]||(n[0]=(...s)=>o(e).AddRecord&&o(e).AddRecord(...s)),disabled:!o(e).CanSubmit},"Submit",8,ee),t("button",{class:"ml-1",onClick:n[1]||(n[1]=(...s)=>o(e).ClearAddPrompt&&o(e).ClearAddPrompt(...s))},"Clear"),t("button",{class:"ml-1",onClick:n[2]||(n[2]=(...s)=>o(e).CloseAddPrompt&&o(e).CloseAddPrompt(...s))},"Close")])]),t("div",te,[oe,t("span",ne,[A(t("input",{"onUpdate:modelValue":n[3]||(n[3]=s=>o(e).NewRecordInfo.FirstName=s),class:C({"is-danger":!o(e).RecordValidation.FirstName}),placeholder:"First Name"},null,2),[[$,o(e).NewRecordInfo.FirstName]])]),t("span",ae,[A(t("input",{"onUpdate:modelValue":n[4]||(n[4]=s=>o(e).NewRecordInfo.LastName=s),class:C({"is-danger":!o(e).RecordValidation.LastName}),placeholder:"Last Name"},null,2),[[$,o(e).NewRecordInfo.LastName]])]),t("span",le,[A(t("input",{"onUpdate:modelValue":n[5]||(n[5]=s=>o(e).NewRecordInfo.GPA=s),class:C({"is-danger":!o(e).RecordValidation.GPA}),placeholder:"Format: #.##"},null,2),[[$,o(e).NewRecordInfo.GPA]])]),ce]),de,t("div",ie,[re,t("span",ue,[A(t("input",{"onUpdate:modelValue":n[6]||(n[6]=s=>o(e).NewRecordInfo.StudentId=s),class:C({"is-danger":!o(e).RecordValidation.StudentId}),placeholder:"Student ID"},null,2),[[$,o(e).NewRecordInfo.StudentId]])]),t("span",pe,[A(t("select",{"onUpdate:modelValue":n[7]||(n[7]=s=>o(e).NewRecordInfo.StateId=s),class:C({"is-danger":!o(e).RecordValidation.StateId})},[(_(!0),f(N,null,V(o(e).StatesDropdown,(s,a)=>(_(),f("option",{key:a,value:s.Id},m(s.Code+" - "+s.State),9,me))),128))],2),[[z,o(e).NewRecordInfo.StateId]])]),t("span",_e,[A(t("select",{"onUpdate:modelValue":n[8]||(n[8]=s=>o(e).NewRecordInfo.MajorId=s),class:C({"is-danger":!o(e).RecordValidation.MajorId})},[(_(!0),f(N,null,V(o(e).MajorsDropdown,(s,a)=>(_(),f("option",{key:a,value:s.Id},m(s.Code+" - "+s.Name),9,fe))),128))],2),[[z,o(e).NewRecordInfo.MajorId]])]),Se])],64))}});const he={class:"br"},Ie=t("span",{class:"column is-2"},null,-1),Ce=t("span",{class:"column is-14"},null,-1),Ae=t("span",{class:"column is-2"},null,-1),Ne={class:"br p-1"},be=t("footer",{class:"br p-1"},[t("sub",null,"PLA2023")],-1),ye=O({__name:"App",setup(i){const e=E(),c={About:Cs,Delete:Ms,Home:Js,AddEdit:ve};return(n,s)=>(_(),f(N,null,[t("header",he,[t("button",{onClick:s[0]||(s[0]=(...a)=>o(e).SwitchColors&&o(e).SwitchColors(...a))}," Switch Theme "),t("nav",{class:"columns is-23 p-2",onClick:s[4]||(s[4]=a=>o(e).AddPromptIsShown=!1)},[Ie,t("h1",{onClick:s[1]||(s[1]=a=>o(e).Display("Home")),class:C(["column is-3",{"is-active":o(e).ComponentName=="Home"}])}," Home ",2),t("h1",{onClick:s[2]||(s[2]=a=>o(e).Display("Delete")),class:C(["column is-3",{"is-active":o(e).ComponentName=="Delete"}])}," Trash Can ",2),Ce,t("h1",{onClick:s[3]||(s[3]=a=>o(e).Display("About")),class:C(["column is-1",{"is-active":o(e).ComponentName=="About"}])}," About ",2),Ae])]),t("main",Ne,[(_(),us(ps(c[o(e).ComponentName])))]),be],64))}}),J=ms(ye);J.use(_s());J.mount("#app");