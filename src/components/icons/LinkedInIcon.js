import React from "react"
import PropTypes from "prop-types"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Icon from "./Icon"

const propTypes = {
	tabIndex: PropTypes.number,
}

const defaultProps = {
	tabIndex: 0,
}

const LinkedInIcon = ({ tabIndex }) => (
	<Icon icon={faLinkedin} text="LinkedIn" tabIndex={tabIndex} />
)

LinkedInIcon.propTypes = propTypes
LinkedInIcon.defaultProps = defaultProps

export default LinkedInIcon
