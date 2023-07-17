import { AiOutlineGift, AiOutlineStar } from "react-icons/ai";
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
  top: 85px;
  right: 38px;
  width: 235px;
  border-radius: 20px;
  background-color: #fff;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
  padding: 8px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  cursor: auto;

  &::before{
      content: '';
      border-bottom: 20px solid #fff;
      border-top: 10px solid transparent;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
      position: absolute;
      top: -28px;
      right: 50px;
    }

    &::after{
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      /* box-shadow: 0 0 8px rgba(0, 0, 0,0.1); */
    }
`;

const DropdownMenuItem = styled.div`
  position: relative;
  margin-bottom: 8px;
  display: flex;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  padding: 15px 25px;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  &:hover{
    background-color: #f8f8f8;
  }


  &:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
  }

  &:last-child {
    margin-bottom: 0;
  }

  > a{
    display: flex;
    align-items: center;
    color: #000;
  }

  >a>.icon {
        font-size: 1.4rem;
        margin-right: 5px;
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
        <DropdownMenuItem>OOO님, 안녕하세요!</DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/products"><AiOutlineGift className="icon" />상품리스트 페이지</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/bookmark"><AiOutlineStar className="icon" />북마크 페이지</a>
        </DropdownMenuItem>
      </DropdownMenu>
    </HeaderContainer>
  );
}