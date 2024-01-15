import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Snackbar,
  TextField,
  Typography
} from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import useAuth from "../hooks/useAuth";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Vui lòng nhập đúng định dạng email")
    .max(255)
    .required("Vui lòng nhập email"),
  password: Yup.string()
    .max(255)
    .required("Vui lòng nhập mật khẩu")
});
const Login = () => {
  const {
    login,
    error,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword
  } = useAuth();
  return (
    <>
      <Helmet>
        <title>Login | Lending App</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center"
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              login(values, actions);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                {error && (
                  <Snackbar open autoHideDuration={6000} message="error" />
                )}
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    Đăng nhập vào hệ thống
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Địa chỉ email"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                  autoComplete="off"
                  InputProps={{
                    sx: { backgroundColor: "#fff" },
                    startAdornment: (
                      <>
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      </>
                    )
                  }}
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Mật khẩu"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  autoComplete="chrome-off"
                  InputProps={{
                    sx: { backgroundColor: "#fff" },
                    autoComplete: "chrome-off",
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        className="cursor-pointer"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </InputAdornment>
                    ),
                    form: {
                      autocomplete: "chrome-off"
                    }
                  }}
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
                    Đăng nhập
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
