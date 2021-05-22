import React from 'react';
import './Heading.module.scss';

interface IHeadingProps {
  size?: number | null;
  className: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const Heading: React.FC<IHeadingProps> = ({ children, tag = 'h1', size }) => {
  return React.createElement(tag, size ? { style: { fontSize: size } } : null, children);
};

export default Heading;
