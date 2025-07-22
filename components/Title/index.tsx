import {Box, Container, Typography} from "@mui/material";
import styles from './styles.module.css'
import Image from "next/image";
import {useMediaQuery} from "@mui/system";

export default function About() {
    const stack = "Software Engineer Developer"

    const SpliStack = stack.split('')

    const isMediaQuery760 = useMediaQuery('(max-width: 760px)')


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

                        <Box className={styles.SubTitleContainer}>
                            <Typography
                                className={styles.SubTitle}
                                variant="body1" fontSize={'18px'} pt={4} width={'90%'} textAlign={'justify'}>At Pontua, my focus has been on developing React Native mobile applications, enhancing user experiences for a
                                growing base of 120,000+. My approach centers around implementing CI/CD tools, which empowers the team to deploy
                                features with efficiency and reliability. With a Bachelor's degree in Advertising and Public Relations from Universidade
                                Federal de Minas Gerais and Computerer Civil Engineer, I merge technical proficiency with a deep understanding of
                                user engagement strategies.
                                <br/>
                                <br/>
                                With over 7 years of experience, my core competencies lie in crafting scalable architectures and optimizing deployment processes. Contributing to Pontua's success, I've executed projects from inception to launch, advocating for technologies that assure maintainability and future growth. Collaborative by nature, I take pride in our collective achievements which are rooted in a shared vision of driving innovation and fostering user satisfaction.</Typography>
                        </Box>
                    </Box>

                    {!isMediaQuery760 && (<Box alignItems={'center'}>
                        <Image
                            width={474}
                            height={526}
                            quality={100}
                            src={'/guyWorking.png'} alt={'guyWorking'}
                        />
                    </Box>)}


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
