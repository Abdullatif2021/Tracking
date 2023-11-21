import {FC} from 'react'
import { Path } from '../../core/_models'

type Props = {
  data?: any
}
const CustomCellData: FC<Props> = ({data}) => (
  <>
    <div >{data}</div>
  </>
)

export {CustomCellData}
