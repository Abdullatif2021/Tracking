import {FC, useMemo} from 'react'
import {Header} from './header/Index'
import {columnsTable} from './columns/_columns'
import {KTCard} from '../../../../../../_metronic/helpers/components/KTCard'
import {DataTable} from '../../../../../../_metronic/helpers/components/table/Table'
import {KTCardBody} from '../../../../../../_metronic/helpers/components/KTCardBody'
import {Spinner} from '../../../../../../_metronic/helpers/components/Spinner'
import {Session} from 'inspector'
import { useSession } from '../../core/provider'
interface Props {
  data?: Session[]
}

const Mysession: FC<Props> = () => {
  const {sessions}=useSession();
  const columns = useMemo(() => columnsTable, [])
  const isLoading = false
  return (
    <KTCard>
      <Header />
      <div className='separator separator-dashed my-3'></div>
      <KTCardBody className='py-4'>
        <DataTable data={sessions} columns={columns} />
        {isLoading && <Spinner />}
      </KTCardBody>
    </KTCard>
  )
}

export {Mysession}
