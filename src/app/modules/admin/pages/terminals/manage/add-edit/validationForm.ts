import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  name: Yup.string()
    .required('Field is required'),
    station_id: Yup.string()
    .required('Field is required'),
})