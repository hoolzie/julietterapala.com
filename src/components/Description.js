import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const DescriptionContainer = styled.h1`
	color: ${props => props.theme.colors.white};
	font-family: ${props => props.theme.fonts.regular};
	font-size: 16px;
	font-weight: ${props => props.theme.fontWeights.light};
	line-height: 23px;
	margin-top: 20px;
	width: 279px;
`
const Description = ({ text }) => (
	<DescriptionContainer>{text}</DescriptionContainer>
)

Description.propTypes = {
	text: PropTypes.string.isRequired,
}

export default Description
