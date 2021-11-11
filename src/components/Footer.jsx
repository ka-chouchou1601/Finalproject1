
import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons'
import styled from 'styled-components'

const Container= styled.div`
display:flex;
`
const Left= styled.div`
flex:1;
display: flex;
flex-direction: column;
`
const Logo=styled.h1`
`
const Desc=styled.p`
margin: 20px 0px;
`
const SocialContainer=styled.div`
display: flex;

`
const SocialIcon=styled.div`
width: 40px;
height:40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center= styled.div`
flex:1;
`
const Right= styled.div`
flex:1;
`
const Footer = () => {
    return (
        <Container>
            <Left>
            <Logo>Gechou.</Logo>
            <Desc>
            Women shouldn't struggle to get their product ,with Gechou order your favorite product and it will be 
            delivered to you,we respect your privacy and are ready to serve you quality products,
            Don't forget to follow us and all our social media platforms.
            </Desc>
            <SocialContainer>
              <SocialIcon color = "E4405F" >
              <Facebook />
              </SocialIcon >
              <SocialIcon color = "E4405F">
              <Instagram />
              </SocialIcon>
              <SocialIcon color= "55ACEE">
              <Twitter />
              </SocialIcon>
              <SocialIcon color= "E4405F">
              <Pinterest />
              </SocialIcon>
            </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
           
        </Container>
    )
}

export default Footer;
