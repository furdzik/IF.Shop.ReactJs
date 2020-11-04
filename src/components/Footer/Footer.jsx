import React from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { mdiFacebook, mdiTwitter, mdiLinkedin } from '@mdi/js';

import logo from '@assets/logo-footer.png';

import Container from '@components/Container';

import {
  FooterWrapper,
  LogoWrapper,
  ImgStyled,
  BoxWrapper,
  AboutUsBox,
  DescriptionBox,
  BestsellerBox,
  SocialBox,
  Header,
  LinkStyled,
  List,
  ListItem,
  IconStyled
} from './Footer.styles.js';
import messages from './Footer.messages';

const Footer = () => {
  const intl = useIntl();

  return (
    <FooterWrapper>
      <Container>
        <BoxWrapper>
          <AboutUsBox>
            <LogoWrapper>
              <Link to="/">
                <ImgStyled src={logo} alt="" />
              </Link>
            </LogoWrapper>
            <DescriptionBox>
              {intl.formatMessage(messages.description)}
            </DescriptionBox>
          </AboutUsBox>
          <BestsellerBox>
            <Header>{intl.formatMessage(messages.bestsellerTitle)}</Header>
            <List twoColumns>
              <ListItem>
                <LinkStyled to="/">
                  {intl.formatMessage(messages.bestsellerA4)}
                </LinkStyled>
              </ListItem>
              <ListItem>
                <LinkStyled to="/">
                  {intl.formatMessage(messages.bestsellerA5)}
                </LinkStyled>
              </ListItem>
              <ListItem>
                <LinkStyled to="/">
                  {intl.formatMessage(messages.bestsellerPens)}
                </LinkStyled>
              </ListItem>
              <ListItem>
                <LinkStyled to="/">
                  {intl.formatMessage(messages.bestsellerStaplers)}
                </LinkStyled>
              </ListItem>
              <ListItem>
                <LinkStyled to="/">
                  {intl.formatMessage(messages.bestsellerA4)}
                </LinkStyled>
              </ListItem>
              <ListItem>
                <LinkStyled to="/">
                  {intl.formatMessage(messages.bestsellerA5)}
                </LinkStyled>
              </ListItem>
              <ListItem>
                <LinkStyled to="/">
                  {intl.formatMessage(messages.bestsellerPens)}
                </LinkStyled>
              </ListItem>
              <ListItem>
                <LinkStyled to="/">
                  {intl.formatMessage(messages.bestsellerStaplers)}
                </LinkStyled>
              </ListItem>
            </List>
          </BestsellerBox>
          <SocialBox>
            <Header>{intl.formatMessage(messages.socialTitle)}</Header>
            <List unstyled withIcons>
              <ListItem>
                <LinkStyled to="/">
                  <IconStyled
                    path={mdiFacebook}
                    size="2rem"
                  />
                  <span>{intl.formatMessage(messages.socialFacebook)}</span>
                </LinkStyled>
              </ListItem>
              <ListItem>
                <LinkStyled to="/">
                  <IconStyled
                    path={mdiTwitter}
                    size="2rem"
                  />
                  <span>{intl.formatMessage(messages.socialTwitter)}</span>
                </LinkStyled>
              </ListItem>
              <ListItem>
                <LinkStyled to="/">
                  <IconStyled
                    path={mdiLinkedin}
                    size="2rem"
                  />
                  <span>{intl.formatMessage(messages.socialLinkedIn)}</span>
                </LinkStyled>
              </ListItem>
            </List>
          </SocialBox>
        </BoxWrapper>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
