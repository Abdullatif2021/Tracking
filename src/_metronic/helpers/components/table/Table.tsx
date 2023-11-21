import React from 'react'
import { useMemo } from 'react'
import { useTable, ColumnInstance, Row } from 'react-table'
import { CustomHeaderColumn } from '../table/columns/CustomHeaderColumn'
import { CustomRow } from '../table/columns/CustomRow'




const DataTable = ({ ...props }) => {
    const { data, columns } = props;
    const { getTableProps, getTableBodyProps, headers, rows, prepareRow ,headerGroups} = useTable({
        columns,
        data,
    })
    return (

        <div className='table-responsive'>
            <table
                id='kt_table_users'
                className='table   align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
                {...getTableProps()}
            >
                <thead>
                    {/* <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
                        {headers.map((column: ColumnInstance) => (
                            <CustomHeaderColumn key={column.id} column={column} />
                        ))} */}

                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0 fw-bold'>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}

                    {/* </tr> */}
                </thead>
                <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
                    {rows.length > 0 ? (
                        rows.map((row: Row, i) => {
                            prepareRow(row)
                            return <CustomRow row={row} key={`row-${i}-${row.id}`} />
                        })
                    ) : (
                        <tr>
                            <td colSpan={7}>
                                <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                                    No matching records found
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    )
}

export { DataTable }
