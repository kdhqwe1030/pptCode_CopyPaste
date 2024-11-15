import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

const TextField = ({ text, value, onChange }) => {
  return (
    <div>
      <h2>{text}</h2>
      <TextareaStyled
        minRows={20}
        value={value}
        onChange={onChange}
      ></TextareaStyled>
    </div>
  );
};

export default TextField;

const TextareaStyled = styled(TextareaAutosize)`
  width: 400px;
  resize: none;
  border-radius: 15px;
  outline: none;
  border: 3px solid #c4d7ff;
  font-size: 14px;
  padding: 10px 10px;
  font-weight: 400px;
  font-family: pretendard;
  color: #33333;
  overflow: hidden;

  @media (min-width: 1500px) {
    width: 65vh;
  }
  @media (max-width: 1200px) {
    width: 65vh;
  }
  &:focus {
    border: 5px solid #87a2ff;
    transform: scale(1.05);
  }
  transition: all 0.7s ease;
`;
