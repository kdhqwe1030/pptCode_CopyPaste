import styled from 'styled-components';
const ConvertButton = ({ onClick }) => {
  return <Button onClick={onClick}>변환하기</Button>;
};

export default ConvertButton;

const Button = styled.button`
  background-color: #52b7fa;
  color: white;
  border-radius: 10px;
  width: 105px;
  height: 37.5px;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  font-family: pretendard;
  cursor: pointer;
  &:hover {
    background: #339af0;
    transform: scale(1.15);
  }
  &:active {
    background: #1c7ed6;
    transition: none;
  }
  transition: all ease 0.3s;
`;
