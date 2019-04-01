import React from "react"
import styled from "@emotion/styled"

import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import Description from "../components/Description"
import BackgroundImage from "../components/BackgroundImage"
import Button from "../components/Button"
import LinkedInIcon from "../components/icons/LinkedInIcon"
import GitHubIcon from "../components/icons/GitHubIcon"
import EmailIcon from "../components/icons/EmailIcon"

const Container = styled.div`
	display: flex;
	height: auto;
	width: 100%;
`
const Content = styled.div`
	margin-left: 15%;
	margin-top: 20%;
`

const IconWrapper = styled.div`
	height: 180px;
	padding-left: 40px;
	position: absolute;
	bottom: 0px;
`

const Page = () => {
	return (
		<Container>
			<IconWrapper>
				<LinkedInIcon />
				<GitHubIcon />
				<EmailIcon />
			</IconWrapper>
			<Content>
				<Title text="Juliette Rapala" />
				<Subtitle text="Software Developer" />
				<Description text="I build JavaScript apps for the web, mobile, and desktop" />
				<Button text="About Me" filled />
				<Button text="My Work" />
			</Content>
			<BackgroundImage />
		</Container>
	)
}

export default Page
