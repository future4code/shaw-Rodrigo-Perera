import styled from "styled-components";

const Button = styled.button`
  background-image: linear-gradient(to bottom right, #FF1A62, #1AECFF);
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 16px;
  font-weight: bolder;
  user-select: none;
  &:hover, &:active{
    background-image: linear-gradient(to top left, #FF1A62, #1AECFF)
  }
`

export default Button;