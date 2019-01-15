import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import PropTypes from "prop-types"
import { colors } from "../design"

import LoadingView from "../components/properties/LoadingView"

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

class Property extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetching: true
    }
  }

  render() {
    const propertyID = this.props.navigation.getParam("propertyID", 0)
    console.log("Property propertyID: " + propertyID)
    return (
      <View style={styles.container}>
        {this.state.fetching ? (
          <LoadingView loadingText={"Getting property details..."} />
        ) : null}
      </View>
    )
  }
}

Property.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Property
