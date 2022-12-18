import React from 'react';
import {
    Box,
    AppBar,
    Typography,
    Toolbar,
    Container,
    Stack,
    Button,
    List,
    ListItemText,
    ListItemButton,
    Collapse,
    Link,
    TextField,
    Badge
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Icon } from './Icon';
import { Cart } from './Cart';
import { PaletteMode } from '../config/theme.config';

const links = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Delivery', url: '/' },
]
const categories = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Delivery', url: '/' },
]

export const Navbar: React.FC<{}> = () => {

    const [open, setOpen] = React.useState<boolean>(false)

    const handleStateViewDrawer = () => {
        setOpen((prev) => !prev);
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed'>
                <Toolbar>
                    <Container maxWidth='xl' sx={{ marginX: 'auto' }}>
                        <Grid container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid>
                                <Typography variant='h5' sx={{ color: PaletteMode.BLACK }}>Shopcart</Typography>
                            </Grid>
                            <Grid>
                                <Stack direction="row" spacing={3}>
                                    {links.map((link, index) => (
                                        <Link key={index} href={`${link.url}`} underline='none'>
                                            <Typography>{link.name}</Typography>
                                        </Link>
                                    ))}
                                    {/* 
                                    <List component='nav' sx={{ position: 'relative' }} >
                                        <ListItemButton onClick={handleClick}>
                                            <ListItemText primary='Categories' />
                                            {open ? <Icon name='expand_less' /> : <Icon name='expand_more' />}
                                        </ListItemButton>

                                        <Collapse in={open} timeout='auto' unmountOnExit>
                                            <List component="div"
                                                sx={{
                                                    position: 'absolute',
                                                    top: '100%',
                                                    backgroundColor: '#ffffff',
                                                    width: '180px',
                                                    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);'
                                                }}
                                                disablePadding>
                                                {categories.map((category, index) => (
                                                    <ListItemButton sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <ListItemText primary={`${category.name}`} />
                                                    </ListItemButton>
                                                ))}
                                            </List>
                                        </Collapse>
                                    </List> */}
                                </Stack>

                            </Grid>
                            <Grid>
                                <Stack direction='row' spacing={2}>
                                    {/* <Button startIcon={<Icon name='person' />}>
                                        Account
                                    </Button> */}
                                    <TextField id="outlined-basic" placeholder='Search...' variant="outlined" size='small' />

                                    <Badge color="error" badgeContent={2}>
                                        <Button sx={{
                                            padding: '0 16px',
                                            color: PaletteMode.BLACK,
                                            '&:hover': {
                                                backgroundColor: PaletteMode.LIGHT_GRAY,
                                            }
                                        }} onClick={handleStateViewDrawer} startIcon={<Icon name='add_shopping_cart' />}>
                                            Cart
                                        </Button>
                                    </Badge>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <Cart
                open={open}
                handleStateViewDrawer={handleStateViewDrawer}
            />
        </Box >
    )
}