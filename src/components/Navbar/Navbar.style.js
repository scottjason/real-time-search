import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { Colors } from '../../constants';
import media from 'styled-media-query';

const { malibu } = Colors;

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  height: 110px;
  min-height: 110px;
  min-width: 85%;
  width: 85%;
  margin: 0 auto;
  left: 0;
  right: 0;
  background-color: ${darken(.2, '#424250')};
  z-index: 2;
  border-left: 1px solid ${darken(.2, '#424250')};
  border-right: 1px solid ${darken(.2, '#424250')};
  ${media.lessThan('940px')`
    flex-direction: column;
    justify-content: flex-start;
    height: 125px;
  `}
`;

export const Section = styled.section`
  display: flex;
  flex: 0;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 50%;
  width: 50%;
  height: 100%;
  color: white;
   ${media.lessThan('940px')`
    width: 100%;
    flex-direction: column-reverse;
    align-items: flex-end;
    text-align: right;
  `}
`;

export const SearchWrap = styled.div`
  position: relative;
  background-color: transparent;
  width: 400px;
  height: 60px;
  ${media.lessThan('940px')`
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
  `}
`;

export const StatWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: auto;
  min-width: 300px;
  height: 40px;
  margin-bottom: 15px;
  margin-right: 10px;
  font-size: 1.2rem;
  ${media.lessThan('940px')`
    display: none;
  `}
`;

export const StatWrapMobile = styled.div`
  position: relative;
  display: none;
  flex-direction: row;
  justify-content: center;
  width: auto;
  height: auto;
  font-size: 1.2rem;
  ${media.lessThan('940px')`
    display: flex;
    font-size: .9rem;
    color: white;
    flex-direction: column;
    position: absolute;
    top: 15px;
  `}
`;

export const Stat = styled.p`
  color: white;
`;

export const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 20px
  left: 10px;
  background-color: #E3F5FB;
  ${media.lessThan('940px')`
    display: flex;
    left: 0;
    width: 100%;
    text-align: center;
  `}
`;

export const Highlight = styled.span`
  color: ${lighten(.2, malibu)};
`;
