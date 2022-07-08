import {  graphql, Link } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import Img from "gatsby-image"

export default function Home({data}) {
 console.log(data);  
  
  return (

    <Layout>            
          <section className={styles.header}>  
           
      <div>
          <h2>Designs</h2>
          <h3>Develop& Deploy</h3>
          <p>Ux Designer&web developer </p>
          <Link className={styles.btn} to="/work">My Portfolio Projects</Link>
      </div>
       {/* <img src="/banner.png" alt="site banner" style={{maxWidth:'100%'}}/> */}
       <Img fluid={data.file.childImageSharp.fluid}/>
    
   </section>
   </Layout>

  )
}  

export const query=graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
