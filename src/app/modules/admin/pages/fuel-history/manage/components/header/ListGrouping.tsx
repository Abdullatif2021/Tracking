import { useQueryClient, useMutation } from 'react-query'
import { useListView } from '../../core/ListViewProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useState } from 'react'
import { ListGroupingHoc } from '../../../../../../../../_metronic/helpers/components/table/header/ListGrouping'



const ListGrouping = () => {
  const [confirm, setConfirm] = useState(false);
  const { selected, clearSelected } = useListView()
  const queryClient = useQueryClient()
  const { query } = useQueryResponse()


 

  return (
    <ListGroupingHoc selected={selected} onclick={()=>{}} />
  )
}

export { ListGrouping }
