import React from 'react';
import { Search } from 'styled-icons/feather';
import { Icon } from '../Icon';
import { Container, InputElement } from './Input.style';

const Input = props => {
  const { onInputChange } = props;
  return(
    <Container>
    <InputElement autoFocus onChange={onInputChange} placeholder={'Search images...'} />
    <Icon Component={Search} wrapper={'SearchWrap'} />
    </Container>
  )
};

export { Input };
