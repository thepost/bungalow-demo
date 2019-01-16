import React, { Component } from "react"
import { StyleSheet, View, ScrollView, Text } from "react-native"
import PropTypes from "prop-types"

import requestProperty from "../api/request.property"
import { LoadingView, LineSeperator, PhotoThumbView } from "../components/"
import {
  DescriptionView,
  AmenitiesView,
  PriceView
} from "../components/property/"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 14,
    marginTop: 0
  },
  scrollview: {
    paddingTop: 14
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
      .catch(error => {
        this.setState({
          fetching: false
        })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fetching ? (
          <LoadingView loadingText={"Getting property details..."} />
        ) : (
          <ScrollView style={styles.scrollview}>
            <DescriptionView
              headline={this.state.dataSource.headline}
              html={this.state.dataSource.description_html}
            />
            <LineSeperator />
            <PhotoThumbView />
            <LineSeperator />
            <AmenitiesView />
            <LineSeperator />
            <PriceView />
          </ScrollView>
        )}
      </View>
    )
  }
}

Property.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Property
