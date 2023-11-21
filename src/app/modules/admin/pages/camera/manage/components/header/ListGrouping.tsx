import { useQueryClient, useMutation } from 'react-query'
import { useListView } from '../../core/ListViewProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { useState } from 'react'
import { ListGroupingHoc } from '../../../../../../../../_metronic/helpers/components/table/header/ListGrouping'



const ListGrouping = () => {
  const { selected, clearSelected } = useListView()

  return (
    <ListGroupingHoc selected={selected} onclick={()=>{}} />
  )
}

export { ListGrouping }
