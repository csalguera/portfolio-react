// mui components
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const ToggleSwitch = () => {
  return (
    <FormGroup sx={{ display: { xs: 'none', sm: 'block' } }}>
      <FormControlLabel control={<Switch defaultChecked color="default" />} label="Dark Mode" />
    </FormGroup>
  )
}

export default ToggleSwitch