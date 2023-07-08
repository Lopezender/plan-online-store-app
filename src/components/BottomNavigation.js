import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GrassIcon from '@mui/icons-material/Grass';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 550 }} value={value} onChange={handleChange} >
      <BottomNavigationAction 
        label="Home"
        value="Inicio"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction 
        label="Explore"
        value="explorar"
        icon={<GrassIcon />}
      />
      <BottomNavigationAction
        label="Scan"
        value="escaner"
        icon={<QrCodeScannerIcon />}
      />
      <BottomNavigationAction
        label="Detail"
        value="nearby"
        icon={<ShoppingCartIcon />}
      />
      <BottomNavigationAction label="User" value="usuario" icon={<PersonOutlineIcon />} />
    </BottomNavigation>
  );
}