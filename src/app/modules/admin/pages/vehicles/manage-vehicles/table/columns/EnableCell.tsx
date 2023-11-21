import { FC } from 'react'

type Props = {
  in_service?: boolean
}
const EnableCell: FC<Props> = ({ in_service }) => (
  <>
    {in_service ? <div className='badge badge-light-success fw-bolder'>Enabled</div>
      : <div className=' badge badge-danger fw-bolder'>Disabled</div>}
  </>
)

export { EnableCell }
