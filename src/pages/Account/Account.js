import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import AccountProfile from 'src/components/account/AccountProfile';
import AccountProfileDetails from 'src/components/account/AccountProfileDetails';
import Login from './Login';

const Account = () => {
  const currentUser = useSelector((state) => state.users);

  return (
    <>
      <Helmet>
        <title>Account | Placement Prepared</title>
      </Helmet>
      {
        currentUser.token ? (
          <Box sx={{ backgroundColor: 'background.default', minHeight: '100%', py: 3 }}>
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid item lg={4} md={6} xs={12}>
                  <AccountProfile />
                </Grid>
                <Grid item lg={8} md={6} xs={12}>
                  <AccountProfileDetails />
                </Grid>
              </Grid>
            </Container>
          </Box>
        )
          : <Login />
      }
    </>
  );
};

export default Account;
