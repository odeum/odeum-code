export default function register() {
	if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`
			navigator.serviceWorker
				.register(swUrl)
				.then(registration => {
					registration.onupdatefound = () => {
						const installingWorker = registration.installing
						installingWorker.onstatechange = () => {
							if (installingWorker.state === 'installed') {
								if (navigator.serviceWorker.controller) {
									// At this point, the old content will have been purged and
									// the fresh content will have been added to the cache.
									// It's the perfect time to display a "New content is
									// available please refresh." message in your web app.

									/*eslint-disable*/
                  console.log('New content is available please refresh.')
                  /*eslint-enable*/
								} else {
									// At this point, everything has been precached.
									// It's the perfect time to display a
									// "Content is cached for offline use." message.
									/*eslint-disable*/
                  console.log('Content is cached for offline use.')
                  /*eslint-enable*/
								}
							}
						}
					}
				})
				.catch(error => {
					/*eslint-disable*/
          console.error('Error during service worker registration:', error)
          /*eslint-enable*/
				})
		})
	}
}

export function unregister() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.ready.then(registration => {
			registration.unregister()
		})
	}
}
