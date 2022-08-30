import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function SelectForm({labelId, id, value, label}){
    return(
        <div>
            <Select labelId={labelId} id={id} value={value} label={label}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </div>
    )
}

export default SelectForm