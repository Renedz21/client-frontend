import React from 'react'

import { Card, CardMedia, CardContent, CardHeader, Grid, Typography, Stack, Button } from '@mui/material'
import { CardProps } from '../interfaces/CardProps.interface'
import { useNavigate } from 'react-router-dom'
import { PaletteMode } from '../config/theme.config'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addToCart } from '../redux/Slices'

export const CardComponent: React.FC<CardProps> = ({
    id,
    description,
    image,
    price,
    name,
}) => {

    const itemExist = useAppSelector((state) => state.cartReducer)

    let navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ name, price, image, id }))
    }

    React.useEffect(() => {
        itemExist.some((item) => item.id === id) ? console.log('item exist') : console.log('item not exist')
    }, [itemExist, id])

    //onClick={() => navigate(`/product/${_id}`)}
    return (
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }} >
                <CardMedia
                    component="img"
                    height="315"
                    image={image}
                    alt={description}
                />
                <CardContent>
                    <Stack direction='row' sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Typography variant='h6'>{name}</Typography>
                        <Typography variant='h6'>${price}</Typography>
                    </Stack>
                    <Typography sx={{
                        fontSize: '14px',
                        my: '8px',
                        color: PaletteMode.GRAY,
                    }}>
                        {description}
                    </Typography>

                    <Button
                        onClick={handleAddToCart}
                        variant='outlined'
                        sx={{
                            backgroundColor: PaletteMode.WHITE,
                            color: PaletteMode.DARK_GREEN,
                            '&:hover': {
                                backgroundColor: PaletteMode.DARK_GREEN,
                                color: PaletteMode.WHITE,
                            },
                            borderRadius: '36px',
                        }}>
                        Add to cart
                    </Button>
                </CardContent>
            </Card>

        </Grid>

    )
}