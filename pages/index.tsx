import type {NextPage} from 'next'
import Title from '../components/Title'
import Contacts from '../components/Contacts'
import NavBar from '../components/NavBar'
import Skills from '../components/Skills'
import About from '../components/About'
import Project from '../components/Projects'
import {createTheme, ThemeProvider} from '@mui/material/styles';


const Home: NextPage = () => {

    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
        typography: {
            fontFamily: 'Maven Pro',
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <NavBar/>
                <Title/>
                {/*<About/>*/}
                <Project/>
                <Skills/>
                <Contacts/>

            </ThemeProvider>
        </>
    )
}

export default Home
