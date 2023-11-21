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
  const [displayname, setDisplayName] = useState<string | undefined>("")
  const [vehicletype, setVehicletype] = useState<string | undefined>(null)
  const [seats, SetSeats] = useState<string | undefined>(null)
  const [isenable, setIsenable] = useState<boolean | undefined>(null)



  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({ filtter: undefined, ...initialQueryState })
  }

  const filterData = () => {
   
    updateState({
      filtter: { displayname, vehicletype, seats, isenable },
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className="row">
          <div className="col">
            <InputFilter value={displayname} setValue={setDisplayName} title={intl.formatMessage({ id: 'display_name' })} />
          </div>
          <div className="col">
            <InputFilter value={vehicletype} setValue={setVehicletype} title={intl.formatMessage({ id: 'vehicle_type' })} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <InputFilter value={seats} setValue={SetSeats} title={intl.formatMessage({ id: 'no_seats' })} />
          </div>
          <div className="col">
            <CheckBoxFilter value={isenable} setValue={setIsenable} title={intl.formatMessage({ id: 'is_enable' })} />
          </div>
        </div>

      </FilterMenuHoc>


    </>
  )
}

export { ListFilter }
