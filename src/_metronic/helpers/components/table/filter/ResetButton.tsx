import React from 'react';
interface props {
    isLoading: boolean,
    handleClick: () => void
}
const ResetButton = (props: props) => {
    const { isLoading, handleClick } = props;
    return (
        <button
            disabled={isLoading}
            type='button'
            onClick={handleClick}
            className='btn btn-primary fw-bold px-6'
            data-kt-menu-dismiss='true'
            data-kt-user-table-filter='filter'
        >
            Reset
        </button>
    );
}

export default ResetButton;
