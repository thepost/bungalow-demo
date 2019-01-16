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
    marginLeft: 14,
    marginRight: 14
  },
  scrollview: {
    paddingTop: 14,
    paddingBottom: 14
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

  prices() {
    return this.state.dataSource.rooms.reduce((accumulator, room) => {
      return room.price == null
        ? ""
        : `${accumulator}${accumulator.length > 0 ? ", " : ""}$${room.price}`
    }, "")
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fetching ? (
          <LoadingView loadingText={"Getting property details..."} />
        ) : (
          <ScrollView
            style={styles.scrollview}
            showsVerticalScrollIndicator={false}
            contentInset={{ top: 0, left: 0, bottom: 40, right: 0 }}
          >
            <DescriptionView
              headline={this.state.dataSource.headline}
              html={this.state.dataSource.description_html}
            />
            <LineSeperator />
            <PhotoThumbView photos={this.state.dataSource.images} />
            <LineSeperator />
            <AmenitiesView
              amenities={this.state.dataSource.amenities}
              roomQuantity={this.state.dataSource.rooms.length}
            />
            <LineSeperator />
            <PriceView prices={this.prices()} />
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
