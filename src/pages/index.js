import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PassportTitleGenerator from 'passport-title-generator'
import Select from "react-dropdown-select"
PassportTitleGenerator.seed(new Date().getMilliseconds())
const originalData = PassportTitleGenerator.originalData;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.regenerateTitle = this.regenerateTitle.bind(this);
    this.lockAdj = this.lockAdj.bind(this);
    this.lockNoun = this.lockNoun.bind(this);
    this.unlock = this.unlock.bind(this);
    this.setAdj = this.setAdj.bind(this);
    this.setNoun = this.setNoun.bind(this);
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

  setAdj(values) {
    this.setState({
      currentTitle: [values[0].name, this.state.currentTitle[1]]
    })
  }

  setNoun(values) {
    this.setState({
      currentTitle: [this.state.currentTitle[0], values[0].name]
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
        <Select
          searchable
          dropdownHandle
          options={originalData.adjs.map(v => {return {"name":v}})}
          values={[{"name":this.state.currentTitle[0]}]}
          valueField="name"
          searchBy="name"
          labelField="name"
          disabled={this.state.adjLocked}
          onChange={(values) => this.setAdj(values)}
        />
        <Select
          searchable
          dropdownHandle
          options={originalData.nouns.map(v => {return {"name":v}})}
          values={[{"name":this.state.currentTitle[1]}]}
          valueField="name"
          searchBy="name"
          labelField="name"
          disabled={this.state.nounLocked}
          onChange={(values) => this.setNoun(values)}
        />
        <button onClick={this.regenerateTitle}>Regenerate</button>
        <button onClick={this.lockAdj}>Lock Adj</button>
        <button onClick={this.lockNoun}>Lock Noun</button>
        <button onClick={this.unlock}>Unlock</button>
      </Layout>
    )
  }
}

export default IndexPage
