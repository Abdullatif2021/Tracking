import clsx from 'clsx'
import { PropsWithChildren, useMemo} from 'react'
import {HeaderProps} from 'react-table'

type Props<T extends object>= {
  className?: string
  title?: string
  tableProps: PropsWithChildren<HeaderProps<T>>
}
const CustomHeader = <T extends object>({className, title, tableProps}: Props<T>) => {
  const id = tableProps.column.id
  return (
    <th
      {...tableProps.column.getHeaderProps()}
      className={clsx(
        className,

      )}
      style={{cursor: 'pointer'}}
 
    >
      {title}
    </th>
  )
}

export {CustomHeader}
