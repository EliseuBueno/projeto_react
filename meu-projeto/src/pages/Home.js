import guitar from '../img/img5.jpg'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import LinkButton from '../components/layout/LinkButton';

function Home(){
    return(
        <Container>
            <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box gridColumn="span 12">
                        <h1 align="center">
                            Bem vindo ao <span>Bueno</span>
                        </h1>
                        <p align="justify">Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!Comece a gerenciar seus projetos agora mesmo!</p>
                        <ImageListItem>
                            <img
                                src={guitar}
                                alt='center'
                                loading="lazy"
                            />
                        </ImageListItem>
                        <br></br><br></br><br></br>
                        <LinkButton to="/newproject" text="Criar Projeto" endIcon={<SendIcon />}/>
                        <br></br><br></br><br></br>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Home