function getFileName(){var e=document.getElementById("language").value||"en",t=document.getElementById("minimum-level").value||"advice";return"https://lepszyweb.github.io/a11y.css/css/a11y-"+e+(t="advice"!==t?"_"+t:"")+".css"}function getBookmarkletContent(){return["javascript:","(function(){",'a11ycss=document.createElement("LINK");','a11ycss.href="'+getFileName()+'";','a11ycss.rel="stylesheet";','a11ycss.media="all";',"document.body.appendChild(a11ycss);","})();"].join("")}function activeAnchor(e){var t=(e=e||document.getElementById("toc")).getElementsByTagName("a");for(i=0;i<t.length;i++)0<=document.location.href.indexOf(t[i].href)&&t[i].classList.add("active-test")}function handleTocClick(e){var t=e.target,e=document.querySelector(".active-test");e&&e.removeAttribute("class"),"a"===t.tagName.toLowerCase()&&t.classList.add("active-test")}function handleFormSubmit(e){e.preventDefault();e=document.getElementById("bookmarklet--link");e.setAttribute("href",getBookmarkletContent()),e.classList.add("done")}function handleFormChange(){document.getElementById("bookmarklet--link").classList.remove("done")}document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("bookmarklet");e&&(e.addEventListener("submit",handleFormSubmit),e.addEventListener("change",handleFormChange));e=document.getElementById("toc");e&&(e.addEventListener("click",handleTocClick),activeAnchor(e))});