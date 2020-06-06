import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Menu from '../components/menu'

const About=()=> {
    return (
        <Layout>
        <Menu/>
        <SEO title="About us" />
        <div>
                <h1>About us</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eius unde similique debitis fugit consequuntur repudiandae, quas ea quaerat obcaecati soluta totam iure magni ex quisquam iusto cumque cupiditate a praesentium! Ipsa dolore iure id obcaecati maiores sit voluptates. Delectus.</p>
       </div>
      </Layout>
        
    )
}
export default About