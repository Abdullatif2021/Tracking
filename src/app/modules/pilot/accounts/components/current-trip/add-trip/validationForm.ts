import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  type: Yup.string()
    .required('Field is required'),
  date: Yup.string()
    .required('Field is required'),
  from: Yup.string().required('From is required'),
  to: Yup.string().required('To is required'),

})