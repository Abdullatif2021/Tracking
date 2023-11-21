import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  name: Yup.string().required('Field is required'),
  type: Yup.string().required('Field is required'),
  type_value: Yup.string().required('Field is required'),
})
