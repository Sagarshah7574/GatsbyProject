const path=require('path')

exports.createPages=async({graphql,actions})=>{
  
  const {data}=await graphql(`
  query work {
    allMarkdownRemark {
     nodes {
       frontmatter {
         slug
         
       }
       
     }
   }
 }
  `)
   
  data.allMarkdownRemark.nodes.forEach(node =>{
   
    actions.createPage({
        path:'/works/' + node.frontmatter.slug,
        component:path.resolve('./src/templets/project-details.js'),
        context:{slug: node.frontmatter.slug}

    })   
  }) 
      
  
   
}