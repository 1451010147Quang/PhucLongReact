import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../SCSS/views/home.scss";

import B1 from "../../img/slideshow_1.png";
import B2 from "../../img/slideshow_2.jpg";
import B3 from "../../img/slideshow_3.png";
import B4 from "../../img/slideshow_4.jpg";
import B5 from "../../img/slideshow_5.jpg";
import Bannertrangchu from "../../img/bannertrangchu.jpg";
import Tuyendung1 from "../../img/tuyendung1.jpg";
import CoffeeCopy from "../../img/coffeecopy.png";
import StoreIcon from "@material-ui/icons/Store";

import { Carousel } from "react-bootstrap";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputBase,
  Link,
  makeStyles,
  NativeSelect,
  Typography,
  withStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slideshow: {
    "& .carousel-indicators": {
      bottom: "-10px",
    },
    "& .carousel-indicators li": {
      height: "12px",
      width: "12px",
      borderRadius: "50%",
      border: "1px solid white",
      background: "none",
    },
    "& .carousel-indicators .active": {
      background: "#0C713D",
      borderColor: "transparent",
    },
    "& .carousel-control-next, .carousel-control-prev": {
      width: "8%",
    },
  },
  map: {
    backgroundColor: "#0C713D",
    color: "white",
    /* padding: "70px 0 0 70px", */
  },
  h2text: {
    marginTop: "20px",
    marginBottom: "10px",
    fontSize: "30px",
  },
  FormControl: {
    margin: "30px 5px 30px 0",
    width: "30%",

    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
  mapAddress: {
    maxHeight: "300px",
    overflow: "auto",
    marginTop: "30px",
    marginBottom: "10px",
  },
  mapRow: {
    marginBottom: "14px",
    /* alignItems: "center", */

    "& .MuiGrid-grid-xs-1": {
      flexBasis: "5%",
    },
  },
  btn: {
    textTransform: "none",
    color: "white",
    border: "white 1px solid",
    /* width: "80%", */
    height: "40px",

    "&:hover": {
      border: "red 1px solid",
      transition: "0.5s",
    },
  },
  information: {
    background: `url(${CoffeeCopy}) no-repeat`,
    backgroundPosition: "right bottom",
    /* padding: "100px 0 80px", */
  },
  infoMain: {
    "&:first-child": {
      marginBottom: "130px",
    },
  },
  imgMain1: {
    maxWidth: "100%",
    border: "5px solid #fff",
  },
  h3text: {
    fontSize: "24px",
    color: "#0C713D",
    fontWeight: "normal",
    marginBottom: "50px",
  },
  ptext: {
    margin: "20px 0",
    lineHeight: "1.25",
  },
  atext: {
    textDecoration: "none",
    color: "#0C713D",
    border: "1px solid #0C713D",
    borderRadius: "5px",
    padding: "7px 12px",
    display: "inline-block",

    "&:hover": {
      color: "white",
      backgroundColor: "#0C713D",
      transition: "0.5s",
      textDecoration: "none",
    },
  },
  imgMain2: {
    maxWidth: "100%",
    border: "5px solid white",
  },
}));
const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #ced4da",
    color: "white",
    fontSize: 16,
    padding: "8px 26px 8px 12px",

    "&.MuiNativeSelect-select:not([multiple]) option": {
      color: "black",
    },
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const City = [
  {
    value: "all",
    label: "TỈNH/ THÀNH PHỐ",
  },
  {
    value: "Hồ Chí Minh",
    label: "Hồ Chí Minh",
  },
  {
    value: "Khánh Hòa",
    label: "Khánh Hòa",
  },
  {
    value: "Đồng Nai",
    label: "Đồng Nai",
  },
  {
    value: "Cần Thơ",
    label: "Cần Thơ",
  },
  {
    value: "Bình Dương",
    label: "Bình Dương",
  },
  {
    value: "Đà Nẵng",
    label: "Đà Nẵng",
  },
  {
    value: "Lâm Đồng",
    label: "Lâm Đồng",
  },
  {
    value: "Hà Nội",
    label: "Hà Nội",
  },
];
const District = [
  {
    value: "all",
    label: "QUẬN",
  },
  {
    value: "Quận 1",
    label: "Quận 1",
  },
  {
    value: "Quận 2",
    label: "Quận 2",
  },
  {
    value: "Quận 3",
    label: "Quận 3",
  },
  {
    value: "Quận 4",
    label: "Quận 4",
  },
  {
    value: "Quận 5",
    label: "Quận 5",
  },
  {
    value: "Quận Thủ Đức",
    label: "Quận Thủ Đức",
  },
  {
    value: "Quận Binh Thạnh",
    label: "Quận Binh Thạnh",
  },
  {
    value: "Quận Tân Phú",
    label: "Quận Tân Phú",
  },
  {
    value: "Quận Phú Nhuận",
    label: "Quận Phú Nhuận",
  },
  {
    value: "Quận Tân Bình",
    label: "Quận Tân Bình",
  },
];



export default function Header(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.slideshow}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={B1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={B2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={B3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={B4} alt="Four slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={B5} alt="Five slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <Box
        className={classes.information}
        padding={{ xs: "20px 0 40px", md: "100px 0 80px" }}
      >
        <Container>
          <Grid container alignItems={"center"} className={classes.infoMain}>
            <Grid item xs={12} lg={7} className={classes.infoLeft}>
              <Box width={{ md: "75%" }}>
                <img
                  src={Bannertrangchu}
                  alt="Bannertrangchu"
                  className={classes.imgMain1}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={5} className={classes.infoRight}>
              <Typography
                component="h3"
                variant="h3"
                className={classes.h3text}
              >
                TỪ NHỮNG MẦM TRÀ, CHÚNG TÔI TẠO RA NIỀM ĐAM MÊ
              </Typography>
              <Typography variant="subtitle1" className={classes.ptext}>
                Trải qua hơn 50 năm chắt chiu tinh hoa từ những búp trà xanh và
                hạt cà phê thượng hạng cùng mong muốn mang lại cho khách hàng
                những trải nghiệm giá trị nhất khi thưởng thức, Phúc Long liên
                tục là thương hiệu tiên phong với nhiều ý tưởng sáng tạo đi đầu
                trong ngành trà và cà phê.
              </Typography>
              <Typography variant="subtitle1" className={classes.ptext}>
                Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo
                hạng khi được tạo ra từ sự phấn đấu không ngừng cùng niềm đam
                mê. Và chính kết nối dựa trên niềm tin, sự trung thực và tin yêu
                sẽ góp phần mang đến những nét đẹp trong văn hóa thưởng trà và
                cà phê ngày càng bay cao, vươn xa.
              </Typography>
              <Link href="#" className={classes.atext}>
                XEM THÊM
              </Link>
            </Grid>
          </Grid>
          <Grid container alignItems={"center"} className={classes.infoMain}>
            <Grid item xs={12} lg={6}>
              <Box paddingRight={{ xs: "0", md: "100px" }}>
                <Typography
                  component="h3"
                  variant="h3"
                  className={classes.h3text}
                >
                  ĐỘI NGŨ NHÂN VIÊN TRÀN ĐẦY NHIỆT HUYẾT
                </Typography>
                <Typography variant="subtitle1" className={classes.ptext}>
                  Trong suốt quá trình hoạt động và phát triển, đội ngũ quản lý
                  và nhân viên của Phúc Long Coffee & Tea, qua bao thế hệ, đã
                  cùng nhau xây dựng, nuôi dưỡng niềm đam mê dành cho trà và cà
                  phê với mong muốn được thử thách bản thân trong ngành dịch vụ
                  năng động và sáng tạo.
                </Typography>
                <Link href="#" className={classes.atext}>
                  GIA NHẬP ĐỘI NGŨ PHÚC LONG
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box width={{ xs: "100%", md: "52%" }}>
                <img
                  src={Tuyendung1}
                  alt="Bannertrangchu"
                  className={classes.imgMain2}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        className={classes.map}
        padding={{ xs: "0 15px", md: "70px 0 0 70px" }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography component="h2" variant="h2" className={classes.h2text}>
              HỆ THỐNG CỬA HÀNG
            </Typography>
            <FormControl className={classes.FormControl}>
              <NativeSelect
                id="demo-customized-select-native"
                // value={age}
                input={<BootstrapInput />}
                onChange={props.changeCityHome}
              >
                {City.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
            <FormControl className={classes.FormControl}>
              <NativeSelect
                id="demo-customized-select-native"
                // value={age}
                input={<BootstrapInput />}
                onChange={props.changeDistrictHome}
              >
                {District.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
            <Typography component="h2" variant="h6" className={classes.h5text}>
              Địa chỉ cửa hàng
            </Typography>

            <Box className={classes.mapAddress}>
              {props.filterSearch1.map((value, index) => (
                <>
                  <Grid container key={index} className={classes.mapRow}>
                    <Grid item xs={1}>
                      <StoreIcon />
                    </Grid>
                    <Grid item xs={11} sm={8}>
                      <Typography>{value.address}</Typography>
                      <Typography>Điện thoại: {value.phone}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Button variant="outlined" className={classes.btn}>
                        Chỉ đường
                      </Button>
                    </Grid>
                  </Grid>
                </>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
