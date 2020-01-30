import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-width: 100%;
  box-sizing: border-box;
  height: 110px;
  padding-left: 2px;
  ${media.lessThan('940px')`
    height: 125px;
  `}
`;
