import styled from "styled-components";

function LoginButton() {
  return <Button>Fazer Login</Button>;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  background-color: #50623a;
  width: 100%;
  color: #fff;
  text-align: center;
  letter-spacing: -0.28px;
  padding: 20px 8px;
  font: 700 14px/100% DM Sans, sans-serif;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #3c4d2b;
  }
`;

export default LoginButton;
