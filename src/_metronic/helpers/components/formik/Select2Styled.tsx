import React from 'react';
import Select2 from "react-select2-wrapper";
import "select2/dist/css/select2.css";
import { styled } from '@mui/styles';
import './style.css'

export const Select2Styled = styled(Select2)({
    '& .select2-container': {
        display:'inline'
    }
});


export default Select2Styled;
