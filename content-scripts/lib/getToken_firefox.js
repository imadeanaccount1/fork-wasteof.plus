console.log('injected script running1')
console.log('getting wrapped object', window.wrappedJSObject.$nuxt)
console.log('getting token1', window.wrappedJSObject.$nuxt)
console.log('getting token', window.wrappedJSObject.$nuxt.$auth.token)

document.querySelector('body').dataset.token = window.wrappedJSObject.$nuxt.$auth.token

document.querySelector('body').dataset.loggedIn = window.wrappedJSObject.$nuxt.$auth.loggedIn
if (window.wrappedJSObject.$nuxt.$auth.loggedIn) {
  document.querySelector('body').dataset.userId = window.wrappedJSObject.$nuxt.$auth.user.id
  document.querySelector('body').dataset.username = window.wrappedJSObject.$nuxt.$auth.user.name
  const permissions = { permissions: window.wrappedJSObject.$nuxt.$auth.user.permissions }
  permissions.beta = window.wrappedJSObject.$nuxt.$auth.user.beta
  permissions.verified = window.wrappedJSObject.$nuxt.$auth.user.verified

  document.querySelector('body').dataset.permissions = JSON.stringify(permissions)
}
console.log('getting token', window.wrappedJSObject.$nuxt.$auth.token)
const event = new CustomEvent('PassToBackgroundToken', { detail: 'HELLO!!!' })
window.dispatchEvent(event)
// chrome.runtime.sendMessage(document.querySelector('#getTokenScript1').dataset.extensionId, { type: 'login-token', token: document.querySelector('body').dataset.token }, function (response) {
//   console.log('Response: ', response)
// })

// console.log("token and theme being retrieved")
// document.querySelector("body").dataset.theme = $nuxt.$colorMode._scope.effects[1].value;
