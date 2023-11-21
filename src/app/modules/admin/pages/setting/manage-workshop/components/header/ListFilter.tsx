import {useEffect, useState} from 'react'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import {QUERIES, initialQueryState} from '../../../../../../../../_metronic/helpers'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {useIntl} from 'react-intl'
import { FilterMenuHoc } from '../../../../../../../../_metronic/helpers/components/table/filter/FilterMenuHoc'
import { InputFilter } from '../../../../../../../../_metronic/helpers/components/fields/InputFilter'


const ListFilter = () => {
  const intl = useIntl()
  const {updateState} = useQueryRequest()
  const {isLoading} = useQueryResponse()
  const [name, setName] = useState<string | undefined>('')
  const [mobile, setMobile] = useState<string | undefined>('')
  const [address, setAddress] = useState(true)

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    updateState({filtter: undefined, ...initialQueryState})
  }

  const filterData = () => {
    updateState({
      filtter: {name,mobile,address},
      ...initialQueryState,
    })
  }
  return (
    <>
      <FilterMenuHoc isLoading={isLoading} handleFilter={filterData} handleReset={resetData}>
        {/* begin::Input group */}
        <div className='row'>
          <div className='col-md-6  col-sm-12'>
            <InputFilter
              value={name}
              setValue={setName}
              title={intl.formatMessage({id: 'name'})}
            />
          </div>
          <div className='col-md-6  col-sm-12'>
            <InputFilter
              value={mobile}
              setValue={setMobile}
              title={intl.formatMessage({id: 'mobile'})}
            />
          </div>
          <div className='col-md-6  col-sm-12'>
            <InputFilter
              value={address}
              setValue={setAddress}
              title={intl.formatMessage({id: 'address'})}
            />
          </div>
        </div>
      </FilterMenuHoc>
    </>
  )
}

export {ListFilter}
