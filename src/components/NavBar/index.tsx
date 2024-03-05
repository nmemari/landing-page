import React from 'react'
import Image from 'next/image'

import styles from './NavBar.module.css'

import Logo from "../../../public/webby-logo.svg";

export default function NavBar() {
  return (
    <header className={styles.container}>
        <div className={styles.logo}>
            <Image src={Logo} width={60} height={60} alt='webby-logo'/>
            <h1>Webby</h1>
        </div>
        <button>Sign up</button>
    </header>
  )
}