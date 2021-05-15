import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/CarSlice";
import { useSelector } from "react-redux";

function Header() {
  const [BurgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  function setStatus() {
    setBurgerStatus(!BurgerStatus);
  }
  return (
    <Container>
      <a>
        <img src="images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={setStatus}></CustomMenu>
      </RightMenu>

      {BurgerStatus ? (
        <BurgerMenu show={BurgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={setStatus}></CustomClose>
          </CloseWrapper>
          <li>
            <a href="#">Model S</a>
          </li>
          <li>
            <a href="#">Model 3</a>
          </li>
          <li>
            <a href="#">Model X</a>
          </li>
          <li>
            <a href="#">Model Y</a>
          </li>
          <li>
            <a href="#">Model S</a>
          </li>
          <li>
            <a href="#">Solar roof</a>
          </li>
          <li>
            <a href="#">solar pannels</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
          <li>
            <a href="#">Tesla Account</a>
          </li>
        </BurgerMenu>
      ) : null}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 976px) {
    display: none;
  }
  /* @media (max-width: 750px) {
    display: none;
  } */
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 5px;
    flex-wrap: no-wrap;
  }
  justify-content: center;
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid black;
  }
  a {
    font-weight: 600;
  }
  /* transform: ${(props) =>
    props.show ? "translateX(100%)" : "translateX(0)"}; */
  transition: transform 0.2s ease-in-out;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
