import Link from 'next/link'

import styles from './navbar.module.css'

export default function NavBar() {
    return (
        <nav className={styles['navbar']}>
            <p><Link href="/">Scott Corbat</Link></p>
            <ul className={styles['link-list']}>
                <li><Link href="about">About</Link></li>
                <li><Link href="experience">Experience</Link></li>
                <li><Link href="videography">Videography</Link></li>
            </ul>
        </nav>
    )
}