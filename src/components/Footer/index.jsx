import {
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  Link,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
/* import "../../SCSS/views/home.scss"; */
import DatThongBao from "../../img/dathongbao.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "35px 0 30px",

    "& .MuiTypography-subtitle1": {
      lineHeight: "1.5",
    },
  },
  footerMid: {
    padding: "0 20px",
  },
  formSearch: {
    margin: 0,
    marginTop: "5px",
    width: "80%",
    padding: 0,

    boxShadow: "none",
    display: "flex",
    justifyContent: "space-between",
    "::placeholder": {
      color: "black",
    },
    "& .MuiInputBase-root": {
      width: "90%",
      border: "1px solid #0C713D",
      borderRadius: "5px",
      "& .MuiInputBase-input": {
        paddingLeft: "10px",
      },
    },
  },
  iconButton: {
    padding: "5px",
    marginLeft: "5px",
    border: "1px solid #0C713D",
    borderRadius: "5px",
  },
  copyRight: {
    fontSize: "0.8em",
    lineHeight: "1.6",
    padding: "2px 15px 3px",
    color: "#8d8d8d",
    backgroundColor: "black",
    textAlign: "center",
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.footer}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box px={2}>
              <Typography variant="subtitle1">
                <strong>Trụ sở chính: </strong>
                Công ty TNHH SX TM Phúc Long - ĐKKD: 0302 108 546do sở KHĐT
                TPHCM cấp lần đầu ngày 12/9/2000
              </Typography>
              <Typography variant="subtitle1">
                <strong>Nhà máy: </strong>
                D_8D_CN Đường XE 1, Khu Công Nghiệp Mỹ Phước III, phường Mỹ
                Phước, thị xã Bến Cát, tỉnh Bình Dương, Việt Nam
              </Typography>
              <Typography variant="subtitle1">
                <strong>Địa chỉ: </strong>
                42/24 - 42/26 Đường 643 Tạ Quang Bửu, phường 4, quận 8, Hồ Chí
                Minh
              </Typography>
              <Typography variant="subtitle1">
                <strong>Điện thoại: </strong>
                028 6263 0377 - 6263 0378
              </Typography>
              <Typography variant="subtitle1">
                <strong>Fax: </strong>
                (028) 6263 0379
              </Typography>
              <Typography variant="subtitle1">
                <strong>Email: </strong>
                Sales@phuclong.com.vn // Info@phuclong.com.vn
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className={classes.footerMid}>
            <Typography variant="subtitle1">
              <strong>Đăng ký nhận tin khuyến mãi</strong>
            </Typography>

            <Paper component="form" className={classes.formSearch}>
              <InputBase
                className={classes.input}
                placeholder="Nhập địa chỉ Email"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box py={2} px={2}>
              <Box>
                <Link style={{ color: "#0C713D", fontWeight: "bold" }}>VN</Link>{" "}
                | <Link>EN</Link>
              </Box>
              <Box width={{xs: '60%' , md: '100%'}}>
                <img src={DatThongBao} alt="" style={{ width: "100%" }} />
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <YouTubeIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box className={classes.copyRight}>
        © 2017 Bản quyền Phuc Long Co., Ltd
      </Box>
    </>
  );
}
