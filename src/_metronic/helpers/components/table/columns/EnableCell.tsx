import { FC } from 'react'

type Props = {
  isenable?: boolean
}
const EnableCell: FC<Props> = ({ isenable }) => (
  <>
    {isenable ? <div className='badge badge-light-success fw-bolder'>Enabled</div>
      : <div className=' badge badge-danger fw-bolder'>Disabled</div>}
  </>
)

export { EnableCell }
