import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 252px;
    column-gap: 1rem;
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement'
    'opinion-stories';
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: 1fr 386px 273px;
    gap: 1rem;
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement'
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-column: 1/2;
    grid-row: 1/-1;
    border-right: 1px solid #D0CDC8;
    padding-right: 1rem;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    grid-column: 2/3;
    grid-row: 1/2;
    border-left: 1px solid #D0CDC8;
    padding-left: 1rem;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-column: 2/3;
    grid-row: 1/2;
    border-left: none;
    padding-left: 0;
    border-right: 1px solid #D0CDC8;
    padding-right: 1rem;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  & div:nth-of-type(2) {
    @media ${QUERIES.tabletOnly} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 32px;
    }
  }

  @media ${QUERIES.tabletAndUp} {
    grid-column: 1/-1;
    grid-row: 3/-1;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-column: 3/-1;
    grid-row: 1/2;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.tabletAndUp} {
    grid-column: 1/-1;
    grid-row: 2/3;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-column: 2/-1;
    grid-row: 2/-1;

    border-top: 1px solid #D0CDC8;
    padding-top: 1rem;
  }
`;

export default MainStoryGrid;
