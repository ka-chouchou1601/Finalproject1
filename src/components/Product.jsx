import { SearchOutlined, ShoppingCartOutlined, FavoriteBorderOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Info=styled.div`
opacity: 0;
width: 98%;
height: 100%;
position:absolute;
top: 0;
left:0;
background-color: rgba(0,0,0,0.2) ;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;

const Container= styled.div`
flex:1;
margin:5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
position: relative;

&:hover ${Info}{
opacity: 1;
}
`


const Image=styled.img`
height: 100%;
width: 90%;

`;

const Icon=styled.div`
width: center;
height: center;
border-radius: 52%;
background-color: white;
display: flex;
align-item: center;
justify-content: center;
margin :10px;
transition: all 0.5s ease;

&:hover{
    background-color: #C85C5C;
    transform:scale(1.2);
}
`;
const Product = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info> 
            <Icon>
            <ShoppingCartOutlined/>
            </Icon>
            <Icon>
            <SearchOutlined/>
            </Icon>
            <Icon>
            <FavoriteBorderOutlined/>
            </Icon>
            </Info>
        </Container>
    )
}

export default Product;

