// npm modules
import { useState } from 'react';

// components
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

// mui components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = ['projects', 'about', 'contact'];

function DrawerAppBar(props) {
  const {
    window,
    scrollToElement,
    checked,
    setChecked,
    setIsDarkPref,
    handleToggle,
    backgroundColor1,
    backgroundColor2,
    fontColor,
  } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const pascalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const drawer = (
    <Box sx={{ height: '100%', background: backgroundColor2 }}>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2, cursor: 'pointer', color: fontColor }} onClick={() => scrollToElement('landing')}>
          CS
        </Typography>
        <Divider />
        <List>
          {navItems.map((item, idx) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToElement(navItems[idx])}>
                <ListItemText primary={pascalize(item)} sx={{ color: fontColor }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <ToggleSwitch
          xs='block'
          sm='none'
          checked={checked}
          setChecked={setChecked}
          setIsDarkPref={setIsDarkPref}
          handleToggle={handleToggle}
        />
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor: backgroundColor1}} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            style={{ cursor: 'pointer' }}
            onClick={() => scrollToElement('landing')}
          >
            CS
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, idx) => (
              <Button key={item} onClick={() => scrollToElement(navItems[idx])} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          <ToggleSwitch
            xs='none'
            sm='block'
            checked={checked}
            setChecked={setChecked}
            setIsDarkPref={setIsDarkPref}
            handleToggle={handleToggle}
          />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;