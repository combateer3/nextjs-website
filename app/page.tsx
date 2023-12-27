import styles from './page.module.css'
import Image from 'next/image'

export default function Root() {
  return (
    <main className={styles['main']}>
      <div className={styles['desc']}>
        <h1 className="primary-text">Intro</h1>
        <p>
          Hi there! I'm Scott Corbat. I'm currently working as a controls engineer at HTI Cybernetics.
          I studied Computer Science at Michigan Technological University, and earned my bachelor's degree
          there.
        </p>
      </div>

      <Image className={styles['portrait']} src="/images/portrait.jpg" width={1080} height={1920} alt="Scott's portrait" />
    </main>
  )
}
