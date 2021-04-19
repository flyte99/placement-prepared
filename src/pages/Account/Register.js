import { Box, Button, Container, Link, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { loginUser } from '../../app/usersSlice';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Register | Placement Prepared</title>
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
            initialValues={{ email: '', firstName: '', lastName: '', password: '', policy: false }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                firstName: Yup.string().max(255).required('First name is required'),
                lastName: Yup.string().max(255).required('Last name is required'),
                institution: Yup.string().max(255).required('Institution is required'),
                password: Yup.string().required('Password is required')
                  .min(8, 'Password is too short - should be 8 chars minimum.')
                  .matches(/(?=.*[0-9])/, 'Password must contain a number.')
              })
            }
            onSubmit={() => {
              axios.post('http://localhost:8000/api/users/', {
                username: document.getElementById('email').value,
                password: document.getElementById('password').value,
                student: {
                  firstName: document.getElementById('firstName').value,
                  lastName: document.getElementById('lastName').value,
                  institution: document.getElementById('institution').value
                }
              }, { headers: { 'Content-Type': 'application/json' } })
                .then(() => {
                  axios.post('http://localhost:8000/api/auth/', {
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
                })
                .catch(() => {
                  navigate('/register', { replace: true });
                });
            }}
          >
            {({
              errors, handleBlur, handleChange,
              handleSubmit, isSubmitting, touched, values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    Create new account
                  </Typography>
                  <Typography color="textSecondary" gutterBottom variant="body2">
                    Use your email to create new account
                  </Typography>
                </Box>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="institution"
                  name="institution"
                  label="Institution"
                  value={values.institution}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.institution && errors.institution)}
                  helperText={touched.institution && errors.institution}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
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
                    Sign up now
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Have an account? {' '}
                  <Link component={RouterLink} to="/login" variant="h6">Sign in</Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Register;
