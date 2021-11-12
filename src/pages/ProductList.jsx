import styled from "styled-components"
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container =styled.div``
const Title= styled.h1`
margin: 20px;

`
const FilterContainer= styled.div`
display: flex;
justify-content: space-between;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const Filter= styled.div`
margin: 20px;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
${mobile({ marginRight: "0px" })}

`
const Select = styled.select`
padding: 8px;
${mobile({ margin: "10px 0px" })}
`
const Option = styled.option`

`
const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>MakeUp Accessories & MakeUp Bags</Title>
            <FilterContainer>
            <Filter>
            <FilterText>Filter Products : </FilterText>
            <Select>
            <Option disabled selected>
            color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            </Select>

            </Filter>
            <Filter>
            <FilterText>Sort Products : </FilterText>
            
            <Select>
          <Option selected> Newest </Option>
            <Option> Price (asc)</Option>
            <Option>Price (desc)</Option>
           
            </Select>
            </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
