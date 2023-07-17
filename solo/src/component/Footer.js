import React from "react";
import styled from "styled-components";

const FooterCont = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: #888;
  padding: 15px 0;
`

const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  >span{
    position: relative;
    background-color: #fff;
  }
`
const Footertext = styled.p`
background-color: #fff;
`

function Footer() {
  return (
    <FooterCont>
      <FooterMenu>
        <span>개인정보 처리방침 ｜ 이용 약관</span>
        </FooterMenu>
      <Footertext>
      All rights reserved @ Codestates
      </Footertext>
    </FooterCont>
  )
}

export default Footer