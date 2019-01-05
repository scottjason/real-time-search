import styled from 'styled-components';
import { lighten } from 'polished';
import { Colors } from '../../constants';

const { malibu } = Colors;

export const Copy = styled.div`
  position: relative;
  color: ${lighten(.25, malibu)};
  font-size: 1.3rem;
  font-weight: 400;
  margin-right: 5px;
  top: -8px;
`;
