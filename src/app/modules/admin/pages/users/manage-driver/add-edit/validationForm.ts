import * as Yup from 'yup'
import { intlNonCom } from '../../../../../../../_metronic/i18n/i18nProvider'
import { PhoneRegExp } from '../../../../../../../_metronic/utlis/constants'
export const roleSchema = Yup.object().shape({
  first_name: Yup.string()
    .required(intlNonCom.formatMessage({ id: 'object_required' })),
  last_name: Yup.string()
    .required(intlNonCom.formatMessage({ id: 'object_required' })),
  phone: Yup.string().matches(PhoneRegExp, intlNonCom.formatMessage({ id: 'invalid_mobile' })).min(9, "too short")
    .max(13, "too long"),
  email: Yup.string().email(intlNonCom.formatMessage({ id: 'invalid_email' })).required(intlNonCom.formatMessage({ id: 'object_required' })),

})
