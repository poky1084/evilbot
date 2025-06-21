function addJs(src, cb) {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.onload = cb;
    document.head.appendChild(s);
}

addJs(chrome.runtime.getURL('js/jquery-3.6.0.min.js'), () => {
addJs(chrome.runtime.getURL('js/codemirror.min.js'), () => {
addJs(chrome.runtime.getURL('js/javascript.min.js'), () => {
addJs(chrome.runtime.getURL('js/canvasjs.min.js'), () => {
addJs(chrome.runtime.getURL('js/lua.min.js'), () => {
addJs(chrome.runtime.getURL('js/fengari.js'), () => {
addJs(chrome.runtime.getURL('js/chart.js'), () => {
addJs(chrome.runtime.getURL('js/easytimer.js'), () => {
addJs(chrome.runtime.getURL('js/crypto-js.min.js'), () => {
addJs(chrome.runtime.getURL('js/fengari-web.js'), () => {
  // ✅ FINAL script
  addJs(chrome.runtime.getURL('index.js'));
});});});});});});});});});});
