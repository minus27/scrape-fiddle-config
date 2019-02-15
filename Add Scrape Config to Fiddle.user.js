// ==UserScript==
// @name         Add Scrape Config to Fiddle
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Add a button to Fastly Fiddle to capture its configuration components
// @author       Stephen Kiel
// @include      /^https://fiddle.fastlydemo.net((/)|(/fiddle/.*))?$/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function myGetElementsByClassName(eParent,className) {
        var colTmp = eParent.getElementsByClassName(className);
        if (colTmp.length==0) { throw new Error("Element with Class Name = \""+className+"\" not found"); }
        if (colTmp.length>1) { throw new Error("More than one element with Class Name = \""+className+"\" found"); }
        return colTmp[0];
    }
    var eParent = myGetElementsByClassName(document,"request").children[0], eButton = document.createElement("button");
    eParent.appendChild(eButton);
    eButton.innerHTML = "Get Config";
    eButton.style.cssFloat = "right";
    eButton.style.backgroundColor = "orange";
    eButton.style.marginRight = "8px";
    eButton.onclick = function() {
        if (/^\/fiddle\//.test(location.pathname)) {
            window.open("https://get-fastly-fiddle-config.glitch.me/?"+location.pathname.replace(/^.*\//,""), "_blank");
        } else {
            alert("Unexpected Path");
        }
    };
})();
