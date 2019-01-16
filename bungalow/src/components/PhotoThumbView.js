import React from "react"
import { StyleSheet, Image } from "react-native"
import PropTypes from "prop-types"

import { Container, View, DeckSwiper, Card, CardItem } from "native-base"

import { colors } from "../design"

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
    padding: 4,
    height: 200,
    backgroundColor: colors.primaryTheme
  },
  card: {
    elevation: 3
  },
  image: {
    flex: 1,
    height: 200
  }
})

const PhotoThumbView = ({ photos }) => {
  return (
    <Container style={styles.container}>
      <View>
        <DeckSwiper
          dataSource={photos}
          renderItem={photo => (
            <Card style={styles.card}>
              <CardItem cardBody>
                <Image style={styles.image} source={{ uri: photo.sm_url }} />
              </CardItem>
            </Card>
          )}
        />
      </View>
    </Container>
  )
}

PhotoThumbView.propTypes = {
  photos: PropTypes.array
}

export default PhotoThumbView
