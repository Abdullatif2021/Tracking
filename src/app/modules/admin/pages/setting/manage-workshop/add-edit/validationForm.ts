import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  name: Yup.string().required('Field is required'),
  mobile: Yup.string().required('Field is required'),
  address: Yup.string().required('Field is required'),

})
