import React from 'react';
import { Copy } from './Hashtag.style';

const Hashtag = ({ tagName }) => {
  return(
    <Copy>
      {`#${tagName}`}
    </Copy>
  )
};

export { Hashtag };
