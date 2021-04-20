import { Box, Button, Container, Link, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { loginUser } from '../../app/usersSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
              axios.post('https://placement-prepared-backend.herokuapp.com/api/auth/', {
                username: document.getElementById('email').value,
                password: document.getElementById('password').value,
              }, { headers: { 'Content-Type': 'application/json' } })
                .then((response) => {
                  const { token, user } = response.data;
                  const { username, student } = user;
                  const { firstName, lastName, institution, progress, score } = student;

                  const userInfo = { token, username, firstName, lastName, institution, progress, score };
                  dispatch(loginUser(userInfo));

                  navigate('/', { replace: true });
                })
                .catch(() => {
                  navigate('/login', { replace: true });
                });
            }}
          >
            {({
              values, touched, errors, isSubmitting,
              handleChange, handleBlur, handleSubmit
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
