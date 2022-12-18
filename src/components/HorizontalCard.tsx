import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Grid,
} from '@mui/material';
import { useAppDispatch } from '../redux/hooks';
import { removeToCart } from '../redux/Slices';
import { HorizontalCardProps } from '../interfaces/HorizontalCardProps.interface';

export const HorizontalCardComponent: React.FC<HorizontalCardProps> = ({ id, image, description, name, price }) => {

    const dispatch = useAppDispatch()

    const handleRemoveItem = () => {
        dispatch(removeToCart({ id }))
    }

    return (
        <Card sx={{ display: 'flex', border: '1px solid red', my: 2 }}>
            <CardMedia
                component="img"
                sx={{ width: 250, height: 120 }}
                image={image}
                alt={name}
            />
            <Grid container sx={{ mx: 1 }}>
                <Grid item xs={9}>
                    <CardContent>
                        {/* <Typography variant="h4">{name}</Typography> */}
                        {/* <Divider /> */}
                        {/* <Typography variant="h6">{info}</Typography> */}
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}