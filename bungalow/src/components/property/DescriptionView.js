import React, { Component } from "react"
import { StyleSheet, View, Text, Platform } from "react-native"
import { WebView } from "react-native-webview"

import { colors, fontSizes, fonts } from "../../design"

const styles = StyleSheet.create({
  headline: {
    fontSize: fontSizes.body,
    color: colors.darkGrey
  },
  description: {
    marginTop: 20,
    fontSize: fontSizes.detail,
    height: 160
  }
})

const pStyle = `
  <head>
    <style>
      body {
        background-color: ${colors.lightGrey};
      }
      p {
        padding: 0 10px;
        color: ${colors.white};
        font-family: ${fonts.primary};
        font-style: normal;
        font-size: ${Platform.OS === "android" ? 16 : 42}px;
      } 
    </style>
  </head>`

const DescriptionView = ({ headline, html }) => {
  return (
    <View>
      <Text style={styles.headline}>{headline}</Text>
      <WebView
        style={styles.description}
        useWebKit
        originWhitelist={["*"]}
        source={{
          html: `${pStyle}${html}`,
          baseUrl: ""
        }}
      />
    </View>
  )
}

export default DescriptionView
