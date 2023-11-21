import {FC} from 'react'
import Select2 from 'react-select2-wrapper'
import {styled} from '@mui/material'
import './style.css'
import { SelectList } from '../..'
const InputStyle = styled(Select2)({
  width: '100%',
 
})
/* eslint-disable react-hooks/exhaustive-deps */
interface Props {
  title: string
  setValue: React.Dispatch<React.SetStateAction<any>>
  value: any
  options: SelectList[]
}
const InputSelectFilter: FC<Props> = ({title, setValue, value, options}) => {
  return (
    <div className='fv-row mb-7'>
      {/* begin::Label */}
      <label className='fw-bold fs-6 mb-2'>{title}</label>

      <InputStyle
      style={{
        width:'100%'
      }}
        data={options}
        options={{
          placeholder: title,
        }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      {/* end::Input */}
    </div>
  )
}

export {InputSelectFilter}
