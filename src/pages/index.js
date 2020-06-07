import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Menu from "../components/menu"

const IndexPage = () => (
  <Layout>
    <Menu/>
    <SEO title="Home" />
    <h1>Hi people!</h1>
    <p>This is supposed to be a blog.</p>
    <p>Just trying Gatsby for the first time.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>#BlackLivesMatter</p>
  </Layout>
)

export default IndexPage
