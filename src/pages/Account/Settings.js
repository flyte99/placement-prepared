import { Box, Container } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import SettingsPassword from 'src/components/settings/SettingsPassword';

const SettingsView = () => (
  <>
    <Helmet>
      <title>Settings | Placement Prepared</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ pt: 3 }}>
          <SettingsPassword />
        </Box>
      </Container>
    </Box>
  </>
);

export default SettingsView;
