import Products from "../pages/Products";
import Bookmark from "../pages/Bookmark";
import styled from "styled-components";
import React, { useState } from "react";


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: #ffffff;
  max-width: 1280;
  height: 80px;
  padding: 0 76px;
  box-shadow: 0px 8px 8px rgba(0,0,0,0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
`;

const LogoImage = styled.img`
  width: 55px;
  height: 30px;
  margin-right: 12px;
  top: 25px;
  background-color: #ffffff;
  cursor: pointer;
`;

const LogoTitle = styled.span`
  width: 230px;
  height: 45.63px;
  font-size: 32px;
  font-weight: bold;
  background-color: #ffffff;
  cursor: pointer;
`;

const HamburgerImage = styled.img`
  height: 24px;
  background-color: #ffffff;
  cursor:pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 160px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const DropdownMenuItem = styled.div`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const Dropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src="logo.png" alt="logo" />
        <LogoTitle>COZ Shopping</LogoTitle>
      </LogoContainer>
      <HamburgerImage
        src="hamburger.png"
        alt="hamburger menu"
        onClick={Dropdown}
      />
      <DropdownMenu isOpen={isDropdownOpen}>
        <DropdownMenuItem>OOO님, 안녕하세요</DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/products">상품목록</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/bookmark">북마크</a>
        </DropdownMenuItem>
      </DropdownMenu>
    </HeaderContainer>
  );
}