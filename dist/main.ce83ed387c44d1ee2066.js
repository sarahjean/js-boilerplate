webpackJsonp([0],[function(e,t,n){(function(e,t){"use strict";n(2);var r=n(4);(0,r.getUsers)().then(function(t){(0,r.populateAPIDOM)(t),(0,r.removeAPIUsers)(e.document.getElementsByClassName("deleteUser"))}),console.log("- - - - - - - - "),t.env.mode="TESTING",console.log(t.env)}).call(t,function(){return this}(),n(1))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function u(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){p&&h&&(p=!1,h.length?m=h.concat(m):v=-1,m.length&&c())}function c(){if(!p){var e=o(i);p=!0;for(var t=m.length;t;){for(h=m,m=[];++v<t;)h&&h[v].run();v=-1,t=m.length}h=null,p=!1,u(e)}}function s(e,t){this.fun=e,this.array=t}function a(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var h,m=[],p=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new s(e,t)),1!==m.length||p||o(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=a,d.addListener=a,d.once=a,d.off=a,d.removeListener=a,d.removeAllListeners=a,d.emit=a,d.prependListener=a,d.prependOnceListener=a,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t){},,function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){return i("users")}function u(e){return c("users/"+e)}function i(e){return fetch(m+e).then(s,f)}function c(e){var t=new Request(m+e,{method:"DELETE"});return fetch(t).then(s,f)}function s(e){return e.json()}function a(t){e.document.getElementById("userAPI").innerHTML="<h4>API Data from: "+m+"users",e.document.getElementById("userAPI").innerHTML+='</h4><table><tbody id="users"></tbody></table>';var n="";t.forEach(function(e){n+="<tr>\n        <td>"+e.id+"</td>\n        <td>"+e.firstName+"</td>\n        <td>"+e.lastName+"</td>\n        <td>"+e.email+'</td>\n        <td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n        </tr>'}),e.document.getElementById("users").innerHTML=n}function l(e){Array.from(e,function(e){e.onclick=function(e){var t=e.target;e.preventDefault(),u(t.attributes["data-id"].value);var n=t.parentNode.parentNode;n.parentNode.removeChild(n)}})}function f(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=o,t.populateAPIDOM=a,t.removeAPIUsers=l,n(5);var d=n(6),h=r(d),m=(0,h["default"])()}).call(t,function(){return this}())},,function(e,t){"use strict";function n(){return"https://mysterious-dawn-16770.herokuapp.com/"}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n}]);
//# sourceMappingURL=main.ce83ed387c44d1ee2066.js.map