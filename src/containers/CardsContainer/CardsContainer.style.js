import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  width: 85%;
  max-width: 85%;
  ${media.lessThan('768px')`
  `}
`;
