import { AiOutlineMenu, AiOutlineGift, AiOutlineStar } from "react-icons/ai";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "../pages/Products";
import Bookmark from "../pages/Bookmark";
import styled from "styled-components"

const HeaderCont = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 76px;
  box-shadow: 0 8px 8px rgba(0, 0, 0,0.1);
  align-items: center;
`;

const Logo = styled.h1`
  display: flex;
  vertical-align: middle;
  font-size: 2rem;
  color: #000;
  font-weight: bold;
`
const LogoTitle = styled.span`
  padding-left: 12px;
`;

const BurgerBtn = styled.button`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

`

function Header() {
  return (
    <BrowserRouter>
      <HeaderCont>
        <Link to="/">
          <Logo><img src='logo.png' alt="logo"></img>
          <LogoTitle>
          <span className="logo-title">Coz Shopping</span>
          </LogoTitle>
          </Logo>
        </Link>
        <BurgerBtn>
          <AiOutlineMenu />
          <nav>
          </nav>
        </BurgerBtn>
      </HeaderCont>
      <Routes>
        {/* 경로는 path로 컴포넌트는 element로 연결해 줍니다. */}
        <Route path="/pages/Products" element={<Products />} />
        <Route path="/pages/Bookmark" element={<Bookmark />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Header;