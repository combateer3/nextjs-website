import styles from './page.module.css'

export default function Root() {
  return (
    <main className={styles['main']}>
      <p className={styles['desc']}>
        Hi there! I'm Scott Corbat. I'm currently working as a controls engineer at HTI Cybernetics.
        I studied Computer Science at Michigan Technological University, and earned my bachelor's degree
        there. In my free time I enjoy programming, powerlifting, videography, and video games.
      </p>
    </main>
  )
}
