import React from "react"
import PropTypes from "prop-types"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Icon from "./Icon"

const propTypes = {
	tabIndex: PropTypes.number,
}

const defaultProps = {
	tabIndex: 0,
}

const GitHubIcon = ({ tabIndex }) => (
	<Icon icon={faGithub} text="GitHub" tabIndex={tabIndex} />
)

GitHubIcon.propTypes = propTypes
GitHubIcon.defaultProps = defaultProps

export default GitHubIcon
