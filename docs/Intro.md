# Introduction

## Point of failure:

When delivering the entire app in one render-blocking package, you might run into JS code loading errors. Don't make JS your app's single point of failure."

### Using a failover loader
The first render should be on the server, and give the user some content if that JS fails to load. The code that loads the “App” (odeum-codejs) container should be an HTML file which loads a container to control whether our JS code is actually running and is accessible on the server. If not, there should be static HTML package loading a temporary app setup displaying the errors and tries to reload the main app container until no errors are reported.

### Offline-first approach
Offline-first – hence treating the network as an enhancement with JS tools like Service Worker and IndexedDB – has become the new standard for building fast, resilient websites. It is possible to do both traditional progressive enhancement and offline-first, but it's not easy. We should prioritize offline-first over works-without-JS."

# React and JS libraries and technology facilitated and used in odeum-codejs:

React, ReactDOM, Styled-Components, Redux, React Router, DraftJS, Immutable, (Relay), GraphQL, NodeJS, Google Maps (react-google-maps), Docker ... (more to come)

<a href="./BasicUIComponents.md" target="_blank">Checkout Basic UI Components</a>

<a href="./Guidelines.md" target="_blank">Checkout Guidelines</a>

<a href="./AppComponents.md" target="_blank">App Components</a>
