import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  color: Yup.string().required('Field is required'),
  name: Yup.string().required('Field is required'),
  code: Yup.string().required('Field is required'),
  time_in: Yup.string().required('Field is required'),
  period: Yup.string().required('Field is required'),
})
