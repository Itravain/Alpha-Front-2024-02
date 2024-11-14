// src/components/Button.js
import { Button } from '@mui/material';

const CustomButton = ({ label, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
