const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.disabled=!0,interval=null;t.addEventListener("click",(function(){interval=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(interval),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.2d5c3b1e.js.map
