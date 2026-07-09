/*!
 * AGID Football Framework
 * Version: 1.0.0
 * Author: AGID EDU TECH
 */

(function (window) {

"use strict";

const AGID = {

version: "1.0.0",

init:function(config){

const required=[

"matchId",

"competition",

"teams",

"streams"

];

required.forEach(item=>{

if(!(item in config)){

throw new Error(

item+" is missing."

);

}

});

console.log("Configuration Valid");

}

};

window.AGID = AGID;

})(window);
