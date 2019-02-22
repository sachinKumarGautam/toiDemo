import React, { Component } from 'react'
import Main from './main'
import Header from './header'
import Footer from './footer'
import withRoot from '../withRoot.js'
import ToiDemo from './toiDemo'
class App extends Component {
  render () {
    return (
      <div>
        {/* <Header />
        <Main />
        <Footer /> */}
        <ToiDemo/>
      </div>
    )
  }
}

export default withRoot(App)
