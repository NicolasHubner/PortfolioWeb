import { Box, Typography } from "@mui/material";
import style from './style.module.css'
import { skillsArray } from "./skillsArray";

export default function Skills() {
  interface ISkill {
    name: string;
    image: string;
    href: string;
  }

  return (
    <>
      <Typography id="Skills" variant="h3" py={5}>Skills</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '80%', maxWidth: '650px' ,flexWrap: 'wrap', justifyContent: 'space-between',alignItems: 'center', margin: '0 auto', marginY: '50px'}}>
        {skillsArray.map((skill: ISkill, index: number) => (
          <a key={index} href={skill.href} target="_blank" rel="noopener noreferrer">
            <Box className={style.tag} sx={{ display: 'flex', flexDirection: 'column', width: '30%', height: '140px', padding: '10px', marginBottom: '20px', alignItems: 'center'}}>
              <img src={skill.image} alt={skill.name} width="80" />
              <Typography sx={{marginTop: '10px'}}>{skill.name}</Typography>
            </Box>
          </a>
        ))}
      </Box>
      <Typography variant="h4" py={5}>Linguagens mais usadas </Typography>.
      <img className="image" src="https://github-readme-stats.vercel.app/api/top-langs/?username=NicolasHubner&amp;theme=great-gatsby&amp;bg_color=000312&amp;border_color=000312&amp;hide_title=true&amp;layout=compact" alt="Linguagens mais usadas" />
    </>
  )
}