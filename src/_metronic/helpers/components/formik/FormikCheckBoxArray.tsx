import {useFormikContext} from 'formik'
import clsx from 'clsx'
import {useEffect} from 'react'
interface OPtion {
  permissions: any[]
  id: number
  name: string
}
interface props {
  title: string
  name: string
  type?: string
  options: OPtion[]
  group: string
}

const FormikCheckBoxArray = (props: props) => {
  const {title, name, type, options, group} = props
  const {errors, touched, values, setFieldValue} = useFormikContext();

  return (
    <>
      <div className='accordion' id='kt_accordion_1'>
        {options.map((item) => {
          return (
            <div className='accordion-item'>
              <h2 className='accordion-header' id={`kt_accordion_${item.id}_header_${item.id}`}>
                <button
                  className='accordion-button fs-4 fw-bold collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#kt_accordion_1_body_1'
                  aria-expanded='false'
                  aria-controls='kt_accordion_1_body_1'
                >
                  {group}
                </button>
              </h2>
              {/* <div className='separator separator-dashed my-5'></div> */}
              <div
                id='kt_accordion_1_body_1'
                className='accordion-collapse collapse show'
                aria-labelledby={`kt_accordion_${item.id}_header_${item.id}`}
                data-bs-parent='#kt_accordion_1'
              >
                <div className='accordion-body'>
                  <div className='row'>
                    {item.permissions.map((item) => {
                      return (
                        <div className='mb-10 col-md-2'>
                          <div className='form-check form-check-custom form-check-solid'>
                            <input
                              type='checkbox'
                              id={`flexCheckDefault-${item.id}`}
                              className={clsx(
                                'form-check-input w-30px h-30px'
                                // {'is-invalid': touched[name] && errors[name]},
                                // {
                                //   'is-valid': touched[name] && !errors[name],
                                // }
                              )}
                              checked={values[name]?.includes(item.id)}
                              //   defaultChecked={values[name]}
                              onChange={(event) => {
                                if (event.target.checked) {
                                  let temp = values[name]
                                  temp.push(item.id)
                                  setFieldValue(name, temp)
                                } else {
                                  let temp = values[name]?.filter((x) => x != item.id)
                                  setFieldValue(name, temp)
                                }
                              }}
                            />
                            {touched[name] && errors[name] && (
                              <div className='fv-plugins-message-container'>
                                <div className='fv-help-block'>
                                  <span role='alert'>{errors[name]}</span>
                                </div>
                              </div>
                            )}
                            <label
                              className='form-check-label'
                              htmlFor={`flexCheckDefault-${item.id}`}
                            >
                              {item?.name}
                            </label>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default FormikCheckBoxArray
