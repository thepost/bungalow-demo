import PropTypes from "prop-types"

const URLConfig = (path, params) => {
  const baseURL = "https://fieldstone.bungalow.com"
  const api = "api/v1"
  return `${baseURL}/${api}/${path}/?${params}`
}

URLConfig.propTypes = {
  path: PropTypes.string.isRequired,
  params: PropTypes.string
}

export default URLConfig
