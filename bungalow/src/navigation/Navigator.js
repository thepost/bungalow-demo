import React from "react"
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation"

import SplashScreen from "../screens/Splash"
import PropertiesScreen from "../screens/PropertyList"
import PropertyScreen from "../screens/Property"

import { colors } from "../design"

const Splash = {
  screen: ({ navigation }) => (
    <SplashScreen
      navigation={navigation}
      redirectScreen="Main"
      duration={1500}
    />
  )
}

const PropertyList = {
  screen: PropertiesScreen,
  navigationOptions: () => ({
    title: `Properties`,
    headerTintColor: colors.darkGrey
  })
}

const PropertyDetails = {
  screen: PropertyScreen,
  navigationOptions: () => ({
    title: `Property`,
    headerBackTitle: "Back",
    headerTitleStyle: { color: colors.darkGrey },
    headerTintColor: colors.primaryTheme,
    headerBackTitleStyle: { color: colors.primaryTheme }
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
