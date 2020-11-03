import styled, { css } from 'styled-components';

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
  ${(props) => props.buttonPrimary && css`
    background-color: ${props.theme.colors.primaryColor};
    color: ${props.theme.colors.white};
    &:focus,
    &:hover {
      background-color: ${props.theme.colors.tertiaryColor};
    }
    &:active {
      background-color: ${props.theme.colors.tertiaryColor};
    }
  `}
  ${(props) => props.buttonSecondary && css`
    background-color: ${props.theme.colors.secondaryColor};
    color: ${props.theme.colors.black};
    &:focus,
    &:hover {
      background-color: ${props.theme.colors.secondaryColorHover};
    }
    &:active {
      background-color: ${props.theme.colors.secondaryColorHover};
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
