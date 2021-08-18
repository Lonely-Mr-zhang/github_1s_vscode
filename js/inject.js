function clickGithub1s() {
    // console.log('clickGithub1s...')
    // https://github.com/*/*
    let oldUrl = window.location.href
    let newUrl = oldUrl.slice(0,14) + '1s' + oldUrl.slice(14)
    // console.log(`newUrl: ${newUrl}`)
    window.location.href = newUrl
}

(function () {
    // console.log('绑定点击事件')
    let button = document.getElementById('github_1s_vscode_id')
    button.onclick = clickGithub1s
})()
