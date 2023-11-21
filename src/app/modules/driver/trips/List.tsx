import  { useMemo } from 'react'
import { ListHeader } from './components/header/ListHeader'
import { ListViewProvider,  } from './core/ListViewProvider'
import { QueryRequestProvider, useQueryRequest } from './core/QueryRequestProvider'
import { QueryResponseProvider, useQueryResponseData, useQueryResponseLoading, useQueryResponsePagination } from './core/QueryResponseProvider'
import { columnsTable } from './table/columns/_columns'
import { KTCard } from '../../../../_metronic/helpers/components/KTCard'
import { DataTable } from '../../../../_metronic/helpers/components/table/Table'
import { KTCardBody } from '../../../../_metronic/helpers/components/KTCardBody'
import { Spinner } from '../../../../_metronic/helpers/components/Spinner'
import { ListPagination } from '../../../../_metronic/helpers/components/table/pagination/ListPagination'



const List = () => {
  const items = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const pagination = useQueryResponsePagination()
  const {updateState} = useQueryRequest()
  const data = useMemo(() => items, [items])
  const columns = useMemo(() => columnsTable, [])
  return (
    <>
      <KTCard>
        {/* <ListHeader /> */}
        <KTCardBody className='py-4'>
          <DataTable data={data} columns={columns} />
          <ListPagination isLoading={isLoading} pagination={pagination} updateState={updateState} />
          {isLoading && <Spinner />}
        </KTCardBody>

      </KTCard>


    </>
  )
}

const ManageTripListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <List />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { ManageTripListWrapper }
