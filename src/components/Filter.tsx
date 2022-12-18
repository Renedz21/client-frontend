import React from 'react';
import {
    List, ListItemButton, ListItemIcon, ListItemText, Typography, TextField,
    RadioGroup, Radio, Collapse, Paper, Box, FormControlLabel, Button
} from '@mui/material'
import { useFormik } from 'formik';
import { Icon } from './Icon';

export const FilterComponent: React.FC = () => {

    const [open, setOpen] = React.useState<boolean>(false);
    const [open1, setOpen1] = React.useState<boolean>(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    }
    const handleClick1 = () => {
        setOpen1((prev) => !prev);
    }

    //sx={{ border: '1px solid red' }}
    //<Typography>Type</Typography>

    return (
        <Paper sx={{ width: '100%', maxWidth: 350 }}>
            <Typography variant='h4' sx={{ textAlign: 'center', mt: 2 }}>Filters</Typography>
            <Box>
                <List sx={{ width: '100%' }} component="nav">
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary="Type" />
                        {open ? <Icon name='expand_more' /> : <Icon name='chevron_right' />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List sx={{
                            padding: '0px 1.5rem'
                        }} component="div" disablePadding>
                            <RadioGroup aria-label="type" name="type" defaultValue="all">
                                <FormControlLabel value="all" control={<Radio />} label="All" />
                                <FormControlLabel value="all1" control={<Radio />} label="All" />
                                <FormControlLabel value="all2" control={<Radio />} label="All" />
                                <FormControlLabel value="all3" control={<Radio />} label="All" />
                                <FormControlLabel value="all4" control={<Radio />} label="All" />
                                <FormControlLabel value="all5" control={<Radio />} label="All" />
                            </RadioGroup>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleClick1}>
                        <ListItemText primary="Type 2" />
                        {open1 ? <Icon name='expand_more' /> : <Icon name='chevron_right' />}
                    </ListItemButton>
                    <Collapse in={open1} timeout="auto" unmountOnExit>
                        <List sx={{
                            padding: '0px 1.5rem'
                        }} component="div" disablePadding>
                            <RadioGroup aria-label="type1" name="type1" defaultValue="all">
                                <FormControlLabel value="all" control={<Radio />} label="All" />
                                <FormControlLabel value="all1" control={<Radio />} label="All" />
                                <FormControlLabel value="all2" control={<Radio />} label="All" />
                                <FormControlLabel value="all3" control={<Radio />} label="All" />
                                <FormControlLabel value="all4" control={<Radio />} label="All" />
                                <FormControlLabel value="all5" control={<Radio />} label="All" />
                            </RadioGroup>
                        </List>
                    </Collapse>
                </List>
            </Box>
        </Paper>
    )
}