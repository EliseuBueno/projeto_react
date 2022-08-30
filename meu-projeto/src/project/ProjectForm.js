import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Input from '../components/form/Input';
import SelectForm from '../components/form/SelectForm';
import SubmitButton from '../components/form/SubmitButton';

function ProjectForm({btnText}){
    return(
        <FormControl>
            <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box gridColumn="span 3">
                        <div>
                            <Input
                                helperText="Insira o nome do projeto"
                                id="Name"
                                label="Project"
                                type="text"
                            />
                        </div>
                    </Box>
                    <Box gridColumn="span 3">
                        <div>
                            <Input
                                helperText="Insira o orçamento total"
                                id="Orcamento"
                                label="Orçamento"
                                type="number"
                            />
                        </div>
                    </Box>
                    <Box gridColumn="span 3">
                        <div>
                            <SelectForm
                                labelId="demo-simple-select-label"
                                id="Categoria"
                                value="Categoria"
                                label="Categoria"
                                // onChange={handleChange}
                            >
                            </SelectForm>
                        </div>
                    </Box>
                    <Box gridColumn="span 3">
                        <SubmitButton text={btnText} />
                    </Box>
                </Box>
            </Box>
        </FormControl>
    )
}

export default ProjectForm