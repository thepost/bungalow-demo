import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { View, Image } from "react-native"
import PropTypes from "prop-types"

import splash from "../../images/bungalow-splash.png"

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null
  }
})

class Splash extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { navigation, redirectScreen, duration } = this.props

    setTimeout(() => {
      navigation.navigate(redirectScreen)
    }, duration)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={splash} />
      </View>
    )
  }
}

Splash.propTypes = {
  navigation: PropTypes.any.isRequired,
  redirectScreen: PropTypes.string.isRequired,
  duration: PropTypes.number
}

Splash.defaultProps = {
  duration: 1000
}

export default Splash
