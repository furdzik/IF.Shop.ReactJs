import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.secondaryColor};
  margin-bottom: 3rem;
`;

const MenuList = styled.ul`
  display: flex;
`;

const LinkStyled = styled(Link)`
  color: ${(props) => props.theme.colors.primaryColor};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.tertiaryColor};
    transition: all 0.3s ease 0s;
  }
`;

const MenuItem = styled.li`
  display: block;
  margin: 2rem 0;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.3;
  & + & {
    margin-left: 3rem;
  }

  ${(props) => props.active && css`
    ${LinkStyled} {
      color: ${props.theme.colors.tertiaryColor};
    }
  `}
`;

export {
  Wrapper,
  MenuList,
  LinkStyled,
  MenuItem
};
