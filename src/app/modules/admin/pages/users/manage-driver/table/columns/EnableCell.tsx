import { FC } from 'react'

type Props = {
    isactive?: boolean
}
const EnableCell: FC<Props> = ({ isactive }) => (
  <>
    {isactive ? <div className='badge badge-light-success fw-bolder'>Active</div>
      : <div className=' badge badge-danger fw-bolder'>INactive</div>}
  </>
)

export { EnableCell }
