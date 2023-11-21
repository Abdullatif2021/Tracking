import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  color: Yup.string()
    .required('Field is required'),

})