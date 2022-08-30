import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

function NavBar(){
    return(
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                <Link to="/">
                    <HomeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        HOME
                    </Typography>
                </Link>
                <Link to="/contact">
                    <ContactPageIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/contact"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        CONTACT
                    </Typography>
                </Link>
                <Link to="/company">
                    <ApartmentIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/company"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        COMPANY
                    </Typography>
                </Link>
                <Link to="/newproject">
                    <CreateNewFolderIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/newproject"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        NEW PROJEC
                    </Typography>
                </Link>
                </Toolbar>
        
        </Container>
      </AppBar>
    )
}

export default NavBar