import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  name: Yup.string()
    .required('Field is required'),
    // code: Yup.string()
    // .required('Field is required'),
})