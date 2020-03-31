import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PassportTitleGenerator from 'passport-title-generator'
PassportTitleGenerator.seed(new Date().getMilliseconds())

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.regenerateTitle = this.regenerateTitle.bind(this);
    this.state = {
      currentTitle: PassportTitleGenerator.next().join(' ')
    };
  }

  regenerateTitle() {
    this.setState({
      currentTitle: PassportTitleGenerator.next().join(' ')
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi, {PassportTitleGenerator.next().join(' ')}</h1>
        <button onClick={this.regenerateTitle}>Regenerate</button>
      </Layout>
    )
  }
}

export default IndexPage
