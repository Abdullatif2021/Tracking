import moment from 'moment'
import { FC } from 'react'

type Props = {
  date?: Date
}
const CustomCellDate: FC<Props> = ({ date }) => {
 return (
    <div>
        {moment(date).format('YYYY-MM-DD').toString()}
    </div>
 )
}



export { CustomCellDate }
