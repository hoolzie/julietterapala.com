import React from "react"
import styled from "@emotion/styled"

const Container = styled.div({
	background: "whitesmoke",
	height: "100vh",
})

const Headline = styled.h1`
	color: ${props => props.theme.colors.secondary};
	font-family: sans-serif;
`

const Page = () => {
	return (
		<Container>
			<Headline>Juliette Rapala</Headline>
		</Container>
	)
}

export default Page
