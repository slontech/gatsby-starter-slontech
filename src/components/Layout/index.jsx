import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Header from '../Header';
import './index.css';

type Props = {
  children: any,
};

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <Fragment>
      <Helmet
        title="siteInfo.site.siteMetadata.title"
        meta={[
          // TODO: update with app specific description and keywords
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header title="test" />
      <div>{children}</div>
    </Fragment>
  );
};

export default Layout;
