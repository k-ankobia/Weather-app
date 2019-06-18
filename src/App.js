import React from 'react'
import Titles from './components/Titles'
import Form from './components/From'
import Weater from './components/Weater'

class App extends React.Component {

  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weater />
      </div>
    )
  }
}

export default App