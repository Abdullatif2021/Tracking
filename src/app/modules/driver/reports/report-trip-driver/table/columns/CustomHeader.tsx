import clsx from 'clsx'
import { PropsWithChildren, useMemo} from 'react'
import {HeaderProps} from 'react-table'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import { initialQueryState } from '../../../../../../../_metronic/helpers'


type Props<T extends object>= {
  className?: string
  title?: string
  tableProps: PropsWithChildren<HeaderProps<T>>
}
const CustomHeader = <T extends object>({className, title, tableProps}: Props<T>) => {
  const id = tableProps.column.id
  const {state, updateState} = useQueryRequest()

  const isSelectedForSorting = useMemo(() => {
    return state.sort && id in state.sort
  }, [state, id])
  const order: 'asc' | 'desc' | undefined = useMemo(() => state.order, [state])

  const sortColumn = () => {
    // avoid sorting for these columns
    if (id === 'actions' || id === 'selection') {
      return
    }

    if (!isSelectedForSorting) {
      // enable sort asc
      updateState({sort: {
        [id]:'asc'
      }, order: 'asc', ...initialQueryState})
      return
    }

    if (isSelectedForSorting && order !== undefined) {
      if (order === 'asc') {
        // enable sort desc
        updateState({sort: {
          [id]:'desc'
        }, order: 'desc', ...initialQueryState})
        return
      }

      // disable sort
      updateState({sort: undefined, order: undefined, ...initialQueryState})
    }
  }

  return (
    <th
      {...tableProps.column.getHeaderProps()}
      className={clsx(
        className,
        isSelectedForSorting && order !== undefined && `table-sort-${order}`
      )}
      style={{cursor: 'pointer'}}
      onClick={sortColumn}
    >
      {title}
    </th>
  )
}

export {CustomHeader}
