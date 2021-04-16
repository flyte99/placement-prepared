import { Box, Button, Divider, Drawer, Hidden, List, Typography } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Gravatar from 'react-gravatar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import pages from 'src/components/home/pages';
import NavItem from 'src/components/NavItem';
import 'src/css/Components.css';
import { signOutUser } from '../../features/user/usersSlice';

const HomeSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();
  const currentUser = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {
        currentUser.token
          ? (
            <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', p: 2 }}>
              <Link to="account">
                <Gravatar
                  style={{ width: 70, height: 70, borderRadius: 70 }}
                  email={`${currentUser.username} `}
                />
              </Link>
              <Typography color="textPrimary" variant="h5">
                {`${currentUser.firstName} ${currentUser.lastName}`}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {currentUser.institution}
              </Typography>
              <Button
                color="primary"
                size="small"
                variant="contained"
                onClick={() => {
                  dispatch(signOutUser());
                }}
              >
                Sign out
              </Button>
            </Box>
          )
          : (
            <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', p: 2 }}>
              <Button color="primary" fullWidth size="large" variant="contained">
                <Link to="login">
                  Log In
                </Link>
              </Button>
            </Box>
          )
      }
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {pages.map(({ icon, path, subpages, title }) => {
            const [subNav, setSubnav] = useState(false);
            const showSubpages = () => setSubnav(!subNav);

            if (subpages && subNav) {
              return (
                <div>
                  <div key={title} className="sidebar-pages">
                    <NavItem href={path} title={title} icon={icon} />
                    <ExpandLess onClick={subpages && showSubpages} />
                  </div>
                  {subNav && subpages.map((subpage) => (
                    <NavItem className="subpage" href={subpage.path} title={subpage.title} />))}
                </div>
              );
            }
            return (
              <div key={title} className="sidebar-pages">
                <NavItem href={path} title={title} icon={icon} />
                {subpages ? <ExpandMore onClick={subpages && showSubpages} /> : null}
              </div>
            );
          })}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{ sx: { width: 256 } }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{ sx: { width: 256, top: 64, height: 'calc(100% - 64px)' } }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

HomeSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

HomeSidebar.defaultProps = {
  onMobileClose: () => {
  },
  openMobile: false
};

export default HomeSidebar;
