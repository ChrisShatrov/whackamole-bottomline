!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=new class{run(){var e;alert("Get ready, Stewie!"),e=setInterval(function(){document.getElementById("timeLeft").innerHTML=n,c(),0==n?(clearInterval(e),alert("GAME OVER! You killed Louis "+t+" times.")):n--},1e3);var t=0,n=25,o=0;function i(e){t+=1,document.getElementById("points").innerHTML=t,document.getElementById("lois"+e).src="img/bloodyLois.png",setTimeout(function(){document.getElementById("lois"+e).src="img/Lois.png"},1e3),c()}function c(){const e=function e(){const t=Math.floor(6*Math.random()+1);return t===o?e():(o=t,t)}();document.getElementById("lois"+e).style.display="block",setTimeout(()=>{document.getElementById("lois"+e).style.display="none"},950)}document.getElementById("points").innerHTML=0,document.getElementById("startNewGameButton").style.display="none",document.getElementById("stopGameButton").style.display="block",document.getElementById("inactive-game-container").style.display="none",document.getElementById("active-game-container").style.display="block",document.getElementById("lois1").addEventListener("click",function(){i(1)},!1),document.getElementById("lois2").addEventListener("click",function(){i(2)},!1),document.getElementById("lois3").addEventListener("click",function(){i(3)},!1),document.getElementById("lois4").addEventListener("click",function(){i(4)},!1),document.getElementById("lois5").addEventListener("click",function(){i(5)},!1),document.getElementById("lois6").addEventListener("click",function(){i(6)},!1)}stop(){}};document.addEventListener("DOMContentLoaded",()=>{document.getElementById("startNewGameButtonInitial").addEventListener("click",o.run),document.getElementById("startNewGameButton").addEventListener("click",o.run),document.getElementById("stopGameButton").addEventListener("click",function(){document.getElementById("inactive-game-container").style.display="none",document.getElementById("active-game-container").style.display="block"},!1),document.getElementById("exitGameButton").addEventListener("click",function(){document.getElementById("inactive-game-container").style.display="block",document.getElementById("active-game-container").style.display="none"},!1)})}]);