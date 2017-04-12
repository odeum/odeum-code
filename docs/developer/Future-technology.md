# Future Technology for ODEUM CodeJS

SS: Server-side
CS: Client-side

## Relay + GraphQL
Is a possibility to use instead of Redux and Actions (services) to get and store data and manage state. 

## State Recorder (Time Travel) (SS/CS)
A system to remotely record the client app state history so you will be able to time travel the client solution in a support/error finding prespective. The state history should be stored in a client app database. 

Check NPM (redux-state-history, redux-dev-tools, redux-test-recorder)

## Data Branching (SS)
We need to be able to branch (versioning) data in our databases so we have the ability to work with "DEVDATA" and "MASTERDATA" during development and test. Users will be able to "check-out" data from the MASTERDATA into the DEVDATA branch and work with the data from there. When done working with a "record" or "structure" the user can commit the DEVDATA data to the MASTERDATA branch. The different data-branches need to be accesible to our data-synchronizers in ODEUM Sync Manager (OSM). 

## Point of failure:
When delivering the entire app in one render-blocking package, you might run into JS code loading errors. Don't make JS your app's single point of failure."

## Using a failover loader
The first render should be on the server, and give the user some content if that JS fails to load. The code that loads the “App” (odeum-codejs) container should be an HTML file which loads a container to control whether our JS code is actually running and is accessible on the server. If not, there should be static HTML package loading a temporary app setup displaying the errors and tries to reload the main app container until no errors are reported.

## Offline-first approach
Offline-first – hence treating the network as an enhancement with JS tools like Service Worker and IndexedDB – has become the new standard for building fast, resilient websites. It is possible to do both traditional progressive enhancement and offline-first, but it's not easy. We should prioritize offline-first over works-without-JS."
