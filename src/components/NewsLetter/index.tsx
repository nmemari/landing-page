import React from 'react'

import styles from './NewsLetter.module.css'

export default function NewsLetter() {
  return (
    <div className={styles.container}>
        <h1>Sign up for our Newsletter</h1>
        <h3>To get the latest updates on Webby</h3>
        <form className={styles.form_container}>
            <input type="text" placeholder="Your Email Address..."/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
