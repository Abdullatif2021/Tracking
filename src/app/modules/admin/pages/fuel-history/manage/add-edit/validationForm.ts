import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  vehicle_id: Yup.string()
    .required('Field is required'),
    date: Yup.string()
    .required('Field is required'),
    start_meter: Yup.string()
    .required('Field is required'),
    province: Yup.string()
    .required('Field is required'),
})