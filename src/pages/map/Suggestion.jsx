import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 18px;
  padding: 1rem 1.5rem 1rem 1.5rem;
  cursor: pointer;
  width: 100%;

  &:hover {
    color: white;
    background-color: #58a;
  }
`

const Suggestion = ({place_name}) => (
  <Wrapper>{place_name}</Wrapper>
)

export default Suggestion
