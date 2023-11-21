import {useFormikContext} from 'formik'
import {FC, useEffect, useState} from 'react'
import {SelectList, SelectListStringValues} from '../..'
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
interface Props {
  title: string
  name: string
  type?: string
  isRequired: boolean
  options?: SelectList[]
  relatedName?: string[]
}
const FormikSelectInput: FC<Props> = ({title, name, isRequired, options, relatedName}) => {
  const [value, setValue] = useState(null)
  const {errors, touched, getFieldProps, setFieldValue, values} = useFormikContext()
  useEffect(() => {
    if (name.includes('.')) {
      if (values[name.substr(0, name.indexOf('.'))] != undefined) {
        setValue(values[name.split('.')[0]][parseInt(name.split('.')[1])][name.split('.')[2]])
      }
    } else {
      setValue(values[name])
    }
  }, [options])

  return (
    <div className='fv-row mb-7'>
      <label className={`${isRequired ? 'required' : ''} fw-bold fs-6 mb-2`}>{title}</label>
      <InputStyle
        data={options}
        options={{
          placeholder: title,
        }}
        onChange={(event) => {
          setValue(event.target.value)
          if (event.target.value) setFieldValue(name, event.target.value)
          if (relatedName) {
            relatedName.map((name) => {
              setFieldValue(name, undefined)
            })
          }
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

export default FormikSelectInput
