import React from 'react';
import { Container, Grid, Typography, Stack } from '@mui/material'
import { FilterComponent } from '../components/Filter';
import { CardComponent } from '../components/Card';

import { products } from '../api/products'
import { ProductsProps } from '../interfaces/ProductsProps.interface'


export const ProductPage: React.FC = () => {

    const [allProducts, setAllProducts] = React.useState<ProductsProps[] | null>(null)

    React.useEffect(() => {
        products.getProducts().then((res) => {
            setAllProducts(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <Container maxWidth='xl' sx={{ mt: 9 }}>
            <Typography sx={{ my: '25px' }} variant='h5'>All Products</Typography>
            <Stack direction='row' spacing={10}>
                <FilterComponent />

                {allProducts?.length !== 0 ?
                    allProducts?.map((product) => (
                        <Grid container key={product._id}>
                            <CardComponent
                                id={product._id}
                                description={product.description}
                                image={product.image}
                                price={product.price}
                                name={product.name}
                            />
                        </Grid>
                    )) :
                    <h1>No products</h1>
                }
            </Stack>
        </Container>
    )
}