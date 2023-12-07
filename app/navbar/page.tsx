'use client'

import React from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx"

import styles from './navbar.module.css'

export default function NavBar() {
    const [mobileMenuVisible, setMobileMenuVisible] = React.useState(false)

    function onMobileMenuClick() {
        setMobileMenuVisible(!mobileMenuVisible)
    }

    return (
        <nav className={styles['navbar']}>
            <p className={styles['nav-title']}><Link href="/">Scott Corbat</Link></p>
            <button onClick={onMobileMenuClick} className={styles['mobile-menu-icon']}><RxHamburgerMenu/></button>
            <ul className={styles['link-list']} data-visible={mobileMenuVisible}>
                <li><Link href="about">About</Link></li>
                <li><Link href="experience">Experience</Link></li>
                <li><Link href="videography">Videography</Link></li>
            </ul>
        </nav>
    )
}