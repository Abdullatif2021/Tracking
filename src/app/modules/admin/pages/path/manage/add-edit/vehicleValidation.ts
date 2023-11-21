import * as Yup from 'yup'
export const roleVehicleSchema = Yup.object().shape({
    vehicles_id: Yup.string()
    .required('Field is required'),

})