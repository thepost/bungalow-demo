import React from "react"
import {
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
  Text,
  Image
} from "react-native"
import PropTypes from "prop-types"

import { colors, fontSizes, alignment } from "../../design"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${colors.white}F5`
  },
  closeButton: {
    alignContent: alignment.center,
    justifyContent: alignment.center,
    marginTop: 30,
    marginHorizontal: 15,
    width: 50,
    height: 50,
    borderWidth: 1.5,
    borderColor: colors.primaryTheme,
    borderRadius: 25
  },
  buttonText: {
    textAlign: alignment.center,
    fontSize: fontSizes.title1,
    color: colors.primaryTheme
  },
  scrollview: {
    flex: 1,
    marginBottom: 60
  },
  image: {
    width: Dimensions.get("window").width - 10,
    marginHorizontal: 5,
    resizeMode: "contain"
  }
})

const PhotoLargeView = ({ visible, photos, onClose }) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.buttonText}>{`\u2A09`}</Text>
        </TouchableOpacity>
        <ScrollView
          style={styles.scrollview}
          horizontal
          pagingEnabled
          minimumZoomScale={1}
          maximumZoomScale={3}
        >
          {photos.map((photo, index) => {
            console.log("photo.md_url " + photo.md_url)
            return (
              <Image
                style={styles.image}
                key={index}
                source={{ uri: photo.md_url }}
              />
            )
          })}
        </ScrollView>
      </View>
    </Modal>
  )
}

PhotoLargeView.propTypes = {
  visible: PropTypes.bool,
  photos: PropTypes.array,
  onClose: PropTypes.func
}

export default PhotoLargeView
