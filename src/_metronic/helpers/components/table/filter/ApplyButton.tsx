import React from 'react';
interface props {
    isLoading :boolean ,
    handleClick : ()=>void
}
const ApplyButton = (props :props) => {
    const {isLoading ,handleClick}=props;
    return (
        <button
            type='button'
            disabled={isLoading}
            onClick={handleClick}
            className='btn btn-light btn-active-light-primary fw-bold me-2 px-6'
            data-kt-menu-dismiss='true'
            data-kt-user-table-filter='reset'
        >
            Apply
        </button>
    );
}

export default ApplyButton;
