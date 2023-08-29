import styled from "styled-components"
import img from "../src/assets/Space.jpg"


export const EmbalosContainer = styled.div `
display:flex;
-webkit-box-pack:justify;
justify-content: space-between;
border: 3px solid #000;
background-image: url(${img});
height: 940px;
`;

export const Imagem = styled.img`
width: 380px;
height: 260px; 
border-end-end-radius: 500px;
border-end-start-radius: 500px;
margin: 25px;
`

