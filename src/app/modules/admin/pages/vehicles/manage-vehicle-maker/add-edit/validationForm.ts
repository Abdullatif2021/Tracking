import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  make: Yup.string()
    .required('Field is required'),

})