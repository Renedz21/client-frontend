import React from 'react';
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    Stack,
    Typography,
} from '@mui/material';
import { CartProps } from '../interfaces/CartProps.interface';
import { Icon } from './Icon';
import { useAppSelector } from '../redux/hooks';
import { HorizontalCardComponent } from './HorizontalCard';

export const Cart: React.FC<CartProps> = ({ open, handleStateViewDrawer }) => {

    const items = useAppSelector((state) => state.cartReducer)

    return (
        <Drawer anchor='right' open={open}>
            <Box sx={{ p: 2 }}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h5">Your Cart</Typography>
                    <IconButton onClick={() => handleStateViewDrawer()}>
                        <Icon name='close' />
                    </IconButton>
                </Stack>
                <Divider sx={{ my: 1.5 }} />
                {items.length > 0
                    ? items.map(({ id, image, name, description }) => (
                        <HorizontalCardComponent
                            key={id}
                            id={id}
                            image={image}
                            description={description}
                            name={name}
                        />
                    ))
                    : 'Nada por aqui'}
            </Box>
        </Drawer >
    )
}
