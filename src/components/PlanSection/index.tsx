import React from 'react'

import styles from './PlaySection.module.css'

import Spline from '@splinetool/react-spline'

export default function PlanSection() {
  return (
    <div className={styles.container}>
        <h1>Get The Tailored Experience You Desire With Our Plans</h1>
        <div className={styles.card_container}>
            <div className={styles.card} style={{ borderColor: '#1A0503'}}>
                <div><Spline scene="https://prod.spline.design/iexrRO02dJq1C8Wt/scene.splinecode" /></div>
                <h1>Webby Classic</h1>
                <p>This is the base Webby experience all the core features are available for our users to enjoy</p>
            </div>
            <div className={styles.card} style={{ borderColor: '#DD4923'}}>
                <div><Spline scene="https://prod.spline.design/V20psGUshDax3rAa/scene.splinecode" /></div>
                <h1>Webby Pro</h1>
                <p>Gain access to premium communities and be more visible to potential employers</p>
            </div>
            <div className={styles.card} style={{ borderColor: '#F9B337'}}>
                <div><Spline scene="https://prod.spline.design/syzrASbCZExvkBVh/scene.splinecode" /></div>
                <h1>Webby Business</h1>
                <p>This plan is for any businesses that want to seek talent in the Webby user base.</p>
            </div>
        </div>
    </div>
  )
}