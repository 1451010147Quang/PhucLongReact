import {
  AppBar,
  Box,
  Container,
  Grid,
  makeStyles,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Typography,
  Button,
  TextField,
  TextareaAutosize,
  FormControl,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CheckIcon from "@material-ui/icons/Check";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",

    "& .MuiAppBar-colorPrimary": {
      margin: "30px 0",
    },
  },
  tabTop: {
    backgroundColor: "white",
    color: "#999",
    textAlign: "center",
    padding: "45px 0",

    "& .MuiTabs-flexContainer": {
      
      /* padding: "0 100px", */

      [theme.breakpoints.up('xs')]: {
        marginLeft: '40px',
        flexDirection: 'column'
      },
      [theme.breakpoints.up('sm')]: {
        justifyContent: "space-around",
        flexDirection: 'row'
      },
    },

    "& .MuiTab-textColorInherit.Mui-selected": {
      color: "#0C713D",
      fontWeight: "bold",
    },

    "& .PrivateTabIndicator-colorSecondary-74": {
      backgroundColor: "white",
    },
    "& .MuiTab-wrapper": {
      flexDirection: "inherit",
      textTransform: "lowercase",
      fontSize: "16px",

      "& > *:first-child": {
        marginRight: "9px",
        border: "2px solid",
        height: "60px",
        padding: "15px",
        borderRadius: "50%",
        width: "60px",
      },
    },
    
  },
  tabContent: {
    boxShadow: "0 0 10px rgb(0 0 0 / 35%)",
    marginBottom: "50px",
    overflowX: 'auto',
  },
  tabContent1: {
    boxShadow: "0 0 10px rgb(0 0 0 / 35%)",
    marginBottom: "50px",
  },
  btn: {
    color: "#0C713D",
    border: "1px solid #0C713D",

    "&:hover": {
      color: "#0C713D",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,

    "& .MuiSelect-outlined.MuiSelect-outlined": {
      border: "1px solid",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  tab: {
   

    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '30%',
    },
  },
  tableRow: {
    "& .MuiTableCell-head": {
      fontWeight: "bold",
      fontSize: "16px",
      color: "#6C6C6C",
    },
  },
  tableBody: {
    "& .MuiButton-root": {
      minWidth: "45px",
    },
  },
  tableBodybtn1: {
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
  },
  tableBodybtn2: {
    borderRadius: "0",
  },
  tableBodybtn3: {
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
  },
  img: {
    width: "100px",
  },
  btnX: {
    fontWeight: "900",
  },
  infoTable: {
    color: "red",
    fontWeight: "bold",
  },
  getTotal: {
    fontWeight: "bold",
    color: "#0C713D",
  },
  select: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid black",
    fontSize: 16,
    padding: "18px",
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
  titleInfo: {
    fontSize: "16px",
    color: "#666666",
    fontWeight: "bold",
  },
  tabContentOders: {
    padding: "50px 20px 20px",
    borderBottom: "2px solid  #E2E2E2",
  },
  tabContentOders3: {
    color: "#0C713D",
    textAlign: "right",
  },
  tabOrderInfo: {
    borderBottom: "2px solid #eee",
  },
  OrdersInfo: {
    fontWeight: "bold",
    marginBottom: "20px",
  },
  Ordertotal: {
    padding: "20px 20px 40px 0",
    borderBottom: "2px solid #eee",
    textAlign: "right",
  },
  OrdertotalItem: {
    color: "#0C713D",
    fontWeight: "bold",
  },
  TabPanel1: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "16px",
    padding: "20px 0",
    borderBottom: "2px solid #eee",
  },
  tabBtn: {
    "& .PrivateTabIndicator-colorPrimary-73": {
      backgroundColor: "white",
    },

    "& .MuiTab-textColorPrimary.Mui-selected,.MuiTab-textColorPrimary": {
      color: "#0C713D",

      "&:hover": {
        textDecoration: "none",
      },
    },
    "& .MuiTab-wrapper": {
      flexDirection: "inherit",
      border: "1px solid",
      borderRadius: "5px",
      padding: "5px 10px",

      "&:hover": {
        backgroundColor: "#0C713D",
        color: "white",
        transition: "0.5s",
      },
    },
    "& .MuiTabs-flexContainer": {
      
      /* padding: "0 100px", */

      [theme.breakpoints.up('xs')]: {
        flexDirection: 'column'
      },
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row'
      },
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { nameList } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onRemove = (note) => {
    props.handleRemove(note);
  };

  const City = [
    {
      value: "",
      label: "Chọn TP",
    },
    {
      value: "Hồ Chí Minh",
      label: "Hồ Chí Minh",
    },
    {
      value: "Hà Nội",
      label: "Hà Nội",
    },
    {
      value: "Khánh Hòa",
      label: "Khánh Hòa",
    },
  ];
  const District = [
    {
      value: "all",
      label: "Chọn Quận",
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
  ];
  return (
    <>
      <Container className={classes.root}>
        <AppBar position="static">
          <Tabs
            className={classes.tabTop}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="off"
            aria-label="scrollable prevent tabs example"
          >
            <Tab
              icon={<ShoppingCartIcon />}
              label="Chi tiết đơn hàng"
              aria-label="phone"
              {...a11yProps(0)}
              className={classes.tab}
            />
            <Tab
              icon={<LocalShippingIcon />}
              label="Địa chỉ giao hàng"
              aria-label="favorite"
              {...a11yProps(1)}
              className={classes.tab}
            />
            <Tab
              icon={<CheckIcon />}
              label="Xác nhận và đặt hàng"
              aria-label="person"
              {...a11yProps(2)}
              className={classes.tab}
            />
          </Tabs>
        </AppBar>

        <TabPanel className={classes.tabContent} value={value} index={0}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.tableRow}>
                <TableCell width="10%">Sản phẩm</TableCell>
                <TableCell align="left" width="25%"></TableCell>
                <TableCell align="center" width="20%">
                  Giá
                </TableCell>
                <TableCell align="center" width="25%">
                  Số lượng
                </TableCell>
                <TableCell align="center" width="15%">
                  Tổng tiền
                </TableCell>
                <TableCell align="" width="5%"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.noteList.map((row) => (
                <TableRow className={classes.tableBody} key={row.name}>
                  <TableCell component="th" scope="row" width="10%">
                    <img src={row.imgUrl} alt="" className={classes.img} />
                  </TableCell>
                  <TableCell align="left" width="25%">
                    {row.name}
                    <Box>
                      <strong>
                        <i>{row.price} đ</i>
                      </strong>
                    </Box>
                  </TableCell>
                  <TableCell align="center" width="20%">
                    <strong>{row.price} đ</strong>
                  </TableCell>
                  <TableCell align="center" width="25%">
                    <Button
                      variant="outlined"
                      className={classes.tableBodybtn1}
                      onClick={() => props.decrementItem(row.id)}
                    >
                      -
                    </Button>
                    <Button
                      variant="outlined"
                      className={classes.tableBodybtn2}
                    >
                      {row.quantity}
                    </Button>
                    <Button
                      variant="outlined"
                      className={classes.tableBodybtn3}
                      onClick={() => props.incrementItem(row.id)}
                    >
                      +
                    </Button>
                  </TableCell>
                  <TableCell align="center" width="15%">
                    {row.price * row.quantity} đ
                  </TableCell>
                  <TableCell align="right" width="5%">
                    <Button
                      className={classes.btnX}
                      onClick={() => onRemove(row)}
                    >
                      x
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box className={classes.TabPanel1} flexDirection={{xs: 'column' , md: 'row'}}>
            <Box width={{xs: '100%' , sm: '75%'}}>
              <Typography className={classes.infoTable}>
                Phúc Long nhận giao hàng trong bán kính 3km tính từ cửa hàng gần
                nhất. Quý khách vui lòng tham khảo danh sách cửa hàng ở cuối
                trang chủ.
              </Typography>
            </Box>
            <Box>
              <Typography>
                Tổng tiền:{" "}
                <span className={classes.getTotal}>
                  {props.getTotalPrice()} đ
                </span>
              </Typography>
            </Box>
          </Box>

          <Box
            className={classes.tabBtn}
            display="flex"
            justifyContent="center"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
            >
              <Tab
                label="Quay lại"
                icon={<ArrowBackIcon />}
                {...a11yProps(0)}
                component={Link}
                to="/thuc-uong"
              />
              <Tab
                label="Bước tiếp theo"
                icon={<ArrowForwardIcon />}
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
        </TabPanel>
        <TabPanel className={classes.tabContent1} value={value} index={1}>
          <strong>Thông tin của bạn</strong>

          <Box mt={1}>
            <Typography className={classes.titleInfo}>Tên của bạn:</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={props.changeName}
            />
          </Box>
          <Box display={{ xs: "inline-block", sm: "flex" }}>
            <Box mt={1} mr={4}>
              <Typography className={classes.titleInfo}>
                Số điện thoại:
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="number"
                onChange={props.changePhone}
              />
            </Box>
            <Box mt={1}>
              <Typography className={classes.titleInfo}>Email:</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={props.changeEmail}
              />
            </Box>
          </Box>
          <Box mt={1}>
            <Typography className={classes.titleInfo}>
              Địa chỉ giao hàng:
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={props.changeAddress}
            />
          </Box>
          <Box
            mt={1}
            display={{ xs: "inline", sm: "flex" }}
            alignItems="center"
          >
            <Box mr={4}>
              <Typography className={classes.titleInfo}>
                Tỉnh/thành phố:
              </Typography>
              <FormControl variant="outlined" className={classes.formControl}>
                <select className={classes.select} onChange={props.changeCity}>
                  {City.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </FormControl>
            </Box>
            <Box mr={4}>
              <Typography className={classes.titleInfo}>
                Quận/ huyện:
              </Typography>
              <FormControl variant="outlined" className={classes.formControl}>
                <select
                  className={classes.select}
                  onChange={props.changeDistrict}
                >
                  {District.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </FormControl>
            </Box>
            <Box>
              <Typography className={classes.titleInfo}>Phường:</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={props.changeWard}
              />
            </Box>
          </Box>
          <Box mt={1}>
            <Typography className={classes.titleInfo}>Ghi chú:</Typography>
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={2}
              placeholder=""
              onChange={props.changeNote}
            />
          </Box>

          <Box
            mt={2}
            display="flex"
            justifyContent="center"
            className={classes.tabBtn}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
            >
              <Tab
                label="Quay lại"
                icon={<ArrowBackIcon />}
                {...a11yProps(0)}
              />
              <Tab style={{ display: "none" }} {...a11yProps(1)} />
              <Tab
                label="Thanh toán"
                icon={<ArrowForwardIcon />}
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
        </TabPanel>
        <TabPanel className={classes.tabContent1} value={value} index={2}>
          <strong>Thông tin đơn hàng:</strong>
          {props.noteList.map((note) => (
            <>
              <Box className={classes.tabContentOders} >
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <Typography>{note.name}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography>Số lượng: {note.quantity}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} className={classes.tabContentOders3}>
                    <Typography>{note.price*note.quantity} đ</Typography>
                  </Grid>
                </Grid>
              </Box>
            </>
          ))}
          <Box className={classes.tabOrderInfo} p={2}>
            <Typography className={classes.OrdersInfo}>
              Thông tin giao hàng
            </Typography>
            <Typography className={classes.OrdersInfo}>Tên:</Typography>
            {nameList.name}
            <Typography className={classes.OrdersInfo}>
              Số điện thoại:
            </Typography>
            {nameList.phone}
            <Typography className={classes.OrdersInfo}>
              Tỉnh/ thành phố:
            </Typography>
            {nameList.city}
            <Typography className={classes.OrdersInfo}>Quận/ huyện:</Typography>
            {nameList.district}
            <Typography className={classes.OrdersInfo}>Địa chỉ:</Typography>
            {nameList.address}, {nameList.ward}
          </Box>
          <Box className={classes.Ordertotal}>
            Tổng tiền:{" "}
            <span className={classes.OrdertotalItem}>
              {props.getTotalPrice()} đ
            </span>
          </Box>
          <Box
            mt={2}
            display="flex"
            justifyContent="center"
            className={classes.tabBtn}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
            >
              <Tab style={{ display: "none" }} {...a11yProps(0)} />
              <Tab
                label="Quay lại"
                icon={<ArrowBackIcon />}
                {...a11yProps(1)}
              />
              <Tab
                label="Thanh toán"
                icon={<ArrowForwardIcon />}
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
        </TabPanel>
      </Container>
    </>
  );
}
