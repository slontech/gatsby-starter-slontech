import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import style from './index.module.scss';
import Layout from '../components/Layout';

const IndexPage = QueryData => {
  const { data } = QueryData;
  return (
    <Layout>
      <div className={style.index}>
        <div className={style.main}>
          <ul>
            {Object.keys(data.allUsersJson.edges).map(key => {
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
    </Layout>
  );
};

// The following query fetches data from src/data/user.json
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
