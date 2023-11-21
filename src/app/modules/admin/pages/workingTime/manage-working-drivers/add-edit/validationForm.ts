import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  // vehicles_id: Yup.string()
  //   .required('Field is required'),
    type: Yup.string()
    .required('Field is required'),
    region_id:Yup.string()
    .required('Field is required'),
    // group_id: Yup.string()
    // .required('Field is required'),
    shift_id:Yup.string()
    .required('Field is required'),
    date:Yup.string()
    .required('Field is required'),
    
})