importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js");

if ("serviceWorker" in navigator) {
    if (firebase.messaging.isSupported()) {
        navigator.serviceWorker
            .register("../firebase-messaging-sw.js")
            .then(function (registration) {
                console.log(
                    "Registration successful, scope is:",
                    registration.scope
                );
            })
            .catch(function (err) {
                console.log("Service worker registration failed, error:", err);
            });
    }
}
self.addEventListener("notificationclick", (event) => {
    const rootUrl = new URL("/", location).href;
    event.notification.close();
    // Enumerate windows, and call window.focus(), or open a new one.
    event.waitUntil(
        clients.matchAll().then((matchedClients) => {
            for (let client of matchedClients) {
                if (client.url === rootUrl) {
                    return client.focus();
                }
            }
            return clients.openWindow("/");
        })
    );
});

firebase.initializeApp({
    messagingSenderId: "945079123724",
});
// if (firebase.messaging.isSupported()) {
const initMessaging = firebase.messaging();
// }

// test for commit
