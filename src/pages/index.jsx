import React from 'react';
import Link from 'gatsby-link';

import style from './index.module.scss';

// class IndexPage extends React.PureComponent {
const IndexPage = (QueryData) => {
  const { data } = QueryData;
  return (
    <div className={style.index}>
      <div className={style.main}>
        <h1>Hi people</h1>
        <ul>
          {Object.keys(data.allUsersJson.edges).map((key) => {
            const { name, age } = data.allUsersJson.edges[key].node;
            return (
              <li key={key}>
                {name} ({age})
              </li>
            );
          })}
        </ul>
        <p>Delete this and go build something great.</p>
        <Link to="/about">Go to About</Link>
      </div>
    </div>
  );
};

// The following query fetchs data from src/data/user.json
// eslint-disable-next-line no-undef
export const query = graphql`
  query data {
    allUsersJson {
      edges {
        node {
          name
          gender
          age
        }
      }
    }
  }
`;

export default IndexPage;
