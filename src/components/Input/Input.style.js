import styled from 'styled-components';
import media from 'styled-media-query';
import { isMobile } from 'react-device-detect';


export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const InputElement = styled.input`
  background-color: transparent;
  border: none;
  height: 100%;
  width: 100%;
  outline: 0;
  padding: 0 0 0 10px;
  color: white;
  font-size: 2.4rem;
  color: #E3F5FB;
  opacity: .8;
  font-weight: 300;
  ${media.lessThan('940px')`
    min-width: 100%;
    padding-bottom: 25px;
  `}
`;
