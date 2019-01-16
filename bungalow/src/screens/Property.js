import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"
import PropTypes from "prop-types"

import { colors, fontSizes, fonts } from "../design"
import requestProperty from "../api/request.property"
import LoadingView from "../components/properties/LoadingView"
import PropertyDescription from "../components/properties/PropertyDescription"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 14
  }
})

class Property extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetching: true
    }
  }

  componentDidMount() {
    const propertyID = this.props.navigation.getParam("propertyID", 0)

    requestProperty(propertyID)
      .then(results => {
        this.setState({
          fetching: false,
          dataSource: results
        })
      })
      .catch(error => {})
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fetching ? (
          <LoadingView loadingText={"Getting property details..."} />
        ) : (
          <PropertyDescription
            headline={this.state.dataSource.headline}
            html={this.state.dataSource.description_html}
          />
        )}
      </View>
    )
  }
}

Property.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Property
