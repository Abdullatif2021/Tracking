import moment from 'moment'
import {FC} from 'react'
import {TripDriverReport} from '../../core/_models'
import {KTIcon} from '../../../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import { TripWithStatusPath } from '../../../../trips/routes/RoutesNames'
type Props = {
  data: {
    id:number,
    count:number
  }
}
const CustomCell: FC<Props> = ({data}) => {
  return (
    <div className='d-inline-flex justify-content-center align-items-center'>
      <Link
        className={
          `nav-link text-active-primary me-2 ` +
          (location.pathname === '/driver/account/current-trip' && 'active')
        }
        to={TripWithStatusPath+data?.id}
      >
        <KTIcon iconName='eye' className='fs-1' />
      </Link>

      <span> {data?.count}</span>
    </div>
  )
}

export {CustomCell}
