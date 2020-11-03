import styled from 'styled-components';

import { Link } from 'react-router-dom';

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  &::before {
    width: 1rem;
    height: 1rem;
    margin-right: 1rem;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.quaternaryColor};
    content: '';
  }
`;

const LinkStyled = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

export {
  List,
  ListItem,
  LinkStyled
};
