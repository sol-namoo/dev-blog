import { Link, StaticQuery, graphql } from 'gatsby';
import React from 'react';
import Post from '../../models/post';
import PostSearch from '../post-search';
import './style.scss';

function PageHeader({ siteTitle, isHomePage }) {
  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            edges {
              node {
                frontmatter {
                  title
                  categories
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        // <header className="page-header-wrapper">
        //   <div className="page-header">
        //     <div className="front-section">
        //       <Link className="link" to="/">
        //         {siteTitle}
        //       </Link>
        //     </div>
        //     <div className="trailing-section">
        //       <Link className="link" to="/about">
        //         about
        //       </Link>
        //       <Link className="link" to="/posts">
        //         posts
        //       </Link>
        //       <PostSearch
        //         posts={data.allMarkdownRemark.edges.map(({ node }) => new Post(node, true))}
        //       />
        //     </div>
        //   </div>
        // </header>
        <header>
          <div className="page-header-wrapper">
            <div className="page-header">
              <div className="front-section">
                <Link className="link" to="/">
                  {siteTitle}
                </Link>
              </div>
              <div className="trailing-section">
                <Link className="link" to="/about">
                  about
                </Link>
                <Link className="link" to="/posts">
                  posts
                </Link>
                <PostSearch
                  posts={data.allMarkdownRemark.edges.map(({ node }) => new Post(node, true))}
                />
              </div>
            </div>
          </div>
          {isHomePage && (
            <div className="home-header-content">
              <h1 className="title">Frontend Development & Beyond</h1>
              <p className="subtitle">
                Crafting modern web experiences with clean code and thoughtful design
              </p>
            </div>
          )}
        </header>
      )}
    />
  );
}

export default PageHeader;
