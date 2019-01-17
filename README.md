# Bungalow React-Native Challenge

This demos some basic functionality in displaying a list of properties from specific Bungalow API endpoints, for a list of properties and some of the details of a selected property. [The scope is documented here.](https://gist.github.com/duncanmcdowell/8ed554933bc2efceae02293cb0604127)

## UX

I find it speeds up the development process when giving some thought towards the UX upfront, especially in the absense of a design.

Recently I've found that RealtimeBoard stikes the right kind of balance between lean, agile, and relevant detail, that I've been looking for over years. Their user story mapping board, and wireframing, enables you to achieve clarity towards the build process, without getting _distracted in the complexity_ of the agile tool.

**Wireframes**

- I've found that wireframes are invaluable for concentrating on how a feature/feature set _should work_, rather than concentrating on more granular details that can be refined as the design changes, such as the colors of buttons.
- [The wireframe board can be accessed here](https://realtimeboard.com/app/board/o9J_kyAHIZg=/).

<img width="711" alt="screen shot 2019-01-16 at 8 24 15 pm" src="https://user-images.githubusercontent.com/2742942/51289178-32a25400-19cd-11e9-97ba-9262b7a46679.png">

**User Stories**

- This loosely resembles a kanban board. Execpt that the horizontal rows are divided into Epics, Stories (user centric), and Chores (developer centric). The vertical columns are everything related to each Epic.
- User Stories tend to be smaller and more modular with the use of Epics, usually no more than a 2 or 3 on the Fibonacci scale. A habit I've picked up from Pivotal Tracker.
- There are no explicit columns for _todo, in progress_, and _done_. Cards are in progress and yellow by default, ordered by what's being worked on, and coloured green for done.
- I'm just trying this out, and so far this process isn't set in stone. But in recent years I've been giving thought into evolving the agile process away from the bloat it's fallen victim to, and this is what I've got so far.
- [The user story mapping board can be accessed here](https://realtimeboard.com/welcomeonboard/kWt8qjkQzd6bzXlX5VvQQ5weW6fFm448MGTU9PKUVyYjkh5hqqCWCizmWTz1Pvxa).

<img width="968" alt="screen shot 2019-01-16 at 8 23 39 pm" src="https://user-images.githubusercontent.com/2742942/51289196-40f07000-19cd-11e9-97fe-89e6de69bbee.png">

## Dependency Stack

1. Reactifliux’s `react-navigation` for **navigation**.

- I’ve found that `react-navigation` is simpler to use compared to Wix’s `react-native-navigation`, as it adhere’s more to SOLID, and other generally good software practises of low coupling/high cohesion and good composition.
- However, Wix’s may have better performance, as Reactifliux’s is tied to the bridge between the javascript and native frameworks that creates a slight lag that’s more noticeable in something like navigation.
- For this reason, I’m experimenting with a native navigational architecture with a similar implementation in iOS and Android, but at this stage it’s unfinished and needs to be simplified, and therefore incomplete for the use of this demo. I also thought it would be best to stick to the pure React Native requirements.
- https://reactnavigation.org

2. NativeBase (`native-base`) to provide consistency and simplicity in a rapid prototype, while conforming to Google Material Design.

- I've never really used this library, but wanted to create some components more rapidly for the purpose of the limited time in this demo.
- However, React Native is so elegant anyway in creating components with relative ease, that I didn't end up using NativeBase as much as intended. The only place that it's really used is in the card deck-like _photo previews_ in the property detail view.
- I find it very easy to use, but am cautious in how much it adds to the app bundle size. Therefore in production code, I find it's more of a grey area whether to use a large library like this or not.
- [https://docs.nativebase.io](https://docs.nativebase.io)

3. I had to use `react-native-webview` to only display the raw HTML from the API for the property description.

- `react-native-webview` is relatively lean, and is recommended in the official Facebook RN docs to use since they deprecated their `WebView` component last year.
- https://github.com/react-native-community/react-native-webview

4. Originally I was going to use `MobX` for state changes, and loaded it in as a dependency from the start. As it’s similar to `Redux` except with the advantage of less boilerplate.

- The main advantage is that there's no need for reducers, etc. It does away with needing to call `setState` explicitly, in favour of simply re-rendering every time an **observable** property is detected to change.
- It also uses **computed properties**, which is a very Swift-like concept that I’m used to.
- However, I haven't used it that much in that I'm absolutely comfortable with it, and it seemed to depend on the use of decorators. Decorators are only part of a stage 2 JS proposal, so you have to install it via a babel transpiler plugin, and the more complexity in dependencies for this demo's purpose where it needs to be accessed remotely, the more of a risk it becomes.
- [https://mobx.js.org](https://mobx.js.org)

## Implementation Notes

- I tend to use functional components with arrow functions where ever I can get away with it, a habit recommended from my React & Javascript oriented peers at Highline BETA. Mainly for stateless components, but stateful components might also benefit from being built as a functional component, and the state could be managed via recompose’s pure functions…although `recompose` is still a grey area to me, so at this point I prefer building stateful components with classes (in situations when development is time sensitive).

- On the note of MobX, when starting work on this demo I realised that I hadn't actually built a React Native app before _without using_ GraphQL and Apollo, which handles Redux implicitly. Although the REST integration was relatively straight forward, I'm still curious about the best practises in how to integrate REST with a Redux state manager. MobX might still be an elegant solution worth exploring more, or maybe it's something else I'm unaware of so far.

## Extra Features

The main features in the requirements I've documented as part of the user story mapping. But a few extra features I was able to do include:

- A basic **splash screen** with the Bungalow logo (I think???) as part of the root navigation stack.
- Even though there's no mutating data in this app's scope, I decided to add in a **pull to refresh** in the main property list, as UX kind of feels a little weird now without it.
- I added a **full sized photo** scroll view, that presents modally when clicking on the preview photos in the property details.

## Launch

**To run the app:**

- run `npm install` in the app directory
- run `npm start`
- open Xcode or Android Studio, and build & run the simulator

Alternatively you run `react-native run-ios` or `react-native run-android`. But I’ve found this can take a long time, and can be dependent on local build settings.

**Troubleshooting:**

- If `react-native run-ios` doesn’t work, [try this:](https://github.com/facebook/react-native/issues/16798#issuecomment-354596888)
- Make sure to run `react-native link` after adding a new dependency, to give the iOS and Android projects a chance to link the related module.
