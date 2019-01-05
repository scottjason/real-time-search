import React from 'react';
import { HeartWrap, InstagramWrap, DownloadWrap, SearchWrap } from './Icon.style';

const wrappers = {
  HeartWrap,
  InstagramWrap,
  DownloadWrap,
  SearchWrap,
};

const Icon = ({ Component, wrapper }) => {
  const Wrapper = wrappers[wrapper];
  return(
    <Wrapper>
      <Component />
    </Wrapper>
  )
};

export { Icon };
