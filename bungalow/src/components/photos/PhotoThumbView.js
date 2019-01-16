import React, { Component } from "react"
import { StyleSheet, Image, TouchableWithoutFeedback } from "react-native"
import PropTypes from "prop-types"

import { Container, View, DeckSwiper, Card, CardItem } from "native-base"

import PhotoLargeView from "./PhotoLargeView"
import { colors } from "../../design"

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

class PhotoThumbView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  showModal(visible) {
    this.setState({ modalVisible: visible })
  }

  render() {
    return (
      <Container style={styles.container}>
        <View>
          <DeckSwiper
            dataSource={this.props.photos}
            renderItem={photo => (
              <Card style={styles.card}>
                <CardItem cardBody>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      this.showModal(true)
                    }}
                  >
                    <Image
                      style={styles.image}
                      source={{ uri: photo.sm_url }}
                    />
                  </TouchableWithoutFeedback>
                </CardItem>
              </Card>
            )}
          />
          <PhotoLargeView
            photos={this.props.photos}
            visible={this.state.modalVisible}
            onClose={() => {
              this.showModal(false)
            }}
          />
        </View>
      </Container>
    )
  }
}

PhotoThumbView.propTypes = {
  photos: PropTypes.array
}

export default PhotoThumbView
