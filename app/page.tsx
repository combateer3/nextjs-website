'use client'

import { useContext } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { ThemeContext } from './providers/theme-provider'

export default function Root() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <main className={styles['main']}>
      <button className={styles['theme-btn']} onClick={toggleTheme}>{theme === 'dark' ? '☀️' : '🌙'}</button>
      <div className={styles['desc']}>
        <h1 className="primary-text">Intro</h1>
        <p>
          Hi there! I'm Scott Corbat. I'm currently working as a controls engineer at HTI Cybernetics.
          I studied Computer Science at Michigan Technological University, and earned my bachelor's degree
          there. In my free time I enjoy programming, powerlifting, videography, and video games.
        </p>
      </div>

      <Image className={styles['portrait']} src="/images/portrait.jpg" width={1080} height={1920} alt="Scott's portrait" />
    </main>
  )
}
