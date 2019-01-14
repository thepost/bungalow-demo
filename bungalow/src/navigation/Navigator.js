import React from "react"
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation"
import PlaceholderView from "../components/PlaceholderView"
import SplashScreen from "../screens/Splash"

const ListPlaceholder = () => (
  <PlaceholderView
    text={"There's currently no properties to display in your area."}
  />
)

const DetailsPlaceholder = () => (
  <PlaceholderView text={"There's currently no more info for this property."} />
)

const Splash = {
  screen: ({ navigation }) => (
    <SplashScreen
      navigation={navigation}
      redirectScreen="Main"
      duration={2000}
    />
  )
}

const PropertyList = {
  screen: ListPlaceholder,
  navigationOptions: () => ({
    title: `Properties`
  })
}

const PropertyDetails = {
  screen: DetailsPlaceholder,
  navigationOptions: () => ({
    title: `Property Details`,
    headerBackTitle: "Back"
  })
}

const RouteScreens = {
  List: PropertyList,
  Details: PropertyDetails
}
const RouteConfig = {
  initialRouteName: "List"
}

const AppNavigator = createStackNavigator(RouteScreens, RouteConfig)

const LaunchNavigator = createSwitchNavigator(
  {
    Splash: Splash,
    Main: AppNavigator
  },
  {
    initialRouteName: "Splash"
  }
)

export default createAppContainer(LaunchNavigator)
