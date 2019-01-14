import React from "react"
import { createStackNavigator, createAppContainer } from "react-navigation"
import PlaceholderView from "../components/PlaceholderView"

const ListPlaceholder = () => (
  <PlaceholderView
    text={"There's currently no properties to display in your area."}
  />
)

const DetailsPlaceholder = () => (
  <PlaceholderView text={"There's currently no more info for this property."} />
)

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

const Navigator = createStackNavigator(RouteScreens, RouteConfig)

export default createAppContainer(Navigator)
