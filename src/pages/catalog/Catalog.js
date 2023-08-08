import React from 'react'
import styled from 'styled-components'
import catalog1 from '../../assets/catalog1.jpg'
import catalog2 from '../../assets/catalog2.jpg'
import catalog3 from '../../assets/catalog3.jpg'
import tester from '../../assets/tester.png'

const CatStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
        font-family: 'times new roman', sans-serif;
    }

    /* Responsive styles */
    @media (max-width: 768px) {
        padding: 1rem;
        h1 {
            font-size: 1.5rem;
        }
    }
`;

const ProductCard = styled.div`
    /* Add styling for your product cards here */
    /* e.g., width, height, border, background color, etc. */
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProductImage = styled.img`
    /* Add styling for product images */
    /* e.g., width, height, border, etc. */
    width: 50%;
`;

const ProductContainer = styled.div`
    /* Add any additional styling for each product container here */
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;
`;

const ProductDescription = styled.a`
    /* Add any additional styling for the product description here */
    font-size: 1rem;
    font-family: 'times new roman', sans-serif;
    font-weight: bold;
    text-decoration: none;
    color: black;
`;

const CatImg = styled.img`
    /* Add any additional styling for the product caption here */
    width: 100%;
    height: 100%;
    max-width: 600px;
`;

const Catalog = () => {
    return (
        <>
            <CatStyle>
                <CatImg src={tester} alt="Product 3" />
                <h1 style={
                    {
                        fontSize: '2rem',
                        fontWeight: '700',
                        marginBottom: '10px',
                    }
                }>Newest Products</h1>
                <ProductCard>
                    <ProductImage src={catalog1} alt="Product 1" />
                    <ProductImage src={catalog2} alt="Product 2" />
                </ProductCard>
                <br />
                <h1>Catalog</h1>
                <ProductCard>
                    <ProductContainer>
                        <ProductImage src={catalog1} alt="Product 1" />
                        <ProductDescription href='https://www.shopee.co.id/8tinyholes'>
                            T-Shirt 8tinyholes 'Kraken is Alive' - White (Soon)
                        </ProductDescription>
                    </ProductContainer>
                    <ProductContainer>
                        <ProductImage src={catalog2} alt="Product 2" />
                        <ProductDescription href='https://www.shopee.co.id/8tinyholes'>
                            T-Shirt 8tinyholes RSE - Black (Soon)
                        </ProductDescription>
                    </ProductContainer>
                    <ProductContainer>
                        <ProductImage src={catalog3} alt="Product 3" />
                        <ProductDescription href='https://www.shopee.co.id/8tinyholes'>
                            T-Shirt 8tinyholes Murderer - White
                        </ProductDescription>
                    </ProductContainer>
                </ProductCard>
            </CatStyle>
        </>
    )
}

export default Catalog