import * as Yup from 'yup'
export const roleSchema = Yup.object().shape({
  name: Yup.string().required('Field is required'),
  building_id: Yup.string().required('Field is required'),
  floor_number: Yup.string().required('Field is required'),
})
