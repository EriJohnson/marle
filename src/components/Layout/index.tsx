import { Link, Outlet, useLocation } from 'react-router-dom';

import LeadersIcon from '@mui/icons-material/SupervisorAccount';
import { Avatar, Theme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import oanseLogo from 'assets/images/oanse-logo.png';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from 'hooks/useAuth';

const drawerWidth = 240;

function stringAvatar(name?: string) {
  return {
    children: `${name?.split(' ')[0][0]}${name?.split(' ')[1][0]}`,
  };
}

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { user, handleLogout } = useAuth();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List disablePadding>
        {[{ text: 'Líderes', pathname: '/leaders' }].map((item) => (
          <ListItem key={item.pathname} disablePadding>
            <ListItemButton
              component={Link}
              to="leaders"
              selected={item.pathname === location.pathname}
              sx={{
                py: 3,
              }}
              onClick={handleDrawerToggle}
            >
              <ListItemIcon>
                <LeadersIcon />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List disablePadding>
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleLogout}
            sx={{
              py: 3,
            }}
          >
            <ListItemIcon>
              <LogoutIcon sx={{ color: ({ palette }) => palette.error.main }} />
            </ListItemIcon>
            <ListItemText
              primary="Sair"
              sx={{ color: ({ palette }) => palette.error.main }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        color="secondary"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component="img"
            alt="OANSE Logo"
            src={oanseLogo}
            sx={{ height: 32 }}
          />
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar
                {...stringAvatar(user?.fullName)}
                sx={{
                  bgcolor: (theme: Theme) => theme.palette.primary.main,
                }}
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth + 40,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
