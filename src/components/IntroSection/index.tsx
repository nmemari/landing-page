import React from 'react'

import styles from './IntroSection.module.css'

import Spline from '@splinetool/react-spline'

export default function IntroSection() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h1>A Social Networking Platform Like No Other</h1>
            <p>share your passions and work with other like minded individuals and build your personal portfolio!</p>
            <button>Get Started</button>
        </div>
        <div className={styles.right}>
        <Spline scene="https://prod.spline.design/cFWLQLPhiBQt-1To/scene.splinecode" />
        </div>
    </div>
  )
}
