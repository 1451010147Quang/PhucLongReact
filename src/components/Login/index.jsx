import {
  Box,
  Button,
  Container,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import "../../SCSS/views/home.scss";

const useStyles = makeStyles((theme) => ({
  register: {
    background: "#efefef",
    paddingTop: "10px",
    paddingBottom: "80px",
  },
  main: {
    background: "white",
  },
  text: {
    textAlign: "center",
    fontSize: "24px",
    paddingTop: "70px",
    marginBottom: "55px",
    color: "#0C713D",
    fontWeight: "bold",
  },
  form: {
    padding: "45px 0",
    textAlign: "center",

    "& .MuiFormControl-fullWidth": {
      marginTop: "5px",
    },
    "& .MuiInputLabel-outlined": {
      color: "black",
    },
  },
  title: {
    fontWeight: "bold",
    fontSize: "15px",
    color: "#666666",
    textAlign: "left",
  },
  span: {
    color: "red",
  },
  textVD: {
    paddingLeft: "5px",
    fontStyle: "italic",
    color: "#0C713D",
    fontWeight: "bold",

    "&:hover": {
      color: "#0C713D",
      textDecoration: "none",
    },
  },
  forgotpass: {
    textAlign: "left",
  },
  submit: {
    fontSize: "12px",
    fontWeight: "bold",
    background: "#0C713D",
    height: "50px",
    marginTop: "50px",

    "&:hover": {
      background: "#0C713D",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.register}>
      <Container className={classes.main}>
        <Typography className={classes.text} component="h1" variant="h5">
          ĐĂNG NHẬP VÀO THÀNH VIÊN PHÚC LONG
        </Typography>
        <Container maxWidth="xs" className={classes.form}>
          <Box mb={2}>
            {props.change === false 
            ? "" 
            : <Alert severity="success"><strong>Đăng nhập thành công</strong></Alert>}
          </Box>
          <form noValidate>
            <Typography variant="h6" className={classes.title}>
              Email / Số thẻ <span className={classes.span}>(*)</span>
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Nhập Email / Số thẻ"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={props.changeEmailLogin}
            />
            <Box textAlign="left" mb={2} color="red">
              <i>{props.erroremail}</i>
            </Box>
            <Typography variant="h6" className={classes.title}>
              Mật khẩu <span className={classes.span}>(*)</span>
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Nhập mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={props.changePassLogin}
            />
            <Box textAlign="left" mb={2} color="red">
              <i>{props.errorpass}</i>
            </Box>
            <Box className={classes.forgotpass}>
              <span style={{ color: "#666666" }}>Quên mật khẩu? bấm</span>
              <Link href="#" variant="body2" className={classes.textVD}>
                vào đây
              </Link>
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={props.clickBtnLogin}
            >
              ĐĂNG NHẬP
            </Button>
          </form>
        </Container>
      </Container>
    </div>
  );
}
