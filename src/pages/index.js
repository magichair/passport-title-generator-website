import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PassportTitleGenerator from 'passport-title-generator'
PassportTitleGenerator.seed(new Date().getMilliseconds())

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, {PassportTitleGenerator.next().join(' ')}</h1>
    <Link to="/">Refresh</Link>
  </Layout>
)

export default IndexPage
