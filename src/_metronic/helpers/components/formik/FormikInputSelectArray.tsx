import {useFormikContext} from 'formik'

import {useEffect, useState} from 'react'
import { SelectList } from '../..'
interface props {
  title: string
  name: string
  type?: string
  isRequired: boolean
  options?: SelectList[]
  relatedName?: string
}
const FormikInputSelectArray = (props: props) => {
  const [value, setValue] = useState(null)
  const {title, name, isRequired, options, relatedName} = props
  const {errors, touched, getFieldProps, setFieldValue, values} = useFormikContext()
  useEffect(() => {
    if (name.includes('.')) {
      if (values[name.substr(0, name.indexOf('.'))] != undefined) {
       setValue(values[name.split('.')[0]][parseInt(name.split('.')[1])][name.split('.')[2]])
      }
    } else {
      setValue(values[name])
      
    }
  }, [options,values])
  return (
    <div className='fv-row mb-7'>
      <label className={`${isRequired ? 'required' : ''} fw-bold fs-6 mb-2`}>{title}</label>
      <select
        placeholder={title}
        onChange={(event) => {
          setValue(event.target.value)
          setFieldValue(name, event.target.value)
          if (relatedName) {
            setFieldValue(relatedName, undefined)
          }
        }}
        value={value}
        // {...getFieldProps({ name })}
        className='form-select form-select-solid form-select-lg'
      >
        <option value={''}>Select OPtion</option>
        {options.map((item) => {
          return <option value={item?.value?.toString()}>{item.text}</option>
        })}
      </select>

      {touched[name] && errors[name] && (
        <div className='fv-plugins-message-container'>
          <div className='fv-help-block'>{errors[name]}</div>
        </div>
      )}
    </div>
  )
}

export default FormikInputSelectArray
