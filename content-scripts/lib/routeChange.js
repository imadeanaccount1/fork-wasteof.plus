console.log('route change script loaded/injected', window.$nuxt)

window.eval(`
$nuxt.$router.afterEach((to, from) => {
  console.log('route changed from content script!')
})

`)
window.unwrapJSObject.$nuxt.$router.afterEach((to, from) => {
  console.log('route changed')

  //   const extensionId = document.querySelector('#routeChangeScript').dataset.extensionId
  //   console.log('the extension id is ', extensionId)

  //   chrome.runtime.sendMessage(extensionId, { recording_started: true },
  //     function (response) {
  //       console.log('sent@')
  //     })

  //   window.postMessage({
  //     type: 'FROM_PAGE',
  //     text: 'reload'
  //   }, '*')

  const event = new CustomEvent('PassToBackgroundRoute', { detail: 'HELLO!!!' })
  window.dispatchEvent(event)
})
