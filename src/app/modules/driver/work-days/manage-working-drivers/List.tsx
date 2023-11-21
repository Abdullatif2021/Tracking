import { ListHeader } from './components/header/ListHeader'
import { ListViewProvider, useListView, } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider, useQueryResponseLoading, } from './core/QueryResponseProvider'

import { MYCalendar } from './calendar'
import { ModalView } from './components/event-modal/ModalView'
import { Spinner } from '../../../../../_metronic/helpers/components/Spinner'
import { KTCard } from '../../../../../_metronic/helpers/components/KTCard'
import { KTCardBody } from '../../../../../_metronic/helpers/components/KTCardBody'



const List = () => {
  const isLoading = useQueryResponseLoading();
  const { itemIdForUpdate } = useListView()
  return (
    <>
      <KTCard>
        <ListHeader />
        <KTCardBody className='py-4'>
          <MYCalendar />
          {isLoading && <Spinner />}
        </KTCardBody>
        {itemIdForUpdate !== undefined && <ModalView />}
      </KTCard>


    </>
  )
}

const ManageWorkingDaysWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <List />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { ManageWorkingDaysWrapper }
