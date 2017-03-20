# odeum-codejs executive decisions

## Point of failure:

When delivering the entire app in one render-blocking package, you might run into JS code loading errors. Don't make JS your app's single point of failure."

### Using a failover loader
The first render should be on the server, and give the user some content if that JS fails to load. The code that loads the “App” (odeum-codejs) container should be an HTML file which loads a container to control whether our JS code is actually running and is accessible on the server. If not, there should be static HTML package loading a temporary app setup displaying the errors and tries to reload the main app container until no errors are reported.

### Offline-first approach
Offline-first – hence treating the network as an enhancement with JS tools like Service Worker and IndexedDB – has become the new standard for building fast, resilient websites. It is possible to do both traditional progressive enhancement and offline-first, but it's not easy. We should prioritize offline-first over works-without-JS."

# React and JS libraries to look at

React, ReactDOM, Redux, React Router, DraftJS, Immutable, Relay, GraphQL, Google Maps (react-google-maps) ... (more to come)

# Components

## Basic Components

* Drawer (Panel open/close)
* Navigation / Routing (Memory Navigation History => DB)
* Button
  *  Flat style
  *  Raised style
  *  Icon Button
  *  Floating Action button
  *  Tooltip

* Text Input Component
  *  Field Error
  *  Hint
  *  Multi-line
  *  Number, currency, date/time masking
  *  Tooltip

* Radio
* Slider
* Popover
* Snackbar

* Picker Components
  *  Datetime picker
  *  Scroll Picker

* Table
* Tabs
* Avatar - Avatars can be used to represent people or and object
* Badge - shows a notification badge (either counter or iconic symbol)
* Card
* Chip
* Dialog (Alert, MessageBox ...)
* Grid

* Icons
  *  Font icons
  *  SVG icons

* Lists

* Menus
  *  Menu
  *  Icon menu
  *  DropDown menu

* Paper
* Popover
* Progress
* Slider
* Switches
  *  Checkbox
  *  Radio button
  *  Toggle


## App Components

# Folder Structure

## Source files 
./
./src
./src/components
./src/components/
./src/views
./src/models
./src/routes

## Public static source files 
./public
./public/index.html
./public/favicon.ico
