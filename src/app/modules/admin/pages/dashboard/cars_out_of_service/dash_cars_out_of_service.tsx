import {useMemo, useState} from 'react'
import {KTCard, KTCardBody} from '../../../../../../_metronic/helpers'
import {QueryRequestProvider, useQueryRequest} from './core/QueryRequestProvider'
import {
  QueryResponseProvider,
  useQueryResponseData,
  useQueryResponseLoading,
} from './core/QueryResponseProvider'
import {columnsTable} from './table/columns/_columns'
import {Spinner} from '../../../../../../_metronic/helpers/components/Spinner'
import {ListPagination} from '../../../../../../_metronic/helpers/components/table/pagination/ListPagination'
import {DataTable} from '../../../../../../_metronic/helpers/components/table/Table'
import {useIntl} from 'react-intl'
import {ListHeader} from './components/header/ListHeader'


const List = () => {
  const intl = useIntl()
  const items = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const {updateState} = useQueryRequest()
  const [control, setControl] = useState({
    isStart: false,
  })

  const data = useMemo(() => items, [items])
  const columns = useMemo(() => columnsTable, [])

  let pagination_start = {
    links: data.car_out_of_service_start.links,
    page_num: data.car_out_of_service_start.current_page,
    page_size: data.car_out_of_service_start.per_page,
  }

  let pagination_end = {
    links: data.car_out_of_service_end.links,
    page_num: data.car_out_of_service_end.current_page,
    page_size: data.car_out_of_service_end.per_page,
  }

  return (
    <>
      <div className='my-10'>
        {/* start Title*/}
        <div className='flex-wrap me-3 mb-4 '>
          <h1 className='text-dark fw-bold fs-3 my-0'>
            {intl.formatMessage({id: 'car_out_service_report'})}
          </h1>
          {/* <h3 className='text-muted fs-6 my-2'>Users from all channels</h3> */}
        </div>
        {/* <div className='bg-white'>
          <nav>
            <div className='nav nav-tabs' id='nav-tab' role='tablist'>
              <button
                className='nav-link active'
                id='nav-start-tab'
                data-bs-toggle='tab'
                data-bs-target='#nav-start'
                type='button'
                role='tab'
                aria-controls='nav-start'
                aria-selected='true'
              >
                {intl.formatMessage({id: 'start'})}
              </button>
              <button
                className='nav-link'
                id='nav-end-tab'
                data-bs-toggle='tab'
                data-bs-target='#nav-end'
                type='button'
                role='tab'
                aria-controls='nav-end'
                aria-selected='false'
              >
                {intl.formatMessage({id: 'end'})}
              </button>
            </div>
          </nav>
        </div> */}

        <div className='tab-content' id='nav-tabContent'>
          <div
            className='tab-pane fade show active'
            id='nav-start'
            role='tabpanel'
            aria-labelledby='nav-start-tab'
          >
            <KTCard>
              <KTCardBody className='py-4'>
                <ListHeader />
                <DataTable
                  data={
                    control.isStart
                      ? data.car_out_of_service_start.data
                      : data.car_out_of_service_end.data
                  }
                  columns={columns}
                />
                <ListPagination
                  isLoading={isLoading}
                  pagination={control.isStart ? pagination_start : pagination_end}
                  updateState={updateState}
                />
                {isLoading && <Spinner />}
              </KTCardBody>
            </KTCard>
          </div>
          {/* 
          <div className='tab-pane fade' id='nav-end' role='tabpanel' aria-labelledby='nav-end-tab'>
            <KTCard>
              <KTCardBody className='py-4'>
                <DataTable data={data.car_out_of_service_end.data} columns={columns} />
                <ListPagination
                  isLoading={isLoading}
                  pagination={pagination_end}
                  updateState={updateState}
                />
                {isLoading && <Spinner />}
              </KTCardBody>
            </KTCard>
          </div> */}
        </div>
      </div>
      {/* <ListHeader /> */}
    </>
  )
}

const ManageDashCarOutOfServiceWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <List />
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ManageDashCarOutOfServiceWrapper}
