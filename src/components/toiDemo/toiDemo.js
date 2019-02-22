import React, { Component } from 'react'
import Banner1 from './banner1'
import Banner2 from './banner2'
import Banner3 from './banner3'
import Banner4 from './banner4'

const styles = {
    pageWrapper: {
        backgroundImage: 'url(https://static.timesprime.com/2x/toi-page.jpg)',
        width: '1440px',
        height: '2765px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
    }
}


export default class toiDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // banner1: {},
        }
    }

    getBanner = (slotId) => {
        fetch("https://middleware.timesprime.com/mw/userFeed/getStaticProductHook", {
            body: `{\"slotId\":"${slotId}", \"platform\":\"Web\",\"planStatus\":\"0\",\"location\":\"gurgaon\",\"utmSource\":\"TOI\", \"userId\" : \"121424412\"}`,
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST"
          }).then((response) => {
              return response.json();
          }).then((response) => {
            console.log('response', response)
            this.setState({
                [slotId]: response
            })
        })
    }

  render() {
    return (
      <div style={styles.pageWrapper}>
          <div id={'banner1'}><Banner1 getBanner={this.getBanner} bannerApiState={this.state}/></div>
          <div id={'banner2'}><Banner2 getBanner={this.getBanner} bannerApiState={this.state}/></div>
          <div id={'banner3'}><Banner3 getBanner={this.getBanner} bannerApiState={this.state}/></div>
          <div id={'banner4'}><Banner4 getBanner={this.getBanner} bannerApiState={this.state}/></div>
      </div>
    )
  }
}
