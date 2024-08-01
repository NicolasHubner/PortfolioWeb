import {Box, Container, Typography} from "@mui/material";
import styles from './styles.module.css'
import Image from "next/image";

export default function About() {
    const stack = "Software Engineer Developer"

    const SpliStack = stack.split('')

    return (
        <>
            <section className={styles.Container} id="About">
                <Container className={styles.ContainerTitle}>
                    <Box>

                        <Box className={styles.Title}>
                            <Typography variant="h3" style={{fontWeight: 600}}>Hey folks, I'm Nicolas
                                Hübner</Typography>

                            <div className={styles.waviy}>
                                {SpliStack.map((item, i) => (
                                    <span key={i} className={styles[`word${i + 1}`]}>{item}&nbsp;</span>
                                ))}
                            </div>
                        </Box>

                        <Box>
                            <Typography
                                variant="body1" fontSize={'18px'} pt={4} width={'90%'} textAlign={'justify'}>Originally
                                from the United States, the educational and professional journey has taken through
                                diverse fields like engineering, medicine, and marketing. In a previous role,
                                collaborating with a company that handled a $24k monthly invoice and served 4,000 users
                                significantly improved software development skills, particularly in React. Additionally,
                                it provided valuable insights into managing large-scale operations and addressing
                                diverse user needs.
                                Today, leading mobile app development for one of Brazil's top three accounting firms
                                involves serving 120,000 users. This role offers an opportunity to apply expertise in
                                React to enhance user experience and drive company growth.</Typography>
                        </Box>
                    </Box>

                    <Box alignItems={'center'}>
                        <Image
                            objectFit={'cover'}
                            width={474}
                            height={526}
                            quality={100}
                            src={'/guyWorking.png'} alt={'guyWorking'}
                        />
                    </Box>


                </Container>


                {/*<div>*/}
                {/*  <svg className={styles.waves}*/}
                {/*    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">*/}
                {/*    <defs>*/}
                {/*      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />*/}
                {/*    </defs>*/}
                {/*    <g className={styles.parallax}>*/}
                {/*      <use xlinkHref="#gentle-wave" x="48" y="0" fill="#1a1a1a7e" />*/}
                {/*      <use xlinkHref="#gentle-wave" x="48" y="3" fill="#0f0f0f7f" />*/}
                {/*      <use xlinkHref="#gentle-wave" x="48" y="5" fill="#1111114c" />*/}
                {/*      <use xlinkHref="#gentle-wave" x="48" y="7" fill="#black" />*/}
                {/*    </g>*/}
                {/*  </svg>*/}
                {/*</div>*/}
            </section>
        </>
    )
}