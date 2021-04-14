import { Avatar, Box, Divider, Drawer, Hidden, List, Typography } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import pages from 'src/components/home/pages';
import NavItem from 'src/components/NavItem';
import 'src/css/Components.css';

const user = {
  avatar: '', // TODO: fetch user avatar
  jobTitle: 'University of Reading', // TODO: fetch organisation
  name: 'Mollie Bourke' // TODO: fetch name
};

const HomeSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', p: 2 }}>
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{ cursor: 'pointer', width: 64, height: 64 }}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">{user.name}</Typography>
        <Typography color="textSecondary" variant="body2">{user.jobTitle}</Typography>
      </Box>
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
