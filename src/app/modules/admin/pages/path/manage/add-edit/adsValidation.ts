import * as Yup from 'yup'
export const roleAdsSchema = Yup.object().shape({
    ads_id: Yup.string()
    .required('Field is required'),

})