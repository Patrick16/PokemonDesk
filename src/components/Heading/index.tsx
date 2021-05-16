import React, { ReactElement } from 'react';
import './Heading.module.scss';

interface IHeadingProps {
  size: number | null;
  tag: string | null;
}

const getItem = ({ children, tag, size }: React.PropsWithChildren<IHeadingProps>): ReactElement => {
  let localTag: string = 'p';

  if (tag) {
    return React.createElement(tag, null, children);
  }
  if (size) {
    switch (size) {
      case 72:
        localTag = 'h1';
        break;
      case 64:
        localTag = 'h2';
        break;
      case 36:
        localTag = 'h3';
        break;
      case 24:
        localTag = 'h4';
        break;
      case 18:
        localTag = 'h5';
        break;
      case 12:
        localTag = 'h6';
        break;
      case 16:
        localTag = 'p';
        break;
    }
  }
  return React.createElement(localTag, null, children);
};

const Heading: React.FC<IHeadingProps> = (parameters) => {
  return getItem(parameters);
};

export default Heading;
