import React, { Component } from 'react'

import HelloWorldComponent from 'hello-world'

export default class App extends Component {
  render () {
    return (
      <div>
        <HelloWorldComponent text='Modern React component module' />
      </div>
    )
  }
}
