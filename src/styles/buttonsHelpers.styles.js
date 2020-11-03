import { css } from 'styled-components';

const Button = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-width: 13rem;
  height: 4rem;
  padding: .8rem 2rem;
  font-size: 1.6rem;
  border-radius: .2rem;
  transition: all 0.3s;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.white};
  &:focus,
  &:hover {
    background-color: ${(props) => props.theme.colors.tertiaryColor};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.tertiaryColor};
  }

  ${(props) => props.secondary && css`
    background-color: ${props.theme.colors.quaternaryColor};
    &:focus,
    &:hover {
      background-color: ${props.theme.colors.quinaryColor};
    }
    &:active {
      background-color: ${props.theme.colors.quinaryColor};
    }
  `}
`;

const Text = css`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  text-overflow: ellipsis;
`;

export {
  Button,
  Text
};
