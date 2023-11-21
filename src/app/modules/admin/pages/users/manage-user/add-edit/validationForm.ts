import * as Yup from 'yup'
import { intlNonCom } from '../../../../../../../_metronic/i18n/i18nProvider'
export const roleSchema = Yup.object().shape({
  first_name: Yup.string()
    .required(intlNonCom.formatMessage({id:'object_required'})),
    last_name: Yup.string()
    .required(intlNonCom.formatMessage({id:'object_required'})),
    email: Yup.string().email(intlNonCom.formatMessage({id:'invalid_email'})).required(intlNonCom.formatMessage({id:'object_required'})),
    group_id:Yup.string()
    .required(intlNonCom.formatMessage({id:'object_required'})),
})


