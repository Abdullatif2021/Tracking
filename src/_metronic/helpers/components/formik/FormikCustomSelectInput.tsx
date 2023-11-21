import {useFormikContext} from 'formik'
import {useEffectAsync} from '../../../../reactHelper'
import {SelectList} from '../..'
import { useState } from 'react'
interface props {
  title: string
  name: string
  relatedFieldOption: any[]
  relatedFieldName?: string[]
  type?: string
  isRequired: boolean
  options?: SelectList[]
  callApi: any[]
}
const FormikCustomSelectInput = (props: props) => {
    const [value, setValue] = useState(null)
  const {title, name, isRequired, options, callApi, relatedFieldOption, relatedFieldName} = props
  const {errors, values, touched, getFieldProps, setFieldValue, isSubmitting} = useFormikContext()
  useEffectAsync(async () => {
    // if (!isSubmitting) {
    if (name.split('.').length > 1) {
        if (values[name.substr(0, name.indexOf('.'))] != undefined) {
            setValue(values[name.split('.')[0]][parseInt(name.split('.')[1])][name.split('.')[2]])
           }
      if (values[name.split('.')[0]][parseInt(name.split('.')[1])][name.split('.')[2]]) {
        for (var i = 0; i < callApi.length; i++) {
          const response = await callApi[i](
            values[name.split('.')[0]][parseInt(name.split('.')[1])][name.split('.')[2]]
          )
          if (relatedFieldOption[i]) {
            setFieldValue(relatedFieldOption[i], response)
          }
        }
      }
    } else {
      if (values[name]) {
        setValue(values[name])
        for (var i = 0; i < callApi.length; i++) {
          const response = await callApi[i]()
          if (response) {
            setFieldValue(relatedFieldOption[i], response)
          }
        }
      }
    }
    // }
  }, [
    values[name],
    values[name.split('.')?.[0]]?.[parseInt(name.split('.')?.[1])]?.[name.split('.')?.[2]],
  ])
  return (
    <div className='fv-row mb-7'>
      <label className={`${isRequired ? 'required' : ''} fw-bold fs-6 mb-2`}>{title}</label>
      <select
        onChange={(event) => {
          setFieldValue(name, event.target.value)
          if (relatedFieldName) {
            relatedFieldName.map((name) => {
                setValue(event.target.value)
              if (name == 'path') {
                var path = values['path']
                setFieldValue(
                  'path',
                  path.map((item) => {
                    return {
                      ...item,
                      to: undefined,
                      other_to: undefined,
                    }
                  })
                )
              } else {
                setFieldValue(name, undefined)
              }
            })
          }
        }}
        value={value}
        placeholder={title}
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

export default FormikCustomSelectInput
