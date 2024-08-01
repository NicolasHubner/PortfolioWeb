import { Box, Button, Typography } from "@mui/material";
import styles from './style.module.css';
import { projects } from './projects';

interface IProject {
  name: string;
  Language: string;
  image: string;
  link: string;
}

export default function Project() {
  return (
    <>
      <Typography mt={20} id="Projects" variant="h3" py={5}>Projects</Typography>
      {projects.map((project: IProject, i: number) => (
        <Box key={i} sx={{ display: 'flex', flexDirection: 'row', marginY: 10, justifyContent: 'center'}}>
          <img src={project.image} alt={project.name} className={styles.image} />
          <Box sx={{ display: 'flex', flexDirection: 'column',width: '400px', justifyContent: 'space-around', alignItems: 'center'}}>
            <Typography variant="h5">{project.name}</Typography>
            <p><strong>Tecnologias Utilizadas</strong>{`: ${project.Language}`}</p>
            <Button sx={{backgroundColor: 'white', width: '60%'}} href={project.link}>Link to{` ${project.name}`}</Button>
          </Box>
        </Box>
      ))}
    </>
  )
}