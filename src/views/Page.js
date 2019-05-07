import React from "react"
import styled from "@emotion/styled"

import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import Description from "../components/Description"
import Button from "../components/Button"
import LinkedInIcon from "../components/icons/LinkedInIcon"
import GitHubIcon from "../components/icons/GitHubIcon"
import EmailIcon from "../components/icons/EmailIcon"

const Container = styled.div`
	display: flex;
	height: auto;
	width: 100%;
	@media (max-width: 500px) {
		flex-direction: column;
	}
`
const Content = styled.div`
	margin-left: 15%;
	margin-top: 20%;
	text-shadow: black;
	@media (max-width: 500px) {
		align-items: center;
		display: flex;
		flex-direction: column;
		margin-left: 0;
		text-align: center;
		width: 100%;
	}
`

const IconWrapper = styled.div`
	height: 180px;
	padding-left: 40px;
	position: absolute;
	bottom: 0px;
	@media (max-width: 500px) {
		display: flex;
		justify-content: center;
		margin-left: 10px;
		margin-top: 20px;
		position: static;
		width: 100%;
	}
`

const Page = () => {
	return (
		<Container>
			<Content>
				<Title text="Juliette Rapala" />
				<Subtitle text="Software Developer" />
				<Description text="I build JavaScript apps for the web, mobile, and desktop" />
				<Button text="About Me" filled />
				<Button text="My Work" />
			</Content>
			<IconWrapper>
				<LinkedInIcon />
				<GitHubIcon />
				<EmailIcon />
			</IconWrapper>
		</Container>
	)
}

export default Page
