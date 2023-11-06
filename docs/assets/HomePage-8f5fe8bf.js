import{y,A as i,P as C,l as b,_ as L,r as v,d as P,e as p,b as k,f as x,o as r,c as l,a as n,F as _,g as f,w as B,v as Y,t as g,h as A}from"./index-413bbdb6.js";class S{constructor(t){this.id=t.id,this.level=t.difficulty_level,this.name=t.english_name}}class K{async getPoses(){const t=await y.get("/poses");i.poses=t.data.map(a=>new C(a))}async getPosesByLevel(t){const a=await y.get(`poses?level=${t}`);i.addLevelsArray=a.data.poses.map(e=>new S(e)),i.poses.forEach(e=>{for(let c=0;c<i.addLevelsArray.length;c++)e.englishName==i.addLevelsArray[c].name&&(e.level=t[0].toUpperCase()+t.slice(1))}),i.poses.forEach(e=>{e.englishName=="Bridge"&&(e.level="Intermediate")})}async searchByKind(t){if(t=="All Kinds"){this.getPoses();return}const a=await y.get(`/categories?name=${t}`);b.log(a.data),i.poses=a.data.poses.map(e=>new C(e))}}const u=new K;const E={setup(){let d=["beginner","intermediate","expert"],t=["All Kinds","Core Yoga","Seated Yoga","Strengthening Yoga","Chest Opening Yoga","Backbend Yoga","Forward Bend Yoga","Hip Opening Yoga","Standing Yoga","Restorative Yoga","Arm Balance Yoga","Balancing Yoga","Inversion Yoga"],a=v(""),e=v("Choose a Category"),c=v("All Poses");P(()=>{w()});async function w(){try{b.log("HomePage"),await u.getPoses(),o()}catch(s){p.error(s)}}async function m(s){try{await u.getPosesByLevel(s)}catch(h){p.error(h)}}function o(){d.forEach(s=>{m(s)})}return{poses:k(()=>a.value!=""?i.poses.filter(s=>s.level.toLocaleLowerCase()==a.value):i.poses),kinds:t,poseLevels:d,filteredLevel:a,wantedCategory:e,currentCategory:c,runThroughLevels:o,filterLevel(s){a.value=s},async searchByKind(s){try{await u.searchByKind(s),c.value=s,this.runThroughLevels(),e.value="Choose a category"}catch(h){p.error(h)}}}}},H={class:"container-fluid bg-theme-beige-lighten"},N={class:"row justify-content-center"},F={class:"col-11 col-md-12 bg-theme-darkgreen d-md-flex rounded mt-4 mb-3"},I=["onClick"],U={class:"col-12 col-md-3 d-flex flex-column"},V={selected:""},j={class:"col-12 col-md-6 mt-5 mt-md-3 d-flex align-items-center justify-content-center"},D={class:"fs-1 text-theme-darkgreen text-shadow-maroon"},M={class:"row"},O={key:0,class:"col-12 my-3"},T={key:1};function R(d,t,a,e,c,w){const m=x("PoseCard");return r(),l("div",H,[n("section",N,[n("div",F,[n("button",{onClick:t[0]||(t[0]=o=>e.filterLevel("")),class:"btn btn-theme-maroon w-100 mx-md-3 my-2"}," All Levels "),(r(!0),l(_,null,f(e.poseLevels,o=>(r(),l("button",{onClick:s=>e.filterLevel(o),class:"btn btn-theme-maroon w-100 mx-md-3 my-2",key:o},g(o[0].toUpperCase()+o.slice(1)),9,I))),128))]),n("div",U,[B(n("select",{"onUpdate:modelValue":t[1]||(t[1]=o=>e.wantedCategory=o),class:"form-select form-select-lg mb-3 text-theme-maroon bg-theme-lightgreen py-0 search-button","aria-label":".form-select-lg example",id:"kinds"},[n("option",V,g(e.wantedCategory),1),(r(!0),l(_,null,f(e.kinds,o=>(r(),l("option",{key:o},g(o),1))),128))],512),[[Y,e.wantedCategory]]),n("button",{onClick:t[2]||(t[2]=o=>e.searchByKind(e.wantedCategory)),class:"btn btn-theme-maroon ms-2 change-kind-button"},"Change Category")]),n("div",j,[n("p",D,g(e.currentCategory),1)])]),n("section",M,[e.poses?(r(),l("div",O,[(r(!0),l(_,null,f(e.poses,o=>(r(),l("div",{key:o.id},[A(m,{poseProp:o},null,8,["poseProp"])]))),128))])):(r(),l("div",T," Loading... "))])])}const z=L(E,[["render",R],["__scopeId","data-v-efe9a2d4"]]);export{z as default};
