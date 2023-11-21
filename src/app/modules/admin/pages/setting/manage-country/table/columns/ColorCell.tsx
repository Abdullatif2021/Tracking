import {FC} from 'react'

type Props = {
  color?: string
}
const ColorCell: FC<Props> = ({color}) => (
  <>
    <div style={{backgroundColor: color , width:'120px', height:'30px'}}></div>
  </>
)

export {ColorCell}
