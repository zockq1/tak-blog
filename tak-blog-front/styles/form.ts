import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
`;

export const Form = styled.form`
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 50px;
  max-width: 400px;
  height: 100%;
`;

export const Input = styled.input`
  padding: 12px;
  background-color: #f6f6f6;
  border: 2px solid #f6f6f6;
  border-radius: 16px;
  font-size: 16px;
  color: black;
  margin-top: 10px;
  width: 100%;
  &:focus {
    border-color: #001d66;
  }
  &::placeholder {
    color: grey;
  }
`;

export const Button = styled.button<{
  bgcolor?: string;
  isBorder?: boolean;
  borderColor?: string;
}>`
  padding: 12px;
  background-color: ${(props) => props.bgcolor || "black"};
  border-radius: 16px;
  font-size: 16px;
  color: ${(props) => props.color || "white"};
  margin-top: 30px;
  width: 100%;
  border: ${(props) =>
    props.isBorder && `2px ${props.borderColor || "black"} solid`};
`;
