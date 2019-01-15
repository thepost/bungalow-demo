import PropTypes from "prop-types"
import urlConfig from "./url"

const requestProperties = city => {
  const url = urlConfig("listings/properties", `market__name=${city}`)

  return fetch(url, {
    method: "GET"
  })
    .then(response => response.json())
    .then(json => {
      return json.results
    })
    .catch(error => console.error("Error fetching properties! ", error))
}

requestProperties.propTypes = {
  city: PropTypes.string.isRequired
}

export default requestProperties
