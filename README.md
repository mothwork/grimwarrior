# GrimWarrior
GrimWarrior is a clone of Evernote: built for the discerning Wizard who wishes to organize their grimoires all in one place.

In this clone, notes are called spells and notesbooks are called Grimoires.

Live Site: [GrimWarrior] (http://grimwarrior.herokuapp.com)

Built with:
* React.js - Frontend
* Redux - State Management
* Sequelize - ORM
* Express - Backend

## Screenshots
### Splash Page
![Splash](https://user-images.githubusercontent.com/59124348/153916560-62166f87-a5c7-47f8-a696-729ca5293409.png)
### Inside view
![Inside](https://user-images.githubusercontent.com/59124348/153948975-76254a2a-0a8c-4f46-9e59-566afa92c91b.png)

## Information

### [Feature List](https://github.com/mothwork/grimwarrior/wiki/Features)

### [React Components](https://github.com/mothwork/grimwarrior/wiki/React-Components)

### [Frontend Routes](https://github.com/mothwork/grimwarrior/wiki/Frontend-Routes)

### [API Routes](https://github.com/mothwork/grimwarrior/wiki/API-Routes)

### [Redux Store tree](https://github.com/mothwork/grimwarrior/wiki/Redux-Store-Tree)

## Technical Implementation

### Individual Spells
Individual spells are pulled from the Redux store to save on a call to the DB every time a spell is selected. Since the list of spells is pulled every time something changes, the user will always have an up to date view of the individual spell.

### DB Schema
When setting up the schema- I wasn't initially sure on how I wanted the notes in grimoires feature to work. A join table between the two would be fine, but since a note can only be in one Grimoire at one time- I instead decided that each spell should have an associated Grimoire Id.
Since users can delete grimoires they created, whenever a grimoire with spells in it is deleted by the user, all of the spells that were included in it are re-added to the default grimoire.
