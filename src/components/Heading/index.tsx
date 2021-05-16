import React, { PropsWithChildren, ReactElement } from 'react';

interface IHeadingProps {
  size: number | null;
  tag: string | null;
}

const getItem = (content: PropsWithChildren<IHeadingProps>, prop: IHeadingProps): ReactElement => {
  if (prop.tag) {
    return React.createElement(prop.tag, content);
  }
  if (prop.size) {
    switch (prop.size) {
      case 72:
        return React.createElement('h1', content);
      case 64:
        return React.createElement('h2', content);
      case 36:
        return React.createElement('h3', content);
      case 24:
        return React.createElement('h4', content);
      case 18:
        return React.createElement('h5', content);
      case 12:
        return React.createElement('h6', content);
      case 16:
      default:
        return React.createElement('p', content);
    }
  }

  return React.createElement('p', content);
};

const Heading: React.FC<IHeadingProps> = (children, parameters) => {
  return getItem(children, parameters);
};

export default Heading;
