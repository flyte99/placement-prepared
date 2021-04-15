import { Box, Button, Checkbox, Container, FormHelperText, Link, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Register = () => {
  const navigate = useNavigate();

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
                  .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
                policy: Yup.boolean().oneOf([true], 'This field must be checked')
              })
            }
            onSubmit={() => {
              axios.post('http://localhost:8000/api/users/', {
                username: document.getElementsByName('email').value,
                password: document.getElementsByName('password').value,
                student: {
                  firstName: document.getElementsByName('firstName').value,
                  lastName: document.getElementsByName('lastName').value,
                  institution: document.getElementsByName('institution').value
                }
              }, { headers: { 'Content-Type': 'application/json' } })
                .then(() => {
                  axios.post('http://localhost:8000/}api/auth/', {
                    username: document.getElementsByName('email').value,
                    password: document.getElementsByName('password').value,
                  }, { headers: { 'Content-Type': 'application/json' } })
                    .then(() => {
                      navigate('/', { replace: true });
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                })
                .catch((error) => {
                  console.error(error);
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
                  error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  helperText={touched.firstName && errors.firstName}
                  label="First name"
                  margin="normal"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="Last name"
                  margin="normal"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.institution && errors.institution)}
                  fullWidth
                  helperText={touched.institution && errors.institution}
                  label="Institution"
                  margin="normal"
                  name="institution"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.institution}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ alignItems: 'center', display: 'flex', ml: -1 }}>
                  <Checkbox checked={values.policy} name="policy" onChange={handleChange} />
                  <Typography color="textSecondary" variant="body1">
                    I have read the {' '}
                    <Link color="primary" component={RouterLink} to="#" underline="always" variant="h6">
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>{errors.policy}</FormHelperText>
                )}
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
