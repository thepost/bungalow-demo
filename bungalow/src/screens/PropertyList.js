import React, { Component } from "react"
import { StyleSheet, View, FlatList, Dimensions } from "react-native"
import { colors } from "../design"

import LoadingView from "../components/properties/LoadingView"
import PropertyCell from "../components/properties/PropertyCell"
import requestProperties from "../api/request.properties"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  },
  list: {
    backgroundColor: colors.primaryTheme
  }
})

class PropertyList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetching: true
    }
  }

  componentDidMount() {
    requestProperties("Seattle")
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
          <LoadingView
            loadingText={"Finding properties to display in your area..."}
          />
        ) : (
          <FlatList
            style={styles.list}
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <PropertyCell
                navigation={this.props.navigation}
                property={item}
              />
            )}
            keyExtractor={({ id }, index) => id.toString()}
          />
        )}
      </View>
    )
  }
}

export default PropertyList
