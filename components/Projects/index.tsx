import {Box, Container, Icon, Typography} from "@mui/material";
import styles from './style.module.css';
import AndroidIcon from '@mui/icons-material/Android';
import IOSIcon from '@mui/icons-material/Apple';
import LanguageIcon from '@mui/icons-material/Language';
import {projects, ProjectType} from './projects';
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

export default function Project() {
  return (
    <>
      <Typography mt={20} id="Projects" variant="h3" py={10}>Projects</Typography>
        <Box className={styles.ContainerProjects}>
      {projects.map((project: ProjectType, i: number) => (
        <Box key={i} className={styles.ContainerViewProject}>
          <img src={project.image} alt={project.name} className={styles.image} />

            <Box className={styles.ContainerViewProjectInfo}>
                <Typography variant="h5">{project.name}</Typography>

                <p className={styles.TextInfo}><strong>Description</strong>{`: ${project.description}`}</p>

                <p className={styles.TextInfo}><strong>Languages</strong>{`: ${project.Language}`}</p>

                <Box className={styles.IconsContainer}>
                  {project.linkAndroid && (<Button
                          sx={{borderStyle: 'solid', borderColor: 'white', borderWidth: 1}}
                          className={styles.IconContainer}
                      onClick={() => window.open(project.linkAndroid, '_blank')}
                >
                    <AndroidIcon className={styles.Icon}/>
                </Button>
                  )}

                  {project.linkAndroid2 && (<Button
                          sx={{borderStyle: 'solid', borderColor: 'white', borderWidth: 1}}
                          className={styles.IconContainer}
                                                 onClick={() => window.open(project.linkAndroid, '_blank')}
                      >
                        <AndroidIcon className={styles.Icon}/>
                      </Button>
                  )}

                  {project.linkiOS && (<Button
                          sx={{borderStyle: 'solid', borderColor: 'white', borderWidth: 1}}
                          className={styles.IconContainer}
                      onClick={() => window.open(project.linkiOS, '_blank')}
                >
                    <IOSIcon className={styles.Icon}/>
                </Button>
                    )}

                  {project.link && (
                      <Button
                          sx={{borderStyle: 'solid', borderColor: 'white', borderWidth: 1}}
                          className={styles.IconContainer}
                        onClick={() => window.open(project.link, '_blank')}
                  >
                    <LanguageIcon className={styles.Icon}/>
                  </Button>
                    )}
                </Box>
            </Box>
        </Box>
      ))}
        </Box>
    </>
  )
}