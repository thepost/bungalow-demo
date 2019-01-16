import React, { Component } from "react"
import { StyleSheet, View, Text, ImageBackground } from "react-native"
import { colors, alignment, fontSizes } from "../../design"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 200,
    margin: 6,
    marginBottom: 0,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.lightGrey,
    backgroundColor: colors.white
  },
  imageBackground: {
    flex: 1,
    margin: 8,
    width: null,
    height: null
  },
  imageFilter: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.6)"
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 8,
    justifyContent: alignment.flexStart
  },
  price: {
    fontWeight: "bold",
    fontSize: fontSizes.title2,
    color: colors.white
  },
  headline: {
    fontSize: fontSizes.body,
    color: colors.darkGrey
  },
  rooms: {
    alignSelf: alignment.flexEnd,
    padding: 8,
    fontSize: fontSizes.body,
    color: colors.darkGrey
  }
})

function minPrice(prices) {
  const sorted = prices.sort()
  return sorted[0]
}

const price = prices => {
  return prices.length > 0 ? `From $${minPrice(prices)}` : ""
}

const PropertyCell = ({ property }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: property.images.length > 0 ? property.images[0].sm_url : ""
        }}
        style={styles.imageBackground}
      >
        <View style={styles.imageFilter}>
          <View style={styles.textContainer}>
            <Text style={styles.price}>{price(property.room_prices)}</Text>
            <Text style={styles.headline}>{property.headline}</Text>
          </View>
          <Text style={styles.rooms}>{`Rooms: ${
            property.total_room_count
          }`}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default PropertyCell
