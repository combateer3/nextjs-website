import styles from '@/app/experience/experience.module.css';

export default function Experience() {
    return (
        <main className={styles['main']}>
            <h1 className={`primary-text page-header ${styles['page-title']}`}>My Experience</h1>
            <ol className={styles['timeline']}>
                <li className={styles['timeline-item']}>
                    <h2>Jan. 2022 - Present</h2>
                    <h4>Controls Engineer | HTI Cybernetics, Inc.</h4>
                    <div className={styles['timeline-item-body']}>
                        <p>
                            At HTI, I did PLC programming for automated systems, error proofing systems, and tooling. I gained familiarity
                            with both Allen-Bradley and Omron PLCs. I was responsible for installing and supporting some of HTI's tooling
                            at General Motor's plant in Springhill, TN. The following are certifications I've earned at HTI:
                        </p>
                        <ul>
                            <li>GCCS-2 (Global Common Controls Standard)</li>
                            <li>GM EPP (Error Proofing Platform)</li>
                            <li>GM SEP (Scaleable Error Proofing)</li>
                            <li>CVP Vision Professional (Basic)</li>
                        </ul>
                    </div>
                </li>

                <li className={styles['timeline-item']}>
                    <h2>May - Sept. 2021</h2>
                    <h4>Software Engineer Intern | RIIS</h4>
                    <div className={styles['timeline-item-body']}>
                        <p>
                            RIIS gave me a second internship oppurtunity. During this time I learned mobile app development for Apple devices, and using the DJI drone API
                            to control a drone. My project was creating an iPhone app that would allow a user to draw a rectangle around a parking lot on a map. The drone would
                            then fly an automated route to scan the parking lot and count the number of empty/available parking spaces. This image analysis was achieved through
                            machine learning.
                        </p>
                    </div>
                </li>

                <li className={styles['timeline-item']}>
                    <h2>June - Sept. 2020</h2>
                    <h4>Software Engineer Intern | RIIS</h4>
                    <div className={styles['timeline-item-body']}>
                        <p>
                            During my first internship at RIIS, I took courses on the Angular web framework, Spring Boot, and mobile app development for Android. My primary project
                            was a full stack web app for employees to submit PTO requests. I also created an Android app for the same purchase that accessed the same database.
                        </p>
                    </div>
                </li>
            </ol>
        </main>
    )
}