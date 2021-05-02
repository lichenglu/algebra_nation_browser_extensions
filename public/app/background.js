// let appState = {}

// // to initialize the all data using the storage
// chrome.storage.sync.get('appState', function(data) {
//     // check if data exists.
//     if (data) {
//         appState = data;
//     }
// });

// // watch for state change
// const watchedAppState = onChange(appState, function (path, value, previousValue, name) {
// 	chrome.storage.sync.set({
//         'appState': onChange.target(this)
//     })
//     chrome.runtime.sendMessage({ type: 'ON_POP_UP_STATE_UPDATE', payload: onChange.target(this) })
// });

// // listen for messages
// chrome.runtime.onMessage.addListener((message) => {
//     switch(message.type) {
//       case 'RECEIVE_USER_NAME':
//         watchedAppState.userName = message.payload
//         break
//       default:
//         break
//     }
// });

// // on open pop-up
// chrome.browserAction.onClicked.addListener((tab) => {
//     console.log('appState', appState)
//     chrome.runtime.sendMessage({ type: 'ON_POP_UP_STATE_UPDATE', payload: appState })
// });
