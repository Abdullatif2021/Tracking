import { FC } from 'react'
import { TripType } from '../../core/_models'

type Props = {
    type?: number
}
const CustomCellType: FC<Props> = ({ type }) => (
  <>
    {TripType[type]}
  </>
)

export { CustomCellType }
