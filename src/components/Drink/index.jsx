import {
  Badge,
  Box,
  Breadcrumbs,
  Button,
  Container,
  FormControl,
  Grid,
  InputBase,
  makeStyles,
  NativeSelect,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import Banner from "../../img/banner-thuc-uong.jpg";
import IconTealeave from "../../img/icon_tealeaves.png";
import ImgLeft from "../../img/icon_hotproduct.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
  },
  breadcumbs: {
    padding: "8px 15px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
  },
  breadcumbsA: {
    color: "inherit",
    "&:hover": {
      color: "red",
      textDecoration: "none",
      transition: "0.5s",
    },
  },
  breadcumbsB: {
    color: "#777",
    "&:hover": {
      color: "red",
      textDecoration: "none",
      transition: "0.5s",
    },
  },
  h1text: {
    fontFamily: "Lora",
    color: "#0C713D",
    fontSize: "36px",
  },
  iconTealeave: {
    margin: "0 auto 40px",
  },
  menu: {
    margin: "30px 0",
  },
  menuItem: {
    color: "#797979",
    fontSize: "22px",
    lineHeight: "40px",
    borderTop: "1px solid transparent",
    borderBottom: "1px solid transparent",
    textAlign: "center",
    padding: "10px 25px",
    margin: " 0 5px",
    display: "inline-block",

    "&:first-child": {
      color: "#0C713D",
      borderColor: "#0C713D",
    },
    "&:hover": {
      color: "#0C713D",
      borderColor: "#0C713D",
      transition: "0.5s",
      textDecoration: "none",
    },
  },
  toolbarItem: {
    padding: "16px",
    border: "1px solid #DCDCDC",
  },

  sortBy: {
    margin: "auto",
    /* display: "flex", */
    height: "fit-content",
    "& p": {
      margin: "auto 20px auto 0",
      height: "fit-content",
      fontWeight: "700",
    },
  },
  FormControl: {
    width: "55%",
  },
  formSearch: {
    margin: 0,
    padding: 0,
    border: "1px solid #ced4da",
    boxShadow: "none",
    display: "flex",
    justifyContent: "space-between",
    "::placeholder": {
      color: "black",
    },
    "& .MuiInputBase-root": {
      width: "90%",
      "& .MuiInputBase-input": {
        paddingLeft: "10px",
      },
    },
  },
  iconButton: {
    padding: "5px",
    borderLeft: "1px solid #ced4da",
    borderRadius: 0,
  },
  category: {
    paddingTop: "40px",
    background: `url(${"https://phuclong.com.vn/images/background/bg_tealeaf.svg"}),url(${"https://phuclong.com.vn/images/background/bg_team.svg"})`,
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundPosition: "left top, center bottom",
    backgroundSize: "20% auto, 75% auto",
  },

  productItem: {
    position: "relative",
    marginBottom: "45px",
    textAlign: "center",
    transition: "margin 0.3s",
    borderRadius: "5px",
    padding: "30px 15px",
    minHeight: "380px",
    maxHeight: "380px",

    "&:hover": {
      boxShadow: "0 1px 8px 0 rgb(107 107 107 / 27%)",
    },
  },
  badge: {
    color: "#fff",
    fontWeight: "900",
    borderRadius: "2px",
    padding: "5px 8px",
    fontSize: "10px",
    backgroundColor: "#0C713D",
    position: "absolute",
    right: "40px",
    top: "20px",
  },
  img: {
    width: "180px",
    marginBottom: "15px",
  },
  name: {
    fontSize: "16px",
    fontFamily: "Muli, sans-serif",
    fontWeight: "bold",
    lineHeight: "28px",
    color: "#010101",
    marginBottom: "10px",
  },
  desc: {
    marginBottom: "10px",
  },
  price: {
    fontWeight: "900",
    color: "#0C713D",
    fontSize: "18px",
    fontFamily: "Tahoma",
    marginBottom: "10px",
  },
  btn: {
    color: "#0C713D",
    border: "1px solid #0C713D",
    borderRadius: "5px",
    padding: "5px 20px",
    display: "inline-block",
    backgroundColor: "white",

    "&:hover": {
      backgroundColor: "#0C713D",
      color: "white",
      transition: "0.5s",
    },
  },
  productFirst: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "start",
    padding: "40px 0 40px 40px",
    position: "relative",
    background: `url(${ImgLeft})`,

    "&:hover": {
      boxShadow: "0 1px 8px 0 rgb(107 107 107 / 27%)",
    },
  },
  nameLeft: {
    color: "#0C713D",
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  descLeft: {
    fontSize: "16px",
    lineHeight: "26px",
    marginBottom: "15px",
  },
  priceLeft: {
    fontWeight: "900",
    color: "#0C713D",
    fontSize: "18px",
    fontFamily: "Tahoma",
    marginBottom: "20px",
  },
  imgLeft: {
    width: "90%",
  },
  headBottom: {
    position: "fixed",
    bottom: 0,
    zIndex: "100",
    backgroundColor: "#0C713D",
    padding: "10px 15px 5px",
    alignItems: "center",
  },
  CartBottom: {
    color: "white",
  },
  shoppingCartBottom: {
    color: "white",
  },
  bagdeBottom: {
    "& .MuiBadge-colorSecondary": {
      backgroundColor: "white",
      color: "#0C713D",
    },
  },
  typoBottom: {
    color: "white",
    marginLeft: "20px",
  },
}));

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "8px 26px 8px 12px",
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const SortOption1 = [
  {
    value: "all",
    label: "Chọn nhóm",
  },
  {
    value: "Cà phê",
    label: "Classical coffee",
  },
  {
    value: "Trà sữa",
    label: "Vietnam traditional choice",
  },
  {
    value: "Đá xay",
    label: "Cool blended beverage",
  },
  {
    value: "Trà",
    label: "Special tea",
  },
];

const SortOption2 = [
  {
    value: "all",
    label: "Không lựa chọn",
  },
  {
    value: "asc",
    label: "Từ thấp đến cao",
  },
  {
    value: "desc",
    label: "Từ cao đến thấp",
  },
];

export default function Header(props) {
  const { product, clickProduct } = props;
  const classes = useStyles();
  const getTotalCartItem = () => {
    let total = 0;
    props.noteList.forEach((value) => {
      total += value.quantity;
    });
    return total;
  };
  return (
    <>
      <div>
        <img src={Banner} alt="banner-thuc-uong" style={{ width: "100%" }} />
      </div>

      <Container>
        <div className={classes.heading}>
          <Breadcrumbs className={classes.breadcumbs} aria-label="breadcrumb">
            <Link
              to="/"
              className={classes.breadcumbsA}

              /*  onClick={handleClick} */
            >
              Trang chủ
            </Link>
            <Link
              className={classes.breadcumbsB}
              href="#"
              /* onClick={handleClick} */
              aria-current="page"
            >
              Thức uống
            </Link>
          </Breadcrumbs>
          <Typography
            variant="h1"
            component="h2"
            className={classes.h1text}
            gutterBottom
          >
            THỨC UỐNG
          </Typography>
          <Box maxWidth={{ sm: "300px" }} className={classes.iconTealeave}>
            <img src={IconTealeave} alt="" style={{ width: "100%" }} />
          </Box>
          <Typography className={classes.menu}>
            <Link href="#" className={classes.menuItem}>
              THỨC UỐNG
            </Link>
            <Link href="#" className={classes.menuItem}>
              DINNING OFFERS
            </Link>
            <Link href="#" className={classes.menuItem}>
              BAKERY
            </Link>
          </Typography>
        </div>

        <div className={classes.toolbar}>
          <Grid container>
            <Grid item xs={12} sm={4} className={classes.toolbarItem}>
              <Box
                display={{ xs: "inline", md: "flex" }}
                className={classes.sortBy}
              >
                <Typography variant="body1" component="p">
                  Nhóm sản phẩm
                </Typography>
                <FormControl className={classes.FormControl}>
                  <NativeSelect
                    id="demo-customized-select-native"
                    // value={age}
                    input={<BootstrapInput />}
                    onChange={props.changeProduct}
                  >
                    {SortOption1.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.toolbarItem}>
              <Box
                display={{ xs: "inline", md: "flex" }}
                className={classes.sortBy}
              >
                <Typography variant="body1" component="p">
                  Theo giá
                </Typography>
                <FormControl className={classes.FormControl}>
                  <NativeSelect
                    id="demo-customized-select-native"
                    // value={age}
                    input={<BootstrapInput />}
                    onChange={props.onSorting}
                  >
                    {SortOption2.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.toolbarItem}>
              <Box
                display={{ xs: "inline", md: "flex" }}
                className={classes.sortBy}
              >
                <Typography variant="body1" component="p">
                  Tìm kiếm
                </Typography>
                <Paper component="form" className={classes.formSearch}>
                  <InputBase
                    className={classes.input}
                    placeholder="Tên sản phẩm"
                    inputProps={{ "aria-label": "search google maps" }}
                    onChange={props.onSearch}
                  />
                  {/* <IconButton
                    type="submit"
                    className={classes.iconButton}
                    aria-label="search"
                    href='#'
                  >
                    <SearchIcon />
                  </IconButton> */}
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Box className={classes.category}>
        <Container>
          <Grid container>
            {/* <Grid item xs={12} sm={6} className={classes.productFirst}>
              <Typography variant="h6" className={classes.badge}>
                Món mới
              </Typography>
              <Grid item xs={12} sm={5}>
                <Typography className={classes.nameLeft}>
                  Trà Sữa Sen Vàng
                </Typography>
                <Typography className={classes.descLeft}>
                  Creamy Lotus Tea Latte
                </Typography>
                <Typography className={classes.priceLeft}>65.000 đ</Typography>
                <Button className={classes.btn}>ĐẶT HÀNG</Button>
              </Grid>
              <Grid item xs={12} sm={7}>
                <img src={TraSuaSen} alt="" className={classes.imgLeft} />
              </Grid>
            </Grid> */}
            {product.map((value, index) => (
              <>
                <Grid item xs={6} sm={3} className={classes.productItem} key={index}>
                  <Typography variant="h6" className={classes.badge}>
                    {value.badge}
                  </Typography>
                  <img src={value.imgUrl} alt="" className={classes.img} />
                  <Typography variant="h6" className={classes.name}>
                    {value.name}
                  </Typography>
                  <Typography variant="subtitle2" className={classes.desc}>
                    {value.desc}
                  </Typography>
                  <Typography variant="h5" className={classes.price}>
                    {value.price} đ
                  </Typography>
                  <Button
                    onClick={() => clickProduct(value.id)}
                    variant="outlined"
                    className={classes.btn}
                  >
                    {props.isToggle ? "CANCEL" : `${value.btn}`}
                  </Button>
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box display={{ xs: "block", md: "none" }}>
        <Grid container className={classes.headBottom}>
          <Grid item xs={9}>
            <Box>
              <Button component={Link} to="/thanh-toan">
                <Badge
                  color="secondary"
                  badgeContent={getTotalCartItem()}
                  showZero
                  className={classes.bagdeBottom}
                >
                  <ShoppingCartOutlinedIcon
                    className={classes.shoppingCartBottom}
                  />
                </Badge>
                <Typography className={classes.typoBottom}>
                  THANH TOÁN
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.CartBottom}>
              {props.getTotalPrice()} đ
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
