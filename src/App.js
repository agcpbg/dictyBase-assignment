import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import PageWrapper from './styled-components/PageWrapper'
import PageHeader from './styled-components/PageHeader'
import InputContainer from './InputContainer'
import ListContainer from './ListContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PageWrapper>
          <PageHeader>Manage my items</PageHeader>
          <InputContainer />
          <ListContainer />
        </PageWrapper>
      </Provider>
    )
  }
}

export default App;
