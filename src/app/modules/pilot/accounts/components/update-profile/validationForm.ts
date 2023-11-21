import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  name: Yup.string()
    .required('Field is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobile: Yup.string()
    .required('Field is required'),

})


