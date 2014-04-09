var script = document.createElement('script');
script.src = chrome.extension.getURL('code.js');
if (top === window) document.head.appendChild(script);