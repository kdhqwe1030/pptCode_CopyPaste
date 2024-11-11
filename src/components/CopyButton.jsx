import styled from 'styled-components';
const CopyButton = ({ onClick }) => {
  return <Button onClick={onClick}>결과 복사하기</Button>;
};

export default CopyButton;

const Button = styled.button`
  background-color: #6439ff;
  color: white;
  border-radius: 10px;
  width: 105px;
  height: 37.5px;
  outline: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
  font-family: pretendard;
  cursor: pointer;
  &:hover {
    background: #4f75ff;
    transform: scale(1.15);
  }
  &:active {
    background: #00ccdd;
    transition: none;
  }
  transition: all ease 0.3s;
`;
