import { useEffect, useState } from 'react'

import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useIntl } from 'react-intl'
import { MenuComponent } from '../../../../../../../../_metronic/assets/ts/components/MenuComponent'
import { initialQueryState } from '../../../../../../../../_metronic/helpers/crud-helper/models'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'
import { InputFilter } from '../../../../../../../../_metronic/helpers/components/fields/InputFilter'





const ListFilter = () => {
  const intl = useIntl();
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const [date, setDate] = useState<string | undefined>("")

  

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({ filtter: undefined, ...initialQueryState })
  }

  const filterData = () => {
   
    updateState({
      filtter: { date },
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className="row">
          <div className="col">
            <InputFilter value={date} setValue={setDate} title={intl.formatMessage({ id: 'date' })} type={'date'} />
          </div>
         
        </div>

      </FilterMenuHoc>


    </>
  )
}

export { ListFilter }
