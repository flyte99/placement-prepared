import { AppBar, Box, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../Logo';

const HomeNavbar = ({ onMobileNavOpen, ...rest }) => (
  <AppBar elevation={0} {...rest}>
    <Toolbar>
      <RouterLink to="/"><Logo /></RouterLink>
      <Typography sx={{ ml: 2 }} variant="h1">Placement Prepared</Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Hidden lgUp>
        <IconButton color="inherit" onClick={onMobileNavOpen}><MenuIcon /></IconButton>
      </Hidden>
    </Toolbar>
  </AppBar>
);

HomeNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default HomeNavbar;
