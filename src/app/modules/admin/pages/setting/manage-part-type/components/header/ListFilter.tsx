import { useEffect, useState } from 'react'
import { MenuComponent } from '../../../../../../../../_metronic/assets/ts/components'
import { initialQueryState } from '../../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useIntl } from 'react-intl'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'
import CheckBoxFilter from '../../../../../../../../_metronic/helpers/components/fields/checkBoxFilter'
import { InputFilter } from '../../../../../../../../_metronic/helpers/components/fields/InputFilter'






const ListFilter = () => {
  const intl = useIntl();
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const [name, setName] = useState<string | undefined>("")
  const [maintenance, setMaintenance] = useState<string | undefined>("")


  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({ filtter: undefined, ...initialQueryState })
  }

  const filterData = () => {
   
    updateState({
      filtter: { name, maintenance},
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className="row">
    
          <div className="col-md-12  col-sm-12">
            <InputFilter value={name} setValue={setName} title={intl.formatMessage({ id: 'name' })} />
          </div>
          <div className="col-md-12  col-sm-12">
            <CheckBoxFilter value={maintenance} setValue={setMaintenance} title={intl.formatMessage({ id: 'maintenance' })} />
          </div>
          <div className="col-md-12  col-sm-12">
           
          </div>
        </div>

      </FilterMenuHoc>


    </>
  )
}

export { ListFilter }
