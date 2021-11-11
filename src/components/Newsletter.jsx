import { Send } from "@material-ui/icons"
import styled from "styled-components"

const Container=styled.div`
height: 60vh;
background-color: #D1E8E4;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Title=styled.h1`
font-size: 70px;
margin-bottom: 20px;

`
const Desc=styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
`
const InputContainer=styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid light-gray;
`
const Input=styled.input`
border: none;
flex: 8;
padding-left: 20px;
`
const Button=styled.button`
flex: 1;
border:none;
background-color: teal;
color: white;
`

const Newsletter = () => {
    return (
        <Container>
          <Title>NewsLetter</Title>
          <Desc>Get Timely updates from your favorite products.</Desc>
          <InputContainer>
          <Input placeholder="Your email" />
          <Button>
          <Send/>
          </Button>
          </InputContainer>  
        </Container>
    )
}

export default Newsletter