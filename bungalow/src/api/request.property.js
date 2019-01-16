import PropTypes from "prop-types"
import urlConfig from "./url"

const requestProperty = id => {
  const url = urlConfig(`listings/properties/${id}`)

  return fetch(url, {
    method: "GET"
  })
    .then(response => response.json())
    .then(json => {
      return json
    })
    .catch(error => console.error("Error fetching properties! ", error))
}

requestProperty.propTypes = {
  id: PropTypes.string.isRequired
}

export default requestProperty
