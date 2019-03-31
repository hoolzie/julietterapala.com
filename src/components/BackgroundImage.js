import React from "react"
import styled from "@emotion/styled"

import background from "../../public/assets/img/background-cropped.png"

const Image = styled.img`
	height: auto;
	max-width: 70%;
	min-height: 100%;
	min-width: 700px;
	position: fixed;
	right: 0;
	top: 0;
`
const BackgroundImage = () => <Image src={background} />

export default BackgroundImage
