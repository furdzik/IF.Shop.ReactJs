import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import { Icon } from '@mdi/react';

const FooterWrapper = styled.div`
  margin-top: 3rem;
  padding: 5rem 0;
  font-size: 1.3rem;
  background: ${(props) => props.theme.colors.secondaryColor};
`;

const LogoWrapper = styled.div`

`;

const ImgStyled = styled.img`
  max-width: 20rem;
`;

const AboutUsBox = styled.div`
  min-width: 53%;
`;

const DescriptionBox = styled.div`
  margin-top: 1rem;
`;

const BestsellerBox = styled.div`
  min-width: 18%;
`;

const SocialBox = styled.div`
  min-width: 15%;
`;

const IconStyled = styled(Icon)`
  fill: ${(props) => props.theme.colors.tertiaryColor};
  margin-right: 1rem;
`;

const BoxWrapper = styled.div`
  display: flex;

  ${AboutUsBox}, ${BestsellerBox} {
    margin-right: 2%;
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.quinaryColor};
`;

const LinkStyled = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const ListItem = styled.li`
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 2rem;

  ${(props) => props.twoColumns && css`
    ${ListItem} {
      width: 50%;
    }
  `}
  ${(props) => props.unstyled && css`
    list-style: none;
    margin-left: 0;
  `}
  ${(props) => props.withIcons && css`
    ${LinkStyled} {
      display: flex;
      align-items: center;
      margin-bottom: .5rem;
    }
  `}
`;

export {
  FooterWrapper,
  LogoWrapper,
  ImgStyled,
  BoxWrapper,
  AboutUsBox,
  DescriptionBox,
  BestsellerBox,
  SocialBox,
  IconStyled,
  Header,
  LinkStyled,
  List,
  ListItem
};
