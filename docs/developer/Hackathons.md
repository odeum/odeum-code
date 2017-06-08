# ODEUM CodeJS Hackathons (log)

## Hacknight #5 - June 6 2017

### Attendees: 
- AT:   Andrei Tudor - [at@webhouse.dk](at@webhouse.dk)
- CB:   Christian Broberg - [cb@webhouse.dk](cb@webhouse.dk)
- MB:   Mikkel Broberg - [mb@webhouse.dk](mb@webhouse.dk)
- MHK:  Martin Kristiansen - [mhk@webhouse.dk](mhk@webhouse.dk)
- FJ:   Frida Jakobsen - [frida.jakobsen@hotmail.com](frida.jakobsen@hotmail.com)
- KN:   Kasper Nielsen - [kasper8791@gmail.com](kasper8791@gmail.com)
- AJL:  Anders Juel Lichon - [lichondk@gmail.com](lichondk@gmail.com)
- LZ:   Leonid Zorin - [leonid9.021@gmail.com](leonid9.021@gmail.com)
- ELG:  Elena-Luminia Gavrilovici - [luminita.gavrilovici@yahoo.com](luminita.gavrilovici@yahoo.com)

### Agenda (tentative)

1. Onboarding of new interns and contributing (our repo and how we work)
2. Presentation of dynamic tabs and current project state (AT)
3. Initial theming with icons, buttons and footerlabel included in framework (AT, CB)
4. Refactoring stuff (theming, colors, styles, Prop Types, Naming, Code Style)
5. Coding Dojo (Setting up framework and building a simple app or adding your own experiment with Create-React-App to the repo)
6. Plans for the summer :) 
7. Next steps ... 

### Takeaways and milestones:
- Ad 1:
- Ad 2: 
- Ad 3:
- Ad 4: 
- Ad 5:
- Ad 6: 
- Ad 7: 

## Hacknight #4 - Maj 22 2017

### Attendees: 
- AT:     Andrei Tudor - [at@webhouse.dk](at@webhouse.dk)
- CB:     Christian Broberg - [cb@webhouse.dk](cb@webhouse.dk)
- HH:     Henrik Hansen - [hh@webhouse.dk](hh@webhouse.dk)
- MB:     Mikkel Broberg - [mb@webhouse.dk](mb@webhouse.dk)
- MHK:    Martin Kristiansen - [mhk@webhouse.dk](mhk@webhouse.dk)
- KN:     Kasper Nielsen - [kasper8791@gmail.com](kasper8791@gmail.com)

### Agenda

1. AT will present a simple App and its configuration and how it is decoupled from the framework (new experiment: "framework_decoupled")
2. AT will present scematics (illustration) of the innerworkings of the framework/app
3. Getting theme and standards integrated in framework and demo App
4. If enough time CB will present <Footerlabel /> and <Icon /> and discuss Redux-Form (worth a look)
5. How and when will others contribute? (COWI App deadline is closing up)
6. Next steps ... 

### Takeaways and milestones:

We had the pleasure of introducing UCN intern Kasper Nielsen to the group who would participate and contribute closer primo June 2017. 

- Ad 1: AT did a fast paced presentation of the decoupling of the framework and the "custom_app" 
- Ad 2: Scematics for the framework and app are uploaded to /docs/architecture/ODEUM_CodeJS_flow.png
- Ad 3: No comments 
- Ad 4: Redux-Form was introduced and accepted as a trial technology for BWF App (real world example) a simple CRUD app for managing users, products and posts for the BWF mobile app. The finished app will be showcased at the next hackathon.
- Ad 5: No comments
- Ad 6: Dynamic Tabs, Login Providers, Login, Web Token, JSON endpoint for very simple login


## Hacknight #3 - Maj 8 2017

###Attendees: AT, CB, HH, MB, MHK

### Agenda

1. Review and input from/to AT’s work so far - does it work as it is supposed to? (Exp. 3)
2. Discussion on general “Scenes" and “Tabs” API - 
3. Discussion on responsiveness (CB has some examples) 
4. Discussion on Theme (Exp. 16)
5. Next actions and experiments
6. Learning and tasks for next interns

### Takeaways and milestones:

- Ad 1: AT will refactor RRR5 to RRR4 😃 and refactor filenames in colaboration with CB
- Ad 2: We will return to this issues once we have the first App up and running in a functional exp. 3.1 framework
- Ad 3: Showcase of responsive examples. Decided to try-out https://github.com/jxnblk/grid-styled - HH will create exp. 19.
- Ad 4: Working with ThemeProvider from Styled-Components was accepted - carry on!!!
- Ad 5: AT (RRR4 and filename refactoring), HH experiment 19
- Ad 6: Interns given initial instructions and cloning of repository ... new briefing primo June


## Hacknight #2 - April 24 2017

### Attendees: AT, CB, HH, MB, MHK

### Agenda
- Setting up our coding setup/editor/Github etc. so we can make AT's experiment run locally 
- Pizza and coke (and possibly chokolade)
- AT will present experiments 2, 3, and 9
- Coding Dojo (apply selected experiments)
- CB will discuss further experiments
- All will discuss milestones for next hackathon

### Extras:
- AT will introduce TODO highlight in VS Code
- MB will explain why including codesplitting now and not wait (experiment #1)

### Takeaways and milestones:
- Yes we have something that works
- We need to refactor all component libs from Index.js to ComponentName.js
- We need to call reducers and actions componentreducer.js and componentaction.js and so forth
- AT will connect tabs and everything containerized to the store - Redux Dev Tools (RDT) playable
- AT will try to work with nested routes with React-Router-Redux (RRR) 5