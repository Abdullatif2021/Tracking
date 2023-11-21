import  { useMemo } from 'react'
import { ListViewProvider,  } from './core/ListViewProvider'
import { QueryRequestProvider, useQueryRequest } from './core/QueryRequestProvider'
import { QueryResponseProvider, useQueryResponseData, useQueryResponseLoading, useQueryResponsePagination } from './core/QueryResponseProvider'
import { columnsTable } from './table/columns/_columns'
import { KTCard, KTCardBody } from '../../../../../../../_metronic/helpers'
import { ListPagination } from '../../../../../../../_metronic/helpers/components/table/pagination/ListPagination'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'
import { DataTable } from '../../../../../../../_metronic/helpers/components/table/Table'
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
        <KTCardBody className='py-4'>
          <DataTable data={data} columns={columns} />
          <ListPagination isLoading={isLoading} pagination={pagination} updateState={updateState} />
          {isLoading && <Spinner />}
        </KTCardBody>
      </KTCard>
    </>
  )
}

const ManageAdsListWrapper = ({path_id}) => (
  <QueryRequestProvider>
    <QueryResponseProvider path_id={path_id}>
      <ListViewProvider>
        <List />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { ManageAdsListWrapper }
