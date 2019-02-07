// ==UserScript==
// @name         Add Scrape Config to Fiddle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add a button to Fastly Fiddle to capture its configuration components
// @author       Stephen Kiel
// @match        https://fiddle.fastlydemo.net/fiddle/*
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
    eButton.innerHTML = "Scrape Config";
    eButton.style.cssFloat = "right";
    eButton.style.backgroundColor = "orange";
    eButton.style.marginRight = "8px";
    eButton.onclick = function() {
        function myGetElementById(id) {
            var eTmp = document.getElementById(id);
            if (!eTmp) { throw new Error("Element with ID = \""+id+"\" not found"); }
            return eTmp;
        }
        function myGetElementsByClassName(eParent,className) {
            var colTmp = eParent.getElementsByClassName(className);
            if (colTmp.length==0) { throw new Error("Element with Class Name = \""+className+"\" not found"); }
            if (colTmp.length>1) { throw new Error("More than one element with Class Name = \""+className+"\" found"); }
            return colTmp[0];
        }
        function myCreateElement(eType,eParent,txtHtml) {
            var eTmp = document.createElement(eType);
            eParent.appendChild(eTmp);
            if (typeof txtHtml !== "undefined") { eTmp.innerHTML = txtHtml; }
            return eTmp;
        }
        var eDiv, eH1, eH2, eH3, eOl, eUl, colTmp, eTmp, boolTmp, txtTmp, ePre, colLabels, colSpans;
        eDiv = document.createElement("div");
        // Get Title
        txtTmp = myGetElementsByClassName(document,"fiddle-title").innerText;
        eH1 = myCreateElement("h1",eDiv,"Fiddle Name: " + ((txtTmp.includes("Click to set title")) ? "Untitled" : txtTmp));
        // Get Origin Servers
        eH2 = myCreateElement("h2",eDiv,"Origin Servers");
        eOl = myCreateElement("ol",eDiv);
        colTmp = document.getElementsByTagName("input");
        for (var i=0; i<colTmp.length; i++) {
            if (!colTmp[i].id.startsWith("origin-")) continue;
            if (colTmp[i].value == "") continue;
            myCreateElement("li",eOl,colTmp[i].value);
        }
        // Get Custom VCL
        eH2 = myCreateElement("h2",eDiv,"Custom VCL");
        colTmp = myGetElementsByClassName(document,"vcl-function-set").getElementsByTagName("h3");
        for (i=0; i<colTmp.length; i++) {
            eTmp = myGetElementById(colTmp[i].innerText.toLowerCase());
            boolTmp = eTmp.parentNode.className.includes("populated");
            eH3 = myCreateElement("h3",eDiv,colTmp[i].innerText + ((boolTmp)?"":" - No VCL"));
            if (!boolTmp) { continue; }
            txtTmp = myGetElementsByClassName(eTmp,"ace_content").innerText;
            myCreateElement("pre",eDiv,txtTmp);
        }
        // Get Request
        eH2 = myCreateElement("h2",eDiv,"Request to Send");
        eH3 = myCreateElement("h3",eDiv,"Request Path");
        txtTmp = myGetElementsByClassName(document,"request-field").children[0].value;
        myCreateElement("pre",eDiv,txtTmp);
        // Get Request Options
        colTmp = myGetElementsByClassName(document,"request-options");
        colLabels = colTmp.getElementsByTagName("label");
        colSpans = colTmp.getElementsByClassName("fake-link");
        if (colLabels.length==0 || colSpans.length!=colLabels.length) { throw new Error("Problems finding request options in page"); }
        for (i=0; i<colLabels.length; i++) {
            myCreateElement("h3",eDiv,colLabels[i].innerText.replace(/:$/,""));
            myCreateElement("pre",eDiv,colSpans[i].innerText);
        }
        // Get Request Headers
        if (colSpans[1].innerText.endsWith("custom")) {
            console.log(document.getElementsByClassName("request-textarea").length)
            boolTmp = (document.getElementsByClassName("request-textarea").length==0);
            console.log(boolTmp);
            if (!boolTmp) { colSpans[1].click(); } return;
            txtTmp = document.getElementsByClassName("request-textarea")[0].value;
            if (!boolTmp) { colSpans[1].click(); } alert("wait");
            myCreateElement("h3",eDiv,"Custom Headers");
            txtTmp = myGetElementsByClassName(document,"request-textarea").value;
            myCreateElement("pre",eDiv,txtTmp);
        }
        // Open and populate New Window
        var w=window.open();
        w.document.body.innerHTML = eDiv.innerHTML;
        myCreateElement("style",w.document.head,"body {font-family: arial}");
    };
})();