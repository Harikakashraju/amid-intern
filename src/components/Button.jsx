import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: #1575A7;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 100%;
  border: none;
  color: white;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
`;