import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <Typography id="Sobre" variant="h3" pt={10}>Sobre</Typography>
      <Box sx={{ typography: 'body1', width: '60%', textAlign: 'justify', margin: '0 auto', marginBottom: '80px', marginTop: '100px' }}>
        &nbsp;&nbsp;&nbsp;&nbsp;Ao longo da minha jornada me deparei com muitas áreas: engenharia, medicina, publicidade e um pouco do ramo alimentício.<br></br><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;Atualmente, faço publicidade e propaganda em que me aprofundei em alguns conhecimentos de marketing e Adobe PhotoShop, e estudo Desenvolvimento WEB na Trybe. No curso de programação já aprendi sobre HTML, CSS, JavaScript, React, Bash, Jest, e GIT. Além disso, foram passadas alguns frameworks de estilização como Bootstrap, Material UI e Tailwind.
        <br></br><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;Estamos entrando no Back-End no meu estudo da Trybe se iniciando em Docker, SQL, Node.js, POO, SOLID, MongoDB.
        <br></br><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;Até então já tivemos o conhecimento de Docker e SQL ensinado nesta jornada de Back-End.
        <br></br><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;Em concomitância a isso, realizei alguns projetos usando TypeScript, Redux(RTK), Styled Components, Yarn mais focados na área de Front End e no Back-End procurei conhecer mais sobre NodeJs, MongoDB, API Rest, Express, Moongose, MicroServiço (noção básica) e a utilização do Postman. Ademais, atualmente estou me aprofundando ainda mais no ecossistema do React e estudando NextJs.
        <br></br><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;Essa jornada está sendo emocionante! Vamo que vamo!
      </Box>
    </>
  )
}