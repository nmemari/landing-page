import React from 'react'
import Link from 'next/link'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
        <h1>@2024 Navid Memari</h1>
        <Link href={'https://github.com/jnip2/mdia-3109-final-project'} target='_blank'>Github Link</Link>
    </div>
  )
}
