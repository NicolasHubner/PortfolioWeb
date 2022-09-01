import { Typography } from "@mui/material";
import styles from './contacts.module.css';

export default function Contacts() {
  return (
    <>
      <Typography id="Contatos" variant="h4" pt={5}>Contatos</Typography>

      <a href="https://github.com/NicolasHubner" target="_blank" rel="noopener noreferrer">
        <img className={styles.Icon} src="https://img.icons8.com/plasticine/100/undefined/github.png" />
      </a>
      <a href="https://www.linkedin.com/in/nicolashubner/" target="_blank" rel="noopener noreferrer">
        <img className={styles.Icon} src="https://img.icons8.com/color/48/undefined/linkedin-circled--v1.png" />
      </a>
      <a href="mailto:hubnersantos15@gmail.com" target="_blank" rel="noopener noreferrer">
        <img className={styles.Icon} src="https://img.icons8.com/color/48/undefined/gmail-login.png" />
      </a>
    </>
  )
}