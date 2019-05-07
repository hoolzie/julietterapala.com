import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const iconPropType = PropTypes.shape({
	icon: PropTypes.array.isRequired,
	iconName: PropTypes.string.isRequired,
	prefix: PropTypes.string.isRequired,
})

const StyledIcon = styled(FontAwesomeIcon)`
	color: ${props =>
		props.hover ? props.theme.colors.pink : props.theme.colors.white};
	font-size: 24px;
`
const Text = styled.p`
	color: ${props => props.theme.colors.pink};
	font-family: ${props => props.theme.fonts.regular};
	font-size: 14px;
	font-weight: ${props => props.theme.fontWeights.regular};
	margin-left: 8px;
	margin-top: 2px;
	/* line-height: 10px; */
`
const Wrapper = styled.div`
	cursor: pointer;
	display: flex;
	height: 20px;
	margin-top: 18px;
	width: 100px;
`
class Icon extends React.Component {
	static propTypes = {
		icon: iconPropType.isRequired,
		tabIndex: PropTypes.number,
		text: PropTypes.string.isRequired,
	}

	static defaultProps = {
		tabIndex: 0,
	}

	state = {
		showText: false,
	}

	reveal = () => {
		this.setState({ showText: true })
	}

	hide = () => {
		this.setState({ showText: false })
	}

	render() {
		const { icon, tabIndex, text } = this.props
		const { showText } = this.state
		return (
			<Wrapper
				onMouseEnter={this.reveal}
				onMouseLeave={this.hide}
				onFocus={this.reveal}
				onBlur={this.hide}
				tabIndex={tabIndex}
			>
				<StyledIcon icon={icon} hover={showText ? 1 : 0} />
				<Text>{showText ? text : ""}</Text>
			</Wrapper>
		)
	}
}

export default Icon
