import {Box, Button, Icon, Typography} from "@mui/material";
import styles from './style.module.css';
import AndroidIcon from '@mui/icons-material/Android';
import IOSIcon from '@mui/icons-material/Apple';
import {projects, ProjectType} from './projects';

export default function Project() {
  return (
    <>
      <Typography mt={20} id="Projects" variant="h3" py={5}>Projects</Typography>
        <Box className={styles.ContainerProjects}>
      {projects.map((project: ProjectType, i: number) => (
        <Box key={i} className={styles.ContainerViewProject}>
          <img src={project.image} alt={project.name} className={styles.image} />
          <Box sx={{ display: 'flex', flexDirection: 'column',width: '400px', justifyContent: 'space-around', alignItems: 'center'}}>
            <Typography variant="h5">{project.name}</Typography>

            <p><strong>Tecnologias Utilizadas</strong>{`: ${project.Language}`}</p>

              <Icon className={styles.Icon}
 onClick={() => window.open(project.linkAndroid, '_blank')}
              >
                  <AndroidIcon sx={{color: 'black', width: '20px', height: '20px'}} />
              </Icon>

              <Icon className={styles.Icon}
 onClick={() => window.open(project.linkiOS, '_blank')}
              >
                  <IOSIcon sx={{color: 'black', width: '20px', height: '20px'}} />
              </Icon>
          </Box>
        </Box>
      ))}
            </Box>
    </>
  )
}