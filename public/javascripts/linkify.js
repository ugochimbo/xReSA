/*
 *  Linkify - v1.1.3
 *  Find URLs in plain text and return HTML for discovered links.
 *  https://github.com/HitSend/jQuery-linkify/
 *
 *  Made by SoapBox Innovations, Inc.
 *  Under MIT License
 */
!function(a,b,c,d){"use strict";function e(a,b){this._defaults=f,this.element=a,this.setOptions(b),this.init()}var f={tagName:"a",newLine:"\n",target:"_blank",linkClass:null,linkClasses:[],linkAttributes:null};e.prototype={constructor:e,init:function(){1===this.element.nodeType?e.linkifyNode.call(this,this.element):this.element=e.linkify.call(this,this.element.toString())},setOptions:function(a){this.settings=e.extendSettings(a,this.settings)},toString:function(){return this.element.toString()}},e.extendSettings=function(a,b){var c;b=b||{};for(c in f)b[c]||(b[c]=f[c]);for(c in a)b[c]=a[c];return b},e.linkMatch=new RegExp(["(",'\\s|[^a-zA-Z0-9.\\+_\\/"\\>\\-]|^',")(?:","(","[a-zA-Z0-9\\+_\\-]+","(?:","\\.[a-zA-Z0-9\\+_\\-]+",")*@",")?(","http:\\/\\/|https:\\/\\/|ftp:\\/\\/",")?(","(?:(?:[a-z0-9][a-z0-9_%\\-_+]*\\.)+)",")(","(?:com|ca|co|edu|gov|net|org|dev|biz|cat|int|pro|tel|mil|aero|asia|coop|info|jobs|mobi|museum|name|post|travel|local|[a-z]{2})",")(","(?:","[\\/|\\?]","(?:","[\\-a-zA-Z0-9_%#*&+=~!?,;:.\\/]*",")*",")","[\\-\\/a-zA-Z0-9_%#*&+=~]","|","\\/?",")?",")(",'[^a-zA-Z0-9\\+_\\/"\\<\\-]|$',")"].join(""),"g"),e.emailLinkMatch=/(<[a-z]+ href=\")(http:\/\/)([a-zA-Z0-9\+_\-]+(?:\.[a-zA-Z0-9\+_\-]+)*@)/g,e.linkify=function(a,b){var c,d,f,g=[];this.constructor===e&&this.settings?(d=this.settings,b&&(d=e.extendSettings(b,d))):d=e.extendSettings(b),f=d.linkClass?d.linkClass.split(/\s+/):[],f.push.apply(f,d.linkClasses),a=a.replace(/</g,"&lt;").replace(/(\s)/g,"$1$1"),g.push("$1<"+d.tagName,'href="http://$2$4$5$6"'),g.push('class="linkified'+(f.length>0?" "+f.join(" "):"")+'"'),d.target&&g.push('target="'+d.target+'"');for(c in d.linkAttributes)g.push([c,'="',d.linkAttributes[c].replace(/\"/g,"&quot;").replace(/\$/g,"&#36;"),'"'].join(""));return g.push(">$2$3$4$5$6</"+d.tagName+">$7"),a=a.replace(e.linkMatch,g.join(" ")),a=a.replace(e.emailLinkMatch,"$1mailto:$3"),a=a.replace(/(\s){2}/g,"$1"),a=a.replace(/\n/g,d.newLine)},e.linkifyNode=function(a){var b,d,f,g,h;if(a&&"object"==typeof a&&1===a.nodeType&&"a"!==a.tagName.toLowerCase()&&!/[^\s]linkified[\s$]/.test(a.className)){for(b=[],g=e._dummyElement||c.createElement("div"),d=a.firstChild,f=a.childElementCount;d;){if(3===d.nodeType){for(;g.firstChild;)g.removeChild(g.firstChild);for(g.innerHTML=e.linkify.call(this,d.textContent||d.innerText),b.push.apply(b,g.childNodes);g.firstChild;)g.removeChild(g.firstChild)}else 1===d.nodeType?b.push(e.linkifyNode(d)):b.push(d);d=d.nextSibling}for(;a.firstChild;)a.removeChild(a.firstChild);for(h=0;h<b.length;h++)a.appendChild(b[h])}return a},e._dummyElement=c.createElement("div"),a.fn.linkify=function(b){return this.each(function(){var c;(c=a.data(this,"plugin-linkify"))?(c.setOptions(b),c.init()):a.data(this,"plugin-linkify",new e(this,b))})},a.fn.linkify.Constructor=e,a(b).on("load",function(){a("[data-linkify]").each(function(){var b,c=a(this),e=c.attr("data-linkify"),f={tagName:c.attr("data-linkify-tagname")||d,newLine:c.attr("data-linkify-newline")||d,target:c.attr("data-linkify-target")||d,linkClass:c.attr("data-linkify-linkclass")||d};b="this"===e?c:c.find(e),b.linkify(f)})}),a("body").on("click",".linkified",function(){var c=a(this),d=c.attr("href"),e=/^mailto:/i.test(d),f=c.attr("target");return e?b.location.href=d:b.open(d,f),!1})}(jQuery,window,document);