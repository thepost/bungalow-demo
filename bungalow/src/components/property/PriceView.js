import React from "react"
import { StyleSheet, View, Text } from "react-native"
import PropTypes from "prop-types"

import { colors, fontSizes } from "../../design"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8
  },
  title: {
    fontSize: fontSizes.detail,
    color: colors.black
  },
  text: {
    fontSize: fontSizes.subdetail,
    color: colors.darkGrey
  }
})

const PriceView = ({ prices }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prices:</Text>
      <Text style={styles.text}>{prices}</Text>
    </View>
  )
}

PriceView.propTypes = {
  prices: PropTypes.string
}

export default PriceView
