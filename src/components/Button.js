import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const propTypes = {
	filled: PropTypes.bool,
	text: PropTypes.string.isRequired,
}

const defaultProps = {
	filled: false,
}

const StyledButton = styled.button`
	background-color: ${props =>
		props.filled ? props.theme.colors.pink : "transparent"};
	border: ${props =>
		props.filled ? "none" : `${props.theme.colors.pink} 1px solid`};
	border-radius: 20.5px;
	color: ${props => props.theme.colors.white};
	cursor: pointer;
	font-family: ${props => props.theme.fonts.regular};
	font-size: 10px;
	height: 36px;
	letter-spacing: 0.83px;
	margin-right: 30px;
	margin-top: 30px;
	text-transform: uppercase;
	width: 120px;
`

const Button = ({ filled, text }) => (
	<StyledButton filled={filled}>{text}</StyledButton>
)

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
