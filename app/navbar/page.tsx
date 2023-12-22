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
                <li><Link className={styles['nav-link']} href="experience">Experience</Link></li>
                <li><Link className={styles['nav-link']} href="projects">Projects</Link></li>
                <li><Link className={styles['nav-link']} href="videography">Videography</Link></li>
                <li><Link className={styles['nav-link']} href="powerlifting">Powerlifting</Link></li>
            </ul>
        </nav>
    )
}