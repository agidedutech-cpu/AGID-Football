// ===============================
// AGID Football Loader
// Version 1.0
// ===============================

console.log("AGID Loader Started");
if(typeof matchConfig==="undefined"){

alert("Match configuration not found.");

throw new Error("matchConfig is missing.");

}

const wrapper=document.getElementById("agid-player");

if(!wrapper){

throw new Error("Player container missing.");

}
wrapper.innerHTML=`

<div class="loading">

Loading Match...

</div>

`;
