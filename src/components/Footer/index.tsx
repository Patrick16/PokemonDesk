import React from 'react';

import s from './Footer.module.scss';

const Footer: React.FC = ({ children }) => {
  return (
    <div className={s.root}>
      <h4>{children}</h4>
    </div>
  );
};

export default Footer;
