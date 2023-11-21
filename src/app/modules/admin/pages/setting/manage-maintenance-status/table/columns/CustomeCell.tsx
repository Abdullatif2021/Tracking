import {FC} from 'react'
import { MaintenanceStatus } from '../../core/_models'

type Props = {
  data?: MaintenanceStatus
}
const CustomeCell: FC<Props> = ({data}) => (
  <>
    <div >{data?.type_value + ' '+  data?.type}</div>
  </>
)

export {CustomeCell}
