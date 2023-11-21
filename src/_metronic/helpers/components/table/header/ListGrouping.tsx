
import React from 'react'

const ListGroupingHoc = ({ ...props }) => {

    const {selected, onclick } = props;

    return (
        <div className='d-flex justify-content-end align-items-center'>
            <div className='fw-bolder me-5'>
                <span className='me-2'>{selected.length}</span> Selected
            </div>

            <button
                type='button'
                className='btn btn-danger'
                onClick={onclick}
            >
                Delete Selected
            </button>
        </div>
    )
}

export { ListGroupingHoc }
