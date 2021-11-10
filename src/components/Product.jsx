import { SearchOutlined, ShoppingCartOutlined, FavoriteBorderOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container= styled.div`
flex:1;
margin:5px;
`
const Circle=styled.div``
const Image=styled.img``
const Info=styled.div``
const Icon=styled.div``
const Product = ({item}) => {
    return (
        <Container>
            <circle/>
            <Image src={item.img}/>
            <info> 
            <Icon>
            <ShoppingCartOutlined/>
            </Icon>
            <Icon>
            <SearchOutlined/>
            </Icon>
            <Icon>
            <FavoriteBorderOutlined/>
            </Icon>
            </info>
        </Container>
    )
}

export default Product;

