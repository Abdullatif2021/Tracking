import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  model: Yup.string()
    .required('Field is required'),
    make_id: Yup.string()
    .required('Field is required'),
})