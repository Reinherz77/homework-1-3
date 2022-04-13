import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component='span'
        sx={{display:'inline-block',mx: '2px', transform:'scale(0.8'}}>
        dot
    </Box>
)

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14}} color='text.secondary' gutterBottom>
                Word of the Day
            </Typography>
            <Typography>
                
            </Typography>
        </CardContent>
    </React.Fragment>
)