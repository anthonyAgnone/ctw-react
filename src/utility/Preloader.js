import React, { Fragment } from 'react';
import { Circle2 } from 'react-preloaders';

export default ({ children }) => {
  return (
    <Fragment>
      <Circle2 color={'#FFFFFF'} bgColor={'#3BCBFF'} time={1400} />
      {children}
    </Fragment>
  );
};
