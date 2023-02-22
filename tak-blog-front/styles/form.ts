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

export const Input = styled.input<{
  backgroundColor?: string;
  borderColor?: string;
}>`
  padding: 12px;
  background-color: ${(props) => props.backgroundColor || "#f6f6f6"};
  border: 1px solid ${(props) => props.borderColor || "#f6f6f6"};
  border-radius: 16px;
  font-size: 16px;
  color: black;
  margin: 5px 0;
  width: 100%;
  /* &:focus {
    border-color: ${(props) => props.borderColor || "#001d66"};
  } */
  &::placeholder {
    color: grey;
  }
`;

export const Button = styled.button<{
  backgroundColor?: string;
  isBorder?: boolean;
  borderColor?: string;
}>`
  padding: 12px;
  background-color: ${(props) => props.backgroundColor || "black"};
  border-radius: 16px;
  font-size: 16px;
  color: ${(props) => props.color || "white"};
  margin-top: 30px;
  width: 100%;
  border: ${(props) =>
    props.isBorder && `2px ${props.borderColor || "black"} solid`};
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 15px;
  text-align: center;
`;
