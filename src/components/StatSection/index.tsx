import React from 'react'

import styles from './StatSection.module.css'

export default function StatSection() {
  return (
    <div className={styles.container}>
        <h1>Expand your network and find opportunities that align with your passions</h1>
        <div className={styles.stat_container}>
            <div className={styles.stat}>
                <h1>1 Million +</h1>
                <p>Users</p>
            </div>
            <div className={styles.stat}>
                <h1>1000 +</h1>
                <p>Communities</p>
            </div>
            <div className={styles.stat}>
                <h1>100,000 +</h1>
                <p>Registered Employers</p>
            </div>
        </div>
    </div>
  )
}
