import React from "react";
import styled from "styled-components";
function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{props.leftBtnText}</LeftButton>
          {props.rightBtnText && (
            <RightButton>{props.rightBtnText}</RightButton>
          )}
        </ButtonGroup>
        {props.title == "Model S" ? (
          <DownArrow src="./images/down-arrow.svg" />
        ) : (
          <div />
        )}
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) => `url("./images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
`;
const Buttons = styled.div``;
const ButtonGroup = styled.div`
  display: flex;
  @media (max-width: 760px) {
    flex-direction: column;
  }

  margin-bottom: 10px;
`;
const LeftButton = styled.div`
  background-color: #313338;
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.8;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: #d9d9d9;
  color: #393c41;
  opacity: 0.8;
`;
const DownArrow = styled.img`
  margin-top: 10px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
