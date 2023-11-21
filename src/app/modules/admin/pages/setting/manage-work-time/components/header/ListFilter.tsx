import { useEffect, useState } from 'react'
import { MenuComponent } from '../../../../../../../../_metronic/assets/ts/components'
import { initialQueryState } from '../../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useIntl } from 'react-intl'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'
import { InputFilter } from '../../../../../../../../_metronic/helpers/components/fields/InputFilter'





const ListFilter = () => {
  const intl = useIntl();
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const [color, setColor] = useState<string | undefined>("")
  const [name, setName] = useState<string | undefined>("")
  const [code, setCode] = useState<string | undefined>("")
  const [time_in, setTimein] = useState<string | undefined>("")
  const [time_out, setTimeout] = useState<string | undefined>("")


  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({ filtter: undefined, ...initialQueryState })
  }

  const filterData = () => {
   
    updateState({
      filtter: { color,name,code,time_in,time_out },
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <InputFilter value={color} setValue={setColor} title={intl.formatMessage({ id: 'color' })}  type='color'/>
          </div>
          <div className="col-md-6  col-sm-12">
            <InputFilter value={name} setValue={setName} title={intl.formatMessage({ id: 'name' })} />
          </div>
          <div className="col-md-6  col-sm-12">
            <InputFilter value={code} setValue={setCode} title={intl.formatMessage({ id: 'code' })} />
          </div>
       
          <div className="col-md-6  col-sm-12">
            <InputFilter value={time_in} setValue={setTimein} title={intl.formatMessage({ id: 'time_in' })}  type="time"/>
          </div>
          <div className="col-md-6 col-sm-12">
            <InputFilter value={time_out} setValue={setTimeout} title={intl.formatMessage({ id: 'time_out' })} type="time" />
          </div>

          
        </div>

      </FilterMenuHoc>


    </>
  )
}

export { ListFilter }
