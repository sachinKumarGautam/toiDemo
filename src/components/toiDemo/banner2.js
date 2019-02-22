import React, { Component } from 'react'


const styles = {
  bannerWrapper: {
    width: '298px',
    height: '570px',
    position: 'absolute',
    right: '15.3%',
    top: '17%',
    cursor: 'pointer'
  },
  header: {
    color: 'rgb(255, 255, 255)',
    marginTop: '68px',
    textAlign: 'center',
    fontWeight: '400',
  },
  imageWrapper: {
    backgroundImage: 'url(https://static.timesprime.com/2x/toiDesktopHP2.png)',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cta: {
    position: 'absolute',
    bottom: '20px',
    width: '116px',
    color: '#ffffff',
    height: '50px',
    cursor: 'pointer',
    display: 'inline-block',
    padding: '18px 0',
    fontSize: '12px',
    boxShadow: '0 6px 6px 0 rgba(0, 0, 0, 0.2)',
    fontWeight: '500',
    borderRadius: '50px',
    letterSpacing: '0.9px',
    textTransform: 'uppercase',
    backgroundImage: 'linear-gradient(#ff6661 100%, #ff6661 100%)',
    textAlign: 'center'
  },
  thumbnail: {
    backgroundImage: 'url(https://static.timesprime.com/2x/thumbImg.png)',
    backgroundSize: 'contain',
    height: '95px',
    width: '95px',
    /* position: 'absolute' */
    backgroundRepeat: 'no-repeat',
    marginTop: '54px'
  }
}

export default class banner2 extends Component {
  onClick = () => {
    console.log('dkkdlk')
    this.props.getBanner('toiDesktopHP2')
  }
  render() {
    const bannerApiState = this.props.bannerApiState
    const isDataAvailable = bannerApiState && bannerApiState.toiDesktopHP2
    return (
      <a href={isDataAvailable ? 'https://staging.timesprime.com/payment/?merchantId=TOI&showVp=true&clientSecret=MlF5N0ZKYVRrMjZ4Qko0Uw==': '#'}>
        <div style={styles.bannerWrapper} onClick={this.onClick}>
        {
           bannerApiState && bannerApiState.toiDesktopHP2 &&
           <div style={styles.imageWrapper}>
             <div style={styles.header}>{bannerApiState.toiDesktopHP2.header}</div>
             <div id='#thumbnail' style={styles.thumbnail}></div>
             <div id='#cta' style={styles.cta}>Pay now</div>

           </div>
        }
      </div>
      </a>
    )
  }
}
