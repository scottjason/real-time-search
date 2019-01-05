import styled from 'styled-components';
import { Colors } from '../../constants';
import { lighten } from 'polished';

const { red, malibu } = Colors;

export const InstagramWrap = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: ${malibu};
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 275ms ease;
  &:hover {
    color: ${lighten(.2, malibu)};
  }
`;

export const HeartWrap = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  color: ${red};
  opacity: .4;
`;

export const DownloadWrap = styled.div`
  width: 15px;
  height: 15px;
  margin-top: -3px;
  margin-left: 6px;
`;

export const SearchWrap = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  margin-left: 10px;
  color: ${malibu};
  top: -1px;
`;
