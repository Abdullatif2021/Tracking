import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  reason: Yup.string().required('Field is required'),
})
