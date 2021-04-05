import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../SCSS/views/home.scss";
import { Link } from "react-router-dom";
import Delivery from "../../img/delivery.png";
import Logo from "../../img/logo_1.png";

import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
  Button,
  Badge,
  Popover,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    zIndex: "100",
    backgroundColor: "white",
  },
  headTop: {
    padding: "10px 0 5px",
    alignItems: "center",
  },
  logo: {
    maxWidth: "70px",
  },
  headMid: {
    textAlign: "center",
  },
  headRight: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headLink: {
    color: "black",
    fontWeight: "bold",
    fontSize: "16px",

    "&:hover": {
      color: "black",
      textDecoration: "none",
    },
  },
  VN: {
    fontWeight: "bold",
    color: "#0C713D",
  },
  EN: {
    color: "black",
  },
  btn: {
    textTransform: "none",
    border: "1px solid #0C713D",
    color: "#0C713D",
    position: "relative",
  },
  headCartForm: {
    position: "absolute",
    marginTop: "7px",
    right: "13.5%",
    padding: "20px 30px",
    backgroundColor: "white",
    boxShadow: "1px 5px 8px #ccc",
    textAlign: "center",
    display: "none",
    zIndex: 10,
  },
  bagde: {
    "& .MuiBadge-badge": {
      fontSize: "0.5rem",
      height: "15px",
      minWidth: "15px",
      backgroundColor: "#0C713D",
    },
    "& .MuiBadge-anchorOriginTopRightRectangle": {
      top: "2px",
    },
  },
  shoppingCart: {
    fontSize: "1.2rem",
  },

  btnCart: {
    marginLeft: "50px",
    color: "#0C713D",
    border: "1px solid #0C713D",
    padding: "7px 12px",
    textTransform: "none",

    "&:hover": {
      color: "white",
      backgroundColor: "#0C713D",
      transition: "0.5s",
    },
  },
  headCartMiddle: {
    display: "flex",
    padding: "20px 0",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: "bold",
  },
  CartPrice: {
    fontSize: "24px",
    color: "red",
    fontWeight: "normal",
    marginLeft: "5px",
  },
  headCartBtn: {
    color: "#0C713D",
    border: "1px solid #0C713D",
    padding: "15px 80px",
    textTransform: "none",

    "&:hover": {
      color: "white",
      backgroundColor: "#0C713D",
      transition: "0.5s",
    },
  },
  headMenu: {
    borderTop: "3px solid rgb(243, 243, 243)",
    boxShadow: "1px 2px 3px #ccc",

    "& .navbar-light .navbar-nav .nav-link": {
      color: "#666666",
      fontSize: "16px",
      fontWeight: "bold",
      marginRight: "40px",
    },
  },
  drop: {
    "& .dropdown-item": {
      padding: "10px 50px",
      color: "black",
      backgroundColor: "white",

      "&:hover": {
        backgroundColor: "#0C713D",
        color: "white",
        transition: "0.5s",
      },
    },
  },
  menu: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  typography: {
    padding: "24px",
  },
  CartHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
    paddingBottom: "16px",
    justifyContent: "space-between",
    borderBottom: "1px solid #F5F5F5",
  },
  img: {
    width: "100px",
    border: "1px solid #B3B3B3",
    borderRadius: "5px",
    padding: "5px",
  },
  tableRow: {
    "& .MuiTableCell-root": {
      padding: "10px 5px",
    },
    "& .MuiButton-root:hover": {
      backgroundColor: "white",
      border: "1px solid #B3B3B3",
      transition: "0.5s",
    },

    "& .MuiButton-root": {
      padding: "0px",
      minWidth: "25px",
      borderRadius: "50%",
    },
  },
  btnX: {
    "& .MuiButton-label": {
      color: "#B3B3B3",
      fontWeight: "bold",
      fontSize: "12px",
    },
  },
  
}));

export default function Header(props) {
  const { noteList } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onRemove = (note) => {
    props.handleRemove(note);
  };

  const getTotalCartItem = () => {
    let total = 0;
    noteList.forEach((value) => {
      total += value.quantity;
    });
    return total;
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <div className={classes.header}>
        <Container>
          <Box display={{ xs: "none", md: "block" }}>
            <Grid container className={classes.headTop}>
              <Grid item xs={2}>
                <Link>
                  <img src={Delivery} alt="" />
                </Link>
              </Grid>
              <Grid item xs={7} className={classes.headMid}>
                <Link to="/">
                  <img src={Logo} alt="" className={classes.logo} />
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.headRight}>
                  <Link to="/login" className={classes.headLink}>
                    Đăng nhập
                  </Link>
                  <Box mx={1}>
                    <Link className={classes.VN}>VN</Link> |{" "}
                    <Link className={classes.EN}>EN</Link>
                  </Box>
                  <Box>
                    <Button
                      aria-describedby={id}
                      onClick={handleClick}
                      variant="outlined"
                      className={classes.btn}
                    >
                      Giỏ hàng
                      <Badge
                        color="secondary"
                        badgeContent={getTotalCartItem()}
                        showZero
                        className={classes.bagde}
                      >
                        <ShoppingCartOutlinedIcon
                          className={classes.shoppingCart}
                        />
                      </Badge>
                    </Button>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      className={classes.popover}
                    >
                      <Typography className={classes.typography}>
                        <Box>
                          <Box className={classes.CartHeader}>
                            <Typography>Giỏ hàng của bạn</Typography>
                            <Button
                              variant="outlined"
                              className={classes.btnCart}
                              href="/thanh-toan"
                            >
                              Xem chi tiết
                            </Button>
                          </Box>
                          <Box>
                            <TableContainer>
                              <Table
                                className={classes.table}
                                aria-label="caption table"
                              >
                                <TableBody>
                                  {noteList.map((note, index) => (
                                    <TableRow className={classes.tableRow} key={index}>
                                      <TableCell component="th" scope="row">
                                        <img
                                          src={note.imgUrl}
                                          alt=""
                                          className={classes.img}
                                        />
                                      </TableCell>
                                      <TableCell align="">
                                        <Box>
                                          <strong>{note.name}</strong>
                                        </Box>
                                        <Box>
                                          {note.quantity}x {note.price} đ
                                        </Box>
                                      </TableCell>
                                      <TableCell align="right">
                                        <Button
                                          className={classes.btnX}
                                          onClick={() => onRemove(note)}
                                        >
                                          x
                                        </Button>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Box>
                          <Box className={classes.headCartMiddle}>
                            <Typography>Tổng tiền</Typography>
                            <Typography className={classes.CartPrice}>
                              {props.getTotalPrice()} đ
                            </Typography>
                          </Box>
                          <Box mb={2} textAlign="center">
                            <Button
                              variant="outlined"
                              className={classes.headCartBtn}
                              href="/thanh-toan"
                            >
                              THANH TOÁN
                            </Button>
                          </Box>
                        </Box>
                      </Typography>
                    </Popover>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <div className={classes.headMenu}>
          <Navbar collapseOnSelect expand="lg" style={{ padding: 0 }}>
            <Box
              display={{ xs: "flex", md: "none" }}
              padding="16px"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Box>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              </Box>
              <Box
                display={{ xs: "block", md: "none" }}
                marginLeft={{ xs: "50px", sm: "150px" }}
              >
                <Link to="/">
                  <img src={Logo} alt="" className={classes.logo} />
                </Link>
              </Box>
              <Box
                display={{ xs: "block", md: "none" }}
                style={{ width: "30%" }}
              >
                <Link>
                  <img src={Delivery} alt="" style={{ width: "100%" }} />
                </Link>
              </Box>
            </Box>
            <Container>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <Link to="/" className={classes.menu}>
                    <Nav.Link href="/" style={{ color: "#0C713D" }}>
                      TRANG CHỦ
                    </Nav.Link>
                  </Link>
                  <Link to="" className={classes.menu}>
                    <NavDropdown
                      title="CÀ PHÊ"
                      id="collasible-nav-dropdown"
                      className={classes.drop}
                    >
                      <NavDropdown.Item href="#">
                        Hành trình tách cà phê đậm vị
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Hạt cà phê Phúc Long
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Nghệ thuật pha chế
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Link>
                  <Link to="" className={classes.menu}>
                    <NavDropdown
                      title="TRÀ"
                      id="collasible-nav-dropdown"
                      className={classes.drop}
                    >
                      <NavDropdown.Item href="#">
                        Hành trình tách trà đậm vị
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Lá trà Phúc Long
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        ColdBrew Tea- Lá trà Ủ lạnh
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Nghệ thuật pha chế
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Link>
                  <Link to="/thuc-uong" className={classes.menu}>
                    <NavDropdown
                      title="THỨC UỐNG"
                      id="collasible-nav-dropdown"
                      className={classes.drop}
                    >
                      <NavDropdown.Item href="/thuc-uong">
                        Thức uống
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/thuc-uong">
                        Bánh tráng miệng
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/thuc-uong">
                        Đồ ăn mặn
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Link>
                  <Link to="" className={classes.menu}>
                    <Nav.Link href="#">SẢN PHẨM</Nav.Link>
                  </Link>
                  <Link to="" className={classes.menu}>
                    <Nav.Link href="#">KHUYẾN MÃI</Nav.Link>
                  </Link>
                  <Link to="" className={classes.menu}>
                    <Nav.Link href="#">VỀ CHÚNG TÔI</Nav.Link>
                  </Link>
                  <Link to="" className={classes.menu}>
                    <Nav.Link href="#">THẺ</Nav.Link>
                  </Link>
                  <Box display={{ xs: "none", md: "block" }}>
                    <Link to="" className={classes.menu}>
                      <Nav.Link href="#">
                        <SearchIcon />
                      </Nav.Link>
                    </Link>
                  </Box>
                  <Box display={{ xs: "block", md: "none" }}>
                    <Link to="/login" className={classes.menu}>
                      <Nav.Link href="/">ĐĂNG NHẬP</Nav.Link>
                    </Link>
                  </Box>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>

      
    </>
  );
}
