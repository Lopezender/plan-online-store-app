import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2} marginTop={4} marginLeft={10}>
      <Button variant="contained">All</Button>
      <Button variant="contained" color='inherit'>Outdoors</Button>
      <Button variant="contained" color='inherit'>Indoors</Button>
      <Button variant="contained" color='inherit'>Garde</Button>
    </Stack>
  );
}