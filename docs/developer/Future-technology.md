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

