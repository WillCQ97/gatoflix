import styled from 'styled-components';

const Button = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 24px;
  text-decoration: none;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5
  }

  @media(max-width: 800px){
    background-color: var(--primary);
    border: 0;
    border-radius: 0;
    bottom: 0;
    color: var(--white);
    left: 0;
    outline: 0;
    position: fixed;
    right: 0;
    text-align: center;

    &:hover,
    &:focus {
      opacity: 1;
      color: var(--grayMedium);
      text-shadow: 1px 1px 2px var(--grayDark);
      }
  }
`;

export default Button;
