import { FC } from 'react'

type Props = {
  data?: string
}
const CustomCell: FC<Props> = ({ data }) => {
 return (
    <div>
        {data}
    </div>
 )
}



export { CustomCell }
