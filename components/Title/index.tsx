import { Box, Container, Typography } from "@mui/material";
import styles from './styles.module.css'

export default function About() {
  const stack = "Desenvolvedor Full Stack"
  const SpliStack = stack.split('')
  console.log(SpliStack.length)
  // const SpliStack = stack.split(' ');
  return (
    <>
      <section className={styles.Container}>
        <Typography variant="h3" pt={10}>Nicolas Hübner Santos</Typography>
        {/* <Typography className={styles.waviy} variant="h5" py={1}>Desenvolver Full Stack</Typography> */}
        <div className={styles.waviy}>

        {SpliStack.map((item, i) =>(
          <span key={i} className={styles[`word${i + 1}`]}>{item}&nbsp;</span>
          ))}
          </div>
        {/* <div className={styles.body}>

          <h1 className={styles.h1}>
            Programador
            <div className={styles.message}>
              {SpliStack.map((item, i) => (
                <div key={i} className={styles[`word${i + 1}`]}>{item}</div>
              ))}
            </div>
          </h1>
        </div>*/}
        <div>
          <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className={styles.parallax}>
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="#1a1a1a7e" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="#0f0f0f7f" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="#1111114c" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#black" />
            </g>
          </svg>
        </div>
      </section>
    </>
  )
}