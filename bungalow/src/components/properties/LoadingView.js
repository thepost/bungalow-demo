import React from "react"
import { StyleSheet, View, ActivityIndicator, Dimensions } from "react-native"
import { alignment } from "../../design"

import PlaceholderView from "../../components/PlaceholderView"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: alignment.center,
    marginTop: 20
  },
  placeholder: {
    flex: 1
  },
  spinner: {
    flex: 2,
    justifyContent: alignment.flexStart
  }
})

const LoadingView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.placeholder}>
        <PlaceholderView
          text={"Finding properties to display in your area..."}
        />
      </View>
      <ActivityIndicator size="large" style={styles.spinner} animating={true} />
    </View>
  )
}

export default LoadingView
