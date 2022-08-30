import { TextField } from "@mui/material"

function Input({helperText, id, label, type}){
    return(
        <div>
            <TextField helperText={helperText} id={id} label={label} type={type}/>
        </div>
    )
}

export default Input