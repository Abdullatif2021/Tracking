import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  vehicles_id: Yup.string()
    .required('Field is required'),
    start: Yup.string()
    .required('Field is required'),
    end: Yup.string()
    .required('Field is required'),
})