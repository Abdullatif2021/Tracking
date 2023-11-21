import {useEffect, useState} from 'react'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import {QUERIES, initialQueryState} from '../../../../../../../../_metronic/helpers'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {useIntl} from 'react-intl'

import { MaintenanceStatusTypes } from '../../core/_models'
import { InputFilter } from '../../../../../../../../_metronic/helpers/components/fields/InputFilter'
import { InputSelectFilter } from '../../../../../../../../_metronic/helpers/components/fields/inputSelectFilter'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'

const ListFilter = () => {
  const intl = useIntl()
  const {updateState} = useQueryRequest()
  const {isLoading} = useQueryResponse()
  const [parent, setParent] = useState<string | undefined>('')
  const [name, setName] = useState<string | undefined>('')
  const [type, setType] = useState<string | undefined>('')


  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({filtter: undefined, ...initialQueryState})
  }

  const filterData = () => {
    updateState({
      filtter: {name},
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className='row'>
          <div className='col-md-6  col-sm-12'>
            <InputFilter value={parent} setValue={setParent} title={intl.formatMessage({id: 'parent'})} />
          </div>
          <div className='col-md-6  col-sm-12'>
            <InputFilter value={name} setValue={setName} title={intl.formatMessage({id: 'name'})} />
          </div>
          <div className='col-md-6  col-sm-12'>
          <InputSelectFilter value={type} setValue={setType} title={intl.formatMessage({ id: 'type' })} options={MaintenanceStatusTypes || []} />
          </div>


        </div>
      </FilterMenuHoc>
    </>
  )
}

export {ListFilter}
