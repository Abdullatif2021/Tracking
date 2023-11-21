import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  timezone: Yup.string().required('Field is required'),
})
