!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},n=null;function a(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.stopBtn.disabled=!0,t.startBtn.addEventListener("click",(function(){t.startBtn.disabled=!0,t.stopBtn.disabled=!1,a(),n=setInterval((function(){a()}),1e3)})),t.stopBtn.addEventListener("click",(function(){t.stopBtn.disabled=!0,t.startBtn.disabled=!1,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.dfe47d43.js.map
