/*!
====================================================
AGID Football Framework
Version : 2.0.0
Author  : AGID EDU TECH
====================================================
*/

(function (window, document) {

"use strict";

const AGID = {

version:"2.0.0",

config:null,

container:null,

init:function(config){

if(!config){
console.error("AGID Config Missing");
return;
}

this.config=config;

this.container=document.getElementById(
config.container || "agid-player"
);

if(!this.container){
console.error("Container not found.");
return;
}

this.loadCSS();

},

loadCSS:function(){

const css=document.createElement("link");

css.rel="stylesheet";

css.href=this.config.base+"player.css";

css.onload=()=>{

this.loadHTML();

};

document.head.appendChild(css);

},

loadHTML:function(){

fetch(this.config.base+"player.html")

.then(response=>response.text())

.then(html=>{

this.container.innerHTML=html;

this.loadPlayer();

})

.catch(error=>{

console.error(error);

this.container.innerHTML=
"<h2 style='padding:20px;text-align:center'>Unable to load player.html</h2>";

});

},

loadPlayer:function(){

const old=document.getElementById("agid-player-script");

if(old){
old.remove();
}

const script=document.createElement("script");

script.id="agid-player-script";

script.src=this.config.base+"player.js";

script.onload=()=>{

if(typeof AGID_PLAYER!=="undefined"){

AGID_PLAYER.init(this.config);

}

};

document.body.appendChild(script);

}

};

window.AGID=AGID;

})(window,document);
