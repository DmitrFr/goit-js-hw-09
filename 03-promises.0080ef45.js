!function(){var e=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),t=document.querySelector('input[name="amount"]'),u=document.querySelector("form"),o=document.querySelector("button"),c=1,a=null;function l(){var u,l,r,i=(u=c,l=e.value,r=Math.random()>.3,new Promise((function(t,o){var a=Number(e.value)+Number(n.value)*(c-1);setTimeout((function(){r?t("✅ Fulfilled promise ".concat(u," in ").concat(a,"ms")):o("❌ Rejected promise ".concat(u," in ").concat(a,"ms"))}),l)})));(c+=1)>Number(t.value)&&(clearInterval(a),c=1,o.disabled=!1),i.then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}u.addEventListener("submit",(function(t){t.preventDefault(),o.disabled=!0,setTimeout((function(){l(),a=setInterval((function(){l()}),n.value)}),e.value)}))}();
//# sourceMappingURL=03-promises.0080ef45.js.map
