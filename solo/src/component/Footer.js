import styled from "styled-components"

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

const FooterMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  >ul {
    display: flex;
    flex-direction: row;
  }

  >li{
    position: relative;
  }

  >li > a{
    color: #888;
    padding: 0 10px;
    
  }

  >li::after{
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: #888;
    display: block;
  }

  >li:last-child::after{
    display: none;
  }

`

function Footer() {
  return (
    <FooterCont>
      <FooterMenu>
        <ul>
        <li><a href="/" target="" title="바로가기">개인정보 처리방침</a></li>
        <li><a href="/" target="" title="바로가기">이용 약관</a></li>
        </ul>
      </FooterMenu>
      <p>All rights reserved @ Codestates</p>
    </FooterCont>
  )
}

export default Footer