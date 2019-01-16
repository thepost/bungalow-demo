import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import { colors } from "../design"

const styles = StyleSheet.create({
  line: {
    margin: 8,
    borderColor: colors.border,
    borderWidth: 0.5
  }
})

const LineSeperator = () => {
  return <View style={styles.line} />
}

export default LineSeperator
