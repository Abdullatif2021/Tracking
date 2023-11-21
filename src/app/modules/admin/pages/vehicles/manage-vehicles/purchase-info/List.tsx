import { useMemo } from 'react'
import { columnsTable } from './table/columns/_columns'
import { KTCard, KTCardBody } from '../../../../../../../_metronic/helpers'
import { DataTable } from '../../../../../../../_metronic/helpers/components/table/Table';


const ManagePurshaseInfoListWrapper = ({data}) => {
  const columns = useMemo(() => columnsTable, []);
  return (
    <>
      <KTCard>
        <KTCardBody className='py-4'>
          <DataTable data={data} columns={columns} />
        </KTCardBody>
      </KTCard>
    </>
  )
}




export { ManagePurshaseInfoListWrapper }
