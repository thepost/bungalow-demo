import React from "react"
import { StyleSheet, View, ActivityIndicator, Dimensions } from "react-native"
import PropTypes from "prop-types"
import { alignment } from "../design"

import PlaceholderView from "./PlaceholderView"

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

const LoadingView = ({ loadingText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.placeholder}>
        <PlaceholderView text={loadingText} />
      </View>
      <ActivityIndicator size="large" style={styles.spinner} animating={true} />
    </View>
  )
}

LoadingView.propTypes = {
  loadingText: PropTypes.string
}

export default LoadingView
