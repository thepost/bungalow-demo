import React from "react"
import { StyleSheet, Text, View } from "react-native"
import PropTypes from "prop-types"

import { alignment } from "../design"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: alignment.center,
    alignItems: alignment.center,
    padding: 20
  },
  text: {
    color: "#A3A3A3",
    fontSize: 24,
    textAlign: alignment.center
  }
})

const PlaceholderView = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text ? text : `There's currently no data to display.`}
      </Text>
    </View>
  )
}

PlaceholderView.propTypes = {
  text: PropTypes.string
}

export default PlaceholderView
