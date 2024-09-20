import {Box, Container, Typography} from "@mui/material";
import styles from './style.module.css'
import { skillsArray } from "./skillsArray";

export default function Skills() {
  interface ISkill {
    name: string;
    image: string;
    href: string;
  }

  return (
    <Container>
      <Typography id="Skills" variant="h3" py={10}>Skills</Typography>
      <Box className={styles.ContainerSkills}>
        {skillsArray.map((skill: ISkill | any, index: number) => (
          <Box className={styles.ViewSkill} key={index}>
            <a  href={skill.href} target="_blank" rel="noopener noreferrer">
              <img src={skill.image} alt={skill.name} width="80" />
            </a>
              <Typography sx={{ marginTop: '10px' }}>{skill.name}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  )
}