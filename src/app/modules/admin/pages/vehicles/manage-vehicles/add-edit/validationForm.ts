import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  make_id: Yup.string()
    .required('Field is required'),
    model_id: Yup.string()
    .required('Field is required'),
    color_id: Yup.string()
    .required('Field is required'),
    type_id: Yup.string()
    .required('Field is required'),
    group_id: Yup.string()
    .required('Field is required'),
    gps_code: Yup.string()
    .required('Field is required'),
    license_plate: Yup.string()
    .required('Field is required'),
    vin: Yup.string()
    .required('Field is required'),
    
    horse_power: Yup.number()
    .required('Field is required'),
    engine_type: Yup.string()
    .required('Field is required'),
    year: Yup.number()
    .required('Field is required'),
   
})
