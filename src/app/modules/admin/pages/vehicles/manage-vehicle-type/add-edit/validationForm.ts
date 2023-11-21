import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  vehicletype: Yup.string()
    .required('Field is required'),
    displayname: Yup.string()
    .required('Field is required'),
    seats: Yup.string()
    .required('Field is required'),
    isenable: Yup.boolean()
    .required('Field is required'),
})