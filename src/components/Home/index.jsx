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
    label: "T???NH/ TH??NH PH???",
  },
  {
    value: "H??? Ch?? Minh",
    label: "H??? Ch?? Minh",
  },
  {
    value: "Kh??nh H??a",
    label: "Kh??nh H??a",
  },
  {
    value: "?????ng Nai",
    label: "?????ng Nai",
  },
  {
    value: "C???n Th??",
    label: "C???n Th??",
  },
  {
    value: "B??nh D????ng",
    label: "B??nh D????ng",
  },
  {
    value: "???? N???ng",
    label: "???? N???ng",
  },
  {
    value: "L??m ?????ng",
    label: "L??m ?????ng",
  },
  {
    value: "H?? N???i",
    label: "H?? N???i",
  },
];
const District = [
  {
    value: "all",
    label: "QU???N",
  },
  {
    value: "Qu???n 1",
    label: "Qu???n 1",
  },
  {
    value: "Qu???n 2",
    label: "Qu???n 2",
  },
  {
    value: "Qu???n 3",
    label: "Qu???n 3",
  },
  {
    value: "Qu???n 4",
    label: "Qu???n 4",
  },
  {
    value: "Qu???n 5",
    label: "Qu???n 5",
  },
  {
    value: "Qu???n Th??? ?????c",
    label: "Qu???n Th??? ?????c",
  },
  {
    value: "Qu???n Binh Th???nh",
    label: "Qu???n Binh Th???nh",
  },
  {
    value: "Qu???n T??n Ph??",
    label: "Qu???n T??n Ph??",
  },
  {
    value: "Qu???n Ph?? Nhu???n",
    label: "Qu???n Ph?? Nhu???n",
  },
  {
    value: "Qu???n T??n B??nh",
    label: "Qu???n T??n B??nh",
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
                T??? NH???NG M???M TR??, CH??NG T??I TA??O RA NI???M ??AM M??
              </Typography>
              <Typography variant="subtitle1" className={classes.ptext}>
                Tra??i qua h??n 50 na??m ch????t chiu tinh hoa t???? nh????ng b??p tr?? xanh v??
                ha??t c?? ph?? thu??????ng ha??ng c??ng mong mu????n mang la??i cho kh??ch h??ng
                nh????ng tra??i nghi?????m gi?? tri?? nh????t khi thu??????ng th????c, Ph??c Long li??n
                tu??c l?? thu??o??ng hi?????u ti??n phong v????i nhi????u ?? tu??????ng s??ng ta??o ??i ??????u
                trong ng??nh tr?? v?? c?? ph??.
              </Typography>
              <Typography variant="subtitle1" className={classes.ptext}>
                Ch??ng t??i tin r????ng t????ng sa??n ph????m tr?? v?? c?? ph?? se?? c??ng th??m ha??o
                ha??ng khi ??u??????c ta??o ra t???? s???? ph????n ??????u kh??ng ng????ng c??ng ni????m ??am
                m??. V?? ch??nh k???t n???i d???a tr??n ni???m tin, s??? trung th???c v?? tin y??u
                s??? g??p ph???n mang ?????n nh???ng n??t ?????p trong v??n h??a th?????ng tr?? v??
                c?? ph?? ng??y c??ng bay cao, v????n xa.
              </Typography>
              <Link href="#" className={classes.atext}>
                XEM TH??M
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
                  ?????I NG?? NH??N VI??N TR??N ?????Y NHI???T HUY???T
                </Typography>
                <Typography variant="subtitle1" className={classes.ptext}>
                  Trong su????t qu?? tr??nh hoa??t ???????ng v?? ph??t tri????n, ???????i ngu?? qua??n l??
                  v?? nh??n vi??n cu??a Ph??c Long Coffee & Tea, qua bao th???? h?????, ????
                  c??ng nhau x??y d????ng, nu??i du??????ng ni????m ??am m?? d??nh cho tr?? v?? c??
                  ph?? v????i mong mu????n ??u??????c th???? th??ch ba??n th??n trong ng??nh di??ch vu??
                  na??ng ???????ng v?? s??ng ta??o.
                </Typography>
                <Link href="#" className={classes.atext}>
                  GIA NH???P ?????I NG?? PH??C LONG
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
              H??? TH???NG C???A H??NG
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
              ?????a ch??? c???a h??ng
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
                      <Typography>??i???n tho???i: {value.phone}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Button variant="outlined" className={classes.btn}>
                        Ch??? ???????ng
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
