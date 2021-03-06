/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./header"
import SEO from "./seo"
//import "./layout.css"

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const pageTitle = props.pageContext?.frontmatter?.title;

  return (
    <>
      <SEO title={pageTitle} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main>
          {props.children}
        </main>
        <footer>
          © {new Date().getFullYear()} {data.site.siteMetadata.title}
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
