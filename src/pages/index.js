import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

    {data.allGoogleSheetIceRinkStatusRow.edges.map(({ node }, index) => (
      <div className="iceRink" key={index}>
        <p>
          {node.location} -{' '}
          {node.icerink === 'Hockey' ? (
            <span className="fal fa-hockey-sticks" />
          ) : (
            <span className="fal fa-ice-skate" />
          )}{' '}
          - {node.open}
        </p>
      </div>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allGoogleSheetIceRinkStatusRow {
      edges {
        node {
          location
          icerink
          open
          address
        }
      }
    }
  }
`
