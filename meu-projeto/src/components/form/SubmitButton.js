import { Button } from "@mui/material"

function SubmitButton({text}){
    return(
        <div>
            <Button variant="contained">{text}</Button>
        </div>
    )
}

export default SubmitButton