import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, COLORS, FAMILIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <Wrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <DesctopHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
      </DesctopHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <DesctopHeader>
        <Button>Subscribe</Button>
        <Question>Already a subscriber?</Question>
      </DesctopHeader>
    </Wrapper>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const DesctopHeader = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: block;
  }
`;

const Wrapper = styled(MaxWidthWrapper)`

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    align-items: center;
  }
`

const Question = styled.p`
  text-decoration-line: underline;
  color: ${COLORS.gray[700]};
  padding-top: 0.5rem;
  font-family: ${FAMILIES.serif};
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`;

export default Header;
