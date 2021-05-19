import React from 'react';

import s from './Footer.module.scss';

const Footer: React.FC = ({ children }) => {
  return (
    <div className={s.root}>
      <div className={s.signature}>
        <h4>{children}</h4>
      </div>
    </div>
  );
};

export default Footer;
