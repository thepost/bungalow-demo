import React from "react"
import { StyleSheet, View, Text } from "react-native"
import PropTypes from "prop-types"

import { colors, fontSizes } from "../../design"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  title: {
    marginTop: 8,
    fontSize: fontSizes.detail,
    color: colors.black
  },
  text: {
    fontSize: fontSizes.subdetail,
    color: colors.darkGrey
  }
})

const AmenitiesView = ({ amenities, roomQuantity }) => {
  const amenitiesReduced = amenities.reduce((accumulator, amenity) => {
    return `${accumulator}${accumulator.length > 0 ? ", " : ""}${
      amenity.display_name
    }`
  }, "")

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rooms:</Text>
      <Text style={styles.text}>{roomQuantity}</Text>
      <Text style={styles.title}>Amenities:</Text>
      <Text style={styles.text}>{amenitiesReduced}</Text>
    </View>
  )
}

AmenitiesView.propTypes = {
  amenities: PropTypes.array,
  roomQuantity: PropTypes.number
}

export default AmenitiesView
