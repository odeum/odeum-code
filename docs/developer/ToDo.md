1. Appendix Date Config
	- [x] Get the config from server 
	- [x] Load in redux
	- [ ] Filter all fields of the appendix for the specific config 
	- [ ] Render

2. Tabs 
	- [x] Refactor Close function to receive a prop where to go back on creation
	- [ ] Add identifier for each tab, do not use label as an identifier, refactor reducers and selectors to use id instead of label
<<<<<<< HEAD
	- [ ] if the tab has a label use the label for display else use id
	- [ ] refactor id to instanceId
=======
	- [ ] If the tab has a label use the label for display else use id
	- [ ] Refactor id to instanceId
>>>>>>> fd972ee515a439e1debe301980032f2d5e51675e
	- [x] Check the main tabsContainer as the tabs from Reference Table move to Kommuneplantillaeg

3. CSS
	- [ ] Buttons for save on appendix are cropped on smaller resolutions than 1440x900 ( screenshot made at 1366x768 )

	![Text](http://puu.sh/xdb7w/693667ecce.png "Buttons") 
	- [x] Extra scrollbar on Kommuneplantillaeg 

	![Extra-scrollbar](http://puu.sh/xdbo9/467a89d6c1.png "ScrollBar")
	- [ ] Modal window cropped(on all modal windows it is cropped)

	![Modal Window](http://puu.sh/xdbwf/b61ca54eed.png)
	- [ ] Remove any extra div containers that are not needed.

4. Errors, Warnings & Bugs
	- [x] Missing key prop on rendering fields
	- [ ] Peer dependencies on halogen and worker-loader
	- [x]  On react Virtualized - ReferenceTable
	
		"This site appears to use a scroll-linked positioning effect. This may not work well with asynchronous panning; see https://developer.mozilla.org/docs/Mozilla/Performance/ScrollLinkedEffects for further details and to join the discussion on related tools and features!"

		**UPDATE**: This error should be ignored as we do not make a parallax-like effect(parallax effect in our case: rescroll through all items again when getting at the bottom of the list)
	- [ ] createClass && PropTypes deprecation
	- [ ] Remove any additional console.logs that are not used
	- [ ] Normalize and React-Select are not compatible in production leading to app crashing when rendering react-select component
		- Temporary fix: disabled Normalize
		- Solution: make a "home made" selector
5. Components
	- [ ] Settings
	