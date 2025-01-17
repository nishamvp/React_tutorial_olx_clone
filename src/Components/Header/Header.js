import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext, FirebaseContext } from "../../store/Context";

function Header() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const [searchInput,setSearchInput]=useState('')

  const handleSearch=(searchValue)=>{
    setSearchInput(searchValue);
    firebase.firestore().collection('products').where('name', '>=', searchInput)
    .where('name', '<=', searchInput+ '\uf8ff').get().then((res)=>{
      console.log(res);
      res.forEach(doc => {
        console.log(doc.data());        
      });
    })

  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <Link to="/">
            <OlxLogo></OlxLogo>
          </Link>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              onChange={(e)=>handleSearch(e.target.value)}
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <Link to={user ? null : "/login"} className="link">
            {user ? `Welcome ${user.displayName}` : "Login"}
          </Link>
          <hr />
        </div>
        {user && (
          <Link
            className="link"
            onClick={() => {
              firebase
                .auth()
                .signOut()
                .then(() => history.push("/login"));
            }}
          >
            Logout
          </Link>
        )}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to="/create" className="link">
              SELL
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
