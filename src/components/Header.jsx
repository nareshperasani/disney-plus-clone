import React, {useEffect} from "react";
import styled from "styled-components";
import {auth, provider} from "../firebase";
import {selectUserName, selectUserPhoto, setSignOut, setUserLogin} from "../features/user/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(()=>{
    auth.onAuthStateChanged(async (user)=>{
      if(user){
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
        history.push("/")
      }
    })
  },[])


  const signIn = ()=>{
    auth.signInWithPopup(provider)
    .then((result)=>{
      let user = result.user;
      dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }))
      history.push("/");
    })
  }

  const signOut = ()=>{
    auth.signOut()
    .then(()=>{
      dispatch(setSignOut());
      history.push("/login");
    })
  }

  return (
    <Nav>
      <Link to="/">
      <Logo src="/images/logo.svg" />
      </Link>
      {
        !userName ? 
        <Login onClick={signIn}>Login</Login> : (
            <>
              <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WATChLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINAL</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <SignOut>
        <UserImg src={userPhoto} alt={userName} />
        <Dropdown>
          <span onClick={signOut}>Sign Out</span>
        </Dropdown>
      </SignOut>
            </>
        )
      }
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  z-index: 3;
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.4px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -7px;
        opacity: 0;
        transform-origin: right center left;
        transition: all 0.3s ease-in-out;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover{
    background: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0 0 18px 0;
  padding: 10px;
  font-size: 13px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg}{
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  
  &:hover{
    ${Dropdown}{
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;