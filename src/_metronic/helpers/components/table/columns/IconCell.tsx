import { FC } from 'react'
import { toAbsoluteServerUrl } from '../../..'



type Props = {
    icon: string
}

const IconCell: FC<Props> = ({ icon }) => (
    <div className='d-flex align-items-center'>
        {/* begin:: Avatar */}
        <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
            <img src={toAbsoluteServerUrl(icon)}  className='w-100' />
        </div>
    </div>
)

export { IconCell }
