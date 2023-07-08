import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(8),
  textAlign: 'flex',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }} marginTop={4}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} >
          <Item> <h4>Monstera</h4>
Monstera is a type of tropocal. plant that is popular

          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item><h4>Aloe Vera</h4>
          Aloe vera is a plant specie with thick fieshy leaves </Item>
        </Grid>
      </Grid>
    </Box>
  );
}