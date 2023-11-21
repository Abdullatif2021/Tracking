import moment from 'moment'
import { FC } from 'react'
import { genderEnum } from '../../../../core/models'


type Props = {
  gender?: string
}
const CustomCell: FC<Props> = ({ gender }) => {
 return (
    <div>
        {genderEnum[gender]}
    </div>
 )
}



export { CustomCell  }
