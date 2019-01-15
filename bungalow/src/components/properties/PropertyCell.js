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
    backgroundColor: "rgba(255,255,255,0.4)"
  },
  title: {
    fontSize: fontSizes.title2,
    color: colors.white
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 8,
    justifyContent: alignment.flexStart,
    backgroundColor: "rgba(255,255,255,0.7)"
  },
  headline: {
    fontSize: fontSizes.body,
    color: colors.darkGrey
  }
})

const PropertyCell = ({ property }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: property.images.length > 0 ? property.images[0].sm_url : ""
        }}
        style={styles.imageBackground}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>From $</Text>
          <Text style={styles.headline}>{property.headline}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default PropertyCell