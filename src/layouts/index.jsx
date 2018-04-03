import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';

const TemplateWrapper = (Props) => {
  const { data, children } = Props;
  const { title } = data.site.siteMetadata;

  return (
    <div>
      <Helmet
        title="Gatsby Starter"
        meta={[
          // TODO: update with app specific description and keywords
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header title={title} />
      <div>{children()}</div>
    </div>
  );
};

// eslint-disable-next-line no-undef
export const query = graphql`
  query siteInfo {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
export default TemplateWrapper;
