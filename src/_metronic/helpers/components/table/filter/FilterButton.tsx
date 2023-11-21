import React from 'react';
import { KTIcon } from '../../..';
;

const FilterButton = ({isLoading}) => {
    return (
        <button
            disabled={isLoading}
            type='button'
            className='btn btn-light-primary me-3'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
        >
            <KTIcon iconName='filter' className='fs-2' />
            Filter
        </button>
    );
}

export default FilterButton;
