import {FC} from 'react'
import { Maintenance } from '../../core/_models'

type Props = {
  data?: Maintenance
}
const CustomeCell: FC<Props> = ({data}) => (
  <>
    <div >{data?.type_value + ' '+  data?.type}</div>
  </>
)

export {CustomeCell}
