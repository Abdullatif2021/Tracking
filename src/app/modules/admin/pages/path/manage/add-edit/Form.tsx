import { FC, Fragment, useState } from 'react'
import { FieldArray, useFormikContext } from 'formik'
import { useIntl } from 'react-intl'
import { initialPathModel, prorities } from '../core/_models'
import { initialPath } from '../../../trips/manage/core/_models'
import IconButton from '../../../../../../../_metronic/helpers/components/buttons/iconButton'
import FormikSelectInput from '../../../../../../../_metronic/helpers/components/formik/FormikSelectInput'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'
import FormikInputLabel from '../../../../../../../_metronic/helpers/components/formik/FormikInputLabel'
import FormikFile from '../../../../../../../_metronic/helpers/components/formik/FormikFile'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'


const Form = ({ ...props }) => {
  const { terminalList } = props
  const intel = useIntl()
  const { handleSubmit, resetForm, isSubmitting, isValid, touched, values, setFieldValue } =
    useFormikContext()
  return (
    <>
      {(
        <form className='form' onSubmit={handleSubmit} noValidate encType="multipart/form-data">
          {/* begin::Scroll */}
          <div className='d-flex flex-column scroll-y me-n7 pe-7'>
            <div className='row'>
              <div className='col-md-12 col-sm-12'>
                <FormikInputLabel
                  title={intel.formatMessage({ id: 'name' })}
                  name={'name'}
                  isRequired={true}
                />
              </div>
              <h3>{intel.formatMessage({ id: 'terminal' })}</h3>

              <div className='separator separator-dashed my-5'></div>

              <FieldArray name='terminal'>
                {({ insert, remove, push }) => (
                  <Fragment>
                    <div className='d-flex mb-2 justify-content-end'>
                      <IconButton
                        onClick={() => {
                          push(initialPathModel)
                        }}
                      >
                        <i className='ki-duotone ki-plus fs-2' style={{ color: 'white' }} />
                      </IconButton>
                    </div>
                    {values['terminal'] &&
                      values['terminal'].length > 0 &&
                      values['terminal'].map((item, index) => (
                        <Fragment key={index}>
                          <div className='row'>
                            <div className='col-md-10 col-sm-12 row'>
                              <div className='col-md-6 col-sm-12'>
                                <FormikSelectInput
                                  title={intel.formatMessage({ id: 'terminal' })}
                                  name={`terminal.${index}.terminal`}
                                  isRequired={false}
                                  options={terminalList || []}
                                />
                              </div>
                              <div className='col-md-6 col-sm-12'>
                                <FormikSelectInput
                                  title={intel.formatMessage({ id: 'priority' })}
                                  name={`terminal.${index}.priority`}
                                  isRequired={false}
                                  options={prorities || []}
                                />
                              </div>

                              <div className='col-md-6 col-sm-12'>
                                <FormikFile
                                  title={intel.formatMessage({ id: 'voice' })}
                                  name={`terminal.${index}.voice`}
                                  isRequired={false}
                                  type='BASE64'
                                  fieldFile={`terminal.${index}.voice`} />
                              </div>
                            </div>
                            <div className='col-md-2 col-sm-12 d-flex align-items-center justify-content-evenly'>
                              <IconButton
                                onClick={() => {
                                  push(initialPath)
                                }}
                              >
                                <i className='ki-duotone ki-plus fs-2' style={{ color: 'white' }} />
                              </IconButton>
                              {values['terminal'].length - 1 == index && (
                                <IconButton
                                  color='bg-danger'
                                  onClick={() => {
                                    let tmp = values['terminal'].filter((_, i) => i != index)

                                    setFieldValue(`terminal`, tmp)
                                  }}
                                >
                                  <i
                                    className='ki-duotone ki-minus fs-2'
                                    style={{ color: 'white' }}
                                  />
                                </IconButton>
                              )}
                            </div>
                          </div>

                          <div className='separator separator-dashed my-5'></div>
                        </Fragment>
                      ))}
                  </Fragment>
                )}
              </FieldArray>
            </div>
          </div>
          {/* begin::Actions */}
          <div className='text-center pt-15'>
            <ResetButton resetForm={resetForm} isSubmitting={isSubmitting} />
            <SubmitButton isSubmitting={isSubmitting} isValid={isValid} touched={touched} />
          </div>
          {/* end::Actions */}
        </form>
      )}
      {(isSubmitting) && <Spinner />}
    </>
  )
}

export { Form }
