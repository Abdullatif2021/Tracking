import {FC} from 'react'
import { Path } from '../../core/_models'

type Props = {
  data?: any
}
const CustomeCell: FC<Props> = ({data}) => (
  <>
    <div >{data.map((item)=>item.f_terminal?.name).join(',')}</div>
  </>
)

export {CustomeCell}
