
# Bungalow React-Native Challenge

This demos some basic functionality in displaying a list of properties from a specific Bungalow API endpoint, and some additional information in the details view of the navigation stack. [The scope is documented here.](https://gist.github.com/duncanmcdowell/8ed554933bc2efceae02293cb0604127)

## UX

Giving some thought towards the UX, especially in the absense of a design, I find speeds up the development process. 

Recently I've found that RealtimeBoard stikes the right kind of balance between lean, agile, and relevant detail, that I've been looking for over years. Both their agile board and wireframing enables you to achieve clarity for the build process, without getting *distracted in the complexity* of the tooling that so many other solutions provide.

**Wireframes**

- I've found that wireframes are invaluable for concentrating on how a feature/feature set *should work*, rather than concentrating on more granular details that can be refined as the design changes, such as the colors of buttons. 
- [https://realtimeboard.com/app/board/o9J_kyAHIZg=/](https://realtimeboard.com/app/board/o9J_kyAHIZg=/)

**User Stories**
- This loosely resembles a kanban board. Execpt the horizontal rows are divided into Epics, Stories (user centric), and Chores (developer centric tasks, related to the epic), and the vertical columns are everything related to each epic.
- User Stories tend to be smaller and more modular with the use of Epics, usually no more than a 2 or 3 on the Fibonacci scale.
- There is no column for *todo, in progress*, and *done*. Cards are in progress by default, ordered by what's being worked on, and coloured green for done.
 - I'm just trying this out, and so far this process isn't set in stone. But in recent years I've been giving thought into evolving the agile process away from the bloat, and this is what I've got so far.
 -  [https://realtimeboard.com/welcomeonboard/kWt8qjkQzd6bzXlX5VvQQ5weW6fFm448MGTU9PKUVyYjkh5hqqCWCizmWTz1Pvxa](https://realtimeboard.com/welcomeonboard/kWt8qjkQzd6bzXlX5VvQQ5weW6fFm448MGTU9PKUVyYjkh5hqqCWCizmWTz1Pvxa)

## Dependency Stack

1. `MobX` for state changes, as it’s similar to `Redux` except way less boilerplate.

- No need for reducers, etc. It does away with needing to call `setState` explicitly, in favour of simply re-rendering every time an **observable** property is detected to change.
- It also uses **computed properties**, which is a very Swift-like concept that I’m used to.
-   [https://mobx.js.org](https://mobx.js.org)

## Launch

**To run the app:**

-   run `npm install` in the app directory
-   run `npm start`
-   open Xcode or Android Studio, and build & run the simulator

Alternatively you run `react-native run-ios` or `react-native run-android`. But I’ve found this can take a long time, and can be dependent on local build settings.

**Troubleshooting:**

-   If `react-native run-ios` doesn’t work, try this: [https://github.com/facebook/react-native/issues/16798#issuecomment-354596888](https://github.com/facebook/react-native/issues/16798#issuecomment-354596888)
