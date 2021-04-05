import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./components/Home";
import Drink from "./components/Drink";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SenVang from "./img/cphsenvnghnhnhnxayphclong.png";
import OLong from "./img/olong.png";
import TrauLanh from "./img/traulanhnontom.png";
import TraLai from "./img/jasmine.png";
import DacCam from "./img/daccam.png";
import DacThom from "./img/trcclphuclong.png";
import OLongSua from "./img/trsolongphclong.png";
import TraSuaPL from "./img/trsaphclong.png";
import TraDao from "./img/trophclong.png";

const DEFAULT_PRODUCT = [
  {
    id: "1",
    badge: "Món mới",
    imgUrl: `${SenVang}`,
    name: "Cà Phê Sen Vàng HN Đá Xay",
    desc: "Almond Lotus Cappucino Crunch",
    price: 75000,
    btn: "ĐẶT HÀNG",
    quantity: 1,
  },
  {
    id: "2",
    badge: "Món mới",
    imgUrl: `${OLong}`,
    name: "Trà OLong Ủ Lạnh",
    desc: "Cold Brew Oolong Tea",
    price: 35000,
    btn: "ĐẶT HÀNG",
    quantity: 1,
  },
  {
    id: "3",
    badge: "Món mới",
    imgUrl: `${TrauLanh}`,
    name: "Trà Nõn Tôm Ủ Lạnh",
    desc: "Cold Brew Top Bud Green Tea",
    price: 35000,
    btn: "ĐẶT HÀNG",
    quantity: 1,
  },
  {
    id: "4",
    badge: "Món mới",
    imgUrl: `${TraLai}`,
    name: "Trà Lài Ủ Lạnh",
    desc: "Cold Brew Jasmine Tea",
    price: 28000,
    btn: "ĐẶT HÀNG",
    quantity: 1,
  },
  {
    id: "5",
    badge: "Món mới",
    imgUrl: `${DacCam}`,
    name: "Hồng Trà Đác Cam",
    desc: "Forest Black Tea",
    price: 65000,
    btn: "ĐẶT HÀNG",
    quantity: 1,
  },
  {
    id: "6",
    badge: "Món mới",
    imgUrl: `${DacThom}`,
    name: "Trà Lài Đác Thơm",
    desc: "Forest Jasmine Tea",
    price: 50000,
    btn: "ĐẶT HÀNG",
    quantity: 1,
  },
  {
    id: "7",
    badge: "Món mới",
    imgUrl: `${OLongSua}`,
    name: "Trà Ô Long sữa",
    desc: "Oolong Milk Tea",
    price: 45000,
    btn: "ĐẶT HÀNG",
    quantity: 1,
  },
  {
    id: "8",
    badge: "Món mới",
    imgUrl: `${TraDao}`,
    name: "Trà Đào",
    desc: "Peach Black Tea",
    price: 50000,
    btn: "ĐẶT HÀNG",
    quantity: 1,
  },
  {
    id: "9",
    badge: "Món mới",
    imgUrl: `${TraSuaPL}`,
    name: "Trà sữa Phúc Long",
    desc: "Phuc Long Tea Latte",
    price: 45000,
    btn: "ĐẶT HÀNG",
    quantity: 1,
  },
];

class App extends Component {
  state = {
    product: DEFAULT_PRODUCT,
    searchValue: "",
    query: {
      name: "all",
      city: "all",
      district: "all",
      quantity: 1,
      price: "all",
    },
    noteList: JSON.parse(localStorage.getItem("noteList")) || [],
    sort_term: "",
    nameList: {
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "all",
      district: "all",
      ward: "",
      note: "",
    },
    mapStore: [
      {
        address: "Phúc Long Lê Văn Sỹ - 350 Lê Văn Sỹ, quận 3, Hồ Chí Minh",
        phone: "028 39 311 048",
      },
      {
        address:
          "Phúc Long 188 Trần Hưng Đạo - 188 Trần Hưng Đạo, quận 5, Hồ Chí Minh",
        phone: "028 39 311 048",
      },
      {
        address:
          "Phúc Long Bitexco - Lầu 4, Khu vực ẩm thực Food Creative, Tòa nhà Bitexco, số 2 Hải Triều, quận 1, Hồ Chí Minh",
        phone: "028 39 311 048",
      },
      {
        address:
          "Phúc Long Trần Phú Nha Trang - 78-80 Trần Phú, phường Lộc Thọ, thành phố Nha Trang, Khánh Hòa",
        phone: "028 39 311 048",
      },
      {
        address:
          "Phúc Long Nowzone - TTTM Nowzone, số 235 Nguyễn Văn Cừ, quận 1, Hồ Chí Minh",
        phone: "028 39 311 048",
      },
      {
        address:
          "Phúc Long Lotte Mart Quận 7 - 1F-32, Lotte Mart Quận 7, số 469 Nguyễn Hữu Thọ, quận 7, Hồ Chí Minh",
        phone: "028 39 311 048",
      },
    ],
    email: "",
    pass: "",
    erroremail: "",
    errorpass: "",
    change: false,
  };

  changeEmailLogin = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  changePassLogin = (e) => {
    this.setState({
      pass: e.target.value,
    });
  };
  clickBtnLogin = (e) => {
    e.preventDefault();
    let dem = 0;
    for (let i = 0; i < this.state.email.length; i++) {
      if (this.state.email[i] === "@") dem++;
    }
    if (dem === 1) {
      this.setState({
        erroremail: "",
      });
    } else {
      this.setState({
        erroremail: "email không hợp lệ",
      });
    }

    if (this.state.pass.length >= 6) {
      this.setState({
        errorpass: "",
      });
    } else {
      this.setState({
        errorpass: "mật khẩu không hợp lệ",
      });
    }

    if(dem ===1 & this.state.pass.length >= 6){
      setTimeout(
        () =>
          this.setState({
            change: true
          }),
        1000
      );
      
    }else{
      this.setState({
        change: false
      })
    }
  };

  changeName = (e) => {
    this.setState({
      nameList: {
        ...this.state.nameList,
        name: e.target.value,
      },
    });
  };
  changePhone = (e) => {
    this.setState({
      nameList: {
        ...this.state.nameList,
        phone: e.target.value,
      },
    });
  };
  changeEmail = (e) => {
    this.setState({
      nameList: {
        ...this.state.nameList,
        email: e.target.value,
      },
    });
  };
  changeAddress = (e) => {
    this.setState({
      nameList: {
        ...this.state.nameList,
        address: e.target.value,
      },
    });
  };

  changeCity = (e) => {
    this.setState(
      {
        nameList: {
          ...this.state.nameList,
          city: e.target.value,
        },
      },
      () => {
        console.log(this.state.nameList.city);
      }
    );
  };
  changeDistrict = (e) => {
    this.setState({
      nameList: {
        ...this.state.nameList,
        district: e.target.value,
      },
    });
  };
  changeWard = (e) => {
    this.setState({
      nameList: {
        ...this.state.nameList,
        ward: e.target.value,
      },
    });
  };
  changeNote = (e) => {
    this.setState({
      nameList: {
        ...this.state.nameList,
        note: e.target.value,
      },
    });
  };

  onSearch = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };
  changeProduct = (e) => {
    this.setState(
      {
        query: {
          ...this.state.query,
          name: e.target.value,
        },
      },
      () => {
        console.log(this.state.query.name);
      }
    );
  };
  changeCityHome = (e) => {
    this.setState(
      {
        query: {
          ...this.state.query,
          city: e.target.value,
        },
      },
      () => {
        console.log(this.state.query.city);
      }
    );
  };
  changeDistrictHome = (e) => {
    this.setState(
      {
        query: {
          ...this.state.query,
          district: e.target.value,
        },
      },
      () => {
        console.log(this.state.query.district);
      }
    );
  };

  onSorting = (e) => {
    let option = e.target.value;
    let sortedList = [...DEFAULT_PRODUCT];
    if (option !== "all") {
      sortedList.sort((a, b) => {
        return option === "asc"
          ? a.price < b.price
            ? -1
            : 1
          : a.price > b.price
          ? -1
          : 1;
      });
    }
    this.setState({
      sort_term: sortedList.price,
      product: sortedList,
    });
  };

  clickProduct = (id) => {
    const { noteList, product } = this.state;
    let findedProduct = noteList.find((product) => product.id === id);
    if (findedProduct) {
      let newListproduct = noteList.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      this.setState(
        {
          noteList: newListproduct,
        },
        () => {
          this.saveToLocalStorage();
        }
      );
    } else {
      const productToAdd = product.find((i) => i.id === id);
      const newList = [...noteList, productToAdd];
      this.setState(
        {
          noteList: newList,
        },
        () => {
          this.saveToLocalStorage();
        }
      );
    }
  };

  handleRemove = (noteValue) => {
    const { noteList } = this.state;
    const newList = noteList.filter((note) => note.id !== noteValue.id);
    this.setState(
      {
        noteList: newList,
      },
      () => {
        this.saveToLocalStorage();
      }
    );
  };

  getTotalPrice = () => {
    let sum = 0;
    for (let i = 0; i < this.state.noteList.length; i++) {
      sum += this.state.noteList[i].price * this.state.noteList[i].quantity;
    }
    return sum;
  };

  saveToLocalStorage = () => {
    localStorage.setItem("noteList", JSON.stringify(this.state.noteList));
  };

  incrementItem = (id) => {
    const { noteList } = this.state;
    let newListproduct = noteList.map((product) => {
      if (product.id === id && product.quantity < 9) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    this.setState(
      {
        noteList: newListproduct,
      },
      () => {
        this.saveToLocalStorage();
      }
    );
  };
  decrementItem = (id) => {
    const { noteList } = this.state;
    let newListproduct = noteList.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });
    this.setState(
      {
        noteList: newListproduct,
      },
      () => {
        this.saveToLocalStorage();
      }
    );
  };
  render() {
    const { noteList, nameList } = this.state;
    const filterSearch = this.state.product
      .filter((note) =>
        note.name.toLowerCase().includes(this.state.searchValue)
      )
      .filter((note) => {
        if (this.state.query.name === "all") {
          return true;
        } else {
          if (
            note.name
              .toLowerCase()
              .includes(this.state.query.name.toLowerCase())
          )
            return true;
          return false;
        }
      });

    const filterSearch1 = this.state.mapStore
      .filter((note) => {
        if (this.state.query.city === "all") {
          return true;
        } else {
          if (
            note.address
              .toLowerCase()
              .includes(this.state.query.city.toLowerCase())
          )
            return true;
          return false;
        }
      })
      .filter((note) => {
        if (this.state.query.district === "all") {
          return true;
        } else {
          if (
            note.address
              .toLowerCase()
              .includes(this.state.query.district.toLowerCase())
          )
            return true;
          return false;
        }
      });

    return (
      <>
        <Router>
          <Header
            /* countFavourite={countFavourite} */
            noteList={noteList}
            handleRemove={this.handleRemove}
            getTotalPrice={this.getTotalPrice}
          />

          <Switch>
            <Route exact path="/">
              <Home
                filterSearch1={filterSearch1}
                changeCityHome={this.changeCityHome}
                changeDistrictHome={this.changeDistrictHome}
              />
            </Route>
            <Route path="/thuc-uong">
              <Drink
                changeProduct={this.changeProduct}
                onSearch={this.onSearch}
                product={filterSearch}
                clickProduct={this.clickProduct}
                onSorting={this.onSorting}
                sort_term={this.state.sort_term}
                noteList={noteList}
                getTotalPrice={this.getTotalPrice}
              />
            </Route>
            <Route path="/login">
              <Login
                changeEmailLogin={this.changeEmailLogin}
                changePassLogin={this.changePassLogin}
                clickBtnLogin={this.clickBtnLogin}
                erroremail={this.state.erroremail}
                errorpass={this.state.errorpass}
                change={this.state.change}
              />
            </Route>
            <Route path="/thanh-toan">
              <Checkout
                noteList={noteList}
                handleRemove={this.handleRemove}
                getTotalPrice={this.getTotalPrice}
                changeName={this.changeName}
                changePhone={this.changePhone}
                changeEmail={this.changeEmail}
                changeAddress={this.changeAddress}
                changeWard={this.changeWard}
                changeCity={this.changeCity}
                changeNote={this.changeNote}
                changeDistrict={this.changeDistrict}
                nameList={nameList}
                incrementItem={this.incrementItem}
                decrementItem={this.decrementItem}
              />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
