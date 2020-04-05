import React from 'react';
import { Input } from '../Input';
import {
  Container,
  Section,
  SearchWrap,
  StatWrap,
  StatWrapMobile,
  Stat,
  Highlight,
  Line
} from './Navbar.style';

const Navbar = props => {
  const { onInputChange, reqTook, reqFrom, term } = props;
  return(
    <Container>
      <Section>
        <SearchWrap>
          <Line />
          <Input onInputChange={onInputChange} />
        </SearchWrap>
        <StatWrapMobile>
          <Stat>Term: <Highlight>{term || 'None'}</Highlight></Stat>
          <Stat>Request From: <Highlight>{reqFrom}</Highlight></Stat>
          <Stat>Request Took: <Highlight>{reqTook}</Highlight></Stat>
        </StatWrapMobile>
      </Section>
      <Section>
        <StatWrap>
          <Stat>Requested Term: <Highlight>{term || 'None'}</Highlight></Stat>
          <Stat>Request From: <Highlight>{reqFrom}</Highlight></Stat>
          <Stat>Request Took: <Highlight>{reqTook}</Highlight></Stat>
        </StatWrap>
      </Section>
    </Container>
  )
};

export { Navbar };
