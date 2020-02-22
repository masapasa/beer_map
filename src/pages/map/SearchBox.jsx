import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Suggestions from './Suggestions'
import SearchInput from './SearchInput'
import { getResults } from './helpers'

const SearchBoxWrapper = styled.div`
  width: 100%;
  height: 42px;

  svg {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translate(0, -50%);
    fill: gray;
  }
`

class SearchBox extends React.Component {
  state = {
    query: '',
    queryResults: []
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value }, () => {
      this.sendQuery()  
    })
  }

  hasResults = () => {
    return this.state.queryResults.length > 0
  }

  async sendQuery () {
    const { token, country } = this.props
    try {
      const queryResults = await getResults(this.state.query, token, country)
      if (queryResults.error) throw Error(queryResults.error)
      this.setState({queryResults: queryResults.response.features})
    } catch (e) {
      console.log('error')
    }
  }

  render() {
    return (
      <SearchBoxWrapper>
        <SearchInput
          hasResults={this.hasResults()}
          value={this.state.query }
          handleInputChange={this.handleInputChange}
        />
        <Suggestions 
          places={this.state.queryResults}
          hasResults={this.hasResults()}
        />
      </SearchBoxWrapper>
    )
  }
}

export default SearchBox
