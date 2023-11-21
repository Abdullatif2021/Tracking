import { FC } from 'react'
import { FuelHistory } from '../../core/_models'

type Props = {
    data?: FuelHistory
}
const MeterCell: FC<Props> = ({ data }) => (
  <>
    {data?.end_meter}
  </>
)

export { MeterCell }
