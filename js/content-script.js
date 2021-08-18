(function injectCustomJs(jsPath) {
    // console.log('injectCustomJs...')
    jsPath = jsPath || 'js/inject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(jsPath);
    // console.log(`src: ${temp.src}`)
    temp.onload = function () {
        // console.log('injectCustomJs end ....')
        // 放在页面不好看，执行完后移除掉
        this.parentNode.removeChild(this);
    };
    document.head.appendChild(temp);
})();

(function injectDomElement() {
    // console.log('injectDomElement...')
    var button = document.createElement('button')
    button.innerText = 'github_1s_vscode'
    button.id = 'github_1s_vscode_id'
    document.body.appendChild(button)
})();
