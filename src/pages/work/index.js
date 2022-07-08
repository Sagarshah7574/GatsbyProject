import { graphql, Link} from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import Img from "gatsby-image"

export default function work({data}) {
  console.log(data)
   
  const works=data.works.nodes
  const contact=data.contact.siteMetadata.contact
  return (
     <Layout>
    <div className={styles.portfolio}>
        <h1>Portfolio</h1>
        <h3>Projects and Websites I've created</h3>
        <div className={styles.works}>
          {works.map(work=>(
            <Link to={"/works/"+work.frontmatter.slug} key={work.id}>
              <div>
                <Img fluid={work.frontmatter.thumb.childImageSharp.fluid}/>
                <h3>{work.frontmatter.title}</h3>
                <p>{work.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
    </div>
    <div>
     <p>Like what you see?Email me at {contact} for a quote!</p>
    </div>
    </Layout>
  )
}


 //export  page query//
 export const query=graphql`
 query workpage {
  works: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`