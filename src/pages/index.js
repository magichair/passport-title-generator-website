import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PassportTitleGenerator from 'passport-title-generator'
PassportTitleGenerator.seed(new Date().getMilliseconds())
const originalData = PassportTitleGenerator.originalData;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.regenerateTitle = this.regenerateTitle.bind(this);
    this.lockAdj = this.lockAdj.bind(this);
    this.lockNoun = this.lockNoun.bind(this);
    this.unlock = this.unlock.bind(this);
    this.state = {
      currentTitle: PassportTitleGenerator.next(),
      adjLocked: false,
      nounLocked: false
    };
  }

  regenerateTitle() {
    this.setState({
      currentTitle: PassportTitleGenerator.next()
    })
  }

  lockAdj() {
    PassportTitleGenerator.newData({adjs:[this.state.currentTitle[0]], nouns:originalData.nouns})
    PassportTitleGenerator.seed(new Date().getMilliseconds())
    this.setState({adjLocked: true, nounLocked: false})
  }

  lockNoun() {
    PassportTitleGenerator.newData({adjs:originalData.adjs, nouns:[this.state.currentTitle[1]]})
    PassportTitleGenerator.seed(new Date().getMilliseconds())
    this.setState({adjLocked: false, nounLocked: true})
  }

  unlock() {
    PassportTitleGenerator.newData(originalData);
    PassportTitleGenerator.seed(new Date().getMilliseconds())
    this.setState({adjLocked: false, nounLocked: false})
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1 color={this.state.adjLocked ? "grey" : "black"}>{this.state.currentTitle[0]}</h1> <h1 color={this.state.nounLocked ? "grey" : "black"}>{this.state.currentTitle[1]}</h1>
        <button onClick={this.regenerateTitle}>Regenerate</button>
        <button onClick={this.lockAdj}>Lock Adj</button>
        <button onClick={this.lockNoun}>Lock Noun</button>
        <button onClick={this.unlock}>Unlock</button>
      </Layout>
    )
  }
}

export default IndexPage
