import { Box, Button, Container, Link, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Login | Placement Prepared</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={() => {
              axios.post('http://localhost:8000/api/auth/', {
                username: document.getElementById('email').value,
                password: document.getElementById('password').value
              }, { headers: { 'Content-Type': 'application/json' } })
                .then((response) => {
                  const { token } = response.data;
                  const { username, student } = response.data.user;
                  const firstName = student.first_name;
                  const lastName = student.last_name;
                  const { institution, progress } = student;

                  console.log(progress);

                  localStorage.setItem('token', token);
                  localStorage.setItem('username', username);
                  localStorage.setItem('firstName', firstName);
                  localStorage.setItem('lastName', lastName);
                  localStorage.setItem('institution', institution);
                  localStorage.setItem('progress', progress);
                  navigate('/', { replace: true });
                })
                .catch((error) => {
                  console.error(error);
                });
            }}
          >
            {({
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 1 }}><Typography color="textPrimary" variant="h2">Sign in</Typography></Box>
                <TextField
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Don&apos;t have an account?{' '}
                  <Link component={RouterLink} to="/register" variant="h6">Sign up</Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
