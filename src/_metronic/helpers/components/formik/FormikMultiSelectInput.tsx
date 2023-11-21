import {FC, useRef, useState} from 'react'
import {useFormikContext} from 'formik'
import Select2 from 'react-select2-wrapper'
import {styled} from '@mui/material'
import './style.css'
const InputStyle = styled(Select2)({
  width: '100%',
  background: 'red',
  '& .select2  .select2-selection': {
    background: 'red',
  },
})


import {SelectList} from '../..'

interface Props {
  title: string
  name: string
  type?: string
  isRequired: boolean
  options?: SelectList[]
  relatedName?: string
}
const FormikMultiSelectInput: FC<Props> = ({title, name, isRequired, options}) => {
  const {errors, touched, getFieldProps, setFieldValue, values} = useFormikContext()
  const [value, setValue] = useState([])

  const isFirstRender = useRef(true)
  const handleChange = (event) => {
    if (isFirstRender.current) {
      if (name?.includes('.')) {
        if (values[name.substr(0, name.indexOf('.'))] != undefined) {
          setValue(values[name.split('.')[0]][parseInt(name.split('.')[1])][name.split('.')[2]])
        }
      } else {
        setValue(values[name])
      }
      isFirstRender.current = false
    } else {
      const selectedOptions = event.target.selectedOptions
      const selectedValues = Array.from(selectedOptions, (option: any) => ({
        value: option.value,
        text: option.text,
      })).map((x) => x.value)
      setFieldValue(name, selectedValues)
      setValue(selectedValues)
    }
  }

  return (
    <div className='fv-row mb-7'>
      <label className={`${isRequired ? 'required' : ''} fw-bold fs-6 mb-2`}>{title}</label>
      <InputStyle
        multiple
        style={{
          backgroundColor: '#f4f4f4',
          borderColor: '#f4f4f4',
          color: '#5e6278',
          transition: '#5e6278 0.2s ease',
        }}
        data={options}
        onChange={handleChange}
        options={{
          placeholder: title,
        }}
        value={value}
      />
      {touched[name] && errors[name] && (
        <div className='fv-plugins-message-container'>
          <div className='fv-help-block'>{<span role='alert'>{errors[name]}</span>}</div>
        </div>
      )}
    </div>
  )
}

export default FormikMultiSelectInput
