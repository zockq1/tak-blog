import styled from "styled-components";

interface Error {
  error?: string;
}

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 5px;
  font-size: 14px;
  width: 100%;
`;

function InputError(error: Error) {
  if (!error.error) return null;
  return <ErrorMessage>{error.error}</ErrorMessage>;
}

export default InputError;
