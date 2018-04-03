import React from 'react';
import Link from 'gatsby-link';

import style from './header.module.scss';

const Header = (Props) => {
  const { title } = Props;
  return (
    <div className={style.header}>
      <div className={style.titleSection}>
        <h1 style={{ margin: 0 }}>
          <Link to="/" className={style.link}>
            {title}
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Header;
