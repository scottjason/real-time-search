import styled, { createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import { darken } from 'polished';
import { Colors } from './constants';

const { lightGray } = Colors;

const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
  html {
    font-size: 62.5%;
  }
  body {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    line-height: normal;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    background-color: ${lightGray};
    background-color: ${darken(.2, '#424250')};
    user-select: none;
    -webkit-font-smoothing: antialiased;
  }
  textarea, select, input, button {
    outline: none;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  padding-bottom: 60px;
`;

export default GlobalStyles;
