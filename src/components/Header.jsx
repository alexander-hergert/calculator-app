import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Theme from "./Theme";

/************** STYLES **************/

const Style = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30rem;

  @media screen and (max-width: 400px) {
    width: 22rem;
  }
`;

/************** COMPONENT **************/

const Header = () => {
  return (
    <Style>
      <Logo />
      <Theme />
    </Style>
  );
};

export default Header;
