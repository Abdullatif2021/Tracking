import { useEffect, useState } from 'react'
import { MenuComponent } from '../../../../../../../../_metronic/assets/ts/components'
import { initialQueryState } from '../../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useIntl } from 'react-intl'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'
import { InputFilter } from '../../../../../../../../_metronic/helpers/components/fields/InputFilter'
import CheckBoxFilter from '../../../../../../../../_metronic/helpers/components/fields/checkBoxFilter'





const ListFilter = () => {
  const intl = useIntl();
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const [maker, setMaker] = useState<string | undefined>("")
  const [model, setModel] = useState<string | undefined>("")
  const [type, setType] = useState<string | undefined>(null)
  const [color, setColor] = useState<string | undefined>(null)
  const [license_plate, setLicensePlate] = useState<string | undefined>(null)
  const [gps_code, setGpsCode] = useState<string | undefined>(null)
  const [group, setGroup] = useState<string | undefined>(null)

  const [in_service, setInService] = useState<boolean | undefined>(null)



  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({ filtter: undefined, ...initialQueryState })
  }

  const filterData = () => {
   
    updateState({
      filtter: {maker, model, type, color,gps_code,license_plate,group, in_service },
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className="row">
          <div className="col">
            <InputFilter value={maker} setValue={setMaker} title={intl.formatMessage({ id: 'maker' })} />
          </div>
          <div className="col">
            <InputFilter value={model} setValue={setModel} title={intl.formatMessage({ id: 'model' })} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <InputFilter value={type} setValue={setType} title={intl.formatMessage({ id: 'type' })} />
          </div>
          <div className="col">
            <CheckBoxFilter value={in_service} setValue={setInService} title={intl.formatMessage({ id: 'in_service' })} />
          </div>
        </div>

      </FilterMenuHoc>


    </>
  )
}

export { ListFilter }
