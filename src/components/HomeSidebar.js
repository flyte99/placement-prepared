import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Divider, Drawer, Hidden, List, Typography } from '@material-ui/core';
import { Briefcase, Codesandbox, FileText, Home, Mic, PenTool, Settings, Users } from 'react-feather';
import NavItem from './NavItem';

const user = {
  avatar: '', // TODO: fetch user avatar
  jobTitle: 'University of Reading', // TODO: fetch organisation
  name: 'Mollie Bourke' // TODO: fetch name
};

const items = [
  {
    href: '/app/',
    icon: Home,
    title: 'Home'
  },
  {
    href: '/app/cvs_and_cover_letters',
    icon: FileText,
    title: 'CVs and Cover Letters'
  },
  {
    href: '/app/psychometric_testing',
    icon: PenTool,
    title: 'Psychometric Testing'
  },
  {
    href: '/app/assessment_centres',
    icon: Briefcase,
    title: 'Assessment Centres'
  },
  {
    href: '/app/interviews',
    icon: Users,
    title: 'Interviews'
  },
  {
    href: '/app/industry_skills',
    icon: Codesandbox,
    title: 'Industry Skills'
  },
  {
    href: '/app/podcasts',
    icon: Mic,
    title: 'Podcasts'
  },
  {
    href: '/app/settings',
    icon: Settings,
    title: 'Settings'
  },
];

const HomeSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
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
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
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
  onMobileClose: () => { },
  openMobile: false
};

export default HomeSidebar;
