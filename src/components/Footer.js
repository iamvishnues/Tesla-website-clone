import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Bottom>
      <p>Tesla © 2021</p>
      <p>Privacy & Legal</p>
      <p>Contact</p>
      <p>Careers</p>
      <p>Get Newsletter </p>
      <p>News</p>
      <p>Forums</p>
      <p>Locations</p>
    </Bottom>
  );
}

export default Footer;
const Bottom = styled.div`
  bottom: 0;

  list-style: none;
  display: flex;
  padding-top: 15px;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: center;
  font-size: 12px;
  p {
    padding: 10px;
    display: flex;
  }
  @media (max-width: 720px) {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(4, auto);
  }
  @media (max-width: 460px) {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, auto);
  }
`;
