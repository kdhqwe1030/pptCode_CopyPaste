import React from 'react';
import questionIconUrl from '../assets/question.svg';
import styled from 'styled-components';
const HelpButton = () => {
  return (
    <Container>
      <ButtonText>도움말</ButtonText>
      <img src={questionIconUrl} alt="Question Icon" width="15px" />
    </Container>
  );
};

export default HelpButton;

const Container = styled.div`
  width: 105px;
  height: 45px;
  border-radius: 15px;
  /* box-shadow: 0px 0px 8px 0px #9499cc3b; */
  background: #52b7fa;
  box-shadow: 0px 5px 0px 0px #157dc2;
  display: flex;
  gap: 15px;
  align-items: center;
  padding-left: 10px;
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
