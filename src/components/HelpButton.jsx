import React from 'react';
import questionIconUrl from '../assets/question.svg';
import styled from 'styled-components';
const HelpButton = ({ modalOpen }) => {
  return (
    <Container onClick={modalOpen}>
      <ButtonText>도움말</ButtonText>
      <img src={questionIconUrl} alt="Question Icon" width="15px" />
      <Info>
        <ButtonText>소개</ButtonText> <ButtonText>📢</ButtonText>
      </Info>
    </Container>
  );
};

export default HelpButton;

const Container = styled.div`
  width: 105px;
  height: 45px;
  border-radius: 15px;
  background: #52b7fa;
  box-shadow: 0px 5px 0px 0px #157dc2;
  display: flex;
  gap: 10px;
  align-items: center;
  padding-left: 10px;
  position: relative;
  cursor: pointer;
  &:hover {
    margin-top: 10px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 0px 0px #157dc2;
  }
`;
const ButtonText = styled.div`
  text-align: center;
  font-size: 18px;
  color: white;
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #52b7fa;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 15px;

  animation: fadeInOut 12s infinite ease-in-out;
  opacity: 0;
  pointer-events: none;

  @keyframes fadeInOut {
    0%,
    20% {
      opacity: 0;
    }
    25%,
    75% {
      opacity: 1;
    }
    80%,
    100% {
      opacity: 0;
    }
  }
`;
