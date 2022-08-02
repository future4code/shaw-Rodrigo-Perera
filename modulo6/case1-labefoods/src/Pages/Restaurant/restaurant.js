import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/url";
import { useParams } from "react-router-dom";
import { ProductCard, ProductImage, InfoContainer, ProductName, ProductDescription, ProductPrice } from "./styled";

const Restaurant = () => {

    const [products, setProducts] = useState([])

    const {id} = useParams()

    const {token} = localStorage

    useEffect(() => {
        getRestaurantDetail()
    }, [])

    const getRestaurantDetail = async() => {
        await axios.get(`${BASE_URL}/restaurants/${id}`, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            setProducts(res.data.restaurant.products)
        })
        .catch((err) => {
            console.log(err.response.data.message)
        })
    }

    const mappingProducts = products.map((product) => {
        return(
            <ProductCard>
                <div>
                    <ProductImage src={product.photoUrl}/>
                </div>
                <InfoContainer>
                    <ProductName>{product.name}</ProductName>
                    <ProductDescription>{product.description}</ProductDescription>
                    <ProductPrice>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ProductPrice>                
                </InfoContainer>
            </ProductCard>
        )
    })
    return (
        <div>
            {mappingProducts}
        </div>
    )
}

export default Restaurant;