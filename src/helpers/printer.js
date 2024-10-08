export const printer = (content, path = '',  dev_mode = false) => {
  return new Promise((resolve) => {
    const iframe = document.createElement('iframe')
    iframe.src = path || ''
    iframe.addEventListener('load', function (ev) {
      iframe.contentDocument.write(content)
      if (! dev_mode) {
        setTimeout(function () {
          iframe.contentWindow.print()
          setTimeout(function () {
            iframe.remove()
            resolve(true)
          }, 500)
        }, 3000)
      }
    })
    document.body.appendChild(iframe)
  })
}
