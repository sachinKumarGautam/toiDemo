import React, { Component } from 'react'


const styles = {
  bannerWrapper: {
    width: '297px',
    height: '248px',
    position: 'absolute',
    right: '15.4%',
    top: '43.9%',
    cursor: 'pointer',
    backgroundColor: '#fff'
  },
  header: {
    color: 'rgb(255, 255, 255)',
    marginTop: '68px',
    textAlign: 'center',
    fontWeight: '400',
  },
  imageWrapper: {
    backgroundImage: 'url(https://static.timesprime.com/2x/toiDesktopHP3.png)',
    backgroundSize: 'cover',
    height: '150px',
    width: '100%',
    position: 'relative',
    display: 'inline-block'
  },
  cta: {
    left: '32%',
    bottom: '20px',
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
    height: '72px',
    width: '72px',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    right: '0'
  }
}

export default class banner2 extends Component {
  onClick = () => {
    console.log('dkkdlk')
    this.props.getBanner('toiDesktopHP3')
  }
  render() {
    const bannerApiState = this.props.bannerApiState
    const isDataAvailable = bannerApiState && bannerApiState.toiDesktopHP3
    return (
      <a href={isDataAvailable ? 'https://staging.timesprime.com/payment/?merchantId=TOI&showVp=true&clientSecret=MlF5N0ZKYVRrMjZ4Qko0Uw==': '#'}>
        <div style={styles.bannerWrapper} onClick={this.onClick}>
        {
           bannerApiState && bannerApiState.toiDesktopHP3 &&
           <div style={styles.imageWrapper}>
              <div id='#thumbnail' style={styles.thumbnail}></div>
             <div style={styles.header}>{bannerApiState.toiDesktopHP3.header}</div>
           </div>
        }
        {bannerApiState && bannerApiState.toiDesktopHP3 && <div id='#cta' style={styles.cta}>Pay now</div>}
      </div>
      </a>
    )
  }
}
