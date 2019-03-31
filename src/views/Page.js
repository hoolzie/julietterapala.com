import React from "react"
import styled from "@emotion/styled"

import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import Description from "../components/Description"
import BackgroundImage from "../components/BackgroundImage"
import Button from "../components/Button"

const Container = styled.div`
	display: flex;
	height: auto;
	width: 100%;
`
const Content = styled.div`
	margin-left: 15%;
	margin-top: 22%;
	z-index: 99;
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
			<BackgroundImage />
		</Container>
	)
}

export default Page
