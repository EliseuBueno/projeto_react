import { Container } from "@mui/material"
import ProjectForm from "../project/ProjectForm"

function NewProject(){
    return(
        <Container>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar o serviço</p>
            <p>Formulário:</p>
            <ProjectForm btnText="Criar Projeto"/>
        </Container>
    )
}

export default NewProject