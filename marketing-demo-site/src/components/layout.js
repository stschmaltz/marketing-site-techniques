import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div
          style={{
            margin: `0 auto`,
            maxWidth: '100%',
            paddingTop: 0,
            backgroundColor: 'rgba(99, 36, 148, 0.14)'
          }}
        >
          {children}
          {/* <footer>© Shane Schmaltz {new Date().getFullYear()}</footer> */}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
